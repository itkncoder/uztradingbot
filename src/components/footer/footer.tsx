import { Box, Text } from "@chakra-ui/react"
import Link from "next/link"

const Footer = () => {
    return (
        <Box bg={"#0b0f19"}>
            <Box maxW={"1280px"} mx={"auto"} py={"15px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                <Text>
                    Copyright © UniSniper.com {new Date().getFullYear()}
                </Text>
                <Box>
                    <Link href={"/"}><Text _hover={{textDecor: "underline"}}>Terms</Text></Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer