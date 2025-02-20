"use client"
import BookList from "@/components/Home/BookList";
import Header from "@/components/Home/Header";
import { sampleBooks } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IKImage } from "imagekitio-next";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const sample = sampleBooks[0]

  useGSAP(()=>{
    gsap.to(".booksHeader", {
      opacity: 1,
      translateY: 0,
      delay: 0.5,
      duration: 0.8,
      scrollTrigger: {
        trigger: "#bookSection", 
        start: "top bottom",
        toggleActions: "play none none none",
      },
    })
    gsap.to(".eachBook",{
      opacity: 1,
      translateX: 0,
      delay: 0.9,
      duration: 1,
      stagger: 0.4,
      scrollTrigger: {
        trigger: "#bookSection", 
        start: "top bottom", 
        toggleActions: "play none none none",
      },
    })
  },[])

  return (
    <>
      <Header book={sample}/>
      <section id="bookSection" className=" wrapper_div max-sm:my-5 mt-24 pb-10">
        <h4 className=" booksHeader translate-y-5 opacity-0 sub_textHeader">Popular Books</h4>
        <div className=" flex flex-wrap flex-grow max-sm:gap-3 gap-8 xl:gap-10 transition-all ">
          {sampleBooks.map((book)=>(
            <BookList key={book.id} book={book}/>
          ))}
        </div>
        {/* <div className="App">
          <h1>ImageKit Next.js quick start</h1>
          <IKImage lqip={{ active: true }} loading="lazy" path="default-image.jpg" width={400} height={400} alt="Alt text" />
        </div> */}
      </section>
    </>
  );
}

export default Home;