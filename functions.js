export const getAllElements = () => {
   const element = document.querySelector("[data-id='a7ba009']");
   const allPluses = document.querySelectorAll(".elementor-toggle-icon-closed");
   let highlightedItems = Array.from(allPluses);
   console.log(highlightedItems);
   //tu skończyłem: czyli mamy tablicę z plusami jako przykład
   //teraz trzeba tak samo pobrać tablicę minusów i beschreibungów
   //następnie dobrać się do takiego elementu poprzez target od addEventListenera
   //i nast zastosować filter lub map i dodać im display odpowiedni

   let isOpen = true;

   const toggleDisplay = (targetToToggle) => {
      targetToToggle.style.display = isOpen ? "block" : "none";
   };

   const getTarget = (e) => {
      const targetToDisappear = e.target.parentElement.nextElementSibling;
      //   console.log(targetToDisappear.style.display);

      isOpen = !isOpen;
      toggleDisplay(targetToDisappear);
   };

   element.addEventListener("click", getTarget);

   allPluses.forEach((element) => {
      console.log(element);
   });
};
