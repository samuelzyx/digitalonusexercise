import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';

// import { routing, appRoutingProviders } from './app.routing';

@NgModule({
    declarations: [
        AppComponent,
        InfoComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [
        // appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
