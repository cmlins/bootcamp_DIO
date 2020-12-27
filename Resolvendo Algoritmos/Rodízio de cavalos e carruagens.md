using System;
using System.Text.RegularExpressions;

class MinhaClasse {
  
  public static string weekDay (int day)
    {
      if (day == 1 || day == 2)
      {
          return ("SEGUNDA");
      }
      else if (day == 3 || day == 4)
      {
          return ("TERCA");
      }
      else if (day == 4 || day == 6)
      {
          return ("QUARTA");
      }
      else if (day == 7 || day == 8)
      {
          return ("QUINTA");
      }
      else if (day == 9 || day == 0)
      {
          return ("SEXTA");
      }
      else
      {
          return ("FALHA");
      }
    }
    
  public static int lastChar (string placa)
  {
    return Convert.ToInt32(placa.Substring(placa.Length - 1));
  }
  
  public static bool checkStr (string placa)
  {
    return Regex.IsMatch(placa, @"^[A-Z]{3}-[0-9]{4}$");
  }
    
  public static void Main (string[] args) 
  {
    var numPlacas = int.Parse(Console.ReadLine());
    
    string[] placas = new string[numPlacas];
    
    for (int i = 0; i < numPlacas; i++)
    {
        placas[i] = Console.ReadLine();
    }
    
    for (int i = 0; i < numPlacas; i++)
    {
        if (checkStr(placas[i]))
        {
            Console.WriteLine(weekDay(lastChar(placas[i])));
        }
        else{
            Console.WriteLine("FALHA");
        }
    }         
  }
}