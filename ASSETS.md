# 新增素材与实现方式

本轮使用内置 imagegen 编辑了下列 PNG 素材。

- `assets/cover-clean.png`：补齐松散丝带后方的桌面；运行时仅合成在丝带遮挡区，原书本图像保留。
- `assets/ribbon-cutout.png`：松散丝带独立透明图层；桌面及书本不参与丝带变形。

## 生成提示词

### 松散丝带透明图层（内置 imagegen）

Use case: background-extraction. Edit target: the original closed green velvet book photograph. Extract ONLY the loose champagne silk ribbon extending from the left image edge, making an S curve over the wooden table, and looping above the upper-left corner of the book. Preserve its exact folds, opaque satin texture and original location. Remove everything else: table, book, flowers, pearls, shadows, bottom text, and ribbon folds lying on the book. True transparent alpha. Retain the original full 1672 by 941 canvas and ribbon location/scale. Do not center or crop tightly. Preserve all silky surfaces as opaque, including dark satin folds; no holes and no wooden grain inside the silk. Only the background is transparent.

### 丝带后方的桌面（内置 imagegen）

Use case: precise-object-edit. Remove only the loose champagne ribbon hovering above the wooden tabletop left of the closed book, including its cast shadow. Fill the removed region with continuous warm walnut grain matching the camera angle, lighting and highlights. Keep the green velvet book, silk folds lying on the cover, flowers, pearls, pages, original composition, dimensions and bottom Chinese caption unchanged. No crop or camera change; no added objects.

运行时以原书本的轮廓恢复原图像素，并为独立透明丝带合成飘动与阴影。用户照片和文字通过浏览器编辑或 `story.json` 提供，不包含在生成背景图中。
