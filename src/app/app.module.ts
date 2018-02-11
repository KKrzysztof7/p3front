import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {DataService} from './service/data.service';
import {HttpModule} from '@angular/http';
import {ListGatunekComponent} from './gatunekComponents/list-gatunek.component';
import {CreateGatunekComponent} from './gatunekComponents/create-gatunek.component';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ListGatunekComponent,
    CreateGatunekComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
