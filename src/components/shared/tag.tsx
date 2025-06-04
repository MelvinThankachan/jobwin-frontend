import { cn } from "@/lib/utils";
import type React from "react";

const COLOR_MAP = {
  red: { bgColor: "bg-red-100", textColor: "text-red-700" },
  orange: { bgColor: "bg-orange-100", textColor: "text-orange-700" },
  amber: { bgColor: "bg-amber-100", textColor: "text-amber-700" },
  yellow: { bgColor: "bg-yellow-100", textColor: "text-yellow-700" },
  lime: { bgColor: "bg-lime-100", textColor: "text-lime-700" },
  green: { bgColor: "bg-green-100", textColor: "text-green-700" },
  emerald: { bgColor: "bg-emerald-100", textColor: "text-emerald-700" },
  teal: { bgColor: "bg-teal-100", textColor: "text-teal-700" },
  cyan: { bgColor: "bg-cyan-100", textColor: "text-cyan-700" },
  sky: { bgColor: "bg-sky-100", textColor: "text-sky-700" },
  blue: { bgColor: "bg-blue-100", textColor: "text-blue-700" },
  indigo: { bgColor: "bg-indigo-100", textColor: "text-indigo-700" },
  violet: { bgColor: "bg-violet-100", textColor: "text-violet-700" },
  purple: { bgColor: "bg-purple-100", textColor: "text-purple-700" },
  fuchsia: { bgColor: "bg-fuchsia-100", textColor: "text-fuchsia-700" },
  pink: { bgColor: "bg-pink-100", textColor: "text-pink-700" },
  rose: { bgColor: "bg-rose-100", textColor: "text-rose-700" },
  neutral: { bgColor: "bg-neutral-100", textColor: "text-neutral-700" },
//   white: { bgColor: "bg-white/10", textColor: "text-white" },
};

const ALLOWED_COLORS = Object.keys(COLOR_MAP) as (keyof typeof COLOR_MAP)[];

type AllowedColor = keyof typeof COLOR_MAP;

type TagProps = {
  label: string | React.ReactNode;
  color?: AllowedColor;
} & React.HTMLAttributes<HTMLSpanElement>;

function getRandomColor(): AllowedColor {
  const idx = Math.floor(Math.random() * ALLOWED_COLORS.length);
  return ALLOWED_COLORS[idx];
}

const Tag: React.FC<TagProps> = ({ label, color, className, ...props }) => {
  const finalColor = color ?? getRandomColor();
  const { bgColor, textColor } = COLOR_MAP[finalColor] || COLOR_MAP["indigo"];
  return (
    <span
      className={cn(
        "px-4 py-1 rounded-full text-base font-semibold text-center flex items-center justify-center",
        bgColor,
        textColor,
        className
      )}
      {...props}
    >
      {label}
    </span>
  );
};

export default Tag;
