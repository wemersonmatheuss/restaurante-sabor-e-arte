// Mapeando o Botão que fará o scroll
const button = document.querySelector("#reserve-one");
// Mapeando a seção que será o destino do scroll
const sectionLunch = document.querySelector("#lunch");

// Mapeando o botao que fará aparecer o cardapio na telaa
const buttonLunch = document.querySelector("#btn-lunch");
// Mapeando a img que ira aparecer na tela
const imgFoods = document.querySelector(".img-lunch");

const buttonAbout = document.querySelector("#btn-about");

// Adicionando o evento de click ao botão
button.addEventListener("click", () => {
    // Fazendo o scroll até a seção
    sectionLunch.scrollIntoView({ behavior: "smooth" });
});

buttonAbout.addEventListener("click", () => {
    // Fazendo o scroll até a seção
    sectionLunch.scrollIntoView({ behavior: "smooth" });
});


// Adicionando o evento de click ao botão
buttonLunch.addEventListener("click", () => {
    imgFoods.style.display = "block";
    imgFoods.style.display = "flex";
    imgFoods.style.justifyContent = "center";
    imgFoods.style.alignItems = "center";
});

// Adicionando o evento de click a img
imgFoods.addEventListener("click", function (event) {
    if (event.target === imgFoods) {
        imgFoods.style.display = "none";
    }
});


