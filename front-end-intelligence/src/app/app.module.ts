import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PageLayoutModule } from './page-layout/page-layout.module';
import { HomeModule } from './home/home.module';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { TipsComponent } from './tips/tips.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [AppComponent, TipsComponent, NotfoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    PageLayoutModule,
    HomeModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
