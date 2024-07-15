import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoaderComp from "./Components/Loader";
const BarChart = lazy(() => import("./Pages/Charts/BarChart"));
const LineChart = lazy(() => import("./Pages/Charts/LineChart"));
const PieChart = lazy(() => import("./Pages/Charts/PieChart"));

const Dashboard = lazy(() => import("./Pages/Dashboard"));
const Customer = lazy(() => import("./Pages/Customer"));
const Product = lazy(() => import("./Pages/Product"));
const Transaction = lazy(() => import("./Pages/Transaction"));
const AddNewProduct = lazy(() => import("./Pages/Management/AddNewProducts"));
const ProductManagement = lazy(
  () => import("./Pages/Management/ProductManagement")
);
const TransactionManagement = lazy(
  () => import("./Pages/Management/TransactionManagement")
);

const App = () => {
  return (
    <Router>
      <Suspense fallback={<LoaderComp />}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/customer" element={<Customer />} />
          <Route path="/admin/product" element={<Product />} />
          <Route path="/admin/transaction" element={<Transaction />} />

          {/* Charts */}

          {/* Apps */}

          {/* Manegment */}

          <Route path="/admin/product/new" element={<AddNewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route
            path="/admin/transaction/:id"
            element={<TransactionManagement />}
          />
          <Route path="/admin/chart/bar" element={<BarChart />} />
          <Route path="/admin/chart/pie" element={<PieChart />} />
          <Route path="/admin/chart/line" element={<LineChart />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
