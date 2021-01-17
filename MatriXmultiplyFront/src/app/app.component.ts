import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Matrix, MatrizGroup } from './core/model/matrix.model';
import { MatrixService } from './core/services/matrix.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public formGroup: FormGroup;
  public matrizes: MatrizGroup

  public matrixResult: Matrix;

  public fpMatrixA: FormGroup;
  public fpMatrixB: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private matrixServices: MatrixService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(): void {
    this.formGroup = this.formBuilder.group({
      ax: ['', Validators.required],
      ay: ['', Validators.required],
      bx: ['', Validators.required],
      by: ['', Validators.required]
    });
  }

  public onSubmit(): void {
    const fcA = {};
    const fcB = {};
    for (var i = 0; i < this.formGroup.value.ax; i++) {
      for (var j = 0; j < this.formGroup.value.ay; j++) {
        fcA['a' + i + j] = new FormControl('', Validators.required);
      }
    }

    for (var i = 0; i < this.formGroup.value.bx; i++) {
      for (var j = 0; j < this.formGroup.value.by; j++) {
        fcB['b' + i + j] = new FormControl('', Validators.required);
      }
    }

    this.fpMatrixA = this.formBuilder.group(fcA);
    this.fpMatrixB = this.formBuilder.group(fcB);

    this.matrizes = {
      matrixA: {
        x: new Array(this.formGroup.value.ax),
        y: new Array(this.formGroup.value.ay)
      },
      matrixB: {
        x: new Array(this.formGroup.value.bx),
        y: new Array(this.formGroup.value.by)
      },
    }
  }

  public sumar(): void {
    var FirstMatrix = [];
    for (var i = 0; i < this.matrizes.matrixA.x.length; i++) {
      FirstMatrix[i] = [];
      for (var j = 0; j < this.matrizes.matrixA.y.length; j++) {
        FirstMatrix[i][j] = this.fpMatrixA.value['a' + i + j];
      }
    }

    var SecondMatrix = [];
    for (var i = 0; i < this.matrizes.matrixB.x.length; i++) {
      SecondMatrix[i] = [];
      for (var j = 0; j < this.matrizes.matrixB.y.length; j++) {
        SecondMatrix[i][j] = this.fpMatrixB.value['b' + i + j];
      }
    }

    this.matrixServices.obtenerSumaMatrices(FirstMatrix, SecondMatrix)
      .subscribe((response: Matrix) => {
        this.matrixResult = response;
      })
  }

  public reset(): void {
     this.matrizes = null;
     this.matrixResult = null;  
     this.fpMatrixA = null;
     this.fpMatrixB = null;
  }
}
