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
var app_default = "/build/_assets/app-5LZ25DJI.css";

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
if (true) {
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
    src: "https://flexmedic.ca/wp-content/uploads/2021/03/cropped-flexMedic-logo-1.png.webp",
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
    secure: true,
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
    apiKey: "0358329798fdd968d09cedd6907805df-602cc1bf-0ff5234d",
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
var import_puppeteer_core = __toESM(require("puppeteer-core"));
var import_handlebars = __toESM(require("handlebars"));
var import_format = __toESM(require("date-fns/format"));
async function createPDF(data) {
  const templateHtml = import_fs.default.readFileSync(import_path.default.join(__dirname, "invoice.html"), "utf8");
  const template = import_handlebars.default.compile(templateHtml);
  const html = template({
    name: data.firstName + " " + data.lastName,
    dob: data.dateOfBirth,
    receivedDateDay: (0, import_format.default)(data.createdAt, "yyyy-MM-dd"),
    receivedDateTime: (0, import_format.default)(data.createdAt, "HH-mm-ss"),
    completedDateDay: (0, import_format.default)(new Date(), "yyyy-MM-dd"),
    completedDateTime: (0, import_format.default)(new Date(), "HH-mm-ss"),
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
  const browser = await import_puppeteer_core.default.launch({
    headless: true,
    args: [
      "--disable-gpu",
      "--disable-dev-shm-usage",
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
    }, reservation.finalResult ? "Download Result" : "View Uploaded Result")));
  })))))))), /* @__PURE__ */ import_react2.default.createElement("div", null, /* @__PURE__ */ import_react2.default.createElement(import_react_modal.default, {
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
    src: "https://flexmedic.ca/wp-content/uploads/2021/03/cropped-flexMedic-logo-1.png.webp",
    alt: "Workflow"
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
    "fill-rule": "evenodd",
    d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
    "clip-rule": "evenodd"
  }))), "Sign in"), ((_a = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _a.email) || ((_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.password) || (actionData == null ? void 0 : actionData.formError) ? /* @__PURE__ */ React.createElement("p", {
    className: "text-rose-700",
    role: "alert",
    id: "email-error"
  }, ((_c = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _c.email) || ((_d = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _d.password) || actionData.formError) : null))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "325ec94b", "entry": { "module": "/build/entry.client-IQIVAQHD.js", "imports": ["/build/_shared/chunk-57OYMPSW.js", "/build/_shared/chunk-ZBGINKPM.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-FBIHJ4JH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-6BQPMLJ2.js", "imports": ["/build/_shared/chunk-3OPWVBFC.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-COXALJ5I.js", "imports": ["/build/_shared/chunk-3OPWVBFC.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/reservations": { "id": "routes/reservations", "parentId": "root", "path": "reservations", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/reservations-GO6H72J7.js", "imports": ["/build/_shared/chunk-VT5Z5AXD.js", "/build/_shared/chunk-XDTZJTHK.js", "/build/_shared/chunk-3OPWVBFC.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/reserve/$reservationId": { "id": "routes/reserve/$reservationId", "parentId": "root", "path": "reserve/:reservationId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/reserve/$reservationId-OJV4YOWF.js", "imports": ["/build/_shared/chunk-XDTZJTHK.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/reserve/index": { "id": "routes/reserve/index", "parentId": "root", "path": "reserve", "index": true, "caseSensitive": void 0, "module": "/build/routes/reserve/index-WTTMNMNM.js", "imports": ["/build/_shared/chunk-VT5Z5AXD.js", "/build/_shared/chunk-XDTZJTHK.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-325EC94B.js" };

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
