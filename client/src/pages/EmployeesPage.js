import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTable, TableFooter } from '../functions/table';

const EmployeesPage = ({ rowsPerPage }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  const navigate = useNavigate();

  const handleResponse = async () => {
    const response = await fetch("http://localhost:3000/get");

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const records = await response.json();
    setData(records);
  };

  useEffect(() => {
    handleResponse();
  }, []);
  
  return (
    <>
      <div className="d-flex justify-content-between my-4 mx-5">
        <h2 className="text-secondary">Employees</h2>
        <button onClick={e => navigate('/addEmployee')} className="btn btn-primary text-white">Add Employee</button>
      </div>
      <div className="d-flex justify-content-center table-responsive">
        <div style={{ width: '550px' }}>
          <table className="w-100 border-0 table table-striped">
            <thead className="bg-transparent rounded">
              <tr>
                <th className="bg-secondary p-2 font-weight-normal text-start fs-5 text-white">#</th>
                <th className="bg-secondary p-2 font-weight-normal text-start fs-5 text-white">First Name</th>
                <th className="bg-secondary p-2 font-weight-normal text-start fs-5 text-white">Last Name</th>
                <th className="bg-secondary p-2 font-weight-normal text-start fs-5 text-white">Username</th>
                <th className="bg-secondary p-2 font-weight-normal text-start fs-5 text-white">Remove</th>
              </tr>
            </thead>
            <tbody>
              {slice?.map((el, index) => (
                <tr key={el.userName}>
                  <td className="text-secondary p-2 fs-5">{index}</td>
                  <td className="text-secondary p-2 fs-5">{el.FirstName}</td>
                  <td className="text-secondary p-2 fs-5">{el.LastName}</td>
                  <td className="text-secondary p-2 fs-5">{el.UserName}</td>
                  <td className="text-secondary p-2 fs-5">
                    <Link to='/delete'>
                      <button className="btn btn-danger">Delete</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
        </div>
      </div>
    </>
  );
}

export default EmployeesPage;
