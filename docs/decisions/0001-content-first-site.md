# 0001 Content-First Static Site

## Status

Accepted

## Date

2026-03-21

## Context

The original repository mixed several ideas:

- a small app architecture
- duplicated trip data across JSON and database seed files
- live integrations that were not central to the product
- visual design that did not match the desired premium travel-magazine feel

The actual product need is simpler: publish upcoming holiday itineraries for friends in a clean, attractive format.

## Decision

The project will use a content-first static-site approach.

This means:

- Next.js stays as the rendering framework
- trip data lives in local files inside the repository
- the site remains public and read-only
- trips are rendered as static pages
- no database is used in version 1
- no weather integration is used in version 1
- no admin panel or CMS is used in version 1

## Why

This approach:

- keeps the system simple
- makes the content easy to audit
- reduces breakage risk
- matches the real product need
- is easier for future agents and weaker models to work with

## Consequences

### Positive

- one clear source of truth
- faster iteration
- easier maintenance
- fewer moving parts
- easier deployment

### Negative

- content editing is file-based, not browser-based
- future richer features may require schema changes
- more discipline is needed when migrating messy source material

## Follow-Up Rules

- Do not reintroduce a database unless the product truly needs one.
- Do not add new truth sources for trip content.
- If the content schema changes, update code and docs together.
