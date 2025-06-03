import { cn } from "@/lib/utils";

const COLOR_MAP = {
  red: { bgColor: "bg-red-100", textColor: "text-red-600" },
  orange: { bgColor: "bg-orange-100", textColor: "text-orange-600" },
  amber: { bgColor: "bg-amber-100", textColor: "text-amber-600" },
  yellow: { bgColor: "bg-yellow-100", textColor: "text-yellow-600" },
  lime: { bgColor: "bg-lime-100", textColor: "text-lime-600" },
  green: { bgColor: "bg-green-100", textColor: "text-green-600" },
  emerald: { bgColor: "bg-emerald-100", textColor: "text-emerald-600" },
  teal: { bgColor: "bg-teal-100", textColor: "text-teal-600" },
  cyan: { bgColor: "bg-cyan-100", textColor: "text-cyan-600" },
  sky: { bgColor: "bg-sky-100", textColor: "text-sky-600" },
  blue: { bgColor: "bg-blue-100", textColor: "text-blue-600" },
  indigo: { bgColor: "bg-indigo-100", textColor: "text-indigo-600" },
  violet: { bgColor: "bg-violet-100", textColor: "text-violet-600" },
  purple: { bgColor: "bg-purple-100", textColor: "text-purple-600" },
  fuchsia: { bgColor: "bg-fuchsia-100", textColor: "text-fuchsia-600" },
  pink: { bgColor: "bg-pink-100", textColor: "text-pink-600" },
  rose: { bgColor: "bg-rose-100", textColor: "text-rose-600" },
};

const ALLOWED_COLORS = Object.keys(COLOR_MAP) as (keyof typeof COLOR_MAP)[];

type AllowedColor = keyof typeof COLOR_MAP;

type TagProps = {
  label: string;
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
        "px-4 py-1 rounded-full text-base font-semibold text-center",
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
