import Ce, { useRef as ee, useState as pr, useEffect as re } from "react";
var te = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function vr() {
  if (Te)
    return W;
  Te = 1;
  var g = Ce, R = Symbol.for("react.element"), S = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, O = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(y, f, _) {
    var l, d = {}, w = null, T = null;
    _ !== void 0 && (w = "" + _), f.key !== void 0 && (w = "" + f.key), f.ref !== void 0 && (T = f.ref);
    for (l in f)
      b.call(f, l) && !C.hasOwnProperty(l) && (d[l] = f[l]);
    if (y && y.defaultProps)
      for (l in f = y.defaultProps, f)
        d[l] === void 0 && (d[l] = f[l]);
    return { $$typeof: R, type: y, key: w, ref: T, props: d, _owner: O.current };
  }
  return W.Fragment = S, W.jsx = x, W.jsxs = x, W;
}
var M = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function gr() {
  return Pe || (Pe = 1, {}.NODE_ENV !== "production" && function() {
    var g = Ce, R = Symbol.for("react.element"), S = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), y = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), F = Symbol.iterator, U = "@@iterator";
    function ke(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = F && e[F] || e[U];
      return typeof r == "function" ? r : null;
    }
    var k = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        De("error", e, t);
      }
    }
    function De(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var s = t.map(function(i) {
          return String(i);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Ae = !1, Fe = !1, Ie = !1, Le = !1, Ne = !1, ne;
    ne = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === b || e === C || Ne || e === O || e === _ || e === l || Le || e === T || Ae || Fe || Ie || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === d || e.$$typeof === x || e.$$typeof === y || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function Me(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function E(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case b:
          return "Fragment";
        case S:
          return "Portal";
        case C:
          return "Profiler";
        case O:
          return "StrictMode";
        case _:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var r = e;
            return ae(r) + ".Consumer";
          case x:
            var t = e;
            return ae(t._context) + ".Provider";
          case f:
            return Me(e, e.render, "ForwardRef");
          case d:
            var n = e.displayName || null;
            return n !== null ? n : E(e.type) || "Memo";
          case w: {
            var o = e, s = o._payload, i = o._init;
            try {
              return E(i(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, I = 0, ie, oe, se, le, ue, ce, fe;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Ue() {
      {
        if (I === 0) {
          ie = console.log, oe = console.info, se = console.warn, le = console.error, ue = console.group, ce = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        I++;
      }
    }
    function $e() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: ie
            }),
            info: P({}, e, {
              value: oe
            }),
            warn: P({}, e, {
              value: se
            }),
            error: P({}, e, {
              value: le
            }),
            group: P({}, e, {
              value: ue
            }),
            groupCollapsed: P({}, e, {
              value: ce
            }),
            groupEnd: P({}, e, {
              value: fe
            })
          });
        }
        I < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = k.ReactCurrentDispatcher, J;
    function $(e, r, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            J = n && n[1] || "";
          }
        return `
` + J + e;
      }
    }
    var G = !1, Y;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Ye();
    }
    function pe(e, r) {
      if (!e || G)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      G = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = X.current, X.current = null, Ue();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (m) {
              n = m;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (m) {
              n = m;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (m) {
            n = m;
          }
          e();
        }
      } catch (m) {
        if (m && n && typeof m.stack == "string") {
          for (var a = m.stack.split(`
`), v = n.stack.split(`
`), u = a.length - 1, c = v.length - 1; u >= 1 && c >= 0 && a[u] !== v[c]; )
            c--;
          for (; u >= 1 && c >= 0; u--, c--)
            if (a[u] !== v[c]) {
              if (u !== 1 || c !== 1)
                do
                  if (u--, c--, c < 0 || a[u] !== v[c]) {
                    var h = `
` + a[u].replace(" at new ", " at ");
                    return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, h), h;
                  }
                while (u >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        G = !1, X.current = s, $e(), Error.prepareStackTrace = o;
      }
      var A = e ? e.displayName || e.name : "", j = A ? $(A) : "";
      return typeof e == "function" && Y.set(e, j), j;
    }
    function Ve(e, r, t) {
      return pe(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, Be(e));
      if (typeof e == "string")
        return $(e);
      switch (e) {
        case _:
          return $("Suspense");
        case l:
          return $("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ve(e.render);
          case d:
            return V(e.type, r, t);
          case w: {
            var n = e, o = n._payload, s = n._init;
            try {
              return V(s(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, ve = {}, ge = k.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    function Xe(e, r, t, n, o) {
      {
        var s = Function.call.bind(L);
        for (var i in e)
          if (s(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              a = u;
            }
            a && !(a instanceof Error) && (B(o), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), B(null)), a instanceof Error && !(a.message in ve) && (ve[a.message] = !0, B(o), p("Failed %s type: %s", t, a.message), B(null));
          }
      }
    }
    var Je = Array.isArray;
    function K(e) {
      return Je(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return me(e), !1;
      } catch {
        return !0;
      }
    }
    function me(e) {
      return "" + e;
    }
    function ye(e) {
      if (Ke(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), me(e);
    }
    var N = k.ReactCurrentOwner, qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, be, q;
    q = {};
    function ze(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      if (typeof e.ref == "string" && N.current && r && N.current.stateNode !== r) {
        var t = E(N.current.type);
        q[t] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E(N.current.type), e.ref), q[t] = !0);
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          he || (he = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          be || (be = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, o, s, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: R,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function tr(e, r, t, n, o) {
      {
        var s, i = {}, a = null, v = null;
        t !== void 0 && (ye(t), a = "" + t), He(r) && (ye(r.key), a = "" + r.key), ze(r) && (v = r.ref, Ze(r, o));
        for (s in r)
          L.call(r, s) && !qe.hasOwnProperty(s) && (i[s] = r[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            i[s] === void 0 && (i[s] = u[s]);
        }
        if (a || v) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Qe(i, c), v && er(i, c);
        }
        return rr(e, a, v, o, n, N.current, i);
      }
    }
    var z = k.ReactCurrentOwner, Ee = k.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    var H;
    H = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === R;
    }
    function Re() {
      {
        if (z.current) {
          var e = E(z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var _e = {};
    function ar(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function we(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (_e[t])
          return;
        _e[t] = !0;
        var n = "";
        e && e._owner && e._owner !== z.current && (n = " It was passed a child from " + E(e._owner.type) + "."), D(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), D(null);
      }
    }
    function Se(e, r) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Z(n) && we(n, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = ke(e);
          if (typeof o == "function" && o !== e.entries)
            for (var s = o.call(e), i; !(i = s.next()).done; )
              Z(i.value) && we(i.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === d))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = E(r);
          Xe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !H) {
          H = !0;
          var o = E(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            D(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var Oe = {};
    function xe(e, r, t, n, o, s) {
      {
        var i = We(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = nr(o);
          v ? a += v : a += Re();
          var u;
          e === null ? u = "null" : K(e) ? u = "array" : e !== void 0 && e.$$typeof === R ? (u = "<" + (E(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, a);
        }
        var c = tr(e, r, t, o, s);
        if (c == null)
          return c;
        if (i) {
          var h = r.children;
          if (h !== void 0)
            if (n)
              if (K(h)) {
                for (var A = 0; A < h.length; A++)
                  Se(h[A], e);
                Object.freeze && Object.freeze(h);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Se(h, e);
        }
        if (L.call(r, "key")) {
          var j = E(e), m = Object.keys(r).filter(function(dr) {
            return dr !== "key";
          }), Q = m.length > 0 ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Oe[j + Q]) {
            var fr = m.length > 0 ? "{" + m.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Q, j, fr, j), Oe[j + Q] = !0;
          }
        }
        return e === b ? or(c) : ir(c), c;
      }
    }
    function sr(e, r, t) {
      return xe(e, r, t, !0);
    }
    function lr(e, r, t) {
      return xe(e, r, t, !1);
    }
    var ur = lr, cr = sr;
    M.Fragment = b, M.jsx = ur, M.jsxs = cr;
  }()), M;
}
({}).NODE_ENV === "production" ? te.exports = vr() : te.exports = gr();
var je = te.exports;
const mr = (g) => {
  const R = "//unpkg.com/es-module-shims@1.8.0/dist/es-module-shims.js", S = typeof import.meta > "u" ? g.replace("<!-- es-module-shims -->", `<script async src="${R}"><\/script>`) : g;
  return URL.createObjectURL(new Blob([S], { type: "text/html" }));
}, yr = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Preview</title>
    <!-- es-module-shims -->
    <style>
      * {
        padding: 0;
        margin: 0;
      }
    </style>
  </head>
  <body>
    <script type="importmap">
      {
        "imports": {
          "react": "https://esm.sh/react@18.2.0",
          "react-dom/client": "https://esm.sh/react-dom@18.2.0"
        }
      }
    <\/script>
    <script><\/script>
    <script type="module">
      import React, { useState, useEffect } from 'react'
      import ReactDOM from 'react-dom/client'
      import { Playground } from 'https://esm.sh/react-playground-test@#version#'

      const App = () => {
        const [sandboxProps, setSandboxProps] = useState(null)

        useEffect(() => {
          window.addEventListener('message', ({ data }) => {
            if (data?.type === 'SANDBOX_RUN') {
              data.data.onFilesChange = (val) => {
                window.parent.postMessage({ type: 'SANDBOX_ON_FILES_CHANGE', message: val })
              }
              setSandboxProps(data.data)
            }
          })
        }, [])

        return sandboxProps
          ? React.createElement(
              React.StrictMode,
              null,
              React.createElement(Playground, sandboxProps)
            )
          : null
      }

      window.addEventListener('load', () => {
        window.parent.postMessage({ type: 'SANDBOX_LOADED', message: '' })
        const root = document.getElementById('root')
        ReactDOM.createRoot(root).render(React.createElement(App, null))
      })
    <\/script>
    <div id="root">
      <div
        style="
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        Loading...
      </div>
    </div>
  </body>
</html>
`, hr = "react-playground-test", br = "", Er = "0.0.1", Rr = {
  ".": {
    import: {
      types: "./dist/@types/Playground/index.d.ts",
      default: "./dist/index.mjs"
    }
  },
  "./PlaygroundSandbox": {
    import: {
      types: "./dist/@types/Playground/PlaygroundSandbox.d.ts",
      default: "./dist/PlaygroundSandbox.mjs"
    }
  }
}, _r = [
  "dist/*"
], wr = {
  type: "git",
  url: "https://github.com/jialuyi/react-playground-test2.git"
}, Sr = [
  "react",
  "react-playground",
  "playground",
  "react-live",
  "live-editor",
  "codeSandbox",
  "sandbox",
  "live"
], Or = "fewismuch", xr = "MIT", Tr = {
  dev: "vite",
  build: "vite build && tsc",
  docs: "vite build && tsc",
  preview: "vite preview",
  prepare: "husky install",
  report: "tsc && vite build",
  prepublish: "npm run docs && npm run build && npm publish"
}, Pr = {
  "@babel/standalone": "^7.23.1",
  "@monaco-editor/react": "^4.5.2",
  "@typescript/ata": "^0.9.4",
  allotment: "^1.19.3",
  classnames: "^2.3.2",
  fflate: "^0.8.1",
  "file-saver": "^2.0.5",
  jszip: "^3.10.1",
  "monaco-editor": "^0.43.0",
  "monaco-jsx-syntax-highlight": "^1.2.0",
  react: "^18.2.0",
  "react-copy-to-clipboard": "^5.1.0",
  "react-dom": "^18.2.0"
}, jr = {
  react: ">=18.2.0",
  "react-dom": ">=18.2.0"
}, Cr = {
  "@types/babel__standalone": "^7.1.5",
  "@types/file-saver": "^2.0.5",
  "@types/node": "^20.8.10",
  "@types/react": "^18.2.15",
  "@types/react-dom": "^18.2.7",
  "@typescript-eslint/eslint-plugin": "^6.8.0",
  "@typescript-eslint/parser": "^6.8.0",
  "@vitejs/plugin-react-swc": "^3.3.2",
  eslint: "^8.45.0",
  "eslint-config-prettier": "^9.0.0",
  "eslint-config-standard": "^17.1.0",
  "eslint-plugin-import": "^2.28.1",
  "eslint-plugin-n": "^16.2.0",
  "eslint-plugin-prettier": "^5.0.1",
  "eslint-plugin-promise": "^6.1.1",
  "eslint-plugin-react": "^7.33.2",
  "eslint-plugin-react-hooks": "^4.6.0",
  "eslint-plugin-react-refresh": "^0.4.3",
  "eslint-plugin-standard": "^5.0.0",
  husky: "^8.0.3",
  less: "^4.1.3",
  "less-loader": "^11.1.2",
  "lint-staged": "^15.0.2",
  prettier: "^3.0.3",
  "rollup-plugin-visualizer": "^5.9.2",
  stylelint: "^15.11.0",
  "stylelint-config-css-modules": "^4.3.0",
  "stylelint-config-prettier": "^9.0.5",
  "stylelint-config-recommended-less": "^2.0.0",
  "stylelint-config-standard": "^34.0.0",
  "stylelint-less": "^2.0.0",
  "stylelint-order": "^6.0.3",
  "stylelint-prettier": "^4.0.2",
  typescript: "^5.0.2",
  vite: "^4.4.5",
  "vite-plugin-cdn-import": "^0.3.5",
  "vite-plugin-css-injected-by-js": "^3.3.0"
}, kr = {
  name: hr,
  description: br,
  private: !1,
  version: Er,
  exports: Rr,
  files: _r,
  repository: wr,
  keywords: Sr,
  author: Or,
  license: xr,
  scripts: Tr,
  dependencies: Pr,
  peerDependencies: jr,
  devDependencies: Cr,
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx}": [
      "eslint --max-warnings 0"
    ],
    "src/**/*.{css,less,scss}": [
      "stylelint --max-warnings 0"
    ]
  }
}, Dr = yr.replace("#version#", kr.version), Ar = mr(Dr) + window.location.hash, Ir = (g) => {
  const { width: R = "100vw", height: S = "100vh" } = g, b = ee(null), O = ee(!1), [C, x] = pr(!1), y = ee(null), f = (l) => {
    l.forEach((d) => {
      d.isIntersecting && x(!0);
    });
  }, _ = (l) => {
    var T, F, U;
    const { type: d, message: w } = l.data;
    d === "SANDBOX_LOADED" ? ((F = (T = b.current) == null ? void 0 : T.contentWindow) == null || F.postMessage({
      type: "SANDBOX_RUN",
      data: {
        ...g,
        onFilesChange: void 0
      }
    }), O.current = !0) : d === "SANDBOX_ON_FILES_CHANGE" && ((U = g.onFilesChange) == null || U.call(g, w));
  };
  return re(() => {
    const l = new IntersectionObserver(f, {
      threshold: 0.2
    });
    return y.current && l.observe(y.current), () => {
      y.current && l.unobserve(y.current);
    };
  }, []), re(() => (window.addEventListener("message", _), () => {
    window.removeEventListener("message", _);
  }), []), re(() => {
    var l, d;
    O.current && ((d = (l = b.current) == null ? void 0 : l.contentWindow) == null || d.postMessage({
      type: "SANDBOX_RUN",
      data: {
        ...g,
        onFilesChange: void 0
      }
    }));
  }, [g]), /* @__PURE__ */ je.jsx("div", { ref: y, style: { width: R, height: S }, children: C ? /* @__PURE__ */ je.jsx(
    "iframe",
    {
      ref: b,
      src: Ar,
      style: {
        width: "100%",
        height: "100%",
        padding: 0,
        border: "none"
      },
      sandbox: "allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"
    }
  ) : null });
};
export {
  Ir as S,
  mr as g,
  je as j
};
