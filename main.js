let url = `https://rickandmortyapi.com/api/character/`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const characters = data.results;
        const contentDiv = document.querySelector('.content');

        characters.forEach(character => {
            const characterDiv = document.createElement('div');
            characterDiv.classList.add('character');

            const name = document.createElement('h3');
            name.textContent = character.name;

            const image = document.createElement('img');
            image.src = character.image;
            image.alt = character.name;

            const anchor = document.createElement('a');
            anchor.href = "detail.html?id=" + character.id;
            anchor.textContent = "View Details";

            characterDiv.appendChild(image);
            characterDiv.appendChild(name);
            characterDiv.appendChild(anchor);
            contentDiv.appendChild(characterDiv);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

function personajes() {
    const number = document.getElementById("number").value;

    url = `https://rickandmortyapi.com/api/character/?page=${number}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const characters = data.results;
            const contentDiv = document.querySelector('.content');
            contentDiv.innerHTML = ''; // Clear previous content

            characters.forEach(character => {
                const characterDiv = document.createElement('div');
                characterDiv.classList.add('character');

                const name = document.createElement('h3');
                name.textContent = character.name;

                const image = document.createElement('img');
                image.src = character.image;
                image.alt = character.name;

                const anchor = document.createElement('a');
                anchor.href = "detail.html?id=" + character.id;
                anchor.textContent = "View Details";

                characterDiv.appendChild(image);
                characterDiv.appendChild(name);
                characterDiv.appendChild(anchor);
                contentDiv.appendChild(characterDiv);
            });
        })
        .catch(error => console.error('Error fetching data:', error));           

}

