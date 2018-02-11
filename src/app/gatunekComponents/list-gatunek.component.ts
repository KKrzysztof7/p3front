import {Component, OnInit} from '@angular/core';
import {gatunek} from '../models/gatunek';
import {DataService} from '../service/data.service';

@Component({
  selector: 'app-gatunek-list',
  templateUrl: './list-gatunek.component.html',
  styleUrls: ['./list-gatunek.component.css']
})
export class ListGatunekComponent implements OnInit {

  gatunki: gatunek[];
  selectedGatunek: gatunek;

  constructor(private data: DataService) { }

  private getGatunki() {
    this.data.getAllGatunek().then(gatunki => this.gatunki = gatunki);
  }

  ngOnInit() {
    this.getGatunki();
  }

  private onSelect(gatunek: gatunek): void {
    this.selectedGatunek = gatunek;
  }

  delete(gatunek: gatunek): void {
    this.data.deleteGatunek(gatunek).then(res => {
      this.gatunki = this.gatunki.filter( el => el.id !== gatunek.id);
    });
  }

}
