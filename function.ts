function ShowText(){
    console.log("Your Massege");
}
function MyProduct1(name:string, price:number, amount:number){
    console.log("Name : "+name+"  Amount : "+amount+"  Price : "+price);
}

MyProduct1("Mile",2000,1);

console.log("------------optinal paramiters---------------");

// optinal paramiters
function MyProduct2(name:string, price:number, amount?:number){
    console.log("Name : "+name+"  Price : "+price);
    if (amount != undefined){
        console.log("  Amount : "+amount);
    }
}

MyProduct2("Mile",2000)

console.log("------------Rest Paramiters---------------");

// Rest Paramiters
function SumNumber(...nums:number[]){
    var sum:number = 0;
    var i:number;
    for (i = 0; i < nums.length; i++){
        sum = sum+nums[i];
    }
    console.log("Sum : "+sum);
}

SumNumber(2,4,6,8,10);
SumNumber(1,2,3);