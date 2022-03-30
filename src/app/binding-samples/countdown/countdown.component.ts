import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'itd-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {
  get duration(): number {
    return this._duration;
  }
  @Input()
  set duration(value: number | string) {
    this._duration = Number(value);
  }

  private intervalID?: number;
  private _duration: number = 4000;
  // @Input() duration: number = 4000;
  percent = 100;

  @Output() completed: EventEmitter<void> = new EventEmitter<void>()
  @Output() percentValChg: EventEmitter<number> = new EventEmitter<number>()

  constructor() {
  }

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    this.stopInterval();
  }

  private startCountdown() {
    this.intervalID = setInterval(() => {
      this.percent -= 5;
      this.percentValChg.emit( this.percent );
      if (this.percent === 0) {
        this.completed.emit();
        this.stopInterval();
      }
    }, this.duration / 30 )
  }

  private stopInterval() {
    if (this.intervalID) {
      clearInterval(this.intervalID);
      this.intervalID = undefined;
    }
  }

}
