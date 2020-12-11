(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Baroz\mdclone\login-app-mdc\src\main.ts */"zUnb");


/***/ }),

/***/ "0YKa":
/*!*************************************************************!*\
  !*** ./src/app/containers/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _facades_user_facade_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../facades/user.facade.service */ "umru");
/* harmony import */ var _components_section_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/section/section.component */ "Rtmn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");






function DashboardComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.id);
} }
class DashboardComponent {
    constructor(userFacade) {
        this.userFacade = userFacade;
    }
    ngOnInit() {
    }
    get selectedUser() {
        return this.userFacade.getSelectedUser();
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_facades_user_facade_service__WEBPACK_IMPORTED_MODULE_1__["UserFacadeService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 6, vars: 6, consts: [["header", "", 1, "section-header"], ["body", "", 4, "ngIf"], ["body", ""], [1, "details-container"], ["icon", "user", "size", "10x"], [1, "details"], [1, "detail-item"], [1, "lbl"], [1, "value"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_div_4_Template, 29, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" User Profile - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx.selectedUser).firstName.toUpperCase(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx.selectedUser));
    } }, directives: [_components_section_section_component__WEBPACK_IMPORTED_MODULE_2__["SectionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["[_nghost-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  color: #5611b0;\n  font-size: 20px;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 20px;\n  \n  align-items: self-start;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: baseline;\n  padding-left: 35px;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%] {\n  color: #5611b0;\n  font-weight: 400;\n  font-size: 15px;\n  margin-bottom: 10px;\n  margin-right: 15px;\n  width: 100px;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQURKO0FBR0U7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUVJO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUFOO0FBQ007RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUFRO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBRVY7QUFBUTtFQUNFLGVBQUE7QUFFViIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL2Fzc2V0cy92YXJpYWJsZXNcIjtcclxuOmhvc3R7XHJcbiAgLnNlY3Rpb24taGVhZGVye1xyXG4gICAgY29sb3I6ICM1NjExYjA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIC5kZXRhaWxzLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZW5kO1xyXG4gICAgLmRldGFpbHN7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIC8qIGZsZXg6IDE7ICovXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBzZWxmLXN0YXJ0O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAuZGV0YWlsLWl0ZW17XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XHJcbiAgICAgICAgLmxibHtcclxuICAgICAgICAgIGNvbG9yOiAjNTYxMWIwO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC52YWx1ZXtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return [{ type: _facades_user_facade_service__WEBPACK_IMPORTED_MODULE_1__["UserFacadeService"] }]; }, null); })();


/***/ }),

/***/ "4ohX":
/*!***************************************!*\
  !*** ./src/app/store/user/actions.ts ***!
  \***************************************/
/*! exports provided: getUsers, setUsers, getUser, setUser, saveUser, setSelectedUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return getUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUsers", function() { return setUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveUser", function() { return saveUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectedUser", function() { return setSelectedUser; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaces */ "fvxX");


/** Action to fetch all users */
const getUsers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_interfaces__WEBPACK_IMPORTED_MODULE_1__["UsersTypesNames"].GET_USERS);
/** Action to set users in store */
const setUsers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_interfaces__WEBPACK_IMPORTED_MODULE_1__["UsersTypesNames"].SET_USERS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
/** Action to fetch user full profile*/
const getUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_interfaces__WEBPACK_IMPORTED_MODULE_1__["UsersTypesNames"].GET_USER_PROFILE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
/** Action to set user in store */
const setUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_interfaces__WEBPACK_IMPORTED_MODULE_1__["UsersTypesNames"].SET_USER_PROFILE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
/** Action to save new user */
const saveUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_interfaces__WEBPACK_IMPORTED_MODULE_1__["UsersTypesNames"].SAVE_USER_PROFILE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
/** Action to set user in store */
const setSelectedUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_interfaces__WEBPACK_IMPORTED_MODULE_1__["UsersTypesNames"].SET_SELECTED_USER, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "7qOn":
/*!****************************************!*\
  !*** ./src/app/store/login/actions.ts ***!
  \****************************************/
/*! exports provided: login, setCredentials, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCredentials", function() { return setCredentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaces */ "uzD1");


/** Action to log in the User from the Login Page */
const login = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_interfaces__WEBPACK_IMPORTED_MODULE_1__["LoginTypesNames"].LOGIN, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
/** Action to save Credentials upon successful login */
const setCredentials = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_interfaces__WEBPACK_IMPORTED_MODULE_1__["LoginTypesNames"].SET_CREDENTIALS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
/** Action to logout */
const logout = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_interfaces__WEBPACK_IMPORTED_MODULE_1__["LoginTypesNames"].LOGOUT);


/***/ }),

/***/ "9SCw":
/*!****************************************!*\
  !*** ./src/app/store/user/reducers.ts ***!
  \****************************************/
/*! exports provided: initialState, setUsersReducer, usersSelector, selectUsers, selectUser, selectSelectedUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUsersReducer", function() { return setUsersReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersSelector", function() { return usersSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUsers", function() { return selectUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUser", function() { return selectUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSelectedUser", function() { return selectSelectedUser; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "4ohX");


const initialState = {
    users: [],
    user: {},
    selectedUser: {}
};
const setUsersReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["setUsers"], (state, { users }) => (Object.assign(Object.assign({}, state), { users: [...users] }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["setUser"], (state, { user }) => (Object.assign(Object.assign({}, state), { user: Object.assign({}, user) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["setSelectedUser"], (state, { user }) => (Object.assign(Object.assign({}, state), { selectedUser: Object.assign({}, user) }))));
const usersSelector = (state) => state.users;
const selectUsers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(usersSelector, (state) => state.users);
const selectUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(usersSelector, (state) => state.user);
const selectSelectedUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(usersSelector, (state) => state.selectedUser);


/***/ }),

/***/ "9pw4":
/*!*****************************************************!*\
  !*** ./src/app/components/table/table.component.ts ***!
  \*****************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TableComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](col_r3.label);
} }
function TableComponent_div_0_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r6 = ctx.$implicit;
    const row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r4[col_r6.key]);
} }
function TableComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableComponent_div_0_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const row_r4 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.onRowSelected(row_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_div_0_div_3_div_1_Template, 3, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.config.columns);
} }
function TableComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableComponent_div_0_div_2_Template, 3, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableComponent_div_0_div_3_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.config.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.config.data);
} }
class TableComponent {
    constructor() {
        this.rowSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onRowSelected(row) {
        if (this.rowSelected) {
            this.rowSelected.emit(row);
        }
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(); };
TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-table"]], inputs: { config: "config" }, outputs: { rowSelected: "rowSelected" }, decls: 1, vars: 1, consts: [["class", "data-table", 4, "ngIf"], [1, "data-table"], [1, "data-row", "table-header"], ["class", "data-cell", 4, "ngFor", "ngForOf"], ["class", "data-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "data-cell"], [1, "data-row", 3, "click"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableComponent_div_0_Template, 4, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.config && ctx.config.data && ctx.config.data.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["[_nghost-%COMP%]   .data-table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .data-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n  color: #5611b0;\n  font-size: 17px;\n  font-weight: 400;\n}\n[_nghost-%COMP%]   .data-table[_ngcontent-%COMP%]   .data-row[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 15px;\n}\n[_nghost-%COMP%]   .data-table[_ngcontent-%COMP%]   .data-row[_ngcontent-%COMP%]:hover:not(.table-header) {\n  background: #f5f0fc;\n  outline: none;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .data-table[_ngcontent-%COMP%]   .data-row[_ngcontent-%COMP%]   .data-cell[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0YWJsZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBRko7QUFHSTtFQUNFLGNDTEc7RURNSCxlQUFBO0VBQ0EsZ0JBQUE7QUFETjtBQUdJO0VBQ0UsYUFBQTtFQUNBLGFBQUE7QUFETjtBQUVNO0VBQ0UsbUJDWGE7RURZYixhQUFBO0VBQ0EsZUFBQTtBQUFSO0FBRU07RUFDRSxPQUFBO0FBQVIiLCJmaWxlIjoidGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL2Fzc2V0cy92YXJpYWJsZXNcIjtcclxuXHJcbjpob3N0IHtcclxuICAuZGF0YS10YWJsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC50YWJsZS1oZWFkZXJ7XHJcbiAgICAgIGNvbG9yOiAkcHVycGxlO1xyXG4gICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgICAuZGF0YS1yb3d7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICY6aG92ZXI6bm90KC50YWJsZS1oZWFkZXIpe1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRzdXBlci1saWdodC1wdXJwbGU7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmRhdGEtY2VsbHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRzaGFkb3ctZmxvYXRpbmc6ICAwIDJweCAxNnB4IDAgcmdiYSg2NCw2NCw2NCwwLjE2KTtcclxuJGdyZXk6ICNlNmU2ZTY7XHJcbiRwdXJwbGU6ICM1NjExYjA7XHJcbiRsaWdodC1wdXJwbGU6ICM2ODExZDk7XHJcbiRzdXBlci1saWdodC1wdXJwbGU6ICNmNWYwZmM7XHJcbiRiNzU6ICM0MDQwNDA7XHJcblxyXG4kZ3JpZC1icmVha3BvaW50czogKFxyXG4gIHhzOiAwLCAvLyBoYW5kc2V0IHBvcnRyYWl0IChzbWFsbCwgbWVkaXVtLCBsYXJnZSkgfCBoYW5kc2V0IGxhbmRzY2FwZSAoc21hbGwpXHJcbiAgc206IDYwMHB4LCAvLyBoYW5kc2V0IGxhbmRzY2FwZSAobWVkaXVtLCBsYXJnZSkgfCB0YWJsZXQgcG9ydHJhaXQoc21hbGwsIGxhcmdlKVxyXG4gIG1kOiA5NjBweCwgLy8gIHRhYmxldCBsYW5kc2NhcGUgKHNtYWxsLCBsYXJnZSlcclxuICBsZzogMTI4MHB4LCAvLyBsYXB0b3BzIGFuZCBkZXNrdG9wc1xyXG4gIHhsOiAxNjAwcHggLy8gbGFyZ2UgZGVza3RvcHNcclxuKTtcclxuXHJcbiRjb250YWluZXItbWF4LXdpZHRoczogKFxyXG4gIHNtOiA2MDBweCxcclxuICBtZDogOTYwcHgsXHJcbiAgbGc6IDEyODBweCxcclxuICB4bDogMTYwMHB4XHJcbik7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table',
                templateUrl: './table.component.html',
                styleUrls: ['./table.component.scss']
            }]
    }], function () { return []; }, { config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DUF8":
/*!**********************************************!*\
  !*** ./src/app/base/auth-base/auth.guard.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _facades_login_facade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../facades/login.facade.service */ "LcKV");





// other imports
class AuthGuard {
    constructor(loginFacade) {
        this.loginFacade = loginFacade;
    }
    canActivate(route, state) {
        return this.isAuthenticated().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((credentials) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.loginFacade.logout()), () => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false))));
    }
    isAuthenticated() {
        return this.loginFacade.getCredentials().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((credentials) => credentials.login), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_facades_login_facade_service__WEBPACK_IMPORTED_MODULE_3__["LoginFacadeService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _facades_login_facade_service__WEBPACK_IMPORTED_MODULE_3__["LoginFacadeService"] }]; }, null); })();


/***/ }),

/***/ "EU1M":
/*!****************************************!*\
  !*** ./src/app/store/reducers.main.ts ***!
  \****************************************/
/*! exports provided: appReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducers", function() { return appReducers; });
/* harmony import */ var _login_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/reducers */ "ZTmQ");
/* harmony import */ var _user_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/reducers */ "9SCw");


const appReducers = {
    login: _login_reducers__WEBPACK_IMPORTED_MODULE_0__["loginReducer"],
    users: _user_reducers__WEBPACK_IMPORTED_MODULE_1__["setUsersReducer"],
};


/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ApiService {
    constructor(http) {
        this.http = http;
    }
    login(email, password) {
        return this.http.post('api/login', { email, password });
    }
    signup(user) {
        return this.http.post('api/signup', Object.assign({}, user));
    }
    getUserProfile(userId) {
        return this.http.get(`api/getUserProfile/${userId}`);
    }
    getUsers() {
        return this.http.get('api/users');
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "KP4X":
/*!****************************************!*\
  !*** ./src/app/store/login/effects.ts ***!
  \****************************************/
/*! exports provided: Effects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Effects", function() { return Effects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "7qOn");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/actions */ "4ohX");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");










class Effects {
    constructor(actions$, apiService, router) {
        this.actions$ = actions$;
        this.apiService = apiService;
        this.router = router;
        this.login$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["login"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(({ email, password }) => this.apiService.login(email, password)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(user => [
            Object(_actions__WEBPACK_IMPORTED_MODULE_3__["setCredentials"])({ credentials: { email: user.email, login: true } }),
            Object(_user_actions__WEBPACK_IMPORTED_MODULE_5__["setUser"])({ user }),
            Object(_user_actions__WEBPACK_IMPORTED_MODULE_5__["getUser"])({ id: user.email }),
        ]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_4__["EMPTY"])));
        this.logout$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["logout"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => [
            Object(_actions__WEBPACK_IMPORTED_MODULE_3__["setCredentials"])({ credentials: { email: '', login: false } }),
            Object(_user_actions__WEBPACK_IMPORTED_MODULE_5__["setUser"])({ user: {} }),
        ]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.router.navigate(['/'])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_4__["EMPTY"])));
    }
}
Effects.ɵfac = function Effects_Factory(t) { return new (t || Effects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
Effects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Effects, factory: Effects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Effects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "LcKV":
/*!*************************************************!*\
  !*** ./src/app/facades/login.facade.service.ts ***!
  \*************************************************/
/*! exports provided: LoginFacadeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFacadeService", function() { return LoginFacadeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_login_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/login/interfaces */ "uzD1");
/* harmony import */ var _store_login_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/login/reducers */ "ZTmQ");






class LoginFacadeService {
    constructor(store) {
        this.store = store;
    }
    login(email, password) {
        this.store.dispatch({ type: _store_login_interfaces__WEBPACK_IMPORTED_MODULE_2__["LoginTypesNames"].LOGIN, email, password });
    }
    logout() {
        this.store.dispatch({ type: _store_login_interfaces__WEBPACK_IMPORTED_MODULE_2__["LoginTypesNames"].LOGOUT });
    }
    getCredentials() {
        return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_login_reducers__WEBPACK_IMPORTED_MODULE_3__["selectCredentials"]));
    }
}
LoginFacadeService.ɵfac = function LoginFacadeService_Factory(t) { return new (t || LoginFacadeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
LoginFacadeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginFacadeService, factory: LoginFacadeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginFacadeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "NmWN":
/*!***************************************!*\
  !*** ./src/app/store/user/effects.ts ***!
  \***************************************/
/*! exports provided: UsersEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersEffects", function() { return UsersEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "4ohX");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");








class UsersEffects {
    constructor(actions$, apiService, router) {
        this.actions$ = actions$;
        this.apiService = apiService;
        this.router = router;
        this.getUsers$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["getUsers"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(() => this.apiService.getUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(users => Object(_actions__WEBPACK_IMPORTED_MODULE_3__["setUsers"])({ users })) /*,
        catchError(error => of(AuthApiActions.loginFailure({ error })))*/))));
        this.getUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["getUser"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(({ id }) => this.apiService.getUserProfile(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(user => Object(_actions__WEBPACK_IMPORTED_MODULE_3__["setSelectedUser"])({ user })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.router.navigate(['dashboard']))))));
        this.saveUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["saveUser"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(({ user }) => this.apiService.signup(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(id => Object(_actions__WEBPACK_IMPORTED_MODULE_3__["setUser"])({ user })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.router.navigate(['/']))))));
    }
}
UsersEffects.ɵfac = function UsersEffects_Factory(t) { return new (t || UsersEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
UsersEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersEffects, factory: UsersEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "OCj8":
/*!***************************************!*\
  !*** ./src/app/store/effects.main.ts ***!
  \***************************************/
/*! exports provided: appEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appEffects", function() { return appEffects; });
/* harmony import */ var _login_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/effects */ "KP4X");
/* harmony import */ var _user_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/effects */ "NmWN");


const appEffects = [
    _login_effects__WEBPACK_IMPORTED_MODULE_0__["Effects"],
    _user_effects__WEBPACK_IMPORTED_MODULE_1__["UsersEffects"]
];


/***/ }),

/***/ "QmyQ":
/*!***********************************************************************!*\
  !*** ./src/app/containers/navigation-bar/navigation-bar.component.ts ***!
  \***********************************************************************/
/*! exports provided: NavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function() { return NavigationBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _facades_login_facade_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../facades/login.facade.service */ "LcKV");
/* harmony import */ var _facades_user_facade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../facades/user.facade.service */ "umru");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






function NavigationBarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 1, ctx_r0.currentUser).firstName, " !");
} }
function NavigationBarComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavigationBarComponent {
    constructor(loginFacade, userFacade) {
        this.loginFacade = loginFacade;
        this.userFacade = userFacade;
    }
    ngOnInit() { }
    get currentUser() {
        return this.userFacade.getCurrentUser();
    }
    get credentials() {
        return this.loginFacade.getCredentials();
    }
    logout() {
        this.loginFacade.logout();
    }
}
NavigationBarComponent.ɵfac = function NavigationBarComponent_Factory(t) { return new (t || NavigationBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_facades_login_facade_service__WEBPACK_IMPORTED_MODULE_1__["LoginFacadeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_facades_user_facade_service__WEBPACK_IMPORTED_MODULE_2__["UserFacadeService"])); };
NavigationBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationBarComponent, selectors: [["app-navigation-bar"]], decls: 5, vars: 4, consts: [[1, "navbar", "navbar-expand", "navbar-dark", "navigation-bar"], ["class", "navbar-nav", 4, "ngIf", "ngIfElse"], ["logoutNanv", ""], [1, "navbar-nav"], [1, "nav-item", "nav-link", 3, "click"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["routerLink", "/users", "routerLinkActive", "active", 1, "nav-item", "nav-link"], [1, "hello-user"], ["routerLink", "/login", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["routerLink", "/signup", "routerLinkActive", "active", 1, "nav-item", "nav-link"]], template: function NavigationBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavigationBarComponent_div_1_Template, 10, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavigationBarComponent_ng_template_3_Template, 7, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.credentials).login)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".navigation-bar[_ngcontent-%COMP%] {\n  background-color: #5611b0;\n}\n.navigation-bar[_ngcontent-%COMP%]   .hello-user[_ngcontent-%COMP%] {\n  align-self: center;\n  right: 0;\n  position: absolute;\n  color: white;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXZpZ2F0aW9uLWJhci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UseUJDRE87QURBVDtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFBSiIsImZpbGUiOiJuYXZpZ2F0aW9uLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLm5hdmlnYXRpb24tYmFye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwdXJwbGU7XHJcbiAgLmhlbGxvLXVzZXJ7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICByaWdodDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbn1cclxuIiwiJHNoYWRvdy1mbG9hdGluZzogIDAgMnB4IDE2cHggMCByZ2JhKDY0LDY0LDY0LDAuMTYpO1xyXG4kZ3JleTogI2U2ZTZlNjtcclxuJHB1cnBsZTogIzU2MTFiMDtcclxuJGxpZ2h0LXB1cnBsZTogIzY4MTFkOTtcclxuJHN1cGVyLWxpZ2h0LXB1cnBsZTogI2Y1ZjBmYztcclxuJGI3NTogIzQwNDA0MDtcclxuXHJcbiRncmlkLWJyZWFrcG9pbnRzOiAoXHJcbiAgeHM6IDAsIC8vIGhhbmRzZXQgcG9ydHJhaXQgKHNtYWxsLCBtZWRpdW0sIGxhcmdlKSB8IGhhbmRzZXQgbGFuZHNjYXBlIChzbWFsbClcclxuICBzbTogNjAwcHgsIC8vIGhhbmRzZXQgbGFuZHNjYXBlIChtZWRpdW0sIGxhcmdlKSB8IHRhYmxldCBwb3J0cmFpdChzbWFsbCwgbGFyZ2UpXHJcbiAgbWQ6IDk2MHB4LCAvLyAgdGFibGV0IGxhbmRzY2FwZSAoc21hbGwsIGxhcmdlKVxyXG4gIGxnOiAxMjgwcHgsIC8vIGxhcHRvcHMgYW5kIGRlc2t0b3BzXHJcbiAgeGw6IDE2MDBweCAvLyBsYXJnZSBkZXNrdG9wc1xyXG4pO1xyXG5cclxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoXHJcbiAgc206IDYwMHB4LFxyXG4gIG1kOiA5NjBweCxcclxuICBsZzogMTI4MHB4LFxyXG4gIHhsOiAxNjAwcHhcclxuKTtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation-bar',
                templateUrl: './navigation-bar.component.html',
                styleUrls: ['./navigation-bar.component.scss']
            }]
    }], function () { return [{ type: _facades_login_facade_service__WEBPACK_IMPORTED_MODULE_1__["LoginFacadeService"] }, { type: _facades_user_facade_service__WEBPACK_IMPORTED_MODULE_2__["UserFacadeService"] }]; }, null); })();


/***/ }),

/***/ "Rtmn":
/*!*********************************************************!*\
  !*** ./src/app/components/section/section.component.ts ***!
  \*********************************************************/
/*! exports provided: SectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function() { return SectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = [[["", "header", ""]], [["", "body", ""]]];
const _c1 = function (a0) { return { "limited": a0 }; };
const _c2 = ["[header]", "[body]"];
class SectionComponent {
    constructor() {
        this.limitedWidth = true;
    }
    ngOnInit() {
    }
}
SectionComponent.ɵfac = function SectionComponent_Factory(t) { return new (t || SectionComponent)(); };
SectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionComponent, selectors: [["app-section"]], inputs: { limitedWidth: "limitedWidth" }, ngContentSelectors: _c2, decls: 4, vars: 3, consts: [[1, "section-container", 3, "ngClass"], [1, "section-title"]], template: function SectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx.limitedWidth));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n}\n[_nghost-%COMP%]   .section-container[_ngcontent-%COMP%] {\n  margin: 16px auto;\n  padding: 16px;\n  border: 1px solid #e6e6e6;\n  border-radius: 10px;\n  box-shadow: 0 2px 16px 0 rgba(64, 64, 64, 0.16);\n  max-width: 1216px;\n}\n[_nghost-%COMP%]   .section-container.limited[_ngcontent-%COMP%] {\n  max-width: 810px;\n}\n[_nghost-%COMP%]   .section-container[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 20px;\n  color: #404040;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e6e6e6;\n  margin-bottom: 19px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFERjtBQUVFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQ1ZlO0VEV2YsaUJBQUE7QUFBSjtBQUNJO0VBQ0UsZ0JBQUE7QUFDTjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0NiQTtFRGNBLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQUNOIiwiZmlsZSI6InNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL2Fzc2V0cy92YXJpYWJsZXNcIjtcclxuXHJcbjpob3N0e1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAuc2VjdGlvbi1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAxNnB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogJHNoYWRvdy1mbG9hdGluZztcclxuICAgIG1heC13aWR0aDogMTIxNnB4O1xyXG4gICAgJi5saW1pdGVkIHtcclxuICAgICAgbWF4LXdpZHRoOiA4MTBweDtcclxuICAgIH1cclxuICAgIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgY29sb3I6ICRiNzU7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGdyZXk7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE5cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRzaGFkb3ctZmxvYXRpbmc6ICAwIDJweCAxNnB4IDAgcmdiYSg2NCw2NCw2NCwwLjE2KTtcclxuJGdyZXk6ICNlNmU2ZTY7XHJcbiRwdXJwbGU6ICM1NjExYjA7XHJcbiRsaWdodC1wdXJwbGU6ICM2ODExZDk7XHJcbiRzdXBlci1saWdodC1wdXJwbGU6ICNmNWYwZmM7XHJcbiRiNzU6ICM0MDQwNDA7XHJcblxyXG4kZ3JpZC1icmVha3BvaW50czogKFxyXG4gIHhzOiAwLCAvLyBoYW5kc2V0IHBvcnRyYWl0IChzbWFsbCwgbWVkaXVtLCBsYXJnZSkgfCBoYW5kc2V0IGxhbmRzY2FwZSAoc21hbGwpXHJcbiAgc206IDYwMHB4LCAvLyBoYW5kc2V0IGxhbmRzY2FwZSAobWVkaXVtLCBsYXJnZSkgfCB0YWJsZXQgcG9ydHJhaXQoc21hbGwsIGxhcmdlKVxyXG4gIG1kOiA5NjBweCwgLy8gIHRhYmxldCBsYW5kc2NhcGUgKHNtYWxsLCBsYXJnZSlcclxuICBsZzogMTI4MHB4LCAvLyBsYXB0b3BzIGFuZCBkZXNrdG9wc1xyXG4gIHhsOiAxNjAwcHggLy8gbGFyZ2UgZGVza3RvcHNcclxuKTtcclxuXHJcbiRjb250YWluZXItbWF4LXdpZHRoczogKFxyXG4gIHNtOiA2MDBweCxcclxuICBtZDogOTYwcHgsXHJcbiAgbGc6IDEyODBweCxcclxuICB4bDogMTYwMHB4XHJcbik7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-section',
                templateUrl: './section.component.html',
                styleUrls: ['./section.component.scss']
            }]
    }], function () { return []; }, { limitedWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "SHGe":
/*!***************************************************!*\
  !*** ./src/app/services/error-message.service.ts ***!
  \***************************************************/
/*! exports provided: ErrorMessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessageService", function() { return ErrorMessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const ErrorMessages = {
    required: 'Required field.',
    email: 'Email is invalid.'
};
class ErrorMessageService {
    constructor() { }
    getMessage(errorObject) {
        const [key] = Object.keys(errorObject);
        return ErrorMessages[key];
    }
}
ErrorMessageService.ɵfac = function ErrorMessageService_Factory(t) { return new (t || ErrorMessageService)(); };
ErrorMessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorMessageService, factory: ErrorMessageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorMessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _containers_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/navigation-bar/navigation-bar.component */ "QmyQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() { }
    ngOnInit() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "app-container"], [1, "outlet-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navigation-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_containers_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavigationBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n[_nghost-%COMP%]   .app-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n[_nghost-%COMP%]   .app-container[_ngcontent-%COMP%]   .outlet-container[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFBRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNFLE9BQUE7QUFHTiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLmFwcC1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLm91dGxldC1jb250YWluZXJ7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "U/Ho":
/*!*****************************************************!*\
  !*** ./src/app/containers/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_error_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/error-message.service */ "SHGe");
/* harmony import */ var _facades_login_facade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../facades/login.facade.service */ "LcKV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");








function LoginComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getValidationMessage("email"));
} }
function LoginComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getValidationMessage("password"));
} }
class LoginComponent {
    constructor(fb, errorMsg, loginFacade) {
        this.fb = fb;
        this.errorMsg = errorMsg;
        this.loginFacade = loginFacade;
        this.isSubmitted = false;
    }
    ngOnInit() {
        this.login = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    onSubmit({ value: { email, password }, valid }) {
        this.isSubmitted = true;
        if (!valid) {
            return;
        }
        this.loginFacade.login(email, password);
    }
    showError(fieldName) {
        var _a, _b;
        return (this.isSubmitted && ((_a = this.login.get(fieldName)) === null || _a === void 0 ? void 0 : _a.invalid)) || ((_b = this.login.get(fieldName)) === null || _b === void 0 ? void 0 : _b.touched);
    }
    getValidationMessage(fieldName) {
        var _a, _b;
        return ((_a = this.login.get(fieldName)) === null || _a === void 0 ? void 0 : _a.errors) ? this.errorMsg.getMessage((_b = this.login.get(fieldName)) === null || _b === void 0 ? void 0 : _b.errors) : '';
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_error_message_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_facades_login_facade_service__WEBPACK_IMPORTED_MODULE_3__["LoginFacadeService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 21, vars: 3, consts: [[1, "login-container"], [1, "login-header"], ["novalidate", "", 1, "form-login", 3, "formGroup", "ngSubmit"], [1, "form-field"], ["for", "email-field", 1, "form-label"], ["type", "email", "id", "email-field", "formControlName", "email", "aria-describedby", "emailHelp", 1, "form-control"], [4, "ngIf"], ["for", "password-field", 1, "form-label"], ["type", "password", "formControlName", "password", "id", "password-field", 1, "form-control"], ["type", "submit", 1, "btn", "submit-btn-form"], [1, "additional-actions"], ["routerLink", "/signup", "routerLinkActive", "active", 1, "nav-item", "nav-link-signup"], [1, "invalid-feedback", "failed"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(ctx.login); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_ng_container_8_Template, 3, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_ng_container_13_Template, 3, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Forgot your Password ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "SignUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showError("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showError("password"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  height: 80%;\n  justify-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n  box-shadow: 0 2px 16px 0 rgba(64, 64, 64, 0.16);\n}\n[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%] {\n  height: 50px;\n  color: white;\n  display: flex;\n  font-size: 20px;\n  font-weight: 500;\n  align-items: center;\n  padding-left: 15px;\n  background: #5611b0;\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .form-login[_ngcontent-%COMP%] {\n  padding: 15px;\n  min-width: 360px;\n}\n[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .form-login[_ngcontent-%COMP%]   .invalid-feedback.failed[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0;\n}\n[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .form-login[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  height: 90px;\n}\n[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .form-login[_ngcontent-%COMP%]   .submit-btn-form[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  color: #fff;\n  background-color: #5611b0;\n  outline: none;\n  width: 100%;\n}\n[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .form-login[_ngcontent-%COMP%]   .submit-btn-form[_ngcontent-%COMP%]:hover {\n  background: #6811d9;\n  outline: none;\n}\n[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .additional-actions[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-bottom: 15px;\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .additional-actions[_ngcontent-%COMP%]   .nav-link-signup[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  color: #5611b0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUY7QUFDRTtFQUNFLHlCQUFBO0VBQ0EsK0NDUmU7QURTbkI7QUFBSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkNmRztFRGdCSCxtQkFBQTtBQUVOO0FBQUk7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFFTjtBQUFRO0VBQ0UsY0FBQTtFQUNBLFNBQUE7QUFFVjtBQUNNO0VBQ0UsWUFBQTtBQUNSO0FBQ007RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkNqQ0M7RURrQ0QsYUFBQTtFQUNBLFdBQUE7QUFDUjtBQUFRO0VBQ0UsbUJDcENLO0VEcUNMLGFBQUE7QUFFVjtBQUVJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBQU47QUFDTTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNDbkRDO0FEb0RUIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hc3NldHMvdmFyaWFibGVzXCI7XHJcbjpob3N0e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAubG9naW4tY29udGFpbmVye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGdyZXk7XHJcbiAgICBib3gtc2hhZG93OiAkc2hhZG93LWZsb2F0aW5nO1xyXG4gICAgLmxvZ2luLWhlYWRlcntcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkcHVycGxlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmZvcm0tbG9naW57XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIG1pbi13aWR0aDogMzYwcHg7XHJcbiAgICAgIC5pbnZhbGlkLWZlZWRiYWNre1xyXG4gICAgICAgICYuZmFpbGVke1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5mb3JtLWZpZWxke1xyXG4gICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgfVxyXG4gICAgICAuc3VibWl0LWJ0bi1mb3Jte1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHB1cnBsZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkbGlnaHQtcHVycGxlO1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5hZGRpdGlvbmFsLWFjdGlvbnN7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgLm5hdi1saW5rLXNpZ251cHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAkcHVycGxlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRzaGFkb3ctZmxvYXRpbmc6ICAwIDJweCAxNnB4IDAgcmdiYSg2NCw2NCw2NCwwLjE2KTtcclxuJGdyZXk6ICNlNmU2ZTY7XHJcbiRwdXJwbGU6ICM1NjExYjA7XHJcbiRsaWdodC1wdXJwbGU6ICM2ODExZDk7XHJcbiRzdXBlci1saWdodC1wdXJwbGU6ICNmNWYwZmM7XHJcbiRiNzU6ICM0MDQwNDA7XHJcblxyXG4kZ3JpZC1icmVha3BvaW50czogKFxyXG4gIHhzOiAwLCAvLyBoYW5kc2V0IHBvcnRyYWl0IChzbWFsbCwgbWVkaXVtLCBsYXJnZSkgfCBoYW5kc2V0IGxhbmRzY2FwZSAoc21hbGwpXHJcbiAgc206IDYwMHB4LCAvLyBoYW5kc2V0IGxhbmRzY2FwZSAobWVkaXVtLCBsYXJnZSkgfCB0YWJsZXQgcG9ydHJhaXQoc21hbGwsIGxhcmdlKVxyXG4gIG1kOiA5NjBweCwgLy8gIHRhYmxldCBsYW5kc2NhcGUgKHNtYWxsLCBsYXJnZSlcclxuICBsZzogMTI4MHB4LCAvLyBsYXB0b3BzIGFuZCBkZXNrdG9wc1xyXG4gIHhsOiAxNjAwcHggLy8gbGFyZ2UgZGVza3RvcHNcclxuKTtcclxuXHJcbiRjb250YWluZXItbWF4LXdpZHRoczogKFxyXG4gIHNtOiA2MDBweCxcclxuICBtZDogOTYwcHgsXHJcbiAgbGc6IDEyODBweCxcclxuICB4bDogMTYwMHB4XHJcbik7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_error_message_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessageService"] }, { type: _facades_login_facade_service__WEBPACK_IMPORTED_MODULE_3__["LoginFacadeService"] }]; }, null); })();


/***/ }),

/***/ "Z1zV":
/*!*****************************************************!*\
  !*** ./src/app/containers/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _facades_user_facade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../facades/user.facade.service */ "umru");
/* harmony import */ var _components_section_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/section/section.component */ "Rtmn");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/table/table.component */ "9pw4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const columns = [
    { key: 'firstName', label: 'First Name' },
    { key: 'lastName', label: 'Last Name' },
    { key: 'email', label: 'Email' }
];
class UsersComponent {
    constructor(userFacade) {
        this.userFacade = userFacade;
    }
    ngOnInit() {
        this.userFacade.fetchAllUsers();
    }
    get config() {
        return this.userFacade.getAllUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => ({ data, columns })));
    }
    onUserSelect(user) {
        this.userFacade.fetchSelectedUser(user.email);
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_facades_user_facade_service__WEBPACK_IMPORTED_MODULE_2__["UserFacadeService"])); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], decls: 5, vars: 3, consts: [["header", "", 1, "section-header"], ["body", "", 3, "config", "rowSelected"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Users ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowSelected", function UsersComponent_Template_app_table_rowSelected_3_listener($event) { return ctx.onUserSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx.config));
    } }, directives: [_components_section_section_component__WEBPACK_IMPORTED_MODULE_3__["SectionComponent"], _components_table_table_component__WEBPACK_IMPORTED_MODULE_4__["TableComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  margin: 0 auto;\n}\n[_nghost-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  color: #5611b0;\n  font-size: 20px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2Vycy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQURGO0FBRUU7RUFDRSxjQ0xLO0VETUwsZUFBQTtFQUNBLGdCQUFBO0FBQUoiLCJmaWxlIjoidXNlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL2Fzc2V0cy92YXJpYWJsZXNcIjtcclxuXHJcbjpob3N0e1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICAuc2VjdGlvbi1oZWFkZXJ7XHJcbiAgICBjb2xvcjogJHB1cnBsZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG59XHJcbiIsIiRzaGFkb3ctZmxvYXRpbmc6ICAwIDJweCAxNnB4IDAgcmdiYSg2NCw2NCw2NCwwLjE2KTtcclxuJGdyZXk6ICNlNmU2ZTY7XHJcbiRwdXJwbGU6ICM1NjExYjA7XHJcbiRsaWdodC1wdXJwbGU6ICM2ODExZDk7XHJcbiRzdXBlci1saWdodC1wdXJwbGU6ICNmNWYwZmM7XHJcbiRiNzU6ICM0MDQwNDA7XHJcblxyXG4kZ3JpZC1icmVha3BvaW50czogKFxyXG4gIHhzOiAwLCAvLyBoYW5kc2V0IHBvcnRyYWl0IChzbWFsbCwgbWVkaXVtLCBsYXJnZSkgfCBoYW5kc2V0IGxhbmRzY2FwZSAoc21hbGwpXHJcbiAgc206IDYwMHB4LCAvLyBoYW5kc2V0IGxhbmRzY2FwZSAobWVkaXVtLCBsYXJnZSkgfCB0YWJsZXQgcG9ydHJhaXQoc21hbGwsIGxhcmdlKVxyXG4gIG1kOiA5NjBweCwgLy8gIHRhYmxldCBsYW5kc2NhcGUgKHNtYWxsLCBsYXJnZSlcclxuICBsZzogMTI4MHB4LCAvLyBsYXB0b3BzIGFuZCBkZXNrdG9wc1xyXG4gIHhsOiAxNjAwcHggLy8gbGFyZ2UgZGVza3RvcHNcclxuKTtcclxuXHJcbiRjb250YWluZXItbWF4LXdpZHRoczogKFxyXG4gIHNtOiA2MDBweCxcclxuICBtZDogOTYwcHgsXHJcbiAgbGc6IDEyODBweCxcclxuICB4bDogMTYwMHB4XHJcbik7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users',
                templateUrl: './users.component.html',
                styleUrls: ['./users.component.scss']
            }]
    }], function () { return [{ type: _facades_user_facade_service__WEBPACK_IMPORTED_MODULE_2__["UserFacadeService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _containers_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers/login/login.component */ "U/Ho");
/* harmony import */ var _components_section_section_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/section/section.component */ "Rtmn");
/* harmony import */ var _containers_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./containers/navigation-bar/navigation-bar.component */ "QmyQ");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/table/table.component */ "9pw4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _base_auth_base_api_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./base/auth-base/api.interceptor */ "hJcO");
/* harmony import */ var _containers_users_users_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./containers/users/users.component */ "Z1zV");
/* harmony import */ var _containers_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./containers/signup/signup.component */ "xIaV");
/* harmony import */ var _containers_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./containers/dashboard/dashboard.component */ "0YKa");
/* harmony import */ var _store_effects_main__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./store/effects.main */ "OCj8");
/* harmony import */ var _store_reducers_main__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./store/reducers.main */ "EU1M");



























class AppModule {
    constructor(library) {
        library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faUser"]);
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FaIconLibrary"])); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _base_auth_base_api_interceptor__WEBPACK_IMPORTED_MODULE_16__["ApiInterceptor"], multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_store_reducers_main__WEBPACK_IMPORTED_MODULE_21__["appReducers"]),
            !_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument() : [],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot(_store_effects_main__WEBPACK_IMPORTED_MODULE_20__["appEffects"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _containers_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
        _containers_users_users_component__WEBPACK_IMPORTED_MODULE_17__["UsersComponent"],
        _containers_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"],
        _components_section_section_component__WEBPACK_IMPORTED_MODULE_10__["SectionComponent"],
        _containers_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_11__["NavigationBarComponent"],
        _components_table_table_component__WEBPACK_IMPORTED_MODULE_12__["TableComponent"],
        _containers_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _containers_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                    _containers_users_users_component__WEBPACK_IMPORTED_MODULE_17__["UsersComponent"],
                    _containers_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"],
                    _components_section_section_component__WEBPACK_IMPORTED_MODULE_10__["SectionComponent"],
                    _containers_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_11__["NavigationBarComponent"],
                    _components_table_table_component__WEBPACK_IMPORTED_MODULE_12__["TableComponent"],
                    _containers_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_store_reducers_main__WEBPACK_IMPORTED_MODULE_21__["appReducers"]),
                    !_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument() : [],
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot(_store_effects_main__WEBPACK_IMPORTED_MODULE_20__["appEffects"])
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _base_auth_base_api_interceptor__WEBPACK_IMPORTED_MODULE_16__["ApiInterceptor"], multi: true },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], function () { return [{ type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FaIconLibrary"] }]; }, null); })();


/***/ }),

/***/ "ZTmQ":
/*!*****************************************!*\
  !*** ./src/app/store/login/reducers.ts ***!
  \*****************************************/
/*! exports provided: initialState, loginReducer, credentialsSelector, selectCredentials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginReducer", function() { return loginReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "credentialsSelector", function() { return credentialsSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCredentials", function() { return selectCredentials; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "7qOn");


const initialState = {
    credentials: {
        email: '',
        login: false
    }
};
const loginReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["setCredentials"], (state, { credentials }) => (Object.assign(Object.assign({}, state), { credentials: Object.assign({}, credentials) }))));
const credentialsSelector = (state) => state.login;
const selectCredentials = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(credentialsSelector, (state) => state.credentials);


/***/ }),

/***/ "fvxX":
/*!******************************************!*\
  !*** ./src/app/store/user/interfaces.ts ***!
  \******************************************/
/*! exports provided: UsersTypesNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersTypesNames", function() { return UsersTypesNames; });
var UsersTypesNames;
(function (UsersTypesNames) {
    UsersTypesNames["GET_USERS"] = "[Users Page] Get Users";
    UsersTypesNames["SET_USERS"] = "[Users Page] Set Users";
    UsersTypesNames["GET_USER_PROFILE"] = "[Dashboard Page] Get User";
    UsersTypesNames["SET_USER_PROFILE"] = "[Dashboard Page] Set User to Store";
    UsersTypesNames["SAVE_USER_PROFILE"] = "[Signup Page] Save New User";
    UsersTypesNames["SET_SELECTED_USER"] = "[Dashboard Page] Set Selected user to the store";
})(UsersTypesNames || (UsersTypesNames = {}));
;


/***/ }),

/***/ "hJcO":
/*!***************************************************!*\
  !*** ./src/app/base/auth-base/api.interceptor.ts ***!
  \***************************************************/
/*! exports provided: ApiInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiInterceptor", function() { return ApiInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _facades_login_facade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../facades/login.facade.service */ "LcKV");




class ApiInterceptor {
    constructor(loginFacade) {
        this.loginFacade = loginFacade;
    }
    intercept(request, next) {
        // add here any global headers like JWT toke
        return this.loginFacade.getCredentials().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(cred => {
            const authReq = cred.login ? request.clone({
                setHeaders: { Authorization: 'Bearer fakeJwToke' },
            }) : request;
            return next.handle(authReq);
        }));
    }
}
ApiInterceptor.ɵfac = function ApiInterceptor_Factory(t) { return new (t || ApiInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_facades_login_facade_service__WEBPACK_IMPORTED_MODULE_2__["LoginFacadeService"])); };
ApiInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiInterceptor, factory: ApiInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _facades_login_facade_service__WEBPACK_IMPORTED_MODULE_2__["LoginFacadeService"] }]; }, null); })();


/***/ }),

/***/ "umru":
/*!************************************************!*\
  !*** ./src/app/facades/user.facade.service.ts ***!
  \************************************************/
/*! exports provided: UserFacadeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFacadeService", function() { return UserFacadeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_user_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/user/interfaces */ "fvxX");
/* harmony import */ var _store_user_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/user/reducers */ "9SCw");






class UserFacadeService {
    constructor(store) {
        this.store = store;
    }
    getCurrentUser() {
        return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_user_reducers__WEBPACK_IMPORTED_MODULE_3__["selectUser"]));
    }
    getSelectedUser() {
        return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_user_reducers__WEBPACK_IMPORTED_MODULE_3__["selectSelectedUser"]));
    }
    saveUserProfile(user) {
        this.store.dispatch({ type: _store_user_interfaces__WEBPACK_IMPORTED_MODULE_2__["UsersTypesNames"].SAVE_USER_PROFILE, user });
    }
    fetchAllUsers() {
        this.store.dispatch({ type: _store_user_interfaces__WEBPACK_IMPORTED_MODULE_2__["UsersTypesNames"].GET_USERS });
    }
    fetchSelectedUser(id) {
        this.store.dispatch({ type: _store_user_interfaces__WEBPACK_IMPORTED_MODULE_2__["UsersTypesNames"].GET_USER_PROFILE, id });
    }
    getAllUsers() {
        return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_user_reducers__WEBPACK_IMPORTED_MODULE_3__["selectUsers"]));
    }
}
UserFacadeService.ɵfac = function UserFacadeService_Factory(t) { return new (t || UserFacadeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
UserFacadeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserFacadeService, factory: UserFacadeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserFacadeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "uzD1":
/*!*******************************************!*\
  !*** ./src/app/store/login/interfaces.ts ***!
  \*******************************************/
/*! exports provided: LoginTypesNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginTypesNames", function() { return LoginTypesNames; });
var LoginTypesNames;
(function (LoginTypesNames) {
    LoginTypesNames["LOGIN"] = "[Login Page] Login";
    LoginTypesNames["SET_CREDENTIALS"] = "[Login Page] Set Credentials";
    LoginTypesNames["LOGOUT"] = "[Login Page] logout the system";
    LoginTypesNames["ONLOGIN"] = "[Login Page] On Login";
})(LoginTypesNames || (LoginTypesNames = {}));
;


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _base_auth_base_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base/auth-base/auth.guard */ "DUF8");
/* harmony import */ var _containers_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/dashboard/dashboard.component */ "0YKa");
/* harmony import */ var _containers_users_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/users/users.component */ "Z1zV");
/* harmony import */ var _containers_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/signup/signup.component */ "xIaV");
/* harmony import */ var _containers_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/login/login.component */ "U/Ho");









const routes = [
    { path: '', component: _containers_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'dashboard', component: _containers_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_base_auth_base_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'users', component: _containers_users_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"] },
    { path: 'signup', component: _containers_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: '**', component: _containers_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xIaV":
/*!*******************************************************!*\
  !*** ./src/app/containers/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_error_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/error-message.service */ "SHGe");
/* harmony import */ var _facades_user_facade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../facades/user.facade.service */ "umru");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");








function SignupComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getValidationMessage("firstName"));
} }
function SignupComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getValidationMessage("lastName"));
} }
function SignupComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.getValidationMessage("email"));
} }
function SignupComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.getValidationMessage("age"));
} }
function SignupComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.getValidationMessage("password"));
} }
class SignupComponent {
    constructor(fb, errorMsg, userFacade) {
        this.fb = fb;
        this.errorMsg = errorMsg;
        this.userFacade = userFacade;
        this.isSubmitted = false;
    }
    ngOnInit() {
        this.signup = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            age: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    onSubmit({ value: user, valid }) {
        this.isSubmitted = true;
        if (!valid) {
            return;
        }
        this.userFacade.saveUserProfile(user);
    }
    showError(fieldName) {
        var _a, _b;
        return (this.isSubmitted && ((_a = this.signup.get(fieldName)) === null || _a === void 0 ? void 0 : _a.invalid)) || ((_b = this.signup.get(fieldName)) === null || _b === void 0 ? void 0 : _b.touched);
    }
    getValidationMessage(fieldName) {
        var _a, _b;
        return ((_a = this.signup.get(fieldName)) === null || _a === void 0 ? void 0 : _a.errors) ? this.errorMsg.getMessage((_b = this.signup.get(fieldName)) === null || _b === void 0 ? void 0 : _b.errors) : '';
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_error_message_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_facades_user_facade_service__WEBPACK_IMPORTED_MODULE_3__["UserFacadeService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 34, vars: 6, consts: [[1, "signup-container"], [1, "signup-header"], ["novalidate", "", 1, "signup-form", 3, "formGroup", "ngSubmit"], [1, "form-field"], ["for", "firstName-field", 1, "form-label"], ["type", "firstName", "id", "firstName-field", "formControlName", "firstName", 1, "form-control"], [4, "ngIf"], ["for", "lastName", 1, "form-label"], ["type", "lastName", "id", "lastName", "formControlName", "lastName", 1, "form-control"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "aria-describedby", "emailHelp", "formControlName", "email", 1, "form-control"], ["for", "age", 1, "form-label"], ["type", "age", "id", "age", "formControlName", "age", 1, "form-control"], ["for", "password", 1, "form-label"], ["type", "password", "id", "password", "formControlName", "password", 1, "form-control"], ["type", "submit", 1, "btn", "submit-btn-form"], [1, "additional-actions"], ["routerLink", "/login", "routerLinkActive", "active", 1, "nav-item", "nav-link-signup"], [1, "invalid-feedback", "failed"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(ctx.signup); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SignupComponent_ng_container_8_Template, 3, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SignupComponent_ng_container_13_Template, 3, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SignupComponent_ng_container_18_Template, 3, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SignupComponent_ng_container_23_Template, 3, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SignupComponent_ng_container_28_Template, 3, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Already a member ? Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showError("firstName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showError("lastName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showError("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showError("age"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showError("password"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  height: 80%;\n  justify-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   .signup-container[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n  box-shadow: 0 2px 16px 0 rgba(64, 64, 64, 0.16);\n  min-width: 400px;\n}\n[_nghost-%COMP%]   .signup-container[_ngcontent-%COMP%]   .signup-header[_ngcontent-%COMP%] {\n  height: 50px;\n  color: white;\n  display: flex;\n  font-size: 20px;\n  font-weight: 500;\n  align-items: center;\n  padding-left: 15px;\n  background: #5611b0;\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]   .signup-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n[_nghost-%COMP%]   .signup-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .invalid-feedback.failed[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0;\n}\n[_nghost-%COMP%]   .signup-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  height: 90px;\n}\n[_nghost-%COMP%]   .signup-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .submit-btn-form[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  color: #fff;\n  background-color: #5611b0;\n  outline: none;\n  width: 100%;\n}\n[_nghost-%COMP%]   .signup-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .submit-btn-form[_ngcontent-%COMP%]:hover {\n  background: #6811d9;\n  outline: none;\n}\n[_nghost-%COMP%]   .signup-container[_ngcontent-%COMP%]   .additional-actions[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-bottom: 15px;\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .signup-container[_ngcontent-%COMP%]   .additional-actions[_ngcontent-%COMP%]   .nav-link-signup[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  color: #5611b0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWdudXAuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURGO0FBRUU7RUFDRSx5QkFBQTtFQUNBLCtDQ1RlO0VEVWYsZ0JBQUE7QUFBSjtBQUNJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQ2pCRztFRGtCSCxtQkFBQTtBQUNOO0FBQ0k7RUFDRSxhQUFBO0FBQ047QUFDUTtFQUNFLGNBQUE7RUFDQSxTQUFBO0FBQ1Y7QUFFTTtFQUNFLFlBQUE7QUFBUjtBQUVNO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJDbENDO0VEbUNELGFBQUE7RUFDQSxXQUFBO0FBQVI7QUFDUTtFQUNFLG1CQ3JDSztFRHNDTCxhQUFBO0FBQ1Y7QUFHSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUROO0FBRU07RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQ3BEQztBRG9EVCIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL2Fzc2V0cy92YXJpYWJsZXNcIjtcclxuXHJcbjpob3N0e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAuc2lnbnVwLWNvbnRhaW5lcntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRncmV5O1xyXG4gICAgYm94LXNoYWRvdzogJHNoYWRvdy1mbG9hdGluZztcclxuICAgIG1pbi13aWR0aDogNDAwcHg7XHJcbiAgICAuc2lnbnVwLWhlYWRlcntcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkcHVycGxlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnNpZ251cC1mb3Jte1xyXG4gICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAuaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgICAgICAgJi5mYWlsZWQge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5mb3JtLWZpZWxke1xyXG4gICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgfVxyXG4gICAgICAuc3VibWl0LWJ0bi1mb3Jte1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHB1cnBsZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkbGlnaHQtcHVycGxlO1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5hZGRpdGlvbmFsLWFjdGlvbnN7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgLm5hdi1saW5rLXNpZ251cHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAkcHVycGxlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRzaGFkb3ctZmxvYXRpbmc6ICAwIDJweCAxNnB4IDAgcmdiYSg2NCw2NCw2NCwwLjE2KTtcclxuJGdyZXk6ICNlNmU2ZTY7XHJcbiRwdXJwbGU6ICM1NjExYjA7XHJcbiRsaWdodC1wdXJwbGU6ICM2ODExZDk7XHJcbiRzdXBlci1saWdodC1wdXJwbGU6ICNmNWYwZmM7XHJcbiRiNzU6ICM0MDQwNDA7XHJcblxyXG4kZ3JpZC1icmVha3BvaW50czogKFxyXG4gIHhzOiAwLCAvLyBoYW5kc2V0IHBvcnRyYWl0IChzbWFsbCwgbWVkaXVtLCBsYXJnZSkgfCBoYW5kc2V0IGxhbmRzY2FwZSAoc21hbGwpXHJcbiAgc206IDYwMHB4LCAvLyBoYW5kc2V0IGxhbmRzY2FwZSAobWVkaXVtLCBsYXJnZSkgfCB0YWJsZXQgcG9ydHJhaXQoc21hbGwsIGxhcmdlKVxyXG4gIG1kOiA5NjBweCwgLy8gIHRhYmxldCBsYW5kc2NhcGUgKHNtYWxsLCBsYXJnZSlcclxuICBsZzogMTI4MHB4LCAvLyBsYXB0b3BzIGFuZCBkZXNrdG9wc1xyXG4gIHhsOiAxNjAwcHggLy8gbGFyZ2UgZGVza3RvcHNcclxuKTtcclxuXHJcbiRjb250YWluZXItbWF4LXdpZHRoczogKFxyXG4gIHNtOiA2MDBweCxcclxuICBtZDogOTYwcHgsXHJcbiAgbGc6IDEyODBweCxcclxuICB4bDogMTYwMHB4XHJcbik7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_error_message_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessageService"] }, { type: _facades_user_facade_service__WEBPACK_IMPORTED_MODULE_3__["UserFacadeService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map