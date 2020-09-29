import React from "react";

import Layout from "@common/Layout/Layout";
import SEO from "@common/Seo/Seo";

import FeatureRow from "@common/FeatureRow/FeatureRow";
import Stories from "@common/Stories/Stories";
import Story from "@common/Story/Story";
import IconsRow from "@common/IconsRow/IconsRow";

import img1 from "../images/home/create-and-share.jpg";
import img2 from "../images/home/beautiful-stories.jpg";
import img3 from "../images/home/designed-for-everyone.jpg";

import storyImg1 from "../images/home/mountains.jpg";
import storyImg2 from "../images/home/cityscapes.jpg";
import storyImg3 from "../images/home/18-days-voyage.jpg";
import storyImg4 from "../images/home/architecturals.jpg";

import responsive from "../images/features/responsive.svg";
import unlimited from "../images/features/no-limit.svg";
import embed from "../images/features/embed.svg";

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
    titleMarginTop: "84px",
  },
  {
    title: "Available to Embed",
    text:
      "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
    img: embed,
    altText: "Available to Embed",
  },
];

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FeatureRow
      title="Create and share your photo Stories."
      text="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
      imgUrl={img1}
      linkText="Get an invite"
      special
    />
    <FeatureRow
      title="Beautiful stories
      every time"
      text="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
      alternate
      white
      imgUrl={img2}
      linkText="View the stories"
    />
    <FeatureRow
      title="Create and share your photo Stories."
      text="Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it."
      imgUrl={img3}
      white
      linkText="View the stories"
    />
    <Stories>
      <Story
        title="The Mountains"
        author="John Appleseed"
        imgUrl={storyImg1}
        imgAlt="Mountains photo"
      />
      <Story
        title="Sunset Cityscapes"
        author="Benjamin Cruz"
        imgUrl={storyImg2}
        imgAlt="Photo of a sunset"
      />
      <Story
        title="18 Days Voyage"
        author="Alexei Borodin"
        imgUrl={storyImg3}
        imgAlt="18 days voyage cover"
      />
      <Story
        title="Architecturals"
        author="Samantha Brooke"
        imgUrl={storyImg4}
        imgAlt="Book by sammy brookes"
      />
    </Stories>
    <IconsRow iconFeatures={iconFeatures} />
  </Layout>
);

export default IndexPage;
