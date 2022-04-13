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