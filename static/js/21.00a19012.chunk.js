"use strict";(self.webpackChunkfirst=self.webpackChunkfirst||[]).push([[21],{3720:function(t,e,n){n.d(e,{b:function(){return s}});var s=n(1243).Z.create({baseURL:"https://dummyjson.com/products"});s.interceptors.request.use((function(t){return console.log("REQUEST CONFIG",t),t}),(function(t){return Promise.reject(t)})),s.interceptors.response.use((function(t){return console.log("RESPONSE",t),t}),(function(t){return Promise.reject(t)}))},593:function(t,e,n){n.d(e,{Z:function(){return o}});var s=n(9439),c=n(9434),r=n(4691),a=n(2791),i=n(184);function o(t){var e=t.item,n=(0,c.I0)(),o=(0,c.v9)((function(t){return t.cart.cartItems})),l=(0,a.useState)(!1),d=(0,s.Z)(l,2),u=d[0],m=d[1];(0,a.useEffect)((function(){m(o.some((function(t){return t.id===e.id})))}),[o,e]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("button",{className:"rounded-pill w-75 p-2 fs-5 mx-auto  ".concat(u?"btn btn-danger":"btn btn-success"),onClick:function(){n(u?(0,r.h2)(e):(0,r.Xq)(e))},children:u?"Remove from Cart":"Add To Cart"})})}},1021:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var s=n(9439),c=n(2791),r=n(5970),a=n(151),i=n(1087),o=n(593),l=n(184);var d=function(t){var e=t.productdata,n=t.handleNavigate;return(0,l.jsxs)("div",{className:"card h-100 p-4 border",children:[e.stock?(0,l.jsxs)("button",{type:"button",className:"btn btn-success position-absolute rounded-pill m-3",children:["in stock",(0,l.jsx)("span",{className:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger",children:e.stock})]}):(0,l.jsxs)("button",{type:"button",className:"btn btn-primary position-relative",children:["out of stock"," "]}),(0,l.jsx)("img",{src:e.images[0],className:"card-img-top  h-50 ",style:{hight:"250px"},alt:"..."}),(0,l.jsxs)("div",{className:"card-body",children:[(0,l.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,l.jsx)("h5",{className:"card-title ",children:(0,l.jsx)(i.rU,{className:"text-decoration-none text-success fs-3 m-3",to:"/product-details/".concat(e.id),children:e.title})}),(0,l.jsxs)("h5",{children:[(0,l.jsx)("sup",{children:"$"}),e.price,(0,l.jsx)("sup",{children:".00"})]})]}),(0,l.jsx)("p",{className:"card-text d-inline-block text-truncate ms-3",style:{maxWidth:"100%"},children:e.description}),(0,l.jsxs)("div",{className:"my-3",children:[(0,l.jsxs)("span",{className:"card-text fs-5 pb-4",children:["rating :",e.rating," "]}),(0,l.jsx)("span",{className:"mx-5",children:(0,l.jsx)(r.Z,{name:"text-feedback",value:e.rating,readOnly:!0,precision:.1,emptyIcon:(0,l.jsx)(a.Z,{style:{opacity:.8},fontSize:"inherit"})})})]}),(0,l.jsxs)("div",{className:"mt-5",children:[(0,l.jsx)("button",{type:"button",className:"btn btn-success rounded-pill d-block mx-auto w-75 my-3 p-2 fs-5 ",onClick:function(){return n(e.id)},children:"View Details"}),(0,l.jsx)("br",{}),(0,l.jsx)("div",{className:"d-flex align-content-center",children:(0,l.jsx)(o.Z,{item:e,className:"p-5"})})]})]})]})},u=n(7689),m=n(3720);var x=function(){var t=(0,c.useState)([]),e=(0,s.Z)(t,2),n=e[0],r=e[1],a=(0,u.s0)();return(0,c.useEffect)((function(){m.b.get("").then((function(t){return r(t.data.products)})).catch((function(t){return console.log(t)}))}),[]),n?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{className:"mt-5",children:"Our new list of Products"}),(0,l.jsx)("hr",{className:"my-5"}),(0,l.jsx)("div",{className:"row row-cols-1 row-cols-md-3 g-4",children:n.map((function(t,e){return(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(d,{productdata:t,handleNavigate:function(t){return function(t){a("/product-details/".concat(t))}(t)}})},e)}))})]}):(0,l.jsx)(l.Fragment,{})};var f=function(){return(0,l.jsx)("div",{children:(0,l.jsx)(x,{})})}}}]);
//# sourceMappingURL=21.00a19012.chunk.js.map