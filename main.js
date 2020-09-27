(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Selina\my-website\my-app\src\main.ts */"zUnb");


/***/ }),

/***/ "5+rw":
/*!**********************************************************************!*\
  !*** ./src/app/dig-engagement-card/dig-engagement-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: DigEngagementCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigEngagementCardComponent", function() { return DigEngagementCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class DigEngagementCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DigEngagementCardComponent.ɵfac = function DigEngagementCardComponent_Factory(t) { return new (t || DigEngagementCardComponent)(); };
DigEngagementCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DigEngagementCardComponent, selectors: [["app-dig-engagement-card"]], decls: 10, vars: 0, consts: [[1, "card"], ["href", "#", "routerLink", "/dig-engagement"], [1, "card-desc", "col-xs-12", "col-s-12", "col-md-4"], [1, "card-image", "col-xs-12", "col-s-12", "col-md-8"], [1, "helper"], ["src", "assets/img/powerBi.png", "alt", "Example of landing page", 1, "img-fluid"]], template: function DigEngagementCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Analysing data from surveys");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "The council must cater to the needs of all the residents, they all have the right to be able to access these services so analysing data from surveys give us an idea of how we can deliver services better.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".card[_ngcontent-%COMP%] {\n  display: table;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  margin-top: 30px;\n  margin-bottom: 30px;\n  border-radius: 15px;\n  max-width: 1000px;\n}\n\n.card-desc[_ngcontent-%COMP%] {\n  float: left;\n  display: table-cell;\n  padding: 30px 20px;\n  background: #FFF3E8;\n  min-height: 380px;\n  border-radius: 15px 0px 0px 15px;\n}\n\n.card-desc[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #382619;\n  font-weight: 700;\n}\n\n.card-image[_ngcontent-%COMP%] {\n  float: right;\n  display: table-cell;\n  height: 100%;\n}\n\n.helper[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n}\n\nimg[_ngcontent-%COMP%] {\n  top: 700%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n}\n\np[_ngcontent-%COMP%] {\n  color: #5B3927;\n  max-width: 940px;\n}\n\n@media only screen and (max-width: 1050px) {\n  .card-desc[_ngcontent-%COMP%] {\n    border-radius: 15px 15px 0px 0px;\n    min-width: 65%;\n    min-height: 200px;\n  }\n\n  .card-image[_ngcontent-%COMP%] {\n    clear: both;\n    float: left;\n    background: #D3B397;\n    box-shadow: 0;\n  }\n  .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    top: 0%;\n    left: 0%;\n    transform: translate(0%, 0%);\n    border-radius: 0px 0px 15px 15px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  }\n}\n\n@media screen and (min-width: 768px) and (max-width: 1050px) {\n  .card[_ngcontent-%COMP%] {\n    margin-bottom: 350px;\n  }\n\n  .col-md-4[_ngcontent-%COMP%] {\n    max-width: unset !important;\n  }\n\n  .col-md-8[_ngcontent-%COMP%] {\n    max-width: unset !important;\n  }\n}\n\n@media only screen and (max-width: 1050px) {\n  .card[_ngcontent-%COMP%] {\n    margin-bottom: 340px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlnLWVuZ2FnZW1lbnQtY2FyZC9kaWctZW5nYWdlbWVudC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNIQTtFQUNJLGNBQUE7RUFDQSw0RUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBckhKOztBQXdIQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FBckhKOztBQXNISTtFQUNJLGNBcEJBO0VBcUJBLGdCQUFBO0FBcEhSOztBQTBIQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUF2SEo7O0FBeUhBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUF0SEo7O0FBd0hBO0VBQ0ksU0FBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FBckhKOztBQXlIQTtFQUNJLGNBL0NRO0VBZ0RSLGdCQUFBO0FBdEhKOztBQTJIQTtFQUVJO0lBQ0ksZ0NBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7RUF6SE47O0VBNEhFO0lBQ0ksV0FBQTtJQUNBLFdBQUE7SUFDQSxtQkFsRUs7SUFtRUwsYUFBQTtFQXpITjtFQTBITTtJQUNJLE9BQUE7SUFDQSxRQUFBO0lBQ0EsNEJBQUE7SUFDQSxnQ0FBQTtJQUNBLDRFQUFBO0VBeEhWO0FBQ0Y7O0FBNkhBO0VBQ0k7SUFDSSxvQkFBQTtFQTNITjs7RUE4SEU7SUFDSSwyQkFBQTtFQTNITjs7RUE2SEU7SUFDSSwyQkFBQTtFQTFITjtBQUNGOztBQTZIQTtFQUNJO0lBQ0ksb0JBQUE7RUEzSE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2RpZy1lbmdhZ2VtZW50LWNhcmQvZGlnLWVuZ2FnZW1lbnQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICRsaWdodEJyb3duOiAjRDNCMzk3O1xyXG4vLyAkYnJvd246ICM4Rjc1NUU7XHJcbi8vICRkYXJrQnJvd246ICM1QjM5Mjc7XHJcbi8vICRjb2NvYTogIzM4MjYxOTtcclxuLy8gJHdoaXRlOiAjRkZGO1xyXG5cclxuLy8gLmNhcmQge1xyXG4vLyAgICAgZGlzcGxheTp0YWJsZTtcclxuLy8gICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbi8vICAgICAvLyBtYXJnaW4tdG9wOiAzMHB4O1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBcclxuICAgIFxyXG4vLyB9XHJcbi8vIC5jYXJkLWRlc2Mge1xyXG4vLyAgICAgZmxvYXQ6bGVmdDtcclxuLy8gICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbi8vICAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjRkZGM0U4O1xyXG4vLyAgICAgbWluLWhlaWdodDogMzgwcHg7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAxNXB4IDBweCAwcHggMTVweDtcclxuLy8gICAgIGgyIHtcclxuLy8gICAgICAgICBjb2xvcjogJGNvY29hO1xyXG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbi8vICAgICAgICAgLy8gcGFkZGluZy10b3A6IDgwcHg7XHJcbi8vICAgICB9XHJcblxyXG4vLyB9XHJcblxyXG4vLyAuY2FyZC1pbWFnZSB7XHJcbi8vICAgICBmbG9hdDpyaWdodDtcclxuLy8gICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vIH1cclxuLy8gLmhlbHBlciB7XHJcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4vLyB9XHJcbi8vIGltZyB7XHJcbi8vICAgICB0b3A6IDcwMCU7XHJcbi8vICAgICBsZWZ0OiA1MCU7XHJcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gfVxyXG5cclxuLy8gcCB7XHJcbi8vICAgICBjb2xvcjogJGRhcmtCcm93bjtcclxuXHJcbiAgICBcclxuLy8gfVxyXG5cclxuLy8gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcclxuXHJcbi8vICAgICAuY2FyZC1kZXNjIHtcclxuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMHB4IDBweDtcclxuLy8gICAgICAgICBtaW4td2lkdGg6IDY1JTtcclxuLy8gICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuLy8gICAgICAgICAvLyBjbGVhcjogYm90aDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAuY2FyZC1pbWFnZSB7XHJcbi8vICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbi8vICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogJGxpZ2h0QnJvd247XHJcbi8vICAgICAgICAgYm94LXNoYWRvdzogMDtcclxuICAgICAgICBcclxuLy8gICAgICAgICBpbWcge1xyXG4vLyAgICAgICAgICAgICB0b3A6IDAlO1xyXG4vLyAgICAgICAgICAgICBsZWZ0OiAwJTtcclxuLy8gICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcclxuLy8gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxNXB4IDE1cHg7XHJcbi8vICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgLy8gaW1nIHtcclxuLy8gICAgIC8vICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcblxyXG4vLyAgICAgLy8gfVxyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xyXG4vLyAgICAgLmNhcmQge1xyXG4vLyAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwMHB4O1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLy8gLmNhcmQtZGVzYyB7XHJcbi8vICAgICAvLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAvLyB9XHJcbi8vICAgICAvLyBpbWcge1xyXG4vLyAgICAgLy8gICAgIHdpZHRoOjEwMCU7XHJcbi8vICAgICAvLyB9XHJcblxyXG4vLyAgICAgLmNvbC1tZC00e1xyXG4vLyAgICAgICAgIG1heC13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcclxuLy8gICAgIH1cclxuLy8gICAgIC5jb2wtbWQtOHtcclxuLy8gICAgICAgICBtYXgtd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbi8vICAgICB9XHJcbiAgICBcclxuLy8gfVxyXG5cclxuXHJcbi8vIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuLy8gICAgIC5jYXJkIHtcclxuLy8gICAgICAgICBtYXJnaW4tYm90dG9tOiAzNDBweDtcclxuLy8gICAgIH1cclxuXHJcbi8vIH1cclxuXHJcblxyXG5cclxuJGxpZ2h0QnJvd246ICNEM0IzOTc7XHJcbiRicm93bjogIzhGNzU1RTtcclxuJGRhcmtCcm93bjogIzVCMzkyNztcclxuJGNvY29hOiAjMzgyNjE5O1xyXG4kd2hpdGU6ICNGRkY7XHJcblxyXG4uY2FyZCB7XHJcbiAgICBkaXNwbGF5OnRhYmxlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgXHJcbn1cclxuLmNhcmQtZGVzYyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGM0U4O1xyXG4gICAgbWluLWhlaWdodDogMzgwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDBweCAwcHggMTVweDtcclxuICAgIGgyIHtcclxuICAgICAgICBjb2xvcjogJGNvY29hO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgLy8gcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uY2FyZC1pbWFnZSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5oZWxwZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5pbWcge1xyXG4gICAgdG9wOiA3MDAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyBtYXgtd2lkdGg6IDYwMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGNvbG9yOiAkZGFya0Jyb3duO1xyXG4gICAgbWF4LXdpZHRoOiA5NDBweDtcclxuXHJcbiAgICBcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcclxuXHJcbiAgICAuY2FyZC1kZXNjIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMHB4IDBweDtcclxuICAgICAgICBtaW4td2lkdGg6IDY1JTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1pbWFnZSB7XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGxpZ2h0QnJvd247XHJcbiAgICAgICAgYm94LXNoYWRvdzogMDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxNXB4IDE1cHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcclxuICAgIC5jYXJkIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLW1kLTR7XHJcbiAgICAgICAgbWF4LXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNvbC1tZC04e1xyXG4gICAgICAgIG1heC13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcclxuICAgIC5jYXJkIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzNDBweDtcclxuICAgIH1cclxuXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DigEngagementCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dig-engagement-card',
                templateUrl: './dig-engagement-card.component.html',
                styleUrls: ['./dig-engagement-card.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 10, vars: 0, consts: [[1, "pattern"], [1, "aboutMe"], ["src", "assets/img/profile-picture.png", "alt", "Profile picture of Selina Soo"], [1, "intro"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SELINA SOO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "I am a third year Computing student at the University of Kent. I have worked on both the technical side (coding in HTML, CSS/SASS with some JavaScript) and the UI/UX designing (in Adobe XD) of web development.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "For my year in industry I worked for Maidstone Borough Council. I designed and implemented several pages/services, gathered and analysed customer research and aided in web accessibility.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  max-width: 100%;\n  overflow-x: hidden;\n}\n\n.aboutMe[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 150px;\n}\n\n.pattern[_ngcontent-%COMP%] {\n  background-image: url('pattern.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 70%;\n  height: 70%;\n  position: absolute;\n  margin-left: -90px;\n  margin-top: -40px;\n}\n\nimg[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 250px;\n  height: 250px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #382619;\n  margin-left: auto;\n  margin-right: auto;\n  width: 65%;\n}\n\nh2[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBRko7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBTUk7RUFDSSxjQW5DQTtFQW9DQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUhSOztBQU9BO0VBQ0ksV0ExQ0k7RUEyQ0osZUFBQTtBQUpKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvY29hOiAjMzgyNjE5O1xyXG4kd2hpdGU6ICNGRkY7XHJcblxyXG5odG1sLCBib2R5IHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG4uYWJvdXRNZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTUwcHg7XHJcbn1cclxuXHJcbi5wYXR0ZXJuIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nL3BhdHRlcm4ucG5nKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgXHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTkwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNDBweDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxufVxyXG5cclxuLmludHJve1xyXG4gICAgcCB7XHJcbiAgICAgICAgY29sb3I6ICRjb2NvYTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgIH1cclxufVxyXG5cclxuaDIge1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


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

/***/ "FwVz":
/*!******************************************************!*\
  !*** ./src/app/crematorium/crematorium.component.ts ***!
  \******************************************************/
/*! exports provided: CrematoriumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrematoriumComponent", function() { return CrematoriumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class CrematoriumComponent {
    constructor() { }
    ngOnInit() {
    }
}
CrematoriumComponent.ɵfac = function CrematoriumComponent_Factory(t) { return new (t || CrematoriumComponent)(); };
CrematoriumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CrematoriumComponent, selectors: [["app-crematorium"]], decls: 43, vars: 0, consts: [[1, "pattern"], ["href", "#", "routerLink", "/work", 1, "back"], [1, "container", "details"], ["src", "../../assets/img/crem-work/prototype-landing.png", "alt", "Prototype of landing page"], ["src", "../../assets/img/crem-work/prototype-content.png", "alt", "Prototype of content page"], ["src", "../../assets/img/crem-landing-page.PNG", "alt", "Final landing page"], ["src", "../../assets/img/crem-work/crem-content-page.png", "alt", "Final landing page"], ["src", "../../assets/img/crem-work/crem-content-page-resp.png", "alt", "Final landing page"]], template: function CrematoriumComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "BACK TO WORK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Crematorium user journey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "This project is about redesigning and developing the Crematorium pages on the Council website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Designing/Prototyping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "For a web development project, one of the most important aspects is to establish what the user wants. Therefore, after a discussion with the clients I realised that they wanted a very visual orientated design. However, due to accessibility regulations it would be more a challenge. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "In terms of designing I used Adobe XD to create multiple prototypes. Prototyping is crucial in designing a web page becausee it allows the clients to have a visual representation of what the web page will look like aswell as giving me an idea of what they want and what to develop. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "The prototype of the landing page discussed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Following from the landing the user will end on the content page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "A few tweaks had to be made to the content pages as they required more description and details, I created a new prototype in Adobe XD and they were happy with the new design so I went ahead and coded it on the CMS. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Developing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "During this development phase I created custom cards with an enquiry button with responsive capabilities.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "The final results looked like this:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Landing page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Content page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Responsiveness of the content page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".pattern[_ngcontent-%COMP%] {\n  background-image: url('pattern.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 70%;\n  height: 100%;\n  position: absolute;\n  margin-left: -90px;\n  margin-top: -40px;\n  z-index: -1000;\n}\n\n.back[_ngcontent-%COMP%] {\n  float: right;\n  text-decoration: none;\n}\n\n.details[_ngcontent-%COMP%] {\n  padding-top: 200px;\n}\n\na[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #382619;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 15px 15px 0px 0px;\n}\n\nfigcaption[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  background: #FFF;\n  padding: 8px;\n  border-radius: 0px 0px 15px 15px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlbWF0b3JpdW0vY3JlbWF0b3JpdW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFLQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtBQUZKOztBQUtBO0VBQ0ksa0JBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsY0ExQkk7QUF3QlI7O0FBR0k7RUFDSSxXQUFBO0FBRFI7O0FBS0E7RUFDSSxXQUFBO0VBQ0EsZ0NBQUE7QUFGSjs7QUFLQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQXZDSTtFQXdDSixZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0FBRkoiLCJmaWxlIjoic3JjL2FwcC9jcmVtYXRvcml1bS9jcmVtYXRvcml1bS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2NvYTogIzM4MjYxOTtcclxuJHdoaXRlOiAjRkZGO1xyXG5cclxuLnBhdHRlcm4ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvcGF0dGVybi5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICBcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTkwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICAgIHotaW5kZXg6IC0xMDAwO1xyXG59XHJcblxyXG4uYmFjayB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5kZXRhaWxzIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMDBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICRjb2NvYTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMHB4IDBweDtcclxufVxyXG5cclxuZmlnY2FwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgcGFkZGluZzo4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDE1cHggMTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrematoriumComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-crematorium',
                templateUrl: './crematorium.component.html',
                styleUrls: ['./crematorium.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Mt2U":
/*!************************************************************!*\
  !*** ./src/app/dig-engagement/dig-engagement.component.ts ***!
  \************************************************************/
/*! exports provided: DigEngagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigEngagementComponent", function() { return DigEngagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class DigEngagementComponent {
    constructor() { }
    ngOnInit() {
    }
}
DigEngagementComponent.ɵfac = function DigEngagementComponent_Factory(t) { return new (t || DigEngagementComponent)(); };
DigEngagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DigEngagementComponent, selectors: [["app-dig-engagement"]], decls: 24, vars: 0, consts: [[1, "pattern"], ["href", "#", "routerLink", "/work", 1, "back"], [1, "container", "details"], ["src", "../../assets/img/powerBi.png", "alt", "Dashboard in PowerBi"], ["src", "../../assets/img/dig-engagement-work/dig-engagement-presentation.png", "alt", "Dashboard in PowerBi"]], template: function DigEngagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "BACK TO WORK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Digital Engagement Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "This project was to investigate the digital habits and capabilities; to find out what can be done by the council to help improve digital inclusion.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Data Analysing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "I manipulated with the data by using excel formulas to retrieve specific findings. Once I isolated the data, I used PowerBi, which is a business analytics service developed by Microsoft to display interactive visualisations in simple dashboards. I did not have training to use this system, so I used online guides and videos to aid my navigation while just manipulating with it myself. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Experimenting with the dashboard to see how it works and how my data looks like");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "I was given extra material to look into that I can compare my findings with which made the data more rich. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Once this was done I created a PowerPoint presentation that would be fed back to upper management to look at the findings and to discuss what can be done on our side as a Council. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "The presentation we delievered to upper management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".pattern[_ngcontent-%COMP%] {\n  background-image: url('pattern.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 70%;\n  height: 100%;\n  position: absolute;\n  margin-left: -90px;\n  margin-top: -40px;\n  z-index: -1000;\n}\n\n.back[_ngcontent-%COMP%] {\n  float: right;\n  text-decoration: none;\n}\n\n.details[_ngcontent-%COMP%] {\n  padding-top: 200px;\n}\n\na[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #382619;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 15px 15px 0px 0px;\n}\n\nfigcaption[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  background: #FFF;\n  padding: 8px;\n  border-radius: 0px 0px 15px 15px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlnLWVuZ2FnZW1lbnQvZGlnLWVuZ2FnZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFLQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtBQUZKOztBQUtBO0VBQ0ksa0JBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsY0ExQkk7QUF3QlI7O0FBR0k7RUFDSSxXQUFBO0FBRFI7O0FBS0E7RUFDSSxXQUFBO0VBQ0EsZ0NBQUE7QUFGSjs7QUFLQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQXZDSTtFQXdDSixZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0FBRkoiLCJmaWxlIjoic3JjL2FwcC9kaWctZW5nYWdlbWVudC9kaWctZW5nYWdlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2NvYTogIzM4MjYxOTtcclxuJHdoaXRlOiAjRkZGO1xyXG5cclxuLnBhdHRlcm4ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvcGF0dGVybi5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICBcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTkwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICAgIHotaW5kZXg6IC0xMDAwO1xyXG59XHJcblxyXG4uYmFjayB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5kZXRhaWxzIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMDBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICRjb2NvYTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMHB4IDBweDtcclxufVxyXG5cclxuZmlnY2FwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgcGFkZGluZzo4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDE1cHggMTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DigEngagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dig-engagement',
                templateUrl: './dig-engagement.component.html',
                styleUrls: ['./dig-engagement.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "NcFN":
/*!****************************************************************!*\
  !*** ./src/app/crematorium-card/crematorium-card.component.ts ***!
  \****************************************************************/
/*! exports provided: CrematoriumCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrematoriumCardComponent", function() { return CrematoriumCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class CrematoriumCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
CrematoriumCardComponent.ɵfac = function CrematoriumCardComponent_Factory(t) { return new (t || CrematoriumCardComponent)(); };
CrematoriumCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CrematoriumCardComponent, selectors: [["app-crematorium-card"]], decls: 10, vars: 0, consts: [[1, "card"], ["href", "#", "routerLink", "/crematorium"], [1, "card-desc", "col-xs-12", "col-s-12", "col-md-4"], [1, "card-image", "col-xs-12", "col-s-12", "col-md-8"], [1, "helper"], ["src", "../../assets/img/crem-landing-page.PNG", "alt", "Example of landing page", 1, "img-fluid"]], template: function CrematoriumCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Creating a more engaging service area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Maidstone Council's bereavement services wanted to have more engaging content to showcase their products.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".card[_ngcontent-%COMP%] {\n  display: table;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  margin-top: 30px;\n  margin-bottom: 30px;\n  border-radius: 15px;\n}\n\n.card-desc[_ngcontent-%COMP%] {\n  float: left;\n  display: table-cell;\n  padding: 30px 20px;\n  background: #FFF3E8;\n  min-height: 380px;\n  border-radius: 15px 0px 0px 15px;\n}\n\n.card-desc[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #382619;\n  font-weight: 700;\n}\n\n.card-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #5B3927;\n}\n\n.card-image[_ngcontent-%COMP%] {\n  float: right;\n  display: table-cell;\n  height: 100%;\n}\n\n.card-image[_ngcontent-%COMP%]   .helper[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n}\n\n.card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  top: 700%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  max-height: 360px;\n}\n\n@media only screen and (max-width: 1050px) {\n  .card-desc[_ngcontent-%COMP%] {\n    border-radius: 15px 15px 0px 0px;\n    min-width: 65%;\n    min-height: 200px;\n  }\n\n  .card-image[_ngcontent-%COMP%] {\n    clear: both;\n    float: left;\n    background: #D3B397;\n    box-shadow: 0;\n  }\n  .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    top: 0%;\n    left: 0%;\n    transform: translate(0%, 0%);\n    border-radius: 0px 0px 15px 15px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  }\n}\n\n@media screen and (min-width: 768px) and (max-width: 1050px) {\n  .card[_ngcontent-%COMP%] {\n    margin-bottom: 350px;\n  }\n\n  .col-md-4[_ngcontent-%COMP%] {\n    max-width: unset !important;\n  }\n\n  .col-md-8[_ngcontent-%COMP%] {\n    max-width: unset !important;\n  }\n}\n\n@media only screen and (max-width: 1050px) {\n  .card[_ngcontent-%COMP%] {\n    margin-bottom: 340px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlbWF0b3JpdW0tY2FyZC9jcmVtYXRvcml1bS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0ksY0FBQTtFQUNBLDRFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBTEo7O0FBUUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQUxKOztBQU1JO0VBQ0ksY0FuQkE7RUFvQkEsZ0JBQUE7QUFKUjs7QUFPSTtFQUNJLGNBekJJO0FBb0JaOztBQVVBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQVBKOztBQVFJO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFOUjs7QUFRSTtFQUNJLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBTlI7O0FBVUE7RUFFSTtJQUNJLGdDQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0VBUk47O0VBV0U7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQTdESztJQThETCxhQUFBO0VBUk47RUFTTTtJQUNJLE9BQUE7SUFDQSxRQUFBO0lBQ0EsNEJBQUE7SUFDQSxnQ0FBQTtJQUNBLDRFQUFBO0VBUFY7QUFDRjs7QUFZQTtFQUNJO0lBQ0ksb0JBQUE7RUFWTjs7RUFhRTtJQUNJLDJCQUFBO0VBVk47O0VBWUU7SUFDSSwyQkFBQTtFQVROO0FBQ0Y7O0FBWUE7RUFDSTtJQUNJLG9CQUFBO0VBVk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NyZW1hdG9yaXVtLWNhcmQvY3JlbWF0b3JpdW0tY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRsaWdodEJyb3duOiAjRDNCMzk3O1xyXG4kYnJvd246ICM4Rjc1NUU7XHJcbiRkYXJrQnJvd246ICM1QjM5Mjc7XHJcbiRjb2NvYTogIzM4MjYxOTtcclxuJHdoaXRlOiAjRkZGO1xyXG5cclxuLmNhcmQge1xyXG4gICAgZGlzcGxheTp0YWJsZTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5jYXJkLWRlc2Mge1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGM0U4O1xyXG4gICAgbWluLWhlaWdodDogMzgwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDBweCAwcHggMTVweDtcclxuICAgIGgyIHtcclxuICAgICAgICBjb2xvcjogJGNvY29hO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgLy8gcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBjb2xvcjogJGRhcmtCcm93bjsgIFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmNhcmQtaW1hZ2Uge1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLmhlbHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgICB0b3A6IDcwMCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAzNjBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcclxuXHJcbiAgICAuY2FyZC1kZXNjIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMHB4IDBweDtcclxuICAgICAgICBtaW4td2lkdGg6IDY1JTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1pbWFnZSB7XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGxpZ2h0QnJvd247XHJcbiAgICAgICAgYm94LXNoYWRvdzogMDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxNXB4IDE1cHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcclxuICAgIC5jYXJkIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLW1kLTR7XHJcbiAgICAgICAgbWF4LXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNvbC1tZC04e1xyXG4gICAgICAgIG1heC13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcclxuICAgIC5jYXJkIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzNDBweDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrematoriumCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-crematorium-card',
                templateUrl: './crematorium-card.component.html',
                styleUrls: ['./crematorium-card.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "QtgU":
/*!**********************************************************!*\
  !*** ./src/app/accessibility/accessibility.component.ts ***!
  \**********************************************************/
/*! exports provided: AccessibilityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessibilityComponent", function() { return AccessibilityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AccessibilityComponent {
    constructor() { }
    ngOnInit() {
    }
}
AccessibilityComponent.ɵfac = function AccessibilityComponent_Factory(t) { return new (t || AccessibilityComponent)(); };
AccessibilityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccessibilityComponent, selectors: [["app-accessibility"]], decls: 32, vars: 0, consts: [[1, "pattern"], ["href", "#", "routerLink", "/work", 1, "back"], [1, "container", "details"], ["href", "https://maidstone.gov.uk/home/accessibility-statement", "target", "_blank"], ["src", "assets/img/accessibility-work/silktide.png", "alt", "Dashboard of service used"], ["src", "assets/img/accessibility-work/twitter-page.png", "alt", "Tweet about our work"]], template: function AccessibilityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "BACK TO WORK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Accessibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "This project was about making all websites owned by Maidstone Borough Council to comply with WCAG (Web Content Accessibility Guidelines) 2.1. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Designing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "While designing I had to consider the colour contrast of different elements to ensure that all componenents within a web page are clearly presented. Furthermore, tags needed to be in a logical order (e.g. h1, h2, h3) to allow those using assistive technology to access the page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Throughout the year, I was able to learn how a developer and editor can make simple habit changes before committing information online. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "My Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "I worked with two other team members during this project. We used Trello boards to organise what tasks we needed to do for the week and assign tasks to each person. As well as having two scrum meetings within the week to check on progress and answer any questions anyone would want to raise. In the beginning of this project we had a meeting to break down different tasks within accessibility that we needed to achieve. We first needed to gauge where we were at regarding accessibility. To do this a team member and myself did research into what these regulations entail. From researching we created an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "accessibility statement on the Maidstone Council website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "We used Silktide to monitor our progress through time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "We work through the changes to get us towards complete compliance. Within the tasks there were a mixture of easier changes \u2013 altering heading structures to changing the whole structure of the HTML template.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "With a lot of time and effort we were acknowledged by upper management and were praised for our work.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "A tweet about how we became 100% compliant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".pattern[_ngcontent-%COMP%] {\n  background-image: url('pattern.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 70%;\n  height: 100%;\n  position: absolute;\n  margin-left: -90px;\n  margin-top: -40px;\n  z-index: -1000;\n}\n\n.back[_ngcontent-%COMP%] {\n  float: right;\n  text-decoration: none;\n}\n\n.details[_ngcontent-%COMP%] {\n  padding-top: 200px;\n}\n\na[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #382619;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 15px 15px 0px 0px;\n}\n\nfigcaption[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  background: #FFF;\n  padding: 8px;\n  border-radius: 0px 0px 15px 15px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjZXNzaWJpbGl0eS9hY2Nlc3NpYmlsaXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksb0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0VBQ0EscUJBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0FBRko7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLGNBMUJJO0FBd0JSOztBQUdJO0VBQ0ksV0FBQTtBQURSOztBQUtBO0VBQ0ksV0FBQTtFQUNBLGdDQUFBO0FBRko7O0FBS0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkF2Q0k7RUF3Q0osWUFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvYWNjZXNzaWJpbGl0eS9hY2Nlc3NpYmlsaXR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvY29hOiAjMzgyNjE5O1xyXG4kd2hpdGU6ICNGRkY7XHJcblxyXG4ucGF0dGVybiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9wYXR0ZXJuLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgIFxyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtOTBweDtcclxuICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gICAgei1pbmRleDogLTEwMDA7XHJcbn1cclxuXHJcbi5iYWNrIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmRldGFpbHMge1xyXG4gICAgcGFkZGluZy10b3A6IDIwMHB4O1xyXG59XHJcblxyXG5hIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogJGNvY29hO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwcHggMHB4O1xyXG59XHJcblxyXG5maWdjYXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICBwYWRkaW5nOjhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTVweCAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccessibilityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-accessibility',
                templateUrl: './accessibility.component.html',
                styleUrls: ['./accessibility.component.scss']
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'my-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 14, vars: 0, consts: [[1, "container"], ["href", "#", 1, "logo"], ["href", "#", "routerLink", "/"], ["href", "#", "routerLink", "/work"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "selina");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "WORK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./work/work.component */ "kH/F");
/* harmony import */ var _crematorium_card_crematorium_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crematorium-card/crematorium-card.component */ "NcFN");
/* harmony import */ var _dig_engagement_card_dig_engagement_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dig-engagement-card/dig-engagement-card.component */ "5+rw");
/* harmony import */ var _accessibility_accessibility_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./accessibility/accessibility.component */ "QtgU");
/* harmony import */ var _accessibility_card_accessibility_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./accessibility-card/accessibility-card.component */ "rMO8");
/* harmony import */ var _crematorium_crematorium_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./crematorium/crematorium.component */ "FwVz");
/* harmony import */ var _dig_engagement_dig_engagement_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dig-engagement/dig-engagement.component */ "Mt2U");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _work_work_component__WEBPACK_IMPORTED_MODULE_5__["WorkComponent"],
        _crematorium_card_crematorium_card_component__WEBPACK_IMPORTED_MODULE_6__["CrematoriumCardComponent"],
        _dig_engagement_card_dig_engagement_card_component__WEBPACK_IMPORTED_MODULE_7__["DigEngagementCardComponent"],
        _accessibility_accessibility_component__WEBPACK_IMPORTED_MODULE_8__["AccessibilityComponent"],
        _accessibility_card_accessibility_card_component__WEBPACK_IMPORTED_MODULE_9__["AccessibilityCardComponent"],
        _crematorium_crematorium_component__WEBPACK_IMPORTED_MODULE_10__["CrematoriumComponent"],
        _dig_engagement_dig_engagement_component__WEBPACK_IMPORTED_MODULE_11__["DigEngagementComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _work_work_component__WEBPACK_IMPORTED_MODULE_5__["WorkComponent"],
                    _crematorium_card_crematorium_card_component__WEBPACK_IMPORTED_MODULE_6__["CrematoriumCardComponent"],
                    _dig_engagement_card_dig_engagement_card_component__WEBPACK_IMPORTED_MODULE_7__["DigEngagementCardComponent"],
                    _accessibility_accessibility_component__WEBPACK_IMPORTED_MODULE_8__["AccessibilityComponent"],
                    _accessibility_card_accessibility_card_component__WEBPACK_IMPORTED_MODULE_9__["AccessibilityCardComponent"],
                    _crematorium_crematorium_component__WEBPACK_IMPORTED_MODULE_10__["CrematoriumComponent"],
                    _dig_engagement_dig_engagement_component__WEBPACK_IMPORTED_MODULE_11__["DigEngagementComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "kH/F":
/*!****************************************!*\
  !*** ./src/app/work/work.component.ts ***!
  \****************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _crematorium_card_crematorium_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crematorium-card/crematorium-card.component */ "NcFN");
/* harmony import */ var _dig_engagement_card_dig_engagement_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dig-engagement-card/dig-engagement-card.component */ "5+rw");
/* harmony import */ var _accessibility_card_accessibility_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../accessibility-card/accessibility-card.component */ "rMO8");







class WorkComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}
WorkComponent.ɵfac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
WorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkComponent, selectors: [["app-work"]], decls: 6, vars: 0, consts: [[1, "work"]], template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "WORK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-crematorium-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-dig-engagement-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-accessibility-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_crematorium_card_crematorium_card_component__WEBPACK_IMPORTED_MODULE_2__["CrematoriumCardComponent"], _dig_engagement_card_dig_engagement_card_component__WEBPACK_IMPORTED_MODULE_3__["DigEngagementCardComponent"], _accessibility_card_accessibility_card_component__WEBPACK_IMPORTED_MODULE_4__["AccessibilityCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmsvd29yay5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-work',
                templateUrl: './work.component.html',
                styleUrls: ['./work.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "rMO8":
/*!********************************************************************!*\
  !*** ./src/app/accessibility-card/accessibility-card.component.ts ***!
  \********************************************************************/
/*! exports provided: AccessibilityCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessibilityCardComponent", function() { return AccessibilityCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AccessibilityCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
AccessibilityCardComponent.ɵfac = function AccessibilityCardComponent_Factory(t) { return new (t || AccessibilityCardComponent)(); };
AccessibilityCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccessibilityCardComponent, selectors: [["app-accessibility-card"]], decls: 10, vars: 0, consts: [[1, "card"], ["href", "#", "routerLink", "/accessibility"], [1, "card-desc", "col-xs-12", "col-s-12", "col-md-4"], [1, "card-image", "col-xs-12", "col-s-12", "col-md-8"], [1, "helper"], ["src", "assets/img/accessibility.png", "alt", "Example of landing page", 1, "img-fluid"]], template: function AccessibilityCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Realising the importance of accessibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "WCAG (Web Content Accessibility Guidelines) 2.1 released by central government to improve web accessibility for those with impairments. Not only a legal need but a critical part of catering for the general public.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".card[_ngcontent-%COMP%] {\n  display: table;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  margin-top: 30px;\n  margin-bottom: 30px;\n  border-radius: 15px;\n  max-width: 1000px;\n}\n\n.card-desc[_ngcontent-%COMP%] {\n  float: left;\n  display: table-cell;\n  padding: 30px 20px;\n  background: #FFF3E8;\n  min-height: 380px;\n  border-radius: 15px 0px 0px 15px;\n}\n\n.card-desc[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #382619;\n  font-weight: 700;\n}\n\n.card-image[_ngcontent-%COMP%] {\n  float: right;\n  display: table-cell;\n  height: 100%;\n}\n\n.helper[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n}\n\nimg[_ngcontent-%COMP%] {\n  top: 700%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n}\n\np[_ngcontent-%COMP%] {\n  color: #5B3927;\n  max-width: 940px;\n}\n\n@media only screen and (max-width: 1050px) {\n  .card-desc[_ngcontent-%COMP%] {\n    border-radius: 15px 15px 0px 0px;\n    min-width: 65%;\n    min-height: 200px;\n  }\n\n  .card-image[_ngcontent-%COMP%] {\n    clear: both;\n    float: left;\n    background: #D3B397;\n    box-shadow: 0;\n  }\n  .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    top: 0%;\n    left: 0%;\n    transform: translate(0%, 0%);\n    border-radius: 0px 0px 15px 15px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  }\n}\n\n@media screen and (min-width: 768px) and (max-width: 1050px) {\n  .card[_ngcontent-%COMP%] {\n    margin-bottom: 350px;\n  }\n\n  .col-md-4[_ngcontent-%COMP%] {\n    max-width: unset !important;\n  }\n\n  .col-md-8[_ngcontent-%COMP%] {\n    max-width: unset !important;\n  }\n}\n\n@media only screen and (max-width: 1050px) {\n  .card[_ngcontent-%COMP%] {\n    margin-bottom: 340px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjZXNzaWJpbGl0eS1jYXJkL2FjY2Vzc2liaWxpdHktY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzSEE7RUFDSSxjQUFBO0VBQ0EsNEVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQXJISjs7QUF3SEE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQXJISjs7QUFzSEk7RUFDSSxjQXBCQTtFQXFCQSxnQkFBQTtBQXBIUjs7QUEwSEE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBdkhKOztBQXlIQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBdEhKOztBQXdIQTtFQUNJLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQXJISjs7QUF5SEE7RUFDSSxjQS9DUTtFQWdEUixnQkFBQTtBQXRISjs7QUEySEE7RUFFSTtJQUNJLGdDQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0VBekhOOztFQTRIRTtJQUNJLFdBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBbEVLO0lBbUVMLGFBQUE7RUF6SE47RUEwSE07SUFDSSxPQUFBO0lBQ0EsUUFBQTtJQUNBLDRCQUFBO0lBQ0EsZ0NBQUE7SUFDQSw0RUFBQTtFQXhIVjtBQUNGOztBQTZIQTtFQUNJO0lBQ0ksb0JBQUE7RUEzSE47O0VBOEhFO0lBQ0ksMkJBQUE7RUEzSE47O0VBNkhFO0lBQ0ksMkJBQUE7RUExSE47QUFDRjs7QUE2SEE7RUFDSTtJQUNJLG9CQUFBO0VBM0hOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hY2Nlc3NpYmlsaXR5LWNhcmQvYWNjZXNzaWJpbGl0eS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gJGxpZ2h0QnJvd246ICNEM0IzOTc7XHJcbi8vICRicm93bjogIzhGNzU1RTtcclxuLy8gJGRhcmtCcm93bjogIzVCMzkyNztcclxuLy8gJGNvY29hOiAjMzgyNjE5O1xyXG4vLyAkd2hpdGU6ICNGRkY7XHJcblxyXG4vLyAuY2FyZCB7XHJcbi8vICAgICBkaXNwbGF5OnRhYmxlO1xyXG4vLyAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuLy8gICAgIC8vIG1hcmdpbi10b3A6IDMwcHg7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIFxyXG4gICAgXHJcbi8vIH1cclxuLy8gLmNhcmQtZGVzYyB7XHJcbi8vICAgICBmbG9hdDpsZWZ0O1xyXG4vLyAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuLy8gICAgIHBhZGRpbmc6IDMwcHggMjBweDtcclxuLy8gICAgIGJhY2tncm91bmQ6ICNGRkYzRTg7XHJcbi8vICAgICBtaW4taGVpZ2h0OiAzODBweDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMHB4IDBweCAxNXB4O1xyXG4vLyAgICAgaDIge1xyXG4vLyAgICAgICAgIGNvbG9yOiAkY29jb2E7XHJcbi8vICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuLy8gICAgICAgICAvLyBwYWRkaW5nLXRvcDogODBweDtcclxuLy8gICAgIH1cclxuXHJcbi8vIH1cclxuXHJcbi8vIC5jYXJkLWltYWdlIHtcclxuLy8gICAgIGZsb2F0OnJpZ2h0O1xyXG4vLyAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuLy8gfVxyXG4vLyAuaGVscGVyIHtcclxuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuLy8gICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbi8vIH1cclxuLy8gaW1nIHtcclxuLy8gICAgIHRvcDogNzAwJTtcclxuLy8gICAgIGxlZnQ6IDUwJTtcclxuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyB9XHJcblxyXG4vLyBwIHtcclxuLy8gICAgIGNvbG9yOiAkZGFya0Jyb3duO1xyXG5cclxuICAgIFxyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xyXG5cclxuLy8gICAgIC5jYXJkLWRlc2Mge1xyXG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwcHggMHB4O1xyXG4vLyAgICAgICAgIG1pbi13aWR0aDogNjUlO1xyXG4vLyAgICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4vLyAgICAgICAgIC8vIGNsZWFyOiBib3RoO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC5jYXJkLWltYWdlIHtcclxuLy8gICAgICAgICBjbGVhcjogYm90aDtcclxuLy8gICAgICAgICBmbG9hdDogbGVmdDtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAkbGlnaHRCcm93bjtcclxuLy8gICAgICAgICBib3gtc2hhZG93OiAwO1xyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIGltZyB7XHJcbi8vICAgICAgICAgICAgIHRvcDogMCU7XHJcbi8vICAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG4vLyAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xyXG4vLyAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDE1cHggMTVweDtcclxuLy8gICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICAvLyBpbWcge1xyXG4vLyAgICAgLy8gICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuXHJcbi8vICAgICAvLyB9XHJcbi8vIH1cclxuXHJcbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XHJcbi8vICAgICAuY2FyZCB7XHJcbi8vICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzAwcHg7XHJcbi8vICAgICB9XHJcbi8vICAgICAvLyAuY2FyZC1kZXNjIHtcclxuLy8gICAgIC8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIC8vIH1cclxuLy8gICAgIC8vIGltZyB7XHJcbi8vICAgICAvLyAgICAgd2lkdGg6MTAwJTtcclxuLy8gICAgIC8vIH1cclxuXHJcbi8vICAgICAuY29sLW1kLTR7XHJcbi8vICAgICAgICAgbWF4LXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLmNvbC1tZC04e1xyXG4vLyAgICAgICAgIG1heC13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcclxuLy8gICAgIH1cclxuICAgIFxyXG4vLyB9XHJcblxyXG5cclxuLy8gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4vLyAgICAgLmNhcmQge1xyXG4vLyAgICAgICAgIG1hcmdpbi1ib3R0b206IDM0MHB4O1xyXG4vLyAgICAgfVxyXG5cclxuLy8gfVxyXG5cclxuXHJcblxyXG4kbGlnaHRCcm93bjogI0QzQjM5NztcclxuJGJyb3duOiAjOEY3NTVFO1xyXG4kZGFya0Jyb3duOiAjNUIzOTI3O1xyXG4kY29jb2E6ICMzODI2MTk7XHJcbiR3aGl0ZTogI0ZGRjtcclxuXHJcbi5jYXJkIHtcclxuICAgIGRpc3BsYXk6dGFibGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICBcclxufVxyXG4uY2FyZC1kZXNjIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkYzRTg7XHJcbiAgICBtaW4taGVpZ2h0OiAzODBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMHB4IDBweCAxNXB4O1xyXG4gICAgaDIge1xyXG4gICAgICAgIGNvbG9yOiAkY29jb2E7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAvLyBwYWRkaW5nLXRvcDogODBweDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5jYXJkLWltYWdlIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmhlbHBlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbmltZyB7XHJcbiAgICB0b3A6IDcwMCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIG1heC13aWR0aDogNjAwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgY29sb3I6ICRkYXJrQnJvd247XHJcbiAgICBtYXgtd2lkdGg6IDk0MHB4O1xyXG5cclxuICAgIFxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xyXG5cclxuICAgIC5jYXJkLWRlc2Mge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwcHggMHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogNjUlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWltYWdlIHtcclxuICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkbGlnaHRCcm93bjtcclxuICAgICAgICBib3gtc2hhZG93OiAwO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDE1cHggMTVweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtbWQtNHtcclxuICAgICAgICBtYXgtd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY29sLW1kLTh7XHJcbiAgICAgICAgbWF4LXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM0MHB4O1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccessibilityCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-accessibility-card',
                templateUrl: './accessibility-card.component.html',
                styleUrls: ['./accessibility-card.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work/work.component */ "kH/F");
/* harmony import */ var _crematorium_crematorium_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crematorium/crematorium.component */ "FwVz");
/* harmony import */ var _dig_engagement_dig_engagement_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dig-engagement/dig-engagement.component */ "Mt2U");
/* harmony import */ var _accessibility_accessibility_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accessibility/accessibility.component */ "QtgU");









const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'work', component: _work_work_component__WEBPACK_IMPORTED_MODULE_3__["WorkComponent"] },
    { path: 'crematorium', component: _crematorium_crematorium_component__WEBPACK_IMPORTED_MODULE_4__["CrematoriumComponent"] },
    { path: 'dig-engagement', component: _dig_engagement_dig_engagement_component__WEBPACK_IMPORTED_MODULE_5__["DigEngagementComponent"] },
    { path: 'accessibility', component: _accessibility_accessibility_component__WEBPACK_IMPORTED_MODULE_6__["AccessibilityComponent"] },
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