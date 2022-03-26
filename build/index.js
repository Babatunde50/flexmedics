var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/babatundeololade/Desktop/hospital/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());

// app/styles/app.css
var app_default = "/build/_assets/app-SO6LJ4OL.css";

// route:/Users/babatundeololade/Desktop/hospital/app/root.tsx
var meta = () => {
  return { title: "New Remix App" };
};
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route:/Users/babatundeololade/Desktop/hospital/app/routes/reserve/$reservationId.tsx
var reservationId_exports = {};
__export(reservationId_exports, {
  default: () => Index,
  loader: () => loader
});
init_react();
var import_remix3 = __toESM(require_remix());

// app/utils/db.server.ts
init_react();
var import_client = require("@prisma/client");
var db;
if (false) {
  db = new import_client.PrismaClient();
  db.$connect();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
    global.__db.$connect();
  }
  db = global.__db;
}

// route:/Users/babatundeololade/Desktop/hospital/app/routes/reserve/$reservationId.tsx
var loader = async ({ params }) => {
  const reservation = await db.reservations.findFirst({
    where: { id: params.reservationId }
  });
  if (!reservation) {
    return (0, import_remix3.redirect)("/reserve");
  }
  return { reservation };
};
function Index() {
  (0, import_remix3.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "p-24 h-screen bg-green-400 space-y-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-5 rounded-lg border border-green-400 bg-green-300 text-green-900"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "font-bold text-xl pb-2"
  }, " We've received your data "), /* @__PURE__ */ React.createElement("p", {
    className: "pt-2"
  }, "We will send you your result through the email you provided.")));
}

// route:/Users/babatundeololade/Desktop/hospital/app/routes/reserve/index.tsx
var reserve_exports = {};
__export(reserve_exports, {
  action: () => action,
  default: () => Index2
});
init_react();
var import_remix4 = __toESM(require_remix());
var import_react_dropzone = require("react-dropzone");
var import_validator = __toESM(require("validator"));
var import_react = require("react");
var import_client2 = require("@prisma/client");
var badRequest = (data) => (0, import_remix4.json)(data, { status: 400 });
var action = async ({ request }) => {
  const form = await request.formData();
  const lastName = form.get("lastName");
  const firstName = form.get("firstName");
  const dateOfBirth = form.get("dateOfBirth");
  const phoneNumber = form.get("phoneNumber");
  const email = form.get("email");
  const gender = form.get("gender");
  const passportNumber = form.get("passportNumber");
  const testResult = form.get("testResult");
  if (typeof lastName !== "string" || typeof firstName !== "string" || typeof dateOfBirth !== "string" || typeof phoneNumber !== "string" || typeof passportNumber !== "string" || typeof testResult !== "string" || typeof email !== "string" || typeof gender !== "string") {
    return badRequest({
      formError: `Form not submitted correctly.`
    });
  }
  const fieldErrors = {
    lastName: lastName.length < 2 ? "Last Name is too short" : void 0,
    firstName: firstName.length < 2 ? "First Name is too short" : void 0,
    dateOfBirth: dateOfBirth.length < 2 ? "Date of Birth is too short" : void 0,
    phoneNumber: phoneNumber.length < 2 ? "Phone Number is too short" : void 0,
    testResult: import_validator.default.isDataURI(testResult) ? void 0 : "Not a valid image",
    passportNumber: import_validator.default.isLength(passportNumber, { min: 4 }) ? void 0 : "Passport Number is too short",
    email: import_validator.default.isEmail(email) ? void 0 : "Invalid Email Address"
  };
  const fields = {
    lastName,
    firstName,
    dateOfBirth,
    phoneNumber,
    testResult,
    passportNumber,
    email,
    gender
  };
  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields });
  }
  const reservation = await db.reservations.create({
    data: __spreadProps(__spreadValues({}, fields), { status: import_client2.Status.PENDING })
  });
  return (0, import_remix4.redirect)(`/reserve/${reservation.id}`);
};
function Index2() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F;
  const actionData = (0, import_remix4.useActionData)();
  const [resultImage, setResultImage] = (0, import_react.useState)("");
  const [fileName, setFileName] = (0, import_react.useState)("");
  const onDrop = (0, import_react.useCallback)((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      setFileName(file.name);
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const binaryStr = reader.result;
        setResultImage(binaryStr);
      };
      reader.readAsDataURL(file);
    });
  }, []);
  const { getRootProps, getInputProps } = (0, import_react_dropzone.useDropzone)({ onDrop });
  console.log("reserve...");
  return /* @__PURE__ */ React.createElement("div", {
    className: "mt-16 max-w-screen-lg mx-auto"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "mx-auto h-12 w-auto",
    src: "https://www.flexmedic.ca/images/logo.1647454729.jpg",
    alt: "Workflow"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "md:grid md:grid-cols-3 md:gap-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:col-span-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-4 sm:px-0"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-lg font-medium leading-6 text-gray-900"
  }, "Provide your information"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-1 text-sm text-gray-600"
  }, "Use a permanent address where you can receive mail."))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-5 md:mt-0 md:col-span-2"
  }, /* @__PURE__ */ React.createElement("form", {
    action: "/reserve?index",
    method: "POST"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-md overflow-hidden sm:rounded-md"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-4 py-5 bg-white sm:p-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mb-4"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email",
    className: "block text-sm font-medium text-gray-700"
  }, "E-Mail"), /* @__PURE__ */ React.createElement("input", {
    type: "email",
    defaultValue: (_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.email,
    "aria-invalid": Boolean((_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.email) || void 0,
    "aria-describedby": ((_c = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _c.email) ? "email-error" : void 0,
    style: {
      borderColor: Boolean((_d = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _d.email) ? "red" : ""
    },
    name: "email",
    id: "email",
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  }), ((_e = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _e.email) ? /* @__PURE__ */ React.createElement("p", {
    className: "text-rose-700",
    role: "alert",
    id: "email-error"
  }, actionData.fieldErrors.email) : null), /* @__PURE__ */ React.createElement("div", {
    className: "mb-4"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "firstName",
    className: "block text-sm font-medium text-gray-700"
  }, "First Name"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "firstName",
    id: "firstName",
    defaultValue: (_f = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _f.firstName,
    "aria-invalid": Boolean((_g = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _g.firstName) || void 0,
    style: {
      borderColor: Boolean((_h = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _h.firstName) ? "red" : ""
    },
    "aria-describedby": ((_i = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _i.firstName) ? "firstName-error" : void 0,
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  }), ((_j = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _j.firstName) ? /* @__PURE__ */ React.createElement("p", {
    className: "text-rose-700",
    role: "alert",
    id: "firstName-error"
  }, actionData.fieldErrors.firstName) : null), /* @__PURE__ */ React.createElement("div", {
    className: "mb-4"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "lastName",
    className: "block text-sm font-medium text-gray-700"
  }, "Last Name"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "lastName",
    id: "lastName",
    defaultValue: (_k = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _k.lastName,
    "aria-invalid": Boolean((_l = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _l.lastName) || void 0,
    style: {
      borderColor: Boolean((_m = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _m.lastName) ? "red" : ""
    },
    "aria-describedby": ((_n = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _n.lastName) ? "lastName-error" : void 0,
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  }), ((_o = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _o.lastName) ? /* @__PURE__ */ React.createElement("p", {
    className: "text-rose-700",
    role: "alert",
    id: "lastName-error"
  }, actionData.fieldErrors.lastName) : null), /* @__PURE__ */ React.createElement("div", {
    className: "mb-4"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "dateOfBirth",
    className: "block text-sm font-medium text-gray-700"
  }, "Gender"), /* @__PURE__ */ React.createElement("select", {
    name: "gender",
    className: "w-full border bg-white rounded px-3 py-2 outline-none shadow"
  }, /* @__PURE__ */ React.createElement("option", {
    value: "Male"
  }, " Male"), /* @__PURE__ */ React.createElement("option", {
    value: "Female"
  }, " Female "))), /* @__PURE__ */ React.createElement("div", {
    className: "mb-4"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "dateOfBirth",
    className: "block text-sm font-medium text-gray-700"
  }, "Date of Birth"), /* @__PURE__ */ React.createElement("input", {
    type: "date",
    name: "dateOfBirth",
    id: "dateOfBirth",
    style: {
      borderColor: Boolean((_p = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _p.dateOfBirth) ? "red" : ""
    },
    defaultValue: (_q = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _q.dateOfBirth,
    "aria-invalid": Boolean((_r = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _r.dateOfBirth) || void 0,
    "aria-describedby": ((_s = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _s.dateOfBirth) ? "dateOfBirth-error" : void 0,
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  }), ((_t = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _t.dateOfBirth) ? /* @__PURE__ */ React.createElement("p", {
    className: "text-rose-700",
    role: "alert",
    id: "dateOfBirth-error"
  }, actionData.fieldErrors.dateOfBirth) : null), /* @__PURE__ */ React.createElement("div", {
    className: "mb-4"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "passportNumber",
    className: "block text-sm font-medium text-gray-700"
  }, "Passport Number"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "passportNumber",
    id: "passportNumber",
    defaultValue: (_u = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _u.passportNumber,
    style: {
      borderColor: Boolean((_v = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _v.passportNumber) ? "red" : ""
    },
    "aria-invalid": Boolean((_w = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _w.passportNumber) || void 0,
    "aria-describedby": ((_x = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _x.passportNumber) ? "passportNumber-error" : void 0,
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  }), ((_y = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _y.passportNumber) ? /* @__PURE__ */ React.createElement("p", {
    className: "text-rose-700",
    role: "alert",
    id: "passportNumber-error"
  }, actionData.fieldErrors.passportNumber) : null), /* @__PURE__ */ React.createElement("div", {
    className: "mb-4"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "phoneNumber",
    className: "block text-sm font-medium text-gray-700"
  }, "Phone Number"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "phoneNumber",
    id: "phoneNumber",
    defaultValue: (_z = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _z.phoneNumber,
    "aria-invalid": Boolean((_A = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _A.phoneNumber) || void 0,
    style: {
      borderColor: Boolean((_B = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _B.phoneNumber) ? "red" : ""
    },
    "aria-describedby": ((_C = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _C.phoneNumber) ? "phoneNumber-error" : void 0,
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  }), ((_D = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _D.phoneNumber) ? /* @__PURE__ */ React.createElement("p", {
    className: "text-rose-700",
    role: "alert",
    id: "phoneNumber-error"
  }, actionData.fieldErrors.phoneNumber) : null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    className: "block text-sm font-medium text-gray-700"
  }, "Test Result"), /* @__PURE__ */ React.createElement("div", __spreadProps(__spreadValues({}, getRootProps()), {
    className: "mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md",
    style: {
      borderColor: Boolean((_E = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _E.testResult) ? "red" : ""
    }
  }), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-1 text-center"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "mx-auto h-12 w-12 text-gray-400",
    stroke: "currentColor",
    fill: "none",
    viewBox: "0 0 48 48",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex text-sm text-gray-600"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "file-upload",
    className: "relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
  }, /* @__PURE__ */ React.createElement("span", null, "Upload a file"), /* @__PURE__ */ React.createElement("input", __spreadProps(__spreadValues({}, getInputProps()), {
    accept: "image/*"
  })), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    value: resultImage,
    name: "testResult"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "pl-1"
  }, "or drag and drop")), /* @__PURE__ */ React.createElement("p", {
    className: "text-xs text-gray-500"
  }, "PNG, JPG, GIF up to 10MB"), fileName && /* @__PURE__ */ React.createElement("p", null, " ", fileName, " ")))), ((_F = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _F.testResult) ? /* @__PURE__ */ React.createElement("p", {
    className: "text-rose-700",
    role: "alert",
    id: "testResult-error"
  }, actionData.fieldErrors.testResult) : null), /* @__PURE__ */ React.createElement("div", {
    className: "px-4 py-3 bg-gray-50 text-right sm:px-6"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, "Submit")))))));
}

// route:/Users/babatundeololade/Desktop/hospital/app/routes/reservations.tsx
var reservations_exports = {};
__export(reservations_exports, {
  action: () => action2,
  default: () => Index3,
  loader: () => loader2
});
init_react();
var import_client3 = require("@prisma/client");
var import_remix6 = __toESM(require_remix());
var import_react_modal = __toESM(require("react-modal"));

// app/utils/session.server.ts
init_react();
var import_config = require("dotenv/config");
var import_bcryptjs = __toESM(require("bcryptjs"));
var import_remix5 = __toESM(require_remix());
var import_mailgun_js = __toESM(require("mailgun-js"));
async function login({ email, password }) {
  const user = await db.users.findUnique({
    where: { email }
  });
  if (!user)
    return null;
  const isCorrectPassword = await import_bcryptjs.default.compare(password, user.password);
  if (!isCorrectPassword)
    return null;
  return { id: user.id };
}
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}
var storage = (0, import_remix5.createCookieSessionStorage)({
  cookie: {
    name: "RJ_session",
    secure: false,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true
  }
});
async function createUserSession(userId, redirectTo) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return (0, import_remix5.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function sendEmail(email, firstName, pdfURL) {
  const DOMAIN = "email.foreseewin.com";
  const mg = (0, import_mailgun_js.default)({
    apiKey: process.env.MAIL_API_KEY,
    domain: DOMAIN
  });
  const data = {
    from: "Medic Flex <postmaster@email.foreseewin.com>",
    to: email,
    subject: "Your Test Result",
    template: "medicflex",
    "h:X-Mailgun-Variables": {
      name: firstName,
      pdfURL
    }
  };
  mg.messages().send(data, function(error, body) {
    console.log(body, "body..");
    console.log(error, "An error occured");
  });
}

// route:/Users/babatundeololade/Desktop/hospital/app/routes/reservations.tsx
var import_react2 = __toESM(require("react"));

// app/utils/invoice.ts
init_react();
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_puppeteer = __toESM(require("puppeteer"));
var import_handlebars = __toESM(require("handlebars"));
var import_format = __toESM(require("date-fns/format"));
async function createPDF(data) {
  const templateHtml = import_fs.default.readFileSync(import_path.default.join(__dirname, "invoice.html"), "utf8");
  const template = import_handlebars.default.compile(templateHtml);
  const html = template({
    name: data.firstName + " " + data.lastName,
    dob: data.dateOfBirth,
    receivedDateDay: (0, import_format.default)(data.createdAt, "yyyy-MM-dd"),
    receivedDateTime: (0, import_format.default)(data.createdAt, "hh:mm:ss"),
    completedDateDay: (0, import_format.default)(new Date(), "yyyy-MM-dd"),
    completedDateTime: (0, import_format.default)(new Date(), "hh:mm:ss"),
    passportNumber: data.passportNumber,
    gender: data.gender,
    result: data.status
  });
  const options = {
    width: "1230px",
    headerTemplate: "<p></p>",
    footerTemplate: "<p></p>",
    displayHeaderFooter: false,
    margin: {
      top: "10px",
      bottom: "30px",
      right: "50px",
      left: "50px"
    },
    printBackground: true,
    format: "A4"
  };
  const browser = await import_puppeteer.default.launch({
    args: [
      "--disable-setuid-sandbox",
      "--no-sandbox"
    ]
  });
  const page = await browser.newPage();
  await page.goto(`data:text/html;charset=UTF-8,${html}`, {
    waitUntil: "networkidle0"
  });
  const buffer = await page.pdf(options);
  await browser.close();
  return `data:application/pdf;base64,${buffer.toString("base64")}`;
}

// route:/Users/babatundeololade/Desktop/hospital/app/routes/reservations.tsx
var action2 = async ({ request }) => {
  const form = await request.formData();
  const positiveId = form.get("positive");
  const negativeId = form.get("negative");
  const deleteId = form.get("deleteId");
  const deleteAll = form.get("deleteAll");
  if (deleteId) {
    await db.reservations.delete({ where: { id: deleteId } });
    return {};
  }
  if (deleteAll) {
    await db.reservations.deleteMany();
    return {};
  }
  let updatedReservation;
  if (positiveId) {
    updatedReservation = await db.reservations.update({
      where: { id: positiveId.toString() },
      data: { status: import_client3.Status.POSITIVE }
    });
  } else {
    updatedReservation = await db.reservations.update({
      where: { id: negativeId.toString() },
      data: { status: import_client3.Status.NEGATIVE }
    });
  }
  const createdPDF = await createPDF(updatedReservation);
  await db.reservations.update({
    where: { id: updatedReservation.id },
    data: { finalResult: createdPDF }
  });
  await sendEmail(updatedReservation.email, updatedReservation.firstName, createdPDF);
  return {};
};
var loader2 = async ({ request }) => {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId) {
    return (0, import_remix6.redirect)("/login");
  }
  const data = {
    reservations: await db.reservations.findMany({
      orderBy: { createdAt: "desc" }
    })
  };
  return data;
};
var customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "100%",
    minWidth: "80vh",
    overflow: "scroll"
  }
};
import_react_modal.default.setAppElement("#yourAppElement");
function Index3() {
  const data = (0, import_remix6.useLoaderData)();
  const [modalIsOpen, setIsOpen] = import_react2.default.useState(false);
  const [currentId, setCurrentId] = import_react2.default.useState("");
  const [currentImage, setCurrentImage] = import_react2.default.useState("");
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return /* @__PURE__ */ import_react2.default.createElement("div", {
    id: "yourAppElement"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "my-4 px-8"
  }, /* @__PURE__ */ import_react2.default.createElement("h1", null, " TEST RESULTS"), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
  }, /* @__PURE__ */ import_react2.default.createElement("table", {
    className: "min-w-full divide-y divide-gray-200"
  }, /* @__PURE__ */ import_react2.default.createElement("thead", {
    className: "bg-gray-50"
  }, /* @__PURE__ */ import_react2.default.createElement("tr", null, /* @__PURE__ */ import_react2.default.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
  }, "Name"), /* @__PURE__ */ import_react2.default.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
  }, "Email"), /* @__PURE__ */ import_react2.default.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
  }, "Date of Birth"), /* @__PURE__ */ import_react2.default.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
  }, "Passport Number"), /* @__PURE__ */ import_react2.default.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
  }, "Phone Number"), /* @__PURE__ */ import_react2.default.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
  }, "Status"), /* @__PURE__ */ import_react2.default.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
  }), /* @__PURE__ */ import_react2.default.createElement("th", {
    scope: "col",
    className: "relative px-6 py-3"
  }, /* @__PURE__ */ import_react2.default.createElement("span", {
    className: "sr-only"
  }, "Test Result")))), /* @__PURE__ */ import_react2.default.createElement("tbody", {
    className: "bg-white divide-y divide-gray-200"
  }, data.reservations.map((reservation) => {
    return /* @__PURE__ */ import_react2.default.createElement("tr", null, /* @__PURE__ */ import_react2.default.createElement("td", {
      className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500"
    }, reservation.firstName, " ", reservation.lastName), /* @__PURE__ */ import_react2.default.createElement("td", {
      className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500"
    }, reservation.email), /* @__PURE__ */ import_react2.default.createElement("td", {
      className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500"
    }, reservation.dateOfBirth), /* @__PURE__ */ import_react2.default.createElement("td", {
      className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500"
    }, reservation.passportNumber), /* @__PURE__ */ import_react2.default.createElement("td", {
      className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500"
    }, reservation.phoneNumber), /* @__PURE__ */ import_react2.default.createElement("td", {
      className: "px-6 py-4 whitespace-nowrap"
    }, /* @__PURE__ */ import_react2.default.createElement("span", {
      className: `px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${reservation.status === import_client3.Status.POSITIVE ? "bg-green-100 text-green-800" : reservation.status === import_client3.Status.NEGATIVE ? "bg-red-200 text-red-800" : "bg-secondary-100 text-secondary-800"}"`
    }, reservation.status)), /* @__PURE__ */ import_react2.default.createElement("td", {
      className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
    }, /* @__PURE__ */ import_react2.default.createElement("span", {
      onClick: () => {
        if (reservation.finalResult) {
          const linkElem = document.createElement("a");
          linkElem.href = reservation.finalResult;
          linkElem.target = "_blank";
          linkElem.download = "";
          linkElem.click();
        } else {
          openModal();
          setCurrentId(reservation.id);
          setCurrentImage(reservation.testResult);
        }
      },
      className: "text-indigo-600 hover:text-indigo-900 cursor-pointer",
      role: "button"
    }, reservation.finalResult ? "Download Result" : "View Uploaded Result")), /* @__PURE__ */ import_react2.default.createElement("td", null, /* @__PURE__ */ import_react2.default.createElement("form", {
      method: "POST",
      action: "/reservations"
    }, /* @__PURE__ */ import_react2.default.createElement("input", {
      type: "hidden",
      name: "deleteId",
      value: reservation.id
    }), /* @__PURE__ */ import_react2.default.createElement("button", {
      type: "submit",
      className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-red-500"
    }, "Delete"))));
  }))))))), /* @__PURE__ */ import_react2.default.createElement("form", {
    method: "POST",
    action: "/reservations",
    className: "my-4",
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end"
    }
  }, /* @__PURE__ */ import_react2.default.createElement("input", {
    type: "hidden",
    name: "deleteAll",
    value: "true"
  }), /* @__PURE__ */ import_react2.default.createElement("button", {
    type: "submit",
    className: "inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
  }, "Delete All"))), /* @__PURE__ */ import_react2.default.createElement("div", null, /* @__PURE__ */ import_react2.default.createElement(import_react_modal.default, {
    isOpen: modalIsOpen,
    onRequestClose: closeModal,
    style: customStyles,
    contentLabel: "Test Result"
  }, /* @__PURE__ */ import_react2.default.createElement("img", {
    src: currentImage,
    className: "max-w-full h-auto",
    height: "100%",
    width: "100%",
    alt: "..."
  }), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "py-2 flex"
  }, /* @__PURE__ */ import_react2.default.createElement("form", {
    method: "POST",
    action: "/reservations"
  }, /* @__PURE__ */ import_react2.default.createElement("input", {
    type: "hidden",
    name: "positive",
    value: currentId
  }), /* @__PURE__ */ import_react2.default.createElement("button", {
    type: "submit",
    className: "inline-block mr-2 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
  }, "Mark Positive")), /* @__PURE__ */ import_react2.default.createElement("form", {
    method: "POST",
    action: "/reservations"
  }, /* @__PURE__ */ import_react2.default.createElement("input", {
    type: "hidden",
    name: "negative",
    value: currentId
  }), /* @__PURE__ */ import_react2.default.createElement("button", {
    type: "submit",
    className: "inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
  }, "Mark Negative"))))));
}

// route:/Users/babatundeololade/Desktop/hospital/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index4,
  loader: () => loader3
});
init_react();
var import_remix7 = __toESM(require_remix());
var loader3 = async ({ request }) => {
  const session = await getUserSession(request);
  if (session.id) {
    return (0, import_remix7.redirect)("/reservations");
  } else {
    return (0, import_remix7.redirect)("/reserve");
  }
};
function Index4() {
  (0, import_remix7.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null);
}

// route:/Users/babatundeololade/Desktop/hospital/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action3,
  default: () => Index5,
  loader: () => loader4
});
init_react();
var import_remix8 = __toESM(require_remix());
var import_remix9 = __toESM(require_remix());
var import_validator2 = __toESM(require("validator"));
var badRequest2 = (data) => (0, import_remix9.json)(data, { status: 400 });
var action3 = async ({ request }) => {
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");
  const redirectTo = "/reservations";
  if (typeof email !== "string" || typeof password !== "string") {
    return badRequest2({
      formError: `Form not submitted correctly.`
    });
  }
  const fields = { email, password };
  const fieldErrors = {
    email: import_validator2.default.isEmail(email) ? void 0 : "Invalid Credentials",
    password: import_validator2.default.isLength(password, { min: 1 }) ? void 0 : "Invalid Credentials"
  };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest2({ fieldErrors, fields });
  const user = await login({ email, password });
  console.log({ user });
  if (!user) {
    return badRequest2({
      fields,
      formError: `Invalid Credentials`
    });
  }
  return createUserSession(user.id, redirectTo);
};
var loader4 = async ({ request }) => {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (userId) {
    return (0, import_remix8.redirect)("/reservations");
  }
  return {};
};
function Index5() {
  var _a, _b, _c, _d;
  const actionData = (0, import_remix8.useActionData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-md w-full space-y-8"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    className: "mx-auto h-12 w-auto",
    src: "https://www.flexmedic.ca/images/logo.1647454729.jpg",
    alt: "logo"
  }), /* @__PURE__ */ React.createElement("h2", {
    className: "mt-6 text-center text-3xl font-extrabold text-gray-900"
  }, "Sign in to your account")), /* @__PURE__ */ React.createElement("form", {
    className: "mt-8 space-y-6",
    method: "POST",
    action: "#"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "rounded-md shadow-sm -space-y-px"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email-address",
    className: "sr-only"
  }, "Email address"), /* @__PURE__ */ React.createElement("input", {
    id: "email-address",
    name: "email",
    type: "email",
    required: true,
    className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",
    placeholder: "Email address"
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password",
    className: "sr-only"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    id: "password",
    name: "password",
    type: "password",
    required: true,
    className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",
    placeholder: "Password"
  }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "absolute left-0 inset-y-0 flex items-center pl-3"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "h-5 w-5 text-indigo-500 group-hover:text-indigo-400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
    clipRule: "evenodd"
  }))), "Sign in"), ((_a = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _a.email) || ((_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.password) || (actionData == null ? void 0 : actionData.formError) ? /* @__PURE__ */ React.createElement("p", {
    className: "text-rose-700",
    role: "alert",
    id: "email-error"
  }, ((_c = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _c.email) || ((_d = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _d.password) || actionData.formError) : null))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "7e9e8df0", "entry": { "module": "/build/entry.client-AMDCXB7L.js", "imports": ["/build/_shared/chunk-2PUCHL7Y.js", "/build/_shared/chunk-6EXB63A5.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-3SGFYLLP.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-PTFIZVHG.js", "imports": ["/build/_shared/chunk-WBYFUPYH.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-M5FNQ3CD.js", "imports": ["/build/_shared/chunk-WBYFUPYH.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/reservations": { "id": "routes/reservations", "parentId": "root", "path": "reservations", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/reservations-GGFP7MXZ.js", "imports": ["/build/_shared/chunk-IUF7TBMI.js", "/build/_shared/chunk-OJFAJX33.js", "/build/_shared/chunk-WBYFUPYH.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/reserve/$reservationId": { "id": "routes/reserve/$reservationId", "parentId": "root", "path": "reserve/:reservationId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/reserve/$reservationId-BW66OA4I.js", "imports": ["/build/_shared/chunk-OJFAJX33.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/reserve/index": { "id": "routes/reserve/index", "parentId": "root", "path": "reserve", "index": true, "caseSensitive": void 0, "module": "/build/routes/reserve/index-UIYGTFZI.js", "imports": ["/build/_shared/chunk-IUF7TBMI.js", "/build/_shared/chunk-OJFAJX33.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-7E9E8DF0.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/reserve/$reservationId": {
    id: "routes/reserve/$reservationId",
    parentId: "root",
    path: "reserve/:reservationId",
    index: void 0,
    caseSensitive: void 0,
    module: reservationId_exports
  },
  "routes/reserve/index": {
    id: "routes/reserve/index",
    parentId: "root",
    path: "reserve",
    index: true,
    caseSensitive: void 0,
    module: reserve_exports
  },
  "routes/reservations": {
    id: "routes/reservations",
    parentId: "root",
    path: "reservations",
    index: void 0,
    caseSensitive: void 0,
    module: reservations_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9iYWJhdHVuZGVvbG9sYWRlL0Rlc2t0b3AvaG9zcGl0YWwvYXBwL3Jvb3QudHN4IiwgInJvdXRlOi9Vc2Vycy9iYWJhdHVuZGVvbG9sYWRlL0Rlc2t0b3AvaG9zcGl0YWwvYXBwL3JvdXRlcy9yZXNlcnZlLyRyZXNlcnZhdGlvbklkLnRzeCIsICIuLi9hcHAvdXRpbHMvZGIuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9iYWJhdHVuZGVvbG9sYWRlL0Rlc2t0b3AvaG9zcGl0YWwvYXBwL3JvdXRlcy9yZXNlcnZlL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvYmFiYXR1bmRlb2xvbGFkZS9EZXNrdG9wL2hvc3BpdGFsL2FwcC9yb3V0ZXMvcmVzZXJ2YXRpb25zLnRzeCIsICIuLi9hcHAvdXRpbHMvc2Vzc2lvbi5zZXJ2ZXIudHMiLCAiLi4vYXBwL3V0aWxzL2ludm9pY2UudHMiLCAicm91dGU6L1VzZXJzL2JhYmF0dW5kZW9sb2xhZGUvRGVza3RvcC9ob3NwaXRhbC9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvYmFiYXR1bmRlb2xvbGFkZS9EZXNrdG9wL2hvc3BpdGFsL2FwcC9yb3V0ZXMvbG9naW4udHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2JhYmF0dW5kZW9sb2xhZGUvRGVza3RvcC9ob3NwaXRhbC9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvYmFiYXR1bmRlb2xvbGFkZS9EZXNrdG9wL2hvc3BpdGFsL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvYmFiYXR1bmRlb2xvbGFkZS9EZXNrdG9wL2hvc3BpdGFsL2FwcC9yb3V0ZXMvcmVzZXJ2ZS8kcmVzZXJ2YXRpb25JZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL2JhYmF0dW5kZW9sb2xhZGUvRGVza3RvcC9ob3NwaXRhbC9hcHAvcm91dGVzL3Jlc2VydmUvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9iYWJhdHVuZGVvbG9sYWRlL0Rlc2t0b3AvaG9zcGl0YWwvYXBwL3JvdXRlcy9yZXNlcnZhdGlvbnMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9iYWJhdHVuZGVvbG9sYWRlL0Rlc2t0b3AvaG9zcGl0YWwvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL2JhYmF0dW5kZW9sb2xhZGUvRGVza3RvcC9ob3NwaXRhbC9hcHAvcm91dGVzL2xvZ2luLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvcmVzZXJ2ZS8kcmVzZXJ2YXRpb25JZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcmVzZXJ2ZS8kcmVzZXJ2YXRpb25JZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJyZXNlcnZlLzpyZXNlcnZhdGlvbklkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9yZXNlcnZlL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9yZXNlcnZlL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInJlc2VydmVcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9yZXNlcnZhdGlvbnNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Jlc2VydmF0aW9uc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJyZXNlcnZhdGlvbnNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL2xvZ2luXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dpblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2dpblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL2FwcC5jc3NcIlxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogXCJOZXcgUmVtaXggQXBwXCIgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyByZXNlcnZhdGlvbnMgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgcmVkaXJlY3QsIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBkYiB9IGZyb20gJ34vdXRpbHMvZGIuc2VydmVyJztcblxudHlwZSBMb2FkZXJEYXRhID0geyByZXNlcnZhdGlvbjogcmVzZXJ2YXRpb25zIH07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgcmVzZXJ2YXRpb24gPSBhd2FpdCBkYi5yZXNlcnZhdGlvbnMuZmluZEZpcnN0KHtcbiAgICB3aGVyZTogeyBpZDogcGFyYW1zLnJlc2VydmF0aW9uSWQgfSxcbiAgfSk7XG5cbiAgaWYgKCFyZXNlcnZhdGlvbikge1xuICAgIHJldHVybiByZWRpcmVjdCgnL3Jlc2VydmUnKTtcbiAgfVxuXG4gIHJldHVybiB7IHJlc2VydmF0aW9uIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTI0IGgtc2NyZWVuIGJnLWdyZWVuLTQwMCBzcGFjZS15LTVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmVlbi00MDAgYmctZ3JlZW4tMzAwIHRleHQtZ3JlZW4tOTAwXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bCBwYi0yXCI+IFdlJ3ZlIHJlY2VpdmVkIHlvdXIgZGF0YSA8L2gyPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwdC0yXCI+XG4gICAgICAgICAgV2Ugd2lsbCBzZW5kIHlvdSB5b3VyIHJlc3VsdCB0aHJvdWdoIHRoZSBlbWFpbCB5b3UgcHJvdmlkZWQuIFxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmxldCBkYjogUHJpc21hQ2xpZW50O1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBfX2RiOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XG59XG5cbi8vIHRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgaW4gZGV2ZWxvcG1lbnQgd2UgZG9uJ3Qgd2FudCB0byByZXN0YXJ0XG4vLyB0aGUgc2VydmVyIHdpdGggZXZlcnkgY2hhbmdlLCBidXQgd2Ugd2FudCB0byBtYWtlIHN1cmUgd2UgZG9uJ3Rcbi8vIGNyZWF0ZSBhIG5ldyBjb25uZWN0aW9uIHRvIHRoZSBEQiB3aXRoIGV2ZXJ5IGNoYW5nZSBlaXRoZXIuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBkYiA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgZGIuJGNvbm5lY3QoKTtcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLl9fZGIpIHtcbiAgICBnbG9iYWwuX19kYiA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgICBnbG9iYWwuX19kYi4kY29ubmVjdCgpO1xuICB9XG4gIGRiID0gZ2xvYmFsLl9fZGI7XG59XG5cbmV4cG9ydCB7IGRiIH07XG4iLCAiaW1wb3J0IHsgdXNlQWN0aW9uRGF0YSwganNvbiwgcmVkaXJlY3QgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgdXNlRHJvcHpvbmUgfSBmcm9tICdyZWFjdC1kcm9wem9uZSc7XG5cbmltcG9ydCB2YWxpZGF0b3IgZnJvbSAndmFsaWRhdG9yJztcblxuaW1wb3J0IHsgZGIgfSBmcm9tICd+L3V0aWxzL2RiLnNlcnZlcic7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTdGF0dXMgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbnR5cGUgQWN0aW9uRGF0YSA9IHtcbiAgZm9ybUVycm9yPzogc3RyaW5nO1xuICBmaWVsZEVycm9ycz86IHtcbiAgICBlbWFpbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIGZpcnN0TmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIGxhc3ROYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgZGF0ZU9mQmlydGg6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICBwYXNzcG9ydE51bWJlcjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIHBob25lTnVtYmVyOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgdGVzdFJlc3VsdDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB9O1xuICBmaWVsZHM/OiB7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xuICAgIGRhdGVPZkJpcnRoOiBzdHJpbmc7XG4gICAgcGFzc3BvcnROdW1iZXI6IHN0cmluZztcbiAgICBwaG9uZU51bWJlcjogc3RyaW5nO1xuICAgIHRlc3RSZXN1bHQ6IHN0cmluZztcbiAgfTtcbn07XG5cbmNvbnN0IGJhZFJlcXVlc3QgPSAoZGF0YTogQWN0aW9uRGF0YSkgPT4ganNvbihkYXRhLCB7IHN0YXR1czogNDAwIH0pO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCBsYXN0TmFtZSA9IGZvcm0uZ2V0KCdsYXN0TmFtZScpO1xuICBjb25zdCBmaXJzdE5hbWUgPSBmb3JtLmdldCgnZmlyc3ROYW1lJyk7XG4gIGNvbnN0IGRhdGVPZkJpcnRoID0gZm9ybS5nZXQoJ2RhdGVPZkJpcnRoJyk7XG4gIGNvbnN0IHBob25lTnVtYmVyID0gZm9ybS5nZXQoJ3Bob25lTnVtYmVyJyk7XG4gIGNvbnN0IGVtYWlsID0gZm9ybS5nZXQoJ2VtYWlsJyk7XG4gIGNvbnN0IGdlbmRlciA9IGZvcm0uZ2V0KCdnZW5kZXInKTtcbiAgY29uc3QgcGFzc3BvcnROdW1iZXIgPSBmb3JtLmdldCgncGFzc3BvcnROdW1iZXInKTtcbiAgY29uc3QgdGVzdFJlc3VsdCA9IGZvcm0uZ2V0KCd0ZXN0UmVzdWx0Jyk7XG5cbiAgaWYgKFxuICAgIHR5cGVvZiBsYXN0TmFtZSAhPT0gJ3N0cmluZycgfHxcbiAgICB0eXBlb2YgZmlyc3ROYW1lICE9PSAnc3RyaW5nJyB8fFxuICAgIHR5cGVvZiBkYXRlT2ZCaXJ0aCAhPT0gJ3N0cmluZycgfHxcbiAgICB0eXBlb2YgcGhvbmVOdW1iZXIgIT09ICdzdHJpbmcnIHx8XG4gICAgdHlwZW9mIHBhc3Nwb3J0TnVtYmVyICE9PSAnc3RyaW5nJyB8fFxuICAgIHR5cGVvZiB0ZXN0UmVzdWx0ICE9PSAnc3RyaW5nJyB8fFxuICAgIHR5cGVvZiBlbWFpbCAhPT0gJ3N0cmluZycgfHxcbiAgICB0eXBlb2YgZ2VuZGVyICE9PSBcInN0cmluZ1wiXG4gICkge1xuICAgIHJldHVybiBiYWRSZXF1ZXN0KHtcbiAgICAgIGZvcm1FcnJvcjogYEZvcm0gbm90IHN1Ym1pdHRlZCBjb3JyZWN0bHkuYCxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGZpZWxkRXJyb3JzID0ge1xuICAgIGxhc3ROYW1lOiBsYXN0TmFtZS5sZW5ndGggPCAyID8gJ0xhc3QgTmFtZSBpcyB0b28gc2hvcnQnIDogdW5kZWZpbmVkLFxuICAgIGZpcnN0TmFtZTogZmlyc3ROYW1lLmxlbmd0aCA8IDIgPyAnRmlyc3QgTmFtZSBpcyB0b28gc2hvcnQnIDogdW5kZWZpbmVkLFxuICAgIGRhdGVPZkJpcnRoOlxuICAgICAgZGF0ZU9mQmlydGgubGVuZ3RoIDwgMiA/ICdEYXRlIG9mIEJpcnRoIGlzIHRvbyBzaG9ydCcgOiB1bmRlZmluZWQsXG4gICAgcGhvbmVOdW1iZXI6XG4gICAgICBwaG9uZU51bWJlci5sZW5ndGggPCAyID8gJ1Bob25lIE51bWJlciBpcyB0b28gc2hvcnQnIDogdW5kZWZpbmVkLFxuICAgIHRlc3RSZXN1bHQ6IHZhbGlkYXRvci5pc0RhdGFVUkkodGVzdFJlc3VsdClcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6ICdOb3QgYSB2YWxpZCBpbWFnZScsXG4gICAgcGFzc3BvcnROdW1iZXI6IHZhbGlkYXRvci5pc0xlbmd0aChwYXNzcG9ydE51bWJlciwgeyBtaW46IDQsICB9KVxuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogJ1Bhc3Nwb3J0IE51bWJlciBpcyB0b28gc2hvcnQnLFxuICAgIGVtYWlsOiB2YWxpZGF0b3IuaXNFbWFpbChlbWFpbCkgPyB1bmRlZmluZWQgOiAnSW52YWxpZCBFbWFpbCBBZGRyZXNzJyxcbiAgfTtcblxuICBjb25zdCBmaWVsZHMgPSB7XG4gICAgbGFzdE5hbWUsXG4gICAgZmlyc3ROYW1lLFxuICAgIGRhdGVPZkJpcnRoLFxuICAgIHBob25lTnVtYmVyLFxuICAgIHRlc3RSZXN1bHQsXG4gICAgcGFzc3BvcnROdW1iZXIsXG4gICAgZW1haWwsXG4gICAgZ2VuZGVyXG4gIH07XG5cbiAgaWYgKE9iamVjdC52YWx1ZXMoZmllbGRFcnJvcnMpLnNvbWUoQm9vbGVhbikpIHtcbiAgICByZXR1cm4gYmFkUmVxdWVzdCh7IGZpZWxkRXJyb3JzLCBmaWVsZHMgfSk7XG4gIH1cblxuICBjb25zdCByZXNlcnZhdGlvbiA9IGF3YWl0IGRiLnJlc2VydmF0aW9ucy5jcmVhdGUoe1xuICAgIGRhdGE6IHsgLi4uZmllbGRzLCBzdGF0dXM6IFN0YXR1cy5QRU5ESU5HIH0sXG4gIH0pO1xuXG4gIHJldHVybiByZWRpcmVjdChgL3Jlc2VydmUvJHtyZXNlcnZhdGlvbi5pZH1gKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YTxBY3Rpb25EYXRhPigpO1xuICBjb25zdCBbcmVzdWx0SW1hZ2UsIHNldFJlc3VsdEltYWdlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgWyBmaWxlTmFtZSwgc2V0RmlsZU5hbWUgXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgY29uc3Qgb25Ecm9wID0gdXNlQ2FsbGJhY2soKGFjY2VwdGVkRmlsZXM6IGFueVtdKSA9PiB7XG4gICAgYWNjZXB0ZWRGaWxlcy5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgc2V0RmlsZU5hbWUoZmlsZS5uYW1lKVxuXG4gICAgICByZWFkZXIub25hYm9ydCA9ICgpID0+IGNvbnNvbGUubG9nKCdmaWxlIHJlYWRpbmcgd2FzIGFib3J0ZWQnKTtcbiAgICAgIHJlYWRlci5vbmVycm9yID0gKCkgPT4gY29uc29sZS5sb2coJ2ZpbGUgcmVhZGluZyBoYXMgZmFpbGVkJyk7XG4gICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBiaW5hcnlTdHIgPSByZWFkZXIucmVzdWx0IGFzIHN0cmluZztcbiAgICAgICAgc2V0UmVzdWx0SW1hZ2UoYmluYXJ5U3RyKTtcbiAgICAgIFxuICAgICAgfTtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH0pO1xuICB9LCBbXSk7XG4gIGNvbnN0IHsgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzIH0gPSB1c2VEcm9wem9uZSh7IG9uRHJvcCB9KTtcblxuICBjb25zb2xlLmxvZygncmVzZXJ2ZS4uLicpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xNiBtYXgtdy1zY3JlZW4tbGcgbXgtYXV0b1wiPlxuICAgICAgPGltZ1xuICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIGgtMTIgdy1hdXRvXCJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuZmxleG1lZGljLmNhL2ltYWdlcy9sb2dvLjE2NDc0NTQ3MjkuanBnXCJcbiAgICAgICAgYWx0PVwiV29ya2Zsb3dcIlxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Z3JpZCBtZDpncmlkLWNvbHMtMyBtZDpnYXAtNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmNvbC1zcGFuLTFcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgc206cHgtMFwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW0gbGVhZGluZy02IHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgUHJvdmlkZSB5b3VyIGluZm9ybWF0aW9uXG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgVXNlIGEgcGVybWFuZW50IGFkZHJlc3Mgd2hlcmUgeW91IGNhbiByZWNlaXZlIG1haWwuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgbWQ6bXQtMCBtZDpjb2wtc3Bhbi0yXCI+XG4gICAgICAgICAgPGZvcm0gYWN0aW9uPVwiL3Jlc2VydmU/aW5kZXhcIiBtZXRob2Q9XCJQT1NUXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1tZCBvdmVyZmxvdy1oaWRkZW4gc206cm91bmRlZC1tZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgcHktNSBiZy13aGl0ZSBzbTpwLTZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBFLU1haWxcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy5maWVsZHM/LmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9e1xuICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4oYWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmVtYWlsKSB8fCB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtcbiAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uZW1haWwgPyAnZW1haWwtZXJyb3InIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogQm9vbGVhbihhY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uZW1haWwpXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uZW1haWwgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcm9zZS03MDBcIiByb2xlPVwiYWxlcnRcIiBpZD1cImVtYWlsLWVycm9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGEuZmllbGRFcnJvcnMuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBGaXJzdCBOYW1lXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy5maWVsZHM/LmZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXtcbiAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuKGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5maXJzdE5hbWUpIHx8IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IEJvb2xlYW4oYWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmZpcnN0TmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ3JlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJycsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e1xuICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5maXJzdE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2ZpcnN0TmFtZS1lcnJvcidcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uZmlyc3ROYW1lID8gKFxuICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcm9zZS03MDBcIlxuICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJhbGVydFwiXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaXJzdE5hbWUtZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGEuZmllbGRFcnJvcnMuZmlyc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBMYXN0IE5hbWVcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy5maWVsZHM/Lmxhc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9e1xuICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4oYWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/Lmxhc3ROYW1lKSB8fCB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBCb29sZWFuKGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5sYXN0TmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ3JlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJycsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e1xuICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5sYXN0TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnbGFzdE5hbWUtZXJyb3InXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/Lmxhc3ROYW1lID8gKFxuICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcm9zZS03MDBcIlxuICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJhbGVydFwiXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsYXN0TmFtZS1lcnJvclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YS5maWVsZEVycm9ycy5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTQnPiBcbiAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJkYXRlT2ZCaXJ0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEdlbmRlclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJnZW5kZXJcIiBjbGFzc05hbWU9J3ctZnVsbCBib3JkZXIgYmctd2hpdGUgcm91bmRlZCBweC0zIHB5LTIgb3V0bGluZS1ub25lIHNoYWRvdycgPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNYWxlXCI+IE1hbGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRmVtYWxlXCIgPiBGZW1hbGUgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJkYXRlT2ZCaXJ0aFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIERhdGUgb2YgQmlydGhcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGF0ZU9mQmlydGhcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImRhdGVPZkJpcnRoXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogQm9vbGVhbihhY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uZGF0ZU9mQmlydGgpXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8uZGF0ZU9mQmlydGh9XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17XG4gICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbihhY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uZGF0ZU9mQmlydGgpIHx8IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e1xuICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5kYXRlT2ZCaXJ0aFxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnZGF0ZU9mQmlydGgtZXJyb3InXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmRhdGVPZkJpcnRoID8gKFxuICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcm9zZS03MDBcIlxuICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJhbGVydFwiXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkYXRlT2ZCaXJ0aC1lcnJvclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YS5maWVsZEVycm9ycy5kYXRlT2ZCaXJ0aH1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwicGFzc3BvcnROdW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBQYXNzcG9ydCBOdW1iZXJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3BvcnROdW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3Nwb3J0TnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy5maWVsZHM/LnBhc3Nwb3J0TnVtYmVyfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBCb29sZWFuKFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnBhc3Nwb3J0TnVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyAncmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXtcbiAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuKGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5wYXNzcG9ydE51bWJlcikgfHxcbiAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtcbiAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25EYXRhPy5maWVsZEVycm9ycz8ucGFzc3BvcnROdW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ3Bhc3Nwb3J0TnVtYmVyLWVycm9yJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5wYXNzcG9ydE51bWJlciA/IChcbiAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJvc2UtNzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiYWxlcnRcIlxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3BvcnROdW1iZXItZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGEuZmllbGRFcnJvcnMucGFzc3BvcnROdW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInBob25lTnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgUGhvbmUgTnVtYmVyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lTnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwaG9uZU51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YWN0aW9uRGF0YT8uZmllbGRzPy5waG9uZU51bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXtcbiAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuKGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5waG9uZU51bWJlcikgfHwgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogQm9vbGVhbihhY3Rpb25EYXRhPy5maWVsZEVycm9ycz8ucGhvbmVOdW1iZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtcbiAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25EYXRhPy5maWVsZEVycm9ycz8ucGhvbmVOdW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ3Bob25lTnVtYmVyLWVycm9yJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5waG9uZU51bWJlciA/IChcbiAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJvc2UtNzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiYWxlcnRcIlxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGhvbmVOdW1iZXItZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGEuZmllbGRFcnJvcnMucGhvbmVOdW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgVGVzdCBSZXN1bHRcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHsuLi5nZXRSb290UHJvcHMoKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBmbGV4IGp1c3RpZnktY2VudGVyIHB4LTYgcHQtNSBwYi02IGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCBib3JkZXItZGFzaGVkIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBCb29sZWFuKGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy50ZXN0UmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgPyAncmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIGgtMTIgdy0xMiB0ZXh0LWdyYXktNDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0yOCA4SDEyYTQgNCAwIDAwLTQgNHYyMG0zMi0xMnY4bTAgMHY4YTQgNCAwIDAxLTQgNEgxMmE0IDQgMCAwMS00LTR2LTRtMzItNGwtMy4xNzItMy4xNzJhNCA0IDAgMDAtNS42NTYgMEwyOCAyOE04IDMybDkuMTcyLTkuMTcyYTQgNCAwIDAxNS42NTYgMEwyOCAyOG0wIDBsNCA0bTQtMjRoOG0tNC00djhtLTEyIDRoLjAyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiZmlsZS11cGxvYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBjdXJzb3ItcG9pbnRlciBiZy13aGl0ZSByb3VuZGVkLW1kIGZvbnQtbWVkaXVtIHRleHQtaW5kaWdvLTYwMCBob3Zlcjp0ZXh0LWluZGlnby01MDAgZm9jdXMtd2l0aGluOm91dGxpbmUtbm9uZSBmb2N1cy13aXRoaW46cmluZy0yIGZvY3VzLXdpdGhpbjpyaW5nLW9mZnNldC0yIGZvY3VzLXdpdGhpbjpyaW5nLWluZGlnby01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5VcGxvYWQgYSBmaWxlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gYWNjZXB0PVwiaW1hZ2UvKlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZXN1bHRJbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGVzdFJlc3VsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGwtMVwiPm9yIGRyYWcgYW5kIGRyb3A8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBQTkcsIEpQRywgR0lGIHVwIHRvIDEwTUJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgeyBmaWxlTmFtZSAmJiA8cD4ge2ZpbGVOYW1lfSA8L3A+IH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnRlc3RSZXN1bHQgPyAoXG4gICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJvc2UtNzAwXCJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cImFsZXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0ZXN0UmVzdWx0LWVycm9yXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGEuZmllbGRFcnJvcnMudGVzdFJlc3VsdH1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBweS0zIGJnLWdyYXktNTAgdGV4dC1yaWdodCBzbTpweC02XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBqdXN0aWZ5LWNlbnRlciBweS0yIHB4LTQgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBzaGFkb3ctc20gdGV4dC1zbSBmb250LW1lZGl1bSByb3VuZGVkLW1kIHRleHQtd2hpdGUgYmctaW5kaWdvLTYwMCBob3ZlcjpiZy1pbmRpZ28tNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWluZGlnby01MDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyByZXNlcnZhdGlvbnMsIFN0YXR1cyB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmltcG9ydCB7XG4gIEFjdGlvbkZ1bmN0aW9uLFxuICBMb2FkZXJGdW5jdGlvbixcbiAgcmVkaXJlY3QsXG4gIHVzZUxvYWRlckRhdGEsXG59IGZyb20gJ3JlbWl4JztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XG5cbmltcG9ydCB7IGRiIH0gZnJvbSAnfi91dGlscy9kYi5zZXJ2ZXInO1xuaW1wb3J0IHtcbiAgZ2V0VXNlclNlc3Npb24sXG4gIHNlbmRFbWFpbCxcbn0gZnJvbSAnfi91dGlscy9zZXNzaW9uLnNlcnZlcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUERGIH0gZnJvbSAnfi91dGlscy9pbnZvaWNlJztcblxudHlwZSBMb2FkZXJEYXRhID0ge1xuICByZXNlcnZhdGlvbnM6IEFycmF5PHJlc2VydmF0aW9ucz47XG59O1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCBwb3NpdGl2ZUlkID0gZm9ybS5nZXQoJ3Bvc2l0aXZlJyk7XG4gIGNvbnN0IG5lZ2F0aXZlSWQgPSBmb3JtLmdldCgnbmVnYXRpdmUnKTtcbiAgY29uc3QgZGVsZXRlSWQgPSBmb3JtLmdldCgnZGVsZXRlSWQnKTtcbiAgY29uc3QgZGVsZXRlQWxsID0gZm9ybS5nZXQoJ2RlbGV0ZUFsbCcpO1xuXG4gIGlmIChkZWxldGVJZCkge1xuICAgIGF3YWl0IGRiLnJlc2VydmF0aW9ucy5kZWxldGUoeyB3aGVyZTogeyBpZDogZGVsZXRlSWQgYXMgc3RyaW5nIH0gfSk7XG5cbiAgICByZXR1cm4ge307XG4gIH1cblxuICBpZiAoZGVsZXRlQWxsKSB7XG4gICAgYXdhaXQgZGIucmVzZXJ2YXRpb25zLmRlbGV0ZU1hbnkoKTtcblxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGxldCB1cGRhdGVkUmVzZXJ2YXRpb247XG5cbiAgaWYgKHBvc2l0aXZlSWQpIHtcbiAgICB1cGRhdGVkUmVzZXJ2YXRpb24gPSBhd2FpdCBkYi5yZXNlcnZhdGlvbnMudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBwb3NpdGl2ZUlkLnRvU3RyaW5nKCkgfSxcbiAgICAgIGRhdGE6IHsgc3RhdHVzOiBTdGF0dXMuUE9TSVRJVkUgfSxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB1cGRhdGVkUmVzZXJ2YXRpb24gPSBhd2FpdCBkYi5yZXNlcnZhdGlvbnMudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBuZWdhdGl2ZUlkIS50b1N0cmluZygpIH0sXG4gICAgICBkYXRhOiB7IHN0YXR1czogU3RhdHVzLk5FR0FUSVZFIH0sXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBjcmVhdGVkUERGID0gYXdhaXQgY3JlYXRlUERGKHVwZGF0ZWRSZXNlcnZhdGlvbik7XG5cbiAgYXdhaXQgZGIucmVzZXJ2YXRpb25zLnVwZGF0ZSh7XG4gICAgd2hlcmU6IHsgaWQ6IHVwZGF0ZWRSZXNlcnZhdGlvbi5pZCB9LFxuICAgIGRhdGE6IHsgZmluYWxSZXN1bHQ6IGNyZWF0ZWRQREYgfSxcbiAgfSk7XG5cbiAgYXdhaXQgc2VuZEVtYWlsKFxuICAgIHVwZGF0ZWRSZXNlcnZhdGlvbi5lbWFpbCxcbiAgICB1cGRhdGVkUmVzZXJ2YXRpb24uZmlyc3ROYW1lLFxuICAgIGNyZWF0ZWRQREZcbiAgKTtcblxuICByZXR1cm4ge307XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0VXNlclNlc3Npb24ocmVxdWVzdCk7XG5cbiAgY29uc3QgdXNlcklkID0gc2Vzc2lvbi5nZXQoJ3VzZXJJZCcpO1xuXG4gIGlmKCF1c2VySWQpIHtcbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvbG9naW5cIilcbiAgfVxuXG4gIGNvbnN0IGRhdGE6IExvYWRlckRhdGEgPSB7XG4gICAgcmVzZXJ2YXRpb25zOiBhd2FpdCBkYi5yZXNlcnZhdGlvbnMuZmluZE1hbnkoe1xuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6ICdkZXNjJyB9LFxuICAgIH0pLFxuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxuY29uc3QgY3VzdG9tU3R5bGVzID0ge1xuICBjb250ZW50OiB7XG4gICAgdG9wOiAnNTAlJyxcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICByaWdodDogJ2F1dG8nLFxuICAgIGJvdHRvbTogJ2F1dG8nLFxuICAgIG1hcmdpblJpZ2h0OiAnLTUwJScsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBtaW5XaWR0aDogJzgwdmgnLFxuICAgIG92ZXJmbG93OiAnc2Nyb2xsJyxcbiAgfSxcbn07XG5cbk1vZGFsLnNldEFwcEVsZW1lbnQoJyN5b3VyQXBwRWxlbWVudCcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcblxuICBjb25zdCBbbW9kYWxJc09wZW4sIHNldElzT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW2N1cnJlbnRJZCwgc2V0Q3VycmVudElkXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2N1cnJlbnRJbWFnZSwgc2V0Q3VycmVudEltYWdlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcblxuICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gICAgc2V0SXNPcGVuKHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBzZXRJc09wZW4oZmFsc2UpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwieW91ckFwcEVsZW1lbnRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNCBweC04XCI+XG4gICAgICAgIDxoMT4gVEVTVCBSRVNVTFRTPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItbXktMiBvdmVyZmxvdy14LWF1dG8gc206LW14LTYgbGc6LW14LThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMiBhbGlnbi1taWRkbGUgaW5saW5lLWJsb2NrIG1pbi13LWZ1bGwgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93IG92ZXJmbG93LWhpZGRlbiBib3JkZXItYiBib3JkZXItZ3JheS0yMDAgc206cm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtaW4tdy1mdWxsIGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMFwiPlxuICAgICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cImJnLWdyYXktNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtbGVmdCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgRW1haWxcbiAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtbGVmdCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBEYXRlIG9mIEJpcnRoXG4gICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgUGFzc3BvcnQgTnVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgUGhvbmUgTnVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgPC90aD5cblxuICAgICAgICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtbGVmdCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBTdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtbGVmdCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICA+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5UZXN0IFJlc3VsdDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJiZy13aGl0ZSBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEucmVzZXJ2YXRpb25zLm1hcCgocmVzZXJ2YXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXNlcnZhdGlvbi5maXJzdE5hbWV9IHtyZXNlcnZhdGlvbi5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzZXJ2YXRpb24uZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlc2VydmF0aW9uLmRhdGVPZkJpcnRofVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXNlcnZhdGlvbi5wYXNzcG9ydE51bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzZXJ2YXRpb24ucGhvbmVOdW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMiBpbmxpbmUtZmxleCB0ZXh0LXhzIGxlYWRpbmctNSBmb250LXNlbWlib2xkIHJvdW5kZWQtZnVsbCAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNlcnZhdGlvbi5zdGF0dXMgPT09IFN0YXR1cy5QT1NJVElWRVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLWdyZWVuLTEwMCB0ZXh0LWdyZWVuLTgwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHJlc2VydmF0aW9uLnN0YXR1cyA9PT0gU3RhdHVzLk5FR0FUSVZFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctcmVkLTIwMCB0ZXh0LXJlZC04MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnYmctc2Vjb25kYXJ5LTEwMCB0ZXh0LXNlY29uZGFyeS04MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXNlcnZhdGlvbi5zdGF0dXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtcmlnaHQgdGV4dC1zbSBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNlcnZhdGlvbi5maW5hbFJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmtFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtFbGVtLmhyZWYgPSByZXNlcnZhdGlvbi5maW5hbFJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rRWxlbS50YXJnZXQgPSAnX2JsYW5rJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rRWxlbS5kb3dubG9hZCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtFbGVtLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbk1vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudElkKHJlc2VydmF0aW9uLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50SW1hZ2UocmVzZXJ2YXRpb24udGVzdFJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWluZGlnby02MDAgaG92ZXI6dGV4dC1pbmRpZ28tOTAwIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXNlcnZhdGlvbi5maW5hbFJlc3VsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdEb3dubG9hZCBSZXN1bHQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ1ZpZXcgVXBsb2FkZWQgUmVzdWx0J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJQT1NUXCIgYWN0aW9uPVwiL3Jlc2VydmF0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVsZXRlSWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cmVzZXJ2YXRpb24uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtcmlnaHQgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXJlZC01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9ybVxuICAgICAgICAgIG1ldGhvZD1cIlBPU1RcIlxuICAgICAgICAgIGFjdGlvbj1cIi9yZXNlcnZhdGlvbnNcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdmbGV4LWVuZCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImRlbGV0ZUFsbFwiIHZhbHVlPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHgtNiBweS0yLjUgYmctcmVkLTYwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHRleHQteHMgbGVhZGluZy10aWdodCB1cHBlcmNhc2Ugcm91bmRlZC1mdWxsIHNoYWRvdy1tZCBob3ZlcjpiZy1yZWQtNzAwIGhvdmVyOnNoYWRvdy1sZyBmb2N1czpiZy1yZWQtNzAwIGZvY3VzOnNoYWRvdy1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGFjdGl2ZTpiZy1yZWQtODAwIGFjdGl2ZTpzaGFkb3ctbGcgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgZWFzZS1pbi1vdXRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIERlbGV0ZSBBbGxcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIGlzT3Blbj17bW9kYWxJc09wZW59XG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlTW9kYWx9XG4gICAgICAgICAgc3R5bGU9e2N1c3RvbVN0eWxlc31cbiAgICAgICAgICBjb250ZW50TGFiZWw9XCJUZXN0IFJlc3VsdFwiXG4gICAgICAgID5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e2N1cnJlbnRJbWFnZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1heC13LWZ1bGwgaC1hdXRvXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgIGFsdD1cIi4uLlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIgZmxleFwiPlxuICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwiUE9TVFwiIGFjdGlvbj1cIi9yZXNlcnZhdGlvbnNcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicG9zaXRpdmVcIiB2YWx1ZT17Y3VycmVudElkfSAvPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIG1yLTIgcHgtNiBweS0yLjUgYmctYmx1ZS02MDAgdGV4dC13aGl0ZSBmb250LW1lZGl1bSB0ZXh0LXhzIGxlYWRpbmctdGlnaHQgdXBwZXJjYXNlIHJvdW5kZWQtZnVsbCBzaGFkb3ctbWQgaG92ZXI6YmctYmx1ZS03MDAgaG92ZXI6c2hhZG93LWxnIGZvY3VzOmJnLWJsdWUtNzAwIGZvY3VzOnNoYWRvdy1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGFjdGl2ZTpiZy1ibHVlLTgwMCBhY3RpdmU6c2hhZG93LWxnIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIGVhc2UtaW4tb3V0XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE1hcmsgUG9zaXRpdmVcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJQT1NUXCIgYWN0aW9uPVwiL3Jlc2VydmF0aW9uc1wiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJuZWdhdGl2ZVwiIHZhbHVlPXtjdXJyZW50SWR9IC8+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHgtNiBweS0yLjUgYmctZ3JlZW4tNjAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gdGV4dC14cyBsZWFkaW5nLXRpZ2h0IHVwcGVyY2FzZSByb3VuZGVkLWZ1bGwgc2hhZG93LW1kIGhvdmVyOmJnLWdyZWVuLTcwMCBob3ZlcjpzaGFkb3ctbGcgZm9jdXM6YmctZ3JlZW4tNzAwIGZvY3VzOnNoYWRvdy1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGFjdGl2ZTpiZy1ncmVlbi04MDAgYWN0aXZlOnNoYWRvdy1sZyB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MCBlYXNlLWluLW91dFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBNYXJrIE5lZ2F0aXZlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0ICdkb3RlbnYvY29uZmlnJztcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnO1xuaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UsIHJlZGlyZWN0IH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IG1haWxndW4gZnJvbSAnbWFpbGd1bi1qcyc7XG5cblxuaW1wb3J0IHsgZGIgfSBmcm9tICcuL2RiLnNlcnZlcic7XG5cbnR5cGUgTG9naW5Gb3JtID0ge1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luKHsgZW1haWwsIHBhc3N3b3JkIH06IExvZ2luRm9ybSkge1xuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2Vycy5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBlbWFpbCB9LFxuICB9KTtcblxuICBpZiAoIXVzZXIpIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IGlzQ29ycmVjdFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xuXG4gIGlmICghaXNDb3JyZWN0UGFzc3dvcmQpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiB7IGlkOiB1c2VyLmlkIH07XG59XG5cbmNvbnN0IHNlc3Npb25TZWNyZXQgPSBwcm9jZXNzLmVudi5TRVNTSU9OX1NFQ1JFVDtcbmlmICghc2Vzc2lvblNlY3JldCkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ1NFU1NJT05fU0VDUkVUIG11c3QgYmUgc2V0Jyk7XG59XG5cbmNvbnN0IHN0b3JhZ2UgPSBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7XG4gIGNvb2tpZToge1xuICAgIG5hbWU6ICdSSl9zZXNzaW9uJyxcbiAgICAvLyBub3JtYWxseSB5b3Ugd2FudCB0aGlzIHRvIGJlIGBzZWN1cmU6IHRydWVgXG4gICAgLy8gYnV0IHRoYXQgZG9lc24ndCB3b3JrIG9uIGxvY2FsaG9zdCBmb3IgU2FmYXJpXG4gICAgLy8gaHR0cHM6Ly93ZWIuZGV2L3doZW4tdG8tdXNlLWxvY2FsLWh0dHBzL1xuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyxcbiAgICBzZWNyZXRzOiBbc2Vzc2lvblNlY3JldF0sXG4gICAgc2FtZVNpdGU6ICdsYXgnLFxuICAgIHBhdGg6ICcvJyxcbiAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDMwLFxuICAgIGh0dHBPbmx5OiB0cnVlLFxuICB9LFxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyU2Vzc2lvbih1c2VySWQ6IHN0cmluZywgcmVkaXJlY3RUbzogc3RyaW5nKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdG9yYWdlLmdldFNlc3Npb24oKTtcbiAgc2Vzc2lvbi5zZXQoJ3VzZXJJZCcsIHVzZXJJZCk7XG4gIHJldHVybiByZWRpcmVjdChyZWRpcmVjdFRvLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ1NldC1Db29raWUnOiBhd2FpdCBzdG9yYWdlLmNvbW1pdFNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIHJldHVybiBzdG9yYWdlLmdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldCgnQ29va2llJykpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcklkKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFVzZXJTZXNzaW9uKHJlcXVlc3QpO1xuICBjb25zdCB1c2VySWQgPSBzZXNzaW9uLmdldCgndXNlcklkJyk7XG4gIGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09ICdzdHJpbmcnKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIHVzZXJJZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVVc2VySWQocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0VXNlclNlc3Npb24ocmVxdWVzdCk7XG4gIGNvbnN0IHVzZXJJZCA9IHNlc3Npb24uZ2V0KCd1c2VySWQnKTtcbiAgaWYgKCF1c2VySWQgfHwgdHlwZW9mIHVzZXJJZCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyByZWRpcmVjdChgL2xvZ2luYCk7XG4gIH1cbiAgcmV0dXJuIHVzZXJJZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRFbWFpbChlbWFpbDogc3RyaW5nLCBmaXJzdE5hbWU6IHN0cmluZywgcGRmVVJMOiBzdHJpbmcpIHtcbiAgY29uc3QgRE9NQUlOID0gJ2VtYWlsLmZvcmVzZWV3aW4uY29tJztcbiAgY29uc3QgbWcgPSBtYWlsZ3VuKHtcbiAgICBhcGlLZXk6IHByb2Nlc3MuZW52Lk1BSUxfQVBJX0tFWSEsXG4gICAgZG9tYWluOiBET01BSU4sXG4gIH0pO1xuICBjb25zdCBkYXRhID0ge1xuICAgIGZyb206IFwiTWVkaWMgRmxleCA8cG9zdG1hc3RlckBlbWFpbC5mb3Jlc2Vld2luLmNvbT5cIixcbiAgICB0bzogZW1haWwsXG4gICAgc3ViamVjdDogJ1lvdXIgVGVzdCBSZXN1bHQnLFxuICAgIHRlbXBsYXRlOiAnbWVkaWNmbGV4JyxcbiAgICAnaDpYLU1haWxndW4tVmFyaWFibGVzJzoge1xuICAgICAgbmFtZTogZmlyc3ROYW1lLFxuICAgICAgcGRmVVJMOiBwZGZVUkwsXG4gICAgfSxcbiAgfTtcbiAgbWcubWVzc2FnZXMoKS5zZW5kKGRhdGEsIGZ1bmN0aW9uIChlcnJvciwgYm9keSkge1xuICAgIGNvbnNvbGUubG9nKGJvZHksIFwiYm9keS4uXCIpO1xuICAgIGNvbnNvbGUubG9nKGVycm9yLCBcIkFuIGVycm9yIG9jY3VyZWRcIilcbiAgfSk7XG59XG4iLCAiaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHB1cHBldGVlciBmcm9tICdwdXBwZXRlZXInO1xuaW1wb3J0IGhhbmRsZWJhcnMgZnJvbSAnaGFuZGxlYmFycyc7XG5pbXBvcnQgeyByZXNlcnZhdGlvbnMgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQREYoZGF0YTogcmVzZXJ2YXRpb25zKSB7XG4gIGNvbnN0IHRlbXBsYXRlSHRtbCA9IGZzLnJlYWRGaWxlU3luYyhcbiAgICBwYXRoLmpvaW4oX19kaXJuYW1lLCAnaW52b2ljZS5odG1sJyksXG4gICAgJ3V0ZjgnXG4gICk7XG5cbiAgY29uc3QgdGVtcGxhdGUgPSBoYW5kbGViYXJzLmNvbXBpbGUodGVtcGxhdGVIdG1sKTtcblxuICBjb25zdCBodG1sID0gdGVtcGxhdGUoe1xuICAgIG5hbWU6IGRhdGEuZmlyc3ROYW1lICsgJyAnICsgZGF0YS5sYXN0TmFtZSxcbiAgICBkb2I6IGRhdGEuZGF0ZU9mQmlydGgsXG4gICAgcmVjZWl2ZWREYXRlRGF5OiBmb3JtYXQoZGF0YS5jcmVhdGVkQXQsICd5eXl5LU1NLWRkJyksXG4gICAgcmVjZWl2ZWREYXRlVGltZTogZm9ybWF0KGRhdGEuY3JlYXRlZEF0LCAnaGg6bW06c3MnKSxcbiAgICBjb21wbGV0ZWREYXRlRGF5OiBmb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKSxcbiAgICBjb21wbGV0ZWREYXRlVGltZTogZm9ybWF0KG5ldyBEYXRlKCksICdoaDptbTpzcycpLFxuICAgIHBhc3Nwb3J0TnVtYmVyOiBkYXRhLnBhc3Nwb3J0TnVtYmVyLFxuICAgIGdlbmRlcjogZGF0YS5nZW5kZXIsXG4gICAgcmVzdWx0OiBkYXRhLnN0YXR1cyxcbiAgfSk7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICB3aWR0aDogJzEyMzBweCcsXG4gICAgaGVhZGVyVGVtcGxhdGU6ICc8cD48L3A+JyxcbiAgICBmb290ZXJUZW1wbGF0ZTogJzxwPjwvcD4nLFxuICAgIGRpc3BsYXlIZWFkZXJGb290ZXI6IGZhbHNlLFxuICAgIG1hcmdpbjoge1xuICAgICAgdG9wOiAnMTBweCcsXG4gICAgICBib3R0b206ICczMHB4JyxcbiAgICAgIHJpZ2h0OiAnNTBweCcsXG4gICAgICBsZWZ0OiAnNTBweCcsXG4gICAgfSxcbiAgICBwcmludEJhY2tncm91bmQ6IHRydWUsXG4gICAgLy8gcGF0aDogcGRmUGF0aCxcbiAgICBmb3JtYXQ6ICdBNCcsXG4gIH07XG5cbiAgY29uc3QgYnJvd3NlciA9IGF3YWl0IHB1cHBldGVlci5sYXVuY2goe1xuICAgIC8vIGhlYWRsZXNzOiB0cnVlLFxuICAgIGFyZ3M6IFtcbiAgICAgICctLWRpc2FibGUtc2V0dWlkLXNhbmRib3gnLCAnLS1uby1zYW5kYm94J1xuICAgIF0sXG4gIH0pO1xuXG4gIGNvbnN0IHBhZ2UgPSBhd2FpdCBicm93c2VyLm5ld1BhZ2UoKTtcblxuICBhd2FpdCBwYWdlLmdvdG8oYGRhdGE6dGV4dC9odG1sO2NoYXJzZXQ9VVRGLTgsJHtodG1sfWAsIHtcbiAgICB3YWl0VW50aWw6ICduZXR3b3JraWRsZTAnLFxuICB9KTtcblxuICAvLyBAdHMtaWdub3JlXG4gIGNvbnN0IGJ1ZmZlciA9IGF3YWl0IHBhZ2UucGRmKG9wdGlvbnMpO1xuICBhd2FpdCBicm93c2VyLmNsb3NlKCk7XG5cbiAgcmV0dXJuIGBkYXRhOmFwcGxpY2F0aW9uL3BkZjtiYXNlNjQsJHtidWZmZXIudG9TdHJpbmcoJ2Jhc2U2NCcpfWA7XG59XG4iLCAiaW1wb3J0IHsgcmVzZXJ2YXRpb25zIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIHJlZGlyZWN0LCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnO1xuXG5pbXBvcnQgeyBnZXRVc2VyU2Vzc2lvbiB9IGZyb20gJ34vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXInO1xuXG50eXBlIExvYWRlckRhdGEgPSB7XG4gIHJlc2VydmF0aW9uczogQXJyYXk8cmVzZXJ2YXRpb25zPjtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0KTtcblxuICBpZiAoc2Vzc2lvbi5pZCkge1xuICAgIHJldHVybiByZWRpcmVjdCgnL3Jlc2VydmF0aW9ucycpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZWRpcmVjdCgnL3Jlc2VydmUnKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcbiAgcmV0dXJuIDxkaXYgLz47XG59XG4iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uLCByZWRpcmVjdCwgdXNlQWN0aW9uRGF0YSB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IGpzb24gfSBmcm9tICdyZW1peCc7XG5cbmltcG9ydCB7IGNyZWF0ZVVzZXJTZXNzaW9uLCBnZXRVc2VyU2Vzc2lvbiwgbG9naW4gfSBmcm9tICd+L3V0aWxzL3Nlc3Npb24uc2VydmVyJztcbmltcG9ydCB2YWxpZGF0b3IgZnJvbSAndmFsaWRhdG9yJztcblxudHlwZSBBY3Rpb25EYXRhID0ge1xuICBmb3JtRXJyb3I/OiBzdHJpbmc7XG4gIGZpZWxkRXJyb3JzPzoge1xuICAgIGVtYWlsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgcGFzc3dvcmQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgfTtcbiAgZmllbGRzPzoge1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgfTtcbn07XG5cbmNvbnN0IGJhZFJlcXVlc3QgPSAoZGF0YTogQWN0aW9uRGF0YSkgPT4ganNvbihkYXRhLCB7IHN0YXR1czogNDAwIH0pO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCBlbWFpbCA9IGZvcm0uZ2V0KCdlbWFpbCcpO1xuICBjb25zdCBwYXNzd29yZCA9IGZvcm0uZ2V0KCdwYXNzd29yZCcpO1xuICBjb25zdCByZWRpcmVjdFRvID0gJy9yZXNlcnZhdGlvbnMnO1xuXG4gIGlmICh0eXBlb2YgZW1haWwgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBwYXNzd29yZCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gYmFkUmVxdWVzdCh7XG4gICAgICBmb3JtRXJyb3I6IGBGb3JtIG5vdCBzdWJtaXR0ZWQgY29ycmVjdGx5LmAsXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBmaWVsZHMgPSB7IGVtYWlsLCBwYXNzd29yZCB9O1xuICBjb25zdCBmaWVsZEVycm9ycyA9IHtcbiAgICBlbWFpbDogdmFsaWRhdG9yLmlzRW1haWwoZW1haWwpID8gdW5kZWZpbmVkIDogJ0ludmFsaWQgQ3JlZGVudGlhbHMnLFxuICAgIHBhc3N3b3JkOiB2YWxpZGF0b3IuaXNMZW5ndGgocGFzc3dvcmQsIHsgbWluOiAxIH0pXG4gICAgICA/IHVuZGVmaW5lZFxuICAgICAgOiAnSW52YWxpZCBDcmVkZW50aWFscycsXG4gIH07XG4gIGlmIChPYmplY3QudmFsdWVzKGZpZWxkRXJyb3JzKS5zb21lKEJvb2xlYW4pKVxuICAgIHJldHVybiBiYWRSZXF1ZXN0KHsgZmllbGRFcnJvcnMsIGZpZWxkcyB9KTtcblxuICAvLyBsb2dpbiB0byBnZXQgdGhlIHVzZXJcbiAgLy8gaWYgdGhlcmUncyBubyB1c2VyLCByZXR1cm4gdGhlIGZpZWxkcyBhbmQgYSBmb3JtRXJyb3JcbiAgLy8gaWYgdGhlcmUgaXMgYSB1c2VyLCBjcmVhdGUgdGhlaXIgc2Vzc2lvbiBhbmQgcmVkaXJlY3QgdG8gL2pva2VzXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBsb2dpbih7IGVtYWlsLCBwYXNzd29yZCB9KTtcbiAgY29uc29sZS5sb2coeyB1c2VyIH0pO1xuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4gYmFkUmVxdWVzdCh7XG4gICAgICBmaWVsZHMsXG4gICAgICBmb3JtRXJyb3I6IGBJbnZhbGlkIENyZWRlbnRpYWxzYCxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVVc2VyU2Vzc2lvbih1c2VyLmlkLCByZWRpcmVjdFRvKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0KTtcblxuICBjb25zdCB1c2VySWQgPSBzZXNzaW9uLmdldCgndXNlcklkJyk7XG5cbiAgaWYodXNlcklkKSB7XG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL3Jlc2VydmF0aW9uc1wiKVxuICB9XG5cbiAgcmV0dXJuIHt9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgYWN0aW9uRGF0YSA9IHVzZUFjdGlvbkRhdGE8QWN0aW9uRGF0YT4oKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS0xMiBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1tZCB3LWZ1bGwgc3BhY2UteS04XCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBoLTEyIHctYXV0b1wiXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5mbGV4bWVkaWMuY2EvaW1hZ2VzL2xvZ28uMTY0NzQ1NDcyOS5qcGdcIlxuICAgICAgICAgICAgYWx0PVwibG9nb1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXQtNiB0ZXh0LWNlbnRlciB0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICBTaWduIGluIHRvIHlvdXIgYWNjb3VudFxuICAgICAgICAgIDwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtdC04IHNwYWNlLXktNlwiIG1ldGhvZD1cIlBPU1RcIiBhY3Rpb249XCIjXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIHNoYWRvdy1zbSAtc3BhY2UteS1weFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbC1hZGRyZXNzXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlxuICAgICAgICAgICAgICAgIEVtYWlsIGFkZHJlc3NcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbC1hZGRyZXNzXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgcm91bmRlZC1ub25lIHJlbGF0aXZlIGJsb2NrIHctZnVsbCBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwbGFjZWhvbGRlci1ncmF5LTUwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtdC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOnotMTAgc206dGV4dC1zbVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBhZGRyZXNzXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cbiAgICAgICAgICAgICAgICBQYXNzd29yZFxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgcm91bmRlZC1ub25lIHJlbGF0aXZlIGJsb2NrIHctZnVsbCBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwbGFjZWhvbGRlci1ncmF5LTUwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtYi1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOnotMTAgc206dGV4dC1zbVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCByZWxhdGl2ZSB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBweS0yIHB4LTQgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBiZy1pbmRpZ28tNjAwIGhvdmVyOmJnLWluZGlnby03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCBpbnNldC15LTAgZmxleCBpdGVtcy1jZW50ZXIgcGwtM1wiPlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC1pbmRpZ28tNTAwIGdyb3VwLWhvdmVyOnRleHQtaW5kaWdvLTQwMFwiXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNNSA5VjdhNSA1IDAgMDExMCAwdjJhMiAyIDAgMDEyIDJ2NWEyIDIgMCAwMS0yIDJINWEyIDIgMCAwMS0yLTJ2LTVhMiAyIDAgMDEyLTJ6bTgtMnYySDdWN2EzIDMgMCAwMTYgMHpcIlxuICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICBTaWduIGluXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uZW1haWwgfHwgYWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnBhc3N3b3JkIHx8IGFjdGlvbkRhdGE/LmZvcm1FcnJvciAgPyAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJvc2UtNzAwXCIgcm9sZT1cImFsZXJ0XCIgaWQ9XCJlbWFpbC1lcnJvclwiPlxuICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmVtYWlsIHx8IGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5wYXNzd29yZCB8fCBhY3Rpb25EYXRhLmZvcm1FcnJvciB9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzdlOWU4ZGYwJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1BTURDWEI3TC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstMlBVQ0hMN1kuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02RVhCNjNBNS5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtM1NHRllMTFAuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1QVEZJWlZIRy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstV0JZRlVQWUguanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9naW4nOnsnaWQnOidyb3V0ZXMvbG9naW4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9naW4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9naW4tTTVGTlEzQ0QuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVdCWUZVUFlILmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcmVzZXJ2YXRpb25zJzp7J2lkJzoncm91dGVzL3Jlc2VydmF0aW9ucycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidyZXNlcnZhdGlvbnMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcmVzZXJ2YXRpb25zLUdHRlA3TVhaLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1JVUY3VEJNSS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU9KRkFKWDMzLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV0JZRlVQWUguanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9yZXNlcnZlLyRyZXNlcnZhdGlvbklkJzp7J2lkJzoncm91dGVzL3Jlc2VydmUvJHJlc2VydmF0aW9uSWQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncmVzZXJ2ZS86cmVzZXJ2YXRpb25JZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9yZXNlcnZlLyRyZXNlcnZhdGlvbklkLUJXNjZPQTRJLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1PSkZBSlgzMy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9yZXNlcnZlL2luZGV4Jzp7J2lkJzoncm91dGVzL3Jlc2VydmUvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncmVzZXJ2ZScsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcmVzZXJ2ZS9pbmRleC1VSVlHVEZaSS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSVVGN1RCTUkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PSkZBSlgzMy5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtN0U5RThERjAuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBR2pDLEFBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFF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
