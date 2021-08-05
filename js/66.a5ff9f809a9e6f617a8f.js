(self.webpackChunksubscription_central=self.webpackChunksubscription_central||[]).push([[66],{67073:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var a=n(94015),r=n.n(a),i=n(23645),o=n.n(i)()(r());o.push([e.id,".manifests :root{--ins-color--orange: #ec7a08}.manifests button:focus{outline:none}\n","",{version:3,sources:["webpack://./src/App.scss"],names:[],mappings:"AAAA,iBACM,4BAAoB,CAD1B,wBACgD,YAAY",sourcesContent:[".manifests{\n:root{--ins-color--orange: #ec7a08}button:focus{outline:none}\n\n}"],sourceRoot:""}]);const l=o},92491:(e,t,n)=>{"use strict";n.d(t,{Z:()=>A});var a=n(77865),r=n.n(a),i=n(334),o=n(43476),l=n(59346),s=n(88767),c=n(20167),u=n(36808),m=n.n(u),d=n(85186);const f=function(e){var t,n,o=e.children,u=(0,s.useQueryClient)(),f=(0,i.useLocation)(),p=(0,s.useQuery)("user",(function(){return Promise.all([(0,d.So)(),(e=m().get("cs_jwt"),t=(0,d.iE)().rhsmAPIBase,fetch(t+"/management/v1/organization",{headers:{Authorization:"Bearer "+e},mode:"cors"}).then((function(e){return e.json()})))]).then((function(e){var t=e[0],n=e[1];return{isOrgAdmin:!0===t.identity.user.is_org_admin,isSCACapable:!0===n.body.simpleContentAccessCapable}}));var e,t})),v=p.isLoading,h=p.isFetching,E=p.isSuccess,g=p.isError;return(0,a.useEffect)((function(){u.invalidateQueries("user")}),[f.pathname]),E&&(null===(n=null===(t=window.insights)||void 0===t?void 0:t.chrome)||void 0===n||n.hideGlobalFilter()),!0===g?r().createElement(c.Z,null):!0===v||!0===h?r().createElement(l.qb,null):!0===E?r().createElement(r().Fragment,null,o):void 0};var p=(0,a.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(697),n.e(860),n.e(621)]).then(n.bind(n,1621))})),v=(0,a.lazy)((function(){return Promise.all([n.e(252),n.e(697),n.e(860),n.e(582)]).then(n.bind(n,53582))})),h=(0,a.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(697),n.e(291),n.e(860),n.e(309)]).then(n.bind(n,92309))})),E=function(){return r().createElement("div",{className:"manifests"},r().createElement(a.Suspense,{fallback:r().createElement(l.qb,null)},r().createElement(f,null,r().createElement(i.Switch,null,r().createElement(i.Route,{exact:!0,path:"/",component:p}),r().createElement(i.Route,{path:"/oops",component:v}),r().createElement(i.Route,{path:"/no-permissions",component:h}),r().createElement(i.Route,null,r().createElement(i.Redirect,{to:"/oops"}))))))},g=(n(14154),n(87323)),y=n(14517),b=n(17345),w=n(95841);const S=function(){var e=(0,w.Z)(),t=e.notifications,n=e.removeNotification;return r().createElement(b.AlertGroup,{isToast:!0},t.map((function(e,t){return r().createElement(b.Alert,{isLiveRegion:!0,timeout:e.timeout,title:e.message,variant:e.variant,key:e.key,actionLinks:e.actionLinks,actionClose:r().createElement(b.AlertActionCloseButton,{"data-testid":"notification-close-btn-"+t,title:e.message,variantLabel:e.variant+" alert",onClose:function(){n(e.key),(null==e?void 0:e.downloadHref)&&window.URL.revokeObjectURL(e.downloadHref)}})})})))};var k=new g.S({defaultOptions:{queries:{retry:3,retryDelay:1e4,staleTime:1/0,refetchOnWindowFocus:!1,refetchOnMount:!1}}});const A=(0,i.withRouter)((0,o.connect)()((function(){var e=(0,i.useHistory)();return(0,a.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("manifests");var t=insights.chrome.on("APP_NAVIGATION",(function(t){return e.push("/".concat(t.navId))}));return function(){t()}}),[]),r().createElement(s.QueryClientProvider,{client:k},r().createElement(y.Z,null,r().createElement(S,null),r().createElement(E,null)))})))},59346:(e,t,n)=>{"use strict";n.d(t,{s3:()=>s,Bc:()=>u,Ox:()=>d,qx:()=>f,qb:()=>p});var a=n(77865),r=n.n(a),i=n(17345),o=n(41084),l=n(20777);const s=function(){return r().createElement(i.EmptyState,{variant:i.EmptyStateVariant.large},r().createElement(i.EmptyStateIcon,{icon:l.wl}),r().createElement(i.Title,{headingLevel:"h2",size:"lg"},"Create a new manifest to export subscriptions"),r().createElement(i.EmptyStateBody,null,"You currently have no manifests displayed. Create a new manifest to export subscriptions from the Red Hat Customer Portal to your on-premise subscription management application."),r().createElement(o.Z,null))};var c=n(84564);const u=function(){return r().createElement(i.EmptyState,{variant:i.EmptyStateVariant.small},r().createElement(i.EmptyStateIcon,{icon:c.ZP,color:"var(--pf-global--danger-color--100)"}),r().createElement(i.Title,{headingLevel:"h3"},"Something went wrong"),r().createElement(i.EmptyStateBody,null,r().createElement("h4",null,"Try refreshing the page. If the problem persists, contact your organization administrator or visit our"," ",r().createElement(i.Button,{variant:"link",component:"a",href:"https://status.redhat.com/",target:"_blank",isInline:!0},"status page")," ","for known outages.")))};var m=n(71070);const d=function(){return r().createElement(i.EmptyState,{variant:i.EmptyStateVariant.small},r().createElement(i.EmptyStateIcon,{icon:m.ZP}),r().createElement(i.Title,{headingLevel:"h2",size:"lg"},"No manifests found"),r().createElement(i.EmptyStateBody,null,"No manifests were found under your account."))},f=function(e){var t=e.clearFilters;return r().createElement(i.EmptyState,{variant:i.EmptyStateVariant.small},r().createElement(i.EmptyStateIcon,{icon:m.ZP}),r().createElement(i.Title,{headingLevel:"h2",size:"lg"},"No results found"),r().createElement(i.EmptyStateBody,null,"No results match the filter criteria. Remove all filters or clear all filters to show results."),r().createElement(i.Button,{variant:"link",onClick:t},"Clear all filters"))},p=function(){return r().createElement(i.Bullseye,null,r().createElement(i.Spinner,null))}},55206:(e,t,n)=>{"use strict";n.d(t,{S1:()=>o});var a=n(8738),r=n(68573),i=n.n(r);function o(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.JH)({},[i()].concat(t))}},14154:(e,t,n)=>{"use strict";var a=n(93379),r=n.n(a),i=n(67073),o=r()(i.default,{insert:"head",singleton:!1});if(!i.default.locals||e.hot.invalidate){var l=i.default.locals;e.hot.accept(67073,(t=>{i=n(67073),function(e,t,n){if(!e&&t||e&&!t)return!1;var a;for(a in e)if(e[a]!==t[a])return!1;for(a in t)if(!e[a])return!1;return!0}(l,i.default.locals)?(l=i.default.locals,o(i.default)):e.hot.invalidate()}))}e.hot.dispose((function(){o()})),i.default.locals},41084:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var a=n(77865),r=n.n(a),i=n(17345),o=n(42283),l=n(84564),s=n(34046),c=n(59346);const u=function(e){var t=e.title;return r().createElement(i.EmptyState,{variant:i.EmptyStateVariant.small},r().createElement(i.Title,{headingLevel:"h3"},t),r().createElement(i.EmptyStateBody,null,r().createElement(c.qb,null)))};var m=n(95841),d=function(){return(d=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};const f=function(e){var t=e.satelliteVersions,n=e.handleModalToggle,c=e.submitForm,f=e.isLoading,p=e.isError,v=e.isSuccess,h=(0,o.cI)({mode:"onBlur"}),E=h.control,g=h.handleSubmit,y=h.formState.errors,b=(0,a.useState)(""),w=b[0],S=b[1],k=(0,m.Z)(),A=k.addSuccessNotification,C=k.addErrorNotification,I=function(e){var t=e.satelliteManifestName,n=e.satelliteManifestType;c(t,n),S(t)},T=!1===f&&!1===p&&!1===v;return v?(A("Manifest "+w+" created"),n()):p&&(C("Something went wrong. Please try again"),n()),r().createElement(r().Fragment,null,T&&function(){var e,a;return r().createElement(r().Fragment,null,r().createElement(i.Title,{headingLevel:"h3",size:"2xl"},"Create new manifest"),r().createElement("p",{style:{margin:"30px 0"}},"Creating a new manifest allows you to export subscriptions to your on-premise subscription management application."),r().createElement(i.Form,{isWidthLimited:!0},r().createElement(i.FormGroup,{label:"Name",helperTextInvalid:null===(e=y.satelliteManifestName)||void 0===e?void 0:e.message,helperTextInvalidIcon:r().createElement(l.ZP,null),validated:y.satelliteManifestName?"error":"default",labelIcon:r().createElement(i.Tooltip,{position:"top",content:r().createElement("div",null,"Provide a name that will help you associate this manifest with a specific organization or on-premise subscription management application.")},r().createElement("span",{tabIndex:0,"aria-label":"Provide a name that will help you associate this manifest with a specific\n                organization or on-premise subscription management application."},r().createElement(s.ZP,null))),isRequired:!0,fieldId:"create-satellite-manifest-form-name"},r().createElement(o.Qr,{name:"satelliteManifestName",control:E,defaultValue:"",rules:{required:"Please provide a name for your new manifest",maxLength:{value:99,message:"Your manifest name must be less than 100 characters"},pattern:{value:/^[0-9A-Za-z_.-]*$/,message:"Your manifest name may contain\n                  only numbers, letters, underscores, hyphens, and periods."}},render:function(e){var t=e.field;return r().createElement(i.TextInput,d({isRequired:!0,type:"text",id:"create-satellite-manifest-form-name",placeholder:"Name"},t))}})),r().createElement(i.FormGroup,{label:"Type",helperTextInvalid:null===(a=y.satelliteManifestType)||void 0===a?void 0:a.message,helperTextInvalidIcon:r().createElement(l.ZP,null),validated:y.satelliteManifestType?"error":"default",labelIcon:r().createElement(i.Tooltip,{position:"top",content:r().createElement("div",null,"Due to variation in supported features, it is important to match the type and version of the subscription management application you are using.")},r().createElement("span",{tabIndex:0,"aria-label":"Due to variation in supported features, it is important to match the type and\n              version of the subscription management application you are using."},r().createElement(s.ZP,null))),isRequired:!0,fieldId:"create-satellite-manifest-form-type"},r().createElement(o.Qr,{name:"satelliteManifestType",control:E,rules:{required:"Please select a version for your new manifest"},defaultValue:"",render:function(e){var n=e.field;return r().createElement(i.FormSelect,d({"aria-label":"FormSelect Input",id:"create-satellite-manifest-form-type"},n),r().createElement(i.FormSelectOption,{isDisabled:!0,key:"Select type",value:"",label:"Select type"}),null==t?void 0:t.map((function(e){return r().createElement(i.FormSelectOption,{isDisabled:!1,key:e.value,value:e.value,label:e.description})})))}})),r().createElement(i.ActionGroup,null,r().createElement(i.Button,{key:"confirm",id:"save-manifest-button",variant:"primary",onClick:g(I)},"Save"),r().createElement(i.Button,{key:"cancel",id:"cancel-create-manifest-button",variant:"link",onClick:n},"Cancel"))))}(),f&&r().createElement(u,{title:"Creating manifest..."}))};var p=n(36808),v=n.n(p),h=n(88767),E=n(85186);const g=function(e){var t,n=e.handleModalToggle,a=e.isModalOpen,o=(0,h.useQuery)("satelliteVersions",(function(){return e=v().get("cs_jwt"),t=(0,E.iE)().rhsmAPIBase,fetch(t+"/management/v1/allocations/versions",{headers:{Authorization:"Bearer "+e},mode:"cors"}).then((function(e){return e.json()}));var e,t})),l=o.data,s=o.isLoading,c=o.isError,m=(t=(0,h.useQueryClient)(),(0,h.useMutation)((function(e){return n=(t=e).name,a=t.version,r=v().get("cs_jwt"),i=(0,E.iE)().rhsmAPIBase,fetch(i+"/management/v1/allocations?name="+n+"&version="+a,{method:"POST",headers:{Authorization:"Bearer "+r}}).then((function(e){if(200!==e.status)throw new Error("Status Code "+e.status+".  Error creating manifest: "+e.statusText+".  ");return e.json()}));var t,n,a,r,i}),{onSuccess:function(e){void 0!==e&&t.invalidateQueries("manifests")}})),d=m.data,p=m.mutate,g=m.isLoading,y=m.isSuccess,b=m.isError,w=m.reset;!1===a&&!0===y&&w();var S=void 0!==d,k=b||c;return r().createElement(r().Fragment,null,r().createElement(i.Modal,{"aria-label":"Create satellite manifest",variant:i.ModalVariant.medium,isOpen:a,onClose:n},s&&r().createElement(u,{title:"Loading..."}),!s&&r().createElement(f,{satelliteVersions:null==l?void 0:l.body,submitForm:function(e,t){p({name:e,version:t})},isLoading:g,isError:k,isSuccess:S,handleModalToggle:n})))},y=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1],o=function(){n(!t)};return r().createElement(r().Fragment,null,r().createElement(i.Button,{variant:"primary",onClick:o},"Create new manifest"),r().createElement(g,{handleModalToggle:o,isModalOpen:t}))}},14517:(e,t,n)=>{"use strict";n.d(t,{u:()=>c,Z:()=>u});var a=n(77865),r=n.n(a),i=n(17345),o=n(44586),l=function(){return(l=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},s=function(e,t){for(var n=0,a=t.length,r=e.length;n<a;n++,r++)e[r]=t[n];return e},c=r().createContext({notifications:[],addNotification:function(e,t,n){return null},removeNotification:function(e){return null}}),u=function(e){var t=e.children,n=(0,a.useState)([]),u=n[0],m=n[1],d={notifications:u,addNotification:function(e,t,n){return function(e,t,n){var a=function(e,t,n){var a,s={variant:e,message:t,key:(0,o.Z)(),timeout:null===(a=null==n?void 0:n.hasTimeout)||void 0===a||a};if((null==n?void 0:n.alertLinkText)&&(null==n?void 0:n.alertLinkHref)){var c=(null==n?void 0:n.alertLinkIsDownload)?{download:""}:{},u=r().createElement(r().Fragment,null,r().createElement(i.AlertActionLink,null,r().createElement("a",l({href:n.alertLinkHref},c),n.alertLinkText)));s.actionLinks=u}return(null==n?void 0:n.alertLinkIsDownload)&&(null==n?void 0:n.alertLinkHref)&&(s.downloadHref=n.alertLinkHref),s}(e,t,n),c=s(s([],u),[l({},a)]);return(null==n?void 0:n.keyOfAlertToReplace)&&(c=c.filter((function(e){return e.key!==n.keyOfAlertToReplace}))),m(c),a.key}(e,t,n)},removeNotification:function(e){return function(e){m(u.filter((function(t){return t.key!==e})))}(e)}};return r().createElement(c.Provider,{value:d},t)}},95841:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(77865),r=n(14517);const i=function(){var e=(0,a.useContext)(r.u),t=e.notifications,n=e.addNotification;return{notifications:t,addSuccessNotification:function(e,t){return n("success",e,t)},addErrorNotification:function(e,t){return n("danger",e,t)},addInfoNotification:function(e,t){return n("info",e,t)},removeNotification:e.removeNotification}}},85186:(e,t,n)=>{"use strict";n.d(t,{So:()=>o,iE:()=>l});const a={rhsmAPIBase:"https://api.access.qa.redhat.com"};var r=function(){return(r=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};const i={ci:r({},a),qa:r({},a),stage:r(r({},a),{rhsmAPIBase:"https://api.access.stage.redhat.com"}),prod:r(r({},a),{rhsmAPIBase:"https://api.access.redhat.com"})};var o=function(){try{return window.insights.chrome.auth.getUser()}catch(e){throw new Error("Error authenticating user: "+e.message)}},l=function(){var e,t,n=(null===(t=null===(e=null===window||void 0===window?void 0:window.insights)||void 0===e?void 0:e.chrome)||void 0===t?void 0:t.getEnvironment())||"ci";return i[n]}}}]);
//# sourceMappingURL=66.a5ff9f809a9e6f617a8f.js.map