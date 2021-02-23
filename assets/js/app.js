const jokes = document.querySelector('.project__content_joke');
const jokesBtn = document.querySelector('.project__jokeBtn');

// Non  Async data no:1

/*const generateJokes = () => {

    const setHeader = {
        headers : {
            Accept: 'application/json'
        }
    };

    fetch('https://icanhazdadjoke.com', setHeader)
        .then((res) => res.json())
        .then( (data) => {
            jokes.innerHTML = data.joke;
        }).catch((error) => {
             console.log(error);
        });
}*/


// Async data no:2

const generateJokes = async () => {
    try{
        const setHeader = {
            headers : {
                Accept: 'application/json'
            }
        }
        const res = await fetch('https://icanhazdadjoke.com', setHeader);
        const data = await res.json();
        jokes.innerHTML = data.joke;
    }catch(error){
        console.log(error);
    }
};


jokesBtn.addEventListener('click', generateJokes);
generateJokes();