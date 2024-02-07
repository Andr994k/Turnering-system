/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Button_5a6a2fd14d24c4fba9960d1c6d094b39, Button_8e6b9372ec9e1f0f03143823a71d5bfd, Button_a6cff2a2bd7ac8237d5de6f9a3cecd2d, Button_da2220b4ef94ac612095b7ea7962e584, Button_ea384a83f78c758c5f30e626eb3337b1, Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Button, Divider, Heading, HStack, Input, Text, VStack } from "@chakra-ui/react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getRefValue, getRefValues, set_val } from "/utils/state"
import "focus-visible/dist/focus-visible"
import NextHead from "next/head"



export function Text_1080eb91387b56c958b1db989df13fcd () {
  const state__form_state = useContext(StateContexts.state__form_state)


  return (
    <Text>
  {JSON.stringify(state__form_state.form_data)}
</Text>
  )
}

export function Box_c776e475260200ac3b24243da022ddf5 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  
    const handleSubmit_4038683695e0e6eb8e2a554ff648ff40 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{}}

        addEvents([Event("state.form_state.handle_submit", {form_data:form_data})])

        if (true) {
            $form.reset()
        }
    })
    


  return (
    <Box as={`form`} onSubmit={handleSubmit_4038683695e0e6eb8e2a554ff648ff40}>
  <VStack>
  <Input name={`tournament_name`} placeholder={`Tournament Name`} type={`text`}/>
  <Input name={`tournament_description`} placeholder={`Tournament Description`} type={`text`}/>
  <Button type={`submit`}>
  {`Submit`}
</Button>
</VStack>
</Box>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <VStack sx={{"paddingTop": "10%"}}>
  <Box_c776e475260200ac3b24243da022ddf5/>
  <Divider/>
  <Heading>
  {`Results`}
</Heading>
  <Text_1080eb91387b56c958b1db989df13fcd/>
  <VStack sx={{"bg": "#E6E6EA", "position": "fixed", "width": "100%", "top": "0px", "zIndex": "5"}}>
  <Heading>
  {`Tournament manager`}
</Heading>
  <HStack>
  <Button_ea384a83f78c758c5f30e626eb3337b1/>
  <Button_8e6b9372ec9e1f0f03143823a71d5bfd/>
  <Button_da2220b4ef94ac612095b7ea7962e584/>
  <Button_a6cff2a2bd7ac8237d5de6f9a3cecd2d/>
  <Button_5a6a2fd14d24c4fba9960d1c6d094b39/>
</HStack>
</VStack>
</VStack>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
