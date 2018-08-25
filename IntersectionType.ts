// IntersectionType
interface Shape {
    name : String; 
    getArea(): number;
}
interface Logger {
    name:String
    log();
}

class Circle implements Shape, Logger{
    constructor(private radlus:number){ 

    }

    log(){
        console.log('Circle');
        
    }

    getArea(): number{
        return Math.PI * Math.pow(this.radlus, 2);
    }
}

const Circle1 : Shape & Logger = new Circle(10);
const Circle2 : Shape | Logger = new Circle(10);
console.log(Circle1.getArea);
console.log(Circle1.log);

// UnoinType
