import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Upload, Search, Loader2, Image as ImageIcon } from 'lucide-react';
import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const ImageAnalyzer: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setAnalysis(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const runAnalysis = async () => {
    if (!image) return;
    setIsLoading(true);

    try {
      const base64Data = image.split(',')[1];
      const mimeType = image.split(',')[0].split(':')[1].split(';')[0];
      
      const result = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: [
          {
            parts: [
              { inlineData: { data: base64Data, mimeType } },
              { text: "Analyze this image in the context of BIG 2's investment strategy in Panama. How does this relate to shipping, agriculture (rice fields), or urban development (skyscrapers)? Provide a professional investment insight." }
            ]
          }
        ]
      });

      setAnalysis(result.text || "No analysis generated.");
    } catch (error) {
      console.error("Analysis error:", error);
      setAnalysis("Error analyzing image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 max-w-4xl mx-auto my-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-light text-white mb-4 tracking-tight">Visionary Intelligence</h2>
        <p className="text-zinc-500 max-w-xl mx-auto">
          Upload project imagery to receive AI-powered investment insights aligned with the BIG 2 strategy.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div 
            className={`aspect-video rounded-2xl border-2 border-dashed border-zinc-800 flex flex-col items-center justify-center relative overflow-hidden group transition-colors hover:border-zinc-600 ${image ? 'border-solid' : ''}`}
          >
            {image ? (
              <img src={image} alt="Upload preview" className="w-full h-full object-cover" />
            ) : (
              <div className="text-center p-6">
                <Upload className="mx-auto text-zinc-600 mb-4" size={40} />
                <p className="text-zinc-500 text-sm">Drag or click to upload project assets</p>
              </div>
            )}
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageUpload}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>

          <button
            onClick={runAnalysis}
            disabled={!image || isLoading}
            className="w-full bg-white text-black py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-zinc-200 disabled:opacity-50 transition-all"
          >
            {isLoading ? <Loader2 className="animate-spin" /> : <Search size={20} />}
            {isLoading ? 'Analyzing...' : 'Generate Insight'}
          </button>
        </div>

        <div className="bg-zinc-900/50 rounded-2xl p-6 border border-zinc-800 min-h-[300px]">
          {analysis ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="prose prose-invert prose-sm max-w-none"
            >
              <ReactMarkdown>{analysis}</ReactMarkdown>
            </motion.div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-zinc-600 text-center">
              <ImageIcon size={32} className="mb-4 opacity-20" />
              <p className="text-sm italic">Analysis results will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
