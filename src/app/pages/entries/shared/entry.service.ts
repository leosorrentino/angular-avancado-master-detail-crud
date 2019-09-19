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

  constructor(protected injector: Injector, protected categoriaService: CategoryService) { 
    super("api/entries", injector)
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
   
    protected jsonDataToResources(jsonData: any[]): Entry[]{
      const entries: Entry[] = [];

      jsonData.forEach(element => {
        const entry = Object.assign(new Entry(), element);
        entries.push(entry);
      });
      return entries;
    }

    protected jsonDataResource(jsonData: any): Entry{
      return Object.assign(new Entry(), jsonData);
    }
    
}
