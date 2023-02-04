import Link from 'next/link'
import styles from '../../styles/Footer.module.css'

export default function Footer() {
    var currentYear = new Date().getFullYear().toString();
  return (
    <footer className={styles.footer}>
        <p>copyright &copy; dj events {currentYear}</p>
        <p>
            <Link href="/about">About this project</Link>
        </p>
    </footer>
  )
}
