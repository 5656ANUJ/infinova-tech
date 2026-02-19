"use client";
import ComingSoon from "../Components/ComingSoon";
import { Smartphone } from "lucide-react";
import React from "react";

export default function MobileDevComingSoon() {
  return (
    <ComingSoon
      title="Mobile App Development"
      description="We are crafting an exceptional mobile development experience. Our team is working on cutting-edge solutions for iOS and Android."
      icon={<Smartphone size={120} className="text-blue-400" />}
    />
  );
}
