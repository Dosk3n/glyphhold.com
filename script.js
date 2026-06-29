const buttons = document.querySelectorAll("[data-copy-target]");

buttons.forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copyTarget);
    if (!target) return;

    const value = target.textContent.trim();
    await navigator.clipboard.writeText(value);

    const previous = button.textContent;
    button.textContent = "Copied";
    window.setTimeout(() => {
      button.textContent = previous;
    }, 1400);
  });
});
