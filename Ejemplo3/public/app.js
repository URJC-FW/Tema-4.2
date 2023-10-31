async function generateRandom(){

    const key = Math.ceil(Math.random() * 100)

    const response = await fetch(`/saveRandom`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            key: key
        })
    });

    const info = await response.json();
  
    const content = document.getElementById("content");

    const newRow = document.createElement("tr")
    const cell1 = document.createElement("td")
    cell1.textContent = info.key
    const cell2 = document.createElement("td")
    cell2.textContent = info.value
    newRow.appendChild(cell1)
    newRow.appendChild(cell2)
    content.appendChild(newRow);

}