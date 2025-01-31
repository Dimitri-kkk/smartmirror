'use client'

import Popular from "./components/popular";
import { Welcome } from "./components/welcome";

export default function Home() {
  return (
    <div>
    <Welcome />
    <Popular />
    </div>
  );
}
