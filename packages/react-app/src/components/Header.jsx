import React from "react";
import { PageHeader } from "antd";

// displays a page header

export default function Header() {
  return (
    <a>
      <PageHeader
        title="Admin NFT Dashboard"
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
