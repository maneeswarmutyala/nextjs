import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
function Blog() {
  const router = useRouter();
  const postId = router.query.blogid;
  const [post, setPost] = useState(null);
  useEffect(async () => {
    if (postId) {
      let resp = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      if (resp.status == 200) {
        setPost(await resp.json());
      } else {
        router.push("/blog");
      }
    }
  }, [postId]);
  return (
    <>
      <Head>
        <title>Blog View | Next Projects</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Maneeswar Mutyala" />
        <meta name="keywords" content="blog details,nextjs,json placeholder" />
        <meta
          name="description"
          content="Blog  Details, With Json Placeholder API"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="INDEX,FOLLOW" />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/44763136?s=400&u=27ce34de0b72f59ac2894407853898a86e475b86&v=4"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://github.com/maneeswarmutyala" />
        <meta property="og:title" content="Blog Listing, Nextjs Project" />
        <meta property="og:site_name" content="Next Js Projects" />
        <meta
          property="og:description"
          content="Blog Listing, Nextjs Project"
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
        <Link href="/blog"> Go to Blog</Link>
        {post && (
          <>
            <h2>{post?.title}</h2>
            <div>{post?.body}</div>
          </>
        )}
      </div>
    </>
  );
}
export default Blog;
