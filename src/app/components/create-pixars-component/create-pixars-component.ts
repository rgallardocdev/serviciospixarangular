import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { miPixar } from '../../models/pixar';
import { miServicePixar } from '../../services/service.pixars';

@Component({
  selector: 'app-create-pixars-component',
  standalone: false,
  styleUrl: './create-pixars-component.css',
  templateUrl: './create-pixars-component.html',
})
export class CreatePixarsComponent {

  @ViewChild("cajaidpersonaje") _cajaidpersonaje!: ElementRef;
  @ViewChild("cajanombre") _cajanombre!: ElementRef;
  @ViewChild("cajaimagen") _cajaimagen!: ElementRef;    
  @ViewChild("cajapelicula") _cajapelicula!: ElementRef;

  mensajeProceso!: string;

  nombreArchivo: string = '';

  _pixar!: miPixar;

  constructor(
    private _service: miServicePixar,
    private _cdr: ChangeDetectorRef
  ){}

  async crearPixar(): Promise<void>{
    let _idpersonaje = parseInt(this._cajaidpersonaje.nativeElement.value);
    let _nombre = this._cajanombre.nativeElement.value;
    let _imagen = this._cajaimagen.nativeElement.value;
    let _pelicula = this._cajapelicula.nativeElement.value;
    let _pixar = new miPixar (_idpersonaje, _nombre, _imagen, _pelicula);

    let response = this._service.postPixarAsync(_pixar);
    this.mensajeProceso = "Personaje insertado correctamente";
    this._cdr.detectChanges();
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      // 1. Nombre limpio (ej: "goku.jpg", sin C:\fakepath\)
      this.nombreArchivo = file.name;
    }
  }
}
