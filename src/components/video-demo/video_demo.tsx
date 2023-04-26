import { CheckCircleIcon } from '@chakra-ui/icons'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const VideoDemo = () => {
    return (
        <Box bg={"#0b0f19"} py={"35px"} color={"black"}>
            <Box maxW={"1280px"} mx={"auto"} my={"75px"} display={"flex"} flexDirection={"column"} gap={"25px"} alignItems={"center"} justifyContent={"space-between"}>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"10px"}>
                    <CheckCircleIcon color={"red.500"} fontSize={"36px"} />
                    <Text fontSize={"32px"} color={"white"} fontWeight={"600"}>Video Demonstration</Text>
                </Box>
                <Box>
                    <iframe width="1198" height="675" src="https://www.youtube.com/embed/A6xSSYdJCbU" title="UniSniper.com - BSC PancakeSwap Sniper Bot &amp; Mempool Scanner" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </Box>
            </Box>
        </Box>
    )
}

export default VideoDemo