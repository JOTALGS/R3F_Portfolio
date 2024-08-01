import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { HashLink } from 'react-router-hash-link';
import CubeScene from "../cubeScene"
import { Canvas } from "@react-three/fiber";


export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec">
          <div className="text_container">
            <div className="align-self-center">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                        introdata.animated.fourth,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="intro_descr">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <HashLink to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn">
                      Check my Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </HashLink>
                  <HashLink to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </HashLink>
                </div>
              </div>
            </div>
          </div>
          <div className="canvas_pic_container">
            <Canvas className="">
              <CubeScene />
            </Canvas>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
