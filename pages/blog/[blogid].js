import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
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
      </Head>
      {post && (
        <>
          <h2>{post?.title}</h2>
          <div>{post?.body}</div>
        </>
      )}
    </>
  );
}
export default Blog;
