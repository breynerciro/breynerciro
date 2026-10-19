---
locale: en
key: hemodent
title: 'HEMODENT — Educational Health Mobile App'
description: 'Cross-platform app for hemophilia patients and their caregivers: age-based content, dental emergencies, reminders and offline use.'
pubDate: 2026-06-01
stack: ['React Native', 'TypeScript', 'Expo', 'Expo Router', 'AsyncStorage', 'Reanimated']
featured: true
tags: ['Mobile', 'React Native', 'Health']
repoUrl: 'https://github.com/breynerciro/hemodent/tree/dev'
---

## Problem
A patient with hemophilia cannot treat oral care like anyone else: prolonged bleeding or a blow to the mouth means knowing what to do within minutes. The information exists, but it is scattered and does not adapt to the patient's age or to who takes care of them.

## Solution
HEMODENT (thesis project) brings educational content, emergency protocols and tracking tools into one iOS/Android app, and adapts the content to the patient's life stage.

- **Age-based content:** the flow changes depending on who uses the app.
- **Dental emergencies:** direct access to protocols for prolonged bleeding or trauma.
- **Knowledge hub and glossary** of dental and hematological terms.
- **Calendar and reminders** for appointments and prophylaxis through local notifications.
- **Brushing timer** with audio.

## Technical decisions
- **Expo Router (file-based routes):** each screen is a file in `app/`; navigation stays readable and the per-age structure (`app/age/`) maps directly to routes.
- **Offline first:** user data and the educational content live on the device (AsyncStorage and static data in `src/data/`); in an emergency nothing depends on the network.
- **Local reminders** with `expo-notifications`, no server in between.
- **Strict TypeScript** and a clear split between `app/` (routes), `src/components`, `src/services` and `src/theme`.
- **Animations** with Reanimated for a clear, friendly interface for young audiences.

## Result
A working cross-platform app with age-based navigation, offline persistence and reminders, built as the degree project for Systems and Computing Engineering.
