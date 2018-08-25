class Employe {
    private name: string;
    private id: number;
    private sex: number;
    private saraly: number;
    private department: string;

    constructor(id: number, name: string, sex: number, saraly: number) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.saraly = saraly;
        console.log("Creat Oject!!");
    }

    Display(): void {
        console.log("ID : " + this.id);
        console.log("Name : " + this.name);
        console.log("Sex : " + this.sex);
        console.log("Saraly : " + this.saraly);
    }

    //setter
    setDepartment(demaprtment: string): void {
        this.department = demaprtment;
    }

    //getter
    getDepartment(): string {
        return this.department;
    }

}
let emp1 = new Employe(101, "Ven", 0, 1099);
emp1.Display();
console.log("----------------------------------");
let emp2 = new Employe(102, "Seng", 1, 699);
emp2.setDepartment("Programer");
emp2.Display();
console.log("Depratment : " + emp2.getDepartment());