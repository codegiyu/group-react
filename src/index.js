// import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Layout from "./pages/layout";
import Home from "./pages/index";
import AllComponents from "./components/allComponents";
// import ImageSection from "./components/imageSection";
// import Input from "./components/input";
// import Pentagon from "./components/pentagon";
// import Secure from "./components/secure";


// let heading1 = "Join Us!"
// let paragraph1 ="To begin this journey, tell us what type of account you'd be opening."

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route exact path="all-components" element={<AllComponents />} />
          {/* <Route exact path="headings" element={<Heading heading={ heading1 } paragraph={ paragraph1 } />} />
          <Route exact path="pentagon" element={<Pentagon />} />
          <Route exact path="secure" element={<Secure />} />
          <Route exact path="input" element={<Input />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);