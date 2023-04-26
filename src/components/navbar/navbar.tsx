import { Box, Text } from "@chakra-ui/react"
import Link from "next/link"

const Navbar = () => {
    return (
        <Box bg={"#0b0f19"}>
            <Box maxW={"1280px"} mx={"auto"} py={"15px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} >

            <Link href={"/"}>
                <Box transition={"all .2s"} _hover={{transform: "scale(1.01)"}} fontWeight={"600"} display={"flex"} alignItems={"center"} gap={"2px"} fontSize={"26px"}>
                    <Text color={"#6366f1"} >Uz</Text>TradingBot
                </Box>
            </Link>

            <Box display={"flex"} alignItems={"center"} justifyContent={"center"} gap={"30px"} >
                <Link href={""}>
                    <Text fontSize={"18px"} _hover={{color: "#6366f1"}}>Home</Text>
                </Link>
                <Link href={""}>
                    <Text fontSize={"18px"} _hover={{color: "#6366f1"}}>About</Text>
                </Link>
                <Link href={""}>
                    <Text fontSize={"18px"} _hover={{color: "#6366f1"}}>Features</Text>
                </Link>
                <Link href={""}>
                    <Text fontSize={"18px"} _hover={{color: "#6366f1"}}>Pricing</Text>
                </Link>
                <Link href={""}>
                    <Text fontSize={"18px"} _hover={{color: "#6366f1"}}>FAQ</Text>
                </Link>
                <Link href={""}>
                    <Text fontSize={"18px"} _hover={{color: "#6366f1"}}>Buy</Text>
                </Link>
            </Box>

            </Box>
        </Box>
    )
}

export default Navbar