Style ref

We'll follow breakpoints from Bootstarp (https://getbootstrap.com/docs/5.0/layout/breakpoints/)

```scss
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px,
);

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// X-Large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }

// XX-Large devices (larger desktops, 1400px and up)
@media (min-width: 1400px) { ... }
```

Make the content max width as 1504px;

```css
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}

@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
```
