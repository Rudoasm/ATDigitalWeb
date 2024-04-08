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

  document.addEventListener('DOMContentLoaded', function() {
    const navigationToggle = document.getElementById('navigation-toggle');
    const homeListItem = document.getElementById('home-list-item');

    navigationToggle.addEventListener('change', function() {
      if (navigationToggle.checked) {
        homeListItem.style.display = 'block';
      } else {
        homeListItem.style.display = 'none';
      }
    });
  });