---
title: Export
sidebar_label: Export
---

import DocFigure from '@site/src/components/DocFigure';

Complete the model workflow, select the finished asset and expand **Export**.

<DocFigure name="export" />

## Choose a destination

| Engine | Delivery | Import guide |
| --- | --- | --- |
| Unity | FBX, native material, textures and metadata in one model folder | [Unity](unity.md) |
| Unreal | Self-contained GLB in a model folder | [Unreal](unreal.md) |
| Godot | Self-contained GLB in a model folder | [Godot](godot.md) |

The **Format** row displays the format Rebuilt will write. It is a read-only label because each destination currently has one format.

Click **Export** and choose a parent destination folder. Rebuilt creates a folder named after the asset. Each export also includes a short import guide.

## Re-exporting

You can choose another destination or render pipeline without rebuilding the mesh. Re-exporting updates the generated delivery; keep any material variations you create in the destination application in separate files.

Keep the completed asset's required texture connections intact. Renaming an image is different from disconnecting or removing it; missing required maps can prevent export.

## Other destinations

Use Blender's standard **File → Export** menu when you need a format outside these three presets.

Materials can look different across applications because lighting, exposure, tone mapping and shader features differ. Automatic material assignment does not guarantee identical rendering.
