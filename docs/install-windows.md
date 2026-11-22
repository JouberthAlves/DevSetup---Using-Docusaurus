---
sidebar_position: 2
---

# Install Windows 11

A clean install from a USB drive. This takes about 30 minutes, plus driver downloads.

:::danger This erases the system drive
Back up documents, browser profiles, game saves, SSH keys (`~/.ssh`) and your Obsidian vault first. Anything on the drive you install to is wiped.
:::

## 1. Check the machine

- 64-bit CPU, **4 GB RAM** or more, **64 GB** of storage or more
- **UEFI** with **Secure Boot** and **TPM 2.0** (Windows 11 requires them)
- Note your Wi-Fi password and keep a phone or second PC handy

Check TPM and Secure Boot from the current Windows:

```powershell
Get-Tpm
Confirm-SecureBootUEFI
```

`TpmPresent : True` and `True` mean you are fine. If either is off, enable it in the BIOS/UEFI (often called *fTPM*, *PTT* or *Secure Boot*).

## 2. Download Windows and make the USB

1. Go to the official page: [microsoft.com/software-download/windows11](https://www.microsoft.com/software-download/windows11)
2. Use **Create Windows 11 installation media** (Media Creation Tool) to build the USB, or download the **ISO** and write it with [Rufus](https://rufus.ie)
3. Pick your language. The download is one multi-edition image; you choose the edition during setup. This guide uses **Windows 11 Pro**

Use only the Microsoft download. An ISO from anywhere else is not something to trust with your whole machine.

## 3. Boot from the USB

1. Plug the USB in and restart
2. Open the one-time boot menu. The key depends on the maker: `F12`, `F11`, `F8`, `Esc` or `Del`
3. Choose the USB drive (the **UEFI** entry)

## 4. Run the installer

1. Language and keyboard, then **Install now**
2. **I don't have a product key** is fine. Windows activates later from your account or a key ([Activate Windows](./activate-windows.md))
3. Pick **Windows 11 Pro**. The edition must match the licence you own (a Home key will not activate Pro)
4. Choose **Custom: Install Windows only (advanced)**
5. Delete the old partitions on the drive you are installing to, select the single **Unallocated Space** and click **Next**. Windows creates what it needs

Reboot when asked and **remove the USB** once the first restart begins.

## 5. First-run setup (OOBE)

- Region and keyboard layout
- Connect to the network
- Sign in with your **Microsoft account** so the digital licence can attach to it
- Say **No** or decline the optional extras: Copilot, OneDrive backup, Xbox, Edge sync and ad personalisation
- Privacy toggles: turn everything optional **off**

:::tip Local account instead
If you prefer a local account on a build that forces a Microsoft account, press `Shift + F10` on the network screen and run `start ms-cxh:localonly`. Microsoft changes this between builds, so treat it as a hint, not a promise.
:::

## 6. Updates and drivers

1. **Settings → Windows Update → Check for updates**. Repeat until it says you are up to date. Reboot as needed
2. Open **Settings → Windows Update → Advanced options → Optional updates** and install driver updates
3. Install the vendor drivers you actually need:
   - **GPU**: NVIDIA, AMD or Intel, from the maker's site
   - **Chipset** and **LAN/Wi-Fi**: from the motherboard or laptop maker's support page
4. Reboot once more

Confirm nothing is missing in Device Manager:

```powershell
Get-PnpDevice -PresentOnly | Where-Object Status -ne "OK"
```

Empty output means every device is healthy.

## 7. Name the PC and set the clock

```powershell
Rename-Computer -NewName "MY-PC" -Restart
```

Check **Settings → Time & language** for the right time zone.

## Done when

- [ ] Windows boots from the SSD without the USB
- [ ] Windows Update says you are up to date
- [ ] GPU and network drivers are installed
- [ ] Device Manager shows no warnings

Next: [Activate Windows](./activate-windows.md).
