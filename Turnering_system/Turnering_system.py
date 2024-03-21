from rxconfig import config
import reflex as rx

tournamenttitles: list[str] = []
tournamentdescriptions: list[str] = []

class DynamicFormState(rx.State):
    form_data: dict = {}
    form_fields: list[str] = ["Title", "Description"]
    tournament_count: int = 1

    @rx.cached_var
    def form_field_placeholders(self) -> list[str]:
        return [" ".join(w.capitalize() for w in field.split("_")) for field in self.form_fields]

    def handle_submit(self, form_data: dict):
        self.form_data[f"Tournament {self.tournament_count}"] = form_data
        self.tournament_count += 1

def convert_to_endpoint(titletoconvert: str) -> str:
    endpoint: str = titletoconvert
    endpoint = endpoint.replace("#", "")
    endpoint = endpoint.replace("'", "")
    endpoint = endpoint.replace(" ", "_")
    return endpoint

#Componennts class
class Components():

    #Collection of various graphical elements

    def navbutton(text, reference) -> rx.Component:
        return rx.button(text, margin_right="1em", on_click=rx.redirect(reference))
    def tournament_box(name: str, description: str) -> rx.Component:
        print(name, description)
        return rx.box(
            rx.vstack(
                rx.heading(name),
                rx.text(description),
                rx.button("View tournament", on_click=rx.redirect("/tournaments/" + "tournament_1")),
                padding_top="10%"
            )
        )

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

def home() -> rx.Component:
    return rx.fragment(
        rx.vstack(
            rx.heading("Welcome to Reflex!", font_size="2em"),
            spacing="2",
            font_size="2em",
            padding_top="10%",
        ),
    navbar()
    )

"""def add_tournament_endpoints():
    for key, value in tournamenttitles, tournamentdescriptions:
        endpoint = key.replace("#", "")
        endpoint = endpoint.replace("'", "")
        endpoint = endpoint.replace(" ", "_")
        print(endpoint)
        app.add_page(tournament_layout(key, value), route=f"tournaments/{endpoint}")"""
def make_tournament_box():
    if rx.cond(DynamicFormState.form_data):
        rx.foreach(DynamicFormState.form_data, lambda title, description: Components.tournament_box(title, description))

def view_all_tournaments() -> rx.Component:
    print("????????????")
    return rx.vstack(
        rx.heading("All tournaments", style={"font_size": "4em"}),
        make_tournament_box(),
        navbar(),
        rx.text(DynamicFormState.form_data.to_string()),
        padding_top="10%"
    )

#:((((((((((((((((


def add_tournament():
    return rx.vstack(
        rx.form(
            rx.vstack(
                rx.foreach(
                    DynamicFormState.form_fields,
                    lambda field, idx: rx.input(
                        placeholder=DynamicFormState.form_field_placeholders[idx],
                        name=field,
                    ),
                ),
                rx.button("Submit", type="submit"),
            ),
            on_submit=DynamicFormState.handle_submit,
            reset_on_submit=True,
        ),

        rx.divider(),
        rx.heading("Results"),
        rx.text(DynamicFormState.form_data.to_string()),
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

# Add State and page to the app.
app = rx.App()
app.add_page(home)
app.add_page(view_all_tournaments, route="tournaments")
app.add_page(add_tournament, route="new_tournament")
#add_tournament_endpoints()