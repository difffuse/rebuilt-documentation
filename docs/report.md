---
title: Review & Reports
sidebar_label: Review & Reports
---

import DocFigure from '@site/src/components/DocFigure';

A finished process is a starting point for visual review. **Completed** means the workflow finished; it does not mean every quality target passed.

<DocFigure name="report" />

## Review the model

Inspect the silhouette from several angles. Pay attention to the face, hands, narrow gaps, openings and thin details. Switch between the shaded result and wireframe to understand where the geometry is being used.

Use **Show UVs** from the Unwrap section to review the layout, then inspect the baked material for seams, projection errors or missing detail.

## Read the Report panel

Expand **Report** for the available measurements and warnings. Sections appear as their stages produce results, including source analysis, retopology, UVs and baking.

The retopology report helps compare the requested and achieved geometry counts. In this Buddha example, a 10,000-quad request produced 8,362 quads and a count warning. The completed UV layout also retained one single-face island. Those notices are part of reviewing this particular result, not a reason to ignore the visual checks. A thin-detail estimate is a reason to inspect those areas, not proof that they failed.

## Asset summary

The main panel shows the asset name, status, geometry count, budget mode and texture dimensions. After a build, it displays measured results where available.

**Next Build** separates changed settings from the existing result. The progress indicator counts stages that are up to date; it does not predict how many seconds remain.
