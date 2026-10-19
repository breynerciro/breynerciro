---
locale: es
key: hemodent
title: 'HEMODENT — Aplicación Móvil Educativa en Salud'
description: 'App multiplataforma para pacientes con hemofilia y sus cuidadores: contenido por edad, emergencias dentales, recordatorios y uso sin conexión.'
pubDate: 2026-06-01
stack: ['React Native', 'TypeScript', 'Expo', 'Expo Router', 'AsyncStorage', 'Reanimated']
featured: true
tags: ['Mobile', 'React Native', 'Health']
repoUrl: 'https://github.com/breynerciro/hemodent/tree/dev'
---

## Problema
Un paciente con hemofilia no puede tratar el cuidado bucal como cualquier otro: un sangrado prolongado o un golpe en la boca exige saber qué hacer en minutos. La información existe, pero está dispersa y no se adapta a la edad del paciente ni a quien lo cuida.

## Solución
HEMODENT (proyecto de tesis) reúne en una app iOS/Android el contenido educativo, los protocolos de emergencia y las herramientas de seguimiento, y adapta el contenido a la etapa de vida del paciente.

- **Contenido por rango de edad:** el flujo cambia según quién use la app.
- **Emergencias dentales:** acceso directo a protocolos ante sangrado prolongado o traumatismos.
- **Centro de conocimiento y glosario** de términos odontológicos y hematológicos.
- **Calendario y recordatorios** de citas y profilaxis con notificaciones locales.
- **Temporizador de cepillado** con audio.

## Decisiones técnicas
- **Expo Router (rutas por archivos):** cada pantalla es un archivo en `app/`; la navegación queda legible y la estructura por edad (`app/age/`) se mapea directo a las rutas.
- **Offline primero:** los datos del usuario y la cartilla viven en el dispositivo (AsyncStorage y datos estáticos en `src/data/`); en una emergencia no se depende de la red.
- **Recordatorios locales** con `expo-notifications`, sin servidor de por medio.
- **TypeScript estricto** y separación `app/` (rutas) · `src/components` · `src/services` · `src/theme`.
- **Animaciones** con Reanimated para una interfaz clara y amable con públicos infantiles.

## Resultado
App multiplataforma funcional con navegación por edad, persistencia sin conexión y recordatorios, desarrollada como proyecto de grado de Ingeniería de Sistemas y Computación.
