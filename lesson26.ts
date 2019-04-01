class Person3 {
  public fname: string | undefined;
  public lname: string | undefined;
  constructor(fname: string, lname: string) {
    this.fname = fname;
    this.lname = lname;
  }
}

class Person4 {
  constructor(public fname: string, public lname: string) {}
}

var person4=new Person4("Anh Duc","Dang");
console.log(person4.fname+ person4.lname);