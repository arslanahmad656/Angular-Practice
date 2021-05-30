import { NgModule } from '@angular/core';
import { TestComponentComponent } from '../components/test-component/test-component.component';
import { DataProviderService } from '../services/data-provider.service';



@NgModule({
  declarations: [
    TestComponentComponent
  ],
  imports: [
  ],
  exports: [
    TestComponentComponent
  ],
  providers: [
    DataProviderService
  ]
})
export class LibProviderModule { }
