define({ "api": [
  {
    "type": "post",
    "url": "/api/admin/v1/products",
    "title": "AddProduct",
    "version": "1.0.0",
    "name": "AddProduct",
    "description": "<p>add product api for admin</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "name",
            "description": "<p>product name</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "price",
            "description": "<p>product price</p>"
          },
          {
            "group": "Parameter",
            "type": "file[]",
            "optional": false,
            "field": "image",
            "description": "<p>product images should be png/jpeg and maximum number of product photos is 4</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    success: true,\n    message: \"new product added\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     success: false,\n     message: \"invalid file(s)!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/v1/product.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/api/admin/v1/login",
    "title": "Login",
    "version": "1.0.0",
    "name": "login",
    "description": "<p>login api for admin</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    success: true,\n    message: \"logged in successfully\",\n    data: {\n         idToken: idToken, \n         accessToken: accessToken\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     success: false,\n     message: \"username not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin/v1/home.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/api/seller/v1/login",
    "title": "Login",
    "version": "1.0.0",
    "name": "login",
    "description": "<p>login api for customer</p>",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    success: true,\n    message: \"Logged in successfully\",\n    data: {\n         idToken: idToken, \n         accessToken: accessToken\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     success: false,\n     message: \"username not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/customer/v1/home.js",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/api/customer/v1",
    "title": "Register",
    "version": "1.0.0",
    "name": "register",
    "description": "<p>register new customer</p>",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "mobile",
            "description": "<p>phone number</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    success: true,\n    message: \"registered successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     success: false,\n     message: \"username or mobile is taken!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/customer/v1/home.js",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/api/seller/v1/products",
    "title": "AddProduct",
    "version": "1.0.0",
    "name": "addProduct",
    "description": "<p>add product to store page</p>",
    "group": "Seller",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "productId",
            "description": "<p>product objectId from database</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "newPrice",
            "description": "<p>new price for seller's store page</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  success: true,\n  message: \"product added to store page\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  success: false,\n  message: \"product not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/seller/v1/products.js",
    "groupTitle": "Seller"
  },
  {
    "type": "delete",
    "url": "/api/seller/v1/products/:id",
    "title": "DeleteProduct",
    "version": "1.0.0",
    "name": "deleteProduct",
    "description": "<p>delete product frome store page</p>",
    "group": "Seller",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "id",
            "description": "<p>product objectId from database</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  success: true,\n  message: \"product removed from store\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  success: false,\n  message: \"product is not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/seller/v1/products.js",
    "groupTitle": "Seller"
  },
  {
    "type": "get",
    "url": "/api/seller/v1/products/",
    "title": "GetProducts",
    "version": "1.0.0",
    "name": "getProducts",
    "description": "<p>get product list</p>",
    "group": "Seller",
    "success": {
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  success: true,\n  message: \"active productList is ready\",\n  data: [\n     {\n       _id: \"1234567890\",\n       name: \"product 1\",\n       price: \"20000\",\n       images: [\n         \"http://upload.temshop.ir./products/image.png\"\n       ],\n       newPrice: \"25000\"\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/seller/v1/products.js",
    "groupTitle": "Seller"
  },
  {
    "type": "post",
    "url": "/api/seller/v1/login",
    "title": "Login",
    "version": "1.0.0",
    "name": "login",
    "description": "<p>login api for seller</p>",
    "group": "Seller",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    success: true,\n    message: \"Logged in successfully\",\n    data: {\n         idToken: idToken, \n         accessToken: accessToken\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     success: false,\n     message: \"username not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/seller/v1/home.js",
    "groupTitle": "Seller"
  },
  {
    "type": "post",
    "url": "/api/seller/v1",
    "title": "Register",
    "version": "1.0.0",
    "name": "register",
    "description": "<p>register new seller</p>",
    "group": "Seller",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "mobile",
            "description": "<p>phone number</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    success: true,\n    message: \"registered successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     success: false,\n     message: \"username or mobile is taken!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/seller/v1/home.js",
    "groupTitle": "Seller"
  },
  {
    "type": "put",
    "url": "/api/seller/v1/products/:id/price/:newPrice",
    "title": "UpdateProductPrice",
    "version": "1.0.0",
    "name": "updateProductPrice",
    "description": "<p>update product price</p>",
    "group": "Seller",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "id",
            "description": "<p>product id</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "newPrice",
            "description": "<p>product new price</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   success: true,\n   message: \"product price is modified\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-response:",
          "content": "{\n   success: false, \n   message: \"product is not available\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/seller/v1/products.js",
    "groupTitle": "Seller"
  }
] });