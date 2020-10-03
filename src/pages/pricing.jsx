import React from "react";

import Layout from "@common/Layout/Layout";
import SEO from "@common/Seo/Seo";

import FeatureRow from "@common/FeatureRow/FeatureRow";
import Cta from "@common/Cta/Cta";
import Plans from "@components/pricing/Plans/Plans";
import Compare from "@components/pricing/Compare/Compare";

import hero from "../images/pricing/hero.jpg";

const PricingPage = () => {
  return (
    <Layout>
      <SEO title="Pricing" />
      <FeatureRow
        title="Pricing"
        text="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
        imgUrl={hero}
        special
      />
      <Plans />
      <Compare />
      <Cta title="We're in beta. Get your invite today!" />
    </Layout>
  );
};

export default PricingPage;
