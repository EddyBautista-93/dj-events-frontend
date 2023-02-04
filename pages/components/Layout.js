import Head from "next/head"

export default function Layout({title, keywords, description, children}) {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="description" conent={description}/>
            <meta name="keywords" conent={keywords={}}/>
        </Head>
        {children}
    </div>
  )
}


Layout.defaultProps = {
    title: "DJ Events | Find the coolest parties",
    description: "Find the latest Dj and other musical events",
    keywords: 'music, dj'
}