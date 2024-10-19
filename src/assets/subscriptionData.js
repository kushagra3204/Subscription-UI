const SubscriptionData = [
  {
    id: 1,
    priceHeader: 'Trial',
    priceTextMonthly: 'Try now',
    priceTextYearly: 'Try now',
    isFree: true,
    hasCredits: false,
    isPopular: false,
    priceSummary: 'Get Personalised template',
    featureList: [
      '25+ data sources',
      'GPT4, Linkedin and others',
      'Access to slack community',
      '10+ templates to scale your outbound'
    ],
    benefitsList: ['Explore product capabilities']
  },
  {
    id: 2,
    priceHeader: 'Growth',
    priceTextMonthly: '$229',
    priceTextYearly: '$2,699',
    prevPriceTextMonthly: '$459',
    prevPriceTextYearly: '$5,519',
    discount: '50%',
    isFree: false,
    hasCredits: true,
    credits: "8,000 Credits",
    isPopular: false,
    priceSummary: 'Access to features',
    featureList: [
      'Webhook, HTTP API',
      'Credit rollover (upto 2x plan credits)',
      'Outbound email integrations like instantly, Smartlead',
      'Dedicated 3 hours from Bitscale expert',
    ],
    benefitsList: [
        'Unlimited leads search',
        'Fully enriched 5000 leads',
        'Personalized outreach at scale'
    ]
  },
  {
    id: 3,
    priceHeader: 'Booster',
    priceTextMonthly: '$499',
    priceTextYearly: '$6,499',
    prevPriceTextMonthly: '$999',
    prevPriceTextYearly: '$11,999',
    discount: '50%',
    isFree: false,
    hasCredits: true,
    credits: "25,000 Credits",
    isPopular: true,
    priceSummary: 'Access to features',
    featureList: [
      'Webhook, HTTP API',
      'Credit rollover (upto 2x plan credits)',
      'Outbound email integrations like instantly, Smartlead',
      'Dedicated 3 hours from Bitscale expert',
      'Advanced models like Claude Sonnet',
      'Dedicated 8 hours from Bitscale expert',
      '2 way Hubspot integration'
    ],
    benefitsList: [
        'Unlimited leads search',
        'Fully enriched 15000 leads',
        'Personalized outreach at scale'
    ],
  },
  {
    id: 4,
    priceHeader: 'Enterprise',
    priceTextMonthly: 'Contact Us',
    priceTextYearly: 'Contact Us',
    isFree: true,
    priceSummary: 'For individual pricing',
    hasCredits: false,
    isPopular: false,
    featureList: [
      'Data privacy certification',
      'Priority Support',
      'Dedicated Bitscale expert',
      'Private Slack Channel',
      'Collaborative workspace and templates'
    ],
    benefitsList: [
        'Perfect for High-Volume End-to-End CRM Data Enrichment',
        'Unlimited list of leads with unlimited data points'
    ]
  }
]

export default SubscriptionData
