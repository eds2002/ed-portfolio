"use client";
import React from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { CaseStudy } from "@/types/CaseStudy/interface";
import Typography from "@/components/elements/Typography";
import { motion, useScroll, useTransform } from "framer-motion";
import useAnimation from "@/hooks/useAnimation";
import usePalette from "@/hooks/usePallete";

function Row({ images }: { images: CaseStudy["galleries"][0] }) {
  const { extractedColors, error } = usePalette(images.images[0].url);
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageOne = useTransform(scrollYProgress, [0, 1], ["25%", "-25%"]);
  const imageTwo = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);

  const { animate } = useAnimation();
  function getTranslateY(index: number, length: number) {
    if (!animate) return "0%";
    if (length === 2) {
      if (index === 0) return imageOne;
      if (index === 1) return imageTwo;
    }

    if (length === 3) {
      if (index === 0) return imageOne;
      if (index === 1) return "0%";
      if (index === 2) return imageTwo;
    }

    return "0%"; // default fallback if none of the conditions match
  }

  return (
    <Section
      className="h-full"
      style={{
        backgroundColor: error ? "" : extractedColors?.[1] + "25",
      }}
      ref={ref}
    >
      <Container className=" max-h-screen max-w-6xl relative flex flex-row  items-center">
        {images.images.map((image, index, self) => (
          <motion.div
            className="relative w-full  aspect-[9/16]   overflow-hidden "
            key={index}
            style={{
              translateY: getTranslateY(index, self.length),
            }}
          >
            <Image
              src={image.url}
              layout="fill"
              objectFit="contain"
              alt={image.alt}
            />
          </motion.div>
        ))}
      </Container>
    </Section>
  );
}

function Banner({ banner }: { banner: CaseStudy["galleries"][0] }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["-25%", "0%", "25%"]
  );
  // const { data, loading, error } = usePalette(banner.images[0].url);

  const { animate } = useAnimation();
  // const colorData = React.useMemo(() => {
  //   if (loading || error) {
  //     return "white";
  //   }
  //   return data.lightMuted;
  // }, [data, loading, error]);

  const CaptionOrImage = React.useCallback(() => {
    const hasCaption = banner.images[0].captionOrImage.caption;
    const hasImage =
      !!banner.images[0].captionOrImage.image.url &&
      !!banner.images[0].captionOrImage.image.alt;
    if (hasCaption) {
      return (
        <Typography
          as="p"
          style="h2"
          className="text-center"
          // componentStyle={{
          //   color: colorData,
          // }}
        >
          {banner.images[0].captionOrImage.caption}
        </Typography>
      );
    } else if (hasImage) {
      return (
        <div className="relative h-[15vh] w-full">
          <Image
            src={banner.images[0].captionOrImage.image.url!}
            alt={banner.images[0].captionOrImage.image.alt!}
            objectFit="contain"
            layout="fill"
            className="object-center object-cover w-full h-full "
          />
        </div>
      );
    }
    return null;
  }, [banner.images]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0  z-10 flex items-center justify-center pointer-events-none">
        <CaptionOrImage />
      </div>
      <motion.div
        className="relative w-full max-h-screen aspect-[16/9] h-full "
        style={{
          translateY: !animate ? "0%" : translateY,
        }}
      >
        <Image
          src={banner.images[0].url}
          alt={banner.images[0].alt}
          objectFit="cover"
          layout="fill"
          className="object-center object-cover w-full h-full "
        />
      </motion.div>
    </section>
  );
}

function DefaultContainer({
  image,
  isLast,
}: {
  image: CaseStudy["galleries"][0];
  isLast: boolean;
}) {
  const { extractedColors, error } = usePalette(image.images[0].url);
  return (
    <Section
      style={{
        backgroundColor: isLast
          ? "white"
          : error
          ? ""
          : extractedColors?.[4] + "25",
      }}
    >
      <Container className="relative overflow-hidden aspect-[16/9]  max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={image.images[0].url}
            layout="fill"
            objectFit="contain"
            alt={image.images[0].alt}
          />
        </div>
      </Container>
    </Section>
  );
}

export default function Gallery({
  gallery,
}: {
  gallery: CaseStudy["galleries"];
}) {
  return (
    <>
      {gallery?.map((image, index, self) => {
        switch (image.layout) {
          case "defaultContainer":
            return (
              <DefaultContainer
                image={image}
                isLast={self.length - 1 === index}
              />
            );
          case "banner":
            return <Banner banner={image} />;
          case "row":
            return <Row images={image} />;
          default:
            return null;
        }
      })}
    </>
  );
}
