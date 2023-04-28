import { Box, Text } from "@chakra-ui/react"
import Link from "next/link"

const Footer = () => {
    return (
        <Box bg={"#0b0f19"} color={"white"}>
            <Box maxW={{base: "none", lg: "1280px"}} mx={{base: "10px", lg: "auto"}} py={"15px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                <Text>
                    Copyright © uztradingbot.uz {new Date().getFullYear()}
                </Text>
                <Box>
                    <a target="_blank" href={"https://t.me/nodejs5"}><Text _hover={{textDecor: "underline"}}>Aloqa</Text></a>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer