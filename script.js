{/* <div id = "joke">Joke is loading</div><br> */}
{/* <button id = "button" class="btn">NEXT JOKE</button> */}

//GET https://icanhazdadjoke.com/

const jokes =  document.querySelector('#joke');
const jokebtn = document.querySelector('#button');

const generate_jokes = () => {

    const setHeader = {
        headers : {
            Accept : "application/json"
        }
    }

    fetch('https://icanhazdadjoke.com/',  setHeader)
    .then((res) =>res.json() )
    .then( (data) => {
        jokes.innerHTML = data.joke;
    }).catch( (error) => {
        console.log(error); 
    })
}

jokebtn.addEventListener('click', generate_jokes);
generate_jokes();
console.log(res.json);