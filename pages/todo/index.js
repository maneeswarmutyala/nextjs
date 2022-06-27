import Head from "next/head";
import Link from "next/link";
import TodoContainer from "./../../components/todo/todo";
function todo() {
  return (
    <>
      <Head>
        <title>To Do</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Maneeswar Mutyala" />
        <meta name="keywords" content="todo,nextjs,json placeholder"/>
        <meta name="description" content="Todo List With Json Placeholder API"/>
      </Head>
      <div className="container">
      <Link href="/"> Go to Home</Link>
        <TodoContainer />
      </div>
    </>
  );
}
export default todo;
