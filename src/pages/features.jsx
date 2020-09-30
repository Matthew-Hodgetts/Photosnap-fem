import React from "react";

import Layout from "@common/Layout/Layout";
import SEO from "@common/Seo/Seo";

import FeatureRow from "@common/FeatureRow/FeatureRow";
import IconsRow from "@common/IconsRow/IconsRow";
import Cta from "@common/Cta/Cta";

import hero from "../images/features/hero.jpg";
import responsive from "../images/features/responsive.svg";
import unlimited from "../images/features/no-limit.svg";
import embed from "../images/features/embed.svg";
import custom from "../images/features/custom-domain.svg";
import boost from "../images/features/boost-exposure.svg";
import drag from "../images/features/drag-drop.svg";

const iconFeatures = [
  {
    title: "100% Responsive",
    text:
      "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    img: responsive,
    altText: "100% Responsive",
  },
  {
    title: "No Photo Upload Limit",
    text:
      "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    img: unlimited,
    altText: "No Photo Upload Limit",
    titleMarginTop: "82px",
  },
  {
    title: "Available to Embed",
    text:
      "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
    img: embed,
    altText: "Available to Embed",
  },
  {
    title: "Custom Domain",
    text:
      "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
    img: custom,
    altText: "Custom Domain",
  },
  {
    title: "Boost Your Exposure",
    text:
      "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
    img: boost,
    altText: "Boost Your Exposure",
    titleMarginTop: "82px",
  },
  {
    title: "Drag & Drop Image",
    text:
      "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
    img: drag,
    altText: "Drag & Drop Image",
  },
];

const FeaturesPage = () => {
  return (
    <Layout>
      <SEO title="Features" />
      <FeatureRow
        title="Features"
        text="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
        imgUrl={hero}
        special
      />

      <IconsRow iconFeatures={iconFeatures} />
      <Cta title="We're in beta. Get your invite today!" />
    </Layout>
  );
};

export default FeaturesPage;
