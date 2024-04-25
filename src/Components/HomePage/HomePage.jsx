import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Navbar from '../Navbar'
import { useNavigate } from "react-router-dom";

const TextParallaxContentExample = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <Navbar/>
      <TextParallaxContent
        imgUrl="https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com//content/df/98/6168c1c449489ffa778a198d6a9a/bakery-hero1500x600-2x-v2.jpg"
        subheading="Greatness"
        heading="Baked For All Of Us."
      >
        <ExampleContent1 navigate={navigate}/>
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://www.lafarmbakery.com/sites/default/files/La%20Farm%20Bakers-3.jpg"
        subheading="About Us"
        heading="Dive Into Our Rich History."
      >
        <ExampleContent2 navigate={navigate}/>
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://sharpsheets.io/wp-content/uploads/2022/11/bakery-solutions03.jpeg"
        subheading="Stay Connected"
        heading="Follow us On Social Media."
      >
        <ExampleContent3 />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent1 = ({ navigate }) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
    Indulge Into All Your Favorite Senses At Once.
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
      Step into a world of culinary delight as you explore our meticulously crafted menu, brimming with an array of flavors, each creation infused with passion and precision.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
      Explore our delectable menu crafted with passion and precision.
      We are sure you will be pleasantly surprised.
      </p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit" onClick={() => navigate('/menu-page')}>
        View our Menu <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);

const ExampleContent2 = ({ navigate }) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
    Our Story Told Through Generations Of All Baked Goods People.
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
      Our mission is to spread happiness, one bite at a time. We believe in using only the finest ingredients, handcrafting each pastry and loaf of bread with care and dedication.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
      At the heart of our bakery are our values of quality, creativity, and community. We strive to exceed expectations with every creation, delighting our customers and fostering a warm, welcoming atmosphere for all.
      </p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit" onClick={() => navigate('/about-us')}>
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);

const ExampleContent3 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Be Kept In The Loop. Hear From Us First While Its Still Warm.
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
      Stay connected with us on social media to be the first to know about our latest creations, special promotions, and upcoming events.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Posts about your favorite baked goods never hurt anyone anyways...
      </p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);

export default TextParallaxContentExample;