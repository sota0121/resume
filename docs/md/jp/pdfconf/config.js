module.exports = {
  stylesheet: "./md/jp/pdfconf/style.css",
  body_class: "markdown-body",
  dest: "./out/RESUME.jp.pdf",
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
