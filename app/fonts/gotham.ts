import localFont from "next/font/local";

export const gotham = localFont({
  variable: "--font-gotham",
  src: [
    { path: "./gotham/Gotham-Thin.otf", weight: "100", style: "normal" },
    {
      path: "./gotham/Gotham-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    { path: "./gotham/Gotham-ExtraLight.otf", weight: "200", style: "normal" },
    {
      path: "./gotham/Gotham-ExtraLightItalic.otf",
      weight: "200",
      style: "italic",
    },
    { path: "./gotham/Gotham-Light.otf", weight: "300", style: "normal" },
    { path: "./gotham/Gotham-Book.otf", weight: "400", style: "normal" },
    { path: "./gotham/Gotham-Italic.otf", weight: "400", style: "italic" },
    { path: "./gotham/Gotham-Medium.otf", weight: "500", style: "normal" },
    { path: "./gotham/Gotham-Bold.otf", weight: "700", style: "normal" },
    {
      path: "./gotham/Gotham-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    { path: "./gotham/Gotham-Black.otf", weight: "800", style: "normal" },
    { path: "./gotham/Gotham-Ultra.otf", weight: "900", style: "normal" },
  ],
});
