import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   title = 'angulartask';

  

//   registerForm: FormGroup;
//   submitted = false;

//   email:string;
// password:string;

  




// register(){
//   this.submitted = true;

//         // stop here if form is invalid
//         if (this.registerForm.invalid) {
//             return;
//         }

//         // this.router.navigate(['/dash']);      

        
//         //          alert('SUCCESS!! :-)\n' + JSON.stringify(this.registerForm.value));

      
//         // display form values on success

















        
        

// }

// constructor(private router: Router,private formBuilder: FormBuilder) {
 
// }




// ngOnInit(): void {

//   this.registerForm = this.formBuilder.group({
//     email: ['', Validators.required],
  
//     password: ['', [Validators.required, Validators.minLength(5)]],

// });

// }

// loginuser(){
//   if(this.email=="geetha@gmail.com" && this.password=="geetha"){
//     this.router.navigateByUrl('/orders');

// alert("welcome")  ;
// }
//   else{
//     alert("not authrozed");
//  }
 

// }
// get f() { return this.registerForm.controls; }

// keyPressAlphaNumeric(event) {

//   var inp = String.fromCharCode(event.keyCode);

//   if (/[a-zA-Z0-9]/.test(inp)) {
//     return true;
//   } else {
//     event.preventDefault();
//     return false;
//   }
// }


}


