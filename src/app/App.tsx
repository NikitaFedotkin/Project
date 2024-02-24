import React from 'react';
import {Link} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/aliases/classNames";
import {AppRouter} from "app/providers/router";

const App = () => {
    const {theme,toggleTheme} = useTheme();

    return (
        <div className={classNames("app",{},[theme])}>
            <button onClick={()=>{
                toggleTheme()
            }}>
                click
            </button>
            <Link to="/about">aboutPage</Link>
            <Link to="/">mainPage</Link>
            <AppRouter>

            </AppRouter>
        </div>
    );
};

export default App;