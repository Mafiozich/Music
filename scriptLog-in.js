const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

svg.localName = 'line';
svg.setAttribute('width', '500'); 
svg.setAttribute('height', '100');

const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
line.setAttribute('x1', 0);
line.setAttribute('y1', 50);
line.setAttribute('x2', 500);
line.setAttribute('y2', 50);
line.setAttribute('stroke', 'white');

line.setAttribute('stroke-width', '5'); 
svg.appendChild(line);
document.getElementById('container-butt').appendChild(svg);




const inp1 = document.getElementById('inp1');
const inp2 = document.getElementById('inp2');
const butt = document.getElementById('button');

async function go() {
    try {
        let inp = {
            email: inp1.value,
            password: inp2.value
        };
    const res = await fetch('http://127.0.0.1:5500/indexLog-in.html', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(inp)
    });

    if(res.ok) {
        const JsonRes = await res.json();
        console.log(JsonRes);
    }
        } catch(error) {
        console.log('Ошибка:', error);
    }
}

butt.addEventListener('click', function(event) {
    go();
});

