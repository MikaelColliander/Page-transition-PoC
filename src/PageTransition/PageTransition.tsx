import React, { FC, PropsWithChildren, useRef, useState } from "react";

import { CSSTransition } from "react-transition-group";
import "./PageTransition.css";
import { useMediaQuery, useTheme } from "@sjse/component-library";
import { styled } from "@sjse/component-library";
import ScrollToTop from "./ScrollToTop";

export interface PageTransitionProps {
  isMatch: boolean;
  animationStarted?: () => void;
  animationStopped?: () => void;
  onEntered?: () => void;
  slideAxis?: "x" | "y";
  animationType: "forward" | "backward" | "none";
  scrollTarget: Element | null;
  scrollY?: number;
  activeElementIndex?: number;
  pathname?: string;
  restoreScrollOnForward?: boolean;
}

const focusableQueryString =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)';

const ClickTrap = styled("div")({
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  opacity: 0,
  zIndex: 2000,
});

const PageTransition: FC<PropsWithChildren<PageTransitionProps>> = ({
  children,
  animationStopped,
  animationStarted,
  isMatch,
  onEntered,
  animationType,
  slideAxis,
  scrollTarget,
  scrollY,
  activeElementIndex,
  pathname,
  restoreScrollOnForward,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAnimating, seIsAnimating] = useState(false);
  const axis = slideAxis || "x";
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const offset = containerRef.current?.getBoundingClientRect().top;
  const skipAnimation = !isMobile;
  return (
    <>
      {!skipAnimation && (
        <>
          {isAnimating && <ClickTrap />}
          <CSSTransition
            onEntered={() => {
              const element = containerRef.current as HTMLDivElement;
              seIsAnimating(false);
              if (animationStopped) {
                animationStopped();
              }
              if (animationType === "forward") {
                  scrollTarget?.scrollTo(0, 0);
              }
              if ((animationType === "backward" || restoreScrollOnForward) && scrollY) {
                element.style.marginTop = "0";
                scrollTarget?.scrollTo(0, scrollY);
              }

              // Focus element when browsing back, if activeElementIndex is passed.
              if (
                animationType === "backward" &&
                activeElementIndex &&
                activeElementIndex > -1
              ) {
                const focusableElements = element.querySelectorAll(
                  focusableQueryString
                ) as NodeListOf<HTMLElement>;
                const elementsArr = focusableElements
                  ? Array.from(focusableElements)
                  : [];
                elementsArr[activeElementIndex].focus();
                elementsArr[activeElementIndex].classList.add(
                  "Mui-focusVisible"
                );
                document.body.addEventListener(
                  "blur",
                  (event) => {
                    if (element.contains(event.target as Element)) {
                      focusableElements.forEach((item) => {
                        item.classList.remove("Mui-focusVisible");
                      });
                    }
                  },
                  true
                );
              }
              if (onEntered) {
                onEntered();
              }
            }}
            onEnter={() => {
              seIsAnimating(true);
              if (animationStarted) {
                animationStarted();
              }

              // Actual scroll position will take effect when transition is done, apply margin top to wrapping container initially, for visual smoothness
              if (animationType == "backward" || restoreScrollOnForward) {
                const element = containerRef.current as HTMLDivElement;
                if (element && scrollY) {
                  element.style.marginTop = `-${scrollY}px`;
                }
              }
            }}
            onExit={() => {
              if (animationType === "backward") {
                // This might be error prone.
                // The last child of the children has to be the element that should have scroll compensation on exit
                const element = containerRef.current as HTMLDivElement;
                if (element && offset) {
                  element.style.marginTop = `${offset}px`;
                }
              }
            }}
            onExiting={() => {
              if (animationType === "backward" && scrollTarget) {
                scrollTarget.scrollTo(0, 0);
              }
            }}
            unmountOnExit
            in={isMatch}
            timeout={animationType === "none" ? 0 : 300}
            classNames={
              animationType === "none" ? "skip" : animationType + `-${axis}`
            }
          >
            <div ref={containerRef}>{children}</div>
          </CSSTransition>
        </>
      )}
      {skipAnimation && isMatch && (
        <>
          <ScrollToTop />
          {children}
        </>
      )}
    </>
  );
};
export default PageTransition;
