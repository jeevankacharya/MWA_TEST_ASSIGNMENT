import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SmartComponent } from './smart/smart.component';
import { DumbComponent } from './dumb/dumb.component';
import { IsvisibleDirective } from './directives/isvisible/isvisible.directive';
import { MakebiggerDirective } from './directives/makebigger/makebigger.directive';
import { MultiPipe } from './pipes/multipipe/multi.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SmartComponent,
    DumbComponent,
    IsvisibleDirective,
    MakebiggerDirective,
    MultiPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
