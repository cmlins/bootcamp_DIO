dados -> informações -> conhecimento

modelo relacional - modelo de dado representativo onde os dados estão em tabelas, com linhas e colunas
    - coisas tangíveis
    - funções
    - PK
    - FK
- postgreSQL - BD relacional opensource
- views, functions, procedures, trigger
- ling com suporte a várias ling de programação

- postgreSQL.conf:
  - config do servidor
  - a view pg_setting, gurada tds as config atuais -> usar o comando SHOW[parâmetro]
  - encontra-se por padrão no dir PGDATA
  - porta padrão 5432
  - shared_buffers
  - work_mem: mem para operações de agrupamento e ordenação
  - maintenance_work_mem

- pg_hba.conf:
  - arq responsável pelo controle de autenticação dos usuários no servidor postgreSQL
  - metodos de autenticação
    - trust
    - reject
    - md5
    - password
    - gss
    - sspi
    - krb5
    - ident
    - peer
    - ldap
    - radius
    - cert
    - pam

- pg_ident.conf:
  - arq resp por mapear os usuários do SO com os usuarios do BD
  - local no dir de daodos PGDATA

- comando administrativos
- arquitetura/ hierarquia
  - cluster: coleção de BDs q compartilham as mesmas config do PostgreSQL e do SO
  - BD
  - Schema: conj de obj/relações

- PGAdmin:
  - importante:
    - liberar acesso ao cluster em postgreSQL.conf

