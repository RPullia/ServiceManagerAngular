import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { CustomResponse } from '../interface/custom-response';
import { Application } from '../interface/application';
import { Status } from '../enum/status.enum';
import { subscribe } from 'diagnostics_channel';
import { application } from 'express';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  
  private readonly apiUrl= 'http://localhost:8090/application';

  constructor(private http: HttpClient) { }

  applicationsList$ = <Observable<CustomResponse>>
  this.http.get<CustomResponse>(`${this.apiUrl}/list`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  registrate$ = (application: Application) => <Observable<CustomResponse>>
  this.http.post<CustomResponse>(`${this.apiUrl}/registrate`, application)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  application$ = (id: number) => <Observable<CustomResponse>>
  this.http.get<CustomResponse>(`${this.apiUrl}/get/${id}`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  delete$ = (id: number) => <Observable<CustomResponse>>
  this.http.delete<CustomResponse>(`${this.apiUrl}/delete/${id}`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  ping$ (ipAddress: string, portNumber: number): Observable<CustomResponse> {
  
    // Construct query parameters
    let params = new HttpParams().set('queryParam', portNumber);

    return this.http.get<CustomResponse>(`${this.apiUrl}/${ipAddress}`, { params })
    .pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }

  filter$ = (status: Status, response: CustomResponse) => <Observable<CustomResponse>>
  new Observable<CustomResponse>(
    subscriber => {
      console.log(response);
      subscriber.next(
        status === Status.ALL ? { ...response, message: `Applications filtered by ${status} status`} :
        {
          ...response,
          message: response.data.applications
          .filter(application => application.status === status).length > 0 ? `Applications filtered by ${status} status ` : `No application with ${status} status found`,
          data: { applications: response.data.applications
            .filter(application => application.status === status)}

        }
      );
      subscriber.complete();
    }
  )
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError(() => new Error(`An error occurred - Error code: ${error.status}`));
  }
}
