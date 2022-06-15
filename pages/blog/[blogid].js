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
  if (post) {
    return (
      <>
        <h2>{post?.title}</h2>
        <div>{post?.body}</div>
      </>
    );
  }
  return <></>;
}
export default Blog;
