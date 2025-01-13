import{A as g}from"./main-CGyi1V_7.js";const w=g();w.isLoggedIn();const tt=6048e5,et=864e5,nt=43200,at=1440,f=Symbol.for("constructDateFrom");function y(t,n){return typeof t=="function"?t(n):t&&typeof t=="object"&&f in t?t[f](n):t instanceof Date?new t.constructor(n):new Date(n)}function v(t,n){return y(n||t,t)}let P={};function rt(){return P}function ot(t){const n=v(t),e=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return e.setUTCFullYear(n.getFullYear()),+t-+e}function it(t,...n){const e=y.bind(null,t||n.find(a=>typeof a=="object"));return n.map(e)}const M={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},W=(t,n,e)=>{let a;const o=M[t];return typeof o=="string"?a=o:n===1?a=o.one:a=o.other.replace("{{count}}",n.toString()),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"in "+a:a+" ago":a};function l(t){return(n={})=>{const e=n.width?String(n.width):t.defaultWidth;return t.formats[e]||t.formats[t.defaultWidth]}}const p={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},k={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},D={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},S={date:l({formats:p,defaultWidth:"full"}),time:l({formats:k,defaultWidth:"full"}),dateTime:l({formats:D,defaultWidth:"full"})},F={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},C=(t,n,e,a)=>F[t];function d(t){return(n,e)=>{const a=e!=null&&e.context?String(e.context):"standalone";let o;if(a==="formatting"&&t.formattingValues){const r=t.defaultFormattingWidth||t.defaultWidth,i=e!=null&&e.width?String(e.width):r;o=t.formattingValues[i]||t.formattingValues[r]}else{const r=t.defaultWidth,i=e!=null&&e.width?String(e.width):t.defaultWidth;o=t.values[i]||t.values[r]}const s=t.argumentCallback?t.argumentCallback(n):n;return o[s]}}const A={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},x={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},T={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},j={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},z={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},O={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},V=(t,n)=>{const e=Number(t),a=e%100;if(a>20||a<10)switch(a%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"},q={ordinalNumber:V,era:d({values:A,defaultWidth:"wide"}),quarter:d({values:x,defaultWidth:"wide",argumentCallback:t=>t-1}),month:d({values:T,defaultWidth:"wide"}),day:d({values:j,defaultWidth:"wide"}),dayPeriod:d({values:z,defaultWidth:"wide",formattingValues:O,defaultFormattingWidth:"wide"})};function c(t){return(n,e={})=>{const a=e.width,o=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],s=n.match(o);if(!s)return null;const r=s[0],i=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],h=Array.isArray(i)?I(i,m=>m.test(r)):J(i,m=>m.test(r));let u;u=t.valueCallback?t.valueCallback(h):h,u=e.valueCallback?e.valueCallback(u):u;const b=n.slice(r.length);return{value:u,rest:b}}}function J(t,n){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&n(t[e]))return e}function I(t,n){for(let e=0;e<t.length;e++)if(n(t[e]))return e}function N(t){return(n,e={})=>{const a=n.match(t.matchPattern);if(!a)return null;const o=a[0],s=n.match(t.parsePattern);if(!s)return null;let r=t.valueCallback?t.valueCallback(s[0]):s[0];r=e.valueCallback?e.valueCallback(r):r;const i=n.slice(o.length);return{value:r,rest:i}}}const X=/^(\d+)(th|st|nd|rd)?/i,L=/\d+/i,Y={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},E={any:[/^b/i,/^(a|c)/i]},Q={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},R={any:[/1/i,/2/i,/3/i,/4/i]},_={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},U={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},B={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},H={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},K={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},G={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Z={ordinalNumber:N({matchPattern:X,parsePattern:L,valueCallback:t=>parseInt(t,10)}),era:c({matchPatterns:Y,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any"}),quarter:c({matchPatterns:Q,defaultMatchWidth:"wide",parsePatterns:R,defaultParseWidth:"any",valueCallback:t=>t+1}),month:c({matchPatterns:_,defaultMatchWidth:"wide",parsePatterns:U,defaultParseWidth:"any"}),day:c({matchPatterns:B,defaultMatchWidth:"wide",parsePatterns:H,defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:K,defaultMatchWidth:"any",parsePatterns:G,defaultParseWidth:"any"})},st={code:"en-US",formatDistance:W,formatLong:S,formatRelative:C,localize:q,match:Z,options:{weekStartsOn:0,firstWeekContainsDate:1}};export{nt as a,rt as b,y as c,et as d,st as e,tt as f,ot as g,at as m,it as n,v as t};
