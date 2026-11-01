import { ogSize, renderOg } from "@/lib/og";

export const alt = "Xelerate — business transformation on Oracle NetSuite";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({ kicker: "Xelerate Business Solutions", title: "Accelerate how your business runs." });
}
