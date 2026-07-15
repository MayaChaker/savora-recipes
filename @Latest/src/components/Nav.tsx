import styles from "./nav.module.css";

interface NavProps {
  onSurprise: () => void;
  onFavorites: () => void;
  favoriteCount: number;
}

function Nav({ onSurprise, onFavorites, favoriteCount }: NavProps) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary navigation">
        <a className={styles.brand} href="#top" aria-label="Savora home">
          <span className={styles.logo} aria-hidden="true">
            <span />
          </span>
          <span>Savora</span>
        </a>
        <div className={styles.links}>
          <a href="#top">Discover</a>
          <a href="#recipes">Recipes</a>
          <a href="#contact">Contact</a>
        </div>
        <div className={styles.actions}>
          <button className={styles.favoriteButton} type="button" onClick={onFavorites} aria-label={`Open ${favoriteCount} saved recipes`}>
            <span aria-hidden="true">♡</span><span className={styles.favoriteLabel}>My Favorites</span>
            {favoriteCount > 0 && <strong>{favoriteCount}</strong>}
          </button>
          <button className={styles.cta} type="button" onClick={onSurprise}>
            <span className={styles.spark} aria-hidden="true">✦</span>
            Surprise me
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
