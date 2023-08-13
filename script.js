const btnRead = document.getElementById("read-mark");
const section = document.getElementById("container-notifications");
btnRead.addEventListener("click", () => {
  for (const child of section.children) {
    child.classList.remove("unread");
  }
});
