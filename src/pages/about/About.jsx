import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg';
import StoryImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';
import './about.css';

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        suscipit veritatis enim ipsa officia magni quos quae, a doloribus veniam
        earum nam deleniti, tempora iusto.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="story img" />
          </div>

          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              When one of our founders was a young, bright, and fit Cricket
              player, working out was part of his daily routine. But, things
              took a different turn after his knee injury and university. ‘I’m
              too busy’ became his excuse to lead a sedentary lifestyle. After
              switching to jogging,
            </p>
            <p>
              Until one day, he looked into the mirror and couldn’t recognize
              himself. Determined to make a change, he jumped right back into
              the gym but he wasn’t able to stay motivated or remain consistent.
            </p>
            <p>
              he started using a tracking app to keep him motivated and he lost
              a whooping 15 kgs in 5 months. That was when he realised, without
              a tracking system on fitness equipment, it would be difficult to
              recreate his cardio success in strength training.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              MaxStrength Fitness will profoundly improve the quality of life
              for thousands of Americans by educating, inspiring and providing
              the most efficient, effective and safe exercise program and
              nutrition life-style system ever created.Our employees will be
              life changers and will have extensive growth opportunities while
              fulfilling their passion and servicing their clients.
            </p>
            <p>
              We are a national leader in physical education, recreation and
              dance, providing exceptional and innovative programs and services
              that result in measurable and transformational changes in the
              lives of those we serve.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="vision img" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="mission img" />
          </div>

          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              To Provide our members with a professional gym, outfitted with the
              the largest selection of workout equipment per body part.
            </p>
            <p>
              To inspire and motivate our members to achieve their workout goals
              by providing a positive, aspirational workout environment.
            </p>
            <p>
              To show the world the incredible life-changing things that happen
              when you root an intensely physical workout in the mindfulness of
              yoga. To make our members feel that gym is their second home.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
