# Subscription UI
## Componenets
- **Billing Toggle** (folder contains both jsx and css)
- **Subscription Card** (folder contains both jsx and css)
  - **subscription** - Props
  - **isYearly** (flag) - Props(from Billing toggle)

## Assets
- **Subscription Data** (SubscriptionData.js)
  - id
  - priceHeader
  - priceTextMonthly 
  - priceTextYearly
  - priceSummary
  - isFree (flag)
  - hasCredits (flag)
  - isPopular (flag)
  - featureList
  - benefitsList

Easy to change anything just from Subscription Data, we can select popular one just by turning flag on and it will adapt to the feature

CSS is written in order of div with representation of div, sub-div, etc. Can open CSS file to preview the structure of code. This site is both Mobile and Desktop Compatible and can be viewed from anything.
