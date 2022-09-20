(self.webpackChunksubscription_central=self.webpackChunksubscription_central||[]).push([[314],{30050:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var r=n(92950),a=n.n(r),i=n(28216),o=n(86196),l=n(66189),s=n(88767),c=n(20167);const u={rhsmAPIBase:"https://api.access.qa.redhat.com"};var f=function(){return f=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},f.apply(this,arguments)};f({},u),f({},u),f(f({},u),{rhsmAPIBase:"https://api.access.stage.redhat.com"}),f(f({},u),{rhsmAPIBase:"https://api.access.redhat.com"});var m=function(){try{return window.insights.chrome.auth.getUser()}catch(e){throw new Error("Error authenticating user: ".concat(e.message))}},p=function(){try{return window.insights.chrome.getUserPermissions("subscriptions")}catch(e){throw new Error("Error getting user permissions: ".concat(e.message))}},d=function(){return(0,s.useQuery)("user",(function(){return Promise.all([m(),(e=void 0,t=void 0,n=void 0,r=function(){var e;return function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}(this,(function(t){switch(t.label){case 0:return[4,window.insights.chrome.auth.getToken()];case 1:return e=t.sent(),[2,fetch("/api/rhsm/v2/organization",{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()}))]}}))},new(n||(n=Promise))((function(a,i){function o(e){try{s(r.next(e))}catch(e){i(e)}}function l(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((r=r.apply(e,t||[])).next())}))),p()]).then((function(e){var t=e[0],n=e[1],r=e[2].map((function(e){return e.permission}));return{canReadManifests:r.includes("subscriptions:manifests:read")||r.includes("subscriptions:*:*"),canWriteManifests:r.includes("subscriptions:manifests:write")||r.includes("subscriptions:*:*"),isOrgAdmin:!0===t.identity.user.is_org_admin,isSCACapable:!0===n.body.simpleContentAccessCapable}}));var e,t,n,r}))};const h=function(e){var t=e.children,n=(0,s.useQueryClient)(),i=(0,o.useLocation)(),u=d(),f=u.isLoading,m=u.isFetching,p=u.isSuccess,h=u.isError;return(0,r.useEffect)((function(){n.invalidateQueries("user")}),[i.pathname]),(0,r.useEffect)((function(){var e,t;p&&(null===(t=null===(e=window.insights)||void 0===e?void 0:e.chrome)||void 0===t||t.hideGlobalFilter())}),[p]),!0===h?a().createElement(c.Z,null):!0===f||!0===m?a().createElement(l.qb,null):!0===p?a().createElement(a().Fragment,null,t):void 0};var v=(0,r.lazy)((function(){return Promise.all([n.e(889),n.e(639)]).then(n.bind(n,71806))})),y=(0,r.lazy)((function(){return n.e(810).then(n.bind(n,72810))})),E=(0,r.lazy)((function(){return n.e(706).then(n.bind(n,56706))})),b=function(){return a().createElement("div",{className:"manifests"},a().createElement(r.Suspense,{fallback:a().createElement(l.qb,null)},a().createElement(h,null,a().createElement(o.Routes,null,a().createElement(o.Route,{path:"/",element:a().createElement(v,null)}),a().createElement(o.Route,{path:"/oops",element:a().createElement(y,null)}),a().createElement(o.Route,{path:"/no-permissions",element:a().createElement(E,null)}),a().createElement(o.Route,{path:"*",element:a().createElement(o.Navigate,{to:"/oops",replace:!0})})))))},g=n(14517),w=n(23212),k=n(95841);const S=function(){var e=(0,k.Z)(),t=e.notifications,n=e.removeNotification;return a().createElement(w.AlertGroup,{isToast:!0},t.map((function(e,t){return a().createElement(w.Alert,{isLiveRegion:!0,timeout:e.timeout,title:e.message,variant:e.variant,key:e.key,actionLinks:e.actionLinks,actionClose:a().createElement(w.AlertActionCloseButton,{"data-testid":"notification-close-btn-".concat(t),title:e.message,variantLabel:"".concat(e.variant," alert"),onClose:function(){n(e.key),(null==e?void 0:e.downloadHref)&&window.URL.revokeObjectURL(e.downloadHref)}})})})))};var T=new s.QueryClient({defaultOptions:{queries:{retry:3,retryDelay:1e4,staleTime:1/0,refetchOnWindowFocus:!1,refetchOnMount:!1}}});const x=(0,i.$j)()((function(){var e=(0,o.useNavigate)();return(0,r.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("manifests");var t=insights.chrome.on("APP_NAVIGATION",(function(t){var n=t.domEvent.href.replace(/^\/insights\/subscriptions\/manifests\/?/,"/");e(n)}));return function(){t()}}),[]),a().createElement(s.QueryClientProvider,{client:T},a().createElement(g.Z,null,a().createElement(S,null),a().createElement(b,null)))}))},66189:(e,t,n)=>{"use strict";n.d(t,{s3:()=>s,Bc:()=>u,qx:()=>m,qb:()=>p});var r=n(92950),a=n.n(r),i=n(23212),o=n(41084),l=n(20777);const s=function(e){var t=e.user;return a().createElement(i.EmptyState,{variant:i.EmptyStateVariant.large},a().createElement(i.EmptyStateIcon,{icon:l.wl}),a().createElement(i.Title,{headingLevel:"h2",size:"lg"},"Create a new manifest to export subscriptions"),a().createElement(i.EmptyStateBody,null,"You currently have no manifests displayed. Create a new manifest to export subscriptions from the Red Hat Customer Portal to your on-premise subscription management application."),a().createElement(o.Z,{user:t}))};var c=n(84564);const u=function(){return a().createElement(i.EmptyState,{variant:i.EmptyStateVariant.small},a().createElement(i.EmptyStateIcon,{icon:c.ZP,color:"var(--pf-global--danger-color--100)"}),a().createElement(i.Title,{headingLevel:"h3"},"Something went wrong"),a().createElement(i.EmptyStateBody,null,a().createElement("h4",null,"Try refreshing the page. If the problem persists, contact your organization administrator or visit our"," ",a().createElement(i.Button,{variant:"link",component:"a",href:"https://status.redhat.com/",target:"_blank",isInline:!0},"status page")," ","for known outages.")))};var f=n(71070);const m=function(e){var t=e.clearFilters;return a().createElement(i.EmptyState,{variant:i.EmptyStateVariant.small},a().createElement(i.EmptyStateIcon,{icon:f.ZP}),a().createElement(i.Title,{headingLevel:"h2",size:"lg"},"No results found"),a().createElement(i.EmptyStateBody,null,"No results match the filter criteria. Remove all filters or clear all filters to show results."),a().createElement(i.Button,{variant:"link",onClick:t},"Clear all filters"))},p=function(){return a().createElement(i.Bullseye,null,a().createElement(i.Spinner,null))}},30319:(e,t,n)=>{"use strict";n.d(t,{S1:()=>o});var r=n(58892),a=n(68573),i=n.n(a);function o(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.JH)({},[i()].concat(t))}},41084:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r=n(92950),a=n.n(r),i=n(23212),o=n(42283),l=n(84564),s=n(34046),c=n(66189);const u=function(e){var t=e.title;return a().createElement(i.EmptyState,{variant:i.EmptyStateVariant.small},a().createElement(i.Title,{headingLevel:"h3"},t),a().createElement(i.EmptyStateBody,null,a().createElement(c.qb,null)))};var f=n(95841),m=function(){return m=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},m.apply(this,arguments)};const p=function(e){var t=e.satelliteVersions,n=e.handleModalToggle,c=e.submitForm,p=e.isLoading,d=e.isError,h=e.isSuccess,v=(0,o.cI)({mode:"onBlur"}),y=v.control,E=v.handleSubmit,b=v.formState.errors,g=(0,r.useState)(""),w=g[0],k=g[1],S=(0,f.Z)(),T=S.addSuccessNotification,x=S.addErrorNotification,C=function(e){var t=e.satelliteManifestName,n=e.satelliteManifestType;c(t,n),k(t)},L=!1===p&&!1===d&&!1===h;return h?(T("Manifest ".concat(w," created")),n()):d&&(x("Something went wrong. Please try again"),n()),a().createElement(a().Fragment,null,L&&function(){var e,r;return a().createElement(a().Fragment,null,a().createElement(i.Title,{headingLevel:"h3",size:"2xl"},"Create new manifest"),a().createElement("p",{style:{margin:"30px 0"}},"Creating a new manifest allows you to export subscriptions to your on-premise subscription management application."),a().createElement(i.Form,{isWidthLimited:!0},a().createElement(i.FormGroup,{label:"Name",helperTextInvalid:null===(e=b.satelliteManifestName)||void 0===e?void 0:e.message,helperTextInvalidIcon:a().createElement(l.ZP,null),validated:b.satelliteManifestName?"error":"default",labelIcon:a().createElement(i.Tooltip,{position:"top",content:a().createElement("div",null,"Provide a name that will help you associate this manifest with a specific organization or on-premise subscription management application.")},a().createElement("span",{tabIndex:0,"aria-label":"Provide a name that will help you associate this manifest with a specific\n                organization or on-premise subscription management application."},a().createElement(s.ZP,null))),isRequired:!0,fieldId:"create-satellite-manifest-form-name"},a().createElement(o.Qr,{name:"satelliteManifestName",control:y,defaultValue:"",rules:{required:"Please provide a name for your new manifest",maxLength:{value:99,message:"Your manifest name must be less than 100 characters"},pattern:{value:/^[0-9A-Za-z_.-]*$/,message:"Your manifest name may contain\n                  only numbers, letters, underscores, hyphens, and periods."}},render:function(e){var t=e.field;return a().createElement(i.TextInput,m({isRequired:!0,type:"text",id:"create-satellite-manifest-form-name",placeholder:"Name"},t))}})),a().createElement(i.FormGroup,{label:"Type",helperTextInvalid:null===(r=b.satelliteManifestType)||void 0===r?void 0:r.message,helperTextInvalidIcon:a().createElement(l.ZP,null),validated:b.satelliteManifestType?"error":"default",labelIcon:a().createElement(i.Tooltip,{position:"top",content:a().createElement("div",null,"Due to variation in supported features, it is important to match the type and version of the subscription management application you are using.")},a().createElement("span",{tabIndex:0,"aria-label":"Due to variation in supported features, it is important to match the type and\n              version of the subscription management application you are using."},a().createElement(s.ZP,null))),isRequired:!0,fieldId:"create-satellite-manifest-form-type"},a().createElement(o.Qr,{name:"satelliteManifestType",control:y,rules:{required:"Please select a version for your new manifest"},defaultValue:"",render:function(e){var n=e.field;return a().createElement(i.FormSelect,m({"aria-label":"FormSelect Input",id:"create-satellite-manifest-form-type"},n),a().createElement(i.FormSelectOption,{isDisabled:!0,key:"Select type",value:"",label:"Select type"}),null==t?void 0:t.map((function(e){return a().createElement(i.FormSelectOption,{isDisabled:!1,key:e.value,value:e.value,label:e.description})})))}})),a().createElement(i.ActionGroup,null,a().createElement(i.Button,{key:"confirm",id:"save-manifest-button",variant:"primary",onClick:E(C)},"Save"),a().createElement(i.Button,{key:"cancel",id:"cancel-create-manifest-button",variant:"link",onClick:n},"Cancel"))))}(),p&&a().createElement(u,{title:"Creating manifest..."}))};var d=n(88767),h=function(){var e=(0,d.useQueryClient)();return(0,d.useMutation)((function(e){return i=e,t=void 0,n=void 0,a=function(){var e,t,n;return function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}(this,(function(r){switch(r.label){case 0:return e=i.name,t=i.version,[4,window.insights.chrome.auth.getToken()];case 1:return n=r.sent(),[2,fetch("/api/rhsm/v2/manifests?name=".concat(e,"&version=").concat(t),{method:"POST",headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){if(200!==e.status)throw new Error("Status Code ".concat(e.status,".  Error creating manifest: ").concat(e.statusText,".  "));return e.json()}))]}}))},new((r=void 0)||(r=Promise))((function(e,i){function o(e){try{s(a.next(e))}catch(e){i(e)}}function l(e){try{s(a.throw(e))}catch(e){i(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(o,l)}s((a=a.apply(t,n||[])).next())}));var t,n,r,a,i}),{onSuccess:function(t){void 0!==t&&e.invalidateQueries("manifests")}})},v=function(){return(0,d.useQuery)("satelliteVersions",(function(){return e=void 0,t=void 0,r=function(){var e;return function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}(this,(function(t){switch(t.label){case 0:return[4,window.insights.chrome.auth.getToken()];case 1:return e=t.sent(),[2,fetch("/api/rhsm/v2/manifests/versions",{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()}))]}}))},new((n=void 0)||(n=Promise))((function(a,i){function o(e){try{s(r.next(e))}catch(e){i(e)}}function l(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((r=r.apply(e,t||[])).next())}));var e,t,n,r}))};const y=function(e){var t=e.handleModalToggle,n=e.isModalOpen,r=v(),o=r.data,l=r.isLoading,s=r.isError,c=h(),f=c.data,m=c.mutate,d=c.isLoading,y=c.isSuccess,E=c.isError,b=c.reset;!1===n&&!0===y&&b();var g=void 0!==f,w=E||s;return a().createElement(a().Fragment,null,a().createElement(i.Modal,{"aria-label":"Create satellite manifest",variant:i.ModalVariant.medium,isOpen:n,onClose:t},l&&a().createElement(u,{title:"Loading..."}),!l&&a().createElement(p,{satelliteVersions:null==o?void 0:o.body,submitForm:function(e,t){m({name:e,version:t})},isLoading:d,isError:w,isSuccess:g,handleModalToggle:t})))},E=function(e){var t=e.user,n=(0,r.useState)(!1),o=n[0],l=n[1],s=function(){l(!o)};return a().createElement(a().Fragment,null,a().createElement(i.Button,{variant:"primary",onClick:s,isDisabled:!t.canWriteManifests},"Create new manifest"),a().createElement(y,{handleModalToggle:s,isModalOpen:o}))}},14517:(e,t,n)=>{"use strict";n.d(t,{u:()=>c,Z:()=>u});var r=n(92950),a=n.n(r),i=n(23212),o=n(44586),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)},s=function(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))},c=a().createContext({notifications:[],addNotification:function(e,t,n){return null},removeNotification:function(e){return null}}),u=function(e){var t=e.children,n=(0,r.useState)([]),u=n[0],f=n[1],m={notifications:u,addNotification:function(e,t,n){return function(e,t,n){var r=function(e,t,n){var r,s={variant:e,message:t,key:(0,o.Z)(),timeout:null===(r=null==n?void 0:n.hasTimeout)||void 0===r||r};if((null==n?void 0:n.alertLinkText)&&(null==n?void 0:n.alertLinkHref)){var c=(null==n?void 0:n.alertLinkIsDownload)?{download:""}:{},u=a().createElement(a().Fragment,null,a().createElement(i.AlertActionLink,null,a().createElement("a",l({href:n.alertLinkHref},c),n.alertLinkText)));s.actionLinks=u}return(null==n?void 0:n.alertLinkIsDownload)&&(null==n?void 0:n.alertLinkHref)&&(s.downloadHref=n.alertLinkHref),s}(e,t,n),c=s(s([],u,!0),[l({},r)],!1);return(null==n?void 0:n.keyOfAlertToReplace)&&(c=c.filter((function(e){return e.key!==n.keyOfAlertToReplace}))),f(c),r.key}(e,t,n)},removeNotification:function(e){return function(e){f(u.filter((function(t){return t.key!==e})))}(e)}};return a().createElement(c.Provider,{value:m},t)}},95841:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(92950),a=n(14517);const i=function(){var e=(0,r.useContext)(a.u),t=e.notifications,n=e.addNotification;return{notifications:t,addSuccessNotification:function(e,t){return n("success",e,t)},addErrorNotification:function(e,t){return n("danger",e,t)},addInfoNotification:function(e,t){return n("info",e,t)},removeNotification:e.removeNotification}}},81320:()=>{},314:()=>{}}]);
//# sourceMappingURL=../sourcemaps/314.73948fd2bfc47c774a30f72516f54a22.js.map