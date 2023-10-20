import { style, trigger,state, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Output,Input } from '@angular/core'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css'],
  animations: [
    trigger('slide',[
      transition(':enter', [
         style({ opacity: 0 }),
         animate('500ms ease', style({ opacity: 1, top: '200px' })),
       ])
     ])
  ]
  
})
export class TableViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isdisable: boolean;
  dialog:boolean = false;
  @Input() entriesFromForm = [];

  @Output() userDataFromForm= new EventEmitter();
  @Output() viewUpdate= new EventEmitter();
  @Output() disableCreate= new EventEmitter();

  updateEntry(index: number) {
    this.userDataFromForm.emit();
    this.viewUpdate.emit(index);
    this.isdisable = true;
  }

  setIndex: number;
  deleteEntry(index = this.setIndex) {
    this.entriesFromForm.splice(index,1);
    this.dialog = false;
    this.isdisable = false;
    this.disableCreate.emit(false)
  }

  popUp(index: number) {
    this.disableCreate.emit(true);
    this.setIndex = index;
    this.isdisable = true;
    this.dialog = true;
  }
}

