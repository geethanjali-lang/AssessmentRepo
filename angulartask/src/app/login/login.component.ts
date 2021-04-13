import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router'; 
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  {
  title = 'angulartask';
  registerForm: FormGroup;
  submitted = false;
  email:string;
password:string;
Remember:string;

register(){
  this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        }
        

}

constructor(private router: Router,private formBuilder: FormBuilder,private cookieService: CookieService) {
  
}




ngOnInit(): void {

  this.registerForm = this.formBuilder.group({
    email: ['', Validators.required],
  
    password: ['', [Validators.required, Validators.minLength(5)]],
    Rememeber:[Validators.required]
});

}



loginuser(){
  if(this.email=="geetha@gmail.com" && this.password=="geetha"){
    this.router.navigateByUrl('/orders');
  alert("login successful");
       
 }
  else{
    alert("Not Authorized");
 }
 

}
get f() { return this.registerForm.controls; }
}
