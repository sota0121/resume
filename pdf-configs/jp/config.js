module.exports = {
  stylesheet: "./pdf-configs/jp/style.css",
  body_class: "markdown-body",
  dest: "./pdf/RESUME.jp.pdf",
  marked_options: {
    headerIds: false,
    smartypants: true,
  },
  pdf_options: {
    "format": "A4",
    "margin": "10mm 15mm",
    "printBackground": true,
  },
  stylesheet_encoding: "utf-8",
};