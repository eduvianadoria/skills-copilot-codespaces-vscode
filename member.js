function skillsMember() {
  const member = document.querySelector(".member");
  const memberBtn = document.querySelector(".member-btn");
  const memberClose = document.querySelector(".member-close");

  memberBtn.addEventListener("click", () => {
    member.classList.add("member--active");
  });

  memberClose.addEventListener("click", () => {
    member.classList.remove("member--active");
  });
}