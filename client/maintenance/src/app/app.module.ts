import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';
import { MatIconModule, MatTableModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AuthenticationModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [AuthService, AuthGuard, NoAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
