"use client";
import { useCallback, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import Footer from "./Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Sidebar open={isOpen} onClose={close} />

      {/* Overlay — z-40: below TopNav and Sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={close}
        />
      )}

      {/* TopNav — z-50: always above overlay so hamburger stays clickable */}
      <TopNav open={isOpen} onToggle={toggle} />

      <main id="main" className="pt-16 min-h-screen flex flex-col lg:ml-64">
        {children}
        <Footer />
      </main>
    </>
  );
}
