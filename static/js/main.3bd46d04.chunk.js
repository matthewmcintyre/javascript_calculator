(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_matthewmcintyre_Git_javascript_calculator_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),_actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),initialState={currentOutput:"0",valueOne:"",currentOperator:""},calculatorReducer=function calculatorReducer(){var state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState,action=arguments.length>1?arguments[1]:void 0;switch(action.type){case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.d:var myResult=eval(state.valueOne+state.currentOperator+state.currentOutput);return Object(_Users_matthewmcintyre_Git_javascript_calculator_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({},state,{currentOutput:String(myResult),currentOperator:""});case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.c:return Object(_Users_matthewmcintyre_Git_javascript_calculator_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({},state,{currentOutput:"0",valueOne:"",currentOperator:""});case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.b:var result=state.currentOutput+action.number;return console.log(state.currentOperator),console.log(state.currentOutput),Object(_Users_matthewmcintyre_Git_javascript_calculator_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({},state,{currentOutput:result.replace(/^0+/,"")});case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.a:var newDecimal=state.currentOutput+action.decimal;return Object(_Users_matthewmcintyre_Git_javascript_calculator_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({},state,{currentOutput:newDecimal.replace(/[^0-9.]|\.(?=.*\.)/,"")});case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.e:return Object(_Users_matthewmcintyre_Git_javascript_calculator_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({},state,{currentOperator:action.operator,valueOne:state.currentOutput,currentOutput:""});default:return state}};__webpack_exports__.a=calculatorReducer},28:function(e,t,n){e.exports=n(38)},3:function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"b",function(){return c}),n.d(t,"a",function(){return u}),n.d(t,"e",function(){return o});var r="EQUALS",a="ALL_CLEAR",c="ADD_NUMBER",u="ADD_DECIMAL",o="OPERATOR"},38:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(9),u=n.n(c),o=n(1),i=n(11),p=n(6),l=n(19),_=Object(p.b)({calculatorReducer:l.a}),s=Object(p.c)(_),d=n(20),m=n(21),b=n(25),O=n(22),f=n(26),E=n(2),g=n(3);function x(){var e=Object(o.a)(["\n  box-shadow: inset 0px 0px 0px\n    ",";\n"]);return x=function(){return e},e}function v(){var e=Object(o.a)(["\n  box-shadow: inset 0px 0px 0px\n    ",";\n"]);return v=function(){return e},e}function j(){var e=Object(o.a)(["\n  box-shadow: inset 0px 0px 0px\n    ",";\n"]);return j=function(){return e},e}function h(){var e=Object(o.a)(["\n  box-shadow: inset 0px 0px 0px\n    ",";\n"]);return h=function(){return e},e}function y(){var e=Object(o.a)(["\n  font-size: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #a4c2a5;\n  border-radius: 2px;\n  &: hover {\n    background: #697c6a;\n  }\n"]);return y=function(){return e},e}function C(){var e=Object(o.a)(["\n  overflow: scroll;\n  display: flex;\n  align-items: center;\n  font-size: 25px;\n  background: #bcac9b;\n  height: 50px;\n  width: 220px;\n  margin-bottom: 10px;\n  border-radius: 1px;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n"]);return C=function(){return e},e}function w(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  background: #2a3d45;\n  width: 250px;\n  height: 400px;\n  padding: 20px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1px;\n"]);return w=function(){return e},e}function D(){var e=Object(o.a)(["\n  grid-area: bottomnumber;\n  display: grid;\n  grid-template-columns: 50px 50px;\n  grid-template-rows: 50px;\n  grid-gap: 5px;\n"]);return D=function(){return e},e}function k(){var e=Object(o.a)(["\n  grid-area: ac;\n  display: grid;\n  grid-template-columns: 105px;\n  grid-template-rows: 50px;\n  grid-gap: 5px;\n"]);return k=function(){return e},e}function M(){var e=Object(o.a)(["\n  grid-area: side;\n  display: grid;\n  grid-template-columns: 50px;\n  grid-template-rows: 160px;\n  grid-gap: 5px;\n"]);return M=function(){return e},e}function R(){var e=Object(o.a)(["\n  grid-area: top;\n  display: grid;\n  grid-template-columns: repeat(4, 50px);\n  grid-template-rows: repeat(1, 50px);\n  grid-gap: 5px;\n"]);return R=function(){return e},e}function P(){var e=Object(o.a)(["\n  grid-area: number;\n  display: grid;\n  grid-template-columns: repeat(3, 50px);\n  grid-template-rows: repeat(4, 50px);\n  grid-gap: 5px;\n"]);return P=function(){return e},e}function A(){var e=Object(o.a)(['\n  display: grid;\n  grid-template-columns: repeat(4, 50px);\n  grid-template-rows: repeat(5, 50px);\n  grid-template-areas:\n    "top top top top"\n    "number number number side"\n    "number number number side"\n    "number number number side"\n    "bottomnumber bottomnumber ac ac";\n  width: 210px;\n  height: 280px;\n  justify-content: space-evenly;\n  grid-gap: 5px;\n  margin-top: 10px;\n']);return A=function(){return e},e}function U(){var e=Object(o.a)(["\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return U=function(){return e},e}var T=E.b.div(U()),L=E.b.div(A()),B=E.b.div(P()),I=E.b.div(R()),K=E.b.div(M()),N=E.b.div(k()),W=E.b.div(D()),S=E.b.div(w()),G=E.b.div(C()),q=E.b.div(y()),z=Object(E.b)(q)(h(),function(e){return"+"===e.currentOperator?"5px #481620":"0px #a4c2a5"}),J=Object(E.b)(q)(j(),function(e){return"-"===e.currentOperator?"5px #481620":"0px #a4c2a5"}),Q=Object(E.b)(q)(v(),function(e){return"*"===e.currentOperator?"5px #481620":"0px #a4c2a5"}),F=Object(E.b)(q)(x(),function(e){return"/"===e.currentOperator?"5px #481620":"0px #a4c2a5"}),H=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(T,null,a.a.createElement(S,null,a.a.createElement(G,null,this.props.currentOutput),a.a.createElement(L,null,a.a.createElement(B,null,a.a.createElement(q,{onClick:function(){return e.props.addNumber(1)}},"1"),a.a.createElement(q,{onClick:function(){return e.props.addNumber(2)}},"2"),a.a.createElement(q,{onClick:function(){return e.props.addNumber(3)}},"3"),a.a.createElement(q,{onClick:function(){return e.props.addNumber(4)}},"4"),a.a.createElement(q,{onClick:function(){return e.props.addNumber(5)}},"5"),a.a.createElement(q,{onClick:function(){return e.props.addNumber(6)}},"6"),a.a.createElement(q,{onClick:function(){return e.props.addNumber(7)}},"7"),a.a.createElement(q,{onClick:function(){return e.props.addNumber(8)}},"8"),a.a.createElement(q,{onClick:function(){return e.props.addNumber(9)}},"9")),a.a.createElement(W,null,a.a.createElement(q,{onClick:function(){return e.props.addNumber(0)}},"0"),a.a.createElement(q,{onClick:function(){return e.props.addDecimal(".")}},".")),a.a.createElement(I,null,a.a.createElement(z,{currentOperator:this.props.currentOperator,onClick:function(){return e.props.operator("+")}},"+"),a.a.createElement(J,{currentOperator:this.props.currentOperator,onClick:function(){return e.props.operator("-")}},"-"),a.a.createElement(Q,{currentOperator:this.props.currentOperator,onClick:function(){return e.props.operator("*")}},"*"),a.a.createElement(F,{currentOperator:this.props.currentOperator,onClick:function(){return e.props.operator("/")}},"/")),a.a.createElement(N,null,a.a.createElement(q,{onClick:function(){return e.props.allClear()}},"AC")),a.a.createElement(K,null,a.a.createElement(q,{onClick:function(){return e.props.equals()}},"=")))))}}]),t}(r.Component),V={allClear:function(){return{type:g.c}},equals:function(){return{type:g.d}},addNumber:function(e){return{type:g.b,number:e}},operator:function(e){return{type:g.e,operator:e}},addDecimal:function(e){return{type:g.a,decimal:e}}},X=Object(i.b)(function(e){return{currentOutput:e.calculatorReducer.currentOutput,currentOperator:e.calculatorReducer.currentOperator}},V)(H);function Y(){var e=Object(o.a)(["\n@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');\n\n  html {\n    background-color: #7A6C5D;\n    font-family: 'Roboto Mono', monospace;\n  }\n\n  body {\n    height:100%;\n    margin: 0;\n    padding: 0;\n\n    \n  }\n"]);return Y=function(){return e},e}var Z=Object(E.a)(Y()),$=function(){return a.a.createElement(i.a,{store:s},a.a.createElement(Z,null),a.a.createElement(X,null))};u.a.render(a.a.createElement($,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.3bd46d04.chunk.js.map