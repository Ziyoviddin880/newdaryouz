import { createRoot } from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.scss";

const htmlWrite = document.getElementById("root");
const root = createRoot(htmlWrite);
root.render(<App />);
