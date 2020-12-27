using System;

class MinhaClasse {
  public static void Main (string[] args) {
            var tot = Console.ReadLine();
            var tempos = Console.ReadLine();
            var tempoList = tempos.Split(' ');
            var total = Convert.ToDouble(tot);
            var t1 = Convert.ToDouble(tempoList[0]);
            var t2 = Convert.ToDouble(tempoList[1]);
            
            double sumTempos = t1 + t2;

            if (sumTempos > total)
            {
                Console.WriteLine("Deixa para amanha!");
            }
            else{
                Console.WriteLine("Farei hoje!");
            }
  }
}