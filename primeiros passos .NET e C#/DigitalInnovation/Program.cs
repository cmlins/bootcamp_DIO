// using System;

// namespace DigitalInnovation
// {
//     class Program
//     {
//         static void Main(string[] args)
//         {
//             var numbers = Console.ReadLine();
//             var numberList = numbers.Split(' ');
//             var number1 = Convert.ToDouble(numberList[0]);
//             var number2 = Convert.ToDouble(numberList[1]);
//             double space = (number1 * number2) / 10;
//             double space2 = space;

//             for (int i = 0; i < 9; i++)
//             {
//                 var ceil = Math.Ceiling(space2);
//                 Console.Write($"{ceil} ");
//                 space2 += space;
//             }         
//         }
//     }
// }

// // comando para criar novo projeto
// // dotnet new console -n Revisao

// // comando para rodar o programa
// // dotnet run
