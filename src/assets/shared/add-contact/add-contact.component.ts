import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {


  public title: any = 'Add Contacts';
  @Input() contact: any;
  public addContacts = this.fb.group({
    'name': ['', Validators.required],
    'phoneNum': ['', Validators.required],
    'email': ['', Validators.required]
  });
  @Output() emitData: EventEmitter<any> = new EventEmitter<any>();

  constructor(private bsModalRef: BsModalRef, private fb: FormBuilder) {

  }

  ngOnInit() {
    console.log(this.contact);
        this.addContacts.patchValue(this.contact ? this.contact : '');
  }
  create() {
    var data = {
      name: this.addContacts.value['name'],
      phoneNum: this.addContacts.value['phoneNum'],
      email: this.addContacts.value['email']
    }
    this.emitData.emit(data);
    this.bsModalRef.hide();
  }

}
