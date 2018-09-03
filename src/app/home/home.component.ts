import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import {BsModalService} from 'ngx-bootstrap';
import {CommanModelComponent} from '../../assets/shared/comman-model/comman-model.component';
import {AddContactComponent} from '../../assets/shared/add-contact/add-contact.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  groupsList: any = [];
  gName: any;
  public groupList: any = {};
  public currentGroup: any ;
  public showContactsPane: any = false;
  public currentContactsList: any = [];
  constructor( private sharedService: SharedService, private modalService: BsModalService ) {

  }
  ngOnInit() {
    this.sharedService.sendMessage(false);
   this.groupsList = Object.keys(this.groupList);
  }

  public createGroup() {
    const model = this.modalService.show(CommanModelComponent, {
      animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false });
    model.content.visibleChange.subscribe(data => {
      this.groupList[data]  = [];
      this.groupsList.push(data);
    });
  }
  public addContacts(gname) {
    this.showContactsPane = true;
    this.currentGroup = gname;
    this.currentContactsList =  this.groupList[gname];
  }
  public AddContact() {
    const model = this.modalService.show(AddContactComponent, {animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false});
    model.content.emitData.subscribe(data => {
      this.groupList[this.currentGroup].push(data);
    });
  }
   public editContact(contact, index) {
     const initialState = {
       contact: contact
     };
      const model = this.modalService.show( AddContactComponent, {initialState});
      model.content.emitData.subscribe(data => {
        this.groupList[this.currentGroup][index] = data;
      });
    }
    public removeContact(index) {
      this.groupList[this.currentGroup].splice(index, 1);
    }
}
