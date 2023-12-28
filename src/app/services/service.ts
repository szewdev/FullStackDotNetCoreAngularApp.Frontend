import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class Service {
    protected apiUrl = 'http://localhost:5093/api/products';

    constructor(protected http: HttpClient) {
    }
}
