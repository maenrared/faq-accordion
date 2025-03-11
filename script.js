document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll(".toggle-icon");
  
    icons.forEach((icon) => {
      icon.addEventListener("click", () => {
        const answerRow = icon.closest(".faq-item").nextElementSibling;
        const isOpen = answerRow.classList.contains("active");
  
        // Close all answers except the clicked one
        document.querySelectorAll(".answer-row").forEach((row) => {
          row.classList.remove("active");
          row.previousElementSibling.querySelector(".toggle-icon").src = "./icon-plus.svg";
        });
  
        // Toggle the clicked one
        if (!isOpen) {
          answerRow.classList.add("active");
          icon.src = "./icon-minus.svg";
        } else {
          icon.src = "./icon-plus.svg";
        }
      });
    });
  });
  
  