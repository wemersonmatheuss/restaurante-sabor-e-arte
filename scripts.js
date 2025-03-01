// Mapeando o Botão que fará o scroll
const button = document.querySelector("#reserve-one");
// Mapeando a seção que será o destino do scroll
const sectionLunch = document.querySelector("#lunch");

// Mapeando o botao que fará aparecer o cardapio na telaa
const buttonLunch = document.querySelector(".btn-lunch");
// Mapeando a img que ira aparecer na tela
const imgFoods = document.querySelector(".img-lunch");

const buttonAbout = document.querySelector("#btn-about");

const buttonLunch2 = document.querySelector(".btn-lunch2")
const imgLunch2 = document.querySelector(".img-lunch2")




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

buttonLunch2.addEventListener("click", () => {
    imgLunch2.style.display = "block"
    imgLunch2.style.display = "flex"
    imgLunch2.style.justifyContent = "center"
    imgLunch2.style.alignItems = "center"
})

// Adicionando o evento de click a img
imgFoods.addEventListener("click", function (event) {
    if (event.target === imgFoods) {
        imgFoods.style.display = "none";
    }
});

imgLunch2.addEventListener("click", function (event) {
    if (event.target === imgLunch2) {
        imgLunch2.style.display = "none"
    }
})


// menu mobile
const imgMenu = document.querySelector(".icon-menu");
const linksMobile = document.querySelector(".links-mobile")
const iconWats = document.querySelector(".icon-wats");
const iconArroww = document.querySelector(".icon-arrow");

const imgMoboleX = document.querySelector(".img-mobile-x");

const ul = document.querySelector("#ul")

linksMobile.style.display = "none"
imgMoboleX.style.display = "none"

iconWats.style.display = "block"
iconArroww.style.display = "block"

imgMenu.addEventListener("click", () => {
   
    linksMobile.style.display = "block"
    imgMoboleX.style.display = "block"
    iconWats.style.display = "none"
    iconArroww.style.display = "none"
    imgMoboleX.style.display = "flex"
    imgMoboleX.style.justifyContent = "flex-end"
    imgMoboleX.style.marginTop = "20px"
    imgMoboleX.style.marginRight = "20px"
    

      
})

imgMoboleX.addEventListener("click", () => {
    linksMobile.style.display = "none"
    iconWats.style.display = "block"
    iconArroww.style.display = "block"
})

ul.addEventListener("click", () => {
    linksMobile.style.display = "none"
})




