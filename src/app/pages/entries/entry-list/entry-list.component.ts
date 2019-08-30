import { Component, OnInit } from '@angular/core';

import { EntryService } from '../shared/entry.service';
import { Entry } from '../shared/entry.model';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries: Entry[] = [];
  
  constructor(
    private categoryService: EntryService) { }

  ngOnInit() {
    this.categoryService.getAll().subscribe(
      entries => this.entries = entries,
      error => alert("Erro ao carregar a lista") 
    )
  }

  deleteEntry(entry){
    const mustDelete = confirm("Deseja realemente deletar essa categoria?");

    if(mustDelete) {
      this.categoryService.delete(entry.id).subscribe(
      () => this.entries = this.entries.filter(element => element != entry),      
      () => alert("Erro ao tentar excluir!")
      )      
    }
  }

}
