import styles from '../styles/components/NavBar.module.css'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

import UfesLogo from '../assets/UfesLogo.svg'
import SDCLogo from '../assets/SDCLogo.png'
import MOSTRALogo from '../assets/MOSTRALogo.svg'

import { PROGRADURL } from './ProGrad'

interface NavBarProps {
  localPage: string
}

const SemanaDoConhecimentoLink = "https://www.ufes.br/conteudo/vem-ai-semana-do-conhecimento-atencao-aos-prazos-para-participar"

export default function NavBar({localPage}:NavBarProps) {
  const [page,setPage] = useState<string | null>("");

  useEffect(()=>{
    // setPage(localStorage.getItem('CTPORTASABERTASPAGE'))
    setPage(localPage)
  },[])

  return (
    <div className={styles.navbarContainer}>
      <Head>
        <title>CT Portas Abertas - 2022</title>
        <meta name="description" content="Author: PET EngComp, Espaço dedicado à inscrição no evento CT Portas Abertas da UFES"/>
        <meta content="CT Portas Abertas - UFES - ES" property="og:title"></meta>
      </Head>
      <div className={styles.logoContainer}>
        <div title="Site oficial da ufes">
          <a href="ufes.br">
            <Image 
              src={UfesLogo}
              alt="Ufes Logo"
              layout="fill"
              objectFit="contain"/>
          </a>
        </div>
        
        <div title="Semana do Conhecimento">
          <a href={SemanaDoConhecimentoLink}>
            <Image 
              src={SDCLogo} 
              alt="Semana Do Conhecimento logo rodape"
              layout="fill"
              objectFit="contain"/>
          </a>
        </div>

        <div title="Mostra de Profissões 2022">
          <a href={PROGRADURL}>
            <Image 
              src={MOSTRALogo} 
              alt="Mostra de profissões logo rodape"
              layout="fill"
              objectFit="contain"/>
          </a>
        </div>

      </div>
      <ul>
        <Link href="./">
          <li id={page=='index'?styles.selected:""}>PÁGINA INICIAL</li>
        </Link>

        <Link href="./signup">
          <li id={page=='signup'?styles.selected:""}>CADASTRO</li>
        </Link>

        <Link href="./booths">
          <li id={page=='booths'?styles.selected:""}>MOSTRA DE PROJETOS</li>
        </Link>

        <Link href="./visitations">
          <li id={page=='visitations'?styles.selected:""}>TRILHAS</li>
        </Link>

        <Link href="./workshops">
          <li id={page=='workshops'?styles.selected:""}>OFICINAS</li>
        </Link>

        <Link href="./pockets">
          <li id={page=='pockets'?styles.selected:""}>PALESTRAS POCKET</li>
        </Link>
      </ul>
    </div>
  )
}