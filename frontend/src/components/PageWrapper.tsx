import { VStack } from "@chakra-ui/react"
import Navbar from "./Navbar"

interface Props {
  children?: React.ReactNode;
}

const PageWrapper = ({ children }: Props) => {
  return (
    <VStack w={"100vw"} h={"100vh"} bg={"primary"} gap={0}>
      <Navbar/>
      <VStack px={"1.5em"} w={"100%"} h={"calc(100% - 5em)"}> { /* Minus 5em due to the height of the navbar */ }
        {children}
      </VStack>
    </VStack>
  )
}

export default PageWrapper
