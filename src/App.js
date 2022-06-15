import React, { useEffect, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Utilities
import setAuthToken from "./utils/setAuthToken";

// uielements
import LoadingSpinner from "./uiElements/LoadingSpinner.js";

// Owner Routes, Components, and Actions
import PrivateRoute from "./components/owners/PrivateRoute.js";
import Alert from "./components/layout/Alert.js";
import Header from "./components/layout/Header.js";
import Landing from "./components/layout/Landing.js";
import { loadUser } from "./actions/ownerAuth";
import ResetPassword from "./components/owners/ResetPassword.js";
const Register = React.lazy(() => import("./components/owners/Register.js"));
const Login = React.lazy(() => import("./components/owners/Login.js"));
const ForgotPassword = React.lazy(() =>
  import("./components/owners/ForgotPassword.js")
);
const Dashboard = React.lazy(() =>
  import("./components/owners/dashboard/Dashboard.js")
);
const QuickStats = React.lazy(() =>
  import("./components/owners/dashboard/home/QuickStats.js")
);
const Checkin = React.lazy(() =>
  import("./components/owners/checkin/Checkin.js")
);
const Customers = React.lazy(() =>
  import("./components/owners/dashboard/customers/Customers.js")
);
const Messages = React.lazy(() =>
  import("./components/owners/dashboard/messages/Messages.js")
);
const Coupons = React.lazy(() =>
  import("./components/owners/dashboard/coupons/Coupons.js")
);
const Confirm = React.lazy(() => import("./components/owners/Confirm.js"));

// Customer Routes, Components, and Actions
const CustomerRegister = React.lazy(() =>
  import("./components/customers/Register.js")
);

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <BrowserRouter>
      <div className="main-container">
        <Header />
        <Alert />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* 
              @ Public Routes 
              @ Role: Anyone
            */}
            <Route path="/" exact element={<Landing />} />

            {/* 
              @ Public Routes 
              @ Role: customer
            */}
            <Route
              path="/customer/register"
              exact
              element={<CustomerRegister />}
            />

            {/* 
              @ private Routes 
              @ Role: customer
            */}

            {/* 
              @ Public Routes 
              @ Role: owner
            */}
            <Route path="/owner/register" exact element={<Register />} />
            <Route path="/owner/login" exact element={<Login />} />
            <Route
              path="/owner/forgotpassword"
              exact
              element={<ForgotPassword />}
            />
            <Route
              path="/owner/confirm/:confirmationCode"
              exact
              element={<Confirm />}
            />
            <Route
              path="/owner/password-reset/:passwordResetToken"
              exact
              element={<ResetPassword />}
            />

            {/* 
              @ Authenticated Routes 
              @ Role: Owner
            */}
            <Route
              path="/owner/checkin"
              exact
              element={<PrivateRoute component={Checkin} />}
            />
            <Route
              path="/owner/dashboard"
              exact
              element={<PrivateRoute component={Dashboard} />}
            >
              <Route
                path="/owner/dashboard/home"
                exact
                element={<PrivateRoute component={QuickStats} />}
              />
              <Route
                path="/owner/dashboard/customers"
                exact
                element={<PrivateRoute component={Customers} />}
              />
              <Route
                path="/owner/dashboard/coupons"
                exact
                element={<PrivateRoute component={Coupons} />}
              />
              <Route
                path="/owner/dashboard/messages"
                exact
                element={<PrivateRoute component={Messages} />}
              />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
