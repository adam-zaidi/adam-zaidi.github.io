class Plant {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.food = 5;
        this.size = 10;
    }

    drawSelf () {
        fill(30, 100, 100, 100 * this.food / 5);
        ellipse(this.x, this.y, this.size, this.size);
    }

    update() {
        this.drawSelf();
        this.grow();
    }

    grow () {
        if (frameCount % 120 !== 0) { return; }

        if (this.food < 5 && random(4) < 1) {
            this.food += 1;
        } 

        var maxPlants = 100;
         
        if (plantsArray.length < maxPlants && random(0, 18) < 1) {
            var adjX = this.x + round(random(-1, 1)) * this.size;
            var adjY = this.y + round(random(-1, 1)) * this.size;

            var adjPlant = new Plant(adjX, adjY);

            if (plantsArray.find((otherPlant) =>
            dist(adjPlant.x, adjPlant.y, otherPlant.x, otherPlant.y) < adjPlant.size
            )) {
                return;
            }
                
            plantsArray.push(adjPlant);
        }
    }    
}