/*! For license information please see components-Input-Input-stories.3bdf6591.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstorybook_app=self.webpackChunkstorybook_app||[]).push([[115],{"./src/components/Input/Input.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DangerInput:()=>DangerInput,PrimaryInput:()=>PrimaryInput,SecondaryInput:()=>SecondaryInput,SuccessInput:()=>SuccessInput,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Input_stories});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Input_Input(props){const{variant="primary",children,...rest}=props;return(0,jsx_runtime.jsx)("input",{className:"input ".concat(variant),...rest})}const components_Input_Input=Input_Input;Input_Input.__docgenInfo={description:"",methods:[],displayName:"Input"};const Input_stories={title:"Form/Input",component:components_Input_Input},PrimaryInput=()=>(0,jsx_runtime.jsx)(components_Input_Input,{variant:"primary",placeholder:"Type your name"}),SecondaryInput=()=>(0,jsx_runtime.jsx)(components_Input_Input,{variant:"secondary"}),SuccessInput=()=>(0,jsx_runtime.jsx)(components_Input_Input,{variant:"success"}),DangerInput=()=>(0,jsx_runtime.jsx)(components_Input_Input,{variant:"danger"});PrimaryInput.parameters={...PrimaryInput.parameters,docs:{...PrimaryInput.parameters?.docs,source:{originalSource:"() => <Input variant='primary' placeholder=\"Type your name\" />",...PrimaryInput.parameters?.docs?.source}}},SecondaryInput.parameters={...SecondaryInput.parameters,docs:{...SecondaryInput.parameters?.docs,source:{originalSource:"() => <Input variant='secondary' />",...SecondaryInput.parameters?.docs?.source}}},SuccessInput.parameters={...SuccessInput.parameters,docs:{...SuccessInput.parameters?.docs,source:{originalSource:"() => <Input variant='success' />",...SuccessInput.parameters?.docs?.source}}},DangerInput.parameters={...DangerInput.parameters,docs:{...DangerInput.parameters?.docs,source:{originalSource:"() => <Input variant='danger' />",...DangerInput.parameters?.docs?.source}}};const __namedExportsOrder=["PrimaryInput","SecondaryInput","SuccessInput","DangerInput"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);