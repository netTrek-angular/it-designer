import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export abstract class DTO<T> {

  protected get value (): T {
    const keys = Object.keys( this._payload );
    let payload: any = {};
    for (let i = 0; i < keys.length; i++) {
      const key = keys [i];
      if ( key in this ) {
        payload[key] = (this as any)[key];
      }
    }
    return payload as T;
  }

  constructor( private readonly _payload: T, private readonly endpoint: string, private readonly http: HttpClient ) {
    for (const payloadKey in _payload) {
      if ( payloadKey in _payload ) {
        const val = (_payload as any)[payloadKey];
        (this as any)[payloadKey] = val;
      }
    }
  }



  toString (): string {
    return this.toString();
  }

  save ( ): Observable<T> {
    return this.http.put<T>( `${this.endpoint}/${(this as any).id}`, this.value )
  }

  del ( ): Observable<void> {
    return this.http.delete<void>( `${this.endpoint}/${(this as any).id}` )
  }

  add ( ): Observable<T> {
    return this.http.post<T>( `${this.endpoint}`, this.value )
  }

}
