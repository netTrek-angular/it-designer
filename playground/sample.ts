let numbers: number[] = [1,2,3,4,5,6]; // 1-6
let num1 = [...numbers, 7, 8, 9];  // 1-9
let num2 = [0, ...numbers, 7, 8, 9];  // 0 - 9

let user = {name: 'saban', age: 44};
let clone = {...user};
let extUser = {...user, zip: 46282 }
let overUser = {...user, age: 46282 }


let uname = 'saban';
let uage = 44;

let usr = {uname, uage}; // {uname:uname, uage:uage}
console.log (usr);

let dbResponse = {col1: 1, col2: 1, col3: 1, col4: 1, col5: 1, name: 'saban', mail:'us@netTrek.de', zip: 46282 }
const {zip, mail} = dbResponse;

console.log ( mail ); // console.log (dbResponse.mail);

let testVar: string;


// <button onclick="func()" .....>label

class NavButton {
  constructor ( private btn: HTMLButtonElement ) {
    this.init ();
  }

  private init () {

    this.btn.addEventListener ('click', () => {
      console.log ( this ); // NavButton
    })
  }
}



function funct1 () {
  console.log ( 'func1');
}

let func2 = function () {
  console.log ( 'func2');
}

let func3 = () => {
  console.log ( 'func3');
}

function addOne ( val: number ): number {
  return val + 1;
}

let addOneArr = ( val: number ) => {
  return val + 1;
}


let addOneArrRet = ( val: number ) => val + 1;

// @ts-ignore
let addOneArrRetOneParam = val => val + 1;

abstract class Human {
  age?: number;

  constructor ( public name: string ) {

  }

  sayYourName (): string {
    return this.name;
  }
}

class Man extends Human {
  constructor (name: string) {
    super (name );
  }
}

const man: Man = new Man ('saban');
// const hu: Human = new Human ();


interface ICar {
  brand: string;
  sayYourBrand (): void;
}

class Car implements ICar {

  private _year?: Date;

  // brand?: string;

  constructor ( public brand: string ) {
    // this.brand = brand;
  }

  sayYourBrand (): void {
    console.log ( this.brand );
  }

  set year ( year: Date | undefined ) {
    this._year = year;
  }

  get year (  ): Date | undefined {
    return this._year;
  }

  // oneMore ( param1: string  ): string {
  // oneMore ( param1: string = 'hello'  ): string {
  /*
  oneMore ( param1?: string  ): string | undefined {
      return param1;
  }
  oneMore ( param1?: string  ): string  {
      return param1!;
  }
  oneMore ( param1?: string  ): string  {
      return param1 ?? 'hello';
  }
  oneMore ( param1: string, param2:  string = 'hello'  ): string  {
      return param1 ?? 'hello';
  }*/
  oneMore ( param1: string, param2: string, ...name: string[] ): void {
    console.log ( param1, param2 );
    console.log ( name );

  }
}

class Audi extends Car {
  constructor () {
    super ('audi');
  }

  override sayYourBrand () {
    super.sayYourBrand();
  }
}

const audi = new Audi ();


const car = new Car ( 'bmw' );
car.sayYourBrand ();
// car.oneMore ( 'hello' );
// car.oneMore (); // hello
// car.oneMore ('world'); // world

car.oneMore ('world', 'peter', 'saban', 'hans');
// car.setYear ( new Date() );
car.year = new Date ();
console.log ( car.year );

let username = 'saban';
const num = 123;
let bo: boolean = true;

for ( let i = 0; i < 10; i ++ ) {
  for ( let i = 0; i < 10; i ++ ) {
    // console.log ( i );
  }
  // console.log ( i );
}
// console.log ( i );


const age = 123;
// age = 11;

// const btn = new HTMLButtonElement();
const date: Date = new Date ();
console.log ( date );
