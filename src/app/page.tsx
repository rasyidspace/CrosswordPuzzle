"use client";

import React from "react";
import { MobileShell } from "@/components/layout/MobileShell";
import { HeaderNav } from "@/components/layout/HeaderNav";
import { BottomNav } from "@/components/layout/BottomNav";
import { PageRenderer } from "@/components/pages/PageRenderer";

export default function Home() {
  return (
    <MobileShell>
      <HeaderNav />
      <PageRenderer />
      <BottomNav />
    </MobileShell>
  );
}
