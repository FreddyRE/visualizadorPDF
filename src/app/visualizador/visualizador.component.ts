import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-visualizador',
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.scss'],
})
export class VisualizadorComponent implements OnInit {
  pdfSrc:any = []

  constructor(@Inject(MAT_DIALOG_DATA) public data:{pdfB64:string}) {
    let bytes = this.base64ToArrayBuffer(data.pdfB64)
    this.pdfSrc = bytes
  }

  ngOnInit(): void {

  }

  base64ToArrayBuffer(base64:string) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
  }
}
