import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      //   router.go("/");
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className='flex flex-col justify-between items-center h-full'>
      <h1 className='text-3xl font-bold m-6'>Error.......</h1>
      <h2 className='text-5xl  m-6'>Page could not be found</h2>
      <p className='text-2xl  m-6'>
        Go back to the
        <Link href='/'>
          <a className='mx-3 bg-blue-400 py-2 px-4 rounded-full hover:bg-blue-600'>
            HomePage
          </a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
