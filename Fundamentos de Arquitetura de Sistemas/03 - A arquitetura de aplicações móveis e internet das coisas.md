# Módulo 03 --> A arquitetura de aplicações móveis e internet das coisas

## Aula 01 --> Conceitos da Internet das Coisas

- Embutir sensores em obj
- coletar dados dos sensores
- usar os dados para tomar decisão
- Things -> cloud -> intelligence
- computação ubíqua: ou computação pervasiva é um termo usado para descrever a onipresença da informática no cotidiano das pessoas.
- Desafios:
  - Privacidade e segurança
  - Qtd exponencial de dispositivos conectados na rede
  - Ser capaz de processar e armazenar grande qtd de dados
  - Gerar valor a partir dos dados

## Aula 02 --> Arquitetura da internet das coisas e protocolo de comunicação

- Considere atributos na escolha:
  - Baixo consumo de energia
  - Rede de dados limitado
  - Resiliência
  - Segurança
  - Customização
  - Baixo Custo

- Arduíno
  - plataforma de prototipagem
  - in/out
  - c/C++
  - Interface serial ou USB
  - Shields

- Embarcados
  - MCUs microcontrolador de chip único
  - SO real time
  - Embarcado
  - Uso industrial, médico, militar, transporte

- Minicomputadores
  - Raspberry Pi:
    - computador completo
    - hw completo em uma placa
    - roda SO linux ou windows
    - uso doméstico e comercial

- MQTT (Message Queuing Telemetry Transport)
  - protocolo de comunicação IOT
  - comunicação entre os dispositivos e a nuvem
  - base na pilha do TCP/IP
  - protocolo de msg *assíncrona* (m2m)
  - conectar sensores de pipelines de petróleo a satélites
  - padrão OASIS suportado pelas linguagens de programação mais populares
  - Modelo Publish/Subscribe
    - MQTT Broker: roteador de msg
    - tem q ter endereço 
    - tópico: endereço onde vou entregar a msg

- Modelo Cliente/Servidor
  - síncrono
  
## Aula 03 --> Flexibilidade dos tópicos e Cloud

- (PROTOCOLO) :// (BROKER) / (USER ID) / (SENSOR) / (INFORMATION TYPE)
- ex: mqtt    :// broker.io / a6g319   / gps      / position

- subscribe:
  - capacidade que o dispositivo tem de se conectar ao broker e passar a ouvir o tópico

- QoS (qualidade de serviço):
  - QoS 0:
    - nível mínimo de menor esforço 
    - sem garantia de entrega
    - msg não é retransmitida
    - menor custo computacional
  - QoS 1:
    - a msg fica armazenada no client
    - Garante que a msg foi entregue no mínimo uma vez ao recebedor
    - msg pode ser retransmitida se não houver confirmação de entrega
  - QoS 2:
    - Garante q a msg foi entregue no mínimo uma vez ao recebedor
    - msg pode ser retransmitida se não houver confirmação de entrega
    - envia a msg até a msg ser recebida
    - o broker confirma o recebimento da msg
    - mais caro

- Cloud
    - + e + dispositivos conectados
    - Potencial de escala global
    - TBs ou PBs de informação
    - amazon, microsoft, google...
    - BROKER -> WORKER (aplicaçâo, se inscreve nos tópicos) -> cache/Data store

## Aula 04 --> Estudo de caso

- Arquitetura é escolha
- ex: GPS -> Broker -> Worker -> Data Store
  - ex: app android -> eclipse mosquitto -> Node.js -> BD MySQL
  - MVP: gps embarcado -> HiveMQ -> Akka Scala JVM -> mongoDB
  - ex: gps embarcado -> AWS IoT Core -> AWS Kinesis Firehose -> AWS S3

- IoT na prática
  -  gps embarcado -> AWS IoT Core -> AWS Data Stream -> AWS Lambda -> AWS ElasticCache Redis -> AWS EC2 -> FeathersJS Backend -> Dashboard