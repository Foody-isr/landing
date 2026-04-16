# Menu help screenshots — capture checklist

Drop PNGs into this directory with the filenames below. Articles reference them as `/assets/img/screenshots/menu/<filename>.png`. Until a PNG lands, the article shows a broken-alt box — text still reads fine.

**Target aspect**: ~1000 × 500 px (fits the current article column). Use any locale's UI — labels are illustrative; the article body explains what each label means in the reader's own language.

## For `creating-a-menu-item.mdx`

| # | Filename | What to capture |
|---|---|---|
| 1 | `item-list-new-button.png` | `/menu/items` list page, top toolbar with the "New / Nouveau / חדש" button visible. Crop so the button is recognizable. |
| 2 | `create-item-details-tab.png` | New item modal, Détails tab, scrolled so Name + Category + Price fields are visible. |
| 3 | `create-item-image-upload.png` | Close-up of the image dropzone inside the Détails tab. |
| 4 | `create-item-category-picker.png` | Category dropdown open, showing 2–3 sample categories. |
| 5 | `create-item-variants-button.png` | Variantes section of the Détails tab, "Ajouter / Add" button visible. |
| 6 | `create-item-recipe-tab.png` | Edit item modal, Recette tab, showing one or two ingredient cards (scope buttons visible). |
| 7 | `create-item-saved.png` | Back on the items list after saving, new item row highlighted. |

## For `variants-and-sizes.mdx`

| # | Filename | What to capture |
|---|---|---|
| 8 | `variants-modal-empty.png` | Variants editor opened on a fresh item, one empty row visible. |
| 9 | `variants-modal-filled.png` | Variants editor with Normal / Grand rows filled in (price + portion). |
| 10 | `variants-option-set-reuse.png` | The group-title input with the existing option-set dropdown open — shows reuse. |

## Tips

- Zoom browser to 100 %; avoid scaled renders.
- Prefer dark mode (matches the product).
- Mask any real customer data / prices you don't want public.
- Keep PNGs under ~200 KB each (re-compress with `pngquant` or similar if bigger).
