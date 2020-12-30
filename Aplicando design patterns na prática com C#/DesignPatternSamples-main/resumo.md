- Design Patterns são soluções reutilizáveis para problemas comumente ocorridos.
- Os 23 padrões de Gang of Four (GoF) são geralmente considerados a base para todos os outros padrões. Eles são classificados em três grupos: Creational, Structural, and Behavioral 
- Padrões de Projeto — Soluções Reutilizáveis de Software Orientado a Objetos
- http://www.menti.com/iq57cex4f5
![Design Patterns](/imgs/designPatterns.JPG)
- Vantagens:
  - aumenta produtividade
  - facilita manutenção
  - termos universais
- não é uma solução pronta
- SOLID: 
  
| Letra | Sigla | Nome | Definição | Vantagem |  
| :-----: | :-----: | ---- | --------- | --------- | 
| S | SRP | Princípio da Responsabilidade Única | uma classe deve ter um, e somente um, motivo para mudar | Mais fácil de ler
| O | OCP | Princípio Aberto-fechado | vc deve ser capaz de estender um comportamento de uma classe, sem modificá-lo | 
| L | LSP | Princípio da substituição de Liskov | As classes base devem ser substituíveis por suas classes derivadas |  
| I | ISP | Princípio da Segregação da Interface | Muitas interfaces específicas são melhores do que uma interface única |  
| D | DIP | Princípio da inversão da dependência | Dependa de uma abstração e não de uma implementação |  

- Não uso de SOLID
  -  duplicidade de código;
  -  código sem estrutura coesa;
  -  dificuldade de manter / evoluir;
  -  pequenos ajustes podem quebar o código, inclusive em outras partes do sistema;
  -  dificuldade para executar e criar testes unitários;
  -  dificuldade de reaproveitar código para outras aplicações

- Benefícios SOLID:
  - fácil manutenção
  - fácil entendimento
  - organização
  - aberta a receber novas funcionalidades sem danos colaterais
  - reaproveitamento de código
  - fácil dapatação a mudanças no escopo do projeto
