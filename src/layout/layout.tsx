import { Box } from "@chakra-ui/react"
import Head from "next/head"

const Layout = (props: any): JSX.Element => {
    return (
        <Box bg={"white"} overflowX={"hidden"} minH={"100vh"} >
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>UzTradingBot</title>
            </Head>
            <Box>
                {props.children}
            </Box>
        </Box>
    )
}

export default Layout