import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./App.css";

const AnimationComponent = () => {
  const squareRef = useRef(null);
  const circleRef = useRef(null);
  const triangleRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    // square
    gsap.fromTo(
      squareRef.current,
      { x: -100, opacity: 0 },
      { x: 100, opacity: 1, duration: 1.5 }
    );

    // circle and triangle
    const tl = gsap.timeline();
    tl.to(circleRef.current, { scale: 1.5, duration: 1 })
      .to(triangleRef.current, { rotate: 180, duration: 1 }, "-=0.5");

    // dots
    gsap.fromTo(
      dotsRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2 }
    );
  }, []);

  return (
    <div className="animation-container">
      <div className="square" ref={squareRef}>Square</div>
      <div className="circle" ref={circleRef}>Circle</div>
      <div className="triangle" ref={triangleRef}>Triangle</div>
      <div className="dots">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="dot" ref={(el) => (dotsRef.current[index] = el)}>
            Dot {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimationComponent;
