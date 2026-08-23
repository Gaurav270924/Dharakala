<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <meta name="theme-color" content="#044336" />
    <meta name="description" content="A collection of places designed to last. We develop residential, commercial, township, plotted and mixed-use projects across India." />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="Dharakala — A Collection of Places" />
    <meta property="og:description" content="Places that last. Lives that grow. A design-led real estate developer building across India." />
    <meta property="og:image" content="https://images.pexels.com/photos/14989324/pexels-photo-14989324.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />

    @inertiaHead
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
  </head>
  <body>
    @inertia
  </body>
</html>
