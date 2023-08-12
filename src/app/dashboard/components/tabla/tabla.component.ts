import { Component, OnInit } from '@angular/core';
import { CobranzasService } from '../../services/cobranzas.service';
import { Document } from '../../interface/cobranzaI.interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit  {

  cobranzas:Document[] = []

  constructor(private cs:CobranzasService){
    
  }


  ngOnInit(){

    this.cs.getCobranzas('17-10-2022')
      .subscribe(({data}) => {
        this.cobranzas = data

      }

      )

  }


}
