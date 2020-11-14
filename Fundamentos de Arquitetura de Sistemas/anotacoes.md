# Módulo 1 --> Vantagens e desenvolvimento de Web Services

## Aula 1 --> O que são web services

- são soluções p app se comunicarem independente de linguagem, sw e hw
- são APIs q se comunicam (xml, json) por meio de redes sobre o prot HTTP
- Vantagens:
  - Linguagem comum
  - integração
  - reuso
  - segurança
  - custo
- Principais tec:
  - SOAP
  - REST
  - XML
  - JSON

## Aula 2 --> SOAP

- Simple Object Access Protocol
- protoc. baseado em XML para acessar serviços web
- Como serviços web se comunicam
- Faciliatar integração entre aplicações
- Vantagens: 
  - permite integrar app com ling diferentes usando XML
  - independe de plataforma e sw
  - meio de transporte genérico (pode ser usado por outro protocolo além de HTTP)
- XML
  - Extensible Merkup Language
  - facilita separação de conteúdo
  - não tem limite de criação de tags
  - ling. comum para integ entre app
- Estrutura SOAP:
  - SOAP Envelope: encapsula msg SOAP
    - SOAP Header: possui infos de atributos e metadatos da requisição
      - SOAP Body: contém os detalhes da msg

## Aula 3 --> O que é WSDL e XSD

- WSDL - Web Services Description Language
  - Usado para descrever Web Services, é um contrato de serviço
  - feito em XML, descrevendo serviço, especificações de acesso, operações e métodos
  
- XSD - XML Schema Definition
  - schema no formato XML usado para def a estrutura de dados q será validada no XML
  - doc de como o SOAP Message deve ser montado
  
- prática: http://www.soapclient.com/soaptest.html
  - SoapUI

## Aula 3 --> REST, API e JSON

- REST - Representation State Transfer
  - Estilo de arquitetura de sw q define a implementação de um serviço web
  - pode usar XML, JSON ...
  - Vantagens:
    - Permite integrações entre app e tb cliente/servidor em pag web e aplicações
    - usa dos métodos HTTP (GET, POST, PUT, DELETE...)para definir a operação q está sendo feita
    - arquitetura de fácil compreensão

- API - Application Programming Interface
  - Qd uma aplicação web disponibiliza um conjunto de rotinas e padrões através de serviços web
  - Principais métodos HTTP:
    - GET: solicita a representação de um recurso
    - POST: Solicita a criação de um recurso
    - DELETE: solicita a exclusão de um recurso
    - PUT: Solicita a atualização de um recurso

- JSON - JavaScript Object Notation
  - formatação leve para troca de msg entre sistemas
  - chave valor

## Aula 4 --> Integração REST API

- código de estado (status code)
  - usado pelo servidor para avisar o cliente sobre o estado da operação solicitada
    - Vão de 100 a 500: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
      - 1xx - informativo
      - 2xx - Sucesso
      - 3xx - Redirecionamento
      - 4xx - Erro do Cliente
      - 5xx - Erro do Servidor







