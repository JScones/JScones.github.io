"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5575],{5575:(ee,S,d)=>{d.r(S),d.d(S,{CableSelectionModule:()=>X});var C=d(6895),r=d(433),l=d(4633),D=d(4466),v=d(1862),T=d(655),Z=d(4814),I=d(2754),f=d(6645);class x{constructor(n,t,a,i,s,u,c,g,p,h,A,y){this.loadCurrent=n,this.routeLength=t,this.voltageDropPercent=a,this.voltageDrop=i,this.solidFlex=s,this.phase=u,this.balance=c,this.cableType=g,this.hasNeutral=p,this.armour=h,this.supplyVoltage=A,this.installationCondition=y}get conductorType(){return"Solid"==this.solidFlex?"Fixed Conductor":"Flexible Conductor"}get isUnbalancedThreePhase(){return"Three"==this.phase&&"Unbalanced"==this.balance}get phaseType(){return this.isUnbalancedThreePhase?"Single":this.phase}static fromQuery(n){if(!function N(o){const n="loadCurrent"in o&&"routeLength"in o&&"voltageDropPercent"in o&&"voltageDrop"in o&&"solidFlex"in o&&"phase"in o&&"balance"in o&&"cableType"in o&&"armour"in o&&"supplyVoltage"in o&&"installationCondition"in o;return!!(n&&(0,f.hj)(o.loadCurrent)&&(0,f.hj)(o.routeLength)&&(0,f.hj)(o.voltageDropPercent)&&(0,f.hj)(o.voltageDrop)&&(0,f.hj)(o.supplyVoltage)&&(0,f.hj)(o.installationCondition)&&["Solid","Flex"].includes(o.solidFlex)&&["Single","Three"].includes(o.phase)&&["Balanced","Unbalanced"].includes(o.balance)&&["SingleCore","Multicore","VSD","Neutral Screen"].includes(o.cableType)&&["Armoured","Unarmoured"].includes(o.armour))&&n}(n))return null;const t={loadCurrent:parseFloat(n.loadCurrent),routeLength:parseFloat(n.routeLength),voltageDropPercent:parseFloat(n.voltageDropPercent),voltageDrop:parseFloat(n.voltageDrop),solidFlex:n.solidFlex,phase:n.phase,balance:n.balance,cableType:n.cableType,hasNeutral:"true"===n.hasNeutral,armour:n.armour,supplyVoltage:parseFloat(n.supplyVoltage),installationCondition:parseInt(n.installationCondition)};return new x(t.loadCurrent,t.routeLength,t.voltageDropPercent,t.voltageDrop,t.solidFlex,t.phase,t.balance,t.cableType,t.hasNeutral,t.armour,t.supplyVoltage,t.installationCondition)}}var e=d(8256),_=d(3793),q=d(5971),U=d(2802),F=d(9098),R=d(8424);function V(o,n){if(1&o&&(e.TgZ(0,"tr")(1,"td"),e._uU(2,"Armour:"),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA()()),2&o){const t=e.oxw(2);e.xp6(4),e.Oqu(t.model.armour)}}function J(o,n){if(1&o&&(e.TgZ(0,"ion-col"),e._UZ(1,"app-cable-table",8),e.qZA()),2&o){const t=e.oxw(3);e.xp6(1),e.Q6J("cables",t.flexResults)("supplyVoltage",t.model.supplyVoltage)("loadCurrent",t.model.loadCurrent)("routeLength",t.model.routeLength)("installationCondition",t.model.installationCondition)("phase",t.model.phase)}}function O(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"ion-col"),e._UZ(2,"app-cable-table",9),e.qZA(),e.TgZ(3,"ion-col"),e._UZ(4,"app-cable-table",8),e.qZA(),e.BQk()),2&o){const t=e.oxw(3);e.xp6(2),e.Q6J("cables",t.fixedResults)("supplyVoltage",t.model.supplyVoltage)("loadCurrent",t.model.loadCurrent)("routeLength",t.model.routeLength)("installationCondition",t.model.installationCondition)("phase",t.model.phase),e.xp6(2),e.Q6J("cables",t.flexResults)("supplyVoltage",t.model.supplyVoltage)("loadCurrent",t.model.loadCurrent)("routeLength",t.model.routeLength)("installationCondition",t.model.installationCondition)("phase",t.model.phase)}}function w(o,n){if(1&o&&(e.TgZ(0,"ion-row"),e.YNc(1,J,2,6,"ion-col",2),e.YNc(2,O,5,12,"ng-container",2),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf","Flex"===t.model.solidFlex),e.xp6(1),e.Q6J("ngIf","Solid"===t.model.solidFlex)}}function M(o,n){1&o&&(e.TgZ(0,"ion-row")(1,"ion-col"),e._UZ(2,"app-no-results-card"),e.qZA()())}function Q(o,n){if(1&o&&(e.TgZ(0,"ion-grid")(1,"ion-row")(2,"ion-col",3)(3,"ion-card",4)(4,"ion-card-content",3)(5,"ion-grid")(6,"ion-row")(7,"ion-col",5)(8,"table")(9,"tr")(10,"td"),e._uU(11,"Supply Voltage:"),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA()(),e.TgZ(14,"tr")(15,"td"),e._uU(16,"Length:"),e.qZA(),e.TgZ(17,"td"),e._uU(18),e.ALo(19,"number"),e.qZA()(),e.TgZ(20,"tr")(21,"td"),e._uU(22,"Volt Drop:"),e.qZA(),e.TgZ(23,"td"),e._uU(24),e.ALo(25,"number"),e.qZA()(),e.TgZ(26,"tr")(27,"td"),e._uU(28,"Cable Type:"),e.qZA(),e.TgZ(29,"td"),e._uU(30),e.qZA()()()(),e.TgZ(31,"ion-col",6)(32,"table")(33,"tr")(34,"td"),e._uU(35,"Load Current:"),e.qZA(),e.TgZ(36,"td"),e._uU(37),e.ALo(38,"number"),e.qZA()(),e.TgZ(39,"tr")(40,"td"),e._uU(41,"Volt Drop:"),e.qZA(),e.TgZ(42,"td"),e._uU(43),e.qZA()(),e.TgZ(44,"tr")(45,"td"),e._uU(46,"Fixed/Flexible Conductor:"),e.qZA(),e.TgZ(47,"td"),e._uU(48),e.qZA()(),e.TgZ(49,"tr")(50,"td"),e._uU(51,"Install Cond:"),e.qZA(),e.TgZ(52,"td"),e._uU(53),e.qZA()(),e.YNc(54,V,5,1,"tr",2),e.qZA()()()()()()()(),e.TgZ(55,"app-loading",7),e.YNc(56,w,3,2,"ion-row",2),e.YNc(57,M,3,0,"ion-row",2),e.qZA()()),2&o){const t=e.oxw();e.xp6(13),e.hij("",t.model.supplyVoltage,"V"),e.xp6(5),e.hij("",e.xi3(19,12,t.model.routeLength,".0-3"),"m"),e.xp6(6),e.hij("",e.lcZ(25,15,t.model.voltageDrop),"V"),e.xp6(6),e.Oqu(t.model.cableType),e.xp6(7),e.hij("",e.xi3(38,17,t.model.loadCurrent,".0-3"),"A"),e.xp6(6),e.hij("",t.model.voltageDropPercent,"%"),e.xp6(5),e.Oqu(t.model.conductorType),e.xp6(5),e.Oqu(t.installationConditionText),e.xp6(1),e.Q6J("ngIf","Multicore"===t.model.cableType),e.xp6(1),e.Q6J("loading",t.loading),e.xp6(1),e.Q6J("ngIf",!t.noResults),e.xp6(1),e.Q6J("ngIf",t.noResults)}}let L=(()=>{class o{constructor(t,a,i,s,u){this.route=t,this.navController=a,this.alertController=i,this.database=s,this.cableCalculationService=u,this.fixedResults=[],this.flexResults=[],this.installConditionData=Z.B7,this.installationConditionText="",this.noResults=!1,this.loading=!0}ngOnInit(){var t,a;const i=x.fromQuery(this.route.snapshot.queryParams);if(null!==i){switch(this.model=i,i.installationCondition){case 8:case 9:case 10:case 15:this.ambientTemp=15;break;default:this.ambientTemp=30}this.installationConditionText=null!==(a=null===(t=this.installConditionData.find(s=>s.value===i.installationCondition))||void 0===t?void 0:t.text)&&void 0!==a?a:"",this.loading=!0,this.searchCables(i).catch(console.error).finally(()=>this.loading=!1)}else this.handleNoModel().catch(console.error)}searchCables(t){return(0,T.mG)(this,void 0,void 0,function*(){let a=(0,I.s)(t.cableType),i=0,s=100;"Multicore"==a&&("Single"==t.phase?(i=0,s=3):"Three"==t.phase&&(t.hasNeutral?(i=5,s=5):(i=4,s=4))),"Neutral Screen"===t.cableType&&("Single"==t.phase?(i=0,s=2):"Three"==t.phase&&(i=3,s=5));const g=(yield this.database.getPossibleCables(t.loadCurrent,t.installationCondition,a,t.cableType,i,s,t.supplyVoltage,t.solidFlex)).filter(m=>{if("Multicore"!=t.cableType)return!0;if("Armoured"==t.armour){if(!m.Series.includes("SWA")&&!m.Series.includes("SY"))return!1}else if("Unarmoured"==t.armour&&(m.Series.includes("SWA")||m.Series.includes("SY")))return!1;return!0}).map(m=>this.getCableDetails(m)),h=(yield Promise.allSettled(g)).filter(f.DZ).map(m=>m.value),{fixed:A,flex:y,total:K}=this.filterResults(h);this.fixedResults=A,this.flexResults=y,this.noResults=0===K})}getCableDetails(t){var a;return(0,T.mG)(this,void 0,void 0,function*(){const i=yield this.database.getResistance(t.SolidFlex,this.model.cableType,t.CoreSize,t.Temperature),s=yield this.database.getReactance(t.SolidFlex,this.model.cableType,t.CoreSize,t.Insulation),u=yield this.database.getCCC(this.model.phase,this.model.cableType,t.Temperature,this.model.installationCondition,t.CoreSize,t.SolidFlex);if(void 0===i||void 0===s||void 0===u)throw new Error(`Unable to find resistance, reactance or CCC for cable: resistance found ${!!i}, reactance found ${!!s}, ccc found ${!!u}`);if(t.Resistance=null==i?void 0:i.Resistance,"Tinned copper"===t.Conductor&&t.Resistance&&(t.Resistance*=1.01),t.Reactance=null==s?void 0:s.Reactance,t.CCC=null==u?void 0:u.CCC,t.ConductorTemp=this.cableCalculationService.calcConductorTemp(this.model.loadCurrent,t.CCC,t.Temperature,this.ambientTemp),t.CCC<this.model.loadCurrent)throw new Error("CCC less than load current");if(t.NearestTemp=this.cableCalculationService.roundTemp(t.ConductorTemp),t.ConductorTemp>t.NearestTemp)throw new Error("Cable conductor temp above max");let c="";c=[6,7,8,10,11,12,13,14].includes(null!==(a=this.model.installationCondition)&&void 0!==a?a:0)||"SingleCore"==this.model.cableType?"Solid":t.SolidFlex;const g=yield this.database.getResistance(c,this.model.cableType,t.CoreSize,t.NearestTemp);if(!g)throw new Error("Failed to find cable's actual reistance");if(t.ActualResistance=g.Resistance,t.Impedance=this.cableCalculationService.calcImpedance(t.ActualResistance,t.Reactance),t.UnitVoltageDrop=this.cableCalculationService.calcUnitVoltageDrop(t.Impedance,this.model.phaseType),t.ActualVoltageDrop=this.cableCalculationService.calcActualVoltageDrop(t.UnitVoltageDrop,this.model.loadCurrent,this.model.routeLength),t.VoltageDropPercent=this.model.isUnbalancedThreePhase?t.ActualVoltageDrop/230:t.ActualVoltageDrop/this.model.supplyVoltage,t.ActualVoltageDrop>this.model.voltageDrop)throw new Error("Cable voltage drop too high");return t})}filterResults(t){const i=Array.from(new Set(t.map(p=>p.CoreSize))).sort((p,h)=>p-h).slice(0,2),s=t.filter(p=>i.includes(p.CoreSize)),u=[],c=[];s.forEach(p=>{"Solid"===p.SolidFlex?u.push(p):c.push(p)});const g=(p,h)=>void 0===p.Rank||void 0===h.Rank?0:p.Rank-h.Rank;return u.sort(g),c.sort(g),{fixed:u,flex:c,total:s.length}}handleNoModel(){return(0,T.mG)(this,void 0,void 0,function*(){const t=yield this.alertController.create({header:"Something went wrong",subHeader:"Failed to read cable selection form data. Please try again..."});yield t.present(),setTimeout(()=>{t.dismiss(),this.navController.navigateBack("/cable-selection")},3e3)})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(v.gz),e.Y36(l.SH),e.Y36(l.Br),e.Y36(_.k9),e.Y36(_.i9))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-cable-selection-results"]],decls:4,vars:1,consts:[["defaultHref","cable-selection"],[1,"ion-padding"],[4,"ngIf"],[1,"ion-text-center"],["color","light",1,"summary-card","m-h-0"],["size","12","size-md","6",1,"right-border"],["size","12","size-md","6"],["loadingText","Searching...",3,"loading"],["label","Flexible Conductors \u2013 Fixed Under Load",3,"cables","supplyVoltage","loadCurrent","routeLength","installationCondition","phase"],["label","Fixed Conductors \u2013 Fixed Under Load",3,"cables","supplyVoltage","loadCurrent","routeLength","installationCondition","phase"]],template:function(t,a){1&t&&(e.TgZ(0,"app-page-header",0),e._uU(1,"Results"),e.qZA(),e.TgZ(2,"ion-content",1),e.YNc(3,Q,58,20,"ion-grid",2),e.qZA()),2&t&&(e.xp6(3),e.Q6J("ngIf",a.model))},dependencies:[C.O5,l.PM,l.FN,l.wI,l.W2,l.jY,l.Nd,q.f,U.q,F.W,R.N,C.JJ],styles:["[_nghost-%COMP%]   .summary-card[_ngcontent-%COMP%]{border-radius:2px;box-shadow:0 2px 2px #00000024,0 3px 1px -2px #0003,0 1px 5px #0000001f}[_nghost-%COMP%]   .summary-card[_ngcontent-%COMP%] > ion-card-content[_ngcontent-%COMP%]{padding:0}[_nghost-%COMP%]   table[_ngcontent-%COMP%]{border-collapse:collapse;width:80%;margin-left:auto;margin-right:auto}@media screen and (min-width: 768px){[_nghost-%COMP%]   .right-border[_ngcontent-%COMP%]{border-right:1px solid #bbbbbb}}[_nghost-%COMP%]   td[_ngcontent-%COMP%]{text-align:left;padding:8px}[_nghost-%COMP%]   td[_ngcontent-%COMP%]:nth-child(even){text-align:right}"]}),o})();var P=d(2856);function Y(o,n){if(1&o&&(e.TgZ(0,"ion-item")(1,"ion-radio",40),e._uU(2),e.qZA()()),2&o){const t=n.$implicit;e.xp6(1),e.Q6J("value",t),e.xp6(1),e.Oqu(t)}}function z(o,n){if(1&o&&(e.TgZ(0,"ion-select-option",40),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.Q6J("value",t.value),e.xp6(1),e.Oqu(t.text)}}function k(o,n){1&o&&(e.TgZ(0,"li"),e._uU(1,"Load current"),e.qZA())}function j(o,n){1&o&&(e.TgZ(0,"li"),e._uU(1,"Route length"),e.qZA())}function B(o,n){1&o&&(e.TgZ(0,"li"),e._uU(1," Voltage drop percentage "),e.qZA())}function $(o,n){if(1&o&&(e.TgZ(0,"div",41)(1,"ion-label"),e._uU(2,"Sorry, you must supply a valid value for:"),e.qZA(),e.TgZ(3,"ul"),e.YNc(4,k,2,0,"li",42),e.YNc(5,j,2,0,"li",42),e.YNc(6,B,2,0,"li",42),e.qZA()()),2&o){const t=e.oxw();e.xp6(4),e.Q6J("ngIf",!t.form.controls.loadCurrent.valid),e.xp6(1),e.Q6J("ngIf",!t.form.controls.routeLength.valid),e.xp6(1),e.Q6J("ngIf",!t.form.controls.voltageDropPercent.valid)}}const E=function(o){return{"fake-disabled":o}},G=function(){return{standalone:!0}};let b=class{constructor(n,t,a,i){this.fb=n,this.databaseService=t,this.alertController=a,this.navController=i,this.form=this.fb.group({loadCurrent:[10,r.kI.compose([r.kI.required,r.kI.pattern(/^\d*\.?\d*$/),r.kI.min(1e-6)])],routeLength:[10,r.kI.compose([r.kI.required,r.kI.pattern(/^\d*\.?\d*$/),r.kI.min(1e-6)])],voltageDropPercent:this.fb.control(2.5,r.kI.compose([r.kI.required,r.kI.pattern(/^\d*\.?\d*$/),r.kI.min(1e-6),r.kI.max(100)])),solidFlex:["Solid"],phase:["Three"],balance:["Balanced"],cableType:["SingleCore"],hasNeutral:[!1],armour:"Unarmoured"}),this.supplyVoltage=230,this.installConditionData=Z.jY.map(({InstallConditionID:s,Description:u})=>({text:u,value:s})),this.cableTypeData=Z.Sl,this.installCondition=1,this.installPic="assets/imgs/installationCond/ThreeSingleCore1_L.png",this.voltageDrop=2.5,this.form.valueChanges.pipe((0,P.t)(this)).subscribe(()=>{this.updateCableType(),this.updatePic(),this.updateNeutral()})}get showNeutral(){return("Multicore"==this.form.value.cableType||"VSD"==this.form.value.cableType)&&"Three"==this.form.value.phase}get disableMulticore(){return"Multicore"!==this.form.value.cableType||null}ngOnInit(){this.updateInstallConditions().catch(n=>console.error(n)),this.updatePic(),this.updateNeutral()}updatePic(){var n;let t=["VSD","Neutral Screen"].includes(null!==(n=this.form.value.cableType)&&void 0!==n?n:"")?"Multicore":this.form.value.cableType;this.installPic=`assets/imgs/installationCond/${this.form.value.phase}${t}${"Multicore"==t&&this.form.value.hasNeutral?"Neutral":""}${this.installCondition}_L.png`}updateInstallConditions(){return(0,T.mG)(this,void 0,void 0,function*(){const{phase:n,cableType:t,solidFlex:a}=this.form.value,s=(yield this.databaseService.getPossibleInstallationConditions(n,t,a)).map(c=>({text:c.Description,value:c.InstallConditionID}));this.installConditionData=s,s.map(c=>c.value).indexOf(this.installCondition)>-1||(this.installCondition=this.installConditionData[0].value)})}checkInstallCond(){8==this.installCondition&&this.generateAlert("Please ensure cable is installed as per AS/NZS 3000. Clause 3.11 \u2013 Underground Wiring Systems.",'"Buried, Direct" Selected').catch(n=>console.error(n))}search(){this.navController.navigateForward(["/cable-selection/results"],{queryParams:Object.assign(Object.assign({},this.form.value),{supplyVoltage:this.supplyVoltage,installationCondition:this.installCondition,voltageDrop:this.voltageDrop})}).catch(console.error)}updateCableType(){this.updateInstallConditions().catch(n=>console.error(n)),this.supplyVoltage="Single"==this.form.value.phase?230:400,this.updateVoltageDrop()}updateVoltageDrop(){const{voltageDropPercent:n,phase:t,balance:a}=this.form.value,i=null!=n?n:0;this.voltageDrop="Three"==t&&"Unbalanced"==a?i/100*230:this.supplyVoltage*(i/100)}generateAlert(n,t){return(0,T.mG)(this,void 0,void 0,function*(){return(yield this.alertController.create({header:t,subHeader:n,buttons:["ok"]})).present()})}updateNeutral(){const n=this.form.controls.hasNeutral;this.showNeutral?n.enable({emitEvent:!1}):(n.disable({emitEvent:!1}),n.setValue(!1,{emitEvent:!1}))}};b.\u0275fac=function(n){return new(n||b)(e.Y36(r.j3),e.Y36(_.k9),e.Y36(l.Br),e.Y36(l.SH))},b.\u0275cmp=e.Xpm({type:b,selectors:[["app-cable-selection"]],decls:105,vars:25,consts:[[1,"ion-padding-top","ion-padding-bottom"],[3,"formGroup"],["size","12","size-md","6"],[1,"list-label"],["lines","none",1,"hmm"],["type","number","formControlName","loadCurrent","label","Load Current (A)","errorText","A positive load current is required",1,"ion-text-right",3,"clearInput"],["lines","none"],["label","Length (m)","type","number","formControlName","routeLength","errorText","A positive route length is required",1,"ion-text-right",3,"clearInput"],["lines","none",1,"w-100"],["label","Volt Drop (%)","type","number","formControlName","voltageDropPercent","errorText","A valid voltage drop percentage is required",1,"ion-text-right",3,"clearInput"],["color","firstflexblue"],[1,"ion-text-right","fake-input","small-width"],[1,"noMargin"],["formControlName","phase"],["value","Single"],["value","Three"],[3,"hidden"],["formControlName","balance"],["value","Balanced"],["value","Unbalanced"],["disabled","","value","Balanced"],["disabled","","value","Unbalanced"],["formControlName","solidFlex"],["value","Flex"],["value","Solid"],["formControlName","cableType"],[4,"ngFor","ngForOf"],["formControlName","armour"],["value","Unarmoured"],["value","Armoured"],[1,"list-label",3,"ngClass"],["formControlName","hasNeutral"],["size","12","size-md","9","size-xl","6"],[3,"lines"],["interface","action-sheet","label","","justify","start",1,"full-select",3,"ngModel","ngModelOptions","ngModelChange","ionChange"],[3,"value",4,"ngFor","ngForOf"],["size","12","size-md","3","size-xl","3",1,"ion-text-center"],["width","140","height","140",1,"transparentBG",3,"src"],["class","form-warnings ion-padding",4,"ngIf"],["color","firstflexblue","expand","block",3,"disabled","click"],[3,"value"],[1,"form-warnings","ion-padding"],[4,"ngIf"]],template:function(n,t){1&n&&(e.TgZ(0,"app-page-header"),e._uU(1,"Cable Selection"),e.qZA(),e.TgZ(2,"ion-content",0)(3,"form",1)(4,"ion-grid")(5,"ion-row")(6,"ion-col",2)(7,"ion-label",3),e._uU(8,"Details:"),e.qZA(),e.TgZ(9,"ion-item",4),e._UZ(10,"ion-input",5),e.qZA(),e.TgZ(11,"ion-item",6),e._UZ(12,"ion-input",7),e.qZA(),e.TgZ(13,"ion-item",8),e._UZ(14,"ion-input",9),e.qZA(),e.TgZ(15,"ion-item")(16,"ion-label",10),e._uU(17,"Volt Drop"),e.qZA(),e.TgZ(18,"ion-label",11),e._uU(19),e.ALo(20,"number"),e.qZA()()(),e.TgZ(21,"ion-col",2)(22,"ion-list",12)(23,"ion-label",3),e._uU(24," Select Phase: "),e.qZA(),e.TgZ(25,"ion-radio-group",13)(26,"ion-item")(27,"ion-radio",14),e._uU(28,"Single phase"),e.qZA()(),e.TgZ(29,"ion-item")(30,"ion-radio",15),e._uU(31,"Three Phase"),e.qZA()()()(),e.TgZ(32,"ion-item")(33,"ion-label",10),e._uU(34,"Supply Voltage"),e.qZA(),e.TgZ(35,"ion-label",11),e._uU(36),e.qZA()(),e.TgZ(37,"div",16)(38,"ion-list",12)(39,"ion-label",3),e._uU(40," Balanced/Unbalanced: "),e.qZA(),e.TgZ(41,"ion-radio-group",17)(42,"ion-item")(43,"ion-radio",18),e._uU(44,"Balanced"),e.qZA()(),e.TgZ(45,"ion-item")(46,"ion-radio",19),e._uU(47,"Unbalanced"),e.qZA()()()()(),e.TgZ(48,"div",16)(49,"ion-list",12)(50,"ion-label",3),e._uU(51," Balanced/Unbalanced: "),e.qZA(),e.TgZ(52,"ion-radio-group",17)(53,"ion-item")(54,"ion-radio",20),e._uU(55,"Balanced"),e.qZA()(),e.TgZ(56,"ion-item")(57,"ion-radio",21),e._uU(58,"Unbalanced"),e.qZA()()()()()(),e.TgZ(59,"ion-col",2)(60,"ion-list",12)(61,"ion-label",3),e._uU(62,"Fixed or Flexible Conductor:"),e.qZA(),e.TgZ(63,"ion-radio-group",22)(64,"ion-item")(65,"ion-radio",23),e._uU(66,"Flexible Conductor"),e.qZA()(),e.TgZ(67,"ion-item")(68,"ion-radio",24),e._uU(69,"Fixed Conductor"),e.qZA()()()()(),e.TgZ(70,"ion-col",2)(71,"ion-list",12)(72,"ion-label",3),e._uU(73," Select Cable Type: "),e.qZA(),e.TgZ(74,"ion-radio-group",25),e.YNc(75,Y,3,2,"ion-item",26),e.qZA()()(),e.TgZ(76,"ion-col",2)(77,"ion-list",12)(78,"ion-label",3),e._uU(79," Armour "),e.qZA(),e.TgZ(80,"ion-radio-group",27)(81,"ion-item")(82,"ion-radio",28),e._uU(83,"Unarmoured"),e.qZA()(),e.TgZ(84,"ion-item")(85,"ion-radio",29),e._uU(86,"Armoured"),e.qZA()()()()(),e.TgZ(87,"ion-col",2)(88,"ion-label",30),e._uU(89," Has Neutral Conductor: "),e.qZA(),e.TgZ(90,"ion-item")(91,"ion-checkbox",31),e._uU(92,"Neutral Conductor"),e.qZA()()()(),e.TgZ(93,"ion-row")(94,"ion-col",32)(95,"ion-label",3),e._uU(96," Select Installation Condition: "),e.qZA(),e.TgZ(97,"ion-item",33)(98,"ion-select",34),e.NdJ("ngModelChange",function(i){return t.installCondition=i})("ionChange",function(){return t.updatePic(),t.checkInstallCond()}),e.YNc(99,z,2,2,"ion-select-option",35),e.qZA()()(),e.TgZ(100,"ion-col",36),e._UZ(101,"img",37),e.qZA()()()(),e.YNc(102,$,7,3,"div",38),e.TgZ(103,"ion-button",39),e.NdJ("click",function(){return t.search()}),e._uU(104," Calculate "),e.qZA()()),2&n&&(e.xp6(3),e.Q6J("formGroup",t.form),e.xp6(7),e.Q6J("clearInput",!0),e.xp6(2),e.Q6J("clearInput",!0),e.xp6(2),e.Q6J("clearInput",!0),e.xp6(5),e.hij("",e.xi3(20,19,t.voltageDrop,".0-2")," V"),e.xp6(17),e.hij("",t.supplyVoltage," V"),e.xp6(1),e.Q6J("hidden","Three"!==t.form.value.phase),e.xp6(11),e.Q6J("hidden","Three"===t.form.value.phase),e.xp6(27),e.Q6J("ngForOf",t.cableTypeData),e.xp6(7),e.uIk("disabled",t.disableMulticore),e.xp6(3),e.uIk("disabled",t.disableMulticore),e.xp6(3),e.Q6J("ngClass",e.VKq(22,E,!t.showNeutral)),e.xp6(9),e.Q6J("lines",!1),e.xp6(1),e.Q6J("ngModel",t.installCondition)("ngModelOptions",e.DdM(24,G)),e.xp6(1),e.Q6J("ngForOf",t.installConditionData),e.xp6(2),e.Q6J("src",t.installPic,e.LSH),e.xp6(1),e.Q6J("ngIf",!t.form.valid),e.xp6(1),e.Q6J("disabled",!t.form.valid))},dependencies:[C.mk,C.sg,C.O5,r._Y,r.JJ,r.JL,r.On,l.YG,l.nz,l.wI,l.W2,l.jY,l.pK,l.Ie,l.Q$,l.q_,l.B7,l.se,l.Nd,l.t9,l.n0,l.w,l.as,l.U5,l.QI,r.sg,r.u,U.q,C.JJ],styles:["[_nghost-%COMP%]   .list-label[_ngcontent-%COMP%]{margin-top:1rem;display:block}[_nghost-%COMP%]   .form-warnings[_ngcontent-%COMP%]{color:var(--ion-color-danger)}[_nghost-%COMP%]   .form-warnings[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:block}"]}),b=(0,T.gn)([(0,P.c)()],b);const H=[{path:"",component:b},{path:"results",component:L}];let W=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[v.Bz.forChild(H),v.Bz]}),o})(),X=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[C.ez,r.u5,l.Pc,r.UX,W,D.m]}),o})()}}]);