import '../styles/course-styles.css'

export default function FilterSidebar () {

    return (
        <>
        <div className="filterMainContainer">
            <div className='filterSearchContainer'>
                <div>Search: </div>
                <input type='text'  className='searchBar' />
            </div>

        </div>
        </>

    )
}