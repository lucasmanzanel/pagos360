import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms'
import {Validators} from '@angular/forms'
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  {

  form360:any;
  isLogged:boolean = false



  constructor(
    private fb:FormBuilder,
    private router:Router,
    private auth:AuthService,
    private toastr: ToastrService){

    this.form360 = this.fb.group({
      user: ['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
  }

  ngOnInit(): void {

    if (!localStorage.getItem('uid')){
      this.router.navigate(['/'])
    }else{
      this.router.navigate(['dashboard'])
    }
    
  }

  ingresar(){

    this.auth.login(this.form360.value.user,this.form360.value.password).then(m => {
      localStorage.setItem('apiKey',`${environment.apiKey}`)
      this.router.navigate(['/dashboard'])
      localStorage.setItem('uid',m.user?.uid!)
      this.toastr.success('Espero que guste','Bienvenido',)

    })
    .catch((e) => {
      this.toastr.error('Error de credenciales','Intente nuevamente')
      this.form360.reset()
      this.isLogged = false
    })


    

  }

}
