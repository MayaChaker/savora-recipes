import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <a className={styles.brand} href="#top"><span aria-hidden="true">S</span>Savora</a>
          <p>Thoughtful recipes, dependable guidance, and more joy around the table.</p>
        </div>
        <div className={styles.links}>
          <div><h3>Explore</h3><a href="#top">Discover</a><a href="#recipes">All recipes</a><a href="#contact">Suggest a recipe</a></div>
          <div><h3>Collections</h3><a href="#recipes">Quick meals</a><a href="#recipes">Plant based</a><a href="#recipes">Weekend cooking</a></div>
          <div><h3>Connect</h3><a href="mailto:hello@savora.example">Email</a><a href="#contact">Contact</a><a href="#top">Back to top</a></div>
        </div>
      </div>
      <div className={styles.bottom}><span>© {new Date().getFullYear()} Savora Kitchen</span><span>Made for curious home cooks</span></div>
    </footer>
  );
}

export default Footer;
