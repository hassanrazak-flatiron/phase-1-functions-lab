// Code your solution in this file!
const hqLoc = 42;

function distanceFromHqInBlocks(arg){
    return Math.abs(arg - hqLoc);

};


function distanceFromHqInFeet(arg){
    return distanceFromHqInBlocks(arg)*264
}

function distanceTravelledInFeet(arg1,arg2){
    return Math.abs(arg1-arg2)*264;

}

function calculatesFarePrice(start, destination){
    let x = (distanceTravelledInFeet(start,destination));
    debugger;
    switch(x){
        
        case (x <= 400):
            x = 0
            break;
        case (x >400 && x < 2000):
           x = x*.02;
           break;
        case (x > 2000 && x < 2500):
            x = 25
            break;
        case (x > 2500):
            x = "not allowed to ride";
            break;
    }

    return x;
}