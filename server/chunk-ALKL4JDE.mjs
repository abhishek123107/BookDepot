import './polyfills.server.mjs';
import {
  ActivatedRoute,
  ChangeDetectorRef,
  CommonModule,
  DatePipe,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  HttpClient,
  HttpClientModule,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  Optional,
  Output,
  Renderer2,
  Router,
  RouterLink,
  RouterOutlet,
  RuntimeError,
  Self,
  SkipSelf,
  Subject,
  TitleCasePipe,
  Version,
  booleanAttribute,
  bootstrapApplication,
  computed,
  forkJoin,
  forwardRef,
  from,
  getDOM,
  inject,
  isPromise,
  isSubscribable,
  map,
  mergeApplicationConfig,
  provideClientHydration,
  provideHttpClient,
  provideRouter,
  provideServerRendering,
  provideZoneChangeDetection,
  setClassMetadata,
  signal,
  untracked,
  withJsonpSupport,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction5,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtrustConstantResourceUrl,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OWAFOYO7.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-PTRYWQQD.mjs";

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  http;
  title = "folder";
  message = "";
  constructor(http) {
    this.http = http;
  }
  getMessage() {
    this.http.get("http://127.0.0.1:8000/customer/home").subscribe({
      next: (data) => this.message = data.message,
      error: (error) => {
        console.error("API Error:", error);
        this.message = "Failed to load message from API";
      }
    });
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 32, vars: 0, consts: [[1, "body"], [1, "navbar"], [1, "logo"], ["src", "Image/logo.jpg", "alt", "Depot logo", 2, "height", "40px", "width", "40px", "border-radius", "50%"], [1, "nav-links"], ["routerLink", "customer/login"], [1, "fancy-button"], ["routerLink", "customer/home", "routerLinkActive", "active"], ["routerLink", "customer/about", "routerLinkActive", "active"], ["routerLink", "customer/service", "routerLinkActive", "active"], ["routerLink", "customer/profile", "routerLinkActive", "active"], [1, "footer"], [1, "footer-links"], ["href", "#"], ["routerLink", "/admin"], ["routerLink", "customer/contact", "routerLinkActive", "active"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275text(4, " Book Depot\n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "nav", 4)(6, "a", 5)(7, "button", 6);
      \u0275\u0275text(8, "SignUp/Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "a", 7);
      \u0275\u0275text(10, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 8);
      \u0275\u0275text(12, "About");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "a", 9);
      \u0275\u0275text(14, "Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "a", 10);
      \u0275\u0275text(16, "Profile");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(17, "router-outlet");
      \u0275\u0275elementStart(18, "footer", 11)(19, "p");
      \u0275\u0275text(20, " \xA9 2025 Book Depot.- Your Knowledge Hub. Designed with modern touch.Call Us: +91 62024555773 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 12)(22, "a", 13);
      \u0275\u0275text(23, "About Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "a", 13);
      \u0275\u0275text(25, "Privacy Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "a", 13);
      \u0275\u0275text(27, "Terms of Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "a", 14);
      \u0275\u0275text(29, "AdminPage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "a", 15);
      \u0275\u0275text(31, "Contact");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [RouterLink, RouterOutlet, CommonModule], styles: ['\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.body[_ngcontent-%COMP%] {\n  font-family: "Segoe UI", sans-serif;\n  background:\n    linear-gradient(\n      135deg,\n      #759db3,\n      #3b3a13);\n  position: static;\n  line-height: 1.6;\n}\n.navbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: rgba(12, 3, 19, 0.05);\n  padding: 20px 20px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 10px;\n  margin: 20px auto;\n  max-width: 1100px;\n}\na[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 24px rgba(110, 142, 251, 0.5);\n}\n.logo[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: bold;\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  color: #fff;\n  text-decoration: none;\n  font-weight: 500;\n}\n.footer[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px 20px;\n  background: rgba(255, 255, 255, 0.05);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  margin-top: 40px;\n  border-radius: 12px;\n}\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 0.9rem;\n  color: #ccc;\n}\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  color: #aaa;\n  font-size: 0.85rem;\n  text-decoration: none;\n}\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.fancy-button[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6e8efb,\n      #a777e3);\n  border: none;\n  color: white;\n  padding: 12px 24px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 30px;\n  cursor: pointer;\n  box-shadow: 0 8px 20px rgba(110, 142, 251, 0.4);\n  transition: all 0.3s ease;\n}\n.fancy-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 24px rgba(110, 142, 251, 0.5);\n}\n.fancy-button[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n  box-shadow: 0 4px 12px rgba(110, 142, 251, 0.3);\n}\n/*# sourceMappingURL=app.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 19 });
})();

// src/app/customer/profile.component.ts
var _c0 = (a0, a1, a2, a3, a4) => ({ "badge-confirmed": a0, "badge-cancelled": a1, "badge-pending": a2, "badge-tracking": a3, "badge-delivered": a4 });
function ProfileComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "h2");
    \u0275\u0275text(3, "My Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3")(5, "strong");
    \u0275\u0275text(6, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p")(9, "strong");
    \u0275\u0275text(10, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p")(13, "strong");
    \u0275\u0275text(14, "Phone:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p")(17, "strong");
    \u0275\u0275text(18, "Address:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 6)(21, "button", 7);
    \u0275\u0275listener("click", function ProfileComponent_div_0_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateProfile());
    });
    \u0275\u0275text(22, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 8);
    \u0275\u0275listener("click", function ProfileComponent_div_0_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.logout());
    });
    \u0275\u0275text(24, "Logout");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r2.user.name, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.user.email, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.user.phone, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.user.address, "");
  }
}
function ProfileComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "p");
    \u0275\u0275text(2, "No user data found. Please login again.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 10);
    \u0275\u0275text(4, "Go to Login");
    \u0275\u0275elementEnd()();
  }
}
function ProfileComponent_form_5_tr_22_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function ProfileComponent_form_5_tr_22_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.trackOrder());
    });
    \u0275\u0275text(1, " Track Order ");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_form_5_tr_22_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function ProfileComponent_form_5_tr_22_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const order_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateStatus(order_r6.id, "cancelled"));
    });
    \u0275\u0275text(1, " Cancel Order ");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_form_5_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span", 14);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275template(21, ProfileComponent_form_5_tr_22_button_21_Template, 2, 0, "button", 15)(22, ProfileComponent_form_5_tr_22_button_22_Template, 2, 0, "button", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r7 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r6.customer_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r6.address);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r6.book.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r6.book.author);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", order_r6.book.price, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 11, order_r6.created_at, "yyyy-MM-dd"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(16, _c0, order_r6.status === "confirmed", order_r6.status === "cancelled", order_r6.status === "pending", order_r6.status === "tracking", order_r6.status === "delivered"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 14, order_r6.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", order_r6.status !== "cancelled" && order_r6.status !== "delivered");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", order_r6.status !== "cancelled" && order_r6.status !== "delivered");
  }
}
function ProfileComponent_form_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form")(1, "div", 11)(2, "table", 12)(3, "tr")(4, "th");
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Author");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, ProfileComponent_form_5_tr_22_Template, 23, 22, "tr", 13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", ctx_r2.orders);
  }
}
var ProfileComponent = class _ProfileComponent {
  http;
  router;
  user;
  orders = [];
  apiUrl = "http://127.0.0.1:8000/api/user/profile/";
  ordersUrl = "http://127.0.0.1:8000/api/customer/orders/";
  updateOrderStatusUrl = "http://127.0.0.1:8000/api/order/update-status/";
  showForm = false;
  showOrder() {
    this.showForm = !this.showForm;
    if (this.showForm) {
      this.fetchOrders();
    }
  }
  constructor(http, router) {
    this.http = http;
    this.router = router;
  }
  ngOnInit() {
    if (typeof window === "undefined" || !window.localStorage) {
      return;
    }
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      this.router.navigate(["/login"]);
      return;
    }
    const parsedUser = JSON.parse(storedUser);
    const userId = parsedUser.id;
    if (!userId) {
      this.router.navigate(["/login"]);
      return;
    }
    this.http.post(this.apiUrl, { customer_id: userId }).subscribe((res) => {
      if (res.status === "success") {
        this.user = res.user;
      } else {
        this.user = null;
      }
    }, (error) => {
      this.user = null;
    });
  }
  fetchOrders() {
    if (!this.user || !this.user.email)
      return;
    this.http.post(this.ordersUrl, { email: this.user.email }).subscribe((res) => {
      if (res.success) {
        this.orders = res.orders;
      } else {
        this.orders = [];
      }
    }, (error) => {
      this.orders = [];
    });
  }
  updateStatus(orderId, status) {
    this.http.post(this.updateOrderStatusUrl, { order_id: orderId, status }).subscribe((res) => {
      if (res.success) {
        this.fetchOrders();
      }
    });
  }
  logout() {
    localStorage.removeItem("user");
    this.router.navigate(["/login"]);
  }
  goToTrackOrder(orderId) {
    this.router.navigate(["/track-order", orderId]);
  }
  trackOrder() {
    this.router.navigate(["/trackOrder"]);
  }
  updateProfile() {
    this.router.navigate(["/editProfile"]);
  }
  static \u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 4, consts: [["noUser", ""], ["class", "profile-container", 4, "ngIf", "ngIfElse"], [1, "button", "button-primary", 3, "click"], [4, "ngIf"], [1, "profile-container"], [1, "profile-card"], [1, "actions"], [1, "btn", "btn-warning", 3, "click"], [1, "btn", "btn-danger", 3, "click"], [1, "no-user"], ["routerLink", "/login", 1, "btn", "btn-primary"], [1, "order-table-container"], [1, "order-table"], [4, "ngFor", "ngForOf"], [1, "badge", 3, "ngClass"], ["class", "btn-action btn-success", "type", "button", 3, "click", 4, "ngIf"], ["class", "btn-action btn-cancel", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn-action", "btn-success", 3, "click"], ["type", "button", 1, "btn-action", "btn-cancel", 3, "click"]], template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275template(0, ProfileComponent_div_0_Template, 25, 4, "div", 1)(1, ProfileComponent_ng_template_1_Template, 5, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(3, "button", 2);
      \u0275\u0275listener("click", function ProfileComponent_Template_button_click_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showOrder());
      });
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, ProfileComponent_form_5_Template, 23, 1, "form", 3);
    }
    if (rf & 2) {
      const noUser_r8 = \u0275\u0275reference(2);
      \u0275\u0275property("ngIf", ctx.user)("ngIfElse", noUser_r8);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.showForm ? "Hide" : "Show", " My Orders\n");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showForm);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, TitleCasePipe, DatePipe, RouterLink], styles: ["\n\n.order-table-container[_ngcontent-%COMP%] {\n  margin: 40px auto 0 auto;\n  max-width: 1100px;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);\n  padding: 24px 32px;\n}\n.order-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 1rem;\n}\n.order-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.order-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: center;\n}\n.order-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f5f6fa;\n  color: #333;\n  font-weight: 600;\n}\n.order-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f9f9f9;\n}\n.order-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #eaf6ff;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 14px;\n  border-radius: 20px;\n  font-size: 0.95em;\n  font-weight: 600;\n  color: #fff;\n  letter-spacing: 0.5px;\n}\n.badge-confirmed[_ngcontent-%COMP%] {\n  background: #3498db;\n}\n.badge-cancelled[_ngcontent-%COMP%] {\n  background: #e74c3c;\n}\n.badge-pending[_ngcontent-%COMP%] {\n  background: #f1c40f;\n  color: #333;\n}\n.badge-tracking[_ngcontent-%COMP%] {\n  background: #8e44ad;\n}\n.badge-delivered[_ngcontent-%COMP%] {\n  background: #27ae60;\n}\n.btn-action[_ngcontent-%COMP%] {\n  padding: 6px 16px;\n  border: none;\n  border-radius: 6px;\n  margin: 0 4px;\n  font-size: 0.98em;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-track[_ngcontent-%COMP%] {\n  background: #2980b9;\n  color: #fff;\n}\n.btn-track[_ngcontent-%COMP%]:hover {\n  background: #1c5d8c;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #b93222;\n}\n.profile-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 40px;\n  background-color: none;\n  min-height: 100vh;\n  font-family: Arial, sans-serif;\n}\n.profile-card[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 30px 40px;\n  border-radius: 12px;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);\n  max-width: 400px;\n  width: 100%;\n  text-align: center;\n}\n.profile-pic[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  margin-bottom: 20px;\n  object-fit: cover;\n  border: 3px solid #3498db;\n}\n.profile-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  color: #333;\n}\n.profile-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  color: #555;\n}\n.profile-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0;\n  color: #666;\n}\n.actions[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  justify-content: space-between;\n}\n.actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: bold;\n  transition: all 0.3s ease;\n}\n.actions[_ngcontent-%COMP%]   .btn-warning[_ngcontent-%COMP%] {\n  background-color: #f39c12;\n  color: #fff;\n}\n.actions[_ngcontent-%COMP%]   .btn-warning[_ngcontent-%COMP%]:hover {\n  background-color: #e67e22;\n}\n.actions[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%] {\n  background-color: #e74c3c;\n  color: #fff;\n}\n.actions[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]:hover {\n  background-color: #c0392b;\n}\n.no-user[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px;\n  background-color: #fefefe;\n  border-radius: 12px;\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);\n}\n.no-user[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #555;\n  margin-bottom: 20px;\n}\n.no-user[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background-color: #3498db;\n  color: #fff;\n  padding: 10px 20px;\n  border-radius: 6px;\n  text-decoration: none;\n}\n.no-user[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #2980b9;\n}\nform[_ngcontent-%COMP%] {\n  font-family: Arial, sans-serif;\n  margin-left: 10%;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n  max-width: 1000px;\n  background-color: antiquewhite;\n}\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  border: 1px solid #333;\n  padding: 8px 12px;\n  text-align: left;\n}\nth[_ngcontent-%COMP%] {\n  background: #f4f4f4;\n}\n.status-pending[_ngcontent-%COMP%] {\n  color: orange;\n  font-weight: bold;\n}\n.status-completed[_ngcontent-%COMP%] {\n  color: green;\n  font-weight: bold;\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n}\n.button[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  margin: 20px 10px 20px 10%;\n  width: 80%;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: bold;\n  transition: all 0.3s ease;\n}\n/*# sourceMappingURL=profile.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src\\app\\customer\\profile.component.ts", lineNumber: 13 });
})();

// src/app/customer/service/service.component.ts
var _c02 = () => ["/customer/libarary"];
var ServiceComponent = class _ServiceComponent {
  static \u0275fac = function ServiceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceComponent, selectors: [["app-service"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 53, vars: 2, consts: [[1, "services"], [1, "service-card"], ["src", "https://cdn-icons-png.flaticon.com/512/1055/1055687.png", "alt", "Web Development"], ["routerLink", "libarary"], ["src", "https://cdn-icons-png.flaticon.com/512/1055/1055689.png", "alt", "Mobile Apps"], ["src", "https://cdn-icons-png.flaticon.com/512/1055/1055688.png", "alt", "SEO Optimization"], ["src", "https://cdn-icons-png.flaticon.com/512/1055/1055690.png", "alt", "Digital Marketing"], ["src", "write.png", "alt", "Content Writing"], ["src", "liberary.png", "alt", "Library Management"], [3, "routerLink"]], template: function ServiceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "body")(1, "header")(2, "h1");
      \u0275\u0275text(3, "Our Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "We provide high-quality solutions to help your business grow");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(6, "router-outlet");
      \u0275\u0275elementStart(7, "section", 0)(8, "div", 1);
      \u0275\u0275element(9, "img", 2);
      \u0275\u0275elementStart(10, "a", 3)(11, "h3");
      \u0275\u0275text(12, "App Development");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "p");
      \u0275\u0275text(14, "Custom, responsive websites built with modern technologies to meet your needs.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 1);
      \u0275\u0275element(16, "img", 4);
      \u0275\u0275elementStart(17, "a", 3)(18, "h3");
      \u0275\u0275text(19, "Mobile App Development");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "p");
      \u0275\u0275text(21, "Cross-platform mobile apps for Android and iOS to reach more customers.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 1);
      \u0275\u0275element(23, "img", 5);
      \u0275\u0275elementStart(24, "a", 3)(25, "h3");
      \u0275\u0275text(26, "SEO Optimisation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "p");
      \u0275\u0275text(28, "Improve your website\u2019s ranking and get more organic traffic from search engines.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 1);
      \u0275\u0275element(30, "img", 6);
      \u0275\u0275elementStart(31, "a", 3)(32, "h3");
      \u0275\u0275text(33, "Digital Marketing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "p");
      \u0275\u0275text(35, "Effective marketing strategies to boost your brand visibility and engagement.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 1);
      \u0275\u0275element(37, "img", 7);
      \u0275\u0275elementStart(38, "a", 3)(39, "h3");
      \u0275\u0275text(40, "Content Writing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "p");
      \u0275\u0275text(42, "Engaging and informative content to attract and retain your target audience.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 1);
      \u0275\u0275element(44, "img", 8);
      \u0275\u0275elementStart(45, "a", 9)(46, "h3");
      \u0275\u0275text(47, "Library Management");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "p");
      \u0275\u0275text(49, "Effective strategies to boost your library's visibility and engagement.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "footer")(51, "p");
      \u0275\u0275text(52, "\xA9 2025 Your Company Name. All Rights Reserved.");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(45);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c02));
    }
  }, dependencies: [CommonModule, RouterLink, RouterOutlet], styles: ["\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Arial, sans-serif;\n}\nbody[_ngcontent-%COMP%] {\n  background: #f9f9f9;\n  color: #333;\n  line-height: 1.6;\n}\nheader[_ngcontent-%COMP%] {\n  background: #0078d7;\n  color: #fff;\n  padding: 1rem 2rem;\n  text-align: center;\n}\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.services[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 2rem auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n  padding: 0 1rem;\n}\n.service-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 10px;\n  padding: 1.5rem;\n  text-align: center;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.service-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);\n}\n.service-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  margin-bottom: 1rem;\n}\n.service-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin-bottom: 0.5rem;\n  color: #0078d7;\n}\n.service-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #666;\n}\nfooter[_ngcontent-%COMP%] {\n  background: #0078d7;\n  color: white;\n  padding: 1rem;\n  text-align: center;\n  margin-top: 2rem;\n}\n/*# sourceMappingURL=service.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceComponent, { className: "ServiceComponent", filePath: "src\\app\\customer\\service\\service.component.ts", lineNumber: 12 });
})();

// src/app/customer/about/about.component.ts
var AboutComponent = class _AboutComponent {
  static \u0275fac = function AboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 102, vars: 0, consts: [[1, "about-section"], [1, "about-image"], ["src", "Image\\my-pic.jpg", "alt", "My Photo"], [1, "about-text"], ["href", "http://abhishek2145.wordpress.com", 2, "color", "white"], [1, "section"], ["href", "http://abhishek2145.wordpress.com"]], template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "body")(1, "header")(2, "h1");
      \u0275\u0275text(3, "About Me");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "section", 0)(5, "div", 1);
      \u0275\u0275element(6, "img", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 3)(8, "h2");
      \u0275\u0275text(9, "Hi, I'm Abhishek Thakur");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p");
      \u0275\u0275text(11, "I\u2019m a passionate Full Stack Developer and Computer Science student who loves building modern, user-friendly applications. I specialize in creating responsive websites and mobile apps that deliver great user experiences.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p");
      \u0275\u0275text(13, "When I\u2019m not coding, I enjoy learning new technologies, solving logical problems, and exploring ways to improve my skills. My goal is to contribute to innovative projects that make a real difference.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(14, "hr");
      \u0275\u0275elementStart(15, "header")(16, "h1");
      \u0275\u0275text(17, "Abhishek Thakur");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p");
      \u0275\u0275text(19, "Siwan, Bihar | +91 6202455773 | AT8603583@gmail.com | ");
      \u0275\u0275elementStart(20, "a", 4);
      \u0275\u0275text(21, "Portfolio");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "section", 0)(23, "div", 3)(24, "h2");
      \u0275\u0275text(25, "Professional Summary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p");
      \u0275\u0275text(27, "Motivated and detail-oriented graduate with a Bachelor of Arts from Deendayal Upadhyaya Gorakhpur University and a Diploma in Computer Science Engineering. Strong in analytical thinking and problem solving, with hands-on training in Data Structures & Algorithms using C Programming, as well as web development technologies including Angular, TypeScript, Bootstrap, and WordPress. Eager to contribute skills to a growth-oriented organization.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "section", 5)(29, "h3");
      \u0275\u0275text(30, "Skills");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "ul")(32, "li");
      \u0275\u0275text(33, "Programming: C (DSA), Python, Java");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "li");
      \u0275\u0275text(35, "JavaScript, TypeScript");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "li");
      \u0275\u0275text(37, "Web Development: HTML, CSS, Bootstrap, Angular, WordPress");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "li");
      \u0275\u0275text(39, "Database: MySQL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "li");
      \u0275\u0275text(41, "Visualization & Tools: Power BI, MS Office, Advanced Excel, AutoCAD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "li");
      \u0275\u0275text(43, "IDEs: VS Code, Notepad++");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "li");
      \u0275\u0275text(45, "Data Analysis & Reporting");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "li");
      \u0275\u0275text(47, "Frontend Frameworks: Angular, Bootstrap");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "section", 5)(49, "h3");
      \u0275\u0275text(50, "Experience");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "ul")(52, "li");
      \u0275\u0275text(53, "Web Development & WordPress Training \u2013 Info-Tech Company, Hyderabad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "li");
      \u0275\u0275text(55, "Infosys Springboard 6.0 Training & Internship \u2013 Angular, TypeScript, Bootstrap, Data Analysis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "li");
      \u0275\u0275text(57, "DSA Practice \u2013 Solved problems in C (Linked lists, stacks, queues, trees, sorting)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "li");
      \u0275\u0275text(59, "WordPress Project \u2013 Created personal portfolio website (");
      \u0275\u0275elementStart(60, "a", 6);
      \u0275\u0275text(61, "Visit");
      \u0275\u0275elementEnd();
      \u0275\u0275text(62, ")");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(63, "section", 5)(64, "h3");
      \u0275\u0275text(65, "Qualification");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "ul")(67, "li");
      \u0275\u0275text(68, "Bachelor of Arts \u2013 Deendayal Upadhyaya Gorakhpur University (2019\u20132023)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "li");
      \u0275\u0275text(70, "Diploma in Computer Science Engineering \u2013 Government Polytechnic, Siwan (Ongoing)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(71, "section", 5)(72, "h3");
      \u0275\u0275text(73, "Certifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "ul")(75, "li");
      \u0275\u0275text(76, "Diploma in Computer Science Engineering \u2013 State Technical Board, Bihar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "li");
      \u0275\u0275text(78, "Advanced Diploma in Computer Applications (MS-Office, Tally)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "li");
      \u0275\u0275text(80, "Cisco Certification 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "li");
      \u0275\u0275text(82, "Kusal Yuva Program 2023");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(83, "section", 5)(84, "h3");
      \u0275\u0275text(85, "Languages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "ul")(87, "li");
      \u0275\u0275text(88, "English");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "li");
      \u0275\u0275text(90, "Hindi");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(91, "section", 5)(92, "h3");
      \u0275\u0275text(93, "Hobbies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "ul")(95, "li");
      \u0275\u0275text(96, "Engaging in strategy-based games to enhance problem-solving skills");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "li");
      \u0275\u0275text(98, "Writing and appreciating diverse forms of poetry");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(99, "footer")(100, "p");
      \u0275\u0275text(101, "\xA9 2025 Abhishek Thakur. All Rights Reserved.");
      \u0275\u0275elementEnd()()();
    }
  }, styles: ['\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Arial, sans-serif;\n}\nbody[_ngcontent-%COMP%] {\n  background: #f9f9f9;\n  color: #333;\n  line-height: 1.6;\n}\nheader[_ngcontent-%COMP%] {\n  background: #0078d7;\n  color: #fff;\n  padding: 1rem;\n  text-align: center;\n}\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.about-section[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 2rem auto;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 2rem;\n  padding: 1rem;\n}\n.about-image[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n}\n.about-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 250px;\n  object-fit: cover;\n  border-radius: 50%;\n  border: 5px solid #0078d7;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n.about-text[_ngcontent-%COMP%] {\n  flex: 2;\n}\n.about-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #0078d7;\n  margin-bottom: 1rem;\n}\n.about-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  font-size: 1rem;\n  color: #555;\n}\nfooter[_ngcontent-%COMP%] {\n  background: #0078d7;\n  color: white;\n  text-align: center;\n  padding: 1rem;\n  margin-top: 2rem;\n}\n@media (max-width: 768px) {\n  .about-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Arial, sans-serif;\n}\nbody[_ngcontent-%COMP%] {\n  background: #f9f9f9;\n  color: #333;\n  line-height: 1.6;\n}\nheader[_ngcontent-%COMP%] {\n  background: #b21f1f;\n  color: #fff;\n  text-align: center;\n  padding: 1rem;\n}\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 0.3rem;\n}\nheader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.about-section[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 2rem auto;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2rem;\n  padding: 1rem;\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n.about-image[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n}\n.about-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 250px;\n  object-fit: cover;\n  border-radius: 50%;\n  border: 5px solid #b21f1f;\n}\n.about-text[_ngcontent-%COMP%] {\n  flex: 2;\n}\n.about-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #b21f1f;\n  margin-bottom: 1rem;\n}\n.section[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 1rem auto;\n  background: #fff;\n  padding: 1.5rem;\n  border-radius: 10px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);\n}\nh3[_ngcontent-%COMP%] {\n  color: #b21f1f;\n  margin-bottom: 0.8rem;\n}\nul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\2022  ";\n  color: #b21f1f;\n  font-weight: bold;\n}\nfooter[_ngcontent-%COMP%] {\n  background: #b21f1f;\n  color: white;\n  text-align: center;\n  padding: 1rem;\n  margin-top: 2rem;\n}\n@media (max-width: 768px) {\n  .about-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=about.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src\\app\\customer\\about\\about.component.ts", lineNumber: 10 });
})();

// src/app/customer/home/home.component.ts
var _c03 = () => ["/customer/home/educational"];
var _c1 = () => ["/customer/home/fiction"];
var _c2 = () => ["/customer/home/non-fiction"];
var _c3 = () => ["/customer/home/religious"];
var _c4 = () => ["/customer/home/comptative"];
var _c5 = () => ["/customer/home/children"];
var _c6 = () => ["/customer/home/hobbies"];
var HomeComponent = class _HomeComponent {
  currentDate = /* @__PURE__ */ new Date();
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 58, vars: 15, consts: [[1, "body"], [1, "hero-section"], [1, "hero-content"], ["src", "Image\\f0150014-800px-wm.jpg", "alt", "Futuristic Interface"], [1, "text-content"], [2, "color", "rgb(144, 5, 5)"], [1, "features"], [1, "card"], [3, "routerLink"], [1, "card", 2, "margin-left", "360px", "margin-right", "-370px"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "main", 1);
      \u0275\u0275element(2, "router-outlet");
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275element(4, "img", 3);
      \u0275\u0275elementStart(5, "div", 4)(6, "h1");
      \u0275\u0275text(7, "Welcome to Our Book Depot");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9, " A Book Depot is more than just a place to buy books \u2013 it is a hub of knowledge and learning. Whether you need school textbooks, competitive exam guides, or your favorite novels, a book depot serves every reader\u2019s need. Modern book depots are evolving with interactive designs and online platforms, making the experience clean, elegant, and easy for everyone. ");
      \u0275\u0275element(10, "br");
      \u0275\u0275elementStart(11, "h5", 5);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "button");
      \u0275\u0275text(14, "Learn More");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "section", 6)(16, "div", 7)(17, "a", 8)(18, "h3");
      \u0275\u0275text(19, "Academic/Educational Books ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "p");
      \u0275\u0275text(21, "These books are used for formal learning in schools, colleges, and universities. They include textbooks, reference materials, and exam guides.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 7)(23, "a", 8)(24, "h3");
      \u0275\u0275text(25, "Literature & fiction Books");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "p");
      \u0275\u0275text(27, "Fictional books like novels, short stories, and poetry entertain and inspire imagination. They reflect emotions, culture, and human experiences");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 7)(29, "a", 8)(30, "h3");
      \u0275\u0275text(31, "Non-Fiction Books");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "p");
      \u0275\u0275text(33, "These books provide real-life knowledge on topics like history, politics, and self-development. They are based on facts, research, and true stories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 7)(35, "a", 8)(36, "h3");
      \u0275\u0275text(37, "Religious & Spiritual Books");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "p");
      \u0275\u0275text(39, "They include holy scriptures and texts on philosophy and meditation. Such books aim to guide moral, spiritual, and inner growth");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 7)(41, "a", 8)(42, "h3");
      \u0275\u0275text(43, "Compatative Exam Books");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "p");
      \u0275\u0275text(45, "Specially designed for exam preparation like UPSC, SSC, and banking. They provide practice questions, strategies, and subject-wise notes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 7)(47, "a", 8)(48, "h3");
      \u0275\u0275text(49, "Children's Books");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "p");
      \u0275\u0275text(51, "Colorful and engaging books with stories, pictures, and activities. They help kids learn morals, language, and creativity");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 9)(53, "a", 8)(54, "h3");
      \u0275\u0275text(55, "Hobbies and skill Development Books");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "p");
      \u0275\u0275text(57, "Books on cooking, art, music, gardening, and other interests. They help readers explore and develop new skills");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(ctx.currentDate);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c03));
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c1));
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c2));
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(11, _c3));
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c4));
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(13, _c5));
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(14, _c6));
    }
  }, dependencies: [RouterLink, RouterOutlet, CommonModule], styles: ['\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.body[_ngcontent-%COMP%] {\n  font-family: "Segoe UI", sans-serif;\n  background:\n    linear-gradient(\n      135deg,\n      #759db3,\n      #3b3a13);\n  color: white;\n  line-height: 1.6;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.hero-section[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 40px auto;\n  padding: 30px;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 20px;\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n}\n.hero-content[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 40px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.hero-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 320px;\n  border-radius: 12px;\n  object-fit: cover;\n}\n.text-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 15px;\n}\n.text-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin-bottom: 20px;\n}\n.text-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border: none;\n  padding: 12px 24px;\n  color: white;\n  font-size: 1rem;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.text-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.features[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  max-width: 1100px;\n  margin: 40px auto;\n  padding: 20px;\n}\n.card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  padding: 50px;\n  border-radius: 15px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  transition: transform 0.3s, ;\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  background-image: linear-gradient(rgb(70, 40, 145), rgb(139, 28, 0));\n}\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 1.2rem;\n  color: cornsilk, rgb(74, 4, 4);\n  text-decoration: none;\n}\n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #d1c1c1;\n}\nbutton[_ngcontent-%COMP%], \n.card[_ngcontent-%COMP%], \n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: all 0.3s ease-in-out;\n}\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.gradient-text[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      to right,\n      #ff6ec4,\n      #7873f5);\n}\nbutton.gradient-button[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff6ec4,\n      #7873f5);\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-size: 1rem;\n  cursor: pointer;\n}\n.card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.glow-text[_ngcontent-%COMP%] {\n  color: #fff;\n  text-shadow: 0 0 8px #00ffe7, 0 0 16px #00ffe7;\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.fade-in-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp 0.8s ease-out;\n}\n.card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.07);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 15px;\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px) scale(1.02);\n  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.35);\n}\n/*# sourceMappingURL=home.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\customer\\home\\home.component.ts", lineNumber: 12 });
})();

// node_modules/@angular/forms/fesm2022/forms.mjs
var BaseControlValueAccessor = class _BaseControlValueAccessor {
  constructor(_renderer, _elementRef) {
    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this.onChange = (_) => {
    };
    this.onTouched = () => {
    };
  }
  /**
   * Helper method that sets a property on a target element using the current Renderer
   * implementation.
   * @nodoc
   */
  setProperty(key, value) {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }
  /**
   * Registers a function called when the control is touched.
   * @nodoc
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = fn;
  }
  /**
   * Sets the "disabled" property on the range input element.
   * @nodoc
   */
  setDisabledState(isDisabled) {
    this.setProperty("disabled", isDisabled);
  }
  static {
    this.\u0275fac = function BaseControlValueAccessor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BaseControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _BaseControlValueAccessor
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseControlValueAccessor, [{
    type: Directive
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], null);
})();
var BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275BuiltInControlValueAccessor_BaseFactory;
      return function BuiltInControlValueAccessor_Factory(__ngFactoryType__) {
        return (\u0275BuiltInControlValueAccessor_BaseFactory || (\u0275BuiltInControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_BuiltInControlValueAccessor)))(__ngFactoryType__ || _BuiltInControlValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _BuiltInControlValueAccessor,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuiltInControlValueAccessor, [{
    type: Directive
  }], null, null);
})();
var NG_VALUE_ACCESSOR = new InjectionToken(ngDevMode ? "NgValueAccessor" : "");
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxControlValueAccessor),
  multi: true
};
var CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "checked" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("checked", value);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275CheckboxControlValueAccessor_BaseFactory;
      return function CheckboxControlValueAccessor_Factory(__ngFactoryType__) {
        return (\u0275CheckboxControlValueAccessor_BaseFactory || (\u0275CheckboxControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxControlValueAccessor)))(__ngFactoryType__ || _CheckboxControlValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CheckboxControlValueAccessor,
      selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
      hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.checked);
          })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      features: [\u0275\u0275ProvidersFeature([CHECKBOX_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
      host: {
        "(change)": "onChange($event.target.checked)",
        "(blur)": "onTouched()"
      },
      providers: [CHECKBOX_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DefaultValueAccessor),
  multi: true
};
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
var COMPOSITION_BUFFER_MODE = new InjectionToken(ngDevMode ? "CompositionEventMode" : "");
var DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
  constructor(renderer, elementRef, _compositionMode) {
    super(renderer, elementRef);
    this._compositionMode = _compositionMode;
    this._composing = false;
    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /** @internal */
  _handleInput(value) {
    if (!this._compositionMode || this._compositionMode && !this._composing) {
      this.onChange(value);
    }
  }
  /** @internal */
  _compositionStart() {
    this._composing = true;
  }
  /** @internal */
  _compositionEnd(value) {
    this._composing = false;
    this._compositionMode && this.onChange(value);
  }
  static {
    this.\u0275fac = function DefaultValueAccessor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DefaultValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(COMPOSITION_BUFFER_MODE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _DefaultValueAccessor,
      selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
      hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
            return ctx._handleInput($event.target.value);
          })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
            return ctx._compositionStart();
          })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
            return ctx._compositionEnd($event.target.value);
          });
        }
      },
      features: [\u0275\u0275ProvidersFeature([DEFAULT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
      // TODO: vsavkin replace the above selector with the one below it once
      // https://github.com/angular/angular/issues/3011 is implemented
      // selector: '[ngModel],[formControl],[formControlName]',
      host: {
        "(input)": "$any(this)._handleInput($event.target.value)",
        "(blur)": "onTouched()",
        "(compositionstart)": "$any(this)._compositionStart()",
        "(compositionend)": "$any(this)._compositionEnd($event.target.value)"
      },
      providers: [DEFAULT_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COMPOSITION_BUFFER_MODE]
    }]
  }], null);
})();
function isEmptyInputValue(value) {
  return value == null || (typeof value === "string" || Array.isArray(value)) && value.length === 0;
}
function hasValidLength(value) {
  return value != null && typeof value.length === "number";
}
var NG_VALIDATORS = new InjectionToken(ngDevMode ? "NgValidators" : "");
var NG_ASYNC_VALIDATORS = new InjectionToken(ngDevMode ? "NgAsyncValidators" : "");
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var Validators = class {
  /**
   * @description
   * Validator that requires the control's value to be greater than or equal to the provided number.
   *
   * @usageNotes
   *
   * ### Validate against a minimum of 3
   *
   * ```typescript
   * const control = new FormControl(2, Validators.min(3));
   *
   * console.log(control.errors); // {min: {min: 3, actual: 2}}
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `min` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static min(min) {
    return minValidator(min);
  }
  /**
   * @description
   * Validator that requires the control's value to be less than or equal to the provided number.
   *
   * @usageNotes
   *
   * ### Validate against a maximum of 15
   *
   * ```typescript
   * const control = new FormControl(16, Validators.max(15));
   *
   * console.log(control.errors); // {max: {max: 15, actual: 16}}
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `max` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static max(max) {
    return maxValidator(max);
  }
  /**
   * @description
   * Validator that requires the control have a non-empty value.
   *
   * @usageNotes
   *
   * ### Validate that the field is non-empty
   *
   * ```typescript
   * const control = new FormControl('', Validators.required);
   *
   * console.log(control.errors); // {required: true}
   * ```
   *
   * @returns An error map with the `required` property
   * if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static required(control) {
    return requiredValidator(control);
  }
  /**
   * @description
   * Validator that requires the control's value be true. This validator is commonly
   * used for required checkboxes.
   *
   * @usageNotes
   *
   * ### Validate that the field value is true
   *
   * ```typescript
   * const control = new FormControl('some value', Validators.requiredTrue);
   *
   * console.log(control.errors); // {required: true}
   * ```
   *
   * @returns An error map that contains the `required` property
   * set to `true` if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static requiredTrue(control) {
    return requiredTrueValidator(control);
  }
  /**
   * @description
   * Validator that requires the control's value pass an email validation test.
   *
   * Tests the value using a [regular
   * expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
   * pattern suitable for common use cases. The pattern is based on the definition of a valid email
   * address in the [WHATWG HTML
   * specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
   * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
   * lengths of different parts of the address).
   *
   * The differences from the WHATWG version include:
   * - Disallow `local-part` (the part before the `@` symbol) to begin or end with a period (`.`).
   * - Disallow `local-part` to be longer than 64 characters.
   * - Disallow the whole address to be longer than 254 characters.
   *
   * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
   * validate the value against a different pattern.
   *
   * @usageNotes
   *
   * ### Validate that the field matches a valid email pattern
   *
   * ```typescript
   * const control = new FormControl('bad@', Validators.email);
   *
   * console.log(control.errors); // {email: true}
   * ```
   *
   * @returns An error map with the `email` property
   * if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static email(control) {
    return emailValidator(control);
  }
  /**
   * @description
   * Validator that requires the length of the control's value to be greater than or equal
   * to the provided minimum length. This validator is also provided by default if you use the
   * the HTML5 `minlength` attribute. Note that the `minLength` validator is intended to be used
   * only for types that have a numeric `length` property, such as strings or arrays. The
   * `minLength` validator logic is also not invoked for values when their `length` property is 0
   * (for example in case of an empty string or an empty array), to support optional controls. You
   * can use the standard `required` validator if empty values should not be considered valid.
   *
   * @usageNotes
   *
   * ### Validate that the field has a minimum of 3 characters
   *
   * ```typescript
   * const control = new FormControl('ng', Validators.minLength(3));
   *
   * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
   * ```
   *
   * ```html
   * <input minlength="5">
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `minlength` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static minLength(minLength) {
    return minLengthValidator(minLength);
  }
  /**
   * @description
   * Validator that requires the length of the control's value to be less than or equal
   * to the provided maximum length. This validator is also provided by default if you use the
   * the HTML5 `maxlength` attribute. Note that the `maxLength` validator is intended to be used
   * only for types that have a numeric `length` property, such as strings or arrays.
   *
   * @usageNotes
   *
   * ### Validate that the field has maximum of 5 characters
   *
   * ```typescript
   * const control = new FormControl('Angular', Validators.maxLength(5));
   *
   * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
   * ```
   *
   * ```html
   * <input maxlength="5">
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `maxlength` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static maxLength(maxLength) {
    return maxLengthValidator(maxLength);
  }
  /**
   * @description
   * Validator that requires the control's value to match a regex pattern. This validator is also
   * provided by default if you use the HTML5 `pattern` attribute.
   *
   * @usageNotes
   *
   * ### Validate that the field only contains letters or spaces
   *
   * ```typescript
   * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
   *
   * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
   * ```
   *
   * ```html
   * <input pattern="[a-zA-Z ]*">
   * ```
   *
   * ### Pattern matching with the global or sticky flag
   *
   * `RegExp` objects created with the `g` or `y` flags that are passed into `Validators.pattern`
   * can produce different results on the same input when validations are run consecutively. This is
   * due to how the behavior of `RegExp.prototype.test` is
   * specified in [ECMA-262](https://tc39.es/ecma262/#sec-regexpbuiltinexec)
   * (`RegExp` preserves the index of the last match when the global or sticky flag is used).
   * Due to this behavior, it is recommended that when using
   * `Validators.pattern` you **do not** pass in a `RegExp` object with either the global or sticky
   * flag enabled.
   *
   * ```typescript
   * // Not recommended (since the `g` flag is used)
   * const controlOne = new FormControl('1', Validators.pattern(/foo/g));
   *
   * // Good
   * const controlTwo = new FormControl('1', Validators.pattern(/foo/));
   * ```
   *
   * @param pattern A regular expression to be used as is to test the values, or a string.
   * If a string is passed, the `^` character is prepended and the `$` character is
   * appended to the provided string (if not already present), and the resulting regular
   * expression is used to test the values.
   *
   * @returns A validator function that returns an error map with the
   * `pattern` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static pattern(pattern) {
    return patternValidator(pattern);
  }
  /**
   * @description
   * Validator that performs no operation.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static nullValidator(control) {
    return nullValidator(control);
  }
  static compose(validators) {
    return compose(validators);
  }
  /**
   * @description
   * Compose multiple async validators into a single function that returns the union
   * of the individual error objects for the provided control.
   *
   * @returns A validator function that returns an error map with the
   * merged error objects of the async validators if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static composeAsync(validators) {
    return composeAsync(validators);
  }
};
function minValidator(min) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? {
      "min": {
        "min": min,
        "actual": control.value
      }
    } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? {
      "max": {
        "max": max,
        "actual": control.value
      }
    } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? {
    "required": true
  } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : {
    "required": true
  };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : {
    "email": true
  };
}
function minLengthValidator(minLength) {
  return (control) => {
    if (isEmptyInputValue(control.value) || !hasValidLength(control.value)) {
      return null;
    }
    return control.value.length < minLength ? {
      "minlength": {
        "requiredLength": minLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    return hasValidLength(control.value) && control.value.length > maxLength ? {
      "maxlength": {
        "requiredLength": maxLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function patternValidator(pattern) {
  if (!pattern) return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^") regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$") regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : {
      "pattern": {
        "requiredPattern": regexStr,
        "actualValue": value
      }
    };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
  });
}
function compose(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null) return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators) return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current, v)) {
      current.push(v);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
var AbstractControlDirective = class {
  constructor() {
    this._rawValidators = [];
    this._rawAsyncValidators = [];
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Reports the value of the control if it is present, otherwise null.
   */
  get value() {
    return this.control ? this.control.value : null;
  }
  /**
   * @description
   * Reports whether the control is valid. A control is considered valid if no
   * validation errors exist with the current value.
   * If the control is not present, null is returned.
   */
  get valid() {
    return this.control ? this.control.valid : null;
  }
  /**
   * @description
   * Reports whether the control is invalid, meaning that an error exists in the input value.
   * If the control is not present, null is returned.
   */
  get invalid() {
    return this.control ? this.control.invalid : null;
  }
  /**
   * @description
   * Reports whether a control is pending, meaning that async validation is occurring and
   * errors are not yet available for the input value. If the control is not present, null is
   * returned.
   */
  get pending() {
    return this.control ? this.control.pending : null;
  }
  /**
   * @description
   * Reports whether the control is disabled, meaning that the control is disabled
   * in the UI and is exempt from validation checks and excluded from aggregate
   * values of ancestor controls. If the control is not present, null is returned.
   */
  get disabled() {
    return this.control ? this.control.disabled : null;
  }
  /**
   * @description
   * Reports whether the control is enabled, meaning that the control is included in ancestor
   * calculations of validity or value. If the control is not present, null is returned.
   */
  get enabled() {
    return this.control ? this.control.enabled : null;
  }
  /**
   * @description
   * Reports the control's validation errors. If the control is not present, null is returned.
   */
  get errors() {
    return this.control ? this.control.errors : null;
  }
  /**
   * @description
   * Reports whether the control is pristine, meaning that the user has not yet changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get pristine() {
    return this.control ? this.control.pristine : null;
  }
  /**
   * @description
   * Reports whether the control is dirty, meaning that the user has changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get dirty() {
    return this.control ? this.control.dirty : null;
  }
  /**
   * @description
   * Reports whether the control is touched, meaning that the user has triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get touched() {
    return this.control ? this.control.touched : null;
  }
  /**
   * @description
   * Reports the validation status of the control. Possible values include:
   * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
   * If the control is not present, null is returned.
   */
  get status() {
    return this.control ? this.control.status : null;
  }
  /**
   * @description
   * Reports whether the control is untouched, meaning that the user has not yet triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get untouched() {
    return this.control ? this.control.untouched : null;
  }
  /**
   * @description
   * Returns a multicasting observable that emits a validation status whenever it is
   * calculated for the control. If the control is not present, null is returned.
   */
  get statusChanges() {
    return this.control ? this.control.statusChanges : null;
  }
  /**
   * @description
   * Returns a multicasting observable of value changes for the control that emits every time the
   * value of the control changes in the UI or programmatically.
   * If the control is not present, null is returned.
   */
  get valueChanges() {
    return this.control ? this.control.valueChanges : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return null;
  }
  /**
   * Sets synchronous validators for this directive.
   * @internal
   */
  _setValidators(validators) {
    this._rawValidators = validators || [];
    this._composedValidatorFn = composeValidators(this._rawValidators);
  }
  /**
   * Sets asynchronous validators for this directive.
   * @internal
   */
  _setAsyncValidators(validators) {
    this._rawAsyncValidators = validators || [];
    this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
  }
  /**
   * @description
   * Synchronous validator function composed of all the synchronous validators registered with this
   * directive.
   */
  get validator() {
    return this._composedValidatorFn || null;
  }
  /**
   * @description
   * Asynchronous validator function composed of all the asynchronous validators registered with
   * this directive.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn || null;
  }
  /**
   * Internal function to register callbacks that should be invoked
   * when directive instance is being destroyed.
   * @internal
   */
  _registerOnDestroy(fn) {
    this._onDestroyCallbacks.push(fn);
  }
  /**
   * Internal function to invoke all registered "on destroy" callbacks.
   * Note: calling this function also clears the list of callbacks.
   * @internal
   */
  _invokeOnDestroyCallbacks() {
    this._onDestroyCallbacks.forEach((fn) => fn());
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Resets the control with the provided value if the control is present.
   */
  reset(value = void 0) {
    if (this.control) this.control.reset(value);
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return this.control ? this.control.hasError(errorCode, path) : false;
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    return this.control ? this.control.getError(errorCode, path) : null;
  }
};
var ControlContainer = class extends AbstractControlDirective {
  /**
   * @description
   * The top-level form directive for the control.
   */
  get formDirective() {
    return null;
  }
  /**
   * @description
   * The path to this group.
   */
  get path() {
    return null;
  }
};
var NgControl = class extends AbstractControlDirective {
  constructor() {
    super(...arguments);
    this._parent = null;
    this.name = null;
    this.valueAccessor = null;
  }
};
var AbstractControlStatus = class {
  constructor(cd) {
    this._cd = cd;
  }
  get isTouched() {
    this._cd?.control?._touched?.();
    return !!this._cd?.control?.touched;
  }
  get isUntouched() {
    return !!this._cd?.control?.untouched;
  }
  get isPristine() {
    this._cd?.control?._pristine?.();
    return !!this._cd?.control?.pristine;
  }
  get isDirty() {
    return !!this._cd?.control?.dirty;
  }
  get isValid() {
    this._cd?.control?._status?.();
    return !!this._cd?.control?.valid;
  }
  get isInvalid() {
    return !!this._cd?.control?.invalid;
  }
  get isPending() {
    return !!this._cd?.control?.pending;
  }
  get isSubmitted() {
    this._cd?._submitted?.();
    return !!this._cd?.submitted;
  }
};
var ngControlStatusHost = {
  "[class.ng-untouched]": "isUntouched",
  "[class.ng-touched]": "isTouched",
  "[class.ng-pristine]": "isPristine",
  "[class.ng-dirty]": "isDirty",
  "[class.ng-valid]": "isValid",
  "[class.ng-invalid]": "isInvalid",
  "[class.ng-pending]": "isPending"
};
var ngGroupStatusHost = __spreadProps(__spreadValues({}, ngControlStatusHost), {
  "[class.ng-submitted]": "isSubmitted"
});
var NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static {
    this.\u0275fac = function NgControlStatus_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgControlStatus)(\u0275\u0275directiveInject(NgControl, 2));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgControlStatus,
      selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
      hostVars: 14,
      hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending);
        }
      },
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatus, [{
    type: Directive,
    args: [{
      selector: "[formControlName],[ngModel],[formControl]",
      host: ngControlStatusHost
    }]
  }], () => [{
    type: NgControl,
    decorators: [{
      type: Self
    }]
  }], null);
})();
var NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static {
    this.\u0275fac = function NgControlStatusGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgControlStatusGroup)(\u0275\u0275directiveInject(ControlContainer, 10));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgControlStatusGroup,
      selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
      hostVars: 16,
      hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending)("ng-submitted", ctx.isSubmitted);
        }
      },
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatusGroup, [{
    type: Directive,
    args: [{
      selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]",
      host: ngGroupStatusHost
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }], null);
})();
var formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
var formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
var formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
var ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
var ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
function controlParentException(nameOrIndex) {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup directive. You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      ${describeFormControl(nameOrIndex)}

    Example:

    ${formControlNameExample}`);
}
function describeFormControl(nameOrIndex) {
  if (nameOrIndex == null || nameOrIndex === "") {
    return "";
  }
  const valueType = typeof nameOrIndex === "string" ? "name" : "index";
  return `Affected Form Control ${valueType}: "${nameOrIndex}"`;
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
var disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
var asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
function ngModelWarning(directiveName) {
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://angular.io/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}#use-with-ngmodel
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
var VALID = "VALID";
var INVALID = "INVALID";
var PENDING = "PENDING";
var DISABLED = "DISABLED";
var ControlEvent = class {
};
var ValueChangeEvent = class extends ControlEvent {
  constructor(value, source) {
    super();
    this.value = value;
    this.source = source;
  }
};
var PristineChangeEvent = class extends ControlEvent {
  constructor(pristine, source) {
    super();
    this.pristine = pristine;
    this.source = source;
  }
};
var TouchedChangeEvent = class extends ControlEvent {
  constructor(touched, source) {
    super();
    this.touched = touched;
    this.source = source;
  }
};
var StatusChangeEvent = class extends ControlEvent {
  constructor(status, source) {
    super();
    this.status = status;
    this.source = source;
  }
};
var FormSubmittedEvent = class extends ControlEvent {
  constructor(source) {
    super();
    this.source = source;
  }
};
var FormResetEvent = class extends ControlEvent {
  constructor(source) {
    super();
    this.source = source;
  }
};
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!controls[key]) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
var AbstractControl = class {
  /**
   * Initialize the AbstractControl instance.
   *
   * @param validators The function or array of functions that is used to determine the validity of
   *     this control synchronously.
   * @param asyncValidators The function or array of functions that is used to determine validity of
   *     this control asynchronously.
   */
  constructor(validators, asyncValidators) {
    this._pendingDirty = false;
    this._hasOwnPendingAsyncValidator = null;
    this._pendingTouched = false;
    this._onCollectionChange = () => {
    };
    this._parent = null;
    this._status = computed(() => this.statusReactive());
    this.statusReactive = signal(void 0);
    this._pristine = computed(() => this.pristineReactive());
    this.pristineReactive = signal(true);
    this._touched = computed(() => this.touchedReactive());
    this.touchedReactive = signal(false);
    this._events = new Subject();
    this.events = this._events.asObservable();
    this._onDisabledChange = [];
    this._assignValidators(validators);
    this._assignAsyncValidators(asyncValidators);
  }
  /**
   * Returns the function that is used to determine the validity of this control synchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(validatorFn) {
    this._rawValidators = this._composedValidatorFn = validatorFn;
  }
  /**
   * Returns the function that is used to determine the validity of this control asynchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(asyncValidatorFn) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
  }
  /**
   * The parent control.
   */
  get parent() {
    return this._parent;
  }
  /**
   * The validation status of the control.
   *
   * @see {@link FormControlStatus}
   *
   * These status values are mutually exclusive, so a control cannot be
   * both valid AND invalid or invalid AND disabled.
   */
  get status() {
    return untracked(this.statusReactive);
  }
  set status(v) {
    untracked(() => this.statusReactive.set(v));
  }
  /**
   * A control is `valid` when its `status` is `VALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control has passed all of its validation tests,
   * false otherwise.
   */
  get valid() {
    return this.status === VALID;
  }
  /**
   * A control is `invalid` when its `status` is `INVALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control has failed one or more of its validation checks,
   * false otherwise.
   */
  get invalid() {
    return this.status === INVALID;
  }
  /**
   * A control is `pending` when its `status` is `PENDING`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control is in the process of conducting a validation check,
   * false otherwise.
   */
  get pending() {
    return this.status == PENDING;
  }
  /**
   * A control is `disabled` when its `status` is `DISABLED`.
   *
   * Disabled controls are exempt from validation checks and
   * are not included in the aggregate value of their ancestor
   * controls.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control is disabled, false otherwise.
   */
  get disabled() {
    return this.status === DISABLED;
  }
  /**
   * A control is `enabled` as long as its `status` is not `DISABLED`.
   *
   * @returns True if the control has any status other than 'DISABLED',
   * false if the status is 'DISABLED'.
   *
   * @see {@link AbstractControl.status}
   *
   */
  get enabled() {
    return this.status !== DISABLED;
  }
  /**
   * A control is `pristine` if the user has not yet changed
   * the value in the UI.
   *
   * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get pristine() {
    return untracked(this.pristineReactive);
  }
  set pristine(v) {
    untracked(() => this.pristineReactive.set(v));
  }
  /**
   * A control is `dirty` if the user has changed the value
   * in the UI.
   *
   * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get dirty() {
    return !this.pristine;
  }
  /**
   * True if the control is marked as `touched`.
   *
   * A control is marked `touched` once the user has triggered
   * a `blur` event on it.
   */
  get touched() {
    return untracked(this.touchedReactive);
  }
  set touched(v) {
    untracked(() => this.touchedReactive.set(v));
  }
  /**
   * True if the control has not been marked as touched
   *
   * A control is `untouched` if the user has not yet triggered
   * a `blur` event on it.
   */
  get untouched() {
    return !this.touched;
  }
  /**
   * Reports the update strategy of the `AbstractControl` (meaning
   * the event on which the control updates itself).
   * Possible values: `'change'` | `'blur'` | `'submit'`
   * Default value: `'change'`
   */
  get updateOn() {
    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
  }
  /**
   * Sets the synchronous validators that are active on this control.  Calling
   * this overwrites any existing synchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addValidators()` method instead.
   */
  setValidators(validators) {
    this._assignValidators(validators);
  }
  /**
   * Sets the asynchronous validators that are active on this control. Calling this
   * overwrites any existing asynchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addAsyncValidators()` method instead.
   */
  setAsyncValidators(validators) {
    this._assignAsyncValidators(validators);
  }
  /**
   * Add a synchronous validator or validators to this control, without affecting other validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect. If duplicate validator functions
   * are present in the `validators` array, only the first instance would be added to a form
   * control.
   *
   * @param validators The new validator function or functions to add to this control.
   */
  addValidators(validators) {
    this.setValidators(addValidators(validators, this._rawValidators));
  }
  /**
   * Add an asynchronous validator or validators to this control, without affecting other
   * validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect.
   *
   * @param validators The new asynchronous validator function or functions to add to this control.
   */
  addAsyncValidators(validators) {
    this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Remove a synchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found,
   * it is ignored.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<string | null>('', Validators.required);
   * ctrl.removeValidators(Validators.required);
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<string | null>('', minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   *
   * ctrl.removeValidators(minValidator);
   * ```
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The validator or validators to remove.
   */
  removeValidators(validators) {
    this.setValidators(removeValidators(validators, this._rawValidators));
  }
  /**
   * Remove an asynchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found, it
   * is ignored.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The asynchronous validator or validators to remove.
   */
  removeAsyncValidators(validators) {
    this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Check whether a synchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<number | null>(0, Validators.required);
   * expect(ctrl.hasValidator(Validators.required)).toEqual(true)
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<number | null>(0, minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   * ```
   *
   * @param validator The validator to check for presence. Compared by function reference.
   * @returns Whether the provided validator was found on this control.
   */
  hasValidator(validator) {
    return hasValidator(this._rawValidators, validator);
  }
  /**
   * Check whether an asynchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @param validator The asynchronous validator to check for presence. Compared by function
   *     reference.
   * @returns Whether the provided asynchronous validator was found on this control.
   */
  hasAsyncValidator(validator) {
    return hasValidator(this._rawAsyncValidators, validator);
  }
  /**
   * Empties out the synchronous validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearValidators() {
    this.validator = null;
  }
  /**
   * Empties out the async validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  markAsTouched(opts = {}) {
    const changed = this.touched === false;
    this.touched = true;
    const sourceControl = opts.sourceControl ?? this;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsTouched(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(true, sourceControl));
    }
  }
  /**
   * Marks the control and all its descendant controls as `touched`.
   * @see {@link markAsTouched()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `emitEvent`: When true or not supplied (the default), the `events`
   * observable emits a `TouchedChangeEvent` with the `touched` property being `true`.
   * When false, no events are emitted.
   */
  markAllAsTouched(opts = {}) {
    this.markAsTouched({
      onlySelf: true,
      emitEvent: opts.emitEvent,
      sourceControl: this
    });
    this._forEachChild((control) => control.markAllAsTouched(opts));
  }
  markAsUntouched(opts = {}) {
    const changed = this.touched === true;
    this.touched = false;
    this._pendingTouched = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsUntouched({
        onlySelf: true,
        emitEvent: opts.emitEvent,
        sourceControl
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(false, sourceControl));
    }
  }
  markAsDirty(opts = {}) {
    const changed = this.pristine === true;
    this.pristine = false;
    const sourceControl = opts.sourceControl ?? this;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsDirty(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(false, sourceControl));
    }
  }
  markAsPristine(opts = {}) {
    const changed = this.pristine === false;
    this.pristine = true;
    this._pendingDirty = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsPristine({
        onlySelf: true,
        emitEvent: opts.emitEvent
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(true, sourceControl));
    }
  }
  markAsPending(opts = {}) {
    this.status = PENDING;
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsPending(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  disable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = DISABLED;
    this.errors = null;
    this._forEachChild((control) => {
      control.disable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this._updateValue();
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(true));
  }
  /**
   * Enables the control. This means the control is included in validation checks and
   * the aggregate value of its parent. Its status recalculates based on its value and
   * its validators.
   *
   * By default, if the control has children, all children are enabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configure options that control how the control propagates changes and
   * emits events when marked as untouched
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`,
   * `valueChanges` and `events`
   * observables emit events with the latest status and value when the control is enabled.
   * When false, no events are emitted.
   */
  enable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = VALID;
    this._forEachChild((control) => {
      control.enable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(false));
  }
  _updateAncestors(opts, sourceControl) {
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
      if (!opts.skipPristineCheck) {
        this._parent._updatePristine({}, sourceControl);
      }
      this._parent._updateTouched({}, sourceControl);
    }
  }
  /**
   * Sets the parent of the control
   *
   * @param parent The new parent.
   */
  setParent(parent) {
    this._parent = parent;
  }
  /**
   * The raw value of this control. For most control implementations, the raw value will include
   * disabled children.
   */
  getRawValue() {
    return this.value;
  }
  updateValueAndValidity(opts = {}) {
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
      const shouldHaveEmitted = this._cancelExistingSubscription();
      this.errors = this._runValidator();
      this.status = this._calculateStatus();
      if (this.status === VALID || this.status === PENDING) {
        this._runAsyncValidator(shouldHaveEmitted, opts.emitEvent);
      }
    }
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  /** @internal */
  _updateTreeValidity(opts = {
    emitEvent: true
  }) {
    this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? DISABLED : VALID;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(shouldHaveEmitted, emitEvent) {
    if (this.asyncValidator) {
      this.status = PENDING;
      this._hasOwnPendingAsyncValidator = {
        emitEvent: emitEvent !== false
      };
      const obs = toObservable(this.asyncValidator(this));
      this._asyncValidationSubscription = obs.subscribe((errors) => {
        this._hasOwnPendingAsyncValidator = null;
        this.setErrors(errors, {
          emitEvent,
          shouldHaveEmitted
        });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      const shouldHaveEmitted = this._hasOwnPendingAsyncValidator?.emitEvent ?? false;
      this._hasOwnPendingAsyncValidator = null;
      return shouldHaveEmitted;
    }
    return false;
  }
  setErrors(errors, opts = {}) {
    this.errors = errors;
    this._updateControlsErrors(opts.emitEvent !== false, this, opts.shouldHaveEmitted);
  }
  /**
   * Retrieves a child control given the control's name or path.
   *
   * @param path A dot-delimited string or array of string/number values that define the path to the
   * control. If a string is provided, passing it as a string literal will result in improved type
   * information. Likewise, if an array is provided, passing it `as const` will cause improved type
   * information to be available.
   *
   * @usageNotes
   * ### Retrieve a nested control
   *
   * For example, to get a `name` control nested within a `person` sub-group:
   *
   * * `this.form.get('person.name');`
   *
   * -OR-
   *
   * * `this.form.get(['person', 'name'] as const);` // `as const` gives improved typings
   *
   * ### Retrieve a control in a FormArray
   *
   * When accessing an element inside a FormArray, you can use an element index.
   * For example, to get a `price` control from the first element in an `items` array you can use:
   *
   * * `this.form.get('items.0.price');`
   *
   * -OR-
   *
   * * `this.form.get(['items', 0, 'price']);`
   */
  get(path) {
    let currPath = path;
    if (currPath == null) return null;
    if (!Array.isArray(currPath)) currPath = currPath.split(".");
    if (currPath.length === 0) return null;
    return currPath.reduce((control, name) => control && control._find(name), this);
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    const control = path ? this.get(path) : this;
    return control && control.errors ? control.errors[errorCode] : null;
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return !!this.getError(errorCode, path);
  }
  /**
   * Retrieves the top-level ancestor of this control.
   */
  get root() {
    let x = this;
    while (x._parent) {
      x = x._parent;
    }
    return x;
  }
  /** @internal */
  _updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted) {
    this.status = this._calculateStatus();
    if (emitEvent) {
      this.statusChanges.emit(this.status);
    }
    if (emitEvent || shouldHaveEmitted) {
      this._events.next(new StatusChangeEvent(this.status, changedControl));
    }
    if (this._parent) {
      this._parent._updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted);
    }
  }
  /** @internal */
  _initObservables() {
    this.valueChanges = new EventEmitter();
    this.statusChanges = new EventEmitter();
  }
  _calculateStatus() {
    if (this._allControlsDisabled()) return DISABLED;
    if (this.errors) return INVALID;
    if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING)) return PENDING;
    if (this._anyControlsHaveStatus(INVALID)) return INVALID;
    return VALID;
  }
  /** @internal */
  _anyControlsHaveStatus(status) {
    return this._anyControls((control) => control.status === status);
  }
  /** @internal */
  _anyControlsDirty() {
    return this._anyControls((control) => control.dirty);
  }
  /** @internal */
  _anyControlsTouched() {
    return this._anyControls((control) => control.touched);
  }
  /** @internal */
  _updatePristine(opts, changedControl) {
    const newPristine = !this._anyControlsDirty();
    const changed = this.pristine !== newPristine;
    this.pristine = newPristine;
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts, changedControl);
    }
    if (changed) {
      this._events.next(new PristineChangeEvent(this.pristine, changedControl));
    }
  }
  /** @internal */
  _updateTouched(opts = {}, changedControl) {
    this.touched = this._anyControlsTouched();
    this._events.next(new TouchedChangeEvent(this.touched, changedControl));
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts, changedControl);
    }
  }
  /** @internal */
  _registerOnCollectionChange(fn) {
    this._onCollectionChange = fn;
  }
  /** @internal */
  _setUpdateStrategy(opts) {
    if (isOptionsObj(opts) && opts.updateOn != null) {
      this._updateOn = opts.updateOn;
    }
  }
  /**
   * Check to see if parent has been marked artificially dirty.
   *
   * @internal
   */
  _parentMarkedDirty(onlySelf) {
    const parentDirty = this._parent && this._parent.dirty;
    return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
  }
  /** @internal */
  _find(name) {
    return null;
  }
  /**
   * Internal implementation of the `setValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignValidators(validators) {
    this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedValidatorFn = coerceToValidator(this._rawValidators);
  }
  /**
   * Internal implementation of the `setAsyncValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignAsyncValidators(validators) {
    this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
  }
};
var FormGroup = class extends AbstractControl {
  /**
   * Creates a new `FormGroup` instance.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`. The status should be broadcasted via the `statusChanges` observable,
      // so we set `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  registerControl(name, control) {
    if (this.controls[name]) return this.controls[name];
    this.controls[name] = control;
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
    return control;
  }
  addControl(name, control, options = {}) {
    this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Remove a control from this group. In a strongly-typed group, required controls cannot be
   * removed.
   *
   * This method also updates the value and validity of the control.
   *
   * @param name The control name to remove from the collection
   * @param options Specifies whether this FormGroup instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeControl(name, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  setControl(name, control, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    if (control) this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  contains(controlName) {
    return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
  }
  /**
   * Sets the value of the `FormGroup`. It accepts an object that matches
   * the structure of the group, with control names as keys.
   *
   * @usageNotes
   * ### Set the complete value for the form group
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl(),
   *   last: new FormControl()
   * });
   *
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.setValue({first: 'Nancy', last: 'Drew'});
   * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
   * ```
   *
   * @throws When strict checks fail, such as setting the value of a control
   * that doesn't exist or if you exclude a value of a control that does exist.
   *
   * @param value The new value for the control that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes
   * and emits events after the value changes.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, true, value);
    Object.keys(value).forEach((name) => {
      assertControlPresent(this, true, name);
      this.controls[name].setValue(value[name], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormGroup`. It accepts an object with control
   * names as keys, and does its best to match the values to the correct controls
   * in the group.
   *
   * It accepts both super-sets and sub-sets of the group without throwing an error.
   *
   * @usageNotes
   * ### Patch the value for a form group
   *
   * ```
   * const form = new FormGroup({
   *    first: new FormControl(),
   *    last: new FormControl()
   * });
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.patchValue({first: 'Nancy'});
   * console.log(form.value);   // {first: 'Nancy', last: null}
   * ```
   *
   * @param value The object that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes and
   * emits events after the value is patched.
   * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
   * true.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control value
   * is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null) return;
    Object.keys(value).forEach((name) => {
      const control = this.controls[name];
      if (control) {
        control.patchValue(
          /* Guaranteed to be present, due to the outer forEach. */
          value[name],
          {
            onlySelf: true,
            emitEvent: options.emitEvent
          }
        );
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
   * the value of all descendants to their default values, or null if no defaults were provided.
   *
   * You reset to a specific form state by passing in a map of states
   * that matches the structure of your form, with control names as keys. The state
   * is a standalone value or a form state object with both a value and a disabled
   * status.
   *
   * @param value Resets the control with an initial value,
   * or an object that defines the initial value and disabled state.
   *
   * @param options Configuration options that determine how the control propagates changes
   * and emits events when the group is reset.
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * @usageNotes
   *
   * ### Reset the form group values
   *
   * ```ts
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * console.log(form.value);  // {first: 'first name', last: 'last name'}
   *
   * form.reset({ first: 'name', last: 'last name' });
   *
   * console.log(form.value);  // {first: 'name', last: 'last name'}
   * ```
   *
   * ### Reset the form group values and disabled status
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * form.reset({
   *   first: {value: 'name', disabled: true},
   *   last: 'last'
   * });
   *
   * console.log(form.value);  // {last: 'last'}
   * console.log(form.get('first').status);  // 'DISABLED'
   * ```
   */
  reset(value = {}, options = {}) {
    this._forEachChild((control, name) => {
      control.reset(value ? value[name] : null, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the `FormGroup`, including any disabled controls.
   *
   * Retrieves all values regardless of disabled status.
   */
  getRawValue() {
    return this._reduceChildren({}, (acc, control, name) => {
      acc[name] = control.getRawValue();
      return acc;
    });
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
      return child._syncPendingControls() ? true : updated;
    });
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    Object.keys(this.controls).forEach((key) => {
      const control = this.controls[key];
      control && cb(control, key);
    });
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => {
      control.setParent(this);
      control._registerOnCollectionChange(this._onCollectionChange);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this._reduceValue();
  }
  /** @internal */
  _anyControls(condition) {
    for (const [controlName, control] of Object.entries(this.controls)) {
      if (this.contains(controlName) && condition(control)) {
        return true;
      }
    }
    return false;
  }
  /** @internal */
  _reduceValue() {
    let acc = {};
    return this._reduceChildren(acc, (acc2, control, name) => {
      if (control.enabled || this.disabled) {
        acc2[name] = control.value;
      }
      return acc2;
    });
  }
  /** @internal */
  _reduceChildren(initValue, fn) {
    let res = initValue;
    this._forEachChild((control, name) => {
      res = fn(res, control, name);
    });
    return res;
  }
  /** @internal */
  _allControlsDisabled() {
    for (const controlName of Object.keys(this.controls)) {
      if (this.controls[controlName].enabled) {
        return false;
      }
    }
    return Object.keys(this.controls).length > 0 || this.disabled;
  }
  /** @internal */
  _find(name) {
    return this.controls.hasOwnProperty(name) ? this.controls[name] : null;
  }
};
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
var FormRecord = class extends FormGroup {
};
var CALL_SET_DISABLED_STATE = new InjectionToken("CallSetDisabledState", {
  providedIn: "root",
  factory: () => setDisabledStateDefault
});
var setDisabledStateDefault = "always";
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control) _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor) _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  if (dir.valueAccessor) {
    dir.valueAccessor.registerOnChange(noop);
    dir.valueAccessor.registerOnTouched(noop);
  }
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop);
  registerOnValidatorChange(dir._rawAsyncValidators, noop);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change") updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange) updateControl(control, dir);
    if (control.updateOn !== "submit") control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty) control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent) dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1) return `path: '${path.join(" -> ")}'`;
  if (path?.[0]) return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model")) return false;
  const change = changes["model"];
  if (change.isFirstChange()) return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors) return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode)) _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor) return customAccessor;
  if (builtinAccessor) return builtinAccessor;
  if (defaultAccessor) return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never") return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
var formDirectiveProvider$1 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgForm)
};
var resolvedPromise$1 = (() => Promise.resolve())();
var NgForm = class _NgForm extends ControlContainer {
  /**
   * @description
   * Returns whether the form submission has been triggered.
   */
  get submitted() {
    return untracked(this.submittedReactive);
  }
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this._submitted = computed(() => this.submittedReactive());
    this.submittedReactive = signal(false);
    this._directives = /* @__PURE__ */ new Set();
    this.ngSubmit = new EventEmitter();
    this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
  }
  /** @nodoc */
  ngAfterViewInit() {
    this._setUpdateStrategy();
  }
  /**
   * @description
   * The directive instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * The internal `FormGroup` instance.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it is always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Returns a map of the controls in this group.
   */
  get controls() {
    return this.form.controls;
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `NgModel` directive instance.
   */
  addControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      dir.control = container.registerControl(dir.name, dir.control);
      setUpControl(dir.control, dir, this.callSetDisabledState);
      dir.control.updateValueAndValidity({
        emitEvent: false
      });
      this._directives.add(dir);
    });
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `NgModel` directive.
   *
   * @param dir The `NgModel` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `NgModel` instance from the internal list of directives
   *
   * @param dir The `NgModel` directive instance.
   */
  removeControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
      this._directives.delete(dir);
    });
  }
  /**
   * @description
   * Adds a new `NgModelGroup` directive instance to the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  addFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      const group = new FormGroup({});
      setUpFormContainer(group, dir);
      container.registerControl(dir.name, group);
      group.updateValueAndValidity({
        emitEvent: false
      });
    });
  }
  /**
   * @description
   * Removes the `NgModelGroup` directive instance from the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  removeFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
    });
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `NgControl` directive.
   *
   * @param dir The `NgControl` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    resolvedPromise$1.then(() => {
      const ctrl = this.form.get(dir.path);
      ctrl.setValue(value);
    });
  }
  /**
   * @description
   * Sets the value for this `FormGroup`.
   *
   * @param value The new value
   */
  setValue(value) {
    this.control.setValue(value);
  }
  /**
   * @description
   * Method called when the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this.submittedReactive.set(true);
    syncPendingControls(this.form, this._directives);
    this.ngSubmit.emit($event);
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submittedReactive.set(false);
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.form._updateOn = this.options.updateOn;
    }
  }
  _findContainer(path) {
    path.pop();
    return path.length ? this.form.get(path) : this.form;
  }
  static {
    this.\u0275fac = function NgForm_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgForm)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgForm,
      selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
      hostBindings: function NgForm_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("submit", function NgForm_submit_HostBindingHandler($event) {
            return ctx.onSubmit($event);
          })("reset", function NgForm_reset_HostBindingHandler() {
            return ctx.onReset();
          });
        }
      },
      inputs: {
        options: [0, "ngFormOptions", "options"]
      },
      outputs: {
        ngSubmit: "ngSubmit"
      },
      exportAs: ["ngForm"],
      features: [\u0275\u0275ProvidersFeature([formDirectiveProvider$1]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgForm, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]",
      providers: [formDirectiveProvider$1],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      outputs: ["ngSubmit"],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    options: [{
      type: Input,
      args: ["ngFormOptions"]
    }]
  });
})();
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
var FormControl = class FormControl2 extends AbstractControl {
  constructor(formState = null, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.defaultValue = null;
    this._onChange = [];
    this._pendingChange = false;
    this._applyFormState(formState);
    this._setUpdateStrategy(validatorOrOpts);
    this._initObservables();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set
      // `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
    if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
      if (isFormControlState(formState)) {
        this.defaultValue = formState.value;
      } else {
        this.defaultValue = formState;
      }
    }
  }
  setValue(value, options = {}) {
    this.value = this._pendingValue = value;
    if (this._onChange.length && options.emitModelToViewChange !== false) {
      this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
    }
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    this.setValue(value, options);
  }
  reset(formState = this.defaultValue, options = {}) {
    this._applyFormState(formState);
    this.markAsPristine(options);
    this.markAsUntouched(options);
    this.setValue(this.value, options);
    this._pendingChange = false;
  }
  /**  @internal */
  _updateValue() {
  }
  /**  @internal */
  _anyControls(condition) {
    return false;
  }
  /**  @internal */
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(fn) {
    this._onChange.push(fn);
  }
  /** @internal */
  _unregisterOnChange(fn) {
    removeListItem(this._onChange, fn);
  }
  registerOnDisabledChange(fn) {
    this._onDisabledChange.push(fn);
  }
  /** @internal */
  _unregisterOnDisabledChange(fn) {
    removeListItem(this._onDisabledChange, fn);
  }
  /** @internal */
  _forEachChild(cb) {
  }
  /** @internal */
  _syncPendingControls() {
    if (this.updateOn === "submit") {
      if (this._pendingDirty) this.markAsDirty();
      if (this._pendingTouched) this.markAsTouched();
      if (this._pendingChange) {
        this.setValue(this._pendingValue, {
          onlySelf: true,
          emitModelToViewChange: false
        });
        return true;
      }
    }
    return false;
  }
  _applyFormState(formState) {
    if (isFormControlState(formState)) {
      this.value = this._pendingValue = formState.value;
      formState.disabled ? this.disable({
        onlySelf: true,
        emitEvent: false
      }) : this.enable({
        onlySelf: true,
        emitEvent: false
      });
    } else {
      this.value = this._pendingValue = formState;
    }
  }
};
var isFormControl = (control) => control instanceof FormControl;
var AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
  /** @nodoc */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormGroup(this);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormGroup(this);
    }
  }
  /**
   * @description
   * The `FormGroup` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormGroup(this);
  }
  /**
   * @description
   * The path to this group from the top-level directive.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /** @internal */
  _checkParentType() {
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275AbstractFormGroupDirective_BaseFactory;
      return function AbstractFormGroupDirective_Factory(__ngFactoryType__) {
        return (\u0275AbstractFormGroupDirective_BaseFactory || (\u0275AbstractFormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_AbstractFormGroupDirective)))(__ngFactoryType__ || _AbstractFormGroupDirective);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _AbstractFormGroupDirective,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormGroupDirective, [{
    type: Directive
  }], null, null);
})();
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
var modelGroupProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgModelGroup)
};
var NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = "";
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw modelGroupParentException();
    }
  }
  static {
    this.\u0275fac = function NgModelGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgModelGroup)(\u0275\u0275directiveInject(ControlContainer, 5), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgModelGroup,
      selectors: [["", "ngModelGroup", ""]],
      inputs: {
        name: [0, "ngModelGroup", "name"]
      },
      exportAs: ["ngModelGroup"],
      features: [\u0275\u0275ProvidersFeature([modelGroupProvider]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModelGroup, [{
    type: Directive,
    args: [{
      selector: "[ngModelGroup]",
      providers: [modelGroupProvider],
      exportAs: "ngModelGroup"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["ngModelGroup"]
    }]
  });
})();
var formControlBinding$1 = {
  provide: NgControl,
  useExisting: forwardRef(() => NgModel)
};
var resolvedPromise = (() => Promise.resolve())();
var NgModel = class _NgModel extends NgControl {
  constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
    super();
    this._changeDetectorRef = _changeDetectorRef;
    this.callSetDisabledState = callSetDisabledState;
    this.control = new FormControl();
    this._registered = false;
    this.name = "";
    this.update = new EventEmitter();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkForErrors();
    if (!this._registered || "name" in changes) {
      if (this._registered) {
        this._checkName();
        if (this.formDirective) {
          const oldName = changes["name"].previousValue;
          this.formDirective.removeControl({
            name: oldName,
            path: this._getPath(oldName)
          });
        }
      }
      this._setUpControl();
    }
    if ("isDisabled" in changes) {
      this._updateDisabled(changes);
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      this._updateValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    this.formDirective && this.formDirective.removeControl(this);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return this._getPath(this.name);
  }
  /**
   * @description
   * The top-level directive for this control if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value emitted by `ngModelChange`.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _setUpControl() {
    this._setUpdateStrategy();
    this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
    this._registered = true;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.control._updateOn = this.options.updateOn;
    }
  }
  _isStandalone() {
    return !this._parent || !!(this.options && this.options.standalone);
  }
  _setUpStandalone() {
    setUpControl(this.control, this, this.callSetDisabledState);
    this.control.updateValueAndValidity({
      emitEvent: false
    });
  }
  _checkForErrors() {
    if (!this._isStandalone()) {
      this._checkParentType();
    }
    this._checkName();
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof NgModelGroup) && this._parent instanceof AbstractFormGroupDirective) {
        throw formGroupNameException();
      } else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
        throw modelParentException();
      }
    }
  }
  _checkName() {
    if (this.options && this.options.name) this.name = this.options.name;
    if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingNameException();
    }
  }
  _updateValue(value) {
    resolvedPromise.then(() => {
      this.control.setValue(value, {
        emitViewToModelChange: false
      });
      this._changeDetectorRef?.markForCheck();
    });
  }
  _updateDisabled(changes) {
    const disabledValue = changes["isDisabled"].currentValue;
    const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
    resolvedPromise.then(() => {
      if (isDisabled && !this.control.disabled) {
        this.control.disable();
      } else if (!isDisabled && this.control.disabled) {
        this.control.enable();
      }
      this._changeDetectorRef?.markForCheck();
    });
  }
  _getPath(controlName) {
    return this._parent ? controlPath(controlName, this._parent) : [controlName];
  }
  static {
    this.\u0275fac = function NgModel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgModel)(\u0275\u0275directiveInject(ControlContainer, 9), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(ChangeDetectorRef, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgModel,
      selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
      inputs: {
        name: "name",
        isDisabled: [0, "disabled", "isDisabled"],
        model: [0, "ngModel", "model"],
        options: [0, "ngModelOptions", "options"]
      },
      outputs: {
        update: "ngModelChange"
      },
      exportAs: ["ngModel"],
      features: [\u0275\u0275ProvidersFeature([formControlBinding$1]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModel, [{
    type: Directive,
    args: [{
      selector: "[ngModel]:not([formControlName]):not([formControl])",
      providers: [formControlBinding$1],
      exportAs: "ngModel"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: ChangeDetectorRef,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ChangeDetectorRef]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    name: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    options: [{
      type: Input,
      args: ["ngModelOptions"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var \u0275NgNoValidate = class _\u0275NgNoValidate {
  static {
    this.\u0275fac = function \u0275NgNoValidate_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _\u0275NgNoValidate)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _\u0275NgNoValidate,
      selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
      hostAttrs: ["novalidate", ""]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgNoValidate, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([ngNativeValidate])",
      host: {
        "novalidate": ""
      }
    }]
  }], null, null);
})();
var NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NumberValueAccessor),
  multi: true
};
var NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NumberValueAccessor_BaseFactory;
      return function NumberValueAccessor_Factory(__ngFactoryType__) {
        return (\u0275NumberValueAccessor_BaseFactory || (\u0275NumberValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_NumberValueAccessor)))(__ngFactoryType__ || _NumberValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NumberValueAccessor,
      selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
      hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("input", function NumberValueAccessor_input_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      features: [\u0275\u0275ProvidersFeature([NUMBER_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
      host: {
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [NUMBER_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlValueAccessor),
  multi: true
};
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
var RadioControlRegistry = class _RadioControlRegistry {
  constructor() {
    this._accessors = [];
  }
  /**
   * @description
   * Adds a control to the internal registry. For internal use only.
   */
  add(control, accessor) {
    this._accessors.push([control, accessor]);
  }
  /**
   * @description
   * Removes a control from the internal registry. For internal use only.
   */
  remove(accessor) {
    for (let i = this._accessors.length - 1; i >= 0; --i) {
      if (this._accessors[i][1] === accessor) {
        this._accessors.splice(i, 1);
        return;
      }
    }
  }
  /**
   * @description
   * Selects a radio button. For internal use only.
   */
  select(accessor) {
    this._accessors.forEach((c) => {
      if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].fireUncheck(accessor.value);
      }
    });
  }
  _isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control) return false;
    return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
  }
  static {
    this.\u0275fac = function RadioControlRegistry_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RadioControlRegistry)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _RadioControlRegistry,
      factory: _RadioControlRegistry.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
  constructor(renderer, elementRef, _registry, _injector) {
    super(renderer, elementRef);
    this._registry = _registry;
    this._injector = _injector;
    this.setDisabledStateFired = false;
    this.onChange = () => {
    };
    this.callSetDisabledState = inject(CALL_SET_DISABLED_STATE, {
      optional: true
    }) ?? setDisabledStateDefault;
  }
  /** @nodoc */
  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this._checkName();
    this._registry.add(this._control, this);
  }
  /** @nodoc */
  ngOnDestroy() {
    this._registry.remove(this);
  }
  /**
   * Sets the "checked" property value on the radio input element.
   * @nodoc
   */
  writeValue(value) {
    this._state = value === this.value;
    this.setProperty("checked", this._state);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this._fn = fn;
    this.onChange = () => {
      fn(this.value);
      this._registry.select(this);
    };
  }
  /** @nodoc */
  setDisabledState(isDisabled) {
    if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
      this.setProperty("disabled", isDisabled);
    }
    this.setDisabledStateFired = true;
  }
  /**
   * Sets the "value" on the radio input element and unchecks it.
   *
   * @param value
   */
  fireUncheck(value) {
    this.writeValue(value);
  }
  _checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwNameError();
    }
    if (!this.name && this.formControlName) this.name = this.formControlName;
  }
  static {
    this.\u0275fac = function RadioControlValueAccessor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RadioControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(RadioControlRegistry), \u0275\u0275directiveInject(Injector));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _RadioControlValueAccessor,
      selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
      hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function RadioControlValueAccessor_change_HostBindingHandler() {
            return ctx.onChange();
          })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      inputs: {
        name: "name",
        formControlName: "formControlName",
        value: "value"
      },
      features: [\u0275\u0275ProvidersFeature([RADIO_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
      host: {
        "(change)": "onChange()",
        "(blur)": "onTouched()"
      },
      providers: [RADIO_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: RadioControlRegistry
  }, {
    type: Injector
  }], {
    name: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var RANGE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RangeValueAccessor),
  multi: true
};
var RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("value", parseFloat(value));
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275RangeValueAccessor_BaseFactory;
      return function RangeValueAccessor_Factory(__ngFactoryType__) {
        return (\u0275RangeValueAccessor_BaseFactory || (\u0275RangeValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_RangeValueAccessor)))(__ngFactoryType__ || _RangeValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _RangeValueAccessor,
      selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
      hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function RangeValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      features: [\u0275\u0275ProvidersFeature([RANGE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [RANGE_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken(ngDevMode ? "NgModelWithFormControlWarning" : "");
var formControlBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlDirective)
};
var FormControlDirective = class _FormControlDirective extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  static {
    this._ngModelWarningSentOnce = false;
  }
  constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this.callSetDisabledState = callSetDisabledState;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this._isControlChanged(changes)) {
      const previousForm = changes["form"].previousValue;
      if (previousForm) {
        cleanUpControl(
          previousForm,
          this,
          /* validateControlPresenceOnChange */
          false
        );
      }
      setUpControl(this.form, this, this.callSetDisabledState);
      this.form.updateValueAndValidity({
        emitEvent: false
      });
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
      }
      this.form.setValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpControl(
        this.form,
        this,
        /* validateControlPresenceOnChange */
        false
      );
    }
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * The `FormControl` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _isControlChanged(changes) {
    return changes.hasOwnProperty("form");
  }
  static {
    this.\u0275fac = function FormControlDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormControlDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormControlDirective,
      selectors: [["", "formControl", ""]],
      inputs: {
        form: [0, "formControl", "form"],
        isDisabled: [0, "disabled", "isDisabled"],
        model: [0, "ngModel", "model"]
      },
      outputs: {
        update: "ngModelChange"
      },
      exportAs: ["ngForm"],
      features: [\u0275\u0275ProvidersFeature([formControlBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlDirective, [{
    type: Directive,
    args: [{
      selector: "[formControl]",
      providers: [formControlBinding],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formControl"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var formDirectiveProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupDirective)
};
var FormGroupDirective = class _FormGroupDirective extends ControlContainer {
  /**
   * @description
   * Reports whether the form submission has been triggered.
   */
  get submitted() {
    return untracked(this._submittedReactive);
  }
  // TODO(atscott): Remove once invalid API usage is cleaned up internally
  set submitted(value) {
    this._submittedReactive.set(value);
  }
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this._submitted = computed(() => this._submittedReactive());
    this._submittedReactive = signal(false);
    this._onCollectionChange = () => this._updateDomValue();
    this.directives = [];
    this.form = null;
    this.ngSubmit = new EventEmitter();
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkFormPresent();
    if (changes.hasOwnProperty("form")) {
      this._updateValidators();
      this._updateDomValue();
      this._updateRegistrations();
      this._oldForm = this.form;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpValidators(this.form, this);
      if (this.form._onCollectionChange === this._onCollectionChange) {
        this.form._registerOnCollectionChange(() => {
        });
      }
    }
  }
  /**
   * @description
   * Returns this directive's instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * Returns the `FormGroup` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `FormControlName` directive instance.
   */
  addControl(dir) {
    const ctrl = this.form.get(dir.path);
    setUpControl(ctrl, dir, this.callSetDisabledState);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
    this.directives.push(dir);
    return ctrl;
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `FormControlName` directive
   *
   * @param dir The `FormControlName` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `FormControlName` instance from the internal list of directives
   *
   * @param dir The `FormControlName` directive instance.
   */
  removeControl(dir) {
    cleanUpControl(
      dir.control || null,
      dir,
      /* validateControlPresenceOnChange */
      false
    );
    removeListItem$1(this.directives, dir);
  }
  /**
   * Adds a new `FormGroupName` directive instance to the form.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  addFormGroup(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormGroupName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  removeFormGroup(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
   *
   * @param dir The `FormGroupName` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Performs the necessary setup when a `FormArrayName` directive instance is added to the view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  addFormArray(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormArrayName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  removeFormArray(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  getFormArray(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `FormControlName` directive.
   *
   * @param dir The `FormControlName` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    const ctrl = this.form.get(dir.path);
    ctrl.setValue(value);
  }
  /**
   * @description
   * Method called with the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this._submittedReactive.set(true);
    syncPendingControls(this.form, this.directives);
    this.ngSubmit.emit($event);
    this.form._events.next(new FormSubmittedEvent(this.control));
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this._submittedReactive.set(false);
    this.form._events.next(new FormResetEvent(this.form));
  }
  /** @internal */
  _updateDomValue() {
    this.directives.forEach((dir) => {
      const oldCtrl = dir.control;
      const newCtrl = this.form.get(dir.path);
      if (oldCtrl !== newCtrl) {
        cleanUpControl(oldCtrl || null, dir);
        if (isFormControl(newCtrl)) {
          setUpControl(newCtrl, dir, this.callSetDisabledState);
          dir.control = newCtrl;
        }
      }
    });
    this.form._updateTreeValidity({
      emitEvent: false
    });
  }
  _setUpFormContainer(dir) {
    const ctrl = this.form.get(dir.path);
    setUpFormContainer(ctrl, dir);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
  }
  _cleanUpFormContainer(dir) {
    if (this.form) {
      const ctrl = this.form.get(dir.path);
      if (ctrl) {
        const isControlUpdated = cleanUpFormContainer(ctrl, dir);
        if (isControlUpdated) {
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
        }
      }
    }
  }
  _updateRegistrations() {
    this.form._registerOnCollectionChange(this._onCollectionChange);
    if (this._oldForm) {
      this._oldForm._registerOnCollectionChange(() => {
      });
    }
  }
  _updateValidators() {
    setUpValidators(this.form, this);
    if (this._oldForm) {
      cleanUpValidators(this._oldForm, this);
    }
  }
  _checkFormPresent() {
    if (!this.form && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingFormException();
    }
  }
  static {
    this.\u0275fac = function FormGroupDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormGroupDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormGroupDirective,
      selectors: [["", "formGroup", ""]],
      hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
            return ctx.onSubmit($event);
          })("reset", function FormGroupDirective_reset_HostBindingHandler() {
            return ctx.onReset();
          });
        }
      },
      inputs: {
        form: [0, "formGroup", "form"]
      },
      outputs: {
        ngSubmit: "ngSubmit"
      },
      exportAs: ["ngForm"],
      features: [\u0275\u0275ProvidersFeature([formDirectiveProvider]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupDirective, [{
    type: Directive,
    args: [{
      selector: "[formGroup]",
      providers: [formDirectiveProvider],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formGroup"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var formGroupNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupName)
};
var FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw groupParentException();
    }
  }
  static {
    this.\u0275fac = function FormGroupName_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormGroupName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormGroupName,
      selectors: [["", "formGroupName", ""]],
      inputs: {
        name: [0, "formGroupName", "name"]
      },
      features: [\u0275\u0275ProvidersFeature([formGroupNameProvider]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupName, [{
    type: Directive,
    args: [{
      selector: "[formGroupName]",
      providers: [formGroupNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formGroupName"]
    }]
  });
})();
var formArrayNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayName)
};
var FormArrayName = class _FormArrayName extends ControlContainer {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /**
   * A lifecycle method called when the directive's inputs are initialized. For internal use only.
   * @throws If the directive does not have a valid parent.
   * @nodoc
   */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormArray(this);
  }
  /**
   * A lifecycle method called before the directive's instance is destroyed. For internal use only.
   * @nodoc
   */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormArray(this);
    }
  }
  /**
   * @description
   * The `FormArray` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormArray(this);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw arrayParentException();
    }
  }
  static {
    this.\u0275fac = function FormArrayName_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormArrayName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormArrayName,
      selectors: [["", "formArrayName", ""]],
      inputs: {
        name: [0, "formArrayName", "name"]
      },
      features: [\u0275\u0275ProvidersFeature([formArrayNameProvider]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayName, [{
    type: Directive,
    args: [{
      selector: "[formArrayName]",
      providers: [formArrayNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formArrayName"]
    }]
  });
})();
function _hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
}
var controlNameBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlName)
};
var FormControlName = class _FormControlName extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  static {
    this._ngModelWarningSentOnce = false;
  }
  constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this._added = false;
    this.name = null;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (!this._added) this._setUpControl();
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
      }
      this.viewModel = this.model;
      this.formDirective.updateModel(this, this.model);
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeControl(this);
    }
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
        throw ngModelGroupException();
      } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
        throw controlParentException(this.name);
      }
    }
  }
  _setUpControl() {
    this._checkParentType();
    this.control = this.formDirective.addControl(this);
    this._added = true;
  }
  static {
    this.\u0275fac = function FormControlName_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormControlName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormControlName,
      selectors: [["", "formControlName", ""]],
      inputs: {
        name: [0, "formControlName", "name"],
        isDisabled: [0, "disabled", "isDisabled"],
        model: [0, "ngModel", "model"]
      },
      outputs: {
        update: "ngModelChange"
      },
      features: [\u0275\u0275ProvidersFeature([controlNameBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlName, [{
    type: Directive,
    args: [{
      selector: "[formControlName]",
      providers: [controlNameBinding]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formControlName"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectControlValueAccessor),
  multi: true
};
function _buildValueString$1(id, value) {
  if (id == null) return `${value}`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
var SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on the select element.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    const id = this._getOptionId(value);
    const valueString = _buildValueString$1(id, value);
    this.setProperty("value", valueString);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (valueString) => {
      this.value = this._getOptionValue(valueString);
      fn(this.value);
    };
  }
  /** @internal */
  _registerOption() {
    return (this._idCounter++).toString();
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id), value)) return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId$1(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275SelectControlValueAccessor_BaseFactory;
      return function SelectControlValueAccessor_Factory(__ngFactoryType__) {
        return (\u0275SelectControlValueAccessor_BaseFactory || (\u0275SelectControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectControlValueAccessor)))(__ngFactoryType__ || _SelectControlValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _SelectControlValueAccessor,
      selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
      hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      inputs: {
        compareWith: "compareWith"
      },
      features: [\u0275\u0275ProvidersFeature([SELECT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var NgSelectOption = class _NgSelectOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) this.id = this._select._registerOption();
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null) return;
    this._select._optionMap.set(this.id, value);
    this._setElementValue(_buildValueString$1(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    this._setElementValue(value);
    if (this._select) this._select.writeValue(this._select.value);
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
  static {
    this.\u0275fac = function NgSelectOption_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgSelectOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectControlValueAccessor, 9));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgSelectOption,
      selectors: [["option"]],
      inputs: {
        ngValue: "ngValue",
        value: "value"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
  multi: true
};
function _buildValueString(id, value) {
  if (id == null) return `${value}`;
  if (typeof value === "string") value = `'${value}'`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
var SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on one or of more of the select's options.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    let optionSelectedStateSetter;
    if (Array.isArray(value)) {
      const ids = value.map((v) => this._getOptionId(v));
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(ids.indexOf(o.toString()) > -1);
      };
    } else {
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(false);
      };
    }
    this._optionMap.forEach(optionSelectedStateSetter);
  }
  /**
   * Registers a function called when the control value changes
   * and writes an array of the selected options.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (element) => {
      const selected = [];
      const selectedOptions = element.selectedOptions;
      if (selectedOptions !== void 0) {
        const options = selectedOptions;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          const val = this._getOptionValue(opt.value);
          selected.push(val);
        }
      } else {
        const options = element.options;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          if (opt.selected) {
            const val = this._getOptionValue(opt.value);
            selected.push(val);
          }
        }
      }
      this.value = selected;
      fn(selected);
    };
  }
  /** @internal */
  _registerOption(value) {
    const id = (this._idCounter++).toString();
    this._optionMap.set(id, value);
    return id;
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275SelectMultipleControlValueAccessor_BaseFactory;
      return function SelectMultipleControlValueAccessor_Factory(__ngFactoryType__) {
        return (\u0275SelectMultipleControlValueAccessor_BaseFactory || (\u0275SelectMultipleControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectMultipleControlValueAccessor)))(__ngFactoryType__ || _SelectMultipleControlValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _SelectMultipleControlValueAccessor,
      selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
      hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target);
          })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      inputs: {
        compareWith: "compareWith"
      },
      features: [\u0275\u0275ProvidersFeature([SELECT_MULTIPLE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMultipleControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
      host: {
        "(change)": "onChange($event.target)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var \u0275NgSelectMultipleOption = class _\u0275NgSelectMultipleOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) {
      this.id = this._select._registerOption(this);
    }
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null) return;
    this._value = value;
    this._setElementValue(_buildValueString(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    if (this._select) {
      this._value = value;
      this._setElementValue(_buildValueString(this.id, value));
      this._select.writeValue(this._select.value);
    } else {
      this._setElementValue(value);
    }
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @internal */
  _setSelected(selected) {
    this._renderer.setProperty(this._element.nativeElement, "selected", selected);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
  static {
    this.\u0275fac = function \u0275NgSelectMultipleOption_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _\u0275NgSelectMultipleOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectMultipleControlValueAccessor, 9));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _\u0275NgSelectMultipleOption,
      selectors: [["option"]],
      inputs: {
        ngValue: "ngValue",
        value: "value"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgSelectMultipleOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectMultipleControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
var AbstractValidatorDirective = class _AbstractValidatorDirective {
  constructor() {
    this._validator = nullValidator;
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this.inputName in changes) {
      const input = this.normalizeInput(changes[this.inputName].currentValue);
      this._enabled = this.enabled(input);
      this._validator = this._enabled ? this.createValidator(input) : nullValidator;
      if (this._onChange) {
        this._onChange();
      }
    }
  }
  /** @nodoc */
  validate(control) {
    return this._validator(control);
  }
  /** @nodoc */
  registerOnValidatorChange(fn) {
    this._onChange = fn;
  }
  /**
   * @description
   * Determines whether this validator should be active or not based on an input.
   * Base class implementation checks whether an input is defined (if the value is different from
   * `null` and `undefined`). Validator classes that extend this base class can override this
   * function with the logic specific to a particular validator directive.
   */
  enabled(input) {
    return input != null;
  }
  static {
    this.\u0275fac = function AbstractValidatorDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbstractValidatorDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _AbstractValidatorDirective,
      features: [\u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractValidatorDirective, [{
    type: Directive
  }], null, null);
})();
var MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};
var MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "max";
    this.normalizeInput = (input) => toFloat(input);
    this.createValidator = (max) => maxValidator(max);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MaxValidator_BaseFactory;
      return function MaxValidator_Factory(__ngFactoryType__) {
        return (\u0275MaxValidator_BaseFactory || (\u0275MaxValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxValidator)))(__ngFactoryType__ || _MaxValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MaxValidator,
      selectors: [["input", "type", "number", "max", "", "formControlName", ""], ["input", "type", "number", "max", "", "formControl", ""], ["input", "type", "number", "max", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MaxValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("max", ctx._enabled ? ctx.max : null);
        }
      },
      inputs: {
        max: "max"
      },
      features: [\u0275\u0275ProvidersFeature([MAX_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
      providers: [MAX_VALIDATOR],
      host: {
        "[attr.max]": "_enabled ? max : null"
      }
    }]
  }], null, {
    max: [{
      type: Input
    }]
  });
})();
var MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidator),
  multi: true
};
var MinValidator = class _MinValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "min";
    this.normalizeInput = (input) => toFloat(input);
    this.createValidator = (min) => minValidator(min);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MinValidator_BaseFactory;
      return function MinValidator_Factory(__ngFactoryType__) {
        return (\u0275MinValidator_BaseFactory || (\u0275MinValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinValidator)))(__ngFactoryType__ || _MinValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MinValidator,
      selectors: [["input", "type", "number", "min", "", "formControlName", ""], ["input", "type", "number", "min", "", "formControl", ""], ["input", "type", "number", "min", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MinValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("min", ctx._enabled ? ctx.min : null);
        }
      },
      inputs: {
        min: "min"
      },
      features: [\u0275\u0275ProvidersFeature([MIN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
      providers: [MIN_VALIDATOR],
      host: {
        "[attr.min]": "_enabled ? min : null"
      }
    }]
  }], null, {
    min: [{
      type: Input
    }]
  });
})();
var REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RequiredValidator),
  multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CheckboxRequiredValidator),
  multi: true
};
var RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "required";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input) => requiredValidator;
  }
  /** @nodoc */
  enabled(input) {
    return input;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275RequiredValidator_BaseFactory;
      return function RequiredValidator_Factory(__ngFactoryType__) {
        return (\u0275RequiredValidator_BaseFactory || (\u0275RequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_RequiredValidator)))(__ngFactoryType__ || _RequiredValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _RequiredValidator,
      selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
      hostVars: 1,
      hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("required", ctx._enabled ? "" : null);
        }
      },
      inputs: {
        required: "required"
      },
      features: [\u0275\u0275ProvidersFeature([REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequiredValidator, [{
    type: Directive,
    args: [{
      selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
      providers: [REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, {
    required: [{
      type: Input
    }]
  });
})();
var CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
  constructor() {
    super(...arguments);
    this.createValidator = (input) => requiredTrueValidator;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275CheckboxRequiredValidator_BaseFactory;
      return function CheckboxRequiredValidator_Factory(__ngFactoryType__) {
        return (\u0275CheckboxRequiredValidator_BaseFactory || (\u0275CheckboxRequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxRequiredValidator)))(__ngFactoryType__ || _CheckboxRequiredValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CheckboxRequiredValidator,
      selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("required", ctx._enabled ? "" : null);
        }
      },
      features: [\u0275\u0275ProvidersFeature([CHECKBOX_REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxRequiredValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
      providers: [CHECKBOX_REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, null);
})();
var EMAIL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};
var EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "email";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input) => emailValidator;
  }
  /** @nodoc */
  enabled(input) {
    return input;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275EmailValidator_BaseFactory;
      return function EmailValidator_Factory(__ngFactoryType__) {
        return (\u0275EmailValidator_BaseFactory || (\u0275EmailValidator_BaseFactory = \u0275\u0275getInheritedFactory(_EmailValidator)))(__ngFactoryType__ || _EmailValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _EmailValidator,
      selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
      inputs: {
        email: "email"
      },
      features: [\u0275\u0275ProvidersFeature([EMAIL_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailValidator, [{
    type: Directive,
    args: [{
      selector: "[email][formControlName],[email][formControl],[email][ngModel]",
      providers: [EMAIL_VALIDATOR]
    }]
  }], null, {
    email: [{
      type: Input
    }]
  });
})();
var MIN_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinLengthValidator),
  multi: true
};
var MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "minlength";
    this.normalizeInput = (input) => toInteger(input);
    this.createValidator = (minlength) => minLengthValidator(minlength);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MinLengthValidator_BaseFactory;
      return function MinLengthValidator_Factory(__ngFactoryType__) {
        return (\u0275MinLengthValidator_BaseFactory || (\u0275MinLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinLengthValidator)))(__ngFactoryType__ || _MinLengthValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MinLengthValidator,
      selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("minlength", ctx._enabled ? ctx.minlength : null);
        }
      },
      inputs: {
        minlength: "minlength"
      },
      features: [\u0275\u0275ProvidersFeature([MIN_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
      providers: [MIN_LENGTH_VALIDATOR],
      host: {
        "[attr.minlength]": "_enabled ? minlength : null"
      }
    }]
  }], null, {
    minlength: [{
      type: Input
    }]
  });
})();
var MAX_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxLengthValidator),
  multi: true
};
var MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "maxlength";
    this.normalizeInput = (input) => toInteger(input);
    this.createValidator = (maxlength) => maxLengthValidator(maxlength);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MaxLengthValidator_BaseFactory;
      return function MaxLengthValidator_Factory(__ngFactoryType__) {
        return (\u0275MaxLengthValidator_BaseFactory || (\u0275MaxLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxLengthValidator)))(__ngFactoryType__ || _MaxLengthValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MaxLengthValidator,
      selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("maxlength", ctx._enabled ? ctx.maxlength : null);
        }
      },
      inputs: {
        maxlength: "maxlength"
      },
      features: [\u0275\u0275ProvidersFeature([MAX_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
      providers: [MAX_LENGTH_VALIDATOR],
      host: {
        "[attr.maxlength]": "_enabled ? maxlength : null"
      }
    }]
  }], null, {
    maxlength: [{
      type: Input
    }]
  });
})();
var PATTERN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PatternValidator),
  multi: true
};
var PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "pattern";
    this.normalizeInput = (input) => input;
    this.createValidator = (input) => patternValidator(input);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275PatternValidator_BaseFactory;
      return function PatternValidator_Factory(__ngFactoryType__) {
        return (\u0275PatternValidator_BaseFactory || (\u0275PatternValidator_BaseFactory = \u0275\u0275getInheritedFactory(_PatternValidator)))(__ngFactoryType__ || _PatternValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _PatternValidator,
      selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function PatternValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("pattern", ctx._enabled ? ctx.pattern : null);
        }
      },
      inputs: {
        pattern: "pattern"
      },
      features: [\u0275\u0275ProvidersFeature([PATTERN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatternValidator, [{
    type: Directive,
    args: [{
      selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
      providers: [PATTERN_VALIDATOR],
      host: {
        "[attr.pattern]": "_enabled ? pattern : null"
      }
    }]
  }], null, {
    pattern: [{
      type: Input
    }]
  });
})();
var SHARED_FORM_DIRECTIVES = [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
var \u0275InternalFormsSharedModule = class _\u0275InternalFormsSharedModule {
  static {
    this.\u0275fac = function \u0275InternalFormsSharedModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _\u0275InternalFormsSharedModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _\u0275InternalFormsSharedModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275InternalFormsSharedModule, [{
    type: NgModule,
    args: [{
      declarations: SHARED_FORM_DIRECTIVES,
      exports: SHARED_FORM_DIRECTIVES
    }]
  }], null, null);
})();
var FormArray = class extends AbstractControl {
  /**
   * Creates a new `FormArray` instance.
   *
   * @param controls An array of child controls. Each child control is given an index
   * where it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
      // to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  /**
   * Get the `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to retrieve the control. If `index` is negative, it will wrap
   *     around from the back, and if index is greatly negative (less than `-length`), the result is
   * undefined. This behavior is the same as `Array.at(index)`.
   */
  at(index) {
    return this.controls[this._adjustIndex(index)];
  }
  /**
   * Insert a new `AbstractControl` at the end of the array.
   *
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is added.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  push(control, options = {}) {
    this.controls.push(control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Insert a new `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to insert the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), prepends to the array.
   * This behavior is the same as `Array.splice(index, 0, control)`.
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is inserted.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  insert(index, control, options = {}) {
    this.controls.splice(index, 0, control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Remove the control at the given `index` in the array.
   *
   * @param index Index in the array to remove the control.  If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), removes the first
   *     element. This behavior is the same as `Array.splice(index, 1)`.
   * @param options Specifies whether this FormArray instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeAt(index, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Replace an existing control.
   *
   * @param index Index in the array to replace the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), replaces the first
   *     element. This behavior is the same as `Array.splice(index, 1, control)`.
   * @param control The `AbstractControl` control to replace the existing control
   * @param options Specifies whether this FormArray instance should emit events after an
   *     existing control is replaced with a new one.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * replaced with a new one. When false, no events are emitted.
   */
  setControl(index, control, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    if (control) {
      this.controls.splice(adjustedIndex, 0, control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Length of the control array.
   */
  get length() {
    return this.controls.length;
  }
  /**
   * Sets the value of the `FormArray`. It accepts an array that matches
   * the structure of the control.
   *
   * This method performs strict checks, and throws an error if you try
   * to set the value of a control that doesn't exist or if you exclude the
   * value of a control.
   *
   * @usageNotes
   * ### Set the values for the controls in the form array
   *
   * ```
   * const arr = new FormArray([
   *   new FormControl(),
   *   new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.setValue(['Nancy', 'Drew']);
   * console.log(arr.value);   // ['Nancy', 'Drew']
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, false, value);
    value.forEach((newValue, index) => {
      assertControlPresent(this, false, index);
      this.at(index).setValue(newValue, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormArray`. It accepts an array that matches the
   * structure of the control, and does its best to match the values to the correct
   * controls in the group.
   *
   * It accepts both super-sets and sub-sets of the array without throwing an error.
   *
   * @usageNotes
   * ### Patch the values for controls in a form array
   *
   * ```
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.patchValue(['Nancy']);
   * console.log(arr.value);   // ['Nancy', null]
   * ```
   *
   * @param value Array of latest values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control
   * value is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null) return;
    value.forEach((newValue, index) => {
      if (this.at(index)) {
        this.at(index).patchValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
   * value of all descendants to null or null maps.
   *
   * You reset to a specific form state by passing in an array of states
   * that matches the structure of the control. The state is a standalone value
   * or a form state object with both a value and a disabled status.
   *
   * @usageNotes
   * ### Reset the values in a form array
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * arr.reset(['name', 'last name']);
   *
   * console.log(arr.value);  // ['name', 'last name']
   * ```
   *
   * ### Reset the values in a form array and the disabled status for the first control
   *
   * ```
   * arr.reset([
   *   {value: 'name', disabled: true},
   *   'last'
   * ]);
   *
   * console.log(arr.value);  // ['last']
   * console.log(arr.at(0).status);  // 'DISABLED'
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  reset(value = [], options = {}) {
    this._forEachChild((control, index) => {
      control.reset(value[index], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the array, including any disabled controls.
   *
   * Reports all values regardless of disabled status.
   */
  getRawValue() {
    return this.controls.map((control) => control.getRawValue());
  }
  /**
   * Remove all controls in the `FormArray`.
   *
   * @param options Specifies whether this FormArray instance should emit events after all
   *     controls are removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when all controls
   * in this FormArray instance are removed. When false, no events are emitted.
   *
   * @usageNotes
   * ### Remove all elements from a FormArray
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.length);  // 2
   *
   * arr.clear();
   * console.log(arr.length);  // 0
   * ```
   *
   * It's a simpler and more efficient alternative to removing all elements one by one:
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   *
   * while (arr.length) {
   *    arr.removeAt(0);
   * }
   * ```
   */
  clear(options = {}) {
    if (this.controls.length < 1) return;
    this._forEachChild((control) => control._registerOnCollectionChange(() => {
    }));
    this.controls.splice(0);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Adjusts a negative index by summing it with the length of the array. For very negative
   * indices, the result may remain negative.
   * @internal
   */
  _adjustIndex(index) {
    return index < 0 ? index + this.length : index;
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this.controls.reduce((updated, child) => {
      return child._syncPendingControls() ? true : updated;
    }, false);
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    this.controls.forEach((control, index) => {
      cb(control, index);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
  }
  /** @internal */
  _anyControls(condition) {
    return this.controls.some((control) => control.enabled && condition(control));
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => this._registerControl(control));
  }
  /** @internal */
  _allControlsDisabled() {
    for (const control of this.controls) {
      if (control.enabled) return false;
    }
    return this.controls.length > 0 || this.disabled;
  }
  _registerControl(control) {
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
  }
  /** @internal */
  _find(name) {
    return this.at(name) ?? null;
  }
};
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var FormBuilder = class _FormBuilder {
  constructor() {
    this.useNonNullable = false;
  }
  /**
   * @description
   * Returns a FormBuilder in which automatically constructed `FormControl` elements
   * have `{nonNullable: true}` and are non-nullable.
   *
   * **Constructing non-nullable controls**
   *
   * When constructing a control, it will be non-nullable, and will reset to its initial value.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.control('Alex'); // FormControl<string>
   * name.reset();
   * console.log(name); // 'Alex'
   * ```
   *
   * **Constructing non-nullable groups or arrays**
   *
   * When constructing a group or array, all automatically created inner controls will be
   * non-nullable, and will reset to their initial values.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.group({who: 'Alex'}); // FormGroup<{who: FormControl<string>}>
   * name.reset();
   * console.log(name); // {who: 'Alex'}
   * ```
   * **Constructing *nullable* fields on groups or arrays**
   *
   * It is still possible to have a nullable field. In particular, any `FormControl` which is
   * *already* constructed will not be altered. For example:
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * // FormGroup<{who: FormControl<string|null>}>
   * let name = nnfb.group({who: new FormControl('Alex')});
   * name.reset(); console.log(name); // {who: null}
   * ```
   *
   * Because the inner control is constructed explicitly by the caller, the builder has
   * no control over how it is created, and cannot exclude the `null`.
   */
  get nonNullable() {
    const nnfb = new _FormBuilder();
    nnfb.useNonNullable = true;
    return nnfb;
  }
  group(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    let newOptions = {};
    if (isAbstractControlOptions(options)) {
      newOptions = options;
    } else if (options !== null) {
      newOptions.validators = options.validator;
      newOptions.asyncValidators = options.asyncValidator;
    }
    return new FormGroup(reducedControls, newOptions);
  }
  /**
   * @description
   * Constructs a new `FormRecord` instance. Accepts a single generic argument, which is an object
   * containing all the keys and corresponding inner control types.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param options Configuration options object for the `FormRecord`. The object should have the
   * `AbstractControlOptions` type and might contain the following fields:
   * * `validators`: A synchronous validator function, or an array of validator functions.
   * * `asyncValidators`: A single async validator or array of async validator functions.
   * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur'
   * | submit').
   */
  record(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    return new FormRecord(reducedControls, options);
  }
  /**
   * @description
   * Constructs a new `FormControl` with the given state, validators and options. Sets
   * `{nonNullable: true}` in the options to get a non-nullable control. Otherwise, the
   * control will be nullable. Accepts a single generic argument, which is the type  of the
   * control's value.
   *
   * @param formState Initializes the control with an initial state value, or
   * with an object that contains both a value and a disabled status.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or a `FormControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator
   * functions.
   *
   * @usageNotes
   *
   * ### Initialize a control as disabled
   *
   * The following example returns a control with an initial value in a disabled state.
   *
   * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
   * </code-example>
   */
  control(formState, validatorOrOpts, asyncValidator) {
    let newOptions = {};
    if (!this.useNonNullable) {
      return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    if (isAbstractControlOptions(validatorOrOpts)) {
      newOptions = validatorOrOpts;
    } else {
      newOptions.validators = validatorOrOpts;
      newOptions.asyncValidators = asyncValidator;
    }
    return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), {
      nonNullable: true
    }));
  }
  /**
   * Constructs a new `FormArray` from the given array of configurations,
   * validators and options. Accepts a single generic argument, which is the type of each control
   * inside the array.
   *
   * @param controls An array of child controls or control configs. Each child control is given an
   *     index when it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of such functions, or an
   *     `AbstractControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions.
   */
  array(controls, validatorOrOpts, asyncValidator) {
    const createdControls = controls.map((c) => this._createControl(c));
    return new FormArray(createdControls, validatorOrOpts, asyncValidator);
  }
  /** @internal */
  _reduceControls(controls) {
    const createdControls = {};
    Object.keys(controls).forEach((controlName) => {
      createdControls[controlName] = this._createControl(controls[controlName]);
    });
    return createdControls;
  }
  /** @internal */
  _createControl(controls) {
    if (controls instanceof FormControl) {
      return controls;
    } else if (controls instanceof AbstractControl) {
      return controls;
    } else if (Array.isArray(controls)) {
      const value = controls[0];
      const validator = controls.length > 1 ? controls[1] : null;
      const asyncValidator = controls.length > 2 ? controls[2] : null;
      return this.control(value, validator, asyncValidator);
    } else {
      return this.control(controls);
    }
  }
  static {
    this.\u0275fac = function FormBuilder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormBuilder)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _FormBuilder,
      factory: _FormBuilder.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NonNullableFormBuilder = class _NonNullableFormBuilder {
  static {
    this.\u0275fac = function NonNullableFormBuilder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NonNullableFormBuilder)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NonNullableFormBuilder,
      factory: () => (() => inject(FormBuilder).nonNullable)(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NonNullableFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(FormBuilder).nonNullable
    }]
  }], null, null);
})();
var UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
  group(controlsConfig, options = null) {
    return super.group(controlsConfig, options);
  }
  /**
   * Like `FormBuilder#control`, except the resulting control is untyped.
   */
  control(formState, validatorOrOpts, asyncValidator) {
    return super.control(formState, validatorOrOpts, asyncValidator);
  }
  /**
   * Like `FormBuilder#array`, except the resulting array is untyped.
   */
  array(controlsConfig, validatorOrOpts, asyncValidator) {
    return super.array(controlsConfig, validatorOrOpts, asyncValidator);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275UntypedFormBuilder_BaseFactory;
      return function UntypedFormBuilder_Factory(__ngFactoryType__) {
        return (\u0275UntypedFormBuilder_BaseFactory || (\u0275UntypedFormBuilder_BaseFactory = \u0275\u0275getInheritedFactory(_UntypedFormBuilder)))(__ngFactoryType__ || _UntypedFormBuilder);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _UntypedFormBuilder,
      factory: _UntypedFormBuilder.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UntypedFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var VERSION = new Version("18.2.13");
var FormsModule = class _FormsModule {
  /**
   * @description
   * Provides options for configuring the forms module.
   *
   * @param opts An object of configuration options
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _FormsModule,
      providers: [{
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static {
    this.\u0275fac = function FormsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _FormsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [\u0275InternalFormsSharedModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsModule, [{
    type: NgModule,
    args: [{
      declarations: TEMPLATE_DRIVEN_DIRECTIVES,
      exports: [\u0275InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();
var ReactiveFormsModule = class _ReactiveFormsModule {
  /**
   * @description
   * Provides options for configuring the reactive forms module.
   *
   * @param opts An object of configuration options
   * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
   * binding is used with reactive form directives.
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _ReactiveFormsModule,
      providers: [{
        provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
        useValue: opts.warnOnNgModelWithFormControl ?? "always"
      }, {
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static {
    this.\u0275fac = function ReactiveFormsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReactiveFormsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ReactiveFormsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [\u0275InternalFormsSharedModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveFormsModule, [{
    type: NgModule,
    args: [{
      declarations: [REACTIVE_DRIVEN_DIRECTIVES],
      exports: [\u0275InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();

// src/app/customer/educational/filter.pipe.ts
var FilterPipe = class _FilterPipe {
  transform(items, searchText) {
    if (!items)
      return [];
    if (!searchText)
      return items;
    searchText = searchText.toLowerCase();
    return items.filter((item) => item.title.toLowerCase().includes(searchText) || item.author.toLowerCase().includes(searchText));
  }
  static \u0275fac = function FilterPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FilterPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "filter", type: _FilterPipe, pure: true, standalone: true });
};

// src/app/services/api.service.ts
var ApiService = class _ApiService {
  http;
  baseUrl = "http://127.0.0.1:8000/api";
  // Django API base URL
  selectedBook = null;
  constructor(http) {
    this.http = http;
  }
  // ✅ Save Order
  saveOrder(order) {
    return this.http.post(`${this.baseUrl}/orders/`, order);
  }
  // ✅ Send OTP
  sendOtp(email) {
    return this.http.post(`${this.baseUrl}/send-otp/`, { email });
  }
  // ✅ Verify OTP
  verifyOtp(email, otp) {
    return this.http.post(`${this.baseUrl}/verify-otp/`, { email, otp });
  }
  // ✅ Reset Password
  resetPassword(email, newPassword) {
    return this.http.post(`${this.baseUrl}/reset-password/`, {
      email,
      new_password: newPassword
    });
  }
  // ✅ Store selected book
  setBook(book) {
    this.selectedBook = book;
  }
  // ✅ Get selected book
  getBook() {
    console.log("Book fetched from service:", this.selectedBook);
    return this.selectedBook;
  }
  // ✅ Get all registered users
  getUsers() {
    const headers = {};
    const user = localStorage.getItem("user");
    if (user) {
      try {
        const parsed = JSON.parse(user);
        if (parsed && parsed.role) {
          headers["X-User-Role"] = parsed.role;
        }
      } catch (e) {
      }
    }
    return this.http.get(`http://127.0.0.1:8000/customers/`, {
      headers
    });
  }
  // ✅ Get all orders
  getAllOrders() {
    const headers = {};
    const user = localStorage.getItem("user");
    if (user) {
      try {
        const parsed = JSON.parse(user);
        if (parsed && parsed.role) {
          headers["X-User-Role"] = parsed.role;
        }
      } catch (e) {
      }
    }
    return this.http.get(`${this.baseUrl}/orders/all/`, { headers });
  }
  // ✅ Update order status (calls the backend endpoint)
  updateOrderStatus(orderId, status) {
    const headers = {};
    const user = localStorage.getItem("user");
    if (user) {
      try {
        const parsed = JSON.parse(user);
        if (parsed && parsed.role) {
          headers["X-User-Role"] = parsed.role;
        }
      } catch (e) {
      }
    }
    return this.http.post(`${this.baseUrl}/order/update-status/`, {
      order_id: orderId,
      status
    }, { headers });
  }
  // Update order address
  updateOrderAddress(orderId, address) {
    const headers = {};
    const user = localStorage.getItem("user");
    if (user) {
      try {
        const parsed = JSON.parse(user);
        if (parsed && parsed.role) {
          headers["X-User-Role"] = parsed.role;
        }
      } catch (e) {
      }
    }
    return this.http.post(`${this.baseUrl}/order/update-address/`, {
      order_id: orderId,
      address
    }, { headers });
  }
  static \u0275fac = function ApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApiService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
};

// src/app/services/book-store.service.ts
var BookStoreService = class _BookStoreService {
  store = {
    educational: [],
    fiction: [],
    "non-fiction": [],
    hobbies: [],
    comptative: [],
    children: []
  };
  constructor() {
  }
  addBookToCategory(category, book) {
    const key = this.normalizeCategory(category);
    if (!this.store[key])
      this.store[key] = [];
    if (!book.id)
      book.id = this.store[key].length + 1;
    this.store[key].push(book);
  }
  getBooks(category) {
    const key = this.normalizeCategory(category);
    return this.store[key] || [];
  }
  normalizeCategory(cat) {
    if (!cat)
      return "others";
    return String(cat).toLowerCase().replace(/\s+/g, "-");
  }
  static \u0275fac = function BookStoreService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookStoreService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BookStoreService, factory: _BookStoreService.\u0275fac, providedIn: "root" });
};

// src/app/customer/educational/educational.component.ts
function EducationalComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "img", 9);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 10);
    \u0275\u0275listener("click", function EducationalComponent_div_13_Template_button_click_8_listener() {
      const book_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToShopingPage(book_r2));
    });
    \u0275\u0275text(9, "Buy Now");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const book_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", book_r2.image, \u0275\u0275sanitizeUrl)("alt", book_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Author: ", book_r2.author, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Price: ", book_r2.price, " ", book_r2.currency, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(book_r2.About);
  }
}
var EducationalComponent = class _EducationalComponent {
  router;
  apiService;
  http;
  store;
  apiUrl = "https://127.0.0.1  800:/educational";
  myClassName = "bg-primary";
  searchText = "";
  getBooks() {
    return this.http.get(this.apiUrl);
  }
  addBook(book) {
    return this.http.post(this.apiUrl, book);
  }
  constructor(router, apiService, http, store) {
    this.router = router;
    this.apiService = apiService;
    this.http = http;
    this.store = store;
  }
  ngOnInit() {
    const remote = this.store.getBooks("educational") || [];
    this.books = [...this.books, ...remote];
  }
  goToShopingPage(book) {
    this.apiService.setBook(book);
    this.router.navigate(["customer/home/religious/shoping"]);
  }
  books = [
    {
      title: "Lucent\u2019s General Knowledge",
      author: "Dr. Binay Karna",
      price: 350,
      currency: "Rupees only",
      image: "books/img a.jpg"
    },
    {
      title: "Manorama Yearbook",
      author: "Mammen Mathew",
      price: 350,
      currency: "Rupees only",
      image: "books/img a (2).jpg"
    },
    {
      title: "Quantitative Aptitude",
      author: "R.S. Aggarwal",
      price: 600,
      currency: "Rupees only",
      image: "books/img a (5).jpg"
    },
    {
      title: "Fast Track Objective Arithmetic",
      author: "Rajesh Verma",
      price: 550,
      currency: "Rupees only",
      image: "books/img a (4).jpg"
    },
    {
      title: "Word Power Made Easy",
      author: "Norman Lewis",
      price: 250,
      currency: "Rupees only",
      image: "books/img a (3).jpg"
    },
    {
      title: "High School English Grammar & Composition",
      author: "Wren & Martin",
      price: 300,
      currency: "Rupees only",
      image: "books/img a (1).jpg"
    },
    {
      title: "Concepts of Physics",
      author: "H.C. Verma",
      price: 650,
      currency: "Rupees only",
      image: "books/img a (7).jpg"
    },
    {
      title: "India\u2019s Struggle for Independence",
      author: "Bipan Chandra",
      price: 400,
      currency: "Rupees only",
      image: "books/img a (8).jpg"
    },
    {
      title: "Indian Polity",
      author: "M. Laxmikanth",
      price: 750,
      currency: "Rupees only",
      image: "books/img a (6).jpg"
    }
  ];
  static \u0275fac = function EducationalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EducationalComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(BookStoreService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EducationalComponent, selectors: [["app-educational"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 5, consts: [["rel", "stylesheet", "href", \u0275\u0275trustConstantResourceUrl`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css`, "integrity", "sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==", "crossorigin", "anonymous", "referrerpolicy", "no-referrer"], [1, "cnt"], [1, "search-container"], ["type", "text", "placeholder", "Search books...", 1, "search-box", 3, "ngModelChange", "ngModel"], [1, "search-button"], [1, "fas", "fa-search"], [1, "container"], ["class", "book-card", 4, "ngFor", "ngForOf"], [1, "book-card"], ["height", "300", "width", "250", 3, "src", "alt"], [1, "btn", "btn-buy", 3, "click"]], template: function EducationalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "html")(1, "head");
      \u0275\u0275element(2, "link", 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 1)(4, "div")(5, "header");
      \u0275\u0275text(6, "Store of Academic and Educational Books");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 2)(8, "input", 3);
      \u0275\u0275twoWayListener("ngModelChange", function EducationalComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 4);
      \u0275\u0275element(10, "i", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 6);
      \u0275\u0275element(12, "router-outlet");
      \u0275\u0275template(13, EducationalComponent_div_13_Template, 12, 7, "div", 7);
      \u0275\u0275pipe(14, "filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "footer");
      \u0275\u0275text(16, "\xA9 2025 My Book Store. All rights reserved.");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(14, 2, ctx.books, ctx.searchText));
    }
  }, dependencies: [CommonModule, NgForOf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, FilterPipe, RouterOutlet], styles: ["\n\n*[_ngcontent-%COMP%] {\n  font-family: Arial, sans-serif;\n  margin: 0;\n}\nheader[_ngcontent-%COMP%] {\n  background: #8beb8e, rgb(156, 60, 220);\n  color: white;\n  padding: 15px 0;\n  margin-left: 10px;\n  font-size: 2em;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 20px;\n}\n.book-card[_ngcontent-%COMP%] {\n  background: white;\n  width: auto;\n  height: auto;\n  box-sizing: border-box;\n  margin: 15px;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  padding: 15px;\n  transition: 0.3s;\n}\n.book-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.book-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 250px;\n  object-fit: cover;\n  border-radius: 5px;\n}\n.book-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 10px 0 5px;\n}\n.book-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 14px;\n  margin: 5px 0;\n}\n.book-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #4CAF50;\n  color: white;\n  padding: 8px 12px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  margin-top: 10px;\n  transition: background 0.3s;\n}\n.book-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #45a049;\n}\nfooter[_ngcontent-%COMP%] {\n  background: #333;\n  color: white;\n  text-align: center;\n  padding: 10px;\n  margin-top: 20px;\n}\n.cnt[_ngcontent-%COMP%] {\n  background-color: rgb(43, 52, 74);\n  border-radius: 10px 10px 10px 10px;\n  width: 97%;\n  height: 80px;\n  margin-left: 20px;\n  border: none;\n}\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin-left: 880px;\n  margin-top: -70px;\n}\n.search-box[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 2px solid #007bff;\n  border-radius: 25px 0 0 25px;\n  outline: none;\n  font-size: 16px;\n  width: 250px;\n  transition: 0.3s;\n}\n.search-box[_ngcontent-%COMP%]:focus {\n  border-color: #0056b3;\n  box-shadow: 0 0 8px rgba(0, 123, 255, 0.4);\n}\n.search-button[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  background-color: #007bff;\n  border: 2px solid #007bff;\n  border-left: none;\n  color: white;\n  border-radius: 0 25px 25px 0;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.search-button[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n/*# sourceMappingURL=educational.component.css.map */"] });
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EducationalComponent, factory: _EducationalComponent.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EducationalComponent, { className: "EducationalComponent", filePath: "src\\app\\customer\\educational\\educational.component.ts", lineNumber: 22 });
})();

// src/app/services/book-image.service.ts
var BookImageService = class _BookImageService {
  // Map normalized title -> image path inside `public/books/` (or relative path used across app)
  map = {
    "bhagavad gita": "books/img (40).jpg",
    ramayana: "books/img (41).jpg",
    mahabharata: "books/img (42).jpg",
    upanishads: "books/img (43).jpg",
    "bhagavata purana": "books/img (44).jpg",
    "yoga sutras of patanjali": "books/img (45).jpg",
    "ramcharit-manas": "books/img (46).jpg",
    "shiva purana": "books/img (47).jpg",
    "bhakti sagar": "books/img (48).jpg",
    "gita press publications collection": "books/img (39).jpg"
    // Add additional mappings here as needed for other categories
  };
  constructor() {
  }
  normalize(title) {
    if (!title)
      return "";
    return title.trim().toLowerCase();
  }
  getImageForTitle(title) {
    const key = this.normalize(title);
    if (!key)
      return "";
    if (this.map[key])
      return this.map[key];
    for (const k of Object.keys(this.map)) {
      if (key.includes(k))
        return this.map[k];
    }
    return "";
  }
  static \u0275fac = function BookImageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookImageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BookImageService, factory: _BookImageService.\u0275fac, providedIn: "root" });
};

// src/app/customer/shoping-page/shoping-page.component.ts
function ShopingPageComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "img", 4);
    \u0275\u0275elementStart(2, "p")(3, "strong");
    \u0275\u0275text(4, "Items in Cart:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p")(12, "strong");
    \u0275\u0275text(13, "Total:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275element(15, "span", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 6)(17, "div")(18, "button", 7);
    \u0275\u0275listener("click", function ShopingPageComponent_div_4_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.count = ctx_r1.count - 1);
    });
    \u0275\u0275text(19, "Min Cart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 8);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 9);
    \u0275\u0275listener("click", function ShopingPageComponent_div_4_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addCart());
    });
    \u0275\u0275text(23, "+add Cart ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "button", 10);
    \u0275\u0275listener("click", function ShopingPageComponent_div_4_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.OrderPage());
    });
    \u0275\u0275text(25, "Order Now ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("alt", ctx_r1.book.title);
    \u0275\u0275property("src", ctx_r1.book.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.book.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Author: ", ctx_r1.book.author, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Price: ", ctx_r1.book.price, " ", ctx_r1.book.currency, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" \u20B9 ", ctx_r1.book.price * ctx_r1.count, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.count <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.count);
  }
}
var ShopingPageComponent = class _ShopingPageComponent {
  router;
  apiService;
  bookImage;
  book;
  count = 1;
  constructor(router, apiService, bookImage) {
    this.router = router;
    this.apiService = apiService;
    this.bookImage = bookImage;
  }
  ngOnInit() {
    this.book = this.apiService.getBook();
    if (!this.book) {
      this.book = {
        title: "No Book selected",
        author: "",
        price: 0,
        currency: "",
        image: ""
      };
    }
    if (!this.book.image || this.book.image.trim() === "") {
      const img = this.bookImage.getImageForTitle(this.book.title);
      if (img)
        this.book.image = img;
    }
  }
  addCart() {
    this.count += 1;
  }
  OrderPage() {
    this.router.navigate(["customer/home/religious/shoping/order"]);
  }
  static \u0275fac = function ShopingPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShopingPageComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(BookImageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShopingPageComponent, selectors: [["app-shoping-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [[1, "body"], ["id", "products", 1, "products"], ["class", "cart", "id", "cart", 4, "ngIf"], ["id", "cart", 1, "cart"], [3, "src", "alt"], ["id", "cart-total"], [1, "checkout"], [1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "value"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-primary", 3, "click"]], template: function ShopingPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1");
      \u0275\u0275text(2, "My Shop");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "div", 1);
      \u0275\u0275template(4, ShopingPageComponent_div_4_Template, 26, 9, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.book);
    }
  }, dependencies: [CommonModule, NgIf], styles: ['\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-family: "Segoe UI", sans-serif;\n  color: #333;\n}\n.body[_ngcontent-%COMP%] {\n  padding: 20px;\n  position: relative;\n}\n.body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  color: #2c3e50;\n  margin-bottom: 30px;\n}\n.body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n  color: #555;\n}\n.products[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 20px;\n  flex: 1;\n  padding-right: 300px;\n}\n.product-card[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 15px;\n  border-radius: 10px;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\n.cart[_ngcontent-%COMP%] {\n  margin: auto;\n  top: 80px;\n  right: 20px;\n  width: 60%;\n  background-color: #ffffff;\n  border: 1px solid #ddd;\n  border-radius: 10px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n  z-index: 1000;\n}\n.cart[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  display: block;\n  margin: 0 auto 10px;\n}\n.cart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 10px;\n  text-align: center;\n}\n#cart-items[_ngcontent-%COMP%] {\n  max-height: 150px;\n  overflow-y: auto;\n  margin-bottom: 10px;\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  background-color: #fafafa;\n}\n.checkout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 10px;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  border: none;\n  border-radius: 5px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #3498db;\n  color: #fff;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #2980b9;\n}\n.checkout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n  padding: 20px;\n  border: 0px solid #ddd;\n  border-radius: 10px;\n  max-width: 400px;\n  margin: 20px auto;\n  background-color: #f9f9f9;\n}\n.checkout[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.value[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50px;\n  text-align: center;\n  font-weight: bold;\n  font-size: 18px;\n  padding: 5px 0;\n  border: 2px solid #4CAF50;\n  border-radius: 5px;\n  background-color: #f0f0f0;\n  color: #333;\n  transition: all 0.2s ease;\n}\n.checkout[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  border: 2px solid #4CAF50 !important;\n  background-color: #f0f0f0 !important;\n}\n.value[_ngcontent-%COMP%]:hover {\n  background-color: #e0e0e0;\n  border-color: #45a049;\n}\nbutton.btn[_ngcontent-%COMP%] {\n  padding: 8px 15px;\n  font-size: 16px;\n  border-radius: 5px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  color: white;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #5a6268;\n}\n.btn-success[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  color: white;\n}\n.btn-success[_ngcontent-%COMP%]:hover {\n  background-color: #218838;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: white;\n  width: 100%;\n  padding: 10px 0;\n  font-weight: bold;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #0069d9;\n}\n/*# sourceMappingURL=shoping-page.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShopingPageComponent, { className: "ShopingPageComponent", filePath: "src\\app\\customer\\shoping-page\\shoping-page.component.ts", lineNumber: 14 });
})();

// src/app/customer/order-page/order-page.component.ts
var OrderPageComponent = class _OrderPageComponent {
  router;
  apiService;
  bookImage;
  // ✅ Declare book properly
  book = null;
  // ✅ Initialize order with nested book object
  order = {
    book: {
      title: "",
      author: "",
      price: 0
    },
    customer_name: "",
    email: "",
    address: "",
    state: "",
    district: "",
    pin: "",
    landmark: "",
    phone: ""
  };
  constructor(router, apiService, bookImage) {
    this.router = router;
    this.apiService = apiService;
    this.bookImage = bookImage;
  }
  ngOnInit() {
    this.book = this.apiService.getBook();
    if (this.book) {
      this.order.book = {
        title: this.book.title,
        author: this.book.author,
        price: this.book.price
      };
      const img = this.book.image || this.bookImage.getImageForTitle(this.book.title);
      if (img)
        this.order.book.image = img;
    }
    console.log("Order initialized:", this.order);
  }
  placeOrder() {
    console.log("Sending order:", this.order);
    this.apiService.saveOrder(this.order).subscribe({
      next: (res) => {
        alert("\u2705 Saved your order and make your payment!");
        if (res.success) {
          this.router.navigate([
            "customer/home/educational/shoping/order/payment/"
          ]);
        }
      },
      error: (err) => {
        console.error("\u274C Failed to place order:", err);
        alert("\u274C Failed to place order!");
      }
    });
  }
  static \u0275fac = function OrderPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderPageComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(BookImageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderPageComponent, selectors: [["app-order-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 55, vars: 12, consts: [[1, "order-container"], [1, "order-details"], ["alt", "Book", 1, "order-image", 3, "src"], [1, "order-info"], [1, "order-form", 3, "ngSubmit"], [1, "form-group"], ["for", "customer_name"], ["type", "text", "id", "customer_name", "name", "customer_name", "required", "", 3, "ngModelChange", "ngModel"], ["type", "text", "id", "email", "name", "email", "required", "", 3, "ngModelChange", "ngModel"], ["for", "address"], ["type", "text", "id", "address", "name", "address", "required", "", 3, "ngModelChange", "ngModel"], ["for", "state"], ["type", "text", "id", "state", "name", "state", "required", "", 3, "ngModelChange", "ngModel"], ["for", "district"], ["type", "text", "id", "district", "name", "district", "required", "", 3, "ngModelChange", "ngModel"], ["for", "pin"], ["type", "text", "id", "pin", "name", "pin", "required", "", 3, "ngModelChange", "ngModel"], ["for", "landmark"], ["type", "text", "id", "landmark", "name", "landmark", 3, "ngModelChange", "ngModel"], ["for", "phone"], ["type", "tel", "id", "phone", "name", "phone", "required", "", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "order-btn"]], template: function OrderPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2");
      \u0275\u0275text(2, "Order Summary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 1);
      \u0275\u0275element(4, "img", 2);
      \u0275\u0275elementStart(5, "div", 3)(6, "p")(7, "strong");
      \u0275\u0275text(8, "Book:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p")(11, "strong");
      \u0275\u0275text(12, "Author:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p")(15, "strong");
      \u0275\u0275text(16, "Price:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(18, "form", 4);
      \u0275\u0275listener("ngSubmit", function OrderPageComponent_Template_form_ngSubmit_18_listener() {
        return ctx.placeOrder();
      });
      \u0275\u0275elementStart(19, "h2");
      \u0275\u0275text(20, "Shipping Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 5)(22, "label", 6);
      \u0275\u0275text(23, "Name:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function OrderPageComponent_Template_input_ngModelChange_24_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.order.customer_name, $event) || (ctx.order.customer_name = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 5)(26, "label", 6);
      \u0275\u0275text(27, "Email:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function OrderPageComponent_Template_input_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.order.email, $event) || (ctx.order.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 5)(30, "label", 9);
      \u0275\u0275text(31, "Address:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function OrderPageComponent_Template_input_ngModelChange_32_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.order.address, $event) || (ctx.order.address = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 5)(34, "label", 11);
      \u0275\u0275text(35, "State:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function OrderPageComponent_Template_input_ngModelChange_36_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.order.state, $event) || (ctx.order.state = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 5)(38, "label", 13);
      \u0275\u0275text(39, "District:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function OrderPageComponent_Template_input_ngModelChange_40_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.order.district, $event) || (ctx.order.district = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 5)(42, "label", 15);
      \u0275\u0275text(43, "Pin Code:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function OrderPageComponent_Template_input_ngModelChange_44_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.order.pin, $event) || (ctx.order.pin = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 5)(46, "label", 17);
      \u0275\u0275text(47, "Landmark:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function OrderPageComponent_Template_input_ngModelChange_48_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.order.landmark, $event) || (ctx.order.landmark = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 5)(50, "label", 19);
      \u0275\u0275text(51, "Phone:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function OrderPageComponent_Template_input_ngModelChange_52_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.order.phone, $event) || (ctx.order.phone = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "button", 21);
      \u0275\u0275text(54, "Place Order");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("src", ctx.book == null ? null : ctx.book.image, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.book == null ? null : ctx.book.title, "");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.book == null ? null : ctx.book.author, "");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.book == null ? null : ctx.book.price, " \u20B9");
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.order.customer_name);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.order.email);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.order.address);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.order.state);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.order.district);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.order.pin);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.order.landmark);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.order.phone);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ['\n\nbody[_ngcontent-%COMP%] {\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  background: #f4f7f8;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  padding-top: 50px;\n}\n.order-container[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 30px 40px;\n  margin: auto;\n  border-radius: 12px;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 700px;\n  box-sizing: border-box;\n}\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #333;\n  margin-bottom: 25px;\n}\n.order-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n  gap: 20px;\n}\n.order-image[_ngcontent-%COMP%] {\n  width: 120px;\n  height: auto;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\nbody[_ngcontent-%COMP%] {\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  background: #f1f5f9;\n  padding: 20px;\n  display: flex;\n  justify-content: center;\n}\n.order-form[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 30px 40px;\n  border-radius: 12px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 500px;\n  margin: auto;\n  margin-top: 20px;\n}\n.order-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.order-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  color: #333;\n}\n.order-form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], \n.order-form[_ngcontent-%COMP%]   input[type=tel][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  font-size: 15px;\n  transition: border-color 0.3s, box-shadow 0.3s;\n}\n.order-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #4f46e5;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);\n  outline: none;\n}\n.order-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 0;\n  background: #4f46e5;\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.3s ease;\n}\n.order-btn[_ngcontent-%COMP%]:hover {\n  background: #4338ca;\n}\n/*# sourceMappingURL=order-page.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderPageComponent, { className: "OrderPageComponent", filePath: "src\\app\\customer\\order-page\\order-page.component.ts", lineNumber: 17 });
})();

// src/app/customer/payment-page/selling-page.component.ts
function SellingPageComponent_div_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "button", 10);
    \u0275\u0275listener("click", function SellingPageComponent_div_11_div_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.pay());
    });
    \u0275\u0275text(2, "Pay");
    \u0275\u0275elementEnd()();
  }
}
function SellingPageComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "label")(2, "input", 7);
    \u0275\u0275listener("change", function SellingPageComponent_div_11_Template_input_change_2_listener() {
      const option_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onpaymentOptionChange(option_r2));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SellingPageComponent_div_11_div_4_Template, 3, 0, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("value", option_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r2, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedOption === option_r2);
  }
}
var SellingPageComponent = class _SellingPageComponent {
  router;
  paymentOption = [
    "Credit Card",
    "Debit Card",
    "UPI",
    "Bank Transfer",
    "Cash on Delivery"
  ];
  selectedOption = null;
  onpaymentOptionChange(option) {
    this.selectedOption = option;
  }
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
  }
  pay() {
    this.router.navigate(["customer/home/educational/shoping/order/payment/bank-detail"]);
  }
  static \u0275fac = function SellingPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SellingPageComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SellingPageComponent, selectors: [["app-selling-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 1, consts: [[1, "body"], [1, "container"], [1, "header"], [1, "secure"], [1, "amount"], ["class", "section other-methods", 4, "ngFor", "ngForOf"], [1, "section", "other-methods"], ["type", "radio", "name", "payment", 3, "change", "value"], ["class", "pay-btn", 4, "ngIf"], [1, "pay-btn"], [3, "click"]], template: function SellingPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
      \u0275\u0275text(4, "Payments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 3);
      \u0275\u0275text(6, "100% Secure");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "span");
      \u0275\u0275text(9, "Total Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "strong");
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, SellingPageComponent_div_11_Template, 5, 3, "div", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.paymentOption);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ['\n\n.body[_ngcontent-%COMP%] {\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  padding: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n}\n.container[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 12px;\n  padding: 2rem;\n  max-width: 500px;\n  width: 100%;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 2px solid #f0f0f0;\n  padding-bottom: 1rem;\n  margin-bottom: 1.5rem;\n}\n.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.8rem;\n  color: #333;\n}\n.secure[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #28a745;\n  background-color: #e6f9ec;\n  padding: 0.3rem 0.6rem;\n  border-radius: 5px;\n  font-weight: bold;\n}\n.amount[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n  font-size: 1.2rem;\n  color: #444;\n}\n.amount[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: #111;\n}\n.section.other-methods[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  padding: 1rem;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  background-color: #fafafa;\n  transition: background-color 0.3s ease;\n}\n.section.other-methods[_ngcontent-%COMP%]:hover {\n  background-color: #f1f1f1;\n}\n.section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 1.1rem;\n  color: #333;\n  cursor: pointer;\n}\ninput[type=radio][_ngcontent-%COMP%] {\n  margin-right: 10px;\n  accent-color: #007bff;\n}\n.pay-btn[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  text-align: right;\n}\n.pay-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  padding: 0.6rem 1.4rem;\n  border-radius: 6px;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n.pay-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n/*# sourceMappingURL=selling-page.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SellingPageComponent, { className: "SellingPageComponent", filePath: "src\\app\\customer\\payment-page\\selling-page.component.ts", lineNumber: 12 });
})();

// src/app/customer/bank-detail/bank-detail.component.ts
function BankDetailComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function BankDetailComponent_div_16_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.upiId, $event) || (ctx_r1.upiId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 19);
    \u0275\u0275listener("click", function BankDetailComponent_div_16_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.payWithUPI());
    });
    \u0275\u0275text(3, "Pay via UPI");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.upiId);
  }
}
function BankDetailComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 19);
    \u0275\u0275listener("click", function BankDetailComponent_div_21_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.payWithRazorpay());
    });
    \u0275\u0275text(2, "Pay with Razorpay");
    \u0275\u0275elementEnd()();
  }
}
function BankDetailComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function BankDetailComponent_div_26_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.accountNumber, $event) || (ctx_r1.accountNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function BankDetailComponent_div_26_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.ifscCode, $event) || (ctx_r1.ifscCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 19);
    \u0275\u0275listener("click", function BankDetailComponent_div_26_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.payWithBank());
    });
    \u0275\u0275text(4, "Pay via Bank Transfer");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.accountNumber);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.ifscCode);
  }
}
function BankDetailComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function BankDetailComponent_div_31_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.cardNumber, $event) || (ctx_r1.cardNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function BankDetailComponent_div_31_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.expiry, $event) || (ctx_r1.expiry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function BankDetailComponent_div_31_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.cvv, $event) || (ctx_r1.cvv = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 19);
    \u0275\u0275listener("click", function BankDetailComponent_div_31_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.payWithCard());
    });
    \u0275\u0275text(5, "Pay via Card");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.cardNumber);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.expiry);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.cvv);
  }
}
function BankDetailComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "p");
    \u0275\u0275text(2, " You will pay ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " in cash at the time of delivery. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 19);
    \u0275\u0275listener("click", function BankDetailComponent_div_36_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.payWithCOD());
    });
    \u0275\u0275text(7, "Confirm COD Order");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u20B9", (ctx_r1.book == null ? null : ctx_r1.book.price) || "0.00", "");
  }
}
function BankDetailComponent_p_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.result);
  }
}
var BankDetailComponent = class _BankDetailComponent {
  http;
  router;
  apiService;
  amount = 500;
  // Example fixed amount
  selectedOption = "";
  result = "";
  upiId = "";
  accountNumber = "";
  ifscCode = "";
  cardNumber = "";
  expiry = "";
  cvv = "";
  book = null;
  paymentSuccess = false;
  paymentId = "";
  constructor(http, router, apiService) {
    this.http = http;
    this.router = router;
    this.apiService = apiService;
  }
  ngOnInit() {
    this.book = this.apiService.getBook();
    if (!this.book) {
      this.book = {
        title: "No Book selected",
        author: "",
        price: 0,
        currency: "",
        image: ""
      };
    }
  }
  onpaymentOptionChange(option) {
    this.selectedOption = option;
    this.result = "";
  }
  payWithRazorpay() {
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID",
      // Replace with your Razorpay key
      amount: this.amount * 100,
      // Amount in paise
      currency: "INR",
      name: "BookDepot",
      description: "Order Payment",
      handler: (response) => {
        this.paymentSuccess = true;
        this.paymentId = response.razorpay_payment_id;
        this.http.post("http://localhost:8000/api/payment/transfer/", {
          payment_id: this.paymentId,
          amount: this.amount
        }).subscribe(() => {
          alert("Payment successful and transferred to bank!");
          this.router.navigate(["customer/payment-confirm"]);
        });
      },
      prefill: {
        name: "",
        email: "",
        contact: ""
      },
      theme: {
        color: "#007bff"
      }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  }
  payWithCOD() {
    alert(`\u2705 Thank you! Order Confirmed. Pay \u20B9${this.book?.price || "0.00"} in cash at delivery.`);
    this.router.navigate(["customer/home"]);
  }
  payWithUPI() {
    if (!this.upiId) {
      this.result = "\u274C Enter UPI ID!";
      return;
    }
    const payload = { amount: this.amount, method: "UPI", upiId: this.upiId };
    this.http.post("http://localhost:8000/pay/", payload).subscribe({
      next: (res) => {
        this.result = `\u2705 Payment Successful via UPI (${this.upiId})`;
        this.router.navigate(["customer/payment-confirm"]);
      },
      error: () => this.result = "\u274C Payment Failed"
    });
  }
  payWithBank() {
    if (!this.accountNumber || !this.ifscCode) {
      this.result = "\u274C Enter Account Number and IFSC!";
      return;
    }
    const payload = {
      amount: this.amount,
      method: "Bank Transfer",
      accountNumber: this.accountNumber,
      ifsc: this.ifscCode
    };
    this.http.post("http://localhost:8000/pay/", payload).subscribe({
      next: (res) => {
        this.result = `\u2705 Payment Successful via Bank Transfer (${this.accountNumber})`;
        this.router.navigate(["customer/payment-confirm"]);
      },
      error: () => this.result = "\u274C Payment Failed"
    });
  }
  payWithCard() {
    if (!this.cardNumber || !this.expiry || !this.cvv) {
      this.result = "\u274C Enter complete card details!";
      return;
    }
    const payload = {
      amount: this.amount,
      method: "Card",
      cardNumber: this.cardNumber,
      expiry: this.expiry
    };
    this.http.post("http://localhost:8000/pay/", payload).subscribe({
      next: (res) => {
        this.result = `\u2705 Payment Successful via Card (${this.cardNumber.slice(-4)})`;
        this.router.navigate(["customer/payment-confirm"]);
      },
      error: () => this.result = "\u274C Payment Failed"
    });
  }
  static \u0275fac = function BankDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BankDetailComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BankDetailComponent, selectors: [["app-bank-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 38, vars: 7, consts: [[1, "body"], [1, "container"], [1, "header"], [1, "secure"], [1, "amount"], [1, "section", "other-methods"], ["type", "radio", "name", "payment", "value", "UPI", 3, "change"], ["class", "upi-section", 4, "ngIf"], ["type", "radio", "name", "payment", "value", "Razorpay", 3, "change"], ["class", "razorpay-section", 4, "ngIf"], ["type", "radio", "name", "payment", "value", "Bank Transfer", 3, "change"], ["class", "bank-section", 4, "ngIf"], ["type", "radio", "name", "payment", "value", "Card", 3, "change"], ["class", "card-section", 4, "ngIf"], ["type", "radio", "name", "payment", "value", "COD", 3, "change"], ["class", "cod-section", 4, "ngIf"], [4, "ngIf"], [1, "upi-section"], ["type", "text", "placeholder", "Enter UPI ID (e.g. name@upi)", 3, "ngModelChange", "ngModel"], [3, "click"], [1, "razorpay-section"], [1, "bank-section"], ["type", "text", "placeholder", "Account Number", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "IFSC Code", 3, "ngModelChange", "ngModel"], [1, "card-section"], ["type", "text", "placeholder", "Card Number", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Expiry Date (MM/YY)", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "CVV", 3, "ngModelChange", "ngModel"], [1, "cod-section"]], template: function BankDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
      \u0275\u0275text(4, "Payments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 3);
      \u0275\u0275text(6, "100% Secure");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "span");
      \u0275\u0275text(9, "Total Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "strong");
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 5)(13, "label")(14, "input", 6);
      \u0275\u0275listener("change", function BankDetailComponent_Template_input_change_14_listener() {
        return ctx.onpaymentOptionChange("UPI");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " UPI ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, BankDetailComponent_div_16_Template, 4, 1, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 5)(18, "label")(19, "input", 8);
      \u0275\u0275listener("change", function BankDetailComponent_Template_input_change_19_listener() {
        return ctx.onpaymentOptionChange("Razorpay");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, " Razorpay (Recommended) ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, BankDetailComponent_div_21_Template, 3, 0, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 5)(23, "label")(24, "input", 10);
      \u0275\u0275listener("change", function BankDetailComponent_Template_input_change_24_listener() {
        return ctx.onpaymentOptionChange("Bank Transfer");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(25, " Bank Transfer (Net Banking) ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(26, BankDetailComponent_div_26_Template, 5, 2, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 5)(28, "label")(29, "input", 12);
      \u0275\u0275listener("change", function BankDetailComponent_Template_input_change_29_listener() {
        return ctx.onpaymentOptionChange("Card");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(30, " Debit/Credit Card ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(31, BankDetailComponent_div_31_Template, 6, 3, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 5)(33, "label")(34, "input", 14);
      \u0275\u0275listener("change", function BankDetailComponent_Template_input_change_34_listener() {
        return ctx.onpaymentOptionChange("COD");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(35, " Cash on Delivery (COD) ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(36, BankDetailComponent_div_36_Template, 8, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275template(37, BankDetailComponent_p_37_Template, 2, 1, "p", 16);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate1("\u20B9", (ctx.book == null ? null : ctx.book.price) || "0.00", "");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.selectedOption === "UPI");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.selectedOption === "Razorpay");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.selectedOption === "Bank Transfer");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.selectedOption === "Card");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.selectedOption === "COD");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.result);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.body[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.container[_ngcontent-%COMP%] {\n  width: 420px;\n  background: #fff;\n  padding: 25px;\n  border-radius: 18px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);\n  transition: 0.3s ease;\n}\n.container[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 25px;\n}\n.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #333;\n}\n.secure[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #28a745;\n}\n.amount[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 25px;\n}\n.amount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.95rem;\n  color: #666;\n}\n.amount[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  color: #111;\n}\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding: 15px;\n  border: 2px solid #e2e6ea;\n  border-radius: 12px;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.section[_ngcontent-%COMP%]:hover {\n  border-color: #007bff;\n  background: #f0f8ff;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n  color: #222;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n}\ninput[type=radio][_ngcontent-%COMP%] {\n  transform: scale(1.2);\n  accent-color: #007bff;\n}\n.section[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  margin: 8px 0;\n  border: 1.5px solid #ccc;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  transition: border-color 0.2s ease-in-out;\n}\n.section[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus {\n  border-color: #007bff;\n  outline: none;\n  box-shadow: 0 0 6px rgba(0, 123, 255, 0.3);\n}\n.section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #007bff,\n      #00c6ff);\n  border: none;\n  border-radius: 25px;\n  color: #fff;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #0056b3,\n      #0090cc);\n  transform: scale(1.03);\n}\np[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  text-align: center;\n  font-weight: 500;\n  color: #333;\n}\n/*# sourceMappingURL=bank-detail.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BankDetailComponent, { className: "BankDetailComponent", filePath: "src\\app\\customer\\bank-detail\\bank-detail.component.ts", lineNumber: 15 });
})();

// src/app/customer/payment-cinfrm/payment-cinfrm.component.ts
var PaymentCinfrmComponent = class _PaymentCinfrmComponent {
  router;
  constructor(router) {
    this.router = router;
  }
  goToOrders() {
    this.router.navigate(["/trackOrder"]);
  }
  goToShop() {
    this.router.navigate(["customer/home"]);
  }
  static \u0275fac = function PaymentCinfrmComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaymentCinfrmComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentCinfrmComponent, selectors: [["app-payment-cinfrm"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 0, consts: [[1, "success-body"], [1, "card", "success"], [1, "icon"], [3, "click"]], template: function PaymentCinfrmComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3, "\u2714");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h2");
      \u0275\u0275text(5, "Payment Successful");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Your order has been confirmed. Thank you for shopping with us!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 3);
      \u0275\u0275listener("click", function PaymentCinfrmComponent_Template_button_click_8_listener() {
        return ctx.goToOrders();
      });
      \u0275\u0275text(9, "View My Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 3);
      \u0275\u0275listener("click", function PaymentCinfrmComponent_Template_button_click_10_listener() {
        return ctx.goToShop();
      });
      \u0275\u0275text(11, "Continue Shopping");
      \u0275\u0275elementEnd()()();
    }
  }, styles: ['\n\n.success-body[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 90vh;\n  background:\n    linear-gradient(\n      135deg,\n      #e0f7e9,\n      #b2f0d5);\n  font-family: "Segoe UI", sans-serif;\n}\n.card.success[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #fff;\n  padding: 35px;\n  border-radius: 20px;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: #28a745;\n  margin-bottom: 15px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #28a745;\n  margin-bottom: 10px;\n}\np[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 20px;\n  color: #444;\n}\nbutton[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  margin: 5px;\n  border: none;\n  border-radius: 25px;\n  font-size: 0.95rem;\n  cursor: pointer;\n  background: #28a745;\n  color: white;\n  transition: 0.3s;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background: #218838;\n}\n/*# sourceMappingURL=payment-cinfrm.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentCinfrmComponent, { className: "PaymentCinfrmComponent", filePath: "src\\app\\customer\\payment-cinfrm\\payment-cinfrm.component.ts", lineNumber: 10 });
})();

// src/app/customer/fiction/fiction.component.ts
function FictionComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "img", 9);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 10);
    \u0275\u0275listener("click", function FictionComponent_div_12_Template_button_click_8_listener() {
      const book_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToShopingPage(book_r2));
    });
    \u0275\u0275text(9, "Buy Now");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const book_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", book_r2.image, \u0275\u0275sanitizeUrl)("alt", book_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Author: ", book_r2.author, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Price: ", book_r2.price, " ", book_r2.currency, "");
  }
}
var FictionComponent = class _FictionComponent {
  router;
  apiService;
  store;
  searchText = "";
  books = [
    {
      title: "Gitanjali",
      author: "Rabindranath Tagore",
      price: 199,
      currency: "Rupees only",
      image: "books/img (2.1).jpg"
    },
    {
      title: "Malgudi Days",
      author: "R.K. Narayan",
      price: 250,
      currency: "Rupees only",
      image: "books/img (01).jpg"
    },
    {
      title: "Untouchable",
      author: "Mulk Raj Anand",
      price: 220,
      currency: "Rupees only",
      image: "books/img (3).jpg"
    },
    {
      title: "Train to Pakistan",
      author: "Khushwant Singh",
      price: 300,
      currency: "Rupees only",
      image: "books/img (4).jpeg"
    },
    {
      title: "The God of Small Things",
      author: "Arundhati Roy",
      price: 350,
      currency: "Rupees only",
      image: "books/img (5).jpg"
    },
    {
      title: "Midnight\u2019s Children",
      author: "Salman Rushdie",
      price: 450,
      currency: "Rupees only",
      image: "books/img (6).jpg"
    },
    {
      title: "A Suitable Boy",
      author: "Vikram Seth",
      price: 499,
      currency: "Rupees only",
      image: "books/img (7).jpg"
    },
    {
      title: "The Room on the Roof",
      author: "Ruskin Bond",
      price: 200,
      currency: "Rupees only",
      image: "books/img (8).jpg"
    },
    {
      title: "The Inheritance of Loss",
      author: "Kiran Desai",
      price: 320,
      currency: "Rupees only",
      image: "books/img (9).jpg"
    },
    {
      title: "The Shadow Lines",
      author: "Amitav Ghosh",
      price: 280,
      currency: "Rupees only",
      image: "books/img (10).jpg"
    }
  ];
  constructor(router, apiService, store) {
    this.router = router;
    this.apiService = apiService;
    this.store = store;
  }
  ngOnInit() {
    const remote = this.store.getBooks("fiction") || [];
    this.books = [...this.books, ...remote];
  }
  goToShopingPage(book) {
    this.apiService.setBook(book);
    this.router.navigate(["customer/home/religious/shoping"]);
  }
  static \u0275fac = function FictionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FictionComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(BookStoreService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FictionComponent, selectors: [["app-fiction"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 5, consts: [["rel", "stylesheet", "href", \u0275\u0275trustConstantResourceUrl`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css`, "integrity", "sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==", "crossorigin", "anonymous", "referrerpolicy", "no-referrer"], [1, "cnt"], [1, "search-container"], ["type", "text", "placeholder", "Search books...", 1, "search-box", 3, "ngModelChange", "ngModel"], [1, "search-button"], [1, "fas", "fa-search"], [1, "container"], ["class", "book-card", 4, "ngFor", "ngForOf"], [1, "book-card"], ["height", "300", "width", "250", 3, "src", "alt"], [1, "btn", "btn-buy", 3, "click"]], template: function FictionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "head");
      \u0275\u0275element(1, "link", 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 1)(3, "div")(4, "header");
      \u0275\u0275text(5, "Store of Litreture and fiction Books");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 2)(7, "input", 3);
      \u0275\u0275twoWayListener("ngModelChange", function FictionComponent_Template_input_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 4);
      \u0275\u0275element(9, "i", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 6);
      \u0275\u0275element(11, "router-outlet");
      \u0275\u0275template(12, FictionComponent_div_12_Template, 10, 6, "div", 7);
      \u0275\u0275pipe(13, "filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "footer");
      \u0275\u0275text(15, "\xA9 2025 My Book Store. All rights reserved.");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(13, 2, ctx.books, ctx.searchText));
    }
  }, dependencies: [RouterOutlet, CommonModule, NgForOf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, FilterPipe], styles: ["\n\n*[_ngcontent-%COMP%] {\n  font-family: Arial, sans-serif;\n  margin: 0;\n}\nheader[_ngcontent-%COMP%] {\n  background: #8beb8e, rgb(156, 60, 220);\n  color: white;\n  padding: 15px 0;\n  margin-left: 10px;\n  font-size: 2em;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 20px;\n}\n.book-card[_ngcontent-%COMP%] {\n  background: white;\n  width: auto;\n  height: auto;\n  box-sizing: border-box;\n  margin: 15px;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  padding: 25px;\n  transition: 0.3s;\n}\n.book-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.book-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 250px;\n  object-fit: cover;\n  border-radius: 5px;\n}\n.book-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 10px 0 5px;\n}\n.book-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 14px;\n  margin: 5px 0;\n}\n.book-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #4CAF50;\n  color: white;\n  padding: 8px 12px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  margin-top: 10px;\n  transition: background 0.3s;\n}\n.book-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #45a049;\n}\nfooter[_ngcontent-%COMP%] {\n  background: #333;\n  color: white;\n  text-align: center;\n  padding: 10px;\n  margin-top: 20px;\n}\n.cnt[_ngcontent-%COMP%] {\n  background-color: rgb(43, 52, 74);\n  border-radius: 10px 10px 10px 10px;\n  width: 97%;\n  height: 80px;\n  margin-left: 20px;\n  border: none;\n}\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin-left: 880px;\n  margin-top: -70px;\n}\n.search-box[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 2px solid #007bff;\n  border-radius: 25px 0 0 25px;\n  outline: none;\n  font-size: 16px;\n  width: 250px;\n  transition: 0.3s;\n}\n.search-box[_ngcontent-%COMP%]:focus {\n  border-color: #0056b3;\n  box-shadow: 0 0 8px rgba(0, 123, 255, 0.4);\n}\n.search-button[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  background-color: #007bff;\n  border: 2px solid #007bff;\n  border-left: none;\n  color: white;\n  border-radius: 0 25px 25px 0;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.search-button[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n.features[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(1) {\n  background-image: url(/image/educational.jpg);\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n}\n.features[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(2) {\n  background-image: url(/image/fiction.jpg);\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n}\n.features[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(3) {\n  background-image: url(/image/educational.jpg);\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n}\n.features[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(4) {\n  background-image: url(/image/religious.jpg);\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n}\n.features[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(5) {\n  background-image: url(/image/competitive.jpg);\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n}\n.features[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(6) {\n  background-image: url(/image/children.jpg);\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n}\n.features[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(7) {\n  background-image: url(/image/hobbies.jpg);\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n}\n/*# sourceMappingURL=fiction.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FictionComponent, { className: "FictionComponent", filePath: "src\\app\\customer\\fiction\\fiction.component.ts", lineNumber: 15 });
})();

// src/app/customer/non-fiction/non-fiction.component.ts
function NonFictionComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "img", 9);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 10);
    \u0275\u0275listener("click", function NonFictionComponent_div_12_Template_button_click_8_listener() {
      const book_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToShopingPage(book_r2));
    });
    \u0275\u0275text(9, "Buy Now");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const book_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", book_r2.image, \u0275\u0275sanitizeUrl)("alt", book_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Author: ", book_r2.author, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Price: $", book_r2.price, "");
  }
}
var NonFictionComponent = class _NonFictionComponent {
  router;
  apiService;
  store;
  searchText = "";
  constructor(router, apiService, store) {
    this.router = router;
    this.apiService = apiService;
    this.store = store;
  }
  ngOnInit() {
    const remote = this.store.getBooks("non-fiction") || [];
    this.books = [...this.books, ...remote];
  }
  goToShopingPage(book) {
    this.apiService.setBook(book);
    this.router.navigate(["customer/home/religious/shoping"]);
  }
  books = [
    {
      title: "Wings of Fire",
      author: "A.P.J. Abdul Kalam",
      price: 299,
      currency: "Rupees only",
      image: "books/img (39).jpg"
    },
    {
      title: "The Discovery of India",
      author: "Jawaharlal Nehru",
      price: 350,
      currency: "Rupees only",
      image: "books/img (40).jpg"
    },
    {
      title: "Autobiography of a Yogi",
      author: "Paramahansa Yogananda",
      price: 250,
      currency: "Rupees only",
      image: "books/img (41).jpg"
    },
    {
      title: "India Unbound",
      author: "Gurcharan Das",
      price: 399,
      currency: "Rupees only",
      image: "books/img (42).jpg"
    },
    {
      title: "Being Indian",
      author: "Pavan K. Varma",
      price: 299,
      currency: "Rupees only",
      image: "books/img (43).jpg"
    },
    {
      title: "The Argumentative Indian",
      author: "Amartya Sen",
      price: 399,
      currency: "Rupees only",
      image: "books/img (44).jpg"
    },
    {
      title: "In Spite of the Gods",
      author: "Edward Luce",
      price: 450,
      currency: "Rupees only",
      image: "books/img (45).jpg"
    },
    {
      title: "Everybody Loves a Good Drought",
      author: "P. Sainath",
      price: 320,
      currency: "Rupees only",
      image: "books/img (46).jpg"
    },
    {
      title: "The Great Indian Novel",
      author: "Shashi Tharoor",
      price: 350,
      currency: "Rupees only",
      image: "books/img (47).jpg"
    },
    {
      title: "India After Gandhi",
      author: "Ramachandra Guha",
      price: 499,
      currency: "Rupees only",
      image: "books/img (48).jpg"
    }
  ];
  static \u0275fac = function NonFictionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NonFictionComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(BookStoreService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NonFictionComponent, selectors: [["app-non-fiction"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 5, consts: [["rel", "stylesheet", "href", \u0275\u0275trustConstantResourceUrl`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css`, "integrity", "sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==", "crossorigin", "anonymous", "referrerpolicy", "no-referrer"], [1, "cnt"], [1, "search-container"], ["type", "text", "placeholder", "Search books...", 1, "search-box", 3, "ngModelChange", "ngModel"], [1, "search-button"], [1, "fas", "fa-search"], [1, "container"], ["class", "book-card", 4, "ngFor", "ngForOf"], [1, "book-card"], ["height", "300", "width", "250", 3, "src", "alt"], [1, "btn", "btn-buy", 3, "click"]], template: function NonFictionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "head");
      \u0275\u0275element(1, "link", 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 1)(3, "div")(4, "header");
      \u0275\u0275text(5, "Store of Non Fiction Books");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 2)(7, "input", 3);
      \u0275\u0275twoWayListener("ngModelChange", function NonFictionComponent_Template_input_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 4);
      \u0275\u0275element(9, "i", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 6);
      \u0275\u0275element(11, "router-outlet");
      \u0275\u0275template(12, NonFictionComponent_div_12_Template, 10, 5, "div", 7);
      \u0275\u0275pipe(13, "filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "footer");
      \u0275\u0275text(15, "\xA9 2025 My Book Store. All rights reserved.");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(13, 2, ctx.books, ctx.searchText));
    }
  }, dependencies: [CommonModule, NgForOf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterOutlet, FilterPipe], styles: ["\n\n*[_ngcontent-%COMP%] {\n  font-family: Arial, sans-serif;\n  margin: 0;\n}\nheader[_ngcontent-%COMP%] {\n  background: #8beb8e, rgb(156, 60, 220);\n  color: white;\n  padding: 15px 0;\n  margin-left: 10px;\n  font-size: 2em;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 20px;\n}\n.book-card[_ngcontent-%COMP%] {\n  background: white;\n  width: auto;\n  height: auto;\n  box-sizing: border-box;\n  margin: 15px;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  padding: 15px;\n  transition: 0.3s;\n}\n.book-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.book-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 250px;\n  object-fit: cover;\n  border-radius: 5px;\n}\n.book-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 10px 0 5px;\n}\n.book-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 14px;\n  margin: 5px 0;\n}\n.book-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #4CAF50;\n  color: white;\n  padding: 8px 12px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  margin-top: 10px;\n  transition: background 0.3s;\n}\n.book-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #45a049;\n}\nfooter[_ngcontent-%COMP%] {\n  background: #333;\n  color: white;\n  text-align: center;\n  padding: 10px;\n  margin-top: 20px;\n}\n.cnt[_ngcontent-%COMP%] {\n  background-color: rgb(43, 52, 74);\n  border-radius: 10px 10px 10px 10px;\n  width: 97%;\n  height: 80px;\n  margin-left: 20px;\n  border: none;\n}\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin-left: 880px;\n  margin-top: -70px;\n}\n.search-box[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 2px solid #007bff;\n  border-radius: 25px 0 0 25px;\n  outline: none;\n  font-size: 16px;\n  width: 250px;\n  transition: 0.3s;\n}\n.search-box[_ngcontent-%COMP%]:focus {\n  border-color: #0056b3;\n  box-shadow: 0 0 8px rgba(0, 123, 255, 0.4);\n}\n.search-button[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  background-color: #007bff;\n  border: 2px solid #007bff;\n  border-left: none;\n  color: white;\n  border-radius: 0 25px 25px 0;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.search-button[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n.features[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(1) {\n  background-image: url(/image/educational.jpg);\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n}\n.features[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(2) {\n  background-image: url(/image/fiction.jpg);\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n}\n.features[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(3) {\n  background-image: url(/image/educational.jpg);\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n}\n.features[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(4) {\n  background-image: url(/image/religious.jpg);\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n}\n.features[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(5) {\n  background-image: url(/image/competitive.jpg);\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n}\n.features[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(6) {\n  background-image: url(/image/children.jpg);\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n}\n.features[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(7) {\n  background-image: url(/image/hobbies.jpg);\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n}\n/*# sourceMappingURL=non-fiction.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NonFictionComponent, { className: "NonFictionComponent", filePath: "src\\app\\customer\\non-fiction\\non-fiction.component.ts", lineNumber: 17 });
})();

// src/app/customer/children/children.component.ts
function ChildrenComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "img", 9);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 10);
    \u0275\u0275listener("click", function ChildrenComponent_div_12_Template_button_click_8_listener() {
      const book_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToShopingPage(book_r2));
    });
    \u0275\u0275text(9, "Buy Now");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const book_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", book_r2.image, \u0275\u0275sanitizeUrl)("alt", book_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Author: ", book_r2.author, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Price: ", book_r2.price, "", book_r2.currency, "");
  }
}
var ChildrenComponent = class _ChildrenComponent {
  router;
  apiService;
  store;
  searchText = "";
  constructor(router, apiService, store) {
    this.router = router;
    this.apiService = apiService;
    this.store = store;
  }
  ngOnInit() {
    const remote = this.store.getBooks("children") || [];
    this.books = [...this.books, ...remote];
  }
  goToShopingPage(book) {
    this.apiService.setBook(book);
    this.router.navigate(["customer/home/religious/shoping"]);
  }
  books = [
    {
      title: "The Blue Umbrella",
      author: "Ruskin Bond",
      price: 150,
      currency: "Rupees only",
      image: "books/img (11).jpg"
    },
    {
      title: "Grandma\u2019s Bag of Stories",
      author: "Sudha Murty",
      price: 199,
      currency: "Rupees only",
      image: "books/img (12).jpg"
    },
    {
      title: "The Very Hungry Caterpillar",
      author: "Eric Carle",
      price: 180,
      currency: "Rupees only",
      image: "books/img (13).jpg"
    },
    {
      title: "Amma, Tell Me About\u2026",
      author: "Bhakti Mathur",
      price: 250,
      currency: "Rupees only",
      image: "books/img (14).jpg"
    },
    {
      title: "The Magic of the Lost Temple",
      author: "Sudha Murty",
      price: 220,
      currency: "Rupees only",
      image: "books/img (15).jpg"
    },
    {
      title: "Matilda",
      author: "Roald Dahl",
      price: 300,
      currency: "Rupees only",
      image: "books/img (16).jpg"
    },
    {
      title: "Harry Potter and the Philosopher\u2019s Stone",
      author: "J.K. Rowling",
      price: 450,
      currency: "Rupees only",
      image: "books/img (17).jpg"
    },
    {
      title: "The Diary of a Young Girl",
      author: "Anne Frank",
      price: 280,
      currency: "Rupees only",
      image: "books/img (18).jpg"
    },
    {
      title: "The Adventures of Tom Sawyer",
      author: "Mark Twain",
      price: 200,
      currency: "Rupees only",
      image: "books/img (19).jpg"
    },
    {
      title: "Swami and Friends",
      author: "R.K. Narayan",
      price: 250,
      currency: "Rupees only",
      image: "books/img (20).jpg"
    },
    {
      title: "Percy Jackson and the Olympians: The Lightning Thief",
      author: "Rick Riordan",
      price: 399,
      currency: "Rupees only",
      image: "books/img (21).jpg"
    }
  ];
  static \u0275fac = function ChildrenComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChildrenComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(BookStoreService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChildrenComponent, selectors: [["app-children"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 5, consts: [["rel", "stylesheet", "href", \u0275\u0275trustConstantResourceUrl`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css`, "integrity", "sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==", "crossorigin", "anonymous", "referrerpolicy", "no-referrer"], [1, "cnt"], [1, "search-container"], ["type", "text", "placeholder", "Search books...", 1, "search-box", 3, "ngModelChange", "ngModel"], [1, "search-button"], [1, "fas", "fa-search"], [1, "container"], ["class", "book-card", 4, "ngFor", "ngForOf"], [1, "book-card"], ["height", "300", "width", "250", 3, "src", "alt"], [1, "btn", "btn-buy", 3, "click"]], template: function ChildrenComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "head");
      \u0275\u0275element(1, "link", 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 1)(3, "div")(4, "header");
      \u0275\u0275text(5, "Store of Children's Books");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 2)(7, "input", 3);
      \u0275\u0275twoWayListener("ngModelChange", function ChildrenComponent_Template_input_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 4);
      \u0275\u0275element(9, "i", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 6);
      \u0275\u0275element(11, "router-outlet");
      \u0275\u0275template(12, ChildrenComponent_div_12_Template, 10, 6, "div", 7);
      \u0275\u0275pipe(13, "filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "footer");
      \u0275\u0275text(15, "\xA9 2025 My Book Store. All rights reserved.");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(13, 2, ctx.books, ctx.searchText));
    }
  }, dependencies: [CommonModule, NgForOf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterOutlet, FilterPipe], styles: ["\n\n*[_ngcontent-%COMP%] {\n  font-family: Arial, sans-serif;\n  margin: 0;\n}\nheader[_ngcontent-%COMP%] {\n  background: #8beb8e, rgb(156, 60, 220);\n  color: white;\n  padding: 15px 0;\n  margin-left: 10px;\n  font-size: 2em;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 20px;\n}\n.book-card[_ngcontent-%COMP%] {\n  background: white;\n  width: auto;\n  height: auto;\n  box-sizing: border-box;\n  margin: 15px;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  padding: 15px;\n  transition: 0.3s;\n}\n.book-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.book-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 250px;\n  object-fit: cover;\n  border-radius: 5px;\n}\n.book-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 10px 0 5px;\n}\n.book-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 14px;\n  margin: 5px 0;\n}\n.book-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #4CAF50;\n  color: white;\n  padding: 8px 12px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  margin-top: 10px;\n  transition: background 0.3s;\n}\n.book-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #45a049;\n}\nfooter[_ngcontent-%COMP%] {\n  background: #333;\n  color: white;\n  text-align: center;\n  padding: 10px;\n  margin-top: 20px;\n}\n.cnt[_ngcontent-%COMP%] {\n  background-color: rgb(43, 52, 74);\n  border-radius: 10px 10px 10px 10px;\n  width: 97%;\n  height: 80px;\n  margin-left: 20px;\n  border: none;\n}\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin-left: 880px;\n  margin-top: -70px;\n}\n.search-box[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 2px solid #007bff;\n  border-radius: 25px 0 0 25px;\n  outline: none;\n  font-size: 16px;\n  width: 250px;\n  transition: 0.3s;\n}\n.search-box[_ngcontent-%COMP%]:focus {\n  border-color: #0056b3;\n  box-shadow: 0 0 8px rgba(0, 123, 255, 0.4);\n}\n.search-button[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  background-color: #007bff;\n  border: 2px solid #007bff;\n  border-left: none;\n  color: white;\n  border-radius: 0 25px 25px 0;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.search-button[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n/*# sourceMappingURL=children.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChildrenComponent, { className: "ChildrenComponent", filePath: "src\\app\\customer\\children\\children.component.ts", lineNumber: 17 });
})();

// src/app/customer/religious/religious.component.ts
function ReligiousComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "img", 9);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 10);
    \u0275\u0275listener("click", function ReligiousComponent_div_12_Template_button_click_8_listener() {
      const book_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToShopingPage(book_r2));
    });
    \u0275\u0275text(9, "Buy Now");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const book_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", book_r2.image, \u0275\u0275sanitizeUrl)("alt", book_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Author: ", book_r2.author, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Price: ", book_r2.price, "");
  }
}
var ReligiousComponent = class _ReligiousComponent {
  router;
  apiService;
  searchText = "";
  constructor(router, apiService) {
    this.router = router;
    this.apiService = apiService;
  }
  ngOnInit() {
  }
  goToShopingPage(book) {
    this.apiService.setBook(book);
    this.router.navigate(["customer/home/religious/shoping"]);
  }
  books = [
    { title: "Bhagavad Gita", author: "Ved Vyasa", price: 199, currency: "Rupees only", image: "books/img (40).jpg" },
    { title: "Ramayana", author: "Valmiki", price: 250, currency: "Rupees only", image: "books/img (41).jpg" },
    { title: "Mahabharata", author: "Ved Vyasa", price: 299, currency: "Rupees only", image: "books/img (42).jpg" },
    { title: "Upanishads", author: "Various", price: 220, currency: "Rupees only", image: "books/img (43).jpg" },
    { title: "Bhagavata Purana", author: "Vyasa", price: 300, currency: "Rupees only", image: "books/img (44).jpg" },
    { title: "Yoga Sutras of Patanjali", author: "Patanjali", price: 350, currency: "Rupees only", image: "books/img (45).jpg" },
    { title: "Ramcharit-manas", author: "Tulsidas", price: 199, currency: "Rupees only", image: "books/img (46).jpg" },
    { title: "Shiva Purana", author: "Various", price: 280, currency: "Rupees only", image: "books/img (47).jpg" },
    { title: "Bhakti Sagar", author: "Swami Sivananda", price: 250, currency: "Rupees only", image: "books/img (48).jpg" },
    { title: "Gita Press Publications Collection", author: "Gita Press", price: 499, currency: "Rupees only", image: "books/img (39).jpg" }
  ];
  static \u0275fac = function ReligiousComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReligiousComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReligiousComponent, selectors: [["app-religious"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 5, consts: [["rel", "stylesheet", "href", \u0275\u0275trustConstantResourceUrl`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css`, "integrity", "sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==", "crossorigin", "anonymous", "referrerpolicy", "no-referrer"], [1, "cnt"], [1, "search-container"], ["type", "text", "placeholder", "Search books...", 1, "search-box", 3, "ngModelChange", "ngModel"], [1, "search-button"], [1, "fas", "fa-search"], [1, "container"], ["class", "book-card", 4, "ngFor", "ngForOf"], [1, "book-card"], ["height", "300", "width", "250", 3, "src", "alt"], [1, "btn", "btn-buy", 3, "click"]], template: function ReligiousComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "head");
      \u0275\u0275element(1, "link", 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 1)(3, "div")(4, "header");
      \u0275\u0275text(5, "Store of Religious And Spiritual Books");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 2)(7, "input", 3);
      \u0275\u0275twoWayListener("ngModelChange", function ReligiousComponent_Template_input_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 4);
      \u0275\u0275element(9, "i", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 6);
      \u0275\u0275element(11, "router-outlet");
      \u0275\u0275template(12, ReligiousComponent_div_12_Template, 10, 5, "div", 7);
      \u0275\u0275pipe(13, "filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "footer");
      \u0275\u0275text(15, "\xA9 2025 My Book Store. All rights reserved.");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(13, 2, ctx.books, ctx.searchText));
    }
  }, dependencies: [CommonModule, NgForOf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, FilterPipe, RouterOutlet], styles: ["\n\n*[_ngcontent-%COMP%] {\n  font-family: Arial, sans-serif;\n  margin: 0;\n}\nheader[_ngcontent-%COMP%] {\n  background: #8beb8e, rgb(156, 60, 220);\n  color: white;\n  padding: 15px 0;\n  margin-left: 10px;\n  font-size: 2em;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 20px;\n}\n.book-card[_ngcontent-%COMP%] {\n  background: white;\n  width: 200px;\n  margin: 15px;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  padding: 15px;\n  transition: 0.3s;\n}\n.book-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.book-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 250px;\n  object-fit: cover;\n  border-radius: 5px;\n}\n.book-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 10px 0 5px;\n}\n.book-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 14px;\n  margin: 5px 0;\n}\n.book-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #4CAF50;\n  color: white;\n  padding: 8px 12px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  margin-top: 10px;\n  transition: background 0.3s;\n}\n.book-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #45a049;\n}\nfooter[_ngcontent-%COMP%] {\n  background: #333;\n  color: white;\n  text-align: center;\n  padding: 10px;\n  margin-top: 20px;\n}\n.cnt[_ngcontent-%COMP%] {\n  background-color: rgb(43, 52, 74);\n  border-radius: 10px 10px 10px 10px;\n  width: 97%;\n  height: 80px;\n  margin-left: 20px;\n  border: none;\n}\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin-left: 880px;\n  margin-top: -70px;\n}\n.search-box[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 2px solid #007bff;\n  border-radius: 25px 0 0 25px;\n  outline: none;\n  font-size: 16px;\n  width: 250px;\n  transition: 0.3s;\n}\n.search-box[_ngcontent-%COMP%]:focus {\n  border-color: #0056b3;\n  box-shadow: 0 0 8px rgba(0, 123, 255, 0.4);\n}\n.search-button[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  background-color: #007bff;\n  border: 2px solid #007bff;\n  border-left: none;\n  color: white;\n  border-radius: 0 25px 25px 0;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.search-button[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n.features[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(1) {\n  background-image: url(/image/educational.jpg);\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n}\n.features[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(2) {\n  background-image: url(/image/fiction.jpg);\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n}\n.features[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(3) {\n  background-image: url(/image/educational.jpg);\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n}\n.features[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(4) {\n  background-image: url(/image/religious.jpg);\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n}\n.features[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(5) {\n  background-image: url(/image/competitive.jpg);\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n}\n.features[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(6) {\n  background-image: url(/image/children.jpg);\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n}\n.features[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(7) {\n  background-image: url(/image/hobbies.jpg);\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n}\n/*# sourceMappingURL=religious.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReligiousComponent, { className: "ReligiousComponent", filePath: "src\\app\\customer\\religious\\religious.component.ts", lineNumber: 16 });
})();

// src/app/customer/hobbies/hobbies.component.ts
function HobbiesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "img", 9);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 10);
    \u0275\u0275listener("click", function HobbiesComponent_div_12_Template_button_click_8_listener() {
      const book_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToShopingPage(book_r2));
    });
    \u0275\u0275text(9, "Buy Now");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const book_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", book_r2.image, \u0275\u0275sanitizeUrl)("alt", book_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Author: ", book_r2.author, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Price: ", book_r2.price, " ", book_r2.currency, "");
  }
}
var HobbiesComponent = class _HobbiesComponent {
  router;
  apiService;
  store;
  searchText = "";
  constructor(router, apiService, store) {
    this.router = router;
    this.apiService = apiService;
    this.store = store;
  }
  ngOnInit() {
    const remote = this.store.getBooks("hobbies") || [];
    this.books = [...this.books, ...remote];
  }
  goToShopingPage(book) {
    this.apiService.setBook(book);
    this.router.navigate(["customer/home/religious/shoping"]);
  }
  books = [
    {
      title: "Creative Painting for Kids",
      author: "Neetu Sugandh",
      price: 299,
      currency: "Rupees only",
      image: "books/img (36).jpg"
    },
    {
      title: "365 Things to Make and Do",
      author: "Usborne Activities",
      price: 450,
      currency: "Rupees only",
      image: "books/img (37).jpg"
    },
    {
      title: "Origami for Beginners",
      author: "Taro Yaguchi",
      price: 350,
      currency: "Rupees only",
      image: "books/img (38).jpg"
    },
    {
      title: "The Digital Photography Book",
      author: "Scott Kelby",
      price: 799,
      currency: "Rupees only",
      image: "books/img (39).jpg"
    },
    {
      title: "Read This If You Want to Take Great Photographs",
      author: "Henry Carroll",
      price: 599,
      currency: "Rupees only",
      image: "books/img (40).jpg"
    },
    {
      title: "The Guitar Handbook",
      author: "Ralph Denyer",
      price: 950,
      currency: "Rupees only",
      image: "books/img (41).jpg"
    },
    {
      title: "Piano Adventures (Series)",
      author: "Nancy & Randall Faber",
      price: 1200,
      currency: "Rupees only",
      image: "books/img (42).jpg"
    },
    {
      title: "The Complete Garden Flower Book",
      author: "Catriona Tudor Erler",
      price: 700,
      currency: "Rupees only",
      image: "books/img (43).jpg"
    },
    {
      title: "Kitchen Gardening Made Easy",
      author: "Deepa Varadarajan",
      price: 399,
      currency: "Rupees only",
      image: "books/img (44).jpg"
    },
    {
      title: "MasterChef Cookbook (India Edition)",
      author: "MasterChef India Chefs",
      price: 850,
      currency: "Rupees only",
      image: "books/img (45).jpg"
    },
    {
      title: "DIY Crafts for Everyone",
      author: "Step-by-Step Hobby Guide",
      price: 499,
      currency: "Rupees only",
      image: "books/img (46).jpg"
    },
    {
      title: "The Young Champion\u2019s Mind",
      author: "Jim Afremow",
      price: 699,
      currency: "Rupees only",
      image: "books/img (47).jpg"
    },
    {
      title: "Yoga for Beginners",
      author: "Swami Satyananda Saraswati",
      price: 399,
      currency: "Rupees only",
      image: "books/img (48).jpg"
    }
  ];
  static \u0275fac = function HobbiesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HobbiesComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(BookStoreService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HobbiesComponent, selectors: [["app-hobbies"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 5, consts: [["rel", "stylesheet", "href", \u0275\u0275trustConstantResourceUrl`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css`, "integrity", "sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==", "crossorigin", "anonymous", "referrerpolicy", "no-referrer"], [1, "cnt"], [1, "search-container"], ["type", "text", "placeholder", "Search books...", 1, "search-box", 3, "ngModelChange", "ngModel"], [1, "search-button"], [1, "fas", "fa-search"], [1, "container"], ["class", "book-card", 4, "ngFor", "ngForOf"], [1, "book-card"], ["height", "300", "width", "250", 3, "src", "alt"], [1, "btn", "btn-buy", 3, "click"]], template: function HobbiesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "head");
      \u0275\u0275element(1, "link", 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 1)(3, "div")(4, "header");
      \u0275\u0275text(5, "Store of Hobbies and skill Development Books");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 2)(7, "input", 3);
      \u0275\u0275twoWayListener("ngModelChange", function HobbiesComponent_Template_input_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 4);
      \u0275\u0275element(9, "i", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 6);
      \u0275\u0275element(11, "router-outlet");
      \u0275\u0275template(12, HobbiesComponent_div_12_Template, 10, 6, "div", 7);
      \u0275\u0275pipe(13, "filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "footer");
      \u0275\u0275text(15, "\xA9 2025 My Book Store. All rights reserved.");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(13, 2, ctx.books, ctx.searchText));
    }
  }, dependencies: [CommonModule, NgForOf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, FilterPipe, RouterOutlet], styles: ["\n\n*[_ngcontent-%COMP%] {\n  font-family: Arial, sans-serif;\n  margin: 0;\n}\nheader[_ngcontent-%COMP%] {\n  background: #8beb8e, rgb(156, 60, 220);\n  color: white;\n  padding: 15px 0;\n  margin-left: 10px;\n  font-size: 2em;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 20px;\n}\n.book-card[_ngcontent-%COMP%] {\n  background: white;\n  width: auto;\n  height: auto;\n  box-sizing: border-box;\n  margin: 15px;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  padding: 15px;\n  transition: 0.3s;\n}\n.book-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.book-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 250px;\n  object-fit: cover;\n  border-radius: 5px;\n}\n.book-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 10px 0 5px;\n}\n.book-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 14px;\n  margin: 5px 0;\n}\n.book-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #4CAF50;\n  color: white;\n  padding: 8px 12px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  margin-top: 10px;\n  transition: background 0.3s;\n}\n.book-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #45a049;\n}\nfooter[_ngcontent-%COMP%] {\n  background: #333;\n  color: white;\n  text-align: center;\n  padding: 10px;\n  margin-top: 20px;\n}\n.cnt[_ngcontent-%COMP%] {\n  background-color: rgb(43, 52, 74);\n  border-radius: 10px 10px 10px 10px;\n  width: 97%;\n  height: 80px;\n  margin-left: 20px;\n  border: none;\n}\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin-left: 880px;\n  margin-top: -70px;\n}\n.search-box[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 2px solid #007bff;\n  border-radius: 25px 0 0 25px;\n  outline: none;\n  font-size: 16px;\n  width: 250px;\n  transition: 0.3s;\n}\n.search-box[_ngcontent-%COMP%]:focus {\n  border-color: #0056b3;\n  box-shadow: 0 0 8px rgba(0, 123, 255, 0.4);\n}\n.search-button[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  background-color: #007bff;\n  border: 2px solid #007bff;\n  border-left: none;\n  color: white;\n  border-radius: 0 25px 25px 0;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.search-button[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n.features[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(1) {\n  background-image: url(/image/educational.jpg);\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n}\n.features[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(2) {\n  background-image: url(/image/fiction.jpg);\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n}\n.features[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(3) {\n  background-image: url(/image/educational.jpg);\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n}\n.features[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(4) {\n  background-image: url(/image/religious.jpg);\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n}\n.features[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(5) {\n  background-image: url(/image/competitive.jpg);\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n}\n.features[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(6) {\n  background-image: url(/image/children.jpg);\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n}\n.features[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(7) {\n  background-image: url(/image/hobbies.jpg);\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n}\n/*# sourceMappingURL=hobbies.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HobbiesComponent, { className: "HobbiesComponent", filePath: "src\\app\\customer\\hobbies\\hobbies.component.ts", lineNumber: 17 });
})();

// src/app/customer/comptative/comptative.component.ts
function ComptativeComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "img", 9);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 10);
    \u0275\u0275listener("click", function ComptativeComponent_div_12_Template_button_click_8_listener() {
      const book_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToShopingPage(book_r2));
    });
    \u0275\u0275text(9, "Buy Now");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const book_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", book_r2.image, \u0275\u0275sanitizeUrl)("alt", book_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Author: ", book_r2.author, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Price: $", book_r2.price, "");
  }
}
var ComptativeComponent = class _ComptativeComponent {
  router;
  apiService;
  store;
  searchText = "";
  constructor(router, apiService, store) {
    this.router = router;
    this.apiService = apiService;
    this.store = store;
  }
  ngOnInit() {
    const remote = this.store.getBooks("comptative") || [];
    this.books = [...this.books, ...remote];
  }
  goToShopingPage(book) {
    this.apiService.setBook(book);
    this.router.navigate(["customer/home/religious/shoping"]);
  }
  books = [
    {
      title: "A Modern Approach to Verbal & Non-Verbal Reasoning",
      author: "R.S. Aggarwal",
      price: 550,
      currency: "Rupees only",
      image: "books/img (22).jpg"
    },
    {
      title: "Objective General English",
      author: "S.P. Bakshi",
      price: 300,
      currency: "Rupees only",
      image: "books/img (23).jpg"
    },
    {
      title: "Indian Economy",
      author: "Ramesh Singh",
      price: 720,
      currency: "Rupees only",
      image: "books/img (24).jpg"
    },
    {
      title: "History of Modern India",
      author: "Bipan Chandra",
      price: 350,
      currency: "Rupees only",
      image: "books/img (25).jpg"
    },
    {
      title: "General Science",
      author: "Lucent Publications",
      price: 320,
      currency: "Rupees only",
      image: "books/img (26).jpg"
    },
    {
      title: "Competitive Exam Book 1",
      author: "Author 1",
      price: 500,
      image: "assets/images/comp1.jpg"
    },
    {
      title: "Competitive Exam Book 2",
      author: "Author 2",
      price: 600,
      image: "assets/images/comp2.jpg"
    }
  ];
  static \u0275fac = function ComptativeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComptativeComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(BookStoreService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComptativeComponent, selectors: [["app-comptative"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 5, consts: [["rel", "stylesheet", "href", \u0275\u0275trustConstantResourceUrl`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css`, "integrity", "sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==", "crossorigin", "anonymous", "referrerpolicy", "no-referrer"], [1, "cnt"], [1, "search-container"], ["type", "text", "placeholder", "Search books...", 1, "search-box", 3, "ngModelChange", "ngModel"], [1, "search-button"], [1, "fas", "fa-search"], [1, "container"], ["class", "book-card", 4, "ngFor", "ngForOf"], [1, "book-card"], ["height", "300", "width", "250", 3, "src", "alt"], [1, "btn", "btn-buy", 3, "click"]], template: function ComptativeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "head");
      \u0275\u0275element(1, "link", 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 1)(3, "div")(4, "header");
      \u0275\u0275text(5, "Store of comptitive exam's Books");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 2)(7, "input", 3);
      \u0275\u0275twoWayListener("ngModelChange", function ComptativeComponent_Template_input_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 4);
      \u0275\u0275element(9, "i", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 6);
      \u0275\u0275element(11, "router-outlet");
      \u0275\u0275template(12, ComptativeComponent_div_12_Template, 10, 5, "div", 7);
      \u0275\u0275pipe(13, "filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "footer");
      \u0275\u0275text(15, "\xA9 2025 My Book Store. All rights reserved.");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(13, 2, ctx.books, ctx.searchText));
    }
  }, dependencies: [CommonModule, NgForOf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, FilterPipe, RouterOutlet], styles: ["\n\n*[_ngcontent-%COMP%] {\n  font-family: Arial, sans-serif;\n  margin: 0;\n}\nheader[_ngcontent-%COMP%] {\n  background: #8beb8e, rgb(156, 60, 220);\n  color: white;\n  padding: 15px 0;\n  margin-left: 10px;\n  font-size: 2em;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 20px;\n}\n.book-card[_ngcontent-%COMP%] {\n  background: white;\n  width: auto;\n  height: auto;\n  box-sizing: border-box;\n  margin: 15px;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  padding: 15px;\n  transition: 0.3s;\n}\n.book-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.book-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 250px;\n  object-fit: cover;\n  border-radius: 5px;\n}\n.book-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 10px 0 5px;\n}\n.book-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 14px;\n  margin: 5px 0;\n}\n.book-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #4CAF50;\n  color: white;\n  padding: 8px 12px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  margin-top: 10px;\n  transition: background 0.3s;\n}\n.book-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #45a049;\n}\nfooter[_ngcontent-%COMP%] {\n  background: #333;\n  color: white;\n  text-align: center;\n  padding: 10px;\n  margin-top: 20px;\n}\n.cnt[_ngcontent-%COMP%] {\n  background-color: rgb(43, 52, 74);\n  border-radius: 10px 10px 10px 10px;\n  width: 97%;\n  height: 80px;\n  margin-left: 20px;\n  border: none;\n}\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin-left: 880px;\n  margin-top: -70px;\n}\n.search-box[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 2px solid #007bff;\n  border-radius: 25px 0 0 25px;\n  outline: none;\n  font-size: 16px;\n  width: 250px;\n  transition: 0.3s;\n}\n.search-box[_ngcontent-%COMP%]:focus {\n  border-color: #0056b3;\n  box-shadow: 0 0 8px rgba(0, 123, 255, 0.4);\n}\n.search-button[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  background-color: #007bff;\n  border: 2px solid #007bff;\n  border-left: none;\n  color: white;\n  border-radius: 0 25px 25px 0;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.search-button[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n/*# sourceMappingURL=comptative.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComptativeComponent, { className: "ComptativeComponent", filePath: "src\\app\\customer\\comptative\\comptative.component.ts", lineNumber: 17 });
})();

// src/app/customer/login/login.component.ts
var _c04 = () => ["/customer/registrationForm"];
var _c12 = (a0) => ({ returnUrl: a0 });
var _c22 = () => ["/customer/forgatePassword"];
var LoginComponent = class _LoginComponent {
  http;
  router;
  route;
  email = "";
  password = "";
  returnUrl = "";
  apiUrl = "http://127.0.0.1:8000/api/login/";
  constructor(http, router, route) {
    this.http = http;
    this.router = router;
    this.route = route;
  }
  loginUser() {
    const payload = {
      email: this.email,
      password: this.password
    };
    this.http.post(this.apiUrl, payload).subscribe({
      next: (res) => {
        if (res.status === "success") {
          localStorage.setItem("user", JSON.stringify(res.user));
          alert("\u2705 Login successful!");
          const dest = this.returnUrl || "/customer/profile";
          this.router.navigate([dest]);
        } else {
          alert("\u274C " + (res.message || "Login failed!"));
        }
      },
      error: (err) => {
        console.error("Login API Error:", err);
        alert("\u274C Error: " + (err.error?.message || "Something went wrong"));
      }
    });
  }
  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParamMap.get("returnUrl") || "";
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 10, consts: [["loginForm", "ngForm"], [1, "login-container"], [3, "ngSubmit"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "required", "", "placeholder", "Enter your email", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "required", "", "placeholder", "Enter your password", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "links"], ["routerLinkActive", "active", 3, "routerLink", "queryParams"], ["routerLinkActive", "active", 3, "routerLink"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275element(1, "router-outlet");
      \u0275\u0275elementStart(2, "h2");
      \u0275\u0275text(3, "Login");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "form", 2, 0);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.loginUser());
      });
      \u0275\u0275elementStart(6, "div", 3)(7, "label", 4);
      \u0275\u0275text(8, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 3)(11, "label", 6);
      \u0275\u0275text(12, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "button", 8);
      \u0275\u0275text(15, " Login ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 9)(17, "a", 10);
      \u0275\u0275text(18, "Create account");
      \u0275\u0275elementEnd();
      \u0275\u0275text(19, " \u2022 ");
      \u0275\u0275elementStart(20, "a", 11);
      \u0275\u0275text(21, "Forgot password?");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const loginForm_r2 = \u0275\u0275reference(5);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !loginForm_r2.form.valid);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c04))("queryParams", \u0275\u0275pureFunction1(7, _c12, ctx.returnUrl || "/admin"));
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c22));
    }
  }, dependencies: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    NgModel,
    NgForm,
    HttpClientModule
  ], styles: ["\n\n.login-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  margin: 80px auto;\n  padding: 40px 30px;\n  background-color: #fff;\n  border-radius: 12px;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n  font-family: Arial, sans-serif;\n}\n.login-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n  color: #333;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n  font-weight: bold;\n  color: #555;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 16px;\n  transition: border 0.3s ease;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #3498db;\n  outline: none;\n}\nbutton[type=submit][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  background-color: #3498db;\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\nbutton[type=submit][_ngcontent-%COMP%]:hover {\n  background-color: #2980b9;\n}\nbutton[disabled][_ngcontent-%COMP%] {\n  background-color: #95a5a6;\n  cursor: not-allowed;\n}\n@media (max-width: 480px) {\n  .login-container[_ngcontent-%COMP%] {\n    margin: 50px 20px;\n    padding: 30px 20px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\customer\\login\\login.component.ts", lineNumber: 25 });
})();

// src/app/customer/login/registration-form/registration-form.component.ts
function RegistrationFormComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, " Full name is required ");
    \u0275\u0275elementEnd();
  }
}
function RegistrationFormComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "small", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.serverErrors.name[0]);
  }
}
function RegistrationFormComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, " Valid email is required ");
    \u0275\u0275elementEnd();
  }
}
function RegistrationFormComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "small", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.serverErrors.email[0]);
  }
}
function RegistrationFormComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, " Password is required ");
    \u0275\u0275elementEnd();
  }
}
function RegistrationFormComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, " Passwords must match ");
    \u0275\u0275elementEnd();
  }
}
function RegistrationFormComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, " Valid phone number is required ");
    \u0275\u0275elementEnd();
  }
}
function RegistrationFormComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "small", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.serverErrors.phone[0]);
  }
}
function RegistrationFormComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, " Address is required ");
    \u0275\u0275elementEnd();
  }
}
function RegistrationFormComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, " You must accept the terms ");
    \u0275\u0275elementEnd();
  }
}
function RegistrationFormComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.globalError);
  }
}
var RegistrationFormComponent = class _RegistrationFormComponent {
  fb;
  http;
  router;
  route;
  selectedFile = null;
  previewUrl = null;
  registerForm;
  submitted = false;
  userList = [];
  serverErrors = {};
  globalError = "";
  returnUrl = "";
  constructor(fb, http, router, route) {
    this.fb = fb;
    this.http = http;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    this.registerForm = this.fb.group({
      name: [
        "",
        [Validators.required, Validators.pattern(/^[a-zA-Z\s]{2,50}$/)]
      ],
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [
          // ✅ "Password" → "password"
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/)
        ]
      ],
      confirmPassword: ["", Validators.required],
      phone: ["", [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      address: ["", [Validators.required, Validators.minLength(5)]]
    }, { validators: this.passwordMatchValidator });
    this.returnUrl = this.route.snapshot.queryParamMap.get("returnUrl") || "";
  }
  passwordMatchValidator(form) {
    return form.get("password")?.value === form.get("confirmPassword")?.value ? null : { mismatch: true };
  }
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => this.previewUrl = reader.result;
      reader.readAsDataURL(this.selectedFile);
    }
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid)
      return;
    this.serverErrors = {};
    this.globalError = "";
    const data = {
      name: this.registerForm.value.name,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      // ✅ corrected
      phone: this.registerForm.value.phone,
      address: this.registerForm.value.address
    };
    this.http.post("http://127.0.0.1:8000/api/register/", data, {
      headers: { "Content-Type": "application/json" }
    }).subscribe({
      next: (res) => {
        console.log("Response:", res);
        alert("\u2705 Registration successful!");
        const params = {};
        if (this.returnUrl)
          params.returnUrl = this.returnUrl;
        this.router.navigate(["/customer/login"], { queryParams: params });
      },
      error: (err) => {
        console.error("Error:", err);
        const body = err.error || {};
        if (body && body.errors) {
          this.serverErrors = body.errors;
        } else if (body && body.message) {
          this.globalError = body.message;
        } else {
          this.globalError = "Registration failed. Please try again.";
        }
      }
    });
  }
  currentDate = /* @__PURE__ */ new Date();
  static \u0275fac = function RegistrationFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegistrationFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegistrationFormComponent, selectors: [["app-registration-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 13, consts: [[3, "ngSubmit", "formGroup"], ["type", "text", "formControlName", "name", "placeholder", "Full Name"], [4, "ngIf"], ["type", "email", "formControlName", "email", "placeholder", "Email"], ["type", "password", "formControlName", "password", "placeholder", "Password"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Confirm Password"], ["type", "text", "formControlName", "phone", "placeholder", "Mobile No."], ["type", "text", "formControlName", "address", "placeholder", "Address"], ["type", "checkbox", "formControlName", "terms"], ["class", "text-danger", 4, "ngIf"], ["type", "submit", 3, "disabled"], [1, "text-danger"]], template: function RegistrationFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form", 0);
      \u0275\u0275listener("ngSubmit", function RegistrationFormComponent_Template_form_ngSubmit_0_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(1, "h2");
      \u0275\u0275text(2, "Registration Form");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "input", 1);
      \u0275\u0275template(4, RegistrationFormComponent_div_4_Template, 2, 0, "div", 2)(5, RegistrationFormComponent_div_5_Template, 3, 1, "div", 2);
      \u0275\u0275element(6, "input", 3);
      \u0275\u0275template(7, RegistrationFormComponent_div_7_Template, 2, 0, "div", 2)(8, RegistrationFormComponent_div_8_Template, 3, 1, "div", 2);
      \u0275\u0275element(9, "input", 4);
      \u0275\u0275template(10, RegistrationFormComponent_div_10_Template, 2, 0, "div", 2);
      \u0275\u0275element(11, "input", 5);
      \u0275\u0275template(12, RegistrationFormComponent_div_12_Template, 2, 0, "div", 2);
      \u0275\u0275element(13, "input", 6);
      \u0275\u0275template(14, RegistrationFormComponent_div_14_Template, 2, 0, "div", 2)(15, RegistrationFormComponent_div_15_Template, 3, 1, "div", 2);
      \u0275\u0275element(16, "input", 7);
      \u0275\u0275template(17, RegistrationFormComponent_div_17_Template, 2, 0, "div", 2);
      \u0275\u0275elementStart(18, "label");
      \u0275\u0275element(19, "input", 8);
      \u0275\u0275text(20, " Accept Terms ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, RegistrationFormComponent_div_21_Template, 2, 0, "div", 2)(22, RegistrationFormComponent_div_22_Template, 2, 1, "div", 9);
      \u0275\u0275elementStart(23, "button", 10);
      \u0275\u0275text(24, "Register");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_3_0;
      let tmp_5_0;
      let tmp_7_0;
      let tmp_9_0;
      let tmp_10_0;
      \u0275\u0275property("formGroup", ctx.registerForm);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.submitted && ((tmp_1_0 = ctx.registerForm.get("name")) == null ? null : tmp_1_0.invalid));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.serverErrors == null ? null : ctx.serverErrors.name);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.submitted && ((tmp_3_0 = ctx.registerForm.get("email")) == null ? null : tmp_3_0.invalid));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.serverErrors == null ? null : ctx.serverErrors.email);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.submitted && ((tmp_5_0 = ctx.registerForm.get("password")) == null ? null : tmp_5_0.invalid));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.submitted && ctx.registerForm.hasError("mismatch"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.submitted && ((tmp_7_0 = ctx.registerForm.get("phone")) == null ? null : tmp_7_0.invalid));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.serverErrors == null ? null : ctx.serverErrors.phone);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.submitted && ((tmp_9_0 = ctx.registerForm.get("address")) == null ? null : tmp_9_0.invalid));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.submitted && ((tmp_10_0 = ctx.registerForm.get("terms")) == null ? null : tmp_10_0.invalid));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.globalError);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.registerForm.invalid);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, CommonModule, NgIf, FormsModule, HttpClientModule], styles: ['\n\n.input-error[_ngcontent-%COMP%] {\n  border-color: red;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 0.9em;\n}\nform[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 50px auto;\n  padding: 30px;\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);\n  font-family: "Segoe UI", sans-serif;\n}\ninput[type=text][_ngcontent-%COMP%], \ninput[type=email][_ngcontent-%COMP%], \ninput[type=password][_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 12px 15px;\n  margin: 10px 0;\n  margin-right: 10px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  font-size: 15px;\n  transition: border-color 0.3s;\n}\ninput[_ngcontent-%COMP%]:focus {\n  border-color: #6e8efb;\n  outline: none;\n}\n.uploadBox[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 40px auto;\n  padding: 24px;\n  background-color: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  font-family: "Segoe UI", sans-serif;\n}\n.uploadBox[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto 16px;\n  padding: 8px;\n  border-radius: 6px;\n  border: 1px solid #ccc;\n  cursor: pointer;\n  transition: border-color 0.3s;\n}\n.uploadBox[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]:hover {\n  border-color: #007BFF;\n}\n.uploadBox[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #007BFF;\n  color: white;\n  padding: 10px 20px;\n  font-size: 14px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n.uploadBox[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background-color: #cccccc;\n  cursor: not-allowed;\n}\n.uploadBox[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #0056b3;\n}\n.uploadBox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  border-radius: 8px;\n  border: 1px solid #eee;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.uploadBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-weight: 600;\n  color: #333;\n}\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 15px 0;\n  font-size: 14px;\n  color: #333;\n}\ninput[type=checkbox][_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\nbutton[type=submit][_ngcontent-%COMP%] {\n  width: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #6e8efb,\n      #a777e3);\n  color: white;\n  padding: 12px;\n  border: none;\n  border-radius: 30px;\n  font-size: 16px;\n  cursor: pointer;\n  margin-top: 20px;\n  transition: all 0.3s ease;\n}\nbutton[type=submit][_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #a777e3,\n      #6e8efb);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n  transform: translateY(-2px);\n}\nbutton[disabled][_ngcontent-%COMP%] {\n  background: #ccc;\n  cursor: not-allowed;\n  box-shadow: none;\n}\ndiv[ng-reflect-ng-if][_ngcontent-%COMP%] {\n  color: #e74c3c;\n  font-size: 13px;\n  margin-bottom: 5px;\n}\n.binding2way[_ngcontent-%COMP%] {\n  margin-top: -24px;\n}\n/*# sourceMappingURL=registration-form.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegistrationFormComponent, { className: "RegistrationFormComponent", filePath: "src\\app\\customer\\login\\registration-form\\registration-form.component.ts", lineNumber: 21 });
})();

// src/app/customer/libarary/libarary.component.ts
function LibararyComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "th");
    \u0275\u0275text(2, "Only NCERT Books");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 21);
    \u0275\u0275listener("click", function LibararyComponent_div_10_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClick());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 21);
    \u0275\u0275listener("click", function LibararyComponent_div_10_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClick());
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 21);
    \u0275\u0275listener("click", function LibararyComponent_div_10_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClick());
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 21);
    \u0275\u0275listener("click", function LibararyComponent_div_10_Template_a_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClick());
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 21);
    \u0275\u0275listener("click", function LibararyComponent_div_10_Template_a_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClick());
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 21);
    \u0275\u0275listener("click", function LibararyComponent_div_10_Template_a_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClick());
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 21);
    \u0275\u0275listener("click", function LibararyComponent_div_10_Template_a_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClick());
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Class 6th ", ctx_r1.btnText, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Class 7th ", ctx_r1.btnText, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Class 8th ", ctx_r1.btnText, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Class 9th ", ctx_r1.btnText, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Class 10th ", ctx_r1.btnText, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Class 11th ", ctx_r1.btnText, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Class 12th ", ctx_r1.btnText, " ");
  }
}
function LibararyComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "a", 23);
    \u0275\u0275text(2, "Science");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 23);
    \u0275\u0275text(4, "Social-Science");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 23);
    \u0275\u0275text(6, "Mathematics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 23);
    \u0275\u0275text(8, "English");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 23);
    \u0275\u0275text(10, "Hindi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 23);
    \u0275\u0275text(12, "Sanskrit");
    \u0275\u0275elementEnd()();
  }
}
function LibararyComponent_tr_31_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 25);
    \u0275\u0275text(2, "View PDF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const book_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("href", book_r3.pdf, \u0275\u0275sanitizeUrl);
  }
}
function LibararyComponent_tr_31_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Not available");
    \u0275\u0275elementEnd();
  }
}
function LibararyComponent_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275template(6, LibararyComponent_tr_31_ng_container_6_Template, 3, 1, "ng-container", 24)(7, LibararyComponent_tr_31_ng_template_7_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const book_r3 = ctx.$implicit;
    const noPdf_r4 = \u0275\u0275reference(8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r3.author);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", book_r3.pdf)("ngIfElse", noPdf_r4);
  }
}
function LibararyComponent_tr_48_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 25);
    \u0275\u0275text(2, "View PDF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const book_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("href", book_r5.pdf, \u0275\u0275sanitizeUrl);
  }
}
function LibararyComponent_tr_48_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Not available");
    \u0275\u0275elementEnd();
  }
}
function LibararyComponent_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275template(6, LibararyComponent_tr_48_ng_container_6_Template, 3, 1, "ng-container", 24)(7, LibararyComponent_tr_48_ng_template_7_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const book_r5 = ctx.$implicit;
    const noPdf_r6 = \u0275\u0275reference(8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r5.author);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", book_r5.pdf)("ngIfElse", noPdf_r6);
  }
}
function LibararyComponent_tr_65_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 25);
    \u0275\u0275text(2, "View PDF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const book_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("href", book_r7.pdf, \u0275\u0275sanitizeUrl);
  }
}
function LibararyComponent_tr_65_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Not available");
    \u0275\u0275elementEnd();
  }
}
function LibararyComponent_tr_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275template(6, LibararyComponent_tr_65_ng_container_6_Template, 3, 1, "ng-container", 24)(7, LibararyComponent_tr_65_ng_template_7_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const book_r7 = ctx.$implicit;
    const noPdf_r8 = \u0275\u0275reference(8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r7.author);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", book_r7.pdf)("ngIfElse", noPdf_r8);
  }
}
function LibararyComponent_tr_82_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 25);
    \u0275\u0275text(2, "View PDF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const book_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("href", book_r9.pdf, \u0275\u0275sanitizeUrl);
  }
}
function LibararyComponent_tr_82_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Not available");
    \u0275\u0275elementEnd();
  }
}
function LibararyComponent_tr_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275template(6, LibararyComponent_tr_82_ng_container_6_Template, 3, 1, "ng-container", 24)(7, LibararyComponent_tr_82_ng_template_7_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const book_r9 = ctx.$implicit;
    const noPdf_r10 = \u0275\u0275reference(8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r9.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r9.author);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", book_r9.pdf)("ngIfElse", noPdf_r10);
  }
}
function LibararyComponent_tr_99_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 25);
    \u0275\u0275text(2, "View PDF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const book_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("href", book_r11.pdf, \u0275\u0275sanitizeUrl);
  }
}
function LibararyComponent_tr_99_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Not available");
    \u0275\u0275elementEnd();
  }
}
function LibararyComponent_tr_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275template(6, LibararyComponent_tr_99_ng_container_6_Template, 3, 1, "ng-container", 24)(7, LibararyComponent_tr_99_ng_template_7_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const book_r11 = ctx.$implicit;
    const noPdf_r12 = \u0275\u0275reference(8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r11.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r11.author);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", book_r11.pdf)("ngIfElse", noPdf_r12);
  }
}
function LibararyComponent_tr_116_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 25);
    \u0275\u0275text(2, "View PDF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const book_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("href", book_r13.pdf, \u0275\u0275sanitizeUrl);
  }
}
function LibararyComponent_tr_116_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Not available");
    \u0275\u0275elementEnd();
  }
}
function LibararyComponent_tr_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275template(6, LibararyComponent_tr_116_ng_container_6_Template, 3, 1, "ng-container", 24)(7, LibararyComponent_tr_116_ng_template_7_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const book_r13 = ctx.$implicit;
    const noPdf_r14 = \u0275\u0275reference(8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r13.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r13.author);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", book_r13.pdf)("ngIfElse", noPdf_r14);
  }
}
function LibararyComponent_tr_133_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 25);
    \u0275\u0275text(2, "View PDF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const book_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("href", book_r15.pdf, \u0275\u0275sanitizeUrl);
  }
}
function LibararyComponent_tr_133_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Not available");
    \u0275\u0275elementEnd();
  }
}
function LibararyComponent_tr_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275template(6, LibararyComponent_tr_133_ng_container_6_Template, 3, 1, "ng-container", 24)(7, LibararyComponent_tr_133_ng_template_7_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const book_r15 = ctx.$implicit;
    const noPdf_r16 = \u0275\u0275reference(8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r15.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r15.author);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", book_r15.pdf)("ngIfElse", noPdf_r16);
  }
}
function LibararyComponent_option_141_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(category_r17);
  }
}
var LibararyComponent = class _LibararyComponent {
  searchText = "";
  isOpen = false;
  dropbtn = " \u2630 ";
  btnText = "\u25BC";
  toggleDropdown() {
    this.isOpen = !this.isOpen;
    this.dropbtn = this.isOpen ? "\xD7" : "\u2630 ";
  }
  isChildrenBooks = false;
  onClick() {
    this.isChildrenBooks = !this.isChildrenBooks;
    this.btnText = this.isChildrenBooks ? "\u25B2" : "\u25BC";
  }
  books = [
    {
      title: "Angular Basics",
      author: "John Doe",
      pdf: "/Angular.pdf"
    },
    {
      title: "Angular Basics",
      author: "John Doe",
      pdf: "/Angular.pdf"
    },
    {
      title: "Angular Basics",
      author: "John Doe",
      pdf: "/Angular.pdf"
    },
    {
      title: "Angular Basics",
      author: "John Doe",
      pdf: "/Angular.pdf"
    },
    {
      title: "Angular Basics",
      author: "John Doe",
      pdf: "/Angular.pdf"
    },
    {
      title: "Angular Basics",
      author: "John Doe",
      pdf: "/Angular.pdf"
    },
    {
      title: "Angular Basics",
      author: "John Doe",
      pdf: "/Angular.pdf"
    },
    {
      title: "Angular Basics",
      author: "John Doe",
      pdf: "/Angular.pdf"
    },
    {
      title: "Angular Basics",
      author: "John Doe",
      pdf: "/Angular.pdf"
    }
  ];
  bookCategory = ["Select Category", "Academic/Educational", "Literature & Fiction", "Non-Fiction", "Fiction", "Religious & Spiritual", "Childrens", "Hobbies & Skill Development"];
  static \u0275fac = function LibararyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LibararyComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LibararyComponent, selectors: [["app-libarary"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 147, vars: 33, consts: [["noPdf", ""], [1, "body"], [1, "dropdown"], [1, "dropbtn", 3, "click"], ["class", "dropdown-content", 4, "ngIf"], ["class", "dropdown-child-content", 4, "ngIf"], [1, "container"], [1, "search-bar"], ["type", "text", "id", "searchInput", "placeholder", "Search books ...", 3, "ngModelChange", "ngModel"], ["id", "books"], [1, "table-container"], ["id", "bookTable"], [1, "table-scroll"], [4, "ngFor", "ngForOf"], ["id", "add-book", 2, "margin-top", "2rem"], ["id", "bookForm"], ["type", "text", "id", "title", "placeholder", "Book Title", "required", ""], ["type", "text", "id", "author", "placeholder", "Author", "required", ""], ["id", "category", "required", ""], ["type", "submit"], [1, "dropdown-content"], [3, "click"], [1, "dropdown-child-content"], ["routerLink", "customer/home"], [4, "ngIf", "ngIfElse"], ["target", "_blank", 3, "href"]], template: function LibararyComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "header")(2, "h1");
      \u0275\u0275text(3, "Library Management System");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "Manage your books efficiently");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "nav")(7, "div", 2)(8, "button", 3);
      \u0275\u0275listener("click", function LibararyComponent_Template_button_click_8_listener() {
        return ctx.toggleDropdown();
      });
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, LibararyComponent_div_10_Template, 17, 7, "div", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(11, LibararyComponent_div_11_Template, 13, 0, "div", 5);
      \u0275\u0275elementStart(12, "div", 6)(13, "div", 7)(14, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function LibararyComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "h2", 9);
      \u0275\u0275text(16, "Academic/Educational Books");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 10)(18, "table", 11)(19, "thead")(20, "tr")(21, "th");
      \u0275\u0275text(22, "Book-Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "th");
      \u0275\u0275text(24, "Author");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "th");
      \u0275\u0275text(26, "View & Read");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(27, "div", 10)(28, "div", 12)(29, "table")(30, "tbody");
      \u0275\u0275template(31, LibararyComponent_tr_31_Template, 9, 4, "tr", 13);
      \u0275\u0275pipe(32, "filter");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(33, "h2", 9);
      \u0275\u0275text(34, "Literature & fiction Books");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 10)(36, "table", 11)(37, "thead")(38, "tr")(39, "th");
      \u0275\u0275text(40, "Book-Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "th");
      \u0275\u0275text(42, "Author");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "th");
      \u0275\u0275text(44, "View & Read");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(45, "div", 12)(46, "table")(47, "tbody");
      \u0275\u0275template(48, LibararyComponent_tr_48_Template, 9, 4, "tr", 13);
      \u0275\u0275pipe(49, "filter");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(50, "h2", 9);
      \u0275\u0275text(51, "Non-Fiction Books");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 10)(53, "table", 11)(54, "thead")(55, "tr")(56, "th");
      \u0275\u0275text(57, "Book-Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th");
      \u0275\u0275text(59, "Author");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "th");
      \u0275\u0275text(61, "View & Read");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(62, "div", 12)(63, "table")(64, "tbody");
      \u0275\u0275template(65, LibararyComponent_tr_65_Template, 9, 4, "tr", 13);
      \u0275\u0275pipe(66, "filter");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(67, "h2", 9);
      \u0275\u0275text(68, "Religious & Spiritual Books");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 10)(70, "table", 11)(71, "thead")(72, "tr")(73, "th");
      \u0275\u0275text(74, "Book-Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "th");
      \u0275\u0275text(76, "Author");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "th");
      \u0275\u0275text(78, "View & Read");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(79, "div", 12)(80, "table")(81, "tbody");
      \u0275\u0275template(82, LibararyComponent_tr_82_Template, 9, 4, "tr", 13);
      \u0275\u0275pipe(83, "filter");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(84, "h2", 9);
      \u0275\u0275text(85, "Compatative Exam Books");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "div", 10)(87, "table", 11)(88, "thead")(89, "tr")(90, "th");
      \u0275\u0275text(91, "Book-Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "th");
      \u0275\u0275text(93, "Author");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "th");
      \u0275\u0275text(95, "View & Read");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(96, "div", 12)(97, "table")(98, "tbody");
      \u0275\u0275template(99, LibararyComponent_tr_99_Template, 9, 4, "tr", 13);
      \u0275\u0275pipe(100, "filter");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(101, "h2", 9);
      \u0275\u0275text(102, "Children's Books");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "div", 10)(104, "table", 11)(105, "thead")(106, "tr")(107, "th");
      \u0275\u0275text(108, "Book-Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "th");
      \u0275\u0275text(110, "Author");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "th");
      \u0275\u0275text(112, "View & Read");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(113, "div", 12)(114, "table")(115, "tbody");
      \u0275\u0275template(116, LibararyComponent_tr_116_Template, 9, 4, "tr", 13);
      \u0275\u0275pipe(117, "filter");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(118, "h2", 9);
      \u0275\u0275text(119, "Hobbies and skill Development Books");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "div", 10)(121, "table", 11)(122, "thead")(123, "tr")(124, "th");
      \u0275\u0275text(125, "Book-Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "th");
      \u0275\u0275text(127, "Author");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "th");
      \u0275\u0275text(129, "View & Read");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(130, "div", 12)(131, "table")(132, "tbody");
      \u0275\u0275template(133, LibararyComponent_tr_133_Template, 9, 4, "tr", 13);
      \u0275\u0275pipe(134, "filter");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(135, "h2", 14);
      \u0275\u0275text(136, "Add New Book");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "form", 15);
      \u0275\u0275element(138, "input", 16)(139, "input", 17);
      \u0275\u0275elementStart(140, "select", 18);
      \u0275\u0275template(141, LibararyComponent_option_141_Template, 2, 1, "option", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "button", 19);
      \u0275\u0275text(143, "Add Book");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(144, "footer")(145, "p");
      \u0275\u0275text(146, "\xA9 2025 Library Management System");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1(" ", ctx.dropbtn, " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isOpen);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isChildrenBooks);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
      \u0275\u0275advance(17);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(32, 12, ctx.books, ctx.searchText));
      \u0275\u0275advance(17);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(49, 15, ctx.books, ctx.searchText));
      \u0275\u0275advance(17);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(66, 18, ctx.books, ctx.searchText));
      \u0275\u0275advance(17);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(83, 21, ctx.books, ctx.searchText));
      \u0275\u0275advance(17);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(100, 24, ctx.books, ctx.searchText));
      \u0275\u0275advance(17);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(117, 27, ctx.books, ctx.searchText));
      \u0275\u0275advance(17);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(134, 30, ctx.books, ctx.searchText));
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.bookCategory);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, FilterPipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ["\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Arial, sans-serif;\n}\n.body[_ngcontent-%COMP%] {\n  background: #f9f9f9;\n  color: #333;\n}\nheader[_ngcontent-%COMP%] {\n  background: #2c3e50;\n  color: #fff;\n  padding: 1rem;\n  text-align: center;\n}\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem;\n}\nnav[_ngcontent-%COMP%] {\n  background: #34495e;\n  padding: 0.5rem;\n}\nh2[_ngcontent-%COMP%] {\n  color: rgb(115, 4, 15);\n  background-color: cadetblue;\n  margin-top: 20px;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: auto;\n  padding: 1rem;\n}\n.search-bar[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\ninput[type=text][_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  margin: 0.3rem 0;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  width: 100%;\n}\nselect[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  margin: 0.3rem 0;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  width: 100%;\n}\nbutton[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  background: #2c3e50;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background: #1a252f;\n}\n.table-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#bookTable[_ngcontent-%COMP%], \n.table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #ccc;\n  text-align: left;\n}\n.table-scroll[_ngcontent-%COMP%] {\n  height: 200px;\n  overflow: auto;\n}\n.table-scroll[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f2f2f2;\n}\nfooter[_ngcontent-%COMP%] {\n  background: #2c3e50;\n  color: white;\n  text-align: center;\n  padding: 1rem;\n  margin-top: 2rem;\n}\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  margin-left: 0px;\n}\n.dropbtn[_ngcontent-%COMP%] {\n  color: white;\n  padding: 10px 20px;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n  border-radius: 5px;\n  margin-left: -20px;\n}\n.dropbtn[_ngcontent-%COMP%]:hover {\n  background-color: #044c8f;\n}\n.dropdown-content[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: white;\n  min-width: 160px;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);\n  z-index: 1;\n  border-radius: 5px;\n  margin-left: -1px;\n  overflow: auto;\n}\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  padding: 10px 15px;\n  text-decoration: none;\n  display: block;\n}\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #f1f1f1;\n}\n.dropdown-child-content[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: white;\n  min-width: 160px;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);\n  z-index: 1;\n  border-radius: 5px;\n  margin-left: 150px;\n  overflow: hidden;\n}\n.dropdown-child-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  padding: 10px 15px;\n  text-decoration: none;\n  display: block;\n}\n.dropdown-child-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #f1f1f1;\n}\n.table-container[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  overflow: hidden;\n}\n.table-scroll[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.table-scroll[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #ccc;\n  text-align: left;\n}\n/*# sourceMappingURL=libarary.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LibararyComponent, { className: "LibararyComponent", filePath: "src\\app\\customer\\libarary\\libarary.component.ts", lineNumber: 14 });
})();

// src/app/customer/forgate-password/forgate-password.component.ts
function ForgatePasswordComponent_form_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 3);
    \u0275\u0275listener("ngSubmit", function ForgatePasswordComponent_form_3_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 4);
    \u0275\u0275elementStart(4, "button", 5);
    \u0275\u0275text(5, "Send OTP");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.forgatePasswordForm);
  }
}
function ForgatePasswordComponent_form_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 3);
    \u0275\u0275listener("ngSubmit", function ForgatePasswordComponent_form_4_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.verifyOtp());
    });
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, "Enter OTP:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 6);
    \u0275\u0275elementStart(4, "button", 5);
    \u0275\u0275text(5, "Verify OTP");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.otpForm);
  }
}
var ForgatePasswordComponent = class _ForgatePasswordComponent {
  fb;
  router;
  http;
  apiService;
  forgatePasswordForm;
  otpForm;
  submitted = false;
  otpSent = false;
  message = "";
  apiUrl = "http://127.0.0.1:8000/send-otp/";
  constructor(fb, router, http, apiService) {
    this.fb = fb;
    this.router = router;
    this.http = http;
    this.apiService = apiService;
    this.forgatePasswordForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]]
    });
    this.otpForm = this.fb.group({
      otp: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(6)]]
    });
  }
  // Email getter
  get email() {
    return this.forgatePasswordForm.get("email");
  }
  // OTP getter
  get otp() {
    return this.otpForm.get("otp");
  }
  // Step 1: Send OTP
  onSubmit() {
    this.submitted = true;
    if (this.forgatePasswordForm.invalid)
      return;
    const emailValue = this.email.value;
    this.http.post("http://localhost:8000/send-otp/", { email: emailValue }).subscribe({
      next: (res) => {
        if (res.success) {
          this.message = "OTP sent to " + emailValue;
          this.otpSent = true;
        } else {
          this.message = res.message;
        }
      },
      error: (err) => {
        this.message = "Error sending OTP!";
      }
    });
  }
  // Step 2: Verify OTP
  verifyOtp() {
    if (this.otpForm.invalid)
      return;
    const otpValue = this.otp.value;
    const emailValue = this.email.value;
    this.http.post("http://localhost:8000/verify-otp/", { email: emailValue, otp: otpValue }).subscribe({
      next: (res) => {
        if (res.success) {
          this.router.navigate(["customer/forgatePassword/reset"]);
        } else {
          this.message = "Invalid OTP, try again!";
        }
      },
      error: (err) => {
        this.message = "Error verifying OTP!";
      }
    });
  }
  static \u0275fac = function ForgatePasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgatePasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgatePasswordComponent, selectors: [["app-forgate-password"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 3, consts: [[1, "forgate-container"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [2, "color", "green"], [3, "ngSubmit", "formGroup"], ["type", "email", "formControlName", "email", "placeholder", "Enter your email"], ["type", "submit"], ["type", "text", "formControlName", "otp", "placeholder", "Enter OTP"]], template: function ForgatePasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2");
      \u0275\u0275text(2, "Forgot Password");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, ForgatePasswordComponent_form_3_Template, 6, 1, "form", 1)(4, ForgatePasswordComponent_form_4_Template, 6, 1, "form", 1);
      \u0275\u0275elementStart(5, "p", 2);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.otpSent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.otpSent);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.message);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ["\n\n.forgate-container[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 80px auto;\n  padding: 25px;\n  border-radius: 12px;\n  background: #ffffff;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  font-family: Arial, sans-serif;\n}\nh2[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  color: #333;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\nlabel[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 14px;\n  font-weight: 600;\n  color: #444;\n}\ninput[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 8px;\n  border: 1px solid #ccc;\n  font-size: 14px;\n  outline: none;\n  transition: border-color 0.3s ease;\n}\ninput[_ngcontent-%COMP%]:focus {\n  border-color: #007bff;\n  box-shadow: 0 0 5px rgba(0, 123, 255, 0.2);\n}\nbutton[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 8px;\n  border: none;\n  font-size: 15px;\n  font-weight: bold;\n  cursor: pointer;\n  background: #007bff;\n  color: #fff;\n  transition: background 0.3s ease;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background: #0056b3;\n}\np[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=forgate-password.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgatePasswordComponent, { className: "ForgatePasswordComponent", filePath: "src\\app\\customer\\forgate-password\\forgate-password.component.ts", lineNumber: 16 });
})();

// src/app/customer/forgate-password/reset-password/reset-password.component.ts
var ResetPasswordComponent = class _ResetPasswordComponent {
  fb;
  http;
  router;
  resetForm;
  message = "";
  constructor(fb, http, router) {
    this.fb = fb;
    this.http = http;
    this.router = router;
    this.resetForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      new_password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  // API call to Django
  resetPassword(email, new_password) {
    const url = "http://127.0.0.1:8000/reset-password/";
    return this.http.post(url, { email, new_password });
  }
  // Form submit handler
  onSubmit(event) {
    if (event)
      event.preventDefault();
    if (this.resetForm.invalid)
      return;
    const { email, new_password } = this.resetForm.value;
    this.resetPassword(email, new_password).subscribe({
      next: (res) => {
        if (res.success) {
          alert("\u2705 Password reset successful!");
          this.router.navigate(["/login"]);
        } else {
          alert("\u274C " + (res.message || "Reset failed!"));
        }
      },
      error: (err) => {
        console.error("Reset Password API Error:", err);
        alert("\u274C Error resetting password!");
      }
    });
  }
  static \u0275fac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetPasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 2, consts: [[1, "container"], [3, "ngSubmit", "formGroup"], ["type", "email", "formControlName", "email"], ["type", "password", "formControlName", "new_password"], ["type", "submit"]], template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2");
      \u0275\u0275text(2, "Reset Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "form", 1);
      \u0275\u0275listener("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_3_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(4, "div")(5, "label");
      \u0275\u0275text(6, "Email:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "input", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div")(9, "label");
      \u0275\u0275text(10, "New Password:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "input", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 4);
      \u0275\u0275text(13, "Reset Password");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "p");
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.resetForm);
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(ctx.message);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, HttpClientModule], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 80px auto;\n  padding: 25px;\n  border: 1px solid #ddd;\n  border-radius: 12px;\n  background-color: #f9f9f9;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  font-family: Arial, sans-serif;\n}\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n  color: #333;\n}\nform[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: bold;\n  margin-bottom: 6px;\n  color: #444;\n}\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #bbb;\n  border-radius: 6px;\n  font-size: 14px;\n  box-sizing: border-box;\n}\ninput[_ngcontent-%COMP%]:focus {\n  border-color: #007bff;\n  outline: none;\n}\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  background: #007bff;\n  color: #fff;\n  font-size: 16px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background 0.3s ease;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background: #0056b3;\n}\np[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  text-align: center;\n  font-size: 14px;\n  color: green;\n}\n.error[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 13px;\n  margin-top: -10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=reset-password.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "src\\app\\customer\\forgate-password\\reset-password\\reset-password.component.ts", lineNumber: 15 });
})();

// src/app/customer/contact/contact.component.ts
function ContactComponent_small_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Name is required ");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_small_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Valid email is required ");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_small_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Message is required ");
    \u0275\u0275elementEnd();
  }
}
var ContactComponent = class _ContactComponent {
  fb;
  contactForm;
  constructor(fb) {
    this.fb = fb;
    this.contactForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      subject: [""],
      message: ["", Validators.required]
    });
  }
  onSubmit() {
    if (this.contactForm.valid) {
      console.log("Form Data:", this.contactForm.value);
      alert("\u2705 Message sent successfully!");
      this.contactForm.reset();
    }
  }
  static \u0275fac = function ContactComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactComponent)(\u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactComponent, selectors: [["app-contact"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 5, consts: [[1, "contact-container"], [3, "ngSubmit", "formGroup"], ["type", "text", "formControlName", "name", "placeholder", "Enter your name"], [4, "ngIf"], ["type", "email", "formControlName", "email", "placeholder", "Enter your email"], ["type", "text", "formControlName", "subject", "placeholder", "Subject"], ["rows", "4", "formControlName", "message", "placeholder", "Write your message..."], ["type", "submit", 3, "disabled"]], template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2");
      \u0275\u0275text(2, "Contact Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "form", 1);
      \u0275\u0275listener("ngSubmit", function ContactComponent_Template_form_ngSubmit_3_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(4, "label");
      \u0275\u0275text(5, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "input", 2);
      \u0275\u0275template(7, ContactComponent_small_7_Template, 2, 0, "small", 3);
      \u0275\u0275elementStart(8, "label");
      \u0275\u0275text(9, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "input", 4);
      \u0275\u0275template(11, ContactComponent_small_11_Template, 2, 0, "small", 3);
      \u0275\u0275elementStart(12, "label");
      \u0275\u0275text(13, "Subject");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "input", 5);
      \u0275\u0275elementStart(15, "label");
      \u0275\u0275text(16, "Message");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "textarea", 6);
      \u0275\u0275template(18, ContactComponent_small_18_Template, 2, 0, "small", 3);
      \u0275\u0275elementStart(19, "button", 7);
      \u0275\u0275text(20, "Send Message");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.contactForm);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ((tmp_1_0 = ctx.contactForm.get("name")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.contactForm.get("name")) == null ? null : tmp_1_0.touched));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.contactForm.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.contactForm.get("email")) == null ? null : tmp_2_0.touched));
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.contactForm.get("message")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.contactForm.get("message")) == null ? null : tmp_3_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.contactForm.invalid);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, CommonModule, NgIf, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ["\n\n.contact-container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 40px auto;\n  padding: 25px;\n  background: #ffffff;\n  border-radius: 16px;\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);\n}\n.contact-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 28px;\n  font-weight: 700;\n  margin-bottom: 20px;\n  color: #333;\n}\n.contact-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  margin-bottom: 6px;\n  color: #444;\n}\n.contact-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.contact-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 14px;\n  margin-bottom: 15px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  font-size: 15px;\n  transition: border 0.3s, box-shadow 0.3s;\n}\n.contact-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.contact-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #3b82f6;\n  box-shadow: 0 0 6px rgba(59, 130, 246, 0.4);\n  outline: none;\n}\n.contact-container[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #e11d48;\n  font-size: 13px;\n  display: block;\n  margin-top: -10px;\n  margin-bottom: 12px;\n}\n.contact-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  background: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.3s, transform 0.2s;\n}\n.contact-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  transform: translateY(-2px);\n}\n.contact-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background: #9ca3af;\n  cursor: not-allowed;\n}\n@media (max-width: 480px) {\n  .contact-container[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .contact-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n/*# sourceMappingURL=contact.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactComponent, { className: "ContactComponent", filePath: "src\\app\\customer\\contact\\contact.component.ts", lineNumber: 14 });
})();

// src/app/customer/track-order/track-order.component.ts
var _c05 = (a0, a1, a2, a3, a4) => ({ "badge-confirmed": a0, "badge-cancelled": a1, "badge-pending": a2, "badge-tracking": a3, "badge-delivered": a4 });
function TrackOrderComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p")(2, "strong");
    \u0275\u0275text(3, "Order ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p")(6, "strong");
    \u0275\u0275text(7, "Product:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p")(10, "strong");
    \u0275\u0275text(11, "Author:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p")(14, "strong");
    \u0275\u0275text(15, "Amount:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p")(18, "strong");
    \u0275\u0275text(19, "Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 4);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "p")(24, "strong");
    \u0275\u0275text(25, "Placed On:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.order.id, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.order.book.title, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.order.book.author, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" \u20B9", ctx_r1.order.book.price, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(12, _c05, ctx_r1.order.status === "confirmed", ctx_r1.order.status === "cancelled", ctx_r1.order.status === "pending", ctx_r1.order.status === "tracking", ctx_r1.order.status === "delivered"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 7, ctx_r1.order.status));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(27, 9, ctx_r1.order.created_at, "yyyy-MM-dd"), " ");
  }
}
function TrackOrderComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusMessage);
  }
}
var TrackOrderComponent = class _TrackOrderComponent {
  http;
  route;
  router;
  bookImage;
  order = null;
  orderId = "";
  statusMessage = "";
  constructor(http, route, router, bookImage) {
    this.http = http;
    this.route = route;
    this.router = router;
    this.bookImage = bookImage;
  }
  ngOnInit() {
    this.orderId = this.route.snapshot.paramMap.get("id") || "";
    if (this.orderId) {
      this.fetchOrder();
    } else {
      this.statusMessage = "No order ID provided.";
    }
  }
  fetchOrder() {
    this.http.post("http://127.0.0.1:8000/api/order/get/", {
      order_id: this.orderId
    }).subscribe((res) => {
      if (res.success && res.order) {
        this.order = res.order;
        if (this.order.book && (!this.order.book.image || this.order.book.image.trim() === "")) {
          const img = this.bookImage.getImageForTitle(this.order.book.title);
          if (img)
            this.order.book.image = img;
        }
      } else {
        this.statusMessage = "Order not found.";
      }
    }, (err) => {
      this.statusMessage = "Error fetching order.";
    });
  }
  static \u0275fac = function TrackOrderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TrackOrderComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(BookImageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrackOrderComponent, selectors: [["app-track-order"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 2, consts: [["notFound", ""], [1, "track-order-container"], [4, "ngIf", "ngIfElse"], [1, "btn-back", 3, "click"], [1, "badge", 3, "ngClass"]], template: function TrackOrderComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "h2");
      \u0275\u0275text(2, "Track Your Order");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, TrackOrderComponent_div_3_Template, 28, 18, "div", 2)(4, TrackOrderComponent_ng_template_4_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(6, "button", 3);
      \u0275\u0275listener("click", function TrackOrderComponent_Template_button_click_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.router.navigate(["/customer/profile"]));
      });
      \u0275\u0275text(7, " Back to Profile ");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const notFound_r3 = \u0275\u0275reference(5);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.order)("ngIfElse", notFound_r3);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, TitleCasePipe, DatePipe, ReactiveFormsModule], styles: ["\n\n.track-order-container[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: 40px auto;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);\n  padding: 32px 40px;\n  font-family: Arial, sans-serif;\n}\n.track-order-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #3498db;\n  margin-bottom: 24px;\n}\n.track-order-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  margin: 10px 0;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 14px;\n  border-radius: 20px;\n  font-size: 0.95em;\n  font-weight: 600;\n  color: #fff;\n  letter-spacing: 0.5px;\n}\n.badge-confirmed[_ngcontent-%COMP%] {\n  background: #3498db;\n}\n.badge-cancelled[_ngcontent-%COMP%] {\n  background: #e74c3c;\n}\n.badge-pending[_ngcontent-%COMP%] {\n  background: #f1c40f;\n  color: #333;\n}\n.badge-tracking[_ngcontent-%COMP%] {\n  background: #8e44ad;\n}\n.badge-delivered[_ngcontent-%COMP%] {\n  background: #27ae60;\n}\n.btn-back[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding: 8px 24px;\n  background: #2980b9;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  font-size: 1em;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background: #1c5d8c;\n}\n/*# sourceMappingURL=track-order.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrackOrderComponent, { className: "TrackOrderComponent", filePath: "src\\app\\customer\\track-order\\track-order.component.ts", lineNumber: 20 });
})();

// src/app/customer/edit-profile.component.ts
var EditProfileComponent = class _EditProfileComponent {
  fb;
  http;
  router;
  profileForm;
  user;
  updateProfileUrl = "http://127.0.0.1:8000/api/user/update-profile/";
  constructor(fb, http, router) {
    this.fb = fb;
    this.http = http;
    this.router = router;
    this.profileForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", Validators.required],
      address: ["", Validators.required]
    });
  }
  ngOnInit() {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      this.profileForm.patchValue({
        name: this.user.name,
        email: this.user.email,
        phone: this.user.phone,
        address: this.user.address
      });
    }
  }
  onSubmit() {
    if (this.profileForm.valid) {
      const updatedData = this.profileForm.value;
      updatedData.id = this.user.id;
      this.http.post(this.updateProfileUrl, updatedData).subscribe((res) => {
        if (res.success) {
          localStorage.setItem("user", JSON.stringify(res.user));
          this.router.navigate(["/profile"]);
        }
      });
    }
  }
  static \u0275fac = function EditProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditProfileComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditProfileComponent, selectors: [["app-edit-profile"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 2, consts: [[1, "edit-profile-container"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "name"], ["id", "name", "formControlName", "name", "type", "text"], ["for", "email"], ["id", "email", "formControlName", "email", "type", "email"], ["for", "phone"], ["id", "phone", "formControlName", "phone", "type", "text"], ["for", "address"], ["id", "address", "formControlName", "address", "type", "text"], ["type", "submit", 3, "disabled"]], template: function EditProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2");
      \u0275\u0275text(2, "Edit Profile");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "form", 1);
      \u0275\u0275listener("ngSubmit", function EditProfileComponent_Template_form_ngSubmit_3_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(4, "div", 2)(5, "label", 3);
      \u0275\u0275text(6, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "input", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 2)(9, "label", 5);
      \u0275\u0275text(10, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "input", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 2)(13, "label", 7);
      \u0275\u0275text(14, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275element(15, "input", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 2)(17, "label", 9);
      \u0275\u0275text(18, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "input", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "button", 11);
      \u0275\u0275text(21, "Save Changes");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.profileForm);
      \u0275\u0275advance(17);
      \u0275\u0275property("disabled", !ctx.profileForm.valid);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.edit-profile-container[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 40px auto;\n  padding: 24px;\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.edit-profile-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 500;\n}\ninput[type=text][_ngcontent-%COMP%], \ninput[type=email][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 15px;\n}\nbutton[type=submit][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  background: #007bff;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  font-size: 16px;\n  cursor: pointer;\n  margin-top: 10px;\n}\nbutton[disabled][_ngcontent-%COMP%] {\n  background: #aaa;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=edit-profile.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditProfileComponent, { className: "EditProfileComponent", filePath: "src\\app\\customer\\edit-profile.component.ts", lineNumber: 14 });
})();

// src/app/customer/payment.component.ts
function PaymentComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label");
    \u0275\u0275text(2, "Amount (INR):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 2);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentComponent_div_3_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.amount, $event) || (ctx_r1.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 3);
    \u0275\u0275listener("click", function PaymentComponent_div_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.payWithRazorpay());
    });
    \u0275\u0275text(5, "Pay Now");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.amount);
  }
}
function PaymentComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Payment successful! Payment ID: ", ctx_r1.paymentId, "");
  }
}
var PaymentComponent = class _PaymentComponent {
  http;
  router;
  amount = 500;
  // Example amount in INR
  paymentSuccess = false;
  paymentId = "";
  constructor(http, router) {
    this.http = http;
    this.router = router;
  }
  payWithRazorpay() {
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID",
      // Replace with your Razorpay key
      amount: this.amount * 100,
      // Amount in paise
      currency: "INR",
      name: "BookDepot",
      description: "Order Payment",
      handler: (response) => {
        this.paymentSuccess = true;
        this.paymentId = response.razorpay_payment_id;
        this.http.post("/api/payment/transfer/", {
          payment_id: this.paymentId,
          amount: this.amount
        }).subscribe(() => {
          alert("Payment successful and transferred to bank!");
          this.router.navigate(["/profile"]);
        });
      },
      prefill: {
        name: "",
        email: "",
        contact: ""
      },
      theme: {
        color: "#007bff"
      }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  }
  static \u0275fac = function PaymentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaymentComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentComponent, selectors: [["app-payment"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 2, consts: [[1, "payment-container"], [4, "ngIf"], ["type", "number", "min", "1", 3, "ngModelChange", "ngModel"], [3, "click"]], template: function PaymentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2");
      \u0275\u0275text(2, "Pay with Razorpay");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, PaymentComponent_div_3_Template, 6, 1, "div", 1)(4, PaymentComponent_div_4_Template, 3, 1, "div", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.paymentSuccess);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.paymentSuccess);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, FormsModule, NgModel], styles: ["\n\n.payment-container[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 40px auto;\n  padding: 24px;\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  text-align: center;\n}\n.payment-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\ninput[type=number][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 15px;\n  margin-bottom: 16px;\n}\nbutton[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  background: #007bff;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  font-size: 16px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=payment.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentComponent, { className: "PaymentComponent", filePath: "src\\app\\customer\\payment.component.ts", lineNumber: 14 });
})();

// src/app/admin/admin-dashboard.component.ts
function AdminDashboardComponent_div_10_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275element(12, "img", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const book_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r3.author);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", book_r3.price, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r3.category);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", book_r3.image, \u0275\u0275sanitizeUrl);
  }
}
function AdminDashboardComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 7)(2, "div", 8)(3, "h2", 9);
    \u0275\u0275text(4, "Add New Book");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "form", 10, 0);
    \u0275\u0275listener("ngSubmit", function AdminDashboardComponent_div_10_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addBook());
    });
    \u0275\u0275elementStart(7, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_10_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newBook.title, $event) || (ctx_r1.newBook.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_10_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newBook.author, $event) || (ctx_r1.newBook.author = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_10_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newBook.price, $event) || (ctx_r1.newBook.price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_10_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newBook.category, $event) || (ctx_r1.newBook.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_10_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newBook.image, $event) || (ctx_r1.newBook.image = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 16);
    \u0275\u0275text(13, " \uFF0B Add Book ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "table", 17)(15, "thead")(16, "tr")(17, "th");
    \u0275\u0275text(18, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Author");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "Image");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "tbody");
    \u0275\u0275template(30, AdminDashboardComponent_div_10_tr_30_Template, 13, 6, "tr", 18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newBook.title);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newBook.author);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newBook.price);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newBook.category);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newBook.image);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r1.books);
  }
}
function AdminDashboardComponent_div_11_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "button", 22);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_11_tr_17_Template_button_click_10_listener() {
      const order_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openOrderDetails(order_r5));
    });
    \u0275\u0275text(11, " Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 22);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_11_tr_17_Template_button_click_12_listener() {
      const order_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeOrderStatus(order_r5, "tracking"));
    });
    \u0275\u0275text(13, " Set Tracking ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 22);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_11_tr_17_Template_button_click_14_listener() {
      const order_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeOrderStatus(order_r5, "delivered"));
    });
    \u0275\u0275text(15, " Mark Delivered ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r5.customer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", order_r5.total, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r5.status);
  }
}
function AdminDashboardComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 7)(2, "div", 20)(3, "h2", 21);
    \u0275\u0275text(4, "Confirmed Orders");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "table", 17)(6, "thead")(7, "tr")(8, "th");
    \u0275\u0275text(9, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, AdminDashboardComponent_div_11_tr_17_Template, 16, 4, "tr", 18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r1.orders);
  }
}
function AdminDashboardComponent_div_12_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r6.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r6.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r6.role);
  }
}
function AdminDashboardComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 7)(2, "div", 20)(3, "h2", 21);
    \u0275\u0275text(4, "Registered Users");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "table", 17)(6, "thead")(7, "tr")(8, "th");
    \u0275\u0275text(9, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Role");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, AdminDashboardComponent_div_12_tr_17_Template, 9, 4, "tr", 18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r1.users);
  }
}
function AdminDashboardComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "h3");
    \u0275\u0275text(3, "Order Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p")(5, "strong");
    \u0275\u0275text(6, "Book:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p")(9, "strong");
    \u0275\u0275text(10, "Author:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p")(13, "strong");
    \u0275\u0275text(14, "Customer:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "label", 25)(17, "strong");
    \u0275\u0275text(18, "Address:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "textarea", 26);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_13_Template_textarea_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedOrder.address, $event) || (ctx_r1.selectedOrder.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p")(21, "strong");
    \u0275\u0275text(22, "Phone:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p")(25, "strong");
    \u0275\u0275text(26, "Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 27)(29, "button", 28);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_13_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveOrderAddress());
    });
    \u0275\u0275text(30, " Save Address ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 22);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_13_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeOrderDetails());
    });
    \u0275\u0275text(32, "Close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedOrder.book == null ? null : ctx_r1.selectedOrder.book.title, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedOrder.book == null ? null : ctx_r1.selectedOrder.book.author, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedOrder.customer_name, "");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedOrder.address);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedOrder.phone, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedOrder.status, "");
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  ApiService;
  bookStore;
  router;
  activeTab = "books";
  // ===== Books =====
  books = [
    {
      id: 1,
      title: "React Basics",
      author: "Dan Abramov",
      price: 499,
      category: "Programming",
      image: "https://via.placeholder.com/100"
    }
  ];
  newBook = { title: "", author: "", price: 0, category: "", image: "" };
  // ===== Orders =====
  orders = [
    { id: 1, customer: "John Doe", total: 1198, status: "Confirmed" },
    { id: 2, customer: "Jane Smith", total: 499, status: "Pending" },
    { id: 3, customer: "Mark Lee", total: 999, status: "Confirmed" }
  ];
  get confirmedOrders() {
    return this.orders.filter((o) => String(o.status).toLowerCase() === "confirmed");
  }
  // ===== Users =====
  users = [];
  constructor(ApiService2, bookStore, router) {
    this.ApiService = ApiService2;
    this.bookStore = bookStore;
    this.router = router;
  }
  ngOnInit() {
    const user = localStorage.getItem("user");
    if (!user) {
      this.router.navigate(["/customer/login"], {
        queryParams: { returnUrl: "/admin" }
      });
      return;
    }
    this.loadUsers();
    this.loadOrders();
  }
  setActiveTab(tab) {
    this.activeTab = tab;
  }
  // Add Book
  addBook() {
    if (!this.newBook.title || !this.newBook.author || !this.newBook.price) {
      alert("Please fill all required fields!");
      return;
    }
    const bookPayload = __spreadProps(__spreadValues({}, this.newBook), {
      image: this.newBook.image || "https://via.placeholder.com/100"
    });
    const cat = (this.newBook.category || "").toLowerCase().trim();
    let target = "others";
    if (cat.includes("educat") || cat.includes("academic"))
      target = "educational";
    else if (cat.includes("fiction") && !cat.includes("non"))
      target = "fiction";
    else if (cat.includes("non") || cat.includes("non-fiction") || cat.includes("non fiction"))
      target = "non-fiction";
    else if (cat.includes("hobb"))
      target = "hobbies";
    else if (cat.includes("compet") || cat.includes("compt") || cat.includes("comp"))
      target = "comptative";
    else if (cat.includes("child") || cat.includes("children"))
      target = "children";
    this.bookStore.addBookToCategory(target, bookPayload);
    const newId = this.books.length + 1;
    this.books.push(__spreadProps(__spreadValues({
      id: newId
    }, bookPayload), {
      category: this.newBook.category
    }));
    alert(`Book added to ${target} category`);
    this.newBook = { title: "", author: "", price: 0, category: "", image: "" };
  }
  // Load Users from backend
  loadUsers() {
    this.ApiService.getUsers().subscribe({
      next: (data) => {
        this.users = Array.isArray(data) ? data : data;
      },
      error: (err) => console.error("Error fetching users:", err)
    });
  }
  // Load all orders from backend
  loadOrders() {
    this.ApiService.getAllOrders().subscribe({
      next: (body) => {
        if (body && body.success && Array.isArray(body.orders)) {
          this.orders = body.orders.map((o) => ({
            id: o.id || o._id || 0,
            customer: o.customer_name || o.email || "",
            total: o.book?.price || 0,
            status: o.status || "confirmed",
            raw: o
          }));
        } else {
          console.error("Unexpected orders payload", body);
        }
      },
      error: (err) => console.error("Error loading orders:", err)
    });
  }
  // Open details modal (just sets selectedOrder)
  selectedOrder = null;
  openOrderDetails(order) {
    this.selectedOrder = order.raw || order;
  }
  closeOrderDetails() {
    this.selectedOrder = null;
  }
  // Update order status
  changeOrderStatus(order, status) {
    const id = order.id || order._id || order.raw?.id || order.raw?._id;
    this.ApiService.updateOrderStatus(id, status).subscribe({
      next: (res) => {
        alert("Order status updated");
        this.loadOrders();
      },
      error: (err) => {
        console.error("Failed to update status", err);
        alert("Failed to update status");
      }
    });
  }
  // Save updated address for selected order
  saveOrderAddress() {
    if (!this.selectedOrder)
      return;
    const id = this.selectedOrder.id || this.selectedOrder._id || this.selectedOrder.raw?.id || this.selectedOrder.raw?._id;
    const address = this.selectedOrder.address;
    if (!id) {
      alert("Order id not found");
      return;
    }
    this.ApiService.updateOrderAddress(id, address).subscribe({
      next: (res) => {
        alert("Address updated");
        this.closeOrderDetails();
        this.loadOrders();
      },
      error: (err) => {
        console.error("Failed to update address", err);
        alert("Failed to update address");
      }
    });
  }
  static \u0275fac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminDashboardComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(BookStoreService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 10, consts: [["bookForm", "ngForm"], [1, "admin-dashboard", "p-6", "bg-gray-50", "min-h-screen"], [1, "text-2xl", "font-bold", "mb-6"], [1, "tabs", "mb-4", "flex", "gap-4"], [1, "cursor-pointer", 3, "click"], [4, "ngIf"], ["class", "modal", 4, "ngIf"], [1, "card", "mb-6"], [1, "card-content", "flex", "flex-col", "p-4"], [1, "text-xl", "font-semibold", "mb-2"], [1, "grid", "gap-2", "md:grid-cols-2", 3, "ngSubmit"], ["type", "text", "placeholder", "Book Title", "name", "title", "required", "", 1, "p-2", "border", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Author", "name", "author", "required", "", 1, "p-2", "border", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Price", "name", "price", "required", "", 1, "p-2", "border", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Category", "name", "category", "required", "", 1, "p-2", "border", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Image URL", "name", "image", 1, "p-2", "border", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "col-span-2", "mt-2"], [1, "table", "w-full", "border"], [4, "ngFor", "ngForOf"], ["alt", "Book Image", "width", "60", 3, "src"], [1, "card-content", "p-4"], [1, "text-xl", "font-semibold"], [1, "btn", 3, "click"], [1, "modal"], [1, "modal-content"], ["for", "editAddress"], ["id", "editAddress", "rows", "3", 1, "w-full", "p-2", "border", 3, "ngModelChange", "ngModel"], [1, "mt-2", "flex", "gap-2"], [1, "btn", "btn-primary", 3, "click"]], template: function AdminDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "h1", 2);
      \u0275\u0275text(2, "\u{1F4DA} Admin Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "ul", 3)(4, "li", 4);
      \u0275\u0275listener("click", function AdminDashboardComponent_Template_li_click_4_listener() {
        return ctx.setActiveTab("books");
      });
      \u0275\u0275text(5, " Books ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "li", 4);
      \u0275\u0275listener("click", function AdminDashboardComponent_Template_li_click_6_listener() {
        return ctx.setActiveTab("orders");
      });
      \u0275\u0275text(7, " Orders ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "li", 4);
      \u0275\u0275listener("click", function AdminDashboardComponent_Template_li_click_8_listener() {
        return ctx.setActiveTab("users");
      });
      \u0275\u0275text(9, " Users ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, AdminDashboardComponent_div_10_Template, 31, 6, "div", 5)(11, AdminDashboardComponent_div_11_Template, 18, 1, "div", 5)(12, AdminDashboardComponent_div_12_Template, 18, 1, "div", 5)(13, AdminDashboardComponent_div_13_Template, 33, 6, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "router-outlet");
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activeTab === "books");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "orders");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "users");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.activeTab === "books");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "orders");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "users");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedOrder);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterOutlet, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormsModule, NgModel, NgForm], styles: ['\n\n.admin-dashboard[_ngcontent-%COMP%] {\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  color: #2c3e50;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  list-style: none;\n  padding: 0;\n  border-bottom: 2px solid #e0e0e0;\n}\n.tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  cursor: pointer;\n  font-weight: 500;\n  border-radius: 6px 6px 0 0;\n  transition: all 0.3s ease;\n  color: #555;\n}\n.tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111;\n}\n.tabs[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  font-weight: bold;\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n}\n.card-content[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f0f0f0;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border-radius: 8px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: 0.3s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #1e40af;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  border: 1px solid #2563eb;\n  color: #2563eb;\n  background: transparent;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  color: #fff;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #fff;\n  border: none;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 12px;\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: #fff;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  text-align: left;\n  padding: 12px;\n  font-size: 14px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-bottom: 1px solid #f0f0f0;\n  font-size: 14px;\n  color: #333;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f9fafb;\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src\\app\\admin\\admin-dashboard.component.ts", lineNumber: 16 });
})();

// src/app/app.routes.ts
var routes = [
  { path: "customer/profile", component: ProfileComponent },
  { path: "customer/service", component: ServiceComponent },
  { path: "customer/about", component: AboutComponent },
  { path: "", redirectTo: "customer/home", pathMatch: "full" },
  { path: "customer/home", component: HomeComponent },
  { path: "customer/home/educational", component: EducationalComponent },
  {
    path: "customer/home/educational/shoping",
    component: ShopingPageComponent
  },
  {
    path: "customer/home/educational/shoping/order",
    component: OrderPageComponent
  },
  {
    path: "customer/home/educational/shoping/order/payment",
    component: SellingPageComponent
  },
  {
    path: "customer/home/educational/shoping/order/payment/bank-detail",
    component: BankDetailComponent
  },
  {
    path: "customer/home/educational/shoping/order/payment/bank-detail/payment-confirmation",
    component: PaymentCinfrmComponent
  },
  { path: "customer/home/fiction", component: FictionComponent },
  { path: "customer/home/fictional/shoping", component: ShopingPageComponent },
  { path: "customer/home/non-fiction", component: NonFictionComponent },
  {
    path: "customer/home/non-fictional/shoping",
    component: ShopingPageComponent
  },
  { path: "customer/home/children", component: ChildrenComponent },
  { path: "customer/home/children/shoping", component: ShopingPageComponent },
  { path: "customer/home/religious", component: ReligiousComponent },
  { path: "customer/home/religious/shoping", component: ShopingPageComponent },
  {
    path: "customer/home/religious/shoping/order",
    component: OrderPageComponent
  },
  { path: "customer/home/hobbies", component: HobbiesComponent },
  { path: "customer/home/hobbies/shoping", component: ShopingPageComponent },
  { path: "customer/home/comptative", component: ComptativeComponent },
  { path: "customer/home/comptative/shoping", component: ShopingPageComponent },
  { path: "customer/login", component: LoginComponent },
  { path: "customer/registrationForm", component: RegistrationFormComponent },
  { path: "customer/order-page", component: OrderPageComponent },
  { path: "customer/libarary", component: LibararyComponent },
  { path: "customer/forgatePassword", component: ForgatePasswordComponent },
  { path: "customer/forgatePassword/reset", component: ResetPasswordComponent },
  { path: "trackOrder", component: TrackOrderComponent },
  { path: "editProfile", component: EditProfileComponent },
  { path: "customer/payment-confirm", component: PaymentCinfrmComponent },
  { path: "mkPayment", component: PaymentComponent },
  //{ path: '**', redirectTo: '/customer/home' },
  { path: "customer/contact", component: ContactComponent },
  { path: "admin", component: AdminDashboardComponent }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideHttpClient(withJsonpSupport()),
    // 👈 HttpClient + JSONP सपोर्ट
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration()
  ]
};

// src/app/app.config.server.ts
var serverConfig = {
  providers: [
    provideServerRendering()
  ]
};
var config = mergeApplicationConfig(appConfig, serverConfig);

// src/main.server.ts
var bootstrap = () => bootstrapApplication(AppComponent, config);
var main_server_default = bootstrap;

export {
  main_server_default
};
/*! Bundled license information:

@angular/forms/fesm2022/forms.mjs:
  (**
   * @license Angular v18.2.13
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-ALKL4JDE.mjs.map
