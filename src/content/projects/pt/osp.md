---
locale: pt
key: osp
title: 'OSP — Overwatch Sentinel Platform'
description: 'Vigilância com visão computacional no edge: detecta objetos com TensorFlow Lite em Raspberry Pi e grava só quando há atividade. Projeto em equipe (6 pessoas).'
pubDate: 2025-07-01
stack: ['Python', 'TensorFlow Lite', 'Raspberry Pi', 'React', 'Node.js', 'Vert.x', 'PostgreSQL', 'MongoDB', 'Docker', 'Nginx', 'JMeter']
featured: true
tags: ['Edge Computing', 'Computer Vision', 'Microservices']
repoUrl: 'https://github.com/dafmontenegro/overwatch-sentinel-platform'
---

## Problema
Uma câmera de vigilância que grava o tempo todo enche o disco com horas sem atividade e obriga a revisão manual. Em hardware de baixo consumo como um Raspberry Pi, ainda por cima, não dá para processar vídeo sem cuidar de cada recurso.

## Solução
O OSP detecta objetos com TensorFlow Lite diretamente no Raspberry Pi. O usuário define uma **zona segura** na imagem e o sistema grava vídeo apenas quando um objeto de interesse entra nela.

> Projeto em equipe de 6 pessoas (disciplina de Arquitetura de Software). Minha contribuição concentrou-se na arquitetura de microsserviços, nos atributos de qualidade (segurança, desempenho, confiabilidade) e na implantação com Docker.

## Arquitetura
- **Microsserviços** com responsabilidade única: captura e detecção no edge (Raspberry Pi), autenticação federada com OAuth2 (Google) e JWT, API, frontend em React e bancos PostgreSQL e MongoDB.
- **API Gateway em Vert.x** com padrão Gatekeeper: centraliza a validação de entradas antes de chegar aos serviços.
- **Nginx como proxy reverso** e balanceador sobre três réplicas da API.
- **Implantação em 5 ambientes com Docker**, com rede pública e redes privadas segmentadas.

## Decisões técnicas
- **Segurança por cenário:** acesso não autorizado → segmentação de redes; DoS → proxy reverso; injeção SQL/XSS → Gatekeeper com listas brancas; man-in-the-middle → HTTPS/TLS.
- **Alta disponibilidade:** a API roda em três instâncias idênticas atrás de um balanceador, então a queda de uma não derruba o serviço.
- **Testes com JMeter:** logins concorrentes aumentando usuários até o ponto de falha; no streaming de vídeo, cada espectador adicional custou em média 0,7 fps.

## Resultado
Plataforma funcional de ponta a ponta, em que cada atributo de qualidade é sustentado por um cenário e um teste, não só pela descrição da arquitetura.
