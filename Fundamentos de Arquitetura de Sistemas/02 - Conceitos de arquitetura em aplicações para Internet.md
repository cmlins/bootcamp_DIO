# Módulo 2 --> Conceitos de arquitetura em aplicações para Internet

## Aula 1 --> Introdução a arquitetura de sistemas

1. Tipo de Arquitetura
   1. Monolito: 
      1. aplicação única
      2. Pode ter várias instâncias <-- aumenta com a demanda
      3. Um navegador WEB faz uma requisição ao Proxy HTTP na qual chega até uma determinada instância da aplicação para retornar determinado dado.
   2. Microserviços #1
      1. tem serviços menores com responsabilidades diferentes
      2. cada nó, funciona como monolito
      3. os nós tem que se comunicar entre si
   3. Microserviços #2
      1. Não tem mais comunicação direta entre os nós
      2. independencia entre os nós
      3. se tiver problema em um, não quebra o resto
      4. mais fácil fazer manutenção ou melhorias em cada um
   4. Microserviços #3
      1. Gerenciado de Pipeline
      2. independencia de serviços
      3. O pipeline localiza erros no sistema
      4. se o g. de pipeline estiver fora do ar, td fica fora do ar

   microserviços:
      Message Broker - 
         intermediário entre as conexões realizadas entre os serviços, permitindo maior segurança e retorno de condições indevidas do sistema
         Permite identificar o motivo de um determinado serviço ter sido incapaz de responder no momento de uma requisição.

      acoplamento - Lida com a dependência ou não de uma parte em relação a outra, portanto o modelo de microsserviços possui menor acoplamento se comparado ao monolito.

      Gerenciador de pipeline - recebe a requisição do Proxy HTTP e conforme a etapa da requisição envia para um serviço específico e independente.

      Cluster é composto por Serviços e um Proxy HTTP - As aplicações WEB que fazem requisições ao Proxy, o Proxy irá verificar qual o serviço responsável para executar aquela tarefa. Estes serviços podem comunicar-se entre si.

      Umas das vantagens de usar o microsserviço é conseguir manter as aplicações separadas.

      Cada serviço possui uma dependência diferente.

      Microsserviços desenvolvem sistemas mais flexíveis, escaláveis e com fácil manutenção comparado aos sistemas tradicionais.

## Aula 2 --> Comparando os modelos Monolito e Microserviços

2. Comparativo entre os tipos de arquitetura
   1. Monolito:
      1. Prós:
         1. Baixa complexidade
         2. monitoramento simplificado
      2. Contra:
         1. Stack única
         2. compartilhamento de recurso
         3. acoplamento
         4. escalar é mais complexo
   2. Microserviços #1:
      1. prós:
         1. stack dinâmica
         2. simples escalabilidade
      2. contra:
         1. acoplamento
         2. monitoramento mais complexo
         3. provisionamento mais complexo
   3. Microserviços #2:
      1. prós:
         1. stack dinâmica
         2. escalabilidade simples
         3. desacoplamento
         4. assíncrono
      2. contra:
         1. monitoramento mais complexo
         2. provisionamento mais complexo
   4. Microserviços #3:
      1. prós:
         1. stack dinâmica
         2. escalabilidade simples
         3. desacoplamento
         4. menor complexidade
      2. contra:
         1. provisionamento mais complexo
         2. plataforma td é dependente do pipeline

## Aula 3 --> Gerenciamento de erros e volume de acesso

3. Gerenciamento de erros e volumes de acesso
   1. onde é mais complexo:
      1. processos assíncronos (Microserviços #2)
      2. pipeline
   2. solução:
      1. Dead letter queue : assíncrono 
      2. Filas de re-tentativas