import styles from '../styles/components/Logo.module.css';

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <span>
        <span></span>
      </span>
      <label htmlFor="logoName">OCTOPUS</label>
    </div>
  );
}
export default Logo;
