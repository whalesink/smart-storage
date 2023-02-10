(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{350:function(e,t,o){"use strict";o.r(t);var a=o(15),n=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"q-a"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[e._v("#")]),e._v(" Q&A")]),e._v(" "),t("h2",{attrs:{id:"about-interface"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#about-interface"}},[e._v("#")]),e._v(" About Interface")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Q: Why can't I use "),t("code",[e._v("interface")]),e._v(" to define TypeScript types?")])]),e._v(" "),t("li",[t("p",[e._v("A: Because the key of the type defined by "),t("code",[e._v("interface")]),e._v(" does not have a "),t("code",[e._v("string")]),e._v(" type signature. But Smart Storage sets type constraints like "),t("code",[e._v("Record<string, unknown>")]),e._v(" for the incoming generics. So, use "),t("code",[e._v("type")]),e._v(" to instead of it.")])])]),e._v(" "),t("h2",{attrs:{id:"about-remove-and-clear"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#about-remove-and-clear"}},[e._v("#")]),e._v(" About Remove and Clear")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Q: Why Isn't "),t("code",[e._v("remove()")]),e._v(" and "),t("code",[e._v("clear()")]),e._v(" Provided?")])]),e._v(" "),t("li",[t("p",[e._v("A: There are two reasons:")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Correlation of component states")])]),e._v(" "),t("p",[e._v("In the framework, properties in the storage module are associated with states in the component one by one. If "),t("code",[e._v("remove()")]),e._v(" and "),t("code",[e._v("clear()")]),e._v(" are called to delete key-value pairs from the storage module, states cannot sense that the storage module has been modified. As a result, non-nullable properties in the storage module and corresponding states in the component are out of sync, resulting in unexpected errors.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Non-nullable definition of properties")])]),e._v(" "),t("p",[e._v("Semantically, "),t("code",[e._v("remove()")]),e._v(" and "),t("code",[e._v("clear()")]),e._v(' are used to delete key-value pairs in the storage module, including non-nullable properties. In this way, these non-nullable properties violate their definition of "non-nullable."')])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);