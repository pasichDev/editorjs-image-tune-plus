# Image Tune Plus — Advanced Image Styling Tune for Editor.js

Tool for the [Editor.js](https://editorjs.io).

This plugin is compatible only with the official [@editorjs/image](https://github.com/editor-js/image).

**Image Tune Plus** is an Editor.js Tune plugin that adds advanced image styling: width, aspect ratio, alignment, rounded corners, and other decorative parameters.

---

## Features

### **1. Width Control**

- 100%
- 80%
- 60%
- 50%

### **2. Aspect Ratio**

- Auto (null)
- 16:9
- 4:3
- 1:1  
When selecting a ratio, the width automatically becomes 100%.

### **3. Alignment**

- left
- center
- right

### **4. Rounded Corners**

- 0px  
- 8px  
- 16px  
- 24px  

---

## 📦 Installation

### Via npm

```bash
npm install image-tune-plus
```

Or download the ready-made UMD:

```
dist/image-tune-plus.umd.js
```

---

## 🧩 Integration with Editor.js

### **UMD Version (HTML/WebView)**

```html
<script src="image-tune-plus.umd.js"></script>

<script>
const editor = new EditorJS({
  tools: {
    imageStyle: {
      class: ImageTunePlus
    }
  }
});
</script>
```

---

### **ES Modules**

```js
import ImageTunePlus from "image-tune-plus";

const editor = new EditorJS({
  tools: {
    imageStyle: {
      class: ImageTunePlus
    }
  }
});
```

---

## Installation

You can get the package using any of these ways.

### Via NPM / Yarn

```shell
npm install @editorjs/image-tune-plus
```

### Load from CDN

You can load a specific version of the package from [jsDelivr CDN](https://www.jsdelivr.com/package/npm/@editorjs/image-tune-plus).

`https://cdn.jsdelivr.net/npm/@editorjs/image-tune-plus@latest`

Then require this script on the page with Editor.js through the `<script src=""></script>` tag

---

## Output Data Format

The plugin adds data to `tunes.imageStyle`:

```json
{
  "width": 80,
  "ratio": "16:9",
  "align": "left",
  "rounded": 8,
  "shadow": "none"
}
```

---

## 📜 License

MIT License  
Author: **pasichDev**

---

## Support

Want new features? Just let me know — we'll expand the plugin 😉
