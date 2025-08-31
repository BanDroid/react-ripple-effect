# React Ripple Effect

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Example

Import the component and css file inside your layout only, and the rest you just need to add `md-ripples` to the element.

```javascriptreact
import RippleListener from "react-ripple-effect";
import "react-ripple-effect/react-ripple-effect.css";

export default function RootLayout() {
  return <>
    <button className="md-ripples">Click me</button>
    <RippleListener />
  </>
}
```

## Customization

to customize the ripple color, ripple color has 2 css variable to determine each color. modify these variables as you want.

```css
:root {
  --ripple-light: #FFFFFF;
  --ripple-dark: #000000;
}
```

## Light/Dark Ripple

`ripples-light` for light ripple color (usually used in dark mode), and `ripples-dark` for dark ripple color (usually used in light mode).

example:

```html
{/* light color */}
<button className="md-ripples ripples-light">click me</button>

{/* dark color */}
<button className="md-ripples ripples-dark">click me</button>
```