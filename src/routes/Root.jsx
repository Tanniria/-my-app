import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";

export default function Root() {

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
