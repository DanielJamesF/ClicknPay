import {
  createStore,
} from "vuex";
import {
  router
} from "@/router/index.js";

export default createStore({
  state: {
    products: null,
    product: null,
    token: null,
    // user: {
    //   firstname: "Boi"
    // }
    user: null,
    users: null
  },
  getters: {},
  mutations: {
    setproducts: (state, products) => {
      state.products = products;
      // console.log(products)
    },
    setproduct: (state, product) => {
      state.product = product;
    },
    setuser: (state, user) => {
      state.user = user;
      // console.log(user)
    },
    setusers: (state, users) => {
      state.users = users;
      // console.log(user)
    },
    setToken: (state, token) => {
      state.token = token;
      console.log(token)
    },
  },
  actions: {
    // retrieves all products
    getProducts: async (context) => {
      fetch("http://localhost:3000/products")
        // fetch("https://picknpay-apitest.herokuapp.com/products")
        .then((res) => res.json())
        .then((data) => context.commit("setproducts", data.results));
    },
    // retrieves single
    getProduct: async (context, id) => {
      fetch("http://localhost:3000/products/" + id)
        // fetch("https://picknpay-apitest.herokuapp.com/products/" + id)
        .then((res) => res.json())
        .then((data) => context.commit("setproduct", data.results));
    },

    addProduct: async (context, payload) => {
      const {
        prodname,
        prodimg,
        quantity,
        price,
      } = payload;
      fetch("http://localhost:3000/products", {
          // fetch("https://picknpay-apitest.herokuapp.com/register", {
          method: "POST",
          body: JSON.stringify({
            prodname: prodname,
            prodimg: prodimg,
            quantity: quantity,
            price: price,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token
          },
        })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg);
          context.dispatch("getProducts")
        })
    },

    // updates list
    updateProduct: async (context, product) => {
      fetch("http://localhost:3000/products/" + product.id, {
          method: "PUT",
          body: JSON.stringify(product),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": await context.state.token
          },
        })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg);
          (context.dispatch("getProducts"))
        });
    },
    // Deletes Item from db
    deleteProduct: async (context, id) => {
      fetch("http://localhost:3000/products/" + id, {
          method: "DELETE",
          headers: {
            "x-auth-token": context.state.token
          }
        })
        .then((res) => res.json())
        .then(() => (context.dispatch("getProducts")));
    },

    // adds user to db
    register: async (context, payload) => {
      const {
        firstname,
        lastname,
        email,
        usertype,
        contact,
        address,
        password
      } = payload;
      // firstname, lastname, email, usertype, contact, address, password, joindate, cart
      fetch("http://localhost:3000/register", {
          // fetch("https://picknpay-apitest.herokuapp.com/register", {
          method: "POST",
          body: JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            email: email,
            usertype: usertype,
            contact: contact,
            address: address,
            password: password
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token
          },
        })
        .then((response) => response.json())
        .then((data) => {
          if (data.msg === "Registration Successful") {
            alert(data.msg)
            let user = data.user
            let token = data.token
            context.commit("setuser", user)
            context.commit("setToken", token);
            context.dispatch("getProducts");
            router.push({
              name: "products"
            })
          } else {
            alert(data.msg)
            document.getElementById("register").reset();
          }
        });
    },

    login: async (context, payload) => {
      const {
        email,
        password
      } = payload;
      fetch("http://localhost:3000/login", {
          // fetch("https://picknpay-apitest.herokuapp.com/register", {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": await context.state.token
          },
        })
        .then((response) => response.json())
        .then((data) => {
          alert(data.msg)
          let user = data.user
          let token = data.token
          context.commit("setuser", user)
          context.commit("setToken", token);
          router.push({
            name: "products"
          })
        })
    },

    // retrieves all users
    getusers: async (context) => {
      fetch("http://localhost:3000/users", {
        headers : {
          "x-auth-token": await context.state.token
        } 
      })
        // fetch("https://picknpay-apitest.herokuapp.com/products")
        .then((res) => res.json())
        .then((data) => {
          context.commit("setusers", data.results);
        });
    },
  },
  modules: {},
});