import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { GamePageComponent } from './components/game-page/game-page.component';
import { FormsModule } from '@angular/forms';
import { RecordsPageComponent } from './components/records-page/records-page.component';
import { PlayFieldComponent } from './components/game-page/play-field/play-field.component';
import { ButtonsComponent } from './components/game-page/buttons/buttons.component';
import { SecondsComponent } from './components/game-page/seconds/seconds.component';
import { RecordComponent } from './components/game-page/record/record.component';
import { ResultComponent } from './components/game-page/record/result/result.component';
import { InputComponent } from './components/game-page/seconds/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    GamePageComponent,
    RecordsPageComponent,
    PlayFieldComponent,
    ButtonsComponent,
    SecondsComponent,
    RecordComponent,
    ResultComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
