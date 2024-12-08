import Head from "next/head";
import Image from "next/image";
import Cta from "../components/call-to-actions/cta";
import Features from "../components/features/features";
import Footer from "../components/footer/footer";
import Hero from "../components/hero/hero";
import NavBar from "../components/navBar/nav";
import Statistics from "../components/statistics/statistics";
import Testimonies from "../components/testimonial/testimonies";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <Features />
      <Testimonies />
      <Statistics />
      <Cta />
      <Footer />
    </div>
  );
}
