import MZ, { memo as Fc, useState as VZ, useRef as f, useCallback as sl, useEffect as lZ, createContext as Gi, useContext as Tl, forwardRef as NI, useMemo as RI, useImperativeHandle as Li, useLayoutEffect as Yi } from "react";
var Ol = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Vi(Z) {
  return Z && Z.__esModule && Object.prototype.hasOwnProperty.call(Z, "default") ? Z.default : Z;
}
var Lc = { exports: {} }, El = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hc;
function ui() {
  if (Hc)
    return El;
  Hc = 1;
  var Z = MZ, l = Symbol.for("react.element"), m = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, I = Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(W, X, d) {
    var y, L = {}, V = null, u = null;
    d !== void 0 && (V = "" + d), X.key !== void 0 && (V = "" + X.key), X.ref !== void 0 && (u = X.ref);
    for (y in X)
      c.call(X, y) && !i.hasOwnProperty(y) && (L[y] = X[y]);
    if (W && W.defaultProps)
      for (y in X = W.defaultProps, X)
        L[y] === void 0 && (L[y] = X[y]);
    return { $$typeof: l, type: W, key: V, ref: u, props: L, _owner: I.current };
  }
  return El.Fragment = m, El.jsx = b, El.jsxs = b, El;
}
var Pl = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tc;
function Ji() {
  return Tc || (Tc = 1, {}.NODE_ENV !== "production" && function() {
    var Z = MZ, l = Symbol.for("react.element"), m = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), W = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), u = Symbol.for("react.offscreen"), N = Symbol.iterator, S = "@@iterator";
    function C(G) {
      if (G === null || typeof G != "object")
        return null;
      var M = N && G[N] || G[S];
      return typeof M == "function" ? M : null;
    }
    var s = Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(G) {
      {
        for (var M = arguments.length, x = new Array(M > 1 ? M - 1 : 0), Q = 1; Q < M; Q++)
          x[Q - 1] = arguments[Q];
        h("error", G, x);
      }
    }
    function h(G, M, x) {
      {
        var Q = s.ReactDebugCurrentFrame, ZZ = Q.getStackAddendum();
        ZZ !== "" && (M += "%s", x = x.concat([ZZ]));
        var bZ = x.map(function(r) {
          return String(r);
        });
        bZ.unshift("Warning: " + M), Function.prototype.apply.call(console[G], console, bZ);
      }
    }
    var K = !1, t = !1, H = !1, p = !1, w = !1, F;
    F = Symbol.for("react.module.reference");
    function j(G) {
      return !!(typeof G == "string" || typeof G == "function" || G === c || G === i || w || G === I || G === d || G === y || p || G === u || K || t || H || typeof G == "object" && G !== null && (G.$$typeof === V || G.$$typeof === L || G.$$typeof === b || G.$$typeof === W || G.$$typeof === X || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      G.$$typeof === F || G.getModuleId !== void 0));
    }
    function U(G, M, x) {
      var Q = G.displayName;
      if (Q)
        return Q;
      var ZZ = M.displayName || M.name || "";
      return ZZ !== "" ? x + "(" + ZZ + ")" : x;
    }
    function g(G) {
      return G.displayName || "Context";
    }
    function E(G) {
      if (G == null)
        return null;
      if (typeof G.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof G == "function")
        return G.displayName || G.name || null;
      if (typeof G == "string")
        return G;
      switch (G) {
        case c:
          return "Fragment";
        case m:
          return "Portal";
        case i:
          return "Profiler";
        case I:
          return "StrictMode";
        case d:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof G == "object")
        switch (G.$$typeof) {
          case W:
            var M = G;
            return g(M) + ".Consumer";
          case b:
            var x = G;
            return g(x._context) + ".Provider";
          case X:
            return U(G, G.render, "ForwardRef");
          case L:
            var Q = G.displayName || null;
            return Q !== null ? Q : E(G.type) || "Memo";
          case V: {
            var ZZ = G, bZ = ZZ._payload, r = ZZ._init;
            try {
              return E(r(bZ));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, a = 0, o, D, mZ, $, iZ, v, e;
    function P() {
    }
    P.__reactDisabledLog = !0;
    function XZ() {
      {
        if (a === 0) {
          o = console.log, D = console.info, mZ = console.warn, $ = console.error, iZ = console.group, v = console.groupCollapsed, e = console.groupEnd;
          var G = {
            configurable: !0,
            enumerable: !0,
            value: P,
            writable: !0
          };
          Object.defineProperties(console, {
            info: G,
            log: G,
            warn: G,
            error: G,
            group: G,
            groupCollapsed: G,
            groupEnd: G
          });
        }
        a++;
      }
    }
    function q() {
      {
        if (a--, a === 0) {
          var G = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, G, {
              value: o
            }),
            info: k({}, G, {
              value: D
            }),
            warn: k({}, G, {
              value: mZ
            }),
            error: k({}, G, {
              value: $
            }),
            group: k({}, G, {
              value: iZ
            }),
            groupCollapsed: k({}, G, {
              value: v
            }),
            groupEnd: k({}, G, {
              value: e
            })
          });
        }
        a < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var JZ = s.ReactCurrentDispatcher, O;
    function B(G, M, x) {
      {
        if (O === void 0)
          try {
            throw Error();
          } catch (ZZ) {
            var Q = ZZ.stack.trim().match(/\n( *(at )?)/);
            O = Q && Q[1] || "";
          }
        return `
` + O + G;
      }
    }
    var cZ = !1, IZ;
    {
      var EZ = typeof WeakMap == "function" ? WeakMap : Map;
      IZ = new EZ();
    }
    function kZ(G, M) {
      if (!G || cZ)
        return "";
      {
        var x = IZ.get(G);
        if (x !== void 0)
          return x;
      }
      var Q;
      cZ = !0;
      var ZZ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var bZ;
      bZ = JZ.current, JZ.current = null, XZ();
      try {
        if (M) {
          var r = function() {
            throw Error();
          };
          if (Object.defineProperty(r.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(r, []);
            } catch (Y) {
              Q = Y;
            }
            Reflect.construct(G, [], r);
          } else {
            try {
              r.call();
            } catch (Y) {
              Q = Y;
            }
            G.call(r.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Y) {
            Q = Y;
          }
          G();
        }
      } catch (Y) {
        if (Y && Q && typeof Y.stack == "string") {
          for (var A = Y.stack.split(`
`), SZ = Q.stack.split(`
`), LZ = A.length - 1, YZ = SZ.length - 1; LZ >= 1 && YZ >= 0 && A[LZ] !== SZ[YZ]; )
            YZ--;
          for (; LZ >= 1 && YZ >= 0; LZ--, YZ--)
            if (A[LZ] !== SZ[YZ]) {
              if (LZ !== 1 || YZ !== 1)
                do
                  if (LZ--, YZ--, YZ < 0 || A[LZ] !== SZ[YZ]) {
                    var sZ = `
` + A[LZ].replace(" at new ", " at ");
                    return G.displayName && sZ.includes("<anonymous>") && (sZ = sZ.replace("<anonymous>", G.displayName)), typeof G == "function" && IZ.set(G, sZ), sZ;
                  }
                while (LZ >= 1 && YZ >= 0);
              break;
            }
        }
      } finally {
        cZ = !1, JZ.current = bZ, q(), Error.prepareStackTrace = ZZ;
      }
      var AZ = G ? G.displayName || G.name : "", Vm = AZ ? B(AZ) : "";
      return typeof G == "function" && IZ.set(G, Vm), Vm;
    }
    function jZ(G, M, x) {
      return kZ(G, !1);
    }
    function ll(G) {
      var M = G.prototype;
      return !!(M && M.isReactComponent);
    }
    function FZ(G, M, x) {
      if (G == null)
        return "";
      if (typeof G == "function")
        return kZ(G, ll(G));
      if (typeof G == "string")
        return B(G);
      switch (G) {
        case d:
          return B("Suspense");
        case y:
          return B("SuspenseList");
      }
      if (typeof G == "object")
        switch (G.$$typeof) {
          case X:
            return jZ(G.render);
          case L:
            return FZ(G.type, M, x);
          case V: {
            var Q = G, ZZ = Q._payload, bZ = Q._init;
            try {
              return FZ(bZ(ZZ), M, x);
            } catch {
            }
          }
        }
      return "";
    }
    var ul = Object.prototype.hasOwnProperty, gl = {}, bm = s.ReactDebugCurrentFrame;
    function Jl(G) {
      if (G) {
        var M = G._owner, x = FZ(G.type, G._source, M ? M.type : null);
        bm.setExtraStackFrame(x);
      } else
        bm.setExtraStackFrame(null);
    }
    function Cl(G, M, x, Q, ZZ) {
      {
        var bZ = Function.call.bind(ul);
        for (var r in G)
          if (bZ(G, r)) {
            var A = void 0;
            try {
              if (typeof G[r] != "function") {
                var SZ = Error((Q || "React class") + ": " + x + " type `" + r + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof G[r] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw SZ.name = "Invariant Violation", SZ;
              }
              A = G[r](M, r, Q, x, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (LZ) {
              A = LZ;
            }
            A && !(A instanceof Error) && (Jl(ZZ), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Q || "React class", x, r, typeof A), Jl(null)), A instanceof Error && !(A.message in gl) && (gl[A.message] = !0, Jl(ZZ), R("Failed %s type: %s", x, A.message), Jl(null));
          }
      }
    }
    var Wm = Array.isArray;
    function Fl(G) {
      return Wm(G);
    }
    function gm(G) {
      {
        var M = typeof Symbol == "function" && Symbol.toStringTag, x = M && G[Symbol.toStringTag] || G.constructor.name || "Object";
        return x;
      }
    }
    function PZ(G) {
      try {
        return vl(G), !1;
      } catch {
        return !0;
      }
    }
    function vl(G) {
      return "" + G;
    }
    function Xm(G) {
      if (PZ(G))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gm(G)), vl(G);
    }
    var hl = s.ReactCurrentOwner, tl = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ml, nl, Nl;
    Nl = {};
    function Dl(G) {
      if (ul.call(G, "ref")) {
        var M = Object.getOwnPropertyDescriptor(G, "ref").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return G.ref !== void 0;
    }
    function Rl(G) {
      if (ul.call(G, "key")) {
        var M = Object.getOwnPropertyDescriptor(G, "key").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return G.key !== void 0;
    }
    function vm(G, M) {
      if (typeof G.ref == "string" && hl.current && M && hl.current.stateNode !== M) {
        var x = E(hl.current.type);
        Nl[x] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E(hl.current.type), G.ref), Nl[x] = !0);
      }
    }
    function tm(G, M) {
      {
        var x = function() {
          ml || (ml = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        x.isReactWarning = !0, Object.defineProperty(G, "key", {
          get: x,
          configurable: !0
        });
      }
    }
    function Dm(G, M) {
      {
        var x = function() {
          nl || (nl = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        x.isReactWarning = !0, Object.defineProperty(G, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var Qm = function(G, M, x, Q, ZZ, bZ, r) {
      var A = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: G,
        key: M,
        ref: x,
        props: r,
        // Record the component responsible for creating this element.
        _owner: bZ
      };
      return A._store = {}, Object.defineProperty(A._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(A, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Q
      }), Object.defineProperty(A, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ZZ
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    };
    function em(G, M, x, Q, ZZ) {
      {
        var bZ, r = {}, A = null, SZ = null;
        x !== void 0 && (Xm(x), A = "" + x), Rl(M) && (Xm(M.key), A = "" + M.key), Dl(M) && (SZ = M.ref, vm(M, ZZ));
        for (bZ in M)
          ul.call(M, bZ) && !tl.hasOwnProperty(bZ) && (r[bZ] = M[bZ]);
        if (G && G.defaultProps) {
          var LZ = G.defaultProps;
          for (bZ in LZ)
            r[bZ] === void 0 && (r[bZ] = LZ[bZ]);
        }
        if (A || SZ) {
          var YZ = typeof G == "function" ? G.displayName || G.name || "Unknown" : G;
          A && tm(r, YZ), SZ && Dm(r, YZ);
        }
        return Qm(G, A, SZ, ZZ, Q, hl.current, r);
      }
    }
    var zl = s.ReactCurrentOwner, kl = s.ReactDebugCurrentFrame;
    function zZ(G) {
      if (G) {
        var M = G._owner, x = FZ(G.type, G._source, M ? M.type : null);
        kl.setExtraStackFrame(x);
      } else
        kl.setExtraStackFrame(null);
    }
    var aZ;
    aZ = !1;
    function gZ(G) {
      return typeof G == "object" && G !== null && G.$$typeof === l;
    }
    function pl() {
      {
        if (zl.current) {
          var G = E(zl.current.type);
          if (G)
            return `

Check the render method of \`` + G + "`.";
        }
        return "";
      }
    }
    function QZ(G) {
      {
        if (G !== void 0) {
          var M = G.fileName.replace(/^.*[\\\/]/, ""), x = G.lineNumber;
          return `

Check your code at ` + M + ":" + x + ".";
        }
        return "";
      }
    }
    var dm = {};
    function al(G) {
      {
        var M = pl();
        if (!M) {
          var x = typeof G == "string" ? G : G.displayName || G.name;
          x && (M = `

Check the top-level render call using <` + x + ">.");
        }
        return M;
      }
    }
    function cl(G, M) {
      {
        if (!G._store || G._store.validated || G.key != null)
          return;
        G._store.validated = !0;
        var x = al(M);
        if (dm[x])
          return;
        dm[x] = !0;
        var Q = "";
        G && G._owner && G._owner !== zl.current && (Q = " It was passed a child from " + E(G._owner.type) + "."), zZ(G), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, Q), zZ(null);
      }
    }
    function Ql(G, M) {
      {
        if (typeof G != "object")
          return;
        if (Fl(G))
          for (var x = 0; x < G.length; x++) {
            var Q = G[x];
            gZ(Q) && cl(Q, M);
          }
        else if (gZ(G))
          G._store && (G._store.validated = !0);
        else if (G) {
          var ZZ = C(G);
          if (typeof ZZ == "function" && ZZ !== G.entries)
            for (var bZ = ZZ.call(G), r; !(r = bZ.next()).done; )
              gZ(r.value) && cl(r.value, M);
        }
      }
    }
    function ym(G) {
      {
        var M = G.type;
        if (M == null || typeof M == "string")
          return;
        var x;
        if (typeof M == "function")
          x = M.propTypes;
        else if (typeof M == "object" && (M.$$typeof === X || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        M.$$typeof === L))
          x = M.propTypes;
        else
          return;
        if (x) {
          var Q = E(M);
          Cl(x, G.props, "prop", Q, G);
        } else if (M.PropTypes !== void 0 && !aZ) {
          aZ = !0;
          var ZZ = E(M);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ZZ || "Unknown");
        }
        typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Bm(G) {
      {
        for (var M = Object.keys(G.props), x = 0; x < M.length; x++) {
          var Q = M[x];
          if (Q !== "children" && Q !== "key") {
            zZ(G), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Q), zZ(null);
            break;
          }
        }
        G.ref !== null && (zZ(G), R("Invalid attribute `ref` supplied to `React.Fragment`."), zZ(null));
      }
    }
    function Gm(G, M, x, Q, ZZ, bZ) {
      {
        var r = j(G);
        if (!r) {
          var A = "";
          (G === void 0 || typeof G == "object" && G !== null && Object.keys(G).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var SZ = QZ(ZZ);
          SZ ? A += SZ : A += pl();
          var LZ;
          G === null ? LZ = "null" : Fl(G) ? LZ = "array" : G !== void 0 && G.$$typeof === l ? (LZ = "<" + (E(G.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : LZ = typeof G, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", LZ, A);
        }
        var YZ = em(G, M, x, ZZ, bZ);
        if (YZ == null)
          return YZ;
        if (r) {
          var sZ = M.children;
          if (sZ !== void 0)
            if (Q)
              if (Fl(sZ)) {
                for (var AZ = 0; AZ < sZ.length; AZ++)
                  Ql(sZ[AZ], G);
                Object.freeze && Object.freeze(sZ);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ql(sZ, G);
        }
        return G === c ? Bm(YZ) : ym(YZ), YZ;
      }
    }
    function Lm(G, M, x) {
      return Gm(G, M, x, !0);
    }
    function Ym(G, M, x) {
      return Gm(G, M, x, !1);
    }
    var wl = Ym, Il = Lm;
    Pl.Fragment = c, Pl.jsx = wl, Pl.jsxs = Il;
  }()), Pl;
}
({}).NODE_ENV === "production" ? Lc.exports = ui() : Lc.exports = Ji();
var z = Lc.exports;
function hi(Z, l, m) {
  return l in Z ? Object.defineProperty(Z, l, {
    value: m,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : Z[l] = m, Z;
}
function gc(Z, l) {
  var m = Object.keys(Z);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(Z);
    l && (c = c.filter(function(I) {
      return Object.getOwnPropertyDescriptor(Z, I).enumerable;
    })), m.push.apply(m, c);
  }
  return m;
}
function vc(Z) {
  for (var l = 1; l < arguments.length; l++) {
    var m = arguments[l] != null ? arguments[l] : {};
    l % 2 ? gc(Object(m), !0).forEach(function(c) {
      hi(Z, c, m[c]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(Z, Object.getOwnPropertyDescriptors(m)) : gc(Object(m)).forEach(function(c) {
      Object.defineProperty(Z, c, Object.getOwnPropertyDescriptor(m, c));
    });
  }
  return Z;
}
function Ni(Z, l) {
  if (Z == null)
    return {};
  var m = {}, c = Object.keys(Z), I, i;
  for (i = 0; i < c.length; i++)
    I = c[i], !(l.indexOf(I) >= 0) && (m[I] = Z[I]);
  return m;
}
function Ri(Z, l) {
  if (Z == null)
    return {};
  var m = Ni(Z, l), c, I;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(Z);
    for (I = 0; I < i.length; I++)
      c = i[I], !(l.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(Z, c) && (m[c] = Z[c]);
  }
  return m;
}
function pi(Z, l) {
  return Si(Z) || si(Z, l) || Mi(Z, l) || Ci();
}
function Si(Z) {
  if (Array.isArray(Z))
    return Z;
}
function si(Z, l) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(Z)))) {
    var m = [], c = !0, I = !1, i = void 0;
    try {
      for (var b = Z[Symbol.iterator](), W; !(c = (W = b.next()).done) && (m.push(W.value), !(l && m.length === l)); c = !0)
        ;
    } catch (X) {
      I = !0, i = X;
    } finally {
      try {
        !c && b.return != null && b.return();
      } finally {
        if (I)
          throw i;
      }
    }
    return m;
  }
}
function Mi(Z, l) {
  if (Z) {
    if (typeof Z == "string")
      return tc(Z, l);
    var m = Object.prototype.toString.call(Z).slice(8, -1);
    if (m === "Object" && Z.constructor && (m = Z.constructor.name), m === "Map" || m === "Set")
      return Array.from(Z);
    if (m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))
      return tc(Z, l);
  }
}
function tc(Z, l) {
  (l == null || l > Z.length) && (l = Z.length);
  for (var m = 0, c = new Array(l); m < l; m++)
    c[m] = Z[m];
  return c;
}
function Ci() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fi(Z, l, m) {
  return l in Z ? Object.defineProperty(Z, l, {
    value: m,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : Z[l] = m, Z;
}
function Dc(Z, l) {
  var m = Object.keys(Z);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(Z);
    l && (c = c.filter(function(I) {
      return Object.getOwnPropertyDescriptor(Z, I).enumerable;
    })), m.push.apply(m, c);
  }
  return m;
}
function Qc(Z) {
  for (var l = 1; l < arguments.length; l++) {
    var m = arguments[l] != null ? arguments[l] : {};
    l % 2 ? Dc(Object(m), !0).forEach(function(c) {
      Fi(Z, c, m[c]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(Z, Object.getOwnPropertyDescriptors(m)) : Dc(Object(m)).forEach(function(c) {
      Object.defineProperty(Z, c, Object.getOwnPropertyDescriptor(m, c));
    });
  }
  return Z;
}
function ni() {
  for (var Z = arguments.length, l = new Array(Z), m = 0; m < Z; m++)
    l[m] = arguments[m];
  return function(c) {
    return l.reduceRight(function(I, i) {
      return i(I);
    }, c);
  };
}
function _l(Z) {
  return function l() {
    for (var m = this, c = arguments.length, I = new Array(c), i = 0; i < c; i++)
      I[i] = arguments[i];
    return I.length >= Z.length ? Z.apply(this, I) : function() {
      for (var b = arguments.length, W = new Array(b), X = 0; X < b; X++)
        W[X] = arguments[X];
      return l.apply(m, [].concat(I, W));
    };
  };
}
function wm(Z) {
  return {}.toString.call(Z).includes("Object");
}
function zi(Z) {
  return !Object.keys(Z).length;
}
function lm(Z) {
  return typeof Z == "function";
}
function ki(Z, l) {
  return Object.prototype.hasOwnProperty.call(Z, l);
}
function ai(Z, l) {
  return wm(l) || Gl("changeType"), Object.keys(l).some(function(m) {
    return !ki(Z, m);
  }) && Gl("changeField"), l;
}
function wi(Z) {
  lm(Z) || Gl("selectorType");
}
function xi(Z) {
  lm(Z) || wm(Z) || Gl("handlerType"), wm(Z) && Object.values(Z).some(function(l) {
    return !lm(l);
  }) && Gl("handlersType");
}
function Ui(Z) {
  Z || Gl("initialIsRequired"), wm(Z) || Gl("initialType"), zi(Z) && Gl("initialContent");
}
function ji(Z, l) {
  throw new Error(Z[l] || Z.default);
}
var Ki = {
  initialIsRequired: "initial state is required",
  initialType: "initial state should be an object",
  initialContent: "initial state shouldn't be an empty object",
  handlerType: "handler should be an object or a function",
  handlersType: "all handlers should be a functions",
  selectorType: "selector should be a function",
  changeType: "provided value of changes should be an object",
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  default: "an unknown error accured in `state-local` package"
}, Gl = _l(ji)(Ki), Cm = {
  changes: ai,
  selector: wi,
  handler: xi,
  initial: Ui
};
function oi(Z) {
  var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  Cm.initial(Z), Cm.handler(l);
  var m = {
    current: Z
  }, c = _l(gi)(m, l), I = _l(Ti)(m), i = _l(Cm.changes)(Z), b = _l(Hi)(m);
  function W() {
    var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(y) {
      return y;
    };
    return Cm.selector(d), d(m.current);
  }
  function X(d) {
    ni(c, I, i, b)(d);
  }
  return [W, X];
}
function Hi(Z, l) {
  return lm(l) ? l(Z.current) : l;
}
function Ti(Z, l) {
  return Z.current = Qc(Qc({}, Z.current), l), l;
}
function gi(Z, l, m) {
  return lm(l) ? l(Z.current) : Object.keys(m).forEach(function(c) {
    var I;
    return (I = l[c]) === null || I === void 0 ? void 0 : I.call(l, Z.current[c]);
  }), m;
}
var vi = {
  create: oi
}, ti = {
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"
  }
};
function Di(Z) {
  return function l() {
    for (var m = this, c = arguments.length, I = new Array(c), i = 0; i < c; i++)
      I[i] = arguments[i];
    return I.length >= Z.length ? Z.apply(this, I) : function() {
      for (var b = arguments.length, W = new Array(b), X = 0; X < b; X++)
        W[X] = arguments[X];
      return l.apply(m, [].concat(I, W));
    };
  };
}
function Qi(Z) {
  return {}.toString.call(Z).includes("Object");
}
function ei(Z) {
  return Z || ec("configIsRequired"), Qi(Z) || ec("configType"), Z.urls ? (Bi(), {
    paths: {
      vs: Z.urls.monacoBase
    }
  }) : Z;
}
function Bi() {
  console.warn(pI.deprecation);
}
function Oi(Z, l) {
  throw new Error(Z[l] || Z.default);
}
var pI = {
  configIsRequired: "the configuration object is required",
  configType: "the configuration object should be an object",
  default: "an unknown error accured in `@monaco-editor/loader` package",
  deprecation: `Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `
}, ec = Di(Oi)(pI), Ei = {
  config: ei
}, Pi = function() {
  for (var l = arguments.length, m = new Array(l), c = 0; c < l; c++)
    m[c] = arguments[c];
  return function(I) {
    return m.reduceRight(function(i, b) {
      return b(i);
    }, I);
  };
};
function SI(Z, l) {
  return Object.keys(l).forEach(function(m) {
    l[m] instanceof Object && Z[m] && Object.assign(l[m], SI(Z[m], l[m]));
  }), vc(vc({}, Z), l);
}
var Ai = {
  type: "cancelation",
  msg: "operation is manually canceled"
};
function Am(Z) {
  var l = !1, m = new Promise(function(c, I) {
    Z.then(function(i) {
      return l ? I(Ai) : c(i);
    }), Z.catch(I);
  });
  return m.cancel = function() {
    return l = !0;
  }, m;
}
var fi = vi.create({
  config: ti,
  isInitialized: !1,
  resolve: null,
  reject: null,
  monaco: null
}), sI = pi(fi, 2), Im = sI[0], jm = sI[1];
function ri(Z) {
  var l = Ei.config(Z), m = l.monaco, c = Ri(l, ["monaco"]);
  jm(function(I) {
    return {
      config: SI(I.config, c),
      monaco: m
    };
  });
}
function qi() {
  var Z = Im(function(l) {
    var m = l.monaco, c = l.isInitialized, I = l.resolve;
    return {
      monaco: m,
      isInitialized: c,
      resolve: I
    };
  });
  if (!Z.isInitialized) {
    if (jm({
      isInitialized: !0
    }), Z.monaco)
      return Z.resolve(Z.monaco), Am(fm);
    if (window.monaco && window.monaco.editor)
      return MI(window.monaco), Z.resolve(window.monaco), Am(fm);
    Pi(_i, Zb)(lb);
  }
  return Am(fm);
}
function _i(Z) {
  return document.body.appendChild(Z);
}
function $i(Z) {
  var l = document.createElement("script");
  return Z && (l.src = Z), l;
}
function Zb(Z) {
  var l = Im(function(c) {
    var I = c.config, i = c.reject;
    return {
      config: I,
      reject: i
    };
  }), m = $i("".concat(l.config.paths.vs, "/loader.js"));
  return m.onload = function() {
    return Z();
  }, m.onerror = l.reject, m;
}
function lb() {
  var Z = Im(function(m) {
    var c = m.config, I = m.resolve, i = m.reject;
    return {
      config: c,
      resolve: I,
      reject: i
    };
  }), l = window.require;
  l.config(Z.config), l(["vs/editor/editor.main"], function(m) {
    MI(m), Z.resolve(m);
  }, function(m) {
    Z.reject(m);
  });
}
function MI(Z) {
  Im().monaco || jm({
    monaco: Z
  });
}
function mb() {
  return Im(function(Z) {
    var l = Z.monaco;
    return l;
  });
}
var fm = new Promise(function(Z, l) {
  return jm({
    resolve: Z,
    reject: l
  });
}), nc = {
  config: ri,
  init: qi,
  __getMonacoInstance: mb
}, cb = { wrapper: { display: "flex", position: "relative", textAlign: "initial" }, fullWidth: { width: "100%" }, hide: { display: "none" } }, rm = cb, Ib = { container: { display: "flex", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" } }, ib = Ib;
function bb({ children: Z }) {
  return MZ.createElement("div", { style: ib.container }, Z);
}
var Wb = bb, Xb = Wb;
function db({ width: Z, height: l, isEditorReady: m, loading: c, _ref: I, className: i, wrapperProps: b }) {
  return MZ.createElement("section", { style: { ...rm.wrapper, width: Z, height: l }, ...b }, !m && MZ.createElement(Xb, null, c), MZ.createElement("div", { ref: I, style: { ...rm.fullWidth, ...!m && rm.hide }, className: i }));
}
var yb = db, CI = Fc(yb);
function Gb(Z) {
  lZ(Z, []);
}
var FI = Gb;
function Lb(Z, l, m = !0) {
  let c = f(!0);
  lZ(c.current || !m ? () => {
    c.current = !1;
  } : Z, l);
}
var wZ = Lb;
function $l() {
}
function ol(Z, l, m, c) {
  return Yb(Z, c) || Vb(Z, l, m, c);
}
function Yb(Z, l) {
  return Z.editor.getModel(nI(Z, l));
}
function Vb(Z, l, m, c) {
  return Z.editor.createModel(l, m, c ? nI(Z, c) : void 0);
}
function nI(Z, l) {
  return Z.Uri.parse(l);
}
function ub({ original: Z, modified: l, language: m, originalLanguage: c, modifiedLanguage: I, originalModelPath: i, modifiedModelPath: b, keepCurrentOriginalModel: W = !1, keepCurrentModifiedModel: X = !1, theme: d = "light", loading: y = "Loading...", options: L = {}, height: V = "100%", width: u = "100%", className: N, wrapperProps: S = {}, beforeMount: C = $l, onMount: s = $l }) {
  let [R, h] = VZ(!1), [K, t] = VZ(!0), H = f(null), p = f(null), w = f(null), F = f(s), j = f(C), U = f(!1);
  FI(() => {
    let a = nc.init();
    return a.then((o) => (p.current = o) && t(!1)).catch((o) => (o == null ? void 0 : o.type) !== "cancelation" && console.error("Monaco initialization: error:", o)), () => H.current ? k() : a.cancel();
  }), wZ(() => {
    if (H.current && p.current) {
      let a = H.current.getOriginalEditor(), o = ol(p.current, Z || "", c || m || "text", i || "");
      o !== a.getModel() && a.setModel(o);
    }
  }, [i], R), wZ(() => {
    if (H.current && p.current) {
      let a = H.current.getModifiedEditor(), o = ol(p.current, l || "", I || m || "text", b || "");
      o !== a.getModel() && a.setModel(o);
    }
  }, [b], R), wZ(() => {
    let a = H.current.getModifiedEditor();
    a.getOption(p.current.editor.EditorOption.readOnly) ? a.setValue(l || "") : l !== a.getValue() && (a.executeEdits("", [{ range: a.getModel().getFullModelRange(), text: l || "", forceMoveMarkers: !0 }]), a.pushUndoStop());
  }, [l], R), wZ(() => {
    var a, o;
    (o = (a = H.current) == null ? void 0 : a.getModel()) == null || o.original.setValue(Z || "");
  }, [Z], R), wZ(() => {
    let { original: a, modified: o } = H.current.getModel();
    p.current.editor.setModelLanguage(a, c || m || "text"), p.current.editor.setModelLanguage(o, I || m || "text");
  }, [m, c, I], R), wZ(() => {
    var a;
    (a = p.current) == null || a.editor.setTheme(d);
  }, [d], R), wZ(() => {
    var a;
    (a = H.current) == null || a.updateOptions(L);
  }, [L], R);
  let g = sl(() => {
    var D;
    if (!p.current)
      return;
    j.current(p.current);
    let a = ol(p.current, Z || "", c || m || "text", i || ""), o = ol(p.current, l || "", I || m || "text", b || "");
    (D = H.current) == null || D.setModel({ original: a, modified: o });
  }, [m, l, I, Z, c, i, b]), E = sl(() => {
    var a;
    !U.current && w.current && (H.current = p.current.editor.createDiffEditor(w.current, { automaticLayout: !0, ...L }), g(), (a = p.current) == null || a.editor.setTheme(d), h(!0), U.current = !0);
  }, [L, d, g]);
  lZ(() => {
    R && F.current(H.current, p.current);
  }, [R]), lZ(() => {
    !K && !R && E();
  }, [K, R, E]);
  function k() {
    var o, D, mZ, $;
    let a = (o = H.current) == null ? void 0 : o.getModel();
    W || ((D = a == null ? void 0 : a.original) == null || D.dispose()), X || ((mZ = a == null ? void 0 : a.modified) == null || mZ.dispose()), ($ = H.current) == null || $.dispose();
  }
  return MZ.createElement(CI, { width: u, height: V, isEditorReady: R, loading: y, _ref: w, className: N, wrapperProps: S });
}
var Jb = ub;
Fc(Jb);
function hb(Z) {
  let l = f();
  return lZ(() => {
    l.current = Z;
  }, [Z]), l.current;
}
var Nb = hb, Fm = /* @__PURE__ */ new Map();
function Rb({ defaultValue: Z, defaultLanguage: l, defaultPath: m, value: c, language: I, path: i, theme: b = "light", line: W, loading: X = "Loading...", options: d = {}, overrideServices: y = {}, saveViewState: L = !0, keepCurrentModel: V = !1, width: u = "100%", height: N = "100%", className: S, wrapperProps: C = {}, beforeMount: s = $l, onMount: R = $l, onChange: h, onValidate: K = $l }) {
  let [t, H] = VZ(!1), [p, w] = VZ(!0), F = f(null), j = f(null), U = f(null), g = f(R), E = f(s), k = f(), a = f(c), o = Nb(i), D = f(!1), mZ = f(!1);
  FI(() => {
    let v = nc.init();
    return v.then((e) => (F.current = e) && w(!1)).catch((e) => (e == null ? void 0 : e.type) !== "cancelation" && console.error("Monaco initialization: error:", e)), () => j.current ? iZ() : v.cancel();
  }), wZ(() => {
    var e, P, XZ, q;
    let v = ol(F.current, Z || c || "", l || I || "", i || m || "");
    v !== ((e = j.current) == null ? void 0 : e.getModel()) && (L && Fm.set(o, (P = j.current) == null ? void 0 : P.saveViewState()), (XZ = j.current) == null || XZ.setModel(v), L && ((q = j.current) == null || q.restoreViewState(Fm.get(i))));
  }, [i], t), wZ(() => {
    var v;
    (v = j.current) == null || v.updateOptions(d);
  }, [d], t), wZ(() => {
    !j.current || c === void 0 || (j.current.getOption(F.current.editor.EditorOption.readOnly) ? j.current.setValue(c) : c !== j.current.getValue() && (mZ.current = !0, j.current.executeEdits("", [{ range: j.current.getModel().getFullModelRange(), text: c, forceMoveMarkers: !0 }]), j.current.pushUndoStop(), mZ.current = !1));
  }, [c], t), wZ(() => {
    var e, P;
    let v = (e = j.current) == null ? void 0 : e.getModel();
    v && I && ((P = F.current) == null || P.editor.setModelLanguage(v, I));
  }, [I], t), wZ(() => {
    var v;
    W !== void 0 && ((v = j.current) == null || v.revealLine(W));
  }, [W], t), wZ(() => {
    var v;
    (v = F.current) == null || v.editor.setTheme(b);
  }, [b], t);
  let $ = sl(() => {
    var v;
    if (!(!U.current || !F.current) && !D.current) {
      E.current(F.current);
      let e = i || m, P = ol(F.current, c || Z || "", l || I || "", e || "");
      j.current = (v = F.current) == null ? void 0 : v.editor.create(U.current, { model: P, automaticLayout: !0, ...d }, y), L && j.current.restoreViewState(Fm.get(e)), F.current.editor.setTheme(b), W !== void 0 && j.current.revealLine(W), H(!0), D.current = !0;
    }
  }, [Z, l, m, c, I, i, d, y, L, b, W]);
  lZ(() => {
    t && g.current(j.current, F.current);
  }, [t]), lZ(() => {
    !p && !t && $();
  }, [p, t, $]), a.current = c, lZ(() => {
    var v, e;
    t && h && ((v = k.current) == null || v.dispose(), k.current = (e = j.current) == null ? void 0 : e.onDidChangeModelContent((P) => {
      mZ.current || h(j.current.getValue(), P);
    }));
  }, [t, h]), lZ(() => {
    if (t) {
      let v = F.current.editor.onDidChangeMarkers((e) => {
        var XZ;
        let P = (XZ = j.current.getModel()) == null ? void 0 : XZ.uri;
        if (P && e.find((q) => q.path === P.path)) {
          let q = F.current.editor.getModelMarkers({ resource: P });
          K == null || K(q);
        }
      });
      return () => {
        v == null || v.dispose();
      };
    }
    return () => {
    };
  }, [t, K]);
  function iZ() {
    var v, e;
    (v = k.current) == null || v.dispose(), V ? L && Fm.set(i, j.current.saveViewState()) : (e = j.current.getModel()) == null || e.dispose(), j.current.dispose();
  }
  return MZ.createElement(CI, { width: u, height: N, isEditorReady: t, loading: X, _ref: U, className: S, wrapperProps: C });
}
var pb = Rb, Sb = Fc(pb), zI = Sb;
const kI = {
  automaticLayout: !0,
  cursorBlinking: "smooth",
  fontLigatures: !0,
  formatOnPaste: !0,
  formatOnType: !0,
  fontSize: 14,
  showDeprecated: !0,
  showUnused: !0,
  showFoldingControls: "mouseover",
  scrollBeyondLastLine: !1,
  minimap: {
    enabled: !1
  },
  inlineSuggest: {
    enabled: !1
  },
  fixedOverflowWidgets: !0,
  smoothScrolling: !0,
  smartSelect: {
    selectSubwords: !0,
    selectLeadingAndTrailingWhitespace: !0
  },
  tabSize: 2,
  overviewRulerBorder: !1,
  // 不要滚动条的边框
  // 滚动条设置
  scrollbar: {
    verticalScrollbarSize: 6,
    // 竖滚动条
    horizontalScrollbarSize: 6
    // 横滚动条
  }
  // lineNumbers: 'off', // 隐藏控制行号
};
var sb = `/******************************************************************************\r
Copyright (c) Microsoft Corporation.\r
\r
Permission to use, copy, modify, and/or distribute this software for any\r
purpose with or without fee is hereby granted.\r
\r
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH\r
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY\r
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,\r
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM\r
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR\r
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR\r
PERFORMANCE OF THIS SOFTWARE.\r
***************************************************************************** */\r
\r
var __assign = function() {\r
    __assign = Object.assign || function __assign(t) {\r
        for (var s, i = 1, n = arguments.length; i < n; i++) {\r
            s = arguments[i];\r
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\r
        }\r
        return t;\r
    };\r
    return __assign.apply(this, arguments);\r
};

var getTypescriptUrl=function(){var t="https://cdnjs.cloudflare.com/ajax/libs/typescript/4.6.4/typescript.min.js";try{return __TYPESCRIPT_CUSTOM_URL__||t}catch(r){return t}};self.importScripts([getTypescriptUrl()]);var Typescript=self.ts;

var JsxToken={angleBracket:"jsx-tag-angle-bracket",attributeKey:"jsx-tag-attribute-key",tagName:"jsx-tag-name",expressionBraces:"jsx-expression-braces",text:"jsx-text",orderTokenPrefix:"jsx-tag-order"};

var getRowAndColumn=function(n,o){for(var t=0,e=0;e+o[t]<n;)e+=o[t],t+=1;return {row:t+1,column:n-e}};var getNodeRange=function(n){return "function"==typeof n.getStart&&"function"==typeof n.getEnd?[n.getStart(),n.getEnd()]:void 0!==n.pos&&void 0!==n.end?[n.pos,n.end]:[0,0]};var calcPosition=function(n,o){var t=getNodeRange(n),e=t[0],r=t[1];return {indexes:[e,r],positions:[getRowAndColumn(e+1,o),getRowAndColumn(r,o)]}};

var disposeJsxElementOrFragment=function(n){var s=n.node,e=n.lines,t=n.classifications,o=n.config,a=n.context,i="".concat(JsxToken.orderTokenPrefix,"-").concat(a.jsxTagOrder);if(a.jsxTagOrder=a.jsxTagOrder+1>o.jsxTagCycle?1:a.jsxTagOrder+1,s.kind===Typescript.SyntaxKind.JsxSelfClosingElement){var r=calcPosition(s,e).positions,c=calcPosition(s.tagName,e).positions;t.push({start:r[0],end:r[0],tokens:[JsxToken.angleBracket,i]}),t.push({start:__assign(__assign({},r[1]),{column:r[1].column-1}),end:r[1],tokens:[JsxToken.angleBracket,i]}),t.push({start:c[0],end:c[1],tokens:[JsxToken.tagName,i]});}else {var p=s.kind===Typescript.SyntaxKind.JsxFragment?s.openingFragment:s.openingElement,g=s.kind===Typescript.SyntaxKind.JsxFragment?s.closingFragment:s.closingElement,l=calcPosition(p,e).positions,k=calcPosition(g,e).positions;if(t.push({start:l[0],end:l[0],tokens:[JsxToken.angleBracket,i]}),t.push({start:l[1],end:l[1],tokens:[JsxToken.angleBracket,i]}),t.push({start:k[0],end:__assign(__assign({},k[0]),{column:k[0].column+1}),tokens:[JsxToken.angleBracket,i]}),t.push({start:k[1],end:k[1],tokens:[JsxToken.angleBracket,i]}),s.kind===Typescript.SyntaxKind.JsxElement){var m=calcPosition(p.tagName,e).positions,x=calcPosition(g.tagName,e).positions;t.push({start:m[0],end:m[1],tokens:[JsxToken.tagName,i]}),t.push({start:x[0],end:x[1],tokens:[JsxToken.tagName,i]});}}};

var disposeJsxAttributeKey=function(o){var t=o.node,i=o.lines,s=o.classifications,e=calcPosition(t,i).positions;s.push({start:e[0],end:e[1],tokens:[JsxToken.attributeKey]});};

var disposeJsxExpression=function(s){var o=s.node,e=s.lines,n=s.classifications,i=calcPosition(o,e).positions;n.push({start:i[0],end:i[0],tokens:[JsxToken.expressionBraces]}),n.push({start:i[1],end:i[1],tokens:[JsxToken.expressionBraces]});};

var disposeJsxText=function(o){var s=o.node,i=o.lines,t=o.classifications,n=calcPosition(s,i).positions;t.push({start:n[0],end:n[1],tokens:[JsxToken.text]});};

var disposeNode=function(e){var s=e.node,i=e.index;[Typescript.SyntaxKind.JsxFragment,Typescript.SyntaxKind.JsxElement,Typescript.SyntaxKind.JsxSelfClosingElement].includes(s.kind)&&disposeJsxElementOrFragment(e),s.parent&&s.parent.kind===Typescript.SyntaxKind.JsxAttribute&&s.kind===Typescript.SyntaxKind.Identifier&&0===i&&disposeJsxAttributeKey(e),s.kind===Typescript.SyntaxKind.JsxExpression&&disposeJsxExpression(e),s.kind===Typescript.SyntaxKind.JsxText&&disposeJsxText(e);},walkAST=function(e){disposeNode(e);var s=0;Typescript.forEachChild(e.node,(function(i){return walkAST(__assign(__assign({},e),{node:i,index:s++}))}));},withDefaultConfig=function(e){var s=(e||{}).jsxTagCycle;return {jsxTagCycle:void 0===s?3:s}};var analysis=function(e,s,i){try{var t=[],n=Typescript.createSourceFile(e,s,Typescript.ScriptTarget.ES2020,!0),r=s.split("\\n").map((function(e){return e.length+1}));return walkAST({node:n,lines:r,context:{jsxTagOrder:1},classifications:t,config:withDefaultConfig(i),index:0}),t}catch(e){return (null==i?void 0:i.enableConsole)&&console.error(e),[]}};

self.addEventListener("message",(function(s){var a=s.data,e=a.code,i=a.filePath,n=a.version,o=a.config;try{var l=analysis(i,e,o);self.postMessage({classifications:l,version:n,filePath:i});}catch(s){(null==o?void 0:o.enableConsole)&&console.error(s);}}));
`, Mb = {
  worker: sb
}, Cb = function() {
  return Mb;
}, Fb = (
  /** @class */
  function() {
    function Z(l, m, c) {
      var I = this;
      this.createWorkerFromPureString = function(i, b) {
        window.URL = window.URL || window.webkitURL;
        var W;
        i = i.replace("__TYPESCRIPT_CUSTOM_URL__", b != null && b.customTypescriptUrl ? "'".concat(b == null ? void 0 : b.customTypescriptUrl, "'") : "undefined");
        try {
          W = new Blob([i], { type: "application/javascript" });
        } catch {
          window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder, W = new window.BlobBuilder(), W.append(i), W = W.getBlob();
        }
        var X = new Worker(URL.createObjectURL(W));
        return URL.revokeObjectURL(W), X;
      }, this.highlighterBuilder = function(i) {
        var b = i.editor, W = i.filePath, X = W === void 0 ? b.getModel().uri.toString() : W, d = { current: [] }, y = function(L) {
          var V = L.data, u = V.classifications, N = V.version, S = V.filePath;
          requestAnimationFrame(function() {
            if (S === X && N === b.getModel().getVersionId()) {
              var C = d.current;
              d.current = b.deltaDecorations(C, u.map(function(s) {
                return {
                  range: new I.monaco.Range(s.start.row, s.start.column, s.end.row, s.end.column + 1),
                  options: {
                    inlineClassName: s.tokens.join(" ")
                  }
                };
              }));
            }
          });
        };
        return I.worker.addEventListener("message", y), {
          highlighter: function(L) {
            requestAnimationFrame(function() {
              var V = L || b.getModel().getValue();
              I.worker.postMessage({
                code: V,
                filePath: X,
                version: b.getModel().getVersionId()
              });
            });
          },
          dispose: function() {
            I.worker.removeEventListener("message", y);
          }
        };
      }, this.monaco = m, typeof l == "string" ? this.worker = new Worker(l) : l.worker && typeof l.worker == "string" ? this.worker = this.createWorkerFromPureString(l.worker, c) : this.worker = l;
    }
    return Z;
  }()
), nb = Object.defineProperty, zb = Object.defineProperties, kb = Object.getOwnPropertyDescriptors, Bc = Object.getOwnPropertySymbols, ab = Object.prototype.hasOwnProperty, wb = Object.prototype.propertyIsEnumerable, Oc = (Z, l, m) => l in Z ? nb(Z, l, { enumerable: !0, configurable: !0, writable: !0, value: m }) : Z[l] = m, aI = (Z, l) => {
  for (var m in l || (l = {}))
    ab.call(l, m) && Oc(Z, m, l[m]);
  if (Bc)
    for (var m of Bc(l))
      wb.call(l, m) && Oc(Z, m, l[m]);
  return Z;
}, wI = (Z, l) => zb(Z, kb(l)), mm = (Z, l, m) => new Promise((c, I) => {
  var i = (X) => {
    try {
      W(m.next(X));
    } catch (d) {
      I(d);
    }
  }, b = (X) => {
    try {
      W(m.throw(X));
    } catch (d) {
      I(d);
    }
  }, W = (X) => X.done ? c(X.value) : Promise.resolve(X.value).then(i, b);
  W((m = m.apply(Z, l)).next());
}), xb = (Z, l) => {
  const m = `https://data.jsdelivr.com/v1/package/npm/${l}`;
  return zc(Z, m, { cache: "no-store" });
}, Ub = (Z, l, m) => {
  const c = `https://data.jsdelivr.com/v1/package/resolve/npm/${l}@${m}`;
  return zc(Z, c);
}, jb = (Z, l, m) => mm(void 0, null, function* () {
  const c = `https://data.jsdelivr.com/v1/package/npm/${l}@${m}/flat`, I = yield zc(Z, c);
  return I instanceof Error ? I : wI(aI({}, I), {
    moduleName: l,
    version: m
  });
}), Ec = (Z, l, m, c) => mm(void 0, null, function* () {
  const I = `https://cdn.jsdelivr.net/npm/${l}@${m}${c}`, b = yield (Z.fetcher || fetch)(I);
  return b.ok ? b.text() : new Error("OK");
});
function zc(Z, l, m) {
  return (Z.fetcher || fetch)(l, m).then((I) => I.ok ? I.json().then((i) => i) : new Error("OK"));
}
var Kb = (Z) => {
  if ([
    "assert",
    "assert/strict",
    "async_hooks",
    "buffer",
    "child_process",
    "cluster",
    "console",
    "constants",
    "crypto",
    "dgram",
    "diagnostics_channel",
    "dns",
    "dns/promises",
    "domain",
    "events",
    "fs",
    "fs/promises",
    "http",
    "http2",
    "https",
    "inspector",
    "module",
    "net",
    "os",
    "path",
    "path/posix",
    "path/win32",
    "perf_hooks",
    "process",
    "punycode",
    "querystring",
    "readline",
    "repl",
    "stream",
    "stream/promises",
    "stream/consumers",
    "stream/web",
    "string_decoder",
    "sys",
    "timers",
    "timers/promises",
    "tls",
    "trace_events",
    "tty",
    "url",
    "util",
    "util/types",
    "v8",
    "vm",
    "wasi",
    "worker_threads",
    "zlib"
  ].includes(Z.replace("node:", "")))
    return "node";
  const [m = "", c = ""] = Z.split("/");
  return m.startsWith("@") ? `${m}/${c}` : m;
}, ob = (Z) => {
  const l = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map();
  let c = 0, I = 0;
  return (b) => (c = 0, I = 0, i(b, 0).then((W) => {
    var X, d;
    I > 0 && ((d = (X = Z.delegate).finished) == null || d.call(X, m));
  }));
  function i(b, W) {
    return mm(this, null, function* () {
      var X, d, y, L, V;
      const u = Tb(Z, l, b);
      u.forEach((p) => l.set(p.module, { state: "loading" }));
      const S = (yield Promise.all(u.map((p) => Ac(Z, p.module, p.version)))).filter((p) => !("error" in p)), C = S.filter((p) => p.files.find((w) => w.name.endsWith(".d.ts"))), s = C.map((p) => Pc(p, `/node_modules/${p.moduleName}`)), R = S.filter((p) => !C.includes(p)), K = (yield Promise.all(R.map((p) => Ac(Z, `@types/${qm(p.moduleName)}`, "latest")))).filter((p) => !("error" in p)), t = K.map((p) => Pc(p, `/node_modules/@types/${qm(p.moduleName).replace("types__", "")}`)), H = s.concat(t).reduce((p, w) => p.concat(w), []);
      c += H.length, H.length && W === 0 && ((d = (X = Z.delegate).started) == null || d.call(X));
      for (const p of S) {
        let w = `/node_modules/${p.moduleName}`;
        K.includes(p) && (w = `/node_modules/@types/${qm(p.moduleName).replace("types__", "")}`);
        const F = w + "/package.json", j = yield Ec(Z, p.moduleName, p.version, "/package.json");
        typeof j == "string" ? (m.set(F, j), (L = (y = Z.delegate).receivedFile) == null || L.call(y, j, F)) : (V = Z.logger) == null || V.error(`Could not download package.json for ${p.moduleName}`);
      }
      yield Promise.all(H.map((p) => mm(this, null, function* () {
        var w, F, j;
        const U = yield Ec(Z, p.moduleName, p.moduleVersion, p.path);
        I++, U instanceof Error ? (w = Z.logger) == null || w.error(`Had an issue getting ${p.path} for ${p.moduleName}`) : (m.set(p.vfsPath, U), (j = (F = Z.delegate).receivedFile) == null || j.call(F, U, p.vfsPath), Z.delegate.progress && I % 5 === 0 && Z.delegate.progress(I, c), yield i(U, W + 1));
      })));
    });
  }
};
function Pc(Z, l) {
  const m = [];
  for (const c of Z.files)
    c.name.endsWith(".d.ts") && m.push({
      moduleName: Z.moduleName,
      moduleVersion: Z.version,
      vfsPath: `${l}${c.name}`,
      path: c.name
    });
  return m;
}
var Hb = (Z, l) => {
  const m = Z.preProcessFile(l), c = Z.libMap || /* @__PURE__ */ new Map();
  return m.referencedFiles.concat(m.importedFiles).concat(m.libReferenceDirectives).filter((i) => !i.fileName.endsWith(".d.ts")).filter((i) => !c.has(i.fileName)).map((i) => {
    let b;
    if (!i.fileName.startsWith(".")) {
      b = "latest";
      const W = l.slice(i.end).split(`
`)[0];
      W.includes("// types:") && (b = W.split("// types: ")[1].trim());
    }
    return {
      module: i.fileName,
      version: b
    };
  });
};
function Tb(Z, l, m) {
  return Hb(Z.typescript, m).map((i) => wI(aI({}, i), {
    module: Kb(i.module)
  })).filter((i) => !i.module.startsWith(".")).filter((i) => !l.has(i.module));
}
var Ac = (Z, l, m) => mm(void 0, null, function* () {
  let c = m || "latest";
  if (c.split(".").length < 2) {
    const i = yield Ub(Z, l, c);
    if (i instanceof Error)
      return {
        error: i,
        userFacingMessage: `Could not go from a tag to version on npm for ${l} - possible typo?`
      };
    const b = i.version;
    if (!b) {
      const W = yield xb(Z, l);
      if (W instanceof Error)
        return {
          error: i,
          userFacingMessage: `Could not get versions on npm for ${l} - possible typo?`
        };
      const X = Object.entries(W.tags).join(", ");
      return {
        error: new Error("Could not find tag for module"),
        userFacingMessage: `Could not find a tag for ${l} called ${m}. Did find ${X}`
      };
    }
    c = b;
  }
  const I = yield jb(Z, l, c);
  return I instanceof Error ? {
    error: I,
    userFacingMessage: `Could not get the files for ${l}@${c}. Is it possibly a typo?`
  } : I;
});
function qm(Z) {
  return Z.indexOf("@") === 0 && Z.indexOf("/") !== -1 && (Z = Z.substr(1).replace("/", "__")), Z;
}
const Wl = gb();
function gb() {
  return {
    receivedFile: /* @__PURE__ */ new Set(),
    progress: /* @__PURE__ */ new Set(),
    errorMessage: /* @__PURE__ */ new Set(),
    finished: /* @__PURE__ */ new Set(),
    started: /* @__PURE__ */ new Set()
  };
}
async function vb() {
  const Z = await import("https://esm.sh/typescript@5.2.2"), l = ob({
    projectName: "monaco-ts",
    typescript: Z,
    logger: console,
    fetcher(i, b) {
      let W;
      try {
        W = fetch(i, b);
      } catch (X) {
        console.error("Error fetching data:", X);
      }
      return W;
    },
    delegate: {
      receivedFile: (i, b) => {
        Wl.receivedFile.forEach((W) => W(i, b));
      },
      progress: (i, b) => {
        Wl.progress.forEach((W) => W(i, b));
      },
      started: () => {
        Wl.started.forEach((i) => i());
      },
      finished: (i) => {
        Wl.finished.forEach((b) => b(i));
      }
    }
  });
  return {
    acquireType: (i) => l(i),
    addListener: (i, b) => {
      Wl[i].add(b);
    },
    removeListener: (i, b) => {
      Wl[i].delete(b);
    },
    dispose: () => {
      for (const i in Wl)
        Wl[i].clear();
    }
  };
}
const tb = () => ({
  autoLoadExtraLib: async (c, I, i) => {
    const b = await vb();
    c.onDidChangeModelContent(() => {
      b.acquireType(c.getValue());
    });
    const W = (X, d) => {
      I.languages.typescript.typescriptDefaults.addExtraLib(X, `file://${d}`);
    };
    return b.addListener("receivedFile", W), b.acquireType(i), b.dispose;
  },
  doOpenEditor: (c, I) => {
    const i = I.options ? I.options.selection : null;
    if (i)
      if (typeof i.endLineNumber == "number" && typeof i.endColumn == "number")
        c.setSelection(i), c.revealRangeInCenter(
          i,
          1
          /* Immediate */
        );
      else {
        const b = {
          lineNumber: i.startLineNumber,
          column: i.startColumn
        };
        c.setPosition(b), c.revealPositionInCenter(
          b,
          1
          /* Immediate */
        );
      }
    console.log("触发鼠标+command点击", I.resource, i);
  },
  loadJsxSyntaxHighlight: (c, I) => {
    const i = new Fb(Cb(), I), { highlighter: b, dispose: W } = i.highlighterBuilder({
      editor: c
    });
    return c.onDidChangeModelContent(() => {
      b();
    }), b(), { highlighter: b, dispose: W };
  }
}), xI = `{
  "imports": {
    "react": "https://esm.sh/react@18.2.0",
    "react-dom/client": "https://esm.sh/react-dom@18.2.0"
  }
}
`, Db = `:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  line-height: 1.5;
  color: rgb(255 255 255 / 87%);
  text-rendering: optimizelegibility;
  text-size-adjust: 100%;
  background-color: #242424;
  color-scheme: light dark;
  font-synthesis: none;
}

#root {
  max-width: 1280px;
  padding: 2rem;
  margin: 0 auto;
  text-align: center;
}

body {
  display: flex;
  min-width: 320px;
  min-height: 100vh;
  margin: 0;
  place-items: center;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  padding: 0.6em 1.2em;
  font-family: inherit;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  background-color: #1a1a1a;
  border: 1px solid transparent;
  border-radius: 8px;
  transition: border-color 0.25s;
}

button:hover {
  border-color: #646cff;
}

button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #fff;
  }

  button {
    background-color: #f9f9f9;
  }
}
`, Qb = `import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
    </>
  )
}

export default App
`, UI = `import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
`;
var pZ = Uint8Array, UZ = Uint16Array, kc = Int32Array, Km = new pZ([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]), om = new pZ([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]), Yc = new pZ([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), jI = function(Z, l) {
  for (var m = new UZ(31), c = 0; c < 31; ++c)
    m[c] = l += 1 << Z[c - 1];
  for (var I = new kc(m[30]), c = 1; c < 30; ++c)
    for (var i = m[c]; i < m[c + 1]; ++i)
      I[i] = i - m[c] << 5 | c;
  return { b: m, r: I };
}, KI = jI(Km, 2), oI = KI.b, Vc = KI.r;
oI[28] = 258, Vc[258] = 28;
var HI = jI(om, 0), eb = HI.b, fc = HI.r, uc = new UZ(32768);
for (var GZ = 0; GZ < 32768; ++GZ) {
  var Xl = (GZ & 43690) >> 1 | (GZ & 21845) << 1;
  Xl = (Xl & 52428) >> 2 | (Xl & 13107) << 2, Xl = (Xl & 61680) >> 4 | (Xl & 3855) << 4, uc[GZ] = ((Xl & 65280) >> 8 | (Xl & 255) << 8) >> 1;
}
var BZ = function(Z, l, m) {
  for (var c = Z.length, I = 0, i = new UZ(l); I < c; ++I)
    Z[I] && ++i[Z[I] - 1];
  var b = new UZ(l);
  for (I = 1; I < l; ++I)
    b[I] = b[I - 1] + i[I - 1] << 1;
  var W;
  if (m) {
    W = new UZ(1 << l);
    var X = 15 - l;
    for (I = 0; I < c; ++I)
      if (Z[I])
        for (var d = I << 4 | Z[I], y = l - Z[I], L = b[Z[I] - 1]++ << y, V = L | (1 << y) - 1; L <= V; ++L)
          W[uc[L] >> X] = d;
  } else
    for (W = new UZ(c), I = 0; I < c; ++I)
      Z[I] && (W[I] = uc[b[Z[I] - 1]++] >> 15 - Z[I]);
  return W;
}, Vl = new pZ(288);
for (var GZ = 0; GZ < 144; ++GZ)
  Vl[GZ] = 8;
for (var GZ = 144; GZ < 256; ++GZ)
  Vl[GZ] = 9;
for (var GZ = 256; GZ < 280; ++GZ)
  Vl[GZ] = 7;
for (var GZ = 280; GZ < 288; ++GZ)
  Vl[GZ] = 8;
var cm = new pZ(32);
for (var GZ = 0; GZ < 32; ++GZ)
  cm[GZ] = 5;
var Bb = /* @__PURE__ */ BZ(Vl, 9, 0), Ob = /* @__PURE__ */ BZ(Vl, 9, 1), Eb = /* @__PURE__ */ BZ(cm, 5, 0), Pb = /* @__PURE__ */ BZ(cm, 5, 1), _m = function(Z) {
  for (var l = Z[0], m = 1; m < Z.length; ++m)
    Z[m] > l && (l = Z[m]);
  return l;
}, tZ = function(Z, l, m) {
  var c = l / 8 | 0;
  return (Z[c] | Z[c + 1] << 8) >> (l & 7) & m;
}, $m = function(Z, l) {
  var m = l / 8 | 0;
  return (Z[m] | Z[m + 1] << 8 | Z[m + 2] << 16) >> (l & 7);
}, ac = function(Z) {
  return (Z + 7) / 8 | 0;
}, Hm = function(Z, l, m) {
  return (l == null || l < 0) && (l = 0), (m == null || m > Z.length) && (m = Z.length), new pZ(Z.subarray(l, m));
}, Ab = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
], HZ = function(Z, l, m) {
  var c = new Error(l || Ab[Z]);
  if (c.code = Z, Error.captureStackTrace && Error.captureStackTrace(c, HZ), !m)
    throw c;
  return c;
}, fb = function(Z, l, m, c) {
  var I = Z.length, i = c ? c.length : 0;
  if (!I || l.f && !l.l)
    return m || new pZ(0);
  var b = !m, W = b || l.i != 2, X = l.i;
  b && (m = new pZ(I * 3));
  var d = function(EZ) {
    var kZ = m.length;
    if (EZ > kZ) {
      var jZ = new pZ(Math.max(kZ * 2, EZ));
      jZ.set(m), m = jZ;
    }
  }, y = l.f || 0, L = l.p || 0, V = l.b || 0, u = l.l, N = l.d, S = l.m, C = l.n, s = I * 8;
  do {
    if (!u) {
      y = tZ(Z, L, 1);
      var R = tZ(Z, L + 1, 3);
      if (L += 3, R)
        if (R == 1)
          u = Ob, N = Pb, S = 9, C = 5;
        else if (R == 2) {
          var H = tZ(Z, L, 31) + 257, p = tZ(Z, L + 10, 15) + 4, w = H + tZ(Z, L + 5, 31) + 1;
          L += 14;
          for (var F = new pZ(w), j = new pZ(19), U = 0; U < p; ++U)
            j[Yc[U]] = tZ(Z, L + U * 3, 7);
          L += p * 3;
          for (var g = _m(j), E = (1 << g) - 1, k = BZ(j, g, 1), U = 0; U < w; ) {
            var a = k[tZ(Z, L, E)];
            L += a & 15;
            var h = a >> 4;
            if (h < 16)
              F[U++] = h;
            else {
              var o = 0, D = 0;
              for (h == 16 ? (D = 3 + tZ(Z, L, 3), L += 2, o = F[U - 1]) : h == 17 ? (D = 3 + tZ(Z, L, 7), L += 3) : h == 18 && (D = 11 + tZ(Z, L, 127), L += 7); D--; )
                F[U++] = o;
            }
          }
          var mZ = F.subarray(0, H), $ = F.subarray(H);
          S = _m(mZ), C = _m($), u = BZ(mZ, S, 1), N = BZ($, C, 1);
        } else
          HZ(1);
      else {
        var h = ac(L) + 4, K = Z[h - 4] | Z[h - 3] << 8, t = h + K;
        if (t > I) {
          X && HZ(0);
          break;
        }
        W && d(V + K), m.set(Z.subarray(h, t), V), l.b = V += K, l.p = L = t * 8, l.f = y;
        continue;
      }
      if (L > s) {
        X && HZ(0);
        break;
      }
    }
    W && d(V + 131072);
    for (var iZ = (1 << S) - 1, v = (1 << C) - 1, e = L; ; e = L) {
      var o = u[$m(Z, L) & iZ], P = o >> 4;
      if (L += o & 15, L > s) {
        X && HZ(0);
        break;
      }
      if (o || HZ(2), P < 256)
        m[V++] = P;
      else if (P == 256) {
        e = L, u = null;
        break;
      } else {
        var XZ = P - 254;
        if (P > 264) {
          var U = P - 257, q = Km[U];
          XZ = tZ(Z, L, (1 << q) - 1) + oI[U], L += q;
        }
        var JZ = N[$m(Z, L) & v], O = JZ >> 4;
        JZ || HZ(3), L += JZ & 15;
        var $ = eb[O];
        if (O > 3) {
          var q = om[O];
          $ += $m(Z, L) & (1 << q) - 1, L += q;
        }
        if (L > s) {
          X && HZ(0);
          break;
        }
        W && d(V + 131072);
        var B = V + XZ;
        if (V < $) {
          var cZ = i - $, IZ = Math.min($, B);
          for (cZ + V < 0 && HZ(3); V < IZ; ++V)
            m[V] = c[cZ + V];
        }
        for (; V < B; ++V)
          m[V] = m[V - $];
      }
    }
    l.l = u, l.p = e, l.b = V, l.f = y, u && (y = 1, l.m = S, l.d = N, l.n = C);
  } while (!y);
  return V != m.length && b ? Hm(m, 0, V) : m.subarray(0, V);
}, _Z = function(Z, l, m) {
  m <<= l & 7;
  var c = l / 8 | 0;
  Z[c] |= m, Z[c + 1] |= m >> 8;
}, Al = function(Z, l, m) {
  m <<= l & 7;
  var c = l / 8 | 0;
  Z[c] |= m, Z[c + 1] |= m >> 8, Z[c + 2] |= m >> 16;
}, Zc = function(Z, l) {
  for (var m = [], c = 0; c < Z.length; ++c)
    Z[c] && m.push({ s: c, f: Z[c] });
  var I = m.length, i = m.slice();
  if (!I)
    return { t: gI, l: 0 };
  if (I == 1) {
    var b = new pZ(m[0].s + 1);
    return b[m[0].s] = 1, { t: b, l: 1 };
  }
  m.sort(function(t, H) {
    return t.f - H.f;
  }), m.push({ s: -1, f: 25001 });
  var W = m[0], X = m[1], d = 0, y = 1, L = 2;
  for (m[0] = { s: -1, f: W.f + X.f, l: W, r: X }; y != I - 1; )
    W = m[m[d].f < m[L].f ? d++ : L++], X = m[d != y && m[d].f < m[L].f ? d++ : L++], m[y++] = { s: -1, f: W.f + X.f, l: W, r: X };
  for (var V = i[0].s, c = 1; c < I; ++c)
    i[c].s > V && (V = i[c].s);
  var u = new UZ(V + 1), N = Jc(m[y - 1], u, 0);
  if (N > l) {
    var c = 0, S = 0, C = N - l, s = 1 << C;
    for (i.sort(function(H, p) {
      return u[p.s] - u[H.s] || H.f - p.f;
    }); c < I; ++c) {
      var R = i[c].s;
      if (u[R] > l)
        S += s - (1 << N - u[R]), u[R] = l;
      else
        break;
    }
    for (S >>= C; S > 0; ) {
      var h = i[c].s;
      u[h] < l ? S -= 1 << l - u[h]++ - 1 : ++c;
    }
    for (; c >= 0 && S; --c) {
      var K = i[c].s;
      u[K] == l && (--u[K], ++S);
    }
    N = l;
  }
  return { t: new pZ(u), l: N };
}, Jc = function(Z, l, m) {
  return Z.s == -1 ? Math.max(Jc(Z.l, l, m + 1), Jc(Z.r, l, m + 1)) : l[Z.s] = m;
}, rc = function(Z) {
  for (var l = Z.length; l && !Z[--l]; )
    ;
  for (var m = new UZ(++l), c = 0, I = Z[0], i = 1, b = function(X) {
    m[c++] = X;
  }, W = 1; W <= l; ++W)
    if (Z[W] == I && W != l)
      ++i;
    else {
      if (!I && i > 2) {
        for (; i > 138; i -= 138)
          b(32754);
        i > 2 && (b(i > 10 ? i - 11 << 5 | 28690 : i - 3 << 5 | 12305), i = 0);
      } else if (i > 3) {
        for (b(I), --i; i > 6; i -= 6)
          b(8304);
        i > 2 && (b(i - 3 << 5 | 8208), i = 0);
      }
      for (; i--; )
        b(I);
      i = 1, I = Z[W];
    }
  return { c: m.subarray(0, c), n: l };
}, fl = function(Z, l) {
  for (var m = 0, c = 0; c < l.length; ++c)
    m += Z[c] * l[c];
  return m;
}, TI = function(Z, l, m) {
  var c = m.length, I = ac(l + 2);
  Z[I] = c & 255, Z[I + 1] = c >> 8, Z[I + 2] = Z[I] ^ 255, Z[I + 3] = Z[I + 1] ^ 255;
  for (var i = 0; i < c; ++i)
    Z[I + i + 4] = m[i];
  return (I + 4 + c) * 8;
}, qc = function(Z, l, m, c, I, i, b, W, X, d, y) {
  _Z(l, y++, m), ++I[256];
  for (var L = Zc(I, 15), V = L.t, u = L.l, N = Zc(i, 15), S = N.t, C = N.l, s = rc(V), R = s.c, h = s.n, K = rc(S), t = K.c, H = K.n, p = new UZ(19), w = 0; w < R.length; ++w)
    ++p[R[w] & 31];
  for (var w = 0; w < t.length; ++w)
    ++p[t[w] & 31];
  for (var F = Zc(p, 7), j = F.t, U = F.l, g = 19; g > 4 && !j[Yc[g - 1]]; --g)
    ;
  var E = d + 5 << 3, k = fl(I, Vl) + fl(i, cm) + b, a = fl(I, V) + fl(i, S) + b + 14 + 3 * g + fl(p, j) + 2 * p[16] + 3 * p[17] + 7 * p[18];
  if (X >= 0 && E <= k && E <= a)
    return TI(l, y, Z.subarray(X, X + d));
  var o, D, mZ, $;
  if (_Z(l, y, 1 + (a < k)), y += 2, a < k) {
    o = BZ(V, u, 0), D = V, mZ = BZ(S, C, 0), $ = S;
    var iZ = BZ(j, U, 0);
    _Z(l, y, h - 257), _Z(l, y + 5, H - 1), _Z(l, y + 10, g - 4), y += 14;
    for (var w = 0; w < g; ++w)
      _Z(l, y + 3 * w, j[Yc[w]]);
    y += 3 * g;
    for (var v = [R, t], e = 0; e < 2; ++e)
      for (var P = v[e], w = 0; w < P.length; ++w) {
        var XZ = P[w] & 31;
        _Z(l, y, iZ[XZ]), y += j[XZ], XZ > 15 && (_Z(l, y, P[w] >> 5 & 127), y += P[w] >> 12);
      }
  } else
    o = Bb, D = Vl, mZ = Eb, $ = cm;
  for (var w = 0; w < W; ++w) {
    var q = c[w];
    if (q > 255) {
      var XZ = q >> 18 & 31;
      Al(l, y, o[XZ + 257]), y += D[XZ + 257], XZ > 7 && (_Z(l, y, q >> 23 & 31), y += Km[XZ]);
      var JZ = q & 31;
      Al(l, y, mZ[JZ]), y += $[JZ], JZ > 3 && (Al(l, y, q >> 5 & 8191), y += om[JZ]);
    } else
      Al(l, y, o[q]), y += D[q];
  }
  return Al(l, y, o[256]), y + D[256];
}, rb = /* @__PURE__ */ new kc([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), gI = /* @__PURE__ */ new pZ(0), qb = function(Z, l, m, c, I, i) {
  var b = i.z || Z.length, W = new pZ(c + b + 5 * (1 + Math.ceil(b / 7e3)) + I), X = W.subarray(c, W.length - I), d = i.l, y = (i.r || 0) & 7;
  if (l) {
    y && (X[0] = i.r >> 3);
    for (var L = rb[l - 1], V = L >> 13, u = L & 8191, N = (1 << m) - 1, S = i.p || new UZ(32768), C = i.h || new UZ(N + 1), s = Math.ceil(m / 3), R = 2 * s, h = function(ll) {
      return (Z[ll] ^ Z[ll + 1] << s ^ Z[ll + 2] << R) & N;
    }, K = new kc(25e3), t = new UZ(288), H = new UZ(32), p = 0, w = 0, F = i.i || 0, j = 0, U = i.w || 0, g = 0; F + 2 < b; ++F) {
      var E = h(F), k = F & 32767, a = C[E];
      if (S[k] = a, C[E] = k, U <= F) {
        var o = b - F;
        if ((p > 7e3 || j > 24576) && (o > 423 || !d)) {
          y = qc(Z, X, 0, K, t, H, w, j, g, F - g, y), j = p = w = 0, g = F;
          for (var D = 0; D < 286; ++D)
            t[D] = 0;
          for (var D = 0; D < 30; ++D)
            H[D] = 0;
        }
        var mZ = 2, $ = 0, iZ = u, v = k - a & 32767;
        if (o > 2 && E == h(F - v))
          for (var e = Math.min(V, o) - 1, P = Math.min(32767, F), XZ = Math.min(258, o); v <= P && --iZ && k != a; ) {
            if (Z[F + mZ] == Z[F + mZ - v]) {
              for (var q = 0; q < XZ && Z[F + q] == Z[F + q - v]; ++q)
                ;
              if (q > mZ) {
                if (mZ = q, $ = v, q > e)
                  break;
                for (var JZ = Math.min(v, q - 2), O = 0, D = 0; D < JZ; ++D) {
                  var B = F - v + D & 32767, cZ = S[B], IZ = B - cZ & 32767;
                  IZ > O && (O = IZ, a = B);
                }
              }
            }
            k = a, a = S[k], v += k - a & 32767;
          }
        if ($) {
          K[j++] = 268435456 | Vc[mZ] << 18 | fc[$];
          var EZ = Vc[mZ] & 31, kZ = fc[$] & 31;
          w += Km[EZ] + om[kZ], ++t[257 + EZ], ++H[kZ], U = F + mZ, ++p;
        } else
          K[j++] = Z[F], ++t[Z[F]];
      }
    }
    for (F = Math.max(F, U); F < b; ++F)
      K[j++] = Z[F], ++t[Z[F]];
    y = qc(Z, X, d, K, t, H, w, j, g, F - g, y), d || (i.r = y & 7 | X[y / 8 | 0] << 3, y -= 7, i.h = C, i.p = S, i.i = F, i.w = U);
  } else {
    for (var F = i.w || 0; F < b + d; F += 65535) {
      var jZ = F + 65535;
      jZ >= b && (X[y / 8 | 0] = d, jZ = b), y = TI(X, y + 1, Z.subarray(F, jZ));
    }
    i.i = b;
  }
  return Hm(W, 0, c + ac(y) + I);
}, vI = function() {
  var Z = 1, l = 0;
  return {
    p: function(m) {
      for (var c = Z, I = l, i = m.length | 0, b = 0; b != i; ) {
        for (var W = Math.min(b + 2655, i); b < W; ++b)
          I += c += m[b];
        c = (c & 65535) + 15 * (c >> 16), I = (I & 65535) + 15 * (I >> 16);
      }
      Z = c, l = I;
    },
    d: function() {
      return Z %= 65521, l %= 65521, (Z & 255) << 24 | (Z & 65280) << 8 | (l & 255) << 8 | l >> 8;
    }
  };
}, _b = function(Z, l, m, c, I) {
  if (!I && (I = { l: 1 }, l.dictionary)) {
    var i = l.dictionary.subarray(-32768), b = new pZ(i.length + Z.length);
    b.set(i), b.set(Z, i.length), Z = b, I.w = i.length;
  }
  return qb(Z, l.level == null ? 6 : l.level, l.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(Z.length))) * 1.5) : 12 + l.mem, m, c, I);
}, tI = function(Z, l, m) {
  for (; m; ++l)
    Z[l] = m, m >>>= 8;
}, $b = function(Z, l) {
  var m = l.level, c = m == 0 ? 0 : m < 6 ? 1 : m == 9 ? 3 : 2;
  if (Z[0] = 120, Z[1] = c << 6 | (l.dictionary && 32), Z[1] |= 31 - (Z[0] << 8 | Z[1]) % 31, l.dictionary) {
    var I = vI();
    I.p(l.dictionary), tI(Z, 2, I.d());
  }
}, ZW = function(Z, l) {
  return ((Z[0] & 15) != 8 || Z[0] >> 4 > 7 || (Z[0] << 8 | Z[1]) % 31) && HZ(6, "invalid zlib data"), (Z[1] >> 5 & 1) == +!l && HZ(6, "invalid zlib data: " + (Z[1] & 32 ? "need" : "unexpected") + " dictionary"), (Z[1] >> 3 & 4) + 2;
};
function lW(Z, l) {
  l || (l = {});
  var m = vI();
  m.p(Z);
  var c = _b(Z, l, l.dictionary ? 6 : 2, 4);
  return $b(c, l), tI(c, c.length - 4, m.d()), c;
}
function mW(Z, l) {
  return fb(Z.subarray(ZW(Z, l && l.dictionary), -4), { i: 2 }, l && l.out, l && l.dictionary);
}
var _c = typeof TextEncoder < "u" && /* @__PURE__ */ new TextEncoder(), hc = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), cW = 0;
try {
  hc.decode(gI, { stream: !0 }), cW = 1;
} catch {
}
var IW = function(Z) {
  for (var l = "", m = 0; ; ) {
    var c = Z[m++], I = (c > 127) + (c > 223) + (c > 239);
    if (m + I > Z.length)
      return { s: l, r: Hm(Z, m - 1) };
    I ? I == 3 ? (c = ((c & 15) << 18 | (Z[m++] & 63) << 12 | (Z[m++] & 63) << 6 | Z[m++] & 63) - 65536, l += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023)) : I & 1 ? l += String.fromCharCode((c & 31) << 6 | Z[m++] & 63) : l += String.fromCharCode((c & 15) << 12 | (Z[m++] & 63) << 6 | Z[m++] & 63) : l += String.fromCharCode(c);
  }
};
function DI(Z, l) {
  if (l) {
    for (var m = new pZ(Z.length), c = 0; c < Z.length; ++c)
      m[c] = Z.charCodeAt(c);
    return m;
  }
  if (_c)
    return _c.encode(Z);
  for (var I = Z.length, i = new pZ(Z.length + (Z.length >> 1)), b = 0, W = function(y) {
    i[b++] = y;
  }, c = 0; c < I; ++c) {
    if (b + 5 > i.length) {
      var X = new pZ(b + 8 + (I - c << 1));
      X.set(i), i = X;
    }
    var d = Z.charCodeAt(c);
    d < 128 || l ? W(d) : d < 2048 ? (W(192 | d >> 6), W(128 | d & 63)) : d > 55295 && d < 57344 ? (d = 65536 + (d & 1047552) | Z.charCodeAt(++c) & 1023, W(240 | d >> 18), W(128 | d >> 12 & 63), W(128 | d >> 6 & 63), W(128 | d & 63)) : (W(224 | d >> 12), W(128 | d >> 6 & 63), W(128 | d & 63));
  }
  return Hm(i, 0, b);
}
function QI(Z, l) {
  if (l) {
    for (var m = "", c = 0; c < Z.length; c += 16384)
      m += String.fromCharCode.apply(null, Z.subarray(c, c + 16384));
    return m;
  } else {
    if (hc)
      return hc.decode(Z);
    var I = IW(Z), i = I.s, m = I.r;
    return m.length && HZ(8), i;
  }
}
function eI(Z, l = 100) {
  let m;
  return (...c) => {
    m && clearTimeout(m), m = setTimeout(() => {
      Z(...c);
    }, l);
  };
}
function iW(Z) {
  const l = DI(Z), m = lW(l, { level: 9 }), c = QI(m, !0);
  return btoa(c);
}
function bW(Z) {
  const l = atob(Z);
  if (l.startsWith("xÚ")) {
    const m = DI(l, !0), c = mW(m);
    return QI(c);
  }
  return decodeURIComponent(escape(l));
}
const BI = "react-playground-prefer-dark", WW = (Z) => {
  var l;
  localStorage.setItem(BI, String(Z === "dark")), (l = document.querySelectorAll('div[data-id="react-playground"]')) == null || l.forEach((m) => m.setAttribute("class", Z));
}, XW = () => JSON.parse(localStorage.getItem(BI) || "false") ? "dark" : "light", $c = (Z) => {
  const l = {};
  return Object.keys(Z).forEach((m) => {
    const c = Z[m];
    typeof c == "string" ? l[m] = {
      name: m,
      language: OZ(m),
      value: c
    } : l[m] = {
      name: m,
      language: OZ(m),
      value: c.code,
      hidden: c.hidden,
      active: c.active
    };
  }), l;
}, dW = (Z) => Z ? Object.keys(Z).find((l) => {
  const m = Z[l];
  return typeof m != "string" && m.active ? l : null;
}) : null, yW = (Z, l) => Z ? l ? {
  ...ZI,
  ...$c(Z),
  [CZ]: {
    name: CZ,
    language: "json",
    value: JSON.stringify(l, null, 2)
  }
} : {
  ...ZI,
  ...$c(Z)
} : null, GW = () => {
  let Z;
  try {
    if (typeof window < "u") {
      const l = window.location.hash;
      l && (Z = JSON.parse(bW(l == null ? void 0 : l.split("#")[1])));
    }
  } catch (l) {
    console.error(l);
  }
  return Z;
}, OZ = (Z) => {
  const l = Z.split(".").pop() || "";
  return ["js", "jsx"].includes(l) ? "javascript" : ["ts", "tsx"].includes(l) ? "typescript" : ["json"].includes(l) ? "json" : ["css"].includes(l) ? "css" : "javascript";
}, Ll = "App.tsx", CZ = "import-map.json", Yl = "main.tsx", LW = GW() || {
  [Yl]: {
    name: Yl,
    language: OZ(Yl),
    value: UI
  },
  [Ll]: {
    name: Ll,
    language: OZ(Ll),
    value: Qb
  },
  "App.css": {
    name: "App.css",
    language: "css",
    value: Db
  },
  [CZ]: {
    name: CZ,
    language: OZ(CZ),
    value: xI
  }
}, ZI = {
  [Yl]: {
    name: Yl,
    language: OZ(Yl),
    value: UI
  },
  [CZ]: {
    name: CZ,
    language: OZ(CZ),
    value: xI
  }
}, Nc = {
  selectedFileName: Ll
}, Ml = Gi(
  Nc
), YW = (Z) => {
  const { children: l, saveOnUrl: m = !0 } = Z, [c, I] = VZ({}), [i, b] = VZ(Nc.theme), [W, X] = VZ(Nc.selectedFileName), [d, y] = VZ(""), L = (S) => {
    c[S] = {
      name: S,
      language: OZ(S),
      value: ""
    }, I({ ...c });
  }, V = (S) => {
    delete c[S], I({ ...c });
  }, u = (S, C) => {
    if (!c[S] || C === void 0 || C === null)
      return;
    const { [S]: s, ...R } = c, h = {
      [C]: {
        ...s,
        language: OZ(C),
        name: C
      }
    };
    I({
      ...R,
      ...h
    });
  }, N = (S) => {
    WW(S), b(S);
  };
  return lZ(() => {
    const S = iW(JSON.stringify(c));
    m && (window.location.hash = S), y(S);
  }, [c]), /* @__PURE__ */ z.jsx(
    Ml.Provider,
    {
      value: {
        theme: i,
        filesHash: d,
        files: c,
        selectedFileName: W,
        setTheme: b,
        changeTheme: N,
        setSelectedFileName: X,
        setFiles: I,
        addFile: L,
        removeFile: V,
        updateFileName: u
      },
      children: l
    }
  );
};
nc.config({
  paths: {
    vs: "https://cdn.staticfile.org/monaco-editor/0.43.0/min/vs"
  }
});
const VW = (Z) => {
  const { file: l, onChange: m, options: c } = Z, { theme: I, files: i, setSelectedFileName: b } = Tl(Ml), W = f(null), { doOpenEditor: X, loadJsxSyntaxHighlight: d, autoLoadExtraLib: y } = tb(), L = f({ highlighter: null, dispose: null }), V = (u, N) => {
    W.current = u, u.addCommand(N.KeyMod.CtrlCmd | N.KeyCode.KeyS, () => {
      console.log(11), u.getAction("editor.action.formatDocument").run();
    }), N.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: N.languages.typescript.JsxEmit.Preserve,
      esModuleInterop: !0
    }), Object.entries(i).forEach(([S]) => {
      var C, s;
      (C = N == null ? void 0 : N.editor) != null && C.getModel(N.Uri.parse(`file:///${S}`)) || (s = N == null ? void 0 : N.editor) == null || s.createModel(
        i[S].value,
        OZ(S),
        N.Uri.parse(`file:///${S}`)
      );
    }), u._codeEditorService.doOpenEditor = function(S, C) {
      const s = C.resource.path;
      s.startsWith("/node_modules/") || (b(s.replace("/", "")), X(S, C));
    }, y(u, N, l.value), L.current = d(u, N);
  };
  return lZ(() => {
    var u, N, S;
    (u = W.current) == null || u.focus(), (S = (N = L == null ? void 0 : L.current) == null ? void 0 : N.highlighter) == null || S.call(N);
  }, [l.name]), lZ(() => {
  }, []), /* @__PURE__ */ z.jsx(
    zI,
    {
      className: "react-playground-editor",
      height: "100%",
      theme: `vs-${I}`,
      path: l.name,
      language: l.language,
      value: l.value,
      onChange: m,
      onMount: V,
      options: {
        ...kI,
        ...c,
        theme: void 0
      }
    }
  );
};
var OI = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(Z) {
  (function() {
    var l = {}.hasOwnProperty;
    function m() {
      for (var c = [], I = 0; I < arguments.length; I++) {
        var i = arguments[I];
        if (i) {
          var b = typeof i;
          if (b === "string" || b === "number")
            c.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var W = m.apply(null, i);
              W && c.push(W);
            }
          } else if (b === "object") {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
              c.push(i.toString());
              continue;
            }
            for (var X in i)
              l.call(i, X) && i[X] && c.push(X);
          }
        }
      }
      return c.join(" ");
    }
    Z.exports ? (m.default = m, Z.exports = m) : window.classNames = m;
  })();
})(OI);
var uW = OI.exports;
const Hl = /* @__PURE__ */ Vi(uW), JW = "_dialog_eaiwm_1", hW = "_content_eaiwm_37", nm = {
  dialog: JW,
  "dialog-footer": "_dialog-footer_eaiwm_13",
  "dialog-btn": "_dialog-btn_eaiwm_29",
  content: hW
}, NW = (Z) => {
  const { message: l, onConfirm: m, children: c } = Z, I = f(null), i = (b) => {
    var W;
    b.stopPropagation(), (W = I.current) == null || W.showModal();
  };
  return /* @__PURE__ */ z.jsxs("span", { onClick: (b) => b.stopPropagation(), children: [
    /* @__PURE__ */ z.jsx("span", { onClick: i, children: c }),
    /* @__PURE__ */ z.jsxs("dialog", { ref: I, className: nm.dialog, children: [
      /* @__PURE__ */ z.jsxs("span", { className: nm.content, children: [
        /* @__PURE__ */ z.jsxs(
          "svg",
          {
            viewBox: "64 64 896 896",
            focusable: "false",
            "data-icon": "exclamation-circle",
            width: "1em",
            height: "1em",
            fill: "currentColor",
            "aria-hidden": "true",
            children: [
              /* @__PURE__ */ z.jsx("path", { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" }),
              /* @__PURE__ */ z.jsx("path", { d: "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" })
            ]
          }
        ),
        l
      ] }),
      /* @__PURE__ */ z.jsx("form", { method: "dialog", children: /* @__PURE__ */ z.jsxs("div", { className: nm["dialog-footer"], children: [
        /* @__PURE__ */ z.jsx("button", { onClick: () => {
          var b;
          return (b = I.current) == null ? void 0 : b.close();
        }, children: "取 消" }),
        /* @__PURE__ */ z.jsx("button", { className: nm["dialog-btn"], onClick: m, children: "确 定" })
      ] }) })
    ] })
  ] });
}, RW = "_tabs_16nwc_1", pW = "_actived_16nwc_32", SW = "_add_16nwc_51", Zl = {
  tabs: RW,
  "tab-item": "_tab-item_16nwc_22",
  actived: pW,
  "import-map-wrapper": "_import-map-wrapper_16nwc_39",
  add: SW,
  "tabs-item-input": "_tabs-item-input_16nwc_65",
  "input-mask": "_input-mask_16nwc_76"
}, sW = (Z) => {
  const {
    readOnlyTabs: l = [""],
    value: m,
    actived: c = !1,
    onOk: I,
    onCancel: i,
    onRemove: b,
    onClick: W,
    onValidate: X
  } = Z, d = f(null), [y, L] = VZ(m), [V, u] = VZ(Z.creating), N = (R) => {
    R.key === "Enter" ? (R.preventDefault(), C()) : R.key === "Escape" && (R.preventDefault(), S());
  }, S = () => {
    L(m), u(!1), i();
  };
  function C() {
    if (V && X(y, m)) {
      if (y === m && c) {
        u(!1);
        return;
      }
      I(y), u(!1);
    }
  }
  const s = () => {
    l.includes(y) || (u(!0), setTimeout(() => {
      var R;
      (R = d == null ? void 0 : d.current) == null || R.focus();
    }, 0));
  };
  return lZ(() => {
    var R;
    (R = d == null ? void 0 : d.current) == null || R.focus();
  }, []), /* @__PURE__ */ z.jsx(
    "div",
    {
      className: Hl(Zl["tab-item"], c ? Zl.actived : null),
      onClick: W,
      children: V ? /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
        /* @__PURE__ */ z.jsx(
          "input",
          {
            ref: d,
            className: Zl["tabs-item-input"],
            value: y,
            onChange: (R) => L(R.target.value),
            onBlur: C,
            onKeyDown: N
          }
        ),
        /* @__PURE__ */ z.jsx("div", { className: Zl["input-mask"] })
      ] }) : /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
        /* @__PURE__ */ z.jsx("span", { onDoubleClick: s, children: y }),
        l.includes(y) ? null : /* @__PURE__ */ z.jsx(NW, { message: `确定要删除 ${y} 吗?`, onConfirm: () => b(y), children: /* @__PURE__ */ z.jsx("span", { style: { marginLeft: 5, display: "flex" }, children: /* @__PURE__ */ z.jsxs("svg", { width: "12", height: "12", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ z.jsx("line", { stroke: "#999", x1: "18", y1: "6", x2: "6", y2: "18" }),
          /* @__PURE__ */ z.jsx("line", { stroke: "#999", x1: "6", y1: "6", x2: "18", y2: "18" })
        ] }) }) })
      ] })
    }
  );
}, MW = (Z) => `Comp${Z.reduce((m, c) => {
  const I = c.match(/Comp(\d+)\.tsx/);
  if (I) {
    const i = parseInt(I[1], 10);
    return Math.max(m, i);
  }
  return m;
}, 0) + 1}.tsx`, CW = (Z) => {
  const { onChange: l, onError: m, readOnly: c = !1 } = Z, { files: I, removeFile: i, addFile: b, updateFileName: W, selectedFileName: X } = Tl(Ml), [d, y] = VZ([""]), [L, V] = VZ(!1), u = () => {
    y([...d, MW(d)]), V(!0);
  }, N = () => {
    L && (d.pop(), y([...d]), V(!1));
  }, S = (h) => {
    L || l(h);
  }, C = () => {
    l(CZ);
  }, s = (h, K) => {
    L ? (b(h), V(!1)) : W(K, h), setTimeout(() => {
      S(h);
    }, 0);
  }, R = (h, K) => /\.(jsx|tsx|js|ts|css|json)$/.test(h) ? d.includes(h) && h !== K ? (m(`File "${h}" already exists.`), !1) : (m(""), !0) : (m("Playground only supports *.jsx, *.js, *.css, *.json files."), !1);
  return lZ(() => {
    y(
      Object.keys(I).filter(
        (h) => ![CZ, Yl].includes(h) && !I[h].hidden
      )
    );
  }, [I]), /* @__PURE__ */ z.jsxs("div", { className: Zl.tabs, children: [
    d.map((h, K) => /* @__PURE__ */ z.jsx(
      sW,
      {
        value: h,
        actived: X === h,
        creating: L,
        readOnlyTabs: c ? d : [Ll],
        onValidate: R,
        onOk: (t) => s(t, h),
        onCancel: N,
        onRemove: (t) => {
          i(t), S(Ll);
        },
        onClick: () => S(h)
      },
      K + h
    )),
    !c && /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
      /* @__PURE__ */ z.jsx("div", { className: Zl.add, onClick: u, children: "+" }),
      /* @__PURE__ */ z.jsx("div", { className: Zl["import-map-wrapper"], children: /* @__PURE__ */ z.jsx(
        "div",
        {
          className: Hl(
            Zl["tab-item"],
            X === CZ ? Zl.actived : null
          ),
          onClick: C,
          children: "Import Map"
        }
      ) })
    ] })
  ] });
}, FW = "_msg_1t9wq_1", nW = "_error_1t9wq_19", zW = "_warn_1t9wq_23", kW = "_dismiss_1t9wq_33", lc = {
  msg: FW,
  error: nW,
  warn: zW,
  dismiss: kW
}, EI = (Z) => {
  const { type: l, context: m } = Z, [c, I] = VZ(!1);
  return lZ(() => {
    I(!!m);
  }, [m]), c ? /* @__PURE__ */ z.jsxs("div", { className: Hl(lc.msg, lc[l]), children: [
    /* @__PURE__ */ z.jsx("pre", { dangerouslySetInnerHTML: { __html: m } }),
    /* @__PURE__ */ z.jsx("button", { className: lc.dismiss, onClick: () => I(!1), children: "✕" })
  ] }) : null;
}, aW = (Z) => {
  const { showFileSelector: l, fileSelectorReadOnly: m, options: c = {} } = Z, { files: I, setFiles: i, selectedFileName: b, setSelectedFileName: W } = Tl(Ml), [X, d] = VZ(""), y = I[b] || {}, L = eI((N) => {
    I[y.name].value = N, i({ ...I });
  }, 250), V = (N) => {
    W(N);
  }, u = (N) => {
    d(N);
  };
  return /* @__PURE__ */ z.jsxs("div", { style: { display: "flex", flexDirection: "column", height: "100%" }, children: [
    l ? /* @__PURE__ */ z.jsx(
      CW,
      {
        onChange: V,
        onError: u,
        readOnly: m
      }
    ) : null,
    /* @__PURE__ */ z.jsx(VW, { onChange: L, file: y, options: c }),
    /* @__PURE__ */ z.jsx(EI, { type: "error", context: X })
  ] });
};
var Tm = {}, wW = function() {
  var Z = document.getSelection();
  if (!Z.rangeCount)
    return function() {
    };
  for (var l = document.activeElement, m = [], c = 0; c < Z.rangeCount; c++)
    m.push(Z.getRangeAt(c));
  switch (l.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      l.blur();
      break;
    default:
      l = null;
      break;
  }
  return Z.removeAllRanges(), function() {
    Z.type === "Caret" && Z.removeAllRanges(), Z.rangeCount || m.forEach(function(I) {
      Z.addRange(I);
    }), l && l.focus();
  };
}, xW = wW, lI = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
}, UW = "Copy to clipboard: #{key}, Enter";
function jW(Z) {
  var l = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return Z.replace(/#{\s*key\s*}/g, l);
}
function KW(Z, l) {
  var m, c, I, i, b, W, X = !1;
  l || (l = {}), m = l.debug || !1;
  try {
    I = xW(), i = document.createRange(), b = document.getSelection(), W = document.createElement("span"), W.textContent = Z, W.ariaHidden = "true", W.style.all = "unset", W.style.position = "fixed", W.style.top = 0, W.style.clip = "rect(0, 0, 0, 0)", W.style.whiteSpace = "pre", W.style.webkitUserSelect = "text", W.style.MozUserSelect = "text", W.style.msUserSelect = "text", W.style.userSelect = "text", W.addEventListener("copy", function(y) {
      if (y.stopPropagation(), l.format)
        if (y.preventDefault(), typeof y.clipboardData > "u") {
          m && console.warn("unable to use e.clipboardData"), m && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var L = lI[l.format] || lI.default;
          window.clipboardData.setData(L, Z);
        } else
          y.clipboardData.clearData(), y.clipboardData.setData(l.format, Z);
      l.onCopy && (y.preventDefault(), l.onCopy(y.clipboardData));
    }), document.body.appendChild(W), i.selectNodeContents(W), b.addRange(i);
    var d = document.execCommand("copy");
    if (!d)
      throw new Error("copy command was unsuccessful");
    X = !0;
  } catch (y) {
    m && console.error("unable to copy using execCommand: ", y), m && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(l.format || "text", Z), l.onCopy && l.onCopy(window.clipboardData), X = !0;
    } catch (L) {
      m && console.error("unable to copy using clipboardData: ", L), m && console.error("falling back to prompt"), c = jW("message" in l ? l.message : UW), window.prompt(c, Z);
    }
  } finally {
    b && (typeof b.removeRange == "function" ? b.removeRange(i) : b.removeAllRanges()), W && document.body.removeChild(W), I();
  }
  return X;
}
var oW = KW;
function Rc(Z) {
  "@babel/helpers - typeof";
  return Rc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
    return typeof l;
  } : function(l) {
    return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
  }, Rc(Z);
}
Object.defineProperty(Tm, "__esModule", {
  value: !0
});
Tm.CopyToClipboard = void 0;
var zm = PI(MZ), HW = PI(oW), TW = ["text", "onCopy", "options", "children"];
function PI(Z) {
  return Z && Z.__esModule ? Z : { default: Z };
}
function mI(Z, l) {
  var m = Object.keys(Z);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(Z);
    l && (c = c.filter(function(I) {
      return Object.getOwnPropertyDescriptor(Z, I).enumerable;
    })), m.push.apply(m, c);
  }
  return m;
}
function cI(Z) {
  for (var l = 1; l < arguments.length; l++) {
    var m = arguments[l] != null ? arguments[l] : {};
    l % 2 ? mI(Object(m), !0).forEach(function(c) {
      wc(Z, c, m[c]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(Z, Object.getOwnPropertyDescriptors(m)) : mI(Object(m)).forEach(function(c) {
      Object.defineProperty(Z, c, Object.getOwnPropertyDescriptor(m, c));
    });
  }
  return Z;
}
function gW(Z, l) {
  if (Z == null)
    return {};
  var m = vW(Z, l), c, I;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(Z);
    for (I = 0; I < i.length; I++)
      c = i[I], !(l.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(Z, c) && (m[c] = Z[c]);
  }
  return m;
}
function vW(Z, l) {
  if (Z == null)
    return {};
  var m = {}, c = Object.keys(Z), I, i;
  for (i = 0; i < c.length; i++)
    I = c[i], !(l.indexOf(I) >= 0) && (m[I] = Z[I]);
  return m;
}
function tW(Z, l) {
  if (!(Z instanceof l))
    throw new TypeError("Cannot call a class as a function");
}
function II(Z, l) {
  for (var m = 0; m < l.length; m++) {
    var c = l[m];
    c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(Z, c.key, c);
  }
}
function DW(Z, l, m) {
  return l && II(Z.prototype, l), m && II(Z, m), Object.defineProperty(Z, "prototype", { writable: !1 }), Z;
}
function QW(Z, l) {
  if (typeof l != "function" && l !== null)
    throw new TypeError("Super expression must either be null or a function");
  Z.prototype = Object.create(l && l.prototype, { constructor: { value: Z, writable: !0, configurable: !0 } }), Object.defineProperty(Z, "prototype", { writable: !1 }), l && pc(Z, l);
}
function pc(Z, l) {
  return pc = Object.setPrototypeOf || function(c, I) {
    return c.__proto__ = I, c;
  }, pc(Z, l);
}
function eW(Z) {
  var l = OW();
  return function() {
    var c = xm(Z), I;
    if (l) {
      var i = xm(this).constructor;
      I = Reflect.construct(c, arguments, i);
    } else
      I = c.apply(this, arguments);
    return BW(this, I);
  };
}
function BW(Z, l) {
  if (l && (Rc(l) === "object" || typeof l == "function"))
    return l;
  if (l !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return AI(Z);
}
function AI(Z) {
  if (Z === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return Z;
}
function OW() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function xm(Z) {
  return xm = Object.setPrototypeOf ? Object.getPrototypeOf : function(m) {
    return m.__proto__ || Object.getPrototypeOf(m);
  }, xm(Z);
}
function wc(Z, l, m) {
  return l in Z ? Object.defineProperty(Z, l, { value: m, enumerable: !0, configurable: !0, writable: !0 }) : Z[l] = m, Z;
}
var fI = /* @__PURE__ */ function(Z) {
  QW(m, Z);
  var l = eW(m);
  function m() {
    var c;
    tW(this, m);
    for (var I = arguments.length, i = new Array(I), b = 0; b < I; b++)
      i[b] = arguments[b];
    return c = l.call.apply(l, [this].concat(i)), wc(AI(c), "onClick", function(W) {
      var X = c.props, d = X.text, y = X.onCopy, L = X.children, V = X.options, u = zm.default.Children.only(L), N = (0, HW.default)(d, V);
      y && y(d, N), u && u.props && typeof u.props.onClick == "function" && u.props.onClick(W);
    }), c;
  }
  return DW(m, [{
    key: "render",
    value: function() {
      var I = this.props;
      I.text, I.onCopy, I.options;
      var i = I.children, b = gW(I, TW), W = zm.default.Children.only(i);
      return /* @__PURE__ */ zm.default.cloneElement(W, cI(cI({}, b), {}, {
        onClick: this.onClick
      }));
    }
  }]), m;
}(zm.default.PureComponent);
Tm.CopyToClipboard = fI;
wc(fI, "defaultProps", {
  onCopy: void 0,
  options: void 0
});
var EW = Tm, Sc = EW.CopyToClipboard;
Sc.CopyToClipboard = Sc;
var PW = Sc, rI = { exports: {} };
(function(Z, l) {
  (function(m, c) {
    c();
  })(Ol, function() {
    function m(d, y) {
      return typeof y > "u" ? y = { autoBom: !1 } : typeof y != "object" && (console.warn("Deprecated: Expected third argument to be a object"), y = { autoBom: !y }), y.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(d.type) ? new Blob(["\uFEFF", d], { type: d.type }) : d;
    }
    function c(d, y, L) {
      var V = new XMLHttpRequest();
      V.open("GET", d), V.responseType = "blob", V.onload = function() {
        X(V.response, y, L);
      }, V.onerror = function() {
        console.error("could not download file");
      }, V.send();
    }
    function I(d) {
      var y = new XMLHttpRequest();
      y.open("HEAD", d, !1);
      try {
        y.send();
      } catch {
      }
      return 200 <= y.status && 299 >= y.status;
    }
    function i(d) {
      try {
        d.dispatchEvent(new MouseEvent("click"));
      } catch {
        var y = document.createEvent("MouseEvents");
        y.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), d.dispatchEvent(y);
      }
    }
    var b = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof Ol == "object" && Ol.global === Ol ? Ol : void 0, W = b.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), X = b.saveAs || (typeof window != "object" || window !== b ? function() {
    } : "download" in HTMLAnchorElement.prototype && !W ? function(d, y, L) {
      var V = b.URL || b.webkitURL, u = document.createElement("a");
      y = y || d.name || "download", u.download = y, u.rel = "noopener", typeof d == "string" ? (u.href = d, u.origin === location.origin ? i(u) : I(u.href) ? c(d, y, L) : i(u, u.target = "_blank")) : (u.href = V.createObjectURL(d), setTimeout(function() {
        V.revokeObjectURL(u.href);
      }, 4e4), setTimeout(function() {
        i(u);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(d, y, L) {
      if (y = y || d.name || "download", typeof d != "string")
        navigator.msSaveOrOpenBlob(m(d, L), y);
      else if (I(d))
        c(d, y, L);
      else {
        var V = document.createElement("a");
        V.href = d, V.target = "_blank", setTimeout(function() {
          i(V);
        });
      }
    } : function(d, y, L, V) {
      if (V = V || open("", "_blank"), V && (V.document.title = V.document.body.innerText = "downloading..."), typeof d == "string")
        return c(d, y, L);
      var u = d.type === "application/octet-stream", N = /constructor/i.test(b.HTMLElement) || b.safari, S = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((S || u && N || W) && typeof FileReader < "u") {
        var C = new FileReader();
        C.onloadend = function() {
          var h = C.result;
          h = S ? h : h.replace(/^data:[^;]*;/, "data:attachment/file;"), V ? V.location.href = h : location = h, V = null;
        }, C.readAsDataURL(d);
      } else {
        var s = b.URL || b.webkitURL, R = s.createObjectURL(d);
        V ? V.location = R : location.href = R, V = null, setTimeout(function() {
          s.revokeObjectURL(R);
        }, 4e4);
      }
    });
    b.saveAs = X.saveAs = X, Z.exports = X;
  });
})(rI);
var AW = rI.exports;
const fW = `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><g><rect x="4" y="18" width="16" height="2" rx="1" ry="1"></rect><rect x="3" y="17" width="4" height="2" rx="1" ry="1" transform="rotate(-90 5 18)"></rect><rect x="17" y="17" width="4" height="2" rx="1" ry="1" transform="rotate(-90 19 18)"></rect><path d="M12 15a1 1 0 0 1-.58-.18l-4-2.82a1 1 0 0 1-.24-1.39a1 1 0 0 1 1.4-.24L12 12.76l3.4-2.56a1 1 0 0 1 1.2 1.6l-4 3a1 1 0 0 1-.6.2z"></path><path d="M12 13a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1z"></path></g></svg>
`, rW = `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path></svg>
`, qW = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="dark"><path fill="currentColor" d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"></path></svg>
`, _W = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1sb2dvcyIgd2lkdGg9IjM1LjkzIiBoZWlnaHQ9IjMyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjU2IDIyOCI+PHBhdGggZmlsbD0iIzAwRDhGRiIgZD0iTTIxMC40ODMgNzMuODI0YTE3MS40OSAxNzEuNDkgMCAwIDAtOC4yNC0yLjU5N2MuNDY1LTEuOS44OTMtMy43NzcgMS4yNzMtNS42MjFjNi4yMzgtMzAuMjgxIDIuMTYtNTQuNjc2LTExLjc2OS02Mi43MDhjLTEzLjM1NS03LjctMzUuMTk2LjMyOS01Ny4yNTQgMTkuNTI2YTE3MS4yMyAxNzEuMjMgMCAwIDAtNi4zNzUgNS44NDhhMTU1Ljg2NiAxNTUuODY2IDAgMCAwLTQuMjQxLTMuOTE3QzEwMC43NTkgMy44MjkgNzcuNTg3LTQuODIyIDYzLjY3MyAzLjIzM0M1MC4zMyAxMC45NTcgNDYuMzc5IDMzLjg5IDUxLjk5NSA2Mi41ODhhMTcwLjk3NCAxNzAuOTc0IDAgMCAwIDEuODkyIDguNDhjLTMuMjguOTMyLTYuNDQ1IDEuOTI0LTkuNDc0IDIuOThDMTcuMzA5IDgzLjQ5OCAwIDk4LjMwNyAwIDExMy42NjhjMCAxNS44NjUgMTguNTgyIDMxLjc3OCA0Ni44MTIgNDEuNDI3YTE0NS41MiAxNDUuNTIgMCAwIDAgNi45MjEgMi4xNjVhMTY3LjQ2NyAxNjcuNDY3IDAgMCAwLTIuMDEgOS4xMzhjLTUuMzU0IDI4LjItMS4xNzMgNTAuNTkxIDEyLjEzNCA1OC4yNjZjMTMuNzQ0IDcuOTI2IDM2LjgxMi0uMjIgNTkuMjczLTE5Ljg1NWExNDUuNTY3IDE0NS41NjcgMCAwIDAgNS4zNDItNC45MjNhMTY4LjA2NCAxNjguMDY0IDAgMCAwIDYuOTIgNi4zMTRjMjEuNzU4IDE4LjcyMiA0My4yNDYgMjYuMjgyIDU2LjU0IDE4LjU4NmMxMy43MzEtNy45NDkgMTguMTk0LTMyLjAwMyAxMi40LTYxLjI2OGExNDUuMDE2IDE0NS4wMTYgMCAwIDAtMS41MzUtNi44NDJjMS42Mi0uNDggMy4yMS0uOTc0IDQuNzYtMS40ODhjMjkuMzQ4LTkuNzIzIDQ4LjQ0My0yNS40NDMgNDguNDQzLTQxLjUyYzAtMTUuNDE3LTE3Ljg2OC0zMC4zMjYtNDUuNTE3LTM5Ljg0NFptLTYuMzY1IDcwLjk4NGMtMS40LjQ2My0yLjgzNi45MS00LjMgMS4zNDVjLTMuMjQtMTAuMjU3LTcuNjEyLTIxLjE2My0xMi45NjMtMzIuNDMyYzUuMTA2LTExIDkuMzEtMjEuNzY3IDEyLjQ1OS0zMS45NTdjMi42MTkuNzU4IDUuMTYgMS41NTcgNy42MSAyLjRjMjMuNjkgOC4xNTYgMzguMTQgMjAuMjEzIDM4LjE0IDI5LjUwNGMwIDkuODk2LTE1LjYwNiAyMi43NDMtNDAuOTQ2IDMxLjE0Wm0tMTAuNTE0IDIwLjgzNGMyLjU2MiAxMi45NCAyLjkyNyAyNC42NCAxLjIzIDMzLjc4N2MtMS41MjQgOC4yMTktNC41OSAxMy42OTgtOC4zODIgMTUuODkzYy04LjA2NyA0LjY3LTI1LjMyLTEuNC00My45MjctMTcuNDEyYTE1Ni43MjYgMTU2LjcyNiAwIDAgMS02LjQzNy01Ljg3YzcuMjE0LTcuODg5IDE0LjQyMy0xNy4wNiAyMS40NTktMjcuMjQ2YzEyLjM3Ni0xLjA5OCAyNC4wNjgtMi44OTQgMzQuNjcxLTUuMzQ1YTEzNC4xNyAxMzQuMTcgMCAwIDEgMS4zODYgNi4xOTNaTTg3LjI3NiAyMTQuNTE1Yy03Ljg4MiAyLjc4My0xNC4xNiAyLjg2My0xNy45NTUuNjc1Yy04LjA3NS00LjY1Ny0xMS40MzItMjIuNjM2LTYuODUzLTQ2Ljc1MmExNTYuOTIzIDE1Ni45MjMgMCAwIDEgMS44NjktOC40OTljMTAuNDg2IDIuMzIgMjIuMDkzIDMuOTg4IDM0LjQ5OCA0Ljk5NGM3LjA4NCA5Ljk2NyAxNC41MDEgMTkuMTI4IDIxLjk3NiAyNy4xNWExMzQuNjY4IDEzNC42NjggMCAwIDEtNC44NzcgNC40OTJjLTkuOTMzIDguNjgyLTE5Ljg4NiAxNC44NDItMjguNjU4IDE3Ljk0Wk01MC4zNSAxNDQuNzQ3Yy0xMi40ODMtNC4yNjctMjIuNzkyLTkuODEyLTI5Ljg1OC0xNS44NjNjLTYuMzUtNS40MzctOS41NTUtMTAuODM2LTkuNTU1LTE1LjIxNmMwLTkuMzIyIDEzLjg5Ny0yMS4yMTIgMzcuMDc2LTI5LjI5M2MyLjgxMy0uOTggNS43NTctMS45MDUgOC44MTItMi43NzNjMy4yMDQgMTAuNDIgNy40MDYgMjEuMzE1IDEyLjQ3NyAzMi4zMzJjLTUuMTM3IDExLjE4LTkuMzk5IDIyLjI0OS0xMi42MzQgMzIuNzkyYTEzNC43MTggMTM0LjcxOCAwIDAgMS02LjMxOC0xLjk3OVptMTIuMzc4LTg0LjI2Yy00LjgxMS0yNC41ODctMS42MTYtNDMuMTM0IDYuNDI1LTQ3Ljc4OWM4LjU2NC00Ljk1OCAyNy41MDIgMi4xMTEgNDcuNDYzIDE5LjgzNWExNDQuMzE4IDE0NC4zMTggMCAwIDEgMy44NDEgMy41NDVjLTcuNDM4IDcuOTg3LTE0Ljc4NyAxNy4wOC0yMS44MDggMjYuOTg4Yy0xMi4wNCAxLjExNi0yMy41NjUgMi45MDgtMzQuMTYxIDUuMzA5YTE2MC4zNDIgMTYwLjM0MiAwIDAgMS0xLjc2LTcuODg3Wm0xMTAuNDI3IDI3LjI2OGEzNDcuOCAzNDcuOCAwIDAgMC03Ljc4NS0xMi44MDNjOC4xNjggMS4wMzMgMTUuOTk0IDIuNDA0IDIzLjM0MyA0LjA4Yy0yLjIwNiA3LjA3Mi00Ljk1NiAxNC40NjUtOC4xOTMgMjIuMDQ1YTM4MS4xNTEgMzgxLjE1MSAwIDAgMC03LjM2NS0xMy4zMjJabS00NS4wMzItNDMuODYxYzUuMDQ0IDUuNDY1IDEwLjA5NiAxMS41NjYgMTUuMDY1IDE4LjE4NmEzMjIuMDQgMzIyLjA0IDAgMCAwLTMwLjI1Ny0uMDA2YzQuOTc0LTYuNTU5IDEwLjA2OS0xMi42NTIgMTUuMTkyLTE4LjE4Wk04Mi44MDIgODcuODNhMzIzLjE2NyAzMjMuMTY3IDAgMCAwLTcuMjI3IDEzLjIzOGMtMy4xODQtNy41NTMtNS45MDktMTQuOTgtOC4xMzQtMjIuMTUyYzcuMzA0LTEuNjM0IDE1LjA5My0yLjk3IDIzLjIwOS0zLjk4NGEzMjEuNTI0IDMyMS41MjQgMCAwIDAtNy44NDggMTIuODk3Wm04LjA4MSA2NS4zNTJjLTguMzg1LS45MzYtMTYuMjkxLTIuMjAzLTIzLjU5My0zLjc5M2MyLjI2LTcuMyA1LjA0NS0xNC44ODUgOC4yOTgtMjIuNmEzMjEuMTg3IDMyMS4xODcgMCAwIDAgNy4yNTcgMTMuMjQ2YzIuNTk0IDQuNDggNS4yOCA4Ljg2OCA4LjAzOCAxMy4xNDdabTM3LjU0MiAzMS4wM2MtNS4xODQtNS41OTItMTAuMzU0LTExLjc3OS0xNS40MDMtMTguNDMzYzQuOTAyLjE5MiA5Ljg5OS4yOSAxNC45NzguMjljNS4yMTggMCAxMC4zNzYtLjExNyAxNS40NTMtLjM0M2MtNC45ODUgNi43NzQtMTAuMDE4IDEyLjk3LTE1LjAyOCAxOC40ODZabTUyLjE5OC01Ny44MTdjMy40MjIgNy44IDYuMzA2IDE1LjM0NSA4LjU5NiAyMi41MmMtNy40MjIgMS42OTQtMTUuNDM2IDMuMDU4LTIzLjg4IDQuMDcxYTM4Mi40MTcgMzgyLjQxNyAwIDAgMCA3Ljg1OS0xMy4wMjZhMzQ3LjQwMyAzNDcuNDAzIDAgMCAwIDcuNDI1LTEzLjU2NVptLTE2Ljg5OCA4LjEwMWEzNTguNTU3IDM1OC41NTcgMCAwIDEtMTIuMjgxIDE5LjgxNWEzMjkuNCAzMjkuNCAwIDAgMS0yMy40NDQuODIzYy03Ljk2NyAwLTE1LjcxNi0uMjQ4LTIzLjE3OC0uNzMyYTMxMC4yMDIgMzEwLjIwMiAwIDAgMS0xMi41MTMtMTkuODQ2aC4wMDFhMzA3LjQxIDMwNy40MSAwIDAgMS0xMC45MjMtMjAuNjI3YTMxMC4yNzggMzEwLjI3OCAwIDAgMSAxMC44OS0yMC42MzdsLS4wMDEuMDAxYTMwNy4zMTggMzA3LjMxOCAwIDAgMSAxMi40MTMtMTkuNzYxYzcuNjEzLS41NzYgMTUuNDItLjg3NiAyMy4zMS0uODc2SDEyOGM3LjkyNiAwIDE1Ljc0My4zMDMgMjMuMzU0Ljg4M2EzMjkuMzU3IDMyOS4zNTcgMCAwIDEgMTIuMzM1IDE5LjY5NWEzNTguNDg5IDM1OC40ODkgMCAwIDEgMTEuMDM2IDIwLjU0YTMyOS40NzIgMzI5LjQ3MiAwIDAgMS0xMSAyMC43MjJabTIyLjU2LTEyMi4xMjRjOC41NzIgNC45NDQgMTEuOTA2IDI0Ljg4MSA2LjUyIDUxLjAyNmMtLjM0NCAxLjY2OC0uNzMgMy4zNjctMS4xNSA1LjA5Yy0xMC42MjItMi40NTItMjIuMTU1LTQuMjc1LTM0LjIzLTUuNDA4Yy03LjAzNC0xMC4wMTctMTQuMzIzLTE5LjEyNC0yMS42NC0yNy4wMDhhMTYwLjc4OSAxNjAuNzg5IDAgMCAxIDUuODg4LTUuNGMxOC45LTE2LjQ0NyAzNi41NjQtMjIuOTQxIDQ0LjYxMi0xOC4zWk0xMjggOTAuODA4YzEyLjYyNSAwIDIyLjg2IDEwLjIzNSAyMi44NiAyMi44NnMtMTAuMjM1IDIyLjg2LTIyLjg2IDIyLjg2cy0yMi44Ni0xMC4yMzUtMjIuODYtMjIuODZzMTAuMjM1LTIyLjg2IDIyLjg2LTIyLjg2WiI+PC9wYXRoPjwvc3ZnPgo=", $W = `<svg width="18" height="18" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.59 13.51l6.83 3.98"></path><path d="M15.41 6.51l-6.82 3.98"></path></g></svg>
`, ZX = '<svg width="18" height="18" t="1698308238530" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4870" width="48" height="48" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M512 981.333333C252.8 981.333333 42.666667 771.2 42.666667 512S252.8 42.666667 512 42.666667s469.333333 210.133333 469.333333 469.333333-210.133333 469.333333-469.333333 469.333333z m-50.432-326.101333L310.613333 504.32a32 32 0 0 0-45.226666 45.226667l174.72 174.762666a32.341333 32.341333 0 0 0 0.341333 0.341334l0.256 0.213333a32 32 0 0 0 50.048-6.144l337.450667-379.605333a32 32 0 1 0-47.872-42.496l-318.762667 358.613333z" fill="#52C41A" p-id="4871"></path></svg>', lX = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="light"><path fill="currentColor" d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path fill="currentColor" d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path fill="currentColor" d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path fill="currentColor" d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path fill="currentColor" d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path fill="currentColor" d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path fill="currentColor" d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path fill="currentColor" d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path fill="currentColor" d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path></svg>
`, mX = `module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
`, cX = `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
`, IX = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"><\/script>
  </body>
</html>
`, iX = `{
  "name": "react-playground",
  "author": "fewismuch",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "@vitejs/plugin-react-swc": "^3.3.2",
    "eslint": "^8.45.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    "typescript": "^5.0.2",
    "vite": "^4.4.5"
  }
}
`, bX = `# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level \`parserOptions\` property like this:

\`\`\`js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
\`\`\`

- Replace \`plugin:@typescript-eslint/recommended\` to \`plugin:@typescript-eslint/recommended-type-checked\` or \`plugin:@typescript-eslint/strict-type-checked\`
- Optionally add \`plugin:@typescript-eslint/stylistic-type-checked\`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add \`plugin:react/recommended\` & \`plugin:react/jsx-runtime\` to the \`extends\` list
  gitignore
`, WX = `{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
`, XX = `{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
`, dX = `import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
`, dl = {
  DownloadSvg: fW,
  GithubSvg: rW,
  MoonSvg: qW,
  ReactSvg: _W,
  ShareSvg: $W,
  SunSvg: lX,
  SuccessSvg: ZX
};
async function yX(Z) {
  const { default: l } = await import("https://esm.sh/jszip@3.10.1"), m = new l();
  m.file("index.html", IX), m.file("package.json", iX), m.file("vite.config.js", dX), m.file("tsconfig.json", WX), m.file("tsconfig.node.json", XX), m.file("README.md", bX), m.file("eslintrc.md", mX), m.file("gitignore.md", cX);
  const c = m.folder("src");
  Object.keys(Z).forEach((i) => {
    Z[i].name !== CZ ? c.file(i, Z[i].value) : m.file(i, Z[i].value);
  });
  const I = await m.generateAsync({ type: "blob" });
  AW.saveAs(I, "react-project.zip");
}
const GX = "_header_1whkb_1", LX = "_logo_1whkb_15", YX = "_links_1whkb_24", VX = "_theme_1whkb_43", rl = {
  header: GX,
  logo: LX,
  links: YX,
  theme: VX
}, uX = () => {
  const { files: Z, theme: l, changeTheme: m, filesHash: c } = Tl(Ml), [I, i] = VZ(!1), [b, W] = VZ(!1), X = () => {
    i(!0), setTimeout(() => {
      i(!1);
    }, 3e3);
  }, d = () => {
    yX(Z).then(() => {
      W(!0), setTimeout(() => {
        W(!1);
      }, 3e3);
    });
  };
  return /* @__PURE__ */ z.jsxs("nav", { className: rl.header, children: [
    /* @__PURE__ */ z.jsxs("div", { className: rl.logo, children: [
      /* @__PURE__ */ z.jsx("img", { alt: "logo", src: dl.ReactSvg }),
      /* @__PURE__ */ z.jsx("span", { children: "React Playground" })
    ] }),
    /* @__PURE__ */ z.jsxs("div", { className: rl.links, children: [
      l === "light" && /* @__PURE__ */ z.jsx(
        "button",
        {
          title: "Toggle dark mode",
          className: rl.theme,
          dangerouslySetInnerHTML: { __html: dl.SunSvg },
          onClick: () => m("dark")
        }
      ),
      l === "dark" && /* @__PURE__ */ z.jsx(
        "button",
        {
          title: "Toggle light mode",
          className: rl.theme,
          dangerouslySetInnerHTML: { __html: dl.MoonSvg },
          onClick: () => m("light")
        }
      ),
      /* @__PURE__ */ z.jsx(
        PW.CopyToClipboard,
        {
          text: `${location.host}${location.pathname}#${c}`,
          onCopy: X,
          children: /* @__PURE__ */ z.jsx(
            "button",
            {
              title: "Copy sharable URL",
              dangerouslySetInnerHTML: { __html: I ? dl.SuccessSvg : dl.ShareSvg },
              onClick: X
            }
          )
        }
      ),
      /* @__PURE__ */ z.jsx(
        "button",
        {
          title: "Download project files",
          dangerouslySetInnerHTML: { __html: b ? dl.SuccessSvg : dl.DownloadSvg },
          onClick: d
        }
      ),
      /* @__PURE__ */ z.jsx(
        "a",
        {
          href: "https://github.com/fewismuch/react-playground",
          target: "_blank",
          title: "View on GitHub",
          children: /* @__PURE__ */ z.jsx("button", { dangerouslySetInnerHTML: { __html: dl.GithubSvg } })
        }
      )
    ] })
  ] });
function JX() {
  let Z;
  try {
    if (Z = iI && (window.URL || window.webkitURL).createObjectURL(iI), !Z)
      throw "";
    return new Worker(Z);
  } catch {
    return new Worker("data:application/javascript;base64," + qI);
  } finally {
    Z && (window.URL || window.webkitURL).revokeObjectURL(Z);
  }
}
const hX = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Preview</title>
  <!-- es-module-shims -->
</head>
<body>
<script>
  window.addEventListener('error', (e) => {
    window.parent.postMessage({type: 'ERROR', message: e.message})
  })

  window.addEventListener('load', () => {
    window.parent.postMessage({type: 'LOADED', message: ''})
  })

  window.addEventListener('message', ({data}) => {
    if (data?.type === 'UPDATE_FILES') {
      const importmapTag = document.querySelector(
        'script[type="importmap"]',
      );
      if (data.data.importmap) importmapTag.innerHTML = data.data.importmap

      // 即将要清除的样式
      const appStyleTags = document.querySelectorAll('style[id^="style_"]') || []

      // 清除旧app
      const appSrcTag = document.querySelector('#appSrc');
      const oldSrc = appSrcTag.getAttribute('src');
      appSrcTag.remove();

      // 插入新app
      const script = document.createElement('script');
      const newSrc = URL.createObjectURL(
        new Blob([data.data.compileCode], {
          type: 'application/javascript',
        }),
      );
      script.src = newSrc;
      script.id = 'appSrc';
      script.type = 'module';
      script.onload = () => {
        // 防止先移除样式后页面闪烁
        appStyleTags.forEach(div => {
          div.remove();
        });
      }
      document.body.appendChild(script);
      URL.revokeObjectURL(oldSrc);
      window.parent.postMessage({type: 'DONE', message: ''})
    }
  });
<\/script>
<script type="importmap"><\/script>
<script type="module" id="appSrc"><\/script>
<div id="root">
  <div style="position:absolute;top: 0;left:0;width:100%;height:100%;display: flex;justify-content: center;align-items: center;">
    Loading...
  </div>
</div>
</body>
</html>
`, _I = (Z) => {
  const l = "//unpkg.com/es-module-shims@1.8.0/dist/es-module-shims.js", m = typeof import.meta > "u" ? Z.replace("<!-- es-module-shims -->", `<script async src="${l}"><\/script>`) : Z;
  return URL.createObjectURL(new Blob([m], { type: "text/html" }));
}, NX = _I(hX), RX = (Z) => {
  const { hidden: l, data: m, iframeKey: c } = Z, I = f(null), [i, b] = VZ("");
  lZ(() => {
    var X, d;
    m && ((d = (X = I.current) == null ? void 0 : X.contentWindow) == null || d.postMessage(m));
  }, [m]);
  const W = (X) => {
    var L, V;
    const { type: d, message: y } = X.data;
    d === "LOADED" ? (V = (L = I.current) == null ? void 0 : L.contentWindow) == null || V.postMessage(m) : b(d === "ERROR" ? y : "");
  };
  return lZ(() => (window.addEventListener("message", W), () => {
    window.removeEventListener("message", W);
  }), []), /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
    /* @__PURE__ */ z.jsx(
      "iframe",
      {
        ref: I,
        src: NX,
        style: {
          width: "100%",
          height: "100%",
          padding: 0,
          border: "none",
          display: l ? "none" : ""
        },
        sandbox: "allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"
      },
      c
    ),
    /* @__PURE__ */ z.jsx(EI, { type: "error", context: i })
  ] });
}, pX = "_tabs_1vzew_1", SX = "_actived_1vzew_20", mc = {
  tabs: pX,
  "tab-item": "_tab-item_1vzew_11",
  actived: SX
}, sX = (Z) => {
  const { onChange: l, items: m, value: c = m[0], hidden: I } = Z;
  return I ? null : /* @__PURE__ */ z.jsx("div", { className: mc.tabs, children: m.map((i) => /* @__PURE__ */ z.jsx(
    "div",
    {
      className: Hl(mc["tab-item"], c === i ? mc.actived : ""),
      onClick: () => l(i),
      children: i
    },
    i
  )) });
}, MX = ["PREVIEW", "JS"], CX = (Z) => {
  const { showCompileOutput: l = !0 } = Z, { files: m, theme: c, selectedFileName: I } = Tl(Ml), [i, b] = VZ("PREVIEW"), W = f(null), [X, d] = VZ(), [y, L] = VZ(""), V = (N) => {
    b(N);
  }, u = eI(() => {
    var N, S;
    i === "PREVIEW" && ((N = W.current) == null || N.postMessage(m)), i === "JS" && ((S = W.current) == null || S.postMessage(m[I].value));
  }, 50);
  return lZ(() => {
    W.current || (W.current = new JX(), W.current.addEventListener("message", ({ data: N }) => {
      if (N.type === "UPDATE_FILES") {
        try {
          JSON.parse(m[CZ].value), N.data.importmap = m[CZ].value;
        } catch (S) {
          console.error("importmap 解析错误:", S);
        }
        d(N);
      } else
        N.type === "UPDATE_FILE" ? L(N.data) : N.type === "ERROR" && console.log(N);
    }));
  }, []), lZ(() => {
    u();
  }, [i, m]), lZ(() => {
    var N, S, C, s;
    I === CZ || i === "PREVIEW" || (["javascript", "typescript"].includes((N = m[I]) == null ? void 0 : N.language) ? (C = W.current) == null || C.postMessage((S = m[I]) == null ? void 0 : S.value) : (s = W.current) == null || s.postMessage(""));
  }, [I]), /* @__PURE__ */ z.jsxs("div", { style: { display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ z.jsx(
      sX,
      {
        items: MX,
        value: i,
        onChange: V,
        hidden: !l
      }
    ),
    /* @__PURE__ */ z.jsx(
      RX,
      {
        iframeKey: m[CZ].value,
        hidden: i !== "PREVIEW",
        data: X
      }
    ),
    l ? /* @__PURE__ */ z.jsx("div", { style: { display: i !== "JS" ? "none" : "", height: "100%" }, children: /* @__PURE__ */ z.jsx(
      zI,
      {
        className: "react-playground-editor",
        height: "100%",
        theme: `vs-${c}`,
        value: y,
        language: "javascript",
        options: {
          ...kI,
          readOnly: !0
        }
      }
    ) }) : null
  ] });
}, FX = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
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
      "react-dom/client": "https://esm.sh/react-dom@18.2.0",
      "react-exercise-playground":"http://127.0.0.1:5500/dist/index.mjs"
    }
  }
<\/script>
<script>

<\/script>
<script type="module">
  import React, {useState, useEffect} from 'react';
  import ReactDOM from 'react-dom/client';
  import {Playground} from 'react-exercise-playground'

  const App = () => {
    const [sandboxProps, setSandboxProps] = useState(null);

    useEffect(() => {
      window.addEventListener('message', ({data}) => {
        if (data?.type === 'SANDBOX_RUN') {
          setSandboxProps(data.data)
        }
      })
    }, [])

    return sandboxProps ? React.createElement(React.StrictMode, null, React.createElement(Playground, sandboxProps)) : null
  };

  window.addEventListener('load', () => {
    window.parent.postMessage({type: 'SANDBOX_LOADED', message: ''})
    const root = document.getElementById('root')
    ReactDOM.createRoot(root).render(React.createElement(App, null))
  })
<\/script>
<div id="root">
  <div style="position:absolute;top: 0;left:0;width:100%;height:100%;display: flex;justify-content: center;align-items: center;">
    Loading...
  </div>
</div>
</body>
</html>
`, nX = _I(FX), zX = (Z) => {
  const { width: l = "100vw", height: m = "100vh" } = Z, c = f(null), I = f(!1), i = (b) => {
    var X, d;
    const { type: W } = b.data;
    W === "SANDBOX_LOADED" && ((d = (X = c.current) == null ? void 0 : X.contentWindow) == null || d.postMessage({
      type: "SANDBOX_RUN",
      data: Z
    }), I.current = !0);
  };
  return lZ(() => (window.addEventListener("message", i), () => {
    window.removeEventListener("message", i);
  }), []), lZ(() => {
    var b, W;
    I.current && ((W = (b = c.current) == null ? void 0 : b.contentWindow) == null || W.postMessage({
      type: "SANDBOX_RUN",
      data: Z
    }));
  }, [Z]), /* @__PURE__ */ z.jsx("div", { style: { width: l, height: m }, children: /* @__PURE__ */ z.jsx(
    "iframe",
    {
      ref: c,
      src: nX,
      style: {
        width: "100%",
        height: "100%",
        padding: 0,
        border: "none"
      },
      sandbox: "allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"
    }
  ) });
};
function Zm() {
  return Zm = Object.assign ? Object.assign.bind() : function(Z) {
    for (var l = 1; l < arguments.length; l++) {
      var m = arguments[l];
      for (var c in m)
        Object.prototype.hasOwnProperty.call(m, c) && (Z[c] = m[c]);
    }
    return Z;
  }, Zm.apply(this, arguments);
}
var yl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function im(Z) {
  return Z && Z.__esModule && Object.prototype.hasOwnProperty.call(Z, "default") ? Z.default : Z;
}
var cc, $I = {
  exports: {}
};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
cc = $I, function() {
  var Z = {}.hasOwnProperty;
  function l() {
    for (var m = [], c = 0; c < arguments.length; c++) {
      var I = arguments[c];
      if (I) {
        var i = typeof I;
        if (i === "string" || i === "number")
          m.push(I);
        else if (Array.isArray(I)) {
          if (I.length) {
            var b = l.apply(null, I);
            b && m.push(b);
          }
        } else if (i === "object")
          if (I.toString === Object.prototype.toString)
            for (var W in I)
              Z.call(I, W) && I[W] && m.push(W);
          else
            m.push(I.toString());
      }
    }
    return m.join(" ");
  }
  cc.exports ? (l.default = l, cc.exports = l) : window.classNames = l;
}();
var sc = im($I.exports), bI = NaN, kX = "[object Symbol]", aX = /^\s+|\s+$/g, wX = /^[-+]0x[0-9a-f]+$/i, xX = /^0b[01]+$/i, UX = /^0o[0-7]+$/i, jX = parseInt, KX = Object.prototype.toString;
function WI(Z) {
  var l = typeof Z;
  return !!Z && (l == "object" || l == "function");
}
function Ic(Z) {
  if (typeof Z == "number")
    return Z;
  if (function(c) {
    return typeof c == "symbol" || function(I) {
      return !!I && typeof I == "object";
    }(c) && KX.call(c) == kX;
  }(Z))
    return bI;
  if (WI(Z)) {
    var l = typeof Z.valueOf == "function" ? Z.valueOf() : Z;
    Z = WI(l) ? l + "" : l;
  }
  if (typeof Z != "string")
    return Z === 0 ? Z : +Z;
  Z = Z.replace(aX, "");
  var m = xX.test(Z);
  return m || UX.test(Z) ? jX(Z.slice(2), m ? 2 : 8) : wX.test(Z) ? bI : +Z;
}
var DZ = im(function(Z, l, m) {
  return m === void 0 && (m = l, l = void 0), m !== void 0 && (m = (m = Ic(m)) == m ? m : 0), l !== void 0 && (l = (l = Ic(l)) == l ? l : 0), function(c, I, i) {
    return c == c && (i !== void 0 && (c = c <= i ? c : i), I !== void 0 && (c = c >= I ? c : I)), c;
  }(Ic(Z), l, m);
}), Mc = {
  exports: {}
};
(function(Z, l) {
  var m = "__lodash_hash_undefined__", c = 1, I = 2, i = 9007199254740991, b = "[object Arguments]", W = "[object Array]", X = "[object AsyncFunction]", d = "[object Boolean]", y = "[object Date]", L = "[object Error]", V = "[object Function]", u = "[object GeneratorFunction]", N = "[object Map]", S = "[object Number]", C = "[object Null]", s = "[object Object]", R = "[object Promise]", h = "[object Proxy]", K = "[object RegExp]", t = "[object Set]", H = "[object String]", p = "[object Symbol]", w = "[object Undefined]", F = "[object WeakMap]", j = "[object ArrayBuffer]", U = "[object DataView]", g = /^\[object .+?Constructor\]$/, E = /^(?:0|[1-9]\d*)$/, k = {};
  k["[object Float32Array]"] = k["[object Float64Array]"] = k["[object Int8Array]"] = k["[object Int16Array]"] = k["[object Int32Array]"] = k["[object Uint8Array]"] = k["[object Uint8ClampedArray]"] = k["[object Uint16Array]"] = k["[object Uint32Array]"] = !0, k[b] = k[W] = k[j] = k[d] = k[U] = k[y] = k[L] = k[V] = k[N] = k[S] = k[s] = k[K] = k[t] = k[H] = k[F] = !1;
  var a = typeof yl == "object" && yl && yl.Object === Object && yl, o = typeof self == "object" && self && self.Object === Object && self, D = a || o || Function("return this")(), mZ = l && !l.nodeType && l, $ = mZ && Z && !Z.nodeType && Z, iZ = $ && $.exports === mZ, v = iZ && a.process, e = function() {
    try {
      return v && v.binding && v.binding("util");
    } catch {
    }
  }(), P = e && e.isTypedArray;
  function XZ(Y, J) {
    for (var n = -1, T = Y == null ? 0 : Y.length; ++n < T; )
      if (J(Y[n], n, Y))
        return !0;
    return !1;
  }
  function q(Y) {
    var J = -1, n = Array(Y.size);
    return Y.forEach(function(T, yZ) {
      n[++J] = [yZ, T];
    }), n;
  }
  function JZ(Y) {
    var J = -1, n = Array(Y.size);
    return Y.forEach(function(T) {
      n[++J] = T;
    }), n;
  }
  var O, B, cZ, IZ = Array.prototype, EZ = Function.prototype, kZ = Object.prototype, jZ = D["__core-js_shared__"], ll = EZ.toString, FZ = kZ.hasOwnProperty, ul = (O = /[^.]+$/.exec(jZ && jZ.keys && jZ.keys.IE_PROTO || "")) ? "Symbol(src)_1." + O : "", gl = kZ.toString, bm = RegExp("^" + ll.call(FZ).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Jl = iZ ? D.Buffer : void 0, Cl = D.Symbol, Wm = D.Uint8Array, Fl = kZ.propertyIsEnumerable, gm = IZ.splice, PZ = Cl ? Cl.toStringTag : void 0, vl = Object.getOwnPropertySymbols, Xm = Jl ? Jl.isBuffer : void 0, hl = (B = Object.keys, cZ = Object, function(Y) {
    return B(cZ(Y));
  }), tl = Il(D, "DataView"), ml = Il(D, "Map"), nl = Il(D, "Promise"), Nl = Il(D, "Set"), Dl = Il(D, "WeakMap"), Rl = Il(Object, "create"), vm = Q(tl), tm = Q(ml), Dm = Q(nl), Qm = Q(Nl), em = Q(Dl), zl = Cl ? Cl.prototype : void 0, kl = zl ? zl.valueOf : void 0;
  function zZ(Y) {
    var J = -1, n = Y == null ? 0 : Y.length;
    for (this.clear(); ++J < n; ) {
      var T = Y[J];
      this.set(T[0], T[1]);
    }
  }
  function aZ(Y) {
    var J = -1, n = Y == null ? 0 : Y.length;
    for (this.clear(); ++J < n; ) {
      var T = Y[J];
      this.set(T[0], T[1]);
    }
  }
  function gZ(Y) {
    var J = -1, n = Y == null ? 0 : Y.length;
    for (this.clear(); ++J < n; ) {
      var T = Y[J];
      this.set(T[0], T[1]);
    }
  }
  function pl(Y) {
    var J = -1, n = Y == null ? 0 : Y.length;
    for (this.__data__ = new gZ(); ++J < n; )
      this.add(Y[J]);
  }
  function QZ(Y) {
    var J = this.__data__ = new aZ(Y);
    this.size = J.size;
  }
  function dm(Y, J) {
    var n = r(Y), T = !n && bZ(Y), yZ = !n && !T && A(Y), _ = !n && !T && !yZ && AZ(Y), uZ = n || T || yZ || _, hZ = uZ ? function(RZ, eZ) {
      for (var fZ = -1, nZ = Array(RZ); ++fZ < RZ; )
        nZ[fZ] = eZ(fZ);
      return nZ;
    }(Y.length, String) : [], vZ = hZ.length;
    for (var NZ in Y)
      !J && !FZ.call(Y, NZ) || uZ && (NZ == "length" || yZ && (NZ == "offset" || NZ == "parent") || _ && (NZ == "buffer" || NZ == "byteLength" || NZ == "byteOffset") || x(NZ, vZ)) || hZ.push(NZ);
    return hZ;
  }
  function al(Y, J) {
    for (var n = Y.length; n--; )
      if (ZZ(Y[n][0], J))
        return n;
    return -1;
  }
  function cl(Y) {
    return Y == null ? Y === void 0 ? w : C : PZ && PZ in Object(Y) ? function(J) {
      var n = FZ.call(J, PZ), T = J[PZ];
      try {
        J[PZ] = void 0;
        var yZ = !0;
      } catch {
      }
      var _ = gl.call(J);
      return yZ && (n ? J[PZ] = T : delete J[PZ]), _;
    }(Y) : function(J) {
      return gl.call(J);
    }(Y);
  }
  function Ql(Y) {
    return sZ(Y) && cl(Y) == b;
  }
  function ym(Y, J, n, T, yZ) {
    return Y === J || (Y == null || J == null || !sZ(Y) && !sZ(J) ? Y != Y && J != J : function(_, uZ, hZ, vZ, NZ, RZ) {
      var eZ = r(_), fZ = r(uZ), nZ = eZ ? W : M(_), rZ = fZ ? W : M(uZ), xl = (nZ = nZ == b ? s : nZ) == s, um = (rZ = rZ == b ? s : rZ) == s, Ul = nZ == rZ;
      if (Ul && A(_)) {
        if (!A(uZ))
          return !1;
        eZ = !0, xl = !1;
      }
      if (Ul && !xl)
        return RZ || (RZ = new QZ()), eZ || AZ(_) ? Lm(_, uZ, hZ, vZ, NZ, RZ) : function(dZ, WZ, Jm, il, Om, KZ, qZ) {
          switch (Jm) {
            case U:
              if (dZ.byteLength != WZ.byteLength || dZ.byteOffset != WZ.byteOffset)
                return !1;
              dZ = dZ.buffer, WZ = WZ.buffer;
            case j:
              return !(dZ.byteLength != WZ.byteLength || !KZ(new Wm(dZ), new Wm(WZ)));
            case d:
            case y:
            case S:
              return ZZ(+dZ, +WZ);
            case L:
              return dZ.name == WZ.name && dZ.message == WZ.message;
            case K:
            case H:
              return dZ == WZ + "";
            case N:
              var bl = q;
            case t:
              var Bl = il & c;
              if (bl || (bl = JZ), dZ.size != WZ.size && !Bl)
                return !1;
              var hm = qZ.get(dZ);
              if (hm)
                return hm == WZ;
              il |= I, qZ.set(dZ, WZ);
              var Em = Lm(bl(dZ), bl(WZ), il, Om, KZ, qZ);
              return qZ.delete(dZ), Em;
            case p:
              if (kl)
                return kl.call(dZ) == kl.call(WZ);
          }
          return !1;
        }(_, uZ, nZ, hZ, vZ, NZ, RZ);
      if (!(hZ & c)) {
        var el = xl && FZ.call(_, "__wrapped__"), jc = um && FZ.call(uZ, "__wrapped__");
        if (el || jc) {
          var di = el ? _.value() : _, yi = jc ? uZ.value() : uZ;
          return RZ || (RZ = new QZ()), NZ(di, yi, hZ, vZ, RZ);
        }
      }
      return Ul ? (RZ || (RZ = new QZ()), function(dZ, WZ, Jm, il, Om, KZ) {
        var qZ = Jm & c, bl = Ym(dZ), Bl = bl.length, hm = Ym(WZ), Em = hm.length;
        if (Bl != Em && !qZ)
          return !1;
        for (var Nm = Bl; Nm--; ) {
          var Sl = bl[Nm];
          if (!(qZ ? Sl in WZ : FZ.call(WZ, Sl)))
            return !1;
        }
        var Kc = KZ.get(dZ);
        if (Kc && KZ.get(WZ))
          return Kc == WZ;
        var Rm = !0;
        KZ.set(dZ, WZ), KZ.set(WZ, dZ);
        for (var Pm = qZ; ++Nm < Bl; ) {
          var pm = dZ[Sl = bl[Nm]], Sm = WZ[Sl];
          if (il)
            var oc = qZ ? il(Sm, pm, Sl, WZ, dZ, KZ) : il(pm, Sm, Sl, dZ, WZ, KZ);
          if (!(oc === void 0 ? pm === Sm || Om(pm, Sm, Jm, il, KZ) : oc)) {
            Rm = !1;
            break;
          }
          Pm || (Pm = Sl == "constructor");
        }
        if (Rm && !Pm) {
          var sm = dZ.constructor, Mm = WZ.constructor;
          sm == Mm || !("constructor" in dZ) || !("constructor" in WZ) || typeof sm == "function" && sm instanceof sm && typeof Mm == "function" && Mm instanceof Mm || (Rm = !1);
        }
        return KZ.delete(dZ), KZ.delete(WZ), Rm;
      }(_, uZ, hZ, vZ, NZ, RZ)) : !1;
    }(Y, J, n, T, ym, yZ));
  }
  function Bm(Y) {
    return !(!YZ(Y) || function(J) {
      return !!ul && ul in J;
    }(Y)) && (SZ(Y) ? bm : g).test(Q(Y));
  }
  function Gm(Y) {
    if (n = (J = Y) && J.constructor, T = typeof n == "function" && n.prototype || kZ, J !== T)
      return hl(Y);
    var J, n, T, yZ = [];
    for (var _ in Object(Y))
      FZ.call(Y, _) && _ != "constructor" && yZ.push(_);
    return yZ;
  }
  function Lm(Y, J, n, T, yZ, _) {
    var uZ = n & c, hZ = Y.length, vZ = J.length;
    if (hZ != vZ && !(uZ && vZ > hZ))
      return !1;
    var NZ = _.get(Y);
    if (NZ && _.get(J))
      return NZ == J;
    var RZ = -1, eZ = !0, fZ = n & I ? new pl() : void 0;
    for (_.set(Y, J), _.set(J, Y); ++RZ < hZ; ) {
      var nZ = Y[RZ], rZ = J[RZ];
      if (T)
        var xl = uZ ? T(rZ, nZ, RZ, J, Y, _) : T(nZ, rZ, RZ, Y, J, _);
      if (xl !== void 0) {
        if (xl)
          continue;
        eZ = !1;
        break;
      }
      if (fZ) {
        if (!XZ(J, function(um, Ul) {
          if (el = Ul, !fZ.has(el) && (nZ === um || yZ(nZ, um, n, T, _)))
            return fZ.push(Ul);
          var el;
        })) {
          eZ = !1;
          break;
        }
      } else if (nZ !== rZ && !yZ(nZ, rZ, n, T, _)) {
        eZ = !1;
        break;
      }
    }
    return _.delete(Y), _.delete(J), eZ;
  }
  function Ym(Y) {
    return function(J, n, T) {
      var yZ = n(J);
      return r(J) ? yZ : function(_, uZ) {
        for (var hZ = -1, vZ = uZ.length, NZ = _.length; ++hZ < vZ; )
          _[NZ + hZ] = uZ[hZ];
        return _;
      }(yZ, T(J));
    }(Y, Vm, G);
  }
  function wl(Y, J) {
    var n, T, yZ = Y.__data__;
    return ((T = typeof (n = J)) == "string" || T == "number" || T == "symbol" || T == "boolean" ? n !== "__proto__" : n === null) ? yZ[typeof J == "string" ? "string" : "hash"] : yZ.map;
  }
  function Il(Y, J) {
    var n = function(T, yZ) {
      return T == null ? void 0 : T[yZ];
    }(Y, J);
    return Bm(n) ? n : void 0;
  }
  zZ.prototype.clear = function() {
    this.__data__ = Rl ? Rl(null) : {}, this.size = 0;
  }, zZ.prototype.delete = function(Y) {
    var J = this.has(Y) && delete this.__data__[Y];
    return this.size -= J ? 1 : 0, J;
  }, zZ.prototype.get = function(Y) {
    var J = this.__data__;
    if (Rl) {
      var n = J[Y];
      return n === m ? void 0 : n;
    }
    return FZ.call(J, Y) ? J[Y] : void 0;
  }, zZ.prototype.has = function(Y) {
    var J = this.__data__;
    return Rl ? J[Y] !== void 0 : FZ.call(J, Y);
  }, zZ.prototype.set = function(Y, J) {
    var n = this.__data__;
    return this.size += this.has(Y) ? 0 : 1, n[Y] = Rl && J === void 0 ? m : J, this;
  }, aZ.prototype.clear = function() {
    this.__data__ = [], this.size = 0;
  }, aZ.prototype.delete = function(Y) {
    var J = this.__data__, n = al(J, Y);
    return !(n < 0) && (n == J.length - 1 ? J.pop() : gm.call(J, n, 1), --this.size, !0);
  }, aZ.prototype.get = function(Y) {
    var J = this.__data__, n = al(J, Y);
    return n < 0 ? void 0 : J[n][1];
  }, aZ.prototype.has = function(Y) {
    return al(this.__data__, Y) > -1;
  }, aZ.prototype.set = function(Y, J) {
    var n = this.__data__, T = al(n, Y);
    return T < 0 ? (++this.size, n.push([Y, J])) : n[T][1] = J, this;
  }, gZ.prototype.clear = function() {
    this.size = 0, this.__data__ = {
      hash: new zZ(),
      map: new (ml || aZ)(),
      string: new zZ()
    };
  }, gZ.prototype.delete = function(Y) {
    var J = wl(this, Y).delete(Y);
    return this.size -= J ? 1 : 0, J;
  }, gZ.prototype.get = function(Y) {
    return wl(this, Y).get(Y);
  }, gZ.prototype.has = function(Y) {
    return wl(this, Y).has(Y);
  }, gZ.prototype.set = function(Y, J) {
    var n = wl(this, Y), T = n.size;
    return n.set(Y, J), this.size += n.size == T ? 0 : 1, this;
  }, pl.prototype.add = pl.prototype.push = function(Y) {
    return this.__data__.set(Y, m), this;
  }, pl.prototype.has = function(Y) {
    return this.__data__.has(Y);
  }, QZ.prototype.clear = function() {
    this.__data__ = new aZ(), this.size = 0;
  }, QZ.prototype.delete = function(Y) {
    var J = this.__data__, n = J.delete(Y);
    return this.size = J.size, n;
  }, QZ.prototype.get = function(Y) {
    return this.__data__.get(Y);
  }, QZ.prototype.has = function(Y) {
    return this.__data__.has(Y);
  }, QZ.prototype.set = function(Y, J) {
    var n = this.__data__;
    if (n instanceof aZ) {
      var T = n.__data__;
      if (!ml || T.length < 199)
        return T.push([Y, J]), this.size = ++n.size, this;
      n = this.__data__ = new gZ(T);
    }
    return n.set(Y, J), this.size = n.size, this;
  };
  var G = vl ? function(Y) {
    return Y == null ? [] : (Y = Object(Y), function(J, n) {
      for (var T = -1, yZ = J == null ? 0 : J.length, _ = 0, uZ = []; ++T < yZ; ) {
        var hZ = J[T];
        n(hZ, T, J) && (uZ[_++] = hZ);
      }
      return uZ;
    }(vl(Y), function(J) {
      return Fl.call(Y, J);
    }));
  } : function() {
    return [];
  }, M = cl;
  function x(Y, J) {
    return !!(J = J ?? i) && (typeof Y == "number" || E.test(Y)) && Y > -1 && Y % 1 == 0 && Y < J;
  }
  function Q(Y) {
    if (Y != null) {
      try {
        return ll.call(Y);
      } catch {
      }
      try {
        return Y + "";
      } catch {
      }
    }
    return "";
  }
  function ZZ(Y, J) {
    return Y === J || Y != Y && J != J;
  }
  (tl && M(new tl(new ArrayBuffer(1))) != U || ml && M(new ml()) != N || nl && M(nl.resolve()) != R || Nl && M(new Nl()) != t || Dl && M(new Dl()) != F) && (M = function(Y) {
    var J = cl(Y), n = J == s ? Y.constructor : void 0, T = n ? Q(n) : "";
    if (T)
      switch (T) {
        case vm:
          return U;
        case tm:
          return N;
        case Dm:
          return R;
        case Qm:
          return t;
        case em:
          return F;
      }
    return J;
  });
  var bZ = Ql(function() {
    return arguments;
  }()) ? Ql : function(Y) {
    return sZ(Y) && FZ.call(Y, "callee") && !Fl.call(Y, "callee");
  }, r = Array.isArray, A = Xm || function() {
    return !1;
  };
  function SZ(Y) {
    if (!YZ(Y))
      return !1;
    var J = cl(Y);
    return J == V || J == u || J == X || J == h;
  }
  function LZ(Y) {
    return typeof Y == "number" && Y > -1 && Y % 1 == 0 && Y <= i;
  }
  function YZ(Y) {
    var J = typeof Y;
    return Y != null && (J == "object" || J == "function");
  }
  function sZ(Y) {
    return Y != null && typeof Y == "object";
  }
  var AZ = P ? function(Y) {
    return function(J) {
      return Y(J);
    };
  }(P) : function(Y) {
    return sZ(Y) && LZ(Y.length) && !!k[cl(Y)];
  };
  function Vm(Y) {
    return (J = Y) != null && LZ(J.length) && !SZ(J) ? dm(Y) : Gm(Y);
    var J;
  }
  Z.exports = function(Y, J) {
    return ym(Y, J);
  };
})(Mc, Mc.exports);
var oX = im(Mc.exports);
function XI(Z, l, m) {
  return Z[l] ? Z[l][0] ? Z[l][0][m] : Z[l][m] : l === "contentBoxSize" ? Z.contentRect[m === "inlineSize" ? "width" : "height"] : void 0;
}
function HX(Z) {
  Z === void 0 && (Z = {});
  var l = Z.onResize, m = f(void 0);
  m.current = l;
  var c = Z.round || Math.round, I = f(), i = VZ({
    width: void 0,
    height: void 0
  }), b = i[0], W = i[1], X = f(!1);
  lZ(function() {
    return X.current = !1, function() {
      X.current = !0;
    };
  }, []);
  var d = f({
    width: void 0,
    height: void 0
  }), y = function(L, V) {
    var u = f(null), N = f(null);
    N.current = V;
    var S = f(null);
    lZ(function() {
      C();
    });
    var C = sl(function() {
      var s = S.current, R = N.current, h = s || (R ? R instanceof Element ? R : R.current : null);
      u.current && u.current.element === h && u.current.subscriber === L || (u.current && u.current.cleanup && u.current.cleanup(), u.current = {
        element: h,
        subscriber: L,
        cleanup: h ? L(h) : void 0
      });
    }, [L]);
    return lZ(function() {
      return function() {
        u.current && u.current.cleanup && (u.current.cleanup(), u.current = null);
      };
    }, []), sl(function(s) {
      S.current = s, C();
    }, [C]);
  }(sl(function(L) {
    return I.current && I.current.box === Z.box && I.current.round === c || (I.current = {
      box: Z.box,
      round: c,
      instance: new ResizeObserver(function(V) {
        var u = V[0], N = Z.box === "border-box" ? "borderBoxSize" : Z.box === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize", S = XI(u, N, "inlineSize"), C = XI(u, N, "blockSize"), s = S ? c(S) : void 0, R = C ? c(C) : void 0;
        if (d.current.width !== s || d.current.height !== R) {
          var h = {
            width: s,
            height: R
          };
          d.current.width = s, d.current.height = R, m.current ? m.current(h) : X.current || W(h);
        }
      })
    }), I.current.instance.observe(L, {
      box: Z.box
    }), function() {
      I.current && I.current.instance.unobserve(L);
    };
  }, [Z.box, c]), Z.ref);
  return RI(function() {
    return {
      ref: y,
      width: b.width,
      height: b.height
    };
  }, [y, b.width, b.height]);
}
var TX = "allotment-module_splitView__L-yRc", gX = "allotment-module_sashContainer__fzwJF", vX = "allotment-module_splitViewContainer__rQnVa", Zi = "allotment-module_splitViewView__MGZ6O", tX = "allotment-module_vertical__WSwwa", DX = "allotment-module_horizontal__7doS8", QX = "allotment-module_separatorBorder__x-rDS";
let ql, li = !1, mi = !1;
typeof navigator == "object" && (ql = navigator.userAgent, mi = ql.indexOf("Macintosh") >= 0, li = (ql.indexOf("Macintosh") >= 0 || ql.indexOf("iPad") >= 0 || ql.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
const ci = li, eX = mi, ic = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? Yi : lZ;
class BX {
  constructor() {
    this._size = void 0;
  }
  getSize() {
    return this._size;
  }
  setSize(l) {
    this._size = l;
  }
}
function km(Z, l) {
  const m = Z.length, c = m - l.length;
  return c >= 0 && Z.slice(c, m) === l;
}
var Ii = {
  exports: {}
};
(function(Z) {
  var l = Object.prototype.hasOwnProperty, m = "~";
  function c() {
  }
  function I(X, d, y) {
    this.fn = X, this.context = d, this.once = y || !1;
  }
  function i(X, d, y, L, V) {
    if (typeof y != "function")
      throw new TypeError("The listener must be a function");
    var u = new I(y, L || X, V), N = m ? m + d : d;
    return X._events[N] ? X._events[N].fn ? X._events[N] = [X._events[N], u] : X._events[N].push(u) : (X._events[N] = u, X._eventsCount++), X;
  }
  function b(X, d) {
    --X._eventsCount == 0 ? X._events = new c() : delete X._events[d];
  }
  function W() {
    this._events = new c(), this._eventsCount = 0;
  }
  Object.create && (c.prototype = /* @__PURE__ */ Object.create(null), new c().__proto__ || (m = !1)), W.prototype.eventNames = function() {
    var X, d, y = [];
    if (this._eventsCount === 0)
      return y;
    for (d in X = this._events)
      l.call(X, d) && y.push(m ? d.slice(1) : d);
    return Object.getOwnPropertySymbols ? y.concat(Object.getOwnPropertySymbols(X)) : y;
  }, W.prototype.listeners = function(X) {
    var d = m ? m + X : X, y = this._events[d];
    if (!y)
      return [];
    if (y.fn)
      return [y.fn];
    for (var L = 0, V = y.length, u = new Array(V); L < V; L++)
      u[L] = y[L].fn;
    return u;
  }, W.prototype.listenerCount = function(X) {
    var d = m ? m + X : X, y = this._events[d];
    return y ? y.fn ? 1 : y.length : 0;
  }, W.prototype.emit = function(X, d, y, L, V, u) {
    var N = m ? m + X : X;
    if (!this._events[N])
      return !1;
    var S, C, s = this._events[N], R = arguments.length;
    if (s.fn) {
      switch (s.once && this.removeListener(X, s.fn, void 0, !0), R) {
        case 1:
          return s.fn.call(s.context), !0;
        case 2:
          return s.fn.call(s.context, d), !0;
        case 3:
          return s.fn.call(s.context, d, y), !0;
        case 4:
          return s.fn.call(s.context, d, y, L), !0;
        case 5:
          return s.fn.call(s.context, d, y, L, V), !0;
        case 6:
          return s.fn.call(s.context, d, y, L, V, u), !0;
      }
      for (C = 1, S = new Array(R - 1); C < R; C++)
        S[C - 1] = arguments[C];
      s.fn.apply(s.context, S);
    } else {
      var h, K = s.length;
      for (C = 0; C < K; C++)
        switch (s[C].once && this.removeListener(X, s[C].fn, void 0, !0), R) {
          case 1:
            s[C].fn.call(s[C].context);
            break;
          case 2:
            s[C].fn.call(s[C].context, d);
            break;
          case 3:
            s[C].fn.call(s[C].context, d, y);
            break;
          case 4:
            s[C].fn.call(s[C].context, d, y, L);
            break;
          default:
            if (!S)
              for (h = 1, S = new Array(R - 1); h < R; h++)
                S[h - 1] = arguments[h];
            s[C].fn.apply(s[C].context, S);
        }
    }
    return !0;
  }, W.prototype.on = function(X, d, y) {
    return i(this, X, d, y, !1);
  }, W.prototype.once = function(X, d, y) {
    return i(this, X, d, y, !0);
  }, W.prototype.removeListener = function(X, d, y, L) {
    var V = m ? m + X : X;
    if (!this._events[V])
      return this;
    if (!d)
      return b(this, V), this;
    var u = this._events[V];
    if (u.fn)
      u.fn !== d || L && !u.once || y && u.context !== y || b(this, V);
    else {
      for (var N = 0, S = [], C = u.length; N < C; N++)
        (u[N].fn !== d || L && !u[N].once || y && u[N].context !== y) && S.push(u[N]);
      S.length ? this._events[V] = S.length === 1 ? S[0] : S : b(this, V);
    }
    return this;
  }, W.prototype.removeAllListeners = function(X) {
    var d;
    return X ? (d = m ? m + X : X, this._events[d] && b(this, d)) : (this._events = new c(), this._eventsCount = 0), this;
  }, W.prototype.off = W.prototype.removeListener, W.prototype.addListener = W.prototype.on, W.prefixed = m, W.EventEmitter = W, Z.exports = W;
})(Ii);
var xc = im(Ii.exports);
function dI(Z, l) {
  const m = Z.indexOf(l);
  m > -1 && (Z.splice(m, 1), Z.unshift(l));
}
function bc(Z, l) {
  const m = Z.indexOf(l);
  m > -1 && (Z.splice(m, 1), Z.push(l));
}
function oZ(Z, l, m = 1) {
  const c = Math.max(0, Math.ceil((l - Z) / m)), I = new Array(c);
  let i = -1;
  for (; ++i < c; )
    I[i] = Z + i * m;
  return I;
}
var yI = NaN, OX = "[object Symbol]", EX = /^\s+|\s+$/g, PX = /^[-+]0x[0-9a-f]+$/i, AX = /^0b[01]+$/i, fX = /^0o[0-7]+$/i, rX = parseInt, qX = typeof yl == "object" && yl && yl.Object === Object && yl, _X = typeof self == "object" && self && self.Object === Object && self, $X = qX || _X || Function("return this")(), Zd = Object.prototype.toString, ld = Math.max, md = Math.min, Wc = function() {
  return $X.Date.now();
};
function Cc(Z) {
  var l = typeof Z;
  return !!Z && (l == "object" || l == "function");
}
function GI(Z) {
  if (typeof Z == "number")
    return Z;
  if (function(c) {
    return typeof c == "symbol" || function(I) {
      return !!I && typeof I == "object";
    }(c) && Zd.call(c) == OX;
  }(Z))
    return yI;
  if (Cc(Z)) {
    var l = typeof Z.valueOf == "function" ? Z.valueOf() : Z;
    Z = Cc(l) ? l + "" : l;
  }
  if (typeof Z != "string")
    return Z === 0 ? Z : +Z;
  Z = Z.replace(EX, "");
  var m = AX.test(Z);
  return m || fX.test(Z) ? rX(Z.slice(2), m ? 2 : 8) : PX.test(Z) ? yI : +Z;
}
var cd = im(function(Z, l, m) {
  var c, I, i, b, W, X, d = 0, y = !1, L = !1, V = !0;
  if (typeof Z != "function")
    throw new TypeError("Expected a function");
  function u(R) {
    var h = c, K = I;
    return c = I = void 0, d = R, b = Z.apply(K, h);
  }
  function N(R) {
    var h = R - X;
    return X === void 0 || h >= l || h < 0 || L && R - d >= i;
  }
  function S() {
    var R = Wc();
    if (N(R))
      return C(R);
    W = setTimeout(S, function(h) {
      var K = l - (h - X);
      return L ? md(K, i - (h - d)) : K;
    }(R));
  }
  function C(R) {
    return W = void 0, V && c ? u(R) : (c = I = void 0, b);
  }
  function s() {
    var R = Wc(), h = N(R);
    if (c = arguments, I = this, X = R, h) {
      if (W === void 0)
        return function(K) {
          return d = K, W = setTimeout(S, l), y ? u(K) : b;
        }(X);
      if (L)
        return W = setTimeout(S, l), u(X);
    }
    return W === void 0 && (W = setTimeout(S, l)), b;
  }
  return l = GI(l) || 0, Cc(m) && (y = !!m.leading, i = (L = "maxWait" in m) ? ld(GI(m.maxWait) || 0, l) : i, V = "trailing" in m ? !!m.trailing : V), s.cancel = function() {
    W !== void 0 && clearTimeout(W), d = 0, c = X = I = W = void 0;
  }, s.flush = function() {
    return W === void 0 ? b : C(Wc());
  }, s;
}), Id = "sash-module_sash__K-9lB", id = "sash-module_disabled__Hm-wx", bd = "sash-module_mac__Jf6OJ", LI = "sash-module_vertical__pB-rs", Wd = "sash-module_minimum__-UKxp", Xd = "sash-module_maximum__TCWxD", YI = "sash-module_horizontal__kFbiw", Xc = "sash-module_hover__80W6I", dc = "sash-module_active__bJspD";
let TZ = function(Z) {
  return Z.Vertical = "VERTICAL", Z.Horizontal = "HORIZONTAL", Z;
}({}), xZ = function(Z) {
  return Z.Disabled = "DISABLED", Z.Minimum = "MINIMUM", Z.Maximum = "MAXIMUM", Z.Enabled = "ENABLED", Z;
}({}), ii = ci ? 20 : 8;
const bi = new xc();
class VI extends xc {
  get state() {
    return this._state;
  }
  set state(l) {
    this._state !== l && (this.el.classList.toggle(id, l === xZ.Disabled), this.el.classList.toggle("sash-disabled", l === xZ.Disabled), this.el.classList.toggle(Wd, l === xZ.Minimum), this.el.classList.toggle("sash-minimum", l === xZ.Minimum), this.el.classList.toggle(Xd, l === xZ.Maximum), this.el.classList.toggle("sash-maximum", l === xZ.Maximum), this._state = l, this.emit("enablementChange", l));
  }
  constructor(l, m, c) {
    var I;
    super(), this.el = void 0, this.layoutProvider = void 0, this.orientation = void 0, this.size = void 0, this.hoverDelay = 300, this.hoverDelayer = cd((i) => i.classList.add("sash-hover", Xc), this.hoverDelay), this._state = xZ.Enabled, this.onPointerStart = (i) => {
      const b = i.pageX, W = i.pageY, X = {
        startX: b,
        currentX: b,
        startY: W,
        currentY: W
      };
      this.el.classList.add("sash-active", dc), this.emit("start", X), this.el.setPointerCapture(i.pointerId);
      const d = (L) => {
        L.preventDefault();
        const V = {
          startX: b,
          currentX: L.pageX,
          startY: W,
          currentY: L.pageY
        };
        this.emit("change", V);
      }, y = (L) => {
        L.preventDefault(), this.el.classList.remove("sash-active", dc), this.hoverDelayer.cancel(), this.emit("end"), this.el.releasePointerCapture(L.pointerId), window.removeEventListener("pointermove", d), window.removeEventListener("pointerup", y);
      };
      window.addEventListener("pointermove", d), window.addEventListener("pointerup", y);
    }, this.onPointerDoublePress = () => {
      this.emit("reset");
    }, this.onMouseEnter = () => {
      this.el.classList.contains(dc) ? (this.hoverDelayer.cancel(), this.el.classList.add("sash-hover", Xc)) : this.hoverDelayer(this.el);
    }, this.onMouseLeave = () => {
      this.hoverDelayer.cancel(), this.el.classList.remove("sash-hover", Xc);
    }, this.el = document.createElement("div"), this.el.classList.add("sash", Id), this.el.dataset.testid = "sash", l.append(this.el), eX && this.el.classList.add("sash-mac", bd), this.el.addEventListener("pointerdown", this.onPointerStart), this.el.addEventListener("dblclick", this.onPointerDoublePress), this.el.addEventListener("mouseenter", this.onMouseEnter), this.el.addEventListener("mouseleave", this.onMouseLeave), typeof c.size == "number" ? (this.size = c.size, c.orientation === TZ.Vertical ? this.el.style.width = `${this.size}px` : this.el.style.height = `${this.size}px`) : (this.size = ii, bi.on("onDidChangeGlobalSize", (i) => {
      this.size = i, this.layout();
    })), this.layoutProvider = m, this.orientation = (I = c.orientation) != null ? I : TZ.Vertical, this.orientation === TZ.Horizontal ? (this.el.classList.add("sash-horizontal", YI), this.el.classList.remove("sash-vertical", LI)) : (this.el.classList.remove("sash-horizontal", YI), this.el.classList.add("sash-vertical", LI)), this.layout();
  }
  layout() {
    if (this.orientation === TZ.Vertical) {
      const l = this.layoutProvider;
      this.el.style.left = l.getVerticalSashLeft(this) - this.size / 2 + "px", l.getVerticalSashTop && (this.el.style.top = l.getVerticalSashTop(this) + "px"), l.getVerticalSashHeight && (this.el.style.height = l.getVerticalSashHeight(this) + "px");
    } else {
      const l = this.layoutProvider;
      this.el.style.top = l.getHorizontalSashTop(this) - this.size / 2 + "px", l.getHorizontalSashLeft && (this.el.style.left = l.getHorizontalSashLeft(this) + "px"), l.getHorizontalSashWidth && (this.el.style.width = l.getHorizontalSashWidth(this) + "px");
    }
  }
  dispose() {
    this.el.removeEventListener("pointerdown", this.onPointerStart), this.el.removeEventListener("dblclick", this.onPointerDoublePress), this.el.removeEventListener("mouseenter", this.onMouseEnter), this.el.removeEventListener("mouseleave", () => this.onMouseLeave), this.el.remove();
  }
}
let Um;
var yc;
(yc = Um || (Um = {})).Distribute = {
  type: "distribute"
}, yc.Split = function(Z) {
  return {
    type: "split",
    index: Z
  };
}, yc.Invisible = function(Z) {
  return {
    type: "invisible",
    cachedVisibleSize: Z
  };
};
let $Z = function(Z) {
  return Z.Normal = "NORMAL", Z.Low = "LOW", Z.High = "HIGH", Z;
}({});
class Wi {
  constructor(l, m, c) {
    this.container = void 0, this.view = void 0, this._size = void 0, this._cachedVisibleSize = void 0, this.container = l, this.view = m, this.container.classList.add("split-view-view", Zi), this.container.dataset.testid = "split-view-view", typeof c == "number" ? (this._size = c, this._cachedVisibleSize = void 0, l.classList.add("split-view-view-visible")) : (this._size = 0, this._cachedVisibleSize = c.cachedVisibleSize);
  }
  set size(l) {
    this._size = l;
  }
  get size() {
    return this._size;
  }
  get priority() {
    return this.view.priority;
  }
  get snap() {
    return !!this.view.snap;
  }
  get cachedVisibleSize() {
    return this._cachedVisibleSize;
  }
  get visible() {
    return this._cachedVisibleSize === void 0;
  }
  setVisible(l, m) {
    l !== this.visible && (l ? (this.size = DZ(this._cachedVisibleSize, this.viewMinimumSize, this.viewMaximumSize), this._cachedVisibleSize = void 0) : (this._cachedVisibleSize = typeof m == "number" ? m : this.size, this.size = 0), this.container.classList.toggle("split-view-view-visible", l), this.view.setVisible && this.view.setVisible(l));
  }
  get minimumSize() {
    return this.visible ? this.view.minimumSize : 0;
  }
  get viewMinimumSize() {
    return this.view.minimumSize;
  }
  get maximumSize() {
    return this.visible ? this.view.maximumSize : 0;
  }
  get viewMaximumSize() {
    return this.view.maximumSize;
  }
  set enabled(l) {
    this.container.style.pointerEvents = l ? "" : "none";
  }
  layout(l) {
    this.layoutContainer(l), this.view.layout(this.size, l);
  }
}
class dd extends Wi {
  layoutContainer(l) {
    this.container.style.left = `${l}px`, this.container.style.width = `${this.size}px`;
  }
}
class yd extends Wi {
  layoutContainer(l) {
    this.container.style.top = `${l}px`, this.container.style.height = `${this.size}px`;
  }
}
class Gd extends xc {
  get startSnappingEnabled() {
    return this._startSnappingEnabled;
  }
  set startSnappingEnabled(l) {
    this._startSnappingEnabled !== l && (this._startSnappingEnabled = l, this.updateSashEnablement());
  }
  get endSnappingEnabled() {
    return this._endSnappingEnabled;
  }
  set endSnappingEnabled(l) {
    this._endSnappingEnabled !== l && (this._endSnappingEnabled = l, this.updateSashEnablement());
  }
  constructor(l, m = {}, c, I, i) {
    var b, W;
    if (super(), this.onDidChange = void 0, this.onDidDragStart = void 0, this.onDidDragEnd = void 0, this.orientation = void 0, this.sashContainer = void 0, this.size = 0, this.contentSize = 0, this.proportions = void 0, this.viewItems = [], this.sashItems = [], this.sashDragState = void 0, this.proportionalLayout = void 0, this.getSashOrthogonalSize = void 0, this._startSnappingEnabled = !0, this._endSnappingEnabled = !0, this.onSashEnd = (X) => {
      this.emit("sashchange", X), this.saveProportions();
      for (const d of this.viewItems)
        d.enabled = !0;
    }, this.orientation = (b = m.orientation) != null ? b : TZ.Vertical, this.proportionalLayout = (W = m.proportionalLayout) != null ? W : !0, this.getSashOrthogonalSize = m.getSashOrthogonalSize, c && (this.onDidChange = c), I && (this.onDidDragStart = I), i && (this.onDidDragEnd = i), this.sashContainer = document.createElement("div"), this.sashContainer.classList.add("sash-container", gX), l.prepend(this.sashContainer), m.descriptor) {
      this.size = m.descriptor.size;
      for (const [X, d] of m.descriptor.views.entries()) {
        const y = d.size, L = d.container, V = d.view;
        this.addView(L, V, y, X, !0);
      }
      this.contentSize = this.viewItems.reduce((X, d) => X + d.size, 0), this.saveProportions();
    }
  }
  addView(l, m, c, I = this.viewItems.length, i) {
    let b;
    b = typeof c == "number" ? c : c.type === "split" ? this.getViewSize(c.index) / 2 : c.type === "invisible" ? {
      cachedVisibleSize: c.cachedVisibleSize
    } : m.minimumSize;
    const W = this.orientation === TZ.Vertical ? new yd(l, m, b) : new dd(l, m, b);
    if (this.viewItems.splice(I, 0, W), this.viewItems.length > 1) {
      const X = this.orientation === TZ.Vertical ? new VI(this.sashContainer, {
        getHorizontalSashTop: (L) => this.getSashPosition(L),
        getHorizontalSashWidth: this.getSashOrthogonalSize
      }, {
        orientation: TZ.Horizontal
      }) : new VI(this.sashContainer, {
        getVerticalSashLeft: (L) => this.getSashPosition(L),
        getVerticalSashHeight: this.getSashOrthogonalSize
      }, {
        orientation: TZ.Vertical
      }), d = this.orientation === TZ.Vertical ? (L) => ({
        sash: X,
        start: L.startY,
        current: L.currentY
      }) : (L) => ({
        sash: X,
        start: L.startX,
        current: L.currentX
      });
      X.on("start", (L) => {
        var V;
        this.emit("sashDragStart"), this.onSashStart(d(L));
        const u = this.viewItems.map((N) => N.size);
        (V = this.onDidDragStart) == null || V.call(this, u);
      }), X.on("change", (L) => this.onSashChange(d(L))), X.on("end", () => {
        var L;
        this.emit("sashDragEnd"), this.onSashEnd(this.sashItems.findIndex((u) => u.sash === X));
        const V = this.viewItems.map((u) => u.size);
        (L = this.onDidDragEnd) == null || L.call(this, V);
      }), X.on("reset", () => {
        const L = this.sashItems.findIndex((C) => C.sash === X), V = oZ(L, -1, -1), u = oZ(L + 1, this.viewItems.length), N = this.findFirstSnapIndex(V), S = this.findFirstSnapIndex(u);
        (typeof N != "number" || this.viewItems[N].visible) && (typeof S != "number" || this.viewItems[S].visible) && this.emit("sashreset", L);
      });
      const y = {
        sash: X
      };
      this.sashItems.splice(I - 1, 0, y);
    }
    i || this.relayout(), i || typeof c == "number" || c.type !== "distribute" || this.distributeViewSizes();
  }
  removeView(l, m) {
    if (l < 0 || l >= this.viewItems.length)
      throw new Error("Index out of bounds");
    const c = this.viewItems.splice(l, 1)[0].view;
    if (this.viewItems.length >= 1) {
      const I = Math.max(l - 1, 0);
      this.sashItems.splice(I, 1)[0].sash.dispose();
    }
    return this.relayout(), m && m.type === "distribute" && this.distributeViewSizes(), c;
  }
  moveView(l, m, c) {
    const I = this.getViewCachedVisibleSize(m), i = I === void 0 ? this.getViewSize(m) : Um.Invisible(I), b = this.removeView(m);
    this.addView(l, b, i, c);
  }
  getViewCachedVisibleSize(l) {
    if (l < 0 || l >= this.viewItems.length)
      throw new Error("Index out of bounds");
    return this.viewItems[l].cachedVisibleSize;
  }
  layout(l = this.size) {
    const m = Math.max(this.size, this.contentSize);
    if (this.size = l, this.proportions)
      for (let c = 0; c < this.viewItems.length; c++) {
        const I = this.viewItems[c];
        I.size = DZ(Math.round(this.proportions[c] * l), I.minimumSize, I.maximumSize);
      }
    else {
      const c = oZ(0, this.viewItems.length), I = c.filter((b) => this.viewItems[b].priority === $Z.Low), i = c.filter((b) => this.viewItems[b].priority === $Z.High);
      this.resize(this.viewItems.length - 1, l - m, void 0, I, i);
    }
    this.distributeEmptySpace(), this.layoutViews();
  }
  resizeView(l, m) {
    if (l < 0 || l >= this.viewItems.length)
      return;
    const c = oZ(0, this.viewItems.length).filter((W) => W !== l), I = [...c.filter((W) => this.viewItems[W].priority === $Z.Low), l], i = c.filter((W) => this.viewItems[W].priority === $Z.High), b = this.viewItems[l];
    m = Math.round(m), m = DZ(m, b.minimumSize, Math.min(b.maximumSize, this.size)), b.size = m, this.relayout(I, i);
  }
  resizeViews(l) {
    for (let m = 0; m < l.length; m++) {
      const c = this.viewItems[m];
      let I = l[m];
      I = Math.round(I), I = DZ(I, c.minimumSize, Math.min(c.maximumSize, this.size)), c.size = I;
    }
    this.contentSize = this.viewItems.reduce((m, c) => m + c.size, 0), this.saveProportions(), this.layout(this.size);
  }
  getViewSize(l) {
    return l < 0 || l >= this.viewItems.length ? -1 : this.viewItems[l].size;
  }
  isViewVisible(l) {
    if (l < 0 || l >= this.viewItems.length)
      throw new Error("Index out of bounds");
    return this.viewItems[l].visible;
  }
  setViewVisible(l, m) {
    if (l < 0 || l >= this.viewItems.length)
      throw new Error("Index out of bounds");
    this.viewItems[l].setVisible(m), this.distributeEmptySpace(l), this.layoutViews(), this.saveProportions();
  }
  distributeViewSizes() {
    const l = [];
    let m = 0;
    for (const W of this.viewItems)
      W.maximumSize - W.minimumSize > 0 && (l.push(W), m += W.size);
    const c = Math.floor(m / l.length);
    for (const W of l)
      W.size = DZ(c, W.minimumSize, W.maximumSize);
    const I = oZ(0, this.viewItems.length), i = I.filter((W) => this.viewItems[W].priority === $Z.Low), b = I.filter((W) => this.viewItems[W].priority === $Z.High);
    this.relayout(i, b);
  }
  dispose() {
    this.sashItems.forEach((l) => l.sash.dispose()), this.sashItems = [], this.sashContainer.remove();
  }
  relayout(l, m) {
    const c = this.viewItems.reduce((I, i) => I + i.size, 0);
    this.resize(this.viewItems.length - 1, this.size - c, void 0, l, m), this.distributeEmptySpace(), this.layoutViews(), this.saveProportions();
  }
  onSashStart({
    sash: l,
    start: m
  }) {
    const c = this.sashItems.findIndex((I) => I.sash === l);
    ((I) => {
      const i = this.viewItems.map((R) => R.size);
      let b, W, X = Number.NEGATIVE_INFINITY, d = Number.POSITIVE_INFINITY;
      const y = oZ(c, -1, -1), L = oZ(c + 1, this.viewItems.length), V = y.reduce((R, h) => R + (this.viewItems[h].minimumSize - i[h]), 0), u = y.reduce((R, h) => R + (this.viewItems[h].viewMaximumSize - i[h]), 0), N = L.length === 0 ? Number.POSITIVE_INFINITY : L.reduce((R, h) => R + (i[h] - this.viewItems[h].minimumSize), 0), S = L.length === 0 ? Number.NEGATIVE_INFINITY : L.reduce((R, h) => R + (i[h] - this.viewItems[h].viewMaximumSize), 0);
      X = Math.max(V, S), d = Math.min(N, u);
      const C = this.findFirstSnapIndex(y), s = this.findFirstSnapIndex(L);
      if (typeof C == "number") {
        const R = this.viewItems[C], h = Math.floor(R.viewMinimumSize / 2);
        b = {
          index: C,
          limitDelta: R.visible ? X - h : X + h,
          size: R.size
        };
      }
      if (typeof s == "number") {
        const R = this.viewItems[s], h = Math.floor(R.viewMinimumSize / 2);
        W = {
          index: s,
          limitDelta: R.visible ? d + h : d - h,
          size: R.size
        };
      }
      this.sashDragState = {
        start: I,
        current: I,
        index: c,
        sizes: i,
        minDelta: X,
        maxDelta: d,
        snapBefore: b,
        snapAfter: W
      };
    })(m);
  }
  onSashChange({
    current: l
  }) {
    const {
      index: m,
      start: c,
      sizes: I,
      minDelta: i,
      maxDelta: b,
      snapBefore: W,
      snapAfter: X
    } = this.sashDragState;
    this.sashDragState.current = l;
    const d = l - c;
    this.resize(m, d, I, void 0, void 0, i, b, W, X), this.distributeEmptySpace(), this.layoutViews();
  }
  getSashPosition(l) {
    let m = 0;
    for (let c = 0; c < this.sashItems.length; c++)
      if (m += this.viewItems[c].size, this.sashItems[c].sash === l)
        return m;
    return 0;
  }
  resize(l, m, c = this.viewItems.map((y) => y.size), I, i, b = Number.NEGATIVE_INFINITY, W = Number.POSITIVE_INFINITY, X, d) {
    if (l < 0 || l >= this.viewItems.length)
      return 0;
    const y = oZ(l, -1, -1), L = oZ(l + 1, this.viewItems.length);
    if (i)
      for (const p of i)
        dI(y, p), dI(L, p);
    if (I)
      for (const p of I)
        bc(y, p), bc(L, p);
    const V = y.map((p) => this.viewItems[p]), u = y.map((p) => c[p]), N = L.map((p) => this.viewItems[p]), S = L.map((p) => c[p]), C = y.reduce((p, w) => p + (this.viewItems[w].minimumSize - c[w]), 0), s = y.reduce((p, w) => p + (this.viewItems[w].maximumSize - c[w]), 0), R = L.length === 0 ? Number.POSITIVE_INFINITY : L.reduce((p, w) => p + (c[w] - this.viewItems[w].minimumSize), 0), h = L.length === 0 ? Number.NEGATIVE_INFINITY : L.reduce((p, w) => p + (c[w] - this.viewItems[w].maximumSize), 0), K = Math.max(C, h, b), t = Math.min(R, s, W);
    let H = !1;
    if (X) {
      const p = this.viewItems[X.index], w = m >= X.limitDelta;
      H = w !== p.visible, p.setVisible(w, X.size);
    }
    if (!H && d) {
      const p = this.viewItems[d.index], w = m < d.limitDelta;
      H = w !== p.visible, p.setVisible(w, d.size);
    }
    if (H)
      return this.resize(l, m, c, I, i, b, W);
    for (let p = 0, w = m = DZ(m, K, t); p < V.length; p++) {
      const F = V[p], j = DZ(u[p] + w, F.minimumSize, F.maximumSize);
      w -= j - u[p], F.size = j;
    }
    for (let p = 0, w = m; p < N.length; p++) {
      const F = N[p], j = DZ(S[p] - w, F.minimumSize, F.maximumSize);
      w += j - S[p], F.size = j;
    }
    return m;
  }
  distributeEmptySpace(l) {
    const m = this.viewItems.reduce((i, b) => i + b.size, 0);
    let c = this.size - m;
    const I = oZ(this.viewItems.length - 1, -1, -1);
    typeof l == "number" && bc(I, l);
    for (let i = 0; c !== 0 && i < I.length; i++) {
      const b = this.viewItems[I[i]], W = DZ(b.size + c, b.minimumSize, b.maximumSize);
      c -= W - b.size, b.size = W;
    }
  }
  layoutViews() {
    var l;
    this.contentSize = this.viewItems.reduce((c, I) => c + I.size, 0);
    let m = 0;
    for (const c of this.viewItems)
      c.layout(m), m += c.size;
    (l = this.onDidChange) != null && l.call(this, this.viewItems.map((c) => c.size)), this.sashItems.forEach((c) => c.sash.layout()), this.updateSashEnablement();
  }
  saveProportions() {
    this.proportionalLayout && this.contentSize > 0 && (this.proportions = this.viewItems.map((l) => l.size / this.contentSize));
  }
  updateSashEnablement() {
    let l = !1;
    const m = this.viewItems.map((X) => l = X.size - X.minimumSize > 0 || l);
    l = !1;
    const c = this.viewItems.map((X) => l = X.maximumSize - X.size > 0 || l), I = [...this.viewItems].reverse();
    l = !1;
    const i = I.map((X) => l = X.size - X.minimumSize > 0 || l).reverse();
    l = !1;
    const b = I.map((X) => l = X.maximumSize - X.size > 0 || l).reverse();
    let W = 0;
    for (let X = 0; X < this.sashItems.length; X++) {
      const {
        sash: d
      } = this.sashItems[X];
      W += this.viewItems[X].size;
      const y = !(m[X] && b[X + 1]), L = !(c[X] && i[X + 1]);
      if (y && L) {
        const V = oZ(X, -1, -1), u = oZ(X + 1, this.viewItems.length), N = this.findFirstSnapIndex(V), S = this.findFirstSnapIndex(u), C = typeof N == "number" && !this.viewItems[N].visible, s = typeof S == "number" && !this.viewItems[S].visible;
        C && i[X] && (W > 0 || this.startSnappingEnabled) ? d.state = xZ.Minimum : s && m[X] && (W < this.contentSize || this.endSnappingEnabled) ? d.state = xZ.Maximum : d.state = xZ.Disabled;
      } else
        d.state = y && !L ? xZ.Minimum : !y && L ? xZ.Maximum : xZ.Enabled;
    }
  }
  findFirstSnapIndex(l) {
    for (const m of l) {
      const c = this.viewItems[m];
      if (c.visible && c.snap)
        return m;
    }
    for (const m of l) {
      const c = this.viewItems[m];
      if (c.visible && c.maximumSize - c.minimumSize > 0)
        return;
      if (!c.visible && c.snap)
        return m;
    }
  }
}
class jl {
  constructor(l) {
    this.size = void 0, this.size = l;
  }
  getPreferredSize() {
    return this.size;
  }
}
class uI {
  constructor(l, m) {
    this.proportion = void 0, this.layoutService = void 0, this.proportion = l, this.layoutService = m;
  }
  getPreferredSize() {
    return this.proportion * this.layoutService.getSize();
  }
}
class am {
  getPreferredSize() {
  }
}
class JI {
  get preferredSize() {
    return this.layoutStrategy.getPreferredSize();
  }
  set preferredSize(l) {
    if (typeof l == "number")
      this.layoutStrategy = new jl(l);
    else if (typeof l == "string") {
      const m = l.trim();
      if (km(m, "%")) {
        const c = Number(m.slice(0, -1)) / 100;
        this.layoutStrategy = new uI(c, this.layoutService);
      } else if (km(m, "px")) {
        const c = Number(m.slice(0, -2)) / 100;
        this.layoutStrategy = new jl(c);
      } else if (typeof Number.parseFloat(m) == "number") {
        const c = Number.parseFloat(m);
        this.layoutStrategy = new jl(c);
      } else
        this.layoutStrategy = new am();
    } else
      this.layoutStrategy = new am();
  }
  constructor(l, m) {
    var c;
    if (this.minimumSize = 0, this.maximumSize = Number.POSITIVE_INFINITY, this.element = void 0, this.priority = void 0, this.snap = void 0, this.layoutService = void 0, this.layoutStrategy = void 0, this.layoutService = l, this.element = m.element, this.minimumSize = typeof m.minimumSize == "number" ? m.minimumSize : 30, this.maximumSize = typeof m.maximumSize == "number" ? m.maximumSize : Number.POSITIVE_INFINITY, typeof m.preferredSize == "number")
      this.layoutStrategy = new jl(m.preferredSize);
    else if (typeof m.preferredSize == "string") {
      const I = m.preferredSize.trim();
      if (km(I, "%")) {
        const i = Number(I.slice(0, -1)) / 100;
        this.layoutStrategy = new uI(i, this.layoutService);
      } else if (km(I, "px")) {
        const i = Number(I.slice(0, -2));
        this.layoutStrategy = new jl(i);
      } else if (typeof Number.parseFloat(I) == "number") {
        const i = Number.parseFloat(I);
        this.layoutStrategy = new jl(i);
      } else
        this.layoutStrategy = new am();
    } else
      this.layoutStrategy = new am();
    this.priority = (c = m.priority) != null ? c : $Z.Normal, this.snap = typeof m.snap == "boolean" && m.snap;
  }
  layout(l) {
  }
}
function hI(Z) {
  return Z.minSize !== void 0 || Z.maxSize !== void 0 || Z.preferredSize !== void 0 || Z.priority !== void 0 || Z.visible !== void 0;
}
const Uc = NI(({
  className: Z,
  children: l
}, m) => MZ.createElement("div", {
  ref: m,
  className: sc("split-view-view", Zi, Z)
}, l));
Uc.displayName = "Allotment.Pane";
const Xi = NI(({
  children: Z,
  className: l,
  maxSize: m = 1 / 0,
  minSize: c = 30,
  proportionalLayout: I = !0,
  separator: i = !0,
  sizes: b,
  defaultSizes: W = b,
  snap: X = !1,
  vertical: d = !1,
  onChange: y,
  onReset: L,
  onVisibleChange: V,
  onDragStart: u,
  onDragEnd: N
}, S) => {
  const C = f(null), s = f([]), R = f(/* @__PURE__ */ new Map()), h = f(null), K = f(/* @__PURE__ */ new Map()), t = f(new BX()), H = f([]), [p, w] = VZ(!1);
  ({}).NODE_ENV !== "production" && b && console.warn("Prop sizes is deprecated. Please use defaultSizes instead.");
  const F = RI(() => MZ.Children.toArray(Z).filter(MZ.isValidElement), [Z]), j = sl((U) => {
    var g, E;
    const k = (g = H.current) == null ? void 0 : g[U];
    return typeof (k == null ? void 0 : k.preferredSize) == "number" && ((E = h.current) != null && E.resizeView(U, Math.round(k.preferredSize)), !0);
  }, []);
  return Li(S, () => ({
    reset: () => {
      if (L)
        L();
      else {
        var U;
        (U = h.current) == null || U.distributeViewSizes();
        for (let g = 0; g < H.current.length; g++)
          j(g);
      }
    },
    resize: (U) => {
      var g;
      (g = h.current) == null || g.resizeViews(U);
    }
  })), ic(() => {
    let U = !0;
    W && K.current.size !== W.length && (U = !1, console.warn(`Expected ${W.length} children based on defaultSizes but found ${K.current.size}`)), U && W && (s.current = F.map((k) => k.key));
    const g = Zm({
      orientation: d ? TZ.Vertical : TZ.Horizontal,
      proportionalLayout: I
    }, U && W && {
      descriptor: {
        size: W.reduce((k, a) => k + a, 0),
        views: W.map((k, a) => {
          var o, D, mZ, $;
          const iZ = R.current.get(s.current[a]), v = new JI(t.current, Zm({
            element: document.createElement("div"),
            minimumSize: (o = iZ == null ? void 0 : iZ.minSize) != null ? o : c,
            maximumSize: (D = iZ == null ? void 0 : iZ.maxSize) != null ? D : m,
            priority: (mZ = iZ == null ? void 0 : iZ.priority) != null ? mZ : $Z.Normal
          }, (iZ == null ? void 0 : iZ.preferredSize) && {
            preferredSize: iZ == null ? void 0 : iZ.preferredSize
          }, {
            snap: ($ = iZ == null ? void 0 : iZ.snap) != null ? $ : X
          }));
          return H.current.push(v), {
            container: [...K.current.values()][a],
            size: k,
            view: v
          };
        })
      }
    });
    h.current = new Gd(C.current, g, y, u, N), h.current.on("sashDragStart", () => {
      var k;
      (k = C.current) == null || k.classList.add("split-view-sash-dragging");
    }), h.current.on("sashDragEnd", () => {
      var k;
      (k = C.current) == null || k.classList.remove("split-view-sash-dragging");
    }), h.current.on("sashchange", (k) => {
      if (V && h.current) {
        const a = F.map((o) => o.key);
        for (let o = 0; o < a.length; o++) {
          const D = R.current.get(a[o]);
          (D == null ? void 0 : D.visible) !== void 0 && D.visible !== h.current.isViewVisible(o) && V(o, h.current.isViewVisible(o));
        }
      }
    }), h.current.on("sashreset", (k) => {
      if (L)
        L();
      else {
        var a;
        if (j(k) || j(k + 1))
          return;
        (a = h.current) == null || a.distributeViewSizes();
      }
    });
    const E = h.current;
    return () => {
      E.dispose();
    };
  }, []), ic(() => {
    if (p) {
      const e = F.map((O) => O.key), P = [...s.current], XZ = e.filter((O) => !s.current.includes(O)), q = e.filter((O) => s.current.includes(O)), JZ = s.current.map((O) => !e.includes(O));
      for (let O = JZ.length - 1; O >= 0; O--) {
        var U;
        JZ[O] && ((U = h.current) != null && U.removeView(O), P.splice(O, 1), H.current.splice(O, 1));
      }
      for (const O of XZ) {
        var g, E, k, a, o;
        const B = R.current.get(O), cZ = new JI(t.current, Zm({
          element: document.createElement("div"),
          minimumSize: (g = B == null ? void 0 : B.minSize) != null ? g : c,
          maximumSize: (E = B == null ? void 0 : B.maxSize) != null ? E : m,
          priority: (k = B == null ? void 0 : B.priority) != null ? k : $Z.Normal
        }, (B == null ? void 0 : B.preferredSize) && {
          preferredSize: B == null ? void 0 : B.preferredSize
        }, {
          snap: (a = B == null ? void 0 : B.snap) != null ? a : X
        }));
        (o = h.current) != null && o.addView(K.current.get(O), cZ, Um.Distribute, e.findIndex((IZ) => IZ === O)), P.splice(e.findIndex((IZ) => IZ === O), 0, O), H.current.splice(e.findIndex((IZ) => IZ === O), 0, cZ);
      }
      for (; !oX(e, P); )
        for (const [O, B] of e.entries()) {
          const cZ = P.findIndex((IZ) => IZ === B);
          if (cZ !== O) {
            var D;
            (D = h.current) == null || D.moveView(K.current.get(B), cZ, O);
            const IZ = P[cZ];
            P.splice(cZ, 1), P.splice(O, 0, IZ);
            break;
          }
        }
      for (const O of XZ) {
        var mZ;
        const B = e.findIndex((IZ) => IZ === O), cZ = H.current[B].preferredSize;
        cZ !== void 0 && ((mZ = h.current) == null || mZ.resizeView(B, cZ));
      }
      for (const O of [...XZ, ...q]) {
        var $, iZ;
        const B = R.current.get(O), cZ = e.findIndex((IZ) => IZ === O);
        B && hI(B) && B.visible !== void 0 && (($ = h.current) == null ? void 0 : $.isViewVisible(cZ)) !== B.visible && ((iZ = h.current) == null || iZ.setViewVisible(cZ, B.visible));
      }
      for (const O of q) {
        const B = R.current.get(O), cZ = e.findIndex((IZ) => IZ === O);
        if (B && hI(B)) {
          var v;
          B.preferredSize !== void 0 && H.current[cZ].preferredSize !== B.preferredSize && (H.current[cZ].preferredSize = B.preferredSize);
          let IZ = !1;
          B.minSize !== void 0 && H.current[cZ].minimumSize !== B.minSize && (H.current[cZ].minimumSize = B.minSize, IZ = !0), B.maxSize !== void 0 && H.current[cZ].maximumSize !== B.maxSize && (H.current[cZ].maximumSize = B.maxSize, IZ = !0), IZ && ((v = h.current) == null || v.layout());
        }
      }
      (XZ.length > 0 || JZ.length > 0) && (s.current = e);
    }
  }, [F, p, m, c, X]), lZ(() => {
    h.current && (h.current.onDidChange = y);
  }, [y]), lZ(() => {
    h.current && (h.current.onDidDragStart = u);
  }, [u]), lZ(() => {
    h.current && (h.current.onDidDragEnd = N);
  }, [N]), HX({
    ref: C,
    onResize: ({
      width: U,
      height: g
    }) => {
      var E;
      U && g && ((E = h.current) != null && E.layout(d ? g : U), t.current.setSize(d ? g : U), w(!0));
    }
  }), ic(() => {
    if (!p) {
      var U;
      const {
        height: g,
        width: E
      } = C.current.getBoundingClientRect();
      (U = h.current) != null && U.layout(d ? g : E), t.current.setSize(d ? g : E), w(!0);
    }
  }, [p, d]), lZ(() => {
    ci && Ld(20);
  }, []), MZ.createElement("div", {
    ref: C,
    className: sc("split-view", d ? "split-view-vertical" : "split-view-horizontal", {
      "split-view-separator-border": i
    }, TX, d ? tX : DX, {
      [QX]: i
    }, l)
  }, MZ.createElement("div", {
    className: sc("split-view-container", vX)
  }, MZ.Children.toArray(Z).map((U) => {
    if (!MZ.isValidElement(U))
      return null;
    const g = U.key;
    return U.type.displayName === "Allotment.Pane" ? (R.current.set(g, U.props), MZ.cloneElement(U, {
      key: g,
      ref: (E) => {
        const k = U.ref;
        k && (k.current = E), E ? K.current.set(g, E) : K.current.delete(g);
      }
    })) : MZ.createElement(Uc, {
      key: g,
      ref: (E) => {
        E ? K.current.set(g, E) : K.current.delete(g);
      }
    }, U);
  })));
});
function Ld(Z) {
  const l = DZ(Z, 4, 20), m = DZ(Z, 1, 8);
  document.documentElement.style.setProperty("--sash-size", l + "px"), document.documentElement.style.setProperty("--sash-hover-size", m + "px"), function(c) {
    ii = c, bi.emit("onDidChangeGlobalSize", c);
  }(l);
}
Xi.displayName = "Allotment";
var Gc = Object.assign(Xi, {
  Pane: Uc
});
const Yd = "_active_ra95p_71", Kl = {
  "collapse-left": "_collapse-left_ra95p_1",
  "collapse-btn": "_collapse-btn_ra95p_12",
  "collapse-right": "_collapse-right_ra95p_36",
  active: Yd
};
const Vd = (Z) => {
  var L, V;
  const { defaultSizes: l = [100, 100] } = Z, m = {
    LEFT: [0, 1 / 0],
    CENTER: l,
    RIGHT: [1 / 0, 0]
  }, c = f(null), [I, i] = VZ(m.CENTER), b = JSON.stringify(I) === JSON.stringify(m.LEFT), W = JSON.stringify(I) === JSON.stringify(m.RIGHT), X = () => {
    var u;
    return JSON.stringify(I) !== JSON.stringify(m.CENTER) ? ((u = c.current) == null || u.resize(m.CENTER), i(m.CENTER), !0) : !1;
  }, d = () => {
    var u;
    X() || ((u = c.current) == null || u.resize(m.LEFT), i(m.LEFT));
  }, y = () => {
    var u;
    X() || ((u = c.current) == null || u.resize(m.RIGHT), i(m.RIGHT));
  };
  return /* @__PURE__ */ z.jsxs(Gc, { ref: c, defaultSizes: l, children: [
    /* @__PURE__ */ z.jsxs(Gc.Pane, { snap: !0, minSize: 0, children: [
      (L = Z.children) == null ? void 0 : L[0],
      /* @__PURE__ */ z.jsx("div", { className: Hl(Kl["collapse-left"], W ? Kl.active : ""), children: /* @__PURE__ */ z.jsx("div", { className: Kl["collapse-btn"], onClick: d }) })
    ] }),
    /* @__PURE__ */ z.jsxs(Gc.Pane, { snap: !0, minSize: 0, children: [
      /* @__PURE__ */ z.jsx("div", { className: Hl(Kl["collapse-right"], b ? Kl.active : ""), children: /* @__PURE__ */ z.jsx("div", { className: Kl["collapse-btn"], onClick: y }) }),
      (V = Z.children) == null ? void 0 : V[1]
    ] })
  ] });
};
const ud = {
  theme: "dark",
  editorHeight: "100vh",
  showUrlHash: !0
}, Jd = (Z) => {
  const {
    width: l = "100vw",
    height: m = "100vh",
    theme: c,
    files: I,
    importMap: i,
    showCompileOutput: b = !0,
    showHeader: W = !0,
    showFileSelector: X = !0,
    fileSelectorReadOnly: d = !1,
    border: y = !1,
    defaultSizes: L,
    onFilesChange: V
  } = Z, { filesHash: u, changeTheme: N, files: S, setFiles: C, setSelectedFileName: s } = Tl(Ml), R = Object.assign(ud, Z.options || {});
  return lZ(() => {
    if (I && !(I != null && I[Ll]))
      throw new Error(
        `Missing required property : '${Ll}' is a mandatory property for 'files'`
      );
    if (I) {
      const h = yW(I, i);
      h && C(h);
      const K = dW(I);
      K && s(K);
    }
  }, [I]), lZ(() => {
    V == null || V(u);
  }, [u]), lZ(() => {
    setTimeout(() => {
      N(c || XW());
    }, 15);
  }, [c]), lZ(() => {
    I || C(LW);
  }, []), S[Yl] ? /* @__PURE__ */ z.jsxs(
    "div",
    {
      "data-id": "react-playground",
      className: c,
      style: {
        width: l,
        height: m,
        boxSizing: "border-box",
        border: y ? "1px solid var(--border)" : ""
      },
      children: [
        W ? /* @__PURE__ */ z.jsx(uX, {}) : null,
        /* @__PURE__ */ z.jsx("div", { style: { height: `calc(100% - ${W ? 50 : 0}px)` }, children: /* @__PURE__ */ z.jsxs(Vd, { defaultSizes: L, children: [
          /* @__PURE__ */ z.jsx(
            aW,
            {
              options: R,
              showFileSelector: X,
              fileSelectorReadOnly: d
            }
          ),
          /* @__PURE__ */ z.jsx(CX, { showCompileOutput: b })
        ] }) })
      ]
    }
  ) : null;
}, Nd = (Z) => /* @__PURE__ */ z.jsx(YW, { saveOnUrl: Z.saveOnUrl, children: /* @__PURE__ */ z.jsx(Jd, { ...Z }) }), Rd = zX;
export {
  Nd as Playground,
  Rd as PlaygroundSandbox
};
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.react-playground-editor{height:100%;overflow:hidden;background-color:var(--border)}.react-playground-editor.hidden{display:none}.dark .react-playground-editor{height:100%;overflow:hidden;background-color:var(--border)}.dark .react-playground-editor .jsx-tag-angle-bracket{color:gray}.dark .react-playground-editor .jsx-text{color:#d4d4d4}.dark .react-playground-editor .jsx-tag-name{color:#569cd6}.dark .react-playground-editor .jsx-tag-attribute-key{color:#9cdcfe}.light .react-playground-editor{height:100%;overflow:hidden;background-color:var(--border)}.light .react-playground-editor .jsx-tag-angle-bracket{color:maroon}.light .react-playground-editor .jsx-text{color:#000}.light .react-playground-editor .jsx-tag-name{color:maroon}.light .react-playground-editor .jsx-tag-attribute-key{color:red}._dialog_eaiwm_1{top:15%;left:50%;min-width:200px;padding:20px 30px;font-size:14px;color:var(--base);background-color:var(--dialog);border:none;border-radius:4px;transform:translate(-50%)}._dialog-footer_eaiwm_13{display:flex;justify-content:flex-end;align-items:center;padding-top:15px}._dialog-footer_eaiwm_13 button{padding:4px 15px;font-size:14px;color:var(--base);cursor:pointer;background:transparent;border:none;border-radius:4px;outline:none}._dialog-footer_eaiwm_13 ._dialog-btn_eaiwm_29{margin-left:4px;color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.12);background:var(--primary);border-color:var(--primary);box-shadow:0 2px #0000000b}._content_eaiwm_37{display:flex;align-items:center}._content_eaiwm_37 svg{margin-right:16px;font-size:20px;color:#d89614}._tabs_16nwc_1{display:flex;width:100%;height:38px;overflow:auto hidden;color:var(--base);background-color:var(--bg);flex-shrink:0;align-items:center;border-bottom:1px solid var(--border);box-sizing:border-box}._tabs_16nwc_1::-webkit-scrollbar{height:1px}._tabs_16nwc_1::-webkit-scrollbar-track{background-color:var(--border)}._tabs_16nwc_1::-webkit-scrollbar-thumb{background-color:var(--primary)}._tabs_16nwc_1 ._tab-item_16nwc_22{display:inline-flex;padding:8px 10px 6px;font-size:13px;line-height:20px;cursor:pointer;align-items:center;border-bottom:3px solid transparent;flex-shrink:0}._tabs_16nwc_1 ._tab-item_16nwc_22._actived_16nwc_32{color:var(--primary);border-bottom:3px solid var(--primary)}._tabs_16nwc_1 ._tab-item_16nwc_22:first-child{cursor:text}._tabs_16nwc_1 ._import-map-wrapper_16nwc_39{position:sticky;top:0;right:0;padding-left:10px;margin-left:auto;background-color:var(--bg);flex-shrink:0}._tabs_16nwc_1 ._import-map-wrapper_16nwc_39 ._tab-item_16nwc_22{cursor:pointer!important}._tabs_16nwc_1 ._add_16nwc_51{display:flex;width:38px;height:100%;font-size:18px;color:var(--base);cursor:pointer;justify-content:center;align-items:center;border-bottom:3px solid transparent}._tabs_16nwc_1 ._add_16nwc_51:hover{color:var(--primary)}._tabs-item-input_16nwc_65{z-index:11;width:90px;padding:4px 0 4px 10px;font-size:13px;color:var(--base);background-color:var(--border);border:1px solid var(--border);border-radius:4px;outline:none}._input-mask_16nwc_76{position:absolute;top:0;left:0;z-index:10;width:100%;height:100%;cursor:pointer;background-color:#0006}._msg_1t9wq_1{position:absolute;right:8px;bottom:0;left:8px;z-index:10;display:flex;max-height:calc(100% - 300px);min-height:40px;margin-bottom:8px;color:var(--color);white-space:pre-wrap;background-color:var(--bg-color);border:2px solid transparent;border-radius:6px;align-items:stretch;border-color:var(--color)}._msg_1t9wq_1._error_1t9wq_19{--color: #f56c6c;--bg-color: #fef0f0}._msg_1t9wq_1._warn_1t9wq_23{--color: #e6a23c;--bg-color: #fdf6ec}pre{padding:12px 20px;margin:0;overflow:auto;white-space:break-spaces}._dismiss_1t9wq_33{position:absolute;top:2px;right:2px;display:block;width:18px;height:18px;padding:0;font-size:9px;line-height:18px;color:var(--bg-color);text-align:center;cursor:pointer;background-color:var(--color);border:none;border-radius:9px}._header_1whkb_1{position:relative;z-index:999;display:flex;height:50px;padding:0 1em;color:var(--base);background-color:var(--bg);box-sizing:border-box;align-items:center;box-shadow:0 0 4px var(--box-shadow);border-bottom:1px solid var(--border);justify-content:space-between}._header_1whkb_1 ._logo_1whkb_15{display:flex;font-size:20px;align-items:center}._header_1whkb_1 ._logo_1whkb_15 img{height:24px;margin-right:10px}._header_1whkb_1 ._links_1whkb_24{display:flex;height:100%}._header_1whkb_1 ._links_1whkb_24 button{display:flex;width:34px;height:100%;padding:0 6px;margin-left:4px;cursor:pointer;background-color:transparent;border:none;outline:none;align-items:center}._header_1whkb_1 ._links_1whkb_24 button>svg{color:#666}._header_1whkb_1 ._links_1whkb_24 button._theme_1whkb_43>svg{width:18px;height:18px}._tabs_1vzew_1{display:flex;width:100%;height:38px;color:var(--base);background-color:var(--bg);align-items:center;border-bottom:1px solid var(--border);box-sizing:border-box}._tabs_1vzew_1 ._tab-item_1vzew_11{display:inline-block;padding:8px 10px 6px;font-size:13px;line-height:20px;cursor:pointer;border-bottom:3px solid transparent;flex-shrink:0}._tabs_1vzew_1 ._tab-item_1vzew_11._actived_1vzew_20{border-bottom:3px solid var(--primary)}._collapse-left_ra95p_1{position:absolute;top:0;z-index:1;display:flex;width:20px;height:100%;align-items:center;right:0;justify-content:end}._collapse-left_ra95p_1:hover ._collapse-btn_ra95p_12{display:flex}._collapse-left_ra95p_1 ._collapse-btn_ra95p_12{position:relative;display:none;width:10px;height:48px;cursor:pointer;background-color:#e7e9e8;border-radius:4px 0 0 4px}._collapse-left_ra95p_1 ._collapse-btn_ra95p_12:after{position:absolute;top:50%;left:50%;width:0;height:0;content:"";border-top:5px solid transparent;border-bottom:5px solid transparent;transform:translate(-50%) translateY(-50%);border-right:6px solid #000}._collapse-right_ra95p_36{position:absolute;top:0;z-index:1;display:flex;width:20px;height:100%;align-items:center;left:0;justify-content:start}._collapse-right_ra95p_36:hover ._collapse-btn_ra95p_12{display:flex}._collapse-right_ra95p_36 ._collapse-btn_ra95p_12{position:relative;display:none;width:10px;height:48px;cursor:pointer;background-color:#e7e9e8;border-radius:0 4px 4px 0}._collapse-right_ra95p_36 ._collapse-btn_ra95p_12:after{position:absolute;top:50%;left:50%;width:0;height:0;content:"";border-top:5px solid transparent;border-bottom:5px solid transparent;transform:translate(-50%) translateY(-50%);border-left:6px solid #000}._collapse-left_ra95p_1._active_ra95p_71 ._collapse-btn_ra95p_12,._collapse-right_ra95p_36._active_ra95p_71 ._collapse-btn_ra95p_12{display:flex}:root{--separator-border: rgba(128, 128, 128, .35)}.allotment-module_splitView__L-yRc{height:100%;overflow:hidden;position:relative;width:100%}.allotment-module_splitView__L-yRc>.allotment-module_sashContainer__fzwJF{height:100%;pointer-events:none;position:absolute;width:100%}.allotment-module_splitView__L-yRc>.allotment-module_sashContainer__fzwJF>.allotment-module_sash__QA-2t{pointer-events:auto}.allotment-module_splitView__L-yRc>.allotment-module_splitViewContainer__rQnVa{height:100%;position:relative;white-space:nowrap;width:100%}.allotment-module_splitView__L-yRc>.allotment-module_splitViewContainer__rQnVa>.allotment-module_splitViewView__MGZ6O{overflow:hidden;position:absolute;white-space:initial}.allotment-module_splitView__L-yRc.allotment-module_vertical__WSwwa>.allotment-module_splitViewContainer__rQnVa>.allotment-module_splitViewView__MGZ6O{width:100%}.allotment-module_splitView__L-yRc.allotment-module_horizontal__7doS8>.allotment-module_splitViewContainer__rQnVa>.allotment-module_splitViewView__MGZ6O{height:100%}.allotment-module_splitView__L-yRc.allotment-module_separatorBorder__x-rDS>.allotment-module_splitViewContainer__rQnVa>.allotment-module_splitViewView__MGZ6O:not(:first-child):before{background-color:var(--separator-border);content:" ";left:0;pointer-events:none;position:absolute;top:0;z-index:5}.allotment-module_splitView__L-yRc.allotment-module_separatorBorder__x-rDS.allotment-module_vertical__WSwwa>.allotment-module_splitViewContainer__rQnVa>.allotment-module_splitViewView__MGZ6O:not(:first-child):before{height:1px;width:100%}.allotment-module_splitView__L-yRc.allotment-module_separatorBorder__x-rDS.allotment-module_horizontal__7doS8>.allotment-module_splitViewContainer__rQnVa>.allotment-module_splitViewView__MGZ6O:not(:first-child):before{height:100%;width:1px}:root{--focus-border: #007fd4;--sash-size: 8px;--sash-hover-size: 4px}.sash-module_sash__K-9lB{position:absolute;z-index:35;touch-action:none;pointer-events:auto;text-align:initial}.sash-module_sash__K-9lB.sash-module_disabled__Hm-wx{pointer-events:none}.sash-module_sash__K-9lB.sash-module_mac__Jf6OJ.sash-module_vertical__pB-rs{cursor:col-resize}.sash-module_sash__K-9lB.sash-module_vertical__pB-rs.sash-module_minimum__-UKxp{cursor:e-resize}.sash-module_sash__K-9lB.sash-module_vertical__pB-rs.sash-module_maximum__TCWxD{cursor:w-resize}.sash-module_sash__K-9lB.sash-module_mac__Jf6OJ.sash-module_horizontal__kFbiw{cursor:row-resize}.sash-module_sash__K-9lB.sash-module_horizontal__kFbiw.sash-module_minimum__-UKxp{cursor:s-resize}.sash-module_sash__K-9lB.sash-module_horizontal__kFbiw.sash-module_maximum__TCWxD{cursor:n-resize}.sash-module_sash__K-9lB.sash-module_disabled__Hm-wx{cursor:default!important;pointer-events:none!important}.sash-module_sash__K-9lB.sash-module_vertical__pB-rs{cursor:ew-resize;top:0;width:var(--sash-size);height:100%}.sash-module_sash__K-9lB.sash-module_horizontal__kFbiw{cursor:ns-resize;left:0;width:100%;height:var(--sash-size)}.sash-module_sash__K-9lB:not(.sash-module_disabled__Hm-wx)>.sash-module_orthogonal-drag-handle__Yii2-{content:" ";height:calc(var(--sash-size) * 2);width:calc(var(--sash-size) * 2);z-index:100;display:block;cursor:all-scroll;position:absolute}.sash-module_sash__K-9lB.sash-module_horizontal__kFbiw.sash-module_orthogonal-edge-north__f7Noe:not(.sash-module_disabled__Hm-wx)>.sash-module_orthogonal-drag-handle__Yii2-.sash-module_start__uZEDk,.sash-module_sash__K-9lB.sash-module_horizontal__kFbiw.sash-module_orthogonal-edge-south__6ZrFC:not(.sash-module_disabled__Hm-wx)>.sash-module_orthogonal-drag-handle__Yii2-.sash-module_end__0TP-R{cursor:nwse-resize}.sash-module_sash__K-9lB.sash-module_horizontal__kFbiw.sash-module_orthogonal-edge-north__f7Noe:not(.sash-module_disabled__Hm-wx)>.sash-module_orthogonal-drag-handle__Yii2-.sash-module_end__0TP-R,.sash-module_sash__K-9lB.sash-module_horizontal__kFbiw.sash-module_orthogonal-edge-south__6ZrFC:not(.sash-module_disabled__Hm-wx)>.sash-module_orthogonal-drag-handle__Yii2-.sash-module_start__uZEDk{cursor:nesw-resize}.sash-module_sash__K-9lB.sash-module_vertical__pB-rs>.sash-module_orthogonal-drag-handle__Yii2-.sash-module_start__uZEDk{left:calc(var(--sash-size) * -.5);top:calc(var(--sash-size) * -1)}.sash-module_sash__K-9lB.sash-module_vertical__pB-rs>.sash-module_orthogonal-drag-handle__Yii2-.sash-module_end__0TP-R{left:calc(var(--sash-size) * -.5);bottom:calc(var(--sash-size) * -1)}.sash-module_sash__K-9lB.sash-module_horizontal__kFbiw>.sash-module_orthogonal-drag-handle__Yii2-.sash-module_start__uZEDk{top:calc(var(--sash-size) * -.5);left:calc(var(--sash-size) * -1)}.sash-module_sash__K-9lB.sash-module_horizontal__kFbiw>.sash-module_orthogonal-drag-handle__Yii2-.sash-module_end__0TP-R{top:calc(var(--sash-size) * -.5);right:calc(var(--sash-size) * -1)}.sash-module_sash__K-9lB:before{content:"";pointer-events:none;position:absolute;width:100%;height:100%;transition:background-color .1s ease-out;background:transparent}.sash-module_sash__K-9lB.sash-module_vertical__pB-rs:before{width:var(--sash-hover-size);left:calc(50% - (var(--sash-hover-size) / 2))}.sash-module_sash__K-9lB.sash-module_horizontal__kFbiw:before{height:var(--sash-hover-size);top:calc(50% - (var(--sash-hover-size) / 2))}.sash-module_sash__K-9lB.sash-module_hover__80W6I:before,.sash-module_sash__K-9lB.sash-module_active__bJspD:before{background:var(--focus-border)}div[data-id=react-playground].light{--base: #444;--bg: #fff;--border: #ddd;--box-shadow: #00000054;--primary: #00d8fe;--dialog: #fff}div[data-id=react-playground].dark{--base: #ddd;--bg: #1a1a1a;--border: #383838;--box-shadow: #0000;--primary: #00d8fe;--dialog: #2a2a2a}')),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();