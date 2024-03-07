/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue } from "/utils/state"
import { Button as RadixThemesButton, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Separator as RadixThemesSeparator, Text as RadixThemesText, TextField as RadixThemesTextField } from "@radix-ui/themes"
import env from "/env.json"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
import NextHead from "next/head"



export function Button_3ee5e4ea8589a9c943009e7404eb53be () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_2fd35f581ac6d709ce2966c88c7c5818 = useCallback((_e) => addEvents([Event("_redirect", {path:`/login`,external:false})], (_e), {}), [addEvents, Event])

  return (
    <RadixThemesButton css={{"marginRight": "1em"}} onClick={on_click_2fd35f581ac6d709ce2966c88c7c5818}>
  {`Login`}
</RadixThemesButton>
  )
}

export function Button_89f5528bc8ce3b71e3908f3b2100bd35 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_0efd6f4d7da6130e9bdf25921161eece = useCallback((_e) => addEvents([Event("_redirect", {path:`/tournaments`,external:false})], (_e), {}), [addEvents, Event])

  return (
    <RadixThemesButton css={{"marginRight": "1em"}} onClick={on_click_0efd6f4d7da6130e9bdf25921161eece}>
  {`View all tournaments`}
</RadixThemesButton>
  )
}

export function Button_2d7913e82e1ffb5e7e8eca7e779994fc () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_2d7ba5ec9d6c37a8649083c9ea463caa = useCallback((_e) => addEvents([Event("_redirect", {path:`/new_tournament`,external:false})], (_e), {}), [addEvents, Event])

  return (
    <RadixThemesButton css={{"marginRight": "1em"}} onClick={on_click_2d7ba5ec9d6c37a8649083c9ea463caa}>
  {`New tournament`}
</RadixThemesButton>
  )
}

export function Root_6236f9f4a089f092f6e532463a5edbd9 () {
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
    <RadixFormRoot className={`Root`} onSubmit={handleSubmit_4038683695e0e6eb8e2a554ff648ff40}>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesTextField.Input name={`tournament_name`} placeholder={`Tournament Name`}/>
  <RadixThemesTextField.Input name={`tournament_description`} placeholder={`Tournament Description`}/>
  <RadixThemesButton type={`submit`}>
  {`Submit`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixFormRoot>
  )
}

export function Text_bfcf618b795990b270d50ac5f264dc74 () {
  const state__form_state = useContext(StateContexts.state__form_state)


  return (
    <RadixThemesText as={`p`}>
  {JSON.stringify(state__form_state.form_data)}
</RadixThemesText>
  )
}

export function Button_2fb1f78428e510d85deeae241bf0a449 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_3378da63d1beed448968148435c684ca = useCallback((_e) => addEvents([Event("_redirect", {path:`/signup`,external:false})], (_e), {}), [addEvents, Event])

  return (
    <RadixThemesButton css={{"marginRight": "1em"}} onClick={on_click_3378da63d1beed448968148435c684ca}>
  {`Signup`}
</RadixThemesButton>
  )
}

export function Fragment_1762bb90abdb81b879b2a22edbbe01a1 () {
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <RadixThemesDialog.Root open={connectError !== null}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`}>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {getBackendURL(env.EVENT).href}
</RadixThemesText>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Button_46512e4a6570d0aa14a0f71e6767d68f () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_afcacc0bf09b8789a015e9a61b09b8de = useCallback((_e) => addEvents([Event("_redirect", {path:`/home`,external:false})], (_e), {}), [addEvents, Event])

  return (
    <RadixThemesButton css={{"marginRight": "1em"}} onClick={on_click_afcacc0bf09b8789a015e9a61b09b8de}>
  {`Frontpage`}
</RadixThemesButton>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_1762bb90abdb81b879b2a22edbbe01a1/>
  <RadixThemesFlex align={`start`} css={{"paddingTop": "10%"}} direction={`column`} gap={`2`}>
  <Root_6236f9f4a089f092f6e532463a5edbd9/>
  <RadixThemesSeparator size={`4`}/>
  <RadixThemesHeading>
  {`Results`}
</RadixThemesHeading>
  <Text_bfcf618b795990b270d50ac5f264dc74/>
  <RadixThemesFlex align={`start`} css={{"background": "#E6E6EA", "position": "fixed", "width": "100%", "top": "0px", "zIndex": "5"}} direction={`column`} gap={`2`}>
  <RadixThemesHeading>
  {`Tournament manager`}
</RadixThemesHeading>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <Button_46512e4a6570d0aa14a0f71e6767d68f/>
  <Button_2d7913e82e1ffb5e7e8eca7e779994fc/>
  <Button_89f5528bc8ce3b71e3908f3b2100bd35/>
  <Button_2fb1f78428e510d85deeae241bf0a449/>
  <Button_3ee5e4ea8589a9c943009e7404eb53be/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
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
