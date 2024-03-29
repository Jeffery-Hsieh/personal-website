import type { NextPage } from "next";
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Link,
  Icon,
  Box,
  Avatar,
  Container,
} from "@chakra-ui/react";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoIosLink,
  IoIosMail,
  IoMdDesktop,
} from "react-icons/io";
import Head from "next/head";

import Thumbnail from "../components/Thumbnail";

const Banner = () => (
  <Box h="100vh" position="relative">
    <Box
      position="absolute"
      w="100%"
      top="30%"
      left="50%"
      transform="translateX(-50%) translateY(-30%)"
    >
      <Avatar
        borderRadius={0}
        mb="20"
        src="https://storage.googleapis.com/jeffery-hsieh-personal-github-page/project/jeffery-hsieh-avatar.jpg"
        name="jeffery-hsieh"
        size="2xl"
      />
      <Box fontSize="32px" fontWeight="light">
        Hi, I&#39;m Jeffery. A Frontend developer works in Taipei, Taiwan. I
        enjoy building websites and apps to solve people&#39;s need.
      </Box>
    </Box>
  </Box>
);

const SERVICES = [
  {
    title: "Frontend",
    icon: IoMdDesktop,
    skills: ["React", "VueJS", "jQuery", "Three.js", "GSAP"],
  },
  {
    title: "Backend",
    icon: IoIosLink,
    skills: ["NodeJS", "Python"],
  },
];

const CONTACT = [
  {
    url: "mailto:jefferyhsieh1996@gmail.com",
    text: "Email",
    icon: IoIosMail,
  },
  {
    url: "https://www.linkedin.com/in/jeffery-hsieh-26a95914b/",
    text: "Linkedin",
    icon: IoLogoLinkedin,
  },
  {
    url: "https://github.com/Jeffery-Hsieh",
    text: "Github",
    icon: IoLogoGithub,
  },
];

const Portfolio = () => {
  return (
    <Flex justifyContent="space-between">
      <Box w="50%">
        <Heading as="h2" size="lg" letterSpacing="widest" fontWeight="normal">
          SKILLS
        </Heading>
        <Stack mt={6} spacing={4}>
          {SERVICES.map(({ icon, title, skills }) => (
            <Box key={title}>
              <Box>
                <Icon mr={4} as={icon} />
                {title}
              </Box>
              <Stack spacing={2} mt={2}>
                {skills.map((skill) => (
                  <Box key={skill}>{skill}</Box>
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>

      <Box w="50%">
        <Heading as="h2" size="lg" letterSpacing="widest" fontWeight="normal">
          NETWORK
        </Heading>
        <Stack mt={6}>
          {CONTACT.map(({ url, icon, text }) => (
            <Box key={text}>
              <Link href={url} isExternal>
                <Icon as={icon} marginRight={4} />
                {text}
              </Link>
            </Box>
          ))}
        </Stack>
      </Box>
    </Flex>
  );
};

const PROJECTS = [
  {
    url: "https://www.2021.openhci.com/",
    image: "https://i.imgur.com/syoFwXi.jpg",
    description:
      "A website for a HCI related program hosted by OpenHCI in 2021",
  },
];

const Projects = () => (
  <Box mt="16">
    <Heading
      as="h2"
      size="lg"
      letterSpacing="widest"
      fontWeight="normal"
      marginBottom={4}
    >
      Projects
    </Heading>
    <Grid
      mt="6"
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(4 ,1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap="8"
    >
      {PROJECTS.map((project, index) => (
        <GridItem key={index}>
          <Thumbnail {...project} />
        </GridItem>
      ))}
    </Grid>
  </Box>
);

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Jeffery Hsieh</title>
        <meta name="description" content="Jeffery Hsieh personal website" />
        <meta
          name="google-site-verification"
          content="rsoNTWonZRf0juu-b8Yrwpj2jIsV3-lIFWLbLU5E2EA"
        />
        <meta property="og:title" content="Jeffery Hsieh personal website" />
        <meta
          property="og:description"
          content="Jeffery Hsieh Personal website"
        />
        <meta property="og:image" content="https://i.imgur.com/2xF3M3p.jpg" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta property="og:url" content="https://i.imgur.com/2xF3M3p.jpg" />
      </Head>
      <Container as="main" maxW="container.lg">
        <Banner />
        <Portfolio />
        <Projects />
      </Container>
      <Box as="footer" mt="4"></Box>
    </Box>
  );
};

export default Home;
