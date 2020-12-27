using System;

class MinhaClasse {
  public static void Main (string[] args) {
    var segundos = int.Parse(Console.ReadLine());
    
    var hora = segundos / 3600; // Implemente aqui o calculo dos anos
    
    var minuto = (segundos % 3600) / 60; // Implemente aqui o calculo dos meses 
    
    var segundo =  (segundos % 360) % 60;

    Console.WriteLine($"{hora}:{minuto}:{segundo}");
  }
}