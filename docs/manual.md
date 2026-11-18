---
title: Manual Workflow
sidebar_label: Manual Workflow
---

import DocFigure from '@site/src/components/DocFigure';

Manual separates the process into four stages. Each stage has an expandable header for its settings and a run button on the right.

<DocFigure name="manual" />

## Run the stages in order

1. **[Retopologise](retopology.md):** build and inspect the low mesh.
2. **[Seams](seams.md):** generate and edit the cuts.
3. **[Unwrap](unwrap.md):** unfold and pack the UV islands.
4. **[Bake Maps](bake.md):** transfer surface detail, check quality and complete the asset.

A checkmark marks a completed stage. Its action changes to a redo control. Successful stages collapse their options; click the header to reopen them.

## Redo only what you need

Change a stage's settings and run it again. Changes upstream can make later stages out of date: new retopology needs new seams and UVs, and a changed UV layout needs a fresh bake.

If a Manual stage fails, earlier completed stages remain available. Read the error and correct its cause before repeating the operation.

## Finish Here

**Finish Here** is available at intermediate stages. It keeps the current result and removes Rebuilt's owned preparation. You can resume later; unchanged upstream settings allow preparation to be restored without replacing the low mesh.

Use **Bake Maps** when you want the full textured asset. It completes the workflow without a separate finish action.

## Use your own work

The secondary **Use Existing Seams** and **Use Existing UVs** controls are inside their expanded stage sections. They accept edits on the generated low mesh. See [Existing Seams & UVs](existing-uvs.md) before using them.
