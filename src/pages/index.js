import React from "react";

import Layout from "@common/Layout/Layout";
import SEO from "@common/Seo/Seo";

import FeatureRow from "@common/FeatureRow/FeatureRow";

import img1 from "../images/home/create-and-share.jpg";
import img2 from "../images/home/beautiful-stories.jpg";
import img3 from "../images/home/designed-for-everyone.jpg";

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
      linkText="View the stories"
    />
  </Layout>
);

export default IndexPage;
