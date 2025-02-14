# Sorteador de Amigos

## Sobre o Projeto
Este é um projeto desenvolvido como parte de um desafio proposto pela **ONE (Oracle Next Education)**. O objetivo principal foi fortalecer habilidades de lógica de programação através da criação de uma aplicação simples e interativa. E qual tema poderia ser mais divertido e cativante? Um **jogo de sorteio de amigos**! 🥳

Aqui você pode cadastrar nomes, sortear um amigo aleatório e acompanhar a atualização da lista conforme os sorteios acontecem. Simples, leve e muito útil para aquela brincadeira de amigo secreto ou para tomar decisões de forma justa! 😄

---

## Funcionalidades

1. **Adicionar amigos à lista** ✏️:
   - O usuário insere um nome e clica no botão "Adicionar" para incluí-lo na lista de amigos.
   - A lista atualizada será exibida abaixo do campo de entrada.

2. **Sortear um amigo** 🎲:
   - Um amigo é sorteado aleatoriamente da lista.
   - Após o sorteio, o nome do amigo é removido da lista restante.
   - Se a lista ficar vazia, o sistema emite um alerta para informar o usuário.

3. **Atualização da interface** 🔄:
   - A lista de amigos é atualizada automaticamente após cada sorteio, garantindo que apenas os nomes restantes sejam exibidos.

---

## Como Funciona?

### Estrutura Principal:
1. **HTML**:
   - Um formulário simples com um campo de entrada e botões para adicionar e sortear amigos.
   - Uma lista ("ul") dinâmica que exibe os nomes dos amigos adicionados.

2. **JavaScript**:
   - **`adicionarAmigo`**:
     Função responsável por capturar o nome digitado no campo de entrada e adicioná-lo na lista de amigos. Caso o campo esteja vazio, o usuário será alertado.
   
   - **`sortearAmigo`**:
     Função que realiza o sorteio, removendo o nome sorteado da lista. Caso a lista esteja vazia, o sorteio não será executado e um alerta será exibido.
   
   - **`atualizarListaAmigos`**:
     Atualiza a interface para refletir os amigos restantes após cada sorteio.

---

## Como Executar?

### Pré-requisitos
Você só precisa de um navegador para rodar este joguinho. Basta abrir o arquivo HTML no seu browser favorito! 🖥️

### Passos
1. Clone o repositório para sua máquina:
   ```bash
   git clone https://github.com/lucasgfaj/challenge-amigo-secreto-one.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd challenge-amigo-secreto-one
   ```

3. Abra o arquivo **index.html** no navegador:
   ```bash
   start index.html
   ```

---

## Próximos Passos 🚀
Este projeto pode ser facilmente expandido! Aqui estão algumas ideias:
- ✅ Implementar animações ao adicionar e sortear amigos.
- ✅ Salvar a lista de amigos no local storage do navegador.
- ✅ Adicionar a funcionalidade de "refazer o sorteio".

---

## Contribuindo
Fique à vontade para dar sugestões, enviar PRs ou usar esse projetinho como inspiração para algo maior!

---

## Agradecimentos
Este projeto é dedicado à comunidade de desenvolvedores e aos estudantes que enfrentam os desafios com criatividade e entusiasmo. 🌟

Feito com ❤️ e JavaScript por Lucas Fajardo.
