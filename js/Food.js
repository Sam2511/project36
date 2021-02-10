class Food{
    constructor(){
        
        var foodStock;
        var getFoodStock, updateFoodStock, deductFood;
        this.image = loadImage("Images/Milk.png");
    }


display(){
    var x = 80,y =100;

    imageMode(CENTER);
    image(this.image, 720, 220, 70, 70);

    if(this.foodStock!=0){
        for(var i = 0; i<this.foodStock;i++){
            if(i%10==0){
                x = 80;
                y = y+50;
            }

        image(this.image, x, y, 50, 50);
        x = x+30;
        }   
    }
}

getFoodStock(){
    var ref = db.ref("foodStock");
    ref.on("value", function(data){
        addFood = data.val();
    })

}

updateFoodStock(count){
    db.ref("/").update({
        foodStock : count
    })
}

deductFood(Name){
    db.ref("player"-pc).set({
        name : Name
    });
}


}
