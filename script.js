const mark_all = document.getElementById("mark_all");
const num = document.getElementById("num");
const unread = document.querySelectorAll(".unread");
const dot = document.querySelectorAll(".dot");
const notification = document.querySelectorAll(".notification");

let count = 3;

mark_all.addEventListener("click", () => {
  num.textContent = 0;

  dot.forEach((item) => {
    item.style.opacity = 0;
  });

  unread.forEach((item) => {
    item.style.backgroundColor = "white";
  });
});

notification.forEach((notification) => {
  notification.addEventListener("click", () => {
    // Check if the clicked notification has the class "unread"
    if (notification.classList.contains("unread")) {
      notification.style.backgroundColor = "white";

      const dot = notification.querySelector(".dot");

      if (dot) {
        dot.style.opacity = 0;
      }

      count = count - 1;
      num.textContent = count;
      notification.classList.remove("unread");
    }
  });
});
