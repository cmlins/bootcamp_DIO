using System;

namespace Desafio2
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbers = Console.ReadLine();
            var numberList = numbers.Split(' ');
            var Ca = Convert.ToDouble(numberList[0]);
            var Ba = Convert.ToDouble(numberList[1]);
            var Pa = Convert.ToDouble(numberList[2]);
            
            var numbers2 = Console.ReadLine();
            var numberList2 = numbers2.Split(' ');
            var Cr = Convert.ToDouble(numberList2[0]);
            var Br = Convert.ToDouble(numberList2[1]);
            var Pr = Convert.ToDouble(numberList2[2]);

            double diff1 = 0;
            double diff2 = 0;
            double diff3 = 0;

            if (Cr > Ca)
            {
                diff1 = Cr - Ca;
            }

            if (Br > Ba)
            {
                diff2 = Br - Ba;
            }

            if (Pr > Pa)
            {
                diff3 = Pr - Pa;
            }

            double total = diff1 + diff2 + diff3;

            Console.WriteLine(total);            
        }
    }
}

// comando para criar novo projeto
// dotnet new console -n Revisao

// comando para rodar o programa
// dotnet run
