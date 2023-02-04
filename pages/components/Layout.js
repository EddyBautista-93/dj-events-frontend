import Head from "next/head"
import styles from '../../styles/Layout.module.css'

export default function Layout({title, keywords, description, children}) {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="description" conent={description}/>
            <meta name="keywords" conent={keywords={}}/>
        </Head>
        <div className={styles.container}>
        {children}
        </div>
    </div>
  )
}


Layout.defaultProps = {
    title: "DJ Events | Find the coolest parties",
    description: "Find the latest Dj and other musical events",
    keywords: 'music, dj'
}