export const getAiResponse = async (prompt: string) => {
  try {
    const res = await fetch("http://localhost:3000/style", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({prompt: prompt})
    })
    console.log(res.body)
    return res.body
  } catch (error) {
    console.error(error)
  }
}