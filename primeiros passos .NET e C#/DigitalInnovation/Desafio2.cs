using System;
using System.Text.RegularExpressions;
using System.Linq;
using System.Collections.Generic;

namespace Desafio2
{
    class Program
    {
        static void Main(string[] args)
        {
            // var numbers = Console.ReadLine();
            // var numberList = numbers.Split(' ');
            // var Ca = Convert.ToDouble(numberList[0]);
            // var Ba = Convert.ToDouble(numberList[1]);
            // var Pa = Convert.ToDouble(numberList[2]);
            
            // var numbers2 = Console.ReadLine();
            // var numberList2 = numbers2.Split(' ');
            // var Cr = Convert.ToDouble(numberList2[0]);
            // var Br = Convert.ToDouble(numberList2[1]);
            // var Pr = Convert.ToDouble(numberList2[2]);

            // double diff1 = 0;
            // double diff2 = 0;
            // double diff3 = 0;

            // if (Cr > Ca)
            // {
            //     diff1 = Cr - Ca;
            // }

            // if (Br > Ba)
            // {
            //     diff2 = Br - Ba;
            // }

            // if (Pr > Pa)
            // {
            //     diff3 = Pr - Pa;
            // }

            // double total = diff1 + diff2 + diff3;

            // Console.WriteLine(total);         

////////////////////////////////////////////////////////////////////////////////////////////////////////

            // var idadeEmDias = int.Parse(Console.ReadLine());
            // var anos = idadeEmDias / 365; // Implemente aqui o calculo dos anos
            // var meses = (idadeEmDias % 365) / 30; // Implemente aqui o calculo dos meses 
            // var dias =  (idadeEmDias % 365) % 30; // Implemente aqui o calculo dos dias

            // Console.WriteLine($"{anos} ano(s)\n{meses} mes(es)\n{dias} dia(s)");

/////////////////////////////////////////////////////////////////////////////////////////////////////////

            // var tot = Console.ReadLine();
            // var tempos = Console.ReadLine();
            // var tempoList = tempos.Split(' ');
            // var total = Convert.ToDouble(tot);
            // var t1 = Convert.ToDouble(tempoList[0]);
            // var t2 = Convert.ToDouble(tempoList[1]);
            
            // double sumTempos = t1 + t2;

            // if (sumTempos > total)
            // {
            //     Console.WriteLine("Deixa para amanha!");
            // }
            // else{
            //     Console.WriteLine("Farei hoje!");
            // }
            
/////////////////////////////////////////////////////////////////////////////////////////////////////////
        // static string weekDay (int day)
        // {
        //     if (day == 1 || day == 2)
        //     {
        //         return ("SEGUNDA");
        //     }
        //     else if (day == 3 || day == 4)
        //     {
        //         return ("TERCA");
        //     }
        //     else if (day == 4 || day == 6)
        //     {
        //         return ("QUARTA");
        //     }
        //     else if (day == 7 || day == 8)
        //     {
        //         return ("QUINTA");
        //     }
        //     else if (day == 9 || day == 0)
        //     {
        //         return ("SEXTA");
        //     }
        //     else
        //     {
        //         return ("FALHA");
        //     }
        // }

        // static int lastChar (string placa)
        // {
        //     return Convert.ToInt32(placa.Substring(placa.Length - 1));
        // }

        // static bool checkStr (string placa)
        // {
        //     return Regex.IsMatch(placa, @"^[A-Z]{3}-[0-9]{4}$");
        // }

        // var numPlacas = int.Parse(Console.ReadLine());
        // string[] placas = new string[numPlacas];

        // for (int i = 0; i < numPlacas; i++)
        // {
        //     placas[i] = Console.ReadLine();
        // }

        // for (int i = 0; i < numPlacas; i++)
        // {
        //     if (checkStr(placas[i]))
        //     {
        //         Console.WriteLine(weekDay(lastChar(placas[i])));
        //     }
        //     else{
        //         Console.WriteLine("FALHA");
        //     }
        // }        

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4 4
// 1/6/2016 0 0 1 0
// 12/7/2016 1 1 1 0
// 5/10/2016 1 1 1 1
// 25/12/2016 0 0 0 0
        // var n = Console.ReadLine();
        // var nList = n.Split(' ');
        // var nPessoas = Convert.ToInt32(nList[0]);
        // var datas = Convert.ToInt32(nList[1]);
        // string[] retorno = new string[1];
        // Dictionary<string, string> duplicates = new Dictionary<string, string>();

        // Dictionary<string, int> dict= new Dictionary<string, int>();

        // for (int i = 0; i < datas; i++){
        //     var values = Console.ReadLine();
        //     var valuesList = values.Split(' ');
        //     var data = valuesList[0];
        //     int[] votes = new int[nPessoas];
            
        //     int sum = 0;
            
        //     for (int j = 0; j < nPessoas; j++){
        //         votes[j] = Convert.ToInt32(valuesList[j+1]);
        //         sum = votes.Sum();
        //     }

        //     dict.Add(data, sum);

        //     // for (int k = 0; k < dict.Count; k++){
        //     //     Console.WriteLine("Key: {0}, Value: {1}", dict.ElementAt(k).Key, dict.ElementAt(k).Value);
        //     // }

        //     var max = dict.Aggregate((l, r) => l.Value > r.Value ? l : r).Key;

        //     duplicates = dict.GroupBy(x => x.Value).Where(x => x.Count() > 1);

        //     retorno[0] = max;
        // }
        // Console.WriteLine(retorno[0]);
        // Console.WriteLine(duplicates);
    }
  }
}

// comando para criar novo projeto
// dotnet new console -n Revisao

// comando para rodar o programa
// dotnet run