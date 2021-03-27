import styles from '../styles/components/Intro.module.css';

function Header() {
  return (
    <main className={styles.introContainer}>
      <div className={styles.introWrapper}>
        <div className={styles.planet}>
          <div className={styles.planetContent}></div>
        </div>
        <div className={styles.textWrapper}>
          <p className={styles.mainText}>
            A Octopus fornece os principais serviços para dar um UP na sua
            empresa!
          </p>
          <p className={styles.secondaryText}>
            A verdadeira mudança começa dentro de nós mesmos...
          </p>
          <button type="button" className={styles.knowMoreButton}>
            Saiba mais
          </button>
        </div>
      </div>
    </main>
  );
}
export default Header;
