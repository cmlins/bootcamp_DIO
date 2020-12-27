using System;
using System.Collections.Generic;
using System.Linq;

class Program {
  
  static void Main(string[] args) {
    // Utilize Console.ReadLine para leitura do input de cada linha
    // Utilize Console.WriteLine para fazer o output de cada linha
    string line;
    List<string> termsList = new List<string>();
    
    while(!String.IsNullOrWhiteSpace(line=Console.ReadLine()))
    {
      termsList.Add(line);
    }
    int distinct = termsList.Distinct().Count();
            
    Console.WriteLine(distinct);  
    
    
  }

}