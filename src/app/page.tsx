"use client";

import { ImageUpload } from "@/components/ImageUpload";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const [fun, setFun] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setFile((_) => file);
  };

  useEffect(() => {
    if (!file) return;
    setLoading((_) => true);
    const data = new FormData();
    data.append("image", file);
    axios
      .post("/api", data)
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          setFun((_) => response.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading((_) => false);
      });
  }, [file]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ImageUpload
        handleFileChange={handleFileChange}
        loading={loading}
        file={file}
        fun={fun}
      />
    </main>
  );
}
