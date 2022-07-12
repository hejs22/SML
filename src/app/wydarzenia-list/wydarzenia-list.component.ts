import { Component, OnInit } from '@angular/core';
import { WydarzeniaService } from 'src/app/wydarzenia.service';
import { Wydarzenie } from 'src/app/wydarzenie.model';

@Component({
  selector: 'wydarzenia-list',
  templateUrl: './wydarzenia-list.component.html',
  styleUrls: ['./wydarzenia-list.component.css']
})
export class WydarzeniaListComponent implements OnInit {

  wydarzenia: Wydarzenie[] = [];
  constructor(private wydarzeniaService: WydarzeniaService) { }

  ngOnInit() {
    this.wydarzeniaService.getWydarzenia().subscribe((data: any[]) => {
      this.wydarzenia = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Wydarzenie;
      })
    });
  }

  create(wydarzenie: Wydarzenie){
      this.wydarzeniaService.createWydarzenie(wydarzenie);
  }

  update(wydarzenie: Wydarzenie) {
    this.wydarzeniaService.updateWydarzenie(wydarzenie);
  }

  delete(id: number) {
    this.wydarzeniaService.deleteWydarzenie(id);
  }
}