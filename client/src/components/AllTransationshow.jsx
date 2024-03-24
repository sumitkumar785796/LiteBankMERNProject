import { useState, useEffect } from "react";
import axios from "axios";

const AllTransactionshow = () => {
    const [view, setView] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10); // Number of items per page

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await axios.get("/transaction");
                setView(resp.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = view.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <br />
            <div className="container">
                <h1>View All Customers</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Sender</th>
                            <th scope="col">Receiver</th>
                            <th scope="col">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((eachData, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{eachData.sender.name}</td>
                                <td>{eachData.receiver.name}</td>
                                <td>{eachData.balance}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* Pagination */}
                <ul className="pagination">
                    {[...Array(Math.ceil(view.length / itemsPerPage)).keys()].map(
                        (number) => (
                            <li key={number} className="page-item">
                                <button
                                    onClick={() => paginate(number + 1)}
                                    className="page-link"
                                >
                                    {number + 1}
                                </button>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </>
    );
};

export default AllTransactionshow;
