"use client";

import StickyHeaderClient from "./StickyHeaderClient";

export default function ClientEffects() {
  return (
    <>
      <StickyHeaderClient target="#site-header" threshold={8} scrolledClasses="shadow-sm" />
    </>
  );
}
