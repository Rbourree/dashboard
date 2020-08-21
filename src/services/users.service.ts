import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class UsersService {

    constructor(private http: HttpClient) { }

    login(body) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const url = environment.api + '/login';
        return this.http.post<any>(url, body, { headers: headers, responseType: "json" })
    }

    register(body) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const url = environment.api + '/register';
        return this.http.post<any>(url, body, { headers: headers, responseType: "json" })
    }

    logout() {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') });
        const url = environment.api + '/logout';
        return this.http.post<any>(url, {}, { headers: headers, responseType: "json" })
    }

    me() {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') });
        const url = environment.api + '/me';
        return this.http.get<any>(url, { headers: headers, responseType: "json" })
    }

}