import { EditIcon, InfoOutlineIcon, RepeatIcon, StarIcon, WarningTwoIcon } from "@chakra-ui/icons"
import { Box, Button, Text } from "@chakra-ui/react"
import Image from "next/image"

const MainFeatures = () => {
    return (
        <Box color={"black"}>
            <Box maxW={"1280px"} py={"80px"} mx={"auto"} display={"flex"} justifyContent={"space-between"} alignItems={"start"} >
                <Box w={"33.333%"}>
                    <Text fontSize={"34px"} fontWeight={"600"} >Industry leading advanced features.</Text>
                </Box>
                <Box w={"33.333%"} display={"flex"} flexDirection={"column"} alignItems={"start"} gap={"40px"}>
                    <Box display={"flex"} flexDirection={"column"} alignItems={"start"} gap={"10px"} height={"230px"}>
                        <Box w={"45px"} borderRadius={"8px"} h={"45px"} display={"flex"} justifyContent={"center"} alignItems={"center"} bg={"#6f42c1"}>
                            <RepeatIcon fontSize={"28px"} color={"white"} />
                        </Box>
                        <Text fontSize={"23px"} fontWeight={"600"} >Mempool Scanning</Text>
                        <Text pr={"40px"} textAlign={"justify"} fontSize={"18px"} color={"#9397ad"} >Bot sees liquidity transaction before it's confirmed. Thanks to this, the bot can place a buy order in the same block leading to zero seconds delay between buy & liquidity transactions.</Text>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} alignItems={"start"} gap={"10px"} height={"230px"}>
                        <Box w={"45px"} borderRadius={"8px"} h={"45px"} display={"flex"} justifyContent={"center"} alignItems={"center"} bg={"#6f42c1"}>
                            <WarningTwoIcon fontSize={"28px"} color={"white"} />
                        </Box>
                        <Text fontSize={"23px"} fontWeight={"600"} >Anti-Bot</Text>
                        <Text pr={"40px"} textAlign={"justify"} fontSize={"18px"} color={"#9397ad"} >A set of features that help UniSniper to get around anti-bot systems that otherwise could degrade its effectiveness or even lose you money.</Text>
                    </Box>
                </Box>
                <Box w={"33.333%"} display={"flex"} flexDirection={"column"} alignItems={"start"} gap={"40px"}>
                    <Box display={"flex"} flexDirection={"column"} alignItems={"start"} gap={"10px"} height={"230px"}>
                        <Box w={"45px"} borderRadius={"8px"} h={"45px"} display={"flex"} justifyContent={"center"} alignItems={"center"} bg={"#6f42c1"}>
                            <EditIcon fontSize={"28px"} color={"white"} />
                        </Box>
                        <Text fontSize={"23px"} fontWeight={"600"} >Customizability</Text>
                        <Text pr={"40px"} textAlign={"justify"} fontSize={"18px"} color={"#9397ad"} >Tweak multiple settings to meet your desired results. Code is open, so you can seen exactly what is going on. You can even edit it or add new features.</Text>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} alignItems={"start"} gap={"10px"} height={"230px"}>
                        <Box w={"45px"} borderRadius={"8px"} h={"45px"} display={"flex"} justifyContent={"center"} alignItems={"center"} bg={"#6f42c1"}>
                            <InfoOutlineIcon fontSize={"28px"} color={"white"} />
                        </Box>
                        <Text fontSize={"23px"} fontWeight={"600"} >Auto Take Profit</Text>
                        <Text pr={"40px"} textAlign={"justify"} fontSize={"18px"} color={"#9397ad"} >Immediately sell tokens after X amount of profit is made.</Text>
                    </Box>
                </Box>
            </Box>
            
            <Box maxW={"1280px"} py={"80px"} mx={"auto"} display={"flex"} justifyContent={"space-between"} flexDirection={"column"} gap={"80px"} alignItems={"start"} >
                <Box display={"flex"} justifyContent={"space-between"} gap={"30px"}>
                    <Image style={{width: "600px"}} alt="uztradingbot" width={500} height={500} src={"https://i.imgur.com/WySnSSD.gif"} />
                    <Box display={"flex"} flexDirection={"column"} alignItems={"start"} gap={"10px"} >
                        <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"8px"}>
                            <StarIcon fontSize={"32px"} color={"green.400"} />
                            <Text fontSize={"32px"} fontWeight={"600"} >Dominate the market</Text>
                        </Box>
                        <Text fontSize={"22px"} color={"#9397ad"}>
                            UniSniper is the most advanced sniper bot for PancakeSwap BSC on the market used by the biggest whales in the industry. Our bot been field-tested by our userbase who are really satisfied with the results our bot provides them. Don't hesitate and be one of the first to buy newly listed tokens.
                        </Text>
                    </Box>
                </Box>
                <Box display={"flex"} justifyContent={"space-between"} gap={"30px"}>
                    <Box display={"flex"} flexDirection={"column"} alignItems={"start"} gap={"10px"} >
                        <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"8px"}>
                            <WarningTwoIcon fontSize={"32px"} color={"red.500"} />
                            <Text fontSize={"32px"} fontWeight={"600"} >Market falling? Does not matter!</Text>
                        </Box>
                        <Text fontSize={"22px"} color={"#9397ad"}>
                            It does not matter whether the market is falling or not. There are hundreds of new projects launched every single day and you can make money from each of them just by hopping on early.
                        </Text>
                        <Text fontSize={"24px"} fontWeight={"600"} color={"#9397ad"}>
                            So, what are you waiting for?
                        </Text>
                        <Button mt={"5px"} color={"white"} size={"lg"} bg={"#6366f1"} _hover={{bg: "#4245DE"}} >Buy Now!</Button>
                    </Box>
                    <Image style={{width: "600px"}} alt="uztradingbot" width={500} height={500} src={"https://www.unisniper.com/assets/bull-stock.png"} />
                </Box>
            </Box>

        </Box>
    )
}

export default MainFeatures