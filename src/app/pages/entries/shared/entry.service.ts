import { Injectable, Injector } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { flatMap} from "rxjs/operators";
import { CategoryService } from '../../categories/shared/category.service';

import { Entry } from "./entry.model"
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';


@Injectable({
  providedIn: 'root'
})
export class EntryService extends BaseResourceService<Entry>  {

  protected http: HttpClient

  constructor(
    protected injector: Injector, 
    protected categoriaService: CategoryService) 
    { 
    super("api/entries", injector, Entry.fromJson)
    }
  
    create(entry: Entry): Observable<Entry>{
      return this.categoriaService.getById(entry.categoryId).pipe(
        flatMap(category => {
          entry.category = category;

          return super.create(entry);
        })          
      )
    }

    update(entry: Entry): Observable<Entry>{
      return this.categoriaService.getById(entry.categoryId).pipe(
        flatMap(category => {
          entry.category = category;

          return super.update(entry);
        })
      )      
    }
    
}
