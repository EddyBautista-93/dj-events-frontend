import Head from "next/head"
import { useRouter } from "next/router"
import Header from "./Header"
import Footer from "./Footer"
import Showcase from "./Showcase"
import styles from '@/styles/Layout.module.css'


export default function Layout({title, keywords, description, children}) {
  const router = useRouter();
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="description" conent={description}/>
            <meta name="keywords" conent={keywords={}}/>
        </Head>
        <Header />
        {/* if on index show the showcase */}
        {router.pathname == '/' && <Showcase />}
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