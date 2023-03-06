"use strict";(self.webpackChunksubscription_central=self.webpackChunksubscription_central||[]).push([[508],{487:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(2950),a=n.n(r),i=n(7785),o=n(2320),l=n(8494),c=n(8767),s=n(5984);const u={rhsmAPIBase:"https://api.access.qa.redhat.com"};var f=function(){return f=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},f.apply(this,arguments)};f({},u),f({},u),f(f({},u),{rhsmAPIBase:"https://api.access.stage.redhat.com"}),f(f({},u),{rhsmAPIBase:"https://api.access.redhat.com"});var m=function(){try{return window.insights.chrome.auth.getUser()}catch(e){throw new Error("Error authenticating user: ".concat(e.message))}},d=function(){try{return window.insights.chrome.getUserPermissions("subscriptions")}catch(e){throw new Error("Error getting user permissions: ".concat(e.message))}},h=function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(e){i(e)}}function l(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((r=r.apply(e,t||[])).next())}))},p=function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(c){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(o=0)),o;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){o.label=l[1];break}if(6===l[0]&&o.label<a[1]){o.label=a[1],a=l;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(l);break}a[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}};const v=function(e){var t=e.children,n=(0,c.useQueryClient)(),i=(0,o.useLocation)(),u=(0,c.useQuery)("user",(function(){return h(void 0,void 0,Promise,(function(){return p(this,(function(e){return[2,Promise.all([m(),h(void 0,void 0,Promise,(function(){var e;return p(this,(function(t){switch(t.label){case 0:return[4,window.insights.chrome.auth.getToken()];case 1:return e=t.sent(),[2,fetch("/api/rhsm/v2/organization",{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()}))]}}))})),d()]).then((function(e){var t=e[0],n=e[1],r=e[2].map((function(e){return e.permission}));return{canReadManifests:r.includes("subscriptions:manifests:read")||r.includes("subscriptions:*:*"),canWriteManifests:r.includes("subscriptions:manifests:write")||r.includes("subscriptions:*:*"),isOrgAdmin:!0===t.identity.user.is_org_admin,isSCACapable:!0===n.body.simpleContentAccessCapable}}))]}))}))})),f=u.isLoading,v=u.isFetching,y=u.isSuccess,E=u.isError;return(0,r.useEffect)((function(){n.invalidateQueries("user")}),[i.pathname]),(0,r.useEffect)((function(){var e,t;y&&(null===(t=null===(e=window.insights)||void 0===e?void 0:e.chrome)||void 0===t||t.hideGlobalFilter())}),[y]),!0===E?a().createElement(s.Z,null):!0===f||!0===v?a().createElement(l.qb,null):!0===y?a().createElement(a().Fragment,null,t):void 0};var y=(0,r.lazy)((function(){return Promise.all([n.e(977),n.e(813)]).then(n.bind(n,5571))})),E=(0,r.lazy)((function(){return n.e(810).then(n.bind(n,2810))})),b=(0,r.lazy)((function(){return n.e(136).then(n.bind(n,3136))})),g=function(){return a().createElement("div",{className:"manifests"},a().createElement(r.Suspense,{fallback:a().createElement(l.qb,null)},a().createElement(v,null,a().createElement(o.Routes,null,a().createElement(o.Route,{path:"/",element:a().createElement(y,null)}),a().createElement(o.Route,{path:"/oops",element:a().createElement(E,null)}),a().createElement(o.Route,{path:"/no-permissions",element:a().createElement(b,null)}),a().createElement(o.Route,{path:"*",element:a().createElement(o.Navigate,{to:"/oops",replace:!0})})))))},w=n(8001),k=n(5356),S=n(3217);const C=function(){var e=(0,S.Z)(),t=e.notifications,n=e.removeNotification;return a().createElement(k.AlertGroup,{isToast:!0},t.map((function(e,t){return a().createElement(k.Alert,{isLiveRegion:!0,timeout:e.timeout,title:e.message,variant:e.variant,key:e.key,actionLinks:e.actionLinks,actionClose:a().createElement(k.AlertActionCloseButton,{"data-testid":"notification-close-btn-".concat(t),title:e.message,variantLabel:"".concat(e.variant," alert"),onClose:function(){n(e.key),(null==e?void 0:e.downloadHref)&&window.URL.revokeObjectURL(e.downloadHref)}})})})))};var T=new c.QueryClient({defaultOptions:{queries:{retry:3,retryDelay:1e4,staleTime:1/0,refetchOnWindowFocus:!1,refetchOnMount:!1}}});const x=(0,i.$j)()((function(){var e=(0,o.useNavigate)();return(0,r.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("manifests");var t=insights.chrome.on("APP_NAVIGATION",(function(t){var n=t.domEvent.href.replace(/^\/insights\/subscriptions\/manifests\/?/,"/");e(n)}));return function(){t()}}),[]),a().createElement(c.QueryClientProvider,{client:T},a().createElement(w.Z,null,a().createElement(C,null),a().createElement(g,null)))}))},8494:(e,t,n)=>{n.d(t,{s3:()=>c,qx:()=>u,qb:()=>f});var r=n(2950),a=n.n(r),i=n(5356),o=n(6733),l=n(777);const c=function(e){var t=e.user;return a().createElement(i.EmptyState,{variant:i.EmptyStateVariant.large},a().createElement(i.EmptyStateIcon,{icon:l.wl}),a().createElement(i.Title,{headingLevel:"h2",size:"lg"},"Create a new manifest to export subscriptions"),a().createElement(i.EmptyStateBody,null,"You currently have no manifests displayed. Create a new manifest to export subscriptions from the Red Hat Customer Portal to your on-premise subscription management application."),a().createElement(o.Z,{user:t}))};var s=n(1070);const u=function(e){var t=e.clearFilters;return a().createElement(i.EmptyState,{variant:i.EmptyStateVariant.small},a().createElement(i.EmptyStateIcon,{icon:s.ZP}),a().createElement(i.Title,{headingLevel:"h2",size:"lg"},"No results found"),a().createElement(i.EmptyStateBody,null,"No results match the filter criteria. Remove all filters or clear all filters to show results."),a().createElement(i.Button,{variant:"link",onClick:t},"Clear all filters"))},f=function(){return a().createElement(i.Bullseye,null,a().createElement(i.Spinner,null))}},319:(e,t,n)=>{n.d(t,{S1:()=>o});var r=n(3719),a=n(8756),i=n.n(a);function o(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.JH)({},[i()].concat(t))}},6733:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(2950),a=n.n(r),i=n(5356),o=n(3217),l=n(8494);const c=function(e){var t=e.title;return a().createElement(i.EmptyState,{variant:i.EmptyStateVariant.small},a().createElement(i.Title,{headingLevel:"h3"},t),a().createElement(i.EmptyStateBody,null,a().createElement(l.qb,null)))},s=function(e){var t=e.satelliteVersions,n=e.satelliteVersions,l=e.handleModalToggle,s=e.isLoading,u=e.submitForm,f=e.isError,m=e.isError,d=e.isError,h=e.isSuccess,p=a().useState(!1),v=p[0],y=p[1],E=a().useState(!1),b=E[0],g=E[1],w=(0,r.useState)(""),k=w[0],S=w[1],C=(0,r.useState)(""),T=C[0],x=C[1],L=(0,o.Z)(),A=L.addSuccessNotification,N=L.addErrorNotification,P=a().useState(""),F=P[0],O=P[1],M=a().useState("default"),B=M[0],I=M[1],R=a().useState("default"),Z=R[0],q=R[1],z="Your manifest name must be unique and must contain only numbers, letters, underscores, and hyphens.",j="Name requirements have not been met. ".concat(z),G=function(){u(k,T)},H=!1===s&&!1===d&&!1===h;h?(A("Manifest ".concat(k," created")),l()):d&&(N("Something went wrong. Please try again"),l());var V=void 0!==n,Q=f||m,D=null==t?void 0:t.map((function(e){return a().createElement(i.FormSelectOption,{key:e.value,value:e.value,label:e.description,validated:Z})})),_=function(e){y(!0)},U=function(e){g(!0)},W=function(e,t){S(e)};a().useEffect((function(){!function(e){return/^[0-9A-Za-z_.-]*$/.test(e)&&e.length>0&&e.length<99}(k)?(""!=k||""==k&&v)&&I("error"):I("success")}),[k,v]);var Y=function(e,t){x(e)};return a().useEffect((function(){""!=T?q("success"):""==T&&b&&v?(q("error"),O("Selection Required")):q("default")}),[T,b,v]),a().createElement(a().Fragment,null,H&&a().createElement((function(){return a().createElement(a().Fragment,null,a().createElement(i.Title,{headingLevel:"h3",size:"2xl"},"Create manifest"),a().createElement("p",{style:{margin:"30px 0"}},"Creating a manifest allows you to export subscriptions to your on-premise subscription management application. Match the type and version of the subscription management application that you are using. All fields are required."),a().createElement(i.Form,{isError:Q,isSuccess:V,isWidthLimited:!0},a().createElement(i.FormGroup,{label:"Name",helperText:z,helperTextInvalid:j,validated:B,fieldId:"create-satellite-manifest-form-name"},a().createElement(i.TextInput,{name:"satelliteManifestName",value:k,onChange:W,onBlur:_,validated:B,id:"create-satellite-manifest-form-name",autoFocus:"autoFocus"})),a().createElement(i.FormGroup,{label:"Type",helperTextInvalid:F,fieldId:"create-satellite-manifest-form-type",validated:Z},a().createElement(i.FormSelect,{value:T,onChange:Y,onBlur:U,name:"satelliteManifestType","aria-label":"FormSelect Input",id:"create-satellite-manifest-form-type",validated:Z},a().createElement(i.FormSelectOption,{name:"satelliteManifestType",value:"",isDisabled:!0,isPlaceholder:!0,key:"Select type",label:"Select type"}),D)),a().createElement(i.ActionGroup,null,a().createElement(i.Button,{type:"submit",key:"confirm",id:"submit-manifest-button",variant:"primary",onClick:G,isDisabled:"success"!=B||"success"!=Z},"Create"),a().createElement(i.Button,{key:"cancel",id:"cancel-create-manifest-button",variant:"link",onClick:l},"Cancel"))))}),null),s&&a().createElement(c,{title:"Creating manifest..."}))};var u=n(8767),f=function(){var e=(0,u.useQueryClient)();return(0,u.useMutation)((function(e){return i=e,t=void 0,n=void 0,a=function(){var e,t,n;return function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(c){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(o=0)),o;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){o.label=l[1];break}if(6===l[0]&&o.label<a[1]){o.label=a[1],a=l;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(l);break}a[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}}(this,(function(r){switch(r.label){case 0:return e=i.name,t=i.version,[4,window.insights.chrome.auth.getToken()];case 1:return n=r.sent(),[2,fetch("/api/rhsm/v2/manifests?name=".concat(e,"&version=").concat(t),{method:"POST",headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){if(200!==e.status)throw new Error("Status Code ".concat(e.status,".  Error creating manifest: ").concat(e.statusText,".  "));return e.json()}))]}}))},new((r=void 0)||(r=Promise))((function(e,i){function o(e){try{c(a.next(e))}catch(e){i(e)}}function l(e){try{c(a.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(o,l)}c((a=a.apply(t,n||[])).next())}));var t,n,r,a,i}),{onSuccess:function(t){void 0!==t&&e.invalidateQueries("manifests")}})},m=function(){return(0,u.useQuery)("satelliteVersions",(function(){return e=void 0,t=void 0,r=function(){var e;return function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(c){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(o=0)),o;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){o.label=l[1];break}if(6===l[0]&&o.label<a[1]){o.label=a[1],a=l;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(l);break}a[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}}(this,(function(t){switch(t.label){case 0:return[4,window.insights.chrome.auth.getToken()];case 1:return e=t.sent(),[2,fetch("/api/rhsm/v2/manifests/versions",{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){if(200!=e.status)throw new Error("Failed to fetch satellite versions: ".concat(e.statusText));return e.json()}))]}}))},new((n=Promise)||(n=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(e){i(e)}}function l(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((r=r.apply(e,t||[])).next())}));var e,t,n,r}))};const d=function(e){var t=e.handleModalToggle,n=e.isModalOpen,r=m(),o=r.data,l=r.isLoading,u=r.isError,d=f(),h=d.data,p=d.mutate,v=d.isLoading,y=d.isSuccess,E=d.isError,b=d.reset;!1===n&&!0===y&&b();var g=void 0!==h,w=E||u;return a().createElement(a().Fragment,null,a().createElement(i.Modal,{"aria-label":"Create satellite manifest",variant:i.ModalVariant.medium,isOpen:n,onClose:t},l&&a().createElement(c,{title:"Loading..."}),!l&&a().createElement(s,{satelliteVersions:null==o?void 0:o.body,submitForm:function(e,t){p({name:e,version:t})},isLoading:v,isError:w,isSuccess:g,handleModalToggle:t})))},h=function(e){var t=e.user,n=(0,r.useState)(!1),o=n[0],l=n[1],c=function(){l(!o)};return a().createElement(a().Fragment,null,a().createElement(i.Button,{variant:"primary",onClick:c,isDisabled:!t.canWriteManifests},"Create new manifest"),a().createElement(d,{handleModalToggle:c,isModalOpen:o}))}},8001:(e,t,n)=>{n.d(t,{Z:()=>u,u:()=>s});var r=n(2950),a=n.n(r),i=n(5356),o=n(8721),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)},c=function(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))},s=a().createContext({notifications:[],addNotification:function(e,t,n){return null},removeNotification:function(e){return null}}),u=function(e){var t=e.children,n=(0,r.useState)([]),u=n[0],f=n[1],m={notifications:u,addNotification:function(e,t,n){return function(e,t,n){var r=function(e,t,n){var r,c={variant:e,message:t,key:(0,o.Z)(),timeout:null===(r=null==n?void 0:n.hasTimeout)||void 0===r||r};if((null==n?void 0:n.alertLinkText)&&(null==n?void 0:n.alertLinkHref)){var s=(null==n?void 0:n.alertLinkIsDownload)?{download:""}:{},u=a().createElement(a().Fragment,null,a().createElement(i.AlertActionLink,null,a().createElement("a",l({href:n.alertLinkHref},s),n.alertLinkText)));c.actionLinks=u}return(null==n?void 0:n.alertLinkIsDownload)&&(null==n?void 0:n.alertLinkHref)&&(c.downloadHref=n.alertLinkHref),c}(e,t,n),s=c(c([],u,!0),[l({},r)],!1);return(null==n?void 0:n.keyOfAlertToReplace)&&(s=s.filter((function(e){return e.key!==n.keyOfAlertToReplace}))),f(s),r.key}(e,t,n)},removeNotification:function(e){return function(e){f(u.filter((function(t){return t.key!==e})))}(e)}};return a().createElement(s.Provider,{value:m},t)}},3217:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(2950),a=n(8001);const i=function(){var e=(0,r.useContext)(a.u),t=e.notifications,n=e.addNotification;return{notifications:t,addSuccessNotification:function(e,t){return n("success",e,t)},addErrorNotification:function(e,t){return n("danger",e,t)},addInfoNotification:function(e,t){return n("info",e,t)},removeNotification:e.removeNotification}}}}]);