import { CheckCircleIcon } from '@chakra-ui/icons'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const VideoDemo = () => {
    return (
        <Box bg={"#0b0f19"} py={"35px"} color={"black"}>
            <Box maxW={{base: "none", lg: "1280px"}} mx={{base: "5px", lg: "auto"}} my={"75px"} display={"flex"} flexDirection={"column"} gap={"25px"} alignItems={"center"} justifyContent={"space-between"}>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"10px"}>
                    <CheckCircleIcon color={"red.500"} fontSize={"36px"} />
                    <Text fontSize={"32px"} color={"white"} fontWeight={"600"}>Video Namoyish</Text>
                </Box>
                <Box w={{base: "100%", lg: "860px"}} display={{base: "flex", lg: "flex"}} justifyContent={"center"} height={{base: "200px", lg: "450px"}}>
                    <iframe width="90%" height="100%" src="https://www.youtube.com/embed/A6xSSYdJCbU" title="UniSniper.com - BSC PancakeSwap Sniper Bot &amp; Mempool Scanner" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </Box>
            </Box>
        </Box>
    )
}

export default VideoDemo