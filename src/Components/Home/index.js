import './index.css'

const Home = () => {
    return(
        <div className='home-container' id='home'>
            <div className='home-card'>
                <p className='card-para'>Hello, My Name Is </p>
                <h1 className='name'>Ramakrishna</h1>
                <p className='role'>I'am a <span className='role-styl'>Web Developer</span></p>
            </div>
        </div>
    )
}

export default Home