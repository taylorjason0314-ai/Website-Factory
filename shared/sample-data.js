export const sampleWorkspace = {
  prospect: {
    id: "prospect_vista_landscape",
    businessName: "Vista Landscaping",
    prospectStatus: "Qualified",
    outreachStatus: "draft",
    totalScore: 83,
    priority: "High",
    nextAction: "Send first outreach",
    nextActionDue: "2026-03-26",
  },
  review: {
    totalScore: 83,
    design: 5,
    mobile: 4,
    cta: 5,
    trust: 4,
    branding: 4,
    opportunity: 5,
    topIssues: [
      "Homepage says site is under construction",
      "Weak mobile lead capture",
      "Thin trust proof",
    ],
  },
  concept: {
    headline: "Turn more visitors into quote requests",
    offerAngle: "Lead Gen Website Rebuild",
    sections: ["Hero", "Trust block", "Service area block", "Quote CTA"],
    notes: "Lead with unfinished-site credibility gap.",
  },
  outreachRecords: [
    {
      id: "outreach_vista_1",
      channel: "email",
      status: "draft",
      angle: "unfinished site hurting trust",
      sentAt: null,
      followUpAt: null,
    },
  ],
  tasks: [
    {
      id: "task_vista_1",
      title: "Send first outreach",
      done: false,
    },
  ],
  timelineSummary: [
    "Website reviewed",
    "Score normalized to 83",
    "Mock concept drafted",
  ],
};

export const sampleProspect = sampleWorkspace.prospect;
