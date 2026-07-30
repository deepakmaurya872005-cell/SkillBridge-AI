import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Stats />
       <HowItWorks />
      <FAQ />
      <Footer />
    </>
  );
};


export default Home;