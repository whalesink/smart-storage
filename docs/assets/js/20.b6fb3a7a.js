(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{342:function(t,s,a){"use strict";a.r(s);var e=a(15),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"react-hooks-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-hooks-api"}},[t._v("#")]),t._v(" React Hooks API")]),t._v(" "),s("h2",{attrs:{id:"createlocalstorage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#createlocalstorage"}},[t._v("#")]),t._v(" createLocalStorage()")]),t._v(" "),s("p",[t._v("Create a storage module by "),s("code",[t._v("localStorage")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[t._v("#")]),t._v(" Type")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token generic-function"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createLocalStorage")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" object"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CreateStorageOptions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CreateStorage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("options: CreateStorageOptions<T>")])]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CreateStorageOptions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Storage module key (must be unique) */")]),t._v("\n  storageModuleKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Initial value (non-nullable properties must be initialized, \n  and optional properties cannot be initialized) */")]),t._v("\n  initial"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PickNonNullable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Whether to enable module protection */")]),t._v("\n  protect"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Version number of the storage module */")]),t._v("\n  version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Previous version number of the storage module */")]),t._v("\n  preVersion"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"return-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#return-value"}},[t._v("#")]),t._v(" Return Value")]),t._v(" "),s("p",[t._v("The function returns an object containing two hooks, "),s("a",{attrs:{href:"#usestorage"}},[s("code",[t._v("useStorage")])]),t._v(" and "),s("a",{attrs:{href:"#usestoragehelper"}},[s("code",[t._v("useStorageHelper")])]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CreateStorage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  useStorage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" UseStorage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  useStorageHelper"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" UseStorageHelper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserInfo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  token"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  hasSigned"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" useStorage "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token generic-function"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createLocalStorage")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("UserInfo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  storageModuleKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user_info'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  initial"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hasSigned"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"createsessionstorage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#createsessionstorage"}},[t._v("#")]),t._v(" createSessionStorage()")]),t._v(" "),s("p",[t._v("Create a storage module by "),s("code",[t._v("sessionStorage")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"type-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type-2"}},[t._v("#")]),t._v(" Type")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token generic-function"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createSessionStorage")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" object"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CreateStorageOptions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CreateStorage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"parameters-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("p",[t._v("Same as "),s("a",{attrs:{href:"#parameters"}},[s("code",[t._v("createLocalStorage() > Parameters")])])]),t._v(" "),s("h3",{attrs:{id:"return-value-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#return-value-2"}},[t._v("#")]),t._v(" Return Value")]),t._v(" "),s("p",[t._v("Same as "),s("a",{attrs:{href:"#return-value"}},[s("code",[t._v("createLocalStorage() > Return Value")])])]),t._v(" "),s("h3",{attrs:{id:"example-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserInfo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  token"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  hasSigned"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" useStorage "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token generic-function"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createSessionStorage")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("UserInfo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  storageModuleKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user_info'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  initial"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hasSigned"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"usestorage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usestorage"}},[t._v("#")]),t._v(" useStorage()")]),t._v(" "),s("p",[t._v("Get "),s("code",[t._v("states")]),t._v(", "),s("code",[t._v("setters")]),t._v(", "),s("code",[t._v("resetters")]),t._v(" and "),s("code",[t._v("checkers")]),t._v(" from storage module.")]),t._v(" "),s("h3",{attrs:{id:"type-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type-3"}},[t._v("#")]),t._v(" Type")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UseStorage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" StorageStates"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"return-value-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#return-value-3"}},[t._v("#")]),t._v(" Return Value")]),t._v(" "),s("p",[t._v("The function returns an object containing the pair of "),s("RouterLink",{attrs:{to:"/type-definition/react-hooks.html#statekey"}},[s("code",[t._v("StateKey<T>")])]),t._v(" and "),s("RouterLink",{attrs:{to:"/type-definition/react-hooks.html#storagestate"}},[s("code",[t._v("StorageState<T, K extends keyof T>")])]),t._v(":")],1),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StorageStates"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SK")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" StateKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" RestoreSuffixedKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SK")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'state'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("keyof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" StorageState"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" RestoreSuffixedKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SK")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'state'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("never")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/type-definition/shared.html#restoresuffixedkey"}},[s("code",[t._v("RestoreSuffixedKey<SK, 'state'>")])]),t._v(" here is used to restore the "),s("code",[t._v("StateKey<T>")]),t._v(', for example, the "tokenState" will be restored to "token".')],1)]),t._v(" "),s("hr"),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/type-definition/react-hooks.html#statekey"}},[s("code",[t._v("StateKey<T>")])]),t._v(' is a string (such as "tokenState"):')],1),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StateKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SuffixedKeys"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'state'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/type-definition/shared.html#suffixedkeys"}},[s("code",[t._v("SuffixedKeys<T, 'state'>")])]),t._v(' here is used to add suffix, for example, the "token" will become to "tokenState".')],1)]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("And the "),s("code",[t._v("StorageState<T, K extends keyof T>")]),t._v(" is an object containing:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("xxx: T[K]")])]),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/type-definition/react-hooks.html#setter"}},[s("code",[t._v("setXxx: Setter<T[K]>")])]),t._v(", type of "),s("code",[t._v("setXxx")]),t._v(" is "),s("RouterLink",{attrs:{to:"/type-definition/react-hooks.html#setterkey"}},[s("code",[t._v("SetterKey<K>")])])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/type-definition/react-hooks.html#resetter"}},[s("code",[t._v("resetXxx: Resetter")])]),t._v(", type of "),s("code",[t._v("resetXxx")]),t._v(" is "),s("RouterLink",{attrs:{to:"/type-definition/react-hooks.html#resetterkey"}},[s("code",[t._v("ResetterKey<K>")])])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/type-definition/react-hooks.html#checker"}},[s("code",[t._v("containsXxx: Checker")])]),t._v(", type of "),s("code",[t._v("containsXxx")]),t._v(" is "),s("RouterLink",{attrs:{to:"/type-definition/react-hooks.html#checkerkey"}},[s("code",[t._v("CheckerKey<K>")])])],1)]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StorageState"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("K")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("keyof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Key "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("K")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("K")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Key "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" SetterKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("K")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Setter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("K")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Key "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" ResetterKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("K")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Resetter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Key "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" CheckerKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("K")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Checker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"example-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-3"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  tokenState"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resetToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" containsToken "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useStorage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"usestoragehelper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usestoragehelper"}},[t._v("#")]),t._v(" useStorageHelper()")]),t._v(" "),s("p",[t._v("Get instance of storage module helper.")]),t._v(" "),s("h3",{attrs:{id:"type-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type-4"}},[t._v("#")]),t._v(" Type")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UseStorageHelper")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" StorageHelper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"return-value-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#return-value-4"}},[t._v("#")]),t._v(" Return Value")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StorageHelper")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("contains")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("initialize")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"example-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-4"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" storageHelper "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useStorageHelper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);