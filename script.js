const toggles = Array.from(document.querySelectorAll(".toggle"));
const contentDivs = Array.from(document.querySelectorAll(".content"));
const icons = Array.from(document.querySelectorAll(".toggle img"));

function toggleContent(index) {
  const currentContentDiv = contentDivs[index];
  const currentIcon = icons[index];
  const isOpen = parseInt(currentContentDiv.style.height) !== currentContentDiv.scrollHeight;

  contentDivs.forEach((contentDiv, i) => {
    if (i === index) {
      currentContentDiv.style.height = isOpen ? "0px" : currentContentDiv.scrollHeight + "px";
      toggles[i].style.color = isOpen ? "#151330" : "#0084e9";
      currentIcon.src = isOpen ? "/images/minus.svg" : "/images/plus.svg";
    } else {
      contentDiv.style.height = "0px";
      toggles[i].style.color = "#212157";
      icons[i].src = "/images/plus.svg";
    }
  });
}

toggles.forEach((toggle, i) => {
  toggle.addEventListener("click", () => {
    toggleContent(i);
  });
});
