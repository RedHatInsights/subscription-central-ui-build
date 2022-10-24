"use strict";(self.webpackChunksubscription_central=self.webpackChunksubscription_central||[]).push([[659],{7696:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var a=n(2950),r=n.n(a),i=n(4748),o=n(123),l=n(3212),c=n(2160),s=n(5198),u=n(8767),m=function(e){return(0,u.useQuery)(["manifestEntitlements",e],(function(){return function(e){return t=void 0,n=void 0,r=function(){var t;return function(e,t){var n,a,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((r=(r=o.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}(this,(function(n){switch(n.label){case 0:return[4,window.insights.chrome.auth.getToken()];case 1:return t=n.sent(),[2,fetch("/api/rhsm/v2/manifests/".concat(e,"?include=entitlements"),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){if(200!=e.status)throw new Error("Failed to fetch manifest entitlements: ".concat(e.statusText));return e.json()}))]}}))},new((a=void 0)||(a=Promise))((function(e,i){function o(e){try{c(r.next(e))}catch(e){i(e)}}function l(e){try{c(r.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,l)}c((r=r.apply(t,n||[])).next())}));var t,n,a,r}(e)}))};const f=function(e){var t,n=e.entitlementsRowRef,i=e.uuid,o=m(i),l=o.isError,u=o.isSuccess,f=o.isLoading,d=o.data,h=null===(t=null==d?void 0:d.body)||void 0===t?void 0:t.entitlementsAttached;(0,a.useEffect)((function(){(null==n?void 0:n.current)&&(n.current.scrollIntoView({behavior:"smooth",block:"center"}),n.current.focus({preventScroll:!0}))}),[u]);var p=function(e){if(!e)return"";var t=e.substr(0,4),n=e.substr(5,2),a=e.substr(8,2);return"".concat(t,"-").concat(n,"-").concat(a)},b=[];return(null==h?void 0:h.value)&&(b=null==h?void 0:h.value.map((function(e){var t=p(e.startDate),n=p(e.endDate);return{subscriptionName:e.subscriptionName,sku:e.sku,contractNumber:e.contractNumber,entitlementQuantity:e.entitlementQuantity,startDate:t,endDate:n}}))),r().createElement(r().Fragment,null,f&&!l&&r().createElement("div",{className:"sub-entitlement-list-loading-container"},r().createElement(s.qb,null)),u&&!h.valid&&r().createElement("div",{className:"sub-no-entitlements-reason"},r().createElement("p",{tabIndex:u?0:-1,ref:n},h.reason)),u&&h.valid&&r().createElement(c.TableComposable,{ref:n,"aria-label":"Allocations table",variant:"compact",borders:!1,isNested:!0,className:"sub-c-table-manifests-entitlement-list",ouiaId:"entitlementTable/".concat(i),ouiaSafe:!0},r().createElement(c.Thead,null,r().createElement(c.Tr,{ouiaId:"entitlementTable/".concat(i,"/head"),ouiaSafe:!0},r().createElement(c.Th,null,"Subscription name"),r().createElement(c.Th,null,"SKU"),r().createElement(c.Th,null,"Contract number"),r().createElement(c.Th,null,"Quantity"),r().createElement(c.Th,null,"Start date"),r().createElement(c.Th,null,"End date"))),r().createElement(c.Tbody,null,b.map((function(e,t){return r().createElement(c.Tr,{key:t,ouiaId:"entitlementTable/".concat(i,"/row").concat(t),ouiaSafe:!0},r().createElement(c.Td,null,e.subscriptionName),r().createElement(c.Td,null,e.sku),r().createElement(c.Td,null,e.contractNumber),r().createElement(c.Td,null,e.entitlementQuantity),r().createElement(c.Td,null,e.startDate),r().createElement(c.Td,null,e.endDate))})))),l&&"Something went wrong.  Please refresh the page and try again.")};var d=n(7673),h=n(470);const p=function(e){var t=e.href,n=e.children;return r().createElement(l.Button,{variant:"link",component:"a",href:t,target:"_blank",isInline:!0,icon:r().createElement(h.ZP,null),iconPosition:"right"},n)},b=function(){return r().createElement(r().Fragment,null,r().createElement(l.Popover,{"aria-label":"Learn more about Simple Content Access",headerContent:"Simple Content Access",bodyContent:r().createElement("p",null,"Simple content access is a set of capabilities that enables a change in the way Red Hat manages its subscription and entitlement enforcement model. When enabled, you are allowed to consume content on your systems without strict entitlement enforcement."),footerContent:r().createElement(p,{href:"https://access.redhat.com/documentation/en-us/subscription_central/2020-10/html/getting_started_with_subscription_watch_with_simple_content_access/assembly-activating-simplecontent#con-what-is-simplecontent_assembly-simplecontent-ctxt"},"Learn more about enabling simple content access on an existing Satellite allocation and manifest")},r().createElement(d.pT,{className:"sca-more-info-icon","data-testid":"sca-more-info-icon",onClick:function(e){e.stopPropagation()}})))};var E=n(1249),v=n.n(E),g=function(e,t){return e.filter((function(e){return(e.name||"").toLowerCase().includes(t.toLowerCase().trim())||(e.version||"").toLowerCase().includes(t.toLowerCase().trim())||(e.uuid||"").toLowerCase().includes(t.toLowerCase().trim())}))},y=function(e,t){return g(e,t).length},w=function(e){return e.split(".").map((function(e){return+e+1e5})).join(".")},S=function(e,t,n,a,i,o,l,s,u,m){var d=function(e,t,n,a,r,i){var o=(n-1)*a,l=o+a;return function(e,t,n,a){var r=function(e,t){return g(e,t).map((function(e){var t=e.simpleContentAccess||"disabled",n=v().coerce(e.version),a=v().coerce("6.3");return v().lt(n,a)&&(t="disallowed"),{name:e.name,version:e.version,scaStatus:t,uuid:e.uuid}}))}(e,t),i=function(e,t,n){var a=n===c.SortByDirection.desc?-1:1;return e.sort((function(e,n){var r="version"==t?w(e.version):e[t].toLowerCase(),i="version"==t?w(n.version):n[t].toLowerCase();return r<i?-1*a:r>i?1*a:0}))}(r,n,a);return i}(e,t,r,i).slice(o,l)}(e,n,a,i,u,m),h=[];return d.forEach((function(e,t){var n=o[e.uuid]||!1,a={parent:2*(t+1)-2,content:n?r().createElement(f,{uuid:e.uuid,entitlementsRowRef:s[t]}):""};h.push({isOpen:n,cells:e,details:a})})),h},C=n(5841),T=function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{c(a.next(e))}catch(e){i(e)}}function l(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((a=a.apply(e,t||[])).next())}))},x=function(e,t){var n,a,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((r=(r=o.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},k=function(e){return T(void 0,void 0,void 0,(function(){var t;return x(this,(function(n){switch(n.label){case 0:return[4,window.insights.chrome.auth.getToken()];case 1:return t=n.sent(),[2,fetch("/api/rhsm/v2/manifests/".concat(e,"/export"),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){if(200!=e.status)throw new Error("Failed to trigger export: ".concat(e.statusText));return e.json()}))]}}))}))},D=function(e,t){return T(void 0,void 0,void 0,(function(){var n,a;return x(this,(function(r){switch(r.label){case 0:return[4,window.insights.chrome.auth.getToken()];case 1:return n=r.sent(),[4,fetch("/api/rhsm/v2/manifests/".concat(e,"/exportJob/").concat(t),{headers:{Authorization:"Bearer ".concat(n)}})];case 2:return 200!==(a=r.sent()).status?[3,3]:[2,a.json()];case 3:return 202!==a.status&&404!==a.status?[3,5]:[4,(5e3,new Promise((function(e){return setTimeout(e,5e3)})))];case 4:return r.sent(),[2,D(e,t)];case 5:throw new Error("Error fetching status of exported manifest")}}))}))},I=function(e,t){return T(void 0,void 0,void 0,(function(){var n;return x(this,(function(a){switch(a.label){case 0:return[4,window.insights.chrome.auth.getToken()];case 1:return n=a.sent(),[2,fetch("/api/rhsm/v2/manifests/".concat(e,"/export/").concat(t),{headers:{Authorization:"Bearer ".concat(n),"Content-Type":"application/zip"}}).then((function(e){if(200!=e.status)throw new Error("Could not download manifest: ".concat(e.statusText));return e.blob()}))]}}))}))},L=function(){return(0,u.useMutation)((function(e){return t=e.uuid,T(void 0,void 0,void 0,(function(){var e,n;return x(this,(function(a){switch(a.label){case 0:return[4,k(t)];case 1:return e=a.sent(),[4,D(t,e.body.exportJobID)];case 2:return n=a.sent(),[4,I(t,n.body.exportID)];case 3:return[2,a.sent()]}}))}));var t}))};const A=n(1084).Z;var N=n(5984);const P=function(e){var t=e.isExpanded,n=e.titleRef,i=e.drawerRef,o=e.uuid,c=e.onCloseClick,f=e.exportManifest,d=e.exportManifestButtonIsDisabled,h=e.openCurrentEntitlementsListFromPanel,p=e.deleteManifest,E=m(o),v=E.data,g=E.isLoading,y=E.isFetching,w=E.isSuccess,S=E.isError,C=(0,u.useQueryClient)().getQueryData("user");(0,a.useEffect)((function(){!0===t&&(T(),x())}),[t,w,g]);var T=function(){(null==n?void 0:n.current)&&n.current.scrollIntoView({behavior:"smooth",block:"start"})},x=function(){(null==i?void 0:i.current)&&i.current.focus({preventScroll:!0})},k=function(){var e=v.body,t=e.uuid,n=e.name;f(t,n),c()},D=function(){return r().createElement("div",{className:"sub-manifest-detail-drawer-loading","aria-label":"Loading Manifest Details",tabIndex:g?0:-1,ref:i},r().createElement(s.qb,null))},I=function(){return r().createElement(r().Fragment,null,r().createElement("p",{className:"sub-manifest-details-delete-text"},"Deleting a subscription allocation is ",r().createElement("strong",null,"STRONGLY")," discouraged. This action should only be taken in extreme circumstances or for debugging purposes"),r().createElement(l.Button,{variant:"tertiary",onClick:function(){p(o)},isDisabled:!C.canWriteManifests},"Delete manifest"))},L=function(){if(!(null==v?void 0:v.body))return r().createElement(N.Z,null);var e=v.body,t=e.uuid,n=e.name,a=e.version,o=e.createdDate,c=e.createdBy,s=e.lastModified,u=e.entitlementsAttachedQuantity,m=e.simpleContentAccess,f=function(e){return new Date(e).toLocaleString("en-US",{month:"long",year:"numeric",day:"2-digit",timeZone:"America/New_York"})};return r().createElement("div",null,r().createElement("h3",{tabIndex:w?0:-1,ref:i},n),r().createElement("h4",null,"Details"),r().createElement(l.Grid,null,r().createElement(l.GridItem,{span:6},r().createElement("strong",null,"Name")),r().createElement(l.GridItem,{span:6},n),r().createElement(l.GridItem,{span:6},r().createElement("strong",null,"Type")),r().createElement(l.GridItem,{span:6},"Satellite ",a),r().createElement(l.GridItem,{span:6},r().createElement("strong",null,"UUID")),r().createElement(l.GridItem,{span:6},t)),r().createElement("h4",null,"Subscriptions"),r().createElement(l.Grid,null,r().createElement(l.GridItem,{span:6},r().createElement("strong",null,"Simple content access",r().createElement(b,null))),r().createElement(l.GridItem,{span:6},!0===C.isSCACapable?m:"administratively disabled"),r().createElement(l.GridItem,{span:6},r().createElement("strong",null,"Quantity")),r().createElement(l.GridItem,{span:6},r().createElement(l.Button,{variant:"link",onClick:h,className:"sub-c-button-manifest-details-open-entitlements"},u))),r().createElement("h4",null,"History"),r().createElement(l.Grid,null,r().createElement(l.GridItem,{span:6},r().createElement("strong",null,"Created")),r().createElement(l.GridItem,{span:6},f(o)),r().createElement(l.GridItem,{span:6},r().createElement("strong",null,"Created by")),r().createElement(l.GridItem,{span:6},c),r().createElement(l.GridItem,{span:6},r().createElement("strong",null,"Last modified date")),r().createElement(l.GridItem,{span:6},f(s))),r().createElement(l.Button,{variant:"tertiary",onClick:k,isDisabled:d},"Export manifest"),r().createElement(I,null))};return r().createElement(l.DrawerPanelContent,{className:"sub-c-drawer__panel-manifest-details"},r().createElement(l.DrawerHead,null,r().createElement((function(){return!0===S?r().createElement(N.Z,null):!0===g||!0===y?r().createElement(D,null):!0===w?r().createElement(L,null):void 0}),null),r().createElement(l.DrawerActions,null,r().createElement(l.DrawerCloseButton,{onClick:function(){c()}}))))};var G=function(){var e=(0,u.useQueryClient)();return(0,u.useMutation)((function(e){return function(e){return t=void 0,n=void 0,r=function(){var t;return function(e,t){var n,a,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((r=(r=o.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}(this,(function(n){switch(n.label){case 0:return[4,window.insights.chrome.auth.getToken()];case 1:return t=n.sent(),[2,fetch("/api/rhsm/v2/manifests/".concat(e,"?force=true"),{method:"DELETE",headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){if(204!=e.status)throw new Error("Status Code ".concat(e.status,".  Error deleting manifest: ").concat(e.statusText,"."))}))]}}))},new((a=void 0)||(a=Promise))((function(e,i){function o(e){try{c(r.next(e))}catch(e){i(e)}}function l(e){try{c(r.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,l)}c((r=r.apply(t,n||[])).next())}));var t,n,a,r}(e)}),{onSuccess:function(t,n){e.setQueryData("manifests",(function(e){return e.filter((function(e){return e.uuid!=n}))}))}})};const M=function(e){var t=e.handleModalToggle,n=e.onSuccess,a=e.isOpen,i=e.name,o=e.uuid,c=r().useState(!1),s=c[0],u=c[1],m=(0,C.Z)(),f=m.addSuccessNotification,d=m.addErrorNotification,h=G(),p=h.isError,b=h.isLoading,E=h.isSuccess,v=h.mutate,g=h.reset,y=E||p,w=function(e,t){u(t.target.checked)},S=function(){t(),u(!1)};return E?(n(),f("Manifest ".concat(i," deleted"))):p&&d("Something went wrong. Please try again"),y&&(S(),g()),r().createElement(l.Modal,{isOpen:a,onClose:S,title:b?"Deleting ".concat(i,"..."):"Delete ".concat(i),variant:l.ModalVariant.small,titleIconVariant:"warning",actions:b?[]:[r().createElement(l.Button,{key:"cancel",variant:"link",onClick:S},"NO, CANCEL"),r().createElement(l.Button,{key:"confirm",variant:"danger",isDisabled:!s,onClick:function(){return v(o)}},"YES, DELETE")]},r().createElement((function(){return b?r().createElement(l.EmptyState,null,r().createElement(l.EmptyStateIcon,{variant:"container",component:l.Spinner})):r().createElement(l.TextContent,null,r().createElement(l.Text,{component:l.TextVariants.p},"Deleting a manifest is STRONGLY discouraged. Deleting a manifest will:"),r().createElement(l.List,null,r().createElement(l.ListItem,null,"Delete all subscriptions that are attached to running hosts."),r().createElement(l.ListItem,null,"Delete all subscriptions attached to activation keys."),r().createElement(l.ListItem,null,"Disable Red Hat Insights."),r().createElement(l.ListItem,null,"Require you to upload the manifest and re-attach subscriptions to hosts and activation keys.")),r().createElement(l.Text,{component:l.TextVariants.p},r().createElement("strong",null,"Caution: this operation is permanent and cannot be undone.")),r().createElement(l.Checkbox,{label:"Are you sure you want to delete this manifest?",isChecked:s,id:"confirmation_checkbox",onChange:w}))}),null))};var _=n(4564),B=function(){return B=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},B.apply(this,arguments)},F=function(){var e=(0,u.useQueryClient)();return(0,u.useMutation)((function(e){return i=e,t=void 0,n=void 0,r=function(){var e,t,n,a;return function(e,t){var n,a,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((r=(r=o.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}(this,(function(r){switch(r.label){case 0:return e=i.uuid,t=i.newSCAStatus,[4,window.insights.chrome.auth.getToken()];case 1:return n=r.sent(),a={simpleContentAccess:t},[2,fetch("/api/rhsm/v2/manifests/".concat(e),{method:"PUT",headers:{Authorization:"Bearer ".concat(n)},body:JSON.stringify(a)}).then((function(e){if(204!==e.status)throw new Error("Status Code ".concat(e.status,".  Error updating SCA status: ").concat(e.statusText,".  "));return{success:!0,status:e.status}})).catch((function(e){console.error(e)}))]}}))},new((a=void 0)||(a=Promise))((function(e,i){function o(e){try{c(r.next(e))}catch(e){i(e)}}function l(e){try{c(r.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,l)}c((r=r.apply(t,n||[])).next())}));var t,n,a,r,i}),{onSuccess:function(t,n){if(t){var a=n.uuid,r=n.newSCAStatus;!function(e,t,n){var a=e.getQueryData("manifests").map((function(e){if(e.uuid===t){var a=B({},e);return a.simpleContentAccess=n,a}return e}));e.setQueryData("manifests",a)}(e,a,r),function(e,t,n){var a=e.getQueryData(["manifestEntitlements",t]);if(a){var r={body:B(B({},a.body),{simpleContentAccess:n})};e.setQueryData(["manifestEntitlements",t],r)}}(e,a,r)}}})};const R=function(e){var t=e.scaStatus,n=e.uuid,a=e.user,i="enabled"===t.toLowerCase(),o=F(),c=o.data,s=o.mutate,u=o.isLoading,m=o.isError,f=o.isSuccess,d=function(){!function(e,t){var n="enabled"===t.toLowerCase()?"disabled":"enabled";s({uuid:e,newSCAStatus:n})}(n,t)};return!0===m||f&&!c?r().createElement((function(){return r().createElement(r().Fragment,null,r().createElement(_.ZP,{color:"var(--pf-global--danger-color--100)",className:"sca-status-error-icon"}),r().createElement("span",{className:"sca-status-error-msg"},"Something went wrong. Please refresh the page and try again."))}),null):u?r().createElement((function(){return r().createElement(l.Spinner,{size:"lg",className:"sca-status-spinner"})}),null):"disallowed"==t?r().createElement((function(){return r().createElement("p",null,"N/A")}),null):r().createElement((function(){return r().createElement(l.Switch,{id:"sca-status-switch-".concat(n),"data-testid":"sca-status-switch","aria-label":"SCA Status for this Manifest is ".concat(t),isChecked:i,onChange:d,label:"Enabled",labelOff:"Disabled",isDisabled:!a.canWriteManifests})}),null)};var O=function(){return O=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},O.apply(this,arguments)};const Q=function(e){var t=e.data,n=e.isFetching,i=e.user,o=(0,a.useState)(1),u=o[0],m=o[1],f=(0,a.useState)(10),d=f[0],h=f[1],p=(0,a.useState)(""),E=p[0],v=p[1],g=(0,a.useState)({index:0,direction:c.SortByDirection.asc}),w=g[0],T=g[1],x=(0,a.useState)({}),k=x[0],D=x[1],I=(0,a.useState)(""),N=I[0],G=I[1],_=(0,a.useState)(!1),B=_[0],F=_[1],Q=(0,a.useState)(null),V=Q[0],j=Q[1],U=(0,a.useState)(!1),Z=U[0],z=U[1],W=(0,a.useState)(""),q=W[0],K=W[1],H=(0,a.useState)(""),Y=H[0],J=H[1],X=(0,a.useState)(!1),$=X[0],ee=X[1],te=(0,a.useState)(""),ne=te[0],ae=te[1],re=(0,a.useState)(""),ie=re[0],oe=re[1],le=(0,a.useRef)(null),ce=(0,a.useRef)(null),se=new Array(10).fill(null).map((function(){return(0,a.useRef)(null)})),ue=(0,C.Z)(),me=ue.addInfoNotification,fe=ue.addSuccessNotification,de=ue.addErrorNotification,he=L(),pe=he.data,be=he.mutate,Ee=he.isLoading,ve=he.isSuccess,ge=he.isError,ye=[],we=function(){F(!1),G("")},Se=function(e,t){h(t),m(1)},Ce=function(e,t){m(t),Ae()},Te=function(){v(""),m(1),Ae()},xe=function(e,t,n){T({index:t,direction:n}),m(1),Ae()},ke=function(){z(!Z)},De=function(e){K(e),J(function(e,t){var n;return null===(n=e.find((function(e){return e.uuid==t})))||void 0===n?void 0:n.name}(t,e)),ke()},Ie=function(e,t){!function(e,t){G(e),j(t),F(!0),(null==le?void 0:le.current)&&le.current.scrollIntoView({behavior:"smooth",block:"start"}),(null==ce?void 0:ce.current)&&ce.current.focus({preventScroll:!0})}(e,t)},Le=function(e,t){var n=O({},k);n[e]=t,D(n)},Ae=function(){D({})},Ne=function(e,t){ae(t),ee(!0),be({uuid:e});var n=me("Manifest ".concat(t," exporting. This may take some time. Please wait."),{hasTimeout:!1});oe(n)};if(ve&&$){var Pe=window.URL.createObjectURL(pe);fe("Manifest ".concat(ne," exported"),{hasTimeout:!1,alertLinkHref:Pe,alertLinkText:"Download manifest",alertLinkIsDownload:!0,keyOfAlertToReplace:ie}),oe(""),ee(!1)}ge&&$&&(de("Something went wrong. Please refresh the page and try again.",{hasTimeout:!1,keyOfAlertToReplace:ie}),oe(""),ee(!1));var Ge=function(e){return void 0===e&&(e=l.PaginationVariant.top),r().createElement(l.Pagination,{isCompact:e==l.PaginationVariant.top,isDisabled:n,itemCount:y(t,E),perPage:d,page:u,onSetPage:Ce,onPerPageSelect:Se,variant:e})};return r().createElement(r().Fragment,null,0===(null==t?void 0:t.length)&&i.canWriteManifests&&r().createElement(s.s3,{user:i}),((null==t?void 0:t.length)>0||!i.canWriteManifests)&&r().createElement(l.Drawer,{isExpanded:B,className:"sub-c-drawer-satellite-manifest"},r().createElement(l.DrawerContent,{panelContent:N?r().createElement(P,{uuid:N,exportManifest:Ne,exportManifestButtonIsDisabled:Ee,onCloseClick:we,isExpanded:B,titleRef:le,drawerRef:ce,openCurrentEntitlementsListFromPanel:function(){we(),Le(N,!0);var e=se[V];(null==e?void 0:e.current)&&e.current.scrollIntoView({behavior:"smooth",block:"center"})},deleteManifest:De}):""},r().createElement(l.DrawerContentBody,null,r().createElement(l.PageSection,{variant:l.PageSectionVariants.light},r().createElement(l.Flex,{direction:{default:"column",md:"row"},justifyContent:{default:"justifyContentSpaceBetween"}},r().createElement(l.FlexItem,null,r().createElement(l.Split,{hasGutter:!0},t.length>0&&r().createElement(l.SplitItem,{isFilled:!0},r().createElement(l.SearchInput,{placeholder:"Filter by name, version or UUID",value:E,onChange:function(e){v(e),m(1),Ae()},onClear:Te})),r().createElement(l.SplitItem,null,r().createElement(A,{user:i})))),r().createElement(l.FlexItem,{align:{default:"alignRight"}},Ge()))),r().createElement(c.TableComposable,{"aria-label":"Satellite Manifest Table",variant:"compact",ouiaId:"manifestTable",ouiaSafe:!0},r().createElement(c.Thead,null,r().createElement(c.Tr,{ouiaId:"manifestTable/head",ouiaSafe:!0},r().createElement(c.Th,null),function(e){var t=[{label:"Name",sortKey:"name"},{label:"Version",sortKey:"version"},{label:r().createElement(r().Fragment,{key:"0"},"Simple Content Access",r().createElement(b,null)),sortKey:"scaStatus"},{label:"UUID",sortKey:"uuid"}];return!1===e.isSCACapable&&t.splice(2,1),t}(i).map((function(e,t){return ye.push(e.sortKey),r().createElement(c.Th,{key:t,sort:(n=t,{sortBy:{index:w.index,direction:w.direction,defaultDirection:c.SortByDirection.asc},onSort:xe,columnIndex:n})},e.label);var n})),r().createElement(c.Td,null))),(n?[]:S(t,0,E,u,d,k,0,se,ye[w.index],w.direction)).map((function(e,t){var n,a,o=e.cells,s=ye.length+2;return r().createElement(c.Tbody,{key:t,isExpanded:e.isOpen},r().createElement(c.Tr,{ouiaId:"manifestTable/row".concat(t),ouiaSafe:!0},r().createElement(c.Td,{expand:{rowIndex:t,isExpanded:e.isOpen,onToggle:function(){return e=o.uuid,void Le(e,!k[e]);var e}}}),r().createElement(c.Td,null,r().createElement(l.Button,{"data-testid":"expand-details-button-".concat(t),variant:"link",onClick:function(){return Ie(o.uuid,t)}},o.name)),r().createElement(c.Td,null,o.version),i.isSCACapable&&r().createElement(c.Td,null,r().createElement(R,{scaStatus:o.scaStatus,uuid:o.uuid,user:i})),r().createElement(c.Td,null,o.uuid),r().createElement(c.Td,null,r().createElement(c.ActionsColumn,{items:(n=o.uuid,a=o.name,[{title:"Export",disabled:!1,onClick:function(){Ne(n,a)},variant:"default"},{title:"Delete",disabled:!i.canWriteManifests,onClick:i.canWriteManifests?function(){De(n)}:null,variant:"default"}])}))),r().createElement(c.Tr,{isExpanded:e.isOpen,ouiaId:"manifestTable/details".concat(t),ouiaSafe:!0},r().createElement(c.Td,{colSpan:s},r().createElement(c.ExpandableRowContent,null,e.details.content))))}))),r().createElement(l.PageSection,{variant:l.PageSectionVariants.light},0===y(t,E)&&t.length>0&&r().createElement(s.qx,{clearFilters:Te}),!n&&0===t.length&&r().createElement(s.s3,{user:i}),n&&r().createElement(s.qb,null),Ge(l.PaginationVariant.bottom))))),r().createElement(M,{uuid:q,name:Y,isOpen:Z,handleModalToggle:ke,onSuccess:we}))};var V=function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{c(a.next(e))}catch(e){i(e)}}function l(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((a=a.apply(e,t||[])).next())}))},j=function(e,t){var n,a,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((r=(r=o.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},U=function(e){return void 0===e&&(e=0),V(void 0,void 0,void 0,(function(){var t,n,a,r,i,o,l,c;return j(this,(function(s){switch(s.label){case 0:return[4,window.insights.chrome.auth.getToken()];case 1:return t=s.sent(),[4,fetch("/api/rhsm/v2/manifests?type=Satellite&offset=".concat(e),{headers:{Authorization:"Bearer ".concat(t)}})];case 2:if(200!=(n=s.sent()).status)throw new Error("Error fetching manifest data: ".concat(n.statusText));return[4,n.json()];case 3:return a=s.sent(),r=a.pagination,i=r.count,o=r.limit,l=a.body,i!==o?[3,5]:[4,U(e+o)];case 4:c=s.sent(),l.push.apply(l,c),s.label=5;case 5:return[2,l]}}))}))};const Z=function(){var e=(0,u.useQuery)("manifests",(function(){return V(void 0,void 0,void 0,(function(){return j(this,(function(e){switch(e.label){case 0:return[4,U()];case 1:return[2,(t=e.sent(),t.filter((function(e){return parseInt(e.version)>=6})))]}var t}))}))})),t=e.isLoading,n=e.isFetching,a=e.error,c=e.data,m=(0,u.useQueryClient)().getQueryData("user");return r().createElement(r().Fragment,null,r().createElement(o.Z,null,r().createElement(l.TextContent,null,r().createElement(l.Text,{component:"h1",className:"pf-c-title"},"Manifests"),r().createElement(l.Text,{component:"p"},"Export subscriptions to your on-premise subscription management application."," ",r().createElement(p,{href:"https://access.redhat.com/documentation/en-us/subscription_central/2021/html/creating_and_managing_manifests_for_a_connected_satellite_server/index"},"Learn more about creating and managing manifests for a connected Satellite Server")))),r().createElement(i.Z,null,r().createElement(r().Fragment,null,t&&!a&&r().createElement(s.qb,null),!t&&!a&&r().createElement(Q,{data:c,user:m,isFetching:n}),a&&r().createElement(N.Z,null))))}}}]);
//# sourceMappingURL=../sourcemaps/659.d1363323bdaaa33a98af270b958720f4.js.map