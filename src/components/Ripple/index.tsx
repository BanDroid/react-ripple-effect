"use client";

import React, { useEffect, type MouseEvent } from "react";
import "./index.css";

const RippleListener: React.FC = () => {
  const createRipple = (e: PointerEvent | MouseEvent<HTMLElement>) => {
    const target = (e.target as HTMLElement).closest(".md-ripples");
    if (!target) return;
  
    const rect = target.getBoundingClientRect();
    const radius = findFurthestPoint(
      e.clientX,
      (target as HTMLElement).offsetWidth,
      rect.left,
      e.clientY,
      (target as HTMLElement).offsetHeight,
      rect.top
    );
  
    const circle = document.createElement("span");
    circle.classList.add("ripple");
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.width = `${radius * 2}px`;
    circle.style.height = `${radius * 2}px`;
    circle.style.opacity = "0.16";
    circle.style.transform = "scale(0)";
    circle.style.transition = "transform 0.3s ease-out";
  
    target.appendChild(circle);
  
    // ✅ force reflow to apply the initial scale(0)
    circle.getBoundingClientRect();
  
    // ✅ now animate to scale(1)
    circle.style.transform = "scale(1)";

    // ✅ cleanup when pointer leaves *this target*
    const removeRipple = () => {
      circle.style.transition = "opacity 0.6s";
      circle.style.opacity = "0";
      circle.addEventListener("transitionend", () => {
        circle.remove();
      });
      target.removeEventListener("pointerup", removeRipple);
      target.removeEventListener("mouseleave", removeRipple);
      target.removeEventListener("dragleave", removeRipple);
      target.removeEventListener("touchend", removeRipple);
      target.removeEventListener("touchcancel", removeRipple);
      target.removeEventListener("touchmove", removeRipple);
    };

    target.addEventListener("pointerup", removeRipple);
    target.addEventListener("mouseleave", removeRipple);
    target.addEventListener("dragleave", removeRipple);
    target.addEventListener("touchend", removeRipple);
    target.addEventListener("touchcancel", removeRipple);
    target.addEventListener("touchmove", removeRipple);
  };  

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.addEventListener("pointerdown", createRipple)
    }

    return () => {
      if (typeof document !== "undefined") {
        document.removeEventListener("pointerdown", createRipple)
      }
    };
  }, []);

  return <></>;
};

function findFurthestPoint(
  clickPointX: number,
  elementWidth: number,
  offsetX: number,
  clickPointY: number,
  elementHeight: number,
  offsetY: number
) {
  const x = clickPointX - offsetX > elementWidth / 2 ? 0 : elementWidth;
  const y = clickPointY - offsetY > elementHeight / 2 ? 0 : elementHeight;
  return Math.hypot(x - (clickPointX - offsetX), y - (clickPointY - offsetY));
}

export default RippleListener;
