---
title: Bake Maps
sidebar_label: Bake Maps
---

import DocFigure from '@site/src/components/DocFigure';

Bake Maps transfers the source surface onto the low mesh. It also runs quality checks and completes the asset.

<DocFigure name="bake" />

## Select the maps

**Normal**, **Base Color** and **Ambient Occlusion** form the initial set. Source analysis can suggest other channels; your explicit checkbox selections take precedence.

| Map | Purpose |
| --- | --- |
| Normal | Fine surface detail on the low mesh. Tangent space is the usual choice for game engines. |
| Base Color | Surface color without the scene lighting. |
| Ambient Occlusion | Local occlusion around creases and contact areas. |
| Roughness | Variation between rough and smooth surface areas. |
| Metallic | Metal versus dielectric surface regions. |
| Opacity | Alpha for transparent or cut-out areas. |

Expand **Material Channels** for Specular, Specular Tint, IOR, Emission, Emission Strength, Transmission, Coat, Coat Roughness, Subsurface and Subsurface Scale.

Common constant material values can transfer directly without needing a separate image. If no maps are selected, the interface explains that Normal will be baked.

## Resolution and quality

Set **Resolution** to the texture size you need. Higher values require more memory and processing time. **Normal Space** chooses Tangent or Object space. **AO Samples** affects ambient occlusion sampling, not the quality of every map.

## Texture Output

| Format | Options and behavior |
| --- | --- |
| PNG | Lossless, 8-bit or 16-bit, adjustable compression. |
| TIFF | 8-bit or 16-bit, None / Deflate / LZW compression. |
| OpenEXR | 16-bit or 32-bit float, ZIP / PIZ / None compression. |
| JPEG | Quality 1–100 for eligible color maps; lower quality reduces size with visible loss. |

JPEG does not make every map lossy: data maps such as Normal and Opacity remain lossless PNG16. HDR values use OpenEXR when required. Changing the format applies to the next bake, not to existing images.

## Where the textures go

With a saved project, Rebuilt writes new maps to `textures/<asset name>/` beside the `.blend`. Keep that folder with your project when moving it to another computer.

Rebuilt's Blender material combines Base Color and AO for preview while keeping the maps separate for export. Before baking, make sure the source images are available and its material displays correctly.

If the bake memory estimate is too high, lower the resolution or reduce the map selection. See [Preferences](preferences.md).
