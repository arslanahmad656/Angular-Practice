import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule } from '@angular/forms';
import { ObservablesComponent } from './observables/observables.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SubcomponentComponent } from './subcomponent/subcomponent.component';
import { Subcomponent1Component } from './subcomponent1/subcomponent1.component';
import { Subcomponent2Component } from './subcomponent2/subcomponent2.component';
import { SubnavComponent } from './subnav/subnav.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { PersonService } from './services/person.service';
import { SampledataComponent } from './sampledata/sampledata.component';
import { TokenInjectorService } from './interceptors/token-injector.service';
import { ErrorInterceptorService } from './interceptors/error-interceptor.service';
import { ShowTwiceDirective } from './custom-directives/show-twice.directive';
import { CustomDirectivePipeComponent } from './custom-directive-pipe/custom-directive-pipe.component';
import { TextHighlighterDirective } from './custom-directives/text-highlighter.directive';
import { TextTransformerPipe } from './pipes/text-transformer.pipe';
import { MyLibTestComponent } from './my-lib-test/my-lib-test.component';
import { DataProviderService, LibProviderModule } from 'lib-provider';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonListComponent,
    DirectivesComponent,
    ObservablesComponent,
    NavbarComponent,
    SubcomponentComponent,
    Subcomponent1Component,
    Subcomponent2Component,
    SubnavComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent,
    SampledataComponent,
    ShowTwiceDirective,
    CustomDirectivePipeComponent,
    TextHighlighterDirective,
    TextTransformerPipe,
    MyLibTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LibProviderModule
  ],
  providers: [
    AuthenticationService,
    PersonService,
    DataProviderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInjectorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
