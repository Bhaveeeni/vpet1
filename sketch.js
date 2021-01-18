var dog,happydog,foodstock,foodS,database

function preload()
{
  dogI=loadImage("images/dogImg.png")
  hdogI=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(800, 700);
  database= firebase.database()
  dog=createSprite(200,200,50,50)
  dog.addImage(dogI)
  dog.scale=0.5  
  var foodstock=database.ref("Food")
  foodstock.on("value",readPosition)
  
}


function draw() { 
  background(46,139,87) 
  if(keyWentDown(UP_ARROW)){
    writePosition(foodS)
    dog.addImage(hdogI)
    dog.scale=0.5
  }

  drawSprites();
  text("Note:Press Up Arrow To Feed Drago Milk",150,50)
  textSize(15)
  //add styles here

}
function readPosition(data){
  foodS=data.val()
}

function writePosition(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}



