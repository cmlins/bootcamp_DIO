using System;
using System.Linq;

class Desafio 
{
  static void Main() 
  {
    var R = Convert.ToInt32(Console.ReadLine());
    var V = Convert.ToInt32(Console.ReadLine());
    
    while (V < R){
      V = Convert.ToInt32(Console.ReadLine());
    }
    
    var countSum = 0;
    var count = 0;
    
    while (countSum <= V){
      R = R;
      countSum += R;
      R++;
      count++;
      // Console.WriteLine($"R = {R} / countSum = {countSum}");
    }
    // Console.WriteLine($"count = {count} / countSum = {countSum}");
    Console.WriteLine(count);
  }
}