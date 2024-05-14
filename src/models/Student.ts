export class Student {
  studentId: number;
  firstName: string;
  lastName: string;

  constructor(id:number, firstname:string, lastname:string) {
    this.studentId = id;
    this.firstName = firstname;
    this.lastName = lastname;
  }

  /**
   * Get a list of all students from the API
   * @returns A List of all Students as the Student object
   */
  static async getAllStudents():Promise<Student[]> {
    const apiurl = "http://localhost:3306/api/student/";

    try {
      const response = await fetch(apiurl);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const studentData = await response.json();
      const students: Student[] = studentData.map((student: Student) => ({
        studentId: student.studentId,
        firstName: student.firstName,
        lastName: student.lastName,
      }));

      return students;
    }
    catch (error) {
      console.error('Error fetching students: ', error);
      throw new Error('Failed to fetch student data');
    }
  }
}