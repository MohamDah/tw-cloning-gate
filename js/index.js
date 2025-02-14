const nav = document.querySelector(".hablenav")
console.log(nav)

window.addEventListener("scroll", e => {
  if (window.scrollY > 150){
    // nav.classList.add("top-0", "opacity-100")
    // nav.classList.remove("-top-2", "opacity-0")
    nav.style.top = "0"
    nav.style.opacity = "1"
  } else {
    // nav.classList.remove("top-0", "opacity-100")
    // nav.classList.add("-top-2", "opacity-0")
    nav.style.top = "-24px"
    nav.style.opacity = "0"

  }
})