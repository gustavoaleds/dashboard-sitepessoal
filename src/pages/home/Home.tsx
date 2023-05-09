import React from "react";
import styles from "./Home.module.css";
import { Sidebar } from "../../components/layouts/Sidebar";
const Home = () => {
  return (
    <>
      <Sidebar />
      <p className={styles.p}>Seja bem vindo. Navegue pelo menu ao lado.</p>
    </>
  );
};

export default Home;
