---
title: Unity
sidebar_label: Unity
---

import DocFigure from '@site/src/components/DocFigure';

## Export from Rebuilt

1. Select the completed model and expand **Export**.
2. Set **Engine** to **Unity**.
3. Choose **URP**, **Built-in** or **HDRP** to match your Unity project.
4. Click **Export** and choose a destination folder.

<DocFigure name="unity" />

## Import into Unity

Copy the **complete model folder** into the Unity project's **Assets** directory, including its `.meta` files. Once Unity has imported it, drag the FBX into the scene.

The delivery includes the native material, referenced textures and import settings. You do not need to extract materials or wire the maps manually. The output is a folder, not a `.unitypackage`.

## Render pipeline

Match the destination project's render pipeline before export. If materials appear pink, check that the required pipeline is installed and active, then export with the matching choice.

Rebuilt prepares metallic, occlusion and smoothness data for the chosen native shader. Unity applies AO through its occlusion input, rather than adding a second copy of Blender's preview multiplication.

## Updating the asset

Re-export to the same destination and replace the corresponding folder in Unity, keeping its metadata. Rebuilt preserves the model and material identities for reimport. Keep custom material variants separate from the generated material.

Native shader capabilities vary: Built-in Standard does not provide Blender's coat or subsurface model, and advanced Principled effects may not have a direct equivalent in URP or HDRP.
