<template>
	<v-app>
		<v-app-bar app color="primary" dark>
			<v-toolbar-title>저기요</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn elevation="2"> 로그인 </v-btn>
		</v-app-bar>
		<v-parallax
			height="300"
			dark
			src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
		>
			<v-row align="center" justify="center">
				<v-col class="text-center" cols="5">
					<v-form>
						<v-container>
							<v-row>
								<v-col cols="12">
									<v-text-field
										v-model="message"
										outlined
										clearable
										label="건물명, 도로명, 지명으로 검색하세요"
										type="text"
									>
										<template v-slot:prepend>
											<v-btn>
												<v-icon align="center"> mdi-target </v-icon>
											</v-btn>
										</template>
										<template v-slot:append>
											<v-fade-transition leave-absolute>
												<v-progress-circular
													v-if="loading"
													size="24"
													color="info"
													indeterminate
												></v-progress-circular>
											</v-fade-transition>
										</template>
										<template v-slot:append-outer>
											<v-btn> 검색 </v-btn>
										</template>
									</v-text-field>
								</v-col>
							</v-row>
						</v-container>
					</v-form>
					<!--          버튼-->
				</v-col>
			</v-row>
		</v-parallax>
	</v-app>
</template>

<script>
export default {
	name: 'App',

	components: {},

	data: () => ({
		//
	}),
};
</script>
