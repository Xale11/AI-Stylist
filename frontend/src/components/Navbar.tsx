import { Box, Heading, HStack, Icon } from '@chakra-ui/react'
import { MdMenu, MdPerson } from 'react-icons/md'

const Navbar = () => {
  return (
    <HStack px={"1.5em"} h={"5em"} w={"100%"} justifyContent={"space-between"} position={"relative"}>
      <Icon size={"2xl"} color={'var(--accent-ii)'} border={"1px solid var(--accent-ii)"} borderRadius={"full"} p={1}>
        <MdMenu />
      </Icon>
      <Heading color={'var(--accent-ii)'}>STYLO</Heading>
      <Icon size={"2xl"} color={'var(--accent-ii)'} border={"1px solid var(--accent-ii)"} borderRadius={"full"} p={1}>
        <MdPerson />
      </Icon>
      <Box bottom={0} position={"absolute"} border={"0.075em solid var(--accent-ii)"} px={"1.5em"} w={"calc(100% - 3em)"}/>
    </HStack>
  )
}

export default Navbar
