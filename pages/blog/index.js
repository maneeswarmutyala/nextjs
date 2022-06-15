import Head from "next/head";
import Link from "next/link";
function Blog(props) {
  const { posts } = props;
  return (
    <>
      <Head>
        <title>Blog | Next Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {posts?.map((post) => {
        return (
          <div key={post.id} style={{ borderBottom: "1px solid #eee" }}>
            <Link href={`/blog/${post.id}`}>
              <p>
                {post.id} {post.title}
              </p>
            </Link>
          </div>
        );
      })}
    </>
  );
}
export default Blog;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
}
