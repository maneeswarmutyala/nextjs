import React from "react";
import DataTable from "react-data-table-component";
import { formatSchedules } from "./utils";
function Jobs({ jobs }) {
  console.log(jobs);
  const columns = [
    {
      name: 'Id',
      selector : (row) => row.id,
      sortable :true,
    },
    {
      name: "Customer Id",
      selector: (row) => (
        <a href={`/abond/user/${row.customer_id}`}>{row.customer_id}</a>
      ),
      sortable :true,

    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable :true,

    },
    {
      name: "Order Id",
      selector: (row) => (
        <a href={`/abond/order/${row.order_id}`}>{row.order_id}</a>
      ),
      sortable :true,

    },
    {
      name: "Schedules",
      selector: (row) =>
      row.schedules ? formatSchedules(row.schedules) : 'No Schedules',
    },
    {
      name: "Action",
      selector: (row) => (
        <a href={`/abond/schedule/${row.order_id}`} className="btn-default">Schedule</a>
      ),
    },
  ];

  const data = [...jobs];
  return <DataTable columns={columns} data={data} pagination={true} />;
}

export default Jobs;
