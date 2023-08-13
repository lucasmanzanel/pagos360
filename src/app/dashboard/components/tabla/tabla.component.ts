import { Component, OnInit } from '@angular/core';
import { CobranzasService } from '../../services/cobranzas.service';
import { Document } from '../../interface/cobranzaI.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit  {

  cobranzas:Document[] = []
  searchForm!: FormGroup;

  constructor(
    private cs:CobranzasService,
    private fb:FormBuilder){

    this.searchForm = this.fb.group({
      fecha: ['', Validators.required]
    });
    
  }


  ngOnInit(){}

  formatDateToApiFormat(date: Date): string {
    return formatDate(date, 'dd-MM-yyyy', 'en-US');
  }



  buscarFecha() {
    const formatDate = this.formatDateToApiFormat(this.searchForm.get('fecha')!.value);
    this.cs.getCobranzas(formatDate)
    .subscribe(({data}) => {
      this.cobranzas = data
    })
  }


}
