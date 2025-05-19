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
          {response.content?.oufit.sort((a, b) => a.order - b.order).map((item) => {
            return (
              <VStack borderY={"1px solid black"}>
                <Text>Name: {item.name}</Text>
                <Text>Color: {item.color}</Text>
                <Text>Brand: {item.brand}</Text>
                <Text>{item.order}</Text>
                <Text>{item.type}</Text>
                <Text>{item.color}</Text>
                <Text>{item.reasoning}</Text>
                <Text>{item.description}</Text>
              </VStack>
            )
          })}


        </VStack>
      </VStack>
    </>
  )
}

export default Test
