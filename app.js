const cases = document.querySelector('#cases');
const deaths = document.querySelector('#deaths');
const recovered = document.querySelector('#recovered');
const span = document.querySelector('span');

let data = [];
getData();

function formatNum(number) {
    return  number.toFixed().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

function showCases() {
    console.log(data[0].cases);
    span.innerHTML = `${formatNum(data[0].cases)}`
}

function showDeaths() {
    span.innerHTML =  `${formatNum(data[0].deaths)}`
}

function showRecovered() {
    span.innerHTML =  `${formatNum(data[0].recovered)}`
}


async function getData(){
    const res = await axios.get('https://coronavirus-19-api.herokuapp.com/all');
    const {cases, deaths, recovered} = res.data;
    const newData = {
        cases: cases,
        deaths: deaths,
        recovered: recovered
    }
    makeData(newData);
}

function makeData(obj) {
    data.push(obj);
}

cases.addEventListener('click', showCases);
deaths.addEventListener('click', showDeaths);
recovered.addEventListener('click', showRecovered);