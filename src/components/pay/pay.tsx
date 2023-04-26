import { CheckIcon, StarIcon } from "@chakra-ui/icons"
import { Box, Button, Text } from "@chakra-ui/react"

const Pay = () => {
    return (
        <Box color={"black"}>
            <Box maxW={"1280px"} py={"100px"} mx={"auto"}>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
                    <Text fontSize={"34px"} fontWeight={"600"} >Pay only once</Text>
                    <Text color={"#9397ad"} fontSize={"24px"} >Own forever</Text>
                </Box>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mt={"40px"} >
                    <Box p={"50px"} border={"1px solid #6610f2"} borderRadius={"12px"} >
                        <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"6px"} >
                            <StarIcon color={"yellow.400"} fontSize={"20px"} />
                            <Text pt={"2px"} fontWeight={"600"} color={"#565973"} >ON SALE!</Text>
                        </Box>
                        <Box mt={"3px"}>
                            <Text color={"#565973"} fontSize={"38px"} fontWeight={"600"} >$2497</Text>
                            <Box mt={"-12px"} display={"flex"} justifyContent={"start"} alignItems={"end"} gap={"10px"}>
                                <Text color={"#565973"} fontSize={"46px"} fontWeight={"600"}>$1297</Text>
                                <Text color={"#565973"} pb={"13px"} fontWeight={"600"} >one-time</Text>
                            </Box>
                        </Box>
                        <Box mt={"15px"} mb={"35px"} >
                            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"10px"} >
                                <CheckIcon color={"#6366f1"} />
                                <Text color={"#565973"} fontWeight={"600"} >UniSniper bot</Text>
                            </Box>
                            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"10px"} >
                                <CheckIcon color={"#6366f1"} />
                                <Text color={"#565973"}>Source code</Text>
                            </Box>
                            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"10px"} >
                                <CheckIcon color={"#6366f1"} />
                                <Text color={"#565973"}>Installation & usage instructions</Text>
                            </Box>
                            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"10px"} >
                                <CheckIcon color={"#6366f1"} />
                                <Text color={"#565973"}>Latest version</Text>
                            </Box>
                            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"10px"} >
                                <CheckIcon color={"#6366f1"} />
                                <Text color={"#565973"}>Future updates</Text>
                            </Box>
                            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"10px"} >
                                <CheckIcon color={"#6366f1"} />
                                <Text color={"#565973"}>Dedicated 24/7 Support</Text>
                            </Box>
                        </Box>
                        <Box>
                            <Button w={"100%"} color={"white"} size={"lg"} bg={"#6366f1"} _hover={{bg: "#4245DE"}} >Buy Now!</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Pay