export const company = {
  name: 'AFL Cognitive Systems',
  legalName: 'AFL Cognitive Systems Private Limited',
  tagline: 'Enterprise AI for Banking & Healthcare',
  description:
    'Building Explainable AI, Agentic AI, RAG, and Autonomous AI solutions that transform how enterprises operate.',
  email: 'contact@aflcognitive.com',
  phone: '+91 80 0000 0000',
  location: 'Bangalore, India',
}

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Solutions',
    path: '/solutions',
    children: [
      { label: 'Healthcare', path: '/solutions/healthcare' },
      { label: 'Banking', path: '/solutions/banking' },
    ],
  },
  { label: 'AI Capabilities', path: '/ai-capabilities' },
  { label: 'Why AFL', path: '/why-afl' },
  { label: 'Publication', path: '/publication' },
  { label: 'Contact', path: '/contact' },
]

export const stats = [
  { value: 99.7, suffix: '%', label: 'Decision Accuracy', decimals: 1 },
  { value: 10, suffix: 'x', label: 'Faster Processing', decimals: 0 },
  { value: 100, suffix: '%', label: 'Audit Trail Coverage', decimals: 0 },
  { value: 50, suffix: '+', label: 'Enterprise Integrations', decimals: 0 },
]

export const healthcareSolution = {
  title: 'Explainable Claims Copilot',
  subtitle: 'AI-powered decision support for health insurance',
  description:
    'An AI-powered decision support platform that helps health insurers, TPAs, and hospitals process claims faster with explainable, auditable AI.',
  features: [
  { title: 'Policy Understanding', description: 'Deep NLP analysis of policy documents and coverage terms.', icon: 'FileText' },
  { title: 'Claim Document Analysis', description: 'Automated extraction and validation from medical records.', icon: 'Scan' },
  { title: 'Eligibility Validation', description: 'Real-time checks against policy rules and exclusions.', icon: 'ShieldCheck' },
  { title: 'Fraud Detection', description: 'Pattern recognition to flag suspicious claims early.', icon: 'AlertTriangle' },
  { title: 'AI Recommendations', description: 'Context-aware suggestions for adjudicators.', icon: 'Sparkles' },
  { title: 'Explainable Decisions', description: 'Full transparency into every AI-driven recommendation.', icon: 'Eye' },
  { title: 'Similar Case Retrieval', description: 'RAG-powered lookup of historical precedents.', icon: 'Search' },
  { title: 'Audit Trail', description: 'Immutable logs for regulatory compliance.', icon: 'ClipboardList' },
  { title: 'Compliance Support', description: 'Built-in frameworks for HIPAA and local regulations.', icon: 'Scale' },
  { title: 'Reduced Turnaround Time', description: 'Accelerate claim processing from days to hours.', icon: 'Zap' },
  ],
}

export const bankingSolution = {
  title: 'The Autonomous Financial Layer (AFL)',
  subtitle: 'Enterprise AI for autonomous banking',
  description:
    'An enterprise AI platform for autonomous banking powered by Agentic AI, RAG, and multi-agent systems.',
  capabilities: [
  { title: 'AI Governance', description: 'Centralized oversight for all AI models and agents.', icon: 'Landmark' },
  { title: 'Compliance Automation', description: 'Automated regulatory reporting and policy enforcement.', icon: 'Shield' },
  { title: 'Credit Underwriting', description: 'Intelligent risk assessment with explainable outputs.', icon: 'TrendingUp' },
  { title: 'Risk Intelligence', description: 'Real-time portfolio and market risk analytics.', icon: 'Activity' },
  { title: 'Financial RAG', description: 'Retrieval-augmented generation over financial knowledge bases.', icon: 'Database' },
  { title: 'Multi-Agent Orchestration', description: 'Coordinated AI agents for complex workflows.', icon: 'Network' },
  { title: 'Security & Guardrails', description: 'Enterprise-grade safety layers for AI operations.', icon: 'Lock' },
  { title: 'Wealth Management AI', description: 'Personalized advisory powered by agentic systems.', icon: 'PieChart' },
  { title: 'Regulatory Intelligence', description: 'Continuous monitoring of regulatory changes.', icon: 'BookOpen' },
  ],
}

export const aiCapabilities = [
  {
    title: 'Explainable AI',
    description: 'Transparent, auditable AI decisions that build trust with regulators and stakeholders.',
    icon: 'Eye',
  },
  {
    title: 'Agentic AI',
    description: 'Autonomous agents that plan, reason, and execute complex multi-step workflows.',
    icon: 'Bot',
  },
  {
    title: 'Retrieval-Augmented Generation',
    description: 'Ground AI responses in your enterprise knowledge with precision retrieval.',
    icon: 'Database',
  },
  {
    title: 'Autonomous Systems',
    description: 'Self-governing AI systems that adapt and optimize without constant human intervention.',
    icon: 'Cpu',
  },
  {
    title: 'Multi-Agent Orchestration',
    description: 'Coordinate specialized agents for end-to-end enterprise automation.',
    icon: 'Network',
  },
  {
    title: 'AI Governance',
    description: 'Enterprise frameworks for model lifecycle, compliance, and risk management.',
    icon: 'Shield',
  },
]

export const whyAFL = [
  {
    title: 'Domain Expertise',
    description: 'Deep specialization in banking and healthcare regulatory landscapes.',
    icon: 'Award',
  },
  {
    title: 'Explainability First',
    description: 'Every decision is transparent, traceable, and auditable by design.',
    icon: 'Eye',
  },
  {
    title: 'Enterprise Security',
    description: 'SOC 2 aligned architecture with end-to-end encryption and guardrails.',
    icon: 'Lock',
  },
  {
    title: 'Rapid Deployment',
    description: 'Modular platform integrates with existing systems in weeks, not months.',
    icon: 'Rocket',
  },
  {
    title: 'Continuous Innovation',
    description: 'Research-driven team pushing the frontier of agentic and autonomous AI.',
    icon: 'Lightbulb',
  },
  {
    title: 'Dedicated Support',
    description: 'White-glove onboarding and 24/7 enterprise support for mission-critical workloads.',
    icon: 'Headphones',
  },
]

export const publication = {
  title: 'The Autonomous Financial Layer',
  subtitle:
    'How Agentic AI, RAG, and Autonomous Systems Will Transform Banking and Financial Services',
  status: 'Coming Soon',
  description:
    'A definitive guide to the future of autonomous banking — exploring how agentic AI, retrieval-augmented generation, and multi-agent systems are reshaping financial services.',
  topics: [
    'The evolution from automation to autonomy',
    'Agentic AI in credit and risk management',
    'Building trustworthy financial RAG systems',
    'Regulatory frameworks for autonomous banking',
    'Multi-agent orchestration at enterprise scale',
    'The road ahead for financial institutions',
  ],
}

export const timeline = [
  { year: '2020', title: 'Founded', description: 'AFL Cognitive Systems established with a vision for explainable enterprise AI.' },
  { year: '2021', title: 'Healthcare Launch', description: 'Released Explainable Claims Copilot for health insurance partners.' },
  { year: '2022', title: 'Banking Platform', description: 'Launched The Autonomous Financial Layer for enterprise banking.' },
  { year: '2023', title: 'Multi-Agent Systems', description: 'Pioneered multi-agent orchestration for financial workflows.' },
  { year: '2024', title: 'Global Expansion', description: 'Expanded operations across APAC and Middle East markets.' },
  { year: '2025', title: 'Research Publication', description: 'Upcoming book on autonomous banking and agentic AI.' },
]

export const aboutContent = {
  mission:
    'To democratize enterprise-grade AI by building transparent, autonomous systems that empower banking and healthcare organizations to make faster, smarter, and more accountable decisions.',
  vision:
    'A world where every enterprise decision is augmented by AI that is explainable, auditable, and aligned with human values.',
  values: [
    { title: 'Transparency', description: 'We believe AI must be understandable to be trustworthy.' },
    { title: 'Excellence', description: 'We hold ourselves to the highest standards of engineering and ethics.' },
    { title: 'Impact', description: 'We build technology that creates measurable value for society.' },
    { title: 'Innovation', description: 'We push boundaries while respecting regulatory and ethical guardrails.' },
  ],
}
