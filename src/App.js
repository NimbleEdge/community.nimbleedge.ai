import Router from "./routes/route";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
