import React, { useState } from "react";
import Loader from "@/components/Loader/LoaderFull";
import Link from "next/link";
function CreateDummyData() {
  const [formData, setFormData] = useState({
    customer_id: Math.floor(10000000 + Math.random() * 90000000),
    abandoned_checkout_url: "https://ghc.health/",
    email: "ddasds@cc.cc",
    order_created_at: "",
    order_id: Math.floor(10000000 + Math.random() * 90000000),
  });
  const [apiResult, setApiResult] = useState(null);
  const [loader, setLoader] = useState(false);
  const setDataInState = (state) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        ...state,
      };
    });
  };
  const saveData = async () => {
   
    if (formData.order_created_at == "") {
      setApiResult({ message: "Please enter created time" });
    } else if (formData.order_id == "") {
      setApiResult({ message: "Please enter order id" });
    } else if (formData.customer_id == "") {
      setApiResult({ message: "Please enter customer id" });
    } else if (formData.order_id == "") {
      setApiResult({ message: "Please enter order id" });
    } else if (formData.abandoned_checkout_url == "") {
      setApiResult({ message: "Please add checkout url" });
    } else {
      setLoader(true);
      const data = await fetch("http://localhost/ssit/api/addOrder.php", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          ...formData,
        }),
      });
      const response = await data.json();
      setApiResult(response?.result);
      setLoader(false);
    }
  };
  return (
    <div className="container">
      {loader && <Loader />}
      <Link href="/abond">
        <a>Go Back</a>
      </Link>
      <h1> Create Tempdata</h1>
      {apiResult && (
        <p>
          <b>{apiResult?.message}</b>
        </p>
      )}
      <input
        type="text"
        placeholder="Customer ID"
        value={formData.customer_id}
        onChange={(e) => setDataInState({ customer_id: e.target.value })}
      />
      <input
        type="email"
        placeholder="Customer email"
        value={formData.email}
        onChange={(e) => setDataInState({ email: e.target.value })}
      />
      <input
        type="url"
        placeholder="Checkout Url"
        value={formData.abandoned_checkout_url}
        onChange={(e) =>
          setDataInState({ abandoned_checkout_url: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Order ID"
        value={formData.order_id}
        onChange={(e) => setDataInState({ order_id: e.target.value })}
      />
      <input
        type="datetime-local"
        placeholder="Order Date"
        value={formData.order_created_at}
        onChange={(e) => setDataInState({ order_created_at: e.target.value })}
      />
      <button onClick={saveData}>Save</button>
    </div>
  );
}

export default CreateDummyData;
