import React, { useEffect, useState } from "react";
import Head from "next/head";
import Jobs from "@/components/abonded/Jobs";
import { API_ENDPOINT } from "@/components/abonded/constants";

function index(props) {
  return (
    <>
      <Head>
        <title>Abonded Cart Details</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Maneeswar Mutyala" />
        <meta
          name="keywords"
          content="todo list,photos listing,flexbox,grid,nextjs,json placeholder"
        />
        <meta
          name="description"
          content="Photos Listing Using Flexbox and Grid, With Json Placeholder API"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="INDEX,FOLLOW" />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/44763136?s=400&u=27ce34de0b72f59ac2894407853898a86e475b86&v=4"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://github.com/maneeswarmutyala" />
        <meta property="og:title" content="Next Js Projects" />
        <meta property="og:site_name" content="Next Js Projects" />
        <meta
          property="og:description"
          content="Todo,Blog, Tic tac toe, Photos Listing Using Flexbox and Grid, Nextjs Project"
        />
      </Head>
      {/* <SessionLoader/> */}
      <div className="container">
        <h1>Abonded Cart Details</h1>
        <Jobs jobs={props.jobs} />
      </div>
    </>
  );
}

export default index;
export async function getServerSideProps() {
  const url =`${API_ENDPOINT}getOrders.php`;
  let response = await fetch(url)
    .then((res) => res.json())
    .then((jobs) => {
      return jobs?.result?.data;
    });
  return {
    props: {
      jobs: response ?? []
    },
  };
}
