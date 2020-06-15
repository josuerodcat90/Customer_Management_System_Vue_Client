import Vue from "vue";
import VueApollo from "vue-apollo";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ApolloClient from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";
import vuetify from "./plugins/vuetify";

const httpLink = createHttpLink({
  uri: "http://localhost:5000/graphql"
});

const authLink = setContext(() => {
  const token = localStorage.getItem("jwtToken");
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

Vue.config.productionTip = false;
Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

new Vue({
  router,
  store,
  apolloProvider,
  vuetify,
  render: h => h(App)
}).$mount("#app");
