import { Component, OnInit } from '@angular/core';
import {gatunek} from '../models/gatunek';
import {DataService} from '../service/data.service';

@Component({
  selector: 'app-add-gatunek',
  templateUrl: './create-gatunek.component.html',
  styleUrls: ['./create-gatunek.component.css']
})
export class CreateGatunekComponent implements OnInit {
  gatunek = new gatunek();
  submitted = false;
  constructor(private data: DataService) { }

  ngOnInit() {
  }
  newGatunek(): void {
    this.submitted = false;
    this.gatunek = new gatunek();
  }

  private save(): void {
    this.data.createNewGatunek(this.gatunek);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
