import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_3.jpg';
import './gallery.css';

const Gallery = () => {
  const galeryLength = 15;
  const images = [];

  for (let i = 1; i <= galeryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, libero
        est? Amet odit architecto ut repudiandae libero nobis veritatis.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`Gallery Img ${index + 1}`} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
