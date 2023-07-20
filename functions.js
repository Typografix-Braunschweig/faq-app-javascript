export const getAllElements = () => {
   const mainContainer = document.querySelector("#faq2-2");
   mainContainer.firstElementChild.lastElementChild.classList.remove("elementor-toggle");

   const allPluses = mainContainer.querySelectorAll("span.elementor-toggle-icon-closed");

   const allPlusesArray = Array.from(allPluses);
   console.log(allPlusesArray);
   const allMinuses = mainContainer.querySelectorAll("span.elementor-toggle-icon-opened");
   const allMinusesArray = Array.from(allMinuses);

   const allBeschreibungen = document.querySelectorAll("#faq2-2 .elementor-tab-content");
   const allBeschreibungenArray = Array.from(allBeschreibungen);

   allPlusesArray.forEach((element) => {
      element.style.display = "block";
   });

   allMinusesArray.forEach((element) => {
      element.style.display = "none";
   });

   allBeschreibungenArray.forEach((element) => {
      element.style.display = "none";
   });

   let isOpen = false;
   let targetBeschreibung;
   let targetPlus;
   let targetMinus;

   const toggleDisplay = (targetToToggleBeschreibung, targetToTogglePlus, targetToToggleMinus) => {
      allPlusesArray
         .filter((plus) => plus !== targetToTogglePlus)
         .forEach((element) => {
            element.style.display = "block";
         });

      allMinusesArray
         .filter((minus) => minus != targetToToggleMinus)
         .forEach((element) => {
            element.style.display = "none";
         });

      allBeschreibungenArray
         .filter((text) => text != targetToToggleBeschreibung)
         .forEach((element) => {
            element.style.display = "none";
         });

      targetToToggleBeschreibung.style.display = isOpen ? "block" : "none";
      targetToTogglePlus.style.display = isOpen ? "none" : "block";
      targetToToggleMinus.style.display = isOpen ? "block" : "none";
   };

   const getTarget = (e) => {
      if (e.target.tagName.toLowerCase() === "a") {
         targetBeschreibung = e.target.parentElement.nextElementSibling;
         targetPlus = e.target.parentElement.firstElementChild.firstElementChild;
         targetMinus = e.target.parentElement.firstElementChild.lastElementChild;
      } else if (e.target.tagName.toLowerCase() === "i") {
         targetBeschreibung = e.target.parentElement.parentElement.parentElement.nextElementSibling;
         targetPlus = e.target.parentElement;
         targetMinus = e.target.parentElement.nextElementSibling;
      } else {
         targetBeschreibung = e.target.nextElementSibling;
         targetPlus = e.target.childNodes[1].firstElementChild;
         targetMinus = e.target.childNodes[1].lastElementChild;
      }

      if (!!(targetPlus.style.display === "none") && !!(targetBeschreibung.style.display === "block")) {
         isOpen = false;
      } else {
         isOpen = true;
      }

      toggleDisplay(targetBeschreibung, targetPlus, targetMinus);
   };

   mainContainer.addEventListener("click", getTarget);
};
