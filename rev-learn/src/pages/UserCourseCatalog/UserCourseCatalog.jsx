import { useState, useEffect, useCallback } from 'react';
import '../../styles/course-styles.css'
import CourseCard from './CourseCard'
import SearchBar from '../../components/SearchBar';
import CourseDummyData from './CourseDummyData';
import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

let REVLEARN_URL = "http://localhost:8080"

export default function UserCourseCatalog() {

    const [visibleItems, setVisibleItems] = useState(12);
    const [loading, setLoading] = useState(false);
    // let courseList = CourseDummyData;
    const [courseList, setCourseList] = useState([])
    const [filteredCourses, setFilteredCourses] = useState([]);


    useEffect(() => {
      const fetchAllCourses = async () => {
          const fetchPromise = fetch(`${REVLEARN_URL}/courses`, { method: 'GET' })
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
              const result = await Promise.race([fetchPromise, timeoutPromise]);
              setCourseList(result);
              // console.log(result);
          } catch (error) {
              console.error(error);
              setCourseList(CourseDummyData); // Use dummy data on timeout or fetch error
          }
      };

      fetchAllCourses();
    }, []);

    // useEffect(() => {
    //   const fetchAllCourses = async () => {
    //     try {
    //       const response = await fetch(`${REVLEARN_URL}/courses`, {
    //         method: "GET"
    //       })

    //       if (response.ok) {
    //         const json = await response.json()
    //         setCourseList(json)
    //         console.log(courseList)
    //       } else {
    //         console.log("ERROR")
    //       }
    //     } catch (error) {
    //       console.error(error)
    //     }
    //   }
    //   fetchAllCourses()
    // }, [])

    useEffect(() => {
      setFilteredCourses(courseList)
    }, [courseList])


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
          filtered.sort(
            (a, b) =>
              //parse the price to remove any character that is not a digit or decimal point
              parseFloat(a.price.replace(/[^0-9.-]+/g, "")) -
              parseFloat(b.price.replace(/[^0-9.-]+/g, ""))
          );
          break;
  
        case "Price: High to Low":
          filtered.sort(
            (a, b) =>
              parseFloat(b.price.replace(/[^0-9.-]+/g, "")) -
              parseFloat(a.price.replace(/[^0-9.-]+/g, ""))
          );
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
                      to={`/course/${x.courseId}`}
                      // to={`/course/detail`} 
                      key={index}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <CourseCard
                        // key={index}
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