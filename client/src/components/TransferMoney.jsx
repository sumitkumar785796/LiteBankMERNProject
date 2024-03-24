import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const TransferMoney = () => {
  const { id } = useParams();
  const [viewUser, setViewUser] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get('/customer')
        setViewUser(resp.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  const [transfer, setTransfer] = useState({
    receiverId: '',
    balance: ''
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setTransfer((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  }
  const handleTransfer = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`/customer/${id}`, transfer);
      setTransfer({
        receiverId: '',
        balance: ''
      })
      toast.success(response.data.message);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errorData = error.response.data;
        if (errorData.errors) {
          // Handle validation errors
          errorData.errors.forEach((error) => {
            toast.error(error.msg);
          });
        } else {
          // Handle other types of errors
          toast.error(errorData.message || 'An error occurred');
        }
      } else {
        // Handle network errors
        console.error('An error occurred:', error);
        toast.error('An error occurred. Please try again later.');
      }
    }
  }

  return (
    <div className="container">
      <ToastContainer position="top-right" />
      <h1>Transfer Money</h1>
      <form onSubmit={handleTransfer}>
        <div className="form-group row">
          <label htmlFor="creditAccount" className="col-sm-2 col-form-label">
            Transfer To
          </label>
          <div className="col-sm-10">
            <select className="form-select" onChange={handleInput} value={transfer.receiverId} name="receiverId">
              <option>Select Customer</option>
              {viewUser && viewUser.map((item, index) => (
                <option value={item._id} key={index}>
                  {item.name}
                </option>
              ))}

            </select>
            <br />
          </div>
          <label htmlFor="creditAccount" className="col-sm-2 col-form-label">
            Transfer Amount
          </label>
          <div className="col-sm-10">
            <input
              name="balance"
              type="number"
              className="form-control"
              id="creditAccount"
              value={transfer.balance}
              onChange={handleInput}
              placeholder="Enter Your Amount"
            />
          </div>
        </div>
        <br />
        <br />
        <div className="form-group row">
          <div className="col-sm-12">
            <button type="submit" className="btn btn-primary">
              Transfer
            </button>
            <br /><br />
          </div>
        </div>
      </form>
    </div>
  );
};

export default TransferMoney;
