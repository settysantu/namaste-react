# Assignments

## Explore all the ways of writing css.

1. Inline CSS
2. CSS in JS (Styled Components)
3. Frameworks like Bootstrap, Tailwind CSS etc...,
4. Component Library like Material UI, Chakra UI etc..,

---

## How do we configure tailwind?

After installing TailwindCSS need to run `npx tailwindcss init`, inside the file need to add path to all template files. Add below code inside css file

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)?

The ***content*** section is where you configure the paths to all of your HTML templates, JS components, and any other files that contain Tailwind class names.

The ***theme*** section is where you define your color palette, fonts, type scale, border sizes, breakpoints — anything related to the visual design of your site.

If you’d like to preserve the default values for a ***theme*** option but also add new values, add your extensions under the ***extend*** key in the ***theme*** section of your configuration file.

The ***plugins*** section allows you to register plugins with Tailwind that can be used to generate extra utilities, components, base styles, or custom variants.

---

## Why do we have .postcssrc file?

Helps ***parcel*** to build/process ***TailwindCSS***

---