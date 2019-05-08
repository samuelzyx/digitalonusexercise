import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
    public user:User;
    public dataUser:Boolean;
    constructor() { }

    ngOnInit() {
        this.dataUser = false;
    }
}
