using System;

class Desafio 
{
    static void Main() 
    {
      var n = Convert.ToInt32(Console.ReadLine());
      
      // int[,] potencia = new int[5,3];
      for (int i = 1; i <= n; i++){
        int pot = 1;
        for (int j = 0; j < 3; j++){
          // potencia[i][j] = Convert.ToInt32(Math.Pow(i,pot));
          var potencia = Convert.ToInt32(Math.Pow(i,pot));
          Console.Write($"{potencia} ");
          pot++;
        }
        Console.WriteLine(' '); 
      }
    }
}