import React from "react";
import Fruites from "../Admin/Container/Fruites/Fruites";
import { Route, Routes } from "react-router-dom";
import Layout from "../Admin/Component/Layout/Layout";
import Vegetables from "../Admin/Container/Vegetable/Vegetables";

function AdminRoutes(props) {
  return (
    <Layout>
      <Routes>
        <Route exact path="/fruites" element={<Fruites />} />
        <Route exact path="/vegetables" element={<Vegetables />} />
      </Routes>
    </Layout>
  );
}

export default AdminRoutes;
