function Blog(props) {
  const { posts } = props;
  return (
    <>
      {posts?.map((post) => {
        return (
          <div key={post.id}>
            <p>
              {post.id} {post.title}
            </p>
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
