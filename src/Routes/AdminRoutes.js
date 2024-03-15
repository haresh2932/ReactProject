import React from 'react';
import Products from '../Admin/Component/Products/Products';
import { Route, Routes } from 'react-router-dom'


function AdminRoutes(props) {
    return (
        <Routes>
            <Route exact path="/products" element={<Products />} />
        </Routes>
    );
}

export default AdminRoutes;