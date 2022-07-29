import Image from 'next/image'
import moduleCarrousel from "./imagenesCarrousel.module.css";

const ImagenesCarrousel = () => {
  return (
    <div id="carouselExampleControls" className={`carousel slide ${moduleCarrousel.divPrincipal}`} data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image src="/carrousel/th.jfif" className={`d-block w-100 ${moduleCarrousel.imagenesCarrousel}`} alt="imagenes del instituto" width={200} height={150} layout="responsive" />
        </div>
        <div className="carousel-item">
          <Image src="/carrousel/th1.jfif" className={`d-block w-100 ${moduleCarrousel.imagenesCarrousel}`} alt="imagenes del instituto" width={200} height={150} layout="responsive" />
        </div>
        <div className="carousel-item">
          <Image src="/carrousel/th2.jfif" className={`d-block w-100 ${moduleCarrousel.imagenesCarrousel}`} alt="imagenes del instituto" width={200} height={150} layout="responsive" />
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
  )
}

export default ImagenesCarrousel