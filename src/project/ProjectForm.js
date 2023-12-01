import style from "./ProjectForm.module.css";
import Input from "../form/Input";
import Select from "../form/Select";

function ProjectForm() {
  return (
    <form className={style.form}>
      <div>
        <Input
          type="text"
          text="Nome do projeto"
          name="name"
          placeholder="Insira o nome do projeto: "
        />
      </div>
      <div>
        <Input
          type="number"
          text="Orçamento do projeto"
          name="Budget"
          placeholder="Insira o orçamento total: "
        />
      </div>
      <div>
        <Select name="categoria_id" text="Selecione a categoria"/>
      </div>
      <div>
        <input type="submit" value="Criar projeto" />
      </div>
    </form>
  );
}

export default ProjectForm;
