class A{
    constructor(a=90){
        this.a = a;
    }
}

class B extends A{
    mymethod(){
        console.log("Hello world")
    }
}

let obj = new A(98);
let obj1 = new B()
obj1.mymethod();