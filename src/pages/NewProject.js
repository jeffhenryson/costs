import style from './NewProject.module.css'
import ProjectForms from '../project/ProjectForm'

function NewProject() {
    return (
      <div className={style.newproject_container}>
        <h2>Criar projeto</h2>
        <p>Crie seu projeto para depois adicionar os serviços</p>
        <ProjectForms btnText="Criar Projeto"/>
      </div>
    );
  }
  
  export default NewProject;
  