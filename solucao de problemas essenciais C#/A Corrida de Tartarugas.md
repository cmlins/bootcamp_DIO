using System;
using System.Linq;

class Desafio 
{
  
  static int group (int topSpeed){
    if (topSpeed < 10){
      return 1;
    }
    if (topSpeed >= 10 && topSpeed < 20){
      return 2;
    }
    else{
      return 3;
    }
  }
  
  static void Main() 
  {
    var count = 0;
    
    while (count < 3) {
      
      var qtd = Convert.ToInt32(Console.ReadLine());
      string[] speeds = Console.ReadLine().Split(" ");
      var max = Convert.ToInt32(speeds[0]);
      
      for (int i = 0; i < qtd; i++){
        
        var speed = Convert.ToInt32(speeds[i]);
        
        if (speed > max){
          max = speed;
        }
      }
      
      Console.WriteLine($"{group(max)}");
      count++;
      
    }
  }
}