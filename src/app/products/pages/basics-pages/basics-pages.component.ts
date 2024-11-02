import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-pages',
  templateUrl: './basics-pages.component.html',
  styleUrl: './basics-pages.component.css'
})
export class BasicsPagesComponent {

  public nameLower: string = 'matias';
  public nameUpper: string = 'MATIAS';
  public fullName: string = 'mATias';

  public customDate: Date = new Date();
}
