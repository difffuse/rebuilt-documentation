---
title: Seams
sidebar_label: Seams
---

import DocFigure from '@site/src/components/DocFigure';

Seams define where the surface is cut into UV islands. After retopology, expand **Seams** and run it.

<DocFigure name="seams" />

## Balanced or Fewer

**Balanced** uses the standard generated seam layout. **Fewer** also tries to join suitable adjacent generated islands while preserving their internal shape. It is a preference, not a promise of a fixed island count, and may take longer.

To apply a change, click **Recalculate Seams**, then run **Unwrap**. Auto uses Balanced.

## Edit the cuts

1. Select the generated low mesh and enter **Edit Mode**.
2. Use edge selection to choose the cuts.
3. Use **Edge → Mark Seam** or **Clear Seam**.
4. Return to Rebuilt and continue with Unwrap, or accept your cuts with **Use Existing Seams**.

## Keep Marked Seams

Enable this before recalculating if you want Rebuilt to preserve the currently marked cuts while generating the rest.

It keeps **all** marked seams on the low mesh, including those from earlier generated proposals. Clear unwanted marks first. It does not transfer seams from the high-poly source through retopology, and it does not preserve UV coordinates.

If an **Other** button appears, genuine stored seam alternatives are available. Its absence is normal.

:::note After changing seams
Run Unwrap again and re-bake any textures that used the previous UV layout.
:::
