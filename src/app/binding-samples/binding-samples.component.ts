import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'itd-binding-samples',
  templateUrl: './binding-samples.component.html',
  styleUrls: ['./binding-samples.component.scss']
})
export class BindingSamplesComponent implements OnInit {

  name: string = 'Saban';
  num: number = 300;
  crrImage: number = 200300;
  html: string = `<p>
Hello <strong>World</strong> <script>alert('hacked')</script>
</p>`;
  fontColor: number|string = 'blue';
  constructor() { }

  ngOnInit(): void {
    console.log ( 'init interval')
    // setInterval( () => {
    //   this.increment( 10 );
    // }, 500 )

  }
  /*
  // baut eine Comp
  // in der komp sind zwei vollflächige Vierecke
  // rotes Viereck liegt im grünen
  // innerhalb von 5 sekunden soll das rote viereck bis auf eine Breite von 0%
  // animiert verkleinert werden

  ----------------
  | grün          |
  ----------------

----------------
| grün   | rot |
----------------

----------------
| rot          |
----------------
*/
  getName(prefix: string = '', num?: number ) {
    // console.log( 'getName' );
    // return prefix + this.name
    return `${prefix} ${this.name} ${num??0}`
  }

  increment( val: number = 1) {
    // console.log( 'increment' );
    this.num = this.num + val ;
  }

  chgImg() {
    if ( this.crrImage > 200300 ) {
      this.crrImage -= 100000;
    } else {
      this.crrImage += 100000;
    }
  }

  chgColor() {
    this.fontColor = this.fontColor === 'red' ? 'blue' : 'red';
  }
}
