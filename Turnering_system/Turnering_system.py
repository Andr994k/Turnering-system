import reflex as rx

endpoint_list = []


current_user = None

class State(rx.State):
    form_data: list[dict] = []
    form_fields: list[str] = ["Title", "Description"]
    tournament_count: int = 1

    logged_in = False

    users: dict[str, str] = {}

    @rx.cached_var
    def form_field_placeholders(self) -> list[str]:
        return [" ".join(w.capitalize() for w in field.split("_")) for field in self.form_fields]

    def handle_submit(self, form_data: dict):
        self.form_data.append(form_data)
        endpoint_list.append(convert_to_endpoint(form_data["Title"]))
        add_tournament_endpoints()
    
    def handle_signup(self, form_data: dict):
        self.users[form_data["username"]] = form_data["password"]
        print(self.users)

    def handle_login(self, form_data: dict):
        if self.users.get(form_data["username"]) == form_data["password"]:
            print("Logged in")
            self.logged_in = True
            global current_user
            current_user = form_data["username"]
        else:
            print("Wrong username or password")
    def logout(self):
        self.logged_in = False
        global current_user
        current_user = None
        print("Logged out")
        


def convert_to_endpoint(titletoconvert: str) -> str:
    endpoint = ''.join(letter for letter in titletoconvert if letter.isalnum())
    return endpoint

#Componennts class
class Components():

    #Collection of various graphical elements

    def navbutton(text, reference) -> rx.Component:
        return rx.button(text, margin_right="1em", on_click=rx.redirect(reference))
    def tournament_box(data: list, index: int) -> rx.Component:
        return rx.box(
            rx.vstack(
                rx.heading(State.form_data[index]["Title"]),
                rx.text(State.form_data[index]["Description"]),
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
            rx.text("Navigate the pages using the buttons in the navbar."),
            spacing="2",
            font_size="2em",
            padding_top="10%",
        ),
    navbar()
    )

def add_tournament_endpoints():
    for key in endpoint_list:
        app.add_page(rx.text("Test"), route=f"tournaments/{key}")
        

def view_all_tournaments() -> rx.Component:
    return rx.vstack(
        rx.heading("All tournaments", style={"font_size": "4em"}),
        rx.foreach(State.form_data, Components.tournament_box),
        navbar(),
        padding_top="10%"
    )
    

def sign_up() -> rx.Component:
    return rx.vstack(
        rx.heading("Sign up", font_size="2em"),
        rx.form(
            rx.input(placeholder="Username", name="username"),
            rx.input(placeholder="Password", name="password", type="password"),
            rx.button("Submit", type="submit"),
            on_submit=State.handle_signup,
            reset_on_submit=True,
        ),
        navbar(),
        padding_top="10%",
        position="center",
    )

def login() -> rx.Component:
    return rx.vstack(
        rx.heading("Login", font_size="2em"),
        rx.form(
            rx.input(placeholder="Username", name="username"),
            rx.input(placeholder="Password", name="password", type="password"),
            rx.button("Submit", type="submit"),
            on_submit=State.handle_login,
            reset_on_submit=True,
        ),
        navbar(),
        padding_top="10%",
    )

def add_tournament():
    return rx.vstack(
        rx.form(
            rx.vstack(
                rx.foreach(
                    State.form_fields,
                    lambda field, index: rx.input(
                        placeholder=State.form_field_placeholders[index],
                        name=field,
                    ),
                ),
                rx.button("Submit", type="submit"),
            ),
            on_submit=State.handle_submit,
            reset_on_submit=True,
        ),
        rx.divider(),
        rx.heading("Results"),
        rx.text(State.form_data.to_string()),
        navbar(),
        padding_top="10%"
    )

def navbar():
    return rx.vstack(
        rx.heading("Tournament manager"),
        rx.hstack(
            *[Components.navbutton(key, value) for key, value in navbuttons.items()],
            rx.cond(
                State.logged_in,    
                rx.vstack(
                    rx.avatar("logo.png"),
                    rx.button("Logout", on_click=State.logout),
                ),
                rx.text("Not logged in"),
            )),
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
app.add_page(sign_up, route="signup")
app.add_page(login, route="login")