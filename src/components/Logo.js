import styles from '../styles/components/Logo.module.css';

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <span>
        <span></span>
      </span>
      <label htmlFor="logoName">
        <p>O</p>
        <p>c</p>
        <p>t</p>
        <p>o</p>
        <p>p</p>
        <p>u</p>
        <p>s</p>
      </label>
    </div>
  );
}
export default Logo;
