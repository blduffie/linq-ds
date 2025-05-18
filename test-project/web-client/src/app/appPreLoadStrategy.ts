import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

// TODO: Update to preload routes based on if user is signed in and has relevant role
@Injectable()
export class AppPreloadStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return route.data && route.data['preload'] ? load() : of(null);
  }
}
