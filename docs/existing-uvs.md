---
title: Existing Seams & UVs
sidebar_label: Existing Seams & UVs
---

import DocFigure from '@site/src/components/DocFigure';

Use these controls when you want to keep work you have edited yourself or made with another UV tool.

## Use Existing Seams

Edit the seams on Rebuilt's generated low mesh, expand **Seams**, then click **Use Existing Seams** at the bottom. This accepts your cuts so you can continue with Rebuilt's Unwrap.

## Use Existing UVs

1. Keep working on the generated low mesh belonging to the Rebuilt asset.
2. Create or edit its UV map with your preferred tools.
3. Make the intended UV layer active.
4. Expand **Unwrap** and click **Use Existing UVs**.
5. Continue directly to **Bake Maps**.

<DocFigure name="existing" />

Acceptance does not move or repack the UVs. The accepted active layer becomes the render UV layer, while other layers remain available.

## Layout requirements

Use a valid layout inside the **0–1 tile**. Empty, invalid, fully collapsed or out-of-tile layouts are rejected. Partial collapses and overlaps can produce warnings without automatic repair.

Changing texture or packer settings does not regenerate an accepted external layout. Explicitly running Seams or Unwrap again can replace it, as can rebuilding the retopology.

## After edits

If you change UV coordinates or the selected layer, re-bake the maps before exporting. Previously baked textures describe the old layout.
