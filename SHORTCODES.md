# Hugo Shortcodes Documentation

This document describes the available Hugo shortcodes for creating rich, accessible content in your blog posts.

## Prerequisites

- **Callout shortcode** requires FontAwesome icons to be loaded (already configured in the site's head.html)

## Figure Shortcode

Use the `figure` shortcode to add images with captions and better accessibility.

### Basic Usage

```markdown
{{< figure src="/images/my-image.jpg" alt="Description of the image" >}}
```

### With Caption

```markdown
{{< figure src="/images/my-image.jpg" alt="Description of the image" caption="This is a detailed caption that supports **Markdown**" >}}
```

### With Link

```markdown
{{< figure
src="/images/thumbnail.jpg"
alt="Click to view full size"
link="/images/full-size.jpg"
caption="Click image to view full size"

> }}
```

### All Parameters

- `src` (required): Path to the image
- `alt` (recommended): Alternative text for accessibility
- `caption` (optional): Image caption (supports Markdown)
- `link` (optional): URL to link the image to
- `target` (optional): Link target, default is `_blank`
- `rel` (optional): Link relationship, default is `noopener noreferrer`
- `width` (optional): Image width
- `height` (optional): Image height
- `class` (optional): Additional CSS classes for the figure element

## Callout Shortcode

Use the `callout` shortcode to create attention-grabbing information boxes.

### Types

Available types: `info`, `warning`, `success`, `tip`, `danger`

### Basic Usage

```markdown
{{< callout type="info" >}}
This is an informational callout box.
{{< /callout >}}
```

### With Title

```markdown
{{< callout type="warning" title="Important Note" >}}
This is a warning callout with a custom title.
{{< /callout >}}
```

### Examples

#### Info

```markdown
{{< callout type="info" title="Did you know?" >}}
Hugo is one of the fastest static site generators available.
{{< /callout >}}
```

#### Warning

```markdown
{{< callout type="warning" title="Caution" >}}
Make sure to back up your data before proceeding.
{{< /callout >}}
```

#### Success

```markdown
{{< callout type="success" title="Great!" >}}
Your site has been successfully deployed!
{{< /callout >}}
```

#### Tip

```markdown
{{< callout type="tip" title="Pro Tip" >}}
Use keyboard shortcuts to speed up your workflow.
{{< /callout >}}
```

#### Danger

```markdown
{{< callout type="danger" title="Critical" >}}
This action cannot be undone. Proceed with caution.
{{< /callout >}}
```

### Parameters

- `type` (optional): The type of callout - `info`, `warning`, `success`, `tip`, or `danger`. Default is `info`.
- `title` (optional): A title for the callout box

The content inside the callout supports Markdown formatting.

## YouTube Shortcode

Use the `youtube` shortcode to embed YouTube videos accessibly.

### Basic Usage

```markdown
{{< youtube id="dQw4w9WgXcQ" >}}
```

### With Title

```markdown
{{< youtube id="dQw4w9WgXcQ" title="My Favorite Video" >}}
```

### Parameters

- `id` (required): YouTube video ID
- `title` (optional): Accessible title for the video. Default is "YouTube video"
- `class` (optional): Additional CSS classes. Default is "my-6"

## Markdown Extensions

The site also supports these Goldmark extensions:

### Tables

```markdown
| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

### Task Lists

```markdown
- [x] Completed task
- [ ] Incomplete task
- [ ] Another task
```

### Strikethrough

```markdown
This is ~~deleted text~~ and this is regular text.
```

### Footnotes

```markdown
Here's a sentence with a footnote[^1].

[^1]: This is the footnote content.
```

### Definition Lists

```markdown
Term 1
: Definition 1

Term 2
: Definition 2a
: Definition 2b
```

## Sidenote Shortcode

Use the `sidenote` shortcode to create margin notes that appear in the right margin on larger screens and inline on mobile devices. Inspired by Edward Tufte's design philosophy.

### Basic Usage

```markdown
This is the main text{{< sidenote id="sn1" >}}This is a side note that appears in the right margin.{{< /sidenote >}} and it continues here.
```

### With Markdown Content

```markdown
Some text with a reference{{< sidenote id="note1" >}}
This side note can contain **bold text**, _italics_, and even [links](https://example.com).
{{< /sidenote >}} to additional context.
```

### Multiple Sidenotes

```markdown
First paragraph with a note{{< sidenote id="sn1" >}}First side note{{< /sidenote >}} continues here.

Second paragraph{{< sidenote id="sn2" >}}Second side note with more details{{< /sidenote >}} with more content.
```

### Parameters

- `id` (required): Unique identifier for the sidenote. This is used to link the marker to the note.

### Behavior

- **Desktop (>976px)**: Side notes appear in the right margin, automatically numbered
- **Mobile (≤976px)**: Side notes appear inline when you click/tap the number, with a distinctive background
- **Automatic numbering**: Side notes are numbered sequentially throughout the article
- **Markdown support**: Content inside sidenotes supports full Markdown formatting

### Best Practices for Sidenotes

1. **Use for supplementary information**: Side notes are perfect for tangential thoughts, references, or additional context that shouldn't interrupt the main narrative
2. **Keep them concise**: While they support Markdown, side notes work best when kept brief
3. **Use unique IDs**: Always provide a unique `id` for each sidenote to avoid conflicts
4. **Don't overuse**: Too many side notes can clutter the layout. Use them sparingly for maximum impact
5. **Consider reading flow**: Place side notes near the relevant text in your main content

### Example in Context

```markdown
## The History of Computing

The ENIAC{{< sidenote id="eniac" >}}ENIAC stood for Electronic Numerical Integrator and Computer, completed in 1945{{< /sidenote >}} was one of the earliest electronic general-purpose computers. It was designed primarily to calculate artillery firing tables{{< sidenote id="military" >}}The military applications of early computers were crucial to their development and funding{{< /sidenote >}} for the United States Army's Ballistic Research Laboratory.
```

## Markdown Extensions

The site also supports these Goldmark extensions:

### Tables

```markdown
| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

### Task Lists

```markdown
- [x] Completed task
- [ ] Incomplete task
- [ ] Another task
```

### Strikethrough

```markdown
This is ~~deleted text~~ and this is regular text.
```

### Footnotes

```markdown
Here's a sentence with a footnote[^1].

[^1]: This is the footnote content.
```

### Definition Lists

```markdown
Term 1
: Definition 1

Term 2
: Definition 2a
: Definition 2b
```

## Best Practices

1. **Always provide alt text** for images to ensure accessibility
2. **Use meaningful captions** that add context to your images
3. **Choose appropriate callout types** to match the content's intent
4. **Keep callout content concise** - they're meant to highlight important information
5. **Test video embeds** to ensure they load correctly
6. **Use heading hierarchy correctly** - don't skip levels (H1 → H2 → H3)
7. **Use sidenotes sparingly** - they work best for supplementary information that enhances but doesn't interrupt the main text
