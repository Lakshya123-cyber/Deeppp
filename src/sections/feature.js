/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Performance from "assets/feature/performance.svg";
import Partnership from "assets/feature/partnership.svg";
import Subscription from "assets/feature/subscription.svg";
import Support from "assets/feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Fast Performance",
    title: "Cybersecurity Solutions",
    text: "Implementing robust cybersecurity measures to protect your valuable data, networks, and systems from cyber threats and breaches.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Pro Subscription",
    title: "Digital Transformation",
    text: "Guiding your organization through digital transformation initiatives, leveraging emerging technologies such as cloud computing, IoT, AI, and automation.",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Partnership deal",
    title: "IT Strategy and Consulting",
    text: "Providing strategic IT guidance, roadmap development, and technology consulting to align your IT initiatives with your overall business objectives.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Customer Support",
    title: "IT Infrastructure Optimization",
    text: "Assessing and optimizing your IT infrastructure for improved performance, scalability, security, and cost-effectiveness.",
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader
          slogan="Quality Features"
          title="Amazing Useful Features"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      "40px 0",
      null,
      "45px 30px",
      null,
      "60px 50px",
      "70px 50px",
      null,
      "80px 90px",
    ],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
  },
};
