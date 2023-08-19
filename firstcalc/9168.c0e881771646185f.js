"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9168],{9168:(T,d,i)=>{i.r(d),i.d(d,{MotorKvaModule:()=>K});var f=i(6895),a=i(433),t=i(4633),v=i(4466),h=i(1862),Z=i(655),p=i(2856),o=i(8256),b=i(3793),C=i(2802);let u=class{constructor(n,e){this.fb=n,this.cableCalculationService=e,this.motorKva="motor",this.motorForm=this.fb.group({power:[1],kWHP:["kW"],powerFactor:[.8],efficiency:[65],phaseMotor:["Single"],supplyVoltageMotor:[230]}),this.motorCurrent=0,this.kvaForm=this.fb.group({kva:[10],supplyVoltageKva:[230],phaseKva:["Single"]}),this.amps=0}ngOnInit(){this.updateMotorCurrent(this.motorForm.value),this.updateCurrent(this.kvaForm.value),this.motorForm.valueChanges.pipe((0,p.t)(this)).subscribe(n=>this.updateMotorCurrent(n)),this.kvaForm.valueChanges.pipe((0,p.t)(this)).subscribe(n=>this.updateCurrent(n))}updateMotorCurrent(n){const{power:e,kWHP:s,powerFactor:l,efficiency:m,phaseMotor:g,supplyVoltageMotor:c}=n;void 0===e||void 0===s||void 0===l||void 0===m||void 0===g||void 0===c||(this.motorCurrent="kW"===s?this.cableCalculationService.calcMotorCurrentKW(e,l,c,m,g):this.cableCalculationService.calcMotorCurrentHP(e,l,c,m,g))}updateCurrent(n){const{kva:e,phaseKva:s,supplyVoltageKva:l}=n;void 0===e||void 0===s||void 0===l||(this.amps=this.cableCalculationService.kvaToCurrent(e,l,s))}};u.\u0275fac=function(n){return new(n||u)(o.Y36(a.j3),o.Y36(b.i9))},u.\u0275cmp=o.Xpm({type:u,selectors:[["app-motor-kva"]],decls:73,vars:19,consts:[[1,"ion-padding"],[3,"formGroup","hidden"],[1,"ion-no-padding"],["size","8"],["label","Power","formControlName","power","type","number",1,"ion-text-right",3,"clearInput"],["size","4"],["interface","popover","formControlName","kWHP","label","",1,"full-select"],["value","kW"],["value","HP"],["size","12"],["label","Power Factor","formControlName","powerFactor","type","number",1,"ion-text-right",3,"clearInput"],["label","Efficiency","formControlName","efficiency","type","number",1,"ion-text-right",3,"clearInput"],[1,"no-margin"],[1,"list-label","m-t-1","d-block"],["formControlName","phaseMotor"],["value","Single"],["value","Three"],["label","Supply Voltage","formControlName","supplyVoltageMotor","type","number",1,"ion-text-right",3,"clearInput"],["color","firstflexblue",1,"ion-text-center","big-font","ion-text-wrap","d-block","m-v-1"],["color","firstflexblue",1,"ion-text-center","d-block"],["label","KVA","formControlName","kva","type","number",1,"ion-text-right",3,"clearInput"],["label","Supply Voltage","formControlName","supplyVoltageKva","type","number",1,"ion-text-right",3,"clearInput"],["formControlName","phaseKva"],[1,"list-label"],["color","firstflexblue",1,"ion-text-center","big-font","d-block","m-v-1"],["mode","md","color","firstflexblue"],["mode","md","color","light",3,"ngModel","ngModelChange"],["value","motor",1,"bigger-font"],["value","kva",1,"bigger-font"]],template:function(n,e){1&n&&(o.TgZ(0,"app-page-header"),o._uU(1,"Motor Current / KVA"),o.qZA(),o.TgZ(2,"ion-content",0)(3,"form",1)(4,"ion-grid",2)(5,"ion-row")(6,"ion-col",3)(7,"ion-item"),o._UZ(8,"ion-input",4),o.qZA()(),o.TgZ(9,"ion-col",5)(10,"ion-item")(11,"ion-select",6)(12,"ion-select-option",7),o._uU(13,"kW"),o.qZA(),o.TgZ(14,"ion-select-option",8),o._uU(15,"HP"),o.qZA()()()(),o.TgZ(16,"ion-col",9)(17,"ion-item"),o._UZ(18,"ion-input",10),o.qZA(),o.TgZ(19,"ion-item"),o._UZ(20,"ion-input",11),o.qZA()()(),o.TgZ(21,"ion-row")(22,"ion-col",9)(23,"ion-list",12)(24,"ion-label",13),o._uU(25," Phase "),o.qZA(),o.TgZ(26,"ion-radio-group",14)(27,"ion-item")(28,"ion-radio",15),o._uU(29,"Single phase"),o.qZA()(),o.TgZ(30,"ion-item")(31,"ion-radio",16),o._uU(32,"Three Phase"),o.qZA()()()(),o.TgZ(33,"ion-item"),o._UZ(34,"ion-input",17),o.qZA()(),o.TgZ(35,"ion-col",9)(36,"div")(37,"ion-label",18),o._uU(38),o.ALo(39,"number"),o.qZA(),o.TgZ(40,"ion-label",19),o._uU(41," (AC induction motor) "),o.qZA()()()()()(),o.TgZ(42,"form",1)(43,"ion-grid")(44,"ion-row")(45,"ion-col",9)(46,"ion-item"),o._UZ(47,"ion-input",20),o.qZA()(),o.TgZ(48,"ion-col",9)(49,"ion-item"),o._UZ(50,"ion-input",21),o.qZA()(),o.TgZ(51,"ion-col",9)(52,"ion-list",12)(53,"ion-radio-group",22)(54,"ion-label",23),o._uU(55," Phase "),o.qZA(),o.TgZ(56,"ion-item")(57,"ion-radio",15),o._uU(58,"Single phase"),o.qZA()(),o.TgZ(59,"ion-item")(60,"ion-radio",16),o._uU(61,"Three Phase"),o.qZA()()()()(),o.TgZ(62,"ion-col",9)(63,"ion-label",24),o._uU(64),o.ALo(65,"number"),o.qZA()()()()()(),o.TgZ(66,"ion-footer")(67,"ion-toolbar",25)(68,"ion-segment",26),o.NdJ("ngModelChange",function(l){return e.motorKva=l}),o.TgZ(69,"ion-segment-button",27),o._uU(70,"Motor Current"),o.qZA(),o.TgZ(71,"ion-segment-button",28),o._uU(72,"KVA to A"),o.qZA()()()()),2&n&&(o.xp6(3),o.Q6J("formGroup",e.motorForm)("hidden","kva"===e.motorKva),o.xp6(5),o.Q6J("clearInput",!0),o.xp6(10),o.Q6J("clearInput",!0),o.xp6(2),o.Q6J("clearInput",!0),o.xp6(14),o.Q6J("clearInput",!0),o.xp6(4),o.hij(" Full Load Current: ",o.xi3(39,13,e.motorCurrent,".0-2"),"A "),o.xp6(4),o.Q6J("formGroup",e.kvaForm)("hidden","motor"===e.motorKva),o.xp6(5),o.Q6J("clearInput",!0),o.xp6(3),o.Q6J("clearInput",!0),o.xp6(14),o.hij(" Amps: ",o.xi3(65,16,e.amps,".0-2"),"A "),o.xp6(4),o.Q6J("ngModel",e.motorKva))},dependencies:[a._Y,a.JJ,a.JL,a.On,a.sg,a.u,t.wI,t.W2,t.fr,t.jY,t.pK,t.Ie,t.Q$,t.q_,t.B7,t.se,t.Nd,t.cJ,t.GO,t.t9,t.n0,t.sr,t.as,t.U5,t.QI,C.q,f.JJ],styles:["[_nghost-%COMP%]   .big-font[_ngcontent-%COMP%]{font-size:1.5em;font-weight:700}[_nghost-%COMP%]   .bigger-font[_ngcontent-%COMP%]{font-size:1.33em;font-weight:700}"]}),u=(0,Z.gn)([(0,p.c)()],u);const M=[{path:"",component:u}];let A=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[h.Bz.forChild(M),h.Bz]}),r})(),K=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[f.ez,a.u5,a.UX,t.Pc,A,v.m]}),r})()}}]);