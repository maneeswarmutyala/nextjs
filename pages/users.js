import Head from "next/head";
import { useState, useEffect } from "react";
import Link from "next/link";

function Users() {
  const [userData, setUserData] = useState(null);
  const fetchUser = async (event) => {
    if (event.target.value) {
      let data = await fetch("https://jsonplaceholder.typicode.com/users");
      let usrData = await data.json();
      setUserData(
        usrData.filter(
          (user) =>
            user.username.toLowerCase() === event.target.value.toLowerCase()
        )
      );
    }
  };
  const fetchUserInData = (event) => {
    if (event.target.value) {
      let userDetails = userData?.filter(
        (user) =>
          user?.username.toLowerCase() === event.target.value.toLowerCase()
      );

      if (userDetails.length > 0) {
        setUserData(userDetails);
      }
    }
  };
  useEffect(async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/users");
    let usrData = await data.json();
    setUserData(usrData);
  }, []);

  const debounce = (fn, timeout = 3000) => {
    let timer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(context, args), timeout);
    };
  };
  const handleUsers = debounce((e) => fetchUser(e));
  return (
    <>
      <Head>
        <title>Search Users | Next Projects</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Maneeswar Mutyala" />
        <meta
          name="keywords"
          content="users,netxjs,json placeholder, debouncing"
        />
        <meta
          name="description"
          content="User Details With Json Placeholder API"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="INDEX,FOLLOW" />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/44763136?s=400&u=27ce34de0b72f59ac2894407853898a86e475b86&v=4"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://github.com/maneeswarmutyala" />
        <meta
          property="og:title"
          content="Search Users With Debouncing Method, Nextjs Project"
        />
        <meta property="og:site_name" content="Next Js Projects" />
        <meta
          property="og:description"
          content="Search Users With Debouncing Method, NextJs Project"
        />
          <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DGCGRP4NKE"
        ></script>
        <script
          async
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-DGCGRP4NKE');`,
          }}
        ></script>
      </Head>
      <div className="container">
        <Link href="/"> Go to Home</Link>
        <div>
          <div style={{ marginTop: "50px" }}>
            <label>With Debounce : </label>
            <input
              type="text"
              onKeyUp={(e) => handleUsers(e)}
              placeholder="search with username"
            />
          </div>
          <div style={{ marginTop: "50px" }}>
            <label>Without Debounce : </label>
            <input
              type="text"
              onKeyUp={(e) => fetchUserInData(e)}
              placeholder="search with username"
              style={{
                height: "40px",
                backgroundColor: "#fff",
                border: "1px solid #eee",
                padding: "20px",
                textTransform: "capitalize",
              }}
            />
          </div>
        </div>
        <hr />
        <h2>Users</h2>
        {userData?.map((data) => {
          return (
            <div key={data.username} style={{ borderBottom: "1px solid #eee" }}>
              <p>Name : {data.name}</p>
              <p>User Name : {data.username}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Users;
