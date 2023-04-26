import { Box, Text } from "@chakra-ui/react"

const MainAbout = () => {
  return (
    <Box color={"black"}>
        <Box maxW={"1280px"} mx={"auto"} py={"60px"} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"40px"} >
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"10px"} >
                <Text textAlign={"center"} fontSize={"40px"} fontWeight={"600"} >What is UniSniper?</Text>
                <Text px={"40px"} textAlign={"center"} fontSize={"24px"} color={"#9397ad"}>UniSniper is a sniper bot for PancakeSwap decentralized exchange. Its primary function is to buy tokens as soon as they're added to the PancakeSwap, and sell the tokens later for profit. <br /> It's often also called PancakeSniper or BSC sniper bot.</Text>
            </Box>
            <Box>
                <iframe width="586" height="331" src="https://www.youtube.com/embed/QRJRn5rOPsk" title="UniSniper.com - BSC Sniper Bot for PancakeSwap - Explainer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </Box>
        </Box>
    </Box>
  )
}

export default MainAbout