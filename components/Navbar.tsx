"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";

const NAV = [
  { id: "intro", label: "데이비스컵 소개" },
  { id: "players", label: "선수 소개" },
  { id: "guide", label: "테니스 가이드" },
  { id: "quiz", label: "퀴즈" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("intro");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={
        "sticky top-0 z-40 transition-all " +
        (scrolled
          ? "bg-white/85 backdrop-blur shadow-[0_1px_0_rgba(15,34,112,0.06)]"
          : "bg-white/0")
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:py-5">
        <a href="#top" aria-label="Home">
          <Logo />
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-9 text-sm font-medium text-royal-900/80">
            {NAV.map((item) => (
              <li key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  className={
                    "transition-colors hover:text-royal-500 " +
                    (active === item.id ? "text-royal-500" : "")
                  }
                >
                  {item.label}
                </a>
                {active === item.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full bg-royal-500"
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="grid h-10 w-10 place-items-center rounded-full bg-white shadow-soft md:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={
                "absolute left-0 right-0 top-0 h-0.5 bg-royal-700 transition-transform " +
                (open ? "translate-y-1.5 rotate-45" : "")
              }
            />
            <span
              className={
                "absolute left-0 right-0 top-1.5 h-0.5 bg-royal-700 transition-opacity " +
                (open ? "opacity-0" : "opacity-100")
              }
            />
            <span
              className={
                "absolute left-0 right-0 top-3 h-0.5 bg-royal-700 transition-transform " +
                (open ? "-translate-y-1.5 -rotate-45" : "")
              }
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <ul className="space-y-1 border-t border-royal-100/60 bg-white/95 px-5 py-4 backdrop-blur">
              {NAV.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block rounded-xl px-4 py-3 text-sm font-semibold text-royal-900 hover:bg-royal-50"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
