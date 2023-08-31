import Footer from "@/Screens/Footer/Footer";
import Hero from "@/Screens/Hero/Hero";
import Nav from "@/Screens/Nav/Nav";
// import Tech from "@/Screens/Tech/Tech";
import Work from "@/Screens/Work/Work";

export default function Home() {
  return (
    <main className="max-w-7xl m-auto">
      <Nav />
      <Hero />
      <Work />
      {/* <Tech /> */}
      <Footer />
    </main>
  );
}
