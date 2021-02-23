const jokes = document.querySelector('.project__content_joke');
const jokesBtn = document.querySelector('.project__jokeBtn');

const generateJokes = () => {

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
}

jokesBtn.addEventListener('click', generateJokes);
generateJokes();