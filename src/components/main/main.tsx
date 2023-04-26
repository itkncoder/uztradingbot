import { Box, Button, Text } from "@chakra-ui/react"
import Image from "next/image"

const Main = () => {
    return (
        <Box bg={"#0b0f19"} color={"white"} >
            <Box maxW={"1280px"} mx={"auto"} display={"flex"} justifyContent={"space-between"} py={"80px"} alignItems={"center"} gap={"50px"}>
                <Box display={"flex"} flexDirection={"column"} gap={"8px"} >
                    <Text fontWeight={"bold"} fontSize={"45px"}><span style={{color: "#6366f1"}} >Uni</span>Sniper - The most advanced BSC <span style={{color: "#6366f1"}} >sniper</span> bot you have ever wanted!</Text>
                    <Text fontSize={"26px"} color={"#33354d"} >Snipe any PancakeSwap token launch in <span style={{fontWeight: "600"}} >zero</span> seconds!</Text>
                    <Box mt={"5px"} display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"20px"} >
                        <Button size={"lg"} bg={"#6366f1"} _hover={{bg: "#4245DE"}} >Buy Now!</Button>
                        <Button size={"lg"} variant={"outline"} borderColor={"gray"} _hover={{bg: "white", borderColor: "white", color: "black"}} >Learn More</Button>
                    </Box>
                </Box>
                <Image style={{width: "640px"}} alt="uztradingbot" width={500} height={500} src={"https://i.imgur.com/WySnSSD.gif"} />
            </Box>
        </Box>
    )
}

export default Main