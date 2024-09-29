_26.09.24_

Purpose of this doc is to go through the learning objectives by briefly summarizing what I should have learned and kept from the session.

Process:

1. Copy this .md into the session folder
2. Copy l6n o8s from session notes into this doc
3. Turn single l6n o8s into ###
4. Add template into chapters
5. Start summarizing
6. Go through session notes again
7. Refine and revise summaries
8. Add Keywords

# Session Topic: JS create element

## knowing what the DOM is

see: /Users/stephanmodel/session-notebook/javascript/javascript-cheatsheet.md

## learning how to generate HTML in JavaScript

see /Users/stephanmodel/session-notebook/javascript/js-sytnax-scraps.md

## using HTML element object properties and methods

### Common Element Properties

| Property          | Effect                                                             |
| ----------------- | ------------------------------------------------------------------ |
| `classList`       | add, toggle or remove classes from element                         |
| `textContent`     | get or set text inside element                                     |
| `style`           | define inline style, e.g. `element.style.backgroundColor = "red" ` |
| `hidden`          | boolean whether element is hidden or not                           |
| `focus()`         | focusses the element on the website                                |
| `hasAttribute()`  | returns true if the element has the given attribute                |
| `querySelector()` | returns the first child that matches the given CSS selector        |

## learning how to use `.innerHTML`

see /Users/stephanmodel/session-notebook/javascript/js-sytnax-scraps.md

## Differences between `innerHTML` and `createElement`

_My summary:_

### Summary of key differences between `innerHTML` and `createElement`

| Feature                    | `innerHTML`                                               | `createElement`                                       |
| -------------------------- | --------------------------------------------------------- | ----------------------------------------------------- |
| **Security**               | Risk of XSS if user input is not sanitized                | Safe from XSS (if user input is handled correctly)    |
| **Performance**            | Faster for bulk updates, but overwrites all inner content | Slower for bulk, but more efficient for small changes |
| **Ease of use**            | Simple, especially for complex HTML structures            | More verbose, but offers finer control                |
| **Event listeners**        | Event listeners are lost on updates                       | Event listeners stay attached                         |
| **Text or HTML insertion** | Allows both text and HTML insertion                       | Works with plain text, no HTML injection              |

### When to use `innerHTML` vs `createElement`

- **Use `innerHTML` when**:

  - You need to generate or replace a large amount of HTML markup at once (e.g., templates or rendering a large component).
  - You are confident that no untrusted input is being used and you've sanitized any user content.
  - Performance is a concern for large DOM updates (sometimes it's faster for complex structures).

- **Use `createElement` when**:
  - You want **better security**, especially if user input is involved.
  - You need to **dynamically** create or update small portions of the page (like adding elements interactively).
  - You need to **modify attributes, add event listeners**, or control the element's behavior programmatically.

<details>
<summary>Click here for more comprehensive info</summary>
### Why `innerHTML` can be unsafe

The main reason `innerHTML` is considered unsafe is because it directly manipulates the HTML as a **string**. This can open up a vulnerability known as **Cross-Site Scripting (XSS)** if any **untrusted user input** is inserted into the HTML. Here's why:

- **Direct HTML insertion**: When using `innerHTML`, you're working with raw HTML markup as a string, and the browser interprets it immediately. If you accidentally include user-generated content (e.g., from form inputs, user comments, etc.) without sanitizing it, malicious users could inject harmful scripts. For example:

  ```js
  const userInput = "<img src='x' onerror='alert(\"Hacked!\")'>";
  document.body.innerHTML = `<p> ${userInput} </p>`;
  ```

  Here, if the `userInput` comes from an untrusted source, it can be abused to run unwanted JavaScript code (like `alert("Hacked!")`). This is a typical XSS attack.

- **Unsafe script execution**: If malicious code is inserted into your page through `innerHTML`, the browser will execute it as part of the page, leading to potential data theft, unauthorized actions, or further exploits.

To mitigate this, developers should **always sanitize inputs** (strip out scripts, harmful attributes, etc.) when using `innerHTML` or consider using safer alternatives like `textContent` for inserting plain text.

### `createElement` vs. `innerHTML`

Using `document.createElement` is generally safer than `innerHTML` because:

1. **No direct HTML interpretation**: When using `createElement`, you're generating DOM elements directly, rather than dealing with HTML as a string. This process doesn't allow any JavaScript execution by itself.

   ```js
   const paragraph = document.createElement("p");
   paragraph.textContent = userInput; // this will insert user input as plain text, no HTML execution
   ```

   In this case, even if the user input contains something like `<script>`, it won't be executed or treated as HTML.

2. **Better security**: Since `createElement` generates DOM nodes, you avoid the XSS risk, as any injected content will be treated as plain text, not executable code.

3. **More granular control**: With `createElement`, you can set attributes, classes, styles, and events in a more structured way. This ensures that each part of the element is built programmatically, reducing the chance of unintended code injection.

### When to use `innerHTML` vs `createElement`

Both methods have their use cases, and neither is inherently "better" than the other. Here are some guidelines:

- **Use `innerHTML` when**:

  - You need to generate or replace a large amount of HTML markup at once (e.g., templates or rendering a large component).
  - You are confident that no untrusted input is being used and you've sanitized any user content.
  - Performance is a concern for large DOM updates (sometimes it's faster for complex structures).

- **Use `createElement` when**:
  - You want **better security**, especially if user input is involved.
  - You need to **dynamically** create or update small portions of the page (like adding elements interactively).
  - You need to **modify attributes, add event listeners**, or control the element's behavior programmatically.

</details>
