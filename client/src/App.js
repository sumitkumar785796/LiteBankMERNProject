import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from "./components/Layout";
import ViewAllCustomers from "./components/ViewAllCustomers";
import TransferMoney from "./components/TransferMoney"
import View from "./components/View";
import Home from "./components/Home";
import AllTransationshow from "./components/AllTransationshow";
import AddUser from "./components/AddUser";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/AddUser" element={<AddUser />} />
            <Route path="/view-all-customers" element={<ViewAllCustomers />} />
            <Route path="/view-all-transation" element={<AllTransationshow />} />
            <Route path="/transfer-money" element={<TransferMoney />} />
            <Route path="/view/:id" element={<View />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

