/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Button_5a6a2fd14d24c4fba9960d1c6d094b39, Button_8e6b9372ec9e1f0f03143823a71d5bfd, Button_a6cff2a2bd7ac8237d5de6f9a3cecd2d, Button_da2220b4ef94ac612095b7ea7962e584, Button_ea384a83f78c758c5f30e626eb3337b1, Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { EventLoopContext } from "/utils/context"
import { Event } from "/utils/state"
import NextHead from "next/head"



export function Button_bb26556cbf424f976352b9a173e5c5f3 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_431d304a1a12ed2b8deb58d3d7824397 = useCallback((_e) => addEvents([Event("_redirect", {path:`/tournaments/Jay3s_Community_Clash`,external:false})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_431d304a1a12ed2b8deb58d3d7824397}>
  {`View tournament`}
</Button>
  )
}

export function Button_9f77653cef74b93031638786f4709b9d () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_cf8de23db361b187db91b9aab41a315b = useCallback((_e) => addEvents([Event("_redirect", {path:`/tournaments/Duck_Squad_Glacial_Showdown_3`,external:false})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_cf8de23db361b187db91b9aab41a315b}>
  {`View tournament`}
</Button>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <VStack sx={{"paddingTop": "10%"}}>
  <Heading sx={{"fontSize": "4em"}}>
  {`All tournaments`}
</Heading>
  <VStack>
  <Box>
  <VStack sx={{"paddingTop": "10%"}}>
  <Heading>
  {`Duck Squad Glacial Showdown #3`}
</Heading>
  <Text>
  {`Format
Single Elimination
All Matches excl. Grand Finals are Bo3
Grand Finals are Bo5`}
</Text>
  <Button_9f77653cef74b93031638786f4709b9d/>
</VStack>
</Box>
  <Box>
  <VStack sx={{"paddingTop": "10%"}}>
  <Heading>
  {`Jay3's Community Clash`}
</Heading>
  <Text>
  {`Format
Double Elimination Bracket:
Six invited teams and two from the Qualifier
All matches (excl. Grand Finals) are Ft3
Grand Finals are Ft4`}
</Text>
  <Button_bb26556cbf424f976352b9a173e5c5f3/>
</VStack>
</Box>
</VStack>
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
