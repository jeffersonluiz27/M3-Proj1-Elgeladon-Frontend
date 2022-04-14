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

      document.querySelector(".modal-overlay1").style.display = "flex";

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

function fecharModal() {
  document.querySelector(".modal-overlay1").style.display = "none";
}

function abrirModalCadastro() {
  document.querySelector(".modal-overlay2").style.display = "flex";
}

function fecharModalCadastro() {
  document.querySelector(".modal-overlay2").style.display = "none";
  document.querySelector("#sabor").value = "";
  document.querySelector("#preco").value = 0;
  document.querySelector("#descricao").value = "";
  document.querySelector("#foto").value = "";
}

async function createPaleta() {
  const sabor = document.querySelector("#sabor").value;
  const preco = document.querySelector("#preco").value;
  const descricao = document.querySelector("#descricao").value;
  const foto = document.querySelector("#foto").value;

  const paleta = {
    sabor,
    preco,
    descricao,
    foto,
  };

  const response = await fetch(`${baseUrl}/create`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(paleta),
  });

  const novaPaleta = await response.json();

  const html = `
  <div class="paletaItem">
    <div>
        <div class="paletaItem__sabor">${novaPaleta.sabor}</div>
        <div class="paletaItem__preco">R$ ${novaPaleta.preco}</div>
        <div class="paletaItem__descricao">${novaPaleta.descricao}</div>
    </div>
    <img class="paletaItem__img" src="${novaPaleta.foto}" alt="Paleta de ${novaPaleta.sabor}" />
  </div>`;

  document.querySelector("#contentList").insertAdjacentHTML("beforeend", html);

  fecharModalCadastro();
}



