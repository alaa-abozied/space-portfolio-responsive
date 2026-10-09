import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

export const Projects = () => {
  const projects = [
    { title: "Project 1", description: "Design & Development", imgUrl: "https://raw.githubusercontent.com/judygab/web-dev-projects/main/personal-portfolio/src/assets/img/project-img1.png" },
    { title: "Techno Market", description: "Online Store Design", imgUrl: "https://raw.githubusercontent.com/judygab/web-dev-projects/main/personal-portfolio/src/assets/img/project-img2.png" },
    { title: "EduPlatform", description: "Design With Bootstrap 5", imgUrl: "https://raw.githubusercontent.com/judygab/web-dev-projects/main/personal-portfolio/src/assets/img/project-img3.png" },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>My Projects</h2>
            <p>These are some of my projects.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item><Nav.Link eventKey="first">1st Section</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="second">2nd Section</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="third">3rd Section</Nav.Link></Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <Col key={index} sm={6} md={4}>
                        <div className="proj-imgbx">
                          <img src={project.imgUrl} alt={project.title} />
                          <div className="proj-txtx">
                            <h4>{project.title}</h4>
                            <span>{project.description}</span>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second"><p>Section 2 Content</p></Tab.Pane>
                <Tab.Pane eventKey="third"><p>Section 3 Content</p></Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;