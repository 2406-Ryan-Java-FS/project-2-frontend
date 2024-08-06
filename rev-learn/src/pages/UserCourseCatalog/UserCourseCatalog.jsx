import { useState, useEffect, useCallback } from 'react';
import '../../styles/course-styles.css'
import CourseCard from './CourseCard'
import SearchBar from '../../components/SearchBar';
import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

let REVLEARN_URL = "http://localhost:8080"

export default function UserCourseCatalog() {

    const [visibleItems, setVisibleItems] = useState(12);
    const [loading, setLoading] = useState(false);
    const [courseList, setCourseList] = useState([])
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [userId, setUserId] = useState(0);
    const [token, setToken] = useState('');

    useEffect(() => {
      const loggedInUser = localStorage.getItem('loggedInUser');
      if (loggedInUser) {
        const userObject = JSON.parse(loggedInUser);
        setToken(userObject.token);
        setUserId(userObject.userId);
      }
    }, []);

    useEffect(() => {
      const fetchAllCourses = async () => {
        try {
          const coursesResponse = await fetch(`${REVLEARN_URL}/courses`, { method: 'GET' });
          const coursesResult = await coursesResponse.json();
    
          let completedEnrollments = [];
    
          // If logged in, fetch enrollments as well
          if (userId && token) {
            const enrollmentsResponse = await fetch(`${REVLEARN_URL}/enrollments/students/${userId}/completed`, {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
            });
            completedEnrollments = await enrollmentsResponse.json();
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
          setFilteredCourses(mergedCourseData);
    
        } catch (error) {
          console.error('Failed to fetch data:', error);
        }
      };
    
      fetchAllCourses();
    }, [userId, token]);

  const role = "Student";
  const image = "https://www.fourpaws.com/-/media/Project/OneWeb/FourPaws/Images/articles/cat-corner/cats-that-dont-shed/siamese-cat.jpg";

  // Load more items when user scrolls to the bottom
  const loadMoreItems = useCallback(() => {
    if (loading || visibleItems >= courseList.length) return; // Avoid multiple loads and ensure we don't load beyond the available items

        setLoading(true);
        setTimeout(() => {
            setVisibleItems((prev) => Math.min(prev + 12, courseList.length));
            setLoading(false);
        }, 100); // Simulate delay, to remove
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