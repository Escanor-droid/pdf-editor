import * as pdfjsLib from "pdfjs-dist";

// IMPORTANT: set worker source once, globally
pdfjsLib.GlobalWorkerOptions.workerSrc = "/worker.js";

export default pdfjsLib;
