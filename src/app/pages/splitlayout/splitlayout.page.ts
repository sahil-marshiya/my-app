import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splitlayout',
  templateUrl: './splitlayout.page.html',
  styleUrls: ['./splitlayout.page.scss'],
})
export class SplitlayoutPage implements OnInit {
  router: any;

  constructor() { }

  ngOnInit() {
  }
  editProfile(){
    this.router.navigate(['/edit-profile']);

  }

}
