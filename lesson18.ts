class Person1 {
  name: string;
  constructor(name: string) {
    this.name = name;
    console.log(this.name + " constructor");
  }

  static talk() {
    console.log("This person is talking");
  }

  run() {
    console.log("Person is running");
  }
}

let p = new Person1("duc");
p.run();
Person1.talk();
