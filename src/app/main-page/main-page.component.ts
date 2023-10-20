import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { TableViewComponent } from './table-view/table-view.component';
import { MainFormComponent } from './main-form/main-form.component';
import { trigger,state,style,transition,animate } from '@angular/animations';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  animations: [
    trigger('slide',[
      transition(':enter', [
         style({ opacity: 0 }),
         animate('500ms ease', style({ opacity: 1, top: '310px' })),
       ])
     ])
  ]
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(MainFormComponent) mainForm: MainFormComponent;
  @ViewChild(TableViewComponent) tableView: TableViewComponent;

  entryData: any;
  abort: boolean; 
  toChangeForm: boolean;
  toDelete: boolean = false;

  entries: any;
  entriesData(value: any) {
    this.entries = this.mainForm.entry;
    this.mainForm.isSubmitted = false;
    this.mainForm.error = false;
  }

  changeForm(index: number) {
    this.mainForm.setInputData(index)
  }

  enableUpdate() {
    this.tableView.isdisable = false;
  }

  changeData() {
    this.mainForm.actionBtn = "Update"
  }

  disableCreate(value: boolean) {
    this.mainForm.isdisable = value;
  }
}
