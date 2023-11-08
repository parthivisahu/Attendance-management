export interface Students{
    Id:number;
    Name:string;
    Email:string;
    Phone:string;
}

export interface Attendance{
    Id:number;
    studentID:number;
    date:Date;
    present:string;
}

export interface chartData{
    name:string,
    value:number
}