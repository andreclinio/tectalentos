import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  email: string; 


  isOK(control) {
    return control.valid || !control.touched
  }

  ngOnInit() {  }

  recover() {
    console.log('rec', this.email);
    this.router.navigate(['home/login']);
  }

  ngOnDestroy(){
  }

}
