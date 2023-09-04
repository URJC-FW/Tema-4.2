async function checkUsernameAvailability() {

    let usernameInput = document.getElementById('username');

    let username = usernameInput.value;

    const response = await fetch(`/availableUsername?username=${username}`);

    const responseObj = await response.json();

    let message = responseObj.available? 
        '<p>Disponible</p>':
        '<p>No disponible</p>';

    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = message;

}