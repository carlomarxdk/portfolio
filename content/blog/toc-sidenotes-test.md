---
title: "TOC and Sidenotes Test"
date: 2025-12-25
description: "Test page for table of contents and sidenote functionality"
tags: ["test", "toc", "sidenotes"]
categories: ["documentation"]
---

## First Section

This is the first section with some introductory text.{{< sidenote id="intro" >}}This is the first sidenote appearing in the right margin on desktop.{{< /sidenote >}} The table of contents should be visible in the left sidebar on larger screens.

## Second Section

Here we have more content{{< sidenote id="content1" >}}Sidenotes are numbered automatically and appear adjacent to the text.{{< /sidenote >}} to demonstrate the layout. The TOC should show all headings from H2 to H4.

### Subsection 2.1

This is a third-level heading{{< sidenote id="h3note" >}}Third-level headings are indented in the TOC for better visual hierarchy.{{< /sidenote >}} that should appear indented in the table of contents.

### Subsection 2.2

Another subsection with additional information{{< sidenote id="info" >}}You can use **Markdown** in sidenotes, including _emphasis_ and [links](https://example.com).{{< /sidenote >}} to test the TOC structure.

#### Deep Subsection 2.2.1

Fourth-level headings are also included in the TOC with more indentation.

## Third Section

The third major section{{< sidenote id="third" >}}On mobile devices, sidenotes become clickable numbers that expand inline.{{< /sidenote >}} continues the document structure.

### Subsection 3.1

Testing multiple sidenotes in sequence.{{< sidenote id="seq1" >}}First sequential note.{{< /sidenote >}}{{< sidenote id="seq2" >}}Second sequential note.{{< /sidenote >}} Both should appear properly numbered.

## Fourth Section

Final section to verify{{< sidenote id="verify" >}}The TOC should remain sticky as you scroll, staying visible in the left margin.{{< /sidenote >}} that everything works as expected.

### Key Features

- Table of Contents appears in left margin
- TOC is sticky on scroll (top-20 positioning)
- Sidenotes appear in right margin on desktop
- Sidenotes are inline/expandable on mobile
- Automatic numbering for sidenotes
- Markdown support in sidenotes
- Responsive design for all screen sizes

## Conclusion

This test page demonstrates{{< sidenote id="conclusion" >}}If you can see this note in the right margin (or can click to expand it on mobile), the sidenote functionality is working correctly!{{< /sidenote >}} the complete implementation of TOC and sidenotes functionality.
