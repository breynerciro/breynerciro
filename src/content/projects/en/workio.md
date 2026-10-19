---
locale: en
key: workio
title: 'WORKIO — Coworking Space Booking'
description: 'Full stack web system to book coworking spaces in Bogotá: React + TypeScript frontend and a REST API with Node.js, PostgreSQL and JWT.'
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

## Problem
Booking a coworking space usually means scattered messages and spreadsheets: nobody knows for sure what is free, and managing users, spaces and bookings becomes manual work.

## Solution
WORKIO (Software Engineering 2 course, Scrum methodology) is a responsive web system to book spaces in Bogotá, with sign-up and login, booking management and an admin panel for spaces and users.

## Architecture
- **Frontend:** React, TypeScript, Vite and Tailwind CSS; React Router and contexts for global state; deployed on Netlify.
- **Backend:** REST API in Node.js, Express and TypeScript, layered (`routes` → `controllers` → `database`, with cross-cutting `middleware`).
- **Data:** PostgreSQL with a relational schema for users, spaces and bookings.

## Technical decisions
- **JWT with roles and permissions:** creating spaces or managing users requires an authorized role, checked in middleware.
- **express-validator validation** at the API edge, rejecting malformed data before it reaches the database.
- **Environment-based configuration** (`.env`), with no credentials in code.
- **Two repositories** (frontend and backend) that deploy independently.

## Result
A complete booking flow — sign-up, browsing spaces, booking and administration — working end to end and published online.
