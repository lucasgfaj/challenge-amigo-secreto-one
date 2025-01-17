const amigos = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nomeAmigo = input.value.trim();

  if (nomeAmigo) {
    amigos.push(nomeAmigo);

    const lista = document.getElementById("listaAmigos");
    const novoItem = document.createElement("li");
    novoItem.textContent = nomeAmigo;

    lista.appendChild(novoItem);

    input.value = "";
  } else {
    alert("Por favor, insira um nome!");
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert(`A lista está vazia. Adicione nomes antes de sortear`);
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  amigos.splice(indiceAleatorio, 1);

  const resultadoDiv = document.getElementById("resultado");

  if (amigos.length >= 1) {
    resultadoDiv.textContent = `Amigo sorteado: ${amigoSorteado}`;
  } else {
    resultadoDiv.textContent = `Amigo sorteado: ${amigoSorteado}. Não possui mais nomes na Lista.`;
  }

  // resultadoDiv.textContent = amigos.length >= 0 ? `Amigo sorteado: ${amigoSorteado}` : `Não possui mais nomes na Lista`;
  atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const listaElement = document.getElementById('listaAmigos');
    
    listaElement.innerHTML = '';

    amigos.forEach(amigo => {
        const novoItem = document.createElement('li');
        novoItem.textContent = amigo;
        listaElement.appendChild(novoItem);
    })
}
