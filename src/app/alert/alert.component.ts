import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  showAlert = { type: '', message: '' };
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.alert.subscribe(value => {
      this.showAlert = value;
    });
  }

}
