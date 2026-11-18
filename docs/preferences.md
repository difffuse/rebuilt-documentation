---
title: Preferences
sidebar_label: Preferences
---

import DocFigure from '@site/src/components/DocFigure';

Open **Edit → Preferences → Add-ons**, search for **Rebuilt** and expand its entry.

<DocFigure name="preferences" />

## Bake memory limit

**Bake memory limit (GiB)** checks the estimated memory needed before baking begins.

- **0 — Automatic:** uses 80% of the installed system RAM detected by the operating system.
- **A positive number:** uses the limit you enter, in GiB.

If the estimate exceeds the limit, Rebuilt stops before starting the bake. Lower the texture resolution or select fewer maps, then try again. Raise the limit only when your computer has sufficient capacity.

This is a preflight estimate, not a hard cap on Blender's memory use. It does not measure dedicated GPU memory or the memory available after other applications have taken their share.

## Installation folder

**Open Installation Folder** reveals the installed extension. Normal use does not require editing this folder.

## Save your preferences

If Blender's **Auto-Save Preferences** is disabled, save the preferences after changing the limit or enabling the addon.
