---
title: How does Kilt work?
description: An overview of how Kilt works.
---

This basically recreates Forge Mod Loader in a way that functions with Fabric Loader, with some of its own changes to hopefully improve on its performance, and bridging together Forge APIs with Fabric-native APIs for the sake of compatibility. Additionally, the entire Forge API is already bundled within Kilt, it just relies on the patch re-implementations (known as "injects" in Kilt's codebase) to be created first in mixin form, which is what takes the longest and is the most difficult process due to the sheer number of patches Neo/Forge has.