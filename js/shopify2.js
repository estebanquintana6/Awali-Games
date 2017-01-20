
/*<![CDATA[*/

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
      apiKey: '845dfb75e26a59020f3e646990152bc3',
      appId: '6',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [9685476239],
        node: document.getElementById('product-component-268e72dbb6b'),
        moneyFormat: '%24%20%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "variantId": "all",
    "width": "240px",
    "contents": {
      "img": false,
      "title": false,
      "variantTitle": false,
      "price": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "AGREGAR CARRITO"
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
        "background-color": "#e9a224",
        "font-size": "15px",
        ":hover": {
          "background-color": "#d29220"
        },
        ":focus": {
          "background-color": "#d29220"
        },
        "font-weight": "normal"
      },
      "compareAt": {
        "font-size": "12px"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "text": {
      "title": "Carrito",
      "total": "Subtotal",
      "button": "Comprar",
      "empty": "El carrito está vacío"
    },
    "styles": {
      "button": {
        "background-color": "#e9a224",
        ":hover": {
          "background-color": "#d29220"
        },
        ":focus": {
          "background-color": "#d29220"
        },
        "font-weight": "normal"
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "variantTitle": false,
      "buttonWithQuantity": false,
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
        "background-color": "#e9a224",
        "font-size": "15px",
        ":hover": {
          "background-color": "#d29220"
        },
        ":focus": {
          "background-color": "#d29220"
        },
        "font-weight": "normal"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#e9a224",
        ":hover": {
          "background-color": "#d29220"
        },
        ":focus": {
          "background-color": "#d29220"
        },
        "font-weight": "normal"
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
      });
    });
  }
})();
/*]]>*/