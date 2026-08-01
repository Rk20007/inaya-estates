import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

function getMarkDataUri() {
  const filePath = join(process.cwd(), "public", "inaya-estates-mark.png");
  const base64 = readFileSync(filePath).toString("base64");
  return `data:image/png;base64,${base64}`;
}

export default function Icon() {
  const markSrc = getMarkDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={markSrc} width={30} height={30} alt="" />
      </div>
    ),
    { ...size }
  );
}
