let colorGlobal;

const colorMap = {
    'a': 'pink',
    's': 'orange',
    'd': 'skyblue'
};

const newDivColorMap = {
    'q': 'purple',
    'w': 'grey',
    'e': 'brown'
};

document.addEventListener('keydown', function(event) {
    if (colorMap[event.key]) {
        colorGlobal = colorMap[event.key];
        document.getElementById('key').style.backgroundColor = colorGlobal;
    } else if (newDivColorMap[event.key]) {
        document.getElementById('extra').style.backgroundColor = newDivColorMap[event.key];
    }
});

document.querySelectorAll('.color-box').forEach(div => {
    div.addEventListener('click', function() {
        div.style.backgroundColor = 'black';
    });
});
