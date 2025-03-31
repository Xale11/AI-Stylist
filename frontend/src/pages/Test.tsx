import { Button, Text, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { getAiResponse } from '../api/openai'
import { Outfit } from '../types/models'

interface GPTResponse {
  role: string
  content: Outfit | undefined
  refusal: null | string
}

const Test = () => {

  const [prompt, setPrompt] = useState<string>("")
  const [response, setResponse] = useState<GPTResponse>({content: undefined, refusal: null, role: ""})

  const handleSubmit = async () => {
    const res = await getAiResponse(prompt)
    const reader = res?.pipeThrough(new TextDecoderStream()).getReader();

    let jsonResponse: string = ""

    while (true){
      if (reader){
        const {value, done} = await reader.read();
        if (done) break;
        jsonResponse = jsonResponse + value
        console.log(12, value)
      }
    }

    // data is double encoded 
    const parsedResponse = JSON.parse(jsonResponse)
    parsedResponse.content = JSON.parse(parsedResponse.content)
    setResponse(parsedResponse)
  }

console.log(response)

  return (
    <>
      <VStack w={"100vw"} h={"100vh"} pt={"2em"}>
        <VStack bg={"gray"} w={"80%"} py={5}>
          <Text>Enter the style you want</Text>
          <Textarea value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
          <Button disabled={!prompt} onClick={handleSubmit}>Submit</Button>
        </VStack>
        
        <VStack bg={"gray"} w={"80%"} py={5}>
          <Text>AI response</Text>
          
          <VStack>
            <Text textDecor={"underline"} fontWeight={"bold"}>Head</Text>
            <Text>{response.content?.head?.[0].name}</Text>
            <Text>{response.content?.head?.[0].price}</Text>
            <Text>{response.content?.head?.[0].urls?.[0]}</Text>
            <Text>{response.content?.head?.[0].type}</Text>
            <Text>{response.content?.head?.[0].color}</Text>
            <Text>{response.content?.head?.[0].reasoning}</Text>
            <Text>{response.content?.head?.[0].description}</Text>
          </VStack>

          <VStack>
            <Text textDecor={"underline"} fontWeight={"bold"}>Torso</Text>
            <Text>{response.content?.torso?.[0].name}</Text>
            <Text>{response.content?.torso?.[0].price}</Text>
            <Text>{response.content?.torso?.[0].urls?.[0]}</Text>
            <Text>{response.content?.torso?.[0].type}</Text>
            <Text>{response.content?.head?.[0].color}</Text>
            <Text>{response.content?.head?.[0].reasoning}</Text>
            <Text>{response.content?.head?.[0].description}</Text>
          </VStack>

          <VStack>
            <Text textDecor={"underline"} fontWeight={"bold"}>Legs</Text>
            <Text>{response.content?.legs?.[0].name}</Text>
            <Text>{response.content?.legs?.[0].price}</Text>
            <Text>{response.content?.legs?.[0].urls?.[0]}</Text>
            <Text>{response.content?.legs?.[0].type}</Text>
            <Text>{response.content?.head?.[0].color}</Text>
            <Text>{response.content?.head?.[0].reasoning}</Text>
            <Text>{response.content?.head?.[0].description}</Text>
          </VStack>

          <VStack>
            <Text textDecor={"underline"} fontWeight={"bold"}>Feet</Text>
            <Text>{response.content?.feet?.[0].name}</Text>
            <Text>{response.content?.feet?.[0].price}</Text>
            <Text>{response.content?.feet?.[0].urls?.[0]}</Text>
            <Text>{response.content?.feet?.[0].type}</Text>
            <Text>{response.content?.head?.[0].color}</Text>
            <Text>{response.content?.head?.[0].reasoning}</Text>
            <Text>{response.content?.head?.[0].description}</Text>
          </VStack>
        </VStack>
      </VStack>
    </>
  )
}

export default Test
