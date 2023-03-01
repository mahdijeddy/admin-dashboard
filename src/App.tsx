import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { userInputs, productInputs } from "./sourceForm";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import "./style/darkmode.scss";
export const App = () => {
    const { state } = useContext(DarkModeContext);
    return (
        <div className={state.darkMode ? "app dark" : "app"}>
            <Router>
                <Routes>
                    <Route path="/">
                        {/* Home Route */}
                        <Route index element={<Home />} />
                        <Route path="login" element={<Login />} />
                        <Route path="users">
                            <Route index element={<List />} />
                            <Route path=":userId" element={<Single />} />
                            <Route
                                path="new"
                                element={<New inputs={userInputs} title="New User" />}
                            />
                        </Route>
                        {/* Products Route */}
                        <Route path="products">
                            <Route index element={<List />} />
                            <Route path=":productId" element={<Single />} />
                            <Route
                                path="new"
                                element={<New inputs={productInputs} title="Add New Product" />}
                            />
                        </Route>
                    </Route>
                </Routes>
            </Router>
        </div>
    );
};
