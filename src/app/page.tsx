'use client'

import Header from "./components/header";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/mainmirror.jpg')" }}
    >
      {/* Centered container for Header & Hero */}
      <div className="pl-[300px]">
        <Header />
        <Hero />
      </div>
    </div>
  );
}
