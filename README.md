# React Ripple Effect

React component for ripple effect inspired by Google Material Design. Based on this [Ripple Effect](https://github.com/gabrielfins/ripple-effect/) implementation.

## Installation

```bash
npm i ripple-effect-react
```

## Example

Import the component and css file inside your layout only, and the rest you just need to add `md-ripples` to the element classname.

```tsx
import { ReactNode } from "react";
import { RippleListener } from "ripple-effect-react";
import "ripple-effect-react/styles";

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html>
    <body>
      <button className="md-ripples">Click me</button>
      {children}
      <RippleListener />
    </body>
  </html>
}
```

You dont have to import `RippleListener` everytime you want to use `md-ripples`. The concept of this library was to make the document listen to pointerdown and add ripples effect to where the pointer location and pick the closest element with class `md-ripples`. So you only need to listen once when your layout rendered. If you have another root layout, then you have to import it again, you could ignore importing it in pages or components.

```tsx
export default function MyPage() {
  return <>
    <button className="md-ripples ripples-light">click me in page</button>
  </>
}
```

## Customization

To customize the ripple color, ripple color has 2 css variable to determine each color. modify these variables as you want.

```css
:root {
  --ripple-light: #FFFFFF;
  --ripple-dark: #000000;
}
```

## Light/Dark Ripple

`ripples-light` class for light ripple color (usually used in dark mode), and `ripples-dark` class for dark ripple color (usually used in light mode).

example:

```html
{/* light color */}
<button className="md-ripples ripples-light">click me</button>

{/* dark color */}
<button className="md-ripples ripples-dark">click me</button>
```