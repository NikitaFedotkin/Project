import {render} from "react-dom";
import classes from "./Test.Module.scss"
import "./styles/index.scss"
import App from "./App/App";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";
render(
    <>
        <ThemeProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ThemeProvider>
    </>
    ,
    document.getElementById("root")
)