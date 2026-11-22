---
sidebar_position: 3
---

# Activate Windows

Activation proves your copy of Windows is genuine. Without it Windows still runs, but personalisation is locked and a watermark appears.

:::note Genuine licences only
This guide covers activation with a licence you own: a digital licence tied to your Microsoft account, a retail key, or the OEM key embedded in the motherboard. It does not cover cracks or third-party activators. They are unlicensed software, they are a malware risk, and they can break updates.
:::

## Edition: Windows 11 Pro

This setup uses **Pro**. A Pro licence activates Pro only, so the edition chosen at install must match the key. If you installed Home by mistake, **Settings → System → Activation → Upgrade your edition** switches to Pro with a Pro key, without a reinstall.

## 1. See the current state

**Settings → System → Activation** shows the status: **Active** or **Not active**.

From a terminal:

```powershell
slmgr /xpr
slmgr /dli
```

- `/xpr` shows whether activation is permanent or when it expires
- `/dli` shows the edition, the licence channel (Retail, OEM, Volume) and the last five characters of the key

## 2. Which case are you in?

| Situation | What to do |
| --- | --- |
| **Same PC as before** (Windows was already activated on this hardware) | Reinstall and connect to the internet. It activates by itself. Choose **I don't have a product key** during setup |
| **Your licence is linked to your Microsoft account** | Sign in with that account. Then **Settings → System → Activation → Troubleshoot** if it does not pick it up |
| **New retail or OEM key** | Enter it in Settings, or with the commands below |
| **Changed the motherboard** | **Activation → Troubleshoot → I changed hardware on this device recently**, signed in with the same account |
| **No licence yet** | Buy one from Microsoft or an authorised reseller |

## 3. Enter a key

In **Settings → System → Activation → Change product key**, or from an **administrator** terminal:

```powershell
slmgr /ipk XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
slmgr /ato
```

- `/ipk` installs the key
- `/ato` asks Microsoft to activate it online

Replace the `X` groups with your own key. Never paste a real key into a public repo or screenshot.

## 4. Read the OEM key from firmware (optional)

Many laptops store the Windows key in the UEFI firmware. To read it:

```powershell
(Get-CimInstance -ClassName SoftwareLicensingService).OA3xOriginalProductKey
```

An empty line means the machine has no embedded key. That is normal for custom-built desktops.

## 5. Link the licence to your account

After activating, confirm the licence is attached to your Microsoft account:

**Settings → System → Activation** should say *Windows is activated with a digital license linked to your Microsoft account*.

That link is what lets you reinstall later with no key at all.

## 6. Troubleshooting

| Error | Usual cause |
| --- | --- |
| `0xC004F050` | The key is not valid for this edition. Check Home vs Pro |
| `0xC004C003` | The key was blocked or is a fake. Contact the seller |
| `0x8007007B` or `0xC004F074` | Volume key with no reachable activation server. Not meant for home use |
| `0xC004F211` | Hardware changed. Use the **I changed hardware** troubleshooter |
| `0x803F7001` | No valid licence found on this device |

If a retail key is rejected, call Microsoft's activation support from the same page.

## Done when

- [ ] **Settings → System → Activation** says **Active**
- [ ] The text mentions a digital licence linked to your Microsoft account
- [ ] `slmgr /xpr` says the machine is permanently activated

Next: [Clean Windows](./windows-cleanup.md).
