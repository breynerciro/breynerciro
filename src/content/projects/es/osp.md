---
locale: es
key: osp
title: 'OSP — Overwatch Sentinel Platform'
description: 'Vigilancia con visión artificial en el edge: detecta objetos con TensorFlow Lite en Raspberry Pi y graba solo cuando hay actividad. Proyecto en equipo (6 personas).'
pubDate: 2025-07-01
stack: ['Python', 'TensorFlow Lite', 'Raspberry Pi', 'React', 'Node.js', 'Vert.x', 'PostgreSQL', 'MongoDB', 'Docker', 'Nginx', 'JMeter']
featured: true
tags: ['Edge Computing', 'Computer Vision', 'Microservices']
repoUrl: 'https://github.com/dafmontenegro/overwatch-sentinel-platform'
---

## Problema
Una cámara de vigilancia que graba todo el tiempo llena el disco con horas sin actividad y obliga a revisar a mano. En hardware de bajo consumo como una Raspberry Pi, además, no se puede procesar video sin cuidar cada recurso.

## Solución
OSP detecta objetos con TensorFlow Lite directamente en la Raspberry Pi. El usuario define una **zona segura** dentro de la imagen y el sistema graba video solo cuando un objeto de interés entra en ella.

> Proyecto en equipo de 6 personas (curso de Arquitectura de Software). Mi aporte se centró en la arquitectura de microservicios, los atributos de calidad (seguridad, rendimiento, fiabilidad) y el despliegue con Docker.

## Arquitectura
- **Microservicios** con una sola responsabilidad: captura y detección en el edge (Raspberry Pi), autenticación federada con OAuth2 (Google) y JWT, API, frontend en React y bases de datos PostgreSQL y MongoDB.
- **API Gateway en Vert.x** con patrón Gatekeeper: centraliza la validación de entradas antes de llegar a los servicios.
- **Nginx como proxy reverso** y balanceador sobre tres réplicas del API.
- **Despliegue en 5 entornos con Docker**, con red pública y redes privadas segmentadas.

## Decisiones técnicas
- **Seguridad por escenarios:** acceso no autorizado → segmentación de redes; DoS → proxy reverso; inyección SQL/XSS → Gatekeeper con listas blancas; man-in-the-middle → HTTPS/TLS.
- **Alta disponibilidad:** el API se replica en tres instancias idénticas tras un balanceador, de modo que la caída de una no corta el servicio.
- **Pruebas con JMeter:** autenticaciones concurrentes aumentando usuarios hasta encontrar el punto de fallo; en el streaming de video, cada espectador adicional costó en promedio 0,7 fps.

## Resultado
Plataforma funcional de punta a punta, con cada atributo de calidad respaldado por un escenario y una prueba, no solo por la descripción de la arquitectura.
