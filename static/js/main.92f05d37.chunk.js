(this["webpackJsonpreact-trello"]=this["webpackJsonpreact-trello"]||[]).push([[0],{35:function(t,e,r){},54:function(t,e,r){},56:function(t,e,r){},65:function(t,e,r){},66:function(t,e,r){},67:function(t,e,r){},68:function(t,e,r){},69:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),i=r(28),s=r.n(i),o=(r(35),r(9)),c=r(2),l=r(19),d=r(11),u=r(12),b=r(14),h=r(13),j={baseURL:"https://trello-back.shpp.me/asadov/api/v1",boards:"board/"},m=r(29),f=r.n(m).a.create({baseURL:j.baseURL,headers:{"Content-Type":"application/json",Authorization:"Bearer 123"}});f.interceptors.response.use((function(t){return t.data}));var p=f,g=function(t){return p.post(j.boards,{title:t})},O=function(t){return p.delete(j.boards+t)},v=(r(54),r(1));function w(t){var e=t.title,r=t.onChangeFunc,n=t.onSubmitFunc,a=t.onCancelFunc;return Object(v.jsx)("div",{className:"add-form__modal",onClick:a,children:Object(v.jsxs)("form",{className:"add-form",onSubmit:n,onClick:function(t){return t.stopPropagation()},children:[Object(v.jsx)("label",{className:"add-form__title",htmlFor:"newTitle",children:"New board title"}),Object(v.jsx)("input",{className:"add-form__input input",placeholder:"Type new board title here...",id:"newTitle",value:e,onChange:r}),Object(v.jsx)("button",{className:"add-form__btn",children:"Add board"})]})})}r(56);function x(t){var e=t.board,r=e.id,n=e.title,a=t.onClickFunc;return Object(v.jsxs)("div",{className:"board-tmb",children:[Object(v.jsx)(o.b,{to:"/board/".concat(r),className:"board-tmb__link",children:n}),Object(v.jsx)("button",{className:"board-tmb__btn",onClick:function(){return a(r)},children:"x"})]})}r(65);function T(t){var e=t.title,r=t.message;return Object(v.jsxs)("div",{className:"error__box",children:[Object(v.jsx)("h2",{className:"error__title",children:e}),Object(v.jsx)("p",{className:"error__message",children:r})]})}r(66);var C=function(t){Object(b.a)(r,t);var e=Object(h.a)(r);function r(){var t;Object(d.a)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={error:{title:"",message:""},boards:[],isBoardCreatorVisible:!1,newTitle:""},t.showBoardCreator=function(){t.setState({isBoardCreatorVisible:!0})},t.hideBoardCreator=function(){t.setState({isBoardCreatorVisible:!1})},t.changeTitleInput=function(e){t.setState({newTitle:e.target.value})},t.submitNewBoard=function(e){e.preventDefault(),g(t.state.newTitle).finally(t.setState({isBoardCreatorVisible:!1})).then((function(e){t.setState((function(r){return{boards:[].concat(Object(l.a)(r.boards),[{id:e.id,title:t.state.newTitle}]),newTitle:""}}))})).catch((function(e){t.showError("Error while create board",e.message)}))},t.delBoard=function(e){O(e).then((function(r){var n=t.state.boards.filter((function(t){return t.id!==e}));t.setState({boards:Object(l.a)(n)})})).catch((function(e){t.showError("Error while delete board",e.message)}))},t.showError=function(e,r){t.setState({error:{title:e,message:r}}),setTimeout((function(){return t.setState({error:{title:"",message:""}})}),3e3)},t}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var t=this;p.get(j.boards).then((function(e){var r=e.boards;t.setState({boards:r})})).catch((function(e){t.showError("Error while get boards",e.message)}))}},{key:"makeBoards",value:function(){var t=this;return this.state.boards.map((function(e){return Object(v.jsx)(x,{board:e,onClickFunc:t.delBoard},e.id)}))}},{key:"render",value:function(){return Object(v.jsxs)("div",{className:"home-container",children:[Object(v.jsx)("h1",{className:"boards__title",children:"My boards"}),this.state.boards.length>0&&Object(v.jsxs)("div",{className:"boards",children:[this.makeBoards(),Object(v.jsx)("button",{className:"boards__btn",onClick:this.showBoardCreator,children:"Add board"})]}),this.state.error.title&&Object(v.jsx)(T,{title:this.state.error.title,message:this.state.error.message}),this.state.isBoardCreatorVisible&&Object(v.jsx)(w,{title:this.state.newTitle,onChangeFunc:this.changeTitleInput,onSubmitFunc:this.submitNewBoard,onCancelFunc:this.hideBoardCreator})]})}}]),r}(a.a.Component),B=function(t,e){return p.put(j.boards+t,{title:e})},_=(r(67),function(t){Object(b.a)(r,t);var e=Object(h.a)(r);function r(){var t;Object(d.a)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).boardId=t.props.match.params.id,t.state={error:{title:"",message:""},title:"",lists:{},users:[],newTitle:"",isBoardTitleEditorVisible:!1},t.toggleTitleEditor=function(){t.setState((function(t){return{isBoardTitleEditorVisible:!t.isBoardTitleEditorVisible}}))},t.showError=function(e,r){t.setState({error:{title:e,message:r}}),setTimeout((function(){return t.setState({error:{title:"",message:""}})}),3e3)},t.changeTitleInput=function(e){t.setState({newTitle:e.target.value})},t.submitNewTitle=function(e){e.preventDefault(),B(t.boardId,t.state.newTitle).finally(t.setState({isBoardTitleEditorVisible:!1})).then((function(e){console.log(e),t.setState((function(t){return{title:t.newTitle,newTitle:""}}))})).catch((function(e){t.showError("Error while create board",e.message)}))},t}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var t,e=this;console.log("bid>> ",this.boardId),(t=this.boardId,p.get(j.boards+t)).then((function(t){var r=t.title,n=t.lists,a=t.users;e.setState({title:r,lists:n,users:a})})).catch((function(t){e.showError("Error while get board",t.message)}))}},{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(o.b,{to:"/",children:"Home"}),Object(v.jsx)("h1",{onClick:this.toggleTitleEditor,children:this.state.title}),this.state.isBoardTitleEditorVisible&&Object(v.jsx)("input",{className:"board-title__input input",placeholder:"Type new board title here...",value:this.state.newTitle,onChange:this.changeTitleInput,onBlur:this.submitNewTitle}),this.state.error.title&&Object(v.jsx)(T,{title:this.state.error.title,message:this.state.error.message})]})}}]),r}(a.a.Component));r(68);var N=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(o.a,{children:Object(v.jsxs)(c.c,{children:[Object(v.jsx)(c.a,{exact:!0,path:"/",component:C}),Object(v.jsx)(c.a,{path:"/board/:id",component:_}),Object(v.jsx)(c.a,{path:"/react-trello",component:C})]})})})},S=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,70)).then((function(e){var r=e.getCLS,n=e.getFID,a=e.getFCP,i=e.getLCP,s=e.getTTFB;r(t),n(t),a(t),i(t),s(t)}))};s.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(N,{})}),document.getElementById("root")),S()}},[[69,1,2]]]);
//# sourceMappingURL=main.92f05d37.chunk.js.map