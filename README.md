# AEP Handler

Extension for previewing and importing .aep files.
Built for .nomedia (LTD)

## Features

[x] - Preview Images (.png)

[x] - onMouseHover() Preview Videos (.mp4)

[TODO] - onMouseDrag() Import .aep files

## Installation

Download this repo as a zip file.

Copy the contents of this zip to a folder under your adobe after effects extensions folder.

## Setup & Usage

Copy your preview content to {this_extensions_folder}/presets/

Launch the extension from the extension menu in adobe after effects.

## Tree Overview

```sh
.
├── css
│   └── styles.css
├── CSXS
│   └── manifest.xml
├── fonts
│   └── Montserrat-Regular.ttf
├── index.html
├── js
│   ├── json2.js
│   ├── libs
│   │   └── CSInterface.js
│   └── main.js
├── jsx
│   ├── aftereffects.jsx
│   └── json2.js
├── presets
└── README.md

7 directories, 10 files
```

## css/styles.css

Stylesheet.
You can adjust the previewContent div frame size & background-color within #previewSection (styles.css:27)

## CSXS/Manifest

Contains all the relevant information to be loaded by adobe after effects.

```sh
com.aep.handler
AEP Handler
```

## index.html

The layout of the extension. You can adjust dimensions here.

## js/main.js

This get's the filenames of preview content and then converts them to .mp4 for mouse hover preview and back to .png when nothing is happening (on mouse unhover).

## Contributions

Nate from NTProductions for the base source code and methodology of previewing images & videos.

Montserrat for their excellent font.
