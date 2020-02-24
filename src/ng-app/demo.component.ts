import * as angular from 'angular';

import {Component, Input, OnChanges, SimpleChanges, Output, EventEmitter, OnDestroy} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {delay} from "rxjs/operators";
import { downgradeComponent } from '@angular/upgrade/static';
import { Subscription } from 'rxjs';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent implements OnChanges, OnDestroy {
  @Input() data: any;
  @Output() changed = new EventEmitter();
  form: FormGroup;
  subscription: Subscription;

  constructor(
    public fb: FormBuilder
  ) {
    this.form = this.fb.group({
      'firstName': [
        '',
        [Validators.required]
      ],
      'lastName': [
        '',
        [Validators.required]
      ]
    });

    this.subscription = this.form.valueChanges
    .pipe(delay(500))
    .subscribe((formValue) => {
      this.changed.emit(formValue);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data.currentValue) {
      this.form.setValue({
        firstName: changes.data.currentValue.firstName,
        lastName: changes.data.currentValue.lastName
      });
    }
    console.log(changes, 'ngOnChanges:DemoComponent');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

angular
 .module('proposalTool')
 .directive('demo', downgradeComponent({component: DemoComponent, propagateDigest: false}));
