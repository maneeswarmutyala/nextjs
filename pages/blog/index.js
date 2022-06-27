import Head from "next/head";
import Link from "next/link";
function Blog(props) {
  const { posts } = props;
  return (
    <>
      <Head>
        <title>Blog | Next Projects</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Maneeswar Mutyala" />
        <meta name="keywords" content="blog,nextjs,json placeholder"/>
        <meta name="description" content="Blog With Json Placeholder API"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="INDEX,FOLLOW" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/44763136?s=400&u=27ce34de0b72f59ac2894407853898a86e475b86&v=4"/>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://github.com/maneeswarmutyala" />
        <meta property="og:title" content="Blog Listing, Nextjs Project" />
        <meta property="og:site_name" content="Next Js Projects" />
        <meta property="og:description" content="Blog Listing, Nextjs Project" />
      </Head>
      <div className="container">
      <Link href="/"> Go to Home</Link>

      {posts?.map((post) => {
        return (
          <div key={post.id} style={{ borderBottom: "1px solid #eee", cursor: "pointer"}}>
            <Link href={`/blog/${post.id}`}>
              <p>
                {post.id} {post.title}
              </p>
            </Link>
          </div>
        );
      })}
      </div>
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
