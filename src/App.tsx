import { Helmet } from "react-helmet";
import AboutFylo from "./components/AboutFylo";
import Comments from "./components/Comments";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <div className="h-screen">
      <Helmet>
        <title>Project</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <body className="bg-primary-background h-screen font-sans scroll-smooth" />
      </Helmet>
      <div>
        <div className="bg-primary h-96 bg-curvy-desktop bg-contain bg-no-repeat bg-bottom relative mb-16">
          <Navbar />
          <img
            src="./images/illustration-intro.png"
            alt="intro"
            className="w-9/12  absolute top-1/2 left-[53%] -translate-x-1/2 -translate-y-1/2 "
          />
          <h1 className="text-white font-bold font-raleway text-2xl tracking-wide text-center px-2 whitespace-pre-wrap absolute -bottom-10 z-10">
            All your files in one secure location accessible anywhere.
          </h1>
        </div>
        <p className="text-white opacity-80 font-normal font-sans text-center whitespace-pre-wrap  px-9 text-sm">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <div className="flex justify-center items-center w-full my-8">
          <button className="text-white border-none font-raleway font-bold bg-gradient-to-r from-accent-cyan to-accent-blue px-24 py-4 text-center tracking-wide text-sm rounded-full hover:to-accent-cyan">
            Get Started
          </button>
        </div>
      </div>
      <Features />
      <AboutFylo />
      <Comments />
      <Footer />
    </div>
  );
}
