import React, { useRef, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { worktimeline, meta, dataabout, skills } from "../../content_option";
import { HashLink } from 'react-router-hash-link';
import CubeScene from "../cubeScene";
import { Canvas } from "@react-three/fiber";
import AboutScene from "../aboutScene";
import { motion, useInView } from "framer-motion";

const PdfModal = ({ show, handleClose, pdfFile }) => {
  if (!show) return null;

  return (
    <div className="custom-modal">
      <div className="custom-modal-content">
        <span className="custom-modal-close" onClick={handleClose}>
          &times;
        </span>
        <iframe src={pdfFile} width="100%" height="500px" title="PDF Preview"></iframe>
      </div>
    </div>
  );
};

export const About = () => {
  const [showPdf, setShowPdf] = useState(false);
  const [currentPdf, setCurrentPdf] = useState();

  const handleShowPdf = (pdfFile) => {
    setCurrentPdf(pdfFile);
    setShowPdf(true);
  };

  const handleClosePdf = () => setShowPdf(false);

  const serviceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: false, amount: 0.5 });
  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: false, amount: 0.5 });

  return (
    <HelmetProvider>
      <section id="about" className="about">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="px-24">
          <h1 className="display-4 mb-4">About me</h1>
          <hr className="t_border my-4 ml-0 mr-60 text-left" />
        </div>

        <div className="about_sec">
          <div className="canvas_container">
            <Canvas>
              <AboutScene title={dataabout.title} />
            </Canvas>
          </div>
          <div className="text_container">
            <div className="align-self-center">
              <div className="intro mx-auto">
                <motion.h1
                  ref={aboutRef}
                  className="about_me mb-1x"
                  initial="hidden"
                  animate={aboutInView ? "visible" : "hidden"}
                  variants={serviceVariants}
                  transition={{ duration: 0.5 }}
                >
                  {dataabout.aboutme}
                </motion.h1>
              </div>
            </div>
          </div>
        </div>

        <div className="education_sec">
          <div className="education_container">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  const ref = useRef(null);
                  const inView = useInView(ref, { once: false, amount: 0.5 });

                  return (
                    <motion.div
                      className="w-full py-6 motion_education"
                      key={i}
                      ref={ref}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      variants={serviceVariants}
                      transition={{ duration: 0.5, delay: i * 0.2 }}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <th
                        className="w-100 px-2"
                        scope="row"
                        style={{ flex: "1", textAlign: "left" }}
                      >
                        {data.jobtitle}
                      </th>
                      <div
                        style={{
                          display: "flex",
                          flex: "3",
                          justifyContent: "flex-end",
                          gap: "10px",
                        }}
                      >
                        <td className="px-2">
                          <a href={data.href}>{data.where}</a>
                        </td>
                        <td className="px-2">{data.date}</td>
                        <td className="px-2">
                          <button
                            onClick={() => handleShowPdf(data.file)}
                            className="mr-2 cta-button"
                          >
                            Preview
                          </button>
                        </td>
                      </div>
                    </motion.div>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="canvas_education_container">
            <Canvas>
              <AboutScene title={"Education Timeline"} />
            </Canvas>
          </div>
        </div>

        <div className="skills_sec">
          <div className="canvas_container">
            <Canvas>
              <AboutScene title={"Main Skills"} />
            </Canvas>
          </div>
          <div className="skills_container">
            <div className="align-self-center pt-12">
              <div className="intro mx-auto">
                <motion.h1
                  ref={skillsRef}
                  className="about_me mb-1x"
                  initial="hidden"
                  animate={skillsInView ? "visible" : "hidden"}
                  variants={serviceVariants}
                  transition={{ duration: 0.5 }}
                >
                  {skills.map((data, i) => {
                    const ref = useRef(null);
                    const inView = useInView(ref, { once: false, amount: 0.5 });

                    return (
                      <div key={i}>
                        <h3 className="progress-title">{data.name}</h3>
                        <div className="progress">
                          <div
                            ref={ref}
                            className={`${inView ? "progress-bar" : ""}`}
                            style={{
                              width: `${data.value * 20}%`,
                            }}
                          >
                            <div className="progress-value">{data.value}★</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </motion.h1>
              </div>
            </div>
          </div>
        </div>

        <PdfModal show={showPdf} handleClose={handleClosePdf} pdfFile={currentPdf} />
      </section>
    </HelmetProvider>
  );
};
