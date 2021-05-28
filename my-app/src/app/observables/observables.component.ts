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
      let interval = setInterval(() => {
        let currentValue = ++initialValue;
        if (initialValue == 5) {
          subscriber.error(`Error occured when value was ${currentValue}`);
        }
        subscriber.next(`Emitting value# ${currentValue}`);
      }, 2000);
      return () => {
        clearInterval(interval);
        subscriber.complete();
      }
    });
  }

  ngOnInit() {
    this.subscription = this.observable.subscribe(
      console.log,
      err => {
        console.log(`Error caught: ${err}`),
        this.unsubscribe();
      },
      () => console.log("Completed")
    );
  }

  unsubscribe() {
    this.subscription?.unsubscribe();
  }

}
