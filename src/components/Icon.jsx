import {
  Share2, Palette, Megaphone, BarChart3, BadgeCheck, Compass, Search, FileBarChart, Lightbulb,
  MessagesSquare, Repeat, Handshake, LayoutGrid, Users, Target, TrendingUp, GraduationCap, HeartPulse,
  ShoppingBag, Rocket, Briefcase, UtensilsCrossed, UserRound, Ear, SlidersHorizontal,
} from 'lucide-react';

const icons = {
  share: Share2, palette: Palette, megaphone: Megaphone, chart: BarChart3, badge: BadgeCheck, compass: Compass,
  search: Search, report: FileBarChart, lightbulb: Lightbulb, message: MessagesSquare, repeat: Repeat,
  handshake: Handshake, layout: LayoutGrid, users: Users, target: Target, trend: TrendingUp,
  graduation: GraduationCap, heart: HeartPulse, bag: ShoppingBag, rocket: Rocket, briefcase: Briefcase,
  utensils: UtensilsCrossed, user: UserRound, ear: Ear, sliders: SlidersHorizontal,
};

// Icons are decorative: the visible text next to them carries the meaning.
export default function Icon({ name, className }) {
  const Cmp = icons[name] || Lightbulb;
  return <Cmp className={className} aria-hidden="true" focusable="false" />;
}

export function IconChip({ name, tone }) {
  return (
    <span className={`icon-chip${tone !== undefined ? ` tone-${tone % 6}` : ''}`}>
      <Icon name={name} />
    </span>
  );
}
