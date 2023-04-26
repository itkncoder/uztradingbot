import { Box } from "@chakra-ui/react"

const Layout = (props: any): JSX.Element => {
    return (
        <Box bg={"white"} minH={"100vh"} >
            <Box>
                {props.children}
            </Box>
        </Box>
    )
}

export default Layout