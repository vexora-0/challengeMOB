import React from 'react';
import { GiCrystalBars, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  OriginalPrice,
  PricingCardPlan,
  HighlightedFeature,
  PricingCardCost,
  PricingCardFeatures,
  PricingCardFeature,
  ExternalButton // Use the new styled component for external links
} from './Pricing.elements';

const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Live Challenges</PricingHeading>
          <PricingContainer>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>7 Day LinkedIn Challenge</PricingCardPlan>
                <OriginalPrice>₹699/-</OriginalPrice>
                <PricingCardCost>₹99/-</PricingCardCost>
                <PricingCardFeatures>
                  <HighlightedFeature>LinkedIn Cookbook</HighlightedFeature>
                  <HighlightedFeature>AI LinkedIn Tool</HighlightedFeature>
                  <HighlightedFeature>Daily Job Search Checklist</HighlightedFeature>
                  <PricingCardFeature>Passive Job Search Checklist</PricingCardFeature>
                  <PricingCardFeature>Profile Building Checklist</PricingCardFeature>
                  <HighlightedFeature>LinkedIn Templates for Job Search</HighlightedFeature>
                  <PricingCardFeature>Cold Email Templates for Job Search</PricingCardFeature>
                  <PricingCardFeature>Webinar Recording</PricingCardFeature>
                  <PricingCardFeature>LinkedIn Workshop Slides</PricingCardFeature>
                  <PricingCardFeature>+4 more</PricingCardFeature>
                </PricingCardFeatures>
                <ExternalButton href="https://pages.razorpay.com/challengemobxharshith" target="_blank" primary>
                  Enroll Now
                </ExternalButton>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}

export default Pricing;
