"use strict";(self.webpackChunksubscription_central=self.webpackChunksubscription_central||[]).push([[806],{71806:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Y});var r=n(92950),a=n.n(r),i=n(334),l=n(86350),o=n(48716),s=n(39173),c=n(23212),u=n(22160),m=n(66189);const f=function(e){var t=e.entitlementsData,n=e.isLoading,i=e.isSuccess,l=e.isError,o=e.entitlementsRowRef;(0,r.useEffect)((function(){(null==o?void 0:o.current)&&(o.current.scrollIntoView({behavior:"smooth",block:"center"}),o.current.focus({preventScroll:!0}))}),[i]);var s=[{title:"Subscription name",transforms:[u.nowrap]},{title:"SKU",transforms:[u.nowrap]},{title:"Contract number",transforms:[u.nowrap]},{title:"Quantity",transforms:[u.nowrap]},{title:"Start date",transforms:[u.nowrap]},{title:"End date",transforms:[u.nowrap]}],c=function(e){return e?e.substr(0,4)+"-"+e.substr(5,2)+"-"+e.substr(8,2):""},f=[];return(null==t?void 0:t.value)&&(f=null==t?void 0:t.value.map((function(e){var t=c(e.startDate),n=c(e.endDate);return[e.subscriptionName,e.sku,e.contractNumber,e.entitlementQuantity,t,n]}))),a().createElement(a().Fragment,null,n&&!l&&a().createElement("div",{className:"entitlement-list-loading-container"},a().createElement(m.qb,null)),i&&!t.valid&&a().createElement("div",{className:"no-entitlements-reason"},a().createElement("p",{tabIndex:i?0:-1,ref:o},t.reason)),i&&t.valid&&a().createElement("div",{ref:o},a().createElement(u.Table,{"aria-label":"Allocations table",cells:s,rows:f,borders:!1,className:"manifests_entitlement-list-table"},a().createElement(u.TableHeader,null),a().createElement(u.TableBody,null))),l&&"Something went wrong.  Please refresh the page and try again.")};var d=n(88767),p=n(36808),h=n.n(p),E=function(e){return(0,d.useQuery)(["manifestEntitlements",e],(function(){return function(e){var t=h().get("cs_jwt");return fetch("/api/rhsm/v2/manifests/"+e+"?include=entitlements",{headers:{Authorization:"Bearer "+t}}).then((function(e){return e.json()}))}(e)}))};const b=function(e){var t,n=e.uuid,r=e.entitlementsRowRef,i=E(n),l=i.isLoading,o=i.isSuccess,s=i.isError,c=i.data;return a().createElement(f,{isLoading:l,isSuccess:o,isError:s,entitlementsData:null===(t=null==c?void 0:c.body)||void 0===t?void 0:t.entitlementsAttached,entitlementsRowRef:r})};var v=n(84564),g=function(){return(g=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};const w=function(e){var t,n=e.scaStatus,r=e.uuid,i="enabled"===n.toLowerCase(),l=(t=(0,d.useQueryClient)(),(0,d.useMutation)((function(e){return n=(t=e).uuid,r=t.newSCAStatus,a=h().get("cs_jwt"),i={simpleContentAccess:r},fetch("/api/rhsm/v2/manifests/"+n,{method:"PUT",headers:{Authorization:"Bearer "+a},body:JSON.stringify(i)}).then((function(e){if(204!==e.status)throw new Error("Status Code "+e.status+".  Error updating SCA status: "+e.statusText+".  ");return{success:!0,status:e.status}})).catch((function(e){console.error(e)}));var t,n,r,a,i}),{onSuccess:function(e,n){if(e){var r=n.uuid,a=n.newSCAStatus;!function(e,t,n){var r=e.getQueryData("manifests").map((function(e){if(e.uuid===t){var r=g({},e);return r.simpleContentAccess=n,r}return e}));e.setQueryData("manifests",r)}(t,r,a),function(e,t,n){var r=e.getQueryData(["manifestEntitlements",t]);if(r){var a={body:g(g({},r.body),{simpleContentAccess:n})};e.setQueryData(["manifestEntitlements",t],a)}}(t,r,a)}}})),o=l.data,s=l.mutate,u=l.isLoading,m=l.isError,f=l.isSuccess,p=function(){!function(e,t){var n="enabled"===t.toLowerCase()?"disabled":"enabled";s({uuid:e,newSCAStatus:n})}(r,n)};return!0===(!0===m||f&&!o)?a().createElement((function(){return a().createElement(a().Fragment,null,a().createElement(v.ZP,{color:"var(--pf-global--danger-color--100)",className:"sca-status-error-icon"}),a().createElement("span",{className:"sca-status-error-msg"},"Something went wrong. Please refresh the page and try again."))}),null):!0===u?a().createElement((function(){return a().createElement(c.Spinner,{size:"lg",className:"sca-status-spinner"})}),null):"disallowed"===n?a().createElement((function(){return a().createElement("p",null,"N/A")}),null):a().createElement((function(){return a().createElement(c.Switch,{id:"sca-status-switch-"+r,"data-testid":"sca-status-switch","aria-label":"SCA Status for this Manifest is "+n,isChecked:i,onChange:p,label:"Enabled",labelOff:"Disabled"})}),null)};var y=n(31369),S=n(50470);const C=function(e){var t=e.href,n=e.children;return a().createElement(c.Button,{variant:"link",component:"a",href:t,target:"_blank",isInline:!0,icon:a().createElement(S.ZP,null),iconPosition:"right"},n)},x=function(){return a().createElement(a().Fragment,null,a().createElement(c.Popover,{"aria-label":"Learn more about Simple Content Access",headerContent:"Simple Content Access",bodyContent:a().createElement("p",null,"Simple content access is a set of capabilities that enables a change in the way Red Hat manages its subscription and entitlement enforcement model. When enabled, you are allowed to consume content on your systems without strict entitlement enforcement."),footerContent:a().createElement(C,{href:"https://access.redhat.com/documentation/en-us/subscription_central/2020-10/html/getting_started_with_subscription_watch_with_simple_content_access/assembly-activating-simplecontent#con-what-is-simplecontent_assembly-simplecontent-ctxt"},"Learn more about enabling simple content access on an existing Satellite allocation and manifest")},a().createElement(y.ZP,{className:"sca-more-info-icon","data-testid":"sca-more-info-icon",onClick:function(e){e.stopPropagation()}})))};var k=n(81249),D=n.n(k),I=function(e,t){for(var n=0,r=t.length,a=e.length;n<r;n++,a++)e[a]=t[n];return e},L=function(e){var t=[{title:"Name",transforms:[u.sortable],cellFormatters:[u.expandable]},{title:"Version",transforms:[u.sortable]},{title:a().createElement(a().Fragment,null,"Simple Content Access",a().createElement(x,null)),transforms:[u.sortable,(0,u.cellWidth)(20)]},{title:"UUID",transforms:[u.sortable]}];return!1===e.isSCACapable&&t.splice(2,1),t},A=function(e,t,n){return e.canWriteManifests?a().createElement(a().Fragment,{key:"scastatusswitch-"+n},a().createElement(w,{scaStatus:t,uuid:n})):t},T=function(e,t){return e.filter((function(e){return(e.name||"").toLowerCase().includes(t.toLowerCase().trim())||(e.version||"").toLowerCase().includes(t.toLowerCase().trim())||(e.uuid||"").toLowerCase().includes(t.toLowerCase().trim())}))},M=function(e,t){return T(e,t).length},P=function(e,t,n,r,i,l,o,s,m){var f=function(e,t,n,r,a){var i=(n-1)*r,l=i+r;return function(e,t,n){return function(e,t){var n=t.direction,r=t.index-1,a=n===u.SortByDirection.desc?-1:1;return e.sort((function(e,t){var n=e[r].toLowerCase(),i=t[r].toLowerCase();return n<i?-1*a:n>i?1*a:0}))}(function(e,t){return T(e,t).map((function(e){var t=e.simpleContentAccess||"disabled",n=D().coerce(e.version),r=D().coerce("6.3");return D().lt(n,r)&&(t="disallowed"),[e.name,e.version,t,e.uuid]}))}(e,t),n)}(e,t,a).slice(i,l)}(e,n,r,i,m),d=[];return f.forEach((function(e,n){var r=e[3],i=l[r]||!1,u=2*(n+1)-2,m=i?a().createElement(b,{uuid:r,entitlementsRowRef:s[n]}):"",f=function(e,t,n,r){var i=e[0],l=e[1],o=e[2],s=e[3],u=[a().createElement(a().Fragment,{key:"button-"+s},a().createElement(c.Button,{"data-testid":"expand-details-button-"+t,variant:"link",onClick:function(){return n(s,t)}},i)),l,A(r,o,s),s];return!1===r.isSCACapable&&u.splice(2,1),u}(e,n,o,t);d.push({isOpen:i,cells:I([],f)}),d.push({parent:u,fullWidth:!0,noPadding:!0,cells:[{title:m}]})})),d},B=n(95841),N=function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function l(e){try{s(r.next(e))}catch(e){i(e)}}function o(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,o)}s((r=r.apply(e,t||[])).next())}))},R=function(e,t){var n,r,a,i,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){l.label=i[1];break}if(6===i[0]&&l.label<a[1]){l.label=a[1],a=i;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(i);break}a[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}},G=function(e){var t=h().get("cs_jwt");return fetch("/api/rhsm/v2/manifests/"+e+"/export",{headers:{Authorization:"Bearer "+t}}).then((function(e){return e.json()}))},F=function(e,t){return N(void 0,void 0,void 0,(function(){var n,r;return R(this,(function(a){switch(a.label){case 0:return n=h().get("cs_jwt"),[4,fetch("/api/rhsm/v2/manifests/"+e+"/exportJob/"+t,{headers:{Authorization:"Bearer "+n}})];case 1:return 200!==(r=a.sent()).status?[3,2]:[2,r.json()];case 2:return 202!==r.status&&404!==r.status?[3,4]:[4,(5e3,new Promise((function(e){return setTimeout(e,5e3)})))];case 3:return a.sent(),[2,F(e,t)];case 4:throw new Error("Error fetching status of exported manifest")}}))}))},_=function(e,t){var n=h().get("cs_jwt");return fetch("/api/rhsm/v2/manifests/"+e+"/export/"+t,{headers:{Authorization:"Bearer "+n,"Content-Type":"application/zip"}}).then((function(e){return e.blob()}))},O=function(){return(0,d.useMutation)((function(e){return t=e.uuid,N(void 0,void 0,void 0,(function(){var e,n;return R(this,(function(r){switch(r.label){case 0:return[4,G(t)];case 1:return e=r.sent(),[4,F(t,e.body.exportJobID)];case 2:return n=r.sent(),[4,_(t,n.body.exportID)];case 3:return[2,r.sent()]}}))}));var t}))};const j=n(41084).Z,Q=function(e){var t=e.isExpanded,n=e.titleRef,i=e.drawerRef,l=e.uuid,o=e.onCloseClick,s=e.exportManifest,u=e.exportManifestButtonIsDisabled,f=e.openCurrentEntitlementsListFromPanel,p=e.deleteManifest,h=E(l),b=h.data,v=h.isLoading,g=h.isFetching,w=h.isSuccess,y=h.isError,S=(0,d.useQueryClient)().getQueryData("user");(0,r.useEffect)((function(){!0===t&&(C(),k())}),[t,w,v]);var C=function(){(null==n?void 0:n.current)&&n.current.scrollIntoView({behavior:"smooth",block:"start"})},k=function(){(null==i?void 0:i.current)&&i.current.focus({preventScroll:!0})},D=function(){var e=b.body,t=e.uuid,n=e.name;s(t,n),o()},I=function(){return a().createElement("div",{className:"manifest-detail-drawer-loading","aria-label":"Loading Manifest Details",tabIndex:v?0:-1,ref:i},a().createElement(m.qb,null))},L=function(){return a().createElement(a().Fragment,null,a().createElement("p",{className:"manifest-details-delete-text"},"Deleting a subscription allocation is ",a().createElement("strong",null,"STRONGLY")," discouraged. This action should only be taken in extreme circumstances or for debugging purposes"),a().createElement(c.Button,{variant:"tertiary",onClick:function(){p(l)}},"Delete manifest"))},A=function(){if(!(null==b?void 0:b.body))return a().createElement(m.Bc,null);var e=b.body,t=e.uuid,n=e.name,r=e.version,l=e.createdDate,o=e.createdBy,s=e.lastModified,d=e.entitlementsAttachedQuantity,p=e.simpleContentAccess,h=function(e){return new Date(e).toLocaleString("en-US",{month:"long",year:"numeric",day:"numeric",timeZone:"America/New_York"})};return a().createElement("div",{className:"manifest-details-content"},a().createElement("h3",{tabIndex:w?0:-1,ref:i},n),a().createElement("h4",null,"Details"),a().createElement(c.Grid,null,a().createElement(c.GridItem,{span:6},a().createElement("strong",null,"Name")),a().createElement(c.GridItem,{span:6},n),a().createElement(c.GridItem,{span:6},a().createElement("strong",null,"Type")),a().createElement(c.GridItem,{span:6},"Satellite ",r),a().createElement(c.GridItem,{span:6},a().createElement("strong",null,"UUID")),a().createElement(c.GridItem,{span:6},t)),a().createElement("h4",null,"Subscriptions"),a().createElement(c.Grid,null,a().createElement(c.GridItem,{span:6},a().createElement("strong",null,"Simple content access",a().createElement(x,null))),a().createElement(c.GridItem,{span:6},!0===S.isSCACapable?p:"administratively disabled"),a().createElement(c.GridItem,{span:6},a().createElement("strong",null,"Quantity")),a().createElement(c.GridItem,{span:6},a().createElement(c.Button,{variant:"link",onClick:f,className:"manifest-details-open-entitlements-button"},d))),a().createElement("h4",null,"History"),a().createElement(c.Grid,null,a().createElement(c.GridItem,{span:6},a().createElement("strong",null,"Created")),a().createElement(c.GridItem,{span:6},h(l)),a().createElement(c.GridItem,{span:6},a().createElement("strong",null,"Created by")),a().createElement(c.GridItem,{span:6},o),a().createElement(c.GridItem,{span:6},a().createElement("strong",null,"Last modified date")),a().createElement(c.GridItem,{span:6},h(s))),a().createElement(c.Button,{variant:"tertiary",onClick:D,isDisabled:u},"Export manifest"),S.canWriteManifests&&a().createElement(L,null))};return a().createElement(c.DrawerPanelContent,null,a().createElement(c.DrawerHead,null,a().createElement((function(){return!0===y?a().createElement(m.Bc,null):!0===v||!0===g?a().createElement(I,null):!0===w?a().createElement(A,null):void 0}),null),a().createElement(c.DrawerActions,null,a().createElement(c.DrawerCloseButton,{onClick:function(){o()}}))))};const U=function(e){var t,n=e.handleModalToggle,r=e.onSuccess,i=e.isOpen,l=e.name,o=e.uuid,s=a().useState(!1),u=s[0],m=s[1],f=(0,B.Z)(),p=f.addSuccessNotification,E=f.addErrorNotification,b=(t=(0,d.useQueryClient)(),(0,d.useMutation)((function(e){return function(e){var t=h().get("cs_jwt");return fetch("/api/rhsm/v2/manifests/"+e+"?force=true",{method:"DELETE",headers:{Authorization:"Bearer "+t}}).then((function(e){if(204!=e.status)throw new Error("Status Code "+e.status+".  Error deleting manifest: "+e.statusText+".")}))}(e)}),{onSuccess:function(e,n){t.setQueryData("manifests",(function(e){return e.filter((function(e){return e.uuid!=n}))}))}})),v=b.isError,g=b.isLoading,w=b.isSuccess,y=b.mutate,S=b.reset,C=w||v,x=function(){n(),m(!1)};return w?(r(),p("Manifest "+l+" deleted")):v&&E("Something went wrong. Please try again"),C&&(x(),S()),a().createElement(c.Modal,{isOpen:i,onClose:x,title:g?"Deleting "+l+"...":"Delete "+l,variant:c.ModalVariant.small,titleIconVariant:"warning",actions:g?[]:[a().createElement(c.Button,{key:"cancel",variant:"link",onClick:x},"NO, CANCEL"),a().createElement(c.Button,{key:"confirm",variant:"danger",isDisabled:!u,onClick:function(){return y(o)}},"YES, DELETE")]},g?a().createElement(c.EmptyState,null,a().createElement(c.EmptyStateIcon,{variant:"container",component:c.Spinner})):a().createElement(c.TextContent,null,a().createElement(c.Text,{component:c.TextVariants.p},"Deleting a manifest is STRONGLY discouraged. Deleting a manifest will:"),a().createElement(c.List,null,a().createElement(c.ListItem,null,"Delete all subscriptions that are attached to running hosts."),a().createElement(c.ListItem,null,"Delete all subscriptions attached to activation keys."),a().createElement(c.ListItem,null,"Disable Red Hat Insights."),a().createElement(c.ListItem,null,"Require you to upload the manifest and re-attach subscriptions to hosts and activation keys.")),a().createElement(c.Text,{component:c.TextVariants.p},a().createElement("strong",null,"Caution: this operation is permanent and cannot be undone.")),a().createElement(c.Checkbox,{label:"Are you sure you want to delete this manifest?",isChecked:u,id:"confirmation_checkbox",onChange:function(e,t){m(t.target.checked)}})))};var V=function(){return(V=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};const Z=function(e){var t=e.data,n=e.isFetching,i=e.user,l=(0,r.useState)(1),o=l[0],s=l[1],f=(0,r.useState)(10),d=f[0],p=f[1],h=(0,r.useState)(""),E=h[0],b=h[1],v=(0,r.useState)({index:1,direction:u.SortByDirection.asc}),g=v[0],w=v[1],y=(0,r.useState)({}),S=y[0],C=y[1],x=(0,r.useState)(""),k=x[0],D=x[1],I=(0,r.useState)(!1),A=I[0],T=I[1],N=(0,r.useState)(null),R=N[0],G=N[1],F=(0,r.useState)(!1),_=F[0],Z=F[1],z=(0,r.useState)(""),W=z[0],H=z[1],q=(0,r.useState)(""),Y=q[0],J=q[1],K=(0,r.useState)(!1),X=K[0],$=K[1],ee=(0,r.useState)(""),te=ee[0],ne=ee[1],re=(0,r.useState)(""),ae=re[0],ie=re[1],le=(0,r.useRef)(null),oe=(0,r.useRef)(null),se=new Array(10).fill(null).map((function(){return(0,r.useRef)(null)})),ce=(0,B.Z)(),ue=ce.addInfoNotification,me=ce.addSuccessNotification,fe=ce.addErrorNotification,de=O(),pe=de.data,he=de.mutate,Ee=de.isLoading,be=de.isSuccess,ve=de.isError,ge=function(){T(!1),D("")},we=function(e,t){p(t),s(1)},ye=function(e,t){s(t),De()},Se=function(){b(""),s(1),De()},Ce=function(){Z(!_)},xe=function(e){H(e),J(function(e,t){var n;return null===(n=e.find((function(e){return e.uuid==t})))||void 0===n?void 0:n.name}(t,e)),Ce()},ke=function(e,t){var n=V({},S);n[e]=t,C(n)},De=function(){C({})},Ie=function(e,t){ne(t),$(!0),he({uuid:e});var n=ue("Manifest "+t+" exporting. This may take some time. Please wait.",{hasTimeout:!1});ie(n)};be&&X&&(me("Manifest "+te+" Exported",{hasTimeout:!1,alertLinkHref:window.URL.createObjectURL(pe),alertLinkText:"Download Manifest",alertLinkIsDownload:!0,keyOfAlertToReplace:ae}),ie(""),$(!1)),ve&&X&&(fe("Something went wrong. Please refresh the page and try again.",{hasTimeout:!1,keyOfAlertToReplace:ae}),ie(""),$(!1));var Le,Ae=function(e){return void 0===e&&(e=c.PaginationVariant.top),a().createElement(c.Pagination,{isDisabled:n,itemCount:M(t,E),perPage:d,page:o,onSetPage:ye,onPerPageSelect:we,variant:e})};return a().createElement(a().Fragment,null,0===(null==t?void 0:t.length)&&i.canWriteManifests&&a().createElement(m.s3,null),((null==t?void 0:t.length)>0||!i.canWriteManifests)&&a().createElement(c.PageSection,{variant:"light"},a().createElement(c.Drawer,{isExpanded:A},a().createElement(c.DrawerContent,{panelContent:k?a().createElement(Q,{uuid:k,exportManifest:Ie,exportManifestButtonIsDisabled:Ee,onCloseClick:ge,isExpanded:A,titleRef:le,drawerRef:oe,openCurrentEntitlementsListFromPanel:function(){ge(),ke(k,!0);var e=se[R];(null==e?void 0:e.current)&&e.current.scrollIntoView({behavior:"smooth",block:"center"})},deleteManifest:xe}):""},a().createElement(c.DrawerContentBody,null,a().createElement(c.Title,{headingLevel:"h2"},a().createElement("span",{ref:le},"Manifests"),!n&&a().createElement(c.Badge,{isRead:!0},M(t,E))),a().createElement(c.Flex,{direction:{default:"column",md:"row"},justifyContent:{default:"justifyContentSpaceBetween"}},a().createElement(c.FlexItem,null,a().createElement(c.Split,{hasGutter:!0},t.length>0&&a().createElement(c.SplitItem,{isFilled:!0},a().createElement(c.SearchInput,{placeholder:"Filter by name, version or UUID",value:E,onChange:function(e){b(e),s(1),De()},onClear:Se})),!0===i.canWriteManifests&&a().createElement(c.SplitItem,null,a().createElement(j,null)))),a().createElement(c.FlexItem,{align:{default:"alignRight"}},Ae())),a().createElement(u.Table,{"aria-label":"Satellite Manifest Table",cells:L(i),rows:n?[]:P(t,i,E,o,d,S,(function(e,t){!function(e,t){D(e),G(t),T(!0),(null==le?void 0:le.current)&&le.current.scrollIntoView({behavior:"smooth",block:"start"}),(null==oe?void 0:oe.current)&&oe.current.focus({preventScroll:!0})}(e,t)}),se,g),onCollapse:function(e,t,n,r){var a=r.uuid.title;ke(a,!S[a])},sortBy:g,onSort:function(e,t,n){w({index:t,direction:n}),s(1),De()},actions:(Le=[{title:"Export",onClick:function(e,t,n){var r=n.cells[0].props.children.props.children,a=n.uuid.title;Ie(a,r)}}],i.canWriteManifests&&Le.push({title:"Delete",onClick:function(e,t,n){xe(n.uuid.title)}}),Le),areActionsDisabled:function(){return Ee}},a().createElement(u.TableHeader,null),a().createElement(u.TableBody,null)),0===M(t,E)&&t.length>0&&a().createElement(m.qx,{clearFilters:Se}),!n&&0===t.length&&a().createElement(m.Ox,null),n&&a().createElement(m.qb,null),Ae(c.PaginationVariant.bottom))))),a().createElement(U,{uuid:W,name:Y,isOpen:_,handleModalToggle:Ce,onSuccess:ge}))};var z=function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function l(e){try{s(r.next(e))}catch(e){i(e)}}function o(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,o)}s((r=r.apply(e,t||[])).next())}))},W=function(e,t){var n,r,a,i,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){l.label=i[1];break}if(6===i[0]&&l.label<a[1]){l.label=a[1],a=i;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(i);break}a[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}},H=function(e){return void 0===e&&(e=0),z(void 0,void 0,void 0,(function(){var t,n,r,a,i,l,o;return W(this,(function(s){switch(s.label){case 0:return t=h().get("cs_jwt"),[4,fetch("/api/rhsm/v2/manifests?type=Satellite&offset="+e,{headers:{Authorization:"Bearer "+t}})];case 1:return[4,s.sent().json()];case 2:return n=s.sent(),r=n.pagination,a=r.count,i=r.limit,l=n.body,a!==i?[3,4]:[4,H(e+i)];case 3:o=s.sent(),l.push.apply(l,o),s.label=4;case 4:return[2,l]}}))}))},q=n(20167);const Y=(0,i.withRouter)((function(){var e=(0,d.useQuery)("manifests",(function(){return z(void 0,void 0,void 0,(function(){return W(this,(function(e){switch(e.label){case 0:return[4,H()];case 1:return[2,(t=e.sent(),t.filter((function(e){return parseInt(e.version)>=6})))]}var t}))}))})),t=e.isLoading,n=e.isFetching,r=e.error,i=e.data,c=(0,d.useQueryClient)().getQueryData("user");return a().createElement(a().Fragment,null,a().createElement(o.Z,null,a().createElement(s.Z,{title:"Manifests"}),a().createElement("p",null,"Export subscriptions to your on-premise subscription management application")),a().createElement(l.Z,null,a().createElement(a().Fragment,null,t&&!r&&a().createElement(m.qb,null),!t&&!r&&a().createElement(Z,{data:i,user:c,isFetching:n}),r&&a().createElement(q.Z,null))))}))}}]);