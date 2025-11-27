# Image Tune Plus — Advanced Image Styling Tune for Editor.js

Tool for the [Editor.js](https://editorjs.io).

This plugin is compatible only with the official [@editorjs/image](https://github.com/editor-js/image).

**Image Tune Plus** is an Editor.js Tune plugin that adds advanced image styling: width, aspect ratio, alignment, rounded corners, and other decorative parameters. It was created to fix the lack of proper image styling controls in mobile layouts, where images often do not scale or align correctly out of the box.

## Features

| Parameter       | Values                                                                 |
|-----------------|------------------------------------------------------------------------|
| Width           | 100%, 80%, 60%, 50%                                                    |
| Aspect ratio    | Auto (null), 16:9, 4:3, 1:1 (when a ratio is selected, width is 100%) |
| Alignment       | left, center, right                                                    |
| Rounded corners | 0px, 8px, 16px, 24px                                                   |

## Installation

You can get the package using any of these ways.

### Via NPM / Yarn

```shell
npm install editorjs-image-tune-plus
```

### Load from CDN

You can load a specific version of the package from [jsDelivr CDN](https://www.jsdelivr.com/package/npm/editorjs-image-tune-plus).

`https://cdn.jsdelivr.net/npm/editorjs-image-tune-plus/dist/image-tune-plus.umd.js
`

Then require this script on the page with Editor.js through the `<script src=""></script>` tag

---

## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.

```js
import EditorJS from "@editorjs/editorjs";
import ImageTool from "@editorjs/image";
import ImageTunePlus from "editorjs-image-tune-plus";

const editor = new EditorJS({
  holder: "editor",

  tools: {
    image: {
      class: ImageTool,
      inlineToolbar: true,
      tunes: ["imageTunePlus"],
      config: {
        caption: false,
      },
    },

    imageTunePlus: {
      class: ImageTunePlus,
    },
  },
});

```

---

## Output Data Format

The plugin adds data to `tunes.imageTunePlus`:

```json
{
  "tunes": {
    "imageTunePlus": {
      "width": 80,
      "ratio": "16:9",
      "align": "left",
      "rounded": 8,
      "shadow": "none"
    }
  }
}

```

---

## 📜 License

MIT License  
Author: **pasichDev**

---

## Support

Want new features? Just let me know — we'll expand the plugin 😉
