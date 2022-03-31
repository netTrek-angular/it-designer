import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export abstract class DTO<T> {

  protected get value (): T {
    let payload = {...(this as any)};
    delete (payload as any).endpoint;
    delete (payload as any).http;
    return payload as T;
  }

  constructor( payload: T, private readonly endpoint: string, private readonly http: HttpClient ) {
    for (const payloadKey in payload) {
      if ( payloadKey in payload ) {
        const val = (payload as any)[payloadKey];
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
