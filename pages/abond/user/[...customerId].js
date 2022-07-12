import React from "react";
import DataTable from "react-data-table-component";
import {
  getDefaultSchedules,
  formatSchedules,
  formatTime,
} from "@/components/abonded/utils";
import Link from "next/link";
import { constants, API_ENDPOINT } from "@/components/abonded/constants";
function User({ orders, customerId }) {
  const getStatusClassName = (status) => {
    let className = "info-label";
    if (status === constants.JOBS_COMPLETED) {
      className = "success-label";
    } else if (status === constants.ORDER_PLACED) {
      className = "progress-label";
    }
    return className;
  };
  const columns = [
    {
      name: "Order Id",
      selector: (row) => (
        <a href={`/abond/order/${row.order_id}`}>{row.order_id}</a>
      ),
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Schedules",
      selector: (row) =>
        row.schedules
          ? formatSchedules(row.schedules)
          : getDefaultSchedules(row.order_created_at),
    },
    {
      name: "Status",
      selector: (row) => <p className={getStatusClassName()}>{row.status}</p>,
    },
    {
      name: "Created at",
      selector: (row) => formatTime(row.order_created_at),
    },
    {
      name: "Action",
      selector: (row) => (
        <a href={`/abond/schedule/${row.order_id}`} className="btn-default">
          Schedule
        </a>
      ),
    },
  ];
  const data = orders?.status != "SUCCESS" ? [] : [...orders?.data];
  return (
    <div className="container">
      <div>
        <Link href="/abond">
          <a>Go Back</a>
        </Link>
      </div>
      <h1> Abonded Orders List of Customer {customerId}</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default User;
export async function getServerSideProps(context) {
  const { customerId } = context.query;
  const url = `${API_ENDPOINT}getUserOrders.php?customer_id=${customerId}`;
  let response = await fetch(url);
  let data = await response.json();
  return {
    props: {
      orders: data?.result,
      customerId,
    },
  };
}
