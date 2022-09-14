const users = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];
const showMessage = users => 
   users.forEach(({nome, habilidades}) => 
      console.log(`O ${nome} possui as habilidades: ${habilidades.join(", ")}`));
showMessage(users);