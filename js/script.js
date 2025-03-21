// ham-container
const buttonOpen = document.getElementById("buttonOpen")
const buttonClose = document.getElementById("buttonClose")
const categories = document.getElementById("categories")
const buttonsContent = document.getElementById("buttons-content")
const black = document.getElementById("black")


const openMenu = () => {
  categories.classList.add("visible")
  buttonsContent.classList.add("change-button")
  black.classList.add("blackvisible")
}
const closeMenu = () => {
  categories.classList.remove("visible")
  buttonsContent.classList.remove("change-button")
  black.classList.remove("blackvisible")
}

buttonOpen.addEventListener("click", openMenu)
buttonClose.addEventListener("click", closeMenu)
black.addEventListener("click", closeMenu)

document.addEventListener("keydown", (e) => {
  if(e.key === "Escape") {
    closeMenu()
  }

})