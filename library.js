function isTouching(object1,object2){
    if(object1.x - object2.x < fixedRect.width/2+movingRect.width/2
        && movingRect.x - fixedRect.x < fixedRect.width/2+movingRect.width/2
        && fixedRect.y - movingRect.y < fixedRect.height/2+movingRect.height/2
        && movingRect.y - fixedRect.y < fixedRect.height/2+movingRect.height/2){
    
        return true;
        
      }
      else{
        return false;
      }

}