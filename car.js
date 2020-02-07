/* Exercise 4: Object Exercise  
Create a constructor function, named Car, which defines an object with the following methods:
• getSpeed() – returns the current speed of the car
• setSpeed(speed) – sets the current speed of the car. If the value of the ‘speed’ parameter is greater than or equal to 0, 
set the speed of the car.
• stop() – sets the current speed of the car to 0
Example:
var car = new Car();
console.log(car.getSpeed());  // displays 0
car.setSpeed(10);
console.log(car.getSpeed()); // displays 10
car.stop();
console.log(car.getSpeed()); // displays 0*/

class Car {
    constructor (speed) {
        speed = 0;
        this._speed = speed;
    }
    getSpeed() {
        this._speed += speed;
        return this._speed;
        }
    setSpeed(speed) {
        if (speed >= 0) {
            this._speed = newSpeed;
    }
    }

    stop() {
        this._speed -= this._speed;

    }
    
    }

let car = new Car();
console.log(car.getSpeed());  
car.setSpeed(10);
console.log(car.getSpeed()); 
car.stop();
console.log(car.getSpeed());

    
