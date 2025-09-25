const conselhos = [
    "Acredite em você mesmo!",
    "Você é top!",
    "O primeiro passo é mais o importante!",
    "A persistência realiza o impossível!",
    "Seja gentil com todos que encontrar!"
];

const conselhoTexto = 
document.getElementById('conselhoTexto');
const novoConselhoBtn = document.getElementById('novoConselhoBtn');

function gerarconselho(){
    //BUG INTENCIONAL AQUI
    const indice = Math.floor(Math.random()*
(conselhos.length +1));
conselhoTexto.textContent = conselhos[indice];

}

novoConselhoBtn.addEventListener('click',gerarconselho);
