import Header from "./header"
import Hero from "./hero"

export function Welcome() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/mainmirror.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background overlay for better text readability on mobile */}
      <div className="absolute inset-0 bg-black/10 sm:bg-transparent"></div>

      {/* Responsive container with adaptive padding */}
      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:pl-[200px] xl:pl-[300px]">
        <Header />
        <Hero />
      </div>
    </div>
  )
}
