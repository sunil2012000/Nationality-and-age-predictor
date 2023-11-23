// async function fetchdata(){
//     const nameInput = document.getElementById('nameId').value;

//     if(!nameInput){
//         alert("Please enter a name");
//         return;
//     }

//     const apiUrl1= `https://api.nationalize.io?name=${nameInput}`;
//     const apiUrl2 = `https://api.agify.io?name=${nameInput}`

//     let resultNation= await fetch(apiUrl1);
//     let result1 = await resultNation.json();
//     console.log(result1,nameInput);

//     displayNation(result1,nameInput)

//     let resultAge = await fetch(apiUrl2);
//     let result2 = await resultAge.json();

//     console.log(result2,nameInput)
//     displayAge(result2)
// }

// function displayNation(result1, nameInput){
//     const countId = document.getElementById('countId')
//     const nameResult= document.getElementById('nameResult');
//     const countryList = document.getElementById('countryList');
//     //const resultContainer = document.getElementById('resultContainer');

//     console.log(nameResult);
//     console.log(countryList);

//     nameResult.textContent = `Name: ${nameInput}`
//     countryList.innerHTML = '';

//     countId.textContent = `Count : ${result1.count}`;

//     console.log(countId)

//     console.log(nameResult);
//     console.log(countryList);

//     result1.country.forEach(country => {
//         const itemList= document.createElement('li')
//         itemList.textContent= `${country.country_id}: ${country.probability.toFixed(3)}`
//         countryList.appendChild(itemList)
//     });

//     // resultContainer.classList.remove('hidden')
// }

// function displayAge(result2){
//     const countAgeId = document.getElementById('countAgeId')
//     const ageResult = document.getElementById('ageResult')

//     console.log(result2.count)
//     console.log(result2.age)

//     countAgeId.textContent = `Count for age : ${result2.count}`;
//     ageResult.textContent = `Age: ${result2.age}`; 


// }

async function fetchData() {
    const nameInput = $('#nameId').val();

    if (!nameInput) {
        alert("Please enter a name");
        return;
    }

    const apiUrl1 = `https://api.nationalize.io?name=${nameInput}`;
    const apiUrl2 = `https://api.agify.io?name=${nameInput}`;

    try {
        let result1 = await $.getJSON(apiUrl1);
        console.log(result1, nameInput);
        displayNation(result1, nameInput);

        let result2 = await $.getJSON(apiUrl2);
        console.log(result2, nameInput);
        displayAge(result2);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayNation(result1, nameInput) {
    const countId = $('#countId');
    const nameResult = $('#nameResult');
    const countryList = $('#countryList');

    console.log(nameResult);
    console.log(countryList);

    nameResult.text(`Name: ${nameInput}`);
    countryList.empty();

    countId.text(`Count: ${result1.count}`);

    console.log(countId);
    console.log(nameResult);
    console.log(countryList);

    $.each(result1.country, function (index, country) {
        const itemList = $('<li>').text(`${country.country_id}: ${country.probability.toFixed(3)}`);
        countryList.append(itemList);
    });
}

function displayAge(result2) {
    const countAgeId = $('#countAgeId');
    const ageResult = $('#ageResult');

    console.log(result2.count);
    console.log(result2.age);

    countAgeId.text(`Count for age: ${result2.count}`);
    ageResult.text(`Age: ${result2.age}`);
}
