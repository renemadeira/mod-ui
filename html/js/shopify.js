var SHOPIFY_CLIENT_OPTIONS = {
  domain: 'moddevices.myshopify.com',
  apiKey: 'a367fce84b88e7a14fc70b031a6257df',
  appId: '6'
};

var SHOPIFY_PRODUCT_OPTIONS = {
  "product": {
    "variantId": "all",
    "width": "240px",
    "contents": {
      "img": false,
      "imgWithCarousel": false,
      "title": false,
      "variantTitle": false,
      "price": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "text-align": "left",
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#d828c3",
        ":hover": {
          "background-color": "#c224b0"
        },
        ":focus": {
          "background-color": "#c224b0"
        }
      },
      "title": {
        "font-size": "26px"
      },
      "price": {
        "font-size": "18px"
      },
      "compareAt": {
        "font-size": "15px"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "background-color": "#d828c3",
        ":hover": {
          "background-color": "#c224b0"
        },
        ":focus": {
          "background-color": "#c224b0"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#d828c3",
        ":hover": {
          "background-color": "#c224b0"
        },
        ":focus": {
          "background-color": "#c224b0"
        }
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#d828c3",
        ":hover": {
          "background-color": "#c224b0"
        },
        ":focus": {
          "background-color": "#c224b0"
        }
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}  
