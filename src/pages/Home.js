import style from "./Home.module.css";
import saving from '../img/savings.svg'
import LinkButton from "../layout/LinkButton";

function Home() {
  return (
    <section className={style.section}>
      <h1>
        Bem-vindo ao <span>Costs</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar projeto" />
      <img src={saving} alt="Costs"></img>
    </section>
  );
}

export default Home;
