let form=document.querySelector("#form");
let select=document.querySelector("#movie-selection");
let section=document.querySelector("#display-info");
let ul=document.querySelector("#list");
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
                    <p>${el.release_date}</p>
                    <p>${el.description}</p>`;
                    break;

                  }
                 
              }
            })

            form.addEventListener("submit", e=>{
                e.preventDefault();
                let yourReview=e.target.review.value;
                e.target.review.value="";
                let li=document.createElement("li");
                let strong=document.createElement("strong");
                let title=document.querySelector("#display-info h3").textContent;
                li.innerHTML=
                `<strong>${title}: ${yourReview}</strong>`;
                ul.append(li);
                
            })

                
        
        
});

