import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Headermain } from "./components/header";
import { Home } from "./components/home";
import { About } from "./components/about";
import { ContactUs } from "./components/contact";
import AnimatedCursor  from "./hooks/AnimatedCursor";

import { Loader } from "@react-three/drei";
import { Suspense } from "react";
import { Experience } from "./components/portfolio/Experience";
import { UI } from "./components/portfolio/UI";


function App() {
  return (
    <div className="App">
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <main className="font-sans">
        <Headermain />
        <Home />
        <About />
        <ContactUs />
      </main>
    </div>
  );
}

export default App;
