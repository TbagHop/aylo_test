const fetchData = async () => {
    const response = await fetch('https://www.mydirtyhobby.com/api/topvideos?ats=test&type=month&language=en&limit=20');
    const data = await response.json();
    return data;
}

const renderData = async () => {
    const data = await fetchData();
    const videos_container = document.querySelector('.videos_container');
    data.items.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('video');
        div.innerHTML = `
            <div class="video_container">
                <div id="thumbnail_container" class="thumbnail_container">
                    <img src="${item.image}" alt="${item.title}">
                    <img class="play_button" src="./assets/svgs/play.svg" alt="play button">
                    <span class="runtime">${item.runtime}</span>
                </div>
                <h4>${item.title}</h4>
                <h5>Models: ${item.nick}</h5>
                <p>${item.description}</p>
                <button id="read-more" class="read_more">Read More</button>
            </div>
        `;
        videos_container.appendChild(div);
    });
    
    eventListeners();
}

const eventListeners = () => {
    const modal = document.querySelector('.modal');
    const thumbnail_containers = document.querySelectorAll('#thumbnail_container');
    const readMoreButtons = document.querySelectorAll('#read-more');

    thumbnail_containers.forEach(thumbnail_container => {
        thumbnail_container.addEventListener('click', (e) => {
            modal.classList.add('active');
        });
    });

    readMoreButtons.forEach(readMoreButton => {
        readMoreButton.addEventListener('click', (e) => {
            const paragraph = e.target.previousElementSibling;
            paragraph.classList.toggle('active');
            readMoreButton.textContent = paragraph.classList.contains('active') ? 'Read Less' : 'Read More';
        });
    });
}

renderData();