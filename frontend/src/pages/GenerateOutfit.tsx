import { Box, Button, ButtonGroup, Heading, HStack, Textarea, VStack } from '@chakra-ui/react';
import PageWrapper from '../components/PageWrapper';


const GenerateOutfit = () => {
  return (
    <PageWrapper>
      <HStack w={"100%"} h={"100%"} py={"1.5em"}>
        <VStack w={"30%"} h={"100%"} align={"flex-start"} pr={"2em"} overflowY={"auto"}>
          <Textarea minH={"25%"} borderRadius={"1.5em"} color={"var(--accent-ii)"} placeholder='How do you want to dress?' _placeholder={{ color: "accent-ii"}} bg={"var(--accent-i)"} border={"0.15em solid var(--accent-ii)"} outline={"none"}/>
          <ButtonGroup w={"100%"} justify={"space-between"}>
            <Button color={"var(--accent-ii)"} bg={"var(--accent-iii)"} w={"48%"} border={"0.15em solid var(--accent-ii)"} borderRadius={"1em"}>Add Photos</Button>
            <Button color={"var(--accent-iii)"} bg={"var(--accent-ii)"} w={"48%"} border={"0.15em solid var(--accent-ii)"} borderRadius={"1em"}>Style</Button>
          </ButtonGroup>
          <Heading mt={"2em"} size={"md"} color={"var(--accent-ii)"} alignSelf={"center"}>Photos</Heading>
          <HStack w={"100%"} justifyContent={"space-between"} mt={"1em"} wrap={"wrap"}>
            <Box w={"48%"} aspectRatio={1} bg={"var(--accent-iii)"} borderRadius={"1.5em"} border={"2px solid var(--accent-ii)"}></Box>
            <Box w={"48%"} aspectRatio={1} bg={"var(--accent-iii)"} borderRadius={"1.5em"} border={"2px solid var(--accent-ii)"}></Box>
            {/* <Box w={"48%"} aspectRatio={1} bg={"var(--accent-iii)"} borderRadius={"1.5em"} border={"2px solid var(--accent-ii)"}></Box> */}
          </HStack>
        </VStack>
        <VStack w={"70%"} h={"100%"} bg={"var(--accent-ii)"} borderRadius={"1.5em"}>
            
        </VStack>
      </HStack>
    </PageWrapper>
  )
}

export default GenerateOutfit
