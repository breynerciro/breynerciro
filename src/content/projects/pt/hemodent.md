---
locale: pt
key: hemodent
title: 'HEMODENT — Aplicativo Móvel Educativo em Saúde'
description: 'App multiplataforma para pacientes com hemofilia e seus cuidadores: conteúdo por idade, emergências odontológicas, lembretes e uso offline.'
pubDate: 2026-06-01
stack: ['React Native', 'TypeScript', 'Expo', 'Expo Router', 'AsyncStorage', 'Reanimated']
featured: true
tags: ['Mobile', 'React Native', 'Health']
repoUrl: 'https://github.com/breynerciro/hemodent/tree/dev'
---

## Problema
Um paciente com hemofilia não pode tratar o cuidado bucal como qualquer outro: um sangramento prolongado ou uma pancada na boca exige saber o que fazer em minutos. A informação existe, mas está dispersa e não se adapta à idade do paciente nem a quem cuida dele.

## Solução
O HEMODENT (projeto de graduação) reúne em um app iOS/Android o conteúdo educativo, os protocolos de emergência e as ferramentas de acompanhamento, e adapta o conteúdo à fase de vida do paciente.

- **Conteúdo por faixa etária:** o fluxo muda conforme quem usa o app.
- **Emergências odontológicas:** acesso direto a protocolos para sangramento prolongado ou traumatismos.
- **Central de conhecimento e glossário** de termos odontológicos e hematológicos.
- **Calendário e lembretes** de consultas e profilaxia com notificações locais.
- **Cronômetro de escovação** com áudio.

## Decisões técnicas
- **Expo Router (rotas por arquivos):** cada tela é um arquivo em `app/`; a navegação fica legível e a estrutura por idade (`app/age/`) mapeia direto para as rotas.
- **Offline primeiro:** dados do usuário e conteúdo educativo ficam no dispositivo (AsyncStorage e dados estáticos em `src/data/`); em uma emergência nada depende da rede.
- **Lembretes locais** com `expo-notifications`, sem servidor no meio.
- **TypeScript estrito** e separação clara entre `app/` (rotas), `src/components`, `src/services` e `src/theme`.
- **Animações** com Reanimated para uma interface clara e amigável para o público infantil.

## Resultado
App multiplataforma funcional com navegação por idade, persistência offline e lembretes, desenvolvido como projeto de graduação em Engenharia de Sistemas e Computação.
