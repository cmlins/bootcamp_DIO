1. BI em modelo de dados
   1. BI - business intelligence
      1. Composto por ferramentas, infraestrutura, profissionais (corpo técnico), DADOS (dados gerenciais, dados de operação pesquisa de campo...).
      2. BI solution: infraestrutura, gerenciamento de dados, analytics, compartilhamento, ferramentas (domo, tableau, sas, oracle...)
      3. Não considera apenas dados gerados pelos profissionais de BI
2. Data warehouse
   1. OLTP: on-line transaction processing. Transações pono a ponto que acontecem no sistema
      1. cubo de visões
         1. dimensões -> Tempo, Geografia e Membros
      2. Dados voláteis, passíveis de modificação e exclusão
   2. OLAP: on-line analytical processing
      1. atende menos usuários
      2. mais focado no nível estratégico da organização
      3. select/update/insert
      4. sum/avg/min/max

   3.  Dá para colocar a estrutura em um bd relacional
3. Big Data
   1. É um conjunto muito grande dados, estruturados ou não.
   2. diversos formatos de dados
   3. Não há um banco de dados específico, mas sim uma composição de várias origens.
   4. dados estruturados
   5. Dados semi-estruturados
      1. XML, JSON, OWL
      2. Possuem uma estrutura de organização, mas é flexível
      3. Podem também ser utilizados substituindo banco de dados estruturados
   6. Hadoop, DataTorrent, Storm, Spark...

4. Data Lake
   1. repositório com muita informação

