import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CobranzasService } from '../../services/cobranzas.service';
import { Document } from '../../interface/cobranzaI.interface';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit  {

  cobranzas:Document[] = []
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = 
    [
      'informed_date', 'request_id', 
      'payer_name','channel'];
      
  dataSource:any;

  constructor(private cs:CobranzasService){
    
  }


  ngOnInit(){

    this.cs.getCobranzas('17-10-2022')
      .subscribe(({data}) => {
        this.cobranzas = data
        this.dataSource = this.cobranzas;
        this.dataSource.paginator = this.paginator;

      }

      )

  }


}
