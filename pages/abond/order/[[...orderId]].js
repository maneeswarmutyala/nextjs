import React, { useState } from "react";
import DataTable from "react-data-table-component";
import Link from "next/link";
import { constants, API_ENDPOINT } from "@/components/abonded/constants";
import { downloadCSV,getStatusClassName } from "@/components/abonded/utils";
function Order({ ordersData, orderId }) {
  const [apiResult, setApiResult] = useState(null);
  const [orders, setOrders] = useState(ordersData);

  const getSchedules = async () => {
    const url = `${API_ENDPOINT}getSchedules.php?order_id=${orderId}`;
    let response = await fetch(url);
    let data = await response.json();
    setOrders(data?.result);
  };
  const isCancelAllowed = (status) => {
    if (status === constants.PENDING) {
      return true;
    }
    return false;
  };
  const cancelSchedule = async (e, id, status) => {
    e.preventDefault();
    if (!isCancelAllowed(status)) {
      return;
    }
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
  const data = orders?.status != "SUCCESS" ? [] : [...orders?.data];
  const Export = ({ onExport }) => (
    <button onClick={(e) => onExport(e.target.value)}>Export</button>
  );
  const actionsMemo = React.useMemo(
    () => <Export onExport={() => downloadCSV(data)} />,
    []
  );
  const columns = [
    {
      name: "User Id",
      selector: (row) => (
        <a href={`/abond/user/${row.customer_id}`}>{row.customer_id}</a>
      ),
    },
    {
      name: "Scheduled at",
      selector: (row) => row.scheduled_at ?? "Schedule Not Available",
      sortable: true,
    },
    {
      name: "Executed at",
      selector: (row) => row.executed_at ?? "Not Yet Executed",
      sortable: true,
    },
    {
      name: "Message",
      selector: (row) => "Default",
    },
    {
      name: "Status",
      selector: (row) =>
        <p className={getStatusClassName(row.status)}>{row.status}</p> ??
        "Not Available",
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <button
          onClick={(e) => cancelSchedule(e, row.id, row.status)}
          disabled={!isCancelAllowed(row.status)}
        >
          Cancel
        </button>
      ),
    },
  ];

  return (
    <div className="container">
      <div>
        <Link href="/abond">
          <a>Go Back</a>
        </Link>
      </div>
      <h1> Schedules of {orderId} Order</h1>
      {apiResult && (
        <p>
          <b>{apiResult?.message}</b>
        </p>
      )}
      <DataTable
        columns={columns}
        data={data}
        pagination={true}
        actions={actionsMemo}
      />
    </div>
  );
}

export default Order;
export async function getServerSideProps(context) {
  const { orderId } = context.query;
  const url = `${API_ENDPOINT}getSchedules.php?order_id=${orderId}`;
  let response = await fetch(url);
  let data = await response.json();
  return {
    props: {
      ordersData: data?.result,
      orderId,
    },
  };
}
