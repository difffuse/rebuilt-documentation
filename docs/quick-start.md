---
title: Your First Asset
sidebar_label: Your First Asset
---

import DocFigure from '@site/src/components/DocFigure';

## 1. Prepare the source

Open or import your model. Check that its materials and textures display correctly, then save the `.blend` in a writable project folder. Rebuilt writes baked maps beside that file.

In **Object Mode**, select the mesh you want to process. If several objects are selected, Rebuilt processes the **active mesh**, whose name appears in its panel.

## 2. Open Rebuilt

Move the pointer over the 3D Viewport, press **N**, and select the **Rebuilt** tab. Choose **Auto**.

<DocFigure name="overview" />

## 3. Set the result

Expand **Model Settings** and choose **Organic** or **Hard Surface**. Set **Topology** to Quads or Triangles, then enter a target count. For quads, choose **Strict** or **Dynamic**.

Expand **Texture Output** and choose a resolution and image format. Start with a modest resolution while evaluating the result; increase it for the final bake when needed.

The Buddha example uses Organic, Quads and a 10,000-quad starting setting. These are example settings, not a required preset for every model.

## 4. Rebuild

Click **Rebuild Asset**. Rebuilt prepares a working copy, builds the mesh, creates seams and UVs, bakes the maps and completes the asset. Your source mesh is preserved.

Wait for **Completed** in the asset summary. Processing time depends on the model, settings and hardware; the steps indicator is not a time estimate.

## 5. Review and export

Inspect the silhouette, thin details, UV layout and material. Expand **Report** if anything needs checking. A completed build can still contain warnings.

Open **Export**, choose your engine and click **Export**. Follow the [engine-specific steps](export.md) to import the result.

:::tip Want more control?
Switch to [Manual](manual.md) to review the low mesh before unwrapping, edit the cuts or redo only the bake.
:::
