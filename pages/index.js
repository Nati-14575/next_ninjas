import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Laboris excepteur dolore pariatur irure irure mollit aliqua qui magna
          aute irure est. Lorem incididunt ex adipisicing irure elit fugiat sint
          sunt in sit deserunt est velit adipisicing. Occaecat quis aute fugiat
          reprehenderit labore enim aliqua aute laborum excepteur adipisicing
          pariatur aute in. Fugiat deserunt tempor quis sit amet. Ullamco dolor
          nulla incididunt deserunt consequat reprehenderit do cillum fugiat.
          Sit velit voluptate voluptate enim cillum cupidatat excepteur proident
          anim cupidatat.
        </p>
        <p className={styles.text}>
          Magna et sit id eiusmod sit id elit in consequat elit commodo duis
          deserunt velit. Amet laboris aute ut dolore reprehenderit nulla
          consequat veniam ullamco dolore amet commodo. Exercitation non do
          labore culpa veniam quis mollit mollit. Ex ea duis ipsum sit dolor
          veniam. Fugiat tempor sunt non pariatur.
        </p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
