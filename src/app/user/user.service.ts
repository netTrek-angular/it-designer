import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "./user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedName$ = new BehaviorSubject<string | undefined>( undefined );

  constructor( private readonly http: HttpClient ) {
  }

  public setSelectedName ( name: string  ) {
    this.selectedName$.next( name );
  }

  getUsers (): Observable<User[]> {
    return this.http.get<User[]>( 'http://localhost:3000/users');
  }
}
/*

export class UserService {

  interval$ = interval(500)
    .pipe(
      share()
    );

  selectedName$ = new BehaviorSubject<string | undefined>( undefined );
  intervalVal?: number;

  intervalID?: number

  constructor() {
    this.init();
  }

  public setSelectedName ( name: string  ) {
    this.selectedName$.next( name );
  }

  public subScribeToSharedObs () {
    this.interval$.subscribe( next => this.intervalVal = next );
  }

  public initIntervalSample() {

    const observable: Observable<number> = interval(500).pipe(
      filter(val => val % 2 === 0),
      map(val => val * 2),
      take(3)
    );
    const subscription = this.subscribe(observable, 'intervalSample');
    console.log ( subscription );
    timer( 1000 ).subscribe( n => {
      subscription.unsubscribe();
      console.log ( subscription );
    } )
  }

  private init() {
    // this.initIntervalSample();
    this.interval$
      .pipe( take ( 5 ))
      .subscribe( next => console.log ( next ) );
    // this.initTimerSample ();
    // this.initOfSample();
    // this.initFromEventSample();
    // this.initFromEventAdvSample();
    // this.initObservableSample();
    // this.initSubjectSample ();
    // this.initBehaviorSubjectSample();
  }

  private initTimerSample () {
    const observable: Observable<number> = timer( 1000 );
    this.subscribe(observable, 'timer sample');
  }

  private subscribe( observable: Observable<unknown>, msg: string = '') {
    return observable.subscribe({
      next: currVal => console.log(`${msg} ${currVal}`),
      complete: () => console.log( `${msg} ich habe fertig`),
      error: err => console.error(`${msg} ${err.toString()}`)
    });
  }

  private initOfSample() {
    const observable: Observable<number> = of ( 123, 124, 125 );
    // const observable: Observable<number> = range( 10, 10) ;
    this.subscribe(observable, 'of sample');
  }

  private initFromEventSample() {
    const observable =
      fromEvent<MouseEvent>( document, 'mousemove')
        .pipe(
          map ( event => event.clientX ),
          distinctUntilChanged (),
          debounceTime ( 50 )
        );
    this.subscribe(observable, 'fromEvent');
  }

  private initFromEventAdvSample () {

    const eventTime = ( eventType: string ) =>
      fromEvent( document, eventType ).pipe(
        map ( event => new Date() )
      )


    const mousedown = eventTime( 'mousedown');
    const mouseup = eventTime( 'mouseup');

    const observable = zip(
      mousedown, mouseup
    ).pipe(
      map ( ([downDate, upDate]) => upDate.getTime() - downDate.getTime())
    )

    this.subscribe(observable, 'mousedown and mouseup');
  }

  private initObservableSample() {

    console.log ('lets go');

    const observable = new Observable<number>( subscriber => {
      let counter = -1;
      const intervalID = setInterval( () => {
        ++ counter;
        // console.log ( 'inner val', counter );
        // if ( counter === 3 ) subscriber.error( 'ups ....')
        subscriber.next( counter );
      }, 500 )
      return () => clearInterval( intervalID )
    }).pipe( take ( 3 ) )
    this.subscribe(observable, 'my own interval Obs');
  }

  private initSubjectSample() {
    console.log ('lets go');
    const observable = new Subject<number>();
    observable.next( 1 );
    this.subscribe( observable, '#1 subject');
    observable.next( 2 );
    observable.next( 3 );
    this.subscribe( observable, '#2 subject');
    observable.next( 4 );
    // observable.complete();
    observable.error( 'ups');
    observable.next( 5 );
  }

  private initBehaviorSubjectSample() {
    console.log ('lets go');
    const observable = new BehaviorSubject<number>(0);
    this.subscribe( observable, '#0 subject');
    observable.next( 1 );
    this.subscribe( observable, '#1 subject');
    observable.next( 2 );
    observable.next( 3 );
    this.subscribe( observable, '#2 subject');
    observable.next( 4 );
    // observable.complete();
    observable.error( 'ups');
    observable.next( 5 );
  }
}
*/
