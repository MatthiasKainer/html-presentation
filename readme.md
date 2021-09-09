# html-presentations

A very simple web component for browser based presentations

## Install

Add the following snippet to your page:

```html
<script
  type="module"
  src="https://unpkg.com/html-presentations?module"
></script>
<link rel="stylesheet" href="https://unpkg.com/html-presentations/style.css" />
```

## Usage

| Element            | Attributes             | Description                                                                                                                           |
| ------------------ | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| presentation-body  |                        | Every presentation has to be wrapped in a body                                                                                        |
| presentation-slide | first last class style | A slide in your presentation. First marks your first slide, last the final one. This will only remove the "previous" & "next" markers |
| block-lessons      | id class style         | A wrapper for lessons. Add an id to make sure the appearOnClick works correctly                                                       |
| block-lesson       | appearOnClick  class   | A single lesson. The appearOnClick attribute is responsible for showing it on a specified index                                       |
| block-code         | lang                   | A code block. Available languages can be found at prism                                                                               |

On top of that you have the power of html and css at your disposal, and everything that can be embedded on the interweb.

```html
<!-- optionally override the color default by setting this css vars -->
<style>
  body {
    --colorContrast: #331832ff;
    --colorHighlight: #d81e5bff;
    --colorFocus: #f0544fff;
    --colorShow: #c6d8d3ff;
    --colorMain: #fdf0d5ff;
  }
</style>
<presentation-body>
  <!-- marks the first slide with the attribute "first" -->
  <presentation-slide first>
    <!-- Add your own classes for your content -->
    <h1 class="pushToMiddle">Welcome to the presentation</h1>
    <h2>Press CTRL+o to open in fullscreen mode</h2>
  </presentation-slide>
  <presentation-slide>
    <h2>And summarized, appearing on click</h2>
    <!-- Use the block-lessons element to show elements in a grid -->
    <block-lessons id="lesson-1">
      <block-lesson>
        <h3>Lesson 1</h3>
        <h4>I can use lessons</h4>
      </block-lesson>
      <!-- And optionally have the block-lesson appear after a specified number of clicks -->
      <block-lesson appearOnClick="1">
        <h3 class="lesson">Lesson 2</h3>
        <h4 class="lesson">I learned to learn</h4>
      </block-lesson>
      <block-lesson appearOnClick="2">
        <h3 class="lesson">Lesson 3</h3>
        <h4 class="lesson">I learned to learn</h4>
      </block-lesson>
      <block-lesson appearOnClick="3">
        <h3 class="lesson">Lesson 4</h3>
        <h4 class="lesson">I learned to learn</h4>
      </block-lesson>
      <block-lesson appearOnClick="4">
        <h3 class="lesson">Lesson 5</h3>
        <h4 class="lesson">I learned to learn</h4>
      </block-lesson>
    </block-lessons>
  </presentation-slide>
  <presentation-slide>
    <!-- Highlight code using prism - add your own theme to customize it -->
    <block-code lang="javascript">
      // supports syntax highlight 
      if ("block-code") { 
        console.log("highlighting it!"); 
      }
    </block-code>
    <block-code lang="markup">
      <block-code> This is highlighted markup! </block-code>
    </block-code>
  </presentation-slide>
  <!-- Annotate the last slide -->
  <presentation-slide last>
    <h1>Bye!</h1>
  </presentation-slide>
</presentation-body>
```

## Default CSS

You can use a default css from a cdn like [https://unpkg.com/html-presentations/style.css](https://unpkg.com/html-presentations/style.css) or download it from the repo and adjust it to you needs. It comes with a few extras that might help you create great presentations. See [https://matthiaskainer.github.io/html-presentation/](https://matthiaskainer.github.io/html-presentation/) for more details.

### Styled Elements

> h1, h2, h3, h4, strong, blockquote, silent, table

Styled `h1` to `h4`, `strong` (to highlight), `blockquote` (for quotations) and `silent` (for elements that should barely be visible) elements, as well as a styled `table`

### Additional classes for headlines

`.title` and `.pushToMiddle`, that allows you to center your content, ie `<h2 class="title">Subheadline</h2>`

### More fun with blocks

The following classes work only on `block-lesson` elements

- `.block-full` - Block is taking the full width
- `.block-half` - Block is taking almost half of the page. Two can fitted next to each other
- `.block-wide` & `.block-short` - create blocks that follow the golden ratio on their width.

## I don't want to write html but want to use this tool!

Erm... point taken; choosing a tool called `html-presentation` and then ask to not use html.

But okay, you can for instance create a `presentation.pug` file like this:

```pug
<!DOCTYPE html>
head
  meta(charset='utf-8')
  title Todo List
  script(type='module' src='https://unpkg.com/html-presentations?module')
  link(rel='stylesheet' href='https://unpkg.com/html-presentations/style.css')
body
    presentation-body
        presentation-slide(first='')
            h1.title Welcome to the presentation
        presentation-slide
            block-code(lang='markup')
                block-code  This is highlighted markup!
        presentation-slide(last='')
            h1 Bye!
```

and then call `npx pug-cli presentation.pug` and a valid `presentation.html` is created. This should work with whathever language that allows you to specifiy markup.
