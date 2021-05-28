import { Component, OnInit } from '@angular/core';
import {Observable, of, Subscription} from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  private observable: Observable<string>;
  private subscription: Subscription | undefined = undefined;
  constructor() { 
    this.observable = new Observable(subscriber => {
      console.log('Executing the subscriber function');
      let initialValue = 0;
      let interval = setInterval(() => subscriber.next(`Emitting value# ${++initialValue}`), 2000);
      return () => {
        clearInterval(interval);
        subscriber.complete();
      }
    });
  }

  ngOnInit() {
    this.subscription = this.observable.subscribe(console.log);
  }

  unsubscribe() {
    this.subscription?.unsubscribe();
  }

}
