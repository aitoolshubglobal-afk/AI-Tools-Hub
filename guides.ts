export type Guide = {
  slug: string;
  title: string;
  description: string;
  readTime: string;
  updated: string;
  category: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  relatedTools: string[];
};

export const guides: Guide[] = [
  {
    slug: "how-to-choose-ai-tools",
    title: "How to choose AI tools without wasting money",
    description: "A practical framework for comparing AI software by job, workflow, switching cost, and actual value.",
    readTime: "6 min",
    updated: "2026-09-10",
    category: "Buying guide",
    relatedTools: ["tubemagic", "descript"],
    sections: [
      { heading: "Start with the job, not the tool", paragraphs: ["The fastest way to overspend on AI is to start with a product list. Start with the job you need done: write scripts, edit clips, research a topic, automate repetitive steps, or create social assets.", "Once the job is clear, compare only products that solve that job. A tool that does 50 things badly is not automatically better than one that does five things well."] },
      { heading: "Use four questions before buying", paragraphs: ["Ask whether the tool improves a workflow you already repeat, whether its output needs heavy cleanup, whether you can export your work, and whether the billing model matches how often you will use it."], bullets: ["What specific task will I use it for every week?", "What does the free or cheapest path let me verify?", "What happens if I stop paying?", "Is the time saved worth the recurring cost?"] },
      { heading: "Separate evidence from marketing", paragraphs: ["Vendor pages are useful for current features and prices, but they are not neutral reviews. Treat claims about results, growth, or income as marketing claims unless you can verify the underlying evidence.", "At AI Tools Hub, we label editorial signals as editorial signals and show the review date so a reader can judge how fresh the information is."] },
      { heading: "The best tool is the one you will actually use", paragraphs: ["A slightly less powerful tool with a clear workflow can beat a feature-rich product that creates friction. Before buying, picture the exact moment you will open it and what you expect to have finished 20 minutes later."] },
    ],
  },
  {
    slug: "youtube-ai-workflow",
    title: "A practical AI workflow for YouTube creators",
    description: "How to use AI for ideation, scripting, metadata, and repurposing without turning your channel into generic AI content.",
    readTime: "7 min",
    updated: "2026-09-10",
    category: "YouTube",
    relatedTools: ["tubemagic", "descript"],
    sections: [
      { heading: "Use AI before and after recording", paragraphs: ["AI is most useful when it removes repetitive preparation and post-production. Keep the human decisions—topic choice, point of view, examples, fact checking, and final edit—under your control."] },
      { heading: "A five-step workflow", paragraphs: ["Start by collecting audience questions. Turn the strongest question into a clear promise. Draft an outline, not a finished script. Record naturally. Then use AI to clean the transcript and generate derivative assets such as clips, descriptions, or title options."], bullets: ["Audience question → topic promise", "Outline → draft → human edit", "Record → transcript → cleanup", "Long video → clips and social posts", "Review analytics → feed the next topic"] },
      { heading: "Avoid the AI-content trap", paragraphs: ["More output is not automatically more useful. Search engines and audiences both benefit when your content adds original experience, evidence, examples, or a distinct point of view. Use AI as production leverage rather than as a substitute for expertise."] },
    ],
  },
  {
    slug: "repurpose-video-with-ai",
    title: "How to repurpose one video into a content system",
    description: "A repeatable process for turning one long recording into clips, captions, notes, and distribution-ready assets.",
    readTime: "5 min",
    updated: "2026-09-10",
    category: "Video",
    relatedTools: ["descript"],
    sections: [
      { heading: "Record for the source asset", paragraphs: ["The best repurposing workflow starts with a useful original recording. Keep the structure clear and say important points in complete thoughts so transcription and clipping tools have better material to work with."] },
      { heading: "Create a content map", paragraphs: ["After transcription, identify the strongest claims, stories, demonstrations, and objections. Each can become a short clip, quote, carousel idea, newsletter paragraph, or FAQ. Do not simply paste the transcript everywhere."] },
      { heading: "Edit for the destination", paragraphs: ["A short video needs a faster opening. A newsletter needs context. A search article needs structure and evidence. The same source can support several formats, but each format still needs editorial work."] },
    ],
  },
  {
    slug: "affiliate-ai-tools-site",
    title: "How an AI tools site can earn with affiliate marketing",
    description: "What makes an AI affiliate directory useful instead of a thin list of product links.",
    readTime: "8 min",
    updated: "2026-09-10",
    category: "Monetization",
    relatedTools: ["tubemagic", "ai-influencer-system", "descript"],
    sections: [
      { heading: "Traffic is not the business model", paragraphs: ["An affiliate site earns when a visitor has enough trust and intent to take an action. That means the site needs to answer the questions that appear immediately before a purchase: who is this for, what does it replace, what are the trade-offs, and what should I try first?"] },
      { heading: "Build pages around decisions", paragraphs: ["Useful pages include tool reviews, alternatives, comparisons, category guides, and workflow tutorials. A directory becomes stronger when these pages connect to one another and each page adds original decision-making value."] },
      { heading: "Do not fake testing or reviews", paragraphs: ["If you did not personally test a product, say so. Use provider documentation, pricing pages, public evidence, and clearly dated editorial research instead. Google explicitly warns against thin affiliate pages that merely copy merchant descriptions; added value is the important distinction."] },
      { heading: "Monetize after usefulness", paragraphs: ["Affiliate links should be clear, appropriately qualified, and secondary to the user's decision. Build the page so it remains useful even if the reader never clicks the commercial link."] },
    ],
  },
];

export function getGuide(slug: string) { return guides.find((guide) => guide.slug === slug); }
