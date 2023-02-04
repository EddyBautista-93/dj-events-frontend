import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"
import styles from '../../styles/Layout.module.css'


export default function Layout({title, keywords, description, children}) {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="description" conent={description}/>
            <meta name="keywords" conent={keywords={}}/>
        </Head>
        <Header />
        <div className={styles.container}>
        {children}
        </div>
        <Footer />
    </div>
  )
}


Layout.defaultProps = {
    title: "DJ Events | Find the coolest parties",
    description: "Find the latest Dj and other musical events",
    keywords: 'music, dj'
}