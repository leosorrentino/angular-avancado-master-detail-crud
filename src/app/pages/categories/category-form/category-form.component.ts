import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Category } from '../shared/category.model';
import { CategoryService } from '../shared/category.service';
import { switchMap } from 'rxjs/operators';
//import toastr from toastr; 

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit, AfterContentChecked {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentChecked(){

  }
}
