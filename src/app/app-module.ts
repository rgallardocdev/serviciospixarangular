import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { miServicePixar } from './services/service.pixars';
import { PixarsComponent } from './components/pixars-component/pixars-component';
import { CreatePixarsComponent } from './components/create-pixars-component/create-pixars-component';

@NgModule({
  declarations: [App, HomeComponent, MenuComponent, PixarsComponent, CreatePixarsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), miServicePixar],
  bootstrap: [App],
})
export class AppModule {}
