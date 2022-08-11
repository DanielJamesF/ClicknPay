import { createStore } from "vuex";
import { router } from "@/router/index.js";

export default createStore({
  state: {
    products: null,
    product: null,
    token: null,
    // user: {
    //   firstname: "Boi"
    // }
    user: null,
    users: null,
    cart: null,
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
    },
    setcart: (state, cart) => {
      let newCart = JSON.parse(cart);
      state.cart = newCart;
      // console.table(newCart)
    },
    setusers: (state, users) => {
      state.users = users;
      // console.log(user)
    },
    setToken: (state, token) => {
      state.token = token;
      // console.log(token)
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
      const { prodname, prodimg, quantity, price } = payload;
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
          "x-auth-token": context.state.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg);
          context.dispatch("getProducts");
        });
    },

    // updates list
    updateProduct: async (context, product) => {
      fetch("http://localhost:3000/products/" + product.id, {
        method: "PUT",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": context.state.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg);
          context.dispatch("getProducts");
        });
    },
    // Deletes Item from db
    deleteProduct: async (context, id) => {
      fetch("http://localhost:3000/products/" + id, {
        method: "DELETE",
        headers: {
          "x-auth-token": context.state.token,
        },
      })
        .then((res) => res.json())
        .then(() => context.dispatch("getProducts"));
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
        password,
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
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": context.state.token,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.msg === "Registration Successful") {
            alert(data.msg);
            let user = data.user;
            let token = data.token;
            context.commit("setuser", user);
            context.commit("setToken", token);
            context.dispatch("getProducts");
            router.push({
              name: "products",
            });
          } else {
            alert(data.msg);
            document.getElementById("register").reset();
          }
        });
    },

    login: async (context, payload) => {
      const { email, password } = payload;
      fetch("http://localhost:3000/login", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": await context.state.token,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          alert(data.msg);
          let user = data.user;
          let token = data.token;
          let cart = data.user.cart;
          context.commit("setuser", user);
          context.commit("setToken", token);
          context.commit("setcart", cart);
          // router.push({
          //   name: "products"
          // })
        });
    },

    // Deletes user from db
    deleteuser: async (context, id) => {
      fetch("http://localhost:3000/users/" + id, {
        method: "DELETE",
        headers: {
          "x-auth-token": context.state.token,
        },
      })
        .then((res) => res.json())
        .then(() => context.dispatch("getusers"));
    },

    // update user infor
        // updates list
        updateUser: async (context, user) => {
          fetch("http://localhost:3000/users/" + user.id, {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              "x-auth-token": context.state.token,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              alert(data.msg);
              context.dispatch("getusers");
            });
        },

    // getuser : async (context) => {
    //   fetch("http://localhost:3000/verify")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     context.commit("setuser", data.user)
    //   })
    // },

    // retrieves all users
    getusers: async (context) => {
      fetch("http://localhost:3000/users", {
        headers: {
          "x-auth-token": await context.state.token,
        },
      })
        // fetch("https://picknpay-apitest.herokuapp.com/products")
        .then((res) => res.json())
        .then((data) => {
          // alert(data.msg)
          // console.log(data)
          context.commit("setusers", data.results);
        });
    },

    // Cart stuffs
    getCart: async (context, id) => {
      id = context.state.user.id;
      fetch("http://localhost:3000/users/" + id + "/cart", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": context.state.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg)
          console.log(data);
          let cart = JSON.stringify(data);
          context.commit("setcart", cart);
        });
    },

    deleteCart : async (context, userid) => {
      userid = context.state.user.id
      fetch("http://localhost:3000/users/" + userid + "/cart", {
      method : "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-auth-token": context.state.token,
      },
      })
      .then((res) => res.json())
      .then((data) => {
        alert(data.msg)
        context.dispatch("getCart")
      })
    },

    addToCart: async (context, id, userid) => {
      userid = context.state.user.id;
      fetch("http://localhost:3000/users/" + userid + "/cart", {
        // fetch("http://localhost:3000/users/" + id +"/cart",{
        // fetch("https://picknpay-apitest.herokuapp.com/register", {
        method: "POST",
        body: JSON.stringify(id),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": context.state.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          console.log(id);
          alert(data.msg);
          context.dispatch("getCart");
        });
    },
  },
  modules: {},
});
