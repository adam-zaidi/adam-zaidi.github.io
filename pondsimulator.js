var cWidth = 500;
var cHeight = 500;

var fish;
var fishArray = [];
var plantsArray = [];

function setup () {
    createCanvas(cWidth, cHeight);
    colorMode(HSB, 100);

    while (fishArray.length < 5) {
        fish = new Fish(random(0, cWidth-20)+10, random(0, cHeight-20)+10);
        fish.mutate();
        fishArray.push(fish);
    }

    while(plantsArray.length < 30) {
        plant = new Plant(random(0, cWidth-20)+10, random(0, cHeight-20)+10);
        plantsArray.push(plant);
    }

    // console.log(fish);
}

function draw () {
    background(65, 70, 70);

    fishArray = fishArray.filter(f => f.dead == false);

    for (var eachPlant of plantsArray) {
        eachPlant.drawSelf();
        eachPlant.grow();
    }

    for (var eachFish of fishArray) {
        eachFish.drawSelf();
        eachFish.move();
        eachFish.eat();
    }

}

function placeFree (obj, x, y) {
    if (x - obj.size/2 < 0) {return false; }
    if (x + obj.size/2 > cWidth) {return false; }
    if (y - obj.size/2 < 0) {return false; }
    if (y + obj.size/2 > cHeight) {return false; }
    return true;
}