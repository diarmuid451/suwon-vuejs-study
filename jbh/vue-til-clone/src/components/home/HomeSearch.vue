<template>
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
                  outlined
                  clearable
                  label="건물명, 도로명, 지명으로 검색하세요"
                  type="text"
                >
                  <template v-slot:prepend>
                    <v-btn>
                      <v-icon align="center"> mdi-target</v-icon>
                    </v-btn>
                  </template>
                  <template v-slot:append-outer>
                    <v-btn> 검색</v-btn>
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
</template>
<script>
export default {
  name: 'HomeSearch',
};
</script>
