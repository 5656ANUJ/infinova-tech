"use client";
import ComingSoon from "../Components/ComingSoon";
import { Palette } from "lucide-react";
import React from "react";

export default function GraphicDesignComingSoon() {
  return (
    <ComingSoon
      title="Graphic Design Services"
      description="Our creative studio is preparing to launch a stunning showcase of design services. From branding to digital art, wait for the magic."
      icon={<Palette size={120} className="text-pink-400" />}
    />
  );
}
