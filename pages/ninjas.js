import React from "react";
import styles from "../styles/Ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  return {
    props: {
      ninjas: data,
    },
  };
};

function Ninjas({ ninjas }) {
  return (
    <div>
      <h2>Ninjas</h2>
      {ninjas.map((ninja) => {
        return (
          <Link key={ninja.id} href={`/ninja_details/${ninja.id}`}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        );
      })}
    </div>
  );
}

export default Ninjas;
