import { useEffect, useRef } from "react";
import { fabric } from "fabric";

export default function CanvasLayer() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);
    canvas.add(new fabric.Textbox("Edit me", { left: 50, top: 50 }));
  }, []);

  return <canvas ref={canvasRef} />;
}
