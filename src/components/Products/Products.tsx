import { mockProducts } from "../../mook";
import { Card } from "../Card/Card";
import styles from "./Products.module.css";

export const Products = () => {
  return (
    <section className={styles.section}>
      <h1>Products</h1>
      <div className={styles.container}>
        {mockProducts.map((product) => (
          <Card
            key={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            description={product.description}
          />
        ))}
      </div>
    </section>
  );
};
