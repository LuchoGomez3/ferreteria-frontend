import styles from "./Card.module.css";

type ProductCardProps = {
  name: string;
  imageUrl: string;
  description: string;
};

export const Card = ({ imageUrl, description, name }: ProductCardProps) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt="Producto" className={styles.image} />
      <div className={styles.description}>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
