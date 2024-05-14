import { describe, expect, test } from '@jest/globals';
//import { getStudents } from "../pages/HelloWorld";
import { Student } from "../abstracts/export-models";
import { useEffect, useState } from 'react';
import { isExportSpecifier } from 'typescript';

/// Test the fetching of students
test(
  // TEST IS NOT THE SAME AS REAL CODE VERSION!!!
  "Test the fetched results of the function, function can't be null",
  () => {
    let studentList: Student[] = [];
    let errorFound: Boolean = false;
    let testRun: Boolean = false;

    const fetchData = async () => {
      testRun = true;
      try {
        const fetchedStudents = await Student.getAllStudents();
        studentList = fetchedStudents;
      } catch (error) {
        errorFound = true;
      }
    }

    fetchData();


    expect(errorFound).toBe(false);
    expect(testRun).toBe(true);
  }
);


