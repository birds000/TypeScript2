class Animal {
    private names: string;
    private age:number;

    constructor(name:string){
        this.names = name;
    }

    setAge(age:number):void{
        this.age = age;
    }

    getAge():number{
        return this.age;
    }

    display(age:number):void{
        console.log("Name : "+this.names+"  Age : "+age);
    }
    
}

class Dog extends Animal{

    display(age:number):void{

        super.display(3);

        console.log("Name : "+name+"  Age : "+age);
    }

}

let Dog1 = new Dog("Hachi");
Dog1.setAge(5);
Dog1.display(Dog1.getAge());