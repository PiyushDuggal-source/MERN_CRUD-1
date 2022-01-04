import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, Alert, Form, Card } from "react-bootstrap";
import axios from "axios";

const CreateInfo = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const history = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/create", data);
    history("/");
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="mt-3">
        <h2 className="text-center mb-4" style={{ fontSize: "40px" }}>
          Create User
        </h2>
        <Card>
          <Card.Body>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group m-2">
                <label htmlFor="name">Name:&nbsp;</label>
                <input
                  className="form-control"
                  {...register("name")}
                  type="name"
                  name="name"
                  id="name"
                />
              </div>
              <div className=" m-2 form-group">
                <label htmlFor="email">Email:&nbsp;</label>
                <input
                  className="form-control"
                  {...register("email")}
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className=" m-2 form-group">
                <label htmlFor="number">Phone Number:&nbsp;</label>
                <input
                  className="form-control"
                  {...register("number")}
                  type="number"
                  name="number"
                  id="number"
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CreateInfo;
