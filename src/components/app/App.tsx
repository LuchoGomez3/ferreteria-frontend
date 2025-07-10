import styles from "./App.module.css";
import { CarruselPic } from "../Carrusel/CarruselPic";
import { Products } from "../Products/Products";
export default function App() {
  return (
    <div className={styles.container}>
      <h1>Bienvenidos a mi Ferreteria</h1>
      <CarruselPic />
      <Products />
    </div>
  );
}
