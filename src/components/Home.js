import './Components.css';
import Navbar from './Navbar';


function Home() {
    return(
        <div className = "Main">
            <Navbar /> 
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
        <nav className = "Contacts">
            <a href = "mailto:abigailg0314@gmail.com" target="_blank" rel="noreferrer">
            <svg className = "email" version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="35px" height="35px" viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="black" stroke="none">
            <path d="M2315 5109 c-800 -83 -1501 -518 -1927 -1196 -487 -774 -516 -1777
            -75 -2578 200 -364 487 -676 841 -913 238 -159 600 -311 876 -366 214 -43 295
            -51 530 -51 236 0 333 10 532 51 880 184 1615 842 1898 1702 92 278 125 491
            125 802 0 301 -32 513 -116 775 -124 390 -330 728 -622 1024 -399 404 -893
            653 -1462 737 -123 18 -478 26 -600 13z m1740 -1561 c14 -6 24 -15 23 -20 -4
            -11 -1508 -1298 -1518 -1298 -9 0 -1514 1288 -1518 1299 -10 28 72 30 1515 30
            1106 1 1478 -2 1498 -11z m-2321 -828 c389 -333 719 -613 732 -623 29 -22 89
            -32 137 -23 26 5 208 155 793 656 l759 650 3 -833 c1 -457 0 -846 -3 -864 -7
            -41 -50 -92 -92 -109 -27 -12 -284 -14 -1503 -14 -1625 0 -1512 -5 -1566 66
            l-29 37 -3 860 -2 859 32 -28 c18 -16 352 -301 742 -634z"/>
            </g>
            </svg>
            </a>
            <a href = "https://www.linkedin.com/in/abigail-gillham/" target="_blank" rel="noreferrer">
                <svg className = "linkedin" version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="35px" height="35px" viewBox="0 0 448.000000 448.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,448.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                    <path d="M1990 4469 c-738 -83 -1405 -541 -1737 -1194 -174 -342 -253 -664
                    -253 -1032 0 -355 72 -665 230 -990 260 -534 729 -944 1299 -1133 561 -187
                    1145 -151 1676 104 466 224 814 569 1040 1031 112 228 173 423 212 675 24 158
                    24 472 0 628 -61 389 -216 757 -445 1052 -378 486 -930 793 -1547 860 -106 12
                    -368 11 -475 -1z m-474 -1034 c61 -18 127 -73 156 -129 32 -63 36 -159 8 -224
                    -48 -111 -151 -168 -289 -160 -88 5 -139 27 -194 84 -54 56 -71 108 -65 200 6
                    84 31 131 100 187 66 53 187 71 284 42z m1537 -700 c211 -44 353 -191 419
                    -430 21 -77 22 -102 26 -602 l3 -523 -255 0 -254 0 -4 468 c-4 402 -7 474 -21
                    518 -38 116 -116 176 -230 177 -111 1 -193 -51 -249 -156 -23 -41 -23 -48 -28
                    -522 l-5 -480 -252 -3 -253 -2 0 765 0 765 255 0 255 0 0 -102 0 -101 28 39
                    c74 101 197 176 322 197 57 10 179 6 243 -8z m-1383 -790 l0 -765 -255 0 -255
                    0 0 765 0 765 255 0 255 0 0 -765z"/>
                    </g>
                </svg>
                </a>
                <a href = "https://github.com/abigailg15" target = "_blank" rel = "noreferrer">
                <svg className = "github" version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="35px" height="35px" viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#000000" stroke="none">
                <path d="M2360 5049 c-154 -11 -357 -47 -516 -93 -902 -259 -1603 -1017 -1790
                -1934 -136 -669 -8 -1355 354 -1908 255 -390 580 -686 968 -886 141 -73 341
                -154 403 -164 58 -9 109 19 133 73 18 40 18 60 12 286 l-7 243 -86 -14 c-97
                -15 -256 -9 -386 13 -105 19 -211 71 -278 139 -53 53 -67 76 -136 229 -63 139
                -135 231 -232 297 -66 46 -121 106 -117 128 6 30 48 43 121 38 141 -10 288
                -113 393 -274 72 -110 143 -179 230 -222 62 -31 79 -35 169 -38 103 -4 207 12
                291 44 41 16 43 18 58 85 19 86 56 164 106 228 l39 49 -82 11 c-264 38 -452
                102 -627 215 -229 148 -365 379 -431 731 -20 109 -23 389 -5 492 29 167 98
                319 200 445 l45 55 -20 62 c-52 168 -42 372 28 574 18 50 22 52 103 48 118 -6
                371 -108 543 -218 l71 -46 56 11 c30 6 87 18 127 27 271 58 655 58 926 0 40
                -9 97 -21 127 -27 l55 -10 95 58 c226 137 484 230 575 206 26 -7 33 -17 53
                -75 43 -125 55 -210 50 -351 -4 -95 -11 -148 -26 -195 l-21 -64 44 -54 c89
                -109 155 -244 192 -389 22 -89 25 -417 4 -544 -32 -198 -114 -406 -210 -532
                -165 -217 -464 -366 -843 -418 l-87 -12 39 -49 c47 -60 85 -137 106 -221 14
                -52 17 -137 20 -503 5 -490 5 -489 72 -521 46 -21 83 -15 229 42 738 284 1320
                932 1533 1703 141 513 111 1108 -80 1601 -172 440 -475 842 -848 1122 -405
                303 -865 474 -1367 507 -175 12 -192 12 -375 0z"/>
                </g>
                </svg>
                </a>
            </nav>
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
                    <p className = "exptext">
                    <strong>City University of Hong Kong </strong>
                    (June 2024-August 2024)
                    <br />
                    <i>Research Intern</i>
                    <ul>
                        <li>Served as a research intern under a professor and two PhD students, designing an approximation algorithm for a theoretical scheduling scenario </li>
                        <li>Attended biweekly meetings and performed research daily on different types of approximation algorithms</li>
                        <li>Wrote a paper on the findings of the optimal algorithm</li>
                    </ul>
                    <strong>Illini EV Concept </strong>
                    (September 2023-Present)
                    <br />
                    <i>Business Operations Project Lead
                    </i>
                    <ul>
                        <li>Managed inventory of purchases for car parts in a collaborative environment</li>
                        <li>Developed and implemented <strong>Excel-based forms</strong> and <strong>CSV files</strong> to keep track of <strong>100+</strong> items being taken or returned from the club inventory, integrating both user input and automatic logs</li>
                        <li>Utilized <strong>Power Automate</strong> to efficiently parse purchase order emails for relevant information</li>
                    </ul>
                    <strong>Women in Computer Science </strong>
                    (September 2023-May 2024)
                    <br />
                    <i>Mentoring Committee Member</i>
                    <ul>
                        <li>Selected as one of 8 members from <strong>50+</strong> applicants for the Women in Computer Science mentoring committee</li>
                        <li>Organized events such as a computer science research panel, reaching out to computer science researchers at the university to speak at an event</li>
                        <li>Competed in hackathon <strong>Code Ada</strong>, sponsored by Women in Computer Science, and won first place in the databases division against 13 other teams</li>
                    </ul>
                    <strong>UIUC Information Computing Services </strong>
                    (August 2024-Present)
                    <br />
                    <i>Site Consultant</i>
                    <ul>
                        <li>Troubleshooted hardware and software issues in various computer labs around campus</li>
                        <li>Helped and taught clients how to use the lab computers</li>
                        <li>Ensured cleanliness of lab, cleaning computers regularly throughout each shift</li>
                    </ul>
                    </p>
                </section>
            </div>
            <div className = "rightSide">
                    <a href = "https://docs.google.com/document/d/1nDc71hfmWUrA7e37TrFzz_yezPhUWq-0/" target = "_blank" rel = "noreferrer" className = 
                    "resume">
                        <section>
                            <strong className = "view_resume">View my resume!</strong>
                        </section>
                    </a>
                <section className = "technicalSkills">
                    <h2 className = "techtitle">Technical Skills</h2>
                    <p className = "techtext">
                        <strong>Languages</strong>
                            <ul>
                                <li>Java</li>
                                <li>C++</li>
                                <li>Python</li>
                                <li>HTML/CSS</li>
                                <li>JavaScript</li>
                            </ul>
                        <strong>Developer Tools</strong>
                            <ul>
                                <li>VSCode</li>
                                <li>Git/GitHub</li>
                                <li>Docker</li>
                                <li>Android Studio</li>
                            </ul>
                        <strong>Software/Libraries</strong>
                            <ul>
                                <li>Excel</li>
                                <li>Power Automate</li>
                                <li>React.js</li>
                                <li>Microsoft Teams</li>
                                <li>Asana</li>
                            </ul>
                    </p>
                </section>
                <section className = "relevantCoursework">
                    <h2 className = "relctitle">Relevant Coursework</h2>
                    <p className = "relctext">
                        <ul>
                            <li><strong>CS 173</strong>: Discrete Structures</li>
                            <li><strong>CS 124</strong>: Introduction to Computer Science (Java)</li>
                            <li><strong>CS 128</strong>: Introduction to Computer Science II (C++)</li>
                            <li><strong>Math 241</strong>: Calculus III (Multivariable Calculus)</li>
                            <li><strong>Math 257</strong>: Linear Algebra (with applied aspects in Python)</li>
                        </ul>
                    </p>
                </section>
            </div>
        </body>
        <div className = "footer">
        © 2024 Abigail Gillham
        </div>
        </div>
    );
}

export default Home;