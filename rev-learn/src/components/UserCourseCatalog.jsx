import { useState } from 'react'
import '../styles/course-styles.css'
import CourseCard from './CourseCard'
import FilterSidebar from './FilterSidebar'

//title, description, category, price, rating, reviews

let courseList = [
    {
        title: "Spring Boot Made Easy",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices blandit sapien, in placerat nunc efficitur eu. Cras non ligula eu orci molestie sagittis. Ut vel ornare tellus. Quisque cursus odio ut urna varius, in ultricies ex posuere. Fusce aliquam laoreet ipsum ac rhoncus. Mauris tincidunt ac diam eget maximus. Phasellus posuere libero eu mauris egestas viverra. Vestibulum metus diam, pulvinar quis elementum sit amet, consequat quis lectus. Cras ut ornare felis. Nunc fringilla arcu ex. Mauris eu dolor id ex lobortis viverra. Pellentesque iaculis, purus sed bibendum tincidunt, nunc neque commodo risus, convallis facilisis tortor leo nec augue. Curabitur pellentesque purus sed lacus hendrerit gravida. Ut a libero nunc. Maecenas id magna velit. Nulla ut accumsan lacus.",
        category: "Python",
        price: "$1,000",
        rating: 5
    },
    {
        title: "JS for Everyone",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices blandit sapien, in placerat nunc efficitur eu. Cras non ligula eu orci molestie sagittis. Ut vel ornare tellus. Quisque cursus odio ut urna varius, in ultricies ex posuere. Fusce aliquam laoreet ipsum ac rhoncus. Mauris tincidunt ac diam eget maximus. Phasellus posuere libero eu mauris egestas viverra. Vestibulum metus diam, pulvinar quis elementum sit amet, consequat quis lectus. Cras ut ornare felis. Nunc fringilla arcu ex. Mauris eu dolor id ex lobortis viverra. Pellentesque iaculis, purus sed bibendum tincidunt, nunc neque commodo risus, convallis facilisis tortor leo nec augue. Curabitur pellentesque purus sed lacus hendrerit gravida. Ut a libero nunc. Maecenas id magna velit. Nulla ut accumsan lacus.",
        category: "Javascript",
        price: "$1.50",
        rating: 4.3
    },
    {
        title: "Intro To Java",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices blandit sapien, in placerat nunc efficitur eu. Cras non ligula eu orci molestie sagittis. Ut vel ornare tellus. Quisque cursus odio ut urna varius, in ultricies ex posuere. Fusce aliquam laoreet ipsum ac rhoncus. Mauris tincidunt ac diam eget maximus. Phasellus posuere libero eu mauris egestas viverra. Vestibulum metus diam, pulvinar quis elementum sit amet, consequat quis lectus. Cras ut ornare felis. Nunc fringilla arcu ex. Mauris eu dolor id ex lobortis viverra. Pellentesque iaculis, purus sed bibendum tincidunt, nunc neque commodo risus, convallis facilisis tortor leo nec augue. Curabitur pellentesque purus sed lacus hendrerit gravida. Ut a libero nunc. Maecenas id magna velit. Nulla ut accumsan lacus.",
        category: "Java",
        price: "$499.99",
        rating: 4.1
    },
    {
        title: "Python for Experts",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices blandit sapien, in placerat nunc efficitur eu. Cras non ligula eu orci molestie sagittis. Ut vel ornare tellus. Quisque cursus odio ut urna varius, in ultricies ex posuere. Fusce aliquam laoreet ipsum ac rhoncus. Mauris tincidunt ac diam eget maximus. Phasellus posuere libero eu mauris egestas viverra. Vestibulum metus diam, pulvinar quis elementum sit amet, consequat quis lectus. Cras ut ornare felis. Nunc fringilla arcu ex. Mauris eu dolor id ex lobortis viverra. Pellentesque iaculis, purus sed bibendum tincidunt, nunc neque commodo risus, convallis facilisis tortor leo nec augue. Curabitur pellentesque purus sed lacus hendrerit gravida. Ut a libero nunc. Maecenas id magna velit. Nulla ut accumsan lacus.",
        category: "Python",
        price: "$4,000",
        rating: 4.7
    },
    {
        title: "Medium Python",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices blandit sapien, in placerat nunc efficitur eu. Cras non ligula eu orci molestie sagittis. Ut vel ornare tellus. Quisque cursus odio ut urna varius, in ultricies ex posuere. Fusce aliquam laoreet ipsum ac rhoncus. Mauris tincidunt ac diam eget maximus. Phasellus posuere libero eu mauris egestas viverra. Vestibulum metus diam, pulvinar quis elementum sit amet, consequat quis lectus. Cras ut ornare felis. Nunc fringilla arcu ex. Mauris eu dolor id ex lobortis viverra. Pellentesque iaculis, purus sed bibendum tincidunt, nunc neque commodo risus, convallis facilisis tortor leo nec augue. Curabitur pellentesque purus sed lacus hendrerit gravida. Ut a libero nunc. Maecenas id magna velit. Nulla ut accumsan lacus.",
        category: "Python",
        price: "$50",
        rating: 4.9
    },
    {
        title: "Hard Javascript 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices blandit sapien, in placerat nunc efficitur eu. Cras non ligula eu orci molestie sagittis. Ut vel ornare tellus. Quisque cursus odio ut urna varius, in ultricies ex posuere. Fusce aliquam laoreet ipsum ac rhoncus. Mauris tincidunt ac diam eget maximus. Phasellus posuere libero eu mauris egestas viverra. Vestibulum metus diam, pulvinar quis elementum sit amet, consequat quis lectus. Cras ut ornare felis. Nunc fringilla arcu ex. Mauris eu dolor id ex lobortis viverra. Pellentesque iaculis, purus sed bibendum tincidunt, nunc neque commodo risus, convallis facilisis tortor leo nec augue. Curabitur pellentesque purus sed lacus hendrerit gravida. Ut a libero nunc. Maecenas id magna velit. Nulla ut accumsan lacus.",
        category: "Javascript",
        price: "$50,000",
        rating: 1.0
    },
]

export default function UserCourseCatalog () {

    const [role, setRole] = useState("Student");


    return (
        <>
            <div className="userCourseCatalogOutterContainer">
                {/* <FilterSidebar /> */}
                <div className='userCourseCatalogMainContainer'>

                    <h1 className='title'>RevLearn Courses</h1>
                    <div className='userCardListContainer'>
                        <div className='userCardList'>

                            {courseList.map((x, index) => (
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
                                />
                            ))}

                            {/* <CourseCard />
                            <CourseCard />
                            <CourseCard />
                            <CourseCard /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}