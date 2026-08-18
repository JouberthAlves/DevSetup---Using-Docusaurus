---
sidebar_position: 1
---

# Windows Configuration


This is how I clean a fresh Windows 11 install: strip bundled AI, Xbox, preinstalled games, and Microsoft Edge, then keep only what I need to code.

caution Restore point first
Create a restore point before AppBuster runs. Removing system apps can break the Store, widgets, or Windows Update. This is **my** recipe, not a “select all” script.

warning Edge on Windows 11
Windows often **reinstalls Edge** after an update. Uninstalling the Edge **browser** is fine for this setup; leave **WebView2** installed — other apps (including VS Code/Cursor) depend on it.

## 1. Before you start
- Windows 11, fully updated (**Settings → Windows Update**)
- Search **Create a restore point** → **Create**
- Download [O&O AppBuster](https://www.oo-software.com/en/ooappbuster) from the official site only
- Run it **as administrator**
## 2. O&O AppBuster
1. Open AppBuster
2. Use the list of installed / provisioned apps (not only “what you see in Start”)
3. Remove the groups below — one group at a time, then reboot if AppBuster asks
4. After each reboot, open AppBuster again and confirm they are gone
### AI / Copilot
Uninstall anything named like:
- Copilot
- Microsoft Copilot
- Windows Copilot
- Chat / Bing Chat (if listed as an app)
- Microsoft 365 Copilot (if it came preinstalled)
Then in Windows:
1. Right-click the **taskbar** → **Taskbar settings**
2. Turn off **Copilot** (and **Widgets** if you do not want news/weather)
Optional check in PowerShell:
```powershell
Get-AppxPackage *Copilot*
Get-AppxPackage *Bing*
Empty output means those packages are gone.
```
Xbox
Uninstall:

Xbox
Xbox Console Companion
Xbox Game Bar / Overlay
Xbox Identity Provider (only if AppBuster still lists related Xbox apps you do not use)
Xbox Live / Gaming Services (skip if a game you kept needs it)
Preinstalled games
Typical names on Windows 11:

Solitaire & Casual Games
Microsoft Solitaire Collection
Candy Crush (and other Store games)
Mixed Reality Portal (if present and unused)
Microsoft Edge
In AppBuster, uninstall Microsoft Edge (the browser).

Keep:

Microsoft Edge WebView2 Runtime
If Edge comes back after Windows Update, run AppBuster again or ignore the stub — the goal is that it is not your daily browser.

## 3. Privacy pass (Settings)
Settings → Privacy & security

Diagnostics: Required only
Activity history: off
Unused permissions (camera, location, microphone): off except for apps you use
Settings → Personalization → Taskbar

Widgets: off
Chat / Copilot: off
Settings → Apps → Startup

Disable anything you do not need at boot

## 4. What I keep
Windows Terminal

Microsoft Store (so remaining apps can still update)

WebView2 Runtime

Calculator / Notepad 

My own browser Brave 