import Footer from "./footer";
import HeaderMenu from "./header-menu";
import HeaderTop from "./header-top";
import { Route, Routes } from "react-router-dom";
import { FullRoute } from "../constants/router";

const Root = () => {
    return <div className="root">
        <HeaderTop/>
        <HeaderMenu/>
        <div className="root-pages">
                <Routes>
                    {
                        FullRoute.map(item => (
                            <Route
                                path={item.path} 
                                key={item.id} 
                                element={item.element} />
                            ))
                        }
                </Routes>
        </div>
        <Footer />
        
    </div>
}

export default Root;
