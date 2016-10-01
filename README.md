# electron-flash-gaming-starter

This is a starter project for using a Flash game library with Electron for native desktop packaging.

## installation and usage

* `npm install`
* `npm start` - will compile and launch the local `dev` version of Electron and your js / SWF
* `npm run pack-win32` - will compile everything for the 32-bit windows platform and put it into the `/dist` folder
* `npm run pack-win64` - will compile everything for the 64-bit windows platform and put it into the `/dist` folder

*YMMV, but I had the best results on Windows10 with the 64-bit build*

## FlashPunk 1.7.2

This project is using `FlashPunk v1.7.2`, however feel free to drop in your own preferred Flash library.

## Pepper Flash

Electron makes use of the Chromium browser, and so the Flash bridge is handled via PepperFlash.

Included in this project are the win32 / win64 pepperflash binaries, but if you need to update or 
use a different version.

### Windows (if you need to use a different version)

* http://chromium.woolyss.com/#flash
* download the pepperflash installer for Windows
* After install, the plugin path will be:
  - On a 64-bit #windows:
    `C:\Windows\system32\Macromed\Flash\pepflashplayer64_[version].dll (64-bit version)`
    `C:\Windows\SysWOW64\Macromed\Flash\pepflashplayer32_[version].dll (32-bit version)`
  - On a 32-bit #windows:
    `C:\Windows\system32\Macromed\Flash\pepflashplayer32_[version].dll (32-bit version)`
* copy the needed binary into `/app/plugins/flash/win32` or `/app/plugins/flash/win64`

## license

MIT License

Copyright (c) 2016 Erik Yuzwa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


