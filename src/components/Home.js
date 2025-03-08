import "./Components.css";
import "./Navbar.css";
import "./Popup.css";
import "./Experience.css";
import Navbar from "./Navbar";
import Popup from "./Popup";
import { useState } from "react";

function Home() {
  const [CityUPopup, setCityUPopup] = useState(false);
  const [EVCPopup, setEVCPopup] = useState(false);
  const [WCSPopup, setWCSPopup] = useState(false);
  const [ICSPopup, setICSPopup] = useState(false);
  if (CityUPopup || EVCPopup || WCSPopup || ICSPopup) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="Main">
      <Navbar />
      <div className="Top_Title">
        <img
          className="myProfile"
          src="/profile2.png"
          alt="profilepic"
          width="300"
          height="auto"
        />
        <div className="Hello_Contacts">
          <header className="Hello">
            <p className="Hi">Hi! I'm Abby Gillham.</p>
            <p className="caption">computer science @ uiuc</p>
          </header>
        </div>
      </div>

      <nav className="Contacts">
        <a
          href="mailto:abigailg0314@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            className="email"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="35px"
            height="35px"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="black"
              stroke="none"
            >
              <path
                d="M2315 5109 c-800 -83 -1501 -518 -1927 -1196 -487 -774 -516 -1777
            -75 -2578 200 -364 487 -676 841 -913 238 -159 600 -311 876 -366 214 -43 295
            -51 530 -51 236 0 333 10 532 51 880 184 1615 842 1898 1702 92 278 125 491
            125 802 0 301 -32 513 -116 775 -124 390 -330 728 -622 1024 -399 404 -893
            653 -1462 737 -123 18 -478 26 -600 13z m1740 -1561 c14 -6 24 -15 23 -20 -4
            -11 -1508 -1298 -1518 -1298 -9 0 -1514 1288 -1518 1299 -10 28 72 30 1515 30
            1106 1 1478 -2 1498 -11z m-2321 -828 c389 -333 719 -613 732 -623 29 -22 89
            -32 137 -23 26 5 208 155 793 656 l759 650 3 -833 c1 -457 0 -846 -3 -864 -7
            -41 -50 -92 -92 -109 -27 -12 -284 -14 -1503 -14 -1625 0 -1512 -5 -1566 66
            l-29 37 -3 860 -2 859 32 -28 c18 -16 352 -301 742 -634z"
              />
            </g>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/abigail-gillham/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            className="linkedin"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="35px"
            height="35px"
            viewBox="0 0 448.000000 448.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,448.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M1990 4469 c-738 -83 -1405 -541 -1737 -1194 -174 -342 -253 -664
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
                    0 0 765 0 765 255 0 255 0 0 -765z"
              />
            </g>
          </svg>
        </a>
        <a
          href="https://github.com/abigailg15"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            className="github"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="35px"
            height="35px"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M2360 5049 c-154 -11 -357 -47 -516 -93 -902 -259 -1603 -1017 -1790
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
                303 -865 474 -1367 507 -175 12 -192 12 -375 0z"
              />
            </g>
          </svg>
        </a>
      </nav>

      {/* Popups */}
      <Popup trigger={CityUPopup} setTrigger={setCityUPopup}>
        <strong style={{ fontSize: "30px" }}>
          City University of Hong Kong
        </strong>
        <br></br>
        <strong>June 2024-August 2024</strong>
        <br />
        <i>Research Intern</i>
        <p>
          At the City University of Hong Kong, I was a research intern under
          professor Minming Li and worked with two other PhD students to design
          an optimal approximation algorithm for a theoretical scheduling
          scenario.
          <br></br>I attended biweekly meetings and performed research daily on
          different types of approximation algorithms, such as the greedy
          algorithm, vertex cover algorithm, and submodular maximization.
          <br></br>
          For my final report, I created a presentation on my ideal algorithm
          and presented it to my professor as well as at a research symposium to
          over 600 attendees!
        </p>
        <div className="cityUImages">
          <img
            className="cityUProf"
            src="/images/cityuprof.jpg"
            alt="cityUProf"
            width="350"
            height="auto"
          />
          <img
            className="cityUStudy"
            src="/images/cityustudy.jpg"
            alt="cityUStudy"
            width="350"
            height="auto"
          />
          <img
            className="cityUSymposium"
            src="/images/cityusymposium.jpg"
            alt="cityUSymposium"
            width="350"
            height="auto"
          />
        </div>
      </Popup>

      <Popup trigger={EVCPopup} setTrigger={setEVCPopup}>
        <strong style={{ fontSize: "30px" }}>Illini EV Concept</strong>
        <br></br>
        <strong>September 2023-Present</strong>
        <br />
        <i>Business Operations Lead</i>
        <p>
          As the business operations team lead of Illini EV Concept, I do a lot
          of administrative work to ensure that the club runs smoothly and gets
          the funds it needs. My work consists of reaching out/organizing
          meetings with sponsors, organizing and hosting events, and managing
          the team's inventory system.
          <br></br>
          I've developed a CSV-based inventory system for the team, but we are
          currently working on a more optimized server using Python to keep
          track of items. Additionally, I designed a web parser using Power
          Automate to automatically scrape purchase order emails and send
          relevant information into an Excel file.
          <br></br>
          Through this club I've also done some web development, using WordPress
          to design the team's current website. I'm currently working on a new
          website for the team, which will be developed using React.js!
        </p>
        <div className="EVCImages">
          <img
            className="EVCcar"
            src="/images/evconceptcar.jpg"
            alt="EVCcar"
            width="350"
            height="auto"
          />
          <img
            className="EVCleader"
            src="/images/evconceptleadership.jpg"
            alt="EVCleader"
            width="350"
            height="auto"
          />
        </div>
      </Popup>

      <Popup trigger={WCSPopup} setTrigger={setWCSPopup}>
        <strong style={{ fontSize: "30px" }}>Women in Computer Science</strong>
        <br></br>
        <strong>September 2023-Present</strong>
        <br />
        <i>Mentoring Committee Member</i>
        <p>
          I've been a part of the Women in Computer Science mentoring committee
          for the past 2 years, and in that time I've helped organize and host
          events that foster academic and mental growth in students around
          campus.
          <br />
          Some of the events I've helped organize are a research panel, where I
          brought in 9 undergraduate and graduate researchers around campus to
          talk about their experiences and to answer any questions that students
          have, a mental health/stress relief event where we highlighted
          resources students could go to if they had any issues regarding mental
          health, and study socials where WCS members could study and get to
          know one another.
          <br></br>
          Through WCS I've also have the opportunity to participate in Code ADA,
          their annual 2-day hackathon, where I was able to be a part of the
          winning team in the databases division against 13 other competing
          groups.
        </p>
        <div className="WCSImages">
          <img
            className="WCSBoard"
            src="/images/wcsboard.png"
            alt="wcsboard"
            width="350"
            height="auto"
          />
          <img
            className="WCScookie"
            src="/images/wcscookie.png"
            alt="wcscookie"
            width="170"
            height="200"
          />
        </div>
      </Popup>

      <Popup trigger={ICSPopup} setTrigger={setICSPopup}>
        <strong style={{ fontSize: "30px" }}>Tech Services at Illinois</strong>
        <br></br>
        <strong>August 2024-Present</strong>
        <br />
        <i>Site Consultant</i>
        <p>
          As a site consultant for Tech Services at UIUC, I troubleshoot
          hardware and software issues on Windows and Mac computers in tech labs
          all around the UIUC campus.
          <br></br>
          My job also consists of assisting and teaching clients on how to use
          the technology in the labs, such as our regular or poster printers, AV
          equipment, or lab computers. I'm also in charge of ensuring opening
          and closing of the labs go smoothly and that the labs are clean
          throughout the day.
        </p>
        <div className="ICSImages">
          <img
            className="techlab"
            src="/images/techlab.jpg"
            alt="techlab"
            width="300"
            height="auto"
          />
        </div>
      </Popup>
      {/* end popups */}

      <body className="infoBoxes">
        <div className="leftSide">
          <section className="aboutMe">
            <h2 className="aboutmetitle">About Me</h2>
            <p className="aboutmetext">
              Hi, I'm Abby Gillham! I'm a sophomore at the University of
              Illinois Urbana-Champaign studying computer science. I'm
              interested in diving deeper into human-computer interaction and
              cybersecurity and enjoy frontend web development. This website,
              which I built using React.js, showcases some of my experience and
              technical skills. Please enjoy!
            </p>
          </section>
          <section className="Experience">
            <h2 className="exptitle">Experience</h2>
            <p className="exptext">
              Click on each button to learn more about my individual experiences
              :)
            </p>
            {/* buttons here! */}
            <div className="buttons">
              <button
                className="cityuButton"
                onClick={() => setCityUPopup(true)}
              >
                <img
                  className="cityUPic"
                  src="/images/CityU_logo_2015.png"
                  alt="cityUPic"
                  width="300"
                  height="300"
                />
                <div className="cityUTitle">
                  <h1>City University of Hong Kong</h1>
                  <p>Research Intern</p>
                </div>
              </button>

              <button className="EVCButton" onClick={() => setEVCPopup(true)}>
                <img
                  className="EVLogo"
                  src="/images/EV-logo-04.png"
                  alt="evlogo"
                  width="300"
                  height="300"
                />
                <div className="EVCTitle">
                  <h1>Illini EV Concept</h1>
                  <p>Business Operations Subteam Lead</p>
                </div>
              </button>

              <button className="WCSButton" onClick={() => setWCSPopup(true)}>
                <img
                  className="WCSLogo"
                  src="/images/wcs-logo.png"
                  alt="wcslogo"
                  width="300"
                  height="300"
                />
                <div className="WCSTitle">
                  <h1>Women in Computer Science</h1>
                  <p>Mentoring Committee Member</p>
                </div>
              </button>

              <button className="ICSButton" onClick={() => setICSPopup(true)}>
                <img
                  className="ICSLogo"
                  src="/images/uiuclogo.png"
                  alt="icslogo"
                  width="300"
                  height="300"
                />
                <div className="ICSTitle">
                  <h1>Technology Services at Illinois</h1>
                  <p>Site Consultant</p>
                </div>
              </button>
            </div>

            {/*end buttons */}
          </section>
        </div>
        <div className="rightSide">
          <a
            href="https://drive.google.com/file/d/12ZUQdz6QBf_PZ_q7ooLCfnb2b_Q3lVZy/view"
            target="_blank"
            rel="noreferrer"
            className="resume"
          >
            <section>
              <strong className="view_resume">View my resume!</strong>
            </section>
          </a>
          <section className="technicalSkills">
            <h2 className="techtitle">Technical Skills</h2>
            <p className="techtext">
              <strong>Languages</strong>
              <ul>
                <li>Java</li>
                <li>C++</li>
                <li>Python</li>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>Dart</li>
              </ul>
              <strong>Developer Tools</strong>
              <ul>
                <li>VSCode</li>
                <li>Git/GitHub</li>
                <li>Docker</li>
                <li>Android Studio</li>
              </ul>
              <strong>Software/Libraries/Frameworks</strong>
              <ul>
                <li>Excel</li>
                <li>Power Automate</li>
                <li>React.js</li>
                <li>Flutter</li>
                <li>Microsoft Teams</li>
                <li>Asana</li>
              </ul>
            </p>
          </section>
          <section className="relevantCoursework">
            <h2 className="relctitle">Relevant Coursework</h2>
            <p className="relctext">
              <ul>
                <li>
                  <strong>CS 225</strong>: Data Structures (C++)
                </li>
                <li>
                  <strong>CS 233</strong>: Computer Architecture (Verilog, MIPS)
                </li>
                <li>
                  <strong>CS 173</strong>: Discrete Structures
                </li>
                <li>
                  <strong>CS 124</strong>: Introduction to Computer Science
                  (Java)
                </li>
                <li>
                  <strong>CS 128</strong>: Introduction to Computer Science II
                  (C++)
                </li>
                <li>
                  <strong>Math 241</strong>: Calculus III (Multivariable
                  Calculus)
                </li>
                <li>
                  <strong>Math 257</strong>: Linear Algebra (with applied
                  aspects in Python)
                </li>
              </ul>
            </p>
          </section>
        </div>
      </body>
      <div className="footer">© 2024 Abigail Gillham</div>
    </div>
  );
}

export default Home;
