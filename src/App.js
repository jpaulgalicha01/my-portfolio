import React, { useEffect, useState } from "react";
import "./Components/Tools/custom.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import imgs from "./Components/Images/img";
import color from "./Components/Tools/color";
import Aos from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
export default function App() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 500) {
      // Adjust threshold as needed
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  Aos.init();

  return (
    <>
      <Container fluid>
        {/* Nav Bar */}

        <Row className="banner">
          <div className="pb-3"></div>
          <header
            className={`navbar navbar-expand-lg ${scrolled ? "scrolled" : ""}`}
            id="sticky"
          >
            <div className="container-fluid">
              <a
                href="index.php"
                className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
              >
                <h5>MY PORTFOLIO</h5>
              </a>
              <div className="col-12 col-lg-auto">
                <ul className="d-flex nav d-lg-block d-none">
                  <li>
                    <a
                      href="#aboutme"
                      className="px-2 link px-2 ms-5 text-white"
                      style={{ textTransform: "uppercase" }}
                    >
                      about me
                    </a>
                    <a
                      href="#educationbackground"
                      className="px-2 link px-2 ms-5 text-white"
                      style={{ textTransform: "uppercase" }}
                    >
                      education background
                    </a>
                    <a
                      href="#skills"
                      className="px-2 link px-2 ms-5 text-white"
                      style={{ textTransform: "uppercase" }}
                    >
                      skills
                    </a>
                    <a
                      href="#projects"
                      className="px-2 link px-2 ms-5 text-white"
                      style={{ textTransform: "uppercase" }}
                    >
                      projects
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </header>

          <div className="d-xxl-block d-xl-block d-lg-block d-none">
            <Col className="d-flex" style={{ paddingTop: "10%" }}>
              <div style={{ width: "55%" }} className="align-self-center">
                <h3 style={{ textTransform: "uppercase" }}>
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("Hello, Welcome")
                        .pauseFor(500)
                        .deleteAll()
                        .typeString("I am, JOHN PAUL ELERIO GALICHA")
                        .start();
                    }}
                  />
                </h3>

                <p style={{ textTransform: "uppercase" }}>PROGRAMMER</p>
                <a
                  className="btn text-white"
                  href="/Components/File/CV.pdf"
                  download="CV.pdf"
                >
                  Download CV
                </a>
              </div>
              <img
                src={imgs.img1}
                style={{ width: "429px", height: "440px" }}
              />
            </Col>
          </div>

          <div className="d-xxl-none d-xl-none d-lg-none d-block">
            <Col className="text-center my-3 p-5">
              <h3 style={{ textTransform: "uppercase" }}>
                JOHN PAUL ELERIO GALICHA
              </h3>
              <p style={{ textTransform: "uppercase" }}>PROGRAMMER</p>
              <a
                className="btn text-white"
                href="/Components/File/CV.pdf"
                download="CV.pdf"
              >
                Download CV
              </a>
            </Col>
          </div>
        </Row>
        {/* End Nav Bar */}

        {/* About Me */}
        <Row className="py-5 " id="aboutme">
          <Col className="py-5" style={{ backgroundColor: color.secondary }}>
            <div className="d-lg-flex d-grid justify-between-lg-around justify-content-center">
              <div className="p-2 flex-fill" data-aos="flip-left">
                <h4>ABOUT ME</h4>
                <div className="hori-line pt-2" />
                <div className="pt-4" style={{ textAlign: "justify" }}>
                  <p>
                    A junior level want to improve and also enhance skills in
                    software / web development
                  </p>
                  <p>Name: John Paul Elerio Galicha</p>
                  <p>Date of Birth: August 07, 2000</p>
                  <p>
                    Address: Purok Malinong, Barangay Binicuil, Kabankalan City,
                    Neg. Occ.
                  </p>
                  <p>Zip Code: 6111</p>
                  <p>Email: jpaulgalicha01@gmail.com</p>
                  <p>Contact Number: 09948487917</p>
                </div>
              </div>
              <div className="p-2 flex-fill">
                <img
                  src={imgs.img2}
                  className="rounded float-start img-fluid"
                  style={{ minWidth: "30vw", maxWidth: "40vw", width: "auto" }}
                  data-aos="flip-left"
                />
              </div>
            </div>
          </Col>
        </Row>
        {/* End About Me */}

        {/* Education Background */}
        <Row className="pt-5" id="educationbackground">
          <div className="text-center">
            <h2>EDUCATION BACKGROUND</h2>
            <div className="hr-line pt-2" />
          </div>
          <Col className="p-5" md="6" sm="12" data-aos="fade-up">
            <Card style={{ backgroundColor: color.secondary }} className="p-4">
              <Card.Body>
                <Card.Text>
                  <h2>2019-2023</h2>
                  <h2>Bachelor of Science Information Technology</h2>
                  <u>West Visayas State University - Himamaylan City Campus</u>
                  <p>Barangay Caradio-an, Himamaylan City, Negros Occidental</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="p-5" md="6" sm="12" data-aos="fade-up">
            <Card style={{ backgroundColor: color.secondary }} className="p-4">
              <Card.Body>
                <Card.Text>
                  <h2>2017-2019</h2>
                  <h2>Information Communication Technology (CSS)</h2>
                  <u>Binicuil National High School - Senior High</u>
                  <p>Barangay Binicuil, Kabankalan City, Negros Occidental</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="p-5" md="6" sm="12" data-aos="fade-up">
            <Card style={{ backgroundColor: color.secondary }} className="p-4">
              <Card.Body>
                <Card.Text>
                  <h2>2012-2017</h2>
                  <u>Binicuil National High School - Junior High</u>
                  <p>Barangay Binicuil, Kabankalan City, Negros Occidental</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="p-5" md="6" sm="12" data-aos="fade-up">
            <Card style={{ backgroundColor: color.secondary }} className="p-4">
              <Card.Body>
                <Card.Text>
                  <h2>2011-2012</h2>
                  <u>Binicuil Elementary School</u>
                  <p>Barangay Binicuil, Kabankalan City, Negros Occidental</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* End Education Background */}

        {/* Skills */}
        <Row className="py-5" id="skills">
          <Col className="py-5" style={{ backgroundColor: color.secondary }}>
            <div className="d-lg-flex d-grid justify-between-lg-around justify-content-center">
              <div className="sticky-section p-2 flex-fill" data-aos="fade-up">
                <h4>TECH SKILLS</h4>
                <div className="hori-line pt-2" />
                <div className="pt-4" style={{ textAlign: "justify" }}>
                  <p>
                    As a passionate and dedicated developer, I have honed a
                    diverse set of technical skills that enable me to build
                    robust and efficient applications across various platforms.
                    My experience spans front-end and back-end development, with
                    a particular focus on modern web technologies and software
                    engineering principles.
                  </p>
                </div>
              </div>
              <div className="p-2 flex-fill">
                <Card
                  style={{ backgroundColor: color.black }}
                  className="p-4"
                  data-aos="fade-up"
                >
                  <Card.Body>
                    <Card.Text>
                      <img src={imgs.phpIcon} alt="PHP Logo" width={"120"} />
                      <br />
                      <u>PHP & Laravel</u>
                      <br />
                      <p className="pt-2">
                        With a solid foundation in PHP, I have developed dynamic
                        web applications and backend systems. I possess basic
                        knowledge of Laravel, which has allowed me to start
                        building scalable and secure web applications by
                        utilizing some of its core features, such as routing,
                        Blade templating, and Eloquent ORM.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />
                <Card
                  style={{ backgroundColor: color.black }}
                  className="p-4"
                  data-aos="fade-up"
                >
                  <Card.Body>
                    <Card.Text>
                      <img src={imgs.csIcon} alt="PHP Logo" width={"120"} />
                      <br />
                      <u>C# & ASP.NET Core API</u>
                      <br />
                      <p className="pt-2">
                        I am proficient in C# and have extensive experience in
                        developing robust back-end services using ASP.NET Core
                        API. My expertise includes designing RESTful APIs,
                        handling data management, and implementing
                        authentication and authorization mechanisms, all while
                        ensuring high performance and security.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />
                <Card
                  style={{ backgroundColor: color.black }}
                  className="p-4"
                  data-aos="fade-up"
                >
                  <Card.Body>
                    <Card.Text>
                      <img
                        src={imgs.reactJsIcon}
                        alt="PHP Logo"
                        width={"120"}
                      />
                      <br />
                      <u>React JS</u>
                      <br />
                      <p className="pt-2">
                        On the front-end, I specialize in React JS to create
                        interactive and efficient user interfaces. I am skilled
                        in building reusable components, managing application
                        state using hooks and context, and integrating APIs to
                        provide a seamless user experience.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />
                <Card
                  style={{ backgroundColor: color.black }}
                  className="p-4"
                  data-aos="fade-up"
                >
                  <Card.Body>
                    <Card.Text>
                      <img
                        src={imgs.bootstrapIcon}
                        alt="PHP Logo"
                        width={"120"}
                      />
                      <br />
                      <u>Bootstrap, CSS & HTML</u>
                      <br />
                      <p className="pt-2">
                        I have a strong command of HTML and CSS, combined with
                        Bootstrap, to craft responsive and visually appealing
                        web designs. My focus is on ensuring cross-browser
                        compatibility and delivering a consistent user
                        experience across different devices.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
        {/* End Skills */}

        {/* PROJECTS */}
        <Row className="pt-5" id="projects">
          <h2>PROJECTS / COLLABORATED</h2>

          <div
            className="hr-line pt-2"
            style={{ left: "1%", minWidth: "340px", maxWidth: "450px" }}
          />
          <div className="pt-4" style={{ textAlign: "justify" }}>
            <p>
              Here are some of the projects I've worked on and collaborated with
              others, showcasing my skills in various technologies.
            </p>
          </div>
          <Col className="p-5" md="6" sm="12">
            <Card
              style={{ backgroundColor: color.secondary }}
              className="p-4"
              data-aos="fade-up"
            >
              <Card.Body>
                <Card.Text>
                  <img
                    src={imgs.evalwest}
                    alt="PHP Logo"
                    width={"120"}
                    className="pb-2"
                  />
                  <br />
                  <h4>EvalWest System</h4>
                  <ul>
                    <li className="fs-5">
                      <u>Technologies Used</u>
                    </li>
                    <small>
                      PHP, HTLM5, JQuery, PHP Mailer, Bootstrap, MYSQL
                    </small>
                    <br />
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="p-5" md="6" sm="12">
            <Card
              style={{ backgroundColor: color.secondary }}
              className="p-4"
              data-aos="fade-up"
            >
              <Card.Body>
                <Card.Text>
                  <img
                    src={imgs.himaya}
                    alt="PHP Logo"
                    width={"120"}
                    className="pb-2"
                  />
                  <br />
                  <h4>Himaya</h4>
                  <ul>
                    <li className="fs-5">
                      <u>Technologies Used</u>
                    </li>
                    <small>
                      PHP, HTLM5, JQuery, PHP Mailer, Bootstrap, MYSQL
                    </small>
                    <br />
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="p-5" md="6" sm="12">
            <Card
              style={{ backgroundColor: color.secondary }}
              className="p-4"
              data-aos="fade-up"
            >
              <Card.Body>
                <Card.Text>
                  <img
                    src={imgs.hwfms}
                    alt="PHP Logo"
                    width={"120"}
                    className="pb-2"
                  />
                  <br />
                  <h4>Hinigaran Womens Federation Management System</h4>
                  <ul>
                    <li className="fs-5">
                      <u>Technologies Used</u>
                    </li>
                    <small>PHP, HTLM5, JQuery, Bootstrap, MYSQL</small>
                    <br />
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="p-5" md="6" sm="12">
            <Card
              style={{ backgroundColor: color.secondary }}
              className="p-4"
              data-aos="fade-up"
            >
              <Card.Body>
                <Card.Text>
                  <img
                    src={imgs.butchershop}
                    width={"120"}
                    height={"120"}
                    className="pb-2"
                  />
                  <br />
                  <h4>Butchershop</h4>
                  <br />
                  <ul>
                    <li className="fs-5">
                      <u>Technologies Used</u>
                    </li>
                    <small>HTLM5, JQuery, Bootstrap, JavaScript</small>
                    <br />
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="p-5" md="6" sm="12">
            <Card
              style={{ backgroundColor: color.secondary }}
              className="p-4"
              data-aos="fade-up"
            >
              <Card.Body>
                <Card.Text>
                  <img
                    src={imgs.galaxyConstructionSupplu}
                    width={"120"}
                    height={"120"}
                    className="pb-2"
                  />
                  <br />
                  <h4>Galaxy Construction Supply - galaxy cebu</h4>
                  <br />
                  <ul>
                    <li className="fs-5">
                      <u>Collaborated</u>
                    </li>
                    <li className="fs-5">
                      <u>Technologies Used</u>
                    </li>
                    <small>
                      Microsoft Windows Forms, .NET Framework API, Entity
                      Framework C#, MS SQL
                    </small>
                    <br />
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="p-5" md="6" sm="12">
            <Card
              style={{ backgroundColor: color.secondary }}
              className="p-4"
              data-aos="fade-up"
            >
              <Card.Body>
                <Card.Text>
                  <img
                    src={imgs.K5Distribution}
                    width={"120"}
                    height={"120"}
                    className="pb-2"
                  />
                  <br />
                  <h4>K5 Distribution</h4>
                  <br />
                  <ul>
                    <li className="fs-5">
                      <u>Collaborated</u>
                    </li>
                    <li className="fs-5">
                      <u>Technologies Used</u>
                    </li>
                    <small>
                      Microsoft Windows Forms, Entity Framework C#, MS SQL
                    </small>
                    <br />
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="p-5" md="6" sm="12">
            <Card
              style={{ backgroundColor: color.secondary }}
              className="p-4"
              data-aos="fade-up"
            >
              <Card.Body>
                <Card.Text>
                  <img
                    src={imgs.noImage}
                    width={"120"}
                    height={"120"}
                    className="pb-2"
                  />
                  <br />
                  <h4>Dongon, Leong & Associates, CPAs</h4>
                  <br />
                  <ul>
                    <li className="fs-5">
                      <u>Collaborated</u>
                    </li>
                    <li className="fs-5">
                      <u>Technologies Used</u>
                    </li>
                    <small>
                      Microsoft Windows Forms, .NET Framework API, Entity
                      Framework C#, MS SQL
                    </small>
                    <br />
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="p-5" md="6" sm="12">
            <Card
              style={{ backgroundColor: color.secondary }}
              className="p-4"
              data-aos="fade-up"
            >
              <Card.Body>
                <Card.Text>
                  <img
                    src={imgs.vma}
                    width={"120"}
                    height={"120"}
                    className="pb-2"
                  />
                  <br />
                  <h4>VMA Payroll</h4>
                  <br />
                  <ul>
                    <li className="fs-5">
                      <u>Collaborated</u>
                    </li>
                    <li className="fs-5">
                      <u>Technologies Used</u>
                    </li>
                    <small>
                      Microsoft Windows Forms, .NET Framework API, Entity
                      Framework C#, MS SQL
                    </small>
                    <br />
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="p-5" md="6" sm="12">
            <Card
              style={{ backgroundColor: color.secondary }}
              className="p-4"
              data-aos="fade-up"
            >
              <Card.Body>
                <Card.Text>
                  <img
                    src={imgs.noImage}
                    width={"120"}
                    height={"120"}
                    className="pb-2"
                  />
                  <br />
                  <h4>HUDGLV</h4>
                  <br />
                  <ul>
                    <li className="fs-5">
                      <u>Collaborated</u>
                    </li>
                    <li className="fs-5">
                      <u>Technologies Used</u>
                    </li>
                    <small>
                      React JS, .NET Framework API, Entity Framework C#, MS SQL
                    </small>
                    <br />
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="p-5" md="6" sm="12">
            <Card
              style={{ backgroundColor: color.secondary }}
              className="p-4"
              data-aos="fade-up"
            >
              <Card.Body>
                <Card.Text>
                  <img
                    src={imgs.classqie}
                    width={"120"}
                    height={"120"}
                    className="pb-2"
                  />
                  <br />
                  <h4>Classqie Herbs Corporation</h4>
                  <br />
                  <ul>
                    <li className="fs-5">
                      <u>Collaborated</u>
                    </li>
                    <li className="fs-5">
                      <u>Technologies Used</u>
                    </li>
                    <small>
                      Microsoft Windows Forms, Entity Framework C#, MS SQL
                    </small>
                    <br />
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* End PROJECTS */}

        {/* Footer */}
        <Row>
          <Col className="p-4" style={{ backgroundColor: color.secondary }}>
            <div className="text-center">
              <p>© John Paul Galicha Portfolio {new Date().getFullYear()}</p>
              <div className="d-flex justify-content-center gap-2">
                <a href="https://github.com/jpaulgalicha01">
                  <i className="fa-brands fa-github text-white"></i>
                </a>
                <a href="https://web.facebook.com/johnpaul.galicha.7/">
                  <i className="fa-brands fa-facebook text-white"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>
        {/* End Footer */}
      </Container>
    </>
  );
}
