import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { Sidebar } from "../../components/layouts/Sidebar";
import { FaFolder } from "react-icons/fa";
import InfoBox from "../../components/commons/infoBox/infoBox";
import { Projetos, getProjetos } from "../../services/projetosService";
const Home = () => {
  const [projetos, setProjetos] = useState<Projetos[]>([]);

  const fetchProjetos = async () => {
    try {
      const response = await getProjetos();
      setProjetos(response);
    } catch ( error ) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjetos();
  }, [])

  return (
    <>
      <Sidebar />
      <p className={styles.p}>Seja bem vindo. Navegue pelo menu ao lado.</p>
      <InfoBox
      title="Projetos"
      value={projetos.length}
      icon={<FaFolder/>}/>
    </>
  );
};

export default Home;
