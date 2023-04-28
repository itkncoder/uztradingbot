import { Box, Text } from "@chakra-ui/react"

const MainAbout = () => {
  return (
    <Box color={"black"}>
        <Box maxW={{base: "none", lg: "1280px"}} mx={{base: "10px", lg: "auto"}} py={"60px"} display={"flex"} flexDirection={{base: "column", lg: "row"}} justifyContent={"center"} alignItems={"center"} gap={"40px"} >
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"10px"} >
                <Text textAlign={"center"} fontSize={{base: "28px", lg: "40px"}} fontWeight={"600"} >UzTradingBot nima?</Text>
                <Text px={"40px"} textAlign={"center"} fontSize={{base: "18px", lg: "24px"}} color={"#9397ad"}>UzTradingBot - bu PancakeSwap markazlashtirilmagan almashinuvi uchun snayper bot. Uning asosiy vazifasi tokenlarni PancakeSwap-ga qo'shilishi bilanoq sotib olish va keyinroq foyda olish uchun tokenlarni sotishdir. <br /> Uni ko'pincha PancakeSniper yoki BSC snayper boti deb ham atashadi.</Text>
            </Box>
            <Box w={{base: "100%", lg: "2500px"}} display={{base: "flex", lg: ""}} justifyContent={"center"} height={{base: "200px", lg: "350px"}} >
              <iframe width="90%" height="100%" src="https://www.youtube.com/embed/QRJRn5rOPsk" title="UniSniper.com - BSC Sniper Bot for PancakeSwap - Explainer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </Box>
        </Box>
    </Box>
  )
}

export default MainAbout