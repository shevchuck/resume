# Bryan Shevchuck · Resume

A responsive, accessible static resume website for GitHub Pages at https://resume.shevchuck.com.

## Local preview

From this directory, run `python3 -m http.server 8080` and open http://localhost:8080.

## Publish

Push these files to a public GitHub repository. Under Settings → Pages, select Deploy from a branch, branch `main`, folder `/ (root)`. Set the custom domain to `resume.shevchuck.com`.

In Squarespace DNS, add a CNAME record with host `resume` and value `shevchuck.github.io`. Enable Enforce HTTPS in GitHub Pages when the certificate is ready.

## Update

Edit `index.html` for website content and `styles.css` for styling. Replace `assets/Bryan-Shevchuck-Resume.pdf` to update the downloadable resume. Content is adapted from the supplied resume. The downloadable PDF is the original supplied resume, unchanged, including its contact information. The webpage retains the closing section and resume download, but displays no personal email address and has no contact button.

There is no build step, backend, analytics, or contact form. Fonts use Google Fonts with local system fallbacks.

Mobile navigation uses an accessible hamburger dropdown at widths up to 760px. It closes on link selection, Escape, outside click, or focus leaving the header. Verified no horizontal overflow at 320, 375, 430, 768, and 1280px widths.
