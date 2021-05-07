import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attendance } from './attendance';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  private baseURL = "http://localhost:9090/Attendance/getAllAttendance";
  constructor(private httpClient: HttpClient) { }

  getAttendanceList() : Observable<Attendance[]>
  {
    return this.httpClient.get<Attendance[]>(`${this.baseURL}`);
  }
  createAttendance(attendance : Attendance):Observable<Object>
  {
    return this.httpClient.post(`${this.baseURL}`,attendance);
  }
}
