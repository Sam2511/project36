var dog,sadDog,happyDog;
var foodObj;
var feed;
var addFood;




function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

 
  

   feed = createButton("Feed the Dog");
   feed.position(700,95);
   feed.mousePressed(feedDog);

   milk = new Food(this.image,100,100);

   addFood = createButton("Add FOOD");
   addFood.position(800,95);
   addFood.mousePressed(addFoods);
}

function draw() {
  background(46,139,87);

  

  drawSprites();
}

//function to read food Stock


function feedDog(){
  dog.addImage(happyDog);

  if(foodObj.getFoodStock()<=0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0);
  }else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  }
  
}

function addFoods(){
;
database.ref('/').update({
 foodObj:foodObj+1
})

}


//function to update food stock and last fed time


//function to add food in stock
