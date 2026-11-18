---
title: Godot
sidebar_label: Godot
---

import DocFigure from '@site/src/components/DocFigure';

## Export from Rebuilt

1. Select the completed model and open **Export**.
2. Set **Engine** to **Godot**. Format displays **glTF (.glb)**.
3. Click **Export** and choose a destination folder.

<DocFigure name="godot" />

## Import into Godot

Copy the exported `.glb` into your Godot project folder. Godot imports it automatically. Drag the imported scene from the **FileSystem** dock into your scene.

The GLB contains the model, materials and textures, so you do not need a separate folder of loose texture files to resolve its references. Start with the instance scale at **1**.

## About this preset

Godot is a separate export destination. In Rebuilt 1.0 it uses the same self-contained GLB preparation as the Unreal option. This keeps the workflow independent so the Godot preset can evolve in future versions.

Lighting, exposure, tone mapping and supported shader extensions affect the final appearance. Review the material inside your Godot project after import.

For engine-specific options, see [Godot’s 3D import documentation](https://docs.godotengine.org/en/stable/tutorials/assets_pipeline/importing_3d_scenes/available_formats.html).
