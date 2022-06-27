import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>NextJs Projects</title>
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

      <main>
        <h1 className="title">
          Welcome to{" "}
          <a href="https://github.com/maneeswarmutyala">Next.js Projects!</a>
        </h1>

        <p className="description">Click on the project and view</p>

        <div className="grid">
          <Link href="/blog">
            <a className="card">
              <h3>Blog &rarr;</h3>
              <p>Blog Page using SSG </p>
            </a>
          </Link>
          <Link href="/users">
            <a className="card">
              <h3>Users &rarr;</h3>
              <p>
                Search Users, debouncing, controlled component, useEffect and
                useState Hooks
              </p>
            </a>
          </Link>
          <Link href="/photos">
            <a className="card">
              <h3>Photos &rarr;</h3>
              <p>Flexbox, Grid, Server Side Rendering</p>
            </a>
          </Link>
          <Link href="/todo">
            <a className="card">
              <h3>To do &rarr;</h3>
              <p>Client Side Data Fetching Using Fetch, useEffect, useState</p>
            </a>
          </Link>
          <Link href="/tic-tac-toe">
            <a className="card">
              <h3>Tic Tac Toe &rarr;</h3>
              <p>Game</p>
            </a>
          </Link>
        </div>
      </main>

      <footer>Next js projects by Maneeswar Mutyala</footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
