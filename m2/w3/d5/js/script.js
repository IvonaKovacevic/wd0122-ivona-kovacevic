let table = document.querySelector("#utenti");
table.classList.add("table");

fetch("/json/users.json")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);

    for (let utente of res) {
      let tr = document.createElement("tr");
      tr.classList.add("row");

      let tdUsername = document.createElement("td");
      tdUsername.innerHTML = utente.username;
      tdUsername.classList.add("col");

      let tdNome = document.createElement("td");
      tdNome.innerHTML = utente.firstName;
      tdNome.classList.add("col");

      let tdCognome = document.createElement("td");
      tdCognome.innerHTML = utente.lastName;
      tdCognome.classList.add("col");

      let tdGender = document.createElement("td");
      tdGender.innerHTML = utente.gender;
      tdGender.classList.add("col");

      let tdEmail = document.createElement("td");
      tdEmail.innerHTML = utente.email;
      tdEmail.classList.add("col");

      let tdPhoto = document.createElement("td");
      tdPhoto.innerHTML = `<img src="${utente.profileURL}" "width=50px height=50px>`;
      tdPhoto.classList.add("col");

      tr.append(
        tdUsername,
        tdNome,
        tdCognome,
        tdCognome,
        tdGender,
        tdEmail,
        tdPhoto
      );
      table.append(tr);
    }
  });
