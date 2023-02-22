import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_5.jpg';
import { Trainers } from '../../data';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { Trainer } from '../../components/Trainer';
import { FaLinkedin } from 'react-icons/fa';
import './Trainers.css';

const trainers = () => {
  return (
    <>
      <Header title="Our Trainers" image={HeaderImage}>
        Individuals who opt for a career as gym trainers are required to lead,
        instruct and motivate individuals or groups to exercise, such as
        cardiovascular exercise, weight training and stretching.
      </Header>

      <section className="trainers">
        <div className="container trainers__container">
          {Trainers.map(({ id, image, name, job, socials }) => {
            return (
              <Trainer
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[
                  { icon: <BsInstagram />, link: socials[0] },
                  { icon: <AiOutlineTwitter />, link: socials[1] },
                  { icon: <FaFacebookF />, link: socials[2] },
                  { icon: <FaLinkedin />, link: socials[3] },
                ]}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default trainers;
