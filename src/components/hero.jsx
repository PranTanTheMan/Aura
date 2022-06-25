import React from "react";
import { Text, Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
function Hero() {
  return (
    <>
      <Flex
        maxWidth="100%"
        width="200px"
        ml="110px"
        mt="54px"
        position="absolute"
        className="header"
      >
        <Box display="flex" position="absolute" alignItems="center">
          <img className="logo" src={require("../logo.png")} alt="AuraLogo" />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <Text ml="10px" fontWeight="700" fontSize="50px" color="#64A2FF">
              Aura
            </Text>
          </motion.div>
        </Box>
      </Flex>
      <Box ml="184px" mt="305px" position="absolute" className="title">
        <Text
          fontWeight="700"
          fontSize="64px"
          width="802px"
          height="229px"
          lineHeight="77.45px"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 1 }}
          >
            <span className="gradient_header">Aura</span> - The decentralized
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 1, delay: 0.5 }}
          >
            social environmental solution
          </motion.div>
        </Text>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 1, delay: 1 }}
        >
          <Text
            width="800px"
            fontStyle="normal"
            fontWeight="500"
            fontSize="27px"
          >
            Aura wants to cultivate environmental change through a decentralized
            P2P incentive system, so activists can be rewarded for their work.
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 1, delay: 1.5 }}
        >
          <Box
            mt="35px"
            as="button"
            width="239px"
            height="64px"
            boxShadow=" 0px 0px 6px 2px #0066FF"
            borderRadius="27px"
            className="openApp"
            transition=" all 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.08)",
            }}
            onClick={() => {
              window.open("/", "_blank");
            }}
            zIndex="overlay"
          >
            <Text
              fontWeight="400"
              fontStyle="normal"
              fontSize="30px"
              color="#fff"
              lineHeight="36px"
            >
              Open App
            </Text>
          </Box>
        </motion.div>
      </Box>
      <Box as="div" p="0" position="absolute" zIndex="-1" width="100%">
        <video
          src={require("../AuraGif.mp4")}
          loop
          autoPlay
          muted
          controls={false}
          className="cleaningVideo"
        ></video>
      </Box>
    </>
  );
}

export default Hero;
