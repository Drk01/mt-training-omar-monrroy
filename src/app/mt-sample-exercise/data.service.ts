import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({ providedIn: "root" })
export class DataService {
  constructor(private http: HttpClient) {}

  fetchFarms() {
    return this.http.get("./assets/farm-mock-data.json");
  }
}
