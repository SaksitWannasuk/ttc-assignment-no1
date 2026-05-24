import { Routes } from '@angular/router';
import { PersonListPage } from './pages/person-list/person-list.page';

export const PERSON_ROUTES: Routes = [
  {
    path: '',
    component: PersonListPage,
  }
];