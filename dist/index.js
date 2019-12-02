var Movai=function(t){var n={};function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(i,r,function(n){return t[n]}.bind(null,r));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=4)}([function(t,n,e){"use strict";var i=e(2);function r(t){this.message=t}r.prototype=new Error,r.prototype.name="InvalidTokenError",t.exports=function(t,n){if("string"!=typeof t)throw new r("Invalid token specified");var e=!0===(n=n||{}).header?0:1;try{return JSON.parse(i(t.split(".")[e]))}catch(t){throw new r("Invalid token specified: "+t.message)}},t.exports.InvalidTokenError=r},function(t,n,e){var i,r;
/**
 * Monet.js 0.9.0-rc.1
 *
 * (c) 2012-2018 Chris Myers
 * @license Monet.js may be freely distributed under the MIT license.
 * For all details and documentation:
 * https://monet.github.io/monet.js/
 */"undefined"!=typeof self&&self,void 0===(r="function"==typeof(i=function(){"use strict";var t={apply2:E,assign:S(Object.assign)?Object.assign:function(t,n){for(var e in n)n.hasOwnProperty(e)&&void 0!==n[e]&&(t[e]=n[e]);return t},compose:b,curry:w(_(w),[])([]),idFunction:k,isFunction:S,noop:v,swap:_},n="@@type",e="monet.js",i="Identity",r="Maybe",o="Either",s="Validation",u="List",a="NEL",c="IO",f="MonadT",h="Reader",l="Free";function p(t,i){t[n]=e+"/"+i}function d(t){return function(i){return i[n]||i.constructor[n]===e+"/"+t}}function y(t){return function(e){var i=e[n]||e.constructor&&e.constructor[n];return Boolean(i)&&i.length>=t.length&&i.indexOf(t)===i.length-t.length}}function m(t){return null==t}function v(){}function g(t){return Array.prototype.slice.call(t)}function w(t,n){return function(){var e=n.concat(g(arguments));return e.length>=t.length?t.apply(null,e.slice(0,e.length)):w(t,e)}}function b(t,n){return function(e){return t(n(e))}}function S(t){return Boolean(t&&t.constructor&&t.call&&t.apply)}function k(t){return t}function L(t,n){return t===n||t!=t&&n!=n||!(!t||!n)&&!(!S(t.equals)||!S(n.equals))&&t.equals(n)}function N(t){return function(n){return L(t,n)}}function T(){return!1}function _(t){return function(n,e){return t(e,n)}}function E(t,n,e){return n.ap(t.map(w(e,[])))}function O(t,n){for(var e=t,i=n;!e.isNil&&!i.isNil;){if(!N(e.head())(i.head()))return!1;e=e.tail(),i=i.tail()}return e.isNil&&i.isNil}function I(t,n){return function t(n,e){return e.isNil?ot(e):rt((function(){return t(n,e.tail())})).map(w(j,[])(n(e.head())))}(t,n).run()}function R(t,n){return t.foldRight(V)((function(t,e){return n(t)?j(t,e):e}))}function A(t,n){return function t(n,e){if(n.isNil)return ot(W());var i=n.head();return e(i)?ot(D(i)):rt((function(){return t(n.tail(),e)}))}(t,n).run()}function M(t,n){return function t(n,e){return n.isNil?ot(!1):L(n.head(),e)?ot(!0):rt((function(){return t(n.tail(),e)}))}(t,n).run()}function j(t,n){return n.cons(t)}function P(){switch(arguments.length){case 0:return new P.fn.init;case 1:return new P.fn.init(arguments[0]);default:return new P.fn.init(arguments[0],arguments[1])}}t.List=P;var V,C=function(t,n){n.isNil||(t(n.head()),C(t,n.tail()))},F=function(t,n,e){return function n(e,i){return i.isNil?ot(e):rt((function(){return n(t(e,i.head()),i.tail())}))}(n,e).run()},J=function(t,n,e){return function n(e,i){return e.isNil?ot(i):rt((function(){return n(e.tail(),i)})).map((function(n){return t(e.head(),n)}))}(n,e).run()},x=function(t,n){return function t(n,e){return n.isNil?ot(e):rt((function(){return t(n.tail(),e).map((function(t){return t.cons(n.head())}))}))}(t,n).run()},z=function(t,n){return t.foldRight(n.of(V))(n.map2(j))},q=function(t){return t.foldLeft(V)(_(j))};function $(t){return new Error("Cannot create an empty Non-Empty List. Passed head is "+t+".")}function U(t,n){if(m(t))throw $(t);return new U.fn.init(t,n)}P.fn=P.prototype={init:function(){var t=arguments[0],n=arguments[1];0===arguments.length?(this.isNil=!0,this.size_=0):(this.isNil=!1,this.head_=t,this.tail_=n||V,this.size_=this.tail_.size()+1),p(this,u)},of:function(t){return new P(t)},size:function(){return this.size_},equals:function(t){return(P.isOfType(t)||U.isOfType(t))&&O(this,t)},cons:function(t){return P(t,this)},snoc:function(t){return this.concat(P(t))},map:function(t){return I(t,this)},toArray:function(){return F((function(t,n){return t.push(n),t}),[],this)},toSet:function(){return new Set(this)},foldLeft:function(t){var n=this;return function(e){return F(e,t,n)}},foldRight:function(t){var n=this;return function(e){return J(e,n,t)}},append:function(t){return x(this,t)},filter:function(t){return R(this,t)},find:function(t){return A(this,t)},flatten:function(){return J(x,this,V)},flattenMaybe:function(){return this.flatMap(B.toList)},reverse:function(){return q(this)},bind:function(t){return this.map(t).flatten()},forEach:function(t){C(t,this)},contains:function(t){return M(this,t)},sequenceMaybe:function(){return z(this,B)},sequenceValidation:function(){return this.foldLeft(H(V))((function(t,n){return t.ap(n.map((function(t){return function(n){return j(t,n)}})))})).map(q)},sequenceEither:function(){return z(this,Z)},sequenceIO:function(){return z(this,Y)},sequenceReader:function(){return z(this,et)},sequence:function(t){return z(this,t)},head:function(){return this.head_},headMaybe:function(){return this.isNil?W():D(this.head_)},tail:function(){return this.isNil?V:this.tail_},tails:function(){return this.isNil?P(V,V):this.tail().tails().cons(this)},ap:function(t){return n=t,this.bind((function(t){return n.map((function(n){return n(t)}))}));var n},isNEL:T,toString:function(){return this.isNil?"Nil":"List("+this.toArray().join(", ")+")"},inspect:function(){return this.toString()}},P.fn.init.prototype=P.fn,p(P,u),p(P.fn.init,u),P.isInstance=d(u),P.isOfType=y(u),P.prototype.empty=function(){return V},P.fromArray=function(t){return t.reduceRight((function(t,n){return t.cons(n)}),V)},P.from=function(t){return P.fromArray(Array.from(t))},P.of=function(t){return new P(t,V)},P.prototype.each=P.prototype.forEach,V=t.Nil=new P.fn.init,t.NEL=t.NonEmptyList=U,U.of=function(t){return U(t,V)},U.fn=U.prototype={init:function(t,n){if(m(t))throw $(t);this.isNil=!1,this.head_=t,this.tail_=m(n)?V:n,this.size_=this.tail_.size()+1,p(this,a)},equals:function(t){return P.isOfType(t)||U.isOfType(t)&&O(this,t)},cons:function(t){return U(t,this.toList())},snoc:function(t){return this.concat(U(t))},map:function(t){return U(t(this.head_),I(t,this.tail_))},bind:function(t){var n=t(this.head_);if(!n.isNEL())throw new Error("NEL.fn.bind: Passed function must return a NonEmptyList.");var e=this.tail().foldLeft(V.snoc(n.head()).append(n.tail()))((function(n,e){var i=t(e).toList();return n.snoc(i.head()).append(i.tail())}));return new U(e.head(),e.tail())},head:function(){return this.head_},tail:function(){return this.tail_},tails:function(){var t=this.toList().tails().map(U.fromList).flattenMaybe();return U(t.head(),t.tail())},toList:function(){return P(this.head_,this.tail_)},reverse:function(){if(this.tail().isNil)return this;var t=this.tail().reverse();return U(t.head(),t.tail().append(P(this.head())))},foldLeft:function(t){return this.toList().foldLeft(t)},foldRight:function(t){return this.toList().foldRight(t)},reduceLeft:function(t){return this.tail().foldLeft(this.head())(t)},filter:function(t){return R(this.toList(),t)},find:function(t){return A(this.toList(),t)},flatten:function(){return J(x,this.toList().map((function(t){return t.isNEL()?t.toList():t})),V)},flattenMaybe:function(){return this.toList().flatMap(B.toList)},contains:function(t){return M(this.toList(),t)},append:function(t){return U.fromList(this.toList().append(t.toList())).some()},cobind:function(t){return this.cojoin().map(t)},size:function(){return this.size_},forEach:function(t){return this.toList().forEach(t)},isNEL:function(){return!0},toString:function(){return"NEL("+this.toArray().join(", ")+")"},inspect:function(){return this.toString()}},U.fromList=function(t){return t.isNil?W():D(U(t.head(),t.tail()))},U.fromArray=function(t){return U.fromList(P.fromArray(t))},U.from=function(t){return U.fromList(P.from(t))},U.fn.init.prototype=U.fn,p(U,a),p(U.fn.init,a),U.isInstance=d(a),U.isOfType=y(a),U.prototype.toArray=P.prototype.toArray,U.prototype.toSet=P.prototype.toSet,U.prototype.extract=U.prototype.copure=U.prototype.head,U.prototype.cojoin=U.prototype.tails,U.prototype.coflatMap=U.prototype.mapTails=U.prototype.cobind,U.prototype.ap=P.prototype.ap;var B=t.Maybe={};B.fromFalsy=function(t){return t?B.Some(t):B.None()},B.fromNull=function(t){return m(t)?B.None():B.Some(t)},B.fromUndefined=function(t){return void 0===t?B.None():B.Some(t)},B.of=function(t){return D(t)};var D=B.Just=B.Some=B.some=t.Some=t.Just=function(t){return new B.fn.init(!0,t)},W=B.Nothing=B.None=B.none=t.None=t.Nothing=function(){return new B.fn.init(!1,null)};B.toList=function(t){return t.toList()},B.fn=B.prototype={init:function(t,n){if(this.isValue=t,t&&m(n))throw new Error("Can not create Some with illegal value: "+n+".");this.val=n,p(this,r)},isSome:function(){return this.isValue},isNone:function(){return!this.isSome()},bind:function(t){return this.isValue?t(this.val):this},some:function(){if(this.isValue)return this.val;throw new Error("Cannot call .some() on a None.")},orSome:function(t){return this.isValue?this.val:t},orLazy:function(t){return this.cata(t,k)},orNull:function(){return this.orSome(null)},orUndefined:function(){return this.orSome(void 0)},orElse:function(t){return this.catchMap((function(){return t}))},ap:function(t){var n=this.val;return this.isValue?t.map((function(t){return t(n)})):this},equals:function(t){return B.isOfType(t)&&this.cata((function(){return t.isNone()}),(function(n){return t.fold(!1)(N(n))}))},toArray:function(){return this.map((function(t){return[t]})).orLazy((function(){return[]}))},toSet:function(){return new Set(this)},toList:function(){return this.map(P).orLazy((function(){return V}))},toEither:function(t){return this.isSome()?tt(this.val):nt(t)},toValidation:function(t){return this.isSome()?H(this.val):K(t)},fold:function(t){var n=this;return function(e){return n.isSome()?e(n.val):t}},foldLeft:function(t){return this.toList().foldLeft(t)},foldRight:function(t){return this.toList().foldRight(t)},cata:function(t,n){return this.isSome()?n(this.val):t()},catchMap:function(t){return this.isSome()?this:t()},filter:function(t){var n=this;return n.flatMap((function(e){return t(e)?n:W()}))},orNoneIf:function(t){return t?W():this},contains:function(t){return!!this.isSome()&&L(this.val,t)},forEach:function(t){this.cata(v,t)},orElseRun:function(t){this.cata(t,v)},toString:function(){return this.isSome()?"Just("+this.val+")":"Nothing"},inspect:function(){return this.toString()}},B.prototype.orJust=B.prototype.getOrElse=B.prototype.orSome,B.prototype.just=B.prototype.some,B.prototype.isJust=B.prototype.isSome,B.prototype.isNothing=B.prototype.isNone,B.prototype.orNothingIf=B.prototype.orNoneIf,B.fn.init.prototype=B.fn,p(B,r),p(B.fn.init,r),B.isInstance=d(r),B.isOfType=y(r);var G=t.Validation={},H=G.Success=G.success=t.Success=function(t){return new G.fn.init(t,!0)},K=G.Fail=G.fail=t.Fail=function(t){return new G.fn.init(t,!1)};G.of=function(t){return H(t)},G.fn=G.prototype={init:function(t,n){this.val=t,this.isSuccessValue=n,p(this,s)},success:function(){if(this.isSuccess())return this.val;throw new Error("Cannot call success() on a Fail.")},isSuccess:function(){return this.isSuccessValue},isFail:function(){return!this.isSuccessValue},fail:function(){if(this.isSuccess())throw new Error("Cannot call fail() on a Success.");return this.val},bind:function(t){return this.isSuccess()?t(this.val):this},ap:function(t){var n=this.val;return this.isSuccess()?t.map((function(t){return t(n)})):t.isFail()?G.Fail(Q.append(n,t.fail())):this},acc:function(){var t=function(){return t};return this.isSuccessValue?G.success(t):this},foldLeft:function(t){return this.toMaybe().toList().foldLeft(t)},foldRight:function(t){return this.toMaybe().toList().foldRight(t)},cata:function(t,n){return this.isSuccessValue?n(this.val):t(this.val)},catchMap:function(t){return this.isSuccess()?this:t(this.val)},swap:function(){return this.isSuccess()?K(this.val):H(this.val)},failMap:function(t){return this.isFail()?K(t(this.val)):this},bimap:function(t,n){return this.isSuccessValue?this.map(n):this.failMap(t)},forEach:function(t){this.cata(v,t)},forEachFail:function(t){this.cata(t,v)},equals:function(t){return G.isOfType(t)&&this.cata((function(n){return t.cata(N(n),T)}),(function(n){return t.cata(T,N(n))}))},toMaybe:function(){return this.isSuccess()?D(this.val):W()},toEither:function(){return(this.isSuccess()?tt:nt)(this.val)},toString:function(){return(this.isSuccess()?"Success(":"Fail(")+this.val+")"},inspect:function(){return this.toString()}},G.prototype.fold=G.prototype.cata,G.fn.init.prototype=G.fn,p(G,s),p(G.fn.init,s),G.isInstance=d(s),G.isOfType=y(s);var Q=t.Semigroup={append:function(t,n){if(S(t.concat))return t.concat(n);throw new Error("Couldn't find a semigroup appender in the environment, please specify your own append function")}},X=t.monadTransformer=t.MonadT=t.monadT=function(t){return new X.fn.init(t)};X.of=function(t){return X(t)},X.fn=X.prototype={init:function(t){this.monad=t,p(G,f)},map:function(t){return X(this.monad.map((function(n){return n.map(t)})))},bind:function(t){return X(this.monad.map((function(n){return n.flatMap(t)})))},ap:function(t){return X(this.monad.flatMap((function(n){return t.perform().map((function(t){return n.ap(t)}))})))},perform:function(){return this.monad}},X.fn.init.prototype=X.fn;var Y=t.IO=t.io=function(t){return new Y.fn.init(t)};Y.of=function(t){return Y((function(){return t}))},Y.fn=Y.prototype={init:function(t){if(!S(t))throw new Error("IO requires a function.");this.effectFn=t,p(G,c)},map:function(t){var n=this;return Y((function(){return t(n.effectFn())}))},bind:function(t){var n=this;return Y((function(){return t(n.effectFn()).run()}))},ap:function(t){var n=this;return t.map((function(t){return t(n.effectFn())}))},run:function(){return this.effectFn()}},Y.fn.init.prototype=Y.fn,p(Y,c),p(Y.fn.init,c),Y.isInstance=d(c),Y.isOfType=y(c),Y.prototype.perform=Y.prototype.performUnsafeIO=Y.prototype.run;var Z=t.Either={};Z.of=function(t){return tt(t)};var tt=Z.Right=Z.right=t.Right=function(t){return new Z.fn.init(t,!0)},nt=Z.Left=Z.left=t.Left=function(t){return new Z.fn.init(t,!1)};Z.fn=Z.prototype={init:function(t,n){this.isRightValue=n,this.value=t,p(this,o)},bind:function(t){return this.isRightValue?t(this.value):this},ap:function(t){var n=this;return this.isRightValue?t.map((function(t){return t(n.value)})):this},leftMap:function(t){return this.isLeft()?nt(t(this.value)):this},isRight:function(){return this.isRightValue},isLeft:function(){return!this.isRight()},right:function(){if(this.isRightValue)return this.value;throw new Error("Cannot call right() on a Left.")},left:function(){if(this.isRightValue)throw new Error("Cannot call left() on a Right.");return this.value},foldLeft:function(t){return this.toMaybe().toList().foldLeft(t)},foldRight:function(t){return this.toMaybe().toList().foldRight(t)},cata:function(t,n){return this.isRightValue?n(this.value):t(this.value)},catchMap:function(t){return this.isRight()?this:t(this.value)},swap:function(){return this.isRight()?nt(this.value):tt(this.value)},forEach:function(t){this.cata(v,t)},forEachLeft:function(t){this.cata(t,v)},equals:function(t){return Z.isOfType(t)&&this.cata((function(n){return t.cata(N(n),T)}),(function(n){return t.cata(T,N(n))}))},bimap:function(t,n){return this.isRightValue?this.map(n):this.leftMap(t)},toMaybe:function(){return this.isRight()?D(this.value):W()},toValidation:function(){return this.isRight()?H(this.value):K(this.value)},toString:function(){return this.cata((function(t){return"Left("+t+")"}),(function(t){return"Right("+t+")"}))},inspect:function(){return this.toString()}},Z.prototype.fold=Z.prototype.cata,Z.fn.init.prototype=Z.fn,p(Z,o),p(Z.fn.init,o),Z.isInstance=d(o),Z.isOfType=y(o);var et=t.Reader=function(t){return new et.fn.init(t)};et.of=function(t){return et((function(n){return t}))},et.ask=function(){return et(k)},et.fn=et.prototype={init:function(t){this.f=t,p(this,h)},run:function(t){return this.f(t)},bind:function(t){var n=this;return et((function(e){return t(n.run(e)).run(e)}))},ap:function(t){var n=this;return t.bind((function(t){return et((function(e){return t(n.run(e))}))}))},map:function(t){var n=this;return et((function(e){return t(n.run(e))}))},local:function(t){var n=this;return et((function(e){return n.run(t(e))}))}},et.fn.init.prototype=et.fn,p(et,h),p(et.fn.init,h),et.isInstance=d(h),et.isOfType=y(h);var it=t.Free={},rt=it.Suspend=t.Suspend=function(t){return new it.fn.init(t,!0)},ot=it.Return=t.Return=function(t){return new it.fn.init(t,!1)};function st(t){return new st.fn.init(t)}function ut(t){!function(t){t.prototype.flatMap=t.prototype.chain=t.prototype.bind,t.pure=t.unit=t.of,t.prototype.of=t.of,S(t.prototype.append)&&(t.prototype.concat=t.prototype.append),t.prototype.point=t.prototype.pure=t.prototype.unit=t.prototype.of}(t),function(t){S(t.prototype.filter)&&(t.prototype.filterNot=function(t){return this.filter((function(n){return!t(n)}))})}(t),function(t){t.prototype.join=function(){return this.flatMap(k)},t.map2=function(t){return function(n,e){return n.flatMap((function(n){return e.map((function(e){return t(n,e)}))}))}}}(t),function(t){S(t.prototype.map)||(t.prototype.map=function(t){return this.bind(b(this.of,t))})}(t),function(t){t.prototype.takeLeft=function(t){return E(this,t,(function(t,n){return t}))},t.prototype.takeRight=function(t){return E(this,t,(function(t,n){return n}))}}(t),function(t){S(t.prototype.toArray)&&(t.prototype.every=t.prototype.forall=function(t){return this.toArray().every(t)},t.prototype.exists=function(t){return this.toArray().some(t)})}(t),function(t){["equals","map","ap","chain"].filter((function(n){return S(t.prototype[n])})).forEach((function(n){t.prototype["fantasy-land/"+n]=t.prototype[n]}))}(t),function(t){S(t.prototype.toArray)&&(t.prototype[Symbol.iterator]=function(){return this.toArray()[Symbol.iterator]()})}(t),function(t){S(t.prototype.toArray)&&(t.prototype.to=function(t){return t(this)})}(t)}return it.of=function(t){return ot(t)},it.liftF=function(t){return S(t)?rt(b(ot,t)):rt(t.map(ot))},it.fn=it.prototype={init:function(t,n){this.isSuspend=n,n?this.functor=t:this.val=t,p(this,l)},run:function(){return this.go((function(t){return t()}))},bind:function(t){return this.isSuspend?S(this.functor)?rt(b((function(n){return n.bind(t)}),this.functor)):rt(this.functor.map((function(n){return n.bind(t)}))):t(this.val)},ap:function(t){return this.bind((function(n){return t.map((function(t){return t(n)}))}))},resume:function(){return this.isSuspend?nt(this.functor):tt(this.val)},go1:function(t){return function n(e){return e.resume().cata((function(e){return n(t(e))}),k)}(this)},go:function(t){for(var n=this.resume();n.isLeft();){var e=t(n.left());n=e.resume()}return n.right()}},it.fn.init.prototype=it.fn,p(it,l),p(it.fn.init,l),it.isInstance=d(l),it.isOfType=y(l),t.Identity=st,st.of=function(t){return new st(t)},st.fn=st.prototype={init:function(t){this.val=t,p(this,i)},bind:function(t){return t(this.val)},get:function(){return this.val},forEach:function(t){t(this.val)},equals:function(t){return st.isOfType(t)&&N(this.get())(t.get())},contains:function(t){return L(this.val,t)},toString:function(){return"Identity("+this.val+")"},inspect:function(){return this.toString()},ap:function(t){var n=this.val;return t.map((function(t){return t(n)}))},toArray:function(){return[this.get()]},toList:function(){return P(this.get(),V)},toSet:function(){return new Set(this)}},st.fn.init.prototype=st.fn,p(st,i),p(st.fn.init,i),st.isInstance=d(i),st.isOfType=y(i),ut(X),ut(Z),ut(B),ut(Y),ut(U),ut(P),ut(G),ut(et),ut(it),ut(st),t})?i.call(n,e,n,t):i)||(t.exports=r)},function(t,n,e){var i=e(3);t.exports=function(t){var n=t.replace(/-/g,"+").replace(/_/g,"/");switch(n.length%4){case 0:break;case 2:n+="==";break;case 3:n+="=";break;default:throw"Illegal base64url string!"}try{return function(t){return decodeURIComponent(i(t).replace(/(.)/g,(function(t,n){var e=n.charCodeAt(0).toString(16).toUpperCase();return e.length<2&&(e="0"+e),"%"+e})))}(n)}catch(t){return i(n)}}},function(t,n){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function i(t){this.message=t}i.prototype=new Error,i.prototype.name="InvalidCharacterError",t.exports="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(t){var n=String(t).replace(/=+$/,"");if(n.length%4==1)throw new i("'atob' failed: The string to be decoded is not correctly encoded.");for(var r,o,s=0,u=0,a="";o=n.charAt(u++);~o&&(r=s%4?64*r+o:o,s++%4)?a+=String.fromCharCode(255&r>>(-2*s&6)):0)o=e.indexOf(o);return a}},function(t,n,e){"use strict";e.r(n);var i=e(0),r=e.n(i);const o={AuthException:function(t){this.message=t,this.name="AuthException"},getToken:()=>{const t=window.localStorage.getItem("movai.token");return t||!1},getRefreshToken:()=>{const t=window.localStorage.getItem("movai.refreshToken");return t||!1},getTokenData:()=>{const t=getToken();return{message:r()(t).message,auth_token:!1,refresh_token:getRefreshToken(),error:!1,access_token:t}},login:async(t,n,e)=>{window.localStorage.removeItem("movai.token"),window.localStorage.removeItem("movai.refreshToken"),window.localStorage.removeItem("movai.tokenRemember"),window.sessionStorage.removeItem("movai.session");let i={"Content-Type":"application/json"};try{const r=await fetch("http://localhost:5004/token-auth/",{method:"POST",headers:i,body:JSON.stringify({username:t,password:n,remember:e})}),{status:o}=r;let s=await r.json();return 200===o&&(window.localStorage.setItem("movai.token",s.access_token),window.localStorage.setItem("movai.refreshToken",s.refresh_token),window.localStorage.setItem("movai.tokenRemember","undefined"!=e&&e),window.sessionStorage.setItem("movai.session",!0)),s}catch(t){throw t}},logout:()=>{window.localStorage.removeItem("movai.token"),window.localStorage.removeItem("movai.refreshToken"),window.localStorage.removeItem("movai.tokenRemember"),window.sessionStorage.removeItem("movai.session")},checkLogin:async()=>{const t=window.localStorage.getItem("movai.token"),n=window.localStorage.getItem("movai.refreshToken"),e=window.localStorage.getItem("movai.tokenRemember"),i=window.sessionStorage.getItem("movai.session");if(null===t||null===n)return!1;let o=null;try{o=r()(t)}catch(t){return!1}if(o.exp>(new Date).getTime()/1e3)return!0;if("false"==e&&null===i)return logout(),!1;if(n)try{if(r()(n).exp<(new Date).getTime()/1e3)throw"refresh token has expired";const t="http://localhost:5004/token-refresh/",e={"Content-Type":"application/json"},i=await fetch(t,{method:"POST",headers:e,body:JSON.stringify({token:n})}),{status:o}=i;let s=await i.json();if(200===o)return window.localStorage.setItem("movai.token",s.access_token),window.localStorage.setItem("movai.refreshToken",s.refresh_token),!0}catch(t){}return!1}};var s=o,u=e(1);const a={ofNull:t=>u.Maybe.fromNull(t),range:(t,n)=>{const e=[];for(let t=0;t<n;t++)e.push(t);return e},randomInt:(t,n)=>Math.floor(a.random(t,n)),random:(t,n)=>t+(n-t)*Math.random(),normalizeStr:t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),groupBy:(t,n)=>{const e={};return t.forEach(t=>{const i=n(t);e[i]||(e[i]=[]),e[i].push(t)}),e}};var c=a;function f(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}const{getToken:h,AuthException:l,checkLogin:p}=s;var d=class{constructor(){f(this,"connect",()=>{p().then(t=>{if(!t)throw new l("login error");const n=`${this.WS_API}?token=${h()}`;this.websocket=new WebSocket(n),this.websocket.onopen=t=>this.onOpen(t),this.websocket.onclose=t=>this.onClose(t),this.websocket.onmessage=t=>this.onMessage(t),this.websocket.onerror=t=>this.onError(t)})}),f(this,"onOpen",t=>{this.dispatch("onopen",void 0)}),f(this,"onClose",t=>{this.dispatch("onclose",void 0),1e3!==t.code&&window.setTimeout(this.connect(),this.timeout)}),f(this,"onMessage",t=>{p().then(n=>{if(!n)throw new l("login error");let e;try{e=JSON.parse(t.data)}catch(t){return void console.error(t)}if(e.error)return void console.error(e.error);let i=e.patterns,r=!0,o=!1;["list","unsubscribe","subscribe"].includes(e.event)&&(i=i.map(t=>("unsubscribe"===e.event&&delete this.callbacks[JSON.stringify(t)],e.event+"/"+JSON.stringify(t))),"list"===e.event&&(i=["list"]),r=!1,o=!0),i.map(t=>{this.dispatch(t,e,r,o)})})}),f(this,"checkTest",(t,n,e,i)=>new Promise((r,o)=>{this.dispatch(t,n,e,i),r("DONE")})),f(this,"onError",t=>{this.dispatch("onerror",void 0)}),f(this,"onEvent",(t,n)=>{this.evt_callbacks[t]=this.evt_callbacks[t]||[],this.evt_callbacks[t].push(n)}),f(this,"close",()=>this.websocket.close()),f(this,"subscribe",(t,n,e)=>{const i={event:"subscribe",pattern:t};let r=JSON.stringify(t);this.callbacks[r]=this.callbacks[r]||[],this.callbacks[r].push(n),e&&(this.evt_callbacks["subscribe/"+r]=this.evt_callbacks["subscribe"+r]||[],this.evt_callbacks["subscribe/"+r].push(e)),this._send(i)}),f(this,"unsubscribe",(t,n)=>{console.log("Unsubscribe called "+JSON.stringify(t));const e={event:"unsubscribe",pattern:t};var i=JSON.stringify(t);n&&(this.evt_callbacks["unsubscribe/"+i]=this.evt_callbacks["unsubscribe/"+i]||[],this.evt_callbacks["unsubscribe/"+i].push(n)),this._send(e)}),f(this,"list",t=>{this.evt_callbacks.list=this.evt_callbacks.list||[],this.evt_callbacks.list.push(t),this._send({event:"list"})}),f(this,"_send",t=>{var n=this;try{this.websocket.send(JSON.stringify(t))}catch(e){let i=void 0;i=setInterval(()=>{1===n.websocket.readyState&&(clearInterval(i),n.websocket.send(JSON.stringify(t)))},200,i)}}),f(this,"dispatch",(t,n,e=!1,i=!1)=>{let r=void 0;var o=t;if(!0===e?(o=JSON.stringify(t),r=this.callbacks[o]):r=this.evt_callbacks[o],void 0!==r){for(let t=0;t<r.length;t++)"function"==typeof r[t]&&r[t](n);r&&!0===i&&(r=[])}}),f(this,"getVar",(t,n,e="global")=>{if(!["global","fleet"].includes(e))throw"Only fleet and global scopes available.";if("fleet"===e&&t.split("@").length<2)throw"Wrong key format (robot_name@key_name)";const i=this.REST_API+"Var/"+e+"/"+t+"/";p().then(t=>{fetch(i).then(t=>t.json()).then(t=>{n&&n(t)})})}),f(this,"setVar",(t,n,e,i="global")=>{if(!["global","fleet"].includes(i))throw"Only fleet and global scopes available.";if("fleet"===i){t.split("@");if(t.split("@").length<2)throw"Wrong key format (robot_name@key_name)"}const r={key:t,scope:i,value:n},o=this.REST_API+"Var/";p().then(t=>{if(!t)throw new l("login error");fetch(o,{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json",Authorization:`Bearer ${h()}`}}).then(t=>{e&&e(t)})})}),f(this,"post",(t,n,e,i,r)=>{let o=this.REST_API+t+"/"+n+"/";void 0===n&&(o=this.REST_API+t+"/"),p().then(t=>{if(!t)throw new l("login error");fetch(o,{method:"POST",body:JSON.stringify({key:e,data:i}),headers:{"Content-Type":"application/json",Authorization:`Bearer ${h()}`}}).then(t=>{r&&t.json().then(n=>{r(n,t)})})})}),f(this,"upload",(t,n,e,i)=>{const r=`${this.REST_API}upload/${t}/`,o=new FormData;o.append("name",n),o.append("data",e),fetch(r,{method:"POST",body:o}).then(t=>t.json()).then(i)}),f(this,"put",(t,n,e,i)=>{let r=this.REST_API+t+"/"+n+"/";console.log("database put",r),void 0===n&&(r=this.REST_API+t+"/"),p().then(t=>{if(!t)throw new l("login error");fetch(r,{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json",Authorization:`Bearer ${h()}`}}).then(t=>{i&&t.json().then(n=>{i(n,t)}).catch(n=>{i(void 0,t)})})})}),f(this,"delete",(t,n,e,i={})=>{let r=this.REST_API+t+"/"+n+"/";void 0!==n?p().then(t=>{if(!t)throw new l("login error");fetch(r,{method:"DELETE",body:JSON.stringify(i),headers:{"Content-Type":"application/json",Authorization:`Bearer ${h()}`}}).then(t=>{e&&t.json().then(n=>{e(n,t)}).catch(n=>{e(void 0,t)})})}):r=this.REST_API+t+"/"}),f(this,"cloudFunction",(t,n="",e,i)=>{p().then(r=>{if(!r)throw new l("login error");const o=this.REST_API+"function/"+t+"/";fetch(o,{method:"POST",body:JSON.stringify({func:n,args:e}),headers:{"Content-Type":"application/json",Authorization:`Bearer ${h()}`}}).then(t=>{i&&t.json().then(t=>i(t))})})}),f(this,"postTabs",(t,n,e)=>{let i=this.REST_API+"User/"+t+"/";if(void 0===t)return void(i=this.REST_API+"User/");let r=n.map(t=>({componentName:t.componentName,name:t.name}));const o={Workspace:"*"};p().then(t=>{fetch(i,{method:"POST",body:JSON.stringify({key:o,data:r}),headers:{"Content-Type":"application/json",Authorization:`Bearer ${h()}`}}).then(t=>{e&&t.json().then(n=>{e(n,t)}).catch(n=>{e(void 0,t)})})})}),this.host=`${window.location.hostname}:${window.location.port}`,this.WS_API="ws://"+this.host+"/ws/subscriber",this.REST_API="http://"+this.host+"/api/v1/",this.callbacks={},this.evt_callbacks={},this.timeout=3e3,this.websocket=void 0,this.connect()}};n.default={Authentication:s,Utils:c,Database:d}}]).default;