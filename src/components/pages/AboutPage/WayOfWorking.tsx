import Typography from "@/components/elements/Typography";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import React from "react";

export default function WayOfWorking() {
  const skills = [
    {
      id: "01",
      name: "UX / Wireframing",
      description:
        "I like to map out the user experience and wireframe the layout of the application before I start coding. This helps me to visualize the application and make sure that I am building something that is easy to use and looks good.",
    },
    {
      id: "02",
      name: "Design",
      description:
        "I like to map out the user experience and wireframe the layout of the application before I start coding. This helps me to visualize the application and make sure that I am building something that is easy to use and looks good.",
    },
  ];

  return (
    <Section topToBottomGradient>
      <Container>
        <Typography as="h2" style="h1" className="font-normal">
          How I get things done
        </Typography>
      </Container>
    </Section>
  );
}
