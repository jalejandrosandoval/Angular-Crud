import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LoginService } from 'src/app/Services/Login/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  _User: string = "";

  constructor(private _router: Router,
    private _loginService: LoginService) { }

  ngOnInit(): void {
    this._loginService.getUser().subscribe(
      user => {
        this._User = user.Username;
      }
    );
  }

  // Method to find a heroe from any term. 
  public searchHeroe(term: string){
    this._router.navigate(['/search', term]);
  }

  // Method to termintate the session user.
  public Logout(){
    this._User = "";
  }

}
