---
title: Retopologise
sidebar_label: Retopologise
---

import DocFigure from '@site/src/components/DocFigure';

Retopology builds a lighter mesh from your source. In Manual, expand **Retopologise**, set the geometry options and run the stage.

<DocFigure name="retopology" />

## Type, topology and count

Choose a **Type** that fits the model, then **Quads** or **Triangles**. Enter the target count. With quads, **Strict** aims close to that count; **Dynamic** allows more geometry for detail. Always check the achieved count after the run.

A lower count reduces complexity but may lose fine features. Increase it when the silhouette, facial details, fingers, folds or thin parts are no longer represented adequately.

## Quad engines

**AutoRemesher** is the default engine. **QuadriFlow (Blender)** is also available from the Engine menu. Rebuilt may use QuadriFlow as a recovery path when the native engine does not produce a usable surface.

## Shape controls

| Control | Use |
| --- | --- |
| Adaptive Size | Allows smaller quads around curved detail and larger quads on flatter areas. |
| Adaptive Shape | Allows quads to elongate along ridges and tube-like forms with AutoRemesher. |
| Cloth Folds | Guides rows along folds on open cloth surfaces. Disable it for open mechanical shells when it does not suit the model. |
| Keep Open Edges | Preserves intended openings, such as the open underside of a scan. |

Some controls are disabled when the selected engine or topology does not use them. Cloth Folds is enabled automatically in Auto and is adjustable in Manual.

## Inspect the result

Review the wireframe and silhouette before proceeding. Check openings, narrow gaps and small disconnected pieces. A higher count alone does not fix every source problem.

Expand **Report → Retopology** to see the achieved count and warnings. If the mesh is suitable, continue to [Seams](seams.md).
