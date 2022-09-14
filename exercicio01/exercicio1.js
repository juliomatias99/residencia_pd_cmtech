var endereco = {

rua: "Rua dos Pinheiros",
numero: 1293,
bairro: "Centro",
cidade:"São Paulo",
UF: "SP"


};

const { rua, numero ,bairro, cidade, UF} = endereco;
console.log(`O usuário mora em ${cidade} / ${UF}, no bairro 
${bairro}, na rua "${rua}" com n° ${numero}. `)
