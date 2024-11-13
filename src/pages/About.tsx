const About = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <h1>About Me</h1>
                <div className="about-info">
                    <div className="profile-section">
                        <img 
                            src="/path-to-your-image.jpg" 
                            alt="Profile" 
                            className="profile-image"
                        />
                        <h2>Your Name</h2>
                        <p className="title">Your Title / Position</p>
                    </div>
                    
                    <div className="bio-section">
                        <h3>Biography</h3>
                        <p>
                            Write your professional biography here. Include your experience,
                            expertise, and what drives you in your field. Share your journey
                            and what makes you unique.
                        </p>
                        
                        <h3>Skills</h3>
                        <ul className="skills-list">
                            <li>Skill 1</li>
                            <li>Skill 2</li>
                            <li>Skill 3</li>
                            <li>Skill 4</li>
                        </ul>

                        <h3>Education</h3>
                        <div className="education-item">
                            <h4>Degree Name</h4>
                            <p>University Name</p>
                            <p>Year - Year</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;