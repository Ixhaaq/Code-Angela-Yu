/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
 function main(){
    //your code here
    threeBeepers();
    resetMoveUp();
    twoBeepers();
    resetMoveUp();
    threeBeepers();
    resetMoveUp();
    twoBeepers();
    resetMoveUp();
    threeBeepers();
 }
 
 function putBeeperMoveTwo(){
    putBeeper();
    move();
    move();
 }
 
 function putBeeperMoveOne(){
    putBeeper();
    move();
 }
 
 function threeBeepers(){
    putBeeperMoveTwo();
    putBeeperMoveTwo();
    putBeeper();
 }
       
 function resetMoveUp(){
    turnLeft();
    turnLeft();
    move();
    move();
    move();
    move();
    turnRight();
    move();
    turnRight();
 }
 
 function twoBeepers(){
    move();
    putBeeperMoveTwo();
    putBeeperMoveOne();
 }
    