function EI(a){this.a=a}
function KI(a){this.b=a}
function iyb(){this.a=new Oxc}
function PI(){throw new Arc}
function gI(b,a){return b.b[EDc+a]}
function QI(a,b){this.a=a;this.b=b}
function pwb(a,b){this.a=a;this.b=b}
function fI(a,b){return tU(b,1)?gI(a,rU(b,1)):null}
function hI(a,b){var c;this.a=a;this.b={};for(c=0;c<a.length;++c){this.b[EDc+a[c]]=b[c]}}
function JI(a){var b;if(a.a>=a.b.a.a.length){throw new Ryc}b=a.b.a.a[a.a++];return new QI(b,gI(a.b.a,b))}
function hyb(a){var b;b=rU(a.a.ie(aMc),160);if(!b){b=new hI(hU(Adb,qAc,1,[YJc,VJc,_Jc,XJc,aKc,$Jc,bMc,cMc]),hU(Adb,qAc,1,[dMc,eMc,fMc,gMc,hMc,iMc,jMc,kMc]));a.a.ke(aMc,b)}return b}
function lwb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r;f=new iyb;n=new m5b;i=rU(n.j,100);n.o[$Gc]=5;q=Tgb(G2);o=new ZZb(q);jj(o,new pwb(a,q),(kx(),kx(),jx));p=new c7b;p.e[$Gc]=3;_6b(p,new L2b("Cet exemple interagit avec l'\xE9chatillon de l'interface:"));_6b(p,o);g5b(n,0,0,p);v5b(i,0)[PIc]=2;g=new Lac;g.cb[QIc]='Amelie';CB(g.a);g.cb.style[lDc]=NLc;d5b(n,1,0,'<b>Pr\xE9nom:<\/b>');g5b(n,1,1,g);k=new Lac;k.cb[QIc]='Crutcher';CB(k.a);k.cb.style[lDc]=NLc;d5b(n,2,0,'<b>Nom:<\/b>');g5b(n,2,1,k);b=new _7b;c=hyb(f);for(e=c.he().Zb();e.te();){d=rU(e.ue(),161);j=rU(d.we(),1);r=rU(d.Lc(),1);X7b(b,r,j,-1)}d5b(n,3,0,'<b>Couleur Pr\xE9f\xE9r\xE9e:<\/b>');g5b(n,3,1,b);return n}
var aMc='colorMap';Ceb(362,363,QAc,hI);_.fe=function iI(a){return (tU(a,1)?gI(this,rU(a,1)):null)!=null};_.he=function jI(){return new EI(this)};_.ie=function kI(a){return tU(a,1)?gI(this,rU(a,1)):null};_.me=function lI(){return this.a.length};_.a=null;_.b=null;Ceb(364,365,SAc,EI);_.pe=function FI(a){var b,c;if(!tU(a,161)){return false}b=rU(a,161);c=fI(this.a,b.we());if(c!=null&&vqc(c,b.Lc())){return true}return false};_.Zb=function GI(){return new KI(this)};_.me=function HI(){return this.a.a.length};_.a=null;Ceb(367,1,{},KI);_.te=function LI(){return this.a<this.b.a.a.length};_.ue=function MI(){return JI(this)};_.ve=function NI(){throw new Arc};_.a=0;_.b=null;Ceb(368,1,TAc,QI);_.eQ=function RI(a){var b;if(tU(a,161)){b=rU(a,161);if(vqc(this.a,b.we())&&vqc(this.b,b.Lc())){return true}}return false};_.we=function SI(){return this.a};_.Lc=function TI(){return this.b};_.hC=function UI(){var a,b;a=0;b=0;this.a!=null&&(a=$qc(this.a));this.b!=null&&(b=$qc(this.b));return a^b};_.xe=function VI(a){return PI(rU(a,1))};_.tS=function WI(){return this.a+rEc+this.b};_.a=null;_.b=null;Ceb(654,1,aBc,pwb);_.Dc=function qwb(a){Mgb(this.a,this.b+YLc)};_.a=null;_.b=null;Ceb(655,1,dBc);_.lc=function uwb(){khb(this.b,lwb(this.a))};Ceb(680,1,{},iyb);var G2=wpc(YHc,'ExampleConstants'),d2=upc(YHc,'CwConstantsExample$1',654),F2=upc(YHc,'ExampleConstants_fr',680),ZZ=upc(lIc,'ConstantMap',362),YZ=upc(lIc,'ConstantMap$EntryImpl',368),XZ=upc(lIc,'ConstantMap$1',364),WZ=upc(lIc,'ConstantMap$1$1',367);SBc(vn)(30);