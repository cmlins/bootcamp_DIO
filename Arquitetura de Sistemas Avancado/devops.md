1. DEVOPS é um termo criado para definir o conjunto de práticas q integram e automatizam os processos entre as equipes de dev, operações e de apoio (como QA) para a produção rápida e confiável de sw
   1. É a colaboração entre as equipes, compartilhamento de conhecimento e práticas que integram e automatizam processos.
   2. criar um cultura de colaboração entre as equipes
   3. mudança de mentalidade, uma cultura, um movimento, uma filosofia
   4. frameworks CALMS - 
      1. Culture, 
      2. Automation,   
      3. Lean - focar nas entregas de valor ao cliente, conhecer quais os gargalos do processo, 
      4. Measurement - mensurar e obter métricas é o ponto de partida para novas melhorias, 
      5. Sharing - compartilhamento, é saudável e auxilia na descentralização de conhecimento em pessoas dos times
      6. Cultura, automatização, enxuto, mensurável e compartilhamento
   5. Os 3 caminhos
      1. Flow - visa eliminar desperdício, gargalos. Aplicação de metologias ágeis e automação de processos
         1. é o caminho da demanda até a entrega em produção
         2. pode ser otimizado com integração e entrega contínua
      2. Feedback - visa resolver problemas o qt antes, testando tudo
         1. permite o negócio falhar rápido para corrigir rápido
      3. Learning - aprendizado contínuo visa gerar conhecimento através da experimentação
         1. permite que os times reservem tempo para experimentações
   6. Entregando SW 
      1. As principais etapas para a produção de software em conjunto entre desenvolvimento e operações são Planejamento, codificação, teste, release, deploy, operação e monitoramento.
    ![Entregando SW](..\imgs\devops.JPG)

2. CONTINUOS INTEGRATION   
   1. pode ser composta por um pipeline com diversas etapas
   2. azure builds pipeline
   3. A construção e o teste unitário são componentes da Integração Contínua
   4. Implantação Contínua prevê o deploy automático para um determinado ambiente.
   5. CircleCI e AppVeyor são ferramentas de CI/CD
   6. é uma responsabilidade principalmente da área de Desenvolvimento e Operações
   7. “Além de gerar conhecimento, métricas criam previsibilidade sobre possíveis incidentes que possam vir a surgir

3. CODE QUALITY ANALISIS.
   1. Ferramentas
      1. sonarqube, code climate, codacy
   2. Complexidade ciclomática - é uma métrica definida baseada no número de caminhos independentes possíveis em um código
   3. código duplicado
   4. vulnerabilidades/code smell
   5. padronização e estilo
   6. inspeção contínua - Coleta e análise de métricas de qualidade do software

