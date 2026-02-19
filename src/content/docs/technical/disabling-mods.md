---
title: Disabling Mods
description: Disabling mods while running under Kilt.
tableOfContents: false
---

Sometimes, you might be running into problems running certain mods under Kilt, and need to disable a mod and prevent it from being loaded by Kilt.

To start with, go to your `config` folder and make a file called `kilt_overrides.json`, and format it like so:

```json
{
    "force_disabled_mods": []
}
```

and then to disable mods, append to the array with the specific Mod ID, like so

```json
{
    "force_disabled_mods": ["some_rogue_mod_here"]
}
```

and since it's an array, multiple mods can be added to the array

```json
{
    "force_disabled_mods": ["some_rogue_mod_here", "another_rogue_mod_here", "generic_modname_library"]
}
```