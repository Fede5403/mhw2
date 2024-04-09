function onCollapsibleToggleClick(event) {
    const collapsibleToggle = event.currentTarget;

    const collapsible = collapsibleToggle.parentNode;
    const collapsibleContent = collapsible.querySelector(".collapsible-content");

    const collapsibleToggleImg = collapsibleToggle.querySelector("img");

    if(collapsibleContent.dataset.visibility === "hidden") {
        /* 
         * Modifichiamo dinamicamente la classe di un elemento agendo sulla proprietà classList:
         *  1. Rimuovo la classe ".hidden"
         *  2. Aggiungo la classe ".shown"
         */
        collapsibleContent.classList.remove("hidden");
        collapsibleContent.classList.add("shown");

        if(collapsibleToggle.dataset.icon !== "white") {
            collapsibleToggleImg.src = "icons/expand_less_black.svg"
        } else {
            collapsibleToggleImg.src = "icons/expand_less_white.svg"
        }

        /* Imposto il valore dell'attributo data-visibility su "shown" */
        collapsibleContent.dataset.visibility = "shown";
    } else if(collapsibleContent.dataset.visibility === "shown") {
        /* 
         * Modifichiamo dinamicamente la classe di un elemento agendo sulla proprietà classList:
         *  1. Rimuovo la classe ".shown"
         *  2. Aggiungo la classe ".hidden"
         */
        collapsibleContent.classList.remove("shown");
        collapsibleContent.classList.add("hidden");


        if(collapsibleToggle.dataset.icon !== "white") {
            collapsibleToggleImg.src = "icons/expand_black.svg"
        } else {
            collapsibleToggleImg.src = "icons/expand_white.svg"
        }
        
        /* Imposto il valore dell'attributo data-visibility su "hidden" */
        collapsibleContent.dataset.visibility = "hidden";
    }
}

function onPlanningButtonClick(event) {
    const node = event.currentTarget;
    const parentNode = node.parentNode;
    const childNodes = parentNode.querySelectorAll("button");
    for(const childNode of childNodes) {
        childNode.classList.remove("active-plan-button");
        childNode.classList.add("default-plan-button");
    }
    event.currentTarget.classList.add("active-plan-button");

    /* Eliminiamo il contenuto */
    const firstColumn = document.querySelector(".plan-container-div-first-column");
    firstColumn.innerHTML = "";
    const secondColumn = document.querySelector(".plan-container-div-second-column");
    secondColumn.innerHTML = "";

    if(node.dataset.section === "città") {
        /* Riempio la prima colonna del div */
        let link0 = document.createElement("a");
        link0.href = "";
        link0.textContent = "Voli di andata e ritorno per Londra";
        firstColumn.appendChild(link0);

        let link1 = document.createElement("a");
        link1.href = "";
        link1.textContent = "Voli low cost per Los Angeles";
        firstColumn.appendChild(link1);

        let link2 = document.createElement("a");
        link2.href = "";
        link2.textContent = "Voli per Parigi";
        firstColumn.appendChild(link2);

        /* Riempio la seconda colonna del div */
        let link3 = document.createElement("a");
        link3.href = "";
        link3.textContent = "Voli di andata e ritorno per Abu Dhabi";
        secondColumn.appendChild(link3);

        let link4 = document.createElement("a");
        link4.href = "";
        link4.textContent = "Biglietti aerei di andata e ritorno per Seul";
        secondColumn.appendChild(link4);

        let link5 = document.createElement("a");
        link5.href = "";
        link5.textContent = "Voli low cost per Venezia";
        secondColumn.appendChild(link5);
    } else if(node.dataset.section === "regione") {
        /* Riempio la prima colonna del div */
        let link0 = document.createElement("a");
        link0.href = "";
        link0.textContent = "Voli di andata e ritorno low cost per Campania";
        firstColumn.appendChild(link0);

        let link1 = document.createElement("a");
        link1.href = "";
        link1.textContent = "Voli low cost per Île-de-France Angeles";
        firstColumn.appendChild(link1);

        let link2 = document.createElement("a");
        link2.href = "";
        link2.textContent = "Biglietti di andata e ritorno low cost per Lazio";
        firstColumn.appendChild(link2);

        /* Riempio la seconda colonna del div */
        let link3 = document.createElement("a");
        link3.href = "";
        link3.textContent = "Voli low cost per catalogna";
        secondColumn.appendChild(link3);

        let link4 = document.createElement("a");
        link4.href = "";
        link4.textContent = "Biglietti per Sicilia";
        secondColumn.appendChild(link4);

        let link5 = document.createElement("a");
        link5.href = "";
        link5.textContent = "Biglietti di andata e ritorno low cost per Veneto";
        secondColumn.appendChild(link5);
    } else if(node.dataset.section === "paese") {
        /* Riempio la prima colonna del div */
        let link0 = document.createElement("a");
        link0.href = "";
        link0.textContent = "Francia: il miglior noleggiio auto";
        firstColumn.appendChild(link0);

        let link1 = document.createElement("a");
        link1.href = "";
        link1.textContent = "Romania: auto a noleggio";
        firstColumn.appendChild(link1);

        let link2 = document.createElement("a");
        link2.href = "";
        link2.textContent = "Portogallo: il miglior noleggio auto";
        firstColumn.appendChild(link2);

        /* Riempio la seconda colonna del div */
        let link3 = document.createElement("a");
        link3.href = "";
        link3.textContent = "Malta: autonoleggio economico";
        secondColumn.appendChild(link3);

        let link4 = document.createElement("a");
        link4.href = "";
        link4.textContent = "Regno Unito: auto a nolegio";
        secondColumn.appendChild(link4);

        let link5 = document.createElement("a");
        link5.href = "";
        link5.textContent = "Polonia: il migior noleggio auto";
        secondColumn.appendChild(link5);
    } else if(node.dataset.section === "aeroporto") {
        /* Riempio la prima colonna del div */
        let link0 = document.createElement("a");
        link0.href = "";
        link0.textContent = "Biglietti di andata e ritorno per Torino";
        firstColumn.appendChild(link0);

        let link1 = document.createElement("a");
        link1.href = "";
        link1.textContent = "Voli low cost per Marrakech Menara";
        firstColumn.appendChild(link1);

        let link2 = document.createElement("a");
        link2.href = "";
        link2.textContent = "Biglietti aerei di andata e ritorno per Brindisi";
        firstColumn.appendChild(link2);

        /* Riempio la seconda colonna del div */
        let link3 = document.createElement("a");
        link3.href = "";
        link3.textContent = "Biglietti low cost per barcellona";
        secondColumn.appendChild(link3);

        let link4 = document.createElement("a");
        link4.href = "";
        link4.textContent = "Voli per Roma Fiumicino";
        secondColumn.appendChild(link4);

        let link5 = document.createElement("a");
        link5.href = "";
        link5.textContent = "Biglietti per Napoli International";
        secondColumn.appendChild(link5);
    }
}

const collapsibles = document.querySelectorAll(".collapsible");
for(const collapsible of collapsibles) {
    const collapsibleToggle = collapsible.querySelector(".collapsible-toggle");
    collapsibleToggle.addEventListener("click", onCollapsibleToggleClick);
} 

const planningButtonsContainer = document.querySelector(".button-container-div");
const planningButtons = planningButtonsContainer.childNodes;
for(const planningButton of planningButtons) {
    planningButton.addEventListener("click", onPlanningButtonClick);
}