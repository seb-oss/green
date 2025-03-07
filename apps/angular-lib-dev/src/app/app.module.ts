import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { provideCoreRendererWithAnimations } from '@sebgroup/green-angular/src/lib/shared'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserAnimationsModule, BrowserModule, AppRoutingModule],
  providers: [provideCoreRendererWithAnimations()],
  bootstrap: [AppComponent],
})
export class AppModule {}
