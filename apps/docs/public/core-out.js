(() => {
  // node_modules/@lit/reactive-element/css-tag.js
  var t = window;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var n = /* @__PURE__ */ new WeakMap();
  var o = class {
    constructor(t7, e15, n13) {
      if (this._$cssResult$ = true, n13 !== s)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t7, this.t = e15;
    }
    get styleSheet() {
      let t7 = this.o;
      const s10 = this.t;
      if (e && void 0 === t7) {
        const e15 = void 0 !== s10 && 1 === s10.length;
        e15 && (t7 = n.get(s10)), void 0 === t7 && ((this.o = t7 = new CSSStyleSheet()).replaceSync(this.cssText), e15 && n.set(s10, t7));
      }
      return t7;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t7) => new o("string" == typeof t7 ? t7 : t7 + "", void 0, s);
  var i = (t7, ...e15) => {
    const n13 = 1 === t7.length ? t7[0] : e15.reduce((e16, s10, n14) => e16 + ((t8) => {
      if (true === t8._$cssResult$)
        return t8.cssText;
      if ("number" == typeof t8)
        return t8;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t8 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s10) + t7[n14 + 1], t7[0]);
    return new o(n13, t7, s);
  };
  var S = (s10, n13) => {
    e ? s10.adoptedStyleSheets = n13.map((t7) => t7 instanceof CSSStyleSheet ? t7 : t7.styleSheet) : n13.forEach((e15) => {
      const n14 = document.createElement("style"), o15 = t.litNonce;
      void 0 !== o15 && n14.setAttribute("nonce", o15), n14.textContent = e15.cssText, s10.appendChild(n14);
    });
  };
  var c = e ? (t7) => t7 : (t7) => t7 instanceof CSSStyleSheet ? ((t8) => {
    let e15 = "";
    for (const s10 of t8.cssRules)
      e15 += s10.cssText;
    return r(e15);
  })(t7) : t7;

  // node_modules/@lit/reactive-element/reactive-element.js
  var s2;
  var e2 = window;
  var r2 = e2.trustedTypes;
  var h = r2 ? r2.emptyScript : "";
  var o2 = e2.reactiveElementPolyfillSupport;
  var n2 = { toAttribute(t7, i10) {
    switch (i10) {
      case Boolean:
        t7 = t7 ? h : null;
        break;
      case Object:
      case Array:
        t7 = null == t7 ? t7 : JSON.stringify(t7);
    }
    return t7;
  }, fromAttribute(t7, i10) {
    let s10 = t7;
    switch (i10) {
      case Boolean:
        s10 = null !== t7;
        break;
      case Number:
        s10 = null === t7 ? null : Number(t7);
        break;
      case Object:
      case Array:
        try {
          s10 = JSON.parse(t7);
        } catch (t8) {
          s10 = null;
        }
    }
    return s10;
  } };
  var a = (t7, i10) => i10 !== t7 && (i10 == i10 || t7 == t7);
  var l = { attribute: true, type: String, converter: n2, reflect: false, hasChanged: a };
  var d = "finalized";
  var u = class extends HTMLElement {
    constructor() {
      super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this._$Eu();
    }
    static addInitializer(t7) {
      var i10;
      this.finalize(), (null !== (i10 = this.h) && void 0 !== i10 ? i10 : this.h = []).push(t7);
    }
    static get observedAttributes() {
      this.finalize();
      const t7 = [];
      return this.elementProperties.forEach((i10, s10) => {
        const e15 = this._$Ep(s10, i10);
        void 0 !== e15 && (this._$Ev.set(e15, s10), t7.push(e15));
      }), t7;
    }
    static createProperty(t7, i10 = l) {
      if (i10.state && (i10.attribute = false), this.finalize(), this.elementProperties.set(t7, i10), !i10.noAccessor && !this.prototype.hasOwnProperty(t7)) {
        const s10 = "symbol" == typeof t7 ? Symbol() : "__" + t7, e15 = this.getPropertyDescriptor(t7, s10, i10);
        void 0 !== e15 && Object.defineProperty(this.prototype, t7, e15);
      }
    }
    static getPropertyDescriptor(t7, i10, s10) {
      return { get() {
        return this[i10];
      }, set(e15) {
        const r8 = this[t7];
        this[i10] = e15, this.requestUpdate(t7, r8, s10);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t7) {
      return this.elementProperties.get(t7) || l;
    }
    static finalize() {
      if (this.hasOwnProperty(d))
        return false;
      this[d] = true;
      const t7 = Object.getPrototypeOf(this);
      if (t7.finalize(), void 0 !== t7.h && (this.h = [...t7.h]), this.elementProperties = new Map(t7.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
        const t8 = this.properties, i10 = [...Object.getOwnPropertyNames(t8), ...Object.getOwnPropertySymbols(t8)];
        for (const s10 of i10)
          this.createProperty(s10, t8[s10]);
      }
      return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(i10) {
      const s10 = [];
      if (Array.isArray(i10)) {
        const e15 = new Set(i10.flat(1 / 0).reverse());
        for (const i11 of e15)
          s10.unshift(c(i11));
      } else
        void 0 !== i10 && s10.push(c(i10));
      return s10;
    }
    static _$Ep(t7, i10) {
      const s10 = i10.attribute;
      return false === s10 ? void 0 : "string" == typeof s10 ? s10 : "string" == typeof t7 ? t7.toLowerCase() : void 0;
    }
    _$Eu() {
      var t7;
      this._$E_ = new Promise((t8) => this.enableUpdating = t8), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t7 = this.constructor.h) || void 0 === t7 || t7.forEach((t8) => t8(this));
    }
    addController(t7) {
      var i10, s10;
      (null !== (i10 = this._$ES) && void 0 !== i10 ? i10 : this._$ES = []).push(t7), void 0 !== this.renderRoot && this.isConnected && (null === (s10 = t7.hostConnected) || void 0 === s10 || s10.call(t7));
    }
    removeController(t7) {
      var i10;
      null === (i10 = this._$ES) || void 0 === i10 || i10.splice(this._$ES.indexOf(t7) >>> 0, 1);
    }
    _$Eg() {
      this.constructor.elementProperties.forEach((t7, i10) => {
        this.hasOwnProperty(i10) && (this._$Ei.set(i10, this[i10]), delete this[i10]);
      });
    }
    createRenderRoot() {
      var t7;
      const s10 = null !== (t7 = this.shadowRoot) && void 0 !== t7 ? t7 : this.attachShadow(this.constructor.shadowRootOptions);
      return S(s10, this.constructor.elementStyles), s10;
    }
    connectedCallback() {
      var t7;
      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t7 = this._$ES) || void 0 === t7 || t7.forEach((t8) => {
        var i10;
        return null === (i10 = t8.hostConnected) || void 0 === i10 ? void 0 : i10.call(t8);
      });
    }
    enableUpdating(t7) {
    }
    disconnectedCallback() {
      var t7;
      null === (t7 = this._$ES) || void 0 === t7 || t7.forEach((t8) => {
        var i10;
        return null === (i10 = t8.hostDisconnected) || void 0 === i10 ? void 0 : i10.call(t8);
      });
    }
    attributeChangedCallback(t7, i10, s10) {
      this._$AK(t7, s10);
    }
    _$EO(t7, i10, s10 = l) {
      var e15;
      const r8 = this.constructor._$Ep(t7, s10);
      if (void 0 !== r8 && true === s10.reflect) {
        const h8 = (void 0 !== (null === (e15 = s10.converter) || void 0 === e15 ? void 0 : e15.toAttribute) ? s10.converter : n2).toAttribute(i10, s10.type);
        this._$El = t7, null == h8 ? this.removeAttribute(r8) : this.setAttribute(r8, h8), this._$El = null;
      }
    }
    _$AK(t7, i10) {
      var s10;
      const e15 = this.constructor, r8 = e15._$Ev.get(t7);
      if (void 0 !== r8 && this._$El !== r8) {
        const t8 = e15.getPropertyOptions(r8), h8 = "function" == typeof t8.converter ? { fromAttribute: t8.converter } : void 0 !== (null === (s10 = t8.converter) || void 0 === s10 ? void 0 : s10.fromAttribute) ? t8.converter : n2;
        this._$El = r8, this[r8] = h8.fromAttribute(i10, t8.type), this._$El = null;
      }
    }
    requestUpdate(t7, i10, s10) {
      let e15 = true;
      void 0 !== t7 && (((s10 = s10 || this.constructor.getPropertyOptions(t7)).hasChanged || a)(this[t7], i10) ? (this._$AL.has(t7) || this._$AL.set(t7, i10), true === s10.reflect && this._$El !== t7 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t7, s10))) : e15 = false), !this.isUpdatePending && e15 && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
      this.isUpdatePending = true;
      try {
        await this._$E_;
      } catch (t8) {
        Promise.reject(t8);
      }
      const t7 = this.scheduleUpdate();
      return null != t7 && await t7, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var t7;
      if (!this.isUpdatePending)
        return;
      this.hasUpdated, this._$Ei && (this._$Ei.forEach((t8, i11) => this[i11] = t8), this._$Ei = void 0);
      let i10 = false;
      const s10 = this._$AL;
      try {
        i10 = this.shouldUpdate(s10), i10 ? (this.willUpdate(s10), null === (t7 = this._$ES) || void 0 === t7 || t7.forEach((t8) => {
          var i11;
          return null === (i11 = t8.hostUpdate) || void 0 === i11 ? void 0 : i11.call(t8);
        }), this.update(s10)) : this._$Ek();
      } catch (t8) {
        throw i10 = false, this._$Ek(), t8;
      }
      i10 && this._$AE(s10);
    }
    willUpdate(t7) {
    }
    _$AE(t7) {
      var i10;
      null === (i10 = this._$ES) || void 0 === i10 || i10.forEach((t8) => {
        var i11;
        return null === (i11 = t8.hostUpdated) || void 0 === i11 ? void 0 : i11.call(t8);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t7)), this.updated(t7);
    }
    _$Ek() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$E_;
    }
    shouldUpdate(t7) {
      return true;
    }
    update(t7) {
      void 0 !== this._$EC && (this._$EC.forEach((t8, i10) => this._$EO(i10, this[i10], t8)), this._$EC = void 0), this._$Ek();
    }
    updated(t7) {
    }
    firstUpdated(t7) {
    }
  };
  u[d] = true, u.elementProperties = /* @__PURE__ */ new Map(), u.elementStyles = [], u.shadowRootOptions = { mode: "open" }, null == o2 || o2({ ReactiveElement: u }), (null !== (s2 = e2.reactiveElementVersions) && void 0 !== s2 ? s2 : e2.reactiveElementVersions = []).push("1.6.3");

  // node_modules/lit/node_modules/lit-html/lit-html.js
  var t2;
  var i2 = window;
  var s3 = i2.trustedTypes;
  var e3 = s3 ? s3.createPolicy("lit-html", { createHTML: (t7) => t7 }) : void 0;
  var o3 = "$lit$";
  var n3 = `lit$${(Math.random() + "").slice(9)}$`;
  var l2 = "?" + n3;
  var h2 = `<${l2}>`;
  var r3 = document;
  var u2 = () => r3.createComment("");
  var d2 = (t7) => null === t7 || "object" != typeof t7 && "function" != typeof t7;
  var c2 = Array.isArray;
  var v = (t7) => c2(t7) || "function" == typeof (null == t7 ? void 0 : t7[Symbol.iterator]);
  var a2 = "[ 	\n\f\r]";
  var f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var _ = /-->/g;
  var m = />/g;
  var p = RegExp(`>|${a2}(?:([^\\s"'>=/]+)(${a2}*=${a2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var g = /'/g;
  var $ = /"/g;
  var y = /^(?:script|style|textarea|title)$/i;
  var w = (t7) => (i10, ...s10) => ({ _$litType$: t7, strings: i10, values: s10 });
  var x = w(1);
  var b = w(2);
  var T = Symbol.for("lit-noChange");
  var A = Symbol.for("lit-nothing");
  var E = /* @__PURE__ */ new WeakMap();
  var C = r3.createTreeWalker(r3, 129, null, false);
  function P(t7, i10) {
    if (!Array.isArray(t7) || !t7.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return void 0 !== e3 ? e3.createHTML(i10) : i10;
  }
  var V = (t7, i10) => {
    const s10 = t7.length - 1, e15 = [];
    let l10, r8 = 2 === i10 ? "<svg>" : "", u6 = f;
    for (let i11 = 0; i11 < s10; i11++) {
      const s11 = t7[i11];
      let d5, c9, v4 = -1, a6 = 0;
      for (; a6 < s11.length && (u6.lastIndex = a6, c9 = u6.exec(s11), null !== c9); )
        a6 = u6.lastIndex, u6 === f ? "!--" === c9[1] ? u6 = _ : void 0 !== c9[1] ? u6 = m : void 0 !== c9[2] ? (y.test(c9[2]) && (l10 = RegExp("</" + c9[2], "g")), u6 = p) : void 0 !== c9[3] && (u6 = p) : u6 === p ? ">" === c9[0] ? (u6 = null != l10 ? l10 : f, v4 = -1) : void 0 === c9[1] ? v4 = -2 : (v4 = u6.lastIndex - c9[2].length, d5 = c9[1], u6 = void 0 === c9[3] ? p : '"' === c9[3] ? $ : g) : u6 === $ || u6 === g ? u6 = p : u6 === _ || u6 === m ? u6 = f : (u6 = p, l10 = void 0);
      const w4 = u6 === p && t7[i11 + 1].startsWith("/>") ? " " : "";
      r8 += u6 === f ? s11 + h2 : v4 >= 0 ? (e15.push(d5), s11.slice(0, v4) + o3 + s11.slice(v4) + n3 + w4) : s11 + n3 + (-2 === v4 ? (e15.push(void 0), i11) : w4);
    }
    return [P(t7, r8 + (t7[s10] || "<?>") + (2 === i10 ? "</svg>" : "")), e15];
  };
  var N = class {
    constructor({ strings: t7, _$litType$: i10 }, e15) {
      let h8;
      this.parts = [];
      let r8 = 0, d5 = 0;
      const c9 = t7.length - 1, v4 = this.parts, [a6, f5] = V(t7, i10);
      if (this.el = N.createElement(a6, e15), C.currentNode = this.el.content, 2 === i10) {
        const t8 = this.el.content, i11 = t8.firstChild;
        i11.remove(), t8.append(...i11.childNodes);
      }
      for (; null !== (h8 = C.nextNode()) && v4.length < c9; ) {
        if (1 === h8.nodeType) {
          if (h8.hasAttributes()) {
            const t8 = [];
            for (const i11 of h8.getAttributeNames())
              if (i11.endsWith(o3) || i11.startsWith(n3)) {
                const s10 = f5[d5++];
                if (t8.push(i11), void 0 !== s10) {
                  const t9 = h8.getAttribute(s10.toLowerCase() + o3).split(n3), i12 = /([.?@])?(.*)/.exec(s10);
                  v4.push({ type: 1, index: r8, name: i12[2], strings: t9, ctor: "." === i12[1] ? H : "?" === i12[1] ? L : "@" === i12[1] ? z : k });
                } else
                  v4.push({ type: 6, index: r8 });
              }
            for (const i11 of t8)
              h8.removeAttribute(i11);
          }
          if (y.test(h8.tagName)) {
            const t8 = h8.textContent.split(n3), i11 = t8.length - 1;
            if (i11 > 0) {
              h8.textContent = s3 ? s3.emptyScript : "";
              for (let s10 = 0; s10 < i11; s10++)
                h8.append(t8[s10], u2()), C.nextNode(), v4.push({ type: 2, index: ++r8 });
              h8.append(t8[i11], u2());
            }
          }
        } else if (8 === h8.nodeType)
          if (h8.data === l2)
            v4.push({ type: 2, index: r8 });
          else {
            let t8 = -1;
            for (; -1 !== (t8 = h8.data.indexOf(n3, t8 + 1)); )
              v4.push({ type: 7, index: r8 }), t8 += n3.length - 1;
          }
        r8++;
      }
    }
    static createElement(t7, i10) {
      const s10 = r3.createElement("template");
      return s10.innerHTML = t7, s10;
    }
  };
  function S2(t7, i10, s10 = t7, e15) {
    var o15, n13, l10, h8;
    if (i10 === T)
      return i10;
    let r8 = void 0 !== e15 ? null === (o15 = s10._$Co) || void 0 === o15 ? void 0 : o15[e15] : s10._$Cl;
    const u6 = d2(i10) ? void 0 : i10._$litDirective$;
    return (null == r8 ? void 0 : r8.constructor) !== u6 && (null === (n13 = null == r8 ? void 0 : r8._$AO) || void 0 === n13 || n13.call(r8, false), void 0 === u6 ? r8 = void 0 : (r8 = new u6(t7), r8._$AT(t7, s10, e15)), void 0 !== e15 ? (null !== (l10 = (h8 = s10)._$Co) && void 0 !== l10 ? l10 : h8._$Co = [])[e15] = r8 : s10._$Cl = r8), void 0 !== r8 && (i10 = S2(t7, r8._$AS(t7, i10.values), r8, e15)), i10;
  }
  var M = class {
    constructor(t7, i10) {
      this._$AV = [], this._$AN = void 0, this._$AD = t7, this._$AM = i10;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t7) {
      var i10;
      const { el: { content: s10 }, parts: e15 } = this._$AD, o15 = (null !== (i10 = null == t7 ? void 0 : t7.creationScope) && void 0 !== i10 ? i10 : r3).importNode(s10, true);
      C.currentNode = o15;
      let n13 = C.nextNode(), l10 = 0, h8 = 0, u6 = e15[0];
      for (; void 0 !== u6; ) {
        if (l10 === u6.index) {
          let i11;
          2 === u6.type ? i11 = new R(n13, n13.nextSibling, this, t7) : 1 === u6.type ? i11 = new u6.ctor(n13, u6.name, u6.strings, this, t7) : 6 === u6.type && (i11 = new Z(n13, this, t7)), this._$AV.push(i11), u6 = e15[++h8];
        }
        l10 !== (null == u6 ? void 0 : u6.index) && (n13 = C.nextNode(), l10++);
      }
      return C.currentNode = r3, o15;
    }
    v(t7) {
      let i10 = 0;
      for (const s10 of this._$AV)
        void 0 !== s10 && (void 0 !== s10.strings ? (s10._$AI(t7, s10, i10), i10 += s10.strings.length - 2) : s10._$AI(t7[i10])), i10++;
    }
  };
  var R = class {
    constructor(t7, i10, s10, e15) {
      var o15;
      this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t7, this._$AB = i10, this._$AM = s10, this.options = e15, this._$Cp = null === (o15 = null == e15 ? void 0 : e15.isConnected) || void 0 === o15 || o15;
    }
    get _$AU() {
      var t7, i10;
      return null !== (i10 = null === (t7 = this._$AM) || void 0 === t7 ? void 0 : t7._$AU) && void 0 !== i10 ? i10 : this._$Cp;
    }
    get parentNode() {
      let t7 = this._$AA.parentNode;
      const i10 = this._$AM;
      return void 0 !== i10 && 11 === (null == t7 ? void 0 : t7.nodeType) && (t7 = i10.parentNode), t7;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t7, i10 = this) {
      t7 = S2(this, t7, i10), d2(t7) ? t7 === A || null == t7 || "" === t7 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t7 !== this._$AH && t7 !== T && this._(t7) : void 0 !== t7._$litType$ ? this.g(t7) : void 0 !== t7.nodeType ? this.$(t7) : v(t7) ? this.T(t7) : this._(t7);
    }
    k(t7) {
      return this._$AA.parentNode.insertBefore(t7, this._$AB);
    }
    $(t7) {
      this._$AH !== t7 && (this._$AR(), this._$AH = this.k(t7));
    }
    _(t7) {
      this._$AH !== A && d2(this._$AH) ? this._$AA.nextSibling.data = t7 : this.$(r3.createTextNode(t7)), this._$AH = t7;
    }
    g(t7) {
      var i10;
      const { values: s10, _$litType$: e15 } = t7, o15 = "number" == typeof e15 ? this._$AC(t7) : (void 0 === e15.el && (e15.el = N.createElement(P(e15.h, e15.h[0]), this.options)), e15);
      if ((null === (i10 = this._$AH) || void 0 === i10 ? void 0 : i10._$AD) === o15)
        this._$AH.v(s10);
      else {
        const t8 = new M(o15, this), i11 = t8.u(this.options);
        t8.v(s10), this.$(i11), this._$AH = t8;
      }
    }
    _$AC(t7) {
      let i10 = E.get(t7.strings);
      return void 0 === i10 && E.set(t7.strings, i10 = new N(t7)), i10;
    }
    T(t7) {
      c2(this._$AH) || (this._$AH = [], this._$AR());
      const i10 = this._$AH;
      let s10, e15 = 0;
      for (const o15 of t7)
        e15 === i10.length ? i10.push(s10 = new R(this.k(u2()), this.k(u2()), this, this.options)) : s10 = i10[e15], s10._$AI(o15), e15++;
      e15 < i10.length && (this._$AR(s10 && s10._$AB.nextSibling, e15), i10.length = e15);
    }
    _$AR(t7 = this._$AA.nextSibling, i10) {
      var s10;
      for (null === (s10 = this._$AP) || void 0 === s10 || s10.call(this, false, true, i10); t7 && t7 !== this._$AB; ) {
        const i11 = t7.nextSibling;
        t7.remove(), t7 = i11;
      }
    }
    setConnected(t7) {
      var i10;
      void 0 === this._$AM && (this._$Cp = t7, null === (i10 = this._$AP) || void 0 === i10 || i10.call(this, t7));
    }
  };
  var k = class {
    constructor(t7, i10, s10, e15, o15) {
      this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t7, this.name = i10, this._$AM = e15, this.options = o15, s10.length > 2 || "" !== s10[0] || "" !== s10[1] ? (this._$AH = Array(s10.length - 1).fill(new String()), this.strings = s10) : this._$AH = A;
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t7, i10 = this, s10, e15) {
      const o15 = this.strings;
      let n13 = false;
      if (void 0 === o15)
        t7 = S2(this, t7, i10, 0), n13 = !d2(t7) || t7 !== this._$AH && t7 !== T, n13 && (this._$AH = t7);
      else {
        const e16 = t7;
        let l10, h8;
        for (t7 = o15[0], l10 = 0; l10 < o15.length - 1; l10++)
          h8 = S2(this, e16[s10 + l10], i10, l10), h8 === T && (h8 = this._$AH[l10]), n13 || (n13 = !d2(h8) || h8 !== this._$AH[l10]), h8 === A ? t7 = A : t7 !== A && (t7 += (null != h8 ? h8 : "") + o15[l10 + 1]), this._$AH[l10] = h8;
      }
      n13 && !e15 && this.j(t7);
    }
    j(t7) {
      t7 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t7 ? t7 : "");
    }
  };
  var H = class extends k {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t7) {
      this.element[this.name] = t7 === A ? void 0 : t7;
    }
  };
  var I = s3 ? s3.emptyScript : "";
  var L = class extends k {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t7) {
      t7 && t7 !== A ? this.element.setAttribute(this.name, I) : this.element.removeAttribute(this.name);
    }
  };
  var z = class extends k {
    constructor(t7, i10, s10, e15, o15) {
      super(t7, i10, s10, e15, o15), this.type = 5;
    }
    _$AI(t7, i10 = this) {
      var s10;
      if ((t7 = null !== (s10 = S2(this, t7, i10, 0)) && void 0 !== s10 ? s10 : A) === T)
        return;
      const e15 = this._$AH, o15 = t7 === A && e15 !== A || t7.capture !== e15.capture || t7.once !== e15.once || t7.passive !== e15.passive, n13 = t7 !== A && (e15 === A || o15);
      o15 && this.element.removeEventListener(this.name, this, e15), n13 && this.element.addEventListener(this.name, this, t7), this._$AH = t7;
    }
    handleEvent(t7) {
      var i10, s10;
      "function" == typeof this._$AH ? this._$AH.call(null !== (s10 = null === (i10 = this.options) || void 0 === i10 ? void 0 : i10.host) && void 0 !== s10 ? s10 : this.element, t7) : this._$AH.handleEvent(t7);
    }
  };
  var Z = class {
    constructor(t7, i10, s10) {
      this.element = t7, this.type = 6, this._$AN = void 0, this._$AM = i10, this.options = s10;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t7) {
      S2(this, t7);
    }
  };
  var j = { O: o3, P: n3, A: l2, C: 1, M: V, L: M, R: v, D: S2, I: R, V: k, H: L, N: z, U: H, F: Z };
  var B = i2.litHtmlPolyfillSupport;
  null == B || B(N, R), (null !== (t2 = i2.litHtmlVersions) && void 0 !== t2 ? t2 : i2.litHtmlVersions = []).push("2.8.0");

  // node_modules/lit-element/node_modules/lit-html/lit-html.js
  var t3;
  var i3 = window;
  var s4 = i3.trustedTypes;
  var e4 = s4 ? s4.createPolicy("lit-html", { createHTML: (t7) => t7 }) : void 0;
  var o4 = "$lit$";
  var n4 = `lit$${(Math.random() + "").slice(9)}$`;
  var l3 = "?" + n4;
  var h3 = `<${l3}>`;
  var r4 = document;
  var u3 = () => r4.createComment("");
  var d3 = (t7) => null === t7 || "object" != typeof t7 && "function" != typeof t7;
  var c3 = Array.isArray;
  var v2 = (t7) => c3(t7) || "function" == typeof (null == t7 ? void 0 : t7[Symbol.iterator]);
  var a3 = "[ 	\n\f\r]";
  var f2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var _2 = /-->/g;
  var m2 = />/g;
  var p2 = RegExp(`>|${a3}(?:([^\\s"'>=/]+)(${a3}*=${a3}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var g2 = /'/g;
  var $2 = /"/g;
  var y2 = /^(?:script|style|textarea|title)$/i;
  var w2 = (t7) => (i10, ...s10) => ({ _$litType$: t7, strings: i10, values: s10 });
  var x2 = w2(1);
  var b2 = w2(2);
  var T2 = Symbol.for("lit-noChange");
  var A2 = Symbol.for("lit-nothing");
  var E2 = /* @__PURE__ */ new WeakMap();
  var C2 = r4.createTreeWalker(r4, 129, null, false);
  function P2(t7, i10) {
    if (!Array.isArray(t7) || !t7.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return void 0 !== e4 ? e4.createHTML(i10) : i10;
  }
  var V2 = (t7, i10) => {
    const s10 = t7.length - 1, e15 = [];
    let l10, r8 = 2 === i10 ? "<svg>" : "", u6 = f2;
    for (let i11 = 0; i11 < s10; i11++) {
      const s11 = t7[i11];
      let d5, c9, v4 = -1, a6 = 0;
      for (; a6 < s11.length && (u6.lastIndex = a6, c9 = u6.exec(s11), null !== c9); )
        a6 = u6.lastIndex, u6 === f2 ? "!--" === c9[1] ? u6 = _2 : void 0 !== c9[1] ? u6 = m2 : void 0 !== c9[2] ? (y2.test(c9[2]) && (l10 = RegExp("</" + c9[2], "g")), u6 = p2) : void 0 !== c9[3] && (u6 = p2) : u6 === p2 ? ">" === c9[0] ? (u6 = null != l10 ? l10 : f2, v4 = -1) : void 0 === c9[1] ? v4 = -2 : (v4 = u6.lastIndex - c9[2].length, d5 = c9[1], u6 = void 0 === c9[3] ? p2 : '"' === c9[3] ? $2 : g2) : u6 === $2 || u6 === g2 ? u6 = p2 : u6 === _2 || u6 === m2 ? u6 = f2 : (u6 = p2, l10 = void 0);
      const w4 = u6 === p2 && t7[i11 + 1].startsWith("/>") ? " " : "";
      r8 += u6 === f2 ? s11 + h3 : v4 >= 0 ? (e15.push(d5), s11.slice(0, v4) + o4 + s11.slice(v4) + n4 + w4) : s11 + n4 + (-2 === v4 ? (e15.push(void 0), i11) : w4);
    }
    return [P2(t7, r8 + (t7[s10] || "<?>") + (2 === i10 ? "</svg>" : "")), e15];
  };
  var N2 = class {
    constructor({ strings: t7, _$litType$: i10 }, e15) {
      let h8;
      this.parts = [];
      let r8 = 0, d5 = 0;
      const c9 = t7.length - 1, v4 = this.parts, [a6, f5] = V2(t7, i10);
      if (this.el = N2.createElement(a6, e15), C2.currentNode = this.el.content, 2 === i10) {
        const t8 = this.el.content, i11 = t8.firstChild;
        i11.remove(), t8.append(...i11.childNodes);
      }
      for (; null !== (h8 = C2.nextNode()) && v4.length < c9; ) {
        if (1 === h8.nodeType) {
          if (h8.hasAttributes()) {
            const t8 = [];
            for (const i11 of h8.getAttributeNames())
              if (i11.endsWith(o4) || i11.startsWith(n4)) {
                const s10 = f5[d5++];
                if (t8.push(i11), void 0 !== s10) {
                  const t9 = h8.getAttribute(s10.toLowerCase() + o4).split(n4), i12 = /([.?@])?(.*)/.exec(s10);
                  v4.push({ type: 1, index: r8, name: i12[2], strings: t9, ctor: "." === i12[1] ? H2 : "?" === i12[1] ? L2 : "@" === i12[1] ? z2 : k2 });
                } else
                  v4.push({ type: 6, index: r8 });
              }
            for (const i11 of t8)
              h8.removeAttribute(i11);
          }
          if (y2.test(h8.tagName)) {
            const t8 = h8.textContent.split(n4), i11 = t8.length - 1;
            if (i11 > 0) {
              h8.textContent = s4 ? s4.emptyScript : "";
              for (let s10 = 0; s10 < i11; s10++)
                h8.append(t8[s10], u3()), C2.nextNode(), v4.push({ type: 2, index: ++r8 });
              h8.append(t8[i11], u3());
            }
          }
        } else if (8 === h8.nodeType)
          if (h8.data === l3)
            v4.push({ type: 2, index: r8 });
          else {
            let t8 = -1;
            for (; -1 !== (t8 = h8.data.indexOf(n4, t8 + 1)); )
              v4.push({ type: 7, index: r8 }), t8 += n4.length - 1;
          }
        r8++;
      }
    }
    static createElement(t7, i10) {
      const s10 = r4.createElement("template");
      return s10.innerHTML = t7, s10;
    }
  };
  function S3(t7, i10, s10 = t7, e15) {
    var o15, n13, l10, h8;
    if (i10 === T2)
      return i10;
    let r8 = void 0 !== e15 ? null === (o15 = s10._$Co) || void 0 === o15 ? void 0 : o15[e15] : s10._$Cl;
    const u6 = d3(i10) ? void 0 : i10._$litDirective$;
    return (null == r8 ? void 0 : r8.constructor) !== u6 && (null === (n13 = null == r8 ? void 0 : r8._$AO) || void 0 === n13 || n13.call(r8, false), void 0 === u6 ? r8 = void 0 : (r8 = new u6(t7), r8._$AT(t7, s10, e15)), void 0 !== e15 ? (null !== (l10 = (h8 = s10)._$Co) && void 0 !== l10 ? l10 : h8._$Co = [])[e15] = r8 : s10._$Cl = r8), void 0 !== r8 && (i10 = S3(t7, r8._$AS(t7, i10.values), r8, e15)), i10;
  }
  var M2 = class {
    constructor(t7, i10) {
      this._$AV = [], this._$AN = void 0, this._$AD = t7, this._$AM = i10;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t7) {
      var i10;
      const { el: { content: s10 }, parts: e15 } = this._$AD, o15 = (null !== (i10 = null == t7 ? void 0 : t7.creationScope) && void 0 !== i10 ? i10 : r4).importNode(s10, true);
      C2.currentNode = o15;
      let n13 = C2.nextNode(), l10 = 0, h8 = 0, u6 = e15[0];
      for (; void 0 !== u6; ) {
        if (l10 === u6.index) {
          let i11;
          2 === u6.type ? i11 = new R2(n13, n13.nextSibling, this, t7) : 1 === u6.type ? i11 = new u6.ctor(n13, u6.name, u6.strings, this, t7) : 6 === u6.type && (i11 = new Z2(n13, this, t7)), this._$AV.push(i11), u6 = e15[++h8];
        }
        l10 !== (null == u6 ? void 0 : u6.index) && (n13 = C2.nextNode(), l10++);
      }
      return C2.currentNode = r4, o15;
    }
    v(t7) {
      let i10 = 0;
      for (const s10 of this._$AV)
        void 0 !== s10 && (void 0 !== s10.strings ? (s10._$AI(t7, s10, i10), i10 += s10.strings.length - 2) : s10._$AI(t7[i10])), i10++;
    }
  };
  var R2 = class {
    constructor(t7, i10, s10, e15) {
      var o15;
      this.type = 2, this._$AH = A2, this._$AN = void 0, this._$AA = t7, this._$AB = i10, this._$AM = s10, this.options = e15, this._$Cp = null === (o15 = null == e15 ? void 0 : e15.isConnected) || void 0 === o15 || o15;
    }
    get _$AU() {
      var t7, i10;
      return null !== (i10 = null === (t7 = this._$AM) || void 0 === t7 ? void 0 : t7._$AU) && void 0 !== i10 ? i10 : this._$Cp;
    }
    get parentNode() {
      let t7 = this._$AA.parentNode;
      const i10 = this._$AM;
      return void 0 !== i10 && 11 === (null == t7 ? void 0 : t7.nodeType) && (t7 = i10.parentNode), t7;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t7, i10 = this) {
      t7 = S3(this, t7, i10), d3(t7) ? t7 === A2 || null == t7 || "" === t7 ? (this._$AH !== A2 && this._$AR(), this._$AH = A2) : t7 !== this._$AH && t7 !== T2 && this._(t7) : void 0 !== t7._$litType$ ? this.g(t7) : void 0 !== t7.nodeType ? this.$(t7) : v2(t7) ? this.T(t7) : this._(t7);
    }
    k(t7) {
      return this._$AA.parentNode.insertBefore(t7, this._$AB);
    }
    $(t7) {
      this._$AH !== t7 && (this._$AR(), this._$AH = this.k(t7));
    }
    _(t7) {
      this._$AH !== A2 && d3(this._$AH) ? this._$AA.nextSibling.data = t7 : this.$(r4.createTextNode(t7)), this._$AH = t7;
    }
    g(t7) {
      var i10;
      const { values: s10, _$litType$: e15 } = t7, o15 = "number" == typeof e15 ? this._$AC(t7) : (void 0 === e15.el && (e15.el = N2.createElement(P2(e15.h, e15.h[0]), this.options)), e15);
      if ((null === (i10 = this._$AH) || void 0 === i10 ? void 0 : i10._$AD) === o15)
        this._$AH.v(s10);
      else {
        const t8 = new M2(o15, this), i11 = t8.u(this.options);
        t8.v(s10), this.$(i11), this._$AH = t8;
      }
    }
    _$AC(t7) {
      let i10 = E2.get(t7.strings);
      return void 0 === i10 && E2.set(t7.strings, i10 = new N2(t7)), i10;
    }
    T(t7) {
      c3(this._$AH) || (this._$AH = [], this._$AR());
      const i10 = this._$AH;
      let s10, e15 = 0;
      for (const o15 of t7)
        e15 === i10.length ? i10.push(s10 = new R2(this.k(u3()), this.k(u3()), this, this.options)) : s10 = i10[e15], s10._$AI(o15), e15++;
      e15 < i10.length && (this._$AR(s10 && s10._$AB.nextSibling, e15), i10.length = e15);
    }
    _$AR(t7 = this._$AA.nextSibling, i10) {
      var s10;
      for (null === (s10 = this._$AP) || void 0 === s10 || s10.call(this, false, true, i10); t7 && t7 !== this._$AB; ) {
        const i11 = t7.nextSibling;
        t7.remove(), t7 = i11;
      }
    }
    setConnected(t7) {
      var i10;
      void 0 === this._$AM && (this._$Cp = t7, null === (i10 = this._$AP) || void 0 === i10 || i10.call(this, t7));
    }
  };
  var k2 = class {
    constructor(t7, i10, s10, e15, o15) {
      this.type = 1, this._$AH = A2, this._$AN = void 0, this.element = t7, this.name = i10, this._$AM = e15, this.options = o15, s10.length > 2 || "" !== s10[0] || "" !== s10[1] ? (this._$AH = Array(s10.length - 1).fill(new String()), this.strings = s10) : this._$AH = A2;
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t7, i10 = this, s10, e15) {
      const o15 = this.strings;
      let n13 = false;
      if (void 0 === o15)
        t7 = S3(this, t7, i10, 0), n13 = !d3(t7) || t7 !== this._$AH && t7 !== T2, n13 && (this._$AH = t7);
      else {
        const e16 = t7;
        let l10, h8;
        for (t7 = o15[0], l10 = 0; l10 < o15.length - 1; l10++)
          h8 = S3(this, e16[s10 + l10], i10, l10), h8 === T2 && (h8 = this._$AH[l10]), n13 || (n13 = !d3(h8) || h8 !== this._$AH[l10]), h8 === A2 ? t7 = A2 : t7 !== A2 && (t7 += (null != h8 ? h8 : "") + o15[l10 + 1]), this._$AH[l10] = h8;
      }
      n13 && !e15 && this.j(t7);
    }
    j(t7) {
      t7 === A2 ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t7 ? t7 : "");
    }
  };
  var H2 = class extends k2 {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t7) {
      this.element[this.name] = t7 === A2 ? void 0 : t7;
    }
  };
  var I2 = s4 ? s4.emptyScript : "";
  var L2 = class extends k2 {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t7) {
      t7 && t7 !== A2 ? this.element.setAttribute(this.name, I2) : this.element.removeAttribute(this.name);
    }
  };
  var z2 = class extends k2 {
    constructor(t7, i10, s10, e15, o15) {
      super(t7, i10, s10, e15, o15), this.type = 5;
    }
    _$AI(t7, i10 = this) {
      var s10;
      if ((t7 = null !== (s10 = S3(this, t7, i10, 0)) && void 0 !== s10 ? s10 : A2) === T2)
        return;
      const e15 = this._$AH, o15 = t7 === A2 && e15 !== A2 || t7.capture !== e15.capture || t7.once !== e15.once || t7.passive !== e15.passive, n13 = t7 !== A2 && (e15 === A2 || o15);
      o15 && this.element.removeEventListener(this.name, this, e15), n13 && this.element.addEventListener(this.name, this, t7), this._$AH = t7;
    }
    handleEvent(t7) {
      var i10, s10;
      "function" == typeof this._$AH ? this._$AH.call(null !== (s10 = null === (i10 = this.options) || void 0 === i10 ? void 0 : i10.host) && void 0 !== s10 ? s10 : this.element, t7) : this._$AH.handleEvent(t7);
    }
  };
  var Z2 = class {
    constructor(t7, i10, s10) {
      this.element = t7, this.type = 6, this._$AN = void 0, this._$AM = i10, this.options = s10;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t7) {
      S3(this, t7);
    }
  };
  var B2 = i3.litHtmlPolyfillSupport;
  null == B2 || B2(N2, R2), (null !== (t3 = i3.litHtmlVersions) && void 0 !== t3 ? t3 : i3.litHtmlVersions = []).push("2.8.0");
  var D = (t7, i10, s10) => {
    var e15, o15;
    const n13 = null !== (e15 = null == s10 ? void 0 : s10.renderBefore) && void 0 !== e15 ? e15 : i10;
    let l10 = n13._$litPart$;
    if (void 0 === l10) {
      const t8 = null !== (o15 = null == s10 ? void 0 : s10.renderBefore) && void 0 !== o15 ? o15 : null;
      n13._$litPart$ = l10 = new R2(i10.insertBefore(u3(), t8), t8, void 0, null != s10 ? s10 : {});
    }
    return l10._$AI(t7), l10;
  };

  // node_modules/lit-element/lit-element.js
  var l4;
  var o5;
  var s5 = class extends u {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      var t7, e15;
      const i10 = super.createRenderRoot();
      return null !== (t7 = (e15 = this.renderOptions).renderBefore) && void 0 !== t7 || (e15.renderBefore = i10.firstChild), i10;
    }
    update(t7) {
      const i10 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t7), this._$Do = D(i10, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var t7;
      super.connectedCallback(), null === (t7 = this._$Do) || void 0 === t7 || t7.setConnected(true);
    }
    disconnectedCallback() {
      var t7;
      super.disconnectedCallback(), null === (t7 = this._$Do) || void 0 === t7 || t7.setConnected(false);
    }
    render() {
      return T2;
    }
  };
  s5.finalized = true, s5._$litElement$ = true, null === (l4 = globalThis.litElementHydrateSupport) || void 0 === l4 || l4.call(globalThis, { LitElement: s5 });
  var n5 = globalThis.litElementPolyfillSupport;
  null == n5 || n5({ LitElement: s5 });
  (null !== (o5 = globalThis.litElementVersions) && void 0 !== o5 ? o5 : globalThis.litElementVersions = []).push("3.3.3");

  // node_modules/@lit/reactive-element/decorators/custom-element.js
  var e5 = (e15) => (n13) => "function" == typeof n13 ? ((e16, n14) => (customElements.define(e16, n14), n14))(e15, n13) : ((e16, n14) => {
    const { kind: t7, elements: s10 } = n14;
    return { kind: t7, elements: s10, finisher(n15) {
      customElements.define(e16, n15);
    } };
  })(e15, n13);

  // node_modules/@lit/reactive-element/decorators/property.js
  var i4 = (i10, e15) => "method" === e15.kind && e15.descriptor && !("value" in e15.descriptor) ? { ...e15, finisher(n13) {
    n13.createProperty(e15.key, i10);
  } } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e15.key, initializer() {
    "function" == typeof e15.initializer && (this[e15.key] = e15.initializer.call(this));
  }, finisher(n13) {
    n13.createProperty(e15.key, i10);
  } };
  var e6 = (i10, e15, n13) => {
    e15.constructor.createProperty(n13, i10);
  };
  function n6(n13) {
    return (t7, o15) => void 0 !== o15 ? e6(n13, t7, o15) : i4(n13, t7);
  }

  // node_modules/@lit/reactive-element/decorators/state.js
  function t4(t7) {
    return n6({ ...t7, state: true });
  }

  // node_modules/@lit/reactive-element/decorators/base.js
  var o6 = ({ finisher: e15, descriptor: t7 }) => (o15, n13) => {
    var r8;
    if (void 0 === n13) {
      const n14 = null !== (r8 = o15.originalKey) && void 0 !== r8 ? r8 : o15.key, i10 = null != t7 ? { kind: "method", placement: "prototype", key: n14, descriptor: t7(o15.key) } : { ...o15, key: n14 };
      return null != e15 && (i10.finisher = function(t8) {
        e15(t8, n14);
      }), i10;
    }
    {
      const r9 = o15.constructor;
      void 0 !== t7 && Object.defineProperty(o15, n13, t7(n13)), null == e15 || e15(r9, n13);
    }
  };

  // node_modules/@lit/reactive-element/decorators/query.js
  function i5(i10, n13) {
    return o6({ descriptor: (o15) => {
      const t7 = { get() {
        var o16, n14;
        return null !== (n14 = null === (o16 = this.renderRoot) || void 0 === o16 ? void 0 : o16.querySelector(i10)) && void 0 !== n14 ? n14 : null;
      }, enumerable: true, configurable: true };
      if (n13) {
        const n14 = "symbol" == typeof o15 ? Symbol() : "__" + o15;
        t7.get = function() {
          var o16, t8;
          return void 0 === this[n14] && (this[n14] = null !== (t8 = null === (o16 = this.renderRoot) || void 0 === o16 ? void 0 : o16.querySelector(i10)) && void 0 !== t8 ? t8 : null), this[n14];
        };
      }
      return t7;
    } });
  }

  // node_modules/@lit/reactive-element/decorators/query-all.js
  function e7(e15) {
    return o6({ descriptor: (r8) => ({ get() {
      var r9, o15;
      return null !== (o15 = null === (r9 = this.renderRoot) || void 0 === r9 ? void 0 : r9.querySelectorAll(e15)) && void 0 !== o15 ? o15 : [];
    }, enumerable: true, configurable: true }) });
  }

  // node_modules/@lit/reactive-element/decorators/query-async.js
  function e8(e15) {
    return o6({ descriptor: (r8) => ({ async get() {
      var r9;
      return await this.updateComplete, null === (r9 = this.renderRoot) || void 0 === r9 ? void 0 : r9.querySelector(e15);
    }, enumerable: true, configurable: true }) });
  }

  // node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
  var n7;
  var e9 = null != (null === (n7 = window.HTMLSlotElement) || void 0 === n7 ? void 0 : n7.prototype.assignedElements) ? (o15, n13) => o15.assignedElements(n13) : (o15, n13) => o15.assignedNodes(n13).filter((o16) => o16.nodeType === Node.ELEMENT_NODE);

  // node_modules/lit/node_modules/lit-html/directive.js
  var t5 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
  var e10 = (t7) => (...e15) => ({ _$litDirective$: t7, values: e15 });
  var i6 = class {
    constructor(t7) {
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t7, e15, i10) {
      this._$Ct = t7, this._$AM = e15, this._$Ci = i10;
    }
    _$AS(t7, e15) {
      return this.update(t7, e15);
    }
    update(t7, e15) {
      return this.render(...e15);
    }
  };

  // node_modules/lit/node_modules/lit-html/directives/class-map.js
  var o7 = e10(class extends i6 {
    constructor(t7) {
      var i10;
      if (super(t7), t7.type !== t5.ATTRIBUTE || "class" !== t7.name || (null === (i10 = t7.strings) || void 0 === i10 ? void 0 : i10.length) > 2)
        throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t7) {
      return " " + Object.keys(t7).filter((i10) => t7[i10]).join(" ") + " ";
    }
    update(i10, [s10]) {
      var r8, o15;
      if (void 0 === this.it) {
        this.it = /* @__PURE__ */ new Set(), void 0 !== i10.strings && (this.nt = new Set(i10.strings.join(" ").split(/\s/).filter((t7) => "" !== t7)));
        for (const t7 in s10)
          s10[t7] && !(null === (r8 = this.nt) || void 0 === r8 ? void 0 : r8.has(t7)) && this.it.add(t7);
        return this.render(s10);
      }
      const e15 = i10.element.classList;
      this.it.forEach((t7) => {
        t7 in s10 || (e15.remove(t7), this.it.delete(t7));
      });
      for (const t7 in s10) {
        const i11 = !!s10[t7];
        i11 === this.it.has(t7) || (null === (o15 = this.nt) || void 0 === o15 ? void 0 : o15.has(t7)) || (i11 ? (e15.add(t7), this.it.add(t7)) : (e15.remove(t7), this.it.delete(t7)));
      }
      return T;
    }
  });

  // node_modules/lit/node_modules/lit-html/directives/unsafe-html.js
  var e11 = class extends i6 {
    constructor(i10) {
      if (super(i10), this.et = A, i10.type !== t5.CHILD)
        throw Error(this.constructor.directiveName + "() can only be used in child bindings");
    }
    render(r8) {
      if (r8 === A || null == r8)
        return this.ft = void 0, this.et = r8;
      if (r8 === T)
        return r8;
      if ("string" != typeof r8)
        throw Error(this.constructor.directiveName + "() called with a non-string value");
      if (r8 === this.et)
        return this.ft;
      this.et = r8;
      const s10 = [r8];
      return s10.raw = s10, this.ft = { _$litType$: this.constructor.resultType, strings: s10, values: [] };
    }
  };
  e11.directiveName = "unsafeHTML", e11.resultType = 1;
  var o8 = e10(e11);

  // node_modules/lit/node_modules/lit-html/directives/when.js
  function n8(n13, o15, r8) {
    return n13 ? o15() : null == r8 ? void 0 : r8();
  }

  // node_modules/lit/node_modules/lit-html/directives/if-defined.js
  var l6 = (l10) => null != l10 ? l10 : A;

  // node_modules/@lit/localize/internal/str-tag.js
  var _str = (strings, ...values) => ({
    strTag: true,
    strings,
    values
  });
  var str = _str;
  var isStrTagged = (val) => typeof val !== "string" && "strTag" in val;
  var joinStringsAndValues = (strings, values, valueOrder) => {
    let concat = strings[0];
    for (let i10 = 1; i10 < strings.length; i10++) {
      concat += values[valueOrder ? valueOrder[i10 - 1] : i10 - 1];
      concat += strings[i10];
    }
    return concat;
  };

  // node_modules/@lit/localize/internal/default-msg.js
  var defaultMsg = (template) => isStrTagged(template) ? joinStringsAndValues(template.strings, template.values) : template;

  // node_modules/@lit/localize/internal/locale-status-event.js
  var LOCALE_STATUS_EVENT = "lit-localize-status";

  // node_modules/@lit/localize/internal/localized-controller.js
  var LocalizeController = class {
    constructor(host) {
      this.__litLocalizeEventHandler = (event) => {
        if (event.detail.status === "ready") {
          this.host.requestUpdate();
        }
      };
      this.host = host;
    }
    hostConnected() {
      window.addEventListener(LOCALE_STATUS_EVENT, this.__litLocalizeEventHandler);
    }
    hostDisconnected() {
      window.removeEventListener(LOCALE_STATUS_EVENT, this.__litLocalizeEventHandler);
    }
  };
  var _updateWhenLocaleChanges = (host) => host.addController(new LocalizeController(host));
  var updateWhenLocaleChanges = _updateWhenLocaleChanges;

  // node_modules/@lit/localize/internal/deferred.js
  var Deferred = class {
    constructor() {
      this.settled = false;
      this.promise = new Promise((resolve, reject) => {
        this._resolve = resolve;
        this._reject = reject;
      });
    }
    resolve(value) {
      this.settled = true;
      this._resolve(value);
    }
    reject(error) {
      this.settled = true;
      this._reject(error);
    }
  };

  // node_modules/@lit/localize/internal/fnv1a64.js
  var hl = [];
  for (let i10 = 0; i10 < 256; i10++) {
    hl[i10] = (i10 >> 4 & 15).toString(16) + (i10 & 15).toString(16);
  }

  // node_modules/@lit/localize/init/runtime.js
  var loading = new Deferred();
  loading.resolve();

  // node_modules/@lit/localize/lit-localize.js
  var msg = defaultMsg;

  // node_modules/lit/node_modules/lit-html/directive-helpers.js
  var { I: l7 } = j;
  var i7 = (o15) => null === o15 || "object" != typeof o15 && "function" != typeof o15;
  var e12 = (o15) => void 0 === o15.strings;
  var r5 = () => document.createComment("");
  var c4 = (o15, i10, n13) => {
    var t7;
    const v4 = o15._$AA.parentNode, d5 = void 0 === i10 ? o15._$AB : i10._$AA;
    if (void 0 === n13) {
      const i11 = v4.insertBefore(r5(), d5), t8 = v4.insertBefore(r5(), d5);
      n13 = new l7(i11, t8, o15, o15.options);
    } else {
      const l10 = n13._$AB.nextSibling, i11 = n13._$AM, u6 = i11 !== o15;
      if (u6) {
        let l11;
        null === (t7 = n13._$AQ) || void 0 === t7 || t7.call(n13, o15), n13._$AM = o15, void 0 !== n13._$AP && (l11 = o15._$AU) !== i11._$AU && n13._$AP(l11);
      }
      if (l10 !== d5 || u6) {
        let o16 = n13._$AA;
        for (; o16 !== l10; ) {
          const l11 = o16.nextSibling;
          v4.insertBefore(o16, d5), o16 = l11;
        }
      }
    }
    return n13;
  };
  var f3 = (o15, l10, i10 = o15) => (o15._$AI(l10, i10), o15);
  var s6 = {};
  var a4 = (o15, l10 = s6) => o15._$AH = l10;
  var m3 = (o15) => o15._$AH;
  var p3 = (o15) => {
    var l10;
    null === (l10 = o15._$AP) || void 0 === l10 || l10.call(o15, false, true);
    let i10 = o15._$AA;
    const n13 = o15._$AB.nextSibling;
    for (; i10 !== n13; ) {
      const o16 = i10.nextSibling;
      i10.remove(), i10 = o16;
    }
  };

  // node_modules/lit/node_modules/lit-html/async-directive.js
  var s7 = (i10, t7) => {
    var e15, o15;
    const r8 = i10._$AN;
    if (void 0 === r8)
      return false;
    for (const i11 of r8)
      null === (o15 = (e15 = i11)._$AO) || void 0 === o15 || o15.call(e15, t7, false), s7(i11, t7);
    return true;
  };
  var o9 = (i10) => {
    let t7, e15;
    do {
      if (void 0 === (t7 = i10._$AM))
        break;
      e15 = t7._$AN, e15.delete(i10), i10 = t7;
    } while (0 === (null == e15 ? void 0 : e15.size));
  };
  var r6 = (i10) => {
    for (let t7; t7 = i10._$AM; i10 = t7) {
      let e15 = t7._$AN;
      if (void 0 === e15)
        t7._$AN = e15 = /* @__PURE__ */ new Set();
      else if (e15.has(i10))
        break;
      e15.add(i10), l8(t7);
    }
  };
  function n9(i10) {
    void 0 !== this._$AN ? (o9(this), this._$AM = i10, r6(this)) : this._$AM = i10;
  }
  function h4(i10, t7 = false, e15 = 0) {
    const r8 = this._$AH, n13 = this._$AN;
    if (void 0 !== n13 && 0 !== n13.size)
      if (t7)
        if (Array.isArray(r8))
          for (let i11 = e15; i11 < r8.length; i11++)
            s7(r8[i11], false), o9(r8[i11]);
        else
          null != r8 && (s7(r8, false), o9(r8));
      else
        s7(this, i10);
  }
  var l8 = (i10) => {
    var t7, s10, o15, r8;
    i10.type == t5.CHILD && (null !== (t7 = (o15 = i10)._$AP) && void 0 !== t7 || (o15._$AP = h4), null !== (s10 = (r8 = i10)._$AQ) && void 0 !== s10 || (r8._$AQ = n9));
  };
  var c5 = class extends i6 {
    constructor() {
      super(...arguments), this._$AN = void 0;
    }
    _$AT(i10, t7, e15) {
      super._$AT(i10, t7, e15), r6(this), this.isConnected = i10._$AU;
    }
    _$AO(i10, t7 = true) {
      var e15, r8;
      i10 !== this.isConnected && (this.isConnected = i10, i10 ? null === (e15 = this.reconnected) || void 0 === e15 || e15.call(this) : null === (r8 = this.disconnected) || void 0 === r8 || r8.call(this)), t7 && (s7(this, i10), o9(this));
    }
    setValue(t7) {
      if (e12(this._$Ct))
        this._$Ct._$AI(t7, this);
      else {
        const i10 = [...this._$Ct._$AH];
        i10[this._$Ci] = t7, this._$Ct._$AI(i10, this, 0);
      }
    }
    disconnected() {
    }
    reconnected() {
    }
  };

  // node_modules/lit/node_modules/lit-html/directives/ref.js
  var e13 = () => new o10();
  var o10 = class {
  };
  var h5 = /* @__PURE__ */ new WeakMap();
  var n10 = e10(class extends c5 {
    render(t7) {
      return A;
    }
    update(t7, [s10]) {
      var e15;
      const o15 = s10 !== this.G;
      return o15 && void 0 !== this.G && this.ot(void 0), (o15 || this.rt !== this.lt) && (this.G = s10, this.dt = null === (e15 = t7.options) || void 0 === e15 ? void 0 : e15.host, this.ot(this.lt = t7.element)), A;
    }
    ot(i10) {
      var t7;
      if ("function" == typeof this.G) {
        const s10 = null !== (t7 = this.dt) && void 0 !== t7 ? t7 : globalThis;
        let e15 = h5.get(s10);
        void 0 === e15 && (e15 = /* @__PURE__ */ new WeakMap(), h5.set(s10, e15)), void 0 !== e15.get(this.G) && this.G.call(this.dt, void 0), e15.set(this.G, i10), void 0 !== i10 && this.G.call(this.dt, i10);
      } else
        this.G.value = i10;
    }
    get rt() {
      var i10, t7, s10;
      return "function" == typeof this.G ? null === (t7 = h5.get(null !== (i10 = this.dt) && void 0 !== i10 ? i10 : globalThis)) || void 0 === t7 ? void 0 : t7.get(this.G) : null === (s10 = this.G) || void 0 === s10 ? void 0 : s10.value;
    }
    disconnected() {
      this.rt === this.lt && this.ot(void 0);
    }
    reconnected() {
      this.ot(this.lt);
    }
  });

  // node_modules/lit/node_modules/lit-html/directives/private-async-helpers.js
  var s8 = class {
    constructor(t7) {
      this.G = t7;
    }
    disconnect() {
      this.G = void 0;
    }
    reconnect(t7) {
      this.G = t7;
    }
    deref() {
      return this.G;
    }
  };
  var i8 = class {
    constructor() {
      this.Y = void 0, this.Z = void 0;
    }
    get() {
      return this.Y;
    }
    pause() {
      var t7;
      null !== (t7 = this.Y) && void 0 !== t7 || (this.Y = new Promise((t8) => this.Z = t8));
    }
    resume() {
      var t7;
      null === (t7 = this.Z) || void 0 === t7 || t7.call(this), this.Y = this.Z = void 0;
    }
  };

  // node_modules/lit/node_modules/lit-html/directives/until.js
  var n11 = (t7) => !i7(t7) && "function" == typeof t7.then;
  var h6 = 1073741823;
  var c6 = class extends c5 {
    constructor() {
      super(...arguments), this._$C_t = h6, this._$Cwt = [], this._$Cq = new s8(this), this._$CK = new i8();
    }
    render(...s10) {
      var i10;
      return null !== (i10 = s10.find((t7) => !n11(t7))) && void 0 !== i10 ? i10 : T;
    }
    update(s10, i10) {
      const r8 = this._$Cwt;
      let e15 = r8.length;
      this._$Cwt = i10;
      const o15 = this._$Cq, c9 = this._$CK;
      this.isConnected || this.disconnected();
      for (let t7 = 0; t7 < i10.length && !(t7 > this._$C_t); t7++) {
        const s11 = i10[t7];
        if (!n11(s11))
          return this._$C_t = t7, s11;
        t7 < e15 && s11 === r8[t7] || (this._$C_t = h6, e15 = 0, Promise.resolve(s11).then(async (t8) => {
          for (; c9.get(); )
            await c9.get();
          const i11 = o15.deref();
          if (void 0 !== i11) {
            const r9 = i11._$Cwt.indexOf(s11);
            r9 > -1 && r9 < i11._$C_t && (i11._$C_t = r9, i11.setValue(t8));
          }
        }));
      }
      return T;
    }
    disconnected() {
      this._$Cq.disconnect(), this._$CK.pause();
    }
    reconnected() {
      this._$Cq.reconnect(this), this._$CK.resume();
    }
  };
  var m4 = e10(c6);

  // node_modules/lit/node_modules/lit-html/directives/choose.js
  var o11 = (o15, r8, n13) => {
    for (const n14 of r8)
      if (n14[0] === o15)
        return (0, n14[1])();
    return null == n13 ? void 0 : n13();
  };

  // node_modules/lit/node_modules/lit-html/directives/join.js
  function* o12(o15, t7) {
    const f5 = "function" == typeof t7;
    if (void 0 !== o15) {
      let i10 = -1;
      for (const n13 of o15)
        i10 > -1 && (yield f5 ? t7(i10) : t7), i10++, yield n13;
    }
  }

  // node_modules/lit/node_modules/lit-html/directives/map.js
  function* o13(o15, f5) {
    if (void 0 !== o15) {
      let i10 = 0;
      for (const t7 of o15)
        yield f5(t7, i10++);
    }
  }

  // node_modules/lit/node_modules/lit-html/directives/repeat.js
  var u4 = (e15, s10, t7) => {
    const r8 = /* @__PURE__ */ new Map();
    for (let l10 = s10; l10 <= t7; l10++)
      r8.set(e15[l10], l10);
    return r8;
  };
  var c7 = e10(class extends i6 {
    constructor(e15) {
      if (super(e15), e15.type !== t5.CHILD)
        throw Error("repeat() can only be used in text expressions");
    }
    ct(e15, s10, t7) {
      let r8;
      void 0 === t7 ? t7 = s10 : void 0 !== s10 && (r8 = s10);
      const l10 = [], o15 = [];
      let i10 = 0;
      for (const s11 of e15)
        l10[i10] = r8 ? r8(s11, i10) : i10, o15[i10] = t7(s11, i10), i10++;
      return { values: o15, keys: l10 };
    }
    render(e15, s10, t7) {
      return this.ct(e15, s10, t7).values;
    }
    update(s10, [t7, r8, c9]) {
      var d5;
      const a6 = m3(s10), { values: p5, keys: v4 } = this.ct(t7, r8, c9);
      if (!Array.isArray(a6))
        return this.ut = v4, p5;
      const h8 = null !== (d5 = this.ut) && void 0 !== d5 ? d5 : this.ut = [], m6 = [];
      let y4, x4, j2 = 0, k4 = a6.length - 1, w4 = 0, A4 = p5.length - 1;
      for (; j2 <= k4 && w4 <= A4; )
        if (null === a6[j2])
          j2++;
        else if (null === a6[k4])
          k4--;
        else if (h8[j2] === v4[w4])
          m6[w4] = f3(a6[j2], p5[w4]), j2++, w4++;
        else if (h8[k4] === v4[A4])
          m6[A4] = f3(a6[k4], p5[A4]), k4--, A4--;
        else if (h8[j2] === v4[A4])
          m6[A4] = f3(a6[j2], p5[A4]), c4(s10, m6[A4 + 1], a6[j2]), j2++, A4--;
        else if (h8[k4] === v4[w4])
          m6[w4] = f3(a6[k4], p5[w4]), c4(s10, a6[j2], a6[k4]), k4--, w4++;
        else if (void 0 === y4 && (y4 = u4(v4, w4, A4), x4 = u4(h8, j2, k4)), y4.has(h8[j2]))
          if (y4.has(h8[k4])) {
            const e15 = x4.get(v4[w4]), t8 = void 0 !== e15 ? a6[e15] : null;
            if (null === t8) {
              const e16 = c4(s10, a6[j2]);
              f3(e16, p5[w4]), m6[w4] = e16;
            } else
              m6[w4] = f3(t8, p5[w4]), c4(s10, a6[j2], t8), a6[e15] = null;
            w4++;
          } else
            p3(a6[k4]), k4--;
        else
          p3(a6[j2]), j2++;
      for (; w4 <= A4; ) {
        const e15 = c4(s10, m6[A4 + 1]);
        f3(e15, p5[w4]), m6[w4++] = e15;
      }
      for (; j2 <= k4; ) {
        const e15 = a6[j2++];
        null !== e15 && p3(e15);
      }
      return this.ut = v4, a4(s10, m6), T;
    }
  });

  // node_modules/@babel/runtime/helpers/esm/typeof.js
  function _typeof(o15) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o16) {
      return typeof o16;
    } : function(o16) {
      return o16 && "function" == typeof Symbol && o16.constructor === Symbol && o16 !== Symbol.prototype ? "symbol" : typeof o16;
    }, _typeof(o15);
  }

  // node_modules/date-fns/esm/_lib/toInteger/index.js
  function toInteger(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
      return NaN;
    }
    var number = Number(dirtyNumber);
    if (isNaN(number)) {
      return number;
    }
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  }

  // node_modules/date-fns/esm/_lib/requiredArgs/index.js
  function requiredArgs(required, args) {
    if (args.length < required) {
      throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
    }
  }

  // node_modules/date-fns/esm/toDate/index.js
  function toDate(argument) {
    requiredArgs(1, arguments);
    var argStr = Object.prototype.toString.call(argument);
    if (argument instanceof Date || _typeof(argument) === "object" && argStr === "[object Date]") {
      return new Date(argument.getTime());
    } else if (typeof argument === "number" || argStr === "[object Number]") {
      return new Date(argument);
    } else {
      if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
        console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
        console.warn(new Error().stack);
      }
      return /* @__PURE__ */ new Date(NaN);
    }
  }

  // node_modules/date-fns/esm/addDays/index.js
  function addDays(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var amount = toInteger(dirtyAmount);
    if (isNaN(amount)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    if (!amount) {
      return date;
    }
    date.setDate(date.getDate() + amount);
    return date;
  }

  // node_modules/date-fns/esm/addMonths/index.js
  function addMonths(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var amount = toInteger(dirtyAmount);
    if (isNaN(amount)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    if (!amount) {
      return date;
    }
    var dayOfMonth = date.getDate();
    var endOfDesiredMonth = new Date(date.getTime());
    endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
    var daysInMonth = endOfDesiredMonth.getDate();
    if (dayOfMonth >= daysInMonth) {
      return endOfDesiredMonth;
    } else {
      date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
      return date;
    }
  }

  // node_modules/date-fns/esm/_lib/defaultOptions/index.js
  var defaultOptions = {};
  function getDefaultOptions() {
    return defaultOptions;
  }

  // node_modules/date-fns/esm/startOfWeek/index.js
  function startOfWeek(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    requiredArgs(1, arguments);
    var defaultOptions2 = getDefaultOptions();
    var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    }
    var date = toDate(dirtyDate);
    var day = date.getDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setDate(date.getDate() - diff);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  // node_modules/date-fns/esm/startOfDay/index.js
  function startOfDay(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  // node_modules/date-fns/esm/addWeeks/index.js
  function addWeeks(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    var days = amount * 7;
    return addDays(dirtyDate, days);
  }

  // node_modules/date-fns/esm/isSameDay/index.js
  function isSameDay(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    var dateLeftStartOfDay = startOfDay(dirtyDateLeft);
    var dateRightStartOfDay = startOfDay(dirtyDateRight);
    return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
  }

  // node_modules/date-fns/esm/endOfMonth/index.js
  function endOfMonth(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var month = date.getMonth();
    date.setFullYear(date.getFullYear(), month + 1, 0);
    date.setHours(23, 59, 59, 999);
    return date;
  }

  // node_modules/date-fns/esm/eachDayOfInterval/index.js
  function eachDayOfInterval(dirtyInterval, options) {
    var _options$step;
    requiredArgs(1, arguments);
    var interval = dirtyInterval || {};
    var startDate = toDate(interval.start);
    var endDate = toDate(interval.end);
    var endTime = endDate.getTime();
    if (!(startDate.getTime() <= endTime)) {
      throw new RangeError("Invalid interval");
    }
    var dates = [];
    var currentDate = startDate;
    currentDate.setHours(0, 0, 0, 0);
    var step = Number((_options$step = options === null || options === void 0 ? void 0 : options.step) !== null && _options$step !== void 0 ? _options$step : 1);
    if (step < 1 || isNaN(step))
      throw new RangeError("`options.step` must be a number greater than 1");
    while (currentDate.getTime() <= endTime) {
      dates.push(toDate(currentDate));
      currentDate.setDate(currentDate.getDate() + step);
      currentDate.setHours(0, 0, 0, 0);
    }
    return dates;
  }

  // node_modules/date-fns/esm/eachWeekOfInterval/index.js
  function eachWeekOfInterval(dirtyInterval, options) {
    requiredArgs(1, arguments);
    var interval = dirtyInterval || {};
    var startDate = toDate(interval.start);
    var endDate = toDate(interval.end);
    var endTime = endDate.getTime();
    if (!(startDate.getTime() <= endTime)) {
      throw new RangeError("Invalid interval");
    }
    var startDateWeek = startOfWeek(startDate, options);
    var endDateWeek = startOfWeek(endDate, options);
    startDateWeek.setHours(15);
    endDateWeek.setHours(15);
    endTime = endDateWeek.getTime();
    var weeks = [];
    var currentWeek = startDateWeek;
    while (currentWeek.getTime() <= endTime) {
      currentWeek.setHours(0);
      weeks.push(toDate(currentWeek));
      currentWeek = addWeeks(currentWeek, 1);
      currentWeek.setHours(15);
    }
    return weeks;
  }

  // node_modules/date-fns/esm/startOfMonth/index.js
  function startOfMonth(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  // node_modules/date-fns/esm/getWeekYear/index.js
  function getWeekYear(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var year = date.getFullYear();
    var defaultOptions2 = getDefaultOptions();
    var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
      throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    }
    var firstWeekOfNextYear = /* @__PURE__ */ new Date(0);
    firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setHours(0, 0, 0, 0);
    var startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
    var firstWeekOfThisYear = /* @__PURE__ */ new Date(0);
    firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setHours(0, 0, 0, 0);
    var startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
    if (date.getTime() >= startOfNextYear.getTime()) {
      return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
      return year;
    } else {
      return year - 1;
    }
  }

  // node_modules/date-fns/esm/startOfWeekYear/index.js
  function startOfWeekYear(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    requiredArgs(1, arguments);
    var defaultOptions2 = getDefaultOptions();
    var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
    var year = getWeekYear(dirtyDate, options);
    var firstWeek = /* @__PURE__ */ new Date(0);
    firstWeek.setFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setHours(0, 0, 0, 0);
    var date = startOfWeek(firstWeek, options);
    return date;
  }

  // node_modules/date-fns/esm/getWeek/index.js
  var MILLISECONDS_IN_WEEK = 6048e5;
  function getWeek(dirtyDate, options) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var diff = startOfWeek(date, options).getTime() - startOfWeekYear(date, options).getTime();
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
  }

  // node_modules/date-fns/esm/isSameMonth/index.js
  function isSameMonth(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    var dateLeft = toDate(dirtyDateLeft);
    var dateRight = toDate(dirtyDateRight);
    return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();
  }

  // node_modules/date-fns/esm/subMonths/index.js
  function subMonths(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    return addMonths(dirtyDate, -amount);
  }

  // dist/libs/core/src/index.js
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i32 = decorators.length - 1, decorator; i32 >= 0; i32--)
      if (decorator = decorators[i32])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };
  var __accessCheck = (obj, member, msg7) => {
    if (!member.has(obj))
      throw TypeError("Cannot " + msg7);
  };
  var __privateGet = (obj, member, getter) => {
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
  };
  var __privateAdd = (obj, member, value) => {
    if (member.has(obj))
      throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  };
  var __privateSet = (obj, member, value, setter) => {
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
  };
  var __privateMethod = (obj, member, method) => {
    __accessCheck(obj, member, "access private method");
    return method;
  };
  function constrainSlots(self2) {
    self2.updateComplete.then(() => {
      const slots = self2.shadowRoot?.querySelectorAll("slot[gds-allow]");
      if (!slots)
        return;
      for (const node of Array.from(self2.childNodes)) {
        if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim() === "") {
          node.parentNode?.removeChild(node);
        }
      }
      const constrain = (slot) => {
        const allowed = slot.getAttribute("gds-allow")?.split(" ") || [];
        for (const node of Array.from(slot.assignedNodes())) {
          if (!allowed.includes(node.nodeName.toLowerCase())) {
            node.parentNode?.removeChild(node);
          }
        }
      };
      slots.forEach((slot) => {
        constrain(slot);
        slot.addEventListener("slotchange", () => constrain(slot));
      });
    });
  }
  var stem_styles_default = `svg:not([display=none]) {
  contain: layout style;
  display: flex;
  height: 1lh;
  isolation: isolate;
  overflow: hidden;
  width: auto;
}

symbol {
  fill: none;
  height: 24px;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2px;
  width: 24px;
}`;
  var GdsIcon = class extends s5 {
    constructor() {
      super(...arguments);
      this.open = false;
      this.name = "";
    }
    static get styles() {
      return r(stem_styles_default);
    }
    render() {
      const { name } = this;
      return x2`
      <svg display="none">
        <symbol id="plus">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </symbol>
        <symbol id="x">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </symbol>
        <symbol id="chevron">
          <polyline points="9 18 15 12 9 6" />
        </symbol>
        <symbol id="chevron-down">
          <polyline points="6 9 12 15 18 9" />
        </symbol>
        <symbol id="arrow">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </symbol>
        <symbol id="bell">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </symbol>
        <symbol id="calendar">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10" />
        </symbol>
        <symbol id="lock">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </symbol>
        <symbol id="eye">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </symbol>
        <symbol id="hash">
          <line x1="4" y1="9" x2="20" y2="9" />
          <line x1="4" y1="15" x2="20" y2="15" />
          <line x1="10" y1="3" x2="8" y2="21" />
          <line x1="16" y1="3" x2="14" y2="21" />
        </symbol>
        <symbol id="mail">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </symbol>
        <symbol id="send">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </symbol>
        <symbol id="info">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </symbol>
        <symbol id="tel">
          <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /> 
        </symbol>
        <symbol id="search">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </symbol>
        <symbol id="user">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </symbol>
        <symbol id="arrow-up">
         <line x1="12" y1="19" x2="12" y2="5" />
         <polyline points="5 12 12 5 19 12" /> 
        </symbol>
        <symbol id="arrow-down">
          <line x1="12" y1="5" x2="12" y2="19" /> 
          <polyline points="19 12 12 19 5 12" /> 
        </symbol>
        <symbol id="warning">
         <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
         <line x1="12" y1="9" x2="12" y2="13" />
         <path x1="12" y1="17" x2="12.01" y2="17" />
        </symbol>
      </svg>
      <svg viewBox="0 0 24 24">
        <use href="#${name}"></use>
      </svg>
    `;
    }
  };
  GdsIcon.properties = {
    open: { type: String, reflect: true },
    name: { type: String }
  };
  GdsIcon = __decorateClass([
    e5("gds-icon")
  ], GdsIcon);
  var ripple_styles_default = `:host {
  --gds-ripple-animation-name: ripple;
  --gds-ripple-animation: var(--gds-ripple-animation-name)
    var(--gds-sys-animation-duration) var(--gds-sys-animation-timing-function)
    var(--gds-sys-animation-delay) var(--gds-sys-animation-iteration-count)
    var(--gds-sys-animation-direction) var(--gds-sys-animation-fill-mode)
    var(--gds-sys-animation-play-state);
  border-radius: var(--gds-sys-radii-full);
  contain: strict;
  display: flex;
  height: 100%;
  inset: 0;
  overflow: hidden;
  position: absolute;
  width: 100%;
}

div {
  background-color: currentColor;
  border-radius: var(--gds-sys-radii-full);
  display: flex;
  height: 20px;
  left: var(--gds-ripple-left, 50%);
  margin-left: -10px;
  margin-top: -10px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: var(--gds-ripple-top, 50%);
  width: 20px;
  will-change: transform;
}

div.gds-ripple-effect {
  animation: var(--gds-ripple-animation);
}

@keyframes ripple {
  from {
    opacity: 0.5;
    transform: scale(0);
  }
  to {
    opacity: 0;
    transform: scale(calc(3 * var(--mt-ripple-spread, 4)));
  }
}
@media (prefers-reduced-motion: reduce) {
  :host {
    --gds-ripple-animation-name: none !important;
  }
}`;
  var VER_SUFFIX = "-3ddbd4";
  var elementLookupTable = /* @__PURE__ */ new Map();
  var gdsCustomElement = (tagName) => {
    if (globalThis.GDS_DISABLE_VERSIONED_ELEMENTS) {
      return e5(tagName);
    }
    const versionedTagName = tagName + VER_SUFFIX;
    elementLookupTable.set(tagName, versionedTagName);
    if (customElements.get(versionedTagName))
      return (_classOrDescriptor) => false;
    return e5(versionedTagName);
  };
  var templateCache = /* @__PURE__ */ new WeakMap();
  function applyElementScoping(strings, ...values) {
    let modstrings = templateCache.get(strings);
    if (!modstrings) {
      modstrings = replaceTags(strings);
      modstrings.raw = replaceTags(strings.raw);
      templateCache.set(strings, modstrings);
    }
    return [modstrings, ...values];
  }
  var replaceTags = (inStr) => inStr.map((s22) => {
    for (const [key, value] of elementLookupTable.entries()) {
      s22 = s22.replace(new RegExp(`${key}(?![-a-z])`, "mg"), value);
    }
    return s22;
  });
  function htmlTemplateTagFactory(extendedTag) {
    return (strings, ...values) => {
      if (globalThis.GDS_DISABLE_VERSIONED_ELEMENTS) {
        return extendedTag(strings, ...values);
      }
      const [modstrings, ...modvalues] = applyElementScoping(strings, ...values);
      return extendedTag(modstrings, ...modvalues);
    };
  }
  var html2 = htmlTemplateTagFactory(x2);
  function getScopedTagName(tagName) {
    return elementLookupTable.get(tagName) ?? tagName;
  }
  function getUnscopedTagName(tagName) {
    return [...elementLookupTable.entries()].find(
      ([, value]) => value === tagName
    )?.[0];
  }
  var Ripple = class extends s5 {
    constructor() {
      super(...arguments);
      this.onmousedown = (e42) => {
        const target = e42.target;
        const rect = target.getBoundingClientRect();
        const rippleEl = this._rippleEl;
        if (rippleEl) {
          rippleEl.classList.remove("gds-ripple-effect");
          this.style.setProperty("--gds-ripple-top", `${e42.clientY - rect.top}px`);
          this.style.setProperty("--gds-ripple-left", `${e42.clientX - rect.left}px`);
          setTimeout(() => {
            rippleEl.classList.add("gds-ripple-effect");
          }, 20);
        }
      };
    }
    static get styles() {
      return r(ripple_styles_default);
    }
    render() {
      return x2`<div></div>`;
    }
  };
  __decorateClass([
    i5("div")
  ], Ripple.prototype, "_rippleEl", 2);
  Ripple = __decorateClass([
    gdsCustomElement("gds-ripple")
  ], Ripple);
  var pallet_default = `/**
 * Do not edit directly
 * Generated on Sun, 11 Feb 2024 20:14:00 GMT
 */

:host {
  --gds-ref-color-blue-5: #001127;
  --gds-ref-color-blue-10: #001C39;
  --gds-ref-color-blue-15: #00264B;
  --gds-ref-color-blue-20: #00315D;
  --gds-ref-color-blue-25: #003C70;
  --gds-ref-color-blue-30: #004883;
  --gds-ref-color-blue-35: #005397;
  --gds-ref-color-blue-40: #005FAC;
  --gds-ref-color-blue-45: #006CC1;
  --gds-ref-color-blue-50: #0078D7;
  --gds-ref-color-blue-55: #0085EC;
  --gds-ref-color-blue-60: #1992FF;
  --gds-ref-color-blue-65: #4EA0FF;
  --gds-ref-color-blue-70: #6FAEFF;
  --gds-ref-color-blue-75: #8ABBFF;
  --gds-ref-color-blue-80: #A4C9FF;
  --gds-ref-color-blue-85: #BCD6FF;
  --gds-ref-color-blue-90: #D4E3FF;
  --gds-ref-color-blue-95: #EBF1FF;
  --gds-ref-color-blue-98: #F8F9FF;
  --gds-ref-color-green-5: #001505;
  --gds-ref-color-green-10: #00210E;
  --gds-ref-color-green-15: #002D10;
  --gds-ref-color-green-20: #003916;
  --gds-ref-color-green-25: #00461D;
  --gds-ref-color-green-30: #005323;
  --gds-ref-color-green-35: #00602A;
  --gds-ref-color-green-40: #006D31;
  --gds-ref-color-green-45: #007B38;
  --gds-ref-color-green-50: #138942;
  --gds-ref-color-green-55: #29964D;
  --gds-ref-color-green-60: #39A459;
  --gds-ref-color-green-65: #48B265;
  --gds-ref-color-green-70: #57C071;
  --gds-ref-color-green-75: #65CE7E;
  --gds-ref-color-green-80: #73DC8A;
  --gds-ref-color-green-85: #81EA97;
  --gds-ref-color-green-90: #8FF9A4;
  --gds-ref-color-green-95: #C5FFCA;
  --gds-ref-color-green-98: #EAFFE8;
  --gds-ref-color-black: #000000;
  --gds-ref-color-white: #FFFFFF;
  --gds-ref-color-grey-5: #0D0D0C;
  --gds-ref-color-grey-10: #1B1B18;
  --gds-ref-color-grey-15: #282825;
  --gds-ref-color-grey-20: #353531;
  --gds-ref-color-grey-25: #42423D;
  --gds-ref-color-grey-30: #505049;
  --gds-ref-color-grey-35: #5D5D56;
  --gds-ref-color-grey-40: #6A6A62;
  --gds-ref-color-grey-45: #77776E;
  --gds-ref-color-grey-50: #85857A;
  --gds-ref-color-grey-55: #919188;
  --gds-ref-color-grey-60: #9D9D95;
  --gds-ref-color-grey-65: #A9A9A2;
  --gds-ref-color-grey-70: #B6B6AF;
  --gds-ref-color-grey-75: #C2C2BD;
  --gds-ref-color-grey-80: #CECECA;
  --gds-ref-color-grey-85: #DADAD7;
  --gds-ref-color-grey-90: #E7E7E4;
  --gds-ref-color-grey-95: #F3F3F2;
  --gds-ref-color-grey-98: #F9F9F9;
  --gds-ref-color-orange-5: #1A0F00;
  --gds-ref-color-orange-10: #271900;
  --gds-ref-color-orange-15: #352200;
  --gds-ref-color-orange-20: #422C00;
  --gds-ref-color-orange-25: #503700;
  --gds-ref-color-orange-30: #503700;
  --gds-ref-color-orange-35: #6E4C00;
  --gds-ref-color-orange-40: #7D5700;
  --gds-ref-color-orange-45: #8D6300;
  --gds-ref-color-orange-50: #9D6E00;
  --gds-ref-color-orange-55: #AE7A00;
  --gds-ref-color-orange-60: #BE8600;
  --gds-ref-color-orange-65: #CF9300;
  --gds-ref-color-orange-70: #E19F00;
  --gds-ref-color-orange-75: #F2AC00;
  --gds-ref-color-orange-80: #FFBA30;
  --gds-ref-color-orange-85: #FFCC77;
  --gds-ref-color-orange-90: #FFDEAB;
  --gds-ref-color-orange-95: #FFEED9;
  --gds-ref-color-orange-98: #FFF8F3;
  --gds-ref-color-red-5: #2B0200;
  --gds-ref-color-red-10: #3E0400;
  --gds-ref-color-red-15: #510700;
  --gds-ref-color-red-20: #650B00;
  --gds-ref-color-red-25: #790F00;
  --gds-ref-color-red-30: #8E1400;
  --gds-ref-color-red-35: #A31800;
  --gds-ref-color-red-40: #BA1D00;
  --gds-ref-color-red-45: #D02200;
  --gds-ref-color-red-50: #E23010;
  --gds-ref-color-red-55: #F53E1D;
  --gds-ref-color-red-60: #FF5636;
  --gds-ref-color-red-65: #FF7257;
  --gds-ref-color-red-70: #FF8A73;
  --gds-ref-color-red-75: #FFA08D;
  --gds-ref-color-red-80: #FFB4A5;
  --gds-ref-color-red-85: #FFC8BC;
  --gds-ref-color-red-90: #FFDAD3;
  --gds-ref-color-red-95: #FFEDE9;
  --gds-ref-color-red-98: #FFF8F6;
}
`;
  var light_default = `/**
 * Do not edit directly
 * Generated on Sun, 11 Feb 2024 20:14:00 GMT
 */

:host {
  color-scheme: light;
  --gds-sys-color-accent-accent-green: #006D31;
  --gds-sys-color-accent-accent-orange: #FFBA30;
  --gds-sys-color-background-background: #FFFFFF;
  --gds-sys-color-background-background-dim: #F3F3F2;
  --gds-sys-color-container-container: #F3F3F2;
  --gds-sys-color-container-container-dim1: #E7E7E4;
  --gds-sys-color-container-container-dim2: #DADAD7;
  --gds-sys-color-container-container-bright: #FFFFFF;
  --gds-sys-color-container-container-shade1: #353531;
  --gds-sys-color-container-container-shade2: #1B1B18;
  --gds-sys-color-container-container-disabled: #F9F9F9;
  --gds-sys-color-container-container-positive: #006D31;
  --gds-sys-color-container-container-negative: #BA1D00;
  --gds-sys-color-content-content: #353531;
  --gds-sys-color-content-content-inverse: #FFFFFF;
  --gds-sys-color-content-content-secondary: #6A6A62;
  --gds-sys-color-content-content-positive: #006D31;
  --gds-sys-color-content-content-negative: #BA1D00;
  --gds-sys-color-content-content-negative-bright: #FFF8F6;
  --gds-sys-color-content-content-custom-blue-bright: #F8F9FF;
  --gds-sys-color-content-content-disabled: #9D9D95;
  --gds-sys-color-custom-custom-blue: #005FAC;
  --gds-sys-color-custom-on-custom-blue: #D4E3FF;
  --gds-sys-color-custom-custom-blue-bright: #D4E3FF;
  --gds-sys-color-custom-on-custom-blue-bright: #00315D;
  --gds-sys-color-custom-custom-green: #003916;
  --gds-sys-color-custom-on-custom-green: #EAFFE8;
  --gds-sys-color-custom-custom-green-bright: #EAFFE8;
  --gds-sys-color-custom-on-custom-green-bright: #003916;
  --gds-sys-color-custom-custom-grey: #353531;
  --gds-sys-color-custom-on-custom-grey: #E7E7E4;
  --gds-sys-color-custom-custom-grey-bright: #E7E7E4;
  --gds-sys-color-custom-on-custom-grey-bright: #353531;
  --gds-sys-color-primary-primary: #353531;
  --gds-sys-color-state-layers-state-black: #000000 10%;
  --gds-sys-color-state-layers-state-black-dim1: #000000 20%;
  --gds-sys-color-state-layers-state-black-dim2: #000000 40%;
  --gds-sys-color-state-layers-state-black-shade: #000000 60%;
  --gds-sys-color-state-layers-state-positive: #006d31 10%;
  --gds-sys-color-state-layers-state-positive-dim: #006d31 20%;
  --gds-sys-color-state-layers-state-negative: #ba1d00 10%;
  --gds-sys-color-state-layers-state-negative-dim: #ba1d00 20%;
  --gds-sys-color-state-layers-state-custom-blue: #005fac 20%;
  --gds-sys-color-status-information-information: #353531;
  --gds-sys-color-status-information-on-information: #FFFFFF;
  --gds-sys-color-status-information-information-bright: #F3F3F2;
  --gds-sys-color-status-information-on-information-bright: #353531;
  --gds-sys-color-status-negative-negative: #BA1D00;
  --gds-sys-color-status-negative-on-negative: #FFFFFF;
  --gds-sys-color-status-negative-negative-bright: #FFEDE9;
  --gds-sys-color-status-negative-on-negative-bright: #BA1D00;
  --gds-sys-color-status-warning-warning: #9D6E00;
  --gds-sys-color-status-warning-on-warning: #FFFFFF;
  --gds-sys-color-status-warning-warning-bright: #FFEED9;
  --gds-sys-color-status-warning-on-warning-bright: #7D5700;
  --gds-sys-color-status-positive-positive: #006D31;
  --gds-sys-color-status-positive-on-positive: #FFFFFF;
  --gds-sys-color-status-positive-positive-bright: #EAFFE8;
  --gds-sys-color-status-positive-on-positive-bright: #006D31;
  --gds-sys-color-status-notice-notice: #005FAC;
  --gds-sys-color-status-notice-on-notice: #FFFFFF;
  --gds-sys-color-status-notice-notice-bright: #EBF1FF;
  --gds-sys-color-status-notice-on-notice-bright: #005FAC;
  --gds-sys-color-stroke-stroke: #353531;
  --gds-sys-color-stroke-stroke-variant1: #85857A;
  --gds-sys-color-stroke-stroke-variant2: #CECECA;
  --gds-sys-color-stroke-stroke-disabled: #9D9D95;
  --gds-sys-color-stroke-stroke-notice: #005FAC;
  --gds-sys-color-stroke-stroke-positive: #006D31;
  --gds-sys-color-stroke-stroke-warning: #7D5700;
  --gds-sys-color-stroke-stroke-negative: #BA1D00;
  --gds-sys-color-stroke-stroke-custom-blue: #BA1D00;
}
`;
  var tokens_default = `:host {
  /* Color styles */
  --gds-color-transparent: transparent;
  --gds-color-current: currentColor;
  --gds-theme: var(--gds-color-green-40);
  --gds-color-white: rgba(255, 255, 255, 1);
  --gds-color-black: rgba(0, 0, 0, 1);

  /* New update 29.05.23 */
  --gds-color-text-primary: var(--gds-ref-color-grey-20);
  --gds-color-text-secondary: var(--gds-ref-color-grey-40);
  --gds-color-text-disabled: var(--gds-ref-color-grey-60);
  --gds-color-text-inverse: var(--gds-ref-color-white);
  --gds-color-text-red: var(--gds-ref-color-red-40);
  --gds-color-text-green: var(--gds-ref-color-green-40);
  --gds-color-text-blue: var(--gds-ref-color-blue-40);
  --gds-color-link-primary: var(--gds-ref-color-grey-20);
  --gds-color-icon-primary: var(--gds-ref-color-grey-20);
  --gds-color-icon-secondary: var(--gds-ref-color-grey-40);
  --gds-color-icon-disabled: var(--gds-ref-color-grey-60);
  --gds-color-icon-inverse: var(--gds-ref-color-white);
  --gds-color-icon-red: var(--gds-ref-color-red-40);
  --gds-color-icon-green: var(--gds-ref-color-green-40);
  --gds-color-icon-blue: var(--gds-ref-color-blue-40);
  --gds-color-background-primary: var(--gds-ref-color-white);
  --gds-color-stroke-primary: var(--gds-ref-color-grey-50);
  --gds-color-stroke-secondary: var(--gds-ref-color-grey-80);
  --gds-color-stroke-inverse: var(--gds-ref-color-white);
  --gds-color-stroke-error: var(--gds-ref-color-red-40);

  /* Text-size styles */
  /* font-size: 100%; font-size: large; font-size: larger; font-size: medium; font-size: small; font-size: smaller;  --gds-fs-base: 10px; */

  --gds-fs-base: 100%; /* 16px is the default font size */
  --gds-fs-display-large: 5.125rem; /* 82px / 16px = 5.125rem */
  --gds-fs-display-medium: 4rem; /* 64px / 16px = 4rem */
  --gds-fs-display-small: 2.5rem; /* 40px / 16px = 2.5rem */
  --gds-fs-headline-large: 2rem; /* 32px / 16px = 2rem */
  --gds-fs-headline-medium: 1.75rem; /* 28px / 16px = 1.75rem */
  --gds-fs-headline-small: 1.5rem; /* 24px / 16px = 1.5rem */
  --gds-fs-title-large: 1.375rem; /* 22px / 16px = 1.375rem */
  --gds-fs-title-medium: 1rem; /* 16px / 16px = 1.6rem */
  --gds-fs-title-small: 0.875rem; /* 14px / 16px = .875rem */
  --gds-fs-body-large: 1rem; /* 16px / 16px = 1rem */
  --gds-fs-body-medium: 0.875rem; /* 14px / 16px = .875rem */
  --gds-fs-body-small: 0.75rem; /* 12px / 16px = .75rem */
  --gds-fs-label-large: 1rem; /* 16px / 16px = 1rem */
  --gds-fs-label-medium: 0.875rem; /* 14px / 16px = .875rem */
  --gds-fs-label-small: 0.75rem; /* 12px / 16px = .75rem */
  --gds-fs-label-information-large: 1rem; /* 16px / 16px = 1rem */
  --gds-fs-label-information-medium: 0.875rem; /* 14px / 16px = .75rem */
  --gds-fs-label-input-large: 1rem; /* 16px / 16px = 1rem */
  --gds-fs-label-input-medium: 0.875rem; /* 14px / 16px = .875rem */
  --gds-fs-label-overline: 0.875rem; /* 14px / 16px = .875rem */

  /* Line heights */
  --gds-lh-display-large: 1.1905; /* 98/82 */
  --gds-lh-display-medium: 1.25; /* 80/64 */
  --gds-lh-display-small: 1.3077; /* 52/40 */
  --gds-lh-headline-large: 1.25; /* 40/32 */
  --gds-lh-headline-medium: 1.125; /* 36/32 */
  --gds-lh-headline-small: 1.2; /* 30/24 */
  --gds-lh-title-large: 1.1071; /* 28/22 */
  --gds-lh-title-medium: 1.5; /* 24/16 */
  --gds-lh-title-small: 1.4286; /* 20/14 */
  --gds-lh-body-large: 1.25; /* 20/16 */
  --gds-lh-body-medium: 1.4286; /* 20/14 */
  --gds-lh-body-small: 1.3333; /* 16/12 */
  --gds-lh-label-large: 1.25; /* 20/16 */
  --gds-lh-label-medium: 1.4286; /* 20/14 */
  --gds-lh-label-small: 1.3333; /* 16/12 */
  --gds-lh-label-information-large: 1.25; /* 20/16 */
  --gds-lh-label-information-medium: 1.4286; /* 20/14 */
  --gds-lh-label-input-large: 1.25; /* 20/16 */
  --gds-lh-label-input-medium: 1.4286; /* 20/14 */
  --gds-lh-label-overline: 1.1667; /* 18/14 */

  /* Font weights */
  --gds-fw-light: 300;
  --gds-fw-regular: 400;
  --gds-fw-medium: 500;
  --gds-fw-bold: 700;

  /* Spacing */
  --gds-spacing-0: 0;
  --gds-spacing-1: 0.125rem; /* 2px / 16px = 0.125rem */
  --gds-spacing-2: 0.25rem; /* 4px / 16px = 0.25rem */
  --gds-spacing-3: 0.5rem; /* 8px / 16px = 0.5rem */
  --gds-spacing-4: 0.75rem; /* 12px / 16px = 0.75rem */
  --gds-spacing-5: 1rem; /* 16px / 16px = 1rem */
  --gds-spacing-6: 1.5rem; /* 24px / 16px = 1.5rem */
  --gds-spacing-7: 2rem; /* 32px / 16px = 2rem */
  --gds-spacing-8: 2.5rem; /* 40px / 16px = 2.5rem */
  --gds-spacing-9: 3rem; /* 48px / 16px = 3rem */
  --gds-spacing-10: 4rem; /* 64px / 16px = 4rem */
  --gds-spacing-11: 5rem; /* 80px / 16px = 5rem */
  --gds-spacing-12: 6rem; /* 96px / 16px = 6rem */
  --gds-spacing-13: 7rem; /* 112px / 16px = 7rem */
  --gds-spacing-14: 8rem; /* 128px / 16px = 8rem */

  /* Transitions */
  --gds-sys-transition-easing: cubic-bezier(0.46, 0.03, 0.52, 0.96);
  --gds-sys-transition-properties: all;
  --gds-sys-transition-duration: 0.15s;
  --gds-sys-transition-delay: 0s;
  --gds-sys-transition-timing-function: var(--gds-sys-transition-easing);
  --gds-sys-transition: var(--gds-sys-transition-properties)
    var(--gds-sys-transition-duration) var(--gds-sys-transition-timing-function)
    var(--gds-sys-transition-delay);

  /* Animation */
  --gds-sys-animation-duration: 1.2s;
  --gds-sys-animation-timing-function: ease;
  --gds-sys-animation-delay: 0s;
  --gds-sys-animation-iteration-count: 1;
  --gds-sys-animation-direction: normal;
  --gds-sys-animation-fill-mode: none;
  --gds-sys-animation-play-state: running;

  /* Border */
  --gds-sys-radii-small: var(--gds-spacing-2);
  --gds-sys-radii-medium: var(--gds-spacing-3);
  --gds-sys-radii-large: var(--gds-spacing-4);
  --gds-sys-radii-full: var(--gds-spacing-14);
  --gds-sys-border-radius: var(--gds-sys-radii-full);
  --gds-sys-border-width: 1px;
  --gds-sys-border-color: var(--gds-ref-color-grey-20);
  --gds-sys-border-style: solid;
  --gds-sys-border: var(--gds-sys-border-width) var(--gds-sys-border-style)
    var(--gds-sys-border-color);

  /* Base Padding */
  --gds-sys-padding-inline: var(--gds-spacing-5);
  --gds-sys-padding-block: var(--gds-spacing-4);

  /* Gap */
  --gds-sys-gap-small: var(--gds-spacing-3);
  --gds-sys-gap-medium: var(--gds-spacing-5);
  --gds-sys-gap-large: var(--gds-spacing-8);

  /* Background styles */
  --gds-bg-a50: 0.5;
  --gds-bg-a80: 0.8;
}
`;
  var a11y_default = `/* Styles for dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --gds-color-text-primary: var(--gds-color-text-primary-dark);
    --gds-color-text-secondary: var(--gds-color-text-secondary-dark);
    --gds-color-text-disabled: var(--gds-color-text-disabled-dark);
    --gds-color-text-inverse: var(--gds-color-text-inverse-dark);
    --gds-color-text-red: var(--gds-color-text-red-dark);
    --gds-color-text-green: var(--gds-color-text-green-dark);
    --gds-color-text-blue: var(--gds-color-text-blue-dark);
    --gds-color-link-primary: var(--gds-color-link-primary-dark);
    --gds-color-icon-primary: var(--gds-color-icon-primary-dark);
    --gds-color-icon-secondary: var(--gds-color-icon-secondary-dark);
    --gds-color-icon-disabled: var(--gds-color-icon-disabled-dark);
    --gds-color-icon-inverse: var(--gds-color-icon-inverse-dark);
    --gds-color-icon-red: var(--gds-color-icon-red-dark);
    --gds-color-icon-green: var(--gds-color-icon-green-dark);
    --gds-color-icon-blue: var(--gds-color-icon-blue-dark);
    --gds-color-background-primary: var(--gds-color-background-primary-dark);
    --gds-color-stroke-primary: var(--gds-color-stroke-primary-dark);
    --gds-color-stroke-secondary: var(--gds-color-stroke-secondary-dark);
    --gds-color-stroke-inverse: var(--gds-color-stroke-inverse-dark);
    --gds-color-stroke-error: var(--gds-color-stroke-error-dark);
  }
}

/* Styles for reduced motion mode */
@media (prefers-reduced-motion: reduce) {
  :root {
    --gds-sys-transition-duration: 0s;
    --gds-sys-animation-duration: 0s;
  }
}

/* Styles for high contrast mode */
@media (prefers-contrast: high) {
  /* styles for high contrast motion */
}

/* Styles for hover state on devices that support hover */
@media (hover: hover) {
  /* styles for hover state */
}

/* Styles for print media */
@media print {
  /* styles for print */
}

/* Styles for devices with a high resolution */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  /* styles for high resolution displays */
}

/* Styles for devices with a pointer, such as a mouse */
@media (pointer: fine) {
  /* styles for pointer devices */
}

/* Styles for devices that support touch */
@media (pointer: coarse) {
  /* styles for touch devices */
}

/* Styles for devices with a 16:9 aspect ratio */
@media (aspect-ratio: 16/9) {
  /* styles for 16:9 aspect ratio */
}

/* Styles for devices in portrait orientation */
@media (orientation: portrait) {
  /* styles for portrait orientation */
}

/* Styles for devices in landscape orientation */
@media (orientation: landscape) {
  /* styles for landscape orientation */
}

/* Styles for devices with a monochrome color scheme */
@media (monochrome) {
  /* styles for monochrome devices */
}

/* Styles for devices with a forced color scheme */
@media (forced-colors: active) {
  /* styles for devices with a forced color scheme */
}

/* Styles for devices with a wide color gamut */
@media (color-gamut: p3) {
  /* styles for devices with a wide color gamut */
}

/* Styles for devices with a high dynamic range */
@media (dynamic-range: high) {
  /* styles for devices with a high dynamic range */
}

/* Styles for devices with a grid */
@media (display: grid) {
  /* styles for devices with a grid */
}

@media (prefers-reduced-transparency: reduce) {
  /* CSS styles for reduced transparency */
}

/* Color Mix */
@supports (background-color: color-mix(in srgb, red, transparent 10%)) {
  [alert='support'] {
    display: none;
  }
}

/* Backdrop */

@supports ((-webkit-backdrop-filter: blur(20px)) or (backdrop-filter: blur(20px))) {
  :host([blur]) gds-blur {
    -webkit-backdrop-filter: blur(20px);
            backdrop-filter: blur(20px);
  }
}
`;
  var tokens = [
    r(pallet_default),
    r(light_default),
    //unsafeCSS(darkThemeCss),
    r(tokens_default),
    r(a11y_default)
  ];
  var button_style_default = `@layer tokens, a11y, core, variants, sizes, sets, disabled;

@layer tokens {
  :host {
    --_gap: var(--gds-sys-gap-small);

    --_transition: var(--gds-sys-transition);

    --_padding-inline: var(--gds-sys-padding-inline);
    --_padding-block: var(--gds-sys-padding-block);

    --_border-radius: var(--gds-sys-border-radius);
    --_border-width: var(--gds-sys-border-width);
    --_border-style: var(--gds-sys-border-style);

    --_color-bg: var(--gds-sys-color-content-content);
    --_color-text: var(--gds-sys-color-content-content-inverse);
    --_color-border: var(--gds-sys-color-stroke-stroke);

    --_color-outline-alpha: 60%;
    --_color-outline: var(--_color-border);

    /* These state layer variables can be set to the correct state layer token in
    * the variant and set specific styles. It will be blended with \`--_color-bg\`
    * for the \`background-color\` rule. */
    --_state-layer-hover: var(--gds-sys-color-state-layers-state-black);
    --_state-layer-active: var(--gds-sys-color-state-layers-state-black-shade);

    contain: layout;
    display: inline-block;
    isolation: isolate;

    max-width: 100%;
  }
}

@layer a11y {
  @media (prefers-color-scheme: dark) {
    /* TODO */
  }
  @media (prefers-reduced-motion: reduce) {
    :host {
      --_transition: none;
    }
  }
}

@layer core {
  button {
    align-items: center;

    background-color: var(--_color-bg);
    block-size: 100%;

    border-color: var(--_color-border);
    border-radius: var(--_border-radius);
    border-style: var(--_border-style);
    border-width: var(--_border-width);

    box-sizing: border-box;
    color: var(--_color-text);
    color-scheme: dark light;
    cursor: pointer;

    display: inline-flex;
    gap: var(--_gap);
    height: var(--_size);

    inline-size: 100%;
    justify-content: space-between;
    justify-items: center;
    outline-color: transparent;
    outline-offset: 2px;
    outline-style: solid;
    outline-width: 2px;
    padding-block: var(--_padding-block);
    padding-inline: var(--_padding-inline);
    position: relative;
    transition: var(--_transition);
    font-family: inherit;

    /* TODO: Tokens... */
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25;

    &:focus {
      outline-color: color-mix(in srgb,
        var(--_color-outline),
        transparent var(--_color-outline-alpha));

      &:not(:focus-visible) {
        outline-color: transparent;
      }
    }

    &:hover {
      background-color: color-mix(
        in srgb,
        var(--_color-bg),
        var(--_state-layer-hover));
      border-color: color-mix(
        in srgb,
        var(--_color-border),
        var(--_state-layer-hover));
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--_color-bg),
        var(--_state-layer-active));
      border-color: color-mix(
        in srgb,
        var(--_color-border),
        var(--_state-layer-active));
    }
  }

  button slot:not([name]) {
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

@layer variants {
  :host([variant*='secondary']) button {
    --_color-bg: var(--gds-sys-color-content-content-inverse);
    --_color-text: var(--gds-sys-color-content-content);
    --_color-border: var(--gds-sys-color-stroke-stroke);

    &:active {
      --_state-layer-active: var(--gds-sys-color-state-layers-state-black-dim1);
    }
  }

  :host([variant*='tertiary']) button {
    --_color-bg: transparent;
    --_color-text: var(--gds-sys-color-content-content);
    --_color-border: transparent;

    &:hover {
      --_color-border: var(--gds-sys-color-stroke-stroke);
    }

    &:active {
      --_state-layer-active: var(--gds-sys-color-state-layers-state-black-dim1);
      --_color-border: var(--gds-sys-color-stroke-stroke);
    }
  }

  button.circle {
    align-items: center;
    aspect-ratio: 1/1;
    height: var(--_size);
    justify-content: center;
    padding: 0;
    width: var(--_size);

    &::slotted(gds-icon) {
      align-items: center;
      display: flex;
      height: 24px;
      justify-content: center;
      width: 24px;
    }
  }
}

@layer sizes {
  :host([size='small']) button {
    --_padding-inline: var(--gds-spacing-5);
    --_padding-block: var(--gds-spacing-3);
    --_size: 2rem;
    font-size: 0.875rem;
  }

  :host([size='medium']) button {
    --_padding-inline: var(--gds-spacing-5);
    --_padding-block: var(--gds-spacing-3);
    --_size: 2.5rem;
  }

  :host([size='large']) button {
    --_padding-inline: var(--gds-spacing-5);
    --_padding-block: var(--gds-spacing-4);
    --_size: 3rem;
  }
}

@layer sets {
  :host([variant='primary'][set='positive']) button {
    --_bg: var(--gds-sys-color-container-container-positive);
    --_color-bg: var(--_bg);
    --_color-border: var(--_bg);

    &:hover {
      --_state-layer-hover: var(--gds-sys-color-state-layers-state-black-dim1);
    }

    &:active {
      --_state-layer-active: var(--gds-sys-color-state-layers-state-black-dim2);
    }

    &:focus {
      --_color-outline: var(--_bg);
    }
  }

  :host([variant='secondary'][set='positive']) button {
    --_color-bg: var(--gds-sys-color-content-content-inverse);
    --_color-text: var(--gds-sys-color-content-content-positive);
    --_color-border: var(--gds-sys-color-stroke-stroke-positive);

    &:hover {
      --_state-layer-hover: var(--gds-sys-color-state-layers-state-positive);
    }

    &:active {
      --_state-layer-active: var(--gds-sys-color-state-layers-state-positive-dim);
    }
  }

  :host([variant='tertiary'][set='positive']) button {
    --_color-bg: transparent;
    --_color-text: var(--gds-sys-color-content-content-positive);
    --_color-border: transparent;

    &:hover {
      --_state-layer-hover: var(--gds-sys-color-state-layers-state-positive);
      --_color-border: var(--gds-sys-color-stroke-stroke-positive);
    }

    &:active {
      --_state-layer-active: var(--gds-sys-color-state-layers-state-positive-dim);
      --_color-border: var(--gds-sys-color-stroke-stroke-positive);
    }
  }

  :host([variant='primary'][set='negative']) button {
    --_bg: var(--gds-sys-color-container-container-negative);
    --_color-bg: var(--_bg);
    --_color-text: var(--gds-sys-color-status-negative-on-negative);
    --_color-border: var(--_bg);

    &:hover {
      --_state-layer-hover: var(--gds-sys-color-state-layers-state-black-dim1);
    }

    &:active {
      --_state-layer-active: var(--gds-sys-color-state-layers-state-black-dim2);
    }

    &:focus {
      --_color-outline: var(--_bg);
    }
  }

  :host([variant='secondary'][set='negative']) button {
    --_color-bg: var(--gds-sys-color-content-content-inverse);
    --_color-text: var(--gds-sys-color-content-content-negative);
    --_color-border: var(--gds-sys-color-stroke-stroke-negative);

    &:hover {
      --_state-layer-hover: var(--gds-sys-color-state-layers-state-negative);
    }

    &:active {
      --_state-layer-active: var(--gds-sys-color-state-layers-state-negative-dim);
    }
  }

  :host([variant='tertiary'][set='negative']) button {
    --_color-bg: transparent;
    --_color-text: var(--gds-sys-color-content-content-negative);
    --_color-border: transparent;

    &:hover {
      --_state-layer-hover: var(--gds-sys-color-state-layers-state-negative);
      --_color-border: var(--gds-sys-color-stroke-stroke-negative);
    }

    &:active {
      --_state-layer-active: var(--gds-sys-color-state-layers-state-negative-dim);
      --_color-border: var(--gds-sys-color-stroke-stroke-negative);
    }
  }
}

@layer disabled {
  button:disabled {
    --_color-bg: var(--gds-sys-color-container-container-disabled);
    border-color: var(--_color-bg);
    color: var(--gds-sys-color-content-content-disabled);
    pointer-events: none;
  }
}
`;
  var templateCache2 = /* @__PURE__ */ new WeakMap();
  function stripWhitespace(extendedTag) {
    return (strings, ...values) => {
      let modstrings = templateCache2.get(strings);
      if (!modstrings) {
        modstrings = strings.map((s22) => s22.replace(/\n[\s]+</gm, "<"));
        modstrings.raw = strings.raw;
        templateCache2.set(strings, modstrings);
      }
      return extendedTag(modstrings, ...values);
    };
  }
  function watch(propertyName, options) {
    const resolvedOptions = {
      waitUntilFirstUpdate: false,
      ...options
    };
    return (proto, propertyKey, descriptor) => {
      const { update } = proto;
      const watchedProperties = Array.isArray(propertyName) ? propertyName : [propertyName];
      proto.update = function(changedProps) {
        watchedProperties.forEach((property18) => {
          const key = property18;
          if (changedProps.has(key)) {
            const oldValue = changedProps.get(key);
            const newValue = this[key];
            if (oldValue !== newValue) {
              if (!resolvedOptions.waitUntilFirstUpdate || this.hasUpdated) {
                descriptor.value?.call(this, oldValue, newValue);
              }
            }
          }
        });
        update.call(this, changedProps);
      };
    };
  }
  function observeLightDOM(observerConfig = {
    attributes: true,
    childList: true,
    subtree: false,
    characterData: true
  }) {
    return (proto, _propertyKey, descriptor) => {
      let observer;
      const connectedCallback = proto.connectedCallback;
      const disconnectedCallback = proto.disconnectedCallback;
      proto.connectedCallback = function() {
        connectedCallback?.call(this);
        const callback = (_mutationList, _observer) => {
          descriptor.value?.call(this);
        };
        observer = new MutationObserver(callback);
        observer.observe(this, observerConfig);
      };
      proto.disconnectedCallback = function() {
        disconnectedCallback?.call(this);
        observer.disconnect();
      };
    };
  }
  function watchMediaQuery(q) {
    return (proto, _propertyKey, descriptor) => {
      const mediaQuery = window.matchMedia(q);
      const connectedCallback = proto.connectedCallback;
      const disconnectedCallback = proto.disconnectedCallback;
      proto.connectedCallback = function() {
        connectedCallback?.call(this);
        const listener = (e42) => {
          descriptor.value?.call(this, e42.matches);
        };
        mediaQuery.addEventListener("change", listener);
        this.disconnectedCallback = function() {
          disconnectedCallback?.call(this);
          mediaQuery.removeEventListener("change", listener);
        };
        descriptor.value?.call(this, mediaQuery.matches);
      };
    };
  }
  var GdsElement = class extends s5 {
    constructor() {
      super(...arguments);
      this.gdsElementName = "";
    }
    connectedCallback() {
      super.connectedCallback();
      this.gdsElementName = getUnscopedTagName(this.tagName.toLowerCase()) || this.gdsElementName;
      this.setAttribute("gds-element", this.gdsElementName);
    }
  };
  var GdsFormControlElement = class extends GdsElement {
    constructor() {
      super();
      this.invalid = false;
      this.name = "";
      this._handleFormReset = () => {
        this.value = void 0;
      };
      try {
        this.#internals = this.attachInternals();
      } catch (e42) {
        this.#internals = {
          form: this.closest("form"),
          setFormValue: (value) => {
            this.value = value;
          },
          setValidity: (validity, validationMessage) => {
            this.invalid = validity.customError;
          },
          validationMessage: "",
          validity: {
            badInput: false,
            customError: false,
            patternMismatch: false,
            rangeOverflow: false,
            rangeUnderflow: false,
            stepMismatch: false,
            tooLong: false,
            tooShort: false,
            typeMismatch: false,
            valueMissing: false,
            valid: true
          },
          willValidate: true,
          checkValidity: () => true,
          reportValidity: () => true
        };
      }
    }
    #internals;
    static {
      this.formAssociated = true;
    }
    get form() {
      return this.#internals.form;
    }
    get validity() {
      return this.#internals.validity;
    }
    get validationMessage() {
      return this.#internals.validationMessage;
    }
    get willValidate() {
      return this.#internals.willValidate;
    }
    checkValidity() {
      return this.#internals.checkValidity();
    }
    reportValidity() {
      return this.#internals.reportValidity();
    }
    connectedCallback() {
      super.connectedCallback();
      this.#internals.form?.addEventListener("reset", this._handleFormReset);
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.#internals.form?.removeEventListener("reset", this._handleFormReset);
    }
    __handleValidityChange() {
      this.#internals.setValidity(
        {
          badInput: false,
          customError: this.invalid,
          patternMismatch: false,
          rangeOverflow: false,
          rangeUnderflow: false,
          stepMismatch: false,
          tooLong: false,
          tooShort: false,
          typeMismatch: false,
          valueMissing: false,
          valid: !this.invalid
        },
        this.validationMessage || "Error message"
      );
    }
    __handleValueChange() {
      this.#internals.setFormValue(this.value);
    }
  };
  __decorateClass([
    n6({
      type: Boolean,
      reflect: true,
      attribute: "aria-invalid",
      converter: {
        fromAttribute: Boolean,
        toAttribute: (value) => value?.toString()
      }
    })
  ], GdsFormControlElement.prototype, "invalid", 2);
  __decorateClass([
    n6()
  ], GdsFormControlElement.prototype, "value", 2);
  __decorateClass([
    n6({ reflect: true })
  ], GdsFormControlElement.prototype, "name", 2);
  __decorateClass([
    watch("invalid")
  ], GdsFormControlElement.prototype, "__handleValidityChange", 1);
  __decorateClass([
    watch("value")
  ], GdsFormControlElement.prototype, "__handleValueChange", 1);
  var html4 = stripWhitespace(html2);
  var _isIconButton;
  var _mainSlotChange;
  var _handleClick;
  var GdsButton = class extends GdsFormControlElement {
    constructor() {
      super();
      this.disabled = false;
      this.variant = "primary";
      this.set = "neutral";
      this.size = "medium";
      this.label = "";
      __privateAdd(this, _isIconButton, false);
      __privateAdd(this, _mainSlotChange, () => {
        const assignedNodes = this._mainSlot?.assignedNodes() ?? [];
        __privateSet(this, _isIconButton, assignedNodes.length === 1 && assignedNodes.some((node) => node.nodeName === "GDS-ICON"));
        this.requestUpdate();
      });
      __privateAdd(this, _handleClick, (e42) => {
        this.dispatchEvent(
          new CustomEvent("gds-click", {
            bubbles: true,
            composed: true,
            detail: e42
          })
        );
        if (this.form) {
          if (this.type === "submit") {
            this.form.requestSubmit();
          } else if (this.type === "reset") {
            this.form.reset();
          }
        }
      });
      constrainSlots(this);
    }
    render() {
      return html4`
      <button
        class="${o7({ circle: __privateGet(this, _isIconButton) })}"
        ?type="${this.type}"
        ?disabled="${this.disabled}"
        @click="${__privateGet(this, _handleClick)}"
        aria-label="${this.label}"
      >
        <slot name="lead" gds-allow="gds-icon"></slot>
        <slot
          @slotchange=${__privateGet(this, _mainSlotChange)}
          gds-allow="#text gds-icon"
        ></slot>
        <slot name="trail" gds-allow="gds-icon"></slot>
        <gds-ripple></gds-ripple>
      </button>
    `;
    }
  };
  _isIconButton = /* @__PURE__ */ new WeakMap();
  _mainSlotChange = /* @__PURE__ */ new WeakMap();
  _handleClick = /* @__PURE__ */ new WeakMap();
  GdsButton.styles = [tokens, r(button_style_default)];
  GdsButton.shadowRootOptions = {
    mode: "open",
    delegatesFocus: true
  };
  __decorateClass([
    n6({ type: Boolean, reflect: true })
  ], GdsButton.prototype, "disabled", 2);
  __decorateClass([
    n6({ reflect: true })
  ], GdsButton.prototype, "type", 2);
  __decorateClass([
    n6({ reflect: true })
  ], GdsButton.prototype, "variant", 2);
  __decorateClass([
    n6({ reflect: true })
  ], GdsButton.prototype, "set", 2);
  __decorateClass([
    n6({ reflect: true })
  ], GdsButton.prototype, "size", 2);
  __decorateClass([
    n6()
  ], GdsButton.prototype, "label", 2);
  __decorateClass([
    i5("slot:not([name])")
  ], GdsButton.prototype, "_mainSlot", 2);
  GdsButton = __decorateClass([
    gdsCustomElement("gds-button")
  ], GdsButton);
  var Reflect2;
  (function(Reflect3) {
    (function(factory) {
      var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : Function("return this;")();
      var exporter = makeExporter(Reflect3);
      if (typeof root.Reflect === "undefined") {
        root.Reflect = Reflect3;
      } else {
        exporter = makeExporter(root.Reflect, exporter);
      }
      factory(exporter);
      function makeExporter(target, previous) {
        return function(key, value) {
          if (typeof target[key] !== "function") {
            Object.defineProperty(target, key, { configurable: true, writable: true, value });
          }
          if (previous)
            previous(key, value);
        };
      }
    })(function(exporter) {
      var hasOwn = Object.prototype.hasOwnProperty;
      var supportsSymbol = typeof Symbol === "function";
      var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
      var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
      var supportsCreate = typeof Object.create === "function";
      var supportsProto = { __proto__: [] } instanceof Array;
      var downLevel = !supportsCreate && !supportsProto;
      var HashMap = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: supportsCreate ? function() {
          return MakeDictionary(/* @__PURE__ */ Object.create(null));
        } : supportsProto ? function() {
          return MakeDictionary({ __proto__: null });
        } : function() {
          return MakeDictionary({});
        },
        has: downLevel ? function(map2, key) {
          return hasOwn.call(map2, key);
        } : function(map2, key) {
          return key in map2;
        },
        get: downLevel ? function(map2, key) {
          return hasOwn.call(map2, key) ? map2[key] : void 0;
        } : function(map2, key) {
          return map2[key];
        }
      };
      var functionPrototype = Object.getPrototypeOf(Function);
      var usePolyfill = typeof process === "object" && process["env"] && process["env"]["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
      var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
      var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
      var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
      var Metadata = new _WeakMap();
      function decorate(decorators, target, propertyKey, attributes) {
        if (!IsUndefined(propertyKey)) {
          if (!IsArray(decorators))
            throw new TypeError();
          if (!IsObject(target))
            throw new TypeError();
          if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
            throw new TypeError();
          if (IsNull(attributes))
            attributes = void 0;
          propertyKey = ToPropertyKey(propertyKey);
          return DecorateProperty(decorators, target, propertyKey, attributes);
        } else {
          if (!IsArray(decorators))
            throw new TypeError();
          if (!IsConstructor(target))
            throw new TypeError();
          return DecorateConstructor(decorators, target);
        }
      }
      exporter("decorate", decorate);
      function metadata(metadataKey, metadataValue) {
        function decorator(target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
            throw new TypeError();
          OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        return decorator;
      }
      exporter("metadata", metadata);
      function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
      }
      exporter("defineMetadata", defineMetadata);
      function hasMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasMetadata(metadataKey, target, propertyKey);
      }
      exporter("hasMetadata", hasMetadata);
      function hasOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
      }
      exporter("hasOwnMetadata", hasOwnMetadata);
      function getMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetMetadata(metadataKey, target, propertyKey);
      }
      exporter("getMetadata", getMetadata);
      function getOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
      }
      exporter("getOwnMetadata", getOwnMetadata);
      function getMetadataKeys(target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryMetadataKeys(target, propertyKey);
      }
      exporter("getMetadataKeys", getMetadataKeys);
      function getOwnMetadataKeys(target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryOwnMetadataKeys(target, propertyKey);
      }
      exporter("getOwnMetadataKeys", getOwnMetadataKeys);
      function deleteMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        var metadataMap = GetOrCreateMetadataMap(
          target,
          propertyKey,
          /*Create*/
          false
        );
        if (IsUndefined(metadataMap))
          return false;
        if (!metadataMap.delete(metadataKey))
          return false;
        if (metadataMap.size > 0)
          return true;
        var targetMetadata = Metadata.get(target);
        targetMetadata.delete(propertyKey);
        if (targetMetadata.size > 0)
          return true;
        Metadata.delete(target);
        return true;
      }
      exporter("deleteMetadata", deleteMetadata);
      function DecorateConstructor(decorators, target) {
        for (var i32 = decorators.length - 1; i32 >= 0; --i32) {
          var decorator = decorators[i32];
          var decorated = decorator(target);
          if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsConstructor(decorated))
              throw new TypeError();
            target = decorated;
          }
        }
        return target;
      }
      function DecorateProperty(decorators, target, propertyKey, descriptor) {
        for (var i32 = decorators.length - 1; i32 >= 0; --i32) {
          var decorator = decorators[i32];
          var decorated = decorator(target, propertyKey, descriptor);
          if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsObject(decorated))
              throw new TypeError();
            descriptor = decorated;
          }
        }
        return descriptor;
      }
      function GetOrCreateMetadataMap(O, P22, Create) {
        var targetMetadata = Metadata.get(O);
        if (IsUndefined(targetMetadata)) {
          if (!Create)
            return void 0;
          targetMetadata = new _Map();
          Metadata.set(O, targetMetadata);
        }
        var metadataMap = targetMetadata.get(P22);
        if (IsUndefined(metadataMap)) {
          if (!Create)
            return void 0;
          metadataMap = new _Map();
          targetMetadata.set(P22, metadataMap);
        }
        return metadataMap;
      }
      function OrdinaryHasMetadata(MetadataKey, O, P22) {
        var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P22);
        if (hasOwn2)
          return true;
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent))
          return OrdinaryHasMetadata(MetadataKey, parent, P22);
        return false;
      }
      function OrdinaryHasOwnMetadata(MetadataKey, O, P22) {
        var metadataMap = GetOrCreateMetadataMap(
          O,
          P22,
          /*Create*/
          false
        );
        if (IsUndefined(metadataMap))
          return false;
        return ToBoolean(metadataMap.has(MetadataKey));
      }
      function OrdinaryGetMetadata(MetadataKey, O, P22) {
        var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P22);
        if (hasOwn2)
          return OrdinaryGetOwnMetadata(MetadataKey, O, P22);
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent))
          return OrdinaryGetMetadata(MetadataKey, parent, P22);
        return void 0;
      }
      function OrdinaryGetOwnMetadata(MetadataKey, O, P22) {
        var metadataMap = GetOrCreateMetadataMap(
          O,
          P22,
          /*Create*/
          false
        );
        if (IsUndefined(metadataMap))
          return void 0;
        return metadataMap.get(MetadataKey);
      }
      function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P22) {
        var metadataMap = GetOrCreateMetadataMap(
          O,
          P22,
          /*Create*/
          true
        );
        metadataMap.set(MetadataKey, MetadataValue);
      }
      function OrdinaryMetadataKeys(O, P22) {
        var ownKeys = OrdinaryOwnMetadataKeys(O, P22);
        var parent = OrdinaryGetPrototypeOf(O);
        if (parent === null)
          return ownKeys;
        var parentKeys = OrdinaryMetadataKeys(parent, P22);
        if (parentKeys.length <= 0)
          return ownKeys;
        if (ownKeys.length <= 0)
          return parentKeys;
        var set = new _Set();
        var keys = [];
        for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
          var key = ownKeys_1[_i];
          var hasKey = set.has(key);
          if (!hasKey) {
            set.add(key);
            keys.push(key);
          }
        }
        for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
          var key = parentKeys_1[_a];
          var hasKey = set.has(key);
          if (!hasKey) {
            set.add(key);
            keys.push(key);
          }
        }
        return keys;
      }
      function OrdinaryOwnMetadataKeys(O, P22) {
        var keys = [];
        var metadataMap = GetOrCreateMetadataMap(
          O,
          P22,
          /*Create*/
          false
        );
        if (IsUndefined(metadataMap))
          return keys;
        var keysObj = metadataMap.keys();
        var iterator = GetIterator(keysObj);
        var k22 = 0;
        while (true) {
          var next = IteratorStep(iterator);
          if (!next) {
            keys.length = k22;
            return keys;
          }
          var nextValue = IteratorValue(next);
          try {
            keys[k22] = nextValue;
          } catch (e42) {
            try {
              IteratorClose(iterator);
            } finally {
              throw e42;
            }
          }
          k22++;
        }
      }
      function Type(x22) {
        if (x22 === null)
          return 1;
        switch (typeof x22) {
          case "undefined":
            return 0;
          case "boolean":
            return 2;
          case "string":
            return 3;
          case "symbol":
            return 4;
          case "number":
            return 5;
          case "object":
            return x22 === null ? 1 : 6;
          default:
            return 6;
        }
      }
      function IsUndefined(x22) {
        return x22 === void 0;
      }
      function IsNull(x22) {
        return x22 === null;
      }
      function IsSymbol(x22) {
        return typeof x22 === "symbol";
      }
      function IsObject(x22) {
        return typeof x22 === "object" ? x22 !== null : typeof x22 === "function";
      }
      function ToPrimitive(input, PreferredType) {
        switch (Type(input)) {
          case 0:
            return input;
          case 1:
            return input;
          case 2:
            return input;
          case 3:
            return input;
          case 4:
            return input;
          case 5:
            return input;
        }
        var hint = PreferredType === 3 ? "string" : PreferredType === 5 ? "number" : "default";
        var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
        if (exoticToPrim !== void 0) {
          var result = exoticToPrim.call(input, hint);
          if (IsObject(result))
            throw new TypeError();
          return result;
        }
        return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
      }
      function OrdinaryToPrimitive(O, hint) {
        if (hint === "string") {
          var toString_1 = O.toString;
          if (IsCallable(toString_1)) {
            var result = toString_1.call(O);
            if (!IsObject(result))
              return result;
          }
          var valueOf = O.valueOf;
          if (IsCallable(valueOf)) {
            var result = valueOf.call(O);
            if (!IsObject(result))
              return result;
          }
        } else {
          var valueOf = O.valueOf;
          if (IsCallable(valueOf)) {
            var result = valueOf.call(O);
            if (!IsObject(result))
              return result;
          }
          var toString_2 = O.toString;
          if (IsCallable(toString_2)) {
            var result = toString_2.call(O);
            if (!IsObject(result))
              return result;
          }
        }
        throw new TypeError();
      }
      function ToBoolean(argument) {
        return !!argument;
      }
      function ToString(argument) {
        return "" + argument;
      }
      function ToPropertyKey(argument) {
        var key = ToPrimitive(
          argument,
          3
          /* String */
        );
        if (IsSymbol(key))
          return key;
        return ToString(key);
      }
      function IsArray(argument) {
        return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
      }
      function IsCallable(argument) {
        return typeof argument === "function";
      }
      function IsConstructor(argument) {
        return typeof argument === "function";
      }
      function IsPropertyKey(argument) {
        switch (Type(argument)) {
          case 3:
            return true;
          case 4:
            return true;
          default:
            return false;
        }
      }
      function GetMethod(V22, P22) {
        var func = V22[P22];
        if (func === void 0 || func === null)
          return void 0;
        if (!IsCallable(func))
          throw new TypeError();
        return func;
      }
      function GetIterator(obj) {
        var method = GetMethod(obj, iteratorSymbol);
        if (!IsCallable(method))
          throw new TypeError();
        var iterator = method.call(obj);
        if (!IsObject(iterator))
          throw new TypeError();
        return iterator;
      }
      function IteratorValue(iterResult) {
        return iterResult.value;
      }
      function IteratorStep(iterator) {
        var result = iterator.next();
        return result.done ? false : result;
      }
      function IteratorClose(iterator) {
        var f22 = iterator["return"];
        if (f22)
          f22.call(iterator);
      }
      function OrdinaryGetPrototypeOf(O) {
        var proto = Object.getPrototypeOf(O);
        if (typeof O !== "function" || O === functionPrototype)
          return proto;
        if (proto !== functionPrototype)
          return proto;
        var prototype = O.prototype;
        var prototypeProto = prototype && Object.getPrototypeOf(prototype);
        if (prototypeProto == null || prototypeProto === Object.prototype)
          return proto;
        var constructor = prototypeProto.constructor;
        if (typeof constructor !== "function")
          return proto;
        if (constructor === O)
          return proto;
        return constructor;
      }
      function CreateMapPolyfill() {
        var cacheSentinel = {};
        var arraySentinel = [];
        var MapIterator = (
          /** @class */
          function() {
            function MapIterator2(keys, values, selector) {
              this._index = 0;
              this._keys = keys;
              this._values = values;
              this._selector = selector;
            }
            MapIterator2.prototype["@@iterator"] = function() {
              return this;
            };
            MapIterator2.prototype[iteratorSymbol] = function() {
              return this;
            };
            MapIterator2.prototype.next = function() {
              var index = this._index;
              if (index >= 0 && index < this._keys.length) {
                var result = this._selector(this._keys[index], this._values[index]);
                if (index + 1 >= this._keys.length) {
                  this._index = -1;
                  this._keys = arraySentinel;
                  this._values = arraySentinel;
                } else {
                  this._index++;
                }
                return { value: result, done: false };
              }
              return { value: void 0, done: true };
            };
            MapIterator2.prototype.throw = function(error) {
              if (this._index >= 0) {
                this._index = -1;
                this._keys = arraySentinel;
                this._values = arraySentinel;
              }
              throw error;
            };
            MapIterator2.prototype.return = function(value) {
              if (this._index >= 0) {
                this._index = -1;
                this._keys = arraySentinel;
                this._values = arraySentinel;
              }
              return { value, done: true };
            };
            return MapIterator2;
          }()
        );
        return (
          /** @class */
          function() {
            function Map2() {
              this._keys = [];
              this._values = [];
              this._cacheKey = cacheSentinel;
              this._cacheIndex = -2;
            }
            Object.defineProperty(Map2.prototype, "size", {
              get: function() {
                return this._keys.length;
              },
              enumerable: true,
              configurable: true
            });
            Map2.prototype.has = function(key) {
              return this._find(
                key,
                /*insert*/
                false
              ) >= 0;
            };
            Map2.prototype.get = function(key) {
              var index = this._find(
                key,
                /*insert*/
                false
              );
              return index >= 0 ? this._values[index] : void 0;
            };
            Map2.prototype.set = function(key, value) {
              var index = this._find(
                key,
                /*insert*/
                true
              );
              this._values[index] = value;
              return this;
            };
            Map2.prototype.delete = function(key) {
              var index = this._find(
                key,
                /*insert*/
                false
              );
              if (index >= 0) {
                var size2 = this._keys.length;
                for (var i32 = index + 1; i32 < size2; i32++) {
                  this._keys[i32 - 1] = this._keys[i32];
                  this._values[i32 - 1] = this._values[i32];
                }
                this._keys.length--;
                this._values.length--;
                if (key === this._cacheKey) {
                  this._cacheKey = cacheSentinel;
                  this._cacheIndex = -2;
                }
                return true;
              }
              return false;
            };
            Map2.prototype.clear = function() {
              this._keys.length = 0;
              this._values.length = 0;
              this._cacheKey = cacheSentinel;
              this._cacheIndex = -2;
            };
            Map2.prototype.keys = function() {
              return new MapIterator(this._keys, this._values, getKey);
            };
            Map2.prototype.values = function() {
              return new MapIterator(this._keys, this._values, getValue);
            };
            Map2.prototype.entries = function() {
              return new MapIterator(this._keys, this._values, getEntry);
            };
            Map2.prototype["@@iterator"] = function() {
              return this.entries();
            };
            Map2.prototype[iteratorSymbol] = function() {
              return this.entries();
            };
            Map2.prototype._find = function(key, insert) {
              if (this._cacheKey !== key) {
                this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
              }
              if (this._cacheIndex < 0 && insert) {
                this._cacheIndex = this._keys.length;
                this._keys.push(key);
                this._values.push(void 0);
              }
              return this._cacheIndex;
            };
            return Map2;
          }()
        );
        function getKey(key, _22) {
          return key;
        }
        function getValue(_22, value) {
          return value;
        }
        function getEntry(key, value) {
          return [key, value];
        }
      }
      function CreateSetPolyfill() {
        return (
          /** @class */
          function() {
            function Set2() {
              this._map = new _Map();
            }
            Object.defineProperty(Set2.prototype, "size", {
              get: function() {
                return this._map.size;
              },
              enumerable: true,
              configurable: true
            });
            Set2.prototype.has = function(value) {
              return this._map.has(value);
            };
            Set2.prototype.add = function(value) {
              return this._map.set(value, value), this;
            };
            Set2.prototype.delete = function(value) {
              return this._map.delete(value);
            };
            Set2.prototype.clear = function() {
              this._map.clear();
            };
            Set2.prototype.keys = function() {
              return this._map.keys();
            };
            Set2.prototype.values = function() {
              return this._map.values();
            };
            Set2.prototype.entries = function() {
              return this._map.entries();
            };
            Set2.prototype["@@iterator"] = function() {
              return this.keys();
            };
            Set2.prototype[iteratorSymbol] = function() {
              return this.keys();
            };
            return Set2;
          }()
        );
      }
      function CreateWeakMapPolyfill() {
        var UUID_SIZE = 16;
        var keys = HashMap.create();
        var rootKey = CreateUniqueKey();
        return (
          /** @class */
          function() {
            function WeakMap2() {
              this._key = CreateUniqueKey();
            }
            WeakMap2.prototype.has = function(target) {
              var table = GetOrCreateWeakMapTable(
                target,
                /*create*/
                false
              );
              return table !== void 0 ? HashMap.has(table, this._key) : false;
            };
            WeakMap2.prototype.get = function(target) {
              var table = GetOrCreateWeakMapTable(
                target,
                /*create*/
                false
              );
              return table !== void 0 ? HashMap.get(table, this._key) : void 0;
            };
            WeakMap2.prototype.set = function(target, value) {
              var table = GetOrCreateWeakMapTable(
                target,
                /*create*/
                true
              );
              table[this._key] = value;
              return this;
            };
            WeakMap2.prototype.delete = function(target) {
              var table = GetOrCreateWeakMapTable(
                target,
                /*create*/
                false
              );
              return table !== void 0 ? delete table[this._key] : false;
            };
            WeakMap2.prototype.clear = function() {
              this._key = CreateUniqueKey();
            };
            return WeakMap2;
          }()
        );
        function CreateUniqueKey() {
          var key;
          do
            key = "@@WeakMap@@" + CreateUUID();
          while (HashMap.has(keys, key));
          keys[key] = true;
          return key;
        }
        function GetOrCreateWeakMapTable(target, create) {
          if (!hasOwn.call(target, rootKey)) {
            if (!create)
              return void 0;
            Object.defineProperty(target, rootKey, { value: HashMap.create() });
          }
          return target[rootKey];
        }
        function FillRandomBytes(buffer, size2) {
          for (var i32 = 0; i32 < size2; ++i32)
            buffer[i32] = Math.random() * 255 | 0;
          return buffer;
        }
        function GenRandomBytes(size2) {
          if (typeof Uint8Array === "function") {
            if (typeof crypto !== "undefined")
              return crypto.getRandomValues(new Uint8Array(size2));
            if (typeof msCrypto !== "undefined")
              return msCrypto.getRandomValues(new Uint8Array(size2));
            return FillRandomBytes(new Uint8Array(size2), size2);
          }
          return FillRandomBytes(new Array(size2), size2);
        }
        function CreateUUID() {
          var data = GenRandomBytes(UUID_SIZE);
          data[6] = data[6] & 79 | 64;
          data[8] = data[8] & 191 | 128;
          var result = "";
          for (var offset2 = 0; offset2 < UUID_SIZE; ++offset2) {
            var byte = data[offset2];
            if (offset2 === 4 || offset2 === 6 || offset2 === 8)
              result += "-";
            if (byte < 16)
              result += "0";
            result += byte.toString(16).toLowerCase();
          }
          return result;
        }
      }
      function MakeDictionary(obj) {
        obj.__ = void 0;
        delete obj.__;
        return obj;
      }
    });
  })(Reflect2 || (Reflect2 = {}));
  function supportsConstructedStylesheets() {
    try {
      new CSSStyleSheet();
      return true;
    } catch {
      return false;
    }
  }
  var TransitionalStyles = class _TransitionalStyles {
    constructor() {
      this.sheets = /* @__PURE__ */ new Map();
      this.elements = /* @__PURE__ */ new Map();
      this.sheetsLegacy = /* @__PURE__ */ new Map();
      this.useLegacyStylesheets = !supportsConstructedStylesheets();
    }
    static get instance() {
      if (!globalThis.__gdsTransitionalStyles?.[VER_SUFFIX])
        globalThis.__gdsTransitionalStyles = {
          ...globalThis.__gdsTransitionalStyles,
          [VER_SUFFIX]: new _TransitionalStyles()
        };
      return globalThis.__gdsTransitionalStyles[VER_SUFFIX];
    }
    apply(element, styleKey) {
      if (!element.shadowRoot)
        return;
      if (this.useLegacyStylesheets) {
        this.elements.set(styleKey, element);
        this.applyToElementLegacy(styleKey);
        return;
      }
      const sheet = this.sheets.get(styleKey);
      if (!sheet)
        return;
      this.elements.set(styleKey, element);
      this.applyToElement(styleKey, sheet);
    }
    applyToElement(styleKey, sheet) {
      const element = this.elements.get(styleKey);
      if (!element || !element.shadowRoot)
        return;
      element.shadowRoot.adoptedStyleSheets = [sheet];
    }
    // This is a fallback for browsers that don't support constructed stylesheets.
    // Primarily, this is here to support Safari/iOS 15.x
    //
    // To work around the lack of Constructed Stylesheets, we use a regular <style>
    // element instead. The _tStyles property needs to be added to the render template
    // of each component.
    //
    // Lit itself will also add a <style> element to the shadow root in these browsers,
    // meaning that we have to override the base styles added from the static style
    // property in this case. This is what the `all: revert` rule is for.
    // We can use cascade layers to ensure that the revert rule ovverides the base styles
    // but not the transitional styles.
    // `@layer base, reset, transitional-styles;`
    applyToElementLegacy(styleKey) {
      const sheet = this.sheetsLegacy.get(styleKey);
      const element = this.elements.get(styleKey);
      if (!element)
        return;
      element._tStyles = x2`<style>
      @layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${o8(sheet)}
    </style>`;
    }
    register(name, styles2) {
      if (this.useLegacyStylesheets) {
        this.sheetsLegacy.set(name, styles2);
        this.applyToElementLegacy(name);
        return;
      }
      const sheet = new CSSStyleSheet();
      sheet.replaceSync(styles2);
      this.sheets.set(name, sheet);
      this.applyToElement(name, sheet);
    }
  };
  var style = i`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
    }
  }
`;
  var listbox_styles_default = style;
  var ListboxKbNavController = class {
    constructor(host) {
      this.#keyboardNavigationHandler = (e42) => {
        const targetItem = e42.target;
        if (!this.host.navigableItems.includes(targetItem))
          return;
        let handled = false;
        if (e42.key === "ArrowDown") {
          const nextItemIndex = this.host.navigableItems.indexOf(targetItem) + 1;
          const nextItem = this.host.navigableItems[nextItemIndex];
          nextItem?.focus();
          handled = true;
        } else if (e42.key === "ArrowUp") {
          const prevOptionIndex = this.host.navigableItems.indexOf(targetItem) - 1;
          const prevItem = this.host.navigableItems[prevOptionIndex];
          prevItem?.focus();
          handled = true;
        } else if (e42.key === "Home") {
          this.host.navigableItems[0]?.focus();
          handled = true;
        } else if (e42.key === "End") {
          this.host.navigableItems[this.host.navigableItems.length - 1]?.focus();
          handled = true;
        } else {
          const key = e42.key.toLowerCase();
          if (key.length !== 1) {
            return;
          }
          const isLetter = key >= "a" && key <= "z";
          const isNumber = key >= "0" && key <= "9";
          if (isLetter || isNumber) {
            const firstMatch = this.host.navigableItems.find((el) => {
              const text = el.textContent?.trim().toLowerCase();
              return text?.startsWith(key);
            });
            firstMatch?.focus();
            handled = true;
          }
        }
        if (handled) {
          e42.preventDefault();
          e42.stopPropagation();
        }
      };
      ;
      (this.host = host).addController(this);
    }
    hostConnected() {
      this.host.addEventListener("keydown", this.#keyboardNavigationHandler);
    }
    hostDisconnected() {
      this.host.removeEventListener("keydown", this.#keyboardNavigationHandler);
    }
    #keyboardNavigationHandler;
  };
  function unwrap(slotRef) {
    let slot = slotRef;
    while (slot.assignedElements().length > 0 && slot.assignedElements()[0].nodeName === "SLOT") {
      slot = slot.assignedElements()[0];
    }
    return slot;
  }
  var _slotRef;
  var _handleSelect;
  var GdsListbox = class extends GdsElement {
    constructor() {
      super();
      this.multiple = false;
      this.compareWith = (a22, b22) => a22 === b22;
      __privateAdd(this, _slotRef, e13());
      __privateAdd(this, _handleSelect, (e42) => {
        const option = e42.target;
        if (this.multiple)
          option.selected = !option.selected;
        else {
          option.selected = true;
          Array.from(this.options).forEach((el) => {
            if (el !== option)
              el.selected = false;
          });
        }
        ;
        this.ariaActiveDescendantElement = option;
        this.dispatchEvent(
          new CustomEvent("change", {
            bubbles: false,
            composed: false
          })
        );
      });
      new ListboxKbNavController(this);
    }
    get navigableItems() {
      return this.visibleOptionElements;
    }
    /**
     * Returns a list of all `gds-option` elements in the listbox.
     */
    get options() {
      if (!__privateGet(this, _slotRef).value)
        return [];
      return unwrap(__privateGet(this, _slotRef).value).assignedElements().filter(
        (o22) => !o22.hasAttribute("isplaceholder")
      ) || [];
    }
    /**
     * Returns a list of all visible `gds-option` elements in the listbox.
     */
    get visibleOptionElements() {
      return this.options.filter((el) => !el.hidden);
    }
    /**
     * Returns a list of all visible `gds-option` elements in the listbox.
     */
    get visibleSelectedOptionElements() {
      return this.options.filter((el) => el.selected && !el.hidden);
    }
    /**
     * Returns a list of all selected `gds-option` elements in the listbox.
     */
    get selection() {
      return this.options.filter((el) => el.selected);
    }
    set selection(values) {
      this.options.forEach((el) => {
        el.selected = values.some((v22) => this.compareWith(v22, el.value));
      });
    }
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("role", "listbox");
      TransitionalStyles.instance.apply(this, "gds-listbox");
      this.addEventListener("gds-select", __privateGet(this, _handleSelect));
    }
    /**
     * Focuses the first selected option in the listbox.
     * If no option is selected, the first visible option is focused.
     */
    focus() {
      ;
      (this.visibleSelectedOptionElements[0] || this.visibleOptionElements[0])?.focus();
    }
    render() {
      return html2`${this._tStyles}<slot ${n10(__privateGet(this, _slotRef))}></slot>`;
    }
    _rerenderOptions() {
      this.options.forEach((el) => {
        el.requestUpdate();
      });
    }
  };
  _slotRef = /* @__PURE__ */ new WeakMap();
  _handleSelect = /* @__PURE__ */ new WeakMap();
  GdsListbox.styles = listbox_styles_default;
  __decorateClass([
    n6({
      type: Boolean,
      reflect: true,
      attribute: "aria-multiselectable",
      converter: {
        fromAttribute: Boolean,
        toAttribute: (value) => value.toString()
      }
    })
  ], GdsListbox.prototype, "multiple", 2);
  __decorateClass([
    n6()
  ], GdsListbox.prototype, "compareWith", 2);
  __decorateClass([
    t4()
  ], GdsListbox.prototype, "_tStyles", 2);
  __decorateClass([
    watch("multiple")
  ], GdsListbox.prototype, "_rerenderOptions", 1);
  GdsListbox = __decorateClass([
    gdsCustomElement("gds-listbox")
  ], GdsListbox);
  var style2 = i`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      padding: 0.5 1rem;
      cursor: pointer;
    }

    :host(:hover) {
      background-color: grey;
    }
  }
`;
  var option_styles_default = style2;
  var Focusable = (superClass) => {
    class HighlightableElement extends superClass {
      constructor() {
        super(...arguments);
        this.onblur = (e42) => {
          this.setAttribute("tabindex", "-1");
          this.dispatchEvent(
            new FocusEvent("gds-blur", {
              bubbles: true,
              composed: true,
              relatedTarget: e42.relatedTarget
            })
          );
        };
        this.onfocus = (e42) => {
          this.dispatchEvent(
            new FocusEvent("gds-focus", {
              bubbles: true,
              composed: true,
              relatedTarget: e42.relatedTarget
            })
          );
        };
      }
      focus(options) {
        this.setAttribute("tabindex", "0");
        super.focus(options);
      }
    }
    return HighlightableElement;
  };
  var _hidden;
  var _emitSelect;
  var emitSelect_fn;
  var GdsOption = class extends Focusable(GdsElement) {
    constructor() {
      super();
      __privateAdd(this, _emitSelect);
      __privateAdd(this, _hidden, false);
      this.selected = false;
      this.isPlaceholder = false;
      this.addEventListener("click", __privateMethod(this, _emitSelect, emitSelect_fn));
      this.addEventListener("keydown", (e42) => {
        if (e42.key !== "Enter" && e42.key !== " ")
          return;
        e42.preventDefault();
        __privateMethod(this, _emitSelect, emitSelect_fn).call(this, e42);
      });
    }
    get hidden() {
      return __privateGet(this, _hidden);
    }
    set hidden(value) {
      if (this.isPlaceholder)
        return;
      __privateSet(this, _hidden, value === "true" || value === true);
      this.setAttribute("aria-hidden", value.toString());
    }
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("role", "option");
      if (this.isPlaceholder) {
        __privateSet(this, _hidden, true);
        this.setAttribute("aria-hidden", "true");
      }
      this.updateComplete.then(
        () => TransitionalStyles.instance.apply(this, "gds-option")
      );
    }
    get parentElement() {
      return super.parentElement;
    }
    _handlePlaceholderStatusChange() {
      if (this.isPlaceholder) {
        __privateSet(this, _hidden, true);
        this.setAttribute("aria-hidden", "true");
      } else {
        __privateSet(this, _hidden, false);
        this.setAttribute("aria-hidden", "false");
      }
    }
    render() {
      const isMultiple = this.parentElement?.multiple;
      const checkbox = x2` <span
      class="checkbox ${o7({ checked: this.selected })}"
    ></span>`;
      if (!isMultiple) {
        if (this.selected)
          this.setAttribute("highlighted", "");
        else
          this.removeAttribute("highlighted");
      }
      return x2`${this._tStyles}${n8(isMultiple, () => checkbox)}
      <slot></slot>`;
    }
  };
  _hidden = /* @__PURE__ */ new WeakMap();
  _emitSelect = /* @__PURE__ */ new WeakSet();
  emitSelect_fn = function(e42) {
    e42.stopPropagation();
    this.dispatchEvent(
      new CustomEvent("gds-select", {
        bubbles: true,
        composed: true,
        detail: {
          value: this.value
        }
      })
    );
  };
  GdsOption.styles = option_styles_default;
  __decorateClass([
    n6()
  ], GdsOption.prototype, "value", 2);
  __decorateClass([
    n6({
      attribute: "aria-hidden",
      reflect: true
    })
  ], GdsOption.prototype, "hidden", 1);
  __decorateClass([
    n6({
      attribute: "aria-selected",
      reflect: true
    })
  ], GdsOption.prototype, "selected", 2);
  __decorateClass([
    n6({ type: Boolean, reflect: true })
  ], GdsOption.prototype, "isPlaceholder", 2);
  __decorateClass([
    t4()
  ], GdsOption.prototype, "_tStyles", 2);
  __decorateClass([
    watch("isplaceholder")
  ], GdsOption.prototype, "_handlePlaceholderStatusChange", 1);
  GdsOption = __decorateClass([
    gdsCustomElement("gds-option")
  ], GdsOption);
  var min = Math.min;
  var max = Math.max;
  var round = Math.round;
  var floor = Math.floor;
  var createCoords = (v22) => ({
    x: v22,
    y: v22
  });
  var oppositeSideMap = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  var oppositeAlignmentMap = {
    start: "end",
    end: "start"
  };
  function evaluate(value, param) {
    return typeof value === "function" ? value(param) : value;
  }
  function getSide(placement) {
    return placement.split("-")[0];
  }
  function getAlignment(placement) {
    return placement.split("-")[1];
  }
  function getOppositeAxis(axis) {
    return axis === "x" ? "y" : "x";
  }
  function getAxisLength(axis) {
    return axis === "y" ? "height" : "width";
  }
  function getSideAxis(placement) {
    return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
  }
  function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
  }
  function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
      rtl = false;
    }
    const alignment = getAlignment(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const length = getAxisLength(alignmentAxis);
    let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
    if (rects.reference[length] > rects.floating[length]) {
      mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
  }
  function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
  }
  function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
  }
  function getSideList(side, isStart, rtl) {
    const lr = ["left", "right"];
    const rl = ["right", "left"];
    const tb = ["top", "bottom"];
    const bt = ["bottom", "top"];
    switch (side) {
      case "top":
      case "bottom":
        if (rtl)
          return isStart ? rl : lr;
        return isStart ? lr : rl;
      case "left":
      case "right":
        return isStart ? tb : bt;
      default:
        return [];
    }
  }
  function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === "start", rtl);
    if (alignment) {
      list = list.map((side) => side + "-" + alignment);
      if (flipAlignment) {
        list = list.concat(list.map(getOppositeAlignmentPlacement));
      }
    }
    return list;
  }
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
  }
  function expandPaddingObject(padding) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...padding
    };
  }
  function getPaddingObject(padding) {
    return typeof padding !== "number" ? expandPaddingObject(padding) : {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    };
  }
  function rectToClientRect(rect) {
    return {
      ...rect,
      top: rect.y,
      left: rect.x,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    };
  }
  function computeCoordsFromPlacement(_ref, placement, rtl) {
    let {
      reference,
      floating
    } = _ref;
    const sideAxis = getSideAxis(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const alignLength = getAxisLength(alignmentAxis);
    const side = getSide(placement);
    const isVertical = sideAxis === "y";
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch (side) {
      case "top":
        coords = {
          x: commonX,
          y: reference.y - floating.height
        };
        break;
      case "bottom":
        coords = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;
      case "right":
        coords = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;
      case "left":
        coords = {
          x: reference.x - floating.width,
          y: commonY
        };
        break;
      default:
        coords = {
          x: reference.x,
          y: reference.y
        };
    }
    switch (getAlignment(placement)) {
      case "start":
        coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
        break;
      case "end":
        coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
        break;
    }
    return coords;
  }
  var computePosition = async (reference, floating, config) => {
    const {
      placement = "bottom",
      strategy = "absolute",
      middleware = [],
      platform: platform2
    } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
    let rects = await platform2.getElementRects({
      reference,
      floating,
      strategy
    });
    let {
      x: x22,
      y: y22
    } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for (let i32 = 0; i32 < validMiddleware.length; i32++) {
      const {
        name,
        fn
      } = validMiddleware[i32];
      const {
        x: nextX,
        y: nextY,
        data,
        reset
      } = await fn({
        x: x22,
        y: y22,
        initialPlacement: placement,
        placement: statefulPlacement,
        strategy,
        middlewareData,
        rects,
        platform: platform2,
        elements: {
          reference,
          floating
        }
      });
      x22 = nextX != null ? nextX : x22;
      y22 = nextY != null ? nextY : y22;
      middlewareData = {
        ...middlewareData,
        [name]: {
          ...middlewareData[name],
          ...data
        }
      };
      if (reset && resetCount <= 50) {
        resetCount++;
        if (typeof reset === "object") {
          if (reset.placement) {
            statefulPlacement = reset.placement;
          }
          if (reset.rects) {
            rects = reset.rects === true ? await platform2.getElementRects({
              reference,
              floating,
              strategy
            }) : reset.rects;
          }
          ({
            x: x22,
            y: y22
          } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
        }
        i32 = -1;
        continue;
      }
    }
    return {
      x: x22,
      y: y22,
      placement: statefulPlacement,
      strategy,
      middlewareData
    };
  };
  async function detectOverflow(state11, options) {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    const {
      x: x22,
      y: y22,
      platform: platform2,
      rects,
      elements,
      strategy
    } = state11;
    const {
      boundary = "clippingAncestors",
      rootBoundary = "viewport",
      elementContext = "floating",
      altBoundary = false,
      padding = 0
    } = evaluate(options, state11);
    const paddingObject = getPaddingObject(padding);
    const altContext = elementContext === "floating" ? "reference" : "floating";
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
      element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
      boundary,
      rootBoundary,
      strategy
    }));
    const rect = elementContext === "floating" ? {
      ...rects.floating,
      x: x22,
      y: y22
    } : rects.reference;
    const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
    const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    };
    const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
      rect,
      offsetParent,
      strategy
    }) : rect);
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  }
  var flip = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "flip",
      options,
      async fn(state11) {
        var _middlewareData$arrow, _middlewareData$flip;
        const {
          placement,
          middlewareData,
          rects,
          initialPlacement,
          platform: platform2,
          elements
        } = state11;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true,
          fallbackPlacements: specifiedFallbackPlacements,
          fallbackStrategy = "bestFit",
          fallbackAxisSideDirection = "none",
          flipAlignment = true,
          ...detectOverflowOptions
        } = evaluate(options, state11);
        if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        const side = getSide(placement);
        const isBasePlacement = getSide(initialPlacement) === initialPlacement;
        const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
        const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
        if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
          fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
        }
        const placements2 = [initialPlacement, ...fallbackPlacements];
        const overflow = await detectOverflow(state11, detectOverflowOptions);
        const overflows = [];
        let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          const sides2 = getAlignmentSides(placement, rects, rtl);
          overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
        }
        overflowsData = [...overflowsData, {
          placement,
          overflows
        }];
        if (!overflows.every((side2) => side2 <= 0)) {
          var _middlewareData$flip2, _overflowsData$filter;
          const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
          const nextPlacement = placements2[nextIndex];
          if (nextPlacement) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
          let resetPlacement = (_overflowsData$filter = overflowsData.filter((d22) => d22.overflows[0] <= 0).sort((a22, b22) => a22.overflows[1] - b22.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case "bestFit": {
                var _overflowsData$map$so;
                const placement2 = (_overflowsData$map$so = overflowsData.map((d22) => [d22.placement, d22.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a22, b22) => a22[1] - b22[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                if (placement2) {
                  resetPlacement = placement2;
                }
                break;
              }
              case "initialPlacement":
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement
              }
            };
          }
        }
        return {};
      }
    };
  };
  async function convertValueToCoords(state11, options) {
    const {
      placement,
      platform: platform2,
      elements
    } = state11;
    const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const isVertical = getSideAxis(placement) === "y";
    const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = evaluate(options, state11);
    let {
      mainAxis,
      crossAxis,
      alignmentAxis
    } = typeof rawValue === "number" ? {
      mainAxis: rawValue,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: 0,
      crossAxis: 0,
      alignmentAxis: null,
      ...rawValue
    };
    if (alignment && typeof alignmentAxis === "number") {
      crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  }
  var offset = function(options) {
    if (options === void 0) {
      options = 0;
    }
    return {
      name: "offset",
      options,
      async fn(state11) {
        var _middlewareData$offse, _middlewareData$arrow;
        const {
          x: x22,
          y: y22,
          placement,
          middlewareData
        } = state11;
        const diffCoords = await convertValueToCoords(state11, options);
        if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        return {
          x: x22 + diffCoords.x,
          y: y22 + diffCoords.y,
          data: {
            ...diffCoords,
            placement
          }
        };
      }
    };
  };
  function getNodeName(node) {
    if (isNode(node)) {
      return (node.nodeName || "").toLowerCase();
    }
    return "#document";
  }
  function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
  }
  function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
  }
  function isNode(value) {
    return value instanceof Node || value instanceof getWindow(value).Node;
  }
  function isElement(value) {
    return value instanceof Element || value instanceof getWindow(value).Element;
  }
  function isHTMLElement(value) {
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
  }
  function isShadowRoot(value) {
    if (typeof ShadowRoot === "undefined") {
      return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
  }
  function isOverflowElement(element) {
    const {
      overflow,
      overflowX,
      overflowY,
      display
    } = getComputedStyle(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
  }
  function isTableElement(element) {
    return ["table", "td", "th"].includes(getNodeName(element));
  }
  function isContainingBlock(element) {
    const webkit = isWebKit();
    const css8 = getComputedStyle(element);
    return css8.transform !== "none" || css8.perspective !== "none" || (css8.containerType ? css8.containerType !== "normal" : false) || !webkit && (css8.backdropFilter ? css8.backdropFilter !== "none" : false) || !webkit && (css8.filter ? css8.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css8.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css8.contain || "").includes(value));
  }
  function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
      if (isContainingBlock(currentNode)) {
        return currentNode;
      } else {
        currentNode = getParentNode(currentNode);
      }
    }
    return null;
  }
  function isWebKit() {
    if (typeof CSS === "undefined" || !CSS.supports)
      return false;
    return CSS.supports("-webkit-backdrop-filter", "none");
  }
  function isLastTraversableNode(node) {
    return ["html", "body", "#document"].includes(getNodeName(node));
  }
  function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function getNodeScroll(element) {
    if (isElement(element)) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      };
    }
    return {
      scrollLeft: element.pageXOffset,
      scrollTop: element.pageYOffset
    };
  }
  function getParentNode(node) {
    if (getNodeName(node) === "html") {
      return node;
    }
    const result = (
      // Step into the shadow DOM of the parent of a slotted node.
      node.assignedSlot || // DOM Element detected.
      node.parentNode || // ShadowRoot detected.
      isShadowRoot(node) && node.host || // Fallback.
      getDocumentElement(node)
    );
    return isShadowRoot(result) ? result.host : result;
  }
  function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
      return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
      return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
  }
  function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
      list = [];
    }
    if (traverseIframes === void 0) {
      traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
      return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }
  function getCssDimensions(element) {
    const css8 = getComputedStyle(element);
    let width = parseFloat(css8.width) || 0;
    let height = parseFloat(css8.height) || 0;
    const hasOffset = isHTMLElement(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
      width = offsetWidth;
      height = offsetHeight;
    }
    return {
      width,
      height,
      $: shouldFallback
    };
  }
  function unwrapElement(element) {
    return !isElement(element) ? element.contextElement : element;
  }
  function getScale(element) {
    const domElement = unwrapElement(element);
    if (!isHTMLElement(domElement)) {
      return createCoords(1);
    }
    const rect = domElement.getBoundingClientRect();
    const {
      width,
      height,
      $: $22
    } = getCssDimensions(domElement);
    let x22 = ($22 ? round(rect.width) : rect.width) / width;
    let y22 = ($22 ? round(rect.height) : rect.height) / height;
    if (!x22 || !Number.isFinite(x22)) {
      x22 = 1;
    }
    if (!y22 || !Number.isFinite(y22)) {
      y22 = 1;
    }
    return {
      x: x22,
      y: y22
    };
  }
  var noOffsets = /* @__PURE__ */ createCoords(0);
  function getVisualOffsets(element) {
    const win = getWindow(element);
    if (!isWebKit() || !win.visualViewport) {
      return noOffsets;
    }
    return {
      x: win.visualViewport.offsetLeft,
      y: win.visualViewport.offsetTop
    };
  }
  function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
      return false;
    }
    return isFixed;
  }
  function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = createCoords(1);
    if (includeScale) {
      if (offsetParent) {
        if (isElement(offsetParent)) {
          scale = getScale(offsetParent);
        }
      } else {
        scale = getScale(element);
      }
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
    let x22 = (clientRect.left + visualOffsets.x) / scale.x;
    let y22 = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
      const win = getWindow(domElement);
      const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
      let currentIFrame = win.frameElement;
      while (currentIFrame && offsetParent && offsetWin !== win) {
        const iframeScale = getScale(currentIFrame);
        const iframeRect = currentIFrame.getBoundingClientRect();
        const css8 = getComputedStyle(currentIFrame);
        const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css8.paddingLeft)) * iframeScale.x;
        const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css8.paddingTop)) * iframeScale.y;
        x22 *= iframeScale.x;
        y22 *= iframeScale.y;
        width *= iframeScale.x;
        height *= iframeScale.y;
        x22 += left;
        y22 += top;
        currentIFrame = getWindow(currentIFrame).frameElement;
      }
    }
    return rectToClientRect({
      width,
      height,
      x: x22,
      y: y22
    });
  }
  function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let {
      rect,
      offsetParent,
      strategy
    } = _ref;
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    if (offsetParent === documentElement) {
      return rect;
    }
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    let scale = createCoords(1);
    const offsets = createCoords(0);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        const offsetRect = getBoundingClientRect(offsetParent);
        scale = getScale(offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      }
    }
    return {
      width: rect.width * scale.x,
      height: rect.height * scale.y,
      x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
      y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
    };
  }
  function getClientRects(element) {
    return Array.from(element.getClientRects());
  }
  function getWindowScrollBarX(element) {
    return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
  }
  function getDocumentRect(element) {
    const html15 = getDocumentElement(element);
    const scroll = getNodeScroll(element);
    const body = element.ownerDocument.body;
    const width = max(html15.scrollWidth, html15.clientWidth, body.scrollWidth, body.clientWidth);
    const height = max(html15.scrollHeight, html15.clientHeight, body.scrollHeight, body.clientHeight);
    let x22 = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y22 = -scroll.scrollTop;
    if (getComputedStyle(body).direction === "rtl") {
      x22 += max(html15.clientWidth, body.clientWidth) - width;
    }
    return {
      width,
      height,
      x: x22,
      y: y22
    };
  }
  function getViewportRect(element, strategy) {
    const win = getWindow(element);
    const html15 = getDocumentElement(element);
    const visualViewport = win.visualViewport;
    let width = html15.clientWidth;
    let height = html15.clientHeight;
    let x22 = 0;
    let y22 = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      const visualViewportBased = isWebKit();
      if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
        x22 = visualViewport.offsetLeft;
        y22 = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x: x22,
      y: y22
    };
  }
  function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x22 = left * scale.x;
    const y22 = top * scale.y;
    return {
      width,
      height,
      x: x22,
      y: y22
    };
  }
  function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === "viewport") {
      rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === "document") {
      rect = getDocumentRect(getDocumentElement(element));
    } else if (isElement(clippingAncestor)) {
      rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
      const visualOffsets = getVisualOffsets(element);
      rect = {
        ...clippingAncestor,
        x: clippingAncestor.x - visualOffsets.x,
        y: clippingAncestor.y - visualOffsets.y
      };
    }
    return rectToClientRect(rect);
  }
  function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = getParentNode(element);
    if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
      return false;
    }
    return getComputedStyle(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
  }
  function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) {
      return cachedResult;
    }
    let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = getComputedStyle(element).position === "fixed";
    let currentNode = elementIsFixed ? getParentNode(element) : element;
    while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
      const computedStyle = getComputedStyle(currentNode);
      const currentNodeIsContaining = isContainingBlock(currentNode);
      if (!currentNodeIsContaining && computedStyle.position === "fixed") {
        currentContainingBlockComputedStyle = null;
      }
      const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
      if (shouldDropCurrentNode) {
        result = result.filter((ancestor) => ancestor !== currentNode);
      } else {
        currentContainingBlockComputedStyle = computedStyle;
      }
      currentNode = getParentNode(currentNode);
    }
    cache.set(element, result);
    return result;
  }
  function getClippingRect(_ref) {
    let {
      element,
      boundary,
      rootBoundary,
      strategy
    } = _ref;
    const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [...elementClippingAncestors, rootBoundary];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
      const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
      width: clippingRect.right - clippingRect.left,
      height: clippingRect.bottom - clippingRect.top,
      x: clippingRect.left,
      y: clippingRect.top
    };
  }
  function getDimensions(element) {
    const {
      width,
      height
    } = getCssDimensions(element);
    return {
      width,
      height
    };
  }
  function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    const isFixed = strategy === "fixed";
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const offsets = createCoords(0);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isOffsetParentAnElement) {
        const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }
  function getTrueOffsetParent(element, polyfill) {
    if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
      return null;
    }
    if (polyfill) {
      return polyfill(element);
    }
    return element.offsetParent;
  }
  function getOffsetParent(element, polyfill) {
    const window2 = getWindow(element);
    if (!isHTMLElement(element)) {
      return window2;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
      offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
      return window2;
    }
    return offsetParent || getContainingBlock(element) || window2;
  }
  var getElementRects = async function(_ref) {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
      floating: {
        x: 0,
        y: 0,
        ...await getDimensionsFn(floating)
      }
    };
  };
  function isRTL(element) {
    return getComputedStyle(element).direction === "rtl";
  }
  var platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement,
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions,
    getScale,
    isElement,
    isRTL
  };
  function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = getDocumentElement(element);
    function cleanup() {
      clearTimeout(timeoutId);
      io && io.disconnect();
      io = null;
    }
    function refresh(skip, threshold) {
      if (skip === void 0) {
        skip = false;
      }
      if (threshold === void 0) {
        threshold = 1;
      }
      cleanup();
      const {
        left,
        top,
        width,
        height
      } = element.getBoundingClientRect();
      if (!skip) {
        onMove();
      }
      if (!width || !height) {
        return;
      }
      const insetTop = floor(top);
      const insetRight = floor(root.clientWidth - (left + width));
      const insetBottom = floor(root.clientHeight - (top + height));
      const insetLeft = floor(left);
      const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
      const options = {
        rootMargin,
        threshold: max(0, min(1, threshold)) || 1
      };
      let isFirstUpdate = true;
      function handleObserve(entries) {
        const ratio = entries[0].intersectionRatio;
        if (ratio !== threshold) {
          if (!isFirstUpdate) {
            return refresh();
          }
          if (!ratio) {
            timeoutId = setTimeout(() => {
              refresh(false, 1e-7);
            }, 100);
          } else {
            refresh(false, ratio);
          }
        }
        isFirstUpdate = false;
      }
      try {
        io = new IntersectionObserver(handleObserve, {
          ...options,
          // Handle <iframe>s
          root: root.ownerDocument
        });
      } catch (e42) {
        io = new IntersectionObserver(handleObserve, options);
      }
      io.observe(element);
    }
    refresh(true);
    return cleanup;
  }
  function autoUpdate(reference, floating, update, options) {
    if (options === void 0) {
      options = {};
    }
    const {
      ancestorScroll = true,
      ancestorResize = true,
      elementResize = typeof ResizeObserver === "function",
      layoutShift = typeof IntersectionObserver === "function",
      animationFrame = false
    } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.addEventListener("scroll", update, {
        passive: true
      });
      ancestorResize && ancestor.addEventListener("resize", update);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
      resizeObserver = new ResizeObserver((_ref) => {
        let [firstEntry] = _ref;
        if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
          resizeObserver.unobserve(floating);
          cancelAnimationFrame(reobserveFrame);
          reobserveFrame = requestAnimationFrame(() => {
            resizeObserver && resizeObserver.observe(floating);
          });
        }
        update();
      });
      if (referenceEl && !animationFrame) {
        resizeObserver.observe(referenceEl);
      }
      resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
      frameLoop();
    }
    function frameLoop() {
      const nextRefRect = getBoundingClientRect(reference);
      if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
        update();
      }
      prevRefRect = nextRefRect;
      frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return () => {
      ancestors.forEach((ancestor) => {
        ancestorScroll && ancestor.removeEventListener("scroll", update);
        ancestorResize && ancestor.removeEventListener("resize", update);
      });
      cleanupIo && cleanupIo();
      resizeObserver && resizeObserver.disconnect();
      resizeObserver = null;
      if (animationFrame) {
        cancelAnimationFrame(frameId);
      }
    };
  }
  var flip2 = flip;
  var computePosition2 = (reference, floating, options) => {
    const cache = /* @__PURE__ */ new Map();
    const mergedOptions = {
      platform,
      ...options
    };
    const platformWithCache = {
      ...mergedOptions.platform,
      _c: cache
    };
    return computePosition(reference, floating, {
      ...mergedOptions,
      platform: platformWithCache
    });
  };
  var style3 = i`
  @layer base, reset, transitional-styles;
  @layer base {
    :host([open]) dialog {
      opacity: 1;
      box-sizing: border-box;
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }

    dialog {
      inset: auto;
      position: fixed;
      overflow: hidden;
      padding: 0px;
      box-sizing: border-box;
      border-width: 0;
      right: 0;
    }
  }
`;
  var popover_styles_default = style3;
  var _dialogElementRef;
  var _autoPositionCleanupFn;
  var _isMobileViewport;
  var _dispatchUiStateEvent;
  var _handleCloseButton;
  var _registerTriggerEvents;
  var registerTriggerEvents_fn;
  var _unregisterTriggerEvents;
  var unregisterTriggerEvents_fn;
  var _registerAutoPositioning;
  var registerAutoPositioning_fn;
  var _triggerKeyDownListener;
  var _focusFirstSlottedChild;
  var _clickOutsideListener;
  var GdsPopover = class extends GdsElement {
    constructor() {
      super(...arguments);
      __privateAdd(this, _registerTriggerEvents);
      __privateAdd(this, _unregisterTriggerEvents);
      __privateAdd(this, _registerAutoPositioning);
      this.open = false;
      this.triggerRef = Promise.resolve(void 0);
      this.label = void 0;
      this.placement = "bottom-start";
      this.calcMinWidth = (referenceEl) => `${referenceEl.offsetWidth}px`;
      this.calcMaxWidth = (_referenceEl) => `auto`;
      this._trigger = void 0;
      this._isVirtKbVisible = false;
      __privateAdd(this, _dialogElementRef, e13());
      __privateAdd(this, _autoPositionCleanupFn, void 0);
      __privateAdd(this, _isMobileViewport, false);
      __privateAdd(this, _dispatchUiStateEvent, (reason) => {
        this.dispatchEvent(
          new CustomEvent("gds-ui-state", {
            detail: { open: this.open, reason },
            bubbles: false,
            composed: false
          })
        );
      });
      __privateAdd(this, _handleCloseButton, (e42) => {
        e42.stopPropagation();
        e42.preventDefault();
        this.open = false;
        __privateGet(this, _dispatchUiStateEvent).call(this, "close");
        setTimeout(() => this._trigger?.focus(), 250);
      });
      __privateAdd(this, _triggerKeyDownListener, (e42) => {
        if (e42.key === "ArrowDown") {
          e42.preventDefault();
          this.open = true;
          __privateGet(this, _dispatchUiStateEvent).call(this, "show");
        }
        if (e42.key === "Escape") {
          this.open = false;
          __privateGet(this, _dispatchUiStateEvent).call(this, "cancel");
        }
      });
      __privateAdd(this, _focusFirstSlottedChild, () => {
        const firstSlottedChild = this.shadowRoot?.querySelector("slot")?.assignedElements()[0];
        this.updateComplete.then(() => {
          firstSlottedChild?.focus();
        });
      });
      __privateAdd(this, _clickOutsideListener, (evt) => {
        const e42 = evt;
        const dialog = __privateGet(this, _dialogElementRef).value;
        const isNotEnterKey = e42.clientX > 0 || e42.clientY > 0;
        if (isNotEnterKey && dialog && this.open) {
          const rect = dialog.getBoundingClientRect();
          const isInDialog = rect.top <= e42.clientY && e42.clientY <= rect.top + rect.height && rect.left <= e42.clientX && e42.clientX <= rect.left + rect.width;
          if (!isInDialog) {
            e42.stopPropagation();
            this.open = false;
            __privateGet(this, _dispatchUiStateEvent).call(this, "close");
          }
        }
      });
    }
    _handleTriggerRefChanged() {
      this.triggerRef.then((el) => {
        if (el)
          this._trigger = el;
      });
    }
    _handleTriggerChanged() {
      __privateMethod(this, _registerTriggerEvents, registerTriggerEvents_fn).call(this);
      __privateMethod(this, _registerAutoPositioning, registerAutoPositioning_fn).call(this);
    }
    connectedCallback() {
      super.connectedCallback();
      TransitionalStyles.instance.apply(this, "gds-popover");
      __privateMethod(this, _registerTriggerEvents, registerTriggerEvents_fn).call(this);
      this._handleOpenChange();
      this.addEventListener("keydown", (e42) => {
        if (e42.key === "Escape") {
          this.open = false;
          __privateGet(this, _dispatchUiStateEvent).call(this, "cancel");
          e42.stopPropagation();
          e42.preventDefault();
        }
      });
      this.addEventListener("focusin", (e42) => {
        const t32 = e42.target;
        if (t32.tagName === "INPUT" || t32.tagName === "TEXTAREA") {
          this._isVirtKbVisible = true;
        } else {
          this._isVirtKbVisible = false;
        }
      });
      this.addEventListener("blurin", (_22) => {
        this._isVirtKbVisible = false;
      });
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      __privateMethod(this, _unregisterTriggerEvents, unregisterTriggerEvents_fn).call(this);
    }
    render() {
      return x2`${this._tStyles}
      <dialog
        class="${o7({ "v-kb-visible": this._isVirtKbVisible })}"
        ${n10(__privateGet(this, _dialogElementRef))}
      >
        <header>
          <h2>${this.label}</h2>
          <button
            class="close"
            @click=${__privateGet(this, _handleCloseButton)}
            aria-label="${msg("Close")}"
          >
            <i></i>
          </button>
        </header>
        <slot></slot>
      </dialog>`;
    }
    _handleOpenChange() {
      this.setAttribute("aria-hidden", String(!this.open));
      this.hidden = !this.open;
      this.updateComplete.then(() => {
        if (this.open) {
          __privateGet(this, _dialogElementRef).value?.showModal();
          __privateGet(this, _focusFirstSlottedChild).call(this);
          setTimeout(
            () => __privateGet(this, _dialogElementRef).value?.addEventListener(
              "click",
              __privateGet(this, _clickOutsideListener)
            ),
            0
          );
        } else {
          __privateGet(this, _dialogElementRef).value?.close();
          __privateGet(this, _dialogElementRef).value?.removeEventListener(
            "click",
            __privateGet(this, _clickOutsideListener)
          );
        }
      });
    }
    _handleMobileLayout(matches) {
      var _a;
      __privateSet(this, _isMobileViewport, matches);
      if (matches) {
        (_a = __privateGet(this, _autoPositionCleanupFn)) == null ? void 0 : _a.call(this);
        __privateGet(this, _dialogElementRef).value?.style.removeProperty("left");
        __privateGet(this, _dialogElementRef).value?.style.removeProperty("top");
        __privateGet(this, _dialogElementRef).value?.style.removeProperty("minWidth");
        this.updateComplete.then(() => {
          if (this.open)
            __privateGet(this, _dialogElementRef).value?.showModal();
        });
      } else {
        this.updateComplete.then(() => {
          __privateMethod(this, _registerAutoPositioning, registerAutoPositioning_fn).call(this);
        });
      }
    }
  };
  _dialogElementRef = /* @__PURE__ */ new WeakMap();
  _autoPositionCleanupFn = /* @__PURE__ */ new WeakMap();
  _isMobileViewport = /* @__PURE__ */ new WeakMap();
  _dispatchUiStateEvent = /* @__PURE__ */ new WeakMap();
  _handleCloseButton = /* @__PURE__ */ new WeakMap();
  _registerTriggerEvents = /* @__PURE__ */ new WeakSet();
  registerTriggerEvents_fn = function() {
    this._trigger?.addEventListener("keydown", __privateGet(this, _triggerKeyDownListener));
  };
  _unregisterTriggerEvents = /* @__PURE__ */ new WeakSet();
  unregisterTriggerEvents_fn = function() {
    var _a;
    this._trigger?.removeEventListener("keydown", __privateGet(this, _triggerKeyDownListener));
    (_a = __privateGet(this, _autoPositionCleanupFn)) == null ? void 0 : _a.call(this);
  };
  _registerAutoPositioning = /* @__PURE__ */ new WeakSet();
  registerAutoPositioning_fn = function() {
    const referenceEl = this._trigger;
    const floatingEl = __privateGet(this, _dialogElementRef).value;
    if (!referenceEl || !floatingEl || __privateGet(this, _isMobileViewport))
      return;
    if (__privateGet(this, _autoPositionCleanupFn)) {
      __privateGet(this, _autoPositionCleanupFn).call(this);
    }
    __privateSet(this, _autoPositionCleanupFn, autoUpdate(referenceEl, floatingEl, () => {
      computePosition2(referenceEl, floatingEl, {
        placement: this.placement,
        middleware: [offset(8), flip2()],
        strategy: "fixed"
      }).then(
        ({ x: x22, y: y22 }) => Object.assign(floatingEl.style, {
          left: `${x22}px`,
          top: `${y22}px`,
          minWidth: this.calcMinWidth(referenceEl),
          maxWidth: this.calcMaxWidth(referenceEl)
        })
      );
    }));
  };
  _triggerKeyDownListener = /* @__PURE__ */ new WeakMap();
  _focusFirstSlottedChild = /* @__PURE__ */ new WeakMap();
  _clickOutsideListener = /* @__PURE__ */ new WeakMap();
  GdsPopover.styles = r(popover_styles_default);
  __decorateClass([
    n6({ type: Boolean, reflect: true })
  ], GdsPopover.prototype, "open", 2);
  __decorateClass([
    n6()
  ], GdsPopover.prototype, "triggerRef", 2);
  __decorateClass([
    n6()
  ], GdsPopover.prototype, "label", 2);
  __decorateClass([
    n6()
  ], GdsPopover.prototype, "placement", 2);
  __decorateClass([
    n6()
  ], GdsPopover.prototype, "calcMinWidth", 2);
  __decorateClass([
    n6()
  ], GdsPopover.prototype, "calcMaxWidth", 2);
  __decorateClass([
    t4()
  ], GdsPopover.prototype, "_trigger", 2);
  __decorateClass([
    t4()
  ], GdsPopover.prototype, "_isVirtKbVisible", 2);
  __decorateClass([
    watch("triggerRef")
  ], GdsPopover.prototype, "_handleTriggerRefChanged", 1);
  __decorateClass([
    watch("_trigger")
  ], GdsPopover.prototype, "_handleTriggerChanged", 1);
  __decorateClass([
    t4()
  ], GdsPopover.prototype, "_tStyles", 2);
  __decorateClass([
    watch("open")
  ], GdsPopover.prototype, "_handleOpenChange", 1);
  __decorateClass([
    watchMediaQuery("(max-width: 576px)")
  ], GdsPopover.prototype, "_handleMobileLayout", 1);
  GdsPopover = __decorateClass([
    gdsCustomElement("gds-popover")
  ], GdsPopover);
  var style4 = i`
  @layer base, reset, transitional-styles;

  @layer base {
    button {
      appearance: none;
      display: block;
      background-color: black;
      border-radius: 2rem;
      border: none;
      color: white;
      padding: 0.7rem 2rem;
      margin: 0.5rem 0;
      box-sizing: border-box;
    }
  }
`;
  var dropdown_styles_default = style4;
  var _optionElements;
  var _handleSearchFieldKeyUp;
  var _handleSearchFieldKeyDown;
  var _handleListboxKeyDown;
  var _handleOptionFocusChange;
  var _handleSelectionChange;
  var handleSelectionChange_fn;
  var _registerAutoCloseListener;
  var registerAutoCloseListener_fn;
  var _unregisterAutoCloseListener;
  var unregisterAutoCloseListener_fn;
  var _blurCloseListener;
  var _tabCloseListener;
  var GdsDropdown = class extends GdsFormControlElement {
    constructor() {
      super();
      __privateAdd(this, _handleSelectionChange);
      __privateAdd(this, _registerAutoCloseListener);
      __privateAdd(this, _unregisterAutoCloseListener);
      this.label = "";
      this.open = false;
      this.searchable = false;
      this.multiple = false;
      this.compareWith = (a22, b22) => a22 === b22;
      this.searchFilter = (q, o22) => o22.innerHTML.toLowerCase().includes(q.toLowerCase());
      this.syncPopoverWidth = false;
      __privateAdd(this, _optionElements, void 0);
      __privateAdd(this, _handleSearchFieldKeyUp, (e42) => {
        const input = this._elSearchInput;
        const options = Array.from(__privateGet(this, _optionElements));
        options.forEach((o22) => o22.hidden = false);
        if (!input.value)
          return;
        const filteredOptions = options.filter(
          (o22) => !this.searchFilter(input.value, o22)
        );
        filteredOptions.forEach((o22) => o22.hidden = true);
      });
      __privateAdd(this, _handleSearchFieldKeyDown, (e42) => {
        this._elListbox?.then((listbox) => {
          if (e42.key === "ArrowDown" || e42.key === "Tab") {
            e42.preventDefault();
            listbox.focus();
            return;
          }
        });
      });
      __privateAdd(this, _handleListboxKeyDown, (e42) => {
        if (e42.key === "Tab" && this.searchable) {
          e42.preventDefault();
          this._elSearchInput?.focus();
          return;
        }
      });
      __privateAdd(this, _handleOptionFocusChange, (e42) => {
        const triggerButton = this._elTriggerBtn;
        if (triggerButton)
          triggerButton.ariaActiveDescendantElement = e42.target;
      });
      __privateAdd(this, _blurCloseListener, (e42) => {
        const isFocusOutside = e42 instanceof FocusEvent && e42.relatedTarget && !this.contains(e42.relatedTarget);
        if (isFocusOutside)
          this.open = false;
      });
      __privateAdd(this, _tabCloseListener, (e42) => {
        if (e42.key === "Tab" && !this.searchable) {
          e42.preventDefault();
          this.open = false;
          this._elTriggerBtn?.focus();
        }
      });
      constrainSlots(this);
      updateWhenLocaleChanges(this);
      __privateSet(this, _optionElements, this.getElementsByTagName(
        getScopedTagName("gds-option")
      ));
    }
    /**
     * Get the options of the dropdown.
     */
    get options() {
      return Array.from(__privateGet(this, _optionElements)).filter(
        (o22) => !o22.hasAttribute("isplaceholder")
      );
    }
    /**
     * Return the first option with a isPlaceholder attribute.
     * If no placeholder is found, this will be undefined.
     */
    get placeholder() {
      return Array.from(__privateGet(this, _optionElements)).find(
        (o22) => o22.hasAttribute("isplaceholder")
      );
    }
    /**
     * Returns the display value as a string.
     * If the dropdown is in multiple mode, this will be a comma separated list of the selected values.
     */
    get displayValue() {
      let displayValue;
      if (Array.isArray(this.value)) {
        this.value.length > 2 ? displayValue = msg(str`${this.value.length} selected`) : displayValue = this.value.reduce(
          (acc, cur) => acc + this.options.find((v22) => v22.value === cur)?.innerHTML + ", ",
          ""
        ).slice(0, -2);
      } else {
        displayValue = this.options.find((v22) => v22.selected)?.innerHTML;
      }
      return displayValue || this.placeholder?.innerHTML || "";
    }
    connectedCallback() {
      super.connectedCallback();
      TransitionalStyles.instance.apply(this, "gds-dropdown");
      this.updateComplete.then(() => {
        this._handleLightDOMChange();
        this._handleValueChange();
      });
    }
    render() {
      return html2`
      ${this._tStyles}
      ${n8(
        this.label,
        () => html2`<label for="trigger">${this.label}</label>`
      )}

      <span class="form-info"><slot name="sub-label"></slot></span>

      <button
        id="trigger"
        @click="${() => this.open = !this.open}"
        aria-haspopup="listbox"
        role="combobox"
        aria-owns="listbox"
        aria-controls="listbox"
        aria-expanded="${this.open}"
      >
        <slot name="trigger">
          <span>${o8(this.displayValue)}</span>
        </slot>
      </button>

      <span class="form-info"><slot name="message"></slot></span>

      <gds-popover
        .label=${this.label}
        .open=${this.open}
        .triggerRef=${this._elTriggerBtnAsync}
        .calcMaxWidth=${(trigger) => this.syncPopoverWidth ? `${trigger.offsetWidth}px` : `auto`}
        @gds-ui-state=${(e42) => this.open = e42.detail.open}
      >
        ${n8(
        this.searchable,
        () => html2`<input
            id="searchinput"
            type="text"
            aria-label="${msg("Filter available options")}"
            placeholder="${msg("Search")}"
            @keydown=${__privateGet(this, _handleSearchFieldKeyDown)}
            @keyup=${__privateGet(this, _handleSearchFieldKeyUp)}
          />`
      )}

        <gds-listbox
          id="listbox"
          .multiple="${l6(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${__privateMethod(this, _handleSelectionChange, handleSelectionChange_fn)}"
          @gds-focus="${__privateGet(this, _handleOptionFocusChange)}"
          @keydown=${__privateGet(this, _handleListboxKeyDown)}
        >
          <slot gds-allow="gds-option"></slot>
        </gds-listbox>
      </gds-popover>
    `;
    }
    _handleLightDOMChange() {
      this.requestUpdate();
      if (this.multiple) {
        this._handleValueChange();
        return;
      }
      if (!this.value) {
        if (this.placeholder)
          this.value = this.placeholder.value;
        else
          this.value = this.options[0]?.value;
      } else if (!this.placeholder && this.options.find(
        (o22) => this.compareWith(o22.value, this.value)
      ) === void 0) {
        this.options[0] && (this.options[0].selected = true);
        this.value = this.options[0]?.value;
      }
    }
    _handleValueChange() {
      this._elListbox.then((listbox) => {
        if (listbox) {
          if (Array.isArray(this.value))
            listbox.selection = this.value;
          else
            listbox.selection = [this.value];
        }
      });
    }
    _onOpenChange() {
      const open = this.open;
      Array.from(__privateGet(this, _optionElements)).forEach((o22) => o22.hidden = !open);
      if (open)
        __privateMethod(this, _registerAutoCloseListener, registerAutoCloseListener_fn).call(this);
      else {
        __privateMethod(this, _unregisterAutoCloseListener, unregisterAutoCloseListener_fn).call(this);
        this._elSearchInput && (this._elSearchInput.value = "");
      }
      this.dispatchEvent(
        new CustomEvent("gds-ui-state", {
          detail: { open },
          bubbles: true,
          composed: true
        })
      );
    }
  };
  _optionElements = /* @__PURE__ */ new WeakMap();
  _handleSearchFieldKeyUp = /* @__PURE__ */ new WeakMap();
  _handleSearchFieldKeyDown = /* @__PURE__ */ new WeakMap();
  _handleListboxKeyDown = /* @__PURE__ */ new WeakMap();
  _handleOptionFocusChange = /* @__PURE__ */ new WeakMap();
  _handleSelectionChange = /* @__PURE__ */ new WeakSet();
  handleSelectionChange_fn = function() {
    this._elListbox.then((listbox) => {
      if (this.multiple)
        this.value = listbox.selection.map((s22) => s22.value);
      else {
        this.value = listbox.selection[0]?.value;
        this.open = false;
        setTimeout(() => this._elTriggerBtn?.focus(), 0);
      }
      this.dispatchEvent(
        new CustomEvent("change", {
          detail: { value: this.value },
          bubbles: true,
          composed: true
        })
      );
    });
  };
  _registerAutoCloseListener = /* @__PURE__ */ new WeakSet();
  registerAutoCloseListener_fn = function() {
    this.addEventListener("blur", __privateGet(this, _blurCloseListener));
    this.addEventListener("gds-blur", __privateGet(this, _blurCloseListener));
    this.addEventListener("keydown", __privateGet(this, _tabCloseListener));
  };
  _unregisterAutoCloseListener = /* @__PURE__ */ new WeakSet();
  unregisterAutoCloseListener_fn = function() {
    this.removeEventListener("blur", __privateGet(this, _blurCloseListener));
    this.removeEventListener("gds-blur", __privateGet(this, _blurCloseListener));
    this.removeEventListener("keydown", __privateGet(this, _tabCloseListener));
  };
  _blurCloseListener = /* @__PURE__ */ new WeakMap();
  _tabCloseListener = /* @__PURE__ */ new WeakMap();
  GdsDropdown.styles = dropdown_styles_default;
  GdsDropdown.shadowRootOptions = {
    mode: "open",
    delegatesFocus: true
  };
  __decorateClass([
    n6()
  ], GdsDropdown.prototype, "label", 2);
  __decorateClass([
    n6({ type: Boolean, reflect: true })
  ], GdsDropdown.prototype, "open", 2);
  __decorateClass([
    n6({ type: Boolean, reflect: true })
  ], GdsDropdown.prototype, "searchable", 2);
  __decorateClass([
    n6({ type: Boolean, reflect: true })
  ], GdsDropdown.prototype, "multiple", 2);
  __decorateClass([
    n6()
  ], GdsDropdown.prototype, "compareWith", 2);
  __decorateClass([
    n6()
  ], GdsDropdown.prototype, "searchFilter", 2);
  __decorateClass([
    n6({ type: Boolean })
  ], GdsDropdown.prototype, "syncPopoverWidth", 2);
  __decorateClass([
    t4()
  ], GdsDropdown.prototype, "_tStyles", 2);
  __decorateClass([
    i5("#trigger")
  ], GdsDropdown.prototype, "_elTriggerBtn", 2);
  __decorateClass([
    e8("#trigger")
  ], GdsDropdown.prototype, "_elTriggerBtnAsync", 2);
  __decorateClass([
    e8("#listbox")
  ], GdsDropdown.prototype, "_elListbox", 2);
  __decorateClass([
    i5("#searchinput")
  ], GdsDropdown.prototype, "_elSearchInput", 2);
  __decorateClass([
    observeLightDOM({
      attributes: true,
      childList: true,
      subtree: true,
      characterData: true
    })
  ], GdsDropdown.prototype, "_handleLightDOMChange", 1);
  __decorateClass([
    watch("value")
  ], GdsDropdown.prototype, "_handleValueChange", 1);
  __decorateClass([
    watch("open")
  ], GdsDropdown.prototype, "_onOpenChange", 1);
  GdsDropdown = __decorateClass([
    gdsCustomElement("gds-dropdown")
  ], GdsDropdown);
  var ForwardAttributesDirective = class extends i6 {
    constructor(partInfo) {
      super(partInfo);
      if (partInfo.type !== t5.ELEMENT) {
        throw new Error(
          "The `forwardAttributes` directive must be used in element bindings"
        );
      }
    }
    render(_filter) {
      return A;
    }
    update(part, [filter]) {
      const element = part.element;
      const host = part.options?.host;
      Array.from(host.attributes).forEach((attr) => {
        if (filter(attr)) {
          element.setAttribute(attr.name, attr.value);
        }
      });
    }
  };
  var forwardAttributes = e10(ForwardAttributesDirective);
  var input_styles_default = `@layer tokens, a11y, base, simplified;

@layer tokens {
  :host {
    --_color-bg: var(--gds-sys-color-container-container);

    --_color-border: var(--gds-sys-color-stroke-stroke);
    --_border-radius: .5rem;
    --_border-width: 0.0625rem;
    --_border-width-hover: 0.125rem;

    --_color-outline-alpha: 60%;
    --_color-outline: color-mix(
      in srgb,
      var(--_color-border),
      transparent var(--_color-outline-alpha)
    );

    --_transition: var(--gds-sys-transition);
    --_lh: 1.25;
    --_core-min-block-size: 3.5rem;
    --_gap: .5rem;
    --_padding-block: .625rem;
    --_padding-inline: 1rem;
    --_core-icon-size: 1.5rem;
    --_inner-height: 2rem;
  }
}

@layer a11y {
  /* @media (prefers-color-scheme: dark) {
    :host {
      --_color-bg: var(--_color-bg-dark);
    }
  } */

  @media (prefers-reduced-motion: reduce) {
    :host {
      --_transition: none;
    }
  }

  @media (prefers-reduced-transparency: reduce) {
    :host {
      --_transparency: 1;
    }
  }

  /* @media (prefers-contrast: more) {
    :host {
      --_color-bg: hsla(60, 4%, 96%, 1);
      --_color-outline-alpha: 0%;
    }
  } */
}

@layer base {
  * {
    box-sizing: border-box;
  }

  :host {
    display: block;
    contain: layout;
    isolation: isolate;
  }

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline-end: 1rem;
  }

  label {
    font-weight: 400;
  }

  .foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline-end: 1rem;

    gds-badge {
      align-self: flex-end;
    }

    :first-child {
      flex-grow: 1;
    }
  }

  .supporting-text, .error-text {
    font-size: .875rem;
  }

  slot[name="extended-supporting-text"] {
    display: block;
    font-size: .875rem;
    background-color: #eee;
    margin-top: 0.5rem;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    opacity: 0;
    transition: var(--_transition);

    [aria-hidden="false"] & {
      opacity: 1;
    }
  }

  div.extended-supporting-text {
    display: grid;
    grid-template-rows: 0fr;
    transition: var(--_transition);

    & > * {
      overflow: hidden;
    }

    &[aria-hidden="false"] {
      opacity: 1;
      grid-template-rows: 1fr;
    }
  }

  input[type='number']::-webkit-inner-spin-button {
    display: none;
  }

  input, textarea {
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    background-color: transparent;
    border: 0;
    width: 100%;
    overflow: hidden;
    margin: unset;
    outline: none;
    padding: unset;
    min-height: var(--_inner-height);
    box-sizing: border-box;
    font-size: var(--_fs);
    line-height: var(--_lh);
    transition: var(--_transition);
    font-family: inherit;

    &:focus:not(:focus-visible) {
      outline: none;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-calendar-picker-indicator {
      -webkit-appearance: none;
              appearance: none;
      background-color: rgb(195, 0, 255);
      background-image: none;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      width: 40px;
    }
  }

  textarea {
    resize: none;
    overflow: hidden;
    transition: unset;
    min-height: max(var(--_inner-height), calc(1lh * var(--_lines)));
    max-height: max(var(--_inner-height), calc(1lh * var(--_lines)));
  }

  .field {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: var(--_gap);

    cursor: text;

    block-size: -moz-max-content;

    block-size: max-content;
    min-block-size: var(--_core-min-block-size);

    background-color: var(--_color-bg);

    border: var(--_border-width-hover) solid transparent;
    border-block-end-color: transparent;
    border-start-end-radius: var(--_border-radius);
    border-start-start-radius: var(--_border-radius);

    box-shadow: 0 var(--_border-width) 0
      var(--_color-border);
    padding-block: var(--_padding-block);
    padding-inline: var(--_padding-inline);
    margin-block: var(--_gap);

    position: relative;

    transition: var(--_transition);

    outline-style: solid;
    outline-offset: var(--_border-width);
    outline-width: var(--_border-width-hover);
    outline-color: transparent;

    &:focus:not(:focus-visible) {
      outline: none;
    }

    &:hover {
      --_border-width: var(--_border-width-hover);
    }

    &:has(input:focus, textarea:focus) {
      --_border-width: var(--_border-width-hover);
      outline-color: var(--_color-outline);
      border-radius: var(--_border-radius);
      border: var(--_border-width) solid var(--_color-border);
      box-shadow: none;
      transition: var(--_transition);
    }

    & slot {
      display: flex;
      height: var(--_inner-height);
      align-items: center;
    }
  }

  :host(:invalid) .field {
    --_color-bg: var(--gds-sys-color-status-negative-negative-bright);
    --_color-border: var(--gds-sys-color-stroke-stroke-negative);
    --_color-outline: var(--gds-sys-color-stroke-stroke-negative);
    color: var(--gds-sys-color-status-negative-on-negative-bright);
  }
  :host(:invalid) .error-text {
    color: var(--gds-sys-color-status-negative-on-negative-bright);
  }
  :host(:invalid) label {
    color: var(--gds-sys-color-status-negative-on-negative-bright);
  }
}

@layer simplified {
  :host([variant="simplified"]) label {
    align-items: center;
    background-color: transparent;
    display: block;
    height: -moz-max-content;
    height: max-content;
    inset: 0;
    width: 100%;

    div {
      line-height: var(--_lh);
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      transition: var(--_transition);
    }
  }

  :host([variant="simplified"]) label:has(
    input:not(:-moz-placeholder-shown, [readonly]),
    textarea:not(:-moz-placeholder-shown, [readonly])) {
    div {
      font-size: 0.75rem;
      top: 0.375rem;
      font-weight: 500;
      transform: translateY(
        translateY(calc(0px - var(--gds-input-label-translate)))
      );
    }
    input, textarea {
      margin-top: 0.75rem;
    }
  }

  :host([variant="simplified"]) label:has(
    input:not(:placeholder-shown, [readonly]),
    textarea:not(:placeholder-shown, [readonly])),
  :host([variant="simplified"]) label:focus-within {
    div {
      font-size: 0.75rem;
      top: 0.375rem;
      font-weight: 500;
      transform: translateY(
        translateY(calc(0px - var(--gds-input-label-translate)))
      );
    }
    input, textarea {
      margin-top: 0.75rem;
    }
  }
}
`;
  var _renderDefault;
  var renderDefault_fn;
  var _renderSimplified;
  var renderSimplified_fn;
  var _forwardableAttrs;
  var _handleOnInput;
  var _handleOnChange;
  var _handleFieldClick;
  var _handleClearBtnClick;
  var _handleSupportingTextBtnClick;
  var _renderNativeInput;
  var renderNativeInput_fn;
  var _renderNativeTextarea;
  var renderNativeTextarea_fn;
  var _renderSupportingText;
  var renderSupportingText_fn;
  var _renderExtendedSupportingText;
  var renderExtendedSupportingText_fn;
  var _renderClearButton;
  var renderClearButton_fn;
  var _shouldShowRemainingChars;
  var shouldShowRemainingChars_get;
  var _renderRemainingCharsBadge;
  var renderRemainingCharsBadge_fn;
  var _asyncRenderExtendedSupportingTextButton;
  var asyncRenderExtendedSupportingTextButton_fn;
  var GdsInput = class extends GdsFormControlElement {
    constructor() {
      super();
      __privateAdd(this, _renderDefault);
      __privateAdd(this, _renderSimplified);
      __privateAdd(this, _renderNativeInput);
      __privateAdd(this, _renderNativeTextarea);
      __privateAdd(this, _renderSupportingText);
      __privateAdd(this, _renderExtendedSupportingText);
      __privateAdd(this, _renderClearButton);
      __privateAdd(this, _shouldShowRemainingChars);
      __privateAdd(this, _renderRemainingCharsBadge);
      __privateAdd(this, _asyncRenderExtendedSupportingTextButton);
      this.value = "";
      this.label = "";
      this.supportingText = "";
      this.showExtendedSupportingText = false;
      this.clearable = false;
      this.maxlength = Number.MAX_SAFE_INTEGER;
      this.variant = "default";
      this.multiline = false;
      __privateAdd(this, _forwardableAttrs, (attr) => ["type", "placeholder", "required"].includes(attr.name));
      __privateAdd(this, _handleOnInput, (e42) => {
        const element = e42.target;
        this.value = element.value;
      });
      __privateAdd(this, _handleOnChange, (e42) => {
        const element = e42.target;
        this.value = element.value;
        this.dispatchEvent(
          new Event("change", {
            bubbles: true,
            composed: true
          })
        );
      });
      __privateAdd(this, _handleFieldClick, () => {
        this.elInput.then((el) => el.focus());
      });
      __privateAdd(this, _handleClearBtnClick, () => {
        this.value = "";
      });
      __privateAdd(this, _handleSupportingTextBtnClick, () => {
        this.showExtendedSupportingText = !this.showExtendedSupportingText;
        this.dispatchEvent(
          new CustomEvent("gds-ui-state", {
            bubbles: true,
            composed: true,
            detail: this.showExtendedSupportingText
          })
        );
      });
      this._handleFormReset = () => {
        this.value = "";
      };
      constrainSlots(this);
    }
    connectedCallback() {
      super.connectedCallback();
      this._setAutoHeight();
    }
    render() {
      return html2`${o11(this.variant, [
        ["default", () => __privateMethod(this, _renderDefault, renderDefault_fn).call(this)],
        ["simplified", () => __privateMethod(this, _renderSimplified, renderSimplified_fn).call(this)]
      ])}`;
    }
    _setAutoHeight() {
      if (!this.multiline)
        return;
      this.elInput.then((element) => {
        const lines = (element.value.split("\n").length || 1).toString();
        element?.style.setProperty("--_lines", lines.toString());
      });
    }
  };
  _renderDefault = /* @__PURE__ */ new WeakSet();
  renderDefault_fn = function() {
    return html2`
      <div class="head">
        <label for="input">${this.label}</label>
        ${m4(__privateMethod(this, _asyncRenderExtendedSupportingTextButton, asyncRenderExtendedSupportingTextButton_fn).call(this), A)}
      </div>

      ${__privateMethod(this, _renderSupportingText, renderSupportingText_fn).call(this)} ${__privateMethod(this, _renderExtendedSupportingText, renderExtendedSupportingText_fn).call(this)}

      <div class="field" @click=${__privateGet(this, _handleFieldClick)}>
        <slot name="lead" gds-allow="gds-icon"></slot>
        ${n8(
      this.multiline,
      () => html2`${__privateMethod(this, _renderNativeTextarea, renderNativeTextarea_fn).call(this)}`,
      () => html2`${__privateMethod(this, _renderNativeInput, renderNativeInput_fn).call(this)}`
    )}
        <slot name="trail" gds-allow="gds-badge"></slot>
        ${__privateMethod(this, _renderClearButton, renderClearButton_fn).call(this)}
      </div>

      <div class="foot">
        <div>
          ${n8(
      this.invalid,
      () => html2`<span class="error-text">Error information</span>`
    )}
        </div>
        ${n8(
      __privateGet(this, _shouldShowRemainingChars, shouldShowRemainingChars_get),
      () => __privateMethod(this, _renderRemainingCharsBadge, renderRemainingCharsBadge_fn).call(this)
    )}
      </div>
    `;
  };
  _renderSimplified = /* @__PURE__ */ new WeakSet();
  renderSimplified_fn = function() {
    return html2`
      <div class="field" @click=${__privateGet(this, _handleFieldClick)}>
        <slot name="lead" gds-allow="gds-icon"></slot>
        <label for="input">
          <div>${this.label}</div>
          ${n8(
      this.multiline,
      () => html2`${__privateMethod(this, _renderNativeTextarea, renderNativeTextarea_fn).call(this)}`,
      () => html2`${__privateMethod(this, _renderNativeInput, renderNativeInput_fn).call(this)}`
    )}
        </label>
        <slot name="trail" gds-allow="gds-badge"></slot>
        ${__privateMethod(this, _renderClearButton, renderClearButton_fn).call(this)}
      </div>

      <div class="foot">
        ${__privateMethod(this, _renderSupportingText, renderSupportingText_fn).call(this)}
        ${n8(
      __privateGet(this, _shouldShowRemainingChars, shouldShowRemainingChars_get),
      () => __privateMethod(this, _renderRemainingCharsBadge, renderRemainingCharsBadge_fn).call(this)
    )}
        ${m4(__privateMethod(this, _asyncRenderExtendedSupportingTextButton, asyncRenderExtendedSupportingTextButton_fn).call(this), A)}
      </div>

      ${__privateMethod(this, _renderExtendedSupportingText, renderExtendedSupportingText_fn).call(this)}
    `;
  };
  _forwardableAttrs = /* @__PURE__ */ new WeakMap();
  _handleOnInput = /* @__PURE__ */ new WeakMap();
  _handleOnChange = /* @__PURE__ */ new WeakMap();
  _handleFieldClick = /* @__PURE__ */ new WeakMap();
  _handleClearBtnClick = /* @__PURE__ */ new WeakMap();
  _handleSupportingTextBtnClick = /* @__PURE__ */ new WeakMap();
  _renderNativeInput = /* @__PURE__ */ new WeakSet();
  renderNativeInput_fn = function() {
    return html2`
      <input
        @input=${__privateGet(this, _handleOnInput)}
        @change=${__privateGet(this, _handleOnChange)}
        .value=${this.value}
        id="input"
        aria-describedby="supporting-text"
        placeholder=" "
        ${forwardAttributes(__privateGet(this, _forwardableAttrs))}
      />
    `;
  };
  _renderNativeTextarea = /* @__PURE__ */ new WeakSet();
  renderNativeTextarea_fn = function() {
    return html2`
      <textarea
        @input=${__privateGet(this, _handleOnInput)}
        @change=${__privateGet(this, _handleOnChange)}
        .value=${this.value}
        id="input"
        aria-describedby="supporting-text"
        placeholder=" "
        ${forwardAttributes(__privateGet(this, _forwardableAttrs))}
      ></textarea>
    `;
  };
  _renderSupportingText = /* @__PURE__ */ new WeakSet();
  renderSupportingText_fn = function() {
    return html2`
      <div class="supporting-text" id="supporting-text">
        ${this.supportingText}
      </div>
    `;
  };
  _renderExtendedSupportingText = /* @__PURE__ */ new WeakSet();
  renderExtendedSupportingText_fn = function() {
    return html2`
      <div
        class="extended-supporting-text"
        aria-hidden="${!this.showExtendedSupportingText}"
        ?inert="${!this.showExtendedSupportingText}"
      >
        <div>
          <slot
            name="extended-supporting-text"
            @slotchange=${() => this.requestUpdate()}
          ></slot>
        </div>
      </div>
    `;
  };
  _renderClearButton = /* @__PURE__ */ new WeakSet();
  renderClearButton_fn = function() {
    if (this.clearable && this.value.length > 0)
      return html2`
        <gds-button
          size="small"
          variant="tertiary"
          label="${msg("Clear input")}"
          @click=${__privateGet(this, _handleClearBtnClick)}
        >
          <gds-icon name="x"></gds-icon>
        </gds-button>
      `;
    else
      return A;
  };
  _shouldShowRemainingChars = /* @__PURE__ */ new WeakSet();
  shouldShowRemainingChars_get = function() {
    return this.maxlength < Number.MAX_SAFE_INTEGER;
  };
  _renderRemainingCharsBadge = /* @__PURE__ */ new WeakSet();
  renderRemainingCharsBadge_fn = function() {
    const remaining = this.maxlength - this.value.length;
    let variant;
    if (remaining < 0) {
      variant = "error";
    } else if (remaining < 20) {
      variant = "warning";
    } else {
      variant = "success";
    }
    return html2`<gds-badge variant="${variant}">${remaining}</gds-badge>`;
  };
  _asyncRenderExtendedSupportingTextButton = /* @__PURE__ */ new WeakSet();
  asyncRenderExtendedSupportingTextButton_fn = async function() {
    return this.elExtendedSupportingTextSlot.then((slot) => {
      if (slot.assignedElements().length > 0)
        return html2`
          <gds-button
            size="small"
            variant="tertiary"
            label="${msg("Show extended supporting text")}"
            @click=${__privateGet(this, _handleSupportingTextBtnClick)}
          >
            <gds-icon name="info"></gds-icon>
          </gds-button>
        `;
      else
        return A;
    });
  };
  GdsInput.shadowRootOptions = {
    ...s5.shadowRootOptions,
    delegatesFocus: true
  };
  GdsInput.styles = [tokens, r(input_styles_default)];
  __decorateClass([
    n6()
  ], GdsInput.prototype, "value", 2);
  __decorateClass([
    n6()
  ], GdsInput.prototype, "label", 2);
  __decorateClass([
    n6({ attribute: "supporting-text" })
  ], GdsInput.prototype, "supportingText", 2);
  __decorateClass([
    n6({
      attribute: "show-extended-supporting-text",
      type: Boolean,
      reflect: true
    })
  ], GdsInput.prototype, "showExtendedSupportingText", 2);
  __decorateClass([
    n6({ type: Boolean })
  ], GdsInput.prototype, "clearable", 2);
  __decorateClass([
    n6({ type: Number })
  ], GdsInput.prototype, "maxlength", 2);
  __decorateClass([
    n6()
  ], GdsInput.prototype, "variant", 2);
  __decorateClass([
    n6({ type: Boolean })
  ], GdsInput.prototype, "multiline", 2);
  __decorateClass([
    e8("input, textarea")
  ], GdsInput.prototype, "elInput", 2);
  __decorateClass([
    e8('slot[name="extended-supporting-text"]')
  ], GdsInput.prototype, "elExtendedSupportingTextSlot", 2);
  __decorateClass([
    watch("value")
  ], GdsInput.prototype, "_setAutoHeight", 1);
  GdsInput = __decorateClass([
    gdsCustomElement("gds-input")
  ], GdsInput);
  var checkbox_default = `:host {
  --gds-checkbox-bg-color: hsl(0, 0%, 100%);
  --gds-checkbox-border-color: hsla(60, 4%, 50%, 1);
  --gds-checkbox-border-width: 2px;
  --gds-checkbox-border-radius: 4px;

  --gds-checkbox-color-hover: hsla(60, 6%, 90%, 1);
  --gds-checkbox-color-active: hsla(60, 4%, 85%, 1);

  --gds-checkbox-checked-color: hsla(60, 4%, 20%, 1);
  --gds-checkbox-color-tick: hsl(0, 0%, 100%);
}

.gds-checkbox {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: calc(var(--gds-checkbox-border-radius) * 2);
  transition: all 248ms ease-in-out;
  cursor: pointer;

  & input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    margin: unset;
    padding: unset;
    box-sizing: border-box;
    cursor: pointer;
    aspect-ratio: 1/1;
    width: 16px;
    height: 16px;
    background-color: var(--gds-checkbox-bg-color);
    border: var(--gds-checkbox-border-width) solid
      var(--gds-checkbox-border-color);
    border-radius: var(--gds-checkbox-border-radius);
    transition: all 248ms cubic-bezier(0.2, 0.85, 0.32, 1.2);

    &::after {
      content: '';
      width: 5px;
      height: 8px;
      border: var(--gds-checkbox-border-width) solid
        var(--gds-checkbox-color-tick);
      border-top: 0;
      border-left: 0;
      rotate: 43deg;
      inset: 1px 0 0 3.5px;
      position: absolute;
      pointer-events: none;
      box-sizing: border-box;
      transition: all 248ms cubic-bezier(0.2, 0.85, 0.32, 1.2);
      scale: 0.8;
      opacity: 0;
    }

    &:checked {
      color: var(--gds-checkbox-checked-color-tick);
      border-color: var(--gds-checkbox-checked-color);
      background-color: var(--gds-checkbox-checked-color);

      &::after {
        scale: 1;
        opacity: 1;
      }
    }

    &[indeterminate],
    &:indeterminate {
      &::after {
        border-top: 0;
        border-left: 0;
        border-radius: 0;
        width: 8px;
        height: var(--gds-checkbox-border-width);
        inset: 5px 0px 0px 2px;
        rotate: 0deg;
        opacity: 1;
        scale: 1;
      }
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  &:hover:has(input:not([disabled])) {
    background-color: var(--gds-checkbox-color-hover);
  }

  &:active:has(input:not([disabled])) {
    background-color: var(--gds-checkbox-color-active);
    .gds-checkbox-core {
      border-color: var(--gds-checkbox-checked-color);
    }
  }

  &:has(input:checked) {
    background-color: var(--gds-checkbox-color-hover);
  }

  &:has(input:disabled) {
    cursor: not-allowed;
  }

  /* Invalid state */

  &:has(input:invalid) {
    --gds-checkbox-bg-color: hsla(13, 75%, 95%, 1);
    --gds-checkbox-border-color: hsla(9, 75%, 38%, 1);
    --gds-checkbox-color-hover: hsla(12, 75%, 91%, 1);
    --gds-checkbox-color-active: hsla(12, 78%, 86%, 1);
    --gds-checkbox-checked-color: hsla(9, 75%, 38%, 1);
    --gds-checkbox-color-tick: hsla(0, 0%, 100%, 1);

    & input {
      &::after {
        border-color: var(--gds-checkbox-color-tick);
      }

      &:checked {
        color: var(--gds-checkbox-checked-color-tick);
        border-color: var(--gds-checkbox-checked-color);
        background-color: var(--gds-checkbox-checked-color);
      }
    }

    &:hover:has(input:not([disabled])) {
      background-color: var(--gds-checkbox-color-hover);
    }

    &:active:has(input:not([disabled])) {
      background-color: var(--gds-checkbox-color-active);
      .gds-checkbox-core {
        border-color: var(--gds-checkbox-checked-color);
      }
    }

    &:has(input:checked) {
      background-color: var(--gds-checkbox-color-hover);
    }
  }
}
`;
  var _internals;
  var GdsCheckbox = class extends s5 {
    constructor() {
      super();
      __privateAdd(this, _internals, void 0);
      this.inputElement = null;
      this.exludeAttr = ["id", "label"];
      __privateSet(this, _internals, this.attachInternals());
      constrainSlots(this);
    }
    reflectAttributesToInput() {
      if (this.inputElement) {
        const attributes = this.attributes;
        for (let i32 = 0; i32 < attributes.length; i32++) {
          const attribute = attributes[i32];
          if (!this.exludeAttr.includes(attribute.name)) {
            this.inputElement.setAttribute(attribute.name, attribute.value);
          }
        }
      }
    }
    update(changedProperties) {
      super.update(changedProperties);
      if (!this.inputElement) {
        this.inputElement = this.shadowRoot?.getElementById(
          "checkbox"
        );
      }
      this.reflectAttributesToInput();
    }
    render() {
      return x2`
      <label class="gds-checkbox">
        <input id="checkbox" type="checkbox" />
      </label>
    `;
    }
  };
  _internals = /* @__PURE__ */ new WeakMap();
  GdsCheckbox.styles = r(checkbox_default);
  GdsCheckbox.shadowRootOptions = {
    mode: "open",
    delegatesFocus: true
  };
  GdsCheckbox = __decorateClass([
    e5("gds-checkbox")
  ], GdsCheckbox);
  var radio_default = `:host {
  --gds-checkbox-bg-color: hsl(0, 0%, 100%);
  --gds-checkbox-border-color: hsla(60, 4%, 50%, 1);
  --gds-checkbox-border-width: 1px;
  --gds-checkbox-border-radius: 200px;

  --gds-checkbox-color-hover: hsla(60, 6%, 90%, 1);
  --gds-checkbox-color-active: hsla(60, 4%, 85%, 1);

  --gds-checkbox-checked-color: hsla(60, 4%, 20%, 1);
  --gds-checkbox-color-tick: hsl(0, 0%, 100%);

  --gds-radio-transition: all 248ms ease-in-out;
  --gds-radio-transition-input: all 248ms cubic-bezier(0.2, 0.85, 0.32, 1.2);
}

@media (prefers-color-scheme: dark) {
  :host {
    --gds-dark: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  :host {
    --gds-radio-transition: none;
    --gds-radio-transition-input: none;
  }
}

@media (prefers-reduced-transparency: reduce) {
  :host {
    --gds-input-transparency: 1;
  }
}

@media (prefers-contrast: more) {
  :host {
    --gds-input-color-bg: hsla(60, 4%, 96%, 1);
    --gds-input-color-outline-alpha: 0%;
  }
}

.gds-radio {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: var(--gds-checkbox-border-radius);
  transition: var(--gds-radio-transition);
  cursor: pointer;

  & input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    margin: unset;
    padding: unset;
    box-sizing: border-box;
    cursor: pointer;
    aspect-ratio: 1/1;
    width: 16px;
    height: 16px;
    background-color: var(--gds-checkbox-bg-color);
    border: var(--gds-checkbox-border-width) solid
      var(--gds-checkbox-border-color);
    border-radius: var(--gds-checkbox-border-radius);
    transition: var(--gds-radio-transition-input);

    &:checked {
      border-color: var(--gds-checkbox-checked-color);
      border-width: 4px;
    }

    &[indeterminate],
    &:indeterminate {
      &::after {
        border-top: 0;
        border-left: 0;
        border-radius: 0;
        width: 8px;
        height: var(--gds-checkbox-border-width);
        inset: 5px 0px 0px 2px;
        rotate: 0deg;
        opacity: 1;
        scale: 1;
      }
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  &:hover:has(input:not([disabled])) {
    background-color: var(--gds-checkbox-color-hover);
  }

  &:active:has(input:not([disabled])) {
    background-color: var(--gds-checkbox-color-active);
    .gds-checkbox-core {
      border-color: var(--gds-checkbox-checked-color);
    }
  }

  &:has(input:checked) {
    background-color: var(--gds-checkbox-color-hover);
  }

  &:has(input:disabled) {
    cursor: not-allowed;
  }

  /* Invalid state */

  &:has(input:invalid) {
    --gds-checkbox-bg-color: hsla(13, 75%, 95%, 1);
    --gds-checkbox-border-color: hsla(9, 75%, 38%, 1);
    --gds-checkbox-color-hover: hsla(12, 75%, 91%, 1);
    --gds-checkbox-color-active: hsla(12, 78%, 86%, 1);
    --gds-checkbox-checked-color: hsla(9, 75%, 38%, 1);
    --gds-checkbox-color-tick: hsla(0, 0%, 100%, 1);

    & input {
      &::after {
        border-color: var(--gds-checkbox-color-tick);
      }

      &:checked {
        color: var(--gds-checkbox-checked-color-tick);
        border-color: var(--gds-checkbox-checked-color);
        background-color: var(--gds-checkbox-checked-color);
      }
    }

    &:hover:has(input:not([disabled])) {
      background-color: var(--gds-checkbox-color-hover);
    }

    &:active:has(input:not([disabled])) {
      background-color: var(--gds-checkbox-color-active);
      .gds-checkbox-core {
        border-color: var(--gds-checkbox-checked-color);
      }
    }

    &:has(input:checked) {
      background-color: var(--gds-checkbox-color-hover);
    }
  }
}

.gds-radio-group {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border: 0;
  padding: 0;
}
`;
  var _internals2;
  var GdsRadioGroup = class extends s5 {
    constructor() {
      super();
      __privateAdd(this, _internals2, void 0);
      this.label = "Label";
      this.inputElement = null;
      this.exludeAttr = ["id", "label"];
      __privateSet(this, _internals2, this.attachInternals());
      constrainSlots(this);
    }
    reflectAttributesToInput() {
      if (this.inputElement) {
        const attributes = this.attributes;
        for (let i32 = 0; i32 < attributes.length; i32++) {
          const attribute = attributes[i32];
          if (!this.exludeAttr.includes(attribute.name)) {
            this.inputElement.setAttribute(attribute.name, attribute.value);
          }
        }
      }
    }
    update(changedProperties) {
      super.update(changedProperties);
      if (!this.inputElement) {
        this.inputElement = this.shadowRoot?.getElementById(
          "radio"
        );
      }
      this.reflectAttributesToInput();
    }
    render() {
      return x2`
      <fieldset
        class="gds-radio-group"
        role="radiogroup"
        aria-labelledby="label"
      >
        <label>${this.label}</label>
        <slot></slot>
      </fieldset>
    `;
    }
  };
  _internals2 = /* @__PURE__ */ new WeakMap();
  GdsRadioGroup.shadowRootOptions = {
    mode: "open",
    delegatesFocus: true
  };
  __decorateClass([
    n6({ type: String, reflect: true, attribute: "label" })
  ], GdsRadioGroup.prototype, "label", 2);
  GdsRadioGroup = __decorateClass([
    e5("gds-radio-group")
  ], GdsRadioGroup);
  var _internals3;
  var GdsRadio = class extends s5 {
    constructor() {
      super();
      __privateAdd(this, _internals3, void 0);
      this.inputElement = null;
      this.exludeAttr = ["id", "label"];
      __privateSet(this, _internals3, this.attachInternals());
      constrainSlots(this);
    }
    reflectAttributesToInput() {
      if (this.inputElement) {
        const attributes = this.attributes;
        for (let i32 = 0; i32 < attributes.length; i32++) {
          const attribute = attributes[i32];
          if (!this.exludeAttr.includes(attribute.name)) {
            this.inputElement.setAttribute(attribute.name, attribute.value);
          }
        }
      }
    }
    update(changedProperties) {
      super.update(changedProperties);
      if (!this.inputElement) {
        this.inputElement = this.shadowRoot?.getElementById(
          "radio"
        );
      }
      this.reflectAttributesToInput();
    }
    handleClick() {
      const radioGroup = this.closest("gds-radio-group");
      if (radioGroup instanceof GdsRadioGroup) {
        radioGroup.selectedValue = this.value;
      }
    }
    render() {
      return x2`
      <label class="gds-radio">
        <input id="radio" type="radio" />
      </label>
      <label for="radio">${this.textContent}</label>
    `;
    }
  };
  _internals3 = /* @__PURE__ */ new WeakMap();
  GdsRadio.styles = r(radio_default);
  GdsRadio.shadowRootOptions = {
    mode: "open",
    delegatesFocus: true
  };
  GdsRadio = __decorateClass([
    e5("gds-radio")
  ], GdsRadio);
  var switch_default = `:host {
  --gds-checkbox-bg-color: hsl(0, 0%, 100%);
  --gds-checkbox-border-color: hsla(60, 4%, 20%, 1);
  --gds-checkbox-border-width: 7.5px;
  --gds-checkbox-border-radius: 200px;

  --gds-checkbox-color-hover: hsla(60, 6%, 90%, 1);
  --gds-checkbox-color-active: hsla(60, 4%, 85%, 1);

  --gds-checkbox-checked-color: hsla(130, 40%, 30%, 1);
  --gds-checkbox-color-tick: hsl(0, 0%, 100%);

  --gds-switch-transition: all 548ms ease-in-out;
  --gds-switch-animaton-on: 248ms;
  --gds-switch-animaton-off: 248ms;
  --gds-switch-animaton-transition: all 248ms cubic-bezier(0.2, 0.85, 0.32, 1.2);
}

@media (prefers-reduced-motion: reduce) {
  :host {
    --gds-switch-transition: none;
    --gds-switch-animaton-on: 0ms;
    --gds-switch-animaton-off: 0ms;
    --gds-switch-animaton-transition: none;
  }
}

.gds-switch {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 64px;
  height: 32px;
  border-radius: var(--gds-checkbox-border-radius);
  transition: var(--gds-switch-transition);
  cursor: pointer;
  background-color: var(--gds-checkbox-color-hover);

  & input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    margin: unset;
    padding: unset;
    box-sizing: border-box;
    cursor: pointer;
    width: 32px;
    height: 32px;
    background-color: var(--gds-checkbox-bg-color);
    border: var(--gds-checkbox-border-width) solid
      var(--gds-checkbox-border-color);
    border-radius: var(--gds-checkbox-border-radius);
    transition: var(--gds-switch-animaton-transition);

    &:checked {
      border-color: var(--gds-checkbox-checked-color);
      animation: switch-on var(--gds-switch-animaton-on) forwards;
    }

    &:not(:checked) {
      animation: switch-off var(--gds-switch-animaton-off) backwards;
    }
  }

  &:has(input:checked) {
    background-color: var(--gds-checkbox-checked-color);
  }

  &:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

@keyframes switch-on {
  to {
    transform: translate3d(100%, 0, 0) scale(0.5);
    width: 32px;
    border-width: 0;
  }
}

@keyframes switch-off {
  from {
    transform: translate3d(100%, 0, 0) scale(0.5);
    width: 32px;
    border-width: 0;
  }
  to {
    transform: translate3d(0%, 0, 0) scale(1);
    width: 32px;
    border-width: 7.5px;
  }
}
`;
  var _internals4;
  var GdsSwitch = class extends s5 {
    constructor() {
      super();
      __privateAdd(this, _internals4, void 0);
      this.inputElement = null;
      this.exludeAttr = ["id", "label"];
      __privateSet(this, _internals4, this.attachInternals());
      constrainSlots(this);
    }
    reflectAttributesToInput() {
      if (this.inputElement) {
        const attributes = this.attributes;
        for (let i32 = 0; i32 < attributes.length; i32++) {
          const attribute = attributes[i32];
          if (!this.exludeAttr.includes(attribute.name)) {
            this.inputElement.setAttribute(attribute.name, attribute.value);
          }
        }
      }
    }
    update(changedProperties) {
      super.update(changedProperties);
      if (!this.inputElement) {
        this.inputElement = this.shadowRoot?.getElementById(
          "switch"
        );
      }
      this.reflectAttributesToInput();
    }
    render() {
      return x2`
      <label class="gds-switch">
        <input id="switch" type="checkbox" />
      </label>
    `;
    }
  };
  _internals4 = /* @__PURE__ */ new WeakMap();
  GdsSwitch.styles = r(switch_default);
  GdsSwitch.shadowRootOptions = {
    mode: "open",
    delegatesFocus: true
  };
  GdsSwitch = __decorateClass([
    e5("gds-switch")
  ], GdsSwitch);
  var badge_styles_default = `@layer gds-badge, shell, tokens, a11y, variants, types;

@layer gds-badge {
  @layer tokens {
    :host {
      --gds-badge-cl: rgba(53, 53, 49, 1);
      --gds-badge-bg: rgba(243, 243, 242, 1);

      --gds-badge-cl-information: rgba(53, 53, 49, 1);
      --gds-badge-bg-information: rgba(243, 243, 242, 1);

      --gds-badge-cl-success: rgba(0, 109, 49, 1);
      --gds-badge-bg-success: rgba(234, 255, 232, 1);

      --gds-badge-cl-warning: rgba(125, 87, 0, 1);
      --gds-badge-bg-warning: rgba(255, 238, 217, 1);

      --gds-badge-cl-error: rgba(186, 29, 0, 1);
      --gds-badge-bg-error: rgba(255, 237, 233, 1);

      --gds-badge-cl-disabled: rgba(157, 157, 149, 1);
      --gds-badge-bg-disabled: rgba(249, 249, 249, 1);

      --gds-badge-cl-surface: rgba(106, 106, 98, 1);
      --gds-badge-bg-surface: rgba(255, 255, 255, 1);

      /* Dark Mode */
      --gds-badge-cl-dark: rgba(53, 53, 49, 1);
      --gds-badge-bg-dark: rgba(243, 243, 242, 1);

      --gds-badge-cl-information-dark: rgba(53, 53, 49, 1);
      --gds-badge-bg-information-dark: rgba(243, 243, 242, 1);

      --gds-badge-cl-success-dark: rgba(0, 109, 49, 1);
      --gds-badge-bg-success-dark: rgba(234, 255, 232, 1);

      --gds-badge-cl-warning-dark: rgba(125, 87, 0, 1);
      --gds-badge-bg-warning-dark: rgba(255, 238, 217, 1);

      --gds-badge-cl-error-dark: rgba(186, 29, 0, 1);
      --gds-badge-bg-error-dark: rgba(255, 237, 233, 1);

      --gds-badge-cl-disabled-dark: rgba(157, 157, 149, 1);
      --gds-badge-bg-disabled-dark: rgba(249, 249, 249, 1);

      --gds-badge-cl-surface-dark: rgba(106, 106, 98, 1);
      --gds-badge-bg-surface-dark: rgba(255, 255, 255, 1);

      --gds-badge-radii: 4px;

      --gds-badge-fs: 12px;
      --gds-badge-lh: 1;
      --gds-badge-fw: 500;
      --gds-badge-inline-padding: 10px;
      --gds-badge-block-padding: 6px;
    }
  }
  @layer a11y {
    @media (prefers-color-scheme: dark) {
      :host {
        --gds-badge-cl: var(--gds-badge-cl-dark);
        --gds-badge-bg: var(--gds-badge-bg-dark);

        --gds-badge-cl-information: var(--gds-badge-cl-information-dark);
        --gds-badge-bg-information: var(--gds-badge-bg-information-dark);

        --gds-badge-cl-success: var(--gds-badge-cl-success-dark);
        --gds-badge-bg-success: var(--gds-badge-bg-success-dark);

        --gds-badge-cl-warning: var(--gds-badge-cl-warning-dark);
        --gds-badge-bg-warning: var(--gds-badge-bg-warning-dark);

        --gds-badge-cl-error: var(--gds-badge-cl-error-dark);
        --gds-badge-bg-error: var(--gds-badge-bg-error-dark);

        --gds-badge-cl-disabled: var(--gds-badge-cl-disabled-dark);
        --gds-badge-bg-disabled: var(--gds-badge-bg-disabled-dark);

        --gds-badge-cl-surface: var(--gds-badge-cl-surface-dark);
        --gds-badge-bg-surface: var(--gds-badge-bg-surface-dark);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      :host {
        --gds-badge-motion: 0;
      }
    }

    @media (prefers-reduced-transparency: reduce) {
      :host {
        --gds-badge-transparency: 1;
      }
    }

    @media (prefers-contrast: more) {
      :root {
        --gds-badge-contrast: 1;
      }
    }
  }

  @layer shell {
    .gds-badge {
      font-size: var(--gds-badge-fs);
      line-height: var(--gds-badge-lh);
      font-weight: var(--gds-badge-fw);
      padding-block: var(--gds-badge-block-padding);
      padding-inline: var(--gds-badge-inline-padding);
      color: var(--gds-badge-cl);
      background-color: var(--gds-badge-bg);
      border-radius: var(--gds-badge-radii);
      letter-spacing: normal;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-transform: uppercase;
      max-width: -moz-max-content;
      max-width: max-content;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 1lh;
      gap: 1ch;

      @layer variants {
        :host([variant='information']) & {
          --gds-badge-cl: var(--gds-badge-cl-information);
          --gds-badge-bg: var(--gds-badge-bg-information);
        }

        :host([variant='success']) & {
          --gds-badge-cl: var(--gds-badge-cl-success);
          --gds-badge-bg: var(--gds-badge-bg-success);
        }

        :host([variant='warning']) & {
          --gds-badge-cl: var(--gds-badge-cl-warning);
          --gds-badge-bg: var(--gds-badge-bg-warning);
        }

        :host([variant='error']) & {
          --gds-badge-cl: var(--gds-badge-cl-error);
          --gds-badge-bg: var(--gds-badge-bg-error);
        }

        :host([variant='disabled']) & {
          --gds-badge-cl: var(--gds-badge-cl-disabled);
          --gds-badge-bg: var(--gds-badge-bg-disabled);
          pointer-events: none;
        }

        :host([variant='surface']) & {
          --gds-badge-cl: var(--gds-badge-cl-surface);
          --gds-badge-bg: var(--gds-badge-bg-surface);
        }
      }

      @layer types {
        :host([type='counter']) & {
          max-width: var(--gds-badge-counter-max-width);
        }
      }
    }
  }
}
`;
  var _internals5;
  var GdsBadge = class extends s5 {
    constructor() {
      super();
      __privateAdd(this, _internals5, void 0);
      this.variant = "";
      this.type = "";
      this.icon = "";
      __privateSet(this, _internals5, this.attachInternals());
      constrainSlots(this);
    }
    slotIcon() {
      return x2` <slot name="icon" gds-allow="gds-icon"></slot> `;
    }
    slotLabel() {
      const content = this.textContent?.trim() || "";
      const hasLabel = content !== "";
      let label = content;
      if (this.type.toLowerCase() === "counter" && label.length > 4) {
        label = label.substring(0, 4);
        return hasLabel ? x2`${label}` : "";
      }
      return hasLabel ? x2`<slot part="label" gds-allow="#text"></slot>` : "";
    }
    // slotLabel() {
    //   return this.textContent
    //     ? html`<slot part="label" gds-allow="#text"></slot>`
    //     : ''
    // }
    render() {
      const hasIconSlot = this.querySelector('[slot="icon"]') !== null;
      const content = x2`${n8(
        hasIconSlot,
        () => x2`<slot name="icon" gds-allow="gds-icon"></slot>`
      )}${this.slotLabel()}`;
      return x2`<div class="gds-badge">${content}</div>`;
    }
  };
  _internals5 = /* @__PURE__ */ new WeakMap();
  GdsBadge.styles = r(badge_styles_default);
  GdsBadge.shadowRootOptions = {
    mode: "open",
    delegatesFocus: true
  };
  __decorateClass([
    n6({ type: String, reflect: true, attribute: "variant" })
  ], GdsBadge.prototype, "variant", 2);
  __decorateClass([
    n6({ type: String, reflect: true, attribute: "type" })
  ], GdsBadge.prototype, "type", 2);
  __decorateClass([
    n6({ type: String, reflect: true, attribute: "icon" })
  ], GdsBadge.prototype, "icon", 2);
  GdsBadge = __decorateClass([
    e5("gds-badge")
  ], GdsBadge);
  var tooltip_styles_default = `@layer gds-tooltip, tokens, a11y, parts, position, trigger, keyframes;

@layer gds-tooltip {
  @layer tokens {
    :host {
      --gds-tooltip-bg-color: #000;
      --gds-tooltip-bg-alpha: 90%;
      --gds-tooltip-fs: 14px;
      --gds-tooltip-bg: color-mix(
        in srgb,
        var(--gds-tooltip-bg-color) var(--gds-tooltip-bg-alpha),
        transparent
      );
      --gds-tooltip-color: #fff;
      --gds-tooltip-offset: 8px;
      --gds-tooltip-arrow: 6px;
      --gds-tooltip-radii: 8px;
      --gds-tooltip-transition-easing: var(--gds-sys-transition-easing);
      display: contents;
      position: relative;
    }

    @media (prefers-color-scheme: dark) {
      :host {
        --gds-tooltip-color-bg: var(
          --gds-tooltip-color-bg-dark,
          var(--gds-color-grey-20)
        );
      }
    }
  }

  .gds-tooltip {
    display: inline-block;
    position: relative;

    @layer a11y {
      cursor: help;
      --gds-tooltip-transition: var(--gds-sys-transition);
      --gds-tooltip-contrast: var(--gds-sys-transition);
    }

    @layer parts {
      &::before,
      &::after {
        font-size: var(--gds-tooltip-fs);
        line-height: 1;
        -webkit-user-select: none;
           -moz-user-select: none;
                user-select: none;
        pointer-events: none;
        position: absolute;
        display: none;
        opacity: 0;
        align-items: center;
        justify-content: center;
      }

      &::before {
        content: '';
        border: var(--gds-tooltip-arrow, 6px) solid transparent;
        z-index: 1001;
      }

      &::after {
        content: attr(content);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-inline: 2ch;
        padding-block: 1.5ex;
        max-inline-size: 50ch;
        min-inline-size: -moz-max-content;
        min-inline-size: max-content;
        z-index: 1000;
        offset-anchor: center top;
        background-color: var(--gds-tooltip-bg);
        color: var(--gds-tooltip-color);
        border-radius: var(--gds-tooltip-radii);
      }

      &:hover::before,
      &:hover::after {
        display: flex;
      }
    }

    @layer position {
      &:not([position])::before,
      &[position^='up']::before {
        bottom: calc(100% + 2px);
        border-bottom-width: 0;
        border-top-color: var(--gds-tooltip-bg);
      }
      &:not([position])::after,
      &[position^='up']::after {
        bottom: calc(100% + var(--gds-tooltip-offset, 8px));
      }

      &:not([position])::before,
      &:not([position])::after,
      &[position^='up']::before,
      &[position^='up']::after {
        left: 50%;
        transform: translate(-50%, calc(var(--gds-tooltip-offset, 8px) * -1));
      }

      &[position^='down']::before {
        top: calc(100% + 2px);
        border-top-width: 0;
        border-bottom-color: var(--gds-tooltip-bg);
      }
      &[position^='down']::after {
        top: calc(100% + var(--gds-tooltip-offset, 8px));
      }
      &[position^='down']::before,
      &[position^='down']::after {
        left: 50%;
        transform: translate(-50%, var(--gds-tooltip-offset, 8px));
      }

      &[position^='left']::before {
        top: 50%;
        border-right-width: 0;
        border-left-color: var(--gds-tooltip-bg);
        left: calc(-1px - var(--gds-tooltip-offset, 8px));
        transform: translate(calc(var(--gds-tooltip-offset, 8px) * -2), -50%);
      }
      &[position^='left']::after {
        top: 50%;
        right: calc(100% + var(--gds-tooltip-offset, 8px));
        transform: translate(calc(var(--gds-tooltip-offset, 8px) * -1), -50%);
      }

      &[position^='right']::before {
        top: 50%;
        border-left-width: 0;
        border-right-color: var(--gds-tooltip-bg);
        right: calc(-1px - var(--gds-tooltip-offset, 8px));
        transform: translate(var(--gds-tooltip-offset, 8px), -50%);
      }
      &[position^='right']::after {
        top: 50%;
        left: calc(100% + var(--gds-tooltip-offset, 8px));
        transform: translate(var(--gds-tooltip-offset, 8px), -50%);
      }
    }

    @layer trigger {
      &:hover:is(
          :not([position]),
          [position^='up'],
          [position^='down']
        )::before,
      &:hover:is(
          :not([position]),
          [position^='up'],
          [position^='down']
        )::after {
        animation: gds-tooltip-animation-y 300ms
          var(--gds-tooltip-transition-easing) forwards;
      }

      &:hover:is(
          :not([position]),
          [position^='left'],
          [position^='right']
        )::before,
      &:hover:is(
          :not([position]),
          [position^='left'],
          [position^='right']
        )::after {
        animation: gds-tooltip-animation-h 300ms
          var(--gds-tooltip-transition-easing) forwards;
      }
    }
  }

  @layer keyframes {
    @keyframes gds-tooltip-animation-y {
      to {
        opacity: 0.9;
        transform: translate(-50%, 0);
      }
    }

    @keyframes gds-tooltip-animation-h {
      to {
        opacity: 0.9;
        transform: translate(0, -50%);
      }
    }
  }
}
`;
  var GdsTooltip = class extends s5 {
    constructor() {
      super(...arguments);
      this.open = false;
      this.content = null;
      this.position = null;
    }
    render() {
      return x2`
      <div 
        class="gds-tooltip" 
        content=${this.content}
        position=${this.position}
        role="tooltip"
      >
        <slot slot="anchor"></slot>
      </div>
    `;
    }
  };
  GdsTooltip.styles = r(tooltip_styles_default);
  GdsTooltip.shadowRootOptions = {
    mode: "open",
    delegatesFocus: true
  };
  __decorateClass([
    n6({ type: Boolean, reflect: true })
  ], GdsTooltip.prototype, "open", 2);
  __decorateClass([
    n6({ type: String, reflect: true, attribute: "content" })
  ], GdsTooltip.prototype, "content", 2);
  __decorateClass([
    n6({ type: String, reflect: true, attribute: "position" })
  ], GdsTooltip.prototype, "position", 2);
  GdsTooltip = __decorateClass([
    e5("gds-tooltip")
  ], GdsTooltip);
  var t6 = globalThis;
  var i9 = t6.trustedTypes;
  var s9 = i9 ? i9.createPolicy("lit-html", { createHTML: (t32) => t32 }) : void 0;
  var e14 = "$lit$";
  var h7 = `lit$${(Math.random() + "").slice(9)}$`;
  var o14 = "?" + h7;
  var n12 = `<${o14}>`;
  var r7 = void 0 === t6.document ? { createTreeWalker: () => ({}) } : document;
  var l9 = () => r7.createComment("");
  var c8 = (t32) => null === t32 || "object" != typeof t32 && "function" != typeof t32;
  var a5 = Array.isArray;
  var u5 = (t32) => a5(t32) || "function" == typeof t32?.[Symbol.iterator];
  var d4 = "[ 	\n\f\r]";
  var f4 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var v3 = /-->/g;
  var _3 = />/g;
  var m5 = RegExp(`>|${d4}(?:([^\\s"'>=/]+)(${d4}*=${d4}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var p4 = /'/g;
  var g3 = /"/g;
  var $3 = /^(?:script|style|textarea|title)$/i;
  var y3 = (t32) => (i32, ...s22) => ({ _$litType$: t32, strings: i32, values: s22 });
  var x3 = y3(1);
  var T3 = y3(2);
  var b3 = Symbol.for("lit-noChange");
  var w3 = Symbol.for("lit-nothing");
  var A3 = /* @__PURE__ */ new WeakMap();
  var E3 = r7.createTreeWalker(r7, 129);
  function C3(t32, i32) {
    if (!Array.isArray(t32) || !t32.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return void 0 !== s9 ? s9.createHTML(i32) : i32;
  }
  var P3 = (t32, i32) => {
    const s22 = t32.length - 1, o22 = [];
    let r22, l22 = 2 === i32 ? "<svg>" : "", c22 = f4;
    for (let i42 = 0; i42 < s22; i42++) {
      const s32 = t32[i42];
      let a22, u22, d22 = -1, y22 = 0;
      for (; y22 < s32.length && (c22.lastIndex = y22, u22 = c22.exec(s32), null !== u22); )
        y22 = c22.lastIndex, c22 === f4 ? "!--" === u22[1] ? c22 = v3 : void 0 !== u22[1] ? c22 = _3 : void 0 !== u22[2] ? ($3.test(u22[2]) && (r22 = RegExp("</" + u22[2], "g")), c22 = m5) : void 0 !== u22[3] && (c22 = m5) : c22 === m5 ? ">" === u22[0] ? (c22 = r22 ?? f4, d22 = -1) : void 0 === u22[1] ? d22 = -2 : (d22 = c22.lastIndex - u22[2].length, a22 = u22[1], c22 = void 0 === u22[3] ? m5 : '"' === u22[3] ? g3 : p4) : c22 === g3 || c22 === p4 ? c22 = m5 : c22 === v3 || c22 === _3 ? c22 = f4 : (c22 = m5, r22 = void 0);
      const x22 = c22 === m5 && t32[i42 + 1].startsWith("/>") ? " " : "";
      l22 += c22 === f4 ? s32 + n12 : d22 >= 0 ? (o22.push(a22), s32.slice(0, d22) + e14 + s32.slice(d22) + h7 + x22) : s32 + h7 + (-2 === d22 ? i42 : x22);
    }
    return [C3(t32, l22 + (t32[s22] || "<?>") + (2 === i32 ? "</svg>" : "")), o22];
  };
  var V3 = class _V {
    constructor({ strings: t32, _$litType$: s22 }, n22) {
      let r22;
      this.parts = [];
      let c22 = 0, a22 = 0;
      const u22 = t32.length - 1, d22 = this.parts, [f22, v22] = P3(t32, s22);
      if (this.el = _V.createElement(f22, n22), E3.currentNode = this.el.content, 2 === s22) {
        const t42 = this.el.content.firstChild;
        t42.replaceWith(...t42.childNodes);
      }
      for (; null !== (r22 = E3.nextNode()) && d22.length < u22; ) {
        if (1 === r22.nodeType) {
          if (r22.hasAttributes())
            for (const t42 of r22.getAttributeNames())
              if (t42.endsWith(e14)) {
                const i32 = v22[a22++], s32 = r22.getAttribute(t42).split(h7), e42 = /([.?@])?(.*)/.exec(i32);
                d22.push({ type: 1, index: c22, name: e42[2], strings: s32, ctor: "." === e42[1] ? R3 : "?" === e42[1] ? H3 : "@" === e42[1] ? I3 : k3 }), r22.removeAttribute(t42);
              } else
                t42.startsWith(h7) && (d22.push({ type: 6, index: c22 }), r22.removeAttribute(t42));
          if ($3.test(r22.tagName)) {
            const t42 = r22.textContent.split(h7), s32 = t42.length - 1;
            if (s32 > 0) {
              r22.textContent = i9 ? i9.emptyScript : "";
              for (let i32 = 0; i32 < s32; i32++)
                r22.append(t42[i32], l9()), E3.nextNode(), d22.push({ type: 2, index: ++c22 });
              r22.append(t42[s32], l9());
            }
          }
        } else if (8 === r22.nodeType)
          if (r22.data === o14)
            d22.push({ type: 2, index: c22 });
          else {
            let t42 = -1;
            for (; -1 !== (t42 = r22.data.indexOf(h7, t42 + 1)); )
              d22.push({ type: 7, index: c22 }), t42 += h7.length - 1;
          }
        c22++;
      }
    }
    static createElement(t32, i32) {
      const s22 = r7.createElement("template");
      return s22.innerHTML = t32, s22;
    }
  };
  function N3(t32, i32, s22 = t32, e42) {
    if (i32 === b3)
      return i32;
    let h22 = void 0 !== e42 ? s22._$Co?.[e42] : s22._$Cl;
    const o22 = c8(i32) ? void 0 : i32._$litDirective$;
    return h22?.constructor !== o22 && (h22?._$AO?.(false), void 0 === o22 ? h22 = void 0 : (h22 = new o22(t32), h22._$AT(t32, s22, e42)), void 0 !== e42 ? (s22._$Co ??= [])[e42] = h22 : s22._$Cl = h22), void 0 !== h22 && (i32 = N3(t32, h22._$AS(t32, i32.values), h22, e42)), i32;
  }
  var S4 = class {
    constructor(t32, i32) {
      this._$AV = [], this._$AN = void 0, this._$AD = t32, this._$AM = i32;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t32) {
      const { el: { content: i32 }, parts: s22 } = this._$AD, e42 = (t32?.creationScope ?? r7).importNode(i32, true);
      E3.currentNode = e42;
      let h22 = E3.nextNode(), o22 = 0, n22 = 0, l22 = s22[0];
      for (; void 0 !== l22; ) {
        if (o22 === l22.index) {
          let i42;
          2 === l22.type ? i42 = new M3(h22, h22.nextSibling, this, t32) : 1 === l22.type ? i42 = new l22.ctor(h22, l22.name, l22.strings, this, t32) : 6 === l22.type && (i42 = new L3(h22, this, t32)), this._$AV.push(i42), l22 = s22[++n22];
        }
        o22 !== l22?.index && (h22 = E3.nextNode(), o22++);
      }
      return E3.currentNode = r7, e42;
    }
    p(t32) {
      let i32 = 0;
      for (const s22 of this._$AV)
        void 0 !== s22 && (void 0 !== s22.strings ? (s22._$AI(t32, s22, i32), i32 += s22.strings.length - 2) : s22._$AI(t32[i32])), i32++;
    }
  };
  var M3 = class _M {
    get _$AU() {
      return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t32, i32, s22, e42) {
      this.type = 2, this._$AH = w3, this._$AN = void 0, this._$AA = t32, this._$AB = i32, this._$AM = s22, this.options = e42, this._$Cv = e42?.isConnected ?? true;
    }
    get parentNode() {
      let t32 = this._$AA.parentNode;
      const i32 = this._$AM;
      return void 0 !== i32 && 11 === t32?.nodeType && (t32 = i32.parentNode), t32;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t32, i32 = this) {
      t32 = N3(this, t32, i32), c8(t32) ? t32 === w3 || null == t32 || "" === t32 ? (this._$AH !== w3 && this._$AR(), this._$AH = w3) : t32 !== this._$AH && t32 !== b3 && this._(t32) : void 0 !== t32._$litType$ ? this.g(t32) : void 0 !== t32.nodeType ? this.$(t32) : u5(t32) ? this.T(t32) : this._(t32);
    }
    k(t32) {
      return this._$AA.parentNode.insertBefore(t32, this._$AB);
    }
    $(t32) {
      this._$AH !== t32 && (this._$AR(), this._$AH = this.k(t32));
    }
    _(t32) {
      this._$AH !== w3 && c8(this._$AH) ? this._$AA.nextSibling.data = t32 : this.$(r7.createTextNode(t32)), this._$AH = t32;
    }
    g(t32) {
      const { values: i32, _$litType$: s22 } = t32, e42 = "number" == typeof s22 ? this._$AC(t32) : (void 0 === s22.el && (s22.el = V3.createElement(C3(s22.h, s22.h[0]), this.options)), s22);
      if (this._$AH?._$AD === e42)
        this._$AH.p(i32);
      else {
        const t42 = new S4(e42, this), s32 = t42.u(this.options);
        t42.p(i32), this.$(s32), this._$AH = t42;
      }
    }
    _$AC(t32) {
      let i32 = A3.get(t32.strings);
      return void 0 === i32 && A3.set(t32.strings, i32 = new V3(t32)), i32;
    }
    T(t32) {
      a5(this._$AH) || (this._$AH = [], this._$AR());
      const i32 = this._$AH;
      let s22, e42 = 0;
      for (const h22 of t32)
        e42 === i32.length ? i32.push(s22 = new _M(this.k(l9()), this.k(l9()), this, this.options)) : s22 = i32[e42], s22._$AI(h22), e42++;
      e42 < i32.length && (this._$AR(s22 && s22._$AB.nextSibling, e42), i32.length = e42);
    }
    _$AR(t32 = this._$AA.nextSibling, i32) {
      for (this._$AP?.(false, true, i32); t32 && t32 !== this._$AB; ) {
        const i42 = t32.nextSibling;
        t32.remove(), t32 = i42;
      }
    }
    setConnected(t32) {
      void 0 === this._$AM && (this._$Cv = t32, this._$AP?.(t32));
    }
  };
  var k3 = class {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t32, i32, s22, e42, h22) {
      this.type = 1, this._$AH = w3, this._$AN = void 0, this.element = t32, this.name = i32, this._$AM = e42, this.options = h22, s22.length > 2 || "" !== s22[0] || "" !== s22[1] ? (this._$AH = Array(s22.length - 1).fill(new String()), this.strings = s22) : this._$AH = w3;
    }
    _$AI(t32, i32 = this, s22, e42) {
      const h22 = this.strings;
      let o22 = false;
      if (void 0 === h22)
        t32 = N3(this, t32, i32, 0), o22 = !c8(t32) || t32 !== this._$AH && t32 !== b3, o22 && (this._$AH = t32);
      else {
        const e52 = t32;
        let n22, r22;
        for (t32 = h22[0], n22 = 0; n22 < h22.length - 1; n22++)
          r22 = N3(this, e52[s22 + n22], i32, n22), r22 === b3 && (r22 = this._$AH[n22]), o22 ||= !c8(r22) || r22 !== this._$AH[n22], r22 === w3 ? t32 = w3 : t32 !== w3 && (t32 += (r22 ?? "") + h22[n22 + 1]), this._$AH[n22] = r22;
      }
      o22 && !e42 && this.O(t32);
    }
    O(t32) {
      t32 === w3 ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t32 ?? "");
    }
  };
  var R3 = class extends k3 {
    constructor() {
      super(...arguments), this.type = 3;
    }
    O(t32) {
      this.element[this.name] = t32 === w3 ? void 0 : t32;
    }
  };
  var H3 = class extends k3 {
    constructor() {
      super(...arguments), this.type = 4;
    }
    O(t32) {
      this.element.toggleAttribute(this.name, !!t32 && t32 !== w3);
    }
  };
  var I3 = class extends k3 {
    constructor(t32, i32, s22, e42, h22) {
      super(t32, i32, s22, e42, h22), this.type = 5;
    }
    _$AI(t32, i32 = this) {
      if ((t32 = N3(this, t32, i32, 0) ?? w3) === b3)
        return;
      const s22 = this._$AH, e42 = t32 === w3 && s22 !== w3 || t32.capture !== s22.capture || t32.once !== s22.once || t32.passive !== s22.passive, h22 = t32 !== w3 && (s22 === w3 || e42);
      e42 && this.element.removeEventListener(this.name, this, s22), h22 && this.element.addEventListener(this.name, this, t32), this._$AH = t32;
    }
    handleEvent(t32) {
      "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t32) : this._$AH.handleEvent(t32);
    }
  };
  var L3 = class {
    constructor(t32, i32, s22) {
      this.element = t32, this.type = 6, this._$AN = void 0, this._$AM = i32, this.options = s22;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t32) {
      N3(this, t32);
    }
  };
  var W = t6.litHtmlPolyfillSupport;
  W?.(V3, M3), (t6.litHtmlVersions ??= []).push("3.1.1");
  var t22 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
  var e22 = (t32) => (...e42) => ({ _$litDirective$: t32, values: e42 });
  var i22 = class {
    constructor(t32) {
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t32, e42, i32) {
      this._$Ct = t32, this._$AM = e42, this._$Ci = i32;
    }
    _$AS(t32, e42) {
      return this.update(t32, e42);
    }
    update(t32, e42) {
      return this.render(...e42);
    }
  };
  var e32 = e22(class extends i22 {
    constructor(t32) {
      if (super(t32), t32.type !== t22.ATTRIBUTE || "class" !== t32.name || t32.strings?.length > 2)
        throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t32) {
      return " " + Object.keys(t32).filter((s22) => t32[s22]).join(" ") + " ";
    }
    update(s22, [i32]) {
      if (void 0 === this.it) {
        this.it = /* @__PURE__ */ new Set(), void 0 !== s22.strings && (this.st = new Set(s22.strings.join(" ").split(/\s/).filter((t32) => "" !== t32)));
        for (const t32 in i32)
          i32[t32] && !this.st?.has(t32) && this.it.add(t32);
        return this.render(i32);
      }
      const r22 = s22.element.classList;
      for (const t32 of this.it)
        t32 in i32 || (r22.remove(t32), this.it.delete(t32));
      for (const t32 in i32) {
        const s32 = !!i32[t32];
        s32 === this.it.has(t32) || this.st?.has(t32) || (s32 ? (r22.add(t32), this.it.add(t32)) : (r22.remove(t32), this.it.delete(t32)));
      }
      return b3;
    }
  });
  var _slotRef2;
  var GdsMenu = class extends GdsElement {
    constructor() {
      super();
      __privateAdd(this, _slotRef2, e13());
      new ListboxKbNavController(this);
    }
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("role", "menu");
      TransitionalStyles.instance.apply(this, "gds-listbox");
    }
    get navigableItems() {
      if (!__privateGet(this, _slotRef2).value)
        return [];
      return unwrap(__privateGet(this, _slotRef2).value).assignedElements().filter(
        (o22) => !o22.hasAttribute("isplaceholder")
      ) || [];
    }
    /**
     * Focuses the first item in the menu.
     */
    focus() {
      this.navigableItems[0]?.focus();
    }
    render() {
      return html2`${this._tStyles}<slot ${n10(__privateGet(this, _slotRef2))}></slot>`;
    }
  };
  _slotRef2 = /* @__PURE__ */ new WeakMap();
  __decorateClass([
    t4()
  ], GdsMenu.prototype, "_tStyles", 2);
  GdsMenu = __decorateClass([
    gdsCustomElement("gds-menu")
  ], GdsMenu);
  var _handleItemClick;
  var handleItemClick_fn;
  var GdsContextMenu = class extends GdsElement {
    constructor() {
      super();
      __privateAdd(this, _handleItemClick);
      this.open = false;
      this.buttonLabel = msg("Open context menu");
      this.showLabel = false;
      this.label = "";
      this.placement = "bottom-start";
      constrainSlots(this);
    }
    connectedCallback() {
      super.connectedCallback();
      TransitionalStyles.instance.apply(this, "gds-context-menu");
      this.addEventListener("keydown", (e42) => {
        if (this.open && e42.key == "Tab") {
          e42.preventDefault();
          this.open = false;
          this.elTriggerBtn.then((el) => el.focus());
        }
      });
    }
    render() {
      return html2`${this._tStyles}
      <button
        id="trigger"
        class="icon border-0 small ${e32({ highlighted: this.open })}"
        aria-label=${this.buttonLabel ?? this.label}
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
        @click=${() => this.open = !this.open}
      >
        <slot name="trigger">
          ${this.showLabel ? this.buttonLabel ?? this.label : A2}
          <i class="sg-icon sg-icon-ellipsis"></i>
        </slot>
      </button>
      <gds-popover
        id="menu"
        .open=${this.open}
        .triggerRef=${this.elTriggerBtn}
        .label=${this.label}
        .placement=${this.placement}
        @gds-ui-state=${(e42) => this.open = e42.detail.open}
      >
        <gds-menu
          aria-label=${this.label ?? this.buttonLabel}
          @gds-menu-item-click=${__privateMethod(this, _handleItemClick, handleItemClick_fn)}
        >
          <slot allow="gds-menu-item"></slot>
        </gds-menu>
      </gds-popover>`;
    }
  };
  _handleItemClick = /* @__PURE__ */ new WeakSet();
  handleItemClick_fn = function() {
    this.open = false;
  };
  GdsContextMenu.shadowRootOptions = {
    mode: "open",
    delegatesFocus: true
  };
  __decorateClass([
    n6({ type: Boolean, reflect: true })
  ], GdsContextMenu.prototype, "open", 2);
  __decorateClass([
    n6({
      attribute: "button-label"
    })
  ], GdsContextMenu.prototype, "buttonLabel", 2);
  __decorateClass([
    n6({
      attribute: "show-label"
    })
  ], GdsContextMenu.prototype, "showLabel", 2);
  __decorateClass([
    n6()
  ], GdsContextMenu.prototype, "label", 2);
  __decorateClass([
    n6()
  ], GdsContextMenu.prototype, "placement", 2);
  __decorateClass([
    t4()
  ], GdsContextMenu.prototype, "_tStyles", 2);
  __decorateClass([
    e8("#trigger")
  ], GdsContextMenu.prototype, "elTriggerBtn", 2);
  GdsContextMenu = __decorateClass([
    gdsCustomElement("gds-context-menu")
  ], GdsContextMenu);
  var _handleOnClick;
  var GdsMenuItem = class extends Focusable(GdsElement) {
    constructor() {
      super(...arguments);
      __privateAdd(this, _handleOnClick, () => {
        this.dispatchEvent(
          new CustomEvent("gds-menu-item-click", {
            bubbles: true,
            composed: true
          })
        );
      });
    }
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("role", "menuitem");
      this.addEventListener("keydown", (e42) => {
        if (e42.key !== "Enter" && e42.key !== " ")
          return;
        e42.preventDefault();
        this.click();
      });
      this.addEventListener("click", __privateGet(this, _handleOnClick));
      TransitionalStyles.instance.apply(this, "gds-option");
    }
    render() {
      return html2`${this._tStyles}<slot></slot>`;
    }
  };
  _handleOnClick = /* @__PURE__ */ new WeakMap();
  __decorateClass([
    t4()
  ], GdsMenuItem.prototype, "_tStyles", 2);
  GdsMenuItem = __decorateClass([
    gdsCustomElement("gds-menu-item")
  ], GdsMenuItem);
  function renderMonthGridView(date, template) {
    const monthStart = startOfMonth(date);
    const monthEnd = endOfMonth(date);
    const weeks = eachWeekOfInterval(
      { start: monthStart, end: monthEnd },
      { weekStartsOn: 1 }
    );
    return x3`${template(
      weeks.map((weekStartDay) => ({
        days: eachDayOfInterval({
          start: weekStartDay,
          end: addDays(weekStartDay, 6)
        })
      }))
    )}`;
  }
  var style5 = i`
  @layer base, reset, transitional-styles;
  @layer base {
    td.disabled {
      color: #999;
      cursor: default;
    }
    td.today {
      background-color: #eee;
    }
  }
`;
  var calendar_styles_default = style5;
  var _setSelectedDate;
  var setSelectedDate_fn;
  var _handleKeyDown;
  var handleKeyDown_fn;
  var GdsCalendar = class extends GdsElement {
    constructor() {
      super(...arguments);
      __privateAdd(this, _setSelectedDate);
      __privateAdd(this, _handleKeyDown);
      this.value = /* @__PURE__ */ new Date();
      this.min = new Date((/* @__PURE__ */ new Date()).getFullYear() - 10, 0, 1);
      this.max = new Date((/* @__PURE__ */ new Date()).getFullYear() + 10, 0, 1);
      this.focusedDate = /* @__PURE__ */ new Date();
      this.showWeekNumbers = false;
    }
    get focusedMonth() {
      return this.focusedDate.getMonth();
    }
    set focusedMonth(month) {
      this.focusedDate = new Date(this.focusedDate.setMonth(month));
    }
    get focusedYear() {
      return this.focusedDate.getFullYear();
    }
    set focusedYear(year) {
      this.focusedDate = new Date(this.focusedDate.setFullYear(year));
    }
    /**
     * Returns the date cell element for the given day number.
     */
    getDateCell(dayNumber) {
      return this.shadowRoot?.querySelector(`#dateCell-${dayNumber}`);
    }
    connectedCallback() {
      super.connectedCallback();
      TransitionalStyles.instance.apply(this, "gds-calendar");
      this.addEventListener("keydown", __privateMethod(this, _handleKeyDown, handleKeyDown_fn));
    }
    focus() {
      super.focus();
      this._elFocusedCell?.focus();
    }
    render() {
      const currentDate = /* @__PURE__ */ new Date();
      return x2`${this._tStyles}
      <table>
        <thead>
          <tr>
            ${n8(this.showWeekNumbers, () => x2`<th></th>`)}
            <th>${msg("Mon")}</th>
            <th>${msg("Tue")}</th>
            <th>${msg("Wed")}</th>
            <th>${msg("Thu")}</th>
            <th>${msg("Fri")}</th>
            <th>${msg("Sat")}</th>
            <th>${msg("Sun")}</th>
          </tr>
        </thead>
        <tbody>
          ${renderMonthGridView(
        this.focusedDate,
        (weeks) => x2`
              ${weeks.map(
          (week) => x2`
                  <tr>
                    ${n8(
            this.showWeekNumbers,
            () => x2`<td class="week-number">
                          ${getWeek(week.days[0])}
                        </td>`
          )}
                    ${week.days.map((day) => {
            const isDisabled = !isSameMonth(this.focusedDate, day) || day < this.min || day > this.max;
            return x2`
                        <td
                          class="${o7({
              disabled: isDisabled,
              today: isSameDay(currentDate, day)
            })}"
                          ?disabled=${isDisabled}
                          tabindex="${isSameDay(this.focusedDate, day) ? 0 : -1}"
                          aria-selected="${isSameDay(this.value, day)}"
                          aria-label="${day.toDateString()}"
                          @click=${() => isDisabled ? null : __privateMethod(this, _setSelectedDate, setSelectedDate_fn).call(this, day)}
                          id="dateCell-${day.getDate()}"
                        >
                          ${day.getDate()}
                        </td>
                      `;
          })}
                  </tr>
                `
        )}
            `
      )}
        </tbody>
      </table>`;
    }
    _valueChanged() {
      if (!this.value)
        return;
      this.focusedDate = this.value;
    }
  };
  _setSelectedDate = /* @__PURE__ */ new WeakSet();
  setSelectedDate_fn = function(date) {
    this.value = date;
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: date,
        bubbles: false,
        composed: false
      })
    );
  };
  _handleKeyDown = /* @__PURE__ */ new WeakSet();
  handleKeyDown_fn = function(e42) {
    let handled = false;
    let newFocusedDate = new Date(this.focusedDate);
    if (e42.key === "ArrowLeft") {
      newFocusedDate = addDays(this.focusedDate, -1);
      handled = true;
    } else if (e42.key === "ArrowRight") {
      newFocusedDate = addDays(this.focusedDate, 1);
      handled = true;
    } else if (e42.key === "ArrowUp") {
      newFocusedDate = addDays(this.focusedDate, -7);
      handled = true;
    } else if (e42.key === "ArrowDown") {
      newFocusedDate = addDays(this.focusedDate, 7);
      handled = true;
    } else if (e42.key === "Enter" || e42.key === " ") {
      if (!this._elFocusedCell?.hasAttribute("disabled")) {
        __privateMethod(this, _setSelectedDate, setSelectedDate_fn).call(this, this.focusedDate);
      }
      handled = true;
    } else if (e42.key === "Home") {
      newFocusedDate = new Date(this.focusedYear, this.focusedMonth, 1);
      handled = true;
    } else if (e42.key === "End") {
      newFocusedDate = new Date(this.focusedYear, this.focusedMonth + 1, 0);
      handled = true;
    } else if (e42.key === "PageUp") {
      newFocusedDate = subMonths(this.focusedDate, 1);
      handled = true;
    } else if (e42.key === "PageDown") {
      newFocusedDate = addMonths(this.focusedDate, 1);
      handled = true;
    }
    if (newFocusedDate.getFullYear() >= this.min.getFullYear() && newFocusedDate.getFullYear() <= this.max.getFullYear()) {
      this.focusedDate = newFocusedDate;
    }
    if (handled) {
      e42.preventDefault();
      e42.stopPropagation();
      this.updateComplete.then(() => {
        this._elFocusedCell?.focus();
        this.dispatchEvent(
          new CustomEvent("gds-date-focused", {
            detail: this.focusedDate,
            bubbles: false,
            composed: false
          })
        );
      });
    }
  };
  GdsCalendar.styles = [calendar_styles_default];
  GdsCalendar.shadowRootOptions = {
    mode: "open",
    delegatesFocus: true
  };
  __decorateClass([
    n6()
  ], GdsCalendar.prototype, "value", 2);
  __decorateClass([
    n6({ type: Date })
  ], GdsCalendar.prototype, "min", 2);
  __decorateClass([
    n6({ type: Date })
  ], GdsCalendar.prototype, "max", 2);
  __decorateClass([
    n6()
  ], GdsCalendar.prototype, "focusedDate", 2);
  __decorateClass([
    n6({ type: Number })
  ], GdsCalendar.prototype, "focusedMonth", 1);
  __decorateClass([
    n6({ type: Number })
  ], GdsCalendar.prototype, "focusedYear", 1);
  __decorateClass([
    n6({ type: Boolean })
  ], GdsCalendar.prototype, "showWeekNumbers", 2);
  __decorateClass([
    i5('td[tabindex="0"]')
  ], GdsCalendar.prototype, "_elFocusedCell", 2);
  __decorateClass([
    t4()
  ], GdsCalendar.prototype, "_tStyles", 2);
  __decorateClass([
    watch("value")
  ], GdsCalendar.prototype, "_valueChanged", 1);
  GdsCalendar = __decorateClass([
    gdsCustomElement("gds-calendar")
  ], GdsCalendar);
  var _inputBuffer;
  var _increment;
  var _decrement;
  var _handleClick2;
  var _handleFocus;
  var _handleBlur;
  var _handleWheel;
  var _handleKeyDown2;
  var _focusNextSpinner;
  var focusNextSpinner_fn;
  var _dispatchChangeEvent;
  var dispatchChangeEvent_fn;
  var _formatNumber;
  var formatNumber_fn;
  var _clamp;
  var clamp_fn;
  var _clearInputBuffer;
  var clearInputBuffer_fn;
  var GdsDatePartSpinner = class extends s5 {
    constructor() {
      super(...arguments);
      __privateAdd(this, _focusNextSpinner);
      __privateAdd(this, _dispatchChangeEvent);
      __privateAdd(this, _formatNumber);
      __privateAdd(this, _clamp);
      __privateAdd(this, _clearInputBuffer);
      this.value = 0;
      this.length = 2;
      this.min = 0;
      this.max = Number.MAX_SAFE_INTEGER;
      this.displayValue = __privateMethod(this, _formatNumber, formatNumber_fn).call(this, this.value, this.length);
      __privateAdd(this, _inputBuffer, "");
      __privateAdd(this, _increment, () => {
        let current = parseInt(this.value.toString());
        if (Number.isNaN(current))
          current = this.length === 2 ? this.min : (/* @__PURE__ */ new Date()).getFullYear() - 1;
        this.value = __privateMethod(this, _clamp, clamp_fn).call(this, current + 1);
        __privateMethod(this, _dispatchChangeEvent, dispatchChangeEvent_fn).call(this);
      });
      __privateAdd(this, _decrement, () => {
        let current = parseInt(this.value.toString());
        if (Number.isNaN(current))
          current = this.length === 2 ? this.max : (/* @__PURE__ */ new Date()).getFullYear() + 1;
        this.value = __privateMethod(this, _clamp, clamp_fn).call(this, current - 1);
        __privateMethod(this, _dispatchChangeEvent, dispatchChangeEvent_fn).call(this);
      });
      __privateAdd(this, _handleClick2, (e42) => {
        e42.stopPropagation();
        e42.preventDefault();
        this.focus();
      });
      __privateAdd(this, _handleFocus, () => {
        __privateMethod(this, _clearInputBuffer, clearInputBuffer_fn).call(this);
      });
      __privateAdd(this, _handleBlur, () => {
        if (__privateGet(this, _inputBuffer) === "")
          return;
        __privateMethod(this, _clearInputBuffer, clearInputBuffer_fn).call(this);
        this.value = __privateMethod(this, _clamp, clamp_fn).call(this, parseInt(this.value.toString()));
        __privateMethod(this, _dispatchChangeEvent, dispatchChangeEvent_fn).call(this);
        document.getSelection()?.removeAllRanges();
      });
      __privateAdd(this, _handleWheel, (e42) => {
        e42.stopPropagation();
        e42.preventDefault();
        if (e42.deltaY > 0) {
          __privateGet(this, _decrement).call(this);
        } else {
          __privateGet(this, _increment).call(this);
        }
      });
      __privateAdd(this, _handleKeyDown2, (e42) => {
        let handled = false;
        if (e42.key === "ArrowUp") {
          __privateGet(this, _increment).call(this);
          handled = true;
        } else if (e42.key === "ArrowDown") {
          __privateGet(this, _decrement).call(this);
          handled = true;
        } else {
          const key = parseInt(e42.key);
          if (!isNaN(key)) {
            if (__privateGet(this, _inputBuffer).length < this.length) {
              __privateSet(this, _inputBuffer, __privateGet(this, _inputBuffer) + key.toString());
              this.value = parseInt(__privateGet(this, _inputBuffer));
            }
            if (__privateGet(this, _inputBuffer).length === this.length) {
              this.value = __privateMethod(this, _clamp, clamp_fn).call(this, this.value);
              __privateMethod(this, _clearInputBuffer, clearInputBuffer_fn).call(this);
              __privateMethod(this, _focusNextSpinner, focusNextSpinner_fn).call(this);
              __privateMethod(this, _dispatchChangeEvent, dispatchChangeEvent_fn).call(this);
            }
            handled = true;
          }
        }
        if (handled) {
          e42.preventDefault();
          e42.stopPropagation();
        }
      });
    }
    // No need for a shadow root here
    createRenderRoot() {
      return this;
    }
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("role", "spinbutton");
      this.setAttribute("tabindex", "0");
      this.addEventListener("wheel", __privateGet(this, _handleWheel));
      this.addEventListener("keydown", __privateGet(this, _handleKeyDown2));
      this.addEventListener("blur", __privateGet(this, _handleBlur));
      this.addEventListener("focus", __privateGet(this, _handleFocus));
      this.addEventListener("click", __privateGet(this, _handleClick2));
      this.addEventListener("mousedown", __privateGet(this, _handleClick2));
    }
    focus(options) {
      super.focus(options);
      __privateGet(this, _handleFocus).call(this);
    }
    render() {
      return html2`${this.displayValue}`;
    }
    _refreshDisplayValue() {
      this.displayValue = __privateMethod(this, _formatNumber, formatNumber_fn).call(this, this.value, this.length);
      this.setAttribute("aria-valuetext", this.value.toString());
    }
  };
  _inputBuffer = /* @__PURE__ */ new WeakMap();
  _increment = /* @__PURE__ */ new WeakMap();
  _decrement = /* @__PURE__ */ new WeakMap();
  _handleClick2 = /* @__PURE__ */ new WeakMap();
  _handleFocus = /* @__PURE__ */ new WeakMap();
  _handleBlur = /* @__PURE__ */ new WeakMap();
  _handleWheel = /* @__PURE__ */ new WeakMap();
  _handleKeyDown2 = /* @__PURE__ */ new WeakMap();
  _focusNextSpinner = /* @__PURE__ */ new WeakSet();
  focusNextSpinner_fn = function() {
    let nextSpinner = this.nextElementSibling;
    while (nextSpinner) {
      if (nextSpinner instanceof GdsDatePartSpinner) {
        nextSpinner.focus();
        break;
      }
      nextSpinner = nextSpinner.nextElementSibling;
    }
  };
  _dispatchChangeEvent = /* @__PURE__ */ new WeakSet();
  dispatchChangeEvent_fn = function() {
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: { value: this.value.toString() }
      })
    );
  };
  _formatNumber = /* @__PURE__ */ new WeakSet();
  formatNumber_fn = function(num, padZeros) {
    return String(num).padStart(padZeros, "0");
  };
  _clamp = /* @__PURE__ */ new WeakSet();
  clamp_fn = function(value) {
    return Math.max(this.min, Math.min(this.max, value));
  };
  _clearInputBuffer = /* @__PURE__ */ new WeakSet();
  clearInputBuffer_fn = function() {
    __privateSet(this, _inputBuffer, "");
  };
  GdsDatePartSpinner.formAssociated = true;
  __decorateClass([
    n6({ type: Number })
  ], GdsDatePartSpinner.prototype, "value", 2);
  __decorateClass([
    n6({ type: Number })
  ], GdsDatePartSpinner.prototype, "length", 2);
  __decorateClass([
    n6({ type: Number, attribute: "aria-valuemin" })
  ], GdsDatePartSpinner.prototype, "min", 2);
  __decorateClass([
    n6({ type: Number, attribute: "aria-valuemax" })
  ], GdsDatePartSpinner.prototype, "max", 2);
  __decorateClass([
    t4()
  ], GdsDatePartSpinner.prototype, "displayValue", 2);
  __decorateClass([
    watch("value")
  ], GdsDatePartSpinner.prototype, "_refreshDisplayValue", 1);
  GdsDatePartSpinner = __decorateClass([
    gdsCustomElement("gds-date-part-spinner")
  ], GdsDatePartSpinner);
  var styles = i`
  @layer base, reset, transitional-styles;
  @layer base {
    label {
      display: block;
    }
  }
`;
  var dateConverter = {
    fromAttribute(value) {
      return new Date(value);
    },
    toAttribute(value) {
      return value.toISOString();
    }
  };
  var _valueOnOpen;
  var _renderBackToValidRangeButton;
  var renderBackToValidRangeButton_fn;
  var _focusDate;
  var focusDate_fn;
  var _getSpinnerLabel;
  var getSpinnerLabel_fn;
  var _getMinSpinnerValue;
  var getMinSpinnerValue_fn;
  var _getMaxSpinnerValue;
  var getMaxSpinnerValue_fn;
  var _dispatchChangeEvent2;
  var dispatchChangeEvent_fn2;
  var _dispatchInputEvent;
  var dispatchInputEvent_fn;
  var _handleClipboardCopy;
  var _handleClipboardPaste;
  var _handleFieldClick2;
  var _handleCalendarChange;
  var _handleMonthChange;
  var _handleYearChange;
  var _handleIncrementFocusedMonth;
  var _handleDecrementFocusedMonth;
  var _handleCalendarFocusChange;
  var _handlePopoverStateChange;
  var _handleSpinnerKeydown;
  var _parseDateFormat;
  var parseDateFormat_fn;
  var _handleSpinnerChange;
  var _spinnerState;
  var _years;
  var years_get;
  var _isValueOutsideRange;
  var isValueOutsideRange_get;
  var GdsDatepicker = class extends GdsFormControlElement {
    constructor() {
      super(...arguments);
      __privateAdd(this, _renderBackToValidRangeButton);
      __privateAdd(this, _focusDate);
      __privateAdd(this, _getSpinnerLabel);
      __privateAdd(this, _getMinSpinnerValue);
      __privateAdd(this, _getMaxSpinnerValue);
      __privateAdd(this, _dispatchChangeEvent2);
      __privateAdd(this, _dispatchInputEvent);
      __privateAdd(this, _parseDateFormat);
      __privateAdd(this, _years);
      __privateAdd(this, _isValueOutsideRange);
      this.min = new Date((/* @__PURE__ */ new Date()).getFullYear() - 10, 0, 1);
      this.max = new Date((/* @__PURE__ */ new Date()).getFullYear() + 10, 0, 1);
      this.open = false;
      this.label = "";
      this.showWeekNumbers = false;
      this._focusedMonth = (/* @__PURE__ */ new Date()).getMonth();
      this._focusedYear = (/* @__PURE__ */ new Date()).getFullYear();
      this._dateFormatLayout = __privateMethod(this, _parseDateFormat, parseDateFormat_fn).call(this, "y-m-d");
      __privateAdd(this, _valueOnOpen, void 0);
      __privateAdd(this, _handleClipboardCopy, (e42) => {
        e42.preventDefault();
        e42.clipboardData?.setData("text/plain", this.displayValue);
      });
      __privateAdd(this, _handleClipboardPaste, (e42) => {
        e42.preventDefault();
        const pasted = e42.clipboardData?.getData("text/plain");
        if (!pasted)
          return;
        const pastedDate = new Date(pasted);
        if (pastedDate.toString() === "Invalid Date")
          return;
        this.value = pastedDate;
        __privateMethod(this, _dispatchChangeEvent2, dispatchChangeEvent_fn2).call(this);
      });
      __privateAdd(this, _handleFieldClick2, (e42) => {
        this._elSpinners[0].focus();
        window.getSelection()?.selectAllChildren(this._elSpinners[0]);
      });
      __privateAdd(this, _handleCalendarChange, (e42) => {
        e42.stopPropagation();
        this.value = e42.detail;
        this.open = false;
        __privateMethod(this, _dispatchChangeEvent2, dispatchChangeEvent_fn2).call(this);
      });
      __privateAdd(this, _handleMonthChange, (e42) => {
        e42.stopPropagation();
        this._focusedMonth = e42.target?.value;
      });
      __privateAdd(this, _handleYearChange, (e42) => {
        e42.stopPropagation();
        this._focusedYear = e42.target?.value;
      });
      __privateAdd(this, _handleIncrementFocusedMonth, (_e) => {
        this._focusedMonth++;
        if (this._focusedMonth > 11) {
          this._focusedMonth = 0;
          this._focusedYear++;
        }
      });
      __privateAdd(this, _handleDecrementFocusedMonth, (_e) => {
        this._focusedMonth--;
        if (this._focusedMonth < 0) {
          this._focusedMonth = 11;
          this._focusedYear--;
        }
      });
      __privateAdd(this, _handleCalendarFocusChange, async () => {
        this._focusedMonth = (await this._elCalendar).focusedMonth;
        this._focusedYear = (await this._elCalendar).focusedYear;
        this.value = (await this._elCalendar).focusedDate;
        this.requestUpdate();
        __privateMethod(this, _dispatchInputEvent, dispatchInputEvent_fn).call(this);
      });
      __privateAdd(this, _handlePopoverStateChange, async (e42) => {
        if (e42.target !== e42.currentTarget)
          return;
        this.open = e42.detail.open;
        if (e42.detail.reason === "close") {
          this.value = (await this._elCalendar).focusedDate;
          __privateMethod(this, _dispatchChangeEvent2, dispatchChangeEvent_fn2).call(this);
        }
        if (e42.detail.reason === "cancel") {
          this.value = __privateGet(this, _valueOnOpen);
        }
      });
      __privateAdd(this, _handleSpinnerKeydown, (e42) => {
        const index = Array.from(this._elSpinners).findIndex(
          (spinner) => spinner === e42.target
        );
        if (e42.key === "ArrowRight") {
          const next = this._elSpinners[index + 1];
          if (next)
            next.focus();
        }
        if (e42.key === "ArrowLeft") {
          const prev = this._elSpinners[index - 1];
          if (prev)
            prev.focus();
        }
      });
      __privateAdd(this, _handleSpinnerChange, (val, name) => {
        __privateGet(this, _spinnerState)[name] = val;
        const newDate = /* @__PURE__ */ new Date();
        newDate.setFullYear(parseInt(__privateGet(this, _spinnerState).year));
        newDate.setMonth(parseInt(__privateGet(this, _spinnerState).month) - 1);
        newDate.setDate(parseInt(__privateGet(this, _spinnerState).day));
        if (newDate.toString() === "Invalid Date")
          return;
        this.value = newDate;
        __privateMethod(this, _dispatchChangeEvent2, dispatchChangeEvent_fn2).call(this);
      });
      __privateAdd(this, _spinnerState, {
        year: "yyyy",
        month: "mm",
        day: "dd"
      });
    }
    get dateformat() {
      return this._dateFormatLayout.layout.map((f22) => f22.token).join(this._dateFormatLayout.delimiter);
    }
    set dateformat(dateformat) {
      this._dateFormatLayout = __privateMethod(this, _parseDateFormat, parseDateFormat_fn).call(this, dateformat);
    }
    /**
     * Get the currently focused date in the calendar popover. If no date is focused, or the calendar popover
     * is closed, the value will be undefined.
     */
    async getFocusedDate() {
      if (this.open)
        return this._elCalendar.then((el) => el.focusedDate);
      else
        return void 0;
    }
    /**
     * Get a string representation of the currently displayed value in the input field. The formatting will match the dateformat attribute.
     */
    get displayValue() {
      return this._elInput.innerText;
    }
    /**
     * A reference to a date cell element (<td>) inside the shadow root of the calendar primitive.
     * Inteded for use in integration tests.
     */
    async test_getDateCell(dayNumber) {
      return this._elCalendar.then((el) => el.getDateCell(dayNumber));
    }
    connectedCallback() {
      super.connectedCallback();
      TransitionalStyles.instance.apply(this, "gds-datepicker");
    }
    render() {
      return html2`${this._tStyles}
      <label for="spinner-0" id="label">${this.label}</label>

      <div class="form-info"><slot name="sub-label"></slot></div>

      <div
        class="field"
        id="trigger"
        @click=${__privateGet(this, _handleFieldClick2)}
        @copy=${__privateGet(this, _handleClipboardCopy)}
        @paste=${__privateGet(this, _handleClipboardPaste)}
      >
        <div class="input">
          ${o12(
        o13(
          this._dateFormatLayout.layout,
          (f22, i32) => html2`<gds-date-part-spinner
                  id="spinner-${i32}"
                  .length=${f22.token === "y" ? 4 : 2}
                  .value=${__privateGet(this, _spinnerState)[f22.name]}
                  aria-valuemin=${__privateMethod(this, _getMinSpinnerValue, getMinSpinnerValue_fn).call(this, f22.name)}
                  aria-valuemax=${__privateMethod(this, _getMaxSpinnerValue, getMaxSpinnerValue_fn).call(this, f22.name)}
                  aria-label=${__privateMethod(this, _getSpinnerLabel, getSpinnerLabel_fn).call(this, f22.name)}
                  aria-describedby="label"
                  @keydown=${__privateGet(this, _handleSpinnerKeydown)}
                  @change=${(e42) => __privateGet(this, _handleSpinnerChange).call(this, e42.detail.value, f22.name)}
                ></gds-date-part-spinner>`
        ),
        html2`<span>${this._dateFormatLayout.delimiter}</span>`
      )}
        </div>
        <button
          id="calendar-button"
          aria-label="${msg("Open calendar modal")}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
          @click=${() => this.open = !this.open}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            style="width:100%;height:100%"
          >
            <path
              d="M152 64h144V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40h40c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h40V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40zM48 248h80v-56H48v56zm0 48v64h80v-64H48zm128 0v64h96v-64h-96zm144 0v64h80v-64h-80zm80-104h-80v56h80v-56zm0 216h-80v56h64c8.8 0 16-7.2 16-16v-40zm-128 0h-96v56h96v-56zm-144 0H48v40c0 8.8 7.16 16 16 16h64v-56zm144-216h-96v56h96v-56z "
            />
          </svg>
        </button>
      </div>

      <div class="form-info"><slot name="message"></slot></div>

      <gds-popover
        .triggerRef=${this._elTrigger}
        .open=${this.open}
        @gds-ui-state=${__privateGet(this, _handlePopoverStateChange)}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${() => "390px"}
        @focusin=${async (e42) => {
        const isPopover = e42.target?.id === "calendar-popover";
        if (!isPopover)
          return;
        this._elCalendar.then((cal) => cal.focus());
      }}
      >
        <div class="header">
          <button @click=${__privateGet(this, _handleDecrementFocusedMonth)}>
            <i class="icon prev"></i>
          </button>
          <gds-dropdown
            .value=${this._focusedMonth.toString()}
            @change=${__privateGet(this, _handleMonthChange)}
            aria-label="${msg("Month")}"
          >
            <gds-option value="0">${msg("January")}</gds-option>
            <gds-option value="1">${msg("February")}</gds-option>
            <gds-option value="2">${msg("March")}</gds-option>
            <gds-option value="3">${msg("April")}</gds-option>
            <gds-option value="4">${msg("May")}</gds-option>
            <gds-option value="5">${msg("June")}</gds-option>
            <gds-option value="6">${msg("July")}</gds-option>
            <gds-option value="7">${msg("August")}</gds-option>
            <gds-option value="8">${msg("September")}</gds-option>
            <gds-option value="9">${msg("October")}</gds-option>
            <gds-option value="10">${msg("November")}</gds-option>
            <gds-option value="11">${msg("December")}</gds-option>
          </gds-dropdown>
          <gds-dropdown
            .value=${this._focusedYear.toString()}
            @change=${__privateGet(this, _handleYearChange)}
            aria-label="${msg("Year")}"
          >
            ${c7(
        __privateGet(this, _years, years_get),
        (year) => year,
        (year) => html2`<gds-option value=${year}>${year}</gds-option>`
      )}
          </gds-dropdown>
          <button @click=${__privateGet(this, _handleIncrementFocusedMonth)}>
            <i class="icon next"></i>
          </button>
        </div>

        <gds-calendar
          id="calendar"
          @change=${__privateGet(this, _handleCalendarChange)}
          @gds-date-focused=${__privateGet(this, _handleCalendarFocusChange)}
          .focusedMonth=${this._focusedMonth}
          .focusedYear=${this._focusedYear}
          .value=${this.value}
          .min=${this.min}
          .max=${this.max}
          .showWeekNumbers=${this.showWeekNumbers}
        ></gds-calendar>

        <div class="footer">
          <button
            class="tertiary clear"
            @click=${() => {
        this.value = void 0;
        __privateMethod(this, _dispatchChangeEvent2, dispatchChangeEvent_fn2).call(this);
      }}
          >
            ${msg("Clear")}
          </button>
          ${m4(__privateMethod(this, _renderBackToValidRangeButton, renderBackToValidRangeButton_fn).call(this), A2)}
          <button
            class="tertiary today"
            @click=${() => {
        this.value = /* @__PURE__ */ new Date();
        __privateMethod(this, _dispatchChangeEvent2, dispatchChangeEvent_fn2).call(this);
      }}
          >
            ${msg("Today")}
          </button>
        </div>
      </gds-popover> `;
    }
    _handleValueChange() {
      if (!this.value) {
        __privateSet(this, _spinnerState, {
          year: "yyyy",
          month: "mm",
          day: "dd"
        });
        return;
      }
      const date = this.value;
      this._focusedMonth = date.getMonth();
      this._focusedYear = date.getFullYear();
      const year = date.getFullYear().toString();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      __privateSet(this, _spinnerState, { year, month, day });
    }
    _handleOpenChange() {
      if (this.open) {
        __privateSet(this, _valueOnOpen, this.value);
        this._elCalendar.then((el) => el.focus());
      }
    }
  };
  _valueOnOpen = /* @__PURE__ */ new WeakMap();
  _renderBackToValidRangeButton = /* @__PURE__ */ new WeakSet();
  renderBackToValidRangeButton_fn = async function() {
    const focusedDate = await this.getFocusedDate();
    let buttonTxt = "";
    let buttonAction;
    if (focusedDate && focusedDate > this.max) {
      buttonTxt = msg("Last available date");
      buttonAction = () => __privateMethod(this, _focusDate, focusDate_fn).call(this, this.max);
    } else if (focusedDate && focusedDate < this.min) {
      buttonTxt = msg("First available date");
      buttonAction = () => __privateMethod(this, _focusDate, focusDate_fn).call(this, this.min);
    }
    return html2`${n8(
      buttonTxt.length > 0,
      () => html2`<button class="tertiary back-to-range" @click=${buttonAction}>
          ${buttonTxt}
        </button>`,
      () => A2
    )}`;
  };
  _focusDate = /* @__PURE__ */ new WeakSet();
  focusDate_fn = function(d22) {
    const firstValidDate = new Date(d22);
    this._elCalendar.then((el) => el.focusedDate = firstValidDate).then(__privateGet(this, _handleCalendarFocusChange));
  };
  _getSpinnerLabel = /* @__PURE__ */ new WeakSet();
  getSpinnerLabel_fn = function(name) {
    const labels = {
      year: msg("Year"),
      month: msg("Month"),
      day: msg("Day")
    };
    return labels[name];
  };
  _getMinSpinnerValue = /* @__PURE__ */ new WeakSet();
  getMinSpinnerValue_fn = function(name) {
    const min2 = {
      year: 1900,
      month: 1,
      day: 1
    };
    return min2[name];
  };
  _getMaxSpinnerValue = /* @__PURE__ */ new WeakSet();
  getMaxSpinnerValue_fn = function(name) {
    const max2 = {
      year: 9999,
      month: 12,
      day: 31
    };
    return max2[name];
  };
  _dispatchChangeEvent2 = /* @__PURE__ */ new WeakSet();
  dispatchChangeEvent_fn2 = function() {
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: { value: this.value }
      })
    );
  };
  _dispatchInputEvent = /* @__PURE__ */ new WeakSet();
  dispatchInputEvent_fn = function() {
    this.dispatchEvent(
      new CustomEvent("input", {
        detail: { value: this.value }
      })
    );
  };
  _handleClipboardCopy = /* @__PURE__ */ new WeakMap();
  _handleClipboardPaste = /* @__PURE__ */ new WeakMap();
  _handleFieldClick2 = /* @__PURE__ */ new WeakMap();
  _handleCalendarChange = /* @__PURE__ */ new WeakMap();
  _handleMonthChange = /* @__PURE__ */ new WeakMap();
  _handleYearChange = /* @__PURE__ */ new WeakMap();
  _handleIncrementFocusedMonth = /* @__PURE__ */ new WeakMap();
  _handleDecrementFocusedMonth = /* @__PURE__ */ new WeakMap();
  _handleCalendarFocusChange = /* @__PURE__ */ new WeakMap();
  _handlePopoverStateChange = /* @__PURE__ */ new WeakMap();
  _handleSpinnerKeydown = /* @__PURE__ */ new WeakMap();
  _parseDateFormat = /* @__PURE__ */ new WeakSet();
  parseDateFormat_fn = function(dateformat) {
    const delimiter = dateformat.replace(/[a-z0-9]/gi, "")[0];
    const format = dateformat.split(delimiter);
    const year = format.findIndex((f22) => f22 === "y");
    const month = format.findIndex((f22) => f22 === "m");
    const day = format.findIndex((f22) => f22 === "d");
    if (year === -1 || month === -1 || day === -1)
      throw new Error("Invalid date format for <gds-datepicker>");
    const ordered = [year, month, day].sort((a22, b22) => a22 - b22);
    const orderedFormat = ordered.map((i32) => format[i32]).map((f22) => ({
      token: f22,
      name: f22 === "y" ? "year" : f22 === "m" ? "month" : "day"
    }));
    return { delimiter, layout: orderedFormat };
  };
  _handleSpinnerChange = /* @__PURE__ */ new WeakMap();
  _spinnerState = /* @__PURE__ */ new WeakMap();
  _years = /* @__PURE__ */ new WeakSet();
  years_get = function() {
    const minYear = this.min.getFullYear();
    const maxYear = this.max.getFullYear();
    const isOutsideRange = __privateGet(this, _isValueOutsideRange, isValueOutsideRange_get);
    const valueYear = this.value?.getFullYear();
    return {
      *[Symbol.iterator]() {
        if (isOutsideRange)
          yield valueYear;
        for (let i32 = minYear; i32 <= maxYear; i32++)
          yield i32;
      }
    };
  };
  _isValueOutsideRange = /* @__PURE__ */ new WeakSet();
  isValueOutsideRange_get = function() {
    if (!this.value)
      return false;
    return this.value.getFullYear() < this.min.getFullYear() || this.value.getFullYear() > this.max.getFullYear();
  };
  GdsDatepicker.styles = [styles];
  GdsDatepicker.shadowRootOptions = {
    mode: "open",
    delegatesFocus: true
  };
  __decorateClass([
    n6({ converter: dateConverter })
  ], GdsDatepicker.prototype, "value", 2);
  __decorateClass([
    n6({ converter: dateConverter })
  ], GdsDatepicker.prototype, "min", 2);
  __decorateClass([
    n6({ converter: dateConverter })
  ], GdsDatepicker.prototype, "max", 2);
  __decorateClass([
    n6({ type: Boolean })
  ], GdsDatepicker.prototype, "open", 2);
  __decorateClass([
    n6()
  ], GdsDatepicker.prototype, "label", 2);
  __decorateClass([
    n6({ type: Boolean })
  ], GdsDatepicker.prototype, "showWeekNumbers", 2);
  __decorateClass([
    n6()
  ], GdsDatepicker.prototype, "dateformat", 1);
  __decorateClass([
    e8("#calendar-button")
  ], GdsDatepicker.prototype, "test_calendarButton", 2);
  __decorateClass([
    t4()
  ], GdsDatepicker.prototype, "_focusedMonth", 2);
  __decorateClass([
    t4()
  ], GdsDatepicker.prototype, "_focusedYear", 2);
  __decorateClass([
    t4()
  ], GdsDatepicker.prototype, "_dateFormatLayout", 2);
  __decorateClass([
    e8("#calendar")
  ], GdsDatepicker.prototype, "_elCalendar", 2);
  __decorateClass([
    e8("#trigger")
  ], GdsDatepicker.prototype, "_elTrigger", 2);
  __decorateClass([
    e7(getScopedTagName("gds-date-part-spinner"))
  ], GdsDatepicker.prototype, "_elSpinners", 2);
  __decorateClass([
    i5(".input")
  ], GdsDatepicker.prototype, "_elInput", 2);
  __decorateClass([
    t4()
  ], GdsDatepicker.prototype, "_tStyles", 2);
  __decorateClass([
    watch("value")
  ], GdsDatepicker.prototype, "_handleValueChange", 1);
  __decorateClass([
    watch("open")
  ], GdsDatepicker.prototype, "_handleOpenChange", 1);
  GdsDatepicker = __decorateClass([
    gdsCustomElement("gds-datepicker")
  ], GdsDatepicker);
})();
/*! Bundled license information:

reflect-metadata/Reflect.js:
  (*! *****************************************************************************
  Copyright (C) Microsoft. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** *)

lit-html/node/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/str-tag.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/default-msg.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/locale-status-event.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/types.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/localized-controller.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/localized-decorator.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/deferred.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/fnv1a64.js:
  (**
   * @license
   * Copyright 2014 Travis Webb
   * SPDX-License-Identifier: MIT
   *)

@lit/localize/internal/id-generation.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/runtime-msg.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/init/runtime.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/init/transform.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/lit-localize.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/private-async-helpers.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/until.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/choose.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/join.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/map.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
