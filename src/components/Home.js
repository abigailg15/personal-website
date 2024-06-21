import './Components.css';
function Home() {
    return(
        <div className = "Main">
            <div className = "Top_Title">
            <img 
                className = "myProfile"
                src = "/myprofile.jpg"
                alt = "profilepic"
                width = "300"
                height = "auto"
                />
            <div className = "Hello_Contacts">
                <header className = "Hello">
                    <p className = "Hi">Hi! I'm Abby Gillham.</p>
                    <p className = "caption">computer science @ uiuc</p>
                </header>
            </div>
        </div>
        <div className = "Contacts">
                <img
                    className = "email"
                    src = "/2190981_circle_email_inbox_letter_mail_icon.png"
                    alt = "myemail"
                    width = "35px"
                    height = "35px"
                />
                <img
                    className = "linkedin"
                    src = "linkedin(1).png"
                    alt = "mylinkedin"
                    width = "36px"
                    height = "36px"
                />
                <img
                    className = "github"
                    src = "github.png"
                    alt = "mygithub"
                    width = "35px"
                    height = "35px"
                />
            </div>
        <body className = "infoBoxes">
            <div className = "leftSide">
                <section className = "aboutMe">
                    <h2 className = "aboutmetitle">About Me</h2>
                    <p className = "aboutmetext">Hi, I'm Abby Gillham! 
                                                    I'm a sophomore at the University of Illinois Urbana-Champaign 
                                                    studying computer science. As of right now, I'm not sure what 
                                                    field of computer science I want to go into, but I'm interested 
                                                    in diving deeper into cybersecurity and web/mobile development. 
                                                    I'm currently looking for an internship for summer 2025. 
                                                    This website, which I built using React.js, showcases some of my 
                                                    experience and technical skills. Please enjoy!</p>
                </section>
                <section className = "Experience">
                    <h2 className = "exptitle">Experience</h2>
                    <p className = "exptext">Experience: Illini EV Concept, Women in Computer Science, etc. etc. etc. 
                                            </p>
                </section>
            </div>
            <div className = "rightSide">
                <section className = "technicalSkills">
                    <h2 className = "techtitle">Technical Skills</h2>
                    <p className = "techtext">Technical skills: Java, C++, etc. etc. etc. </p>
                </section>
                <section className = "relevantCoursework">
                    <h2 className = "relctitle">Relevant Coursework</h2>
                    <p className = "relctext">Cs 128, cs 124, etc. etc. </p>
                </section>
            </div>
        </body>
        </div>
    );
}

export default Home;