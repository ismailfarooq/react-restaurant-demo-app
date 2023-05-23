import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const api = new WooCommerceRestApi({
  url: "https://ismailfarooq.com/demos/react-restaurant-demo-app",
  consumerKey: "ck_eb3ac2264b5084d138186306f7ea8334f68ff3f1",
  consumerSecret: "cs_036c8439f1ec94e0e6e0ea026ee48aff985a85cd",
  version: "wc/v3"
});