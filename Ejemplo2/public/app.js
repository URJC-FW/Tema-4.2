async function checkInfo(){

    const info = 'someInfo';

    const response = await fetch(`/checkInfo?info=${info}`);

    const infoCheck = await response.json();
  
    const content = document.getElementById("content");

    content.innerHTML = `
        <p>Valid: ${infoCheck.valid}</p>
        <p>Message: ${infoCheck.message}</p>`;

}