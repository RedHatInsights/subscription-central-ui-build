"use strict";(self.webpackChunksubscription_central=self.webpackChunksubscription_central||[]).push([[197],{30050:(e,t,n)=>{n.d(t,{Z:()=>I});var a=n(92950),r=n.n(a),i=n(334),o=n(43476),l=n(66189),s=n(88767),c=n(20167),u=n(36808),m=n.n(u);const f={rhsmAPIBase:"https://api.access.qa.redhat.com"};var d=function(){return(d=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};d({},f),d({},f),d(d({},f),{rhsmAPIBase:"https://api.access.stage.redhat.com"}),d(d({},f),{rhsmAPIBase:"https://api.access.redhat.com"});var p=function(){try{return window.insights.chrome.auth.getUser()}catch(e){throw new Error("Error authenticating user: "+e.message)}},v=function(){try{return window.insights.chrome.getUserPermissions("subscriptions")}catch(e){throw new Error("Error getting user permissions: "+e.message)}};const h=function(e){var t,n,o=e.children,u=(0,s.useQueryClient)(),f=(0,i.useLocation)(),d=(0,s.useQuery)("user",(function(){return Promise.all([p(),(e=m().get("cs_jwt"),fetch("/api/rhsm/v2/organization",{headers:{Authorization:"Bearer "+e}}).then((function(e){return e.json()}))),v()]).then((function(e){var t=e[0],n=e[1],a=e[2].map((function(e){return e.permission}));return{canReadManifests:a.includes("subscriptions:manifests:read")||a.includes("subscriptions:*:*"),canWriteManifests:a.includes("subscriptions:manifests:write")||a.includes("subscriptions:*:*"),isOrgAdmin:!0===t.identity.user.is_org_admin,isSCACapable:!0===n.body.simpleContentAccessCapable}}));var e})),h=d.isLoading,E=d.isFetching,y=d.isSuccess,g=d.isError;return(0,a.useEffect)((function(){u.invalidateQueries("user")}),[f.pathname]),y&&(null===(n=null===(t=window.insights)||void 0===t?void 0:t.chrome)||void 0===n||n.hideGlobalFilter()),!0===g?r().createElement(c.Z,null):!0===h||!0===E?r().createElement(l.qb,null):!0===y?r().createElement(r().Fragment,null,o):void 0};var E=(0,a.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(806)]).then(n.bind(n,71806))})),y=(0,a.lazy)((function(){return Promise.all([n.e(252),n.e(736),n.e(810)]).then(n.bind(n,72810))})),g=(0,a.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(915)]).then(n.bind(n,53915))})),b=function(){return r().createElement("div",{className:"manifests"},r().createElement(a.Suspense,{fallback:r().createElement(l.qb,null)},r().createElement(h,null,r().createElement(i.Switch,null,r().createElement(i.Route,{exact:!0,path:"/",component:E}),r().createElement(i.Route,{path:"/oops",component:y}),r().createElement(i.Route,{path:"/no-permissions",component:g}),r().createElement(i.Route,null,r().createElement(i.Redirect,{to:"/oops"}))))))},w=n(87323),S=n(14517),k=n(23212),T=n(95841);const L=function(){var e=(0,T.Z)(),t=e.notifications,n=e.removeNotification;return r().createElement(k.AlertGroup,{isToast:!0},t.map((function(e,t){return r().createElement(k.Alert,{isLiveRegion:!0,timeout:e.timeout,title:e.message,variant:e.variant,key:e.key,actionLinks:e.actionLinks,actionClose:r().createElement(k.AlertActionCloseButton,{"data-testid":"notification-close-btn-"+t,title:e.message,variantLabel:e.variant+" alert",onClose:function(){n(e.key),(null==e?void 0:e.downloadHref)&&window.URL.revokeObjectURL(e.downloadHref)}})})})))};var C=new w.S({defaultOptions:{queries:{retry:3,retryDelay:1e4,staleTime:1/0,refetchOnWindowFocus:!1,refetchOnMount:!1}}});const I=(0,i.withRouter)((0,o.connect)()((function(){var e=(0,i.useHistory)();return(0,a.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("manifests");var t=insights.chrome.on("APP_NAVIGATION",(function(t){var n=t.domEvent.href.replace(/^\/insights\/subscriptions\/manifests\/?/,"/");e.push(n)}));return function(){t()}}),[]),r().createElement(s.QueryClientProvider,{client:C},r().createElement(S.Z,null,r().createElement(L,null),r().createElement(b,null)))})))},66189:(e,t,n)=>{n.d(t,{s3:()=>s,Bc:()=>u,Ox:()=>f,qx:()=>d,qb:()=>p});var a=n(92950),r=n.n(a),i=n(23212),o=n(41084),l=n(20777);const s=function(){return r().createElement(i.EmptyState,{variant:i.EmptyStateVariant.large},r().createElement(i.EmptyStateIcon,{icon:l.wl}),r().createElement(i.Title,{headingLevel:"h2",size:"lg"},"Create a new manifest to export subscriptions"),r().createElement(i.EmptyStateBody,null,"You currently have no manifests displayed. Create a new manifest to export subscriptions from the Red Hat Customer Portal to your on-premise subscription management application."),r().createElement(o.Z,null))};var c=n(84564);const u=function(){return r().createElement(i.EmptyState,{variant:i.EmptyStateVariant.small},r().createElement(i.EmptyStateIcon,{icon:c.ZP,color:"var(--pf-global--danger-color--100)"}),r().createElement(i.Title,{headingLevel:"h3"},"Something went wrong"),r().createElement(i.EmptyStateBody,null,r().createElement("h4",null,"Try refreshing the page. If the problem persists, contact your organization administrator or visit our"," ",r().createElement(i.Button,{variant:"link",component:"a",href:"https://status.redhat.com/",target:"_blank",isInline:!0},"status page")," ","for known outages.")))};var m=n(71070);const f=function(){return r().createElement(i.EmptyState,{variant:i.EmptyStateVariant.small},r().createElement(i.EmptyStateIcon,{icon:m.ZP}),r().createElement(i.Title,{headingLevel:"h2",size:"lg"},"No manifests found"),r().createElement(i.EmptyStateBody,null,"No manifests were found under your account."))},d=function(e){var t=e.clearFilters;return r().createElement(i.EmptyState,{variant:i.EmptyStateVariant.small},r().createElement(i.EmptyStateIcon,{icon:m.ZP}),r().createElement(i.Title,{headingLevel:"h2",size:"lg"},"No results found"),r().createElement(i.EmptyStateBody,null,"No results match the filter criteria. Remove all filters or clear all filters to show results."),r().createElement(i.Button,{variant:"link",onClick:t},"Clear all filters"))},p=function(){return r().createElement(i.Bullseye,null,r().createElement(i.Spinner,null))}},30319:(e,t,n)=>{n.d(t,{S1:()=>o});var a=n(8738),r=n(68573),i=n.n(r);function o(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.JH)({},[i()].concat(t))}},41084:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(92950),r=n.n(a),i=n(23212),o=n(42283),l=n(84564),s=n(34046),c=n(66189);const u=function(e){var t=e.title;return r().createElement(i.EmptyState,{variant:i.EmptyStateVariant.small},r().createElement(i.Title,{headingLevel:"h3"},t),r().createElement(i.EmptyStateBody,null,r().createElement(c.qb,null)))};var m=n(95841),f=function(){return(f=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};const d=function(e){var t=e.satelliteVersions,n=e.handleModalToggle,c=e.submitForm,d=e.isLoading,p=e.isError,v=e.isSuccess,h=(0,o.cI)({mode:"onBlur"}),E=h.control,y=h.handleSubmit,g=h.formState.errors,b=(0,a.useState)(""),w=b[0],S=b[1],k=(0,m.Z)(),T=k.addSuccessNotification,L=k.addErrorNotification,C=function(e){var t=e.satelliteManifestName,n=e.satelliteManifestType;c(t,n),S(t)},I=!1===d&&!1===p&&!1===v;return v?(T("Manifest "+w+" created"),n()):p&&(L("Something went wrong. Please try again"),n()),r().createElement(r().Fragment,null,I&&function(){var e,a;return r().createElement(r().Fragment,null,r().createElement(i.Title,{headingLevel:"h3",size:"2xl"},"Create new manifest"),r().createElement("p",{style:{margin:"30px 0"}},"Creating a new manifest allows you to export subscriptions to your on-premise subscription management application."),r().createElement(i.Form,{isWidthLimited:!0},r().createElement(i.FormGroup,{label:"Name",helperTextInvalid:null===(e=g.satelliteManifestName)||void 0===e?void 0:e.message,helperTextInvalidIcon:r().createElement(l.ZP,null),validated:g.satelliteManifestName?"error":"default",labelIcon:r().createElement(i.Tooltip,{position:"top",content:r().createElement("div",null,"Provide a name that will help you associate this manifest with a specific organization or on-premise subscription management application.")},r().createElement("span",{tabIndex:0,"aria-label":"Provide a name that will help you associate this manifest with a specific\n                organization or on-premise subscription management application."},r().createElement(s.ZP,null))),isRequired:!0,fieldId:"create-satellite-manifest-form-name"},r().createElement(o.Qr,{name:"satelliteManifestName",control:E,defaultValue:"",rules:{required:"Please provide a name for your new manifest",maxLength:{value:99,message:"Your manifest name must be less than 100 characters"},pattern:{value:/^[0-9A-Za-z_.-]*$/,message:"Your manifest name may contain\n                  only numbers, letters, underscores, hyphens, and periods."}},render:function(e){var t=e.field;return r().createElement(i.TextInput,f({isRequired:!0,type:"text",id:"create-satellite-manifest-form-name",placeholder:"Name"},t))}})),r().createElement(i.FormGroup,{label:"Type",helperTextInvalid:null===(a=g.satelliteManifestType)||void 0===a?void 0:a.message,helperTextInvalidIcon:r().createElement(l.ZP,null),validated:g.satelliteManifestType?"error":"default",labelIcon:r().createElement(i.Tooltip,{position:"top",content:r().createElement("div",null,"Due to variation in supported features, it is important to match the type and version of the subscription management application you are using.")},r().createElement("span",{tabIndex:0,"aria-label":"Due to variation in supported features, it is important to match the type and\n              version of the subscription management application you are using."},r().createElement(s.ZP,null))),isRequired:!0,fieldId:"create-satellite-manifest-form-type"},r().createElement(o.Qr,{name:"satelliteManifestType",control:E,rules:{required:"Please select a version for your new manifest"},defaultValue:"",render:function(e){var n=e.field;return r().createElement(i.FormSelect,f({"aria-label":"FormSelect Input",id:"create-satellite-manifest-form-type"},n),r().createElement(i.FormSelectOption,{isDisabled:!0,key:"Select type",value:"",label:"Select type"}),null==t?void 0:t.map((function(e){return r().createElement(i.FormSelectOption,{isDisabled:!1,key:e.value,value:e.value,label:e.description})})))}})),r().createElement(i.ActionGroup,null,r().createElement(i.Button,{key:"confirm",id:"save-manifest-button",variant:"primary",onClick:y(C)},"Save"),r().createElement(i.Button,{key:"cancel",id:"cancel-create-manifest-button",variant:"link",onClick:n},"Cancel"))))}(),d&&r().createElement(u,{title:"Creating manifest..."}))};var p=n(36808),v=n.n(p),h=n(88767);const E=function(e){var t,n=e.handleModalToggle,a=e.isModalOpen,o=(0,h.useQuery)("satelliteVersions",(function(){return e=v().get("cs_jwt"),fetch("/api/rhsm/v2/manifests/versions",{headers:{Authorization:"Bearer "+e}}).then((function(e){return e.json()}));var e})),l=o.data,s=o.isLoading,c=o.isError,m=(t=(0,h.useQueryClient)(),(0,h.useMutation)((function(e){return n=(t=e).name,a=t.version,r=v().get("cs_jwt"),fetch("/api/rhsm/v2/manifests?name="+n+"&version="+a,{method:"POST",headers:{Authorization:"Bearer "+r}}).then((function(e){if(200!==e.status)throw new Error("Status Code "+e.status+".  Error creating manifest: "+e.statusText+".  ");return e.json()}));var t,n,a,r}),{onSuccess:function(e){void 0!==e&&t.invalidateQueries("manifests")}})),f=m.data,p=m.mutate,E=m.isLoading,y=m.isSuccess,g=m.isError,b=m.reset;!1===a&&!0===y&&b();var w=void 0!==f,S=g||c;return r().createElement(r().Fragment,null,r().createElement(i.Modal,{"aria-label":"Create satellite manifest",variant:i.ModalVariant.medium,isOpen:a,onClose:n},s&&r().createElement(u,{title:"Loading..."}),!s&&r().createElement(d,{satelliteVersions:null==l?void 0:l.body,submitForm:function(e,t){p({name:e,version:t})},isLoading:E,isError:S,isSuccess:w,handleModalToggle:n})))},y=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1],o=function(){n(!t)};return r().createElement(r().Fragment,null,r().createElement(i.Button,{variant:"primary",onClick:o},"Create new manifest"),r().createElement(E,{handleModalToggle:o,isModalOpen:t}))}},14517:(e,t,n)=>{n.d(t,{u:()=>c,Z:()=>u});var a=n(92950),r=n.n(a),i=n(23212),o=n(44586),l=function(){return(l=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},s=function(e,t){for(var n=0,a=t.length,r=e.length;n<a;n++,r++)e[r]=t[n];return e},c=r().createContext({notifications:[],addNotification:function(e,t,n){return null},removeNotification:function(e){return null}}),u=function(e){var t=e.children,n=(0,a.useState)([]),u=n[0],m=n[1],f={notifications:u,addNotification:function(e,t,n){return function(e,t,n){var a=function(e,t,n){var a,s={variant:e,message:t,key:(0,o.Z)(),timeout:null===(a=null==n?void 0:n.hasTimeout)||void 0===a||a};if((null==n?void 0:n.alertLinkText)&&(null==n?void 0:n.alertLinkHref)){var c=(null==n?void 0:n.alertLinkIsDownload)?{download:""}:{},u=r().createElement(r().Fragment,null,r().createElement(i.AlertActionLink,null,r().createElement("a",l({href:n.alertLinkHref},c),n.alertLinkText)));s.actionLinks=u}return(null==n?void 0:n.alertLinkIsDownload)&&(null==n?void 0:n.alertLinkHref)&&(s.downloadHref=n.alertLinkHref),s}(e,t,n),c=s(s([],u),[l({},a)]);return(null==n?void 0:n.keyOfAlertToReplace)&&(c=c.filter((function(e){return e.key!==n.keyOfAlertToReplace}))),m(c),a.key}(e,t,n)},removeNotification:function(e){return function(e){m(u.filter((function(t){return t.key!==e})))}(e)}};return r().createElement(c.Provider,{value:f},t)}},95841:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(92950),r=n(14517);const i=function(){var e=(0,a.useContext)(r.u),t=e.notifications,n=e.addNotification;return{notifications:t,addSuccessNotification:function(e,t){return n("success",e,t)},addErrorNotification:function(e,t){return n("danger",e,t)},addInfoNotification:function(e,t){return n("info",e,t)},removeNotification:e.removeNotification}}}}]);
//# sourceMappingURL=../sourcemaps/197.5e044b53d0dba542ac65.js.map