const form = document.getElementById("contactForm");

const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();
  let mail = new FormData(form);
  sendMail(mail);
});

const sendMail = (mail) => {
  fetch("http://localhost:4000/send", {
    method: "post",
    body: mail,
  }).then((response) => {
    return response.json();
  });
};
