(this["webpackJsonpreact-trello"]=this["webpackJsonpreact-trello"]||[]).push([[0],{37:function(u,t,D){},56:function(u,t,D){},58:function(u,t,D){},67:function(u,t,D){},68:function(u,t,D){},69:function(u,t,D){},70:function(u,t,D){},71:function(u,t,D){},72:function(u,t,D){},73:function(u,t,D){},74:function(u,t,D){"use strict";D.r(t);var e=D(1),r=D.n(e),n=D(30),i=D.n(n),a=(D(37),D(15)),s=D(7),o=D(8),F=D(10),c=D(9),C=D(14),A=D(2),E=D(12),l={baseURL:"https://trello-back.shpp.me/asadov/api/v1",boards:"board/"},B=D(31),d=D.n(B).a.create({baseURL:l.baseURL,headers:{"Content-Type":"application/json",Authorization:"Bearer 123"}});d.interceptors.response.use((function(u){return u.data}));var b=d,h=function(u){return b.post(l.boards,{title:u})},j=function(u){return b.delete(l.boards+u)},f=function(u){return null===u.trim().match(/^(?:[ ,-\.0-9A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])+$/)?["Uncorrect title.","Title can't be empty. \n            It can use numbers, letters (a, A), spaces, dashes, dots, underscores."]:null},p=(D(56),D(0));function m(u){var t=u.title,D=u.onChangeFunc,e=u.onSubmitFunc,r=u.onCancelFunc;return Object(p.jsx)("div",{className:"add-form__modal",onClick:r,children:Object(p.jsxs)("form",{className:"add-form",onSubmit:e,onClick:function(u){return u.stopPropagation()},children:[Object(p.jsx)("label",{className:"add-form__title",htmlFor:"newTitle",children:"New board title"}),Object(p.jsx)("input",{className:"add-form__input input",placeholder:"Type new board title here...",id:"newTitle",value:t,onChange:D}),Object(p.jsx)("button",{className:"btn",children:"Add board"})]})})}D(58);function O(u){var t=u.board,D=t.id,e=t.title,r=u.onClickFunc;return Object(p.jsxs)("div",{className:"board-tmb",children:[Object(p.jsx)(C.b,{to:"/board/".concat(D),className:"board-tmb__link",children:e}),Object(p.jsx)("button",{className:"board-tmb__btn",onClick:function(){return r(D)},children:"x"})]})}D(67);var w=function(u){Object(F.a)(D,u);var t=Object(c.a)(D);function D(){var u;Object(s.a)(this,D);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return(u=t.call.apply(t,[this].concat(r))).showError=u.props.showError,u.state={boards:[],isBoardCreatorVisible:!1,newTitle:""},u.showBoardCreator=function(){u.setState({isBoardCreatorVisible:!0})},u.hideBoardCreator=function(){u.setState({isBoardCreatorVisible:!1})},u.changeTitleInput=function(t){u.setState({newTitle:t.target.value})},u.submitNewBoard=function(t){t.preventDefault();var D,e=f(u.state.newTitle);e?(D=u).showError.apply(D,Object(E.a)(e)):h(u.state.newTitle).finally(u.hideBoardCreator).then((function(t){u.setState((function(D){return{boards:[].concat(Object(E.a)(D.boards),[{id:t.id,title:u.state.newTitle}]),newTitle:""}}))})).catch((function(t){u.showError("Error while creating board",t.message)}))},u.delBoard=function(t){j(t).then((function(D){var e=u.state.boards.filter((function(u){return u.id!==t}));u.setState({boards:Object(E.a)(e)})})).catch((function(t){u.showError("Error while deleting board",t.message)}))},u}return Object(o.a)(D,[{key:"componentDidMount",value:function(){var u=this;b.get(l.boards).then((function(t){var D=t.boards;u.setState({boards:D})})).catch((function(t){u.showError("Error while geting boards",t.message)}))}},{key:"makeBoards",value:function(){var u=this;return this.state.boards.map((function(t){return Object(p.jsx)(O,{board:t,onClickFunc:u.delBoard},t.id)}))}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"home-container",children:[Object(p.jsx)("h1",{className:"boards__title",children:"My boards"}),this.state.boards.length>0&&Object(p.jsxs)("div",{className:"boards",children:[this.makeBoards(),Object(p.jsx)("button",{className:"boards__btn",onClick:this.showBoardCreator,children:"Add board"})]}),this.state.isBoardCreatorVisible&&Object(p.jsx)(m,{title:this.state.newTitle,onChangeFunc:this.changeTitleInput,onSubmitFunc:this.submitNewBoard,onCancelFunc:this.hideBoardCreator})]})}}]),D}(r.a.Component),v=function(u){return b.get(l.boards+u)},g=function(u,t){return b.put(l.boards+u,{title:t})},x=function(u,t){return b.post(l.boards+u+"/list/",t)},y=D(17),T=(D(68),function(u){Object(F.a)(D,u);var t=Object(c.a)(D);function D(){var u;Object(s.a)(this,D);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return(u=t.call.apply(t,[this].concat(r))).onSubmitTitle=u.props.onSubmitTitle,u.title=u.props.title,u.state={newTitle:"",isEditorVisible:!1},u.onChangeInput=function(t){u.setState({newTitle:t.target.value})},u.onSubmitFunc=function(){u.toggleEditor(),u.onSubmitTitle(u.state.newTitle),u.setState({newTitle:""})},u.onKeyUpFunc=function(t){"Enter"===t.code&&u.onSubmitFunc()},u.toggleEditor=function(){u.setState((function(u){return{isEditorVisible:!u.isEditorVisible}}))},u}return Object(o.a)(D,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"creator__box",children:[this.state.isEditorVisible&&Object(p.jsx)("input",{className:"title__input input",placeholder:"Type new title here...",value:this.state.newTitle,onChange:this.onChangeInput,onBlur:this.onSubmitFunc,onKeyUp:this.onKeyUpFunc}),Object(p.jsx)("button",{className:"btn",onClick:this.toggleEditor,children:this.state.isEditorVisible?"Cancel":this.title})]})}}]),D}(r.a.Component)),N=(D(69),function(u){Object(F.a)(D,u);var t=Object(c.a)(D);function D(){var u;Object(s.a)(this,D);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return(u=t.call.apply(t,[this].concat(r))).onSubmitTitle=u.props.onSubmitTitle,u.state={newTitle:u.props.title,isEditorVisible:!1},u.onChangeInput=function(t){u.setState({newTitle:t.target.value})},u.onSubmitFunc=function(){u.toggleEditor(),u.onSubmitTitle(u.state.newTitle)},u.onKeyUpFunc=function(t){"Enter"===t.code&&u.onSubmitFunc()},u.toggleEditor=function(){u.setState((function(u){return{isEditorVisible:!u.isEditorVisible}}))},u}return Object(o.a)(D,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"title__box",children:[Object(p.jsx)("h2",{className:"title",onClick:this.toggleEditor,children:this.props.title}),this.state.isEditorVisible&&Object(p.jsx)("input",{className:"title__input input",placeholder:"Type new title here...",value:this.state.newTitle,onChange:this.onChangeInput,onBlur:this.onSubmitFunc,onKeyUp:this.onKeyUpFunc})]})}}]),D}(r.a.Component)),S=(D(70),function(u){Object(F.a)(D,u);var t=Object(c.a)(D);function D(u){var e;return Object(s.a)(this,D),(e=t.call(this,u)).submitNewTitle=function(u){var t,D=f(u);D?(t=e).showError.apply(t,Object(E.a)(D)):function(u,t,D){return b.put(l.boards+u+"/list/"+t,{title:D})}(e.boardId,e.state.id,u).then((function(t){e.setState({title:u})})).catch((function(u){e.showError("Error while update list",u.message)}))},e.createNewCard=function(u){var t=f(u);if(t){var D;(D=e).showError.apply(D,Object(E.a)(t))}else{var r,n,i=Object.keys(e.state.cards).length,s=e.state.id;(r=e.boardId,n={title:u,position:i,list_id:s},b.post(l.boards+r+"/card/",n)).then((function(t){e.setState((function(D){return{cards:Object(a.a)(Object(a.a)({},D.cards),{},Object(y.a)({},t.id,{id:t.id,title:u,description:"",users:[],created_at:t.id,position:i}))}}))})).catch((function(u){e.showError("Error while creating list",u.message)}))}},e.boardId=u.boardId,e.showError=u.showError,e.state=Object(a.a)({},u.list),e}return Object(o.a)(D,[{key:"makeCards",value:function(){return Object.values(this.state.cards).map((function(u){return Object(p.jsxs)("h3",{children:[" ",u.title," "]},u.id)}))}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"list",children:[Object(p.jsx)(N,{className:"list__title",title:this.state.title,onSubmitTitle:this.submitNewTitle}),Object(p.jsxs)("div",{children:[this.makeCards(),Object(p.jsx)(T,{title:"Create Card",onSubmitTitle:this.createNewCard})]})]})}}]),D}(r.a.Component)),_=(D(71),function(u){Object(F.a)(D,u);var t=Object(c.a)(D);function D(){var u;Object(s.a)(this,D);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return(u=t.call.apply(t,[this].concat(r))).boardId=u.props.match.params.id,u.showError=u.props.showError,u.state={title:"",lists:{},users:[]},u.reloadBoard=function(){v(u.boardId).then((function(t){var D=t.title,e=t.lists,r=t.users;u.setState({title:D,lists:e,users:r}),console.log(e)})).catch((function(t){u.showError("Error while get board",t.message)}))},u.submitNewTitle=function(t){var D,e=f(t);e?(D=u).showError.apply(D,Object(E.a)(e)):g(u.boardId,t).then((function(D){u.setState({title:t})})).catch((function(t){u.showError("Error while updating board",t.message)}))},u.createNewList=function(t){var D=f(t);if(D){var e;(e=u).showError.apply(e,Object(E.a)(D))}else{var r=Object.keys(u.state.lists).length;x(u.boardId,{title:t,position:r}).then((function(t){u.reloadBoard()})).catch((function(t){u.showError("Error while creating list",t.message)}))}},u}return Object(o.a)(D,[{key:"componentDidMount",value:function(){this.reloadBoard()}},{key:"makeLists",value:function(){var u=this;return Object.values(this.state.lists).map((function(t){return Object(p.jsx)(S,{boardId:u.boardId,list:t,showError:u.showError},t.id)}))}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)(C.b,{className:"home-link",to:"/",children:"Home"}),this.state.title&&Object(p.jsx)(N,{title:this.state.title,onSubmitTitle:this.submitNewTitle})]}),Object(p.jsxs)("div",{className:"lists",children:[this.makeLists(),Object(p.jsx)(T,{title:"Create List",onSubmitTitle:this.createNewList})]})]})}}]),D}(r.a.Component));D(72);function k(u){var t=u.title,D=u.message;return Object(p.jsxs)("div",{className:"error__box",children:[Object(p.jsx)("h2",{className:"error__title",children:t}),Object(p.jsx)("p",{className:"error__message",children:D})]})}D(73);var I=function(u){Object(F.a)(D,u);var t=Object(c.a)(D);function D(){var u;Object(s.a)(this,D);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return(u=t.call.apply(t,[this].concat(r))).state={error:{title:"",message:""}},u.showError=function(t,D){u.setState({error:{title:t,message:D}}),setTimeout((function(){return u.setState({error:{title:"",message:""}})}),2e3)},u}return Object(o.a)(D,[{key:"render",value:function(){var u=this;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(C.a,{children:Object(p.jsxs)(A.d,{children:[Object(p.jsx)(A.b,{exact:!0,path:"/",children:Object(p.jsx)(w,{showError:this.showError})}),Object(p.jsx)(A.b,{path:"/board/:id",children:function(t){return Object(p.jsx)(_,Object(a.a)({showError:u.showError},t))}}),Object(p.jsx)(A.a,{from:"/react-trello",to:"/"})]})}),this.state.error.title&&Object(p.jsx)(k,{title:this.state.error.title,message:this.state.error.message})]})}}]),D}(r.a.Component),V=function(u){u&&u instanceof Function&&D.e(3).then(D.bind(null,75)).then((function(t){var D=t.getCLS,e=t.getFID,r=t.getFCP,n=t.getLCP,i=t.getTTFB;D(u),e(u),r(u),n(u),i(u)}))};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(I,{})}),document.getElementById("root")),V()}},[[74,1,2]]]);
//# sourceMappingURL=main.f06930dc.chunk.js.map