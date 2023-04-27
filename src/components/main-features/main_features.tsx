import { EditIcon, InfoOutlineIcon, RepeatIcon, StarIcon, WarningTwoIcon } from "@chakra-ui/icons"
import { Box, Button, Text } from "@chakra-ui/react"
import Image from "next/image"
import img from "@/assets/img.jpg"

const MainFeatures = () => {
    return (
        <Box color={"black"}>
            <Box maxW={"1280px"} py={"80px"} mx={"auto"} display={"flex"} justifyContent={"space-between"} alignItems={"start"} >
                <Box w={"33.333%"}>
                    <Text fontSize={"34px"} fontWeight={"600"} >Sanoatning ilg'or xususiyatlari.</Text>
                </Box>
                <Box w={"33.333%"} display={"flex"} flexDirection={"column"} alignItems={"start"} gap={"40px"}>
                    <Box display={"flex"} flexDirection={"column"} alignItems={"start"} gap={"10px"} height={"240px"}>
                        <Box w={"45px"} borderRadius={"8px"} h={"45px"} display={"flex"} justifyContent={"center"} alignItems={"center"} bg={"#6f42c1"}>
                            <RepeatIcon fontSize={"28px"} color={"white"} />
                        </Box>
                        <Text fontSize={"23px"} fontWeight={"600"} >Mempool skanerlash</Text>
                        <Text pr={"40px"} textAlign={"justify"} fontSize={"18px"} color={"#9397ad"} >Bot likvidlik tranzaksiyasini tasdiqlashdan oldin ko'radi. Buning yordamida bir xil blokda xarid buyurtmasini joylashtirishi mumkin, bu xarid va likvidlik operatsiyalari o'rtasida 0 soniya kechikishga olib keladi.</Text>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} alignItems={"start"} gap={"10px"} height={"230px"}>
                        <Box w={"45px"} borderRadius={"8px"} h={"45px"} display={"flex"} justifyContent={"center"} alignItems={"center"} bg={"#6f42c1"}>
                            <WarningTwoIcon fontSize={"28px"} color={"white"} />
                        </Box>
                        <Text fontSize={"23px"} fontWeight={"600"} >Anti-Bot</Text>
                        <Text pr={"40px"} textAlign={"justify"} fontSize={"18px"} color={"#9397ad"} >Anti-bot tizimlarini aylanib o'tishga yordam beradigan xususiyatlar to'plami aks holda uning samaradorligini pasaytirishi yoki hatto pul yo'qotishi mumkin.</Text>
                    </Box>
                </Box>
                <Box w={"33.333%"} display={"flex"} flexDirection={"column"} alignItems={"start"} gap={"40px"}>
                    <Box display={"flex"} flexDirection={"column"} alignItems={"start"} gap={"10px"} height={"240px"}>
                        <Box w={"45px"} borderRadius={"8px"} h={"45px"} display={"flex"} justifyContent={"center"} alignItems={"center"} bg={"#6f42c1"}>
                            <EditIcon fontSize={"28px"} color={"white"} />
                        </Box>
                        <Text fontSize={"23px"} fontWeight={"600"} >Moslashuvchanlik</Text>
                        <Text pr={"40px"} textAlign={"justify"} fontSize={"18px"} color={"#9397ad"} >Istalgan natijalarga erishish uchun bir nechta sozlamalarni o'zgartiring. Kod ochiq, shuning uchun nima sodir bo'layotganini aniq ko'rishingiz mumkin. Siz hatto uni tahrirlashingiz mumkin.</Text>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} alignItems={"start"} gap={"10px"} height={"230px"}>
                        <Box w={"45px"} borderRadius={"8px"} h={"45px"} display={"flex"} justifyContent={"center"} alignItems={"center"} bg={"#6f42c1"}>
                            <InfoOutlineIcon fontSize={"28px"} color={"white"} />
                        </Box>
                        <Text fontSize={"23px"} fontWeight={"600"} >Avtomatik daromad olish</Text>
                        <Text pr={"40px"} textAlign={"justify"} fontSize={"18px"} color={"#9397ad"} >X miqdorda foyda olingandan so'ng darhol tokenlarni soting.</Text>
                    </Box>
                </Box>
            </Box>
            
            <Box maxW={"1280px"} py={"80px"} mx={"auto"} display={"flex"} justifyContent={"space-between"} flexDirection={"column"} gap={"80px"} alignItems={"start"} >
                <Box display={"flex"} justifyContent={"space-between"} gap={"30px"}>
                    <Image style={{width: "600px"}} alt="uztradingbot" width={500} height={500} src={img} />
                    <Box display={"flex"} flexDirection={"column"} alignItems={"start"} gap={"10px"} >
                        <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"8px"}>
                            <StarIcon fontSize={"32px"} color={"green.400"} />
                            <Text fontSize={"32px"} fontWeight={"600"} >Bozorda liderlik qilish</Text>
                        </Box>
                        <Text fontSize={"22px"} color={"#9397ad"}>
                            UzTradingBot - bu sohadagi eng yirik kitlar tomonidan ishlatiladigan bozorda PancakeSwap BSC uchun eng ilg'or snayper bot. Bizning botimiz foydalanuvchi bazamiz tomonidan sinovdan o'tkazildi, ular botimiz taqdim etgan natijalardan mamnun. Ikkilanmang va yangi ro'yxatga olingan tokenlarni birinchilardan bo'lib sotib oling.
                        </Text>
                    </Box>
                </Box>
                <Box display={"flex"} justifyContent={"space-between"} gap={"30px"}>
                    <Box display={"flex"} flexDirection={"column"} alignItems={"start"} gap={"10px"} >
                        <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"8px"}>
                            <WarningTwoIcon fontSize={"32px"} color={"red.500"} />
                            <Text fontSize={"32px"} fontWeight={"600"} >Bozor tushib ketdimi? Farqi yo'q!</Text>
                        </Box>
                        <Text fontSize={"22px"} color={"#9397ad"}>
                            Bozor tushyaptimi yoki yo'qmi muhim emas. Har kuni yuzlab yangi loyihalar ishga tushiriladi va siz ularning har biridan erta sakrab pul ishlashingiz mumkin.
                        </Text>
                        <Text fontSize={"24px"} fontWeight={"600"} color={"#9397ad"}>
                            Xo'sh, nimani kutyapsiz?
                        </Text>
                        <Button mt={"5px"} color={"white"} size={"lg"} bg={"#6366f1"} _hover={{bg: "#4245DE"}} >Sotib olish!</Button>
                    </Box>
                    <Image style={{width: "600px"}} alt="uztradingbot" width={500} height={500} src={"https://www.unisniper.com/assets/bull-stock.png"} />
                </Box>
            </Box>

        </Box>
    )
}

export default MainFeatures