import styles from "./Carrusel.module.css";
export const CarruselPic = () => {
  return (
    <div className={styles.carousel}>
      <div className={styles.carouselTrack}>
        <img src="Carrusel/ingco.webp" alt="Ingco" />
        <img src="Carrusel/stihl.webp" alt="Stihl" />
        <img src="Carrusel/Total.jpeg" alt="Total" />
      </div>
    </div>
  );
};
