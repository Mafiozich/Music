const contMus = document.getElementById('container-music');
const div = document.createElement('div');
div.className = "playlist-music";
contMus.appendChild(div);

const img = document.createElement('img');
img.className = "image";
img.src='./img/Pop.png';

const p = document.createElement('p');
p.className = "container-text";
p.innerText = `Pop Rising`;
div.appendChild(img);
div.appendChild(p);

const item = document.createElement('p');
item.className = "text-item";
item.innerText = `Relaxing sound, instrumentality, for thoughtful moments`;
div.appendChild(item);





const div2 = document.createElement('div');
div2.className = "playlist-music";
contMus.appendChild(div2);

const img2 = document.createElement('img');
img2.className = "image";
img2.src='./img/House.jpg';

const p2 = document.createElement('p');
p2.className = "container-text";
p2.innerText = `House`;
div2.appendChild(img2);
div2.appendChild(p2);

const item2 = document.createElement('p');
item2.className = "text-item";
item2.innerText = `Relaxing sound, instrumentality, for thoughtful moments`;
div2.appendChild(item2);






const div3 = document.createElement('div');
div3.className = "playlist-music";
contMus.appendChild(div3);

const img3 = document.createElement('img');
img3.className = "image";
img3.src='./img/The_Slow_rush.jpg';

const p3 = document.createElement('p');
p3.className = "container-text";
p3.innerText = `Cheelout Time`;
div3.appendChild(img3);
div3.appendChild(p3);

const item3 = document.createElement('p');
item3.className = "text-item";
item3.innerText = `Relaxing sound, instrumentality, for thoughtful moments`;
div3.appendChild(item3);







const div4 = document.createElement('div');
div4.className = "playlist-music";
contMus.appendChild(div4);

const img4 = document.createElement('img');
img4.className = "image";
img4.src='./img/Hip-hop.jpg';
div4.appendChild(img4);

const p4 = document.createElement('p');
p4.className = "container-text";
p4.innerText = `Hip-Hop`;
div4.appendChild(p4);

const item4 = document.createElement('p');
item4.className = "text-item";
item4.innerText = `Relaxing sound, instrumentality, for thoughtful moments`;
div4.appendChild(item4);

 



const navLinks = document.querySelectorAll('.navLink');
navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        navLinks.forEach(function(link) {
            link.classList.remove('clicked');
        });
        this.classList.add('clicked');
    });
});


