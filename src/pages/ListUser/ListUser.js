import React from 'react';
import './ListUser.css';
import TableRow from '../../components/Table/TableRow/TableRow';

const ListUser = () => {
  const tableHead = [
    'Name',
    'Staff ID',
    'Date Created',
    'Type',
    'Status',
    'Action'
  ];
  return (
    <main className="list-account-main">
      <h3 className="page-title">List of all Staffs</h3>
      <section className="list-account-container">
        <div
          id="savings_account"
          className="tabcontent-list-account show-tabcontent"
        >
          <table id="savings-account-table" className="list-account-table list-table-th">
            <thead>
              <TableRow th={tableHead} />
            </thead>
            <tbody id="staff-tbody" className='list-table-th'>
              <tr className="list-tr-hover list-table-th">
                <td>Atiku Abubaka</td>
                <td>001</td>
                <td>22nd Jan, 2019</td>
                <td>staff</td>
                <td>Active</td>
                <td>
                  <a href="staffAccount.html" className="table-action">
                    view
                  </a>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="last-child">
                <td colspan="6" className="tran-pagination">
                  <div className="pagination">
                    <a href="#">&laquo;</a>
                    <a href="#" className="active">
                      1
                    </a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">&raquo;</a>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </main>
  );
};

export default ListUser;
