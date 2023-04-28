import { CheckIcon } from "@chakra-ui/icons"
import { Box, Text } from "@chakra-ui/react"
import PriceCard from "../price-card/priceCard"

const Pay = () => {
    return (
        <Box color={"black"}>
            <Box maxW={"1280px"} py={"100px"} mx={"auto"}>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
                    <Text fontSize={{base: "24px", lg: "34px"}} textAlign={{base: "center", lg: "start"}} fontWeight={"600"} >Faqat bir marta to'lang</Text>
                    <Text color={"#9397ad"} fontSize={{base: "18px", lg: "24px"}} >Doimiy egalik</Text>
                </Box>
                <Box display={"flex"} px={{base: "20px", lg: "0"}} justifyContent={"center"} flexDirection={{base: "column", lg: "row"}} alignItems={"center"} gap={"20px"} mt={"40px"} >

                    <PriceCard isAllowBuy={true} prevPrice={"2000"} price={"1800"}>
                        <Box h={"150px"} mt={"15px"} mb={"35px"} >
                            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"10px"} >
                                <CheckIcon color={"#6366f1"} />
                                <Text color={"#565973"} fontWeight={"600"} >UzTradingBot BOT</Text>
                            </Box>
                            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"10px"} >
                                <CheckIcon color={"#6366f1"} />
                                <Text color={"#565973"}>Foydalanish bo'yicha ko'rsatmalar</Text>
                            </Box>
                            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"10px"} >
                                <CheckIcon color={"#6366f1"} />
                                <Text color={"#565973"}>Eng so'nggi versiya</Text>
                            </Box>
                            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"10px"} >
                                <CheckIcon color={"#6366f1"} />
                                <Text color={"#565973"}>Kelajakdagi yangilanishlar</Text>
                            </Box>
                            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"10px"} >
                                <CheckIcon color={"#6366f1"} />
                                <Text color={"#565973"}>24/7 qo'llab-quvvatlash</Text>
                            </Box>
                        </Box>
                    </PriceCard>

                    <PriceCard isAllowBuy={true} prevPrice={"2200"} price={"2000"}>
                        <Box h={"150px"} mt={"15px"} mb={"35px"} >
                            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"10px"} >
                                <CheckIcon color={"#6366f1"} />
                                <Text color={"#565973"} fontWeight={"600"} >UzTradingBot bot <span style={{color: "#6366f1"}} >PRO</span></Text>
                            </Box>
                            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"10px"} >
                                <CheckIcon color={"#6366f1"} />
                                <Text color={"#565973"}>Foydalanish bo'yicha ko'rsatmalar</Text>
                            </Box>
                            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"10px"} >
                                <CheckIcon color={"#6366f1"} />
                                <Text color={"#565973"}>Eng so'nggi versiya</Text>
                            </Box>
                            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"10px"} >
                                <CheckIcon color={"#6366f1"} />
                                <Text color={"#565973"}>Kelajakdagi yangilanishlar</Text>
                            </Box>
                            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"10px"} >
                                <CheckIcon color={"#6366f1"} />
                                <Text color={"#565973"}>24/7 qo'llab-quvvatlash</Text>
                            </Box>
                            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"10px"} >
                                <CheckIcon color={"#6366f1"} />
                                <Text color={"#565973"}>Signal kanal</Text>
                            </Box>
                        </Box>
                    </PriceCard>

                    <PriceCard isAllowBuy={true} prevPrice={"1000"} price={"700"}>
                        <Box h={"150px"} mt={"15px"} mb={"35px"} >
                            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"10px"} >
                                <CheckIcon color={"#6366f1"} />
                                <Text color={"#565973"} fontWeight={"600"} >UzTradingBot bot <span style={{color: "green"}} >ONLINE</span></Text>
                            </Box>
                            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"10px"} >
                                <CheckIcon color={"#6366f1"} />
                                <Text color={"#565973"}>Foydalanish bo'yicha ko'rsatmalar</Text>
                            </Box>
                            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"10px"} >
                                <CheckIcon color={"#6366f1"} />
                                <Text color={"#565973"}>Eng so'nggi versiya</Text>
                            </Box>
                            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"10px"} >
                                <CheckIcon color={"#6366f1"} />
                                <Text color={"#565973"}>Kelajakdagi yangilanishlar</Text>
                            </Box>
                            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"10px"} >
                                <CheckIcon color={"#6366f1"} />
                                <Text color={"#565973"}>24/7 qo'llab-quvvatlash</Text>
                            </Box>
                        </Box>
                    </PriceCard>

                </Box>
            </Box>
        </Box>
    )
}

export default Pay