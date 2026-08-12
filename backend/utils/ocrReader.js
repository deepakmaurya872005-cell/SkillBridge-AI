const { fromPath } = require("pdf2pic");
const Tesseract = require("tesseract.js");
const path = require("path");

async function extractTextFromPdf(pdfPath) {

    const converter = fromPath(pdfPath, {
        density: 200,
        saveFilename: "resume_page",
        savePath: "./uploads/temp",
        format: "png",
        width: 1240,
        height: 1754
    });

    const page = await converter(1);

    const result = await Tesseract.recognize(
        page.path,
        "eng"
    );

    return result.data.text;
}

module.exports = extractTextFromPdf;