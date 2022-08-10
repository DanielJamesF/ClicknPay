// Importing modules
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const db = require("./config/dbconn");
const jwt = require("jsonwebtoken");
const middleware = require("./middleware/auth");
const { compare, hash } = require("bcrypt");
// Express app
const app = express();
// Express router
const router = express.Router();
// Configuration
const port = parseInt(process.env.PORT);

app.use((req, res, next) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
  });
  next();
});

app.use(
  express.static("public"),
  router,
  cors(),
  express.json(),
  express.urlencoded({
    extended: true,
  })
);
//
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// home
router.get("/", (req, res) => {
  res.sendFile(__dirname + "/" + "index.html");
});
// users functionality
// ============================================================================================
// User registration
router.post("/register", bodyParser.json(), async (req, res) => {
  try {
    const bd = req.body;
    if (bd.usertype === "" || bd.usertype === null) {
      bd.usertype = "user";
    }

    const emailQ = "SELECT email from users WHERE ?";
    let email = {
      email: bd.email,
    };
    let date = {
      date: new Date().toLocaleDateString(),
    };
    let cart = {
      cart: [{}],
    };
    
    db.query(emailQ, email, async (err, results) => {
      if (err) throw err;
      if (results.length > 0) {
        res.send("Email Exists");
      } else {
        // Encrypting a password
        // Default value of salt is 10.
        bd.password = await hash(bd.password, 10);
        // Query
        const strQry = `INSERT INTO users(firstname, lastname, email, usertype, contact, address, password, joindate, cart)  
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        db.query(
          strQry,
          [
            bd.firstname,
            bd.lastname,
            bd.email,
            bd.usertype,
            bd.contact,
            bd.address,
            bd.password,
            date.date,
            cart.cart,
          ],
          (err, results) => {
            if (err) throw err;
            res.json({
              msg: "Registration Successful",
              results: results,
            });
          }
        );
      }
    });
  } catch (e) {
    console.log(`Registration Error: ${e.message}`);
  }
});
// register dummy data
// {
//   "firstname": "Muzzammil",
//   "lastname": "Charles",
//   "email": "mz@gmail.com",
//   "usertype": "",
//   "contact": "0695585895",
//   "address": "blank",
//   "password": "password",
// }

// Login
router.post("/login", bodyParser.json(), (req, res) => {
  try {
    // Get email and password
    const { email, password } = req.body;
    const strQry = `
        SELECT *
        FROM users 
        WHERE email = '${email}';
        `;
    db.query(strQry, async (err, results) => {
      if (err) throw err;
      if (results.length === 0) {
        res.json({
          msg: "Email not found",
        });
      } else {
        const ismatch = await compare(password, results[0].password);
        // res.json({
        //   results: await compare(userpassword, results[0].userpassword),
        //   // ? results
        //   // : "You provided a wrong password",
        // });
        // res.send(results),
        if (ismatch === true) {
          const payload = {
            user: {
              id: results[0].id,
              firstname: results[0].firstname,
              lastname: results[0].lastname,
              contact: results[0].contact,
              email: results[0].email,
              usertype: results[0].usertype,
              address: results[0].address,
            },
          };
          jwt.sign(
            payload,
            process.env.jwtSecret,
            {
              expiresIn: "365d",
            },
            (err, token) => {
              if (err) throw err;
              res.json({
                msg: "Login Successful",
                user: payload.user,
                token: token,
              });
              // res.json(payload.user);
            }
          );
        } else {
          res.json({
            msg: "You entered the wrong password",
          });
        }
      }
    });
  } catch (e) {
    console.log(`From login: ${e.message}`);
  }
});
// login dummy data
// {
//   "email": "mz@gmail.com",
//   "password":"password"
// }

// Verify
router.get("/users/verify", (req, res) => {
  const token = req.header("x-auth-token");
  jwt.verify(token, process.env.jwtSecret, (error, decodedToken) => {
    if (error) {
      res.status(401).json({
        msg: "Unauthorized Access!",
      });
    } else {
      res.status(200);
      res.send(decodedToken);
    }
  });
});

// Get users
router.get("/users", middleware, (req, res) => {
  // Query
  const strQry = `
    SELECT *
    FROM users;
    `;
  db.query(strQry, (err, results) => {
    if (err) throw err;
    res.json({
      status: 200,
      results: results,
      test: req.user.id,
    });
  });
});

// Get one users
router.get("/users/:id", (req, res) => {
  // Query
  const strQry = `
    SELECT *
    FROM users 
    WHERE id = ?;
    `;

  db.query(strQry, [req.params.id], (err, results) => {
    if (err) throw err;
    res.json(
      // results
      {
        status: 200,
        results: results,
        // results: results.length <= 0 ? "Sorry, no product was found." : results,
      }
    );
  });
});

// Update product
router.put("/users/:id", middleware, (req, res) => {
  const bd = req.body;
  // Query
  const strQry = `UPDATE users
     SET ?
     WHERE id = ?`;

  db.query(strQry, [bd.id], (err, data) => {
    if (err) throw err;
    res.json({
      msg: "Item Updated",
    });
  });
});

// Delete users
router.delete("/users/:id", (req, res) => {
  // Query
  const strQry = `
    DELETE FROM users 
    WHERE id = ?;
    `;
  db.query(strQry, [req.params.id], (err, data, fields) => {
    if (err) throw err;
    res.json({
      msg: "Item Deleted",
    });
  });
});

// ===========================================================================================
// cart functionalty
// ===========================================================================================
// get cart items from user
// router.get("/users/:id/cart", middleware, (req, res) => {
//   try {
//     const strQuery = "SELECT cart FROM users WHERE id = ?"
//     db.query(strQuery, [req.user.id], (err, results) => {
//       if (err) throw err;
//       (function Check(a, b) {
//         a = parseInt(req.user.id)
//         b = parseInt(req.params.id)
//         if (a === b) {
//           res.json({
//             status: 200,
//             results: results,
//             test: req.user.id
//           });
//         } else {
//           res.json({
//             msg: "Please Login"
//           });
//         }
//       })()
//     })
//   } catch (error) {
//     throw error
//   }

// })

// add cart items
router.post("/users/:id/cart", middleware, (req, res) => {
  // try {
  //   const strQry = `
  //   SELECT *
  //   FROM products
  //   WHERE id = ?;
  //   `;

  //   db.query(strQry, /*[req.params.id] */ 1001, (err, results) => {
  //     if (err) throw err;
  //     res.json(
  //       results
  //       // {
  //       //   status: 200,
  //       //   results: results.length <= 0 ? "Sorry, no product was found." : results,
  //       // }
  //       );
  //     // const item = {results}
  //     console.log(JSON.stringify(results))
  //     const strQuery = `UPDATE users
  //   SET cart = CONCAT(?,cart)
  //   WHERE (id = ${req.user.id})`
  //   //   db.query(strQuery, /*req.user.id */ JSON.stringify(results), (err) => {
  //   //     if (err) throw err;
  //   //     res.json({
  //   //       msg: "Product added to Cart"
  //   //     })
  //   //   })
  //   });
  // } catch (error) {
  //   console.log(error.message)
  // }

  const strQry = `UPDATE users
     WHERE id = ?`;
  db.query(strQry, [req.params.cart, req.params.id], (err, results) => {
    if (err) throw err;
    res.status(200).json({ results: results });
  });
});

// delete products from cart
router.delete("/users/:id/cart", middleware, (req, res) => {
  const strQry = `
  UPDATE users 
    SET cart = NULL
    WHERE (id = ?);
    `;
  db.query(strQry, [req.user.id], (err, data, fields) => {
    if (err) throw err;
    res.json({
      msg: "Item Deleted",
    });
  });
});
// ===========================================================================================

// products functionality
// ============================================================================================
// Create new products
router.post("/products", middleware, bodyParser.json(), (req, res) => {
  try {
    if (req.user.usertype === "Admin") {
      const bd = req.body;
      bd.totalamount = bd.quantity * bd.price;
      // Query
      // id, prodname, prodimg, quantity, price, totalamount, userid
      const strQry = `
        INSERT INTO products(prodname, prodimg, quantity, price, totalamount, userid)
        VALUES(?, ?, ?, ?, ?, ?);
        `;
      //
      db.query(
        strQry,
        [
          bd.prodname,
          bd.prodimg,
          bd.quantity,
          bd.price,
          bd.totalamount,
          req.user.id,
        ],
        (err, results) => {
          if (err) throw err;
          res.json({
            added : bd,
            msg: "New Product added",
          });
        }
      );
    } else {
      res.json({
        msg: "Only Admins are allowed to add products",
      });
    }
  } catch (e) {
    console.log(`Create a new product: ${e.message}`);
  }
});
// add product dummy data
/* 
{
  "prodname":"Banana",
  "prodimg":"https://i.postimg.cc/DZ7pV6mR/png-transparent-banana-banana-natural-foods-food-fitness-thumbnail.png",
  "quantity":5,
  "price":27.99,
  "dateCreated":"2022-08-02 00:00:00"
}
*/
// test
// Get all products
router.get("/products", (req, res) => {
  // Query
  const strQry = `
    SELECT *
    FROM products;
    `;
  db.query(strQry, (err, results) => {
    if (err) throw err;
    res.json(
      // results
      {
        status: 200,
        results: results,
      }
    );
  });
});

// Get one product
router.get("/products/:id", (req, res) => {
  // Query
  const strQry = `
    SELECT *
    FROM products
    WHERE id = ?;
    `;
  db.query(strQry, [req.params.id], (err, results) => {
    if (err) throw err;
    res.json(
      // results
      {
        status: 200,
        results: results.length <= 0 ? "Sorry, no product was found." : results,
      }
    );
  });
});

// Update product
router.put("/products/:id", (req, res) => {
  const bd = req.body;
  // Query
  const strQry = `UPDATE products
     SET ?
     WHERE id = ?`;

  db.query(strQry, [bd.id], (err, data) => {
    if (err) throw err;
    res.json({
      msg: "Item Updated",
    });
  });
});

// Delete product
router.delete("/products/:id", (req, res) => {
  // Query
  const strQry = `
    DELETE FROM products 
    WHERE id = ?;
    `;
  db.query(strQry, [req.params.id], (err, data, fields) => {
    if (err) throw err;
    res.json({
      msg: "Item Deleted",
    });
  });
});
