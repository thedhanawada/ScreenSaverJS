const canvas = document.getElementById('dvdCanvas');
const ctx = canvas.getContext('2d');

const dvd = {
    x: 100,
    y: 100,
    width: 100,
    height: 60,
    xSpeed: 2,
    ySpeed: 2,
    color: 'red'
};

function drawDVD() {
    ctx.fillStyle = dvd.color;
    ctx.fillRect(dvd.x, dvd.y, dvd.width, dvd.height);
}

function updateDVDPosition() {
    dvd.x += dvd.xSpeed;
    dvd.y += dvd.ySpeed;

    if (dvd.x + dvd.width > canvas.width || dvd.x < 0) {
        dvd.xSpeed = -dvd.xSpeed;
    }

    if (dvd.y + dvd.height > canvas.height || dvd.y < 0) {
        dvd.ySpeed = -dvd.ySpeed;
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDVD();
    updateDVDPosition();
    requestAnimationFrame(animate);
}

animate();
