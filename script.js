const apiKey = "154fbbfac464b8a0815d5fc0c241c891"
// Api call
//const apiUrl ="http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=154fbbfac464b8a0815d5fc0c241c891"
const apiUrl =`https://api.openweathermap.org/data/2.5/weather?q={cityinput}&appid=154fbbfac464b8a0815d5fc0c241c891`


// hacer un query selelction del search button 
const searchBtn = document.querySelector('.btn');
const cityInput = document.querySelector('.searchCity');

//que se haga un event listener"click" se haga la busqueda 
// de la ciudad que se ingresó en el input

searchBtn.addEventListener("click", (event) => {
    getApi.cityInput.value()
//no se que condición ponerle pero  lo que quiero es que
//al ponerle el input, la api solicite la info de esa ciudad
//especifica

});



//get api
function getApi(){
   fetch(apiUrl)
   .then(function (response){
    return response.json()
   })
   .then(function(data) {
    console.log(data);
   })
   
}

//renderData (){
// return `
    //  <div class="currentForecast">
    //                     <h3>${city} ${date} ${icon} </h3>
    //                     <p>${temp}</p>
    //                     <p>${wind}</p>
    //                     <p>${humidity}</p>
    //                 </div> `
// }


//render last search o sea que se vayan poniendo las busquedas recientes
//en la lista 
//para eso tengo que hacer algo  como esto EJERICIO 9 CAP 6
// const userName = document.createElement('h3');
// const issueTitle = document.createElement('p');
// userName.textContent = data[i].user.login;
// issueTitle.textContent = data[i].title;
// issueContainer.append(userName);
// issueContainer.append(issueTitle);
// }

// esta es para formar el URL 
//const URL = apiUrl + city + `&appid=${apiKey}`