# vscode-color-picker README

A simple Color picker for vscode that lets you use vscode's css color picker in other documents

![color-picker-preview](https://i.imgur.com/dG1tnN3.png, "color-picker-preview")

* To make it work for your preferred language, just add a `vscode-color-picker.languages` entry in settings.json, with VSCode's identifier string for the language, in the list. For ex.
  ```json
    "vscode-color-picker.languages": [
        "python",
        "javascript",
        "typescript"
    ],
    ...
  ```
 and then make sure to reload the window for the service to be intialized properly.
 
## Frequently Asked Questions

### How do i stop it from running in languages i don't want it in?

Just remove the language entry from `vscode-color-picker.languages` in settings.json.

### What are the languages i can add to the extension?

A list of VSCode's language identefiers is avaialable [here](https://code.visualstudio.com/docs/languages/identifiers).

### What types of strings are recognized colors?

The currently supported formats are Hsl, Rgb, Hsla, Rgba and Hex.
Format for Rgb: `rgb(<int[0-255]>, <int[0-255]>, <int[0-255]>)`
Example of Rgb format: `rgb(0, 255, 255)`

Format for Rgba: `rgba(<int[0-255]>, <int[0-255]>, <int[0-255]>, <float[0-1]>)`
Example of Rgba format: `rgb(0, 255, 255, 0.5)`

Format for Hsl: `hsl(<int[0-360]>, <int[0-100]>%, <int[0-100]>%)`
Example of Hsl format: `hsl(180, 100%, 50%)`

Format for Hsla: `hsl(<int[0-360]>, <int[0-100]>%, <int[0-100]>%, <float[0-1]>)`
Example of Hsla format: `hsl(180, 100%, 50%, 0.5)`

Format for Hex: `#<hex-code>`
Example of Hex format: `#00ffff`

Format for Hexa: `#<hexa-code>`
Example of Hexa format: `#00ffff77`

 
