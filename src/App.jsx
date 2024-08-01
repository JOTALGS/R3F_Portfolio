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

function Title3D() {
  return (
    <div className="h-screen w-screen">
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          preserveDrawingBuffer: true,
        }}
        camera={{
          fov: 55,
          near: 0.1,
          far: 200,
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}


function App() {
  return (
    <>
      <Leva
        collapsed={false}
        flat={true}
        hidden
        theme={{
          sizes: {
            titleBarHeight: "28px",
          },
          fontSizes: {
            root: "10px",
          },
        }}
      />
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

        <UI />
        <Loader />
        <Canvas shadows camera={{ position: [-3, 1, 4], fov: 45 }} style={{ width: "100vw", height: "80vh" }}>
          <group position-y={0}>
            <Suspense fallback={null}>
              <Experience />
            </Suspense>
          </group>
        </Canvas>

        <ContactUs />
      </main>
    </>
  );
}

export default App;
