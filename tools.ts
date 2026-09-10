export type ToolCategory = "Create" | "Write" | "Research" | "Automate";
export type Tool = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: ToolCategory;
  icon: "create" | "write" | "automate" | "research";
  badge: string;
  badgePt: string;
  description: string;
  descriptionPt: string;
  rating: string;
  price: string;
  bestFor: string;
  bestForPt: string;
  highlight: string;
  highlightPt: string;
  href: string;
  color: string;
  website: string;
  tags: string[];
  pros: string[];
  cons: string[];
  features: string[];
  alternatives: string[];
  scores: { usefulness: number; ease: number; quality: number; value: number };
  lastReviewed: string;
};

export const tools: Tool[] = [
  {
    id: "tubemagic", slug: "tubemagic", name: "TubeMagic", shortName: "TubeMagic", category: "Write", icon: "write",
    badge: "Featured pick", badgePt: "Destaque", description: "An AI toolbox for YouTube ideas, scripts, titles, tags, descriptions, and channel growth.", descriptionPt: "Uma caixa de ferramentas de IA para ideias, roteiros, títulos, tags, descrições e crescimento no YouTube.", rating: "8.8/10", price: "Check current offer", bestFor: "YouTube growth", bestForPt: "Crescimento no YouTube", highlight: "Partner offer", highlightPt: "Oferta parceira", href: "https://tubemagic.com/ds#aff=gideonicruz110e", color: "lime", website: "https://tubemagic.com/", tags: ["youtube", "content", "writing"], pros: ["Focused YouTube workflow", "Covers ideation through metadata", "Useful for repeatable publishing"], cons: ["Niche if you do not publish on YouTube", "Pricing should be checked before purchase"], features: ["Ideas", "Scripts", "Titles", "Tags", "Descriptions"], alternatives: ["descript"], scores: { usefulness: 9, ease: 9, quality: 8, value: 8 }, lastReviewed: "2026-09-09"
  },
  {
    id: "ai-influencer-system", slug: "ai-influencer-system", name: "AI-Influencer System", shortName: "AI Influencer", category: "Create", icon: "write",
    badge: "For social creators", badgePt: "Para creators de redes sociais", description: "A practical system for building AI-powered creator content, virtual influencers, and social media assets.", descriptionPt: "Um sistema prático para criar conteúdo com IA, influenciadores virtuais e materiais para redes sociais.", rating: "8.2/10", price: "Check current offer", bestFor: "Instagram + TikTok", bestForPt: "Instagram + TikTok", highlight: "Affiliate offer", highlightPt: "Oferta de afiliado", href: "https://www.digistore24.com/redir/660957/gideonicruz110e/", color: "violet", website: "https://www.digistore24.com/", tags: ["social", "creator", "images"], pros: ["System-oriented approach", "Built around creator workflows", "Useful for social-first projects"], cons: ["Not a general-purpose editor", "Offer details can change"], features: ["AI creator content", "Virtual influencer workflow", "Social assets"], alternatives: ["descript"], scores: { usefulness: 8, ease: 8, quality: 8, value: 7 }, lastReviewed: "2026-09-09"
  },
  {
    id: "ki-komplett-system", slug: "ki-komplett-system", name: "KI-Komplett-System", shortName: "KI System", category: "Research", icon: "create",
    badge: "Guided AI system", badgePt: "Sistema guiado de IA", description: "A broader AI business system for people looking for a guided starting point rather than another app.", descriptionPt: "Um sistema amplo de negócios com IA para quem busca um ponto de partida guiado, não apenas mais um aplicativo.", rating: "7.8/10", price: "Check current offer", bestFor: "AI beginners", bestForPt: "Iniciantes em IA", highlight: "Affiliate offer", highlightPt: "Oferta de afiliado", href: "https://business-kickstart.de/ki-training-1/#aff=gideonicruz110e", color: "blue", website: "https://business-kickstart.de/", tags: ["business", "beginner", "ai"], pros: ["Guided entry point", "Broader than a single-purpose app", "Good for structured learning"], cons: ["Less relevant to advanced specialists", "Offer details can change"], features: ["AI business guidance", "Structured starting point", "Workflow concepts"], alternatives: ["tubemagic"], scores: { usefulness: 8, ease: 7, quality: 8, value: 7 }, lastReviewed: "2026-09-09"
  },
  {
    id: "descript", slug: "descript", name: "Descript", shortName: "Descript", category: "Create", icon: "create",
    badge: "For video teams", badgePt: "Para equipes de vídeo", description: "Edit video and podcasts like a document, with transcription, clips, and audio cleanup included.", descriptionPt: "Edite vídeos e podcasts como um documento, com transcrição, clipes e limpeza de áudio incluídos.", rating: "8.8/10", price: "Check current offer", bestFor: "Video repurposing", bestForPt: "Reaproveitamento de vídeo", highlight: "$0 free plan", highlightPt: "Plano grátis de $0", href: "https://www.descript.com/", color: "pink", website: "https://www.descript.com/", tags: ["video", "podcast", "transcription"], pros: ["Text-based editing", "Strong repurposing workflow", "Useful for audio and video"], cons: ["Best value depends on usage", "Advanced production may still need other tools"], features: ["Transcription", "Video editing", "Clips", "Audio cleanup"], alternatives: ["tubemagic"], scores: { usefulness: 9, ease: 9, quality: 9, value: 8 }, lastReviewed: "2026-09-09"
  },
];

export const categories = ["All", ...Array.from(new Set(tools.map((tool) => tool.category)))] as const;
export type Category = typeof categories[number];

export function getTool(slug: string) { return tools.find((tool) => tool.slug === slug); }
export function categoryLabelPt(category: Category | ToolCategory) { return ({ All: "Todas", Create: "Criar", Write: "Escrever", Research: "Pesquisar", Automate: "Automatizar" } as Record<string,string>)[category]; }
