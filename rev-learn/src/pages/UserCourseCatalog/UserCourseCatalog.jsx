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
    
          // Extract unique educator IDs
          const uniqueEducatorIds = [...new Set(coursesResult.map(course => course.educatorId))];
    
          // Fetch educator details for all unique IDs
          const educatorDetails = await fetchEducatorDetails(uniqueEducatorIds);
    
          // Create a map of educator details by educatorId for quick lookup
          const educatorDetailsMap = new Map();
          educatorDetails.forEach(detail => {
            educatorDetailsMap.set(detail.user.userId, detail);
          });
    
          // Merge course data with educator details
          const mergedCourseData = coursesResult.map(course => {
            const status = completedEnrollments.find(status => status.courseId === course.courseId);
            const educatorDetail = educatorDetailsMap.get(course.educatorId);
    
            return {
              ...course,
              enrolled: status ? status.enrolled : false,
              completed: false,
              educatorFirstName: educatorDetail ? educatorDetail.user.firstName : '',
              educatorLastName: educatorDetail ? educatorDetail.user.lastName : '',
              educatorDegreeLevel: educatorDetail ? educatorDetail.educator.degreeLevel : '',
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
    
    // Function to fetch educator details for an array of educator IDs
    const fetchEducatorDetails = async (educatorIds) => {
      const responses = await Promise.all(educatorIds.map(educatorId =>
        fetch(`${REVLEARN_URL}/users/${educatorId}`, {
          method: 'GET',
        }).then(response => response.json())
      ));
      return responses;
    };

  // Load more items when user scrolls to the bottom
  const loadMoreItems = useCallback(() => {
    if (loading || visibleItems >= courseList.length) return; // Avoid multiple loads and ensure we don't load beyond the available items

    setLoading(true);
    setTimeout(() => {
      setVisibleItems((prev) => Math.min(prev + 12, courseList.length));
      setLoading(false);
    }, 100);
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

  return (
    <>

      <div className="userCourseCatalogOutterContainer">
          <div className='userCourseCatalogMainContainer'>
            <h1 className='title'><span className='revLearnSpan'>Rev Learn</span> Courses</h1>
            <div className="searchBarContainer">
              <SearchBar
                courseList={courseList}
                setFilteredCourses={setFilteredCourses}
              />
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
                        // role={role}
                        // imageStatic={image}
                        // image={x.image}
                        image={x.imgUrl}
                        enrolled={x.enrolled}
                        courseId={x.courseId}
                        educatorFirstName={x.educatorFirstName}
                        educatorLastName={x.educatorLastName}
                        educatorDegreeLevel={x.educatorDegreeLevel}
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