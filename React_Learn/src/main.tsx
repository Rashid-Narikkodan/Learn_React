import { StrictMode } from "react";
import { createRoot } from "react-dom/client"
import App from "./App";

const conatiner = document.getElementById('root')
if(!conatiner) throw new Error("Root container missing in index.html")
createRoot(conatiner).render(
    <StrictMode>
        <App/>
    </StrictMode>
)