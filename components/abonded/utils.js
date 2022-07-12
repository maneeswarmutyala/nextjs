import moment from "moment";
import {constants} from './constants'
export const getDefaultSchedules = (time) => {
  let formatedTime = moment(time).format("YYYY-MM-DD hh:mm:ss");
  const THIRTY_MIN = moment(formatedTime)
    .add(30, "minutes")
    .format("YYYY-MM-DD hh:mm:ss");
  const NEXT_DAY = moment(formatedTime)
    .add(1, "days")
    .format("YYYY-MM-DD hh:mm:ss");
  const THIRD_DAY = moment(formatedTime)
    .add(3, "days")
    .format("YYYY-MM-DD hh:mm:ss");

  return (
    <>
      <li>{THIRTY_MIN}</li>
      <li> {NEXT_DAY}</li>
      <li>{THIRD_DAY}</li>
    </>
  );
};
export const formatTime = (time) => {
  return moment(time).format("YYYY-MM-DD hh:mm:ss");
};
export const formatSchedules = (time) => {
  let formatedTime = time.split("_");
  return (
    <ul>
      {formatedTime?.map((time) => {
        return <li key={time}>{time}</li>;
      })}
    </ul>
  );
};

export function convertArrayOfObjectsToCSV(array) {
  let result;

  const columnDelimiter = ",";
  const lineDelimiter = "\n";
  const keys = Object.keys(array[0]);

  result = "";
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  array.forEach((item) => {
    let ctr = 0;
    keys.forEach((key) => {
      if (ctr > 0) result += columnDelimiter;

      result += item[key];

      ctr++;
    });
    result += lineDelimiter;
  });

  return result;
}

export function downloadCSV(array) {
  const link = document.createElement("a");
  let csv = convertArrayOfObjectsToCSV(array);
  if (csv == null) return;

  const filename = "export.csv";

  if (!csv.match(/^data:text\/csv/i)) {
    csv = `data:text/csv;charset=utf-8,${csv}`;
  }

  link.setAttribute("href", encodeURI(csv));
  link.setAttribute("download", filename);
  link.click();
}

export const getStatusClassName = (status) => {
  let className = "info-label";
  if (status === constants.SUCCESS) {
    className = "success-label";
  } else if (status === constants.FAILED) {
    className = "error-label";
  } else if (status === constants.IN_PROGRESS) {
    className = "progress-label";
  }
  return className;
};