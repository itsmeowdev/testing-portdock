import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SkillCardProps {
  name: string;
  iconName: string;
}

export function SkillCard({ name, iconName }: SkillCardProps) {
  // Use a type assertion to index Icons since they are all exported from lucide-react
  const Icon = (Icons as any)[iconName] as LucideIcon;

  return (
    <div className="flex flex-col items-center p-6 bg-surface rounded-xl border border-border-color hover:border-primary hover:bg-primary/5 transition-all duration-300 group">
      <div className="p-4 rounded-full bg-background mb-4 group-hover:scale-110 transition-transform duration-300">
        {Icon ? (
          <Icon className="w-8 h-8 text-primary" />
        ) : (
          <Icons.Code className="w-8 h-8 text-primary" />
        )}
      </div>
      <h3 className="text-text font-medium text-center">{name}</h3>
    </div>
  );
}
