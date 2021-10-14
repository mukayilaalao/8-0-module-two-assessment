let form=document.querySelector("#form");
let select=document.querySelector("#movie-selection");
let section=document.querySelector("#display-info");
fetch("https://ghibliapi.herokuapp.com/films")
   .then(data=> data.json())
      .then(obj=> {
          for(let el of obj) {
              let option=document.createElement("option");
              option.value=el.title.toLowerCase();
              option.textContent= el.title;
              select.append(option);
          }
          select.addEventListener("change", e=>{
              for(let el of obj){
                  if(e.target.value.toLowerCase()===el.title.toLowerCase()){
                    section.innerHTML=`
                    <h3>${el.title}</h3>
                    <br>
                    <p>${el.release_date}</p>
                    <br>
                    <p>${el.description}</p>`;

                  }
                //   break;
              }

                
        
        })
      });

