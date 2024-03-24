import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import TransferMoney from "./TransferMoney";

const View = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    axios.get(`/customer/${id}`)
      .then(response => {
        setCustomer(response.data.data);
      })
      .catch(error => {
        console.error('Error occurred:', error);
      });
  }, [id]);

  return (
    <>
    <br />
      {customer ? (
        <div className="container">
          <h1>Customer Details</h1>
          <p><strong>ID:</strong> {customer._id}</p>
          <p><strong>Name:</strong> {customer.name}</p>
          <p><strong>Current Amount:</strong> {customer.amount}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <TransferMoney/>
    </>
  );
};

export default View;
