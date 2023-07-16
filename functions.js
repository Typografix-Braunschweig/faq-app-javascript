export const getAllElements = () => {
   const mainContainer = document.querySelector("[data-id='a7ba009']");
   const allPluses = document.querySelectorAll(".elementor-toggle-icon-closed");
   let allPlusesArray = Array.from(allPluses);
   const allMinuses = document.querySelectorAll(".elementor-toggle-icon-opened");
   let allMinusesArray = Array.from(allMinuses);
   const allBeschreibungen = document.querySelectorAll(".elementor-tab-content");
   let allBeschreibungenArray = Array.from(allBeschreibungen);

   let isOpen = false;

   const toggleDisplay = (targetToToggleBeschreibung, targetToTogglePlus, targetToToggleMinus) => {
      targetToToggleBeschreibung.style.display = isOpen ? "block" : "none";
      targetToTogglePlus.style.display = isOpen ? "none" : "block";
      targetToToggleMinus.style.display = isOpen ? "block" : "none";
      targetToToggleMinus.style.height = isOpen ? "15px" : "0";
      targetToToggleMinus.style.backgroundColor = isOpen ? "red" : "none";

      allPlusesArray
         .filter((plus) => plus != targetToTogglePlus)
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
   };

   const getTarget = (e) => {
      const targetBeschreibung = e.target.parentElement.nextElementSibling;
      const targetPlus = e.target.parentNode.childNodes[1].firstElementChild;
      const targetMinus = e.target.parentNode.childNodes[1].lastElementChild;

      if (targetBeschreibung.style.display === "block") {
         isOpen = !isOpen;
      } else {
         allBeschreibungenArray.some((el) => (el.style.display == "block" ? "" : (isOpen = !isOpen)));
      }
      toggleDisplay(targetBeschreibung, targetPlus, targetMinus);
   };

   mainContainer.addEventListener("click", getTarget);
};
