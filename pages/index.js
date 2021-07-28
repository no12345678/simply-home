import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Simply Home</title>
        <meta name="description" content="A responsive implementation for Simply Home's design" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
