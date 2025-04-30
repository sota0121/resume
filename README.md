# Sota Masuda's Home Page

There are two main sections in this repository:
1. **Blog**: This is a blog section where I write about various topics, including programming, technology, and personal experiences. The blog is built using Next.js and Markdown files. And hosted on Vercel.
2. **Resume**: This is a resume section where I showcase my professional experience, skills, and education. The resume is built using md-to-pdf npm package, which converts Markdown files to PDF format with custom styles.


## Blog

(TODO: move the code from root to blog directory)

- `/blog/*` contains the blog service implementation.
- `/blog/_posts/*` contains the blog posts in Markdown format.


### How to add a new blog post

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

### How it works

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.


## Resume

- `/docs/md/*` contains the resume in Markdown format.
- `/docs/out/*` contains the artifacts such as the generated PDF files. but those files are ignored by git.
- `/docs/justfile` collects the commands to handle the resume generation. Let's try `cd docs && just` to see the available commands.

### Features

1. Automatically generates a PDF version of the resume from Markdown files and publishes it to GitHub releases.
2. Customeizable styles for the PDF using CSS.
3. Local generation of the PDF using `md-to-pdf` npm package. (Using `just` command)

### What this repository does NOT do

1. It does not generate a website for the resume. The resume is only available in PDF format.
2. It does not provide a way to host the resume online. The resume is only available as a downloadable PDF file as a GitHub release asset.


### How to update and publish the resume

1. Update
    - Update the resume in `docs/md/en|jp/RESUME.md` files.
    - Update the styles in `docs/css/*.css` files if needed.
    - Push the changes to the `main` branch.
2. Generate and Publish
    - Trigger the GitHub action `build pdf` manually
      - Select the branch, mostly `main` branch should be right.
      - Set the `Tag name` to the version you want to publish. (if tag: `v1.0.0` then `Release v1.0.0`)
    - This will generate the PDF files, create a new release, and upload the PDF files as assets to the release.


### How to generate the PDF locally

1. Install the dependencies using `npm install`.
2. Run the `just resume-pdf` command to generate the PDF files.
3. The generated PDF files will be saved in the `pdf` directory.
    - `pdf/*.pdf` is ignored by git, so you can safely delete them.


### How it works

(TBD)
