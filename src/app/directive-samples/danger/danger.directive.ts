import {Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: 'button[itdDanger]'
})
export class DangerDirective {

  @HostBinding('style.backgroundColor')
  backgroundColor: string = 'red';

  @HostBinding('style.padding.px')
  padding: number = 10;

  @Input()
  itdDanger = ''

  @Output() confirmed: EventEmitter<void> = new EventEmitter<void>()

  constructor( el: ElementRef) {
    console.log ( el.nativeElement )
  }

  @HostListener('click')
  clicked () {
    if ( confirm( this.itdDanger.trim().length === 0 ? 'willst du das wirklich?' : this.itdDanger) ) {
      this.confirmed.emit();
    }
  }

}
