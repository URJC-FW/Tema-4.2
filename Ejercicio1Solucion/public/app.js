const NUM_RESULTS = 3;

let loadMoreRequests = 0;

async function loadMore(){

    const from = (loadMoreRequests+1) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    const response = await fetch(`/superheroes?from=${from}&to=${to}`);

    const newSuperheroes = await response.text();
  
    const superheroesDiv = document.getElementById("superheroes");

    superheroesDiv.innerHTML += newSuperheroes;

    loadMoreRequests++;
}