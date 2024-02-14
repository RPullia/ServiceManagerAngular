import { Component, OnInit } from '@angular/core';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { AppState } from './interface/app-state';
import { CustomResponse } from './interface/custom-response';
import { ApplicationService } from './services/application.service';
import { DataState } from './enum/data-state.enum';
import { error } from 'console';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  appState$: Observable<AppState<CustomResponse>>;

  constructor(private applicationService: ApplicationService){}

  ngOnInit(): void {
    this.appState$ = this.applicationService.applicationsList$
    .pipe(
      map(response => {
        return { dataState: DataState.LOADED, appData: response }
      }),
      startWith({dataState: DataState.LOADING}),
      catchError((error: string) => {
        return of({dataState: DataState.ERROR, error})
      })
    );
  }
}
