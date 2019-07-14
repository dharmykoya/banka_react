import React from "react";
import "./ListUser.css";

const ListUser = () => {
  return (
    <main class="list-account-main">
      <h3 class="page-title">List of all Staffs</h3>
      <section class="list-account-container">
        <div
          id="savings_account"
          class="tabcontent-list-account show-tabcontent"
        >
          <table id="savings-account-table" class="list-account-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Staff ID</th>
                <th>Date Created</th>
                <th>Type</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody id="staff-tbody">
              <tr class="list-tr-hover">
                <td>Atiku Abubaka</td>
                <td>001</td>
                <td>22nd Jan, 2019</td>
                <td>staff</td>
                <td>Active</td>
                <td>
                  <a href="staffAccount.html" class="table-action">
                    view
                  </a>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="last-child">
                <td colspan="6" class="tran-pagination">
                  <div class="pagination">
                    <a href="#">&laquo;</a>
                    <a href="#" class="active">
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
