(function(){"use strict";var o={4232:function(o,n,t){var i=t(9242),s=t(3396);const c=(0,s._)("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi",crossorigin:"anonymous"},null,-1),d=(0,s._)("header",null,"🧬 DNA 전사 & 번역 도구",-1),h={class:"tool"},e=(0,s._)("p",{class:"title"},"1. DNA 입력",-1),r=(0,s._)("p",{class:"description"},[(0,s.Uk)(" 대부분의 생명체에서 유전 정보를 담고 있는 이중 나선 구조의 화학 물질."),(0,s._)("br"),(0,s.Uk)(" 아데닌(A), 구아닌(G), 사이토신(C), 타이민(T)의 4종의 염기를 함유하며,"),(0,s._)("br"),(0,s.Uk)(" 이 염기 서열의 배열 순서에 유전 정보가 포함됩니다."),(0,s._)("br"),(0,s.Uk)(" (잘못된 3염기 조합을 넣을 시, 그 3염기 조합은 번역되지 않습니다.) ")],-1),l={class:"box input-group mb-3"},a=(0,s._)("p",{class:"title"},"2. 전사된 RNA 확인",-1),u=(0,s._)("p",{class:"description"},[(0,s.Uk)(" 앞서 입력한 DNA에서 A는 U로, G는 C로 바뀌는 '전사' 과정이 이루어집니다."),(0,s._)("br"),(0,s.Uk)(" 그리고, 3개씩 잘라서 '코돈'을 생성합니다. 이 코돈에 따라 단백질이 형성됩니다. ")],-1),p={class:"box input-group"},A=["value"],C=(0,s._)("p",{class:"title"},"3. RNA 번역",-1),U=(0,s._)("p",{class:"description"},[(0,s.Uk)(" 각 코돈은 20가지의 아미노산들로 번역됩니다."),(0,s._)("br"),(0,s.Uk)(" 종결 코돈: 번역 과정에서 해당 코돈을 만나면 리보솜의 두 단위체가 분리되어서 번역이 종결됩니다."),(0,s._)("br")],-1),G=["value"],f=(0,s._)("footer",null,[(0,s._)("br"),(0,s.Uk)("Copyright © 2022, GreenScreen410. All rights reserved.")],-1);function b(o,n,t,i,b,_){return(0,s.wg)(),(0,s.iD)(s.HY,null,[c,((0,s.wg)(),(0,s.j4)((0,s.LL)(o.script),{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",integrity:"sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3",async:""})),(0,s._)("body",null,[d,(0,s._)("div",h,[(0,s._)("div",null,[e,r,(0,s._)("div",l,[(0,s._)("input",{class:"input-group-text",placeholder:"DNA 입력, 대소문자는 구분하지 않습니다.",onChange:n[0]||(n[0]=(...o)=>_.input&&_.input(...o))},null,32),(0,s._)("button",{class:"transcription-btn btn btn-primary",onClick:n[1]||(n[1]=(...o)=>_.transcription&&_.transcription(...o))},"전사")])]),(0,s._)("div",null,[a,u,(0,s._)("div",p,[(0,s._)("input",{class:"input-group-text",placeholder:"먼저 DNA를 입력해 주세요.",value:b.dna,readonly:""},null,8,A),(0,s._)("button",{class:"btn btn-secondary",onClick:n[2]||(n[2]=(...o)=>_.make_codon&&_.make_codon(...o))},"코돈 생성"),(0,s._)("button",{class:"btn btn-success",onClick:n[3]||(n[3]=(...o)=>_.translation&&_.translation(...o))},"번역")])]),(0,s._)("div",null,[C,U,(0,s._)("input",{class:"box input-group-text",placeholder:"먼저 코돈 생성과 번역을 해주세요.",value:b.codon,readonly:""},null,8,G)])]),f])],64)}var _={name:"App",data(){return{dna:"",transcripted_dna:"",codon:"",translated_codon:"",isMakeCodon:!1,isTranslation:!1}},methods:{input(o){this.transcripted_dna=o.target.value.toUpperCase()},transcription(){this.dna=this.transcripted_dna.replaceAll("A","U").replaceAll("T","A").replaceAll("C","g").replaceAll("G","c").replaceAll("g","G").replaceAll("c","C");let o=document.getElementsByClassName("make-codon-button");console.log(o),o.disabled="active"},make_codon(){this.codon=this.dna.match(/.{1,3}/g);let o=this.codon.length;for(let n=0;n<o+1;n++)this.codon[n].length<3&&delete this.codon[n]},translation(){for(let o=0;o<this.codon.length;o++)"UCA"==this.codon[o]&&(this.codon[o]="세린"),"UCC"==this.codon[o]&&(this.codon[o]="세린"),"UCG"==this.codon[o]&&(this.codon[o]="세린"),"UCU"==this.codon[o]&&(this.codon[o]="세린"),"UUC"==this.codon[o]&&(this.codon[o]="페닐알라닌"),"UUU"==this.codon[o]&&(this.codon[o]="페닐알라닌"),"UUA"==this.codon[o]&&(this.codon[o]="류신"),"UUG"==this.codon[o]&&(this.codon[o]="류신"),"UAC"==this.codon[o]&&(this.codon[o]="티로신"),"UAU"==this.codon[o]&&(this.codon[o]="티로신"),"UAA"==this.codon[o]&&(this.codon[o]="(종결 코돈)"),"UAG"==this.codon[o]&&(this.codon[o]="(종결 코돈)"),"UGC"==this.codon[o]&&(this.codon[o]="시스테인"),"UGU"==this.codon[o]&&(this.codon[o]="시스테인"),"UGA"==this.codon[o]&&(this.codon[o]="(종결 코돈)"),"UGG"==this.codon[o]&&(this.codon[o]="트립토판"),"CUA"==this.codon[o]&&(this.codon[o]="류신"),"CUC"==this.codon[o]&&(this.codon[o]="류신"),"CUG"==this.codon[o]&&(this.codon[o]="류신"),"CUU"==this.codon[o]&&(this.codon[o]="류신"),"CCA"==this.codon[o]&&(this.codon[o]="프롤린"),"CCC"==this.codon[o]&&(this.codon[o]="프롤린"),"CCG"==this.codon[o]&&(this.codon[o]="프롤린"),"CCU"==this.codon[o]&&(this.codon[o]="프롤린"),"CAC"==this.codon[o]&&(this.codon[o]="히스티딘"),"CAU"==this.codon[o]&&(this.codon[o]="히스티딘"),"CAA"==this.codon[o]&&(this.codon[o]="글루타민"),"CAG"==this.codon[o]&&(this.codon[o]="글루타민"),"CGA"==this.codon[o]&&(this.codon[o]="아르기닌"),"CGC"==this.codon[o]&&(this.codon[o]="아르기닌"),"CGG"==this.codon[o]&&(this.codon[o]="아르기닌"),"CGU"==this.codon[o]&&(this.codon[o]="아르기닌"),"AUA"==this.codon[o]&&(this.codon[o]="아이소류신"),"AUC"==this.codon[o]&&(this.codon[o]="아이소류신"),"AUU"==this.codon[o]&&(this.codon[o]="아이소류신"),"AUG"==this.codon[o]&&(this.codon[o]="메티오닌"),"ACA"==this.codon[o]&&(this.codon[o]="트레오닌"),"ACC"==this.codon[o]&&(this.codon[o]="트레오닌"),"ACG"==this.codon[o]&&(this.codon[o]="트레오닌"),"ACU"==this.codon[o]&&(this.codon[o]="트레오닌"),"AAC"==this.codon[o]&&(this.codon[o]="아스파라긴"),"AAU"==this.codon[o]&&(this.codon[o]="아스파라긴"),"AAA"==this.codon[o]&&(this.codon[o]="라이신"),"AAG"==this.codon[o]&&(this.codon[o]="라이신"),"AGC"==this.codon[o]&&(this.codon[o]="세린"),"AGU"==this.codon[o]&&(this.codon[o]="세린"),"AGA"==this.codon[o]&&(this.codon[o]="아르기닌"),"AGG"==this.codon[o]&&(this.codon[o]="아르기닌"),"GUA"==this.codon[o]&&(this.codon[o]="발린"),"GUC"==this.codon[o]&&(this.codon[o]="발린"),"GUG"==this.codon[o]&&(this.codon[o]="발린"),"GUU"==this.codon[o]&&(this.codon[o]="발린"),"GCA"==this.codon[o]&&(this.codon[o]="알라닌"),"GCC"==this.codon[o]&&(this.codon[o]="알라닌"),"GCG"==this.codon[o]&&(this.codon[o]="알라닌"),"GCU"==this.codon[o]&&(this.codon[o]="알라닌"),"GAC"==this.codon[o]&&(this.codon[o]="아스파트산"),"GAU"==this.codon[o]&&(this.codon[o]="아스파트산"),"GAA"==this.codon[o]&&(this.codon[o]="글루탐산"),"GAG"==this.codon[o]&&(this.codon[o]="글루탐산"),"GGA"==this.codon[o]&&(this.codon[o]="글라이신"),"GGC"==this.codon[o]&&(this.codon[o]="글라이신"),"GGG"==this.codon[o]&&(this.codon[o]="글라이신"),"GGU"==this.codon[o]&&(this.codon[o]="글라이신")}}},v=t(89);const g=(0,v.Z)(_,[["render",b]]);var k=g;(0,i.ri)(k).mount("#app")}},n={};function t(i){var s=n[i];if(void 0!==s)return s.exports;var c=n[i]={exports:{}};return o[i](c,c.exports,t),c.exports}t.m=o,function(){var o=[];t.O=function(n,i,s,c){if(!i){var d=1/0;for(l=0;l<o.length;l++){i=o[l][0],s=o[l][1],c=o[l][2];for(var h=!0,e=0;e<i.length;e++)(!1&c||d>=c)&&Object.keys(t.O).every((function(o){return t.O[o](i[e])}))?i.splice(e--,1):(h=!1,c<d&&(d=c));if(h){o.splice(l--,1);var r=s();void 0!==r&&(n=r)}}return n}c=c||0;for(var l=o.length;l>0&&o[l-1][2]>c;l--)o[l]=o[l-1];o[l]=[i,s,c]}}(),function(){t.n=function(o){var n=o&&o.__esModule?function(){return o["default"]}:function(){return o};return t.d(n,{a:n}),n}}(),function(){t.d=function(o,n){for(var i in n)t.o(n,i)&&!t.o(o,i)&&Object.defineProperty(o,i,{enumerable:!0,get:n[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){t.o=function(o,n){return Object.prototype.hasOwnProperty.call(o,n)}}(),function(){var o={143:0};t.O.j=function(n){return 0===o[n]};var n=function(n,i){var s,c,d=i[0],h=i[1],e=i[2],r=0;if(d.some((function(n){return 0!==o[n]}))){for(s in h)t.o(h,s)&&(t.m[s]=h[s]);if(e)var l=e(t)}for(n&&n(i);r<d.length;r++)c=d[r],t.o(o,c)&&o[c]&&o[c][0](),o[c]=0;return t.O(l)},i=self["webpackChunkdna_to_protein"]=self["webpackChunkdna_to_protein"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(4232)}));i=t.O(i)})();
//# sourceMappingURL=app.ebbc098d.js.map