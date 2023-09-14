class DVDLoader {

    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      this.ctx = this.canvas.getContext('2d');
  
      this.dvdCount = 20;
      this.dvds = [];
      for (let i = 0; i < this.dvdCount; i++) {
        const dvd = {
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height, 
          xSpeed: (Math.random() - 0.5) * 6,
          ySpeed: (Math.random() - 0.5) * 6,
          radius: Math.random() * 40 + 20,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.2,
          color: `hsl(${Math.random() * 360}, 70%, 70%)`
        };
        this.dvds.push(dvd);
      }
  
      this.animate();
    }
  
    drawDVD(dvd) {
      this.ctx.save();
      this.ctx.translate(dvd.x, dvd.y);
      this.ctx.rotate(dvd.rotation);
  
      // DVD logo
      this.ctx.fillStyle = 'black';
      this.ctx.font = '20px Arial';
      this.ctx.fillText('DVD', -10, 10);
      
      // DVD
      this.ctx.beginPath();
      this.ctx.arc(0, 0, dvd.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = dvd.color;
      this.ctx.fill();
  
      this.ctx.restore();
    }
  
    updateDVDs() {
      this.dvds.forEach(dvd => {
        dvd.x += dvd.xSpeed;
        dvd.y += dvd.ySpeed;
        dvd.rotation += dvd.rotationSpeed;
  
        if (dvd.x - dvd.radius < 0 || dvd.x + dvd.radius > this.canvas.width) {
          dvd.xSpeed = -dvd.xSpeed;
        }
        if (dvd.y - dvd.radius < 0 || dvd.y + dvd.radius > this.canvas.height) {
          dvd.ySpeed = -dvd.ySpeed; 
        }
      });
    }
  
    animate() {
      requestAnimationFrame(this.animate.bind(this));
  
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      
      this.updateDVDs();
      this.dvds.forEach(dvd => this.drawDVD(dvd));
    }
  
  }