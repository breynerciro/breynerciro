---
locale: es
key: workio
title: 'WORKIO — Reservas de Espacios de Coworking'
description: 'Sistema web full stack para reservar espacios de coworking en Bogotá: React + TypeScript en el frontend y API REST con Node.js, PostgreSQL y JWT.'
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
Reservar un espacio de coworking suele implicar mensajes sueltos y hojas de cálculo: nadie sabe con certeza qué está libre, y administrar usuarios, espacios y reservas se vuelve manual.

## Solución
WORKIO (curso Ingeniería de Software 2, metodología Scrum) es un sistema web responsivo para reservar espacios en Bogotá, con registro e inicio de sesión, gestión de reservas y un panel de administración de espacios y usuarios.

## Arquitectura
- **Frontend:** React, TypeScript, Vite y Tailwind CSS; React Router y contextos para el estado global; desplegado en Netlify.
- **Backend:** API REST en Node.js, Express y TypeScript, organizada en capas (`routes` → `controllers` → `database`, con `middleware` transversal).
- **Datos:** PostgreSQL con esquema relacional de usuarios, espacios y reservas.

## Decisiones técnicas
- **JWT con roles y permisos:** crear espacios o administrar usuarios exige un rol autorizado, validado en middleware.
- **Validación con express-validator** en el borde de la API, para rechazar datos mal formados antes de tocar la base de datos.
- **Configuración por variables de entorno** (`.env`), sin credenciales en el código.
- **Dos repositorios** (frontend y backend) que se despliegan de forma independiente.

## Resultado
Un flujo completo de reserva —registro, consulta de espacios, reserva y administración— funcionando de punta a punta y publicado en línea.
