module.exports = {
  stylesheet: "./pdf-configs/en/style.css",
  body_class: "markdown-body",
  dest: "./pdf/RESUME.en.pdf",
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