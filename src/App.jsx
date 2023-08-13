import { useState } from "react";
import "./App.scss";
import Logo from "./assets/logo.jpeg";
import Picture from "./assets/pic_eden.jpeg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./component/aboutMe/AboutMe";
import Explanation from "./component/explanation/Explanation";
import Contact from "./component/contact/Contact";
import Home from "./component/home/Home";
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="aboutme" element={<AboutMe />} />
      <Route path="explanation" element={<Explanation />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
