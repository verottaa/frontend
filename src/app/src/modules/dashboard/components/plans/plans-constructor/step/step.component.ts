import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Template} from '../plans-constructor.component';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  @Input() step: Template;
  @Output() onRemove = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  removeStep() {
    this.onRemove.emit(this.step.id);
  }

}
