import { useState } from "react";

interface Props {
  items: any[] | any;
  direction: string,
  pauseOnHover: boolean,
  size: string,
  duration: string,
  textColor: string,
  bgAccentColor: string
}

function LogoWall({
  items = [],
  direction = "horizontal",
  pauseOnHover = false,
  size = "clamp(8rem, 1rem + 30vmin, 25rem)",
  duration = "60s",
  textColor = "#ffffff",
  bgAccentColor = "#111111"
}: Props) {
  const [isPaused, setIsPaused] = useState(false);

  const wrapperClass = [
    "flex",
    "flex-col",
    "gap-[calc(var(--size)/14)]",
    "mx-auto",
    "max-w-full",
    "p-[20px_10px]",
    direction === "vertical" && "flex-row justify-center h-full"
  ]
    .filter(Boolean)
    .join(" ");

  const marqueeClass = [
    "relative",
    "flex",
    "overflow-hidden",
    "select-none",
    "gap-[calc(var(--size)/14)]",
    "justify-start",
    "w-full",
    "mask-horizontal",
    direction === "vertical" && "flex-col h-full mask-vertical",
    isPaused && "paused"
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      className={wrapperClass}
      style={{
        ["--size"]: size,
        ["--duration"]: duration,
        ["--color-text"]: textColor,
        ["--color-bg-accent"]: bgAccentColor,
        color: "var(--color-text)",
        backgroundColor: "var(--color-bg)"
      }}
    >


      <div
        className={
          marqueeClass + " marquee--reverse"
        }
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div
          className={[
            "flex-shrink-0",
            "flex",
            "items-center",
            "justify-around",
            "gap-[calc(var(--size)/14)]",
            "min-w-full",
            "animate-scrollX reverse-x",
            direction === "vertical" && "flex-col min-h-full animate-scrollY reverse-x"
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {items.map((item, idx) => (
            <img
              key={`rev-${idx}`}
              src={item?.imgUrl}
              alt={item?.altText}
              className={[
                "bg-[var(--color-bg-accent)]",
                "rounded-md",
                "object-contain",
                "aspect-video",
                `w-[var(--size)] p-[calc(var(--size)/10)]`,
                direction === "vertical" &&
                "aspect-square w-[calc(var(--size)/1.5)] p-[calc(var(--size)/6)]"
              ]
                .filter(Boolean)
                .join(" ")}
            />
          ))}
        </div>
        <div
          aria-hidden="true"
          className={[
            "flex-shrink-0",
            "flex",
            "items-center",
            "justify-around",
            "gap-[calc(var(--size)/14)]",
            "min-w-full",
            "animate-scrollX reverse-x",
            direction === "vertical" && "flex-col min-h-full animate-scrollY reverse-x"
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {items.map((item, idx) => (
            <img
              key={`dup2-${idx}`}
              src={item.imgUrl}
              width={40}
              alt={item.altText}
              className={[
                "bg-[var(--color-bg-accent)]",
                "rounded-md",
                "object-contain",
                "aspect-video",
                `w-[var(--size)] p-[calc(var(--size)/10)]`,
                direction === "vertical" &&
                "aspect-square w-[calc(var(--size)/1.5)] p-[calc(var(--size)/6)]"
              ]
                .filter(Boolean)
                .join(" ")}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export default LogoWall;
