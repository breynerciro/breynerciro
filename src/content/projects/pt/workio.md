---
locale: pt
key: workio
title: 'WORKIO — Reservas de Espaços de Coworking'
description: 'Sistema web full stack para reservar espaços de coworking em Bogotá: frontend React + TypeScript e API REST com Node.js, PostgreSQL e JWT.'
pubDate: 2025-03-01
stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'bcrypt']
featured: true
tags: ['Full Stack', 'Backend', 'API']
repoUrl: 'https://github.com/breynerciro/FRONTEND-WORKIO'
demoUrl: 'https://workio-un.netlify.app'
extraRepos:
  - label: 'Backend'
    url: 'https://github.com/breynerciro/BACKEND-WORKIO'
---

## Problema
Reservar um espaço de coworking costuma significar mensagens soltas e planilhas: ninguém sabe ao certo o que está livre, e administrar usuários, espaços e reservas vira trabalho manual.

## Solução
O WORKIO (disciplina Engenharia de Software 2, metodologia Scrum) é um sistema web responsivo para reservar espaços em Bogotá, com cadastro e login, gestão de reservas e um painel de administração de espaços e usuários.

## Arquitetura
- **Frontend:** React, TypeScript, Vite e Tailwind CSS; React Router e contextos para o estado global; publicado na Netlify.
- **Backend:** API REST em Node.js, Express e TypeScript, em camadas (`routes` → `controllers` → `database`, com `middleware` transversal).
- **Dados:** PostgreSQL com esquema relacional de usuários, espaços e reservas.

## Decisões técnicas
- **JWT com papéis e permissões:** criar espaços ou administrar usuários exige um papel autorizado, validado em middleware.
- **Validação com express-validator** na borda da API, rejeitando dados malformados antes de chegarem ao banco.
- **Configuração por variáveis de ambiente** (`.env`), sem credenciais no código.
- **Dois repositórios** (frontend e backend) com implantação independente.

## Resultado
Um fluxo completo de reserva — cadastro, consulta de espaços, reserva e administração — funcionando de ponta a ponta e publicado online.
