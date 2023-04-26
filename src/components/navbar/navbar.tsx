import { Box, Text } from "@chakra-ui/react"
import Link from "next/link"

const Navbar = () => {
    return (
        <Box bg={"#0b0f19"} color={"white"}>
            <Box maxW={"1280px"} mx={"auto"} py={"15px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} >

            <Link href={"/"}>
                <Box transition={"all .2s"} _hover={{transform: "scale(1.01)"}} fontWeight={"600"} display={"flex"} alignItems={"center"} gap={"2px"} fontSize={"26px"}>
                    <Text color={"#6366f1"} >Uz</Text>TradingBot
                </Box>
            </Link>

            <Box display={"flex"} alignItems={"center"} justifyContent={"center"} gap={"30px"} >
                <Link href={""}>
                    <Text fontSize={"18px"} _hover={{color: "#6366f1"}}>Asosiy</Text>
                </Link>
                <Link href={""}>
                    <Text fontSize={"18px"} _hover={{color: "#6366f1"}}>Biz xaqimizda</Text>
                </Link>
                <Link href={""}>
                    <Text fontSize={"18px"} _hover={{color: "#6366f1"}}>Xususiyatlar</Text>
                </Link>
                <Link href={""}>
                    <Text fontSize={"18px"} _hover={{color: "#6366f1"}}>Narx</Text>
                </Link>
                <Link href={""}>
                    <Text fontSize={"18px"} _hover={{color: "#6366f1"}}>TSS</Text>
                </Link>
                <Link href={""}>
                    <Text fontSize={"18px"} _hover={{color: "#6366f1"}}>Sotib olish</Text>
                </Link>
            </Box>

            </Box>
        </Box>
    )
}

export default Navbar