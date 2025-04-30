# Sota Masuda's Home Page

There are two main sections in this repository:
1. **Blog**: This is a blog section where I write about various topics, including programming, technology, and personal experiences. The blog is built using Next.js and Markdown files. And hosted on Vercel.
2. **Resume**: This is a resume section where I showcase my professional experience, skills, and education. The resume is built using md-to-pdf npm package, which converts Markdown files to PDF format with custom styles.


## Blog

### How to add a new blog post

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

### How it works

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.


## Resume

### Features

1. Automatically generates a PDF version of the resume from Markdown files and publishes it to GitHub releases.
2. Customeizable styles for the PDF using CSS.
3. Local generation of the PDF using `md-to-pdf` npm package. (Using `just` command)

### What this repository does NOT do

1. It does not generate a website for the resume. The resume is only available in PDF format.
2. It does not provide a way to host the resume online. The resume is only available as a downloadable PDF file as a GitHub release asset.


### How to update and publish the resume

1. Update the docs/en/RESUME.md, and|or docs/ja/RESUME.md files.
2. Push the changes to remote, and merge the changes to main branch.
3. `deploy-resume` GitHub action will be triggered, and it will generate the PDF files, create a new GitHub release, and upload the PDF files to the release assets.


### How to generate the PDF locally

1. Install the dependencies using `npm install`.
2. Run the `just resume-pdf` command to generate the PDF files.
3. The generated PDF files will be saved in the `pdf` directory.
    - `pdf/*.pdf` is ignored by git, so you can safely delete them.


### How it works

(TBD)
