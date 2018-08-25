interface Player{
    name : string;
    hp : number;
    weapon : string;
    attact:()=>string;
}

let p1:Player={
    name:"Kittikorn",
    hp: 100,
    weapon: "sword",
    attact:():string=>{
        return "Attact player";
    }
}
console.log(p1.name);
console.log(p1.hp);
console.log(p1.weapon);
console.log(p1.attact);