---
locale: en
key: osp
title: 'OSP — Overwatch Sentinel Platform'
description: 'Edge computer-vision surveillance: detects objects with TensorFlow Lite on a Raspberry Pi and records only when there is activity. Team project (6 people).'
pubDate: 2025-07-01
stack: ['Python', 'TensorFlow Lite', 'Raspberry Pi', 'React', 'Node.js', 'Vert.x', 'PostgreSQL', 'MongoDB', 'Docker', 'Nginx', 'JMeter']
featured: true
tags: ['Edge Computing', 'Computer Vision', 'Microservices']
repoUrl: 'https://github.com/dafmontenegro/overwatch-sentinel-platform'
---

## Problem
A surveillance camera that records all the time fills the disk with hours of nothing and forces manual review. On low-power hardware like a Raspberry Pi, video can't be processed without watching every resource.

## Solution
OSP detects objects with TensorFlow Lite directly on the Raspberry Pi. The user defines a **safe zone** in the image and the system records video only when an object of interest enters it.

> Team project of 6 people (Software Architecture course). My contribution focused on the microservices architecture, the quality attributes (security, performance, reliability) and the Docker deployment.

## Architecture
- **Microservices** with a single responsibility each: capture and detection at the edge (Raspberry Pi), federated authentication with OAuth2 (Google) and JWT, API, React frontend, and PostgreSQL and MongoDB databases.
- **Vert.x API Gateway** using the Gatekeeper pattern: centralizes input validation before requests reach the services.
- **Nginx as reverse proxy** and load balancer over three API replicas.
- **Deployment in 5 environments with Docker**, with a public network and segmented private networks.

## Technical decisions
- **Security by scenario:** unauthorized access → network segmentation; DoS → reverse proxy; SQL injection/XSS → Gatekeeper with whitelists; man-in-the-middle → HTTPS/TLS.
- **High availability:** the API runs as three identical instances behind a balancer, so losing one doesn't take the service down.
- **JMeter testing:** concurrent logins with a growing user count until the breaking point; for live video, each extra viewer cost 0.7 fps on average.

## Result
A working end-to-end platform where every quality attribute is backed by a scenario and a test, not just by a description of the architecture.
