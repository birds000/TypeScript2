var Employe = /** @class */ (function () {
    function Employe(id, name, sex, saraly) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.saraly = saraly;
        console.log("Creat Oject!!");
    }
    Employe.prototype.Display = function () {
        console.log("ID : " + this.id);
        console.log("Name : " + this.name);
        console.log("Sex : " + this.sex);
        console.log("Saraly : " + this.saraly);
    };
    //setter
    Employe.prototype.setDepartment = function (demaprtment) {
        this.department = demaprtment;
    };
    //getter
    Employe.prototype.getDepartment = function () {
        return this.department;
    };
    return Employe;
}());
var emp1 = new Employe(101, "Ven", 0, 1099);
emp1.Display();
console.log("----------------------------------");
var emp2 = new Employe(102, "Seng", 1, 699);
emp2.setDepartment("Programer");
emp2.Display();
console.log("Depratment" + emp2.getDepartment());
