/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext } from "/utils/context"
import { Event, isTrue } from "/utils/state"
import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { getEventURL } from "/utils/state.js"




export function Fragment_fd0e7cb8f9fb4669a6805377d925fba0 () {
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {getEventURL().href}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Button_ea384a83f78c758c5f30e626eb3337b1 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_afcacc0bf09b8789a015e9a61b09b8de = useCallback((_e) => addEvents([Event("_redirect", {path:`/home`,external:false})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_afcacc0bf09b8789a015e9a61b09b8de} sx={{"marginRight": "1em"}}>
  {`Frontpage`}
</Button>
  )
}

export function Button_8e6b9372ec9e1f0f03143823a71d5bfd () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_2d7ba5ec9d6c37a8649083c9ea463caa = useCallback((_e) => addEvents([Event("_redirect", {path:`/new_tournament`,external:false})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_2d7ba5ec9d6c37a8649083c9ea463caa} sx={{"marginRight": "1em"}}>
  {`New tournament`}
</Button>
  )
}

export function Button_da2220b4ef94ac612095b7ea7962e584 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_0efd6f4d7da6130e9bdf25921161eece = useCallback((_e) => addEvents([Event("_redirect", {path:`/tournaments`,external:false})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_0efd6f4d7da6130e9bdf25921161eece} sx={{"marginRight": "1em"}}>
  {`View all tournaments`}
</Button>
  )
}

export function Button_a6cff2a2bd7ac8237d5de6f9a3cecd2d () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_3378da63d1beed448968148435c684ca = useCallback((_e) => addEvents([Event("_redirect", {path:`/signup`,external:false})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_3378da63d1beed448968148435c684ca} sx={{"marginRight": "1em"}}>
  {`Signup`}
</Button>
  )
}

export function Button_5a6a2fd14d24c4fba9960d1c6d094b39 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_2fd35f581ac6d709ce2966c88c7c5818 = useCallback((_e) => addEvents([Event("_redirect", {path:`/login`,external:false})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_2fd35f581ac6d709ce2966c88c7c5818} sx={{"marginRight": "1em"}}>
  {`Login`}
</Button>
  )
}
