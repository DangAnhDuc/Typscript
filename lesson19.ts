class Person2{
    constructor(name: string){
        console.log(name + 'Person constrcutor')
    }

    getId(){
        return 10;
    }

}

class Employee2 extends Person2{
    constructor(name:string){
        super(name);
        console.log(name+ "Employee constructor")
    }

    getId(){
        return super.getId();
    }
}

var emp12 =new Employee2("Anh Duc");
console.log(emp12.getId());