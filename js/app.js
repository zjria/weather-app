document.getElementById('search-btn').addEventListener('click', function () {
    const inputField = document.getElementById('input-field').value;


    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputField + ' &appid=5cebd4cdc3ff72511a76460345e68fdb')
        .then(response => response.json())
        .then(data => {
            const cityName = data.name;
            const temp = data.main.temp;
            const temperature = temp - 273.15;
            const description = data.weather[0].description;

            document.getElementById('cityName').innerHTML = cityName;
            document.getElementById('temperature').innerHTML = temperature.toFixed(2);
            document.getElementById('description').innerHTML = description;

            console.log(data);

        })
        .catch(error => alert('Please, Type Correct City Name.'))
});

