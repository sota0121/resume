# Sota Masuda's resume

## resume page

- JP
  - https://sota0121.github.io/resume/jp/README
- EN
  - https://sota0121.github.io/resume/en/README


## Features

### 💅 Lint text

Automatic proofreading with [textlint](https://github.com/textlint/textlint).

```bash
$ yarn lint --fix
```

It is also automatically executed when pre-commit by [husky](https://github.com/typicode/husky).  
proofreading rules are set with `.textlintrc`.


### 📝 Convert MD to PDF

You can generate PDF with [md-to-pdf](https://www.npmjs.com/package/md-to-pdf).


```bash
$ yarn build:pdf
```

The output PDF can be styled as you like with CSS. Edit the `pdf-configs/style.css`.  

### 🛠 Create release

When you push with a `v**` tag, GitHub Actions will run the build, generate the PDF, create a Release, and register the PDF to Assets.

```bash
$ git commit -m "add job"
$ git tag v1.0
$ git push origin --tags
```

### 📆 Remind update

Automatically generate issues every three months with GitHub Actions Schedules triggers to prompt you to update your resume.

To change the duration or stop the job, edit `.github/workflows/create-issue.yml`.  
To change the issue contents, edit `.github/ISSUE_TEMPLATE.md`.

### 🛠 Run Jekyll locally

You can run Jekyll locally with `./watch.sh`, and then access the site with `http://localhost:4000`.

- Index page: [http://localhost:4000/](http://localhost:4000/)
- Resume in Japanese: [http://localhost:4000/docs/jp/](http://localhost:4000/docs/jp/)
- Resume in English: [http://localhost:4000/docs/en/](http://localhost:4000/docs/en/)

```bash
# serve
$ ./watch.sh $PORT_NUMBER
```

If you want to just build documentation without serving, you can use `./build.sh`.

```bash
# build
$ ./build.sh
```
