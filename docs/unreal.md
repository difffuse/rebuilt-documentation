---
title: Unreal
sidebar_label: Unreal
---

import DocFigure from '@site/src/components/DocFigure';

## Export from Rebuilt

1. Select the completed model and open **Export**.
2. Set **Engine** to **Unreal**. Format displays **glTF (.glb)**.
3. Click **Export** and choose a destination folder.

<DocFigure name="unreal" />

## Import into Unreal

1. Open the exported model folder and locate its `.glb` file.
2. Drag the GLB into Unreal's **Content Browser**.
3. Keep material and texture import enabled, then click **Import**.
4. Drag the imported Static Mesh into the level.

The GLB contains the model, materials and textures. The native importer assigns them; no Python setup or additional import script is required. Keep the actor scale at **1** initially, because the export already accounts for scene units.

This workflow uses Unreal's native GLB / Interchange support. If your project has disabled its importer plugins, restore the relevant importer before importing.

## Normals and materials

The exported GLB uses OpenGL normal conventions. Do not pre-flip its normal texture for this workflow; Unreal's glTF importer handles the conversion.

The delivery prepares Base Color and AO together and carries metallic/roughness information. Arbitrary Blender node graphs and all advanced material effects cannot be reproduced universally. Check the result under your project's lighting.

For engine-specific options, see [Unreal’s glTF documentation](https://dev.epicgames.com/documentation/en-us/unreal-engine/gltf-file-format-support-in-unreal-engine).
