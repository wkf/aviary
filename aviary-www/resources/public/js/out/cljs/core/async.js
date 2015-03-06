// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t40231 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40231 = (function (f,fn_handler,meta40232){
this.f = f;
this.fn_handler = fn_handler;
this.meta40232 = meta40232;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40231.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t40231.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t40231.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t40231.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40233){
var self__ = this;
var _40233__$1 = this;
return self__.meta40232;
});

cljs.core.async.t40231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40233,meta40232__$1){
var self__ = this;
var _40233__$1 = this;
return (new cljs.core.async.t40231(self__.f,self__.fn_handler,meta40232__$1));
});

cljs.core.async.t40231.cljs$lang$type = true;

cljs.core.async.t40231.cljs$lang$ctorStr = "cljs.core.async/t40231";

cljs.core.async.t40231.cljs$lang$ctorPrWriter = (function (this__24264__auto__,writer__24265__auto__,opt__24266__auto__){
return cljs.core._write(writer__24265__auto__,"cljs.core.async/t40231");
});

cljs.core.async.__GT_t40231 = (function __GT_t40231(f__$1,fn_handler__$1,meta40232){
return (new cljs.core.async.t40231(f__$1,fn_handler__$1,meta40232));
});

}

return (new cljs.core.async.t40231(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__40235 = buff;
if(G__40235){
var bit__24358__auto__ = null;
if(cljs.core.truth_((function (){var or__23677__auto__ = bit__24358__auto__;
if(cljs.core.truth_(or__23677__auto__)){
return or__23677__auto__;
} else {
return G__40235.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__40235.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__40235);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__40235);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){
return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_40252 = (function (){var G__40249 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40249) : cljs.core.deref.call(null,G__40249));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__40250_40253 = val_40252;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__40250_40253) : fn1.call(null,G__40250_40253));
} else {
cljs.core.async.impl.dispatch.run(((function (val_40252,ret){
return (function (){
var G__40251 = val_40252;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__40251) : fn1.call(null,G__40251));
});})(val_40252,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
var G__40262 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40262) : cljs.core.deref.call(null,G__40262));
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = (function (){var G__40263 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40263) : cljs.core.deref.call(null,G__40263));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__40264_40266 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__40264_40266) : fn1.call(null,G__40264_40266));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__40265 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__40265) : fn1.call(null,G__40265));
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__24564__auto___40267 = n;
var x_40268 = (0);
while(true){
if((x_40268 < n__24564__auto___40267)){
(a[x_40268] = (0));

var G__40269 = (x_40268 + (1));
x_40268 = G__40269;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__40270 = (i + (1));
i = G__40270;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__40278 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__40278) : cljs.core.atom.call(null,G__40278));
})();
if(typeof cljs.core.async.t40279 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40279 = (function (flag,alt_flag,meta40280){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta40280 = meta40280;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40279.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t40279.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__40282 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40282) : cljs.core.deref.call(null,G__40282));
});})(flag))
;

cljs.core.async.t40279.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__40283_40285 = self__.flag;
var G__40284_40286 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__40283_40285,G__40284_40286) : cljs.core.reset_BANG_.call(null,G__40283_40285,G__40284_40286));

return true;
});})(flag))
;

cljs.core.async.t40279.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40281){
var self__ = this;
var _40281__$1 = this;
return self__.meta40280;
});})(flag))
;

cljs.core.async.t40279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40281,meta40280__$1){
var self__ = this;
var _40281__$1 = this;
return (new cljs.core.async.t40279(self__.flag,self__.alt_flag,meta40280__$1));
});})(flag))
;

cljs.core.async.t40279.cljs$lang$type = true;

cljs.core.async.t40279.cljs$lang$ctorStr = "cljs.core.async/t40279";

cljs.core.async.t40279.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__24264__auto__,writer__24265__auto__,opt__24266__auto__){
return cljs.core._write(writer__24265__auto__,"cljs.core.async/t40279");
});})(flag))
;

cljs.core.async.__GT_t40279 = ((function (flag){
return (function __GT_t40279(flag__$1,alt_flag__$1,meta40280){
return (new cljs.core.async.t40279(flag__$1,alt_flag__$1,meta40280));
});})(flag))
;

}

return (new cljs.core.async.t40279(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t40290 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40290 = (function (cb,flag,alt_handler,meta40291){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta40291 = meta40291;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40290.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t40290.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t40290.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t40290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40292){
var self__ = this;
var _40292__$1 = this;
return self__.meta40291;
});

cljs.core.async.t40290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40292,meta40291__$1){
var self__ = this;
var _40292__$1 = this;
return (new cljs.core.async.t40290(self__.cb,self__.flag,self__.alt_handler,meta40291__$1));
});

cljs.core.async.t40290.cljs$lang$type = true;

cljs.core.async.t40290.cljs$lang$ctorStr = "cljs.core.async/t40290";

cljs.core.async.t40290.cljs$lang$ctorPrWriter = (function (this__24264__auto__,writer__24265__auto__,opt__24266__auto__){
return cljs.core._write(writer__24265__auto__,"cljs.core.async/t40290");
});

cljs.core.async.__GT_t40290 = (function __GT_t40290(cb__$1,flag__$1,alt_handler__$1,meta40291){
return (new cljs.core.async.t40290(cb__$1,flag__$1,alt_handler__$1,meta40291));
});

}

return (new cljs.core.async.t40290(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__40300 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__40300) : port.call(null,G__40300));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__40301 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__40301) : port.call(null,G__40301));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40293_SHARP_){
var G__40302 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40293_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__40302) : fret.call(null,G__40302));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40294_SHARP_){
var G__40303 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40294_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__40303) : fret.call(null,G__40303));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40304 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40304) : cljs.core.deref.call(null,G__40304));
})(),(function (){var or__23677__auto__ = wport;
if(cljs.core.truth_(or__23677__auto__)){
return or__23677__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40305 = (i + (1));
i = G__40305;
continue;
}
} else {
return null;
}
break;
}
})();
var or__23677__auto__ = ret;
if(cljs.core.truth_(or__23677__auto__)){
return or__23677__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7)){
var temp__4126__auto__ = (function (){var and__23665__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__23665__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__23665__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$7], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__40306){
var map__40308 = p__40306;
var map__40308__$1 = ((cljs.core.seq_QMARK_(map__40308))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40308):map__40308);
var opts = map__40308__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__40306 = null;
if (arguments.length > 1) {
var G__40309__i = 0, G__40309__a = new Array(arguments.length -  1);
while (G__40309__i < G__40309__a.length) {G__40309__a[G__40309__i] = arguments[G__40309__i + 1]; ++G__40309__i;}
  p__40306 = new cljs.core.IndexedSeq(G__40309__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__40306);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__40310){
var ports = cljs.core.first(arglist__40310);
var p__40306 = cljs.core.rest(arglist__40310);
return alts_BANG___delegate(ports,p__40306);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__30815__auto___40408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto___40408){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto___40408){
return (function (state_40384){
var state_val_40385 = (state_40384[(1)]);
if((state_val_40385 === (7))){
var inst_40380 = (state_40384[(2)]);
var state_40384__$1 = state_40384;
var statearr_40386_40409 = state_40384__$1;
(statearr_40386_40409[(2)] = inst_40380);

(statearr_40386_40409[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40385 === (1))){
var state_40384__$1 = state_40384;
var statearr_40387_40410 = state_40384__$1;
(statearr_40387_40410[(2)] = null);

(statearr_40387_40410[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40385 === (4))){
var inst_40363 = (state_40384[(7)]);
var inst_40363__$1 = (state_40384[(2)]);
var inst_40364 = (inst_40363__$1 == null);
var state_40384__$1 = (function (){var statearr_40388 = state_40384;
(statearr_40388[(7)] = inst_40363__$1);

return statearr_40388;
})();
if(cljs.core.truth_(inst_40364)){
var statearr_40389_40411 = state_40384__$1;
(statearr_40389_40411[(1)] = (5));

} else {
var statearr_40390_40412 = state_40384__$1;
(statearr_40390_40412[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40385 === (13))){
var state_40384__$1 = state_40384;
var statearr_40391_40413 = state_40384__$1;
(statearr_40391_40413[(2)] = null);

(statearr_40391_40413[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40385 === (6))){
var inst_40363 = (state_40384[(7)]);
var state_40384__$1 = state_40384;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40384__$1,(11),to,inst_40363);
} else {
if((state_val_40385 === (3))){
var inst_40382 = (state_40384[(2)]);
var state_40384__$1 = state_40384;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40384__$1,inst_40382);
} else {
if((state_val_40385 === (12))){
var state_40384__$1 = state_40384;
var statearr_40392_40414 = state_40384__$1;
(statearr_40392_40414[(2)] = null);

(statearr_40392_40414[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40385 === (2))){
var state_40384__$1 = state_40384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40384__$1,(4),from);
} else {
if((state_val_40385 === (11))){
var inst_40373 = (state_40384[(2)]);
var state_40384__$1 = state_40384;
if(cljs.core.truth_(inst_40373)){
var statearr_40393_40415 = state_40384__$1;
(statearr_40393_40415[(1)] = (12));

} else {
var statearr_40394_40416 = state_40384__$1;
(statearr_40394_40416[(1)] = (13));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40385 === (9))){
var state_40384__$1 = state_40384;
var statearr_40395_40417 = state_40384__$1;
(statearr_40395_40417[(2)] = null);

(statearr_40395_40417[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40385 === (5))){
var state_40384__$1 = state_40384;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40396_40418 = state_40384__$1;
(statearr_40396_40418[(1)] = (8));

} else {
var statearr_40397_40419 = state_40384__$1;
(statearr_40397_40419[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40385 === (14))){
var inst_40378 = (state_40384[(2)]);
var state_40384__$1 = state_40384;
var statearr_40398_40420 = state_40384__$1;
(statearr_40398_40420[(2)] = inst_40378);

(statearr_40398_40420[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40385 === (10))){
var inst_40370 = (state_40384[(2)]);
var state_40384__$1 = state_40384;
var statearr_40399_40421 = state_40384__$1;
(statearr_40399_40421[(2)] = inst_40370);

(statearr_40399_40421[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40385 === (8))){
var inst_40367 = cljs.core.async.close_BANG_(to);
var state_40384__$1 = state_40384;
var statearr_40400_40422 = state_40384__$1;
(statearr_40400_40422[(2)] = inst_40367);

(statearr_40400_40422[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30815__auto___40408))
;
return ((function (switch__30735__auto__,c__30815__auto___40408){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_40404 = [null,null,null,null,null,null,null,null];
(statearr_40404[(0)] = state_machine__30736__auto__);

(statearr_40404[(1)] = (1));

return statearr_40404;
});
var state_machine__30736__auto____1 = (function (state_40384){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_40384);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e40405){if((e40405 instanceof Object)){
var ex__30739__auto__ = e40405;
var statearr_40406_40423 = state_40384;
(statearr_40406_40423[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40384);

return cljs.core.constant$keyword$21;
} else {
throw e40405;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__40424 = state_40384;
state_40384 = G__40424;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_40384){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_40384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto___40408))
})();
var state__30817__auto__ = (function (){var statearr_40407 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_40407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___40408);

return statearr_40407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto___40408))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__40610){
var vec__40611 = p__40610;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40611,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40611,(1),null);
var job = vec__40611;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30815__auto___40795 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto___40795,res,vec__40611,v,p,job,jobs,results){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto___40795,res,vec__40611,v,p,job,jobs,results){
return (function (state_40616){
var state_val_40617 = (state_40616[(1)]);
if((state_val_40617 === (2))){
var inst_40613 = (state_40616[(2)]);
var inst_40614 = cljs.core.async.close_BANG_(res);
var state_40616__$1 = (function (){var statearr_40618 = state_40616;
(statearr_40618[(7)] = inst_40613);

return statearr_40618;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40616__$1,inst_40614);
} else {
if((state_val_40617 === (1))){
var state_40616__$1 = state_40616;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40616__$1,(2),res,v);
} else {
return null;
}
}
});})(c__30815__auto___40795,res,vec__40611,v,p,job,jobs,results))
;
return ((function (switch__30735__auto__,c__30815__auto___40795,res,vec__40611,v,p,job,jobs,results){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_40622 = [null,null,null,null,null,null,null,null];
(statearr_40622[(0)] = state_machine__30736__auto__);

(statearr_40622[(1)] = (1));

return statearr_40622;
});
var state_machine__30736__auto____1 = (function (state_40616){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_40616);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e40623){if((e40623 instanceof Object)){
var ex__30739__auto__ = e40623;
var statearr_40624_40796 = state_40616;
(statearr_40624_40796[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40616);

return cljs.core.constant$keyword$21;
} else {
throw e40623;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__40797 = state_40616;
state_40616 = G__40797;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_40616){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_40616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto___40795,res,vec__40611,v,p,job,jobs,results))
})();
var state__30817__auto__ = (function (){var statearr_40625 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_40625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___40795);

return statearr_40625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto___40795,res,vec__40611,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__40626){
var vec__40627 = p__40626;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40627,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40627,(1),null);
var job = vec__40627;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__40628_40798 = v;
var G__40629_40799 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__40628_40798,G__40629_40799) : xf.call(null,G__40628_40798,G__40629_40799));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__24564__auto___40800 = n;
var __40801 = (0);
while(true){
if((__40801 < n__24564__auto___40800)){
var G__40630_40802 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__40630_40802) {
case "async":
var c__30815__auto___40804 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40801,c__30815__auto___40804,G__40630_40802,n__24564__auto___40800,jobs,results,process,async){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (__40801,c__30815__auto___40804,G__40630_40802,n__24564__auto___40800,jobs,results,process,async){
return (function (state_40643){
var state_val_40644 = (state_40643[(1)]);
if((state_val_40644 === (7))){
var inst_40639 = (state_40643[(2)]);
var state_40643__$1 = state_40643;
var statearr_40645_40805 = state_40643__$1;
(statearr_40645_40805[(2)] = inst_40639);

(statearr_40645_40805[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40644 === (6))){
var state_40643__$1 = state_40643;
var statearr_40646_40806 = state_40643__$1;
(statearr_40646_40806[(2)] = null);

(statearr_40646_40806[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40644 === (5))){
var state_40643__$1 = state_40643;
var statearr_40647_40807 = state_40643__$1;
(statearr_40647_40807[(2)] = null);

(statearr_40647_40807[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40644 === (4))){
var inst_40633 = (state_40643[(2)]);
var inst_40634 = async(inst_40633);
var state_40643__$1 = state_40643;
if(cljs.core.truth_(inst_40634)){
var statearr_40648_40808 = state_40643__$1;
(statearr_40648_40808[(1)] = (5));

} else {
var statearr_40649_40809 = state_40643__$1;
(statearr_40649_40809[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40644 === (3))){
var inst_40641 = (state_40643[(2)]);
var state_40643__$1 = state_40643;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40643__$1,inst_40641);
} else {
if((state_val_40644 === (2))){
var state_40643__$1 = state_40643;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40643__$1,(4),jobs);
} else {
if((state_val_40644 === (1))){
var state_40643__$1 = state_40643;
var statearr_40650_40810 = state_40643__$1;
(statearr_40650_40810[(2)] = null);

(statearr_40650_40810[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
return null;
}
}
}
}
}
}
}
});})(__40801,c__30815__auto___40804,G__40630_40802,n__24564__auto___40800,jobs,results,process,async))
;
return ((function (__40801,switch__30735__auto__,c__30815__auto___40804,G__40630_40802,n__24564__auto___40800,jobs,results,process,async){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_40654 = [null,null,null,null,null,null,null];
(statearr_40654[(0)] = state_machine__30736__auto__);

(statearr_40654[(1)] = (1));

return statearr_40654;
});
var state_machine__30736__auto____1 = (function (state_40643){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_40643);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e40655){if((e40655 instanceof Object)){
var ex__30739__auto__ = e40655;
var statearr_40656_40811 = state_40643;
(statearr_40656_40811[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40643);

return cljs.core.constant$keyword$21;
} else {
throw e40655;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__40812 = state_40643;
state_40643 = G__40812;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_40643){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_40643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(__40801,switch__30735__auto__,c__30815__auto___40804,G__40630_40802,n__24564__auto___40800,jobs,results,process,async))
})();
var state__30817__auto__ = (function (){var statearr_40657 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_40657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___40804);

return statearr_40657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(__40801,c__30815__auto___40804,G__40630_40802,n__24564__auto___40800,jobs,results,process,async))
);


break;
case "compute":
var c__30815__auto___40813 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40801,c__30815__auto___40813,G__40630_40802,n__24564__auto___40800,jobs,results,process,async){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (__40801,c__30815__auto___40813,G__40630_40802,n__24564__auto___40800,jobs,results,process,async){
return (function (state_40670){
var state_val_40671 = (state_40670[(1)]);
if((state_val_40671 === (7))){
var inst_40666 = (state_40670[(2)]);
var state_40670__$1 = state_40670;
var statearr_40672_40814 = state_40670__$1;
(statearr_40672_40814[(2)] = inst_40666);

(statearr_40672_40814[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40671 === (6))){
var state_40670__$1 = state_40670;
var statearr_40673_40815 = state_40670__$1;
(statearr_40673_40815[(2)] = null);

(statearr_40673_40815[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40671 === (5))){
var state_40670__$1 = state_40670;
var statearr_40674_40816 = state_40670__$1;
(statearr_40674_40816[(2)] = null);

(statearr_40674_40816[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40671 === (4))){
var inst_40660 = (state_40670[(2)]);
var inst_40661 = process(inst_40660);
var state_40670__$1 = state_40670;
if(cljs.core.truth_(inst_40661)){
var statearr_40675_40817 = state_40670__$1;
(statearr_40675_40817[(1)] = (5));

} else {
var statearr_40676_40818 = state_40670__$1;
(statearr_40676_40818[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40671 === (3))){
var inst_40668 = (state_40670[(2)]);
var state_40670__$1 = state_40670;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40670__$1,inst_40668);
} else {
if((state_val_40671 === (2))){
var state_40670__$1 = state_40670;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40670__$1,(4),jobs);
} else {
if((state_val_40671 === (1))){
var state_40670__$1 = state_40670;
var statearr_40677_40819 = state_40670__$1;
(statearr_40677_40819[(2)] = null);

(statearr_40677_40819[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
return null;
}
}
}
}
}
}
}
});})(__40801,c__30815__auto___40813,G__40630_40802,n__24564__auto___40800,jobs,results,process,async))
;
return ((function (__40801,switch__30735__auto__,c__30815__auto___40813,G__40630_40802,n__24564__auto___40800,jobs,results,process,async){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_40681 = [null,null,null,null,null,null,null];
(statearr_40681[(0)] = state_machine__30736__auto__);

(statearr_40681[(1)] = (1));

return statearr_40681;
});
var state_machine__30736__auto____1 = (function (state_40670){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_40670);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e40682){if((e40682 instanceof Object)){
var ex__30739__auto__ = e40682;
var statearr_40683_40820 = state_40670;
(statearr_40683_40820[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40670);

return cljs.core.constant$keyword$21;
} else {
throw e40682;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__40821 = state_40670;
state_40670 = G__40821;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_40670){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_40670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(__40801,switch__30735__auto__,c__30815__auto___40813,G__40630_40802,n__24564__auto___40800,jobs,results,process,async))
})();
var state__30817__auto__ = (function (){var statearr_40684 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_40684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___40813);

return statearr_40684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(__40801,c__30815__auto___40813,G__40630_40802,n__24564__auto___40800,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__40822 = (__40801 + (1));
__40801 = G__40822;
continue;
} else {
}
break;
}

var c__30815__auto___40823 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto___40823,jobs,results,process,async){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto___40823,jobs,results,process,async){
return (function (state_40706){
var state_val_40707 = (state_40706[(1)]);
if((state_val_40707 === (9))){
var inst_40699 = (state_40706[(2)]);
var state_40706__$1 = (function (){var statearr_40708 = state_40706;
(statearr_40708[(7)] = inst_40699);

return statearr_40708;
})();
var statearr_40709_40824 = state_40706__$1;
(statearr_40709_40824[(2)] = null);

(statearr_40709_40824[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40707 === (8))){
var inst_40692 = (state_40706[(8)]);
var inst_40697 = (state_40706[(2)]);
var state_40706__$1 = (function (){var statearr_40710 = state_40706;
(statearr_40710[(9)] = inst_40697);

return statearr_40710;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40706__$1,(9),results,inst_40692);
} else {
if((state_val_40707 === (7))){
var inst_40702 = (state_40706[(2)]);
var state_40706__$1 = state_40706;
var statearr_40711_40825 = state_40706__$1;
(statearr_40711_40825[(2)] = inst_40702);

(statearr_40711_40825[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40707 === (6))){
var inst_40692 = (state_40706[(8)]);
var inst_40687 = (state_40706[(10)]);
var inst_40692__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_40693 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40694 = [inst_40687,inst_40692__$1];
var inst_40695 = (new cljs.core.PersistentVector(null,2,(5),inst_40693,inst_40694,null));
var state_40706__$1 = (function (){var statearr_40712 = state_40706;
(statearr_40712[(8)] = inst_40692__$1);

return statearr_40712;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40706__$1,(8),jobs,inst_40695);
} else {
if((state_val_40707 === (5))){
var inst_40690 = cljs.core.async.close_BANG_(jobs);
var state_40706__$1 = state_40706;
var statearr_40713_40826 = state_40706__$1;
(statearr_40713_40826[(2)] = inst_40690);

(statearr_40713_40826[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40707 === (4))){
var inst_40687 = (state_40706[(10)]);
var inst_40687__$1 = (state_40706[(2)]);
var inst_40688 = (inst_40687__$1 == null);
var state_40706__$1 = (function (){var statearr_40714 = state_40706;
(statearr_40714[(10)] = inst_40687__$1);

return statearr_40714;
})();
if(cljs.core.truth_(inst_40688)){
var statearr_40715_40827 = state_40706__$1;
(statearr_40715_40827[(1)] = (5));

} else {
var statearr_40716_40828 = state_40706__$1;
(statearr_40716_40828[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40707 === (3))){
var inst_40704 = (state_40706[(2)]);
var state_40706__$1 = state_40706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40706__$1,inst_40704);
} else {
if((state_val_40707 === (2))){
var state_40706__$1 = state_40706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40706__$1,(4),from);
} else {
if((state_val_40707 === (1))){
var state_40706__$1 = state_40706;
var statearr_40717_40829 = state_40706__$1;
(statearr_40717_40829[(2)] = null);

(statearr_40717_40829[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__30815__auto___40823,jobs,results,process,async))
;
return ((function (switch__30735__auto__,c__30815__auto___40823,jobs,results,process,async){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_40721 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40721[(0)] = state_machine__30736__auto__);

(statearr_40721[(1)] = (1));

return statearr_40721;
});
var state_machine__30736__auto____1 = (function (state_40706){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_40706);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e40722){if((e40722 instanceof Object)){
var ex__30739__auto__ = e40722;
var statearr_40723_40830 = state_40706;
(statearr_40723_40830[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40706);

return cljs.core.constant$keyword$21;
} else {
throw e40722;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__40831 = state_40706;
state_40706 = G__40831;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_40706){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_40706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto___40823,jobs,results,process,async))
})();
var state__30817__auto__ = (function (){var statearr_40724 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_40724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___40823);

return statearr_40724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto___40823,jobs,results,process,async))
);


var c__30815__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto__,jobs,results,process,async){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto__,jobs,results,process,async){
return (function (state_40762){
var state_val_40763 = (state_40762[(1)]);
if((state_val_40763 === (7))){
var inst_40758 = (state_40762[(2)]);
var state_40762__$1 = state_40762;
var statearr_40764_40832 = state_40762__$1;
(statearr_40764_40832[(2)] = inst_40758);

(statearr_40764_40832[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40763 === (20))){
var state_40762__$1 = state_40762;
var statearr_40765_40833 = state_40762__$1;
(statearr_40765_40833[(2)] = null);

(statearr_40765_40833[(1)] = (21));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40763 === (1))){
var state_40762__$1 = state_40762;
var statearr_40766_40834 = state_40762__$1;
(statearr_40766_40834[(2)] = null);

(statearr_40766_40834[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40763 === (4))){
var inst_40727 = (state_40762[(7)]);
var inst_40727__$1 = (state_40762[(2)]);
var inst_40728 = (inst_40727__$1 == null);
var state_40762__$1 = (function (){var statearr_40767 = state_40762;
(statearr_40767[(7)] = inst_40727__$1);

return statearr_40767;
})();
if(cljs.core.truth_(inst_40728)){
var statearr_40768_40835 = state_40762__$1;
(statearr_40768_40835[(1)] = (5));

} else {
var statearr_40769_40836 = state_40762__$1;
(statearr_40769_40836[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40763 === (15))){
var inst_40740 = (state_40762[(8)]);
var state_40762__$1 = state_40762;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40762__$1,(18),to,inst_40740);
} else {
if((state_val_40763 === (21))){
var inst_40753 = (state_40762[(2)]);
var state_40762__$1 = state_40762;
var statearr_40770_40837 = state_40762__$1;
(statearr_40770_40837[(2)] = inst_40753);

(statearr_40770_40837[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40763 === (13))){
var inst_40755 = (state_40762[(2)]);
var state_40762__$1 = (function (){var statearr_40771 = state_40762;
(statearr_40771[(9)] = inst_40755);

return statearr_40771;
})();
var statearr_40772_40838 = state_40762__$1;
(statearr_40772_40838[(2)] = null);

(statearr_40772_40838[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40763 === (6))){
var inst_40727 = (state_40762[(7)]);
var state_40762__$1 = state_40762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40762__$1,(11),inst_40727);
} else {
if((state_val_40763 === (17))){
var inst_40748 = (state_40762[(2)]);
var state_40762__$1 = state_40762;
if(cljs.core.truth_(inst_40748)){
var statearr_40773_40839 = state_40762__$1;
(statearr_40773_40839[(1)] = (19));

} else {
var statearr_40774_40840 = state_40762__$1;
(statearr_40774_40840[(1)] = (20));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40763 === (3))){
var inst_40760 = (state_40762[(2)]);
var state_40762__$1 = state_40762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40762__$1,inst_40760);
} else {
if((state_val_40763 === (12))){
var inst_40737 = (state_40762[(10)]);
var state_40762__$1 = state_40762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40762__$1,(14),inst_40737);
} else {
if((state_val_40763 === (2))){
var state_40762__$1 = state_40762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40762__$1,(4),results);
} else {
if((state_val_40763 === (19))){
var state_40762__$1 = state_40762;
var statearr_40775_40841 = state_40762__$1;
(statearr_40775_40841[(2)] = null);

(statearr_40775_40841[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40763 === (11))){
var inst_40737 = (state_40762[(2)]);
var state_40762__$1 = (function (){var statearr_40776 = state_40762;
(statearr_40776[(10)] = inst_40737);

return statearr_40776;
})();
var statearr_40777_40842 = state_40762__$1;
(statearr_40777_40842[(2)] = null);

(statearr_40777_40842[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40763 === (9))){
var state_40762__$1 = state_40762;
var statearr_40778_40843 = state_40762__$1;
(statearr_40778_40843[(2)] = null);

(statearr_40778_40843[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40763 === (5))){
var state_40762__$1 = state_40762;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40779_40844 = state_40762__$1;
(statearr_40779_40844[(1)] = (8));

} else {
var statearr_40780_40845 = state_40762__$1;
(statearr_40780_40845[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40763 === (14))){
var inst_40742 = (state_40762[(11)]);
var inst_40740 = (state_40762[(8)]);
var inst_40740__$1 = (state_40762[(2)]);
var inst_40741 = (inst_40740__$1 == null);
var inst_40742__$1 = cljs.core.not(inst_40741);
var state_40762__$1 = (function (){var statearr_40781 = state_40762;
(statearr_40781[(11)] = inst_40742__$1);

(statearr_40781[(8)] = inst_40740__$1);

return statearr_40781;
})();
if(inst_40742__$1){
var statearr_40782_40846 = state_40762__$1;
(statearr_40782_40846[(1)] = (15));

} else {
var statearr_40783_40847 = state_40762__$1;
(statearr_40783_40847[(1)] = (16));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40763 === (16))){
var inst_40742 = (state_40762[(11)]);
var state_40762__$1 = state_40762;
var statearr_40784_40848 = state_40762__$1;
(statearr_40784_40848[(2)] = inst_40742);

(statearr_40784_40848[(1)] = (17));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40763 === (10))){
var inst_40734 = (state_40762[(2)]);
var state_40762__$1 = state_40762;
var statearr_40785_40849 = state_40762__$1;
(statearr_40785_40849[(2)] = inst_40734);

(statearr_40785_40849[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40763 === (18))){
var inst_40745 = (state_40762[(2)]);
var state_40762__$1 = state_40762;
var statearr_40786_40850 = state_40762__$1;
(statearr_40786_40850[(2)] = inst_40745);

(statearr_40786_40850[(1)] = (17));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40763 === (8))){
var inst_40731 = cljs.core.async.close_BANG_(to);
var state_40762__$1 = state_40762;
var statearr_40787_40851 = state_40762__$1;
(statearr_40787_40851[(2)] = inst_40731);

(statearr_40787_40851[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30815__auto__,jobs,results,process,async))
;
return ((function (switch__30735__auto__,c__30815__auto__,jobs,results,process,async){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_40791 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40791[(0)] = state_machine__30736__auto__);

(statearr_40791[(1)] = (1));

return statearr_40791;
});
var state_machine__30736__auto____1 = (function (state_40762){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_40762);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e40792){if((e40792 instanceof Object)){
var ex__30739__auto__ = e40792;
var statearr_40793_40852 = state_40762;
(statearr_40793_40852[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40762);

return cljs.core.constant$keyword$21;
} else {
throw e40792;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__40853 = state_40762;
state_40762 = G__40853;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_40762){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_40762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto__,jobs,results,process,async))
})();
var state__30817__auto__ = (function (){var statearr_40794 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_40794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto__);

return statearr_40794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto__,jobs,results,process,async))
);

return c__30815__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$28);
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$29);
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30815__auto___40976 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto___40976,tc,fc){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto___40976,tc,fc){
return (function (state_40950){
var state_val_40951 = (state_40950[(1)]);
if((state_val_40951 === (7))){
var inst_40946 = (state_40950[(2)]);
var state_40950__$1 = state_40950;
var statearr_40952_40977 = state_40950__$1;
(statearr_40952_40977[(2)] = inst_40946);

(statearr_40952_40977[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40951 === (1))){
var state_40950__$1 = state_40950;
var statearr_40953_40978 = state_40950__$1;
(statearr_40953_40978[(2)] = null);

(statearr_40953_40978[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40951 === (4))){
var inst_40927 = (state_40950[(7)]);
var inst_40927__$1 = (state_40950[(2)]);
var inst_40928 = (inst_40927__$1 == null);
var state_40950__$1 = (function (){var statearr_40954 = state_40950;
(statearr_40954[(7)] = inst_40927__$1);

return statearr_40954;
})();
if(cljs.core.truth_(inst_40928)){
var statearr_40955_40979 = state_40950__$1;
(statearr_40955_40979[(1)] = (5));

} else {
var statearr_40956_40980 = state_40950__$1;
(statearr_40956_40980[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40951 === (13))){
var state_40950__$1 = state_40950;
var statearr_40957_40981 = state_40950__$1;
(statearr_40957_40981[(2)] = null);

(statearr_40957_40981[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40951 === (6))){
var inst_40927 = (state_40950[(7)]);
var inst_40933 = (function (){var G__40958 = inst_40927;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__40958) : p.call(null,G__40958));
})();
var state_40950__$1 = state_40950;
if(cljs.core.truth_(inst_40933)){
var statearr_40959_40982 = state_40950__$1;
(statearr_40959_40982[(1)] = (9));

} else {
var statearr_40960_40983 = state_40950__$1;
(statearr_40960_40983[(1)] = (10));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40951 === (3))){
var inst_40948 = (state_40950[(2)]);
var state_40950__$1 = state_40950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40950__$1,inst_40948);
} else {
if((state_val_40951 === (12))){
var state_40950__$1 = state_40950;
var statearr_40961_40984 = state_40950__$1;
(statearr_40961_40984[(2)] = null);

(statearr_40961_40984[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40951 === (2))){
var state_40950__$1 = state_40950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40950__$1,(4),ch);
} else {
if((state_val_40951 === (11))){
var inst_40927 = (state_40950[(7)]);
var inst_40937 = (state_40950[(2)]);
var state_40950__$1 = state_40950;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40950__$1,(8),inst_40937,inst_40927);
} else {
if((state_val_40951 === (9))){
var state_40950__$1 = state_40950;
var statearr_40962_40985 = state_40950__$1;
(statearr_40962_40985[(2)] = tc);

(statearr_40962_40985[(1)] = (11));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40951 === (5))){
var inst_40930 = cljs.core.async.close_BANG_(tc);
var inst_40931 = cljs.core.async.close_BANG_(fc);
var state_40950__$1 = (function (){var statearr_40963 = state_40950;
(statearr_40963[(8)] = inst_40930);

return statearr_40963;
})();
var statearr_40964_40986 = state_40950__$1;
(statearr_40964_40986[(2)] = inst_40931);

(statearr_40964_40986[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40951 === (14))){
var inst_40944 = (state_40950[(2)]);
var state_40950__$1 = state_40950;
var statearr_40965_40987 = state_40950__$1;
(statearr_40965_40987[(2)] = inst_40944);

(statearr_40965_40987[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40951 === (10))){
var state_40950__$1 = state_40950;
var statearr_40966_40988 = state_40950__$1;
(statearr_40966_40988[(2)] = fc);

(statearr_40966_40988[(1)] = (11));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40951 === (8))){
var inst_40939 = (state_40950[(2)]);
var state_40950__$1 = state_40950;
if(cljs.core.truth_(inst_40939)){
var statearr_40967_40989 = state_40950__$1;
(statearr_40967_40989[(1)] = (12));

} else {
var statearr_40968_40990 = state_40950__$1;
(statearr_40968_40990[(1)] = (13));

}

return cljs.core.constant$keyword$21;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30815__auto___40976,tc,fc))
;
return ((function (switch__30735__auto__,c__30815__auto___40976,tc,fc){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_40972 = [null,null,null,null,null,null,null,null,null];
(statearr_40972[(0)] = state_machine__30736__auto__);

(statearr_40972[(1)] = (1));

return statearr_40972;
});
var state_machine__30736__auto____1 = (function (state_40950){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_40950);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e40973){if((e40973 instanceof Object)){
var ex__30739__auto__ = e40973;
var statearr_40974_40991 = state_40950;
(statearr_40974_40991[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40950);

return cljs.core.constant$keyword$21;
} else {
throw e40973;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__40992 = state_40950;
state_40950 = G__40992;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_40950){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_40950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto___40976,tc,fc))
})();
var state__30817__auto__ = (function (){var statearr_40975 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_40975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___40976);

return statearr_40975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto___40976,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__30815__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto__){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto__){
return (function (state_41041){
var state_val_41042 = (state_41041[(1)]);
if((state_val_41042 === (7))){
var inst_41037 = (state_41041[(2)]);
var state_41041__$1 = state_41041;
var statearr_41043_41061 = state_41041__$1;
(statearr_41043_41061[(2)] = inst_41037);

(statearr_41043_41061[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41042 === (6))){
var inst_41030 = (state_41041[(7)]);
var inst_41027 = (state_41041[(8)]);
var inst_41034 = (function (){var G__41044 = inst_41027;
var G__41045 = inst_41030;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__41044,G__41045) : f.call(null,G__41044,G__41045));
})();
var inst_41027__$1 = inst_41034;
var state_41041__$1 = (function (){var statearr_41046 = state_41041;
(statearr_41046[(8)] = inst_41027__$1);

return statearr_41046;
})();
var statearr_41047_41062 = state_41041__$1;
(statearr_41047_41062[(2)] = null);

(statearr_41047_41062[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41042 === (5))){
var inst_41027 = (state_41041[(8)]);
var state_41041__$1 = state_41041;
var statearr_41048_41063 = state_41041__$1;
(statearr_41048_41063[(2)] = inst_41027);

(statearr_41048_41063[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41042 === (4))){
var inst_41030 = (state_41041[(7)]);
var inst_41030__$1 = (state_41041[(2)]);
var inst_41031 = (inst_41030__$1 == null);
var state_41041__$1 = (function (){var statearr_41049 = state_41041;
(statearr_41049[(7)] = inst_41030__$1);

return statearr_41049;
})();
if(cljs.core.truth_(inst_41031)){
var statearr_41050_41064 = state_41041__$1;
(statearr_41050_41064[(1)] = (5));

} else {
var statearr_41051_41065 = state_41041__$1;
(statearr_41051_41065[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41042 === (3))){
var inst_41039 = (state_41041[(2)]);
var state_41041__$1 = state_41041;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41041__$1,inst_41039);
} else {
if((state_val_41042 === (2))){
var state_41041__$1 = state_41041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41041__$1,(4),ch);
} else {
if((state_val_41042 === (1))){
var inst_41027 = init;
var state_41041__$1 = (function (){var statearr_41052 = state_41041;
(statearr_41052[(8)] = inst_41027);

return statearr_41052;
})();
var statearr_41053_41066 = state_41041__$1;
(statearr_41053_41066[(2)] = null);

(statearr_41053_41066[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
return null;
}
}
}
}
}
}
}
});})(c__30815__auto__))
;
return ((function (switch__30735__auto__,c__30815__auto__){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_41057 = [null,null,null,null,null,null,null,null,null];
(statearr_41057[(0)] = state_machine__30736__auto__);

(statearr_41057[(1)] = (1));

return statearr_41057;
});
var state_machine__30736__auto____1 = (function (state_41041){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_41041);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e41058){if((e41058 instanceof Object)){
var ex__30739__auto__ = e41058;
var statearr_41059_41067 = state_41041;
(statearr_41059_41067[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41041);

return cljs.core.constant$keyword$21;
} else {
throw e41058;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__41068 = state_41041;
state_41041 = G__41068;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_41041){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_41041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto__))
})();
var state__30817__auto__ = (function (){var statearr_41060 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_41060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto__);

return statearr_41060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto__))
);

return c__30815__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__30815__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto__){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto__){
return (function (state_41145){
var state_val_41146 = (state_41145[(1)]);
if((state_val_41146 === (7))){
var inst_41127 = (state_41145[(2)]);
var state_41145__$1 = state_41145;
var statearr_41147_41170 = state_41145__$1;
(statearr_41147_41170[(2)] = inst_41127);

(statearr_41147_41170[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41146 === (1))){
var inst_41121 = cljs.core.seq(coll);
var inst_41122 = inst_41121;
var state_41145__$1 = (function (){var statearr_41148 = state_41145;
(statearr_41148[(7)] = inst_41122);

return statearr_41148;
})();
var statearr_41149_41171 = state_41145__$1;
(statearr_41149_41171[(2)] = null);

(statearr_41149_41171[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41146 === (4))){
var inst_41122 = (state_41145[(7)]);
var inst_41125 = cljs.core.first(inst_41122);
var state_41145__$1 = state_41145;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41145__$1,(7),ch,inst_41125);
} else {
if((state_val_41146 === (13))){
var inst_41139 = (state_41145[(2)]);
var state_41145__$1 = state_41145;
var statearr_41150_41172 = state_41145__$1;
(statearr_41150_41172[(2)] = inst_41139);

(statearr_41150_41172[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41146 === (6))){
var inst_41130 = (state_41145[(2)]);
var state_41145__$1 = state_41145;
if(cljs.core.truth_(inst_41130)){
var statearr_41151_41173 = state_41145__$1;
(statearr_41151_41173[(1)] = (8));

} else {
var statearr_41152_41174 = state_41145__$1;
(statearr_41152_41174[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41146 === (3))){
var inst_41143 = (state_41145[(2)]);
var state_41145__$1 = state_41145;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41145__$1,inst_41143);
} else {
if((state_val_41146 === (12))){
var state_41145__$1 = state_41145;
var statearr_41153_41175 = state_41145__$1;
(statearr_41153_41175[(2)] = null);

(statearr_41153_41175[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41146 === (2))){
var inst_41122 = (state_41145[(7)]);
var state_41145__$1 = state_41145;
if(cljs.core.truth_(inst_41122)){
var statearr_41154_41176 = state_41145__$1;
(statearr_41154_41176[(1)] = (4));

} else {
var statearr_41155_41177 = state_41145__$1;
(statearr_41155_41177[(1)] = (5));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41146 === (11))){
var inst_41136 = cljs.core.async.close_BANG_(ch);
var state_41145__$1 = state_41145;
var statearr_41156_41178 = state_41145__$1;
(statearr_41156_41178[(2)] = inst_41136);

(statearr_41156_41178[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41146 === (9))){
var state_41145__$1 = state_41145;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41157_41179 = state_41145__$1;
(statearr_41157_41179[(1)] = (11));

} else {
var statearr_41158_41180 = state_41145__$1;
(statearr_41158_41180[(1)] = (12));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41146 === (5))){
var inst_41122 = (state_41145[(7)]);
var state_41145__$1 = state_41145;
var statearr_41159_41181 = state_41145__$1;
(statearr_41159_41181[(2)] = inst_41122);

(statearr_41159_41181[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41146 === (10))){
var inst_41141 = (state_41145[(2)]);
var state_41145__$1 = state_41145;
var statearr_41160_41182 = state_41145__$1;
(statearr_41160_41182[(2)] = inst_41141);

(statearr_41160_41182[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41146 === (8))){
var inst_41122 = (state_41145[(7)]);
var inst_41132 = cljs.core.next(inst_41122);
var inst_41122__$1 = inst_41132;
var state_41145__$1 = (function (){var statearr_41161 = state_41145;
(statearr_41161[(7)] = inst_41122__$1);

return statearr_41161;
})();
var statearr_41162_41183 = state_41145__$1;
(statearr_41162_41183[(2)] = null);

(statearr_41162_41183[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30815__auto__))
;
return ((function (switch__30735__auto__,c__30815__auto__){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_41166 = [null,null,null,null,null,null,null,null];
(statearr_41166[(0)] = state_machine__30736__auto__);

(statearr_41166[(1)] = (1));

return statearr_41166;
});
var state_machine__30736__auto____1 = (function (state_41145){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_41145);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e41167){if((e41167 instanceof Object)){
var ex__30739__auto__ = e41167;
var statearr_41168_41184 = state_41145;
(statearr_41168_41184[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41145);

return cljs.core.constant$keyword$21;
} else {
throw e41167;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__41185 = state_41145;
state_41145 = G__41185;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_41145){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_41145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto__))
})();
var state__30817__auto__ = (function (){var statearr_41169 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_41169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto__);

return statearr_41169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto__))
);

return c__30815__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj41187 = {};
return obj41187;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__23665__auto__ = _;
if(and__23665__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__23665__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__24321__auto__ = (((_ == null))?null:_);
return (function (){var or__23677__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__41191 = x__24321__auto__;
return goog.typeOf(G__41191);
})()]);
if(or__23677__auto__){
return or__23677__auto__;
} else {
var or__23677__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__23677__auto____$1){
return or__23677__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj41193 = {};
return obj41193;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__23665__auto__ = m;
if(and__23665__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__23665__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__24321__auto__ = (((m == null))?null:m);
return (function (){var or__23677__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__41197 = x__24321__auto__;
return goog.typeOf(G__41197);
})()]);
if(or__23677__auto__){
return or__23677__auto__;
} else {
var or__23677__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__23677__auto____$1){
return or__23677__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__23665__auto__ = m;
if(and__23665__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__23665__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__24321__auto__ = (((m == null))?null:m);
return (function (){var or__23677__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__41201 = x__24321__auto__;
return goog.typeOf(G__41201);
})()]);
if(or__23677__auto__){
return or__23677__auto__;
} else {
var or__23677__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__23677__auto____$1){
return or__23677__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__23665__auto__ = m;
if(and__23665__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__23665__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__24321__auto__ = (((m == null))?null:m);
return (function (){var or__23677__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__41205 = x__24321__auto__;
return goog.typeOf(G__41205);
})()]);
if(or__23677__auto__){
return or__23677__auto__;
} else {
var or__23677__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__23677__auto____$1){
return or__23677__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = (function (){var G__41435 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41435) : cljs.core.atom.call(null,G__41435));
})();
var m = (function (){
if(typeof cljs.core.async.t41436 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t41436 = (function (cs,ch,mult,meta41437){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta41437 = meta41437;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41436.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t41436.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t41436.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t41436.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__41439_41664 = self__.cs;
var G__41440_41665 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__41439_41664,G__41440_41665) : cljs.core.reset_BANG_.call(null,G__41439_41664,G__41440_41665));

return null;
});})(cs))
;

cljs.core.async.t41436.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t41436.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t41436.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41438){
var self__ = this;
var _41438__$1 = this;
return self__.meta41437;
});})(cs))
;

cljs.core.async.t41436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41438,meta41437__$1){
var self__ = this;
var _41438__$1 = this;
return (new cljs.core.async.t41436(self__.cs,self__.ch,self__.mult,meta41437__$1));
});})(cs))
;

cljs.core.async.t41436.cljs$lang$type = true;

cljs.core.async.t41436.cljs$lang$ctorStr = "cljs.core.async/t41436";

cljs.core.async.t41436.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__24264__auto__,writer__24265__auto__,opt__24266__auto__){
return cljs.core._write(writer__24265__auto__,"cljs.core.async/t41436");
});})(cs))
;

cljs.core.async.__GT_t41436 = ((function (cs){
return (function __GT_t41436(cs__$1,ch__$1,mult__$1,meta41437){
return (new cljs.core.async.t41436(cs__$1,ch__$1,mult__$1,meta41437));
});})(cs))
;

}

return (new cljs.core.async.t41436(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__41441 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41441) : cljs.core.atom.call(null,G__41441));
})();
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30815__auto___41666 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto___41666,cs,m,dchan,dctr,done){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto___41666,cs,m,dchan,dctr,done){
return (function (state_41572){
var state_val_41573 = (state_41572[(1)]);
if((state_val_41573 === (7))){
var inst_41568 = (state_41572[(2)]);
var state_41572__$1 = state_41572;
var statearr_41574_41667 = state_41572__$1;
(statearr_41574_41667[(2)] = inst_41568);

(statearr_41574_41667[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (20))){
var inst_41473 = (state_41572[(7)]);
var inst_41483 = cljs.core.first(inst_41473);
var inst_41484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41483,(0),null);
var inst_41485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41483,(1),null);
var state_41572__$1 = (function (){var statearr_41575 = state_41572;
(statearr_41575[(8)] = inst_41484);

return statearr_41575;
})();
if(cljs.core.truth_(inst_41485)){
var statearr_41576_41668 = state_41572__$1;
(statearr_41576_41668[(1)] = (22));

} else {
var statearr_41577_41669 = state_41572__$1;
(statearr_41577_41669[(1)] = (23));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (27))){
var inst_41515 = (state_41572[(9)]);
var inst_41520 = (state_41572[(10)]);
var inst_41444 = (state_41572[(11)]);
var inst_41513 = (state_41572[(12)]);
var inst_41520__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_41513,inst_41515);
var inst_41521 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41520__$1,inst_41444,done);
var state_41572__$1 = (function (){var statearr_41578 = state_41572;
(statearr_41578[(10)] = inst_41520__$1);

return statearr_41578;
})();
if(cljs.core.truth_(inst_41521)){
var statearr_41579_41670 = state_41572__$1;
(statearr_41579_41670[(1)] = (30));

} else {
var statearr_41580_41671 = state_41572__$1;
(statearr_41580_41671[(1)] = (31));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (1))){
var state_41572__$1 = state_41572;
var statearr_41581_41672 = state_41572__$1;
(statearr_41581_41672[(2)] = null);

(statearr_41581_41672[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (24))){
var inst_41473 = (state_41572[(7)]);
var inst_41490 = (state_41572[(2)]);
var inst_41491 = cljs.core.next(inst_41473);
var inst_41453 = inst_41491;
var inst_41454 = null;
var inst_41455 = (0);
var inst_41456 = (0);
var state_41572__$1 = (function (){var statearr_41582 = state_41572;
(statearr_41582[(13)] = inst_41456);

(statearr_41582[(14)] = inst_41454);

(statearr_41582[(15)] = inst_41490);

(statearr_41582[(16)] = inst_41453);

(statearr_41582[(17)] = inst_41455);

return statearr_41582;
})();
var statearr_41583_41673 = state_41572__$1;
(statearr_41583_41673[(2)] = null);

(statearr_41583_41673[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (39))){
var state_41572__$1 = state_41572;
var statearr_41587_41674 = state_41572__$1;
(statearr_41587_41674[(2)] = null);

(statearr_41587_41674[(1)] = (41));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (4))){
var inst_41444 = (state_41572[(11)]);
var inst_41444__$1 = (state_41572[(2)]);
var inst_41445 = (inst_41444__$1 == null);
var state_41572__$1 = (function (){var statearr_41588 = state_41572;
(statearr_41588[(11)] = inst_41444__$1);

return statearr_41588;
})();
if(cljs.core.truth_(inst_41445)){
var statearr_41589_41675 = state_41572__$1;
(statearr_41589_41675[(1)] = (5));

} else {
var statearr_41590_41676 = state_41572__$1;
(statearr_41590_41676[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (15))){
var inst_41456 = (state_41572[(13)]);
var inst_41454 = (state_41572[(14)]);
var inst_41453 = (state_41572[(16)]);
var inst_41455 = (state_41572[(17)]);
var inst_41469 = (state_41572[(2)]);
var inst_41470 = (inst_41456 + (1));
var tmp41584 = inst_41454;
var tmp41585 = inst_41453;
var tmp41586 = inst_41455;
var inst_41453__$1 = tmp41585;
var inst_41454__$1 = tmp41584;
var inst_41455__$1 = tmp41586;
var inst_41456__$1 = inst_41470;
var state_41572__$1 = (function (){var statearr_41591 = state_41572;
(statearr_41591[(13)] = inst_41456__$1);

(statearr_41591[(14)] = inst_41454__$1);

(statearr_41591[(18)] = inst_41469);

(statearr_41591[(16)] = inst_41453__$1);

(statearr_41591[(17)] = inst_41455__$1);

return statearr_41591;
})();
var statearr_41592_41677 = state_41572__$1;
(statearr_41592_41677[(2)] = null);

(statearr_41592_41677[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (21))){
var inst_41494 = (state_41572[(2)]);
var state_41572__$1 = state_41572;
var statearr_41596_41678 = state_41572__$1;
(statearr_41596_41678[(2)] = inst_41494);

(statearr_41596_41678[(1)] = (18));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (31))){
var inst_41520 = (state_41572[(10)]);
var inst_41524 = done(null);
var inst_41525 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41520);
var state_41572__$1 = (function (){var statearr_41597 = state_41572;
(statearr_41597[(19)] = inst_41524);

return statearr_41597;
})();
var statearr_41598_41679 = state_41572__$1;
(statearr_41598_41679[(2)] = inst_41525);

(statearr_41598_41679[(1)] = (32));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (32))){
var inst_41515 = (state_41572[(9)]);
var inst_41512 = (state_41572[(20)]);
var inst_41514 = (state_41572[(21)]);
var inst_41513 = (state_41572[(12)]);
var inst_41527 = (state_41572[(2)]);
var inst_41528 = (inst_41515 + (1));
var tmp41593 = inst_41512;
var tmp41594 = inst_41514;
var tmp41595 = inst_41513;
var inst_41512__$1 = tmp41593;
var inst_41513__$1 = tmp41595;
var inst_41514__$1 = tmp41594;
var inst_41515__$1 = inst_41528;
var state_41572__$1 = (function (){var statearr_41599 = state_41572;
(statearr_41599[(9)] = inst_41515__$1);

(statearr_41599[(20)] = inst_41512__$1);

(statearr_41599[(22)] = inst_41527);

(statearr_41599[(21)] = inst_41514__$1);

(statearr_41599[(12)] = inst_41513__$1);

return statearr_41599;
})();
var statearr_41600_41680 = state_41572__$1;
(statearr_41600_41680[(2)] = null);

(statearr_41600_41680[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (40))){
var inst_41540 = (state_41572[(23)]);
var inst_41544 = done(null);
var inst_41545 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41540);
var state_41572__$1 = (function (){var statearr_41601 = state_41572;
(statearr_41601[(24)] = inst_41544);

return statearr_41601;
})();
var statearr_41602_41681 = state_41572__$1;
(statearr_41602_41681[(2)] = inst_41545);

(statearr_41602_41681[(1)] = (41));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (33))){
var inst_41531 = (state_41572[(25)]);
var inst_41533 = cljs.core.chunked_seq_QMARK_(inst_41531);
var state_41572__$1 = state_41572;
if(inst_41533){
var statearr_41603_41682 = state_41572__$1;
(statearr_41603_41682[(1)] = (36));

} else {
var statearr_41604_41683 = state_41572__$1;
(statearr_41604_41683[(1)] = (37));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (13))){
var inst_41463 = (state_41572[(26)]);
var inst_41466 = cljs.core.async.close_BANG_(inst_41463);
var state_41572__$1 = state_41572;
var statearr_41605_41684 = state_41572__$1;
(statearr_41605_41684[(2)] = inst_41466);

(statearr_41605_41684[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (22))){
var inst_41484 = (state_41572[(8)]);
var inst_41487 = cljs.core.async.close_BANG_(inst_41484);
var state_41572__$1 = state_41572;
var statearr_41606_41685 = state_41572__$1;
(statearr_41606_41685[(2)] = inst_41487);

(statearr_41606_41685[(1)] = (24));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (36))){
var inst_41531 = (state_41572[(25)]);
var inst_41535 = cljs.core.chunk_first(inst_41531);
var inst_41536 = cljs.core.chunk_rest(inst_41531);
var inst_41537 = cljs.core.count(inst_41535);
var inst_41512 = inst_41536;
var inst_41513 = inst_41535;
var inst_41514 = inst_41537;
var inst_41515 = (0);
var state_41572__$1 = (function (){var statearr_41607 = state_41572;
(statearr_41607[(9)] = inst_41515);

(statearr_41607[(20)] = inst_41512);

(statearr_41607[(21)] = inst_41514);

(statearr_41607[(12)] = inst_41513);

return statearr_41607;
})();
var statearr_41608_41686 = state_41572__$1;
(statearr_41608_41686[(2)] = null);

(statearr_41608_41686[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (41))){
var inst_41531 = (state_41572[(25)]);
var inst_41547 = (state_41572[(2)]);
var inst_41548 = cljs.core.next(inst_41531);
var inst_41512 = inst_41548;
var inst_41513 = null;
var inst_41514 = (0);
var inst_41515 = (0);
var state_41572__$1 = (function (){var statearr_41609 = state_41572;
(statearr_41609[(9)] = inst_41515);

(statearr_41609[(20)] = inst_41512);

(statearr_41609[(27)] = inst_41547);

(statearr_41609[(21)] = inst_41514);

(statearr_41609[(12)] = inst_41513);

return statearr_41609;
})();
var statearr_41610_41687 = state_41572__$1;
(statearr_41610_41687[(2)] = null);

(statearr_41610_41687[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (43))){
var state_41572__$1 = state_41572;
var statearr_41611_41688 = state_41572__$1;
(statearr_41611_41688[(2)] = null);

(statearr_41611_41688[(1)] = (44));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (29))){
var inst_41556 = (state_41572[(2)]);
var state_41572__$1 = state_41572;
var statearr_41612_41689 = state_41572__$1;
(statearr_41612_41689[(2)] = inst_41556);

(statearr_41612_41689[(1)] = (26));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (44))){
var inst_41565 = (state_41572[(2)]);
var state_41572__$1 = (function (){var statearr_41613 = state_41572;
(statearr_41613[(28)] = inst_41565);

return statearr_41613;
})();
var statearr_41614_41690 = state_41572__$1;
(statearr_41614_41690[(2)] = null);

(statearr_41614_41690[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (6))){
var inst_41504 = (state_41572[(29)]);
var inst_41503 = (function (){var G__41615 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41615) : cljs.core.deref.call(null,G__41615));
})();
var inst_41504__$1 = cljs.core.keys(inst_41503);
var inst_41505 = cljs.core.count(inst_41504__$1);
var inst_41506 = (function (){var G__41616 = dctr;
var G__41617 = inst_41505;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__41616,G__41617) : cljs.core.reset_BANG_.call(null,G__41616,G__41617));
})();
var inst_41511 = cljs.core.seq(inst_41504__$1);
var inst_41512 = inst_41511;
var inst_41513 = null;
var inst_41514 = (0);
var inst_41515 = (0);
var state_41572__$1 = (function (){var statearr_41618 = state_41572;
(statearr_41618[(9)] = inst_41515);

(statearr_41618[(20)] = inst_41512);

(statearr_41618[(21)] = inst_41514);

(statearr_41618[(30)] = inst_41506);

(statearr_41618[(12)] = inst_41513);

(statearr_41618[(29)] = inst_41504__$1);

return statearr_41618;
})();
var statearr_41619_41691 = state_41572__$1;
(statearr_41619_41691[(2)] = null);

(statearr_41619_41691[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (28))){
var inst_41512 = (state_41572[(20)]);
var inst_41531 = (state_41572[(25)]);
var inst_41531__$1 = cljs.core.seq(inst_41512);
var state_41572__$1 = (function (){var statearr_41620 = state_41572;
(statearr_41620[(25)] = inst_41531__$1);

return statearr_41620;
})();
if(inst_41531__$1){
var statearr_41621_41692 = state_41572__$1;
(statearr_41621_41692[(1)] = (33));

} else {
var statearr_41622_41693 = state_41572__$1;
(statearr_41622_41693[(1)] = (34));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (25))){
var inst_41515 = (state_41572[(9)]);
var inst_41514 = (state_41572[(21)]);
var inst_41517 = (inst_41515 < inst_41514);
var inst_41518 = inst_41517;
var state_41572__$1 = state_41572;
if(cljs.core.truth_(inst_41518)){
var statearr_41623_41694 = state_41572__$1;
(statearr_41623_41694[(1)] = (27));

} else {
var statearr_41624_41695 = state_41572__$1;
(statearr_41624_41695[(1)] = (28));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (34))){
var state_41572__$1 = state_41572;
var statearr_41625_41696 = state_41572__$1;
(statearr_41625_41696[(2)] = null);

(statearr_41625_41696[(1)] = (35));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (17))){
var state_41572__$1 = state_41572;
var statearr_41626_41697 = state_41572__$1;
(statearr_41626_41697[(2)] = null);

(statearr_41626_41697[(1)] = (18));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (3))){
var inst_41570 = (state_41572[(2)]);
var state_41572__$1 = state_41572;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41572__$1,inst_41570);
} else {
if((state_val_41573 === (12))){
var inst_41499 = (state_41572[(2)]);
var state_41572__$1 = state_41572;
var statearr_41627_41698 = state_41572__$1;
(statearr_41627_41698[(2)] = inst_41499);

(statearr_41627_41698[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (2))){
var state_41572__$1 = state_41572;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41572__$1,(4),ch);
} else {
if((state_val_41573 === (23))){
var state_41572__$1 = state_41572;
var statearr_41628_41699 = state_41572__$1;
(statearr_41628_41699[(2)] = null);

(statearr_41628_41699[(1)] = (24));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (35))){
var inst_41554 = (state_41572[(2)]);
var state_41572__$1 = state_41572;
var statearr_41629_41700 = state_41572__$1;
(statearr_41629_41700[(2)] = inst_41554);

(statearr_41629_41700[(1)] = (29));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (19))){
var inst_41473 = (state_41572[(7)]);
var inst_41477 = cljs.core.chunk_first(inst_41473);
var inst_41478 = cljs.core.chunk_rest(inst_41473);
var inst_41479 = cljs.core.count(inst_41477);
var inst_41453 = inst_41478;
var inst_41454 = inst_41477;
var inst_41455 = inst_41479;
var inst_41456 = (0);
var state_41572__$1 = (function (){var statearr_41630 = state_41572;
(statearr_41630[(13)] = inst_41456);

(statearr_41630[(14)] = inst_41454);

(statearr_41630[(16)] = inst_41453);

(statearr_41630[(17)] = inst_41455);

return statearr_41630;
})();
var statearr_41631_41701 = state_41572__$1;
(statearr_41631_41701[(2)] = null);

(statearr_41631_41701[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (11))){
var inst_41473 = (state_41572[(7)]);
var inst_41453 = (state_41572[(16)]);
var inst_41473__$1 = cljs.core.seq(inst_41453);
var state_41572__$1 = (function (){var statearr_41632 = state_41572;
(statearr_41632[(7)] = inst_41473__$1);

return statearr_41632;
})();
if(inst_41473__$1){
var statearr_41633_41702 = state_41572__$1;
(statearr_41633_41702[(1)] = (16));

} else {
var statearr_41634_41703 = state_41572__$1;
(statearr_41634_41703[(1)] = (17));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (9))){
var inst_41501 = (state_41572[(2)]);
var state_41572__$1 = state_41572;
var statearr_41635_41704 = state_41572__$1;
(statearr_41635_41704[(2)] = inst_41501);

(statearr_41635_41704[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (5))){
var inst_41451 = (function (){var G__41636 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41636) : cljs.core.deref.call(null,G__41636));
})();
var inst_41452 = cljs.core.seq(inst_41451);
var inst_41453 = inst_41452;
var inst_41454 = null;
var inst_41455 = (0);
var inst_41456 = (0);
var state_41572__$1 = (function (){var statearr_41637 = state_41572;
(statearr_41637[(13)] = inst_41456);

(statearr_41637[(14)] = inst_41454);

(statearr_41637[(16)] = inst_41453);

(statearr_41637[(17)] = inst_41455);

return statearr_41637;
})();
var statearr_41638_41705 = state_41572__$1;
(statearr_41638_41705[(2)] = null);

(statearr_41638_41705[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (14))){
var state_41572__$1 = state_41572;
var statearr_41639_41706 = state_41572__$1;
(statearr_41639_41706[(2)] = null);

(statearr_41639_41706[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (45))){
var inst_41562 = (state_41572[(2)]);
var state_41572__$1 = state_41572;
var statearr_41640_41707 = state_41572__$1;
(statearr_41640_41707[(2)] = inst_41562);

(statearr_41640_41707[(1)] = (44));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (26))){
var inst_41504 = (state_41572[(29)]);
var inst_41558 = (state_41572[(2)]);
var inst_41559 = cljs.core.seq(inst_41504);
var state_41572__$1 = (function (){var statearr_41641 = state_41572;
(statearr_41641[(31)] = inst_41558);

return statearr_41641;
})();
if(inst_41559){
var statearr_41642_41708 = state_41572__$1;
(statearr_41642_41708[(1)] = (42));

} else {
var statearr_41643_41709 = state_41572__$1;
(statearr_41643_41709[(1)] = (43));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (16))){
var inst_41473 = (state_41572[(7)]);
var inst_41475 = cljs.core.chunked_seq_QMARK_(inst_41473);
var state_41572__$1 = state_41572;
if(inst_41475){
var statearr_41644_41710 = state_41572__$1;
(statearr_41644_41710[(1)] = (19));

} else {
var statearr_41645_41711 = state_41572__$1;
(statearr_41645_41711[(1)] = (20));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (38))){
var inst_41551 = (state_41572[(2)]);
var state_41572__$1 = state_41572;
var statearr_41646_41712 = state_41572__$1;
(statearr_41646_41712[(2)] = inst_41551);

(statearr_41646_41712[(1)] = (35));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (30))){
var state_41572__$1 = state_41572;
var statearr_41647_41713 = state_41572__$1;
(statearr_41647_41713[(2)] = null);

(statearr_41647_41713[(1)] = (32));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (10))){
var inst_41456 = (state_41572[(13)]);
var inst_41454 = (state_41572[(14)]);
var inst_41462 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_41454,inst_41456);
var inst_41463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41462,(0),null);
var inst_41464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41462,(1),null);
var state_41572__$1 = (function (){var statearr_41648 = state_41572;
(statearr_41648[(26)] = inst_41463);

return statearr_41648;
})();
if(cljs.core.truth_(inst_41464)){
var statearr_41649_41714 = state_41572__$1;
(statearr_41649_41714[(1)] = (13));

} else {
var statearr_41650_41715 = state_41572__$1;
(statearr_41650_41715[(1)] = (14));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (18))){
var inst_41497 = (state_41572[(2)]);
var state_41572__$1 = state_41572;
var statearr_41651_41716 = state_41572__$1;
(statearr_41651_41716[(2)] = inst_41497);

(statearr_41651_41716[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (42))){
var state_41572__$1 = state_41572;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41572__$1,(45),dchan);
} else {
if((state_val_41573 === (37))){
var inst_41444 = (state_41572[(11)]);
var inst_41540 = (state_41572[(23)]);
var inst_41531 = (state_41572[(25)]);
var inst_41540__$1 = cljs.core.first(inst_41531);
var inst_41541 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41540__$1,inst_41444,done);
var state_41572__$1 = (function (){var statearr_41652 = state_41572;
(statearr_41652[(23)] = inst_41540__$1);

return statearr_41652;
})();
if(cljs.core.truth_(inst_41541)){
var statearr_41653_41717 = state_41572__$1;
(statearr_41653_41717[(1)] = (39));

} else {
var statearr_41654_41718 = state_41572__$1;
(statearr_41654_41718[(1)] = (40));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41573 === (8))){
var inst_41456 = (state_41572[(13)]);
var inst_41455 = (state_41572[(17)]);
var inst_41458 = (inst_41456 < inst_41455);
var inst_41459 = inst_41458;
var state_41572__$1 = state_41572;
if(cljs.core.truth_(inst_41459)){
var statearr_41655_41719 = state_41572__$1;
(statearr_41655_41719[(1)] = (10));

} else {
var statearr_41656_41720 = state_41572__$1;
(statearr_41656_41720[(1)] = (11));

}

return cljs.core.constant$keyword$21;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30815__auto___41666,cs,m,dchan,dctr,done))
;
return ((function (switch__30735__auto__,c__30815__auto___41666,cs,m,dchan,dctr,done){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_41660 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41660[(0)] = state_machine__30736__auto__);

(statearr_41660[(1)] = (1));

return statearr_41660;
});
var state_machine__30736__auto____1 = (function (state_41572){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_41572);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e41661){if((e41661 instanceof Object)){
var ex__30739__auto__ = e41661;
var statearr_41662_41721 = state_41572;
(statearr_41662_41721[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41572);

return cljs.core.constant$keyword$21;
} else {
throw e41661;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__41722 = state_41572;
state_41572 = G__41722;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_41572){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_41572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto___41666,cs,m,dchan,dctr,done))
})();
var state__30817__auto__ = (function (){var statearr_41663 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_41663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___41666);

return statearr_41663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto___41666,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

cljs.core.async.Mix = (function (){var obj41727 = {};
return obj41727;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__23665__auto__ = m;
if(and__23665__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__23665__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__24321__auto__ = (((m == null))?null:m);
return (function (){var or__23677__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__41731 = x__24321__auto__;
return goog.typeOf(G__41731);
})()]);
if(or__23677__auto__){
return or__23677__auto__;
} else {
var or__23677__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__23677__auto____$1){
return or__23677__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__23665__auto__ = m;
if(and__23665__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__23665__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__24321__auto__ = (((m == null))?null:m);
return (function (){var or__23677__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__41735 = x__24321__auto__;
return goog.typeOf(G__41735);
})()]);
if(or__23677__auto__){
return or__23677__auto__;
} else {
var or__23677__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__23677__auto____$1){
return or__23677__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__23665__auto__ = m;
if(and__23665__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__23665__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__24321__auto__ = (((m == null))?null:m);
return (function (){var or__23677__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__41739 = x__24321__auto__;
return goog.typeOf(G__41739);
})()]);
if(or__23677__auto__){
return or__23677__auto__;
} else {
var or__23677__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__23677__auto____$1){
return or__23677__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__23665__auto__ = m;
if(and__23665__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__23665__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__24321__auto__ = (((m == null))?null:m);
return (function (){var or__23677__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__41743 = x__24321__auto__;
return goog.typeOf(G__41743);
})()]);
if(or__23677__auto__){
return or__23677__auto__;
} else {
var or__23677__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__23677__auto____$1){
return or__23677__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__23665__auto__ = m;
if(and__23665__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__23665__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__24321__auto__ = (((m == null))?null:m);
return (function (){var or__23677__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__41747 = x__24321__auto__;
return goog.typeOf(G__41747);
})()]);
if(or__23677__auto__){
return or__23677__auto__;
} else {
var or__23677__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__23677__auto____$1){
return or__23677__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__41748){
var map__41754 = p__41748;
var map__41754__$1 = ((cljs.core.seq_QMARK_(map__41754))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41754):map__41754);
var opts = map__41754__$1;
var statearr_41755_41759 = state;
(statearr_41755_41759[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__41754,map__41754__$1,opts){
return (function (val){
var statearr_41756_41760 = state;
(statearr_41756_41760[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__41754,map__41754__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_41757_41761 = state;
(statearr_41757_41761[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__41758 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41758) : cljs.core.deref.call(null,G__41758));
})());


return cljs.core.constant$keyword$21;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__41748 = null;
if (arguments.length > 3) {
var G__41762__i = 0, G__41762__a = new Array(arguments.length -  3);
while (G__41762__i < G__41762__a.length) {G__41762__a[G__41762__i] = arguments[G__41762__i + 3]; ++G__41762__i;}
  p__41748 = new cljs.core.IndexedSeq(G__41762__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__41748);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__41763){
var state = cljs.core.first(arglist__41763);
arglist__41763 = cljs.core.next(arglist__41763);
var cont_block = cljs.core.first(arglist__41763);
arglist__41763 = cljs.core.next(arglist__41763);
var ports = cljs.core.first(arglist__41763);
var p__41748 = cljs.core.rest(arglist__41763);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__41748);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = (function (){var G__41897 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41897) : cljs.core.atom.call(null,G__41897));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$30,null,cljs.core.constant$keyword$31,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$32);
var solo_mode = (function (){var G__41898 = cljs.core.constant$keyword$31;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41898) : cljs.core.atom.call(null,G__41898));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((function (){var G__41899 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__41899) : attr.call(null,G__41899));
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (function (){var G__41900 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41900) : cljs.core.deref.call(null,G__41900));
})();
var mode = (function (){var G__41901 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41901) : cljs.core.deref.call(null,G__41901));
})();
var solos = pick(cljs.core.constant$keyword$32,chs);
var pauses = pick(cljs.core.constant$keyword$30,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$33,solos,cljs.core.constant$keyword$34,pick(cljs.core.constant$keyword$31,chs),cljs.core.constant$keyword$35,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$30)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t41902 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t41902 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41903){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta41903 = meta41903;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41902.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t41902.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41902.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41902.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__41905_42030 = self__.cs;
var G__41906_42031 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__41905_42030,G__41906_42031) : cljs.core.reset_BANG_.call(null,G__41905_42030,G__41906_42031));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41902.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41902.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__41907 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__41907) : self__.solo_modes.call(null,G__41907));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__41908_42032 = self__.solo_mode;
var G__41909_42033 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__41908_42032,G__41909_42033) : cljs.core.reset_BANG_.call(null,G__41908_42032,G__41909_42033));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41902.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t41902.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41902.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41904){
var self__ = this;
var _41904__$1 = this;
return self__.meta41903;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41904,meta41903__$1){
var self__ = this;
var _41904__$1 = this;
return (new cljs.core.async.t41902(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta41903__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41902.cljs$lang$type = true;

cljs.core.async.t41902.cljs$lang$ctorStr = "cljs.core.async/t41902";

cljs.core.async.t41902.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__24264__auto__,writer__24265__auto__,opt__24266__auto__){
return cljs.core._write(writer__24265__auto__,"cljs.core.async/t41902");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t41902 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t41902(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41903){
return (new cljs.core.async.t41902(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41903));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t41902(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30815__auto___42034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto___42034,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto___42034,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_41981){
var state_val_41982 = (state_41981[(1)]);
if((state_val_41982 === (7))){
var inst_41923 = (state_41981[(7)]);
var inst_41928 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_41923);
var state_41981__$1 = state_41981;
var statearr_41983_42035 = state_41981__$1;
(statearr_41983_42035[(2)] = inst_41928);

(statearr_41983_42035[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41982 === (20))){
var inst_41938 = (state_41981[(8)]);
var state_41981__$1 = state_41981;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41981__$1,(23),out,inst_41938);
} else {
if((state_val_41982 === (1))){
var inst_41913 = (state_41981[(9)]);
var inst_41913__$1 = calc_state();
var inst_41914 = cljs.core.seq_QMARK_(inst_41913__$1);
var state_41981__$1 = (function (){var statearr_41984 = state_41981;
(statearr_41984[(9)] = inst_41913__$1);

return statearr_41984;
})();
if(inst_41914){
var statearr_41985_42036 = state_41981__$1;
(statearr_41985_42036[(1)] = (2));

} else {
var statearr_41986_42037 = state_41981__$1;
(statearr_41986_42037[(1)] = (3));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41982 === (24))){
var inst_41931 = (state_41981[(10)]);
var inst_41923 = inst_41931;
var state_41981__$1 = (function (){var statearr_41987 = state_41981;
(statearr_41987[(7)] = inst_41923);

return statearr_41987;
})();
var statearr_41988_42038 = state_41981__$1;
(statearr_41988_42038[(2)] = null);

(statearr_41988_42038[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41982 === (4))){
var inst_41913 = (state_41981[(9)]);
var inst_41919 = (state_41981[(2)]);
var inst_41920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41919,cljs.core.constant$keyword$35);
var inst_41921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41919,cljs.core.constant$keyword$34);
var inst_41922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41919,cljs.core.constant$keyword$33);
var inst_41923 = inst_41913;
var state_41981__$1 = (function (){var statearr_41989 = state_41981;
(statearr_41989[(11)] = inst_41921);

(statearr_41989[(12)] = inst_41920);

(statearr_41989[(13)] = inst_41922);

(statearr_41989[(7)] = inst_41923);

return statearr_41989;
})();
var statearr_41990_42039 = state_41981__$1;
(statearr_41990_42039[(2)] = null);

(statearr_41990_42039[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41982 === (15))){
var state_41981__$1 = state_41981;
var statearr_41991_42040 = state_41981__$1;
(statearr_41991_42040[(2)] = null);

(statearr_41991_42040[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41982 === (21))){
var inst_41931 = (state_41981[(10)]);
var inst_41923 = inst_41931;
var state_41981__$1 = (function (){var statearr_41992 = state_41981;
(statearr_41992[(7)] = inst_41923);

return statearr_41992;
})();
var statearr_41993_42041 = state_41981__$1;
(statearr_41993_42041[(2)] = null);

(statearr_41993_42041[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41982 === (13))){
var inst_41977 = (state_41981[(2)]);
var state_41981__$1 = state_41981;
var statearr_41994_42042 = state_41981__$1;
(statearr_41994_42042[(2)] = inst_41977);

(statearr_41994_42042[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41982 === (22))){
var inst_41975 = (state_41981[(2)]);
var state_41981__$1 = state_41981;
var statearr_41995_42043 = state_41981__$1;
(statearr_41995_42043[(2)] = inst_41975);

(statearr_41995_42043[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41982 === (6))){
var inst_41979 = (state_41981[(2)]);
var state_41981__$1 = state_41981;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41981__$1,inst_41979);
} else {
if((state_val_41982 === (25))){
var state_41981__$1 = state_41981;
var statearr_41996_42044 = state_41981__$1;
(statearr_41996_42044[(2)] = null);

(statearr_41996_42044[(1)] = (26));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41982 === (17))){
var inst_41954 = (state_41981[(14)]);
var state_41981__$1 = state_41981;
var statearr_41997_42045 = state_41981__$1;
(statearr_41997_42045[(2)] = inst_41954);

(statearr_41997_42045[(1)] = (19));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41982 === (3))){
var inst_41913 = (state_41981[(9)]);
var state_41981__$1 = state_41981;
var statearr_41998_42046 = state_41981__$1;
(statearr_41998_42046[(2)] = inst_41913);

(statearr_41998_42046[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41982 === (12))){
var inst_41934 = (state_41981[(15)]);
var inst_41939 = (state_41981[(16)]);
var inst_41954 = (state_41981[(14)]);
var inst_41954__$1 = (function (){var G__41999 = inst_41939;
return (inst_41934.cljs$core$IFn$_invoke$arity$1 ? inst_41934.cljs$core$IFn$_invoke$arity$1(G__41999) : inst_41934.call(null,G__41999));
})();
var state_41981__$1 = (function (){var statearr_42000 = state_41981;
(statearr_42000[(14)] = inst_41954__$1);

return statearr_42000;
})();
if(cljs.core.truth_(inst_41954__$1)){
var statearr_42001_42047 = state_41981__$1;
(statearr_42001_42047[(1)] = (17));

} else {
var statearr_42002_42048 = state_41981__$1;
(statearr_42002_42048[(1)] = (18));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41982 === (2))){
var inst_41913 = (state_41981[(9)]);
var inst_41916 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_41913);
var state_41981__$1 = state_41981;
var statearr_42003_42049 = state_41981__$1;
(statearr_42003_42049[(2)] = inst_41916);

(statearr_42003_42049[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41982 === (23))){
var inst_41966 = (state_41981[(2)]);
var state_41981__$1 = state_41981;
if(cljs.core.truth_(inst_41966)){
var statearr_42004_42050 = state_41981__$1;
(statearr_42004_42050[(1)] = (24));

} else {
var statearr_42005_42051 = state_41981__$1;
(statearr_42005_42051[(1)] = (25));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41982 === (19))){
var inst_41963 = (state_41981[(2)]);
var state_41981__$1 = state_41981;
if(cljs.core.truth_(inst_41963)){
var statearr_42006_42052 = state_41981__$1;
(statearr_42006_42052[(1)] = (20));

} else {
var statearr_42007_42053 = state_41981__$1;
(statearr_42007_42053[(1)] = (21));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41982 === (11))){
var inst_41938 = (state_41981[(8)]);
var inst_41944 = (inst_41938 == null);
var state_41981__$1 = state_41981;
if(cljs.core.truth_(inst_41944)){
var statearr_42008_42054 = state_41981__$1;
(statearr_42008_42054[(1)] = (14));

} else {
var statearr_42009_42055 = state_41981__$1;
(statearr_42009_42055[(1)] = (15));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41982 === (9))){
var inst_41931 = (state_41981[(10)]);
var inst_41931__$1 = (state_41981[(2)]);
var inst_41932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41931__$1,cljs.core.constant$keyword$35);
var inst_41933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41931__$1,cljs.core.constant$keyword$34);
var inst_41934 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41931__$1,cljs.core.constant$keyword$33);
var state_41981__$1 = (function (){var statearr_42010 = state_41981;
(statearr_42010[(10)] = inst_41931__$1);

(statearr_42010[(15)] = inst_41934);

(statearr_42010[(17)] = inst_41933);

return statearr_42010;
})();
return cljs.core.async.ioc_alts_BANG_(state_41981__$1,(10),inst_41932);
} else {
if((state_val_41982 === (5))){
var inst_41923 = (state_41981[(7)]);
var inst_41926 = cljs.core.seq_QMARK_(inst_41923);
var state_41981__$1 = state_41981;
if(inst_41926){
var statearr_42011_42056 = state_41981__$1;
(statearr_42011_42056[(1)] = (7));

} else {
var statearr_42012_42057 = state_41981__$1;
(statearr_42012_42057[(1)] = (8));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41982 === (14))){
var inst_41939 = (state_41981[(16)]);
var inst_41946 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_41939);
var state_41981__$1 = state_41981;
var statearr_42013_42058 = state_41981__$1;
(statearr_42013_42058[(2)] = inst_41946);

(statearr_42013_42058[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41982 === (26))){
var inst_41971 = (state_41981[(2)]);
var state_41981__$1 = state_41981;
var statearr_42014_42059 = state_41981__$1;
(statearr_42014_42059[(2)] = inst_41971);

(statearr_42014_42059[(1)] = (22));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41982 === (16))){
var inst_41949 = (state_41981[(2)]);
var inst_41950 = calc_state();
var inst_41923 = inst_41950;
var state_41981__$1 = (function (){var statearr_42015 = state_41981;
(statearr_42015[(18)] = inst_41949);

(statearr_42015[(7)] = inst_41923);

return statearr_42015;
})();
var statearr_42016_42060 = state_41981__$1;
(statearr_42016_42060[(2)] = null);

(statearr_42016_42060[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41982 === (10))){
var inst_41938 = (state_41981[(8)]);
var inst_41939 = (state_41981[(16)]);
var inst_41937 = (state_41981[(2)]);
var inst_41938__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41937,(0),null);
var inst_41939__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41937,(1),null);
var inst_41940 = (inst_41938__$1 == null);
var inst_41941 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41939__$1,change);
var inst_41942 = (inst_41940) || (inst_41941);
var state_41981__$1 = (function (){var statearr_42017 = state_41981;
(statearr_42017[(8)] = inst_41938__$1);

(statearr_42017[(16)] = inst_41939__$1);

return statearr_42017;
})();
if(cljs.core.truth_(inst_41942)){
var statearr_42018_42061 = state_41981__$1;
(statearr_42018_42061[(1)] = (11));

} else {
var statearr_42019_42062 = state_41981__$1;
(statearr_42019_42062[(1)] = (12));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41982 === (18))){
var inst_41934 = (state_41981[(15)]);
var inst_41939 = (state_41981[(16)]);
var inst_41933 = (state_41981[(17)]);
var inst_41958 = cljs.core.empty_QMARK_(inst_41934);
var inst_41959 = (function (){var G__42020 = inst_41939;
return (inst_41933.cljs$core$IFn$_invoke$arity$1 ? inst_41933.cljs$core$IFn$_invoke$arity$1(G__42020) : inst_41933.call(null,G__42020));
})();
var inst_41960 = cljs.core.not(inst_41959);
var inst_41961 = (inst_41958) && (inst_41960);
var state_41981__$1 = state_41981;
var statearr_42021_42063 = state_41981__$1;
(statearr_42021_42063[(2)] = inst_41961);

(statearr_42021_42063[(1)] = (19));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41982 === (8))){
var inst_41923 = (state_41981[(7)]);
var state_41981__$1 = state_41981;
var statearr_42022_42064 = state_41981__$1;
(statearr_42022_42064[(2)] = inst_41923);

(statearr_42022_42064[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30815__auto___42034,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30735__auto__,c__30815__auto___42034,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_42026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42026[(0)] = state_machine__30736__auto__);

(statearr_42026[(1)] = (1));

return statearr_42026;
});
var state_machine__30736__auto____1 = (function (state_41981){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_41981);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e42027){if((e42027 instanceof Object)){
var ex__30739__auto__ = e42027;
var statearr_42028_42065 = state_41981;
(statearr_42028_42065[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41981);

return cljs.core.constant$keyword$21;
} else {
throw e42027;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__42066 = state_41981;
state_41981 = G__42066;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_41981){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_41981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto___42034,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30817__auto__ = (function (){var statearr_42029 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_42029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___42034);

return statearr_42029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto___42034,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

cljs.core.async.Pub = (function (){var obj42068 = {};
return obj42068;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__23665__auto__ = p;
if(and__23665__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__23665__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__24321__auto__ = (((p == null))?null:p);
return (function (){var or__23677__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__42072 = x__24321__auto__;
return goog.typeOf(G__42072);
})()]);
if(or__23677__auto__){
return or__23677__auto__;
} else {
var or__23677__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__23677__auto____$1){
return or__23677__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__23665__auto__ = p;
if(and__23665__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__23665__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__24321__auto__ = (((p == null))?null:p);
return (function (){var or__23677__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__42076 = x__24321__auto__;
return goog.typeOf(G__42076);
})()]);
if(or__23677__auto__){
return or__23677__auto__;
} else {
var or__23677__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__23677__auto____$1){
return or__23677__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__23665__auto__ = p;
if(and__23665__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__23665__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__24321__auto__ = (((p == null))?null:p);
return (function (){var or__23677__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__42082 = x__24321__auto__;
return goog.typeOf(G__42082);
})()]);
if(or__23677__auto__){
return or__23677__auto__;
} else {
var or__23677__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__23677__auto____$1){
return or__23677__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__23665__auto__ = p;
if(and__23665__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__23665__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__24321__auto__ = (((p == null))?null:p);
return (function (){var or__23677__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__42084 = x__24321__auto__;
return goog.typeOf(G__42084);
})()]);
if(or__23677__auto__){
return or__23677__auto__;
} else {
var or__23677__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__23677__auto____$1){
return or__23677__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__42223 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__42223) : cljs.core.atom.call(null,G__42223));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__23677__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__42225 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42225) : cljs.core.deref.call(null,G__42225));
})(),topic);
if(cljs.core.truth_(or__23677__auto__)){
return or__23677__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__23677__auto__,mults){
return (function (p1__42085_SHARP_){
if(cljs.core.truth_((function (){var G__42226 = topic;
return (p1__42085_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__42085_SHARP_.cljs$core$IFn$_invoke$arity$1(G__42226) : p1__42085_SHARP_.call(null,G__42226));
})())){
return p1__42085_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42085_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__42227 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__42227) : buf_fn.call(null,G__42227));
})())));
}
});})(or__23677__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t42228 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t42228 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta42229){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta42229 = meta42229;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42228.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t42228.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__42231 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__42231) : self__.ensure_mult.call(null,G__42231));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t42228.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__42232 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42232) : cljs.core.deref.call(null,G__42232));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t42228.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__42233 = self__.mults;
var G__42234 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__42233,G__42234) : cljs.core.reset_BANG_.call(null,G__42233,G__42234));
});})(mults,ensure_mult))
;

cljs.core.async.t42228.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t42228.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t42228.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t42228.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42230){
var self__ = this;
var _42230__$1 = this;
return self__.meta42229;
});})(mults,ensure_mult))
;

cljs.core.async.t42228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42230,meta42229__$1){
var self__ = this;
var _42230__$1 = this;
return (new cljs.core.async.t42228(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta42229__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t42228.cljs$lang$type = true;

cljs.core.async.t42228.cljs$lang$ctorStr = "cljs.core.async/t42228";

cljs.core.async.t42228.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__24264__auto__,writer__24265__auto__,opt__24266__auto__){
return cljs.core._write(writer__24265__auto__,"cljs.core.async/t42228");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t42228 = ((function (mults,ensure_mult){
return (function __GT_t42228(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta42229){
return (new cljs.core.async.t42228(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta42229));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t42228(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30815__auto___42357 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto___42357,mults,ensure_mult,p){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto___42357,mults,ensure_mult,p){
return (function (state_42306){
var state_val_42307 = (state_42306[(1)]);
if((state_val_42307 === (7))){
var inst_42302 = (state_42306[(2)]);
var state_42306__$1 = state_42306;
var statearr_42308_42358 = state_42306__$1;
(statearr_42308_42358[(2)] = inst_42302);

(statearr_42308_42358[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42307 === (20))){
var state_42306__$1 = state_42306;
var statearr_42309_42359 = state_42306__$1;
(statearr_42309_42359[(2)] = null);

(statearr_42309_42359[(1)] = (21));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42307 === (1))){
var state_42306__$1 = state_42306;
var statearr_42310_42360 = state_42306__$1;
(statearr_42310_42360[(2)] = null);

(statearr_42310_42360[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42307 === (24))){
var inst_42285 = (state_42306[(7)]);
var inst_42294 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_42285);
var state_42306__$1 = state_42306;
var statearr_42311_42361 = state_42306__$1;
(statearr_42311_42361[(2)] = inst_42294);

(statearr_42311_42361[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42307 === (4))){
var inst_42237 = (state_42306[(8)]);
var inst_42237__$1 = (state_42306[(2)]);
var inst_42238 = (inst_42237__$1 == null);
var state_42306__$1 = (function (){var statearr_42312 = state_42306;
(statearr_42312[(8)] = inst_42237__$1);

return statearr_42312;
})();
if(cljs.core.truth_(inst_42238)){
var statearr_42313_42362 = state_42306__$1;
(statearr_42313_42362[(1)] = (5));

} else {
var statearr_42314_42363 = state_42306__$1;
(statearr_42314_42363[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42307 === (15))){
var inst_42279 = (state_42306[(2)]);
var state_42306__$1 = state_42306;
var statearr_42315_42364 = state_42306__$1;
(statearr_42315_42364[(2)] = inst_42279);

(statearr_42315_42364[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42307 === (21))){
var inst_42299 = (state_42306[(2)]);
var state_42306__$1 = (function (){var statearr_42316 = state_42306;
(statearr_42316[(9)] = inst_42299);

return statearr_42316;
})();
var statearr_42317_42365 = state_42306__$1;
(statearr_42317_42365[(2)] = null);

(statearr_42317_42365[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42307 === (13))){
var inst_42261 = (state_42306[(10)]);
var inst_42263 = cljs.core.chunked_seq_QMARK_(inst_42261);
var state_42306__$1 = state_42306;
if(inst_42263){
var statearr_42318_42366 = state_42306__$1;
(statearr_42318_42366[(1)] = (16));

} else {
var statearr_42319_42367 = state_42306__$1;
(statearr_42319_42367[(1)] = (17));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42307 === (22))){
var inst_42291 = (state_42306[(2)]);
var state_42306__$1 = state_42306;
if(cljs.core.truth_(inst_42291)){
var statearr_42320_42368 = state_42306__$1;
(statearr_42320_42368[(1)] = (23));

} else {
var statearr_42321_42369 = state_42306__$1;
(statearr_42321_42369[(1)] = (24));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42307 === (6))){
var inst_42287 = (state_42306[(11)]);
var inst_42237 = (state_42306[(8)]);
var inst_42285 = (state_42306[(7)]);
var inst_42285__$1 = (function (){var G__42322 = inst_42237;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__42322) : topic_fn.call(null,G__42322));
})();
var inst_42286 = (function (){var G__42323 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42323) : cljs.core.deref.call(null,G__42323));
})();
var inst_42287__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42286,inst_42285__$1);
var state_42306__$1 = (function (){var statearr_42324 = state_42306;
(statearr_42324[(11)] = inst_42287__$1);

(statearr_42324[(7)] = inst_42285__$1);

return statearr_42324;
})();
if(cljs.core.truth_(inst_42287__$1)){
var statearr_42325_42370 = state_42306__$1;
(statearr_42325_42370[(1)] = (19));

} else {
var statearr_42326_42371 = state_42306__$1;
(statearr_42326_42371[(1)] = (20));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42307 === (25))){
var inst_42296 = (state_42306[(2)]);
var state_42306__$1 = state_42306;
var statearr_42327_42372 = state_42306__$1;
(statearr_42327_42372[(2)] = inst_42296);

(statearr_42327_42372[(1)] = (21));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42307 === (17))){
var inst_42261 = (state_42306[(10)]);
var inst_42270 = cljs.core.first(inst_42261);
var inst_42271 = cljs.core.async.muxch_STAR_(inst_42270);
var inst_42272 = cljs.core.async.close_BANG_(inst_42271);
var inst_42273 = cljs.core.next(inst_42261);
var inst_42247 = inst_42273;
var inst_42248 = null;
var inst_42249 = (0);
var inst_42250 = (0);
var state_42306__$1 = (function (){var statearr_42328 = state_42306;
(statearr_42328[(12)] = inst_42247);

(statearr_42328[(13)] = inst_42272);

(statearr_42328[(14)] = inst_42249);

(statearr_42328[(15)] = inst_42248);

(statearr_42328[(16)] = inst_42250);

return statearr_42328;
})();
var statearr_42329_42373 = state_42306__$1;
(statearr_42329_42373[(2)] = null);

(statearr_42329_42373[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42307 === (3))){
var inst_42304 = (state_42306[(2)]);
var state_42306__$1 = state_42306;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42306__$1,inst_42304);
} else {
if((state_val_42307 === (12))){
var inst_42281 = (state_42306[(2)]);
var state_42306__$1 = state_42306;
var statearr_42330_42374 = state_42306__$1;
(statearr_42330_42374[(2)] = inst_42281);

(statearr_42330_42374[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42307 === (2))){
var state_42306__$1 = state_42306;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42306__$1,(4),ch);
} else {
if((state_val_42307 === (23))){
var state_42306__$1 = state_42306;
var statearr_42331_42375 = state_42306__$1;
(statearr_42331_42375[(2)] = null);

(statearr_42331_42375[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42307 === (19))){
var inst_42287 = (state_42306[(11)]);
var inst_42237 = (state_42306[(8)]);
var inst_42289 = cljs.core.async.muxch_STAR_(inst_42287);
var state_42306__$1 = state_42306;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42306__$1,(22),inst_42289,inst_42237);
} else {
if((state_val_42307 === (11))){
var inst_42247 = (state_42306[(12)]);
var inst_42261 = (state_42306[(10)]);
var inst_42261__$1 = cljs.core.seq(inst_42247);
var state_42306__$1 = (function (){var statearr_42332 = state_42306;
(statearr_42332[(10)] = inst_42261__$1);

return statearr_42332;
})();
if(inst_42261__$1){
var statearr_42333_42376 = state_42306__$1;
(statearr_42333_42376[(1)] = (13));

} else {
var statearr_42334_42377 = state_42306__$1;
(statearr_42334_42377[(1)] = (14));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42307 === (9))){
var inst_42283 = (state_42306[(2)]);
var state_42306__$1 = state_42306;
var statearr_42335_42378 = state_42306__$1;
(statearr_42335_42378[(2)] = inst_42283);

(statearr_42335_42378[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42307 === (5))){
var inst_42244 = (function (){var G__42336 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42336) : cljs.core.deref.call(null,G__42336));
})();
var inst_42245 = cljs.core.vals(inst_42244);
var inst_42246 = cljs.core.seq(inst_42245);
var inst_42247 = inst_42246;
var inst_42248 = null;
var inst_42249 = (0);
var inst_42250 = (0);
var state_42306__$1 = (function (){var statearr_42337 = state_42306;
(statearr_42337[(12)] = inst_42247);

(statearr_42337[(14)] = inst_42249);

(statearr_42337[(15)] = inst_42248);

(statearr_42337[(16)] = inst_42250);

return statearr_42337;
})();
var statearr_42338_42379 = state_42306__$1;
(statearr_42338_42379[(2)] = null);

(statearr_42338_42379[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42307 === (14))){
var state_42306__$1 = state_42306;
var statearr_42342_42380 = state_42306__$1;
(statearr_42342_42380[(2)] = null);

(statearr_42342_42380[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42307 === (16))){
var inst_42261 = (state_42306[(10)]);
var inst_42265 = cljs.core.chunk_first(inst_42261);
var inst_42266 = cljs.core.chunk_rest(inst_42261);
var inst_42267 = cljs.core.count(inst_42265);
var inst_42247 = inst_42266;
var inst_42248 = inst_42265;
var inst_42249 = inst_42267;
var inst_42250 = (0);
var state_42306__$1 = (function (){var statearr_42343 = state_42306;
(statearr_42343[(12)] = inst_42247);

(statearr_42343[(14)] = inst_42249);

(statearr_42343[(15)] = inst_42248);

(statearr_42343[(16)] = inst_42250);

return statearr_42343;
})();
var statearr_42344_42381 = state_42306__$1;
(statearr_42344_42381[(2)] = null);

(statearr_42344_42381[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42307 === (10))){
var inst_42247 = (state_42306[(12)]);
var inst_42249 = (state_42306[(14)]);
var inst_42248 = (state_42306[(15)]);
var inst_42250 = (state_42306[(16)]);
var inst_42255 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_42248,inst_42250);
var inst_42256 = cljs.core.async.muxch_STAR_(inst_42255);
var inst_42257 = cljs.core.async.close_BANG_(inst_42256);
var inst_42258 = (inst_42250 + (1));
var tmp42339 = inst_42247;
var tmp42340 = inst_42249;
var tmp42341 = inst_42248;
var inst_42247__$1 = tmp42339;
var inst_42248__$1 = tmp42341;
var inst_42249__$1 = tmp42340;
var inst_42250__$1 = inst_42258;
var state_42306__$1 = (function (){var statearr_42345 = state_42306;
(statearr_42345[(12)] = inst_42247__$1);

(statearr_42345[(17)] = inst_42257);

(statearr_42345[(14)] = inst_42249__$1);

(statearr_42345[(15)] = inst_42248__$1);

(statearr_42345[(16)] = inst_42250__$1);

return statearr_42345;
})();
var statearr_42346_42382 = state_42306__$1;
(statearr_42346_42382[(2)] = null);

(statearr_42346_42382[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42307 === (18))){
var inst_42276 = (state_42306[(2)]);
var state_42306__$1 = state_42306;
var statearr_42347_42383 = state_42306__$1;
(statearr_42347_42383[(2)] = inst_42276);

(statearr_42347_42383[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42307 === (8))){
var inst_42249 = (state_42306[(14)]);
var inst_42250 = (state_42306[(16)]);
var inst_42252 = (inst_42250 < inst_42249);
var inst_42253 = inst_42252;
var state_42306__$1 = state_42306;
if(cljs.core.truth_(inst_42253)){
var statearr_42348_42384 = state_42306__$1;
(statearr_42348_42384[(1)] = (10));

} else {
var statearr_42349_42385 = state_42306__$1;
(statearr_42349_42385[(1)] = (11));

}

return cljs.core.constant$keyword$21;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30815__auto___42357,mults,ensure_mult,p))
;
return ((function (switch__30735__auto__,c__30815__auto___42357,mults,ensure_mult,p){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_42353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42353[(0)] = state_machine__30736__auto__);

(statearr_42353[(1)] = (1));

return statearr_42353;
});
var state_machine__30736__auto____1 = (function (state_42306){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_42306);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e42354){if((e42354 instanceof Object)){
var ex__30739__auto__ = e42354;
var statearr_42355_42386 = state_42306;
(statearr_42355_42386[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42306);

return cljs.core.constant$keyword$21;
} else {
throw e42354;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__42387 = state_42306;
state_42306 = G__42387;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_42306){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_42306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto___42357,mults,ensure_mult,p))
})();
var state__30817__auto__ = (function (){var statearr_42356 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_42356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___42357);

return statearr_42356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto___42357,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__42468 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__42468) : cljs.core.atom.call(null,G__42468));
})();
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30815__auto___42541 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto___42541,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto___42541,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42507){
var state_val_42508 = (state_42507[(1)]);
if((state_val_42508 === (7))){
var state_42507__$1 = state_42507;
var statearr_42509_42542 = state_42507__$1;
(statearr_42509_42542[(2)] = null);

(statearr_42509_42542[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42508 === (1))){
var state_42507__$1 = state_42507;
var statearr_42510_42543 = state_42507__$1;
(statearr_42510_42543[(2)] = null);

(statearr_42510_42543[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42508 === (4))){
var inst_42471 = (state_42507[(7)]);
var inst_42473 = (inst_42471 < cnt);
var state_42507__$1 = state_42507;
if(cljs.core.truth_(inst_42473)){
var statearr_42511_42544 = state_42507__$1;
(statearr_42511_42544[(1)] = (6));

} else {
var statearr_42512_42545 = state_42507__$1;
(statearr_42512_42545[(1)] = (7));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42508 === (15))){
var inst_42503 = (state_42507[(2)]);
var state_42507__$1 = state_42507;
var statearr_42513_42546 = state_42507__$1;
(statearr_42513_42546[(2)] = inst_42503);

(statearr_42513_42546[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42508 === (13))){
var inst_42496 = cljs.core.async.close_BANG_(out);
var state_42507__$1 = state_42507;
var statearr_42514_42547 = state_42507__$1;
(statearr_42514_42547[(2)] = inst_42496);

(statearr_42514_42547[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42508 === (6))){
var state_42507__$1 = state_42507;
var statearr_42515_42548 = state_42507__$1;
(statearr_42515_42548[(2)] = null);

(statearr_42515_42548[(1)] = (11));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42508 === (3))){
var inst_42505 = (state_42507[(2)]);
var state_42507__$1 = state_42507;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42507__$1,inst_42505);
} else {
if((state_val_42508 === (12))){
var inst_42493 = (state_42507[(8)]);
var inst_42493__$1 = (state_42507[(2)]);
var inst_42494 = cljs.core.some(cljs.core.nil_QMARK_,inst_42493__$1);
var state_42507__$1 = (function (){var statearr_42516 = state_42507;
(statearr_42516[(8)] = inst_42493__$1);

return statearr_42516;
})();
if(cljs.core.truth_(inst_42494)){
var statearr_42517_42549 = state_42507__$1;
(statearr_42517_42549[(1)] = (13));

} else {
var statearr_42518_42550 = state_42507__$1;
(statearr_42518_42550[(1)] = (14));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42508 === (2))){
var inst_42470 = (function (){var G__42519 = dctr;
var G__42520 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__42519,G__42520) : cljs.core.reset_BANG_.call(null,G__42519,G__42520));
})();
var inst_42471 = (0);
var state_42507__$1 = (function (){var statearr_42521 = state_42507;
(statearr_42521[(7)] = inst_42471);

(statearr_42521[(9)] = inst_42470);

return statearr_42521;
})();
var statearr_42522_42551 = state_42507__$1;
(statearr_42522_42551[(2)] = null);

(statearr_42522_42551[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42508 === (11))){
var inst_42471 = (state_42507[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_42507,(10),Object,null,(9));
var inst_42480 = (function (){var G__42523 = inst_42471;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__42523) : chs__$1.call(null,G__42523));
})();
var inst_42481 = (function (){var G__42524 = inst_42471;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__42524) : done.call(null,G__42524));
})();
var inst_42482 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_42480,inst_42481);
var state_42507__$1 = state_42507;
var statearr_42525_42552 = state_42507__$1;
(statearr_42525_42552[(2)] = inst_42482);


cljs.core.async.impl.ioc_helpers.process_exception(state_42507__$1);

return cljs.core.constant$keyword$21;
} else {
if((state_val_42508 === (9))){
var inst_42471 = (state_42507[(7)]);
var inst_42484 = (state_42507[(2)]);
var inst_42485 = (inst_42471 + (1));
var inst_42471__$1 = inst_42485;
var state_42507__$1 = (function (){var statearr_42526 = state_42507;
(statearr_42526[(7)] = inst_42471__$1);

(statearr_42526[(10)] = inst_42484);

return statearr_42526;
})();
var statearr_42527_42553 = state_42507__$1;
(statearr_42527_42553[(2)] = null);

(statearr_42527_42553[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42508 === (5))){
var inst_42491 = (state_42507[(2)]);
var state_42507__$1 = (function (){var statearr_42528 = state_42507;
(statearr_42528[(11)] = inst_42491);

return statearr_42528;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42507__$1,(12),dchan);
} else {
if((state_val_42508 === (14))){
var inst_42493 = (state_42507[(8)]);
var inst_42498 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_42493);
var state_42507__$1 = state_42507;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42507__$1,(16),out,inst_42498);
} else {
if((state_val_42508 === (16))){
var inst_42500 = (state_42507[(2)]);
var state_42507__$1 = (function (){var statearr_42529 = state_42507;
(statearr_42529[(12)] = inst_42500);

return statearr_42529;
})();
var statearr_42530_42554 = state_42507__$1;
(statearr_42530_42554[(2)] = null);

(statearr_42530_42554[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42508 === (10))){
var inst_42475 = (state_42507[(2)]);
var inst_42476 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_42507__$1 = (function (){var statearr_42531 = state_42507;
(statearr_42531[(13)] = inst_42475);

return statearr_42531;
})();
var statearr_42532_42555 = state_42507__$1;
(statearr_42532_42555[(2)] = inst_42476);


cljs.core.async.impl.ioc_helpers.process_exception(state_42507__$1);

return cljs.core.constant$keyword$21;
} else {
if((state_val_42508 === (8))){
var inst_42489 = (state_42507[(2)]);
var state_42507__$1 = state_42507;
var statearr_42533_42556 = state_42507__$1;
(statearr_42533_42556[(2)] = inst_42489);

(statearr_42533_42556[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30815__auto___42541,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30735__auto__,c__30815__auto___42541,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_42537 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42537[(0)] = state_machine__30736__auto__);

(statearr_42537[(1)] = (1));

return statearr_42537;
});
var state_machine__30736__auto____1 = (function (state_42507){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_42507);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e42538){if((e42538 instanceof Object)){
var ex__30739__auto__ = e42538;
var statearr_42539_42557 = state_42507;
(statearr_42539_42557[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42507);

return cljs.core.constant$keyword$21;
} else {
throw e42538;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__42558 = state_42507;
state_42507 = G__42558;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_42507){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_42507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto___42541,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30817__auto__ = (function (){var statearr_42540 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_42540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___42541);

return statearr_42540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto___42541,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30815__auto___42668 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto___42668,out){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto___42668,out){
return (function (state_42644){
var state_val_42645 = (state_42644[(1)]);
if((state_val_42645 === (7))){
var inst_42623 = (state_42644[(7)]);
var inst_42624 = (state_42644[(8)]);
var inst_42623__$1 = (state_42644[(2)]);
var inst_42624__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42623__$1,(0),null);
var inst_42625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42623__$1,(1),null);
var inst_42626 = (inst_42624__$1 == null);
var state_42644__$1 = (function (){var statearr_42646 = state_42644;
(statearr_42646[(7)] = inst_42623__$1);

(statearr_42646[(8)] = inst_42624__$1);

(statearr_42646[(9)] = inst_42625);

return statearr_42646;
})();
if(cljs.core.truth_(inst_42626)){
var statearr_42647_42669 = state_42644__$1;
(statearr_42647_42669[(1)] = (8));

} else {
var statearr_42648_42670 = state_42644__$1;
(statearr_42648_42670[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42645 === (1))){
var inst_42615 = cljs.core.vec(chs);
var inst_42616 = inst_42615;
var state_42644__$1 = (function (){var statearr_42649 = state_42644;
(statearr_42649[(10)] = inst_42616);

return statearr_42649;
})();
var statearr_42650_42671 = state_42644__$1;
(statearr_42650_42671[(2)] = null);

(statearr_42650_42671[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42645 === (4))){
var inst_42616 = (state_42644[(10)]);
var state_42644__$1 = state_42644;
return cljs.core.async.ioc_alts_BANG_(state_42644__$1,(7),inst_42616);
} else {
if((state_val_42645 === (6))){
var inst_42640 = (state_42644[(2)]);
var state_42644__$1 = state_42644;
var statearr_42651_42672 = state_42644__$1;
(statearr_42651_42672[(2)] = inst_42640);

(statearr_42651_42672[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42645 === (3))){
var inst_42642 = (state_42644[(2)]);
var state_42644__$1 = state_42644;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42644__$1,inst_42642);
} else {
if((state_val_42645 === (2))){
var inst_42616 = (state_42644[(10)]);
var inst_42618 = cljs.core.count(inst_42616);
var inst_42619 = (inst_42618 > (0));
var state_42644__$1 = state_42644;
if(cljs.core.truth_(inst_42619)){
var statearr_42653_42673 = state_42644__$1;
(statearr_42653_42673[(1)] = (4));

} else {
var statearr_42654_42674 = state_42644__$1;
(statearr_42654_42674[(1)] = (5));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42645 === (11))){
var inst_42616 = (state_42644[(10)]);
var inst_42633 = (state_42644[(2)]);
var tmp42652 = inst_42616;
var inst_42616__$1 = tmp42652;
var state_42644__$1 = (function (){var statearr_42655 = state_42644;
(statearr_42655[(11)] = inst_42633);

(statearr_42655[(10)] = inst_42616__$1);

return statearr_42655;
})();
var statearr_42656_42675 = state_42644__$1;
(statearr_42656_42675[(2)] = null);

(statearr_42656_42675[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42645 === (9))){
var inst_42624 = (state_42644[(8)]);
var state_42644__$1 = state_42644;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42644__$1,(11),out,inst_42624);
} else {
if((state_val_42645 === (5))){
var inst_42638 = cljs.core.async.close_BANG_(out);
var state_42644__$1 = state_42644;
var statearr_42657_42676 = state_42644__$1;
(statearr_42657_42676[(2)] = inst_42638);

(statearr_42657_42676[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42645 === (10))){
var inst_42636 = (state_42644[(2)]);
var state_42644__$1 = state_42644;
var statearr_42658_42677 = state_42644__$1;
(statearr_42658_42677[(2)] = inst_42636);

(statearr_42658_42677[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42645 === (8))){
var inst_42623 = (state_42644[(7)]);
var inst_42624 = (state_42644[(8)]);
var inst_42616 = (state_42644[(10)]);
var inst_42625 = (state_42644[(9)]);
var inst_42628 = (function (){var c = inst_42625;
var v = inst_42624;
var vec__42621 = inst_42623;
var cs = inst_42616;
return ((function (c,v,vec__42621,cs,inst_42623,inst_42624,inst_42616,inst_42625,state_val_42645,c__30815__auto___42668,out){
return (function (p1__42559_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__42559_SHARP_);
});
;})(c,v,vec__42621,cs,inst_42623,inst_42624,inst_42616,inst_42625,state_val_42645,c__30815__auto___42668,out))
})();
var inst_42629 = cljs.core.filterv(inst_42628,inst_42616);
var inst_42616__$1 = inst_42629;
var state_42644__$1 = (function (){var statearr_42659 = state_42644;
(statearr_42659[(10)] = inst_42616__$1);

return statearr_42659;
})();
var statearr_42660_42678 = state_42644__$1;
(statearr_42660_42678[(2)] = null);

(statearr_42660_42678[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30815__auto___42668,out))
;
return ((function (switch__30735__auto__,c__30815__auto___42668,out){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_42664 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42664[(0)] = state_machine__30736__auto__);

(statearr_42664[(1)] = (1));

return statearr_42664;
});
var state_machine__30736__auto____1 = (function (state_42644){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_42644);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e42665){if((e42665 instanceof Object)){
var ex__30739__auto__ = e42665;
var statearr_42666_42679 = state_42644;
(statearr_42666_42679[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42644);

return cljs.core.constant$keyword$21;
} else {
throw e42665;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__42680 = state_42644;
state_42644 = G__42680;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_42644){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_42644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto___42668,out))
})();
var state__30817__auto__ = (function (){var statearr_42667 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_42667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___42668);

return statearr_42667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto___42668,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30815__auto___42776 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto___42776,out){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto___42776,out){
return (function (state_42753){
var state_val_42754 = (state_42753[(1)]);
if((state_val_42754 === (7))){
var inst_42735 = (state_42753[(7)]);
var inst_42735__$1 = (state_42753[(2)]);
var inst_42736 = (inst_42735__$1 == null);
var inst_42737 = cljs.core.not(inst_42736);
var state_42753__$1 = (function (){var statearr_42755 = state_42753;
(statearr_42755[(7)] = inst_42735__$1);

return statearr_42755;
})();
if(inst_42737){
var statearr_42756_42777 = state_42753__$1;
(statearr_42756_42777[(1)] = (8));

} else {
var statearr_42757_42778 = state_42753__$1;
(statearr_42757_42778[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42754 === (1))){
var inst_42730 = (0);
var state_42753__$1 = (function (){var statearr_42758 = state_42753;
(statearr_42758[(8)] = inst_42730);

return statearr_42758;
})();
var statearr_42759_42779 = state_42753__$1;
(statearr_42759_42779[(2)] = null);

(statearr_42759_42779[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42754 === (4))){
var state_42753__$1 = state_42753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42753__$1,(7),ch);
} else {
if((state_val_42754 === (6))){
var inst_42748 = (state_42753[(2)]);
var state_42753__$1 = state_42753;
var statearr_42760_42780 = state_42753__$1;
(statearr_42760_42780[(2)] = inst_42748);

(statearr_42760_42780[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42754 === (3))){
var inst_42750 = (state_42753[(2)]);
var inst_42751 = cljs.core.async.close_BANG_(out);
var state_42753__$1 = (function (){var statearr_42761 = state_42753;
(statearr_42761[(9)] = inst_42750);

return statearr_42761;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42753__$1,inst_42751);
} else {
if((state_val_42754 === (2))){
var inst_42730 = (state_42753[(8)]);
var inst_42732 = (inst_42730 < n);
var state_42753__$1 = state_42753;
if(cljs.core.truth_(inst_42732)){
var statearr_42762_42781 = state_42753__$1;
(statearr_42762_42781[(1)] = (4));

} else {
var statearr_42763_42782 = state_42753__$1;
(statearr_42763_42782[(1)] = (5));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42754 === (11))){
var inst_42730 = (state_42753[(8)]);
var inst_42740 = (state_42753[(2)]);
var inst_42741 = (inst_42730 + (1));
var inst_42730__$1 = inst_42741;
var state_42753__$1 = (function (){var statearr_42764 = state_42753;
(statearr_42764[(8)] = inst_42730__$1);

(statearr_42764[(10)] = inst_42740);

return statearr_42764;
})();
var statearr_42765_42783 = state_42753__$1;
(statearr_42765_42783[(2)] = null);

(statearr_42765_42783[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42754 === (9))){
var state_42753__$1 = state_42753;
var statearr_42766_42784 = state_42753__$1;
(statearr_42766_42784[(2)] = null);

(statearr_42766_42784[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42754 === (5))){
var state_42753__$1 = state_42753;
var statearr_42767_42785 = state_42753__$1;
(statearr_42767_42785[(2)] = null);

(statearr_42767_42785[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42754 === (10))){
var inst_42745 = (state_42753[(2)]);
var state_42753__$1 = state_42753;
var statearr_42768_42786 = state_42753__$1;
(statearr_42768_42786[(2)] = inst_42745);

(statearr_42768_42786[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42754 === (8))){
var inst_42735 = (state_42753[(7)]);
var state_42753__$1 = state_42753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42753__$1,(11),out,inst_42735);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30815__auto___42776,out))
;
return ((function (switch__30735__auto__,c__30815__auto___42776,out){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_42772 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42772[(0)] = state_machine__30736__auto__);

(statearr_42772[(1)] = (1));

return statearr_42772;
});
var state_machine__30736__auto____1 = (function (state_42753){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_42753);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e42773){if((e42773 instanceof Object)){
var ex__30739__auto__ = e42773;
var statearr_42774_42787 = state_42753;
(statearr_42774_42787[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42753);

return cljs.core.constant$keyword$21;
} else {
throw e42773;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__42788 = state_42753;
state_42753 = G__42788;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_42753){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_42753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto___42776,out))
})();
var state__30817__auto__ = (function (){var statearr_42775 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_42775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___42776);

return statearr_42775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto___42776,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t42801 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t42801 = (function (ch,f,map_LT_,meta42802){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta42802 = meta42802;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42801.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t42801.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t42801.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t42801.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t42804 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t42804 = (function (fn1,_,meta42802,map_LT_,f,ch,meta42805){
this.fn1 = fn1;
this._ = _;
this.meta42802 = meta42802;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta42805 = meta42805;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42804.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t42804.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t42804.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__42789_SHARP_){
var G__42807 = (((p1__42789_SHARP_ == null))?null:(function (){var G__42808 = p1__42789_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__42808) : self__.f.call(null,G__42808));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__42807) : f1.call(null,G__42807));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t42804.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_42806){
var self__ = this;
var _42806__$1 = this;
return self__.meta42805;
});})(___$1))
;

cljs.core.async.t42804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_42806,meta42805__$1){
var self__ = this;
var _42806__$1 = this;
return (new cljs.core.async.t42804(self__.fn1,self__._,self__.meta42802,self__.map_LT_,self__.f,self__.ch,meta42805__$1));
});})(___$1))
;

cljs.core.async.t42804.cljs$lang$type = true;

cljs.core.async.t42804.cljs$lang$ctorStr = "cljs.core.async/t42804";

cljs.core.async.t42804.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__24264__auto__,writer__24265__auto__,opt__24266__auto__){
return cljs.core._write(writer__24265__auto__,"cljs.core.async/t42804");
});})(___$1))
;

cljs.core.async.__GT_t42804 = ((function (___$1){
return (function __GT_t42804(fn1__$1,___$2,meta42802__$1,map_LT___$1,f__$1,ch__$1,meta42805){
return (new cljs.core.async.t42804(fn1__$1,___$2,meta42802__$1,map_LT___$1,f__$1,ch__$1,meta42805));
});})(___$1))
;

}

return (new cljs.core.async.t42804(fn1,___$1,self__.meta42802,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__23665__auto__ = ret;
if(cljs.core.truth_(and__23665__auto__)){
return !(((function (){var G__42809 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42809) : cljs.core.deref.call(null,G__42809));
})() == null));
} else {
return and__23665__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__42810 = (function (){var G__42811 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42811) : cljs.core.deref.call(null,G__42811));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__42810) : self__.f.call(null,G__42810));
})());
} else {
return ret;
}
});

cljs.core.async.t42801.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t42801.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t42801.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t42801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42803){
var self__ = this;
var _42803__$1 = this;
return self__.meta42802;
});

cljs.core.async.t42801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42803,meta42802__$1){
var self__ = this;
var _42803__$1 = this;
return (new cljs.core.async.t42801(self__.ch,self__.f,self__.map_LT_,meta42802__$1));
});

cljs.core.async.t42801.cljs$lang$type = true;

cljs.core.async.t42801.cljs$lang$ctorStr = "cljs.core.async/t42801";

cljs.core.async.t42801.cljs$lang$ctorPrWriter = (function (this__24264__auto__,writer__24265__auto__,opt__24266__auto__){
return cljs.core._write(writer__24265__auto__,"cljs.core.async/t42801");
});

cljs.core.async.__GT_t42801 = (function __GT_t42801(ch__$1,f__$1,map_LT___$1,meta42802){
return (new cljs.core.async.t42801(ch__$1,f__$1,map_LT___$1,meta42802));
});

}

return (new cljs.core.async.t42801(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t42816 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t42816 = (function (ch,f,map_GT_,meta42817){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta42817 = meta42817;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42816.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t42816.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__42819 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__42819) : self__.f.call(null,G__42819));
})(),fn1);
});

cljs.core.async.t42816.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t42816.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t42816.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t42816.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t42816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42818){
var self__ = this;
var _42818__$1 = this;
return self__.meta42817;
});

cljs.core.async.t42816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42818,meta42817__$1){
var self__ = this;
var _42818__$1 = this;
return (new cljs.core.async.t42816(self__.ch,self__.f,self__.map_GT_,meta42817__$1));
});

cljs.core.async.t42816.cljs$lang$type = true;

cljs.core.async.t42816.cljs$lang$ctorStr = "cljs.core.async/t42816";

cljs.core.async.t42816.cljs$lang$ctorPrWriter = (function (this__24264__auto__,writer__24265__auto__,opt__24266__auto__){
return cljs.core._write(writer__24265__auto__,"cljs.core.async/t42816");
});

cljs.core.async.__GT_t42816 = (function __GT_t42816(ch__$1,f__$1,map_GT___$1,meta42817){
return (new cljs.core.async.t42816(ch__$1,f__$1,map_GT___$1,meta42817));
});

}

return (new cljs.core.async.t42816(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t42824 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t42824 = (function (ch,p,filter_GT_,meta42825){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta42825 = meta42825;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42824.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t42824.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__42827 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__42827) : self__.p.call(null,G__42827));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t42824.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t42824.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t42824.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t42824.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t42824.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t42824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42826){
var self__ = this;
var _42826__$1 = this;
return self__.meta42825;
});

cljs.core.async.t42824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42826,meta42825__$1){
var self__ = this;
var _42826__$1 = this;
return (new cljs.core.async.t42824(self__.ch,self__.p,self__.filter_GT_,meta42825__$1));
});

cljs.core.async.t42824.cljs$lang$type = true;

cljs.core.async.t42824.cljs$lang$ctorStr = "cljs.core.async/t42824";

cljs.core.async.t42824.cljs$lang$ctorPrWriter = (function (this__24264__auto__,writer__24265__auto__,opt__24266__auto__){
return cljs.core._write(writer__24265__auto__,"cljs.core.async/t42824");
});

cljs.core.async.__GT_t42824 = (function __GT_t42824(ch__$1,p__$1,filter_GT___$1,meta42825){
return (new cljs.core.async.t42824(ch__$1,p__$1,filter_GT___$1,meta42825));
});

}

return (new cljs.core.async.t42824(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30815__auto___42915 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto___42915,out){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto___42915,out){
return (function (state_42893){
var state_val_42894 = (state_42893[(1)]);
if((state_val_42894 === (7))){
var inst_42889 = (state_42893[(2)]);
var state_42893__$1 = state_42893;
var statearr_42895_42916 = state_42893__$1;
(statearr_42895_42916[(2)] = inst_42889);

(statearr_42895_42916[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42894 === (1))){
var state_42893__$1 = state_42893;
var statearr_42896_42917 = state_42893__$1;
(statearr_42896_42917[(2)] = null);

(statearr_42896_42917[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42894 === (4))){
var inst_42875 = (state_42893[(7)]);
var inst_42875__$1 = (state_42893[(2)]);
var inst_42876 = (inst_42875__$1 == null);
var state_42893__$1 = (function (){var statearr_42897 = state_42893;
(statearr_42897[(7)] = inst_42875__$1);

return statearr_42897;
})();
if(cljs.core.truth_(inst_42876)){
var statearr_42898_42918 = state_42893__$1;
(statearr_42898_42918[(1)] = (5));

} else {
var statearr_42899_42919 = state_42893__$1;
(statearr_42899_42919[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42894 === (6))){
var inst_42875 = (state_42893[(7)]);
var inst_42880 = (function (){var G__42900 = inst_42875;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__42900) : p.call(null,G__42900));
})();
var state_42893__$1 = state_42893;
if(cljs.core.truth_(inst_42880)){
var statearr_42901_42920 = state_42893__$1;
(statearr_42901_42920[(1)] = (8));

} else {
var statearr_42902_42921 = state_42893__$1;
(statearr_42902_42921[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42894 === (3))){
var inst_42891 = (state_42893[(2)]);
var state_42893__$1 = state_42893;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42893__$1,inst_42891);
} else {
if((state_val_42894 === (2))){
var state_42893__$1 = state_42893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42893__$1,(4),ch);
} else {
if((state_val_42894 === (11))){
var inst_42883 = (state_42893[(2)]);
var state_42893__$1 = state_42893;
var statearr_42903_42922 = state_42893__$1;
(statearr_42903_42922[(2)] = inst_42883);

(statearr_42903_42922[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42894 === (9))){
var state_42893__$1 = state_42893;
var statearr_42904_42923 = state_42893__$1;
(statearr_42904_42923[(2)] = null);

(statearr_42904_42923[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42894 === (5))){
var inst_42878 = cljs.core.async.close_BANG_(out);
var state_42893__$1 = state_42893;
var statearr_42905_42924 = state_42893__$1;
(statearr_42905_42924[(2)] = inst_42878);

(statearr_42905_42924[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42894 === (10))){
var inst_42886 = (state_42893[(2)]);
var state_42893__$1 = (function (){var statearr_42906 = state_42893;
(statearr_42906[(8)] = inst_42886);

return statearr_42906;
})();
var statearr_42907_42925 = state_42893__$1;
(statearr_42907_42925[(2)] = null);

(statearr_42907_42925[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42894 === (8))){
var inst_42875 = (state_42893[(7)]);
var state_42893__$1 = state_42893;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42893__$1,(11),out,inst_42875);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30815__auto___42915,out))
;
return ((function (switch__30735__auto__,c__30815__auto___42915,out){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_42911 = [null,null,null,null,null,null,null,null,null];
(statearr_42911[(0)] = state_machine__30736__auto__);

(statearr_42911[(1)] = (1));

return statearr_42911;
});
var state_machine__30736__auto____1 = (function (state_42893){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_42893);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e42912){if((e42912 instanceof Object)){
var ex__30739__auto__ = e42912;
var statearr_42913_42926 = state_42893;
(statearr_42913_42926[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42893);

return cljs.core.constant$keyword$21;
} else {
throw e42912;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__42927 = state_42893;
state_42893 = G__42927;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_42893){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_42893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto___42915,out))
})();
var state__30817__auto__ = (function (){var statearr_42914 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_42914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___42915);

return statearr_42914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto___42915,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__30815__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto__){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto__){
return (function (state_43097){
var state_val_43098 = (state_43097[(1)]);
if((state_val_43098 === (7))){
var inst_43093 = (state_43097[(2)]);
var state_43097__$1 = state_43097;
var statearr_43099_43141 = state_43097__$1;
(statearr_43099_43141[(2)] = inst_43093);

(statearr_43099_43141[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43098 === (20))){
var inst_43063 = (state_43097[(7)]);
var inst_43074 = (state_43097[(2)]);
var inst_43075 = cljs.core.next(inst_43063);
var inst_43049 = inst_43075;
var inst_43050 = null;
var inst_43051 = (0);
var inst_43052 = (0);
var state_43097__$1 = (function (){var statearr_43100 = state_43097;
(statearr_43100[(8)] = inst_43052);

(statearr_43100[(9)] = inst_43051);

(statearr_43100[(10)] = inst_43050);

(statearr_43100[(11)] = inst_43074);

(statearr_43100[(12)] = inst_43049);

return statearr_43100;
})();
var statearr_43101_43142 = state_43097__$1;
(statearr_43101_43142[(2)] = null);

(statearr_43101_43142[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43098 === (1))){
var state_43097__$1 = state_43097;
var statearr_43102_43143 = state_43097__$1;
(statearr_43102_43143[(2)] = null);

(statearr_43102_43143[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43098 === (4))){
var inst_43038 = (state_43097[(13)]);
var inst_43038__$1 = (state_43097[(2)]);
var inst_43039 = (inst_43038__$1 == null);
var state_43097__$1 = (function (){var statearr_43103 = state_43097;
(statearr_43103[(13)] = inst_43038__$1);

return statearr_43103;
})();
if(cljs.core.truth_(inst_43039)){
var statearr_43104_43144 = state_43097__$1;
(statearr_43104_43144[(1)] = (5));

} else {
var statearr_43105_43145 = state_43097__$1;
(statearr_43105_43145[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43098 === (15))){
var state_43097__$1 = state_43097;
var statearr_43109_43146 = state_43097__$1;
(statearr_43109_43146[(2)] = null);

(statearr_43109_43146[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43098 === (21))){
var state_43097__$1 = state_43097;
var statearr_43110_43147 = state_43097__$1;
(statearr_43110_43147[(2)] = null);

(statearr_43110_43147[(1)] = (23));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43098 === (13))){
var inst_43052 = (state_43097[(8)]);
var inst_43051 = (state_43097[(9)]);
var inst_43050 = (state_43097[(10)]);
var inst_43049 = (state_43097[(12)]);
var inst_43059 = (state_43097[(2)]);
var inst_43060 = (inst_43052 + (1));
var tmp43106 = inst_43051;
var tmp43107 = inst_43050;
var tmp43108 = inst_43049;
var inst_43049__$1 = tmp43108;
var inst_43050__$1 = tmp43107;
var inst_43051__$1 = tmp43106;
var inst_43052__$1 = inst_43060;
var state_43097__$1 = (function (){var statearr_43111 = state_43097;
(statearr_43111[(8)] = inst_43052__$1);

(statearr_43111[(9)] = inst_43051__$1);

(statearr_43111[(10)] = inst_43050__$1);

(statearr_43111[(12)] = inst_43049__$1);

(statearr_43111[(14)] = inst_43059);

return statearr_43111;
})();
var statearr_43112_43148 = state_43097__$1;
(statearr_43112_43148[(2)] = null);

(statearr_43112_43148[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43098 === (22))){
var state_43097__$1 = state_43097;
var statearr_43113_43149 = state_43097__$1;
(statearr_43113_43149[(2)] = null);

(statearr_43113_43149[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43098 === (6))){
var inst_43038 = (state_43097[(13)]);
var inst_43047 = (function (){var G__43114 = inst_43038;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__43114) : f.call(null,G__43114));
})();
var inst_43048 = cljs.core.seq(inst_43047);
var inst_43049 = inst_43048;
var inst_43050 = null;
var inst_43051 = (0);
var inst_43052 = (0);
var state_43097__$1 = (function (){var statearr_43115 = state_43097;
(statearr_43115[(8)] = inst_43052);

(statearr_43115[(9)] = inst_43051);

(statearr_43115[(10)] = inst_43050);

(statearr_43115[(12)] = inst_43049);

return statearr_43115;
})();
var statearr_43116_43150 = state_43097__$1;
(statearr_43116_43150[(2)] = null);

(statearr_43116_43150[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43098 === (17))){
var inst_43063 = (state_43097[(7)]);
var inst_43067 = cljs.core.chunk_first(inst_43063);
var inst_43068 = cljs.core.chunk_rest(inst_43063);
var inst_43069 = cljs.core.count(inst_43067);
var inst_43049 = inst_43068;
var inst_43050 = inst_43067;
var inst_43051 = inst_43069;
var inst_43052 = (0);
var state_43097__$1 = (function (){var statearr_43117 = state_43097;
(statearr_43117[(8)] = inst_43052);

(statearr_43117[(9)] = inst_43051);

(statearr_43117[(10)] = inst_43050);

(statearr_43117[(12)] = inst_43049);

return statearr_43117;
})();
var statearr_43118_43151 = state_43097__$1;
(statearr_43118_43151[(2)] = null);

(statearr_43118_43151[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43098 === (3))){
var inst_43095 = (state_43097[(2)]);
var state_43097__$1 = state_43097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43097__$1,inst_43095);
} else {
if((state_val_43098 === (12))){
var inst_43083 = (state_43097[(2)]);
var state_43097__$1 = state_43097;
var statearr_43119_43152 = state_43097__$1;
(statearr_43119_43152[(2)] = inst_43083);

(statearr_43119_43152[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43098 === (2))){
var state_43097__$1 = state_43097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43097__$1,(4),in$);
} else {
if((state_val_43098 === (23))){
var inst_43091 = (state_43097[(2)]);
var state_43097__$1 = state_43097;
var statearr_43120_43153 = state_43097__$1;
(statearr_43120_43153[(2)] = inst_43091);

(statearr_43120_43153[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43098 === (19))){
var inst_43078 = (state_43097[(2)]);
var state_43097__$1 = state_43097;
var statearr_43121_43154 = state_43097__$1;
(statearr_43121_43154[(2)] = inst_43078);

(statearr_43121_43154[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43098 === (11))){
var inst_43063 = (state_43097[(7)]);
var inst_43049 = (state_43097[(12)]);
var inst_43063__$1 = cljs.core.seq(inst_43049);
var state_43097__$1 = (function (){var statearr_43122 = state_43097;
(statearr_43122[(7)] = inst_43063__$1);

return statearr_43122;
})();
if(inst_43063__$1){
var statearr_43123_43155 = state_43097__$1;
(statearr_43123_43155[(1)] = (14));

} else {
var statearr_43124_43156 = state_43097__$1;
(statearr_43124_43156[(1)] = (15));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43098 === (9))){
var inst_43085 = (state_43097[(2)]);
var inst_43086 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_43097__$1 = (function (){var statearr_43125 = state_43097;
(statearr_43125[(15)] = inst_43085);

return statearr_43125;
})();
if(cljs.core.truth_(inst_43086)){
var statearr_43126_43157 = state_43097__$1;
(statearr_43126_43157[(1)] = (21));

} else {
var statearr_43127_43158 = state_43097__$1;
(statearr_43127_43158[(1)] = (22));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43098 === (5))){
var inst_43041 = cljs.core.async.close_BANG_(out);
var state_43097__$1 = state_43097;
var statearr_43128_43159 = state_43097__$1;
(statearr_43128_43159[(2)] = inst_43041);

(statearr_43128_43159[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43098 === (14))){
var inst_43063 = (state_43097[(7)]);
var inst_43065 = cljs.core.chunked_seq_QMARK_(inst_43063);
var state_43097__$1 = state_43097;
if(inst_43065){
var statearr_43129_43160 = state_43097__$1;
(statearr_43129_43160[(1)] = (17));

} else {
var statearr_43130_43161 = state_43097__$1;
(statearr_43130_43161[(1)] = (18));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43098 === (16))){
var inst_43081 = (state_43097[(2)]);
var state_43097__$1 = state_43097;
var statearr_43131_43162 = state_43097__$1;
(statearr_43131_43162[(2)] = inst_43081);

(statearr_43131_43162[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43098 === (10))){
var inst_43052 = (state_43097[(8)]);
var inst_43050 = (state_43097[(10)]);
var inst_43057 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_43050,inst_43052);
var state_43097__$1 = state_43097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43097__$1,(13),out,inst_43057);
} else {
if((state_val_43098 === (18))){
var inst_43063 = (state_43097[(7)]);
var inst_43072 = cljs.core.first(inst_43063);
var state_43097__$1 = state_43097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43097__$1,(20),out,inst_43072);
} else {
if((state_val_43098 === (8))){
var inst_43052 = (state_43097[(8)]);
var inst_43051 = (state_43097[(9)]);
var inst_43054 = (inst_43052 < inst_43051);
var inst_43055 = inst_43054;
var state_43097__$1 = state_43097;
if(cljs.core.truth_(inst_43055)){
var statearr_43132_43163 = state_43097__$1;
(statearr_43132_43163[(1)] = (10));

} else {
var statearr_43133_43164 = state_43097__$1;
(statearr_43133_43164[(1)] = (11));

}

return cljs.core.constant$keyword$21;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30815__auto__))
;
return ((function (switch__30735__auto__,c__30815__auto__){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_43137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43137[(0)] = state_machine__30736__auto__);

(statearr_43137[(1)] = (1));

return statearr_43137;
});
var state_machine__30736__auto____1 = (function (state_43097){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_43097);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e43138){if((e43138 instanceof Object)){
var ex__30739__auto__ = e43138;
var statearr_43139_43165 = state_43097;
(statearr_43139_43165[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43097);

return cljs.core.constant$keyword$21;
} else {
throw e43138;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__43166 = state_43097;
state_43097 = G__43166;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_43097){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_43097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto__))
})();
var state__30817__auto__ = (function (){var statearr_43140 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_43140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto__);

return statearr_43140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto__))
);

return c__30815__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30815__auto___43271 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto___43271,out){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto___43271,out){
return (function (state_43246){
var state_val_43247 = (state_43246[(1)]);
if((state_val_43247 === (7))){
var inst_43241 = (state_43246[(2)]);
var state_43246__$1 = state_43246;
var statearr_43248_43272 = state_43246__$1;
(statearr_43248_43272[(2)] = inst_43241);

(statearr_43248_43272[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43247 === (1))){
var inst_43223 = null;
var state_43246__$1 = (function (){var statearr_43249 = state_43246;
(statearr_43249[(7)] = inst_43223);

return statearr_43249;
})();
var statearr_43250_43273 = state_43246__$1;
(statearr_43250_43273[(2)] = null);

(statearr_43250_43273[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43247 === (4))){
var inst_43226 = (state_43246[(8)]);
var inst_43226__$1 = (state_43246[(2)]);
var inst_43227 = (inst_43226__$1 == null);
var inst_43228 = cljs.core.not(inst_43227);
var state_43246__$1 = (function (){var statearr_43251 = state_43246;
(statearr_43251[(8)] = inst_43226__$1);

return statearr_43251;
})();
if(inst_43228){
var statearr_43252_43274 = state_43246__$1;
(statearr_43252_43274[(1)] = (5));

} else {
var statearr_43253_43275 = state_43246__$1;
(statearr_43253_43275[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43247 === (6))){
var state_43246__$1 = state_43246;
var statearr_43254_43276 = state_43246__$1;
(statearr_43254_43276[(2)] = null);

(statearr_43254_43276[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43247 === (3))){
var inst_43243 = (state_43246[(2)]);
var inst_43244 = cljs.core.async.close_BANG_(out);
var state_43246__$1 = (function (){var statearr_43255 = state_43246;
(statearr_43255[(9)] = inst_43243);

return statearr_43255;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43246__$1,inst_43244);
} else {
if((state_val_43247 === (2))){
var state_43246__$1 = state_43246;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43246__$1,(4),ch);
} else {
if((state_val_43247 === (11))){
var inst_43226 = (state_43246[(8)]);
var inst_43235 = (state_43246[(2)]);
var inst_43223 = inst_43226;
var state_43246__$1 = (function (){var statearr_43256 = state_43246;
(statearr_43256[(7)] = inst_43223);

(statearr_43256[(10)] = inst_43235);

return statearr_43256;
})();
var statearr_43257_43277 = state_43246__$1;
(statearr_43257_43277[(2)] = null);

(statearr_43257_43277[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43247 === (9))){
var inst_43226 = (state_43246[(8)]);
var state_43246__$1 = state_43246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43246__$1,(11),out,inst_43226);
} else {
if((state_val_43247 === (5))){
var inst_43226 = (state_43246[(8)]);
var inst_43223 = (state_43246[(7)]);
var inst_43230 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43226,inst_43223);
var state_43246__$1 = state_43246;
if(inst_43230){
var statearr_43259_43278 = state_43246__$1;
(statearr_43259_43278[(1)] = (8));

} else {
var statearr_43260_43279 = state_43246__$1;
(statearr_43260_43279[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43247 === (10))){
var inst_43238 = (state_43246[(2)]);
var state_43246__$1 = state_43246;
var statearr_43261_43280 = state_43246__$1;
(statearr_43261_43280[(2)] = inst_43238);

(statearr_43261_43280[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43247 === (8))){
var inst_43223 = (state_43246[(7)]);
var tmp43258 = inst_43223;
var inst_43223__$1 = tmp43258;
var state_43246__$1 = (function (){var statearr_43262 = state_43246;
(statearr_43262[(7)] = inst_43223__$1);

return statearr_43262;
})();
var statearr_43263_43281 = state_43246__$1;
(statearr_43263_43281[(2)] = null);

(statearr_43263_43281[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30815__auto___43271,out))
;
return ((function (switch__30735__auto__,c__30815__auto___43271,out){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_43267 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43267[(0)] = state_machine__30736__auto__);

(statearr_43267[(1)] = (1));

return statearr_43267;
});
var state_machine__30736__auto____1 = (function (state_43246){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_43246);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e43268){if((e43268 instanceof Object)){
var ex__30739__auto__ = e43268;
var statearr_43269_43282 = state_43246;
(statearr_43269_43282[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43246);

return cljs.core.constant$keyword$21;
} else {
throw e43268;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__43283 = state_43246;
state_43246 = G__43283;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_43246){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_43246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto___43271,out))
})();
var state__30817__auto__ = (function (){var statearr_43270 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_43270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___43271);

return statearr_43270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto___43271,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30815__auto___43421 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto___43421,out){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto___43421,out){
return (function (state_43391){
var state_val_43392 = (state_43391[(1)]);
if((state_val_43392 === (7))){
var inst_43387 = (state_43391[(2)]);
var state_43391__$1 = state_43391;
var statearr_43393_43422 = state_43391__$1;
(statearr_43393_43422[(2)] = inst_43387);

(statearr_43393_43422[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43392 === (1))){
var inst_43354 = (new Array(n));
var inst_43355 = inst_43354;
var inst_43356 = (0);
var state_43391__$1 = (function (){var statearr_43394 = state_43391;
(statearr_43394[(7)] = inst_43355);

(statearr_43394[(8)] = inst_43356);

return statearr_43394;
})();
var statearr_43395_43423 = state_43391__$1;
(statearr_43395_43423[(2)] = null);

(statearr_43395_43423[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43392 === (4))){
var inst_43359 = (state_43391[(9)]);
var inst_43359__$1 = (state_43391[(2)]);
var inst_43360 = (inst_43359__$1 == null);
var inst_43361 = cljs.core.not(inst_43360);
var state_43391__$1 = (function (){var statearr_43396 = state_43391;
(statearr_43396[(9)] = inst_43359__$1);

return statearr_43396;
})();
if(inst_43361){
var statearr_43397_43424 = state_43391__$1;
(statearr_43397_43424[(1)] = (5));

} else {
var statearr_43398_43425 = state_43391__$1;
(statearr_43398_43425[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43392 === (15))){
var inst_43381 = (state_43391[(2)]);
var state_43391__$1 = state_43391;
var statearr_43399_43426 = state_43391__$1;
(statearr_43399_43426[(2)] = inst_43381);

(statearr_43399_43426[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43392 === (13))){
var state_43391__$1 = state_43391;
var statearr_43400_43427 = state_43391__$1;
(statearr_43400_43427[(2)] = null);

(statearr_43400_43427[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43392 === (6))){
var inst_43356 = (state_43391[(8)]);
var inst_43377 = (inst_43356 > (0));
var state_43391__$1 = state_43391;
if(cljs.core.truth_(inst_43377)){
var statearr_43401_43428 = state_43391__$1;
(statearr_43401_43428[(1)] = (12));

} else {
var statearr_43402_43429 = state_43391__$1;
(statearr_43402_43429[(1)] = (13));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43392 === (3))){
var inst_43389 = (state_43391[(2)]);
var state_43391__$1 = state_43391;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43391__$1,inst_43389);
} else {
if((state_val_43392 === (12))){
var inst_43355 = (state_43391[(7)]);
var inst_43379 = cljs.core.vec(inst_43355);
var state_43391__$1 = state_43391;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43391__$1,(15),out,inst_43379);
} else {
if((state_val_43392 === (2))){
var state_43391__$1 = state_43391;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43391__$1,(4),ch);
} else {
if((state_val_43392 === (11))){
var inst_43371 = (state_43391[(2)]);
var inst_43372 = (new Array(n));
var inst_43355 = inst_43372;
var inst_43356 = (0);
var state_43391__$1 = (function (){var statearr_43403 = state_43391;
(statearr_43403[(7)] = inst_43355);

(statearr_43403[(10)] = inst_43371);

(statearr_43403[(8)] = inst_43356);

return statearr_43403;
})();
var statearr_43404_43430 = state_43391__$1;
(statearr_43404_43430[(2)] = null);

(statearr_43404_43430[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43392 === (9))){
var inst_43355 = (state_43391[(7)]);
var inst_43369 = cljs.core.vec(inst_43355);
var state_43391__$1 = state_43391;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43391__$1,(11),out,inst_43369);
} else {
if((state_val_43392 === (5))){
var inst_43364 = (state_43391[(11)]);
var inst_43355 = (state_43391[(7)]);
var inst_43356 = (state_43391[(8)]);
var inst_43359 = (state_43391[(9)]);
var inst_43363 = (inst_43355[inst_43356] = inst_43359);
var inst_43364__$1 = (inst_43356 + (1));
var inst_43365 = (inst_43364__$1 < n);
var state_43391__$1 = (function (){var statearr_43405 = state_43391;
(statearr_43405[(11)] = inst_43364__$1);

(statearr_43405[(12)] = inst_43363);

return statearr_43405;
})();
if(cljs.core.truth_(inst_43365)){
var statearr_43406_43431 = state_43391__$1;
(statearr_43406_43431[(1)] = (8));

} else {
var statearr_43407_43432 = state_43391__$1;
(statearr_43407_43432[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43392 === (14))){
var inst_43384 = (state_43391[(2)]);
var inst_43385 = cljs.core.async.close_BANG_(out);
var state_43391__$1 = (function (){var statearr_43409 = state_43391;
(statearr_43409[(13)] = inst_43384);

return statearr_43409;
})();
var statearr_43410_43433 = state_43391__$1;
(statearr_43410_43433[(2)] = inst_43385);

(statearr_43410_43433[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43392 === (10))){
var inst_43375 = (state_43391[(2)]);
var state_43391__$1 = state_43391;
var statearr_43411_43434 = state_43391__$1;
(statearr_43411_43434[(2)] = inst_43375);

(statearr_43411_43434[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43392 === (8))){
var inst_43364 = (state_43391[(11)]);
var inst_43355 = (state_43391[(7)]);
var tmp43408 = inst_43355;
var inst_43355__$1 = tmp43408;
var inst_43356 = inst_43364;
var state_43391__$1 = (function (){var statearr_43412 = state_43391;
(statearr_43412[(7)] = inst_43355__$1);

(statearr_43412[(8)] = inst_43356);

return statearr_43412;
})();
var statearr_43413_43435 = state_43391__$1;
(statearr_43413_43435[(2)] = null);

(statearr_43413_43435[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30815__auto___43421,out))
;
return ((function (switch__30735__auto__,c__30815__auto___43421,out){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_43417 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43417[(0)] = state_machine__30736__auto__);

(statearr_43417[(1)] = (1));

return statearr_43417;
});
var state_machine__30736__auto____1 = (function (state_43391){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_43391);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e43418){if((e43418 instanceof Object)){
var ex__30739__auto__ = e43418;
var statearr_43419_43436 = state_43391;
(statearr_43419_43436[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43391);

return cljs.core.constant$keyword$21;
} else {
throw e43418;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__43437 = state_43391;
state_43391 = G__43437;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_43391){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_43391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto___43421,out))
})();
var state__30817__auto__ = (function (){var statearr_43420 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_43420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___43421);

return statearr_43420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto___43421,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30815__auto___43585 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto___43585,out){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto___43585,out){
return (function (state_43554){
var state_val_43555 = (state_43554[(1)]);
if((state_val_43555 === (7))){
var inst_43550 = (state_43554[(2)]);
var state_43554__$1 = state_43554;
var statearr_43556_43586 = state_43554__$1;
(statearr_43556_43586[(2)] = inst_43550);

(statearr_43556_43586[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43555 === (1))){
var inst_43513 = [];
var inst_43514 = inst_43513;
var inst_43515 = cljs.core.constant$keyword$36;
var state_43554__$1 = (function (){var statearr_43557 = state_43554;
(statearr_43557[(7)] = inst_43514);

(statearr_43557[(8)] = inst_43515);

return statearr_43557;
})();
var statearr_43558_43587 = state_43554__$1;
(statearr_43558_43587[(2)] = null);

(statearr_43558_43587[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43555 === (4))){
var inst_43518 = (state_43554[(9)]);
var inst_43518__$1 = (state_43554[(2)]);
var inst_43519 = (inst_43518__$1 == null);
var inst_43520 = cljs.core.not(inst_43519);
var state_43554__$1 = (function (){var statearr_43559 = state_43554;
(statearr_43559[(9)] = inst_43518__$1);

return statearr_43559;
})();
if(inst_43520){
var statearr_43560_43588 = state_43554__$1;
(statearr_43560_43588[(1)] = (5));

} else {
var statearr_43561_43589 = state_43554__$1;
(statearr_43561_43589[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43555 === (15))){
var inst_43544 = (state_43554[(2)]);
var state_43554__$1 = state_43554;
var statearr_43562_43590 = state_43554__$1;
(statearr_43562_43590[(2)] = inst_43544);

(statearr_43562_43590[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43555 === (13))){
var state_43554__$1 = state_43554;
var statearr_43563_43591 = state_43554__$1;
(statearr_43563_43591[(2)] = null);

(statearr_43563_43591[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43555 === (6))){
var inst_43514 = (state_43554[(7)]);
var inst_43539 = inst_43514.length;
var inst_43540 = (inst_43539 > (0));
var state_43554__$1 = state_43554;
if(cljs.core.truth_(inst_43540)){
var statearr_43564_43592 = state_43554__$1;
(statearr_43564_43592[(1)] = (12));

} else {
var statearr_43565_43593 = state_43554__$1;
(statearr_43565_43593[(1)] = (13));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43555 === (3))){
var inst_43552 = (state_43554[(2)]);
var state_43554__$1 = state_43554;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43554__$1,inst_43552);
} else {
if((state_val_43555 === (12))){
var inst_43514 = (state_43554[(7)]);
var inst_43542 = cljs.core.vec(inst_43514);
var state_43554__$1 = state_43554;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43554__$1,(15),out,inst_43542);
} else {
if((state_val_43555 === (2))){
var state_43554__$1 = state_43554;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43554__$1,(4),ch);
} else {
if((state_val_43555 === (11))){
var inst_43522 = (state_43554[(10)]);
var inst_43518 = (state_43554[(9)]);
var inst_43532 = (state_43554[(2)]);
var inst_43533 = [];
var inst_43534 = inst_43533.push(inst_43518);
var inst_43514 = inst_43533;
var inst_43515 = inst_43522;
var state_43554__$1 = (function (){var statearr_43566 = state_43554;
(statearr_43566[(11)] = inst_43532);

(statearr_43566[(7)] = inst_43514);

(statearr_43566[(8)] = inst_43515);

(statearr_43566[(12)] = inst_43534);

return statearr_43566;
})();
var statearr_43567_43594 = state_43554__$1;
(statearr_43567_43594[(2)] = null);

(statearr_43567_43594[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43555 === (9))){
var inst_43514 = (state_43554[(7)]);
var inst_43530 = cljs.core.vec(inst_43514);
var state_43554__$1 = state_43554;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43554__$1,(11),out,inst_43530);
} else {
if((state_val_43555 === (5))){
var inst_43522 = (state_43554[(10)]);
var inst_43515 = (state_43554[(8)]);
var inst_43518 = (state_43554[(9)]);
var inst_43522__$1 = (function (){var G__43568 = inst_43518;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__43568) : f.call(null,G__43568));
})();
var inst_43523 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43522__$1,inst_43515);
var inst_43524 = cljs.core.keyword_identical_QMARK_(inst_43515,cljs.core.constant$keyword$36);
var inst_43525 = (inst_43523) || (inst_43524);
var state_43554__$1 = (function (){var statearr_43569 = state_43554;
(statearr_43569[(10)] = inst_43522__$1);

return statearr_43569;
})();
if(cljs.core.truth_(inst_43525)){
var statearr_43570_43595 = state_43554__$1;
(statearr_43570_43595[(1)] = (8));

} else {
var statearr_43571_43596 = state_43554__$1;
(statearr_43571_43596[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43555 === (14))){
var inst_43547 = (state_43554[(2)]);
var inst_43548 = cljs.core.async.close_BANG_(out);
var state_43554__$1 = (function (){var statearr_43573 = state_43554;
(statearr_43573[(13)] = inst_43547);

return statearr_43573;
})();
var statearr_43574_43597 = state_43554__$1;
(statearr_43574_43597[(2)] = inst_43548);

(statearr_43574_43597[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43555 === (10))){
var inst_43537 = (state_43554[(2)]);
var state_43554__$1 = state_43554;
var statearr_43575_43598 = state_43554__$1;
(statearr_43575_43598[(2)] = inst_43537);

(statearr_43575_43598[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43555 === (8))){
var inst_43514 = (state_43554[(7)]);
var inst_43522 = (state_43554[(10)]);
var inst_43518 = (state_43554[(9)]);
var inst_43527 = inst_43514.push(inst_43518);
var tmp43572 = inst_43514;
var inst_43514__$1 = tmp43572;
var inst_43515 = inst_43522;
var state_43554__$1 = (function (){var statearr_43576 = state_43554;
(statearr_43576[(7)] = inst_43514__$1);

(statearr_43576[(14)] = inst_43527);

(statearr_43576[(8)] = inst_43515);

return statearr_43576;
})();
var statearr_43577_43599 = state_43554__$1;
(statearr_43577_43599[(2)] = null);

(statearr_43577_43599[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30815__auto___43585,out))
;
return ((function (switch__30735__auto__,c__30815__auto___43585,out){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_43581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43581[(0)] = state_machine__30736__auto__);

(statearr_43581[(1)] = (1));

return statearr_43581;
});
var state_machine__30736__auto____1 = (function (state_43554){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_43554);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e43582){if((e43582 instanceof Object)){
var ex__30739__auto__ = e43582;
var statearr_43583_43600 = state_43554;
(statearr_43583_43600[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43554);

return cljs.core.constant$keyword$21;
} else {
throw e43582;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__43601 = state_43554;
state_43554 = G__43601;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_43554){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_43554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto___43585,out))
})();
var state__30817__auto__ = (function (){var statearr_43584 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_43584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___43585);

return statearr_43584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto___43585,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
