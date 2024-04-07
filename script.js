function toggleAccordion(event) {
    event.target.classList.toggle("active");
    var panel = event.target.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      event.target.querySelector('.symbol').textContent = '+';
    } else {
      panel.style.display = "block";
      event.target.querySelector('.symbol').textContent = '-';
    }
  }