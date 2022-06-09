import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// TypeScript
import { DisplayMapFC } from '../components/DisplayMapFC';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Here Map Api</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          type="text/javascript"
          src="https://js.api.here.com/v3/3.1/mapsjs-core.js"
        ></script>
        <script
          type="text/javascript"
          src="https://js.api.here.com/v3/3.1/mapsjs-service.js"
        ></script>
        <script
          type="text/javascript"
          src="https://js.api.here.com/v3/3.1/mapsjs-ui.js"
        ></script>
        <script
          type="text/javascript"
          src="https://js.api.here.com/v3/3.1/mapsjs-mapevents.js"
        ></script>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to HERE MAP API
        </h1>

        {/* <DisplayMapClass /> */}
        <DisplayMapFC/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
