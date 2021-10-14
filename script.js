let form=document.querySelector("#form");
let select=document.querySelector("#movie-selection");
fetch("https://ghibliapi.herokuapp.com/films")
   .then(data=> data.json())
      .then(obj=> {
          for(let el of obj) {
              let option=document.createElement("option");
              option.value=el.title.toLowerCase();
              option.textContent= el.title;
              select.append(option);
          }
      });