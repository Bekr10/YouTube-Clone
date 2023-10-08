// Local Storage

document.body.classList.add(localStorage.getItem("color"))

// get id or selector


let JsMenu = document.getElementById("DisplayListFlex");
let PhotoJs = document.getElementById("ClickJsMenuDisplay")
let LightDarkMode= document.getElementById("ModeColorChange")
let ShowMore = document.getElementById("ShowMore");
let breake = document.getElementById("LineBreak")
let Hash = document.getElementById("Hash")
let AsideIcons = document.getElementById("AsideDisplay");
let AsideDev = document.getElementById("AsideDev")
let MainSection = document.getElementById("MainSection")
let End = document.getElementById("TheEnd")
let First = document.getElementById("TheFirst")
let one = document.getElementById("One")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let spanone = document.getElementById("spanone")
let spanT = document.getElementById("spantwo")
let spanTh = document.getElementById("spanthree")
let spanFour = document.getElementById("spanfour")

// Aside Display
let Card = document.querySelectorAll(".TopFirst .Card")

AsideIcons.onclick = function () {
    End.classList.toggle("NoneDisplay");
    breake.classList.toggle("NoneDisplay");
    
}

let Base = document.getElementById("black")
let Yello = document.getElementById("yello")
let Beige = document.getElementById("beige")
let green = document.getElementById("green")
let red = document.getElementById("red")
let blue = document.getElementById("blue")


// Dark-mode

LightDarkMode.onclick = function () {
    document.body.classList.toggle("Dark-mode")
    
    let getMode = localStorage.getItem("Mode")
    if (getMode && getMode === "Dark") {        
        document.body.classList.toggle("Dark-mode")
    }
    if (document.body.classList.contains("Dark-mode")) {
        LightDarkMode.innerHTML =
        `<div class="CardJsMenuMain  SpecialCard" id="ModeColorChange">
            <div class="LeftSideHeaderJsCardSpecial">
                <i class="material-icons">nightlight</i>
                <span class="TextSpanDescriptionCard">Apperance: Dark</span>
            </div>
            <div>
                <i class="fa-solid fa-arrow-right IconJsArrow"></i>
            </div>
        </div > `
        Yello.classList.remove("ColorNone")
        red.classList.remove("ColorNone")
        Beige.classList.remove("ColorNone")
        green.classList.add("ColorNone")
        blue.classList.add("ColorNone")
        orange.classList.add("ColorNone")
        document.body.style.backgroundColor = localStorage.getItem("DarkMode")
    }
    else {
        LightDarkMode.innerHTML =
        `<div class="CardJsMenuMain  SpecialCard" id="ModeColorChange">
        <div class="LeftSideHeaderJsCardSpecial">
        <i class="material-icons">light_mode</i>
        <span class="TextSpanDescriptionCard">Apperance: Light</span>
        </div>
        <div>
        <i class="fa-solid fa-arrow-right IconJsArrow"></i>
        </div>
        </div > `
        Yello.classList.add("ColorNone")
        red.classList.add("ColorNone")
        Beige.classList.add("ColorNone")
        green.classList.remove("ColorNone")
        blue.classList.remove("ColorNone")
        orange.classList.remove("ColorNone")
    }

    if (!body.classList.contains("Dark-mode")) {
        return localStorage.setItem("Mode" , "light")
    }
    localStorage.setItem("Mode" , "Dark")
    
}


let SoanColor = document.getElementById("SoanColor");

Base.onclick = function () {
    SoanColor.textContent = "color: default"  
}

Yello.onclick = function () {
    // if (document.body.classList.contains("yello") ){
    SoanColor.textContent = "color: yello"  
}

green.onclick = function () {
    SoanColor.textContent = "color: green"  
}

red.onclick = function () {
    SoanColor.textContent = "color: red"  
}

blue.onclick = function () {
    SoanColor.textContent = "color: blue"  
}

Beige.onclick = function () {
    SoanColor.textContent = "color: Beige"  
}

let orange = document.getElementById("orangBlack")

orange.addEventListener("click", function () {
    SoanColor.textContent = "color : Orange"
})

// Display MenuJs

PhotoJs.onclick = function () {
    JsMenu.classList.toggle("HideDisp");
}



//  Color Mode

let colordev = document.getElementById("colorsViewDisplayNoneOrFlex")
let colorBut = document.getElementById("ColorBut")
let colors = document.querySelectorAll(".colors li")

colors.forEach((li) => {
    li.addEventListener("click", ((e) => {
        colors.forEach((li) => {
            li.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
    }))
})



colorBut.onclick = function () {
    if (colordev.classList.contains("NoneDisplay")) {
        colordev.classList.remove("NoneDisplay")
        colordev.classList.add("FlexDisb")
    }
    else {
        colordev.classList.remove("FlexDisb")
        colordev.classList.add("NoneDisplay")
    }
}




// beige


let ClasessList = [];

for (i = 0; i <= colors.length; i++){
    ClasessList.push(colors[i].getAttribute("data-color"))
    colors[i].addEventListener("click", function () {
        document.body.classList.remove(...ClasessList);
        document.body.classList.add(this.getAttribute("data-color"));
        localStorage.setItem("color", this.getAttribute("data-color"))
        
    }, false)
}



// ShowMore

// let Show = document.getElementById("ShowButton")
// let AsideCards = document.getElementById("CardsDisplayon")

// Show.addEventListener("click", function () {
//     AsideCards.classList.toggle("block")
// })


// block

let cardDisp = document.querySelector(".cardDisp"),
    showMore = document.querySelector("showMore");


ShowMore.onclick = function () {
    cardDisp.classList.toggle("nonedisp")
}

