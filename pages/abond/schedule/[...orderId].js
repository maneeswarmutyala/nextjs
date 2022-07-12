import React, { useState, useEffect } from "react";
import Link from "next/link";
import Loader from "@/components/Loader/LoaderFull";
import { formatTime, getStatusClassName } from "@/components/abonded/utils";
import { API_ENDPOINT,constants } from "@/components/abonded/constants";
function Schedule({ schedules, orderId }) {
  const [schedule, setSchedule] = useState([]);
  const [tempArray, setTempArray] = useState([]);
  const [apiResult, setApiResult] = useState(null);
  const [loader, setLoader] = useState(false);
  const addNew = () => {
    setSchedule([...schedule, new Date()]);
  };
  const isCancelAllowed = (status) => {
    if (status === constants.PENDING) {
      return true;
    }
    return false;
  };
  const handleChange = (value, index, id) => {
    let data = [...schedule];
    data[index]['schedule'] = formatTime(value);
    setSchedule(data);
    setTempArray([...tempArray, id]);
  };
  const deleteSchedule = (index) => {
    let data = [...schedule];
    data.splice(index, 1);
    setSchedule(data);
  };
  const getSchedules = async () => {
    const url = `${API_ENDPOINT}getSchedules.php?order_id=${orderId}`;
    let response = await fetch(url);
    let data = await response.json();
    setSchedule(data?.result);
  };
  const cancelSchedule = async (e, id, index) => {
    e.preventDefault();
    deleteSchedule(index);
    const formData = {
      id,
    };
    const url = `${API_ENDPOINT}cancelSchedule.php`;
    const data = await fetch(url, {
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
    getSchedules();
  };
  const submitSchedule = async (e) => {
    e.preventDefault();
    setLoader(true);
    const formData = {
      schedules: schedule,
      order_id: orderId[0],
    };
    const url = `${API_ENDPOINT}updateSchedule.php`;
    const data = await fetch(url, {
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
  };
  useEffect(() => {
    let data = schedules?.data?.map((item) => {
      return {
        schedule: item.scheduled_at,
        id: item.id,
        status : item.status
      };
    });
    setSchedule(data);
  }, []);
  return (
    <div className="container">
      {loader && <Loader />}
      <div>
        <Link href="/abond">
          <a>Go Back</a>
        </Link>
      </div>
      <h1> Update Schedules for {orderId} Order</h1>
      {apiResult && (
        <p>
          <b>{apiResult?.message}</b>
        </p>
      )}
      {/* <button onClick={addNew}>Add New</button> */}
      <table>
        <thead>
          <th>Id</th>
          <th>Time</th>
          <th>Status</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {schedule?.map((item, index) => {
            return (
              <tr key={item.schedule}>
                <td>{item.id}</td>
                <td>
                  <input
                    type="datetime-local"
                    value={item.schedule}
                    onChange={(e) =>
                      handleChange(e.target.value, index, item.id)
                    }
                    disabled={!isCancelAllowed(item.status)}
                  />
                </td>
                <td>
                  <p className={getStatusClassName(item.status)}>
                    {item.status}
                  </p>
                </td>
                <td>
                  <button onClick={(e) => cancelSchedule(e, item.id, index)}
                  disabled={!isCancelAllowed(item.status)}>
                    Cancel
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={(e) => submitSchedule(e)}>Save Schedule</button>
    </div>
  );
}

export default Schedule;
export async function getServerSideProps(context) {
  const { orderId } = context.query;
  const url = `${API_ENDPOINT}getSchedules.php?order_id=${orderId}`;
  let response = await fetch(url);
  let data = await response.json();
  return {
    props: {
      schedules: data?.result ?? [],
      orderId,
    },
  };
}
