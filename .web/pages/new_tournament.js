/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue } from "/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { Avatar as RadixThemesAvatar, Button as RadixThemesButton, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Separator as RadixThemesSeparator, Text as RadixThemesText, TextField as RadixThemesTextField, Theme as RadixThemesTheme } from "@radix-ui/themes"
import env from "/env.json"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
import "@radix-ui/themes/styles.css"
import theme from "/utils/theme.js"
import NextHead from "next/head"



export function Button_2d7913e82e1ffb5e7e8eca7e779994fc () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_2d7ba5ec9d6c37a8649083c9ea463caa = useCallback((_e) => addEvents([Event("_redirect", {path:`/new_tournament`,external:false})], (_e), {}), [addEvents, Event])


  return (
    <RadixThemesButton css={{"marginRight": "1em"}} onClick={on_click_2d7ba5ec9d6c37a8649083c9ea463caa}>
  {`New tournament`}
</RadixThemesButton>
  )
}

export function Button_46512e4a6570d0aa14a0f71e6767d68f () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_afcacc0bf09b8789a015e9a61b09b8de = useCallback((_e) => addEvents([Event("_redirect", {path:`/home`,external:false})], (_e), {}), [addEvents, Event])


  return (
    <RadixThemesButton css={{"marginRight": "1em"}} onClick={on_click_afcacc0bf09b8789a015e9a61b09b8de}>
  {`Frontpage`}
</RadixThemesButton>
  )
}

export function Button_3ee5e4ea8589a9c943009e7404eb53be () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_2fd35f581ac6d709ce2966c88c7c5818 = useCallback((_e) => addEvents([Event("_redirect", {path:`/login`,external:false})], (_e), {}), [addEvents, Event])


  return (
    <RadixThemesButton css={{"marginRight": "1em"}} onClick={on_click_2fd35f581ac6d709ce2966c88c7c5818}>
  {`Login`}
</RadixThemesButton>
  )
}

export function Text_3952f8ee6df319df205dfc5a06939bf4 () {
  const state__state = useContext(StateContexts.state__state)



  return (
    <RadixThemesText as={`p`}>
  {JSON.stringify(state__state.form_data)}
</RadixThemesText>
  )
}

export function Button_2fb1f78428e510d85deeae241bf0a449 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_3378da63d1beed448968148435c684ca = useCallback((_e) => addEvents([Event("_redirect", {path:`/signup`,external:false})], (_e), {}), [addEvents, Event])


  return (
    <RadixThemesButton css={{"marginRight": "1em"}} onClick={on_click_3378da63d1beed448968148435c684ca}>
  {`Signup`}
</RadixThemesButton>
  )
}

export function Button_89f5528bc8ce3b71e3908f3b2100bd35 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_0efd6f4d7da6130e9bdf25921161eece = useCallback((_e) => addEvents([Event("_redirect", {path:`/tournaments`,external:false})], (_e), {}), [addEvents, Event])


  return (
    <RadixThemesButton css={{"marginRight": "1em"}} onClick={on_click_0efd6f4d7da6130e9bdf25921161eece}>
  {`View all tournaments`}
</RadixThemesButton>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Flex_8f8d39a0d1e2b58e7faed5fb7e4b813c () {
  const state__state = useContext(StateContexts.state__state)



  return (
    <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  {state__state.form_fields.map((field, idx) => (
  <RadixThemesTextField.Input key={idx} name={field} placeholder={state__state.form_field_placeholders.at(idx)}/>
))}
  <RadixThemesButton type={`submit`}>
  {`Submit`}
</RadixThemesButton>
</RadixThemesFlex>
  )
}

export function Fragment_e9a05c105aa9215aeba52aeec8fe2e76 () {
  const state = useContext(StateContexts.state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(((!state.is_hydrated) || (connectErrors.length > 0))) ? (
  <Fragment>
  <LucideWifiOffIcon css={{"color": "crimson", "zIndex": 9999, "position": "fixed", "bottom": "30px", "right": "30px", "animation": `${pulse} 1s infinite`}} size={32}>
  {`wifi_off`}
</LucideWifiOffIcon>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Root_b729b467c27850a877af95018976319c () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  
    const handleSubmit_aa3300053dafcc3f5647481ba0e9fc37 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{}}

        addEvents([Event("state.state.handle_submit", {form_data:form_data})])

        if (true) {
            $form.reset()
        }
    })
    

  return (
    <RadixFormRoot className={`Root`} onSubmit={handleSubmit_aa3300053dafcc3f5647481ba0e9fc37}>
  <Flex_8f8d39a0d1e2b58e7faed5fb7e4b813c/>
</RadixFormRoot>
  )
}

export function Fragment_ac0b06893fc1b15016f3e0532508036d () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(connectErrors.length >= 2) ? (
  <Fragment>
  <RadixThemesDialog.Root css={{"zIndex": 9999}} open={connectErrors.length >= 2}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`}>
  {`Cannot connect to server: `}
  {(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}
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

export function Fragment_8d89687dc01d2e6be25e99bd3196727c () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const state__state = useContext(StateContexts.state__state)



  return (
    <Fragment>
  {isTrue(state__state.logged_in) ? (
  <Fragment>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesAvatar>
  {`logo.png`}
</RadixThemesAvatar>
  <RadixThemesButton onClick={(_e) => addEvents([Event("state.state.logout", {})], (_e), {})}>
  {`Logout`}
</RadixThemesButton>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment>
  <RadixThemesText as={`p`}>
  {`Not logged in`}
</RadixThemesText>
</Fragment>
)}
</Fragment>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment>
  <div css={{"position": "fixed", "width": "100vw", "height": "0"}}>
  <Fragment_e9a05c105aa9215aeba52aeec8fe2e76/>
</div>
  <Fragment_ac0b06893fc1b15016f3e0532508036d/>
</Fragment>
  <RadixThemesFlex align={`start`} css={{"paddingTop": "10%"}} direction={`column`} gap={`2`}>
  <Root_b729b467c27850a877af95018976319c/>
  <RadixThemesSeparator size={`4`}/>
  <RadixThemesHeading>
  {`Results`}
</RadixThemesHeading>
  <Text_3952f8ee6df319df205dfc5a06939bf4/>
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
  <Fragment_8d89687dc01d2e6be25e99bd3196727c/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <NextHead>
  <title>
  {`Turnering System | New Tournament`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
