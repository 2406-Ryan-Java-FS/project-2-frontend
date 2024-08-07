import { useState, useEffect, useCallback } from 'react';
import '../../styles/course-styles.css'
import CourseCard from './CourseCard'
import SearchBar from '../../components/SearchBar';
import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

let REVLEARN_URL = "http://ec2-100-26-249-35.compute-1.amazonaws.com:8080"

export default function UserCourseCatalog() {

    const [visibleItems, setVisibleItems] = useState(12);
    const [loading, setLoading] = useState(false);
    const [courseList, setCourseList] = useState([])
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [userId, setUserId] = useState(0);
    const [token, setToken] = useState('');

    const [uniqueCategories, setUniqueCategories] = useState([]);

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
    
          // If logged in, fetch enrollments
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
    
          const uniqueEducatorIds = [...new Set(coursesResult.map(course => course.educatorId))];
    
          // Fetch educator details for all unique IDs
          const educatorDetails = await fetchEducatorDetails(uniqueEducatorIds);
    
          // Create a map of educator details by educatorId
          const educatorDetailsMap = new Map();
          educatorDetails.forEach(detail => {
            educatorDetailsMap.set(detail.user.userId, detail);
          });
    
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

          const categoryCounts = coursesResult.reduce((acc, course) => {
            if (acc[course.category]) {
              acc[course.category]++;
            } else {
              acc[course.category] = 1;
            }
            return acc;
          }, {});
  
          const uniqueCategories = Object.keys(categoryCounts).map(category => ({
            name: category,
            count: categoryCounts[category]
          }));

          const allCategory = {
            name: "All",
            count: coursesResult.length
          };

          setUniqueCategories([allCategory, ...uniqueCategories]);
          setCourseList(mergedCourseData);
          setFilteredCourses(mergedCourseData);
    
        } catch (error) {
          console.error('Failed to fetch data:', error);
        }
      };
    
      fetchAllCourses();
    }, [userId, token]);
    
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
    if (loading || visibleItems >= courseList.length) return;

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
                uniqueCategories={uniqueCategories}
              />
            </div>

          {courseList.length > 0 ?
            (
              <div className='userCardListContainer'>
                <div className='userCardList'>
                  {filteredCourses.slice(0, visibleItems).map((x, index) => (
                    <Link
                      to={`/course/detail/${x.courseId}`}
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