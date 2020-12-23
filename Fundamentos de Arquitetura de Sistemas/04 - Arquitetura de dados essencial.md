# Módulo 04 --> Arquitetura de dados essencial


## Aula 01 --> Conceitos introdutórios e o que é um banco de dados

- Dados:
  - conjuntos de valores e ocorrencias que descrevem alguma instancia
  - adquirir conhecimento
- Modelo sustentável:
  - estruturado
  - durável
  - velocidade
  - controle de acesso
  - isolamento
- O que podemos extrair de dados brutos: informações e com ela o conhecimento
- Banco de Dados:
  - cada SO tem uma maneira de lidar com os dados
  - SGBD: Sistemas Gerenciadores de Banco de Dados
    - Linguagem de Definição: ling qual é a estrutura dos dados
    - Linguagem de manipulação: ling que eu recupero os dados
    - Dicionário de dados:
  - Modelo flat: tabela com os dados
  - Modelo hierárquico: árvore hierárquica
  - Modelo Relacional: tabelas que se relacionam entre si
  - Outros modelos: redes(grafo), Orientado a Objetos, Objeto Relacional, Big Data

## Aula 02 --> Banco de dados relacionais

- SGBDR: Sistemas de Gerenciamento de Banco de Dados Relacionais
  - composto de entidades/tabelas que agrupam infos
    - tabelas tem as LINHAS (registros ou tuplas) que contém os dados
    - Colunas
    - Chaves PK/FK

- Modelagem
  - modelo conceitual: MER (modelo entidade relacional)
    - representado pelo DER (diagrama entidade relacional)
    - Entidade forte: não depende de outras para existir
    - Entidade fraca: depende outras para existir
    - Entidade associativa: existe qd se tem um relacionamento de n para n
  - Normalização: 1º a 5 º forma normal
    - 1º FN: existencia de valores únicos em cada coluna --> quebrar a inf em nova coluna ou nova tabela
    - 2º FN: corrige inserções erradas
    - 3º FN: os valores são dependentes da PK
  - modelo lógico
  - Entidades são chamadas de tabelas e as linhas são chamadas de registros ou tuplas

## Aula 03 --> SGDBR - SQL

- gerenciar o modelo, fazer manutenção
- SQL:
  - DDL: Data Definition Language -> mec para alterar as coisas do dados
    - ex: CREATE TABLE Cliente (codigo number(10) Not Null Primary Key, Nome varchar(50) Not Null)
  - DML: Data Manipulation Language -> Transformar os dados
    - ex: INSERT into table/ DELETE from table/ UPDATE table
  - DQL: Data Query Language -> consulta aos dados
    - SELECT col1, col2 FROM table WHERE ...
    - álgebra relacional, teoria dos conjuntos
    - Funções de conjunto SELECT sum(col1) as QTotal FROM table WHERE condition
    - having: filtrar select
    - index: 

## Aula 04 --> Transactions

- o SGBD deve permitir que várias pessoas possam alterar o BD
- Todas as operações tem:
  -  começo: insert, delete, update
  -  meio/resolução: Commit e rolback (qd eu desisto da alteração e elas não são salvas)
  -  fim: novos dados ou dados originais
- ACID:
  - atomicidade: td operação tem um fim (commit ou rolback)
  - Consistência: o sist. de permitir unicidade da chaves, restrições de integridade lógica...
  - Isolamento: várias transações podem acessar simultaneamente o mesmo registro(ou parte do registro)
  - Durabilidade: depois do commit, mesmo com erros no sist, quedas de energia, as alterações precisam ser restauradas
- impedir q as alterações falhem qd 2 usuários fazem alterações simultaneamente.

## Aula 05 --> SGDBR na prática

-SGBDs-R: 
    - pagos: oracle, microsoft SQL Server, IBM DB2
    - gratuitos: PostgreSQL, MySQL, SQLite

## Aula 06 --> Criando banco de dados