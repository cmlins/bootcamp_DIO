Vantagens:
1. desacoplamento
2. p&p
3. comunicação assíncrona
4. escalabilidade simples
5. broadcasting
6. permite event source
7. single point of failure
8. difícil monitoramento

Gerenciamento de erros
- Dead letter queue (filas de re-tentativas)
- monitormanto entre serviços
- rastreamento de fluxo

<!-- 1. Dado que o Serviço A escreve mensagens que são consumidas pelo Serviço B, o que precisa ser feito para “aposentar” o Serviço B e colocar o Serviço C em seu lugar e continuar processando as mensagens do Serviço A?
   1. Desabilitar o Serviço B e fazer o Serviço C consumir mensagens da fila do Serviço A. -->

<!-- 2. Como rastrear um fluxo em uma arquitetura de mensagens assíncronas?
   1. Usando um metadata nos logs e indexá-los em um único lugar. -->

<!-- 3. Qual possível problema pode se ter com arquitetura em mensageria assíncrona?
   1. Inconsistência de dados por não recebimento de mensagens. -->
<!--    
4. O que define uma arquitetura em mensageria?
   1. Serviços que produzem e consomem mensagens de um message broker. -->
<!-- 
5. Qual a vantagem da comunicação assíncrona?
   1. Um serviço “quebrado” não interferir no outro.    -->

<!-- 6. Qual a maior desvantagem de centralizar todas as mensagens em um único Message Broker?
   1. Ter dependência de um message broker em todos os serviços (Single point of failure). -->
<!-- 
7. Quais são as principais vantagens da arquitetura em mensageria assíncrona?
   1. Desacoplamento e buffer de comunicação entre serviços. -->

<!-- 8. Qual pattern pode ser usado com essa arquitetura?
   1. Event source -->

<!-- 9. Como lidar com erros ao processar uma mensagem de forma assíncrona?
   1.  O consumidor que sofrer o erro deve lidar com erro (ex. Dead Letter Queue). -->

<!-- 10. Dado que o Serviço A escreve mensagens que são consumidas pelo Serviço B, o que precisa ser feito para “aposentar” o Serviço A e colocar o Serviço C em seu lugar e continuar produzindo as mensagens para o Serviço B?
    1.  Desativar o Serviço A e habilitar o Serviço C para produzir mensagens na mesma fila que o Serviço A produzia. -->