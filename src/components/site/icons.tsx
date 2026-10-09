import type { ComponentType, SVGProps } from "react";
import {
  Globe, Smartphone, Cog, PenTool, Cloud, Bot, LifeBuoy, Search, Target, Megaphone, PenLine, Gem, MessageSquare,
  Handshake, UserRound, ChartColumn, KeyRound, Hospital, ShoppingCart, House, GraduationCap, Laptop, Factory,
  ShoppingBag, Hotel, Coins, Sparkles, Compass, Rocket, Server, TrendingUp, Code2, Image,
  Star, ArrowRight, ArrowUpRight, Check, X, Minus, Play, Phone, Mail, MapPin, Clock,
} from "lucide-react";

type Icon = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string; strokeWidth?: number }>;

export const ICONS: Record<string, Icon> = {
  globe: Globe,
  smartphone: Smartphone,
  cog: Cog,
  pen: PenTool,
  cloud: Cloud,
  bot: Bot,
  lifebuoy: LifeBuoy,
  search: Search,
  target: Target,
  megaphone: Megaphone,
  penline: PenLine,
  gem: Gem,
  message: MessageSquare,
  handshake: Handshake,
  user: UserRound,
  chart: ChartColumn,
  key: KeyRound,
  hospital: Hospital,
  cart: ShoppingCart,
  home: House,
  school: GraduationCap,
  laptop: Laptop,
  factory: Factory,
  bag: ShoppingBag,
  hotel: Hotel,
  coins: Coins,
  sparkles: Sparkles,
  compass: Compass,
  rocket: Rocket,
  server: Server,
  trendingup: TrendingUp,
  code: Code2,
  image: Image,
};

export function Ico({ name, size = 22, className }: { name: string; size?: number; className?: string }) {
  const C = ICONS[name] ?? Globe;
  return <C size={size} strokeWidth={1.75} className={className} aria-hidden="true" />;
}

export { Star, ArrowRight, ArrowUpRight, Check, X, Minus, Play, Phone, Mail, MapPin, Clock };
