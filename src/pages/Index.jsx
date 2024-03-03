import React, { useState } from "react";
import { Box, Flex, Input, Button, Textarea, VStack, HStack, Text, Avatar, IconButton, Divider, useColorMode, useColorModeValue, Container, Heading, Spacer } from "@chakra-ui/react";
import { FaSun, FaMoon, FaFeatherAlt, FaRetweet, FaHeart, FaRegComment } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.800");
  const color = useColorModeValue("black", "white");

  // Mock tweets data
  const [tweets, setTweets] = useState([
    {
      id: 1,
      author: "John Doe",
      handle: "@johndoe",
      content: "Just setting up my twttr clone!",
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzA5NDczNTA3fDA&ixlib=rb-4.0.3&q=80&w=1080',
      likes: 5,
      comments: 2,
      retweets: 1,
    },
    // Add more mock tweets here if needed
  ]);

  const [tweetContent, setTweetContent] = useState("");

  const handlePostTweet = () => {
    if (!tweetContent.trim()) return;

    const newTweet = {
      id: tweets.length + 1,
      author: "New User",
      handle: "@newuser",
      content: tweetContent,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MDk0NzM1MDh8MA&ixlib=rb-4.0.3&q=80&w=1080',
      likes: 0,
      comments: 0,
      retweets: 0,
    };

    setTweets([newTweet, ...tweets]);
    setTweetContent("");
  };

  return (
    <Box bg={bg} color={color} minH="100vh" py={5}>
      <Container maxW="container.md">
        <VStack spacing={4} align="stretch">
          <Flex justifyContent="space-between" alignItems="center">
            <Heading as="h1">Twttr Clone</Heading>
            <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} isRound size="md" alignSelf="flex-end" onClick={toggleColorMode} />
          </Flex>
          <Box p={4} bg={bg} boxShadow="md" borderRadius="md">
            <HStack>
              <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcwOTQ3MDAxMHww&ixlib=rb-4.0.3&q=80&w=1080" />
              <Textarea value={tweetContent} onChange={(e) => setTweetContent(e.target.value)} placeholder="What's happening?" size="sm" resize="none" />
            </HStack>
            <Flex justifyContent="flex-end" mt={2}>
              <Button leftIcon={<FaFeatherAlt />} colorScheme="twitter" onClick={handlePostTweet}>
                Tweet
              </Button>
            </Flex>
          </Box>
          <VStack spacing={4} divider={<Divider />}>
            {tweets.map((tweet) => (
              <Flex key={tweet.id} p={3} alignItems="flex-start">
                <Avatar src={tweet.avatar} size="md" mr={3} />
                <Box>
                  <Text fontWeight="bold">
                    {tweet.author}{" "}
                    <Text as="span" color="gray.500">
                      {tweet.handle}
                    </Text>
                  </Text>
                  <Text>{tweet.content}</Text>
                  <HStack spacing={3} mt={2}>
                    <IconButton icon={<FaRegComment />} aria-label="Comment" size="sm" variant="ghost" />
                    <IconButton icon={<FaRetweet />} aria-label="Retweet" size="sm" variant="ghost" />
                    <IconButton icon={<FaHeart />} aria-label="Like" size="sm" variant="ghost" />
                  </HStack>
                </Box>
              </Flex>
            ))}
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
