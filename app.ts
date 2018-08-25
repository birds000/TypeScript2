var names:string="Hello TypeScript";
var count:number=100;
var str:boolean=true;

{
    let isRunning=false;
}
console.log("HelloWorld");
document.getElementById("id1").innerHTML=names;
document.write("Count is Type : "+typeof(count)+"<br>");
document.write("name  is Type : "+typeof(name)+"<br>");
document.write("str   is Type : "+typeof(str)+"<br>");
// document.write("isRunning is Type : "+typeof(isRunning)+"<br>");


var employee:any[]=["A","B"];
employee.push("C#");
employee.push("Java");
employee.push(5000);
employee.push(true);
// employee.push();
console.log(employee.toString());