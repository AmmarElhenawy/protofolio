"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import Footer from "./Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Sidebar open={isOpen} setOpen={setIsOpen} />

      {/* Overlay — z-40: below TopNav and Sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* TopNav — z-50: always above overlay so hamburger stays clickable */}
      <TopNav setOpen={setIsOpen} />

      <main className="pt-16 min-h-screen flex flex-col lg:ml-64">
        {children}
        <Footer />
      </main>
    </>
  );
}