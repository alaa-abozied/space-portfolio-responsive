import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const meter1 = "https://raw.githubusercontent.com/judygab/web-dev-projects/main/personal-portfolio/src/assets/img/meter1.svg";
const meter2 = "https://raw.githubusercontent.com/judygab/web-dev-projects/main/personal-portfolio/src/assets/img/meter2.svg";
const meter3 = "https://raw.githubusercontent.com/judygab/web-dev-projects/main/personal-portfolio/src/assets/img/meter3.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>You Can See My Skills Here</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Skill 95%" />
                  <h5>HTML5 / CSS3</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Skill 80%" />
                  <h5>JavaScript (ES6+)</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Skill 90%" />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Skill 90%" />
                  <h5>Responsive Design</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;