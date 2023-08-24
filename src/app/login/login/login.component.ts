import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  checkoutForm = this.formBuilder.group({
    legajo: '',
    contraseña: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ){}
  onSubmit(): void {
    // Process checkout data here
   
    
    this.router.navigate(["main/calendario"]);
  }
}
