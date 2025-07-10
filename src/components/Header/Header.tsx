import styles from "./Header.module.css";
import { Icon } from "../Icon/Icon";
import { Color } from "../Color/Color";

export const Header = () => {
  return (
    <header className={styles.container}>
      <h1>Ferreteria</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Services</a>
        <a href="#">About</a>
      </nav>
      <div className={styles.icons}>
        <div>
          <span>Cart</span>
          <Icon name="Cart" size="large" color={Color.primary1} />
        </div>
        <div>
          <span>Sing In</span>
          <Icon name="SingIn" size="large" color={Color.primary1} />
        </div>
      </div>
    </header>
  );
};
