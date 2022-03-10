import React from "react";
import Head from "next/head";
function About() {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
      </Head>
      <div>
        <h2 className='w-full flex items-center justify-center text-3xl font-bold'>
          About
        </h2>
        <p>
          Veniam minim dolor ullamco reprehenderit. Lorem consectetur ad
          adipisicing aliquip commodo id non elit deserunt nisi. Dolor dolore
          tempor ut est officia anim adipisicing ullamco adipisicing occaecat
          anim excepteur et cupidatat.
        </p>
      </div>
    </>
  );
}

export default About;
