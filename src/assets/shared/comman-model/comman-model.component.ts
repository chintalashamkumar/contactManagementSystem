import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-comman-model',
  templateUrl: './comman-model.component.html',
  styleUrls: ['./comman-model.component.css'],
})
export class CommanModelComponent implements OnInit {

  public title:any = "Create New Group";
  public groupName:any;
  @Output() visibleChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(private bsModalRef: BsModalRef ) {
  }

  ngOnInit() {
  }

  create() {
    this.visibleChange.emit(this.groupName);
    this.bsModalRef.hide();
  }

}
