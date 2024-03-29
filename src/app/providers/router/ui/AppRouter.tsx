import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {RouteConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {
                    Object.values(RouteConfig).map(({element,path})=>{
                        return <Route key={path} path={path} element={element}/>
                    })
                }
            </Routes>
        </Suspense>
    );
};

export default AppRouter;