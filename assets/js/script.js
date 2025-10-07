document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  function showTab(tabId) {
    tabContents.forEach(content => {
      content.style.display = content.id === tabId ? "block" : "none";
    });
    tabButtons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.tab === tabId);
    });
  }

  // Default: show AutoLink
  showTab("autolink");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      showTab(button.dataset.tab);
    });
  });
});
