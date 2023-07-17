export const getAllElements = () => {
   const mainContainer = document.querySelector("[data-id='a7ba009']");
   const allPluses = document.querySelectorAll("span.elementor-toggle-icon-closed");
   const allPlusesArray = Array.from(allPluses);
   const allMinuses = document.querySelectorAll("span.elementor-toggle-icon-opened");
   const allMinusesArray = Array.from(allMinuses);
   const allBeschreibungen = document.querySelectorAll(".elementor-tab-content");
   const allBeschreibungenArray = Array.from(allBeschreibungen);

   let isOpen = false;
   let targetBeschreibung;
   let targetPlus;
   let targetMinus;

   const toggleDisplay = (targetToToggleBeschreibung, targetToTogglePlus, targetToToggleMinus) => {
      targetToToggleBeschreibung.style.display = isOpen ? "block" : "none";
      targetToTogglePlus.firstElementChild.style.display = isOpen ? "none" : "block";
      targetToTogglePlus.style.display = isOpen ? "none" : "block";
      targetToToggleMinus.firstElementChild.style.display = isOpen ? "block" : "none";
      targetToToggleMinus.style.display = isOpen ? "block" : "none";

      allPlusesArray
         .filter((plus) => plus !== targetToTogglePlus)
         .forEach((element) => {
            element.style.display = "block";
            targetToTogglePlus.firstElementChild.style.display = "block";
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
   };

   const getTarget = (e) => {
      console.log(e.target.tagName.toLowerCase());
      if (e.target.tagName.toLowerCase() === "a") {
         targetBeschreibung = e.target.parentElement.nextElementSibling;
         targetPlus = e.target.parentNode.childNodes[1].firstElementChild;
         targetMinus = e.target.parentNode.childNodes[1].lastElementChild;
      } else {
         targetBeschreibung = e.target.nextElementSibling;
         targetPlus = e.target.childNodes[1].firstElementChild;
         targetMinus = e.target.childNodes[1].lastElementChild;
      }

      if (targetBeschreibung.style.display === "block") {
         isOpen = false;
      } else {
         //  allBeschreibungenArray.some((el) => (el.style.display == "block" ? "" : (isOpen = !isOpen)));
         isOpen = true;
      }
      toggleDisplay(targetBeschreibung, targetPlus, targetMinus);
   };

   mainContainer.addEventListener("click", getTarget);
};
