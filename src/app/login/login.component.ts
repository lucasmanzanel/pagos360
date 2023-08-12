import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms'
import {Validators} from '@angular/forms'
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form360:any;

  constructor(
    private fb:FormBuilder,
    private router:Router){

    this.form360 = this.fb.group({
      user: [''],
      password:['',[Validators.required]]
    })

  }

  ingresar(){

    if(this.form360.value.user !== 'lmanzanel' && this.form360.value.password !== '123456'){
      Swal.fire({
        icon: 'error',
        title: 'No estas autorizado',
        text: 'Intente nuevamente',
      })
    }else{
      localStorage.setItem('apiKey',`${environment.apiKey}`)
      this.router.navigate(['/dashboard'])
    }

  }

}
