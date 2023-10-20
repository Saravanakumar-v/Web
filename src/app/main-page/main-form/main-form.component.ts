import { Component, OnInit } from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core';
import { FormGroup,FormControl, Validators, FormsModule, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-main-form',
  styleUrls: ['./main-form.component.css'],
  templateUrl: './main-form.component.html',
})
export class MainFormComponent implements OnInit {

  userForm: FormGroup;
  isSubmitted: boolean = false;

  constructor(private formbuild: FormBuilder) { 
    this.userForm = this.formbuild.group({
      firstname: new FormControl('',[
        Validators.required,
        Validators.pattern('^[a-zA-Z]*$')]),
  
      lastname: new FormControl('',[
        Validators.required,
        Validators.pattern('^[a-zA-Z]*$')]),
  
      gender: new FormControl('',Validators.required),
      houseno: new FormControl('',[
        Validators.required,]),

      zip: new FormControl('',[
        Validators.required,
        Validators.pattern('^[0-9]{6}$')]),
  
      street: new FormControl('',[
        Validators.required,
        Validators.pattern('^[a-zA-Z]*$')]),
      DOB: new FormControl('',Validators.required),
  
      mail: new FormControl('',[
        Validators.required,
        Validators.email]),
  
      contactno: new FormControl('',[
        Validators.required,
        Validators.pattern('^[0-9]{10}$')]),
    })
  }

  ngOnInit(): void {
  }

  allowEntry: boolean = true;
  error: boolean = false;
  errorMessage:string;
  isdisable: boolean = false;

  @Input() showUpdateForm: boolean = false;
  @Input() forUpdate: boolean = false;
  
  @Output() entries = new EventEmitter<any>();
  @Output() enableUpdate= new EventEmitter();

  actionBtn : string = "Create"
  entry = []
  formData() {
    this.isSubmitted = true;

    if(this.userForm.invalid) {
      console.log(this.userForm.controls)
      this.isSubmitted = true;
    }
    else {
      if(this.actionBtn == "Update") {
        this.updateForm();
        this.actionBtn = "Create"
      }
      
      else if(this.actionBtn == "Create") {
        this.entry.push(this.userForm.value);
        this.userForm.reset()
        this.entries.emit(this.entry);
      }
    }
  }

  selectedIndex: number;
  updateForm() {
    this.isSubmitted = false;
    this.entry[this.selectedIndex] = this.userForm.value;
    this.enableUpdate.emit();
    this.userForm.reset();
  }

  abortUpdate() {
    this.userForm.reset();
    this.actionBtn = "Create"
    this.enableUpdate.emit();
  }

  setInputData(index: number) {
    this.selectedIndex = index;
    let data = JSON.parse(JSON.stringify(this.entry[index]))
    this.userForm.controls['firstname'].setValue(data.firstname)
    this.userForm.controls['lastname'].setValue(data.lastname)
    this.userForm.controls['gender'].setValue(data.gender)
    this.userForm.controls['houseno'].setValue(data.houseno)
    this.userForm.controls['zip'].setValue(data.zip)
    this.userForm.controls['street'].setValue(data.street)
    this.userForm.controls['DOB'].setValue(data.DOB)
    this.userForm.controls['mail'].setValue(data.mail)
    this.userForm.controls['contactno'].setValue(data.contactno)
    this.actionBtn = "Update"
  }
}
