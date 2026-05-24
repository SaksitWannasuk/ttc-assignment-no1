// features/person/services/person.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../../../core/services/api.service';
import { CreatePersonRequest, Person } from '../models/person.model';

@Injectable({
    providedIn: 'root'
})
export class PersonService {

    private apiUrl = 'person';

    constructor(private apiService: ApiService) { }

    public getAllPerson(): Observable<Person[]> {
        return this.apiService.get<Person[]>(`${this.apiUrl}/getAllPerson`);
    }

    public createPerson(payload: CreatePersonRequest): Observable<Person> {
        return this.apiService.post<Person>(`${this.apiUrl}/createPerson`, payload);
    }
}