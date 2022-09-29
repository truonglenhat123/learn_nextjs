import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router'
import Link from "next/link";

export default function AboutPage() {
    const router = useRouter();
    console.log(router.query.id);
    const handleToHomePage = () =>{
        router.push("/products");
    }
  return (
    <>
    <Head>
    <title>user detail</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono&display=swap" rel="stylesheet"></link>
       
    </Head>
   
      <div>
        <h1>user  page with id: {router.query.id}</h1>
        <Link href="/">
            <a>go to homepoage</a>
        </Link>
        <button onClick={handleToHomePage} >go to home page</button>
      </div>
    </>
  );
}
