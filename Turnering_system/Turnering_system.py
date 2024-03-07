"""Welcome to Reflex! This file outlines the steps to create a basic app."""
from rxconfig import config
from typing import Dict

import reflex as rx

docs_url = "https://reflex.dev/docs/getting-started/introduction"
filename = f"{config.app_name}/{config.app_name}.py"
class modalstate(rx.State):
    show: bool = False

    def change(self):
        self.show = not (self.show)

class State(rx.State):
    #Counter: int = 1
    tournaments: dict[str, str] = {}
    """    {
        "Duck Squad Glacial Showdown #3": "Format\nSingle Elimination\nAll Matches excl. Grand Finals are Bo3\nGrand Finals are Bo5",
        "Jay3's Community Clash": "Format\nDouble Elimination Bracket:\nSix invited teams and two from the Qualifier\nAll matches (excl. Grand Finals) are Ft3\nGrand Finals are Ft4"
    }"""
    """The app state."""

    def add(self, title):
        self.tournaments[title] = "description"
        #self.Counter += 1

state = State()

class FormState(rx.State):
    form_data: dict = {}
    tournaments: Dict[str, str] = {}  # Define tournaments as a dictionary with string keys and values

    def handle_submit(self, form_data: dict):
        """Handle the form submit."""
        self.form_data.update(form_data)
        # Update tournaments dictionary with new tournament data
        self.tournaments.update({form_data["tournament_name"]: form_data["tournament_description"]})
        add_tournament_endpoints()

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
    def tournament_box(name: str, description: str):
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
"""
# Convert dict_items to a dictionary
tournament_dict = dict(state.tournaments)

# Serialize the dictionary to JSON
json_data = json.dumps(tournament_dict)

json_dict = json.loads(json_data)
"""

def home() -> rx.Component:
    return rx.fragment(
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
            spacing="2",
            font_size="2em",
            padding_top="10%",
        ),
    navbar()
    )



def add_tournament_endpoints():
    for key, value in state.tournaments.items():
        endpoint = key.replace("#", "")
        endpoint = endpoint.replace("'", "")
        endpoint = endpoint.replace(" ", "_")
        print(endpoint)
        app.add_page(tournament_layout(key, value), route=f"tournaments/{endpoint}")

def tournament_layout(name: str, description: str) -> rx.Component:
    return rx.fragment(
        rx.heading(name),
        rx.text(description),
    )
    

def view_all_tournaments() -> rx.Component:
    return rx.vstack(
        rx.heading("All tournaments", style={"font_size": "4em"}),
        #rx.foreach(tournaments, lambda tournament: Components.tournament_box(tournament[0], tournament[1])),
        rx.vstack(*[Components.tournament_box(key, value) for key, value in state.tournaments.items()]),
        navbar(),
        padding_top="10%"
    )

def add_tournament():
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
            on_submit=state.add,
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
app.add_page(add_tournament, route="new_tournament")
add_tournament_endpoints()