import { Fragment } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { DataProvider } from '../context/DataContext';
import Home from '../pages/Home';

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <DataProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </DataProvider>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp
