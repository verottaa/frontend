import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Template} from '../plans-constructor.component';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

  @Output() onAdd: EventEmitter<Template> = new EventEmitter<Template>();

  task = '';
  formLearn = '';
  doPeriod = '';
  dateStart = '';
  dateEnd = '';
  mentor = '';
  materials = '';

  constructor() { }

  ngOnInit(): void {
  }


  addStep(): void{
    const step: Template = {
      task: this.task,
      formLearn: this.formLearn,
      doPeriod: this.doPeriod,
      dateStart: this.dateStart,
      dateEnd: this.dateEnd,
      mentor: this.mentor,
      materials: this.materials
    };

    this.onAdd.emit(step);
    this.task = this.formLearn = this.doPeriod = this.dateStart = this.dateEnd = this.mentor = this.materials = '';

  }
}
