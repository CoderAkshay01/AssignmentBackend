import "./main.css";
import App from "./app/App";
import { Provider } from "react-redux";
import { store } from "./store/Store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Main() {
  return (
    <div className="App">
      <Provider store={store}>
        <App />
        <ToastContainer position="bottom-right" />
      </Provider>
    </div>
  );
}

export default Main;
