import styles from '../styles/components/Header.module.css';
import Logo from './Logo';

function Header() {
  return (
    <main className={styles.headerContainer}>
      <div className={styles.logoDivision}>
        <Logo />
      </div>
      <div className={styles.navigationDivision}>
        <a href="http://">SOBRE</a>
        <a href="http://">SOLUÇÕES</a>
        <a href="http://">CONTATO</a>
      </div>
    </main>
  );
}
export default Header;
