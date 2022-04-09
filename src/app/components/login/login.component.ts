import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  signUp(user:string){
    localStorage.removeItem('token')
    localStorage.removeItem('userType')
    localStorage.setItem('token','algo')
    localStorage.setItem('userType',user)
    this.router.navigate(['privateroute'])
  }


  signOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('userType')
    this.router.navigate([''])
  }
}
