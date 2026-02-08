import { useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";

export default function PdfViewer({ file }) {
  const canvasRef = useRef();

  useEffect(() => {
    if (!file) return;

    const renderPdf = async () => {
      const pdf = await pdfjsLib.getDocument(URL.createObjectURL(file)).promise;
      const page = await pdf.getPage(1);

      const viewport = page.getViewport({ scale: 1.5 });
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({ canvasContext: ctx, viewport }).promise;
    };

    renderPdf();
  }, [file]);

  return <canvas ref={canvasRef} />;
}
