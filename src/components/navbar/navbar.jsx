import "./navbar.css";
import { Flex, Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Navbar = () => {
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
          <img
            className="logo"
            src={require("../../logo.png")}
            alt="AuraLogo"
          />
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
      {/* <div className="root">
        <img className="logo" src="/aura hckthn 2.png" alt="" />
        <h1 className="name">Aura</h1>
      </div> */}
    </>
  );
};

export default Navbar;
