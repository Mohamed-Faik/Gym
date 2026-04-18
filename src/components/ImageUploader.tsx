import { useRef, useState, useCallback } from "react";
import { Camera, Upload, X, RotateCcw } from "lucide-react";

interface ImageUploaderProps {
  onImageSelected: (file: File, dataUrl: string) => void;
}

export function ImageUploader({ onImageSelected }: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);

  const handleFile = useCallback(
    (file: File) => {
      if (!file.type.startsWith("image/")) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          onImageSelected(file, e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    },
    [onImageSelected]
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const openCamera = async () => {
    setCameraError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      streamRef.current = stream;
      setCameraOpen(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      }, 100);
    } catch {
      setCameraError(
        "Camera access denied. Please allow camera access in your browser settings."
      );
    }
  };

  const closeCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    setCameraOpen(false);
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(video, 0, 0);
    canvas.toBlob((blob) => {
      if (!blob) return;
      const file = new File([blob], "camera-capture.jpg", {
        type: "image/jpeg",
      });
      const dataUrl = canvas.toDataURL("image/jpeg");
      onImageSelected(file, dataUrl);
      closeCamera();
    }, "image/jpeg");
  };

  return (
    <>
      <div
        className={`upload-zone ${isDragOver ? "drag-over" : ""}`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragOver(true);
        }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <span className="upload-zone-icon">📸</span>
        <p className="upload-zone-title">Upload a gym machine photo</p>
        <p className="upload-zone-subtitle">
          Drag & drop an image here, or use the buttons below
        </p>
        <div
          className="upload-actions"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="btn btn-primary btn-lg"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload size={18} />
            Choose Photo
          </button>
          <button className="btn btn-secondary btn-lg" onClick={openCamera}>
            <Camera size={18} />
            Use Camera
          </button>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>

      {cameraError && (
        <p
          style={{
            color: "var(--danger)",
            fontSize: "0.875rem",
            marginTop: "0.75rem",
            textAlign: "center",
          }}
        >
          {cameraError}
        </p>
      )}

      {cameraOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <span className="modal-title">📷 Take a Photo</span>
              <button className="modal-close" onClick={closeCamera}>
                <X size={20} />
              </button>
            </div>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="camera-video"
            />
            <canvas ref={canvasRef} style={{ display: "none" }} />
            <div className="modal-actions">
              <button className="btn btn-primary btn-lg" onClick={capturePhoto}>
                <Camera size={18} />
                Capture
              </button>
              <button className="btn btn-ghost" onClick={closeCamera}>
                <RotateCcw size={16} />
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
