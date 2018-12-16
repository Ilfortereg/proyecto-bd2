import { Component, OnInit } from '@angular/core';

import {FileUploader, FileDropDirective} from 'ng2-file-upload';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  public hasBaseDropZoneOver: boolean = false;

  public fileOverBase(e:any):void{
    this.hasBaseDropZoneOver = e;
  }

  constructor() { }
  title="proyectoBD2"
  ngOnInit() {
  }

}
