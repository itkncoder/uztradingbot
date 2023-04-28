import { Box, Button, Text } from "@chakra-ui/react"
import Image from "next/image"
import img from "@/assets/img.jpg"

const Main = () => {
    return (
        <Box bg={"#0b0f19"} color={"white"} >
            <Box maxW={{base: "none", lg: "1280px"}} flexDirection={{base: "column", lg: "row"}} mx={{base: "10px", lg: "auto"}} display={"flex"} justifyContent={"space-between"} py={"80px"} alignItems={"center"} gap={"40px"}>
                <Box display={"flex"} flexDirection={"column"} gap={"10px"} >
                    <Text fontWeight={"bold"} fontSize={{base: "32px", lg: "45px"}}>Uz<span style={{color: "#6366f1"}} >Trading</span>Bot - Foydalanuvchilar xohlagan eng ilg'or BSC <span style={{color: "#6366f1"}}>snayper</span> boti!</Text>
                    <Text fontSize={{base: "20px", lg: "26px"}} color={"#33354d"} >Har qanday PancakeSwap tokenini <span style={{fontWeight: "600"}}>tez</span> soniyada ishga tushiring!</Text>
                    <Box mt={"5px"} display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"20px"} >
                        <Button size={{base: "md", lg: "lg"}} bg={"#6366f1"} _hover={{bg: "#4245DE"}} >Sotib olish!</Button>
                        <Button size={{base: "md", lg: "lg"}} variant={"outline"} borderColor={"gray"} _hover={{bg: "white", borderColor: "white", color: "black"}} >To'liq O'qish</Button>
                    </Box>
                </Box>
                <Image style={{width: "750px"}} alt="uztradingbot" width={500} height={500} src={img} />
            </Box>
        </Box>
    )
}

export default Main