import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Navigate } from "react-router-dom";
import { Student } from "../abstracts/export-models";

export default function HelloWorld() {
  const [goToTicTacToeBoard, setGoToTicTacToeBoard] = useState(false);
  const [students, setStudents] = useState<Student[]>([]);
  const [foundError, setFoundError] = useState<Boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedStudents = await Student.getAllStudents();
        setStudents(fetchedStudents);
      } catch (error) {
        setFoundError(true);
      }
    }

    fetchData();

    return () => {
      // cleanup if needed
    }
  }, []);

  if (goToTicTacToeBoard) {
    return <Navigate to="/tictactoe" />
  }

  return (
    <div className="App">
      <p>Hello World!</p>
      <button onClick={() => { setGoToTicTacToeBoard(true) }}>
        Go to the TicTacToe board
      </button>
    </div>
  );
}