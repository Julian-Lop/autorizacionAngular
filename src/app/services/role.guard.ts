import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  canActivate(){
    let Role = localStorage.getItem('userType')
    if(Role == 'admin'){
      return true
    }
    alert('No tienes permiso para acceder a esta parte')
    return false;
  }
  
}
