import { useState, useEffect, useRef, useCallback } from 'react';
import '../../styles/course-styles.css'
import CourseCard from './CourseCard'
import SearchBar from '../../components/SearchBar';
import CourseDummyData from './CourseDummyData';

export default function UserCourseCatalog() {
    const [visibleItems, setVisibleItems] = useState(12); // Initial number of items (4 rows x 3 items each)
    const [loading, setLoading] = useState(false);
    const [filteredCourses, setFilteredCourses] = useState(courseList);

    const role = "Student";
    const image = "https://www.fourpaws.com/-/media/Project/OneWeb/FourPaws/Images/articles/cat-corner/cats-that-dont-shed/siamese-cat.jpg";
    const courseList = CourseDummyData;

    // Load more items when user scrolls to the bottom
    const loadMoreItems = useCallback(() => {
        if (loading || visibleItems >= courseList.length) return; // Avoid multiple loads and ensure we don't load beyond the available items

        setLoading(true);
        setTimeout(() => {
            setVisibleItems((prev) => Math.min(prev + 12, courseList.length)); // Load 12 more items or the remaining items if less than 12
            setLoading(false);
        }, 500); // Simulate a delay (e.g., for loading from an API)
    }, [loading, visibleItems]);

    // Add scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || window.pageYOffSet || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;

            if (scrollTop + clientHeight >= scrollHeight - 5) { // Trigger when near the bottom
                loadMoreItems();
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [loadMoreItems]);

    // merging

  
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
                    <div className='userCardListContainer'>
                        <div className='userCardList'>
                            {/* {courseList.slice(0, visibleItems).map((x, index) => ( */}
                            {filteredCourses.slice(0, visibleItems).map((x, index) => (
                                <CourseCard
                                    key={index}
                                    title={x.title}
                                    description={x.description}
                                    category={x.category}
                                    price={x.price}
                                    // image={x.image}
                                    educator={x.educator}
                                    rating={x.rating}
                                    role={role}
                                    imageStatic={image}
                                    image={x.image}
                                />
                            ))}
                        </div>
                        {loading && (
                            <div className="spinner-container">
                                <svg className="spinner" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="spinner-path" d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" />
                                    <path className="spinner-path-second" d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}