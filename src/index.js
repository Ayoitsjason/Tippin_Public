import ReactDOM from "react-dom";
// Redux
import { Provider } from "react-redux";

import App from "./App.js";
import store from "./store.js";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
