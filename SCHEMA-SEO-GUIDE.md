# Schema and SEO Implementation Summary

## Overview

The site now has a proper schema.org structured data implementation that avoids duplication and provides appropriate metadata for each page type.

## Schema Structure

### Blog Posts (`/blog/post-name/`)

- **File**: `layouts/partials/blog-schema.html`
- **Condition**: Only loads for individual blog posts (`Section == "blog" AND not IsNode`)
- **Schema Types**:
  - `Person` - Author information
  - `Organization` - Publisher information
  - `BlogPosting` - The blog post itself
  - `BreadcrumbList` - Navigation breadcrumbs

#### Blog Metadata Collected

- Title and headline
- Subtitle (alternativeHeadline)
- Description (from frontmatter or summary)
- Keywords (from frontmatter keywords + tags)
- Images (priority: Params.image > Params.images[0] > twitterCardImage > default avatar)
- Dates (published and modified)
- Author information
- Word count
- Language
- URL and permalinks
- Breadcrumb navigation

### All Other Pages (Home, Publications, Talks, Now, Teaching, Blog List)

- **File**: `layouts/partials/schema.html`
- **Condition**: Loads for all non-blog-post pages
- **Schema Types**:
  - `Person` - Site owner/author with full profile
  - `WebSite` - The portfolio website
  - `WebPage` - Individual page information
  - `BreadcrumbList` - Navigation (for non-home pages)

#### General Page Metadata Collected

- Person: name, job title, description, email, image, social links, address, education, knowledge areas, languages, affiliations
- WebSite: URL, name, description, publisher
- WebPage: URL, name, description, language, breadcrumbs
- Dynamic data pulled from config.toml parameters

## SEO Meta Tags

All pages include (via `head.html`):

### Basic Meta Tags

- Charset, viewport, referrer
- Author, language
- Title (context-aware)
- Description (page-specific or site default)
- Keywords

### Open Graph Tags

- Type (article for pages, website for home)
- URL, title, description
- Images (with priority fallback)
- Site name, locale
- Article metadata (publish/modified dates, authors, tags)

### Twitter Cards

- Card type (summary_large_image)
- Title, description
- Images (with priority fallback)
- Site and creator handles

## No Duplication

### Previous Issues Fixed

1. ❌ **Before**: `blog-schema.html` loaded on ALL pages (including non-blog)
2. ✅ **After**: `blog-schema.html` only loads on blog posts

3. ❌ **Before**: Duplicate schema - JSON-LD + microdata (itemscope/itemtype) on blog posts
4. ✅ **After**: Only JSON-LD schema (removed microdata attributes)

5. ❌ **Before**: Hardcoded values in `schema.html`
6. ✅ **After**: Dynamic values from config and page context

## Testing URLs

To validate schema implementation:

### Blog Posts

- `/blog/markdown-showcase/`
- `/blog/toc-sidenotes-test/`
- Should have BlogPosting schema

### Other Pages

- `/` (home)
- `/publications/`
- `/talks/`
- `/teaching/`
- `/now/`
- `/blog/` (list page)
- Should have Person + WebSite + WebPage schema

## Validation

Use these tools to validate schema:

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema.org Validator**: https://validator.schema.org/
3. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
4. **Twitter Card Validator**: https://cards-dev.twitter.com/validator

## Configuration

Key config.toml parameters used:

```toml
[params]
  author = "Germans Savcisens"
  description = "..."
  twitter = "germansave"
  twitterCardImage = "images/avatar.jpg"

  [params.structuredData]
    orcid = "..."
    googleScholar = "..."
    jobTitle = "..."
    affiliation = "..."

  [params.social]
    github = "..."
    linkedin = "..."
    bluesky = "..."
```

## Benefits

1. **No Duplication**: Each page type has appropriate schema
2. **SEO Optimized**: All metadata properly structured
3. **Dynamic**: Pulls from config and page context
4. **Maintainable**: Centralized schema management
5. **Complete**: Rich snippets in search results
6. **Social Ready**: Proper Open Graph and Twitter Cards
