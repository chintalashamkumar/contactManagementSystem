import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public message = new Subject();
  public alert = new Subject<{ type: '', message: '' }>();
  testMessage = this.message.asObservable();
  constructor(private http: HttpClient) { }
  login(): Observable<any> {
    return this.http.get('../src/assets/data.json').pipe(map(res => res
    ));
  }
  sendMessage(value) {
    this.message.next(value);
  }
  setAlert(value) {
    this.alert.next(value);
  }
}
