import Link from "next/link";
import css from "./page.module.css";
import styles from "@/styles/container.module.css";

export default function HomePage() {
  return (
    <main className={styles.container}>
      <section className={css.hero}>
        <div className={css.content}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.text}>You can find everything you want in our catalog</p>

          <Link href="/catalog">
            <button className={css.button}>View Now</button>
          </Link>
        </div>
      </section>
    </main>
  );
}