/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Button_5a6a2fd14d24c4fba9960d1c6d094b39, Button_8e6b9372ec9e1f0f03143823a71d5bfd, Button_a6cff2a2bd7ac8237d5de6f9a3cecd2d, Button_da2220b4ef94ac612095b7ea7962e584, Button_ea384a83f78c758c5f30e626eb3337b1, Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Button, Code, Heading, HStack, Link, VStack } from "@chakra-ui/react"
import { ColorModeContext, EventLoopContext } from "/utils/context"
import { Event, isTrue } from "/utils/state"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import NextHead from "next/head"



export function Link_891a85760a2d39c9b3d97bd9f86af37d () {
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)


  return (
    <Link as={NextLink} href={`https://reflex.dev/docs/getting-started/introduction`} sx={{"border": "0.1em solid", "padding": "0.5em", "borderRadius": "0.5em", "_hover": {"color": isTrue((colorMode === "light")) ? `rgb(107,99,246)` : `rgb(179, 175, 0)`}}}>
  {`Check out our docsfjdsih!`}
</Link>
  )
}

export function Fragment_c4944d8b5ece4892844e987a2ddfe4ae () {
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)


  return (
    <Fragment>
  {isTrue((colorMode === "light")) ? (
  <Fragment>
  <SunIcon/>
</Fragment>
) : (
  <Fragment>
  <MoonIcon/>
</Fragment>
)}
</Fragment>
  )
}

export function Button_5cbb2952409d1e5ed6e42602daa56ec7 () {
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_9922dd3e837b9e087c86a2522c2c93f8 = useCallback(toggleColorMode, [addEvents, Event, colorMode, toggleColorMode])

  return (
    <Button onClick={on_click_9922dd3e837b9e087c86a2522c2c93f8} sx={{"float": "right"}}>
  <Fragment_c4944d8b5ece4892844e987a2ddfe4ae/>
</Button>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Fragment>
  <Button_5cbb2952409d1e5ed6e42602daa56ec7/>
  <VStack spacing={`2.5em`} sx={{"fontSize": "2em", "paddingTop": "10%"}}>
  <Heading sx={{"fontSize": "2em"}}>
  {`Welcome to Reflex!`}
</Heading>
  <Box>
  {`Get started by editing `}
  <Code sx={{"fontSize": "1em"}}>
  {`Turnering_system/Turnering_system.py`}
</Code>
</Box>
  <Link_891a85760a2d39c9b3d97bd9f86af37d/>
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
</Fragment>
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
