/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { Button_5a6a2fd14d24c4fba9960d1c6d094b39, Button_8e6b9372ec9e1f0f03143823a71d5bfd, Button_a6cff2a2bd7ac8237d5de6f9a3cecd2d, Button_da2220b4ef94ac612095b7ea7962e584, Button_ea384a83f78c758c5f30e626eb3337b1, Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Heading, HStack, Text, VStack } from "@chakra-ui/react"
import "@radix-ui/themes/styles.css"
import "focus-visible/dist/focus-visible"
import { Theme as RadixThemesTheme } from "@radix-ui/themes"
import theme from "/utils/theme.js"
import { StateContexts } from "/utils/context"
import NextHead from "next/head"



export function Vstack_35f531968b76cd6670e65dd4411b1681 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <VStack sx={{"paddingTop": "10%"}}>
  <Heading sx={{"fontSize": "4em"}}>
  {`All tournaments`}
</Heading>
  {Object.entries(state__state.tournaments).map((tournament, index_08e261005f032e45b450472ef1f5f507) => (
  <Fragment key={index_08e261005f032e45b450472ef1f5f507}>
  <Heading>
  {tournament[0]}
</Heading>
  <Text>
  {tournament[1]}
</Text>
</Fragment>
))}
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
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Vstack_35f531968b76cd6670e65dd4411b1681/>
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
