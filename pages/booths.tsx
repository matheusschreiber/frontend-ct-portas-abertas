import { NextPage } from "next";
import { FiMapPin } from "react-icons/fi";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import HeaderBanner from '../assets/HEADER.png'

import styles from "../styles/pages/Booths.module.css"
import Image from "next/image";

export const URLMAPSCTIV = "https://www.google.com.br/maps/place/Estacionamento+do+Centro+Tecnol%C3%B3gico+-+Goiabeiras,+Vit%C3%B3ria+-+ES,+29075-053/@-20.2729003,-40.30469,18.17z/data=!4m5!3m4!1s0xb8180667a8685d:0x946655d5089396fd!8m2!3d-20.2725083!4d-40.3047945"

const Booths: NextPage = () =>{

  return(
    <main className={styles.container}>
    <NavBar localPage={"booths"} />

    <div className={styles.banner_container}>
      <div className={styles.banner_inside_container}>
        <Image src={HeaderBanner} alt="Banner CT Portas Abertas" layout="responsive"/>
      </div>
    </div>
    
    <h1>MOSTRAS DE PROJETOS DISPONÍVES PARA VISITAÇÃO</h1>
    
    <ul>
      <li><h3>Engenharia Ambiental</h3></li>
      <li><h3>Engenharia Elétrica</h3></li>
      <li><h3>Engenharia Civil</h3></li>
      <li><h3>Engenharia da Computação</h3></li>
      <li><h3>Ciência da Computação</h3></li>
      <li><h3>Engenharia de Produção</h3></li>
      <li><h3>Engenharia Mecânica</h3></li>
    </ul>
    <div className={styles.subtitle_container}>
      <h2>DE 08:00 ATÉ 17:00</h2>
      <div>
        <FiMapPin />
        <a href={URLMAPSCTIV} target="_blank" rel="noreferrer"><h2>ESTACIONAMENTO DO CT4</h2></a>
      </div>
    </div>

    <Footer />
</main>
  )
}

export default Booths;