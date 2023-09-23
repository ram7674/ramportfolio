import './index.css'

const Skills = () => {
    return(
        <div className='skills-container' id='skill'>
            <h1 className='skills-heading'>Skills</h1>
            <div className='card-container'>
                <div className='card-item1'>
                    <div className='cards box1'>
                       <img src='images/react.png' alt='skill-logo'  className='skill-logo' />
                       <p className='skill-title'>React</p>
                    </div>
                    <div className='cards box2'>
                       <img src='images/html.png' alt='skill-logo'  className='skill-logo' />
                       <p className='skill-title'>HTML</p>
                    </div>
                    <div className='cards box3'>
                       <img src='images/css.png' alt='skill-logo'  className='skill-logo' />
                       <p className='skill-title'>CSS</p>
                    </div>
                </div>
                <div  className='card-item1'>
                    <div className='cards box4'>
                       <img src='images\javascript.png' alt='skill-logo'  className='skill-logo' />
                       <p className='skill-title'>JAVASCRIPT</p>
                    </div>
                    <div className='cards box5'>
                       <img src='images\bootstrap.png' alt='skill-logo'  className='skill-logo' />
                       <p className='skill-title'>BOOTSTRAP</p>
                    </div>
                    <div className='cards box6'>
                       <img src='images/github.png' alt='skill-logo'  className='skill-logo' />
                       <p className='skill-title'>GITHUB</p>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Skills