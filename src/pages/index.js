import React from "react";

import Layout from "@common/Layout/Layout";
import SEO from "@common/Seo/Seo";

import FeatureRow from "@common/FeatureRow/FeatureRow";
import Stories from "@common/Stories/Stories";
import Story from "@common/Story/Story";

import img1 from "../images/home/create-and-share.jpg";
import img2 from "../images/home/beautiful-stories.jpg";
import img3 from "../images/home/designed-for-everyone.jpg";

import storyImg1 from "../images/home/mountains.jpg";
import storyImg2 from "../images/home/cityscapes.jpg";
import storyImg3 from "../images/home/18-days-voyage.jpg";
import storyImg4 from "../images/home/architecturals.jpg";

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
  </Layout>
);

export default IndexPage;
