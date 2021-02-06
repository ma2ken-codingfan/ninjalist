import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, eos
        mollitia recusandae dolores quidem sequi corporis commodi ad quae
        reprehenderit omnis eveniet sit odit voluptates officiis dicta similique
        corrupti ex!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, eos
        mollitia recusandae dolores quidem sequi corporis commodi ad quae
        reprehenderit omnis eveniet sit odit voluptates officiis dicta similique
        corrupti ex!
      </p>
      <Footer />
    </div>
  );
}
