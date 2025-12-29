document.addEventListener("DOMContentLoaded", () => {
  fetch("chatbot.html")
    .then(response => response.text())
    .then(data => {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = data;
      document.body.appendChild(wrapper);
    });
});
