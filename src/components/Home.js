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
                    <p>Hi! I'm Abby Gillham.</p>
                </header>
            </div>
        </div>
        <body className = "infoBoxes">
            <div className = "leftSide">
                <section className = "aboutMe">
                    <p className = "aboutmetext">Hi, I'm Abby Gillham! 
                                                    I'm a sophomore at the University of Illinois Urbana-Champaign 
                                                    studying computer science. As of right now, I'm not sure what 
                                                    field of computer science I want to go into, but I'm interested 
                                                    in diving deeper into cybersecurity and web/mobile development. 
                                                    I'm currently looking for an internship for summer 2025. 
                                                    This website showcases some of my experience and technical skills. Please enjoy!</p>
                </section>
                <section className = "Experience">
                    <p className = "exptext">Experience: Illini EV Concept, Women in Computer Science, etc. etc. etc. 
                                            </p>
                </section>
            </div>
            <div className = "rightSide">
                <section className = "technicalSkills">
                    <p className = "techtext">Technical skills: Java, C++, etc. etc. etc. </p>
                </section>
            </div>
        </body>
        </div>
    );
}

export default Home;