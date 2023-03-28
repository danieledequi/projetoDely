var cidade = ['ARACAJU','BELEM','BELO HORIZONTE','BRASILIA','CAMPO GRANDE','CUIABA','CURITIBA','FLORIANOPOLIS','FORTALEZA','GOIANIA','JOAO PESSOA','MACEIO','MANAUS','NATAL','PORTO ALEGRE','PORTO VELHO','RECIFE','RIO BRANCO','RIO DE JANEIRO','SALVADOR','SAO LUIS', 'SAO PAULO','TERESINA',	'VITORIA'];
  var distancia = [
    [0, 2079, 1578, 1652, 2765, 2775, 2595, 2892, 1183, 1848, 611, 294, 5215, 788, 3296, 4230, 501, 4763, 1855, 356, 1578, 2187, 1142, 1408], // distâncias de Aracaju (índice 0) para as outras cidades
    [2079, 0, 2824, 2120, 2942, 2941, 3193, 3500, 1610, 2017, 2161, 2173, 5298, 2108, 3852, 4397, 2074, 4931, 3250, 2100, 806, 2933, 947, 3108],// distâncias de Belem (índice 1) para as outras cidades
    [1578, 2824, 0, 716, 1453, 1594, 1004, 1301, 2528, 906, 2171, 1854, 3951, 2348, 1712, 3050, 2061, 3584, 434, 1372, 2738, 586, 2302, 524], // distâncias da cidade Belo Horizonte (índice 2) para as outras cidades
    [1650, 2140, 741, 0, 1134, 1133, 1366, 1673, 2200, 209, 2245, 1930, 3490, 2422, 2027, 2589, 2135, 3123, 1148, 1446, 2157, 1015, 1789, 1239], // distâncias de Brasília (índice 3) para as outras cidades
    [2764, 2942, 1453, 1134, 0, 694, 991, 1298, 3407, 935, 3357, 3040, 3051, 3534, 1518, 2150, 3247, 2684, 1444, 2568, 2979, 1014, 2911, 1892], // distâncias de Campo Grnade (índice 4) para as outras cidades
    [2773,	2941,	1594,	1133,	694,	0,	1679,	1986,	3406,	934,	3366,	3049,	2357,	3543,	2206,	1456,	3255,	1990,	2017,	2566,	2978,	1614,	2910,	2119],// distâncias de Cuiabá (índice 5) para as outras cidades
    [2595,	3193,	1004,	1366,	991, 1679,	0,	300,	3541,	1186,	3188,	2871,	4036,	3365,	711,	3135,	3078,	3669, 852,	2385,	3230,	408, 3143,	1300],// distâncias de Curitiba (índice 6) para as outras cidades
    [2892,	3500,	1301,	1673,	1298,	1986,	300,	0,	3838,	1493,3485,3168,	4443,	3662,	476,	3442,	3375,	3976,	1144,	2682,	3537,	705,	3450,	1597], // distâncias de Florianópolis (índice 7) para as outras cidades
    [1183,	1611,	2528,	2208,	3407,	3406,	3541,	3838,	0,	2482,	688,	1075,	5763,	537,	4242,	4862,	800,	5396,	2805,	1389,	1070,	3127,	634,	2397], // distâncias de Fortaleza (índice 8) para as outras cidades
    [1849,	2017,	906,	209,	935,	934,	1186,	1493,	2482,	0,	2442,	2125,	3291,	2618,	1847,	2390,	2332,	2924,	1338,	1643,	2054,	926,	1986,	1428], // distâncias de Goiânia (índice 9) para as outras cidades
    [611,	2161,	2171,	2245,	3357,	3366,	3188,	3485,	688,	2442,	0,	395,	5808,	185, 3889,	4822,	120,	5356,	2448,	949,	1660,	2770,	1224,	2001], // distâncias de João Pessoa (índice 4) para as outras cidades
    [294,	2173,	1854,	1928,	3040,	3049,	2871,	3168,	1075,	2105,	395,	0,	5491,	572,	3572,	4505,	285,	5039,	2131,	632,	1672,	2453,	1236,	1684], // distâncias de Maceió (índice 4) para as outras cidades
    [5215,	5298,	3951,	3490,	3051,	2357,	4036,	4343,	5763,	3291,	5808,	5491,	0,	5985,	4563,	901,	5698,	1445,	4374,	5009,	5335,	3971,	5267,	4476], // distâncias de Manaus (índice 4) para as outras cidades
    [788,	2108,	2348,	2422,	3537,	3543,	3365,	3662,	537,	2619,	185,	572,	5985,	0,	4066,	4998,	297,	5533,	2625,	1126,	1607,	2947,	1171,	2178], // distâncias de Natal (índice 4) para as outras cidades
    [3296,	3854,	1712,	2027,	1518,	2206,	711,	476,	4242,	1847,	3889,	3572,	4563,	4066,	0,	3662,	3779,	4196,	1553,	3090,	3891,	1109,	3804,	2001], // distâncias de Porto Alegre (índice 4) para as outras cidades
    [4229,	4397,	3050,	2589,	2150,	1456,	3135,	3442,	4865,	2390,	4822,	4505,	901,	4999,	3662,	0,	4712,	544,	3473,	4023,	4434,	3070,	4366,	3575], // distâncias de Porto Velho (índice 4) para as outras cidades
    [501,	2074,	2061,	2135,	3247,	3256,	3078,	3375,	800,	2332,	120,    285,	5698,	297,	3779,	4712,	0,	5243,	2338,	839,	1573,	2660,	1137,	1891],// distâncias de Recife (índice 4) para as outras cidades
    [4763,	4931,	3584,	3123,	2684,	1990,	3669,	3976,	5396,	2924,	5356,	5039,	1445,	5533,	4196,	544,	5243,	0,	4007,	4457,	4968,	3604,	4900,	4109], // distâncias de Rio Branco (índice 4) para as outras cidades
    [1855,	3250,	434,	1148,	1444,	2017,	852,	1144,	2805,	1338,	2448,	2131,	4374,	2625,	1553,	3473,	2338,	4007,	0,	1649,	3015,	429,	2579,	521], // distâncias de Rio de Janeiro (índice 4) para as outras cidades
    [356,	2100,	1372,	1446,	2568,	2567,	2385,	2682,	1389,	1643,	949,	632,	5009,	1126,	3090,	4023,	839,	4457,	1649,	0,	1599,	1962,	1163,	1202], // distâncias de Salvador (índice 4) para as outras cidades
    [1578,	806,	2738,	2157,	2979,	2978,	3230,	3537,	1070,	2054,	1660,	1672,	5335,	1607,	3891,	4434,	1573,	4968,	3015,	1599, 0,	2970,	446,	2607], // distâncias de São Luis (índice 4) para as outras cidades
    [2188,	2933,	586,	1015,	1014,	1614,	408,	705,	3127,	926,	2770,	2453,	3971,	2947,	1109,	3070,	2660,	3604,	429,	1962,	2970,	0,	2792,	882], // distâncias de São Paulo (índice 4) para as outras cidades
    [1142,	947,	2302,	1789,	2911,	2910,	3143,	3450,	634,	1986,	1224,	1236,	5267,	1171,	3804,	4366,	1137,	4900,	2579,	1163,	446,	2792,	0,	2171], // distâncias de Teresina (índice 4) para as outras cidades
    [1408,	3108,	524,	1238,	1892,	2119,	1300,	1597,	2397,	1428,	2001,	1684,	4476,	2178,	2001,	3575,	1891,	4109,	521,	1202,	2607,	882,	2171,	0] // distâncias de Vitória (índice 4) para as outras cidades
];
function distanciaEntreCidades() {
    var posicaoCidade1 = cidade.indexOf(document.getElementById("cidadeOrigem").value);
    var cidade1 = document.getElementById("cidadeOrigem").value;
    var posicaoCidade2 = cidade.indexOf(document.getElementById("cidadeDestino1").value);
    var cidade2 = document.getElementById("cidadeDestino1").value;
    var posicaoCidade3 = cidade.indexOf(document.getElementById("cidadeDestino2").value);
    var cidade3 = document.getElementById("cidadeDestino2").value;
  
    if (posicaoCidade1 >= 0 && posicaoCidade2 >= 0) {
      let distanciaTotal1 = distancia[posicaoCidade1][posicaoCidade2];
      let result = distanciaTotal1;
      let precoPorKm;
      let tamanhoSelecionado = document.querySelector('input[name="caminhao"]:checked').value;
  
      if (tamanhoSelecionado === "pequeno") {
        precoPorKm = 4.87;
      } else if (tamanhoSelecionado === "medio") {
        precoPorKm = 11.92;
      } else if (tamanhoSelecionado === "grande") {
        precoPorKm = 27.44;
      }
  
      let custo1 = result * precoPorKm;
      let resultado = `De ${cidade1} para ${cidade2} a distância é de ${distanciaTotal1} km. O custo desta viagem é de R$ ${custo1.toFixed(2)}.`
      console.log(resultado);
      document.getElementById("resultado").innerHTML = resultado;
//Se houver uma segunda cidade de destino, será indicada a distância entre cidade destino 1 e cidade destino 2. Depois, a função vai calcular a distância pelo valor do km.
      if (posicaoCidade3 >= 0) {
        let distanciaTotal2 = distancia[posicaoCidade2][posicaoCidade3];
        result += distanciaTotal2;
        custo2 = result * precoPorKm;
        custoTotal = custo1 + custo2;
        resultado += `De ${cidade2} para ${cidade3} a distância é de ${distanciaTotal2} km. O custo desta viagem é de R$ ${custo2.toFixed(2)}. A distância total a ser percorrida é de ${result} km.  O custo total da viagem é de R$ ${custoTotal.toFixed(2)}.`
      }
      console.log(resultado);
      document.getElementById("resultado").innerHTML = resultado;
    } else {
      document.getElementById("resultado").innerHTML = 'Por favor, selecione cidades válidas.';
     }
    }
      localStorage.setItem('result', result)
      localStorage.setItem('resultado', resultado)
      localStorage.setItem('custo1', custo1)
      localStorage.setItem('distanciaTotal1', ditanciaTotal1)
      localStorage.setItem('custo2', custo2)
      localStorage.setItem('distanciaTotal2', ditanciaTotal2)
      localStorage.setItem('custoTotal', custoTotal)
      
    
  