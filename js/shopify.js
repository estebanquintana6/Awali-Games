/* <BuyButton> */
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'awali-games.myshopify.com',
      apiKey: '59805849d9d1d5898f365650c540eb89',
      appId: '6',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('collection', {
        id: 402466500,
        node: document.getElementById('collection-component-0f2fedf9b25'),
        moneyFormat: '$ {{amount}}',
        options: {
  "product": {
    "buttonDestination": "cart",
    "layout": "vertical",
    "variantId": "all",
    "width": "280px",
    "contents": {
      "img": true,
      "title": true,
      "variantTitle": false,
      "options": true,
      "price": true,
      "description": false,
      "buttonWithQuantity": false,
      "button": true,
      "quantity": false
    },
    "text": {
      "button": "Agregar al carrito"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#572733",
        "color": "#ffffff",
        "font-family": "Helvetica Neue, sans-serif",
        "font-size": "15px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        "padding-left": "26px",
        "padding-right": "26px",
        "border": "none",
        ":hover": {
          "background-color": "#572733",
          "color": "#ffffff"
        },
        "border-radius": "3px"
      },
      "variantTitle": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-size": "14px",
        "color": "#4c4c4c"
      },
      "title": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "bold",
        "font-size": "18px",
        "color": "#4c4c4c"
      },
      "description": {
        "color": "#4c4c4c",
        "font-size": "14px",
        "font-family": "Helvetica Neue, sans-serif"
      },
      "price": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-size": "14px",
        "color": "#4c4c4c"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        "color": "#4c4c4c"
      }
    }
  },
  "cart": {
    "contents": {
      "title": true,
      "lineItems": true,
      "footer": true,
      "button": true
    },
    "text": {
      "title": "Carrito",
      "total": "Total",
      "notice": "Shipping and discount codes are added at checkout.",
      "button": "Comprar",
      "empty": "Aun no has agregado nada."
    },
    "styles": {
      "button": {
        "background-color": "#572733",
        "color": "#ffffff",
        "font-family": "Helvetica Neue, sans-serif",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        "padding-left": "26px",
        "padding-right": "26px",
        "border": "none",
        ":hover": {
          "background-color": "#5f9d3e",
          "color": "#ffffff"
        },
        "border-radius": "3px"
      },
      "cart": {
        "background-color": "#ffffff"
      },
      "footer": {
        "background-color": "#ffffff"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "close": {
        ":hover": {
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": true,
      "title": true,
      "variantTitle": false,
      "options": true,
      "price": true,
      "description": true,
      "buttonWithQuantity": false,
      "button": true,
      "quantity": false
    },
    "text": {
      "button": "ADD TO CART"
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
        "background-color": "#e9a224",
        "color": "#ffffff",
        "font-family": "Helvetica Neue, sans-serif",
        "font-size": "15px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        "padding-left": "26px",
        "padding-right": "26px",
        "border": "none",
        ":hover": {
          "background-color": "#e9a224",
          "color": "#ffffff"
        },
        "border-radius": "3px"
      },
      "variantTitle": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-size": "14px",
        "color": "#4c4c4c"
      },
      "title": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "bold",
        "font-size": "26px",
        "color": "#4c4c4c"
      },
      "description": {
        "color": "#4c4c4c",
        "font-size": "14px",
        "font-family": "Helvetica Neue, sans-serif"
      },
      "price": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-size": "18px",
        "color": "#4c4c4c"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        "color": "#4c4c4c"
      },
      "compareAt": {
        "font-size": "15px"
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
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Helvetica Neue, sans-serif",
        "background-color": "#e9a224",
        ":hover": {
          "background-color": "#e9a224"
        }
      }
    }
  },
  "modal": {
    "styles": {
      "modal": {
        "background-color": "#ffffff"
      }
    }
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "color": "#4c4c4c"
      },
      "select": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "color": "#4c4c4c"
      }
    }
  }
}
      });
    });
  }
})();
/* </BuyButton> */
//]]>