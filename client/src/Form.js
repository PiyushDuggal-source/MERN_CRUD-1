import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Button, Alert, Form, Card } from "react-bootstrap";

const Formm = ({ info }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: info,
  });

  const onSubmit = async (data) => {
    console.log(data);
    await axios.patch(`http://localhost:5000/edit/${info._id}`, data);
  };
  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
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
            <button
              type="submit"
              onClick={() => {
                window.location.href = "/";
              }}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Formm;
