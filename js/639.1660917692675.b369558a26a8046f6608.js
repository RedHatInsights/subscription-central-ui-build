"use strict";(self.webpackChunksubscription_central=self.webpackChunksubscription_central||[]).push([[639],{71806:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var a=n(92950),r=n.n(a),i=n(63684),o=n(48716),l=n(39173),c=n(23212),u=n(22160),s=n(66189);const m=function(e){var t=e.entitlementsData,n=e.isLoading,i=e.isSuccess,o=e.isError,l=e.entitlementsRowRef,c=e.uuid;(0,a.useEffect)((function(){(null==l?void 0:l.current)&&(l.current.scrollIntoView({behavior:"smooth",block:"center"}),l.current.focus({preventScroll:!0}))}),[i]);var m=function(e){if(!e)return"";var t=e.substr(0,4),n=e.substr(5,2),a=e.substr(8,2);return"".concat(t,"-").concat(n,"-").concat(a)},f=[];return(null==t?void 0:t.value)&&(f=null==t?void 0:t.value.map((function(e){var t=m(e.startDate),n=m(e.endDate);return{subscriptionName:e.subscriptionName,sku:e.sku,contractNumber:e.contractNumber,entitlementQuantity:e.entitlementQuantity,startDate:t,endDate:n}}))),r().createElement(r().Fragment,null,n&&!o&&r().createElement("div",{className:"sub-entitlement-list-loading-container"},r().createElement(s.qb,null)),i&&!t.valid&&r().createElement("div",{className:"sub-no-entitlements-reason"},r().createElement("p",{tabIndex:i?0:-1,ref:l},t.reason)),i&&t.valid&&r().createElement(u.TableComposable,{ref:l,"aria-label":"Allocations table",variant:"compact",borders:!1,isNested:!0,className:"sub-c-table-manifests-entitlement-list",ouiaId:"entitlementTable/".concat(c),ouiaSafe:!0},r().createElement(u.Thead,null,r().createElement(u.Tr,{ouiaId:"entitlementTable/".concat(c,"/head"),ouiaSafe:!0},r().createElement(u.Th,null,"Subscription name"),r().createElement(u.Th,null,"SKU"),r().createElement(u.Th,null,"Contract number"),r().createElement(u.Th,null,"Quantity"),r().createElement(u.Th,null,"Start date"),r().createElement(u.Th,null,"End date"))),r().createElement(u.Tbody,null,f.map((function(e,t){return r().createElement(u.Tr,{key:t,ouiaId:"entitlementTable/".concat(c,"/row").concat(t),ouiaSafe:!0},r().createElement(u.Td,null,e.subscriptionName),r().createElement(u.Td,null,e.sku),r().createElement(u.Td,null,e.contractNumber),r().createElement(u.Td,null,e.entitlementQuantity),r().createElement(u.Td,null,e.startDate),r().createElement(u.Td,null,e.endDate))})))),o&&"Something went wrong.  Please refresh the page and try again.")};var f=n(88767),d=function(e){return(0,f.useQuery)(["manifestEntitlements",e],(function(){return function(e){return t=void 0,n=void 0,r=function(){var t;return function(e,t){var n,a,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((r=(r=o.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}(this,(function(n){switch(n.label){case 0:return[4,window.insights.chrome.auth.getToken()];case 1:return t=n.sent(),[2,fetch("/api/rhsm/v2/manifests/".concat(e,"?include=entitlements"),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()}))]}}))},new((a=void 0)||(a=Promise))((function(e,i){function o(e){try{c(r.next(e))}catch(e){i(e)}}function l(e){try{c(r.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,l)}c((r=r.apply(t,n||[])).next())}));var t,n,a,r}(e)}))};const h=function(e){var t,n=e.uuid,a=e.entitlementsRowRef,i=d(n),o=i.isLoading,l=i.isSuccess,c=i.isError,u=i.data;return r().createElement(m,{isLoading:o,isSuccess:l,isError:c,entitlementsData:null===(t=null==u?void 0:u.body)||void 0===t?void 0:t.entitlementsAttached,entitlementsRowRef:a,uuid:n})};var p=n(31369),b=n(50470);const E=function(e){var t=e.href,n=e.children;return r().createElement(c.Button,{variant:"link",component:"a",href:t,target:"_blank",isInline:!0,icon:r().createElement(b.ZP,null),iconPosition:"right"},n)},v=function(){return r().createElement(r().Fragment,null,r().createElement(c.Popover,{"aria-label":"Learn more about Simple Content Access",headerContent:"Simple Content Access",bodyContent:r().createElement("p",null,"Simple content access is a set of capabilities that enables a change in the way Red Hat manages its subscription and entitlement enforcement model. When enabled, you are allowed to consume content on your systems without strict entitlement enforcement."),footerContent:r().createElement(E,{href:"https://access.redhat.com/documentation/en-us/subscription_central/2020-10/html/getting_started_with_subscription_watch_with_simple_content_access/assembly-activating-simplecontent#con-what-is-simplecontent_assembly-simplecontent-ctxt"},"Learn more about enabling simple content access on an existing Satellite allocation and manifest")},r().createElement(p.ZP,{className:"sca-more-info-icon","data-testid":"sca-more-info-icon",onClick:function(e){e.stopPropagation()}})))};var y=n(81249),g=n.n(y),w=function(e,t){return e.filter((function(e){return(e.name||"").toLowerCase().includes(t.toLowerCase().trim())||(e.version||"").toLowerCase().includes(t.toLowerCase().trim())||(e.uuid||"").toLowerCase().includes(t.toLowerCase().trim())}))},S=function(e,t){return w(e,t).length},C=function(e,t,n,a,i,o,l,c,s,m){var f=function(e,t,n,a,r,i){var o=(n-1)*a,l=o+a;return function(e,t,n,a){var r=function(e,t){return w(e,t).map((function(e){var t=e.simpleContentAccess||"disabled",n=g().coerce(e.version),a=g().coerce("6.3");return g().lt(n,a)&&(t="disallowed"),{name:e.name,version:e.version,scaStatus:t,uuid:e.uuid}}))}(e,t),i=function(e,t,n){var a=n===u.SortByDirection.desc?-1:1;return e.sort((function(e,n){var r=e[t].toLowerCase(),i=n[t].toLowerCase();return r<i?-1*a:r>i?1*a:0}))}(r,n,a);return i}(e,t,r,i).slice(o,l)}(e,n,a,i,s,m),d=[];return f.forEach((function(e,t){var n=o[e.uuid]||!1,a={parent:2*(t+1)-2,content:n?r().createElement(h,{uuid:e.uuid,entitlementsRowRef:c[t]}):""};d.push({isOpen:n,cells:e,details:a})})),d},x=n(95841),T=function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{c(a.next(e))}catch(e){i(e)}}function l(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((a=a.apply(e,t||[])).next())}))},k=function(e,t){var n,a,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((r=(r=o.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},D=function(e){return T(void 0,void 0,void 0,(function(){var t;return k(this,(function(n){switch(n.label){case 0:return[4,window.insights.chrome.auth.getToken()];case 1:return t=n.sent(),[2,fetch("/api/rhsm/v2/manifests/".concat(e,"/export"),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()}))]}}))}))},I=function(e,t){return T(void 0,void 0,void 0,(function(){var n,a;return k(this,(function(r){switch(r.label){case 0:return[4,window.insights.chrome.auth.getToken()];case 1:return n=r.sent(),[4,fetch("/api/rhsm/v2/manifests/".concat(e,"/exportJob/").concat(t),{headers:{Authorization:"Bearer ".concat(n)}})];case 2:return 200!==(a=r.sent()).status?[3,3]:[2,a.json()];case 3:return 202!==a.status&&404!==a.status?[3,5]:[4,(5e3,new Promise((function(e){return setTimeout(e,5e3)})))];case 4:return r.sent(),[2,I(e,t)];case 5:throw new Error("Error fetching status of exported manifest")}}))}))},L=function(e,t){return T(void 0,void 0,void 0,(function(){var n;return k(this,(function(a){switch(a.label){case 0:return[4,window.insights.chrome.auth.getToken()];case 1:return n=a.sent(),[2,fetch("/api/rhsm/v2/manifests/".concat(e,"/export/").concat(t),{headers:{Authorization:"Bearer ".concat(n),"Content-Type":"application/zip"}}).then((function(e){return e.blob()}))]}}))}))},A=function(){return(0,f.useMutation)((function(e){return t=e.uuid,T(void 0,void 0,void 0,(function(){var e,n;return k(this,(function(a){switch(a.label){case 0:return[4,D(t)];case 1:return e=a.sent(),[4,I(t,e.body.exportJobID)];case 2:return n=a.sent(),[4,L(t,n.body.exportID)];case 3:return[2,a.sent()]}}))}));var t}))};const P=n(41084).Z,N=function(e){var t=e.isExpanded,n=e.titleRef,i=e.drawerRef,o=e.uuid,l=e.onCloseClick,u=e.exportManifest,m=e.exportManifestButtonIsDisabled,h=e.openCurrentEntitlementsListFromPanel,p=e.deleteManifest,b=d(o),E=b.data,y=b.isLoading,g=b.isFetching,w=b.isSuccess,S=b.isError,C=(0,f.useQueryClient)().getQueryData("user");(0,a.useEffect)((function(){!0===t&&(x(),T())}),[t,w,y]);var x=function(){(null==n?void 0:n.current)&&n.current.scrollIntoView({behavior:"smooth",block:"start"})},T=function(){(null==i?void 0:i.current)&&i.current.focus({preventScroll:!0})},k=function(){var e=E.body,t=e.uuid,n=e.name;u(t,n),l()},D=function(){return r().createElement("div",{className:"sub-manifest-detail-drawer-loading","aria-label":"Loading Manifest Details",tabIndex:y?0:-1,ref:i},r().createElement(s.qb,null))},I=function(){return r().createElement(r().Fragment,null,r().createElement("p",{className:"sub-manifest-details-delete-text"},"Deleting a subscription allocation is ",r().createElement("strong",null,"STRONGLY")," discouraged. This action should only be taken in extreme circumstances or for debugging purposes"),r().createElement(c.Button,{variant:"tertiary",onClick:function(){p(o)}},"Delete manifest"))},L=function(){if(!(null==E?void 0:E.body))return r().createElement(s.Bc,null);var e=E.body,t=e.uuid,n=e.name,a=e.version,o=e.createdDate,l=e.createdBy,u=e.lastModified,f=e.entitlementsAttachedQuantity,d=e.simpleContentAccess,p=function(e){return new Date(e).toLocaleString("en-US",{month:"long",year:"numeric",day:"numeric",timeZone:"America/New_York"})};return r().createElement("div",null,r().createElement("h3",{tabIndex:w?0:-1,ref:i},n),r().createElement("h4",null,"Details"),r().createElement(c.Grid,null,r().createElement(c.GridItem,{span:6},r().createElement("strong",null,"Name")),r().createElement(c.GridItem,{span:6},n),r().createElement(c.GridItem,{span:6},r().createElement("strong",null,"Type")),r().createElement(c.GridItem,{span:6},"Satellite ",a),r().createElement(c.GridItem,{span:6},r().createElement("strong",null,"UUID")),r().createElement(c.GridItem,{span:6},t)),r().createElement("h4",null,"Subscriptions"),r().createElement(c.Grid,null,r().createElement(c.GridItem,{span:6},r().createElement("strong",null,"Simple content access",r().createElement(v,null))),r().createElement(c.GridItem,{span:6},!0===C.isSCACapable?d:"administratively disabled"),r().createElement(c.GridItem,{span:6},r().createElement("strong",null,"Quantity")),r().createElement(c.GridItem,{span:6},r().createElement(c.Button,{variant:"link",onClick:h,className:"sub-c-button-manifest-details-open-entitlements"},f))),r().createElement("h4",null,"History"),r().createElement(c.Grid,null,r().createElement(c.GridItem,{span:6},r().createElement("strong",null,"Created")),r().createElement(c.GridItem,{span:6},p(o)),r().createElement(c.GridItem,{span:6},r().createElement("strong",null,"Created by")),r().createElement(c.GridItem,{span:6},l),r().createElement(c.GridItem,{span:6},r().createElement("strong",null,"Last modified date")),r().createElement(c.GridItem,{span:6},p(u))),r().createElement(c.Button,{variant:"tertiary",onClick:k,isDisabled:m},"Export manifest"),C.canWriteManifests&&r().createElement(I,null))};return r().createElement(c.DrawerPanelContent,{className:"sub-c-drawer__panel-manifest-details"},r().createElement(c.DrawerHead,null,r().createElement((function(){return!0===S?r().createElement(s.Bc,null):!0===y||!0===g?r().createElement(D,null):!0===w?r().createElement(L,null):void 0}),null),r().createElement(c.DrawerActions,null,r().createElement(c.DrawerCloseButton,{onClick:function(){l()}}))))};var G=function(){var e=(0,f.useQueryClient)();return(0,f.useMutation)((function(e){return function(e){return t=void 0,n=void 0,r=function(){var t;return function(e,t){var n,a,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((r=(r=o.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}(this,(function(n){switch(n.label){case 0:return[4,window.insights.chrome.auth.getToken()];case 1:return t=n.sent(),[2,fetch("/api/rhsm/v2/manifests/".concat(e,"?force=true"),{method:"DELETE",headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){if(204!=e.status)throw new Error("Status Code ".concat(e.status,".  Error deleting manifest: ").concat(e.statusText,"."))}))]}}))},new((a=void 0)||(a=Promise))((function(e,i){function o(e){try{c(r.next(e))}catch(e){i(e)}}function l(e){try{c(r.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,l)}c((r=r.apply(t,n||[])).next())}));var t,n,a,r}(e)}),{onSuccess:function(t,n){e.setQueryData("manifests",(function(e){return e.filter((function(e){return e.uuid!=n}))}))}})};const B=function(e){var t=e.handleModalToggle,n=e.onSuccess,a=e.isOpen,i=e.name,o=e.uuid,l=r().useState(!1),u=l[0],s=l[1],m=(0,x.Z)(),f=m.addSuccessNotification,d=m.addErrorNotification,h=G(),p=h.isError,b=h.isLoading,E=h.isSuccess,v=h.mutate,y=h.reset,g=E||p,w=function(){t(),s(!1)};return E?(n(),f("Manifest ".concat(i," deleted"))):p&&d("Something went wrong. Please try again"),g&&(w(),y()),r().createElement(c.Modal,{isOpen:a,onClose:w,title:b?"Deleting ".concat(i,"..."):"Delete ".concat(i),variant:c.ModalVariant.small,titleIconVariant:"warning",actions:b?[]:[r().createElement(c.Button,{key:"cancel",variant:"link",onClick:w},"NO, CANCEL"),r().createElement(c.Button,{key:"confirm",variant:"danger",isDisabled:!u,onClick:function(){return v(o)}},"YES, DELETE")]},b?r().createElement(c.EmptyState,null,r().createElement(c.EmptyStateIcon,{variant:"container",component:c.Spinner})):r().createElement(c.TextContent,null,r().createElement(c.Text,{component:c.TextVariants.p},"Deleting a manifest is STRONGLY discouraged. Deleting a manifest will:"),r().createElement(c.List,null,r().createElement(c.ListItem,null,"Delete all subscriptions that are attached to running hosts."),r().createElement(c.ListItem,null,"Delete all subscriptions attached to activation keys."),r().createElement(c.ListItem,null,"Disable Red Hat Insights."),r().createElement(c.ListItem,null,"Require you to upload the manifest and re-attach subscriptions to hosts and activation keys.")),r().createElement(c.Text,{component:c.TextVariants.p},r().createElement("strong",null,"Caution: this operation is permanent and cannot be undone.")),r().createElement(c.Checkbox,{label:"Are you sure you want to delete this manifest?",isChecked:u,id:"confirmation_checkbox",onChange:function(e,t){s(t.target.checked)}})))};var M=n(84564),R=function(){return R=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},R.apply(this,arguments)},_=function(){var e=(0,f.useQueryClient)();return(0,f.useMutation)((function(e){return i=e,t=void 0,n=void 0,r=function(){var e,t,n,a;return function(e,t){var n,a,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((r=(r=o.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}(this,(function(r){switch(r.label){case 0:return e=i.uuid,t=i.newSCAStatus,[4,window.insights.chrome.auth.getToken()];case 1:return n=r.sent(),a={simpleContentAccess:t},[2,fetch("/api/rhsm/v2/manifests/".concat(e),{method:"PUT",headers:{Authorization:"Bearer ".concat(n)},body:JSON.stringify(a)}).then((function(e){if(204!==e.status)throw new Error("Status Code ".concat(e.status,".  Error updating SCA status: ").concat(e.statusText,".  "));return{success:!0,status:e.status}})).catch((function(e){console.error(e)}))]}}))},new((a=void 0)||(a=Promise))((function(e,i){function o(e){try{c(r.next(e))}catch(e){i(e)}}function l(e){try{c(r.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,l)}c((r=r.apply(t,n||[])).next())}));var t,n,a,r,i}),{onSuccess:function(t,n){if(t){var a=n.uuid,r=n.newSCAStatus;!function(e,t,n){var a=e.getQueryData("manifests").map((function(e){if(e.uuid===t){var a=R({},e);return a.simpleContentAccess=n,a}return e}));e.setQueryData("manifests",a)}(e,a,r),function(e,t,n){var a=e.getQueryData(["manifestEntitlements",t]);if(a){var r={body:R(R({},a.body),{simpleContentAccess:n})};e.setQueryData(["manifestEntitlements",t],r)}}(e,a,r)}}})};const O=function(e){var t=e.scaStatus,n=e.uuid,a="enabled"===t.toLowerCase(),i=_(),o=i.data,l=i.mutate,u=i.isLoading,s=i.isError,m=i.isSuccess,f=function(){!function(e,t){var n="enabled"===t.toLowerCase()?"disabled":"enabled";l({uuid:e,newSCAStatus:n})}(n,t)};return!0===(!0===s||m&&!o)?r().createElement((function(){return r().createElement(r().Fragment,null,r().createElement(M.ZP,{color:"var(--pf-global--danger-color--100)",className:"sca-status-error-icon"}),r().createElement("span",{className:"sca-status-error-msg"},"Something went wrong. Please refresh the page and try again."))}),null):!0===u?r().createElement((function(){return r().createElement(c.Spinner,{size:"lg",className:"sca-status-spinner"})}),null):"disallowed"===t?r().createElement((function(){return r().createElement("p",null,"N/A")}),null):r().createElement((function(){return r().createElement(c.Switch,{id:"sca-status-switch-".concat(n),"data-testid":"sca-status-switch","aria-label":"SCA Status for this Manifest is ".concat(t),isChecked:a,onChange:f,label:"Enabled",labelOff:"Disabled"})}),null)};var F=function(){return F=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},F.apply(this,arguments)};const Q=function(e){var t=e.data,n=e.isFetching,i=e.user,o=(0,a.useState)(1),l=o[0],m=o[1],f=(0,a.useState)(10),d=f[0],h=f[1],p=(0,a.useState)(""),b=p[0],E=p[1],y=(0,a.useState)({index:0,direction:u.SortByDirection.asc}),g=y[0],w=y[1],T=(0,a.useState)({}),k=T[0],D=T[1],I=(0,a.useState)(""),L=I[0],G=I[1],M=(0,a.useState)(!1),R=M[0],_=M[1],Q=(0,a.useState)(null),V=Q[0],j=Q[1],U=(0,a.useState)(!1),Z=U[0],z=U[1],q=(0,a.useState)(""),K=q[0],W=q[1],H=(0,a.useState)(""),Y=H[0],J=H[1],X=(0,a.useState)(!1),$=X[0],ee=X[1],te=(0,a.useState)(""),ne=te[0],ae=te[1],re=(0,a.useState)(""),ie=re[0],oe=re[1],le=(0,a.useRef)(null),ce=(0,a.useRef)(null),ue=new Array(10).fill(null).map((function(){return(0,a.useRef)(null)})),se=(0,x.Z)(),me=se.addInfoNotification,fe=se.addSuccessNotification,de=se.addErrorNotification,he=A(),pe=he.data,be=he.mutate,Ee=he.isLoading,ve=he.isSuccess,ye=he.isError,ge=[],we=function(){_(!1),G("")},Se=function(e,t){h(t),m(1)},Ce=function(e,t){m(t),Ae()},xe=function(){E(""),m(1),Ae()},Te=function(e,t,n){w({index:t,direction:n}),m(1),Ae()},ke=function(){z(!Z)},De=function(e){W(e),J(function(e,t){var n;return null===(n=e.find((function(e){return e.uuid==t})))||void 0===n?void 0:n.name}(t,e)),ke()},Ie=function(e,t){!function(e,t){G(e),j(t),_(!0),(null==le?void 0:le.current)&&le.current.scrollIntoView({behavior:"smooth",block:"start"}),(null==ce?void 0:ce.current)&&ce.current.focus({preventScroll:!0})}(e,t)},Le=function(e,t){var n=F({},k);n[e]=t,D(n)},Ae=function(){D({})},Pe=function(e,t){ae(t),ee(!0),be({uuid:e});var n=me("Manifest ".concat(t," exporting. This may take some time. Please wait."),{hasTimeout:!1});oe(n)};if(ve&&$){var Ne=window.URL.createObjectURL(pe);fe("Manifest ".concat(ne," exported"),{hasTimeout:!1,alertLinkHref:Ne,alertLinkText:"Download manifest",alertLinkIsDownload:!0,keyOfAlertToReplace:ie}),oe(""),ee(!1)}ye&&$&&(de("Something went wrong. Please refresh the page and try again.",{hasTimeout:!1,keyOfAlertToReplace:ie}),oe(""),ee(!1));var Ge=function(e){return void 0===e&&(e=c.PaginationVariant.top),r().createElement(c.Pagination,{isCompact:e==c.PaginationVariant.top,isDisabled:n,itemCount:S(t,b),perPage:d,page:l,onSetPage:Ce,onPerPageSelect:Se,variant:e})};return r().createElement(r().Fragment,null,0===(null==t?void 0:t.length)&&i.canWriteManifests&&r().createElement(s.s3,null),((null==t?void 0:t.length)>0||!i.canWriteManifests)&&r().createElement(c.Drawer,{isExpanded:R,className:"sub-c-drawer-satellite-manifest"},r().createElement(c.DrawerContent,{panelContent:L?r().createElement(N,{uuid:L,exportManifest:Pe,exportManifestButtonIsDisabled:Ee,onCloseClick:we,isExpanded:R,titleRef:le,drawerRef:ce,openCurrentEntitlementsListFromPanel:function(){we(),Le(L,!0);var e=ue[V];(null==e?void 0:e.current)&&e.current.scrollIntoView({behavior:"smooth",block:"center"})},deleteManifest:De}):""},r().createElement(c.DrawerContentBody,null,r().createElement(c.PageSection,{variant:c.PageSectionVariants.light},r().createElement(c.Flex,{direction:{default:"column",md:"row"},justifyContent:{default:"justifyContentSpaceBetween"}},r().createElement(c.FlexItem,null,r().createElement(c.Split,{hasGutter:!0},t.length>0&&r().createElement(c.SplitItem,{isFilled:!0},r().createElement(c.SearchInput,{placeholder:"Filter by name, version or UUID",value:b,onChange:function(e){E(e),m(1),Ae()},onClear:xe})),!0===i.canWriteManifests&&r().createElement(c.SplitItem,null,r().createElement(P,null)))),r().createElement(c.FlexItem,{align:{default:"alignRight"}},Ge()))),r().createElement(u.TableComposable,{"aria-label":"Satellite Manifest Table",variant:"compact",ouiaId:"manifestTable",ouiaSafe:!0},r().createElement(u.Thead,null,r().createElement(u.Tr,{ouiaId:"manifestTable/head",ouiaSafe:!0},r().createElement(u.Th,null),function(e){var t=[{label:"Name",sortKey:"name"},{label:"Version",sortKey:"version"},{label:r().createElement(r().Fragment,{key:"0"},"Simple Content Access",r().createElement(v,null)),sortKey:"scaStatus"},{label:"UUID",sortKey:"uuid"}];return!1===e.isSCACapable&&t.splice(2,1),t}(i).map((function(e,t){return ge.push(e.sortKey),r().createElement(u.Th,{key:t,sort:(n=t,{sortBy:{index:g.index,direction:g.direction,defaultDirection:u.SortByDirection.asc},onSort:Te,columnIndex:n})},e.label);var n})),r().createElement(u.Td,null))),(n?[]:C(t,0,b,l,d,k,0,ue,ge[g.index],g.direction)).map((function(e,t){var n,a,o,l=e.cells,s=ge.length+2;return r().createElement(u.Tbody,{key:t,isExpanded:e.isOpen},r().createElement(u.Tr,{ouiaId:"manifestTable/row".concat(t),ouiaSafe:!0},r().createElement(u.Td,{expand:{rowIndex:t,isExpanded:e.isOpen,onToggle:function(){return e=l.uuid,void Le(e,!k[e]);var e}}}),r().createElement(u.Td,null,r().createElement(c.Button,{"data-testid":"expand-details-button-".concat(t),variant:"link",onClick:function(){return Ie(l.uuid,t)}},l.name)),r().createElement(u.Td,null,l.version),i.isSCACapable&&r().createElement(u.Td,null,r().createElement(O,{scaStatus:l.scaStatus,uuid:l.uuid})),r().createElement(u.Td,null,l.uuid),r().createElement(u.Td,null,r().createElement(u.ActionsColumn,{items:(n=l.uuid,a=l.name,o=[{title:"Export",onClick:function(){Pe(n,a)}}],i.canWriteManifests&&o.push({title:"Delete",onClick:function(){De(a)}}),o)}))),r().createElement(u.Tr,{isExpanded:e.isOpen,ouiaId:"manifestTable/details".concat(t),ouiaSafe:!0},r().createElement(u.Td,{colSpan:s},r().createElement(u.ExpandableRowContent,null,e.details.content))))}))),r().createElement(c.PageSection,{variant:c.PageSectionVariants.light},0===S(t,b)&&t.length>0&&r().createElement(s.qx,{clearFilters:xe}),!n&&0===t.length&&r().createElement(s.Ox,null),n&&r().createElement(s.qb,null),Ge(c.PaginationVariant.bottom))))),r().createElement(B,{uuid:K,name:Y,isOpen:Z,handleModalToggle:ke,onSuccess:we}))};var V=function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{c(a.next(e))}catch(e){i(e)}}function l(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((a=a.apply(e,t||[])).next())}))},j=function(e,t){var n,a,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((r=(r=o.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},U=function(e){return void 0===e&&(e=0),V(void 0,void 0,void 0,(function(){var t,n,a,r,i,o,l;return j(this,(function(c){switch(c.label){case 0:return[4,window.insights.chrome.auth.getToken()];case 1:return t=c.sent(),[4,fetch("/api/rhsm/v2/manifests?type=Satellite&offset=".concat(e),{headers:{Authorization:"Bearer ".concat(t)}})];case 2:return[4,c.sent().json()];case 3:return n=c.sent(),a=n.pagination,r=a.count,i=a.limit,o=n.body,r!==i?[3,5]:[4,U(e+i)];case 4:l=c.sent(),o.push.apply(o,l),c.label=5;case 5:return[2,o]}}))}))},Z=n(20167);const z=function(){var e=(0,f.useQuery)("manifests",(function(){return V(void 0,void 0,void 0,(function(){return j(this,(function(e){switch(e.label){case 0:return[4,U()];case 1:return[2,(t=e.sent(),t.filter((function(e){return parseInt(e.version)>=6})))]}var t}))}))})),t=e.isLoading,n=e.isFetching,a=e.error,c=e.data,u=(0,f.useQueryClient)().getQueryData("user");return r().createElement(r().Fragment,null,r().createElement(o.Z,null,r().createElement(l.Z,{title:"Manifests"}),r().createElement("p",null,"Export subscriptions to your on-premise subscription management application."," ",r().createElement(E,{href:"https://access.redhat.com/documentation/en-us/subscription_central/2021/html/creating_and_managing_manifests_for_a_connected_satellite_server/index"},"Learn more about creating and managing manifests for a connected Satellite Server"))),r().createElement(i.Z,null,r().createElement(r().Fragment,null,t&&!a&&r().createElement(s.qb,null),!t&&!a&&r().createElement(Q,{data:c,user:u,isFetching:n}),a&&r().createElement(Z.Z,null))))}}}]);
//# sourceMappingURL=../sourcemaps/639.0991bcc12548cd5bff4528ee3c0b359d.js.map