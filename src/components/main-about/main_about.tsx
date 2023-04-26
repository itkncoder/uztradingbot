import { Box, Text } from "@chakra-ui/react"

const MainAbout = () => {
  return (
    <Box color={"black"}>
        <Box maxW={"1280px"} mx={"auto"} py={"60px"} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"40px"} >
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"10px"} >
                <Text textAlign={"center"} fontSize={"40px"} fontWeight={"600"} >UzTradingBot nima?</Text>
                <Text px={"40px"} textAlign={"center"} fontSize={"24px"} color={"#9397ad"}>UzTradingBot - bu PancakeSwap markazlashtirilmagan almashinuvi uchun snayper bot. Uning asosiy vazifasi tokenlarni PancakeSwap-ga qo'shilishi bilanoq sotib olish va keyinroq foyda olish uchun tokenlarni sotishdir. <br /> Uni ko'pincha PancakeSniper yoki BSC snayper boti deb ham atashadi.</Text>
            </Box>
            <Box>
                <iframe width="586" height="331" src="https://www.youtube.com/embed/QRJRn5rOPsk" title="UniSniper.com - BSC Sniper Bot for PancakeSwap - Explainer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </Box>
        </Box>
    </Box>
  )
}

export default MainAbout