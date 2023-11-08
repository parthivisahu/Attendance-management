import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { StudentServiceService } from 'src/services/student-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule, 
    MatButtonModule,
    ReactiveFormsModule
  ],
})
export class StudentComponent implements OnInit{
  studentForm : FormGroup 
  constructor(private studentServices: StudentServiceService, private router:Router) {
    this.studentForm = new FormGroup({
      'studentName': new FormControl('', Validators.required),
      'studentEmail': new FormControl('', [Validators.required, Validators.email]),
      'phoneNumber': new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    })
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  submitStudent(){
    Object.keys(this.studentForm.controls).forEach(field => {
      const control = this.studentForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });
    
    if(this.studentForm.valid){
      this.studentServices.storeStudent(this.studentForm.value).subscribe(() => {
        // Add the newly uploaded student to the students array
        this.studentServices.push(this.studentForm.value);
        this.router.navigate(['/dashboard'])
        // Show a success message in a popup
        const uploadedMessage = "Data Successfully Uploaded";
        alert(uploadedMessage);
  
        // Reset the form once the data is uploaded
        this.studentForm.reset();
      },() => {
        // Show an error message in a popup if the upload fails
        const errorMessage = "Something went wrong while uploading the file";
        alert(errorMessage);
      });
    }
  
  }
}
