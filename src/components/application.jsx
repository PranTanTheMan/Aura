import React from "react";
import {
  Box,
  Text,
  InputGroup,
  InputRightElement,
  Input,
  Button,
  Image,
  Badge,
  HStack,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

function Application() {
  return (
    <>
      <Box pt="159px" pl="125px">
        <Text fontWeight="600" fontSize="50px" fontStyle="normal">
          Let's save our world &nbsp;
          <span className="gradient_header">together</span>
        </Text>
        <Text fontWeight="500" fontSize="35px">
          Help give Earth a breath of fresh air
        </Text>
      </Box>
      <Box pt="35px" pl="125px" maxWidth="100%" width="583px" height="64px">
        <InputGroup>
          <InputRightElement
            pointerEvents="none"
            children={
              <AiOutlineSearch
                color="black"
                size="35px"
                style={{
                  marginTop: "27px",
                  marginRight: "10px",
                  position: "absolute",
                }}
              />
            }
          />
          <Input
            height="64px"
            bgColor="white"
            placeholder="Search"
            borderRadius="27px"
            boxShadow="0px 0px 6px 2px #FFFFFF"
            color="black"
          />
        </InputGroup>
      </Box>
      <Box
        bgColor="white"
        width="220px"
        maxWidth="300px"
        height="84px"
        pl="32px"
        ml="93px"
        pt="20px"
        mt="90px"
        borderRadius="27px"
        mr="0px"
        position="relative"
      >
        <Text color="#040608" fontWeight="600" fontSize="25px">
          Filter
        </Text>
      </Box>

      {/* CARDS */}
      <HStack ml="390px" spacing="60px" pb="100px" mb="100px">
        <Box
          maxW="sm"
          borderWidth="0px"
          borderRadius="xl"
          overflow="hidden"
          boxShadow="2xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="testImage"
            className="cardImage"
          />
          <Box p="10" backgroundColor="#fff">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="blackAlpha">
                2.123 DeSo
              </Badge>
            </Box>
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              fontSize="32px"
              color="black"
            >
              Saving our blues
            </Box>
            <Box color="blue.500" fontWeight="700">
              John Doe
            </Box>
          </Box>
        </Box>
        <Box
          maxW="sm"
          borderWidth="0px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="2xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1582408921715-18e7806365c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="testImage"
            className="cardImage"
          />

          <Box p="10" backgroundColor="#fff">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="blackAlpha">
                4.212 DeSo
              </Badge>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              fontSize="32px"
              color="black"
            >
              Create less waste
            </Box>

            <Box color="blue.500" fontWeight="700">
              Sarah Smith
            </Box>
          </Box>
        </Box>
        <Box
          maxW="sm"
          borderWidth="0px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="2xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1597700112072-fa3c1d930655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2xlYW51cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="testImage"
            className="cardImage"
          />

          <Box p="10" backgroundColor="#fff">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="blackAlpha">
                1.234 DeSo
              </Badge>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              fontSize="32px"
              color="black"
            >
              Clean up day
            </Box>

            <Box color="blue.500" fontWeight="700">
              Anny Arbor
            </Box>
          </Box>
        </Box>
      </HStack>
      {/* CARDS */}
    </>
  );
}

export default Application;
