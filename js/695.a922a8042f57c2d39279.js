(self.webpackChunksubscription_central=self.webpackChunksubscription_central||[]).push([[695],{67073:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var r=n(94015),a=n.n(r),s=n(23645),i=n.n(s)()(a());i.push([e.id,".manifests :root{--ins-color--orange: #ec7a08}.manifests button:focus{outline:none}\n","",{version:3,sources:["webpack://./src/App.scss"],names:[],mappings:"AAAA,iBACM,4BAAoB,CAD1B,wBACgD,YAAY",sourcesContent:[".manifests{\n:root{--ins-color--orange: #ec7a08}button:focus{outline:none}\n\n}"],sourceRoot:""}]);const o=i},50417:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(77865),a=n.n(r),s=n(334),i=n(43476),o=n(31394),l=n(41011),c=n(20167);const u=function(e){var t=e.children,n=(0,r.useState)({status:"loading",isOrgAdmin:null}),i=n[0],u=n[1],m={user:i,setUser:u},f=(0,s.useLocation)();return(0,r.useEffect)((function(){u({status:"loading",isOrgAdmin:null}),function(){try{return window.insights.chrome.auth.getUser()}catch(e){throw new Error("Error authenticating user: "+e.message)}}().then((function(e){u({status:"loaded",isOrgAdmin:e.identity.user.is_org_admin})})).catch((function(){u({status:"error",isOrgAdmin:null})}))}),[f.pathname]),a().createElement(l.Z.Provider,{value:m},"loading"===i.status&&a().createElement(o.qb,null),"loaded"===i.status&&t,"error"===i.status&&a().createElement(c.Z,null))};var m=(0,r.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(184),n.e(808),n.e(862)]).then(n.bind(n,35862))})),f=(0,r.lazy)((function(){return Promise.all([n.e(252),n.e(184),n.e(582)]).then(n.bind(n,53582))})),d=(0,r.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(184),n.e(309)]).then(n.bind(n,92309))})),p=function(){return a().createElement("div",{className:"manifests"},a().createElement(r.Suspense,{fallback:a().createElement(o.qb,null)},a().createElement(u,null,a().createElement(s.Switch,null,a().createElement(s.Route,{exact:!0,path:"/",component:m}),a().createElement(s.Route,{path:"/oops",component:f}),a().createElement(s.Route,{path:"/no-permissions",component:d}),a().createElement(s.Route,null,a().createElement(s.Redirect,{to:"/oops"}))))))},h=(n(14154),n(8738)),E=n(24685),y=n(83215),g=n(88767),v=n(48679),A=new v.S({defaultOptions:{retry:5,retryDelay:1e4,staleTime:3e5,refetchOnWindowFocus:!1,refetchOnMount:!1}});const w=(0,s.withRouter)((0,i.connect)()((function(e){return(0,r.useEffect)((function(){return(0,h.JH)().register({notifications:y.ee}),insights.chrome.init(),insights.chrome.identifyApp("manifests"),insights.chrome.on("APP_NAVIGATION",(function(e){return undefined.props.history.push("/".concat(e.navId))}))}),[]),a().createElement(g.QueryClientProvider,{client:A},a().createElement(E.ZP,null),a().createElement(p,{childProps:e}))})))},31394:(e,t,n)=>{"use strict";n.d(t,{s3:()=>o,qx:()=>c,qb:()=>u});var r=n(77865),a=n.n(r),s=n(17345),i=n(20777);const o=function(){return a().createElement(s.EmptyState,{variant:s.EmptyStateVariant.large},a().createElement(s.EmptyStateIcon,{icon:i.wl}),a().createElement(s.Title,{headingLevel:"h2",size:"lg"},"Create a new manifest to export subscriptions"),a().createElement(s.EmptyStateBody,null,"You currently have no manifests displayed. Create a new manifest to export subscriptions from the Red Hat Customer Portal to your on-premise subscription management application."),a().createElement(s.Button,{variant:"primary"},"Create new manifest"))};n(2789);var l=n(71070);const c=function(e){var t=e.clearFilters;return a().createElement(s.EmptyState,{variant:s.EmptyStateVariant.small},a().createElement(s.EmptyStateIcon,{icon:l.ZP}),a().createElement(s.Title,{headingLevel:"h2",size:"lg"},"No results found"),a().createElement(s.EmptyStateBody,null,"No results match the filter criteria. Remove all filters or clear all filters to show results."),a().createElement(s.Button,{variant:"link",onClick:t},"Clear all filters"))},u=function(){return a().createElement(s.Bullseye,null,a().createElement(s.Spinner,null))}},55206:(e,t,n)=>{"use strict";n.d(t,{S1:()=>o});var r=n(8738),a=n(68573),s=n.n(a),i=n(84885);function o(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.JH)({},[s(),(0,i.ZP)({errorDescriptionKey:["detail","stack"]})].concat(t))}},14154:(e,t,n)=>{"use strict";var r=n(93379),a=n.n(r),s=n(67073),i=a()(s.default,{insert:"head",singleton:!1});if(!s.default.locals||e.hot.invalidate){var o=s.default.locals;e.hot.accept(67073,(t=>{s=n(67073),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(o,s.default.locals)?(o=s.default.locals,i(s.default)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),s.default.locals},41011:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(77865).createContext)({user:{isOrgAdmin:null,status:"loading"},setUser:function(){}})},2789:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(77865),a=n.n(r),s=n(17345),i=n(71070);const o=function(){return a().createElement(s.EmptyState,{variant:s.EmptyStateVariant.small},a().createElement(s.EmptyStateIcon,{icon:i.ZP}),a().createElement(s.Title,{headingLevel:"h2",size:"lg"},"No manifests found"),a().createElement(s.EmptyStateBody,null,"No manifests were found under your account."))}}}]);
//# sourceMappingURL=695.a922a8042f57c2d39279.js.map