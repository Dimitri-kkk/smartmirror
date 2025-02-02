'use client'

import Footer from "./components/footer";
import Popular from "./components/popular";
import { SpecialOffer } from "./components/specialOffer";
import { Welcome } from "./components/welcome";

export default function Home() {
  return (
    <div>
    <Welcome />
    <Popular />
    <SpecialOffer />
    <Footer />
    </div>
  );
}
