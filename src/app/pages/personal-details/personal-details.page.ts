import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.page.html',
  styleUrls: ['./personal-details.page.scss'],
})
export class PersonalDetailsPage implements OnInit {

  persondetailForm: any;
  constructor(private formBuilder: FormBuilder,
              ) {

    this.persondetailForm = this.formBuilder.group({
      name: [''],
      firstname: [''],
      lastname: [''],
      email: [''],
      mobile: [''],
      currentAddress: [''],
      permanentAddress: [''],
      city: [''],
      state: [''],
      country: [''],
      pincode: [''],
});
  }

  ngOnInit() {
  }
  onSubmit() {
    console.log('personal detail on Submit');
  }

}
