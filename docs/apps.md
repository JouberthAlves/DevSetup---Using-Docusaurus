---
sidebar_position: 5
---

# Apps to download

Everything here installs with **winget**, the package manager that ships with Windows 11. One command per app, no installer wizards, and the same list works after every reinstall.

## 1. Check winget

Open **Windows Terminal** and run:

```powershell
winget --version
winget source update
```

If `winget` is missing, install **App Installer** from the Microsoft Store and reopen the terminal.

Useful commands:

```powershell
winget search <name>        # find a package id
winget list                 # what is installed
winget upgrade              # what has an update
winget upgrade --all        # update everything
```

## 2. The core set

These are the apps the rest of the guide depends on.

| App | What it is for | winget id |
| --- | --- | --- |
| [Brave](https://brave.com) | Browser, replaces Edge | `Brave.Brave` |
| [Git](https://git-scm.com) | Version control and Git Bash | `Git.Git` |
| [nvm-windows](https://github.com/coreybutler/nvm-windows) | Node version manager | `CoreyButler.NVMforWindows` |
| [VS Code](https://code.visualstudio.com) | Editor | `Microsoft.VisualStudioCode` |
| [Windows Terminal](https://aka.ms/terminal) | Terminal | `Microsoft.WindowsTerminal` |
| [Claude](https://claude.ai/download) | Claude desktop app | `Anthropic.Claude` |
| [Claude Code](https://code.claude.com) | Claude in the terminal | `Anthropic.ClaudeCode` |
| [Obsidian](https://obsidian.md) | Notes | `Obsidian.Obsidian` |

Install them in one go:

```powershell
winget install --id Brave.Brave -e
winget install --id Git.Git -e
winget install --id CoreyButler.NVMforWindows -e
winget install --id Microsoft.VisualStudioCode -e
winget install --id Microsoft.WindowsTerminal -e
winget install --id Anthropic.Claude -e
winget install --id Anthropic.ClaudeCode -e
winget install --id Obsidian.Obsidian -e
```

:::tip Install nvm-windows, not Node
Do not `winget install` Node itself. [Git & Node](./git-node.md) uses nvm-windows so you can switch versions. Close and reopen the terminal after the install so `nvm` is on the `PATH`.
:::

## 3. Fonts

The editor uses **JetBrains Mono** with **Fira Code** as the fallback. Neither has a reliable winget package, so download and install them by hand:

1. [JetBrains Mono](https://www.jetbrains.com/lp/mono/): download the zip, open `fonts/ttf`, select all files, right-click → **Install for all users**
2. [Fira Code](https://github.com/tonsky/FiraCode/releases): same steps with the `ttf` folder

Restart VS Code after installing fonts so it sees them.

## 4. Tools I add when I need them

Pick from this list. None of it is required for the docs site.

| App | Why | winget id |
| --- | --- | --- |
| 7-Zip | Archives | `7zip.7zip` |
| PowerToys | Window layouts, quick launcher | `Microsoft.PowerToys` |
| FFmpeg | Audio and video conversion | `Gyan.FFmpeg` |
| Python 3.13 | Scripts and tooling | `Python.Python.3.13` |
| VLC | Plays anything | `VideoLAN.VLC` |
| OBS Studio | Screen recording | `OBSProject.OBSStudio` |
| Blender | 3D and video | `BlenderFoundation.Blender` |
| TranslucentTB | Transparent taskbar | `CharlesMilette.TranslucentTB` |
| Discord | Chat | `Discord.Discord` |

### Hardware and health checks

Useful right after a fresh install to confirm the machine is sane.

| App | Why | winget id |
| --- | --- | --- |
| CPU-Z | CPU, RAM and board details | `CPUID.CPU-Z.MSI` |
| HWiNFO | Sensors and temperatures | `REALiX.HWiNFO` |
| CrystalDiskInfo | Drive health | `CrystalDewWorld.CrystalDiskInfo` |
| CrystalDiskMark | Drive speed | `CrystalDewWorld.CrystalDiskMark` |

## 5. One script for everything

Save as `install-apps.ps1` and run it from an **administrator** PowerShell:

```powershell
$apps = @(
  "Brave.Brave",
  "Git.Git",
  "CoreyButler.NVMforWindows",
  "Microsoft.VisualStudioCode",
  "Microsoft.WindowsTerminal",
  "Anthropic.Claude",
  "Anthropic.ClaudeCode",
  "Obsidian.Obsidian",
  "7zip.7zip",
  "Microsoft.PowerToys"
)

foreach ($app in $apps) {
  winget install --id $app -e --accept-package-agreements --accept-source-agreements
}
```

If PowerShell blocks the script:

```powershell
powershell -ExecutionPolicy Bypass -File .\install-apps.ps1
```

Add or remove lines from `$apps` to match your machine.

## 6. Export and replay a list

`winget` can write what is installed and install it again on a new machine:

```powershell
winget export -o apps.json
winget import -i apps.json --accept-package-agreements --accept-source-agreements
```

Keep `apps.json` in a private repo. It lists everything on the machine, including apps you may prefer not to publish.

## Done when

- [ ] `winget --version` prints a version
- [ ] Brave, Git, VS Code, Windows Terminal, Claude and Obsidian open
- [ ] `nvm version` prints a version in a fresh terminal
- [ ] JetBrains Mono is in the Windows font list

Next: [Git & Node](./git-node.md).
