import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { RouterModule } from '@angular/router'
import { GreenAngularModule } from '@sebgroup/green-angular'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    GreenAngularModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
