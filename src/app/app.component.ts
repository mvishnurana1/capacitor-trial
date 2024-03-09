import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  hasOtherGroupValue: boolean = false;
  submitted: boolean = false;

  myForm: FormGroup = this.fb.group({
    name: new FormControl(''),
    lastName: new FormControl(''),
    hasOtherGroup: new FormControl(false),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.valueChanges.pipe(
      tap(changes => {
        console.log(changes);
      })
    ).subscribe();
  }

  onClick(): void {
    this.submitted = true;
    this.hasOtherGroupValue = this.myForm.get('hasOtherGroup')?.value;

    console.log('hasOtherGroup: ', this.hasOtherGroupValue);
  }
}
