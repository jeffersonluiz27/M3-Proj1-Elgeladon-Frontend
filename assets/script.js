const baseUrl = "http://localhost:3000/paletas";

async function findAllPaletas() {
  const response = await fetch(`${baseUrl}/find-paletas`);

  const paletas = await response.json();


  paletas.forEach((paleta) => {
    document.getElementById("contentList").insertAdjacentHTML(
      "beforeend",
      `<div class="paletaItem">
        <div>
            <div class="paletaItem__sabor">${paleta.sabor}</div>
            <div class="paletaItem__preco">R$ ${paleta.preco.toFixed(
              2
            )}</div>
            <div class="paletaItem__descricao">${paleta.descricao}</div>
        </div>
            <img class="paletaItem__img" src=${
              paleta.foto
            } alt=${`Paleta de ${paleta.sabor}`} />
      </div>`
    );
    console.log({paleta})
  });
};

findAllPaletas();

const findPaletaById = async () => {

  const id = document.getElementById("idPaleta").value;

  if(id <= 0){
    alert('Digite um numero maior que 0!');
  }else{

      document.querySelector(".modal-overlay").style.display = "flex";

      const response = await fetch(`${baseUrl}/find-paleta/${id}`);

      const paleta = await response.json();

      const paletaEscolhidaDiv = document.getElementById("paletaEscolhida");

      paletaEscolhidaDiv.innerHTML = `<div class="paletaItem">
      <div>
          <div class="paletaItem__sabor">${paleta.sabor}</div>
          <div class="paletaItem__preco">R$ ${paleta.preco.toFixed(
            2
          )}</div>
          <div class="paletaItem__descricao">${paleta.descricao}</div>
      </div>
          <img class="paletaItem__img" src=${
            paleta.foto
          } alt=${`Paleta de ${paleta.sabor}`} />
      </div>`;
    }
};

function abrirModalCadastro() {
  document.querySelector(".modal-overlay").style.display = "flex";
}

function fecharModal() {
  document.querySelector(".modal-overlay").style.display = "none";
}