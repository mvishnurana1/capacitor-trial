import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.scss']
})
export class UserSettingsFormComponent implements OnInit {
  x = [1, 3, 4, 5];
  
  constructor() { }

  ngOnInit(): void {
  }

}
