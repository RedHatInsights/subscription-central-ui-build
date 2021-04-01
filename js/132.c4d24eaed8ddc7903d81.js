(self.webpackChunksubscription_central=self.webpackChunksubscription_central||[]).push([[132],{11705:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var a=n(94015),r=n.n(a),i=n(23645),o=n.n(i)()(r());o.push([e.id,".manifests .sca-more-info-icon{color:#4c9aec;margin-left:5px;margin-top:1px;margin-bottom:-1px}\n","",{version:3,sources:["webpack://./src/components/SCAInfoIconWithPopover/SCAInfoIconWithPopover.scss"],names:[],mappings:"AAAA,+BACoB,aAAa,CAAC,eAAe,CAAC,cAAc,CAAC,kBAAkB",sourcesContent:[".manifests{\n.sca-more-info-icon{color:#4c9aec;margin-left:5px;margin-top:1px;margin-bottom:-1px}\n\n}"],sourceRoot:""}]);const l=o},46083:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var a=n(94015),r=n.n(a),i=n(23645),o=n.n(i)()(r());o.push([e.id,".manifests h2.pf-c-title{margin-bottom:20px}.manifests .pf-c-badge{margin-left:5px}.manifests .pf-c-table{margin-top:30px}\n","",{version:3,sources:["webpack://./src/components/SatelliteManifestPanel/SatelliteManifestPanel.scss"],names:[],mappings:"AAAA,yBACc,kBAAkB,CADhC,uBAC6C,eAAe,CAD5D,uBACyE,eAAe",sourcesContent:[".manifests{\nh2.pf-c-title{margin-bottom:20px}.pf-c-badge{margin-left:5px}.pf-c-table{margin-top:30px}\n\n}"],sourceRoot:""}]);const l=o},93132:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>y});var a=n(77865),r=n.n(a),i=n(334),o=n(86350),l=n(48716),c=n(39173),s=n(17345),u=n(78443),m=n(31369),f=n(50470);const p=function(e){var t=e.href,n=e.children;return r().createElement(s.Button,{variant:"link",component:"a",href:t,target:"_blank",isInline:!0,icon:r().createElement(f.ZP,null),iconPosition:"right"},n)};n(29041);const d=function(){return r().createElement(r().Fragment,null,r().createElement(s.Popover,{"aria-label":"Learn more about Simple Content Access",headerContent:"Simple Content Access",bodyContent:r().createElement("p",null,"Simple content access is a set of capabilities that enables a change in the way Red Hat manages its subscription and entitlement enforcement model. When enabled, you are allowed to consume content on your systems without strict entitlement enforcement."),footerContent:r().createElement(p,{href:"https://access.redhat.com/documentation/en-us/subscription_central/2020-10/html/getting_started_with_subscription_watch_with_simple_content_access/assembly-activating-simplecontent#con-what-is-simplecontent_assembly-simplecontent-ctxt"},"Learn more about enabling simple content access on an existing Satellite allocation and manifest")},r().createElement(m.ZP,{className:"sca-more-info-icon"})))};var h=n(48794);const g=function(e){var t=e.clearFilters;return r().createElement(s.EmptyState,{variant:s.EmptyStateVariant.small},r().createElement(s.EmptyStateIcon,{icon:h.ZP}),r().createElement(s.Title,{headingLevel:"h2",size:"lg"},"No results found"),r().createElement(s.EmptyStateBody,null,"No results match the filter criteria. Remove all filters or clear all filters to show results."),r().createElement(s.Button,{variant:"link",onClick:t},"Clear all filters"))},E=function(){return r().createElement(s.EmptyState,null,r().createElement(s.EmptyStateIcon,{variant:"container",component:function(){return r().createElement("span",{className:"pf-c-spinner",role:"progressbar","aria-valuetext":"Loading..."},r().createElement("span",{className:"pf-c-spinner__clipper"}),r().createElement("span",{className:"pf-c-spinner__lead-ball"}),r().createElement("span",{className:"pf-c-spinner__tail-ball"}))}}),r().createElement(s.Title,{size:"lg",headingLevel:"h4"},"Loading"))};n(44029);const v=function(e){var t,n,i,o,l,c=e.isLoading,m=e.data,f=(0,a.useState)([{title:"Name",transforms:[u.sortable]},{title:"Version",transforms:[u.sortable]},{title:r().createElement(r().Fragment,null,"Simple Content Access",r().createElement(d,null)),transforms:[u.sortable,(0,u.cellWidth)(20)]},{title:"UUID",transforms:[u.sortable]}])[0],p=(0,a.useState)(1),h=p[0],v=p[1],b=(0,a.useState)(10),C=b[0],A=b[1],S=(0,a.useState)(""),w=S[0],y=S[1],x=(0,a.useState)({index:0,direction:u.SortByDirection.asc}),B=x[0],_=x[1],L=function(e,t){A(t),v(1)},P=function(e,t){v(t)},I=function(){y(""),v(1)},k=function(){return m.filter((function(e){return(e.name||"").toLowerCase().includes(w.toLowerCase().trim())||(e.version||"").toLowerCase().includes(w.toLowerCase().trim())||(e.uuid||"").toLowerCase().includes(w.toLowerCase().trim())}))},F=function(){return c?0:k().length},D=function(e){return void 0===e&&(e=s.PaginationVariant.top),r().createElement(s.Pagination,{isDisabled:c,itemCount:F(),perPage:C,page:h,onSetPage:P,onPerPageSelect:L,variant:e})};return r().createElement(s.PageSection,{variant:"light"},r().createElement(s.Title,{headingLevel:"h2"},"Satellite Manifests",c?"":r().createElement(s.Badge,{isRead:!0},F())),r().createElement(s.Flex,{direction:{default:"column",md:"row"},justifyContent:{default:"justifyContentSpaceBetween"}},r().createElement(s.FlexItem,null,r().createElement(s.Split,{hasGutter:!0},r().createElement(s.SplitItem,{isFilled:!0},r().createElement(s.SearchInput,{placeholder:"Filter by name, version or UUID",value:w,onChange:function(e){y(e),v(1)},onClear:I})),r().createElement(s.SplitItem,null,r().createElement(s.Button,{variant:"primary"},"Create new manifest")))),r().createElement(s.FlexItem,{align:{default:"alignRight"}},D())),r().createElement(u.Table,{"aria-label":"Satellite Manifest Table",cells:f,rows:c?[]:(t=(h-1)*C,n=t+C,(i=B.direction,o=B.index,l=i===u.SortByDirection.desc?-1:1,k().map((function(e){return[e.name||"",e.version||"",e.simpleContentAccess||"",e.uuid||""]})).sort((function(e,t){var n=(e[o]||"").toLowerCase(),a=(t[o]||"").toLowerCase();return n<a?-1*l:n>a?1*l:0}))).slice(t,n)),sortBy:B,onSort:function(e,t,n){_({index:t,direction:n}),v(1)}},r().createElement(u.TableHeader,null),r().createElement(u.TableBody,null)),c?r().createElement(E,null):0===F()?r().createElement(g,{clearFilters:I}):"",D(s.PaginationVariant.bottom))};var b=n(88767),C=n(36808),A=n.n(C),S=function(){return function(){try{return window.insights.chrome.auth.getUser()}catch(e){throw new Error("Error authenticating user: "+e.message)}}().then((function(){return e=A().get("cs_jwt"),fetch("https://api.access.qa.redhat.com/management/v1/allocations",{headers:{Authorization:"Bearer "+e},mode:"cors"}).then((function(e){return e.json()})).catch((function(e){console.error("Error fetching Satellite Manifest data",e)}));var e})).then((function(e){return function(e){return function(e){return void 0===e&&(e=[]),e.filter((function(e){return parseInt(e.version)>=6}))}(function(e){return void 0===e&&(e=[]),e.filter((function(e){return"Satellite"===e.type}))}(e.body))}(e)})).catch((function(e){return console.error("Error fetching Satellite data",e),[]}))},w=n(20167);const y=(0,i.withRouter)((function(){var e=(0,b.useQuery)("manifests",(function(){return S()})),t=e.isLoading,n=e.error,a=e.data;return r().createElement(r().Fragment,null,r().createElement(l.Z,null,r().createElement(c.Z,{title:"Satellite Manifests"}),r().createElement("p",null,"Export subscriptions to your on-premise subscription management application")),r().createElement(o.Z,null,r().createElement(r().Fragment,null,!n&&r().createElement(v,{isLoading:t,data:a}),n&&r().createElement(w.Z,null))))}))},29041:(e,t,n)=>{"use strict";var a=n(93379),r=n.n(a),i=n(11705),o=r()(i.default,{insert:"head",singleton:!1});if(!i.default.locals||e.hot.invalidate){var l=i.default.locals;e.hot.accept(11705,(t=>{i=n(11705),function(e,t,n){if(!e&&t||e&&!t)return!1;var a;for(a in e)if(e[a]!==t[a])return!1;for(a in t)if(!e[a])return!1;return!0}(l,i.default.locals)?(l=i.default.locals,o(i.default)):e.hot.invalidate()}))}e.hot.dispose((function(){o()})),i.default.locals},44029:(e,t,n)=>{"use strict";var a=n(93379),r=n.n(a),i=n(46083),o=r()(i.default,{insert:"head",singleton:!1});if(!i.default.locals||e.hot.invalidate){var l=i.default.locals;e.hot.accept(46083,(t=>{i=n(46083),function(e,t,n){if(!e&&t||e&&!t)return!1;var a;for(a in e)if(e[a]!==t[a])return!1;for(a in t)if(!e[a])return!1;return!0}(l,i.default.locals)?(l=i.default.locals,o(i.default)):e.hot.invalidate()}))}e.hot.dispose((function(){o()})),i.default.locals}}]);
//# sourceMappingURL=132.c4d24eaed8ddc7903d81.js.map