import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Compnents";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import ReduxToastr from "react-redux-toastr";
import { Provider } from "react-redux";
import store from "./redux/store";
import DashBoard from "./pages copy/dashboard/Dashboard";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-right"
            getState={(state) => state.toastr} // This is the default
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick
          />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route>404 Not Found!</Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
