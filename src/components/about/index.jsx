import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta, dataabout } from "../../content_option";
import { HashLink } from 'react-router-hash-link';
import CubeScene from "../cubeScene"
import { Canvas } from "@react-three/fiber";
import AboutScene from "../aboutScene";


export const About = () => {
  return (
    <HelmetProvider>
      <section id="about" className="about">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="about_sec">
          <div className="canvas_container">
            <Canvas className="">
              <AboutScene />
            </Canvas>
          </div>
          <div className="text_container">
            <div className="align-self-center">
              <div className="intro mx-auto">
                <h1 className=" mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        dataabout.aboutme,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 1,
                    }}
                  />
                </h1>
              </div>
            </div>
          </div>

        </div>
      </section>
    </HelmetProvider>
  );
};
