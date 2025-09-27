"use client";

import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { baseUrl } from "@/lib/base-url";

export default function FormUpload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  // Helper to get presigned URL and upload file
  const uploadFile = async (file: File) => {
    const { data } = await axios.post(`${baseUrl}/uploads/presign`, {
      filename: file.name,
      contentType: file.type,
    });

    await axios.put(data.url, file, {
      headers: { "Content-Type": file.type },
      onUploadProgress: (e) => {
        if (e.total) {
          console.log(
            `Upload progress: ${Math.round((e.loaded / e.total) * 100)}%`
          );
        }
      },
    });

    return data.key; // Return S3 key to store in DB
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!audioFile || !imageFile) {
      toast.error("Please select both audio and image files.");
      return;
    }

    setUploading(true);
    try {
      // Upload audio and image files
      const [audioKey, imageKey] = await Promise.all([
        uploadFile(audioFile),
        uploadFile(imageFile),
      ]);

      //changing price to cents
      const priceInCents = Math.round(parseFloat(price) * 100);

      // Call backend to create kit
      await axios.post(`${baseUrl}/kits`, {
        title,
        description,
        price: priceInCents,
        audioKey,
        imageKey,
      });

      toast.success("Kit uploaded successfully!");
      setTitle("");
      setDescription("");
      setPrice("");
      setAudioFile(null);
      setImageFile(null);
    } catch (err) {
      console.error(err);
      toast.error("Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto my-16">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Upload A Drum Kit</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              type="number"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="audio">Audio File</Label>
            <Input
              id="audio"
              type="file"
              accept="audio/*"
              onChange={(e) => setAudioFile(e.target.files?.[0] || null)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Image File</Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files?.[0] || null)}
              required
            />
          </div>

          <Button type="submit" disabled={uploading}>
            {uploading ? "Uploading..." : "Upload Kit"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
