# electron-flash-gaming-starter

this is a starter project for using Starling+Flash with Electron for native desktop packaging.

## installation

* `npm install`

## Gamua Starling

This project is using `Starling v2.1`, however feel free to drop in your own preferred Flash library.

## Pepper Flash

Electron makes use of the Chromium browser, and so the Flash bridge is handled via PepperFlash.

Included in this project are the win32 / win64 pepperflash binaries, but if you need to update or 
use a different version

### Windows 

* http://chromium.woolyss.com/#flash
* download the pepperflash installer for Windows
* After install, the plugin path will be:
  - On a 64-bit #windows:
    `C:\Windows\system32\Macromed\Flash\pepflashplayer64_[version].dll (64-bit version)`
    `C:\Windows\SysWOW64\Macromed\Flash\pepflashplayer32_[version].dll (32-bit version)`
  - On a 32-bit #windows:
    `C:\Windows\system32\Macromed\Flash\pepflashplayer32_[version].dll (32-bit version)`
* copy the needed binary into `/app/plugins/flash/win32` or `/app/plugins/flash/win64`
