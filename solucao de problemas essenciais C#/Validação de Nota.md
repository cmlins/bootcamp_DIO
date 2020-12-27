using System;
using System.Collections.Generic;
using System.Linq;

class Program {

  static void Main(string[] args) {

    string line; 
    List<float> gradesList = new List<float>();
    List<float> validGrades = new List<float>();
    
    while(!String.IsNullOrWhiteSpace(line=Console.ReadLine()))
    {
      gradesList.Add(float.Parse(line));
    }
    
    foreach (var grade in gradesList) {
      if (grade < 0 || grade > 10)
      {
        Console.WriteLine("nota invalida");
      }
      else
      {
        validGrades.Add(grade);
      }
    }
    
    
    var n1 = (validGrades[0]);
    var n2 = (validGrades[1]);
    var soma = n1 + n2;
    
    Console.WriteLine($"media = {(soma / 2).ToString("N2")}");

  }
}