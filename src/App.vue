<template>
	<v-app id="inspire">
		<v-navigation-drawer
			v-model="drawer"
			app
			miniVariant
			expandOnHover
			permanent
			clipped
			absolute
			dense
			dark
		>
			<v-list dense>
				<v-list-item link to="/">
					<v-list-item-action>
						<v-icon>mdi-home</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Home</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item link to="/calendar">
					<v-list-item-action>
						<v-icon>mdi-calendar</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Calendar</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item link to="/patients">
					<v-list-item-action>
						<v-icon>mdi-account-group</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Patients</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app clipped-left>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
			<v-toolbar-title>Customer Management System</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-btn icon @click.stop="dialog = true">
				<v-icon>mdi-brightness-4</v-icon>
			</v-btn>

			<v-dialog v-model="dialog" max-width="480">
				<v-card>
					<v-card-title class="headline">Theme and Color settings</v-card-title>

					<v-divider class="my-4"></v-divider>

					<v-card-text style="marginTop: 15">
						aqui iran los componentes de cambio de color y tema!
					</v-card-text>
				</v-card>
			</v-dialog>

			<v-menu left bottom>
				<template v-slot:activator="{ on }">
					<v-btn icon v-on="on">
						<v-icon>mdi-account-circle</v-icon>
					</v-btn>
				</template>

				<v-list dense>
					<v-list-item @click="() => {}">
						<v-list-item>
							<v-list-item-action>
								<v-icon>mdi-account</v-icon>
							</v-list-item-action>
							<v-list-item-content>
								<v-list-item-title>My Account</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list-item>
					<v-list-item @click="() => {}">
						<v-list-item>
							<v-list-item-action>
								<v-icon>mdi-logout</v-icon>
							</v-list-item-action>
							<v-list-item-content>
								<v-list-item-title>Logout</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list-item>
				</v-list>
			</v-menu>
		</v-app-bar>

		<v-content>
			<v-container fluid>
				<router-view> {{ view }}</router-view>
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
	export default {
		props: {
			source: String,
		},
		data: () => ({
			drawer: null,
			dialog: false,
		}),
		created() {
			this.$vuetify.theme.dark = true;
		},
	};
</script>
