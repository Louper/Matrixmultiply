import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Matrix } from '../model/matrix.model';

@Injectable({
  providedIn: 'root'
})
export class MatrixService {

  constructor(private http: HttpClient) { }

  public obtenerSumaMatrices(FirstMatrix: Matrix, SecondMatrix: Matrix): Observable<Matrix> {
    const url = `http://localhost:54336/matrix/sum`

    const body = {
      FirstMatrix,
      SecondMatrix
    }

    return this.http.post<Matrix>(url,body)
  }
}
