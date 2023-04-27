import { Box, Button, Text } from "@chakra-ui/react"
import Image from "next/image"
import img from "@/assets/img.jpg"

const Main = () => {
    return (
        <Box bg={"#0b0f19"} color={"white"} >
            <Box maxW={"1280px"} mx={"auto"} display={"flex"} justifyContent={"space-between"} py={"80px"} alignItems={"center"} gap={"40px"}>
                <Box display={"flex"} flexDirection={"column"} gap={"10px"} >
                    <Text fontWeight={"bold"} fontSize={"45px"}>Uz<span style={{color: "#6366f1"}} >Trading</span>Bot - Foydalanuvchilar xohlagan eng ilg'or BSC <span style={{color: "#6366f1"}}>snayper</span> boti!</Text>
                    <Text fontSize={"26px"} color={"#33354d"} >Har qanday PancakeSwap tokenini <span style={{fontWeight: "600"}}>tez</span> soniyada ishga tushiring!</Text>
                    <Box mt={"5px"} display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"20px"} >
                        <Button size={"lg"} bg={"#6366f1"} _hover={{bg: "#4245DE"}} >Sotib olish!</Button>
                        <Button size={"lg"} variant={"outline"} borderColor={"gray"} _hover={{bg: "white", borderColor: "white", color: "black"}} >To'liq O'qish</Button>
                    </Box>
                </Box>
                <Image style={{width: "750px"}} alt="uztradingbot" width={500} height={500} src={img} />
            </Box>
        </Box>
    )
}

export default Main