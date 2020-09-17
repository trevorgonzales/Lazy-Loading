# Lightweight Lazy Loading
Simple library for lazy loading images as they come into view.

## Requirements & Application

Image tag must include the following:
1. Attribute: data-type="lazy"
2. Attribute: data-src="image URL"
2. Inline Height Value (necessary to calculate element location)

We exclude the **src** attribute because the moment a browser see's that it will immediately download that resource. To avoid that we stuff the image URL inside a dataset attribute called **data-src** and later copy it to a **src** attribute for instant loading when in view.

## Example Code

```
<img data-type="lazy" data-src="/some-image.jpg" height="20" alt="Some Image">
```

## Note

Just a rough build for my own personal gain I though might be worth sharing in case others find it useful. You can view working copy here: <https://codepen.io/dark_Matter/pen/bGpxerd>