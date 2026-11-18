---
title: Download & Install
sidebar_label: Download & Install
---

import DocFigure from '@site/src/components/DocFigure';

## Before you install

Rebuilt 1.0 requires **Blender 5.2.x**. Download the package that matches both your operating system and processor from your Superhive purchase.

| Package | Computer |
| --- | --- |
| macOS ARM64 | Mac with Apple silicon (M-series) |
| Windows x64 | Windows PC with an x64 processor |

An Apple silicon package will not work on an Intel Mac. Linux and Windows ARM packages are not covered by this release. Use the files actually offered on your purchase page; downloads may become available at different times.

## Install the ZIP

1. Download the matching **Rebuilt extension ZIP**.
2. Drag the ZIP from Finder or File Explorer into the Blender window.
3. Confirm the installation dialog and enable the extension if prompted.
4. In the 3D Viewport, press **N** and open the **Rebuilt** tab.

Keep the ZIP intact for installation. You do not need to copy its contents into Blender's folders.

<DocFigure name="installation" />

### Install from Disk

You can also open **Edit → Preferences → Get Extensions**, open the menu at the top right and choose **Install from Disk**. Select the same ZIP and confirm. After installation, **Preferences → Add-ons** is where you can enable Rebuilt and access its preferences.

:::tip Where is the panel?
The Rebuilt tab belongs to the **3D Viewport sidebar**. It does not appear in every editor. Select a mesh to display the processing controls.
:::

## Updating

A ZIP installed from disk is a local installation. To receive updates through Superhive, follow the repository setup instructions on your purchase receipt, when that product offers extension installation.

Once connected, allow online access in Blender and enable **Check for Updates on Startup** for the repository. Blender can then notify you about compatible updates. Installing an update remains your choice; Rebuilt does not silently replace itself.

Restart Blender after an update so its native components reload. See [Superhive's repository setup guide](https://support.superhivemarket.com/article/335-connecting-superhive-as-a-remote-repository-in-blender) for the current account connection steps.

### Replacing an older classic addon

Save your project, note any custom bake memory setting, remove the old classic Rebuilt installation and restart Blender before installing the extension. Keep only one enabled copy. Scene settings remain in the saved project; you may need to re-enter the addon preference for bake memory.
