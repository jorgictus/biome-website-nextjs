module.exports = (plop) => {
    plop.setGenerator("component", {
      description: "Criando um novo componente :D",
      prompts: [
        {
          type: "input",
          name: "name",
          message: "Qual o nome do componente ?"
        }
      ],
      actions: [
        {
          type: "add",
          path: "../src/components/{{pascalCase name}}/index.jsx",
          templateFile: "templates/Component.jsx.hbs"
        }
      ]
    });
  };