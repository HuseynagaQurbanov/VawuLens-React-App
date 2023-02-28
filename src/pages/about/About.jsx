import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <Header image={HeaderImage} title="About Us">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
        minima cumque delectus, quas quisquam adipisci accusantium repudiandae
        nesciunt laboriosam sequi?
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Img" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              corrupti accusamus quas nulla necessitatibus, possimus aperiam
              odit, dolor culpa deserunt quos! Porro, obcaecati. In maiores
              voluptates eos quis quas corrupti placeat voluptatem labore
              facilis temporibus assumenda necessitatibus, similique ducimus
              natus!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              quaerat molestias ratione sed, aperiam veniam laudantium delectus
              provident soluta accusantium dolorum, voluptates dignissimos
              cupiditate quos?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
              expedita repellat ipsam.
            </p>
          </div>
        </div>
      </section>

      <section className="about__Vision">
        <div className="container about__Vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              temporibus nobis asperiores blanditiis tenetur ipsum quo
              consequuntur dignissimos exercitationem? Maiores minus soluta
              voluptate doloremque repellendus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates consequuntur iste, suscipit error a nulla tempora? Ab
              nam, inventore officia porro, molestias blanditiis ducimus
              repellat, vero commodi optio eum voluptatum est similique harum
              sequi sapiente magnam aspernatur odit neque laboriosam!
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Img" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Img" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              corrupti accusamus quas nulla necessitatibus, possimus aperiam
              odit, dolor culpa deserunt quos! Porro, obcaecati. In maiores
              voluptates eos quis quas corrupti placeat voluptatem labore
              facilis temporibus assumenda necessitatibus, similique ducimus
              natus!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              quaerat molestias ratione sed, aperiam veniam laudantium delectus
              provident soluta accusantium dolorum, voluptates dignissimos
              cupiditate quos?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
              expedita repellat ipsam.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
