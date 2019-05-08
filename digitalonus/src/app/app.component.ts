import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from './services/data.service';
import { User } from './models/user';
import { InfoComponent } from './info/info.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [DataService,InfoComponent]
})
export class AppComponent {
    title = 'digitalonus';
    public users:User[];

    constructor(
        @Inject(InfoComponent) private infoComponent: InfoComponent,
        private userService:DataService)
    {}

    ngOnInit(){
        this.userService.getData().subscribe(
            response =>{
                this.users = response;
            },
            error =>{
                var errorMessage = <any>error;
                if(errorMessage!=null){
                    let body = JSON.parse(error._body);
                }
            }
        );
    }

    onClic(user:User){
        this.infoComponent.user = user;
    }
}
