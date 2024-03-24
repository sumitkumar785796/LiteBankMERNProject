import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddUser = () => {
    const [input, setInput] = useState({
        name: '',
        email: '',
        amount: ''
    });
    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((preValue) => ({
            ...preValue,
            [name]: value,
        }));
    }
    const handleTransfer = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`/customer`, input);
            setInput({
                name: '',
                email: '',
                amount: ''
            })
            toast.success(response.data.message);
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        } catch (error) {
            toast.error("Error transferring money:", error);
            console.error("Error transferring money:", error)
        }
    }

    return (
        <div className="container">
            <ToastContainer position="top-right" />
            <h1>Add Customer</h1>
            <form onSubmit={handleTransfer}>
                <div className="form-group row">
                    <label htmlFor="creditAccount" className="col-sm-2 col-form-label">
                        Name
                    </label>
                    <div className="col-sm-10">
                        <input
                            name="name"
                            type="text"
                            className="form-control"
                            id="creditAccount"
                            value={input.name}
                            onChange={handleInput}
                            placeholder="Enter Your Name"
                        />
                    </div>
                    <label htmlFor="creditAccount" className="col-sm-2 col-form-label">
                        Email
                    </label>
                    <div className="col-sm-10">
                        <input
                            name="email"
                            type="email"
                            className="form-control"
                            id="creditAccount"
                            value={input.email}
                            onChange={handleInput}
                            placeholder="Enter Your Email"
                        />
                    </div>
                    <label htmlFor="creditAccount" className="col-sm-2 col-form-label">
                        Amount
                    </label>
                    <div className="col-sm-10">
                        <input
                            name="amount"
                            type="number"
                            className="form-control"
                            id="creditAccount"
                            value={input.amount}
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

export default AddUser;
