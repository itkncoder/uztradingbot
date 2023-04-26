import { ChatIcon } from '@chakra-ui/icons'
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
                <Text fontSize={"32px"} fontWeight={"600"} >Frequently Asked Questions</Text>
                <Text color={"#9397ad"} fontSize={"22px"} >How can we help you?</Text>
            </Box>

            <Box maxW={"1280px"} mx={"auto"} my={"80px"} display={"flex"} justifyContent={"space-between"} alignItems={"start"} gap={"25px"} >

                <Box display={"flex"} flexDirection={"column"} w={"70%"} gap={"20px"} >
                    <Box>
                        <Text my={"15px"} fontSize={"28px"} fontWeight={"600"} >General</Text>
                        <Box border={"2px solid #949494"} borderRadius={"8px"} >
                            <Accordion allowToggle>
                                <AccordionItem border={"0"}>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' fontSize={"18px"} textAlign='left'>
                                            What is UniSniper?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        UniSniper is a sniper bot for PancakeSwap decentralized exchange. Its primary function is to buy tokens as soon as they're added to the PancakeSwap. It's often called Pancakesniper or BSC sniper bot.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem border={"0"}>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' fontSize={"18px"} textAlign='left'>
                                            What is Sniper bot?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Sniper bots (or “snipe bots”) are automated bots that monitor time-based activity and submit information at the very last moment, removing the opportunity for other people to respond to that action. BSC sniper bot (PancakeSwap sniper bot) is used to buy tokens as soon as they are added to the PancakeSwap DEX. With the bot, user can buy tokens before anyone else for a lower price and sell the tokens later for profit
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem border={"0"}>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' fontSize={"18px"} textAlign='left'>
                                            What setting can I tweak?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        There are multiple setting that can be changed, here is a few of them:
                                            Value to buy - Value in BNB you want to buy with
                                            Liquidity value - Value in BNB bot triggers buy order. This is used to prevent "fake liquidity" scenarios, where only small amount of liquidity is added, which triggers bots to buy tokens for insanely high price, leading to money loss.
                                            % profit return - Used for auto selling tokens after % of profit is made.
                                            Buy mode - Bot can use different "tactics" to place a buy order. One mode can be more effective than others. It depends on your setup and you have to test what works the best for you.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem border={"0"}>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' fontSize={"18px"} textAlign='left'>
                                            What requirements are there? Does it run on both Windows and Mac?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Bot software is written in JavaScript and requires NodeJS to run. NodeJS can be installed on both Windows and Mac without any problem.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem border={"0"}>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' fontSize={"18px"} textAlign='left'>
                                            Does it need a crypto wallet? If so, which one?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        As bot needs to make transactions. It uses private key to sign transactions. You can export private key from MetaMask or any other wallet. Detailed instructions are in our manual. Don't worry, we won't steal your wallet. Bot does not communicate with any 3rd party service, it only connects to Web3 provider. The bots source code is open to read, so you can check what funcions are called and make sure we are not using your private key to anything else.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem border={"0"}>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' fontSize={"18px"} textAlign='left'>
                                            What payments do you accept?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        We currently only accept crypto payments in BNB. Payments are automatically processed and within 5 minutes you have access to the bot files.
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>

                        </Box>
                    </Box>

                    <Box>
                        <Text my={"15px"} fontSize={"28px"} fontWeight={"600"} >Features</Text>
                        <Box border={"2px solid #949494"} borderRadius={"8px"} >

                            <Accordion allowToggle>
                                <AccordionItem border={"0"}>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' fontSize={"18px"} textAlign='left'>
                                            What are the main features of the bot?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        List of the main features:
                                        Mempool scanning - scans blockchain for incomming unconfirmed transactions
                                        Liquidity value checker - Bot will place buy order only if the value of added liquidity is higher or equal than the set value
                                        Auto profit - Sell tokens immediately as soon as profit threshold is met
                                        Approve token - approve token for trading without the need of laggy PancakeSwap UI
                                        Instant Buy & Sell - Buy and Sell your tokens without the need of laggy PancakeSwap UI
                                        Multiple Buy modes - Choose from different buy modes. One buy mode can be more effective than the other. It depends on your setup. You need to test what works the best for you.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem border={"0"}>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' fontSize={"18px"} textAlign='left'>
                                            Does the bot only buy or also sell the tokens?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        You have different modes to chose from.
                                        Buy - Immediately buy tokens and wait for X amount of profit, then sell tokens (used to bypass laggy PancakeSwap interface)
                                        Sell - Immediately sell tokens immediately (used to bypass laggy PancakeSwap interface)
                                        Snipe - Look for add liquidity transactions and buy as soon as liquidity is added, and wait for X amount of profit, then sell tokens
                                        Approve - Approve tokens for trading (this is needed if you plan to sell tokens)
                                        Profit - Same as the first mode, except it does not buy, but only waits for X amount of profit, then sells tokens
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem border={"0"}>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' fontSize={"18px"} textAlign='left'>
                                            Does it approve the token?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Yes, there is a mode to approve token for trading.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem border={"0"}>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' fontSize={"18px"} textAlign='left'>
                                            How effective is the bot?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        The performance and effectiveness of the bot are highly dependent on the blockchain node you are connected to, and the internet connection of a computer where the bot is running. The quicker / more up-to-date node and lower latency internet connection, the higher the chance of your transaction being processed and confirmed in the same block as the add liquidity one. WiFi can significantly raise the latency and lower the throughput of your connection, thus significantly lowering the effectiveness of the bot. Wired connection is recommended.
                                    </AccordionPanel>
                                </AccordionItem>

                            </Accordion>

                        </Box>
                    </Box>

                </Box>

                <Box mt={"100px"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} gap={"8px"} >
                    <Text fontSize={"18px"} fontWeight={"600"} >Have more questions?</Text>
                    <Text fontSize={"17px"} color={"#33354d"} >Contact us at</Text>
                    <a style={{color: "#6366f1"}} href="unisniper@protonmail.com">unisniper@protonmail.com</a>
                    <Text fontSize={"17px"} fontWeight={"600"} >or our Telegram</Text>
                    <a href="unisniper@protonmail.com">
                        <ChatIcon fontSize={"20px"} />
                    </a>
                </Box>

            </Box>
        </Box>
    )
}

export default Quetions