import Head from "next/head";
import { useState, useEffect } from "react";
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
      </Head>
      <div>
        <div>
          <p>With Debounce</p>
          <input
            type="text"
            onKeyUp={(e) => handleUsers(e)}
            placeholder="search with username"
          />
        </div>
        <div>
          <p>Without Debounce</p>
          <input
            type="text"
            onKeyUp={(e) => fetchUserInData(e)}
            placeholder="search with username"
          />
        </div>
      </div>
      {userData?.map((data) => {
        return (
          <div key={data.username}>
            <p>Name : {data.name}</p>
            <p>User Name : {data.username}</p>
          </div>
        );
      })}
    </>
  );
}
export default Users;
