import {
  Box,
  Flex,
  LinkBox,
  AspectRatio,
  Image,
  Text,
  LinkOverlay,
} from "@chakra-ui/react";

type ThumbnailProps = {
  url: string;
  image: string;
  description: string;
};

const Thumbnail = ({ url, image, description }: ThumbnailProps) => {
  return (
    <LinkBox as="article">
      <AspectRatio
        ratio={2 / 1}
        borderWidth="1px"
        borderStyle="solid"
        borderColor="gray.300"
        borderRadius="xl"
        overflow="hidden"
      >
        <Image src={image} alt={description} />
      </AspectRatio>
      <LinkOverlay href={url}>
        <Text
          display={{ base: "none", md: "block" }}
          px="8%"
          textAlign="center"
          mt="4"
        >
          {description}
        </Text>
      </LinkOverlay>
    </LinkBox>
  );
};

export default Thumbnail;
