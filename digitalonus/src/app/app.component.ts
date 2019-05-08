import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { User } from './models/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [DataService]
})
export class AppComponent {
    title = 'digitalonus';
    public users:User[];

    constructor(
        private userService:DataService)
    {}

    ngOnInit(){
        this.userService.getData().subscribe(
            response =>{
                this.users = response;
        //         sessionStorage.setItem('token',this.token);
        //         $('#loginModal').modal('hide');
        //         this.router.navigate(['/dashboard']);
            },
            error =>{
                var errorMessage = <any>error;
                if(errorMessage!=null){
                    let body = JSON.parse(error._body);
                    // if(error.status==401){
                    //     this.message = "Correo electrónico o contraseña incorrecto";
                    // }
                    // else{
                    //     this.message = this.utilitiesService.responseMessagesTranslate(body.errors);
                    // }
                }
            }
        );
    }
}
