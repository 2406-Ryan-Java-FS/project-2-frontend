import { useState, useEffect, useCallback } from 'react';
import '../../styles/course-styles.css'
import CourseCard from './CourseCard'
import SearchBar from '../../components/SearchBar';
import { CourseDummyData, enrollmentStatusDummyData } from './CourseDummyData';
import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

let REVLEARN_URL = "http://localhost:8080"

export default function UserCourseCatalog() {

    const [visibleItems, setVisibleItems] = useState(12);
    const [loading, setLoading] = useState(false);
    // let courseList = CourseDummyData;
    const [courseList, setCourseList] = useState([])
    const [filteredCourses, setFilteredCourses] = useState([]);

    const [loginDummyId, setLoginDummyId] = useState(0);


    useEffect(() => {
      const fetchAllCourses = async () => {
        const fetchCoursesPromise = fetch(`${REVLEARN_URL}/courses`, { method: 'GET' })
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Network response was not ok');
            }
          });
    
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Request timed out')), 3000)
        );
    
        try {
          const coursesResult = await Promise.race([fetchCoursesPromise, timeoutPromise]);
    
          let completedEnrollments = [];
          if (loginDummyId) {
            const fetchEnrollmentsPromise = fetch(`http://localhost:8080/enrollments/students/${loginDummyId}/completed`, { method: 'GET' })
              .then(response => {
                if (response.ok) {
                  return response.json();
                } else {
                  throw new Error('Network response was not ok');
                }
              });
    
            const enrollmentsTimeoutPromise = new Promise((_, reject) =>
              setTimeout(() => reject(new Error('Request timed out')), 3000)
            );
    
            completedEnrollments = await Promise.race([fetchEnrollmentsPromise, enrollmentsTimeoutPromise]);
          }
    
          const mergedCourseData = coursesResult.map(course => {
            const status = completedEnrollments.find(status => status.courseId === course.courseId);
            return {
              ...course,
              enrolled: status ? status.enrolled : false,
              completed: false
            };
          });
    
          setCourseList(mergedCourseData);
          setFilteredCourses(mergedCourseData); // Initialize filteredCourses with merged data
    
        } catch (error) {
          console.error(error);
    
          const mergedDummyData = CourseDummyData.map(course => {
            const status = enrollmentStatusDummyData.find(status => status.courseId === course.courseId);
            return {
              ...course,
              enrolled: status ? status.enrolled : false,
              completed: false
            };
          });
    
          setCourseList(mergedDummyData);
          setFilteredCourses(mergedDummyData); // Use dummy data on error
        }
      };
    
      fetchAllCourses();
    }, [loginDummyId]);

    // useEffect(() => {
    //   setFilteredCourses(courseList)
    // }, [courseList])


    const role = "Student";
    const image = "https://www.fourpaws.com/-/media/Project/OneWeb/FourPaws/Images/articles/cat-corner/cats-that-dont-shed/siamese-cat.jpg";

    // Load more items when user scrolls to the bottom
    const loadMoreItems = useCallback(() => {
        if (loading || visibleItems >= courseList.length) return; // Avoid multiple loads and ensure we don't load beyond the available items

        setLoading(true);
        setTimeout(() => {
            setVisibleItems((prev) => Math.min(prev + 12, courseList.length));
            setLoading(false);
        }, 500); // Simulate delay, to remove
    }, [loading, visibleItems, courseList.length]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || window.pageYOffSet || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;

            if (scrollTop + clientHeight >= scrollHeight - 5) {
                loadMoreItems();
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [loadMoreItems]);

    // course filter
    const handleSearch = ({ course, category, sortOption }) => {
      const filtered = courseList.filter((c) => {
        const matchesCategory = category === "All" || c.category === category;
        const matchesCourse =
          course === "" || c.title.toLowerCase().includes(course.toLowerCase());
        return matchesCategory && matchesCourse;
      });
  
      sortList(sortOption, filtered);
      setFilteredCourses(filtered);
    };
  
    // Sorts filtered lists by the given sort option
    function sortList(sortOption, filtered) {
      switch (sortOption) {
        case "Price: Low to High":
          filtered.sort((a, b) => a.price - b.price);
          break;
    
        case "Price: High to Low":
          filtered.sort((a, b) => b.price - a.price);
          break;
  
        case "Rating: Low to High":
          filtered.sort((a, b) => a.rating - b.rating);
          break;
  
        case "Rating: High to Low":
          filtered.sort((a, b) => b.rating - a.rating);
          break;
  
        default:
          break;
      }
    }

    return (
    <>

        <div className="userCourseCatalogOutterContainer">
          <div className='userCourseCatalogMainContainer'>
            <h1 className='title'>RevLearn Courses</h1>
            <div style={{ position:"absolute", top:"210px", display:"flex" }}>
              <button onClick={() => setLoginDummyId(1)}>Login as userId 1</button>
              <button onClick={() => setLoginDummyId(2)}>Login as userId 2</button>
              <div>Loggedin: {loginDummyId && loginDummyId}</div>
            </div>
            <div className="searchBarContainer">
              <SearchBar onSearch={handleSearch} />
            </div>

          {courseList.length > 0 ?
            (
              <div className='userCardListContainer'>
                <div className='userCardList'>
                  {filteredCourses.slice(0, visibleItems).map((x, index) => (
                    <Link
                      to={`/course/detail/${x.courseId}`}
                      // to={`/course/detail`} 
                      key={index}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <CourseCard
                        title={x.title}
                        description={x.description}
                        category={x.category}
                        price={x.price}
                        educator={x.educator}
                        rating={x.rating}
                        role={role}
                        imageStatic={image}
                        // image={x.image}
                        image={x.imgUrl}
                        enrolled={x.enrolled}
                        courseId={x.courseId}
                      />
                    </Link>
                  ))}
                </div>
                {loading && (
                  <LoadingSpinner />
                )}
              </div>
            )
            :
            (<LoadingSpinner />)
          }
        </div>

      </div>


    </>
  )
}