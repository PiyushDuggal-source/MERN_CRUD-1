import React, { useEffect, useState } from "react";
import Formm from "./Form";

import axios from "axios";
import { useParams } from "react-router-dom";
const Edit = () => {
  const [info, setInfo] = useState();

  //  param name should be same as the name given in the Route's path
  const { id } = useParams();

  useEffect(() => {
    const getInfo = async (iD) => {
      const getinformation = await axios
        .get(`http://localhost:5000/edit/${iD}`)
        .then((res) => res.data);

      setInfo(getinformation);
    };
    getInfo(id);
  }, []);

  return info ? (
    <div className="container">
      <div className="mt-3">
        <h2 className="text-center mb-4" style={{ fontSize: "40px" }}>
          Edit User Informations{" "}
        </h2>
        <Formm info={info} />
      </div>
    </div>
  ) : (
    <div className="container m-5">
      <div>Loading...</div>
    </div>
  );
};

export default Edit;
