const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const apiResultsContainer = document.querySelector(".apiresults");
    
async function getGames() {
    var apiResultsWidth = 1;
    apiResultsContainer.innerHTML = displayMessage("wait","Please\xa0wait");

    try {
        const apiResponse = await fetch(url);
        const apiResults = await apiResponse.json();
        const games = apiResults.results;
        var tempApiResultsContainer = "";
        for (let i = 0; i < games.length; i++) {
            if (i === 8) {
                break;
            }
            tempApiResultsContainer += `<div class="apiresult"><div class="innerresult1"><b>Name:</b>${games[i].name}</div><span class="innerresult2"><b>Rating:</b>${games[i].rating}</span><span class="innerresult3"><b>Tags:</b>${games[i].tags.length}</span></div>`;
        }
        apiResultsContainer.innerHTML=tempApiResultsContainer;
    }
    catch (error) {
        apiResultsContainer.innerHTML = displayMessage("error","An error occured: <br>"+error);
    }    
}

getGames();




    