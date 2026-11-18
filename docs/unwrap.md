---
title: Unwrap
sidebar_label: Unwrap
---

import DocFigure from '@site/src/components/DocFigure';

Unwrap unfolds the cut mesh and packs the islands into a single texture tile.

<DocFigure name="unwrap" />

## Unwrap settings

| Control | What it changes |
| --- | --- |
| Method | Angle Based, Conformal or Minimum Stretch controls how the surface is flattened. |
| Packer | UVPack is the bundled packer; Blender selects Blender's own packer. |
| Pack Search | Time UVPack may spend improving the layout. More time is not a guarantee of a better fit. |
| Packing | With the Blender packer, choose Exact Shape, Convex Hull or Bounding Box. |
| Rotation | Allow Any Angle, 90° Steps or Axis Aligned packing. |
| Padding | Empty space around islands, in pixels, to reduce texture bleeding. |

**Angle Based** is a useful starting point for organic forms. **Conformal** is another angle-preserving method. **Minimum Stretch** distributes distortion differently; compare the result on your model.

## Review the UVs

Run **Unwrap**, reopen its section and click **Show UVs**. Rebuilt opens or reuses a UV Editor. Inspect island spacing and use the UV Grid preview to check distortion.

Look for squeezed details, overlapping islands and uneven checker sizes. A good layout for one asset may not suit another; use the preview as well as the report.

## Pinned UVs

Pins on the working low mesh constrain their coordinates during Unwrap. Islands containing pins are held in place during packing. If fixed islands violate the tile border or spacing, the operation can fail rather than moving the pins.

Pins do not freeze every unpinned corner of an island. To keep the entire layout unchanged, use [Use Existing UVs](existing-uvs.md).

Rebuilt's baking workflow uses **one 0–1 tile**. UDIM layouts are not supported.
