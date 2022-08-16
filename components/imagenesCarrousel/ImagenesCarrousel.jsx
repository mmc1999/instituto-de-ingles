import Image from 'next/image'
import HYDE from '../HYDE/HYDE';
import moduleCarrousel from "./imagenesCarrousel.module.css";

const ImagenesCarrousel = () => {
  return (
    <section className={moduleCarrousel.sectionPrincipal}>
      <div id="carouselExampleControls" className={`carousel slide ${moduleCarrousel.divPrincipal}`} data-bs-ride="carousel">
        <div className={`carousel-inner ${moduleCarrousel.carrousel}`}>
          <div className="carousel-item active">
            <Image src="/carrousel/imagen1.jpg" className={`d-block w-100 ${moduleCarrousel.imagenesCarrousel}`} alt="imagenes del instituto" width={200} height={150} layout="responsive" />
          </div>
          <div className="carousel-item">
            <Image src="/carrousel/imagen2.jpg" className={`d-block w-100 ${moduleCarrousel.imagenesCarrousel}`} alt="imagenes del instituto" width={200} height={150} layout="responsive" />
          </div>
          <div className="carousel-item">
            <Image src="/carrousel/imagen3.jpg" className={`d-block w-100 ${moduleCarrousel.imagenesCarrousel}`} alt="imagenes del instituto" width={200} height={150} layout="responsive" />
          </div>
          <div className="carousel-item">
            <Image src="/carrousel/imagen4.jpg" className={`d-block w-100 ${moduleCarrousel.imagenesCarrousel}`} alt="imagenes del instituto" width={200} height={150} layout="responsive" />
          </div>
          <div className="carousel-item">
            <Image src="/carrousel/imagen5.jpg" className={`d-block w-100 ${moduleCarrousel.imagenesCarrousel}`} alt="imagenes del instituto" width={200} height={150} layout="responsive" />
          </div>
          <div className="carousel-item">
            <Image src="/carrousel/imagen6.jpg" className={`d-block w-100 ${moduleCarrousel.imagenesCarrousel}`} alt="imagenes del instituto" width={200} height={150} layout="responsive" />
          </div>
          <div className="carousel-item">
            <Image src="/carrousel/imagen7.jpg" className={`d-block w-100 ${moduleCarrousel.imagenesCarrousel}`} alt="imagenes del instituto" width={200} height={150} layout="responsive" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <HYDE />
    </section>
  )
}

export default ImagenesCarrousel