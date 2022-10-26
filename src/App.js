import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import Section2 from "./pages/Section2";

import "./styles.scss";

export default function App() {
  const scroller = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const scroller = document.querySelector(".scroller");
    const bodyScrollBar = Scrollbar.init(scroller);

    ScrollTrigger.scrollerProxy(scroller, {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      }
    });

    bodyScrollBar.addListener(ScrollTrigger.update);

    gsap.to(document.querySelector("#box"), {
      duration: 4,
      scrollTrigger: {
        trigger: document.querySelector("#box"),
        start: "top 80%",
        markers: true,
        scroller: scroller,
        pin: true
      }
    });
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scroller = document.querySelector(".scroller");
    const bodyScrollBar = Scrollbar.init(scroller);

    ScrollTrigger.scrollerProxy(scroller, {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      }
    });

    bodyScrollBar.addListener(ScrollTrigger.update);

    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      document.querySelector(".title"),
      {
        opacity: 1,
        x: 0
      },
      {
        opacity: 1,
        x: -200,
        duration: 3,
        scrollTrigger: {
          trigger: document.querySelector(".title"),
          start: "top top",
          end: "bottom",
          scroller: scroller,
          scrub: true,
          markers: true
        }
      }
    );
  }, []);

  return (
    <div className="App">
      <div ref={scroller} className="scroller">
        <div className="section section--1">
          <h1 className="title">
            React (CRA)
            <br />
            ScrollTrigger / smooth scrollbar
          </h1>
        </div>
        <Section2 />
        <div className="section section--3"></div>
      </div>
    </div>
  );
}
