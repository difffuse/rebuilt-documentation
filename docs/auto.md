---
title: Auto Workflow
sidebar_label: Auto Workflow
---

import DocFigure from '@site/src/components/DocFigure';

Auto is the shortest route from a selected mesh to a complete asset.

<DocFigure name="overview" />

## Model Settings

| Control | What it does |
| --- | --- |
| Type | Organic suits scans and curved forms; Hard Surface suits manufactured shapes. Your explicit choice overrides detection. |
| Topology | Quads builds predominantly four-sided faces; Triangles uses triangle reduction. |
| Quads / Triangles | Sets the geometry budget for the next build. |
| Strict | Aims to keep the finished quad count close to the target. |
| Dynamic | Uses the count as a starting budget and may increase it to preserve detail. |

Strict aims within 1% of the target using a bounded correction process. Dynamic aims for the starting budget or higher, up to four times it. These are goals, not guaranteed counts. Read the achieved count and review any warnings.

## Texture Output

Choose the texture **Resolution**, **Format** and the options available for that format. These settings affect newly baked textures; they do not convert an existing bake on their own. See [Bake Maps](bake.md) for formats and channel behavior.

## Rebuild Asset and Rebuild All

**Rebuild Asset** runs the workflow with the current settings. Rebuilt tracks which stages are up to date. After completion, **Rebuild All** forces the complete process to run again.

If you change settings after a build, the summary separates the last result from **Next Build**. The displayed settings do not mean the existing mesh or textures have already been regenerated.

## Cancel a build

Press **Esc** to request cancellation. Some native operations must finish before Blender can handle the request, so keep Blender open until cleanup completes.

An Auto attempt cancelled before completion restores the previous completed result. If it was the first build, its partial work is removed. Your source and settings remain available for another attempt.
