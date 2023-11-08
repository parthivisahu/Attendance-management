import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Students, Attendance } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  push(value: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  studentAttendance: Array<Students>=[]
  studentData: Array<Students> =[]
  attendance:Array<Attendance>=[]

  storeStudent(students:Students){
    return this.http.post(`https://653cab8ed5d6790f5ec828d0.mockapi.io/students`,students)
  }

  getStudents(){
    return this.http.get<Array<Students>>(`https://653cab8ed5d6790f5ec828d0.mockapi.io/students`)
  }

  getStudentByID(id:any){
    return this.http.get<Students>(`https://653cab8ed5d6790f5ec828d0.mockapi.io/students/${id}`)
  }

  deleteStudentByID(id:number){
    return this.http.delete(`https://653cab8ed5d6790f5ec828d0.mockapi.io/students/${id}`)
  }

  updateStudent(studentID:number, studentData:Students){
    return this.http.put(`https://653cab8ed5d6790f5ec828d0.mockapi.io/students/${studentID}`,studentData)
  }

  addAttendance(attendance:Attendance)
  {
    return this.http.post(`https://653cab8ed5d6790f5ec828d0.mockapi.io/attendance/`,attendance)
  }
  searchAttendance()
  {
    return this.http.get<Array<Attendance>>(`https://653cab8ed5d6790f5ec828d0.mockapi.io/attendance`)
  }
  
  getAttendanceByID(id:any){
    return this.http.get<Students>(`https://653cab8ed5d6790f5ec828d0.mockapi.io/attendance/${id}`)
  }

  deleteAttendanceById(id:number){
    return this.http.delete(`https://653cab8ed5d6790f5ec828d0.mockapi.io/attendance/${id}`)
  }
}
