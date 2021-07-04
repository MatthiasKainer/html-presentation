# html-presentations

A very simple web component for browser based presentations

## Install

```sh
npm install lit pure-lit html-presentations
```

from cdn

```html
<script type="module" src="https://unpkg.com/html-presentations?module"></script>
```

## Usage

```html
    <!-- optionally override the color default by setting this css vars -->
    <style>
        --colorContrast: #331832ff;
        --colorHighlight: #d81e5bff;
        --colorFocus: #f0544fff;
        --colorShow: #c6d8d3ff;
        --colorMain: #fdf0d5ff;
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
          // supports syntax highlight if ("block-code") {
          console.log("highlighting it!"); }
        </block-code>
        <block-code lang="markup">
          <block-code> This is highlighted markup! </block-code>
        </block-code>
        <block-code lang="clike">
          public class Program { public static async Task Main(string[] args) {
          var builder = CreateWebHostBuilder(args); var task = Task.Run(() => {
          builder.Run(); }); Thread.Sleep(500); var output = await new
          HttpClient().GetStringAsync("http://localhost:5000");
          Console.WriteLine(output); } }
        </block-code>
      </presentation-slide>
      <!-- Annotate the last slide -->
      <presentation-slide last>
        <h1>Bye!</h1>
      </presentation-slide>
    </presentation-body>
```
