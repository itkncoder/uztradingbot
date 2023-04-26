import { InfoOutlineIcon, QuestionOutlineIcon } from '@chakra-ui/icons'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text
  } from '@chakra-ui/react'

const Quetions = () => {
    return (
        <Box color={"black"} my={"80px"} >

            <Box my={"50px"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} >
                <Text fontSize={"32px"} fontWeight={"600"} >Tez-tez so'raladigan savollar</Text>
                <Text color={"#9397ad"} fontSize={"22px"} >Sizga qanday yordam bera olamiz?</Text>
            </Box>

            <Box maxW={"1280px"} mx={"auto"} my={"80px"} display={"flex"} justifyContent={"space-between"} alignItems={"start"} gap={"25px"} >

                <Box display={"flex"} flexDirection={"column"} w={"70%"} gap={"20px"} >
                    <Box>
                        <Text my={"15px"} fontSize={"28px"} fontWeight={"600"} >Asosiy</Text>
                        <Box border={"2px solid #949494"} borderRadius={"8px"} >
                            <Accordion allowToggle>
                                <AccordionItem border={"0"}>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' fontSize={"18px"} textAlign='left'>
                                            UzTradingBot nima?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        UzTradingBot - bu PancakeSwap markazlashtirilmagan almashinuvi uchun snayper bot. Uning asosiy vazifasi tokenlarni PancakeSwap-ga qo'shilishi bilanoq sotib olishdir. Bu ko'pincha Pancakesniper yoki BSC snayper bot deb ataladi.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem border={"0"}>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' fontSize={"18px"} textAlign='left'>
                                            Snayper bot nima?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Snayper botlari (yoki "snayper botlari") vaqtga asoslangan faoliyatni kuzatadigan va boshqa odamlarning ushbu harakatga javob berish imkoniyatini yo'qotib, oxirgi daqiqada ma'lumotlarni taqdim etadigan avtomatlashtirilgan botlardir. BSC snayper boti (PancakeSwap snayper boti) tokenlarni PancakeSwap DEXga qo‘shilishi bilanoq sotib olish uchun ishlatiladi. Bot yordamida foydalanuvchi tokenlarni boshqalardan oldin arzonroq narxda sotib olishi va keyinchalik foyda olish uchun tokenlarni sotishi mumkin.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem border={"0"}>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' fontSize={"18px"} textAlign='left'>
                                            Qaysi sozlamani sozlashim mumkin?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        O'zgartirish mumkin bo'lgan bir nechta sozlamalar mavjud, ulardan bir nechtasi:
                                        Sotib olish qiymati - Siz sotib olmoqchi bo'lgan BNBdagi qiymat
                                        Likvidlik qiymati - BNB botidagi qiymat xarid buyurtmasini tetiklaydi. Bu "soxta likvidlik" stsenariylarining oldini olish uchun ishlatiladi, bu erda faqat kichik miqdordagi likvidlik qo'shiladi, bu botlarni juda yuqori narxga token sotib olishga majbur qiladi va pul yo'qotishiga olib keladi.
                                        % foyda daromadi -% daromad olingandan keyin tokenlarni avtomatik sotish uchun ishlatiladi.
                                        Xarid qilish rejimi - Bot xarid qilish uchun buyurtma berish uchun turli "taktikalar"dan foydalanishi mumkin. Bitta rejim boshqalarga qaraganda samaraliroq bo'lishi mumkin. Bu sizning sozlashingizga bog'liq va siz uchun eng yaxshisini sinab ko'rishingiz kerak.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem border={"0"}>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' fontSize={"18px"} textAlign='left'>
                                            Qanday talablar mavjud? U Windows va Mac-da ishlaydimi?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Bot dasturi JavaScript-da yozilgan va ishlashi uchun NodeJS talab qilinadi. NodeJS Windows va Mac-ga hech qanday muammosiz o'rnatilishi mumkin.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem border={"0"}>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' fontSize={"18px"} textAlign='left'>
                                            Unga kripto hamyon kerakmi? Agar shunday bo'lsa, qaysi biri?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Chunki bot tranzaktsiyalarni amalga oshirishi kerak. U tranzaktsiyalarni imzolash uchun shaxsiy kalitdan foydalanadi. Shaxsiy kalitni MetaMask yoki boshqa har qanday hamyondan eksport qilishingiz mumkin. Batafsil ko'rsatmalar bizning qo'llanmamizda mavjud. Xavotir olmang, biz sizning hamyoningizni o'g'irlamaymiz. Bot uchinchi tomon xizmatlari bilan aloqa qilmaydi, u faqat Web3 provayderiga ulanadi. Botlarning manba kodi o'qish uchun ochiq, shuning uchun siz qanday funksiyalar chaqirilishini tekshirishingiz va shaxsiy kalitingizdan boshqa hech narsa uchun foydalanmayotganimizga ishonch hosil qilishingiz mumkin.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem border={"0"}>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' fontSize={"18px"} textAlign='left'>
                                            Qanday to'lovlarni qabul qilinadi?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Hozirda biz faqat BNBda kripto toʻlovlarini qabul qilamiz. To'lovlar avtomatik tarzda amalga oshiriladi va 5 daqiqa ichida siz bot fayllariga kirishingiz mumkin.
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>

                        </Box>
                    </Box>

                    <Box>
                        <Text my={"15px"} fontSize={"28px"} fontWeight={"600"} >Xususiyatlari</Text>
                        <Box border={"2px solid #949494"} borderRadius={"8px"} >

                            <Accordion allowToggle>
                                <AccordionItem border={"0"}>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' fontSize={"18px"} textAlign='left'>
                                            Botning asosiy xususiyatlari nimada?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Asosiy xususiyatlar ro'yxati:
                                        Mempool skanerlash - blokcheyn orqali kiruvchi tasdiqlanmagan tranzaktsiyalarni skanerlaydi
                                        Likvidlik qiymatini tekshirgich - Bot faqat qo'shilgan likvidlik qiymati belgilangan qiymatdan yuqori yoki teng bo'lsa, xarid buyurtmasini beradi.
                                        Avtomatik foyda - foyda chegarasiga erishilgandan so'ng darhol tokenlarni soting
                                        Tokenni ma'qullash - laggy PancakeSwap UI talab qilmasdan savdo uchun tokenni tasdiqlang
                                        Darhol sotib olish va sotish - laggy PancakeSwap UI-ga ehtiyoj sezmasdan tokenlaringizni sotib oling va soting
                                        Bir nechta sotib olish usullari - turli xil xarid usullaridan tanlang. Bitta sotib olish rejimi boshqasidan ko'ra samaraliroq bo'lishi mumkin. Bu sizning sozlashingizga bog'liq. Siz uchun eng yaxshisini sinab ko'rishingiz kerak.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem border={"0"}>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' fontSize={"18px"} textAlign='left'>
                                            Bot faqat tokenlarni sotib oladimi yoki sotadimi?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Siz tanlash uchun turli xil rejimlarga egasiz.
                                        Sotib oling - Darhol tokenlarni sotib oling va X miqdorida foydani kuting, so'ngra tokenlarni soting (laggy PancakeSwap interfeysini chetlab o'tish uchun foydalaniladi)
                                        Sotish - Tokenlarni darhol soting (laggy PancakeSwap interfeysini chetlab o'tish uchun foydalaniladi)
                                        Snipe - Qo'shimcha likvidlik operatsiyalarini qidiring va likvidlik qo'shilishi bilanoq sotib oling va X miqdorda foydani kuting, so'ngra tokenlarni soting.
                                        Tasdiqlash - savdo uchun tokenlarni tasdiqlash (agar siz tokenlarni sotishni rejalashtirmoqchi bo'lsangiz, bu kerak)
                                        Daromad - Birinchi rejim bilan bir xil, faqat u sotib olmaydi, faqat X miqdorda foyda kutadi, keyin tokenlarni sotadi
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem border={"0"}>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' fontSize={"18px"} textAlign='left'>
                                            Tokenni tasdiqlaydimi?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Ha, savdo uchun tokenni tasdiqlash rejimi mavjud.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem border={"0"}>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' fontSize={"18px"} textAlign='left'>
                                            Bot qanchalik samarali?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Botning ishlashi va samaradorligi siz ulangan blokcheyn tuguniga va bot ishlayotgan kompyuterning internetga ulanishiga juda bog'liq. Qanchalik tez/yangiroq tugun va internetga ulanishning kechikishi past bo'lsa, tranzaktsiyangiz likvidlikni qo'shish bloki bilan bir xil blokda qayta ishlanishi va tasdiqlanishi ehtimoli shunchalik yuqori bo'ladi. WiFi kechikish vaqtini sezilarli darajada oshirishi va ulanishingizning o'tkazuvchanligini kamaytirishi mumkin, bu esa botning samaradorligini sezilarli darajada pasaytiradi. Simli ulanish tavsiya etiladi.
                                    </AccordionPanel>
                                </AccordionItem>

                            </Accordion>

                        </Box>
                    </Box>

                </Box>

                <Box mt={"100px"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} gap={"8px"} >
                    <Text fontSize={"20px"} fontWeight={"600"} >Boshqa savollaringiz bormi?</Text>
                    <Text fontSize={"20px"} fontWeight={"600"} color={"#33354d"} >Biz bilan bog'laning</Text>
                    <a style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "10px"}} href="https://t.me/uztradingbot">
                        <Text fontSize={"18px"} >Telegram <span style={{fontWeight: "600"}}>KANAL</span>:</Text>
                        <QuestionOutlineIcon fontSize={"20px"} />
                    </a>
                    <a style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "10px"}} href="https://t.me/nodejs5">
                        <Text fontSize={"18px"}>Telegram <span style={{fontWeight: "600"}}>ADMIN</span>:</Text>
                        <InfoOutlineIcon fontSize={"20px"} />
                    </a>
                </Box>

            </Box>
        </Box>
    )
}

export default Quetions