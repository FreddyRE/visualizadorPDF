import { Component, OnInit } from '@angular/core';
import {EvidenciaService } from '../evidencia.service'
import { MatDialog } from '@angular/material/dialog'
import { VisualizadorComponent } from '../visualizador/visualizador.component'

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.scss']
})
export class SoporteComponent implements OnInit {

  respuestaB64 = ""

  solicitarEvidencia() {
    
    this.servicioEvidencia.getCadenaB64().subscribe((respuesta:any)=>{
      this.respuestaB64 = respuesta.b64

      const dialogRef = this.dialog.open(VisualizadorComponent, {
        autoFocus: false,
        maxHeight: '90vh',
        data: { pdfB64 : this.respuestaB64}
  
      });
    })
    
  }
  constructor(private servicioEvidencia:EvidenciaService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
