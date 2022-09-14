function experiencia(anos) {

if(anos < 0) return 'Não é possível';
if(anos <=1) return  'Você é um iniciante';
if(anos <=3) return 'Você é intermediário';
if(anos <= 6) return 'Você é avançado';
return 'Você é UM JEDI!!!!!!'

}

for(var i = -2; i<=10; i++) {
    document.write(i + " anos " + experiencia(i))
}

