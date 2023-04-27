import { StarIcon } from "@chakra-ui/icons"
import { Box, Button, Text } from "@chakra-ui/react"

const PriceCard = ({isAllowBuy, prevPrice, price, children}: any) => {
    return (
        <Box p={"50px 35px"} border={"1px solid #6610f2"} borderRadius={"12px"} >
            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"6px"} >
                <StarIcon color={"yellow.400"} fontSize={"20px"} />
                <Text pt={"2px"} fontWeight={"600"} color={"#565973"} >{ isAllowBuy && "SOTUVDA!"}</Text>
            </Box>
            <Box mt={"3px"}>
                <Text color={"#565973"} fontSize={"38px"} textDecoration={"line-through"} fontWeight={"600"} >${prevPrice}</Text>
                <Box mt={"-12px"} display={"flex"} justifyContent={"start"} alignItems={"end"} gap={"10px"}>
                    <Text color={"#565973"} fontSize={"46px"} fontWeight={"600"}>${price}</Text>
                    <Text color={"#565973"} pb={"13px"} fontWeight={"600"} >bir martta</Text>
                </Box>
            </Box>
            {children}
            <Box>
                <Button w={"100%"} color={"white"} size={"lg"} bg={"#6366f1"} _hover={{bg: "#4245DE"}} >Sotib olish!</Button>
            </Box>
        </Box>
    )
}

export default PriceCard