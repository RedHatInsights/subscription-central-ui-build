"use strict";(self.webpackChunksubscription_central=self.webpackChunksubscription_central||[]).push([[813],{5571:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var r=n(2950),a=n.n(r),i=n(4748),o=n(9376),l=n(5356),c=n(4259),u=n(8494),s=n(8767),m=function(e){return(0,s.useQuery)(["manifestEntitlements",e],(function(){return function(e){return t=void 0,n=void 0,a=function(){var t;return function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(c){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(o=0)),o;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){o.label=l[1];break}if(6===l[0]&&o.label<a[1]){o.label=a[1],a=l;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(l);break}a[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}}(this,(function(n){switch(n.label){case 0:return[4,window.insights.chrome.auth.getToken()];case 1:return t=n.sent(),[2,fetch("/api/rhsm/v2/manifests/".concat(e,"?include=entitlements"),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){if(200!=e.status)throw new Error("Failed to fetch manifest entitlements: ".concat(e.statusText));return e.json()}))]}}))},new((r=Promise)||(r=Promise))((function(e,i){function o(e){try{c(a.next(e))}catch(e){i(e)}}function l(e){try{c(a.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(o,l)}c((a=a.apply(t,n||[])).next())}));var t,n,r,a}(e)}))};const f=function(e){var t,n=e.entitlementsRowRef,i=e.uuid,o=m(i),l=o.isError,s=o.isSuccess,f=o.isLoading,d=o.data,h=null===(t=null==d?void 0:d.body)||void 0===t?void 0:t.entitlementsAttached;(0,r.useEffect)((function(){(null==n?void 0:n.current)&&(n.current.scrollIntoView({behavior:"smooth",block:"center"}),n.current.focus({preventScroll:!0}))}),[s]);var p=function(e){if(!e)return"";var t=e.substr(0,4),n=e.substr(5,2),r=e.substr(8,2);return"".concat(t,"-").concat(n,"-").concat(r)},b=[];return(null==h?void 0:h.value)&&(b=null==h?void 0:h.value.map((function(e){var t=p(e.startDate),n=p(e.endDate);return{subscriptionName:e.subscriptionName,sku:e.sku,contractNumber:e.contractNumber,entitlementQuantity:e.entitlementQuantity,startDate:t,endDate:n}}))),a().createElement(a().Fragment,null,f&&!l&&a().createElement("div",{className:"sub-entitlement-list-loading-container"},a().createElement(u.qb,null)),s&&!h.valid&&a().createElement("div",{className:"sub-no-entitlements-reason"},a().createElement("p",{tabIndex:s?0:-1,ref:n},h.reason)),s&&h.valid&&a().createElement(c.TableComposable,{ref:n,"aria-label":"Allocations table",variant:"compact",borders:!1,isNested:!0,className:"sub-c-table-manifests-entitlement-list",ouiaId:"entitlementTable/".concat(i),ouiaSafe:!0},a().createElement(c.Thead,null,a().createElement(c.Tr,{ouiaId:"entitlementTable/".concat(i,"/head"),ouiaSafe:!0},a().createElement(c.Th,null,"Subscription name"),a().createElement(c.Th,null,"SKU"),a().createElement(c.Th,null,"Contract number"),a().createElement(c.Th,null,"Quantity"),a().createElement(c.Th,null,"Start date"),a().createElement(c.Th,null,"End date"))),a().createElement(c.Tbody,null,b.map((function(e,t){return a().createElement(c.Tr,{key:t,ouiaId:"entitlementTable/".concat(i,"/row").concat(t),ouiaSafe:!0},a().createElement(c.Td,null,e.subscriptionName),a().createElement(c.Td,null,e.sku),a().createElement(c.Td,null,e.contractNumber),a().createElement(c.Td,null,e.entitlementQuantity),a().createElement(c.Td,null,e.startDate),a().createElement(c.Td,null,e.endDate))})))),l&&"Something went wrong.  Please refresh the page and try again.")};var d=n(7673),h=n(470);const p=function(e){var t=e.href,n=e.children;return a().createElement(l.Button,{variant:"link",component:"a",href:t,target:"_blank",isInline:!0,icon:a().createElement(h.ZP,null),iconPosition:"right"},n)},b=function(){return a().createElement(a().Fragment,null,a().createElement(l.Popover,{"aria-label":"Learn more about Simple Content Access",headerContent:"Simple Content Access",bodyContent:a().createElement("p",null,"Simple content access is a set of capabilities that enables a change in the way Red Hat manages its subscription and entitlement enforcement model. When enabled, you are allowed to consume content on your systems without strict entitlement enforcement."),footerContent:a().createElement(p,{href:"https://access.redhat.com/documentation/en-us/subscription_central/2023/html/getting_started_with_simple_content_access/con-what-is-simplecontent_assembly-simplecontent-ctxt"},"Learn more about enabling simple content access on an existing Satellite allocation and manifest")},a().createElement(d.pT,{className:"sca-more-info-icon","data-testid":"sca-more-info-icon",onClick:function(e){e.stopPropagation()}})))};var E=n(1249),v=n.n(E),w=function(e,t){return e.filter((function(e){return(e.name||"").toLowerCase().includes(t.toLowerCase().trim())||(e.version||"").toLowerCase().includes(t.toLowerCase().trim())||(e.uuid||"").toLowerCase().includes(t.toLowerCase().trim())}))},y=function(e,t){return w(e,t).length},g=function(e){return e.split(".").map((function(e){return+e+1e5})).join(".")},S=function(e,t,n,r,i,o,l,u,s,m){var d=function(e,t,n,r,a,i){var o=(n-1)*r,l=o+r;return function(e,t,n,r){var a=function(e,t){return w(e,t).map((function(e){var t=e.simpleContentAccess||"disabled",n=v().coerce(e.version),r=v().coerce("6.3");return v().lt(n,r)&&(t="disallowed"),{name:e.name,version:e.version,scaStatus:t,uuid:e.uuid}}))}(e,t),i=function(e,t,n){var r=n===c.SortByDirection.desc?-1:1;return e.sort((function(e,n){var a="version"==t?g(e.version):e[t].toLowerCase(),i="version"==t?g(n.version):n[t].toLowerCase();return a<i?-1*r:a>i?1*r:0}))}(a,n,r);return i}(e,t,a,i).slice(o,l)}(e,n,r,i,s,m),h=[];return d.forEach((function(e,t){var n=o[e.uuid]||!1,r={parent:2*(t+1)-2,content:n?a().createElement(f,{uuid:e.uuid,entitlementsRowRef:u[t]}):""};h.push({isOpen:n,cells:e,details:r})})),h},x=n(3217),C=function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(e){i(e)}}function l(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((r=r.apply(e,t||[])).next())}))},T=function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(c){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(o=0)),o;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){o.label=l[1];break}if(6===l[0]&&o.label<a[1]){o.label=a[1],a=l;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(l);break}a[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}},k=function(e){return C(void 0,void 0,Promise,(function(){var t;return T(this,(function(n){switch(n.label){case 0:return[4,window.insights.chrome.auth.getToken()];case 1:return t=n.sent(),[2,fetch("/api/rhsm/v2/manifests/".concat(e,"/export"),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){if(200!=e.status)throw new Error("Failed to trigger export: ".concat(e.statusText));return e.json()}))]}}))}))},I=function(e,t){return C(void 0,void 0,Promise,(function(){var n,r;return T(this,(function(a){switch(a.label){case 0:return[4,window.insights.chrome.auth.getToken()];case 1:return n=a.sent(),[4,fetch("/api/rhsm/v2/manifests/".concat(e,"/exportJob/").concat(t),{headers:{Authorization:"Bearer ".concat(n)}})];case 2:return 200!==(r=a.sent()).status?[3,3]:[2,r.json()];case 3:return 202!==r.status&&404!==r.status?[3,5]:[4,(5e3,new Promise((function(e){return setTimeout(e,5e3)})))];case 4:return a.sent(),[2,I(e,t)];case 5:throw new Error("Error fetching status of exported manifest")}}))}))},D=function(e,t){return C(void 0,void 0,Promise,(function(){var n;return T(this,(function(r){switch(r.label){case 0:return[4,window.insights.chrome.auth.getToken()];case 1:return n=r.sent(),[2,fetch("/api/rhsm/v2/manifests/".concat(e,"/export/").concat(t),{headers:{Authorization:"Bearer ".concat(n),"Content-Type":"application/zip"}}).then((function(e){if(200!=e.status)throw new Error("Could not download manifest: ".concat(e.statusText));return e.blob()}))]}}))}))},P=function(){return(0,s.useMutation)((function(e){return t=e.uuid,C(void 0,void 0,Promise,(function(){var e,n;return T(this,(function(r){switch(r.label){case 0:return[4,k(t)];case 1:return e=r.sent(),[4,I(t,e.body.exportJobID)];case 2:return n=r.sent(),[4,D(t,n.body.exportID)];case 3:return[2,r.sent()]}}))}));var t}))};const A=n(6733).Z;var L=n(5984);const N=function(e){var t=e.isExpanded,n=e.titleRef,i=e.drawerRef,o=e.uuid,c=e.onCloseClick,f=e.exportManifest,d=e.exportManifestButtonIsDisabled,h=e.openCurrentEntitlementsListFromPanel,p=e.deleteManifest,E=m(o),v=E.data,w=E.isLoading,y=E.isFetching,g=E.isSuccess,S=E.isError,x=(0,s.useQueryClient)().getQueryData("user");(0,r.useEffect)((function(){!0===t&&(C(),T())}),[t,g,w]);var C=function(){(null==n?void 0:n.current)&&n.current.scrollIntoView({behavior:"smooth",block:"start"})},T=function(){(null==i?void 0:i.current)&&i.current.focus({preventScroll:!0})},k=function(){var e=v.body,t=e.uuid,n=e.name;f(t,n),c()},I=function(){return a().createElement("div",{className:"sub-manifest-detail-drawer-loading","aria-label":"Loading Manifest Details",tabIndex:w?0:-1,ref:i},a().createElement(u.qb,null))},D=function(){return a().createElement(a().Fragment,null,a().createElement("p",{className:"sub-manifest-details-delete-text"},"Deleting a subscription allocation is ",a().createElement("strong",null,"STRONGLY")," discouraged. This action should only be taken in extreme circumstances or for debugging purposes"),a().createElement(l.Button,{variant:"tertiary",onClick:function(){p(o)},isDisabled:!x.canWriteManifests},"Delete manifest"))},P=function(){if(!(null==v?void 0:v.body))return a().createElement(L.Z,null);var e=v.body,t=e.uuid,n=e.name,r=e.version,o=e.createdDate,c=e.createdBy,u=e.lastModified,s=e.entitlementsAttachedQuantity,m=e.simpleContentAccess,f=function(e){return new Date(e).toLocaleString("en-US",{month:"long",year:"numeric",day:"2-digit",timeZone:"America/New_York"})};return a().createElement("div",null,a().createElement("h3",{tabIndex:g?0:-1,ref:i},n),a().createElement("h4",null,"Details"),a().createElement(l.Grid,null,a().createElement(l.GridItem,{span:6},a().createElement("strong",null,"Name")),a().createElement(l.GridItem,{span:6},n),a().createElement(l.GridItem,{span:6},a().createElement("strong",null,"Type")),a().createElement(l.GridItem,{span:6},"Satellite ",r),a().createElement(l.GridItem,{span:6},a().createElement("strong",null,"UUID")),a().createElement(l.GridItem,{span:6},t)),a().createElement("h4",null,"Subscriptions"),a().createElement(l.Grid,null,a().createElement(l.GridItem,{span:6},a().createElement("strong",null,"Simple content access",a().createElement(b,null))),a().createElement(l.GridItem,{span:6},!0===x.isSCACapable?m:"administratively disabled"),a().createElement(l.GridItem,{span:6},a().createElement("strong",null,"Quantity")),a().createElement(l.GridItem,{span:6},a().createElement(l.Button,{variant:"link",onClick:h,className:"sub-c-button-manifest-details-open-entitlements"},s))),a().createElement("h4",null,"History"),a().createElement(l.Grid,null,a().createElement(l.GridItem,{span:6},a().createElement("strong",null,"Created")),a().createElement(l.GridItem,{span:6},f(o)),a().createElement(l.GridItem,{span:6},a().createElement("strong",null,"Created by")),a().createElement(l.GridItem,{span:6},c),a().createElement(l.GridItem,{span:6},a().createElement("strong",null,"Last modified date")),a().createElement(l.GridItem,{span:6},f(u))),a().createElement(l.Button,{variant:"tertiary",onClick:k,isDisabled:d},"Export manifest"),a().createElement(D,null))};return a().createElement(l.DrawerPanelContent,{className:"sub-c-drawer__panel-manifest-details"},a().createElement(l.DrawerHead,null,a().createElement((function(){return!0===S?a().createElement(L.Z,null):!0===w||!0===y?a().createElement(I,null):!0===g?a().createElement(P,null):void 0}),null),a().createElement(l.DrawerActions,null,a().createElement(l.DrawerCloseButton,{onClick:function(){c()}}))))};var M=function(){var e=(0,s.useQueryClient)();return(0,s.useMutation)((function(e){return function(e){return t=void 0,n=void 0,a=function(){var t;return function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(c){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(o=0)),o;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){o.label=l[1];break}if(6===l[0]&&o.label<a[1]){o.label=a[1],a=l;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(l);break}a[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}}(this,(function(n){switch(n.label){case 0:return[4,window.insights.chrome.auth.getToken()];case 1:return t=n.sent(),[2,fetch("/api/rhsm/v2/manifests/".concat(e,"?force=true"),{method:"DELETE",headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){if(204!=e.status)throw new Error("Status Code ".concat(e.status,".  Error deleting manifest: ").concat(e.statusText,"."))}))]}}))},new((r=void 0)||(r=Promise))((function(e,i){function o(e){try{c(a.next(e))}catch(e){i(e)}}function l(e){try{c(a.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(o,l)}c((a=a.apply(t,n||[])).next())}));var t,n,r,a}(e)}),{onSuccess:function(t,n){e.setQueryData("manifests",(function(e){return e.filter((function(e){return e.uuid!=n}))}))}})};const G=function(e){var t=e.handleModalToggle,n=e.onSuccess,r=e.isOpen,i=e.name,o=e.uuid,c=a().useState(!1),u=c[0],s=c[1],m=(0,x.Z)(),f=m.addSuccessNotification,d=m.addErrorNotification,h=M(),p=h.isError,b=h.isLoading,E=h.isSuccess,v=h.mutate,w=h.reset,y=E||p,g=function(e,t){s(t.target.checked)},S=function(){t(),s(!1)};return E?(n(),f("Manifest ".concat(i," deleted"))):p&&d("Something went wrong. Please try again"),y&&(S(),w()),a().createElement(l.Modal,{isOpen:r,onClose:S,title:b?"Deleting manifest...":"Delete manifest?",variant:l.ModalVariant.small,titleIconVariant:"warning",actions:b?[]:[a().createElement(l.Button,{key:"confirm",variant:"danger",isDisabled:!u,onClick:function(){return v(o)}},"Delete"),a().createElement(l.Button,{key:"cancel",variant:"link",onClick:S},"Cancel")]},a().createElement((function(){return b?a().createElement(l.EmptyState,null,a().createElement(l.EmptyStateIcon,{variant:"container",component:l.Spinner})):a().createElement(l.TextContent,null,a().createElement(l.Text,{component:l.TextVariants.p},a().createElement("b",null,i)," will be permanently deleted, and the connection to Red Hat Insights will be broken. To enable again, you must create, export, download, and import a new manifest into your connected Satellite Server."),a().createElement(l.Checkbox,{label:"I acknowledge that this action cannot be undone",isChecked:u,id:"confirmation_checkbox",onChange:g}))}),null))};var B=n(4564),_=function(){return _=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},_.apply(this,arguments)},F=function(){var e=(0,s.useQueryClient)();return(0,s.useMutation)((function(e){return i=e,t=void 0,n=void 0,a=function(){var e,t,n,r;return function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(c){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(o=0)),o;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){o.label=l[1];break}if(6===l[0]&&o.label<a[1]){o.label=a[1],a=l;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(l);break}a[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}}(this,(function(a){switch(a.label){case 0:return e=i.uuid,t=i.newSCAStatus,[4,window.insights.chrome.auth.getToken()];case 1:return n=a.sent(),r={simpleContentAccess:t},[2,fetch("/api/rhsm/v2/manifests/".concat(e),{method:"PUT",headers:{Authorization:"Bearer ".concat(n)},body:JSON.stringify(r)}).then((function(e){if(204!==e.status)throw new Error("Status Code ".concat(e.status,".  Error updating SCA status: ").concat(e.statusText,".  "));return{success:!0,status:e.status}})).catch((function(e){console.error(e)}))]}}))},new((r=Promise)||(r=Promise))((function(e,i){function o(e){try{c(a.next(e))}catch(e){i(e)}}function l(e){try{c(a.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(o,l)}c((a=a.apply(t,n||[])).next())}));var t,n,r,a,i}),{onSuccess:function(t,n){if(t){var r=n.uuid,a=n.newSCAStatus;!function(e,t,n){var r=e.getQueryData("manifests").map((function(e){if(e.uuid===t){var r=_({},e);return r.simpleContentAccess=n,r}return e}));e.setQueryData("manifests",r)}(e,r,a),function(e,t,n){var r=e.getQueryData(["manifestEntitlements",t]);if(r){var a={body:_(_({},r.body),{simpleContentAccess:n})};e.setQueryData(["manifestEntitlements",t],a)}}(e,r,a)}}})};const R=function(e){var t=e.scaStatus,n=e.uuid,r=e.user,i="enabled"===t.toLowerCase(),o=F(),c=o.data,u=o.mutate,s=o.isLoading,m=o.isError,f=o.isSuccess,d=function(){!function(e,t){var n="enabled"===t.toLowerCase()?"disabled":"enabled";u({uuid:e,newSCAStatus:n})}(n,t)};return!0===m||f&&!c?a().createElement((function(){return a().createElement(a().Fragment,null,a().createElement(B.ZP,{color:"var(--pf-global--danger-color--100)",className:"sca-status-error-icon"}),a().createElement("span",{className:"sca-status-error-msg"},"Something went wrong. Please refresh the page and try again."))}),null):s?a().createElement((function(){return a().createElement(l.Spinner,{size:"lg",className:"sca-status-spinner"})}),null):"disallowed"==t?a().createElement((function(){return a().createElement("p",null,"N/A")}),null):a().createElement((function(){return a().createElement(l.Switch,{id:"sca-status-switch-".concat(n),"data-testid":"sca-status-switch","aria-label":"SCA Status for this Manifest is ".concat(t),isChecked:i,onChange:d,label:"Enabled",labelOff:"Disabled",isDisabled:!r.canWriteManifests})}),null)};var O=function(){return O=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},O.apply(this,arguments)};const Q=function(e){var t=e.data,n=e.isFetching,i=e.user,o=(0,r.useState)(1),s=o[0],m=o[1],f=(0,r.useState)(10),d=f[0],h=f[1],p=(0,r.useState)(""),E=p[0],v=p[1],w=(0,r.useState)({index:0,direction:c.SortByDirection.asc}),g=w[0],C=w[1],T=(0,r.useState)({}),k=T[0],I=T[1],D=(0,r.useState)(""),L=D[0],M=D[1],B=(0,r.useState)(!1),_=B[0],F=B[1],Q=(0,r.useState)(null),V=Q[0],j=Q[1],U=(0,r.useState)(!1),Z=U[0],z=U[1],W=(0,r.useState)(""),K=W[0],q=W[1],H=(0,r.useState)(""),J=H[0],Y=H[1],X=(0,r.useState)(!1),$=X[0],ee=X[1],te=(0,r.useState)(""),ne=te[0],re=te[1],ae=(0,r.useState)(""),ie=ae[0],oe=ae[1],le=(0,r.useRef)(null),ce=(0,r.useRef)(null),ue=new Array(10).fill(null).map((function(){return(0,r.useRef)(null)})),se=(0,x.Z)(),me=se.addInfoNotification,fe=se.addSuccessNotification,de=se.addErrorNotification,he=P(),pe=he.data,be=he.mutate,Ee=he.isLoading,ve=he.isSuccess,we=he.isError,ye=[],ge=function(){F(!1),M("")},Se=function(e,t){h(t),m(1)},xe=function(e,t){m(t),Ae()},Ce=function(){v(""),m(1),Ae()},Te=function(e,t,n){C({index:t,direction:n}),m(1),Ae()},ke=function(){z(!Z)},Ie=function(e){q(e),Y(function(e,t){var n;return null===(n=e.find((function(e){return e.uuid==t})))||void 0===n?void 0:n.name}(t,e)),ke()},De=function(e,t){!function(e,t){M(e),j(t),F(!0),(null==le?void 0:le.current)&&le.current.scrollIntoView({behavior:"smooth",block:"start"}),(null==ce?void 0:ce.current)&&ce.current.focus({preventScroll:!0})}(e,t)},Pe=function(e,t){var n=O({},k);n[e]=t,I(n)},Ae=function(){I({})},Le=function(e,t){re(t),ee(!0),be({uuid:e});var n=me("Manifest ".concat(t," exporting. This may take some time. Please wait."),{hasTimeout:!1});oe(n)};if(ve&&$){var Ne=window.URL.createObjectURL(pe);fe("Manifest ".concat(ne," exported"),{hasTimeout:!1,alertLinkHref:Ne,alertLinkText:"Download manifest",alertLinkIsDownload:!0,keyOfAlertToReplace:ie}),oe(""),ee(!1)}we&&$&&(de("Something went wrong. Please refresh the page and try again.",{hasTimeout:!1,keyOfAlertToReplace:ie}),oe(""),ee(!1));var Me=function(e){return void 0===e&&(e=l.PaginationVariant.top),a().createElement(l.Pagination,{isCompact:e==l.PaginationVariant.top,isDisabled:n,itemCount:y(t,E),perPage:d,page:s,onSetPage:xe,onPerPageSelect:Se,variant:e})};return a().createElement(a().Fragment,null,0===(null==t?void 0:t.length)&&i.canWriteManifests&&a().createElement(u.s3,{user:i}),((null==t?void 0:t.length)>0||!i.canWriteManifests)&&a().createElement(l.Drawer,{isExpanded:_,className:"sub-c-drawer-satellite-manifest"},a().createElement(l.DrawerContent,{panelContent:L?a().createElement(N,{uuid:L,exportManifest:Le,exportManifestButtonIsDisabled:Ee,onCloseClick:ge,isExpanded:_,titleRef:le,drawerRef:ce,openCurrentEntitlementsListFromPanel:function(){ge(),Pe(L,!0);var e=ue[V];(null==e?void 0:e.current)&&e.current.scrollIntoView({behavior:"smooth",block:"center"})},deleteManifest:Ie}):""},a().createElement(l.DrawerContentBody,null,a().createElement(l.PageSection,{variant:l.PageSectionVariants.light},a().createElement(l.Flex,{direction:{default:"column",md:"row"},justifyContent:{default:"justifyContentSpaceBetween"}},a().createElement(l.FlexItem,null,a().createElement(l.Split,{hasGutter:!0},t.length>0&&a().createElement(l.SplitItem,{isFilled:!0},a().createElement(l.SearchInput,{placeholder:"Filter by name, version or UUID",value:E,onChange:function(e,t){v(t),m(1),Ae()},onClear:Ce})),a().createElement(l.SplitItem,null,a().createElement(A,{user:i})))),a().createElement(l.FlexItem,{align:{default:"alignRight"}},Me()))),a().createElement(c.TableComposable,{"aria-label":"Satellite Manifest Table",variant:"compact",ouiaId:"manifestTable",ouiaSafe:!0},a().createElement(c.Thead,null,a().createElement(c.Tr,{ouiaId:"manifestTable/head",ouiaSafe:!0},a().createElement(c.Th,null),function(e){var t=[{label:"Name",sortKey:"name"},{label:"Version",sortKey:"version"},{label:a().createElement(a().Fragment,{key:"0"},"Simple Content Access",a().createElement(b,null)),sortKey:"scaStatus"},{label:"UUID",sortKey:"uuid"}];return!1===e.isSCACapable&&t.splice(2,1),t}(i).map((function(e,t){return ye.push(e.sortKey),a().createElement(c.Th,{key:t,sort:(n=t,{sortBy:{index:g.index,direction:g.direction,defaultDirection:c.SortByDirection.asc},onSort:Te,columnIndex:n})},e.label);var n})),a().createElement(c.Td,null))),(n?[]:S(t,0,E,s,d,k,0,ue,ye[g.index],g.direction)).map((function(e,t){var n,r,o=e.cells,u=ye.length+2;return a().createElement(c.Tbody,{key:t,isExpanded:e.isOpen},a().createElement(c.Tr,{ouiaId:"manifestTable/row".concat(t),ouiaSafe:!0},a().createElement(c.Td,{expand:{rowIndex:t,isExpanded:e.isOpen,onToggle:function(){return e=o.uuid,void Pe(e,!k[e]);var e}}}),a().createElement(c.Td,null,a().createElement(l.Button,{"data-testid":"expand-details-button-".concat(t),variant:"link",onClick:function(){return De(o.uuid,t)}},o.name)),a().createElement(c.Td,null,o.version),i.isSCACapable&&a().createElement(c.Td,null,a().createElement(R,{scaStatus:o.scaStatus,uuid:o.uuid,user:i})),a().createElement(c.Td,null,o.uuid),a().createElement(c.Td,null,a().createElement(c.ActionsColumn,{items:(n=o.uuid,r=o.name,[{title:"Export",disabled:!1,onClick:function(){Le(n,r)},variant:"default"},{title:"Delete",disabled:!i.canWriteManifests,onClick:i.canWriteManifests?function(){Ie(n)}:null,variant:"default"}])}))),a().createElement(c.Tr,{isExpanded:e.isOpen,ouiaId:"manifestTable/details".concat(t),ouiaSafe:!0},a().createElement(c.Td,{colSpan:u},a().createElement(c.ExpandableRowContent,null,e.details.content))))}))),a().createElement(l.PageSection,{variant:l.PageSectionVariants.light},0===y(t,E)&&t.length>0&&a().createElement(u.qx,{clearFilters:Ce}),!n&&0===t.length&&a().createElement(u.s3,{user:i}),n&&a().createElement(u.qb,null),Me(l.PaginationVariant.bottom))))),a().createElement(G,{uuid:K,name:J,isOpen:Z,handleModalToggle:ke,onSuccess:ge}))};var V=function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(e){i(e)}}function l(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((r=r.apply(e,t||[])).next())}))},j=function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(c){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(o=0)),o;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){o.label=l[1];break}if(6===l[0]&&o.label<a[1]){o.label=a[1],a=l;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(l);break}a[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}},U=function(e){return void 0===e&&(e=0),V(void 0,void 0,Promise,(function(){var t,n,r,a,i,o,l,c;return j(this,(function(u){switch(u.label){case 0:return[4,window.insights.chrome.auth.getToken()];case 1:return t=u.sent(),[4,fetch("/api/rhsm/v2/manifests?type=Satellite&offset=".concat(e),{headers:{Authorization:"Bearer ".concat(t)}})];case 2:if(200!=(n=u.sent()).status)throw new Error("Error fetching manifest data: ".concat(n.statusText));return[4,n.json()];case 3:return r=u.sent(),a=r.pagination,i=a.count,o=a.limit,l=r.body,i!==o?[3,5]:[4,U(e+o)];case 4:c=u.sent(),l.push.apply(l,c),u.label=5;case 5:return[2,l]}}))}))};const Z=function(){var e=(0,s.useQuery)("manifests",(function(){return V(void 0,void 0,Promise,(function(){return j(this,(function(e){switch(e.label){case 0:return[4,U()];case 1:return[2,(t=e.sent(),t.filter((function(e){return parseInt(e.version)>=6})))]}var t}))}))})),t=e.isLoading,n=e.isFetching,r=e.error,c=e.data,m=(0,s.useQueryClient)().getQueryData("user");return a().createElement(a().Fragment,null,a().createElement(o.Z,null,a().createElement(l.TextContent,null,a().createElement(l.Text,{component:"h1",className:"pf-c-title"},"Manifests"),a().createElement(l.Text,{component:"p"},"Export subscriptions to your on-premise subscription management application."," ",a().createElement(p,{href:"https://access.redhat.com/documentation/en-us/subscription_central/2023/html/creating_and_managing_manifests_for_a_connected_satellite_server/index"},"Learn more about creating and managing manifests for a connected Satellite Server")))),a().createElement(i.ZP,null,a().createElement(a().Fragment,null,t&&!r&&a().createElement(u.qb,null),!t&&!r&&a().createElement(Q,{data:c,user:m,isFetching:n}),r&&a().createElement(L.Z,null))))}}}]);