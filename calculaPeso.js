let lista_produtos = [];
let peso_produtos = [];
let peso_total = 0;

let custo1 = localStorage.getItem('custo1')
let distanciaTotal1 = localStorage.getItem('distanciaTotal1')
let custo2 = localStorage.getItem('custo2')
let distanciaTotal2 = localStorage.getItem('distanciaTotal2')
let custoTotal = localStorage.getItem('custoTotal')
let result = localStorage.getItem('result')

function adicionarProduto() {
  let produto = document.getElementById("produto").value;
  let peso = parseFloat(document.getElementById("peso").value);
  let quantidade = parseInt(document.getElementById("quantidade").value);

  if (produto !== "" && peso > 0 && quantidade > 0) {
  lista_produtos.push(produto);
  peso_produtos.push(`${(peso * quantidade).toFixed(2)}`);
  let item = document.createElement("li");
  item.appendChild(document.createTextNode(`${produto} (${peso.toFixed(2)} kg x ${quantidade} = ${(peso * quantidade).toFixed(2)} kg)`));
  document.getElementById("lista-produtos").appendChild(item);
  peso_total += peso * quantidade;
  document.getElementById("peso-total").textContent = peso_total.toFixed(2);

  let tipoCaminhao;
  let pesoRestante = peso_total;
  let totalCaminhoes = 0;

  if (peso_total > 0) {
  while (pesoRestante > 0) {
  totalCaminhoes++;
  if (pesoRestante <= 1000) {
  tipoCaminhao = "pequeno";
} else if (pesoRestante <= 4000) {
  tipoCaminhao = "médio";
} else if (pesoRestante <= 10000.) {
  tipoCaminhao = "grande";
}
  pesoRestante -= 10000.;
}

let produtos = lista_produtos.join(", ");
let distanciaTotal = distanciaTotal1 + distanciaTotal2;

let resultado = `Para transportar os produtos ${produtos}, serão necessários ${totalCaminhoes} caminhões de porte ${tipoCaminhao}. A distância total é de ${result} Km e o custo total é de R$ ${Number(custoTotal).toFixed(2)}`;
      document.getElementById("resultado").textContent = resultado;
   }
 }
}
function limparCampos() {
  document.getElementById("produto").value = "";
  document.getElementById("peso").value = "";
  document.getElementById("quantidade").value = "";
  document.getElementById("lista-produtos").innerHTML = "";
  document.getElementById("peso-total").textContent = "";
  document.getElementById("resultado").textContent = "";
}
const botaoFinalizar = document.getElementById("finalizar");
botaoFinalizar.addEventListener("click", function() {
  if (confirm("Solicitação de transporte concluída. Transportadora Dely agradece a preferência!")) {
    window.location.href = "homePage.html";
  }
});

