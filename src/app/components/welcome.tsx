import Header from "./header";
import Hero from "./hero";


export function Welcome() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/mainmirror.jpg')", backgroundAttachment: "fixed" }}
    >
      {/* Centered container for Header & Hero */}
      <div className="pl-[300px]">
        <Header />
        <Hero />
      </div>
    </div>
  );
}