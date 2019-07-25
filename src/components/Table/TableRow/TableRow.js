/* eslint-disable arrow-parens */
import React from 'react';
import TableHead from '../TableHead/TableHead';
import TableData from '../TableData/TableData';

const tableRow = (props) => {
  let tableData;
  if (props.th) {
    tableData = props.th.map((header) => (
      <TableHead key={header}>{header}</TableHead>
    ));
    tableData = <tr>{tableData}</tr>;
  }
  if (props.td) {
    tableData = props.td.map((header) => (
      <TableData key={header}>{header}</TableData>
    ));
    tableData = <tr className="list-tr-hover">{tableData}</tr>;
  }
  return tableData;
};

export default tableRow;
