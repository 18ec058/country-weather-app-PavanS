import "./styles.css";
import { AppProvider } from "./context/AppContext";

import Router from "./Router";

export default function App() {
  return (
    <div className="container">
      <AppProvider>
        <Router />
      </AppProvider>
    </div>
  );
}