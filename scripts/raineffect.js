
let width = window.innerWidth / 1.1; 
let height = window.innerHeight / 1.1;

var xAxis = 100; var yAxis = 100;

/**
 * generateDroppletOrigin
 */
function newDroppletOrigin()
{

    this.xAxis = Math.random() * width;
    this.yAxis = Math.random() * height;
}

/**
 * Create a css rain in canvas
 * 
 * @param droppletsNumber (integer)
 * @param direction (array) up, down, left, right
 */
class CSSRain
{
    constructor(droppletsNumber, direction, width, height)
    {
        this.droppletsNumber = droppletsNumber;
        this.allRainDropplets = [];
        this.direction = direction;

        this.width = width;
        this.height = height;

        this.createDropplets();
        this.drawDropplets();

        this.canvas = document.getElementById('c');
        this.ctx = this.canvas.getContext('2d');
    }

    createDropplets ()
    {   
        for (let dropplet = 0; dropplet < this.droppletsNumber; dropplet++) {

            this.allRainDropplets.push(new newDroppletOrigin);
          
        }
    }

    drawDropplets ()
    {
        // c.width = this.width;
        // c.height = this.height;

        for (let index = 0; index < this.droppletsNumber; index++) {

            let currentDropplet = this.allRainDropplets[index];
        
            this.ctx.beginPath();
            this.ctx.fillStyle = 'gray';
            this.ctx.fillRect(currentDropplet.xAxis, currentDropplet.yAxis, 1, 90);
        
            currentDropplet.xAxis++;
        
            if (currentDropplet.xAxis > this.width + 20) {

                currentDropplet.xAxis = -20;

            }
        }
    }
}



let leftRain = new CSSRain(13, 'down');

setInterval(leftRain.drawDropplets, 2);