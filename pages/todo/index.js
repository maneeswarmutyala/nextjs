import Head from "next/head";
import TodoContainer from "./../../components/todo/todo";
function todo() {
  return (
    <>
      <Head>
        <title>To Do</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TodoContainer />
    </>
  );
}
export default todo;
