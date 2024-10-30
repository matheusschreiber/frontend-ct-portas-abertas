import { NextPage } from "next";
import NavBar from "../components/NavBar";
import styles from '../styles/pages/Photos.module.css'
import Footer from "../components/Footer";

import Image from "next/image";
import { CarouselTop } from '../components/CarouselTop';

const Photos: NextPage = () => {
    
    
    return (
        <main className={styles.container}>
            <NavBar localPage={"photos"} />

            <h1>FOTOS EDIÇÃO PASSADA</h1>

            <div>
                <CarouselTop/>
            </div>

            <Footer />
        </main>
    )
}

export default Photos;
    