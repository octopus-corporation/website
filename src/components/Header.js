import styles from '../styles/components/Header.module.css';
import Logo from './Logo';

function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div className={styles.logoDivision}>
          <Logo />
        </div>
        <div className={styles.navigationDivision}>
          <div>
            <a href="http://">SOBRE</a>
            <div className={styles.linkHoverEffect}/>
          </div>
          <div>
            <a href="http://">SOLUÇÕES</a>
            <div className={styles.linkHoverEffect}/>
          </div>
          <div>
            <a href="http://">CONTATO</a>
            <div className={styles.linkHoverEffect}/>
          </div>
        </div>
        <div className={styles.hamburguerButton}>
          <div/>
          <div/>
          <div/>
        </div>
      </div>
    </header>
  );
}
export default Header;
