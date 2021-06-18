import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service: GeneralService) { }

  ngOnInit() {
  }

  getLogin(data){
    
    this.service.login(data.value).subscribe(response => {
    
    localStorage.setItem("Token", response['data']);
    
    });
  }

}
