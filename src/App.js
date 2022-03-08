import Router from "./routes/route";
import ReactGA from "react-ga";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

ReactGA.initialize('UA-193183868-1');
ReactGA.pageview(window.location.pathname + window.location.search);

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
