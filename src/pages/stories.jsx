import React from "react";

import Layout from "@common/Layout/Layout";
import SEO from "@common/Seo/Seo";

import Hero from "@components/stories/Hero/Hero";
import Stories from "@common/Stories/Stories";
import Story from "@common/Story/Story";

// Images for the stories
import storyImg1 from "../images/stories/mountains.jpg";
import storyImg2 from "../images/stories/cityscapes.jpg";
import storyImg3 from "../images/stories/18-days-voyage.jpg";
import storyImg4 from "../images/stories/architecturals.jpg";
import storyImg5 from "../images/stories/world-tour.jpg";
import storyImg6 from "../images/stories/unforeseen-corners.jpg";
import storyImg7 from "../images/stories/king-on-africa.jpg";
import storyImg8 from "../images/stories/trip-to-nowhere.jpg";
import storyImg9 from "../images/stories/rage-of-the-sea.jpg";
import storyImg10 from "../images/stories/running-free.jpg";
import storyImg11 from "../images/stories/behind-the-waves.jpg";
import storyImg12 from "../images/stories/calm-waters.jpg";
import storyImg13 from "../images/stories/milky-way.jpg";
import storyImg14 from "../images/stories/dark-forest.jpg";
import storyImg15 from "../images/stories/somwarpet.jpg";
import storyImg16 from "../images/stories/land-of-dreams.jpg";

const StoriesPage = () => {
  return (
    <Layout>
      <SEO title="Stories" />
      <Hero />
      <Stories>
        <Story
          title="The Mountains"
          author="John Appleseed"
          imgUrl={storyImg1}
          imgAlt="Mountains photo"
          date="April 16th 2020"
        />
        <Story
          title="Sunset Cityscapes"
          author="Benjamin Cruz"
          imgUrl={storyImg2}
          imgAlt="Photo of a sunset"
          date="april 14th 2020"
        />
        <Story
          title="18 Days Voyage"
          author="Alexei Borodin"
          imgUrl={storyImg3}
          imgAlt="18 days voyage cover"
          date="april 11th 2020"
        />
        <Story
          title="Architecturals"
          author="Samantha Brooke"
          imgUrl={storyImg4}
          imgAlt="Book by sammy brookes"
          date="April 9th 2020"
        />
        <Story
          title="World Tour 2019"
          author="Timothy Wagner"
          imgUrl={storyImg5}
          imgAlt="World tour cover"
          date="April 7th 2020"
        />
        <Story
          title="Unforseen Corners"
          author="William Malcom"
          imgUrl={storyImg6}
          imgAlt="Unforseen corners cover"
          date="April 6th 2020"
        />
        <Story
          title="King on Africa: Part II"
          author="Irene Thien"
          imgUrl={storyImg7}
          imgAlt="King on africa part 2"
          date="April 4th 2020"
        />
        <Story
          title="The Trip to Nowhere"
          author="Mike Pirompohn"
          imgUrl={storyImg8}
          imgAlt="The trip to nowhere cover"
          date="April 1st 2020"
        />
        <Story
          title="Rage of the Sea"
          author="Michael Cuisance"
          imgUrl={storyImg9}
          imgAlt="Rage of the sea cover"
          date="March 31st 2020"
        />
        <Story
          title="Running Free"
          author="Pablo Hernandez"
          imgUrl={storyImg10}
          imgAlt="Running free cover"
          date="March 28th 2020"
        />
        <Story
          title="Behind the Waves"
          author="Jay Chou"
          imgUrl={storyImg11}
          imgAlt="Behind the waves cover"
          date="March 20th 2020"
        />
        <Story
          title="Calm Waters"
          author="Nikki Hayley"
          imgUrl={storyImg12}
          imgAlt="Calm waters cover"
          date="March 19th 2020"
        />
        <Story
          title="The Milky Way"
          author="Ted Cruz"
          imgUrl={storyImg13}
          imgAlt="The mily way cover"
          date="March 16th 2020"
        />
        <Story
          title="Night at The Dark Forest"
          author="Alexander Siddig"
          imgUrl={storyImg14}
          imgAlt="Night at the dark forest cover"
          date="March 10th 2020"
        />
        <Story
          title="Somwarpet's beauty"
          author="Kate Mulgrew"
          imgUrl={storyImg15}
          imgAlt="Somwarpet's beauty cover"
          date="March 9th 2020"
        />
        <Story
          title="Land of Dreams"
          author="Michael Dorn"
          imgUrl={storyImg16}
          imgAlt="Land of Dreams cover"
          date="March 8th 2020"
        />
      </Stories>
    </Layout>
  );
};

export default StoriesPage;
