import { Provider } from "react-redux";
import { AppRouter } from "./router/AppRouter";
import { store } from "./store/store";
import { ToastContainer } from "react-toastify";
import { IsLoading } from "./components/is-loading";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
      <IsLoading/>
      <ToastContainer position="top-right" autoClose={3000} />
    </Provider>
  );
}

export default App;
