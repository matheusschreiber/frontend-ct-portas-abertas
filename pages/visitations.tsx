import { NextPage } from "next";
import NavBar from "../components/NavBar";
import styles from '../styles/pages/Events.module.css'
import Footer from "../components/Footer";

const Visitations: NextPage = () => {
    
    
    return (
        <main className={styles.container}>
            <NavBar localPage={"visitations"} />

            <h1>VISITAS GUIADAS</h1>

            <div className={styles.info_container}>
                <p>
                    As visitas guiadas serão realizadas de forma dinâmica. A formação dos grupos que sairão para as trilhas será feita na hora e por demanda.
                    Cada trilha terá uma duração de 20 minutos.
                </p>                    

                <h4>As visitas guiadas serão divididas em Trilhas Temáticas, da seguinte forma:</h4>
                <ul>
                    <li><span>Trilha 1 (manhã):</span> Engenharia Elétrica 01 - LECO, PET Elétrica e LEPAC</li>
                    <li><span>Trilha 1 (tarde):</span> Engenharia Elétrica 01 - LABVISIO, PET Elétrica e LEPAC</li>
                    <li><span>Trilha 2 (manhã):</span> Engenharia Elétrica 02 - LRTA, LABVISIO e LABTEL</li>
                    <li><span>Trilha 2 (tarde):</span> Engenharia Elétrica 02 - LABAIR e LRTA</li>
                    <li><span>Trilha 3:</span> Engenharia Mecânica 01 - LaMEFT, LabSensores e LabGuará</li>
                    <li><span>Trilha 4:</span> Engenharia Mecânica 02 - LaTecMec e TriCorrMat</li>
                    <li><span>Trilha 5:</span> Engenharia Civil - Geotecnia, LabDest, Lemac, L@bCIV e LabesBIM</li>
                    <li><span>Trilha 6:</span> Engenharia Ambiental - LabHidro, LabSan e NqualirAr</li>
                    <li><span>Trilha 7:</span> Computação 01 - LCAD, PET Eng Comp e ERUS</li>
                    <li><span>Trilha 8:</span> Computação 02 - Informática na Saúde (postos no auditório do CT 13)</li>
                    <li><span>Trilha 9 (manhã):</span> Engenharia de Produção - Laboratório de Manufatura Integrada, LIEP, Modelar e Sala de Metodologias Ativas</li>
                    <li><span>Trilha 9 (tarde):</span> Engenharia de Produção - LABTar, Laboratório de Manufatura Integrada, LIEP e Modelar</li>
                    <li><span>Trilha 10:</span> Inovação - Espaço Empreendedor (antigo prédio da gráfica universitária)</li>
                    
                </ul>
                            
                    
            </div>

            <Footer />
        </main>
    )
}

export default Visitations;
    