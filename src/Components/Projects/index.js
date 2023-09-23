import './index.css'

const Projects = () => {
    return(
        <div className='projects-container' id='project'>
            <h1 className='project-title'>Projects</h1>
            <div className='project-card-container'>
                <div className='project-card'>
                    <h1 className='my-title'>Trendz Application</h1>
                    <p className='project-discription'>Implemented Trendz application which is a clone for ECommerce applications like Amazon,Flipkart where users can login and can see list of products with search, filters,sort by etc.. POST HTTP API Call and implementing filters by sending them as query parameters to product api calls.</p>
                    <a href='https://nxt-trends-eta.vercel.app/login' target='_blank' rel="noreferrer" className='link'>https://nxt-trends-eta.vercel.app/login</a>
                    <div className='card2'>
                        <h2 className='my-skills'>Skills:</h2>
                        <p className='languages'>REACT JS, JAVASCRIPT, CSS, HTML, API CALLS</p>
                    </div>
                </div>
                <div className='project-card'>
                    <h1 className='my-title'>Wikipedia Search Application</h1>
                    <p className='project-discription'>Developed custom Wikipedia search application where users can search and view curated results and can see detailed explanations in Wikipedia by clicking on the specific result Fetched search results from a server asynchronously using fetch GET HTTP API call.</p>
                    <a href='https://wikipedia-search.vercel.app/' target='_blank' rel="noreferrer" className='link'>https://wikipedia-search.vercel.app/</a>
                    <div className='card2'>
                        <h2 className='my-skills'>Skills:</h2>
                        <p className='languages'>REACT JS, JAVASCRIPT, CSS, HTML, API CALLS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects