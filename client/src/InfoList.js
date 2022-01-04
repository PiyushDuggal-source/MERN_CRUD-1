import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import axios from "axios";
const InfoList = () => {
  const [items, setItems] = useState([]);

  const sendId = (id) => {
    return id;
  };

  useEffect(() => {
    const getInfo = async () => {
      const getinformation = await axios
        .get("http://localhost:5000")
        .then((res) => res.data);

      setItems(getinformation);
    };
    getInfo();
  }, []);

  const deleteInfo = (id) => {
    const _ = window.confirm("do you want to delete this user?");
    if (_) {
      axios.delete(`http://localhost:5000/delete/${id}`);
      window.location.reload();
      alert("User has been deleted");
    } else {
      alert("Not deleting it");
    }
  };
  return (
    <div className="container">
      <div className="container">
        <h1>User Information</h1>
        <Table responsive="sm" className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.number}</td>
                  <td>
                    <Link
                      className="btn btn-success"
                      onClick={() => sendId(item._id)}
                      to={`/edit/${item._id}`}
                    >
                      Edit
                    </Link>
                    &nbsp;
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteInfo(item._id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default InfoList;
