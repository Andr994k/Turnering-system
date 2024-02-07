"""Welcome to Reflex! This file outlines the steps to create a basic app."""
from rxconfig import config

import reflex as rx

docs_url = "https://reflex.dev/docs/getting-started/introduction"
filename = f"{config.app_name}/{config.app_name}.py"
class modalstate(rx.State):
    show: bool = False

    def change(self):
        self.show = not (self.show)

class State(rx.State):
    """The app state."""
    tournaments = {
        "Duck Squad Glacial Showdown #3": "Format\nSingle Elimination\nAll Matches excl. Grand Finals are Bo3\nGrand Finals are Bo5",
        "Jay3's Community Clash": "Format\nDouble Elimination Bracket:\nSix invited teams and two from the Qualifier\nAll matches (excl. Grand Finals) are Ft3\nGrand Finals are Ft4"
    }
    def update_tournament(self, form_data: dict):
        self.tournaments.update({form_data["tournament_name"]: form_data["tournament_description"]})

    pass







class FormState(rx.State):
    form_data: dict = {}

    def handle_submit(self, form_data: dict):
        """Handle the form submit."""
        self.form_data.update(form_data)
        State.tournaments.update({form_data["tournament_name"]: form_data["tournament_description"]})
        add_tournament_endpoints()
        
        print(State.tournaments.items())


#Navigation buttons
navbuttons = {
    "Frontpage": "/home",
    "New tournament": "/new_tournament",
    "View all tournaments": "/tournaments",
    "Signup": "/signup",
    "Login": "/login",
}



#Global tournament title style
tournament_title_style = {
    "font_size": "4em",
    "text_align": "center",
}



#Componennts class
class Components():
    """The app components."""
    def navbutton(text, reference) -> rx.Component:
        return rx.button(text, margin_right="1em", on_click=rx.redirect(reference))
    def tournament_box(name, description) -> rx.Component:
        endpoint = name.replace("#", "")
        endpoint = endpoint.replace("'", "")
        endpoint = endpoint.replace(" ", "_")
        return rx.box(
            rx.vstack(
                rx.heading(name),
                rx.text(description),
                rx.button("View tournament", on_click=rx.redirect("/tournaments/" + endpoint)),
                padding_top="10%"
            )
        )


def home() -> rx.Component:
    return rx.fragment(
        rx.color_mode_button(rx.color_mode_icon(), float="right"),
        rx.vstack(
            rx.heading("Welcome to Reflex!", font_size="2em"),
            rx.box("Get started by editing ", rx.code(filename, font_size="1em")),
            rx.link(
                "Check out our docsfjdsih!",
                href=docs_url,
                border="0.1em solid",
                padding="0.5em",
                border_radius="0.5em",
                _hover={
                    "color": rx.color_mode_cond(
                        light="rgb(107,99,246)",
                        dark="rgb(179, 175, 0)",
                    )
                },
            ),
            spacing="2.5em",
            font_size="2em",
            padding_top="10%",
        ),
    navbar()
    )

def add_tournament_endpoints():
    for key, value in State.tournaments.items():
        endpoint = key.replace("#", "")
        endpoint = endpoint.replace("'", "")
        endpoint = endpoint.replace(" ", "_")
        #print(endpoint)
        app.add_page(tournament_layout(key, value), route=f"tournaments/{endpoint}")

def tournament_layout(name, description):
    return rx.fragment(
        rx.heading(name),
        rx.text(description)
        )
    

def view_all_tournaments() -> rx.Component:
    #print(State.tournaments.items())
    return rx.vstack(
        rx.heading("All tournaments", style={"font_size": "4em"}),
        #rx.vstack(*[Components.tournament_box(key, value) for key, value in State.tournaments.items()]),
        rx.foreach(State.tournaments, lambda tournament: rx.heading(tournament)),
        navbar(),
        padding_top="10%"
    )

def form_example():
    return rx.vstack(
        rx.form(
            rx.vstack(
                rx.input(
                    placeholder="Tournament Name",
                    name="tournament_name",
                ),
                rx.input(
                    placeholder="Tournament Description",
                    name="tournament_description",
                ),
                rx.button("Submit", type_="submit"),
            ),
            on_submit=FormState.handle_submit,
            on_submit=State.update_tournament,

            reset_on_submit=True,
        ),
        rx.divider(),
        rx.heading("Results"),
        rx.text(FormState.form_data.to_string()),
        navbar(),
        padding_top="10%"
    )


def navbar():
    return rx.vstack(
        rx.heading("Tournament manager"),
        rx.hstack(*[Components.navbutton(key, value) for key, value in navbuttons.items()]),
        bg="#E6E6EA",
        position="fixed",
        width="100%",
        top="0px",
        z_index="5",
)



# Add state and page to the app.
app = rx.App()
app.add_page(home)
app.add_page(view_all_tournaments, route="tournaments")
app.add_page(form_example, route="new_tournament")
add_tournament_endpoints()