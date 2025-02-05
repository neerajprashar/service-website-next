import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurServices from "@/components/OurServices";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";


export default function Home() {
  return (
    <>
 
    <main>
      <div className="container-fluid px-0">
        <Hero />
      </div>
      <section className="why-choose-us py-5 bg-light text-center">
        <WhyChooseUs />
      </section>
      <section className="our-services py-5 text-center">
        <OurServices />
      </section>
      <section className="our-services py-5 text-center">
        <Testimonials />
      </section>
      <section className="our-services py-5 text-center">
        <CallToAction />
      </section>
    </main>
    </>
 
  );
}
