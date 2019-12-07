const submit = document.querySelector("#submit-btn");

submit.addEventListener("click", e => {
  e.preventDefault();
  const newReservation = {
    customerName: document.querySelector("#name").value.trim(),
    phoneNumber: document.querySelector("#phone").value.trim(),
    customerEmail: document.querySelector("#email").value.trim(),
    customerID: document.querySelector("#unique-id").value.trim()
  };
  console.log(newReservation);

  fetch("/api/reserve", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newReservation)
  }).then(function(data) {
    console.log(data);
  });
});
