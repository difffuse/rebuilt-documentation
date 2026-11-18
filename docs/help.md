---
title: Troubleshooting & Help
sidebar_label: Troubleshooting & Help
---

## Rebuilt does not appear

Confirm the extension is enabled in **Preferences → Add-ons**. Move to the **3D Viewport**, press **N**, and look for the Rebuilt tab. Select a mesh to show its processing controls.

## Rebuild Asset is disabled

Save the `.blend`, switch to **Object Mode**, and select a mesh. Check the message above the controls. Curves and other non-mesh objects need to be converted before they can be processed as meshes.

## The installer reports incompatibility

Check the Blender version and the downloaded platform. Rebuilt 1.0 targets Blender **5.2.x**. A macOS ARM64 package requires Apple silicon; Windows x64 needs an x64 Windows environment. Do not rename a ZIP to make it appear compatible.

## Thin details or openings look wrong

Inspect the source and the retopology report. Consider a higher geometry budget, a more suitable Type, or **Keep Open Edges** for intentional openings. Review the result after each change.

## The bake is refused or textures are missing

Read the error. For a memory estimate failure, lower resolution or select fewer maps. For missing textures, check the source material and image paths. Keep the generated `textures/<asset name>/` folder with the saved project.

## Export is disabled

Select the Rebuilt model and complete its workflow. In Manual, run **Bake Maps** to complete the textured asset. The Export panel explains when processing is still required.

## A build was interrupted

If the saved project contains an interrupted operation, select its source or generated result and use **Recover Interrupted Build** when offered. Read the recovery dialog before confirming: it explains whether it will restore previous work, discard partial output or finish cleanup.

Recovery may restore files on disk and is not a Blender Undo operation. If it reports conflicting textures, missing backups or object ownership issues, keep the recovery data and resolve the conflict. After checking the recovered result, save the `.blend`.

## Support

Use **Help → Discord Channel** or contact Difffuse Studio through the store. Include your Blender version, Rebuilt version, operating system, the stage that failed and the exact error. A screenshot of the relevant settings and report helps reproduce the issue.

- [Difffuse Discord](https://discord.gg/GC4ZzGkvhH)
- [Difffuse Studio on Superhive](https://superhivemarket.com/creators/difffusestudio)
- [Difffuse YouTube](https://www.youtube.com/@difffusestudio)

Some Rebuilt 1.0 packages may show disabled Documentation or Youtube Tutorial buttons until those links are configured. You can access this guide directly in your browser.
