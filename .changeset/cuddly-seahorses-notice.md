---
'@sebgroup/green-core': patch
---

FAB was missing from the index.ts export, meaning you have to import FAB from a subfolder, causing two import lines from green-core.
