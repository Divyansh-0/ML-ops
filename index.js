function storeData() {
  const form = document.getElementById("registrationForm");
  const formData = new FormData(form);

  formData.forEach((value, key) => {
    sessionStorage.setItem(key, value);
  });

  console.log("Form data stored in session storage.");
}
