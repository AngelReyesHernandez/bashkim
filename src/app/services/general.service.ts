import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private urlLogin = "https://apimpastocorpproducts.azure-api.net/apiBashkimWorkerManagementTest/api/usuario/login ";


     httpOptions = {
   headers: new HttpHeaders({
    'Ocp-Apim-Subscription-Key': 'eb5f09daed3e4911b2d59303774335cf',
    'Content-Type': 'application/json'
    
   })
 };
 //Origin, X-Requested-With, Content-Type, Accept
 //http://localhost:4200/login


  constructor(private service: HttpClient) { }


  login(data){
    var body = {
      "email": data.username,
      "password": data.password
    }
      return this.service.post(this.urlLogin, body,this.httpOptions);
}

}
