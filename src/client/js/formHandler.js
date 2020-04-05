async function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    Client.checkForName(formText);

    let temp = await Client.getZipCodeWeather();

    console.log("::: Form Submitted :::");
    fetch('http://localhost:8081/test')
        .then(res => res.json())
        .then(function (res) {
            document.getElementById('results').innerHTML = res.message + ', ' + temp;
        })
}

export { handleSubmit }
