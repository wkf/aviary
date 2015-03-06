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
if(typeof cljs.core.async.t40222 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40222 = (function (f,fn_handler,meta40223){
this.f = f;
this.fn_handler = fn_handler;
this.meta40223 = meta40223;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40222.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t40222.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t40222.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t40222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40224){
var self__ = this;
var _40224__$1 = this;
return self__.meta40223;
});

cljs.core.async.t40222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40224,meta40223__$1){
var self__ = this;
var _40224__$1 = this;
return (new cljs.core.async.t40222(self__.f,self__.fn_handler,meta40223__$1));
});

cljs.core.async.t40222.cljs$lang$type = true;

cljs.core.async.t40222.cljs$lang$ctorStr = "cljs.core.async/t40222";

cljs.core.async.t40222.cljs$lang$ctorPrWriter = (function (this__24264__auto__,writer__24265__auto__,opt__24266__auto__){
return cljs.core._write(writer__24265__auto__,"cljs.core.async/t40222");
});

cljs.core.async.__GT_t40222 = (function __GT_t40222(f__$1,fn_handler__$1,meta40223){
return (new cljs.core.async.t40222(f__$1,fn_handler__$1,meta40223));
});

}

return (new cljs.core.async.t40222(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__40226 = buff;
if(G__40226){
var bit__24358__auto__ = null;
if(cljs.core.truth_((function (){var or__23677__auto__ = bit__24358__auto__;
if(cljs.core.truth_(or__23677__auto__)){
return or__23677__auto__;
} else {
return G__40226.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__40226.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__40226);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__40226);
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
var val_40243 = (function (){var G__40240 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40240) : cljs.core.deref.call(null,G__40240));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__40241_40244 = val_40243;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__40241_40244) : fn1.call(null,G__40241_40244));
} else {
cljs.core.async.impl.dispatch.run(((function (val_40243,ret){
return (function (){
var G__40242 = val_40243;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__40242) : fn1.call(null,G__40242));
});})(val_40243,ret))
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
var G__40253 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40253) : cljs.core.deref.call(null,G__40253));
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
var ret = (function (){var G__40254 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40254) : cljs.core.deref.call(null,G__40254));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__40255_40257 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__40255_40257) : fn1.call(null,G__40255_40257));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__40256 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__40256) : fn1.call(null,G__40256));
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
var n__24564__auto___40258 = n;
var x_40259 = (0);
while(true){
if((x_40259 < n__24564__auto___40258)){
(a[x_40259] = (0));

var G__40260 = (x_40259 + (1));
x_40259 = G__40260;
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

var G__40261 = (i + (1));
i = G__40261;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__40269 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__40269) : cljs.core.atom.call(null,G__40269));
})();
if(typeof cljs.core.async.t40270 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40270 = (function (flag,alt_flag,meta40271){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta40271 = meta40271;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40270.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t40270.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__40273 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40273) : cljs.core.deref.call(null,G__40273));
});})(flag))
;

cljs.core.async.t40270.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__40274_40276 = self__.flag;
var G__40275_40277 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__40274_40276,G__40275_40277) : cljs.core.reset_BANG_.call(null,G__40274_40276,G__40275_40277));

return true;
});})(flag))
;

cljs.core.async.t40270.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40272){
var self__ = this;
var _40272__$1 = this;
return self__.meta40271;
});})(flag))
;

cljs.core.async.t40270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40272,meta40271__$1){
var self__ = this;
var _40272__$1 = this;
return (new cljs.core.async.t40270(self__.flag,self__.alt_flag,meta40271__$1));
});})(flag))
;

cljs.core.async.t40270.cljs$lang$type = true;

cljs.core.async.t40270.cljs$lang$ctorStr = "cljs.core.async/t40270";

cljs.core.async.t40270.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__24264__auto__,writer__24265__auto__,opt__24266__auto__){
return cljs.core._write(writer__24265__auto__,"cljs.core.async/t40270");
});})(flag))
;

cljs.core.async.__GT_t40270 = ((function (flag){
return (function __GT_t40270(flag__$1,alt_flag__$1,meta40271){
return (new cljs.core.async.t40270(flag__$1,alt_flag__$1,meta40271));
});})(flag))
;

}

return (new cljs.core.async.t40270(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t40281 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40281 = (function (cb,flag,alt_handler,meta40282){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta40282 = meta40282;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40281.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t40281.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t40281.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t40281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40283){
var self__ = this;
var _40283__$1 = this;
return self__.meta40282;
});

cljs.core.async.t40281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40283,meta40282__$1){
var self__ = this;
var _40283__$1 = this;
return (new cljs.core.async.t40281(self__.cb,self__.flag,self__.alt_handler,meta40282__$1));
});

cljs.core.async.t40281.cljs$lang$type = true;

cljs.core.async.t40281.cljs$lang$ctorStr = "cljs.core.async/t40281";

cljs.core.async.t40281.cljs$lang$ctorPrWriter = (function (this__24264__auto__,writer__24265__auto__,opt__24266__auto__){
return cljs.core._write(writer__24265__auto__,"cljs.core.async/t40281");
});

cljs.core.async.__GT_t40281 = (function __GT_t40281(cb__$1,flag__$1,alt_handler__$1,meta40282){
return (new cljs.core.async.t40281(cb__$1,flag__$1,alt_handler__$1,meta40282));
});

}

return (new cljs.core.async.t40281(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__40291 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__40291) : port.call(null,G__40291));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__40292 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__40292) : port.call(null,G__40292));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40284_SHARP_){
var G__40293 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40284_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__40293) : fret.call(null,G__40293));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40285_SHARP_){
var G__40294 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40285_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__40294) : fret.call(null,G__40294));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40295 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40295) : cljs.core.deref.call(null,G__40295));
})(),(function (){var or__23677__auto__ = wport;
if(cljs.core.truth_(or__23677__auto__)){
return or__23677__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40296 = (i + (1));
i = G__40296;
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
var alts_BANG___delegate = function (ports,p__40297){
var map__40299 = p__40297;
var map__40299__$1 = ((cljs.core.seq_QMARK_(map__40299))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40299):map__40299);
var opts = map__40299__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__40297 = null;
if (arguments.length > 1) {
var G__40300__i = 0, G__40300__a = new Array(arguments.length -  1);
while (G__40300__i < G__40300__a.length) {G__40300__a[G__40300__i] = arguments[G__40300__i + 1]; ++G__40300__i;}
  p__40297 = new cljs.core.IndexedSeq(G__40300__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__40297);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__40301){
var ports = cljs.core.first(arglist__40301);
var p__40297 = cljs.core.rest(arglist__40301);
return alts_BANG___delegate(ports,p__40297);
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
var c__30815__auto___40399 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto___40399){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto___40399){
return (function (state_40375){
var state_val_40376 = (state_40375[(1)]);
if((state_val_40376 === (7))){
var inst_40371 = (state_40375[(2)]);
var state_40375__$1 = state_40375;
var statearr_40377_40400 = state_40375__$1;
(statearr_40377_40400[(2)] = inst_40371);

(statearr_40377_40400[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40376 === (1))){
var state_40375__$1 = state_40375;
var statearr_40378_40401 = state_40375__$1;
(statearr_40378_40401[(2)] = null);

(statearr_40378_40401[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40376 === (4))){
var inst_40354 = (state_40375[(7)]);
var inst_40354__$1 = (state_40375[(2)]);
var inst_40355 = (inst_40354__$1 == null);
var state_40375__$1 = (function (){var statearr_40379 = state_40375;
(statearr_40379[(7)] = inst_40354__$1);

return statearr_40379;
})();
if(cljs.core.truth_(inst_40355)){
var statearr_40380_40402 = state_40375__$1;
(statearr_40380_40402[(1)] = (5));

} else {
var statearr_40381_40403 = state_40375__$1;
(statearr_40381_40403[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40376 === (13))){
var state_40375__$1 = state_40375;
var statearr_40382_40404 = state_40375__$1;
(statearr_40382_40404[(2)] = null);

(statearr_40382_40404[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40376 === (6))){
var inst_40354 = (state_40375[(7)]);
var state_40375__$1 = state_40375;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40375__$1,(11),to,inst_40354);
} else {
if((state_val_40376 === (3))){
var inst_40373 = (state_40375[(2)]);
var state_40375__$1 = state_40375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40375__$1,inst_40373);
} else {
if((state_val_40376 === (12))){
var state_40375__$1 = state_40375;
var statearr_40383_40405 = state_40375__$1;
(statearr_40383_40405[(2)] = null);

(statearr_40383_40405[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40376 === (2))){
var state_40375__$1 = state_40375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40375__$1,(4),from);
} else {
if((state_val_40376 === (11))){
var inst_40364 = (state_40375[(2)]);
var state_40375__$1 = state_40375;
if(cljs.core.truth_(inst_40364)){
var statearr_40384_40406 = state_40375__$1;
(statearr_40384_40406[(1)] = (12));

} else {
var statearr_40385_40407 = state_40375__$1;
(statearr_40385_40407[(1)] = (13));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40376 === (9))){
var state_40375__$1 = state_40375;
var statearr_40386_40408 = state_40375__$1;
(statearr_40386_40408[(2)] = null);

(statearr_40386_40408[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40376 === (5))){
var state_40375__$1 = state_40375;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40387_40409 = state_40375__$1;
(statearr_40387_40409[(1)] = (8));

} else {
var statearr_40388_40410 = state_40375__$1;
(statearr_40388_40410[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40376 === (14))){
var inst_40369 = (state_40375[(2)]);
var state_40375__$1 = state_40375;
var statearr_40389_40411 = state_40375__$1;
(statearr_40389_40411[(2)] = inst_40369);

(statearr_40389_40411[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40376 === (10))){
var inst_40361 = (state_40375[(2)]);
var state_40375__$1 = state_40375;
var statearr_40390_40412 = state_40375__$1;
(statearr_40390_40412[(2)] = inst_40361);

(statearr_40390_40412[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40376 === (8))){
var inst_40358 = cljs.core.async.close_BANG_(to);
var state_40375__$1 = state_40375;
var statearr_40391_40413 = state_40375__$1;
(statearr_40391_40413[(2)] = inst_40358);

(statearr_40391_40413[(1)] = (10));


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
});})(c__30815__auto___40399))
;
return ((function (switch__30735__auto__,c__30815__auto___40399){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_40395 = [null,null,null,null,null,null,null,null];
(statearr_40395[(0)] = state_machine__30736__auto__);

(statearr_40395[(1)] = (1));

return statearr_40395;
});
var state_machine__30736__auto____1 = (function (state_40375){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_40375);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e40396){if((e40396 instanceof Object)){
var ex__30739__auto__ = e40396;
var statearr_40397_40414 = state_40375;
(statearr_40397_40414[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40375);

return cljs.core.constant$keyword$21;
} else {
throw e40396;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__40415 = state_40375;
state_40375 = G__40415;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_40375){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_40375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto___40399))
})();
var state__30817__auto__ = (function (){var statearr_40398 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_40398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___40399);

return statearr_40398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto___40399))
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
return (function (p__40601){
var vec__40602 = p__40601;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40602,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40602,(1),null);
var job = vec__40602;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30815__auto___40786 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto___40786,res,vec__40602,v,p,job,jobs,results){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto___40786,res,vec__40602,v,p,job,jobs,results){
return (function (state_40607){
var state_val_40608 = (state_40607[(1)]);
if((state_val_40608 === (2))){
var inst_40604 = (state_40607[(2)]);
var inst_40605 = cljs.core.async.close_BANG_(res);
var state_40607__$1 = (function (){var statearr_40609 = state_40607;
(statearr_40609[(7)] = inst_40604);

return statearr_40609;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40607__$1,inst_40605);
} else {
if((state_val_40608 === (1))){
var state_40607__$1 = state_40607;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40607__$1,(2),res,v);
} else {
return null;
}
}
});})(c__30815__auto___40786,res,vec__40602,v,p,job,jobs,results))
;
return ((function (switch__30735__auto__,c__30815__auto___40786,res,vec__40602,v,p,job,jobs,results){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_40613 = [null,null,null,null,null,null,null,null];
(statearr_40613[(0)] = state_machine__30736__auto__);

(statearr_40613[(1)] = (1));

return statearr_40613;
});
var state_machine__30736__auto____1 = (function (state_40607){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_40607);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e40614){if((e40614 instanceof Object)){
var ex__30739__auto__ = e40614;
var statearr_40615_40787 = state_40607;
(statearr_40615_40787[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40607);

return cljs.core.constant$keyword$21;
} else {
throw e40614;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__40788 = state_40607;
state_40607 = G__40788;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_40607){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_40607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto___40786,res,vec__40602,v,p,job,jobs,results))
})();
var state__30817__auto__ = (function (){var statearr_40616 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_40616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___40786);

return statearr_40616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto___40786,res,vec__40602,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__40617){
var vec__40618 = p__40617;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40618,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40618,(1),null);
var job = vec__40618;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__40619_40789 = v;
var G__40620_40790 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__40619_40789,G__40620_40790) : xf.call(null,G__40619_40789,G__40620_40790));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__24564__auto___40791 = n;
var __40792 = (0);
while(true){
if((__40792 < n__24564__auto___40791)){
var G__40621_40793 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__40621_40793) {
case "async":
var c__30815__auto___40795 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40792,c__30815__auto___40795,G__40621_40793,n__24564__auto___40791,jobs,results,process,async){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (__40792,c__30815__auto___40795,G__40621_40793,n__24564__auto___40791,jobs,results,process,async){
return (function (state_40634){
var state_val_40635 = (state_40634[(1)]);
if((state_val_40635 === (7))){
var inst_40630 = (state_40634[(2)]);
var state_40634__$1 = state_40634;
var statearr_40636_40796 = state_40634__$1;
(statearr_40636_40796[(2)] = inst_40630);

(statearr_40636_40796[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40635 === (6))){
var state_40634__$1 = state_40634;
var statearr_40637_40797 = state_40634__$1;
(statearr_40637_40797[(2)] = null);

(statearr_40637_40797[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40635 === (5))){
var state_40634__$1 = state_40634;
var statearr_40638_40798 = state_40634__$1;
(statearr_40638_40798[(2)] = null);

(statearr_40638_40798[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40635 === (4))){
var inst_40624 = (state_40634[(2)]);
var inst_40625 = async(inst_40624);
var state_40634__$1 = state_40634;
if(cljs.core.truth_(inst_40625)){
var statearr_40639_40799 = state_40634__$1;
(statearr_40639_40799[(1)] = (5));

} else {
var statearr_40640_40800 = state_40634__$1;
(statearr_40640_40800[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40635 === (3))){
var inst_40632 = (state_40634[(2)]);
var state_40634__$1 = state_40634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40634__$1,inst_40632);
} else {
if((state_val_40635 === (2))){
var state_40634__$1 = state_40634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40634__$1,(4),jobs);
} else {
if((state_val_40635 === (1))){
var state_40634__$1 = state_40634;
var statearr_40641_40801 = state_40634__$1;
(statearr_40641_40801[(2)] = null);

(statearr_40641_40801[(1)] = (2));


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
});})(__40792,c__30815__auto___40795,G__40621_40793,n__24564__auto___40791,jobs,results,process,async))
;
return ((function (__40792,switch__30735__auto__,c__30815__auto___40795,G__40621_40793,n__24564__auto___40791,jobs,results,process,async){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_40645 = [null,null,null,null,null,null,null];
(statearr_40645[(0)] = state_machine__30736__auto__);

(statearr_40645[(1)] = (1));

return statearr_40645;
});
var state_machine__30736__auto____1 = (function (state_40634){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_40634);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e40646){if((e40646 instanceof Object)){
var ex__30739__auto__ = e40646;
var statearr_40647_40802 = state_40634;
(statearr_40647_40802[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40634);

return cljs.core.constant$keyword$21;
} else {
throw e40646;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__40803 = state_40634;
state_40634 = G__40803;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_40634){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_40634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(__40792,switch__30735__auto__,c__30815__auto___40795,G__40621_40793,n__24564__auto___40791,jobs,results,process,async))
})();
var state__30817__auto__ = (function (){var statearr_40648 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_40648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___40795);

return statearr_40648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(__40792,c__30815__auto___40795,G__40621_40793,n__24564__auto___40791,jobs,results,process,async))
);


break;
case "compute":
var c__30815__auto___40804 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40792,c__30815__auto___40804,G__40621_40793,n__24564__auto___40791,jobs,results,process,async){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (__40792,c__30815__auto___40804,G__40621_40793,n__24564__auto___40791,jobs,results,process,async){
return (function (state_40661){
var state_val_40662 = (state_40661[(1)]);
if((state_val_40662 === (7))){
var inst_40657 = (state_40661[(2)]);
var state_40661__$1 = state_40661;
var statearr_40663_40805 = state_40661__$1;
(statearr_40663_40805[(2)] = inst_40657);

(statearr_40663_40805[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40662 === (6))){
var state_40661__$1 = state_40661;
var statearr_40664_40806 = state_40661__$1;
(statearr_40664_40806[(2)] = null);

(statearr_40664_40806[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40662 === (5))){
var state_40661__$1 = state_40661;
var statearr_40665_40807 = state_40661__$1;
(statearr_40665_40807[(2)] = null);

(statearr_40665_40807[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40662 === (4))){
var inst_40651 = (state_40661[(2)]);
var inst_40652 = process(inst_40651);
var state_40661__$1 = state_40661;
if(cljs.core.truth_(inst_40652)){
var statearr_40666_40808 = state_40661__$1;
(statearr_40666_40808[(1)] = (5));

} else {
var statearr_40667_40809 = state_40661__$1;
(statearr_40667_40809[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40662 === (3))){
var inst_40659 = (state_40661[(2)]);
var state_40661__$1 = state_40661;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40661__$1,inst_40659);
} else {
if((state_val_40662 === (2))){
var state_40661__$1 = state_40661;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40661__$1,(4),jobs);
} else {
if((state_val_40662 === (1))){
var state_40661__$1 = state_40661;
var statearr_40668_40810 = state_40661__$1;
(statearr_40668_40810[(2)] = null);

(statearr_40668_40810[(1)] = (2));


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
});})(__40792,c__30815__auto___40804,G__40621_40793,n__24564__auto___40791,jobs,results,process,async))
;
return ((function (__40792,switch__30735__auto__,c__30815__auto___40804,G__40621_40793,n__24564__auto___40791,jobs,results,process,async){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_40672 = [null,null,null,null,null,null,null];
(statearr_40672[(0)] = state_machine__30736__auto__);

(statearr_40672[(1)] = (1));

return statearr_40672;
});
var state_machine__30736__auto____1 = (function (state_40661){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_40661);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e40673){if((e40673 instanceof Object)){
var ex__30739__auto__ = e40673;
var statearr_40674_40811 = state_40661;
(statearr_40674_40811[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40661);

return cljs.core.constant$keyword$21;
} else {
throw e40673;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__40812 = state_40661;
state_40661 = G__40812;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_40661){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_40661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(__40792,switch__30735__auto__,c__30815__auto___40804,G__40621_40793,n__24564__auto___40791,jobs,results,process,async))
})();
var state__30817__auto__ = (function (){var statearr_40675 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_40675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___40804);

return statearr_40675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(__40792,c__30815__auto___40804,G__40621_40793,n__24564__auto___40791,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__40813 = (__40792 + (1));
__40792 = G__40813;
continue;
} else {
}
break;
}

var c__30815__auto___40814 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto___40814,jobs,results,process,async){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto___40814,jobs,results,process,async){
return (function (state_40697){
var state_val_40698 = (state_40697[(1)]);
if((state_val_40698 === (9))){
var inst_40690 = (state_40697[(2)]);
var state_40697__$1 = (function (){var statearr_40699 = state_40697;
(statearr_40699[(7)] = inst_40690);

return statearr_40699;
})();
var statearr_40700_40815 = state_40697__$1;
(statearr_40700_40815[(2)] = null);

(statearr_40700_40815[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40698 === (8))){
var inst_40683 = (state_40697[(8)]);
var inst_40688 = (state_40697[(2)]);
var state_40697__$1 = (function (){var statearr_40701 = state_40697;
(statearr_40701[(9)] = inst_40688);

return statearr_40701;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40697__$1,(9),results,inst_40683);
} else {
if((state_val_40698 === (7))){
var inst_40693 = (state_40697[(2)]);
var state_40697__$1 = state_40697;
var statearr_40702_40816 = state_40697__$1;
(statearr_40702_40816[(2)] = inst_40693);

(statearr_40702_40816[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40698 === (6))){
var inst_40678 = (state_40697[(10)]);
var inst_40683 = (state_40697[(8)]);
var inst_40683__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_40684 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40685 = [inst_40678,inst_40683__$1];
var inst_40686 = (new cljs.core.PersistentVector(null,2,(5),inst_40684,inst_40685,null));
var state_40697__$1 = (function (){var statearr_40703 = state_40697;
(statearr_40703[(8)] = inst_40683__$1);

return statearr_40703;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40697__$1,(8),jobs,inst_40686);
} else {
if((state_val_40698 === (5))){
var inst_40681 = cljs.core.async.close_BANG_(jobs);
var state_40697__$1 = state_40697;
var statearr_40704_40817 = state_40697__$1;
(statearr_40704_40817[(2)] = inst_40681);

(statearr_40704_40817[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40698 === (4))){
var inst_40678 = (state_40697[(10)]);
var inst_40678__$1 = (state_40697[(2)]);
var inst_40679 = (inst_40678__$1 == null);
var state_40697__$1 = (function (){var statearr_40705 = state_40697;
(statearr_40705[(10)] = inst_40678__$1);

return statearr_40705;
})();
if(cljs.core.truth_(inst_40679)){
var statearr_40706_40818 = state_40697__$1;
(statearr_40706_40818[(1)] = (5));

} else {
var statearr_40707_40819 = state_40697__$1;
(statearr_40707_40819[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40698 === (3))){
var inst_40695 = (state_40697[(2)]);
var state_40697__$1 = state_40697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40697__$1,inst_40695);
} else {
if((state_val_40698 === (2))){
var state_40697__$1 = state_40697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40697__$1,(4),from);
} else {
if((state_val_40698 === (1))){
var state_40697__$1 = state_40697;
var statearr_40708_40820 = state_40697__$1;
(statearr_40708_40820[(2)] = null);

(statearr_40708_40820[(1)] = (2));


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
});})(c__30815__auto___40814,jobs,results,process,async))
;
return ((function (switch__30735__auto__,c__30815__auto___40814,jobs,results,process,async){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_40712 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40712[(0)] = state_machine__30736__auto__);

(statearr_40712[(1)] = (1));

return statearr_40712;
});
var state_machine__30736__auto____1 = (function (state_40697){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_40697);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e40713){if((e40713 instanceof Object)){
var ex__30739__auto__ = e40713;
var statearr_40714_40821 = state_40697;
(statearr_40714_40821[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40697);

return cljs.core.constant$keyword$21;
} else {
throw e40713;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__40822 = state_40697;
state_40697 = G__40822;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_40697){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_40697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto___40814,jobs,results,process,async))
})();
var state__30817__auto__ = (function (){var statearr_40715 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_40715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___40814);

return statearr_40715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto___40814,jobs,results,process,async))
);


var c__30815__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto__,jobs,results,process,async){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto__,jobs,results,process,async){
return (function (state_40753){
var state_val_40754 = (state_40753[(1)]);
if((state_val_40754 === (7))){
var inst_40749 = (state_40753[(2)]);
var state_40753__$1 = state_40753;
var statearr_40755_40823 = state_40753__$1;
(statearr_40755_40823[(2)] = inst_40749);

(statearr_40755_40823[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40754 === (20))){
var state_40753__$1 = state_40753;
var statearr_40756_40824 = state_40753__$1;
(statearr_40756_40824[(2)] = null);

(statearr_40756_40824[(1)] = (21));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40754 === (1))){
var state_40753__$1 = state_40753;
var statearr_40757_40825 = state_40753__$1;
(statearr_40757_40825[(2)] = null);

(statearr_40757_40825[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40754 === (4))){
var inst_40718 = (state_40753[(7)]);
var inst_40718__$1 = (state_40753[(2)]);
var inst_40719 = (inst_40718__$1 == null);
var state_40753__$1 = (function (){var statearr_40758 = state_40753;
(statearr_40758[(7)] = inst_40718__$1);

return statearr_40758;
})();
if(cljs.core.truth_(inst_40719)){
var statearr_40759_40826 = state_40753__$1;
(statearr_40759_40826[(1)] = (5));

} else {
var statearr_40760_40827 = state_40753__$1;
(statearr_40760_40827[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40754 === (15))){
var inst_40731 = (state_40753[(8)]);
var state_40753__$1 = state_40753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40753__$1,(18),to,inst_40731);
} else {
if((state_val_40754 === (21))){
var inst_40744 = (state_40753[(2)]);
var state_40753__$1 = state_40753;
var statearr_40761_40828 = state_40753__$1;
(statearr_40761_40828[(2)] = inst_40744);

(statearr_40761_40828[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40754 === (13))){
var inst_40746 = (state_40753[(2)]);
var state_40753__$1 = (function (){var statearr_40762 = state_40753;
(statearr_40762[(9)] = inst_40746);

return statearr_40762;
})();
var statearr_40763_40829 = state_40753__$1;
(statearr_40763_40829[(2)] = null);

(statearr_40763_40829[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40754 === (6))){
var inst_40718 = (state_40753[(7)]);
var state_40753__$1 = state_40753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40753__$1,(11),inst_40718);
} else {
if((state_val_40754 === (17))){
var inst_40739 = (state_40753[(2)]);
var state_40753__$1 = state_40753;
if(cljs.core.truth_(inst_40739)){
var statearr_40764_40830 = state_40753__$1;
(statearr_40764_40830[(1)] = (19));

} else {
var statearr_40765_40831 = state_40753__$1;
(statearr_40765_40831[(1)] = (20));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40754 === (3))){
var inst_40751 = (state_40753[(2)]);
var state_40753__$1 = state_40753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40753__$1,inst_40751);
} else {
if((state_val_40754 === (12))){
var inst_40728 = (state_40753[(10)]);
var state_40753__$1 = state_40753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40753__$1,(14),inst_40728);
} else {
if((state_val_40754 === (2))){
var state_40753__$1 = state_40753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40753__$1,(4),results);
} else {
if((state_val_40754 === (19))){
var state_40753__$1 = state_40753;
var statearr_40766_40832 = state_40753__$1;
(statearr_40766_40832[(2)] = null);

(statearr_40766_40832[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40754 === (11))){
var inst_40728 = (state_40753[(2)]);
var state_40753__$1 = (function (){var statearr_40767 = state_40753;
(statearr_40767[(10)] = inst_40728);

return statearr_40767;
})();
var statearr_40768_40833 = state_40753__$1;
(statearr_40768_40833[(2)] = null);

(statearr_40768_40833[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40754 === (9))){
var state_40753__$1 = state_40753;
var statearr_40769_40834 = state_40753__$1;
(statearr_40769_40834[(2)] = null);

(statearr_40769_40834[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40754 === (5))){
var state_40753__$1 = state_40753;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40770_40835 = state_40753__$1;
(statearr_40770_40835[(1)] = (8));

} else {
var statearr_40771_40836 = state_40753__$1;
(statearr_40771_40836[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40754 === (14))){
var inst_40733 = (state_40753[(11)]);
var inst_40731 = (state_40753[(8)]);
var inst_40731__$1 = (state_40753[(2)]);
var inst_40732 = (inst_40731__$1 == null);
var inst_40733__$1 = cljs.core.not(inst_40732);
var state_40753__$1 = (function (){var statearr_40772 = state_40753;
(statearr_40772[(11)] = inst_40733__$1);

(statearr_40772[(8)] = inst_40731__$1);

return statearr_40772;
})();
if(inst_40733__$1){
var statearr_40773_40837 = state_40753__$1;
(statearr_40773_40837[(1)] = (15));

} else {
var statearr_40774_40838 = state_40753__$1;
(statearr_40774_40838[(1)] = (16));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40754 === (16))){
var inst_40733 = (state_40753[(11)]);
var state_40753__$1 = state_40753;
var statearr_40775_40839 = state_40753__$1;
(statearr_40775_40839[(2)] = inst_40733);

(statearr_40775_40839[(1)] = (17));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40754 === (10))){
var inst_40725 = (state_40753[(2)]);
var state_40753__$1 = state_40753;
var statearr_40776_40840 = state_40753__$1;
(statearr_40776_40840[(2)] = inst_40725);

(statearr_40776_40840[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40754 === (18))){
var inst_40736 = (state_40753[(2)]);
var state_40753__$1 = state_40753;
var statearr_40777_40841 = state_40753__$1;
(statearr_40777_40841[(2)] = inst_40736);

(statearr_40777_40841[(1)] = (17));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40754 === (8))){
var inst_40722 = cljs.core.async.close_BANG_(to);
var state_40753__$1 = state_40753;
var statearr_40778_40842 = state_40753__$1;
(statearr_40778_40842[(2)] = inst_40722);

(statearr_40778_40842[(1)] = (10));


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
var statearr_40782 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40782[(0)] = state_machine__30736__auto__);

(statearr_40782[(1)] = (1));

return statearr_40782;
});
var state_machine__30736__auto____1 = (function (state_40753){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_40753);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e40783){if((e40783 instanceof Object)){
var ex__30739__auto__ = e40783;
var statearr_40784_40843 = state_40753;
(statearr_40784_40843[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40753);

return cljs.core.constant$keyword$21;
} else {
throw e40783;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__40844 = state_40753;
state_40753 = G__40844;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_40753){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_40753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto__,jobs,results,process,async))
})();
var state__30817__auto__ = (function (){var statearr_40785 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_40785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto__);

return statearr_40785;
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
var c__30815__auto___40967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto___40967,tc,fc){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto___40967,tc,fc){
return (function (state_40941){
var state_val_40942 = (state_40941[(1)]);
if((state_val_40942 === (7))){
var inst_40937 = (state_40941[(2)]);
var state_40941__$1 = state_40941;
var statearr_40943_40968 = state_40941__$1;
(statearr_40943_40968[(2)] = inst_40937);

(statearr_40943_40968[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40942 === (1))){
var state_40941__$1 = state_40941;
var statearr_40944_40969 = state_40941__$1;
(statearr_40944_40969[(2)] = null);

(statearr_40944_40969[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40942 === (4))){
var inst_40918 = (state_40941[(7)]);
var inst_40918__$1 = (state_40941[(2)]);
var inst_40919 = (inst_40918__$1 == null);
var state_40941__$1 = (function (){var statearr_40945 = state_40941;
(statearr_40945[(7)] = inst_40918__$1);

return statearr_40945;
})();
if(cljs.core.truth_(inst_40919)){
var statearr_40946_40970 = state_40941__$1;
(statearr_40946_40970[(1)] = (5));

} else {
var statearr_40947_40971 = state_40941__$1;
(statearr_40947_40971[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40942 === (13))){
var state_40941__$1 = state_40941;
var statearr_40948_40972 = state_40941__$1;
(statearr_40948_40972[(2)] = null);

(statearr_40948_40972[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40942 === (6))){
var inst_40918 = (state_40941[(7)]);
var inst_40924 = (function (){var G__40949 = inst_40918;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__40949) : p.call(null,G__40949));
})();
var state_40941__$1 = state_40941;
if(cljs.core.truth_(inst_40924)){
var statearr_40950_40973 = state_40941__$1;
(statearr_40950_40973[(1)] = (9));

} else {
var statearr_40951_40974 = state_40941__$1;
(statearr_40951_40974[(1)] = (10));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40942 === (3))){
var inst_40939 = (state_40941[(2)]);
var state_40941__$1 = state_40941;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40941__$1,inst_40939);
} else {
if((state_val_40942 === (12))){
var state_40941__$1 = state_40941;
var statearr_40952_40975 = state_40941__$1;
(statearr_40952_40975[(2)] = null);

(statearr_40952_40975[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40942 === (2))){
var state_40941__$1 = state_40941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40941__$1,(4),ch);
} else {
if((state_val_40942 === (11))){
var inst_40918 = (state_40941[(7)]);
var inst_40928 = (state_40941[(2)]);
var state_40941__$1 = state_40941;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40941__$1,(8),inst_40928,inst_40918);
} else {
if((state_val_40942 === (9))){
var state_40941__$1 = state_40941;
var statearr_40953_40976 = state_40941__$1;
(statearr_40953_40976[(2)] = tc);

(statearr_40953_40976[(1)] = (11));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40942 === (5))){
var inst_40921 = cljs.core.async.close_BANG_(tc);
var inst_40922 = cljs.core.async.close_BANG_(fc);
var state_40941__$1 = (function (){var statearr_40954 = state_40941;
(statearr_40954[(8)] = inst_40921);

return statearr_40954;
})();
var statearr_40955_40977 = state_40941__$1;
(statearr_40955_40977[(2)] = inst_40922);

(statearr_40955_40977[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40942 === (14))){
var inst_40935 = (state_40941[(2)]);
var state_40941__$1 = state_40941;
var statearr_40956_40978 = state_40941__$1;
(statearr_40956_40978[(2)] = inst_40935);

(statearr_40956_40978[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40942 === (10))){
var state_40941__$1 = state_40941;
var statearr_40957_40979 = state_40941__$1;
(statearr_40957_40979[(2)] = fc);

(statearr_40957_40979[(1)] = (11));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40942 === (8))){
var inst_40930 = (state_40941[(2)]);
var state_40941__$1 = state_40941;
if(cljs.core.truth_(inst_40930)){
var statearr_40958_40980 = state_40941__$1;
(statearr_40958_40980[(1)] = (12));

} else {
var statearr_40959_40981 = state_40941__$1;
(statearr_40959_40981[(1)] = (13));

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
});})(c__30815__auto___40967,tc,fc))
;
return ((function (switch__30735__auto__,c__30815__auto___40967,tc,fc){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_40963 = [null,null,null,null,null,null,null,null,null];
(statearr_40963[(0)] = state_machine__30736__auto__);

(statearr_40963[(1)] = (1));

return statearr_40963;
});
var state_machine__30736__auto____1 = (function (state_40941){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_40941);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e40964){if((e40964 instanceof Object)){
var ex__30739__auto__ = e40964;
var statearr_40965_40982 = state_40941;
(statearr_40965_40982[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40941);

return cljs.core.constant$keyword$21;
} else {
throw e40964;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__40983 = state_40941;
state_40941 = G__40983;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_40941){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_40941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto___40967,tc,fc))
})();
var state__30817__auto__ = (function (){var statearr_40966 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_40966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___40967);

return statearr_40966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto___40967,tc,fc))
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
return (function (state_41032){
var state_val_41033 = (state_41032[(1)]);
if((state_val_41033 === (7))){
var inst_41028 = (state_41032[(2)]);
var state_41032__$1 = state_41032;
var statearr_41034_41052 = state_41032__$1;
(statearr_41034_41052[(2)] = inst_41028);

(statearr_41034_41052[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41033 === (6))){
var inst_41021 = (state_41032[(7)]);
var inst_41018 = (state_41032[(8)]);
var inst_41025 = (function (){var G__41035 = inst_41018;
var G__41036 = inst_41021;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__41035,G__41036) : f.call(null,G__41035,G__41036));
})();
var inst_41018__$1 = inst_41025;
var state_41032__$1 = (function (){var statearr_41037 = state_41032;
(statearr_41037[(8)] = inst_41018__$1);

return statearr_41037;
})();
var statearr_41038_41053 = state_41032__$1;
(statearr_41038_41053[(2)] = null);

(statearr_41038_41053[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41033 === (5))){
var inst_41018 = (state_41032[(8)]);
var state_41032__$1 = state_41032;
var statearr_41039_41054 = state_41032__$1;
(statearr_41039_41054[(2)] = inst_41018);

(statearr_41039_41054[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41033 === (4))){
var inst_41021 = (state_41032[(7)]);
var inst_41021__$1 = (state_41032[(2)]);
var inst_41022 = (inst_41021__$1 == null);
var state_41032__$1 = (function (){var statearr_41040 = state_41032;
(statearr_41040[(7)] = inst_41021__$1);

return statearr_41040;
})();
if(cljs.core.truth_(inst_41022)){
var statearr_41041_41055 = state_41032__$1;
(statearr_41041_41055[(1)] = (5));

} else {
var statearr_41042_41056 = state_41032__$1;
(statearr_41042_41056[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41033 === (3))){
var inst_41030 = (state_41032[(2)]);
var state_41032__$1 = state_41032;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41032__$1,inst_41030);
} else {
if((state_val_41033 === (2))){
var state_41032__$1 = state_41032;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41032__$1,(4),ch);
} else {
if((state_val_41033 === (1))){
var inst_41018 = init;
var state_41032__$1 = (function (){var statearr_41043 = state_41032;
(statearr_41043[(8)] = inst_41018);

return statearr_41043;
})();
var statearr_41044_41057 = state_41032__$1;
(statearr_41044_41057[(2)] = null);

(statearr_41044_41057[(1)] = (2));


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
var statearr_41048 = [null,null,null,null,null,null,null,null,null];
(statearr_41048[(0)] = state_machine__30736__auto__);

(statearr_41048[(1)] = (1));

return statearr_41048;
});
var state_machine__30736__auto____1 = (function (state_41032){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_41032);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e41049){if((e41049 instanceof Object)){
var ex__30739__auto__ = e41049;
var statearr_41050_41058 = state_41032;
(statearr_41050_41058[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41032);

return cljs.core.constant$keyword$21;
} else {
throw e41049;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__41059 = state_41032;
state_41032 = G__41059;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_41032){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_41032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto__))
})();
var state__30817__auto__ = (function (){var statearr_41051 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_41051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto__);

return statearr_41051;
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
return (function (state_41136){
var state_val_41137 = (state_41136[(1)]);
if((state_val_41137 === (7))){
var inst_41118 = (state_41136[(2)]);
var state_41136__$1 = state_41136;
var statearr_41138_41161 = state_41136__$1;
(statearr_41138_41161[(2)] = inst_41118);

(statearr_41138_41161[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41137 === (1))){
var inst_41112 = cljs.core.seq(coll);
var inst_41113 = inst_41112;
var state_41136__$1 = (function (){var statearr_41139 = state_41136;
(statearr_41139[(7)] = inst_41113);

return statearr_41139;
})();
var statearr_41140_41162 = state_41136__$1;
(statearr_41140_41162[(2)] = null);

(statearr_41140_41162[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41137 === (4))){
var inst_41113 = (state_41136[(7)]);
var inst_41116 = cljs.core.first(inst_41113);
var state_41136__$1 = state_41136;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41136__$1,(7),ch,inst_41116);
} else {
if((state_val_41137 === (13))){
var inst_41130 = (state_41136[(2)]);
var state_41136__$1 = state_41136;
var statearr_41141_41163 = state_41136__$1;
(statearr_41141_41163[(2)] = inst_41130);

(statearr_41141_41163[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41137 === (6))){
var inst_41121 = (state_41136[(2)]);
var state_41136__$1 = state_41136;
if(cljs.core.truth_(inst_41121)){
var statearr_41142_41164 = state_41136__$1;
(statearr_41142_41164[(1)] = (8));

} else {
var statearr_41143_41165 = state_41136__$1;
(statearr_41143_41165[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41137 === (3))){
var inst_41134 = (state_41136[(2)]);
var state_41136__$1 = state_41136;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41136__$1,inst_41134);
} else {
if((state_val_41137 === (12))){
var state_41136__$1 = state_41136;
var statearr_41144_41166 = state_41136__$1;
(statearr_41144_41166[(2)] = null);

(statearr_41144_41166[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41137 === (2))){
var inst_41113 = (state_41136[(7)]);
var state_41136__$1 = state_41136;
if(cljs.core.truth_(inst_41113)){
var statearr_41145_41167 = state_41136__$1;
(statearr_41145_41167[(1)] = (4));

} else {
var statearr_41146_41168 = state_41136__$1;
(statearr_41146_41168[(1)] = (5));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41137 === (11))){
var inst_41127 = cljs.core.async.close_BANG_(ch);
var state_41136__$1 = state_41136;
var statearr_41147_41169 = state_41136__$1;
(statearr_41147_41169[(2)] = inst_41127);

(statearr_41147_41169[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41137 === (9))){
var state_41136__$1 = state_41136;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41148_41170 = state_41136__$1;
(statearr_41148_41170[(1)] = (11));

} else {
var statearr_41149_41171 = state_41136__$1;
(statearr_41149_41171[(1)] = (12));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41137 === (5))){
var inst_41113 = (state_41136[(7)]);
var state_41136__$1 = state_41136;
var statearr_41150_41172 = state_41136__$1;
(statearr_41150_41172[(2)] = inst_41113);

(statearr_41150_41172[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41137 === (10))){
var inst_41132 = (state_41136[(2)]);
var state_41136__$1 = state_41136;
var statearr_41151_41173 = state_41136__$1;
(statearr_41151_41173[(2)] = inst_41132);

(statearr_41151_41173[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41137 === (8))){
var inst_41113 = (state_41136[(7)]);
var inst_41123 = cljs.core.next(inst_41113);
var inst_41113__$1 = inst_41123;
var state_41136__$1 = (function (){var statearr_41152 = state_41136;
(statearr_41152[(7)] = inst_41113__$1);

return statearr_41152;
})();
var statearr_41153_41174 = state_41136__$1;
(statearr_41153_41174[(2)] = null);

(statearr_41153_41174[(1)] = (2));


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
var statearr_41157 = [null,null,null,null,null,null,null,null];
(statearr_41157[(0)] = state_machine__30736__auto__);

(statearr_41157[(1)] = (1));

return statearr_41157;
});
var state_machine__30736__auto____1 = (function (state_41136){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_41136);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e41158){if((e41158 instanceof Object)){
var ex__30739__auto__ = e41158;
var statearr_41159_41175 = state_41136;
(statearr_41159_41175[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41136);

return cljs.core.constant$keyword$21;
} else {
throw e41158;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__41176 = state_41136;
state_41136 = G__41176;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_41136){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_41136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto__))
})();
var state__30817__auto__ = (function (){var statearr_41160 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_41160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto__);

return statearr_41160;
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

cljs.core.async.Mux = (function (){var obj41178 = {};
return obj41178;
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
return (function (){var or__23677__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__41182 = x__24321__auto__;
return goog.typeOf(G__41182);
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


cljs.core.async.Mult = (function (){var obj41184 = {};
return obj41184;
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
return (function (){var or__23677__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__41188 = x__24321__auto__;
return goog.typeOf(G__41188);
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
return (function (){var or__23677__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__41192 = x__24321__auto__;
return goog.typeOf(G__41192);
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
return (function (){var or__23677__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__41196 = x__24321__auto__;
return goog.typeOf(G__41196);
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
var cs = (function (){var G__41426 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41426) : cljs.core.atom.call(null,G__41426));
})();
var m = (function (){
if(typeof cljs.core.async.t41427 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t41427 = (function (cs,ch,mult,meta41428){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta41428 = meta41428;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41427.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t41427.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t41427.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t41427.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__41430_41655 = self__.cs;
var G__41431_41656 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__41430_41655,G__41431_41656) : cljs.core.reset_BANG_.call(null,G__41430_41655,G__41431_41656));

return null;
});})(cs))
;

cljs.core.async.t41427.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t41427.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t41427.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41429){
var self__ = this;
var _41429__$1 = this;
return self__.meta41428;
});})(cs))
;

cljs.core.async.t41427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41429,meta41428__$1){
var self__ = this;
var _41429__$1 = this;
return (new cljs.core.async.t41427(self__.cs,self__.ch,self__.mult,meta41428__$1));
});})(cs))
;

cljs.core.async.t41427.cljs$lang$type = true;

cljs.core.async.t41427.cljs$lang$ctorStr = "cljs.core.async/t41427";

cljs.core.async.t41427.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__24264__auto__,writer__24265__auto__,opt__24266__auto__){
return cljs.core._write(writer__24265__auto__,"cljs.core.async/t41427");
});})(cs))
;

cljs.core.async.__GT_t41427 = ((function (cs){
return (function __GT_t41427(cs__$1,ch__$1,mult__$1,meta41428){
return (new cljs.core.async.t41427(cs__$1,ch__$1,mult__$1,meta41428));
});})(cs))
;

}

return (new cljs.core.async.t41427(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__41432 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41432) : cljs.core.atom.call(null,G__41432));
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
var c__30815__auto___41657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto___41657,cs,m,dchan,dctr,done){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto___41657,cs,m,dchan,dctr,done){
return (function (state_41563){
var state_val_41564 = (state_41563[(1)]);
if((state_val_41564 === (7))){
var inst_41559 = (state_41563[(2)]);
var state_41563__$1 = state_41563;
var statearr_41565_41658 = state_41563__$1;
(statearr_41565_41658[(2)] = inst_41559);

(statearr_41565_41658[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (20))){
var inst_41464 = (state_41563[(7)]);
var inst_41474 = cljs.core.first(inst_41464);
var inst_41475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41474,(0),null);
var inst_41476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41474,(1),null);
var state_41563__$1 = (function (){var statearr_41566 = state_41563;
(statearr_41566[(8)] = inst_41475);

return statearr_41566;
})();
if(cljs.core.truth_(inst_41476)){
var statearr_41567_41659 = state_41563__$1;
(statearr_41567_41659[(1)] = (22));

} else {
var statearr_41568_41660 = state_41563__$1;
(statearr_41568_41660[(1)] = (23));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (27))){
var inst_41435 = (state_41563[(9)]);
var inst_41511 = (state_41563[(10)]);
var inst_41506 = (state_41563[(11)]);
var inst_41504 = (state_41563[(12)]);
var inst_41511__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_41504,inst_41506);
var inst_41512 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41511__$1,inst_41435,done);
var state_41563__$1 = (function (){var statearr_41569 = state_41563;
(statearr_41569[(10)] = inst_41511__$1);

return statearr_41569;
})();
if(cljs.core.truth_(inst_41512)){
var statearr_41570_41661 = state_41563__$1;
(statearr_41570_41661[(1)] = (30));

} else {
var statearr_41571_41662 = state_41563__$1;
(statearr_41571_41662[(1)] = (31));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (1))){
var state_41563__$1 = state_41563;
var statearr_41572_41663 = state_41563__$1;
(statearr_41572_41663[(2)] = null);

(statearr_41572_41663[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (24))){
var inst_41464 = (state_41563[(7)]);
var inst_41481 = (state_41563[(2)]);
var inst_41482 = cljs.core.next(inst_41464);
var inst_41444 = inst_41482;
var inst_41445 = null;
var inst_41446 = (0);
var inst_41447 = (0);
var state_41563__$1 = (function (){var statearr_41573 = state_41563;
(statearr_41573[(13)] = inst_41444);

(statearr_41573[(14)] = inst_41447);

(statearr_41573[(15)] = inst_41445);

(statearr_41573[(16)] = inst_41446);

(statearr_41573[(17)] = inst_41481);

return statearr_41573;
})();
var statearr_41574_41664 = state_41563__$1;
(statearr_41574_41664[(2)] = null);

(statearr_41574_41664[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (39))){
var state_41563__$1 = state_41563;
var statearr_41578_41665 = state_41563__$1;
(statearr_41578_41665[(2)] = null);

(statearr_41578_41665[(1)] = (41));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (4))){
var inst_41435 = (state_41563[(9)]);
var inst_41435__$1 = (state_41563[(2)]);
var inst_41436 = (inst_41435__$1 == null);
var state_41563__$1 = (function (){var statearr_41579 = state_41563;
(statearr_41579[(9)] = inst_41435__$1);

return statearr_41579;
})();
if(cljs.core.truth_(inst_41436)){
var statearr_41580_41666 = state_41563__$1;
(statearr_41580_41666[(1)] = (5));

} else {
var statearr_41581_41667 = state_41563__$1;
(statearr_41581_41667[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (15))){
var inst_41444 = (state_41563[(13)]);
var inst_41447 = (state_41563[(14)]);
var inst_41445 = (state_41563[(15)]);
var inst_41446 = (state_41563[(16)]);
var inst_41460 = (state_41563[(2)]);
var inst_41461 = (inst_41447 + (1));
var tmp41575 = inst_41444;
var tmp41576 = inst_41445;
var tmp41577 = inst_41446;
var inst_41444__$1 = tmp41575;
var inst_41445__$1 = tmp41576;
var inst_41446__$1 = tmp41577;
var inst_41447__$1 = inst_41461;
var state_41563__$1 = (function (){var statearr_41582 = state_41563;
(statearr_41582[(13)] = inst_41444__$1);

(statearr_41582[(14)] = inst_41447__$1);

(statearr_41582[(15)] = inst_41445__$1);

(statearr_41582[(16)] = inst_41446__$1);

(statearr_41582[(18)] = inst_41460);

return statearr_41582;
})();
var statearr_41583_41668 = state_41563__$1;
(statearr_41583_41668[(2)] = null);

(statearr_41583_41668[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (21))){
var inst_41485 = (state_41563[(2)]);
var state_41563__$1 = state_41563;
var statearr_41587_41669 = state_41563__$1;
(statearr_41587_41669[(2)] = inst_41485);

(statearr_41587_41669[(1)] = (18));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (31))){
var inst_41511 = (state_41563[(10)]);
var inst_41515 = done(null);
var inst_41516 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41511);
var state_41563__$1 = (function (){var statearr_41588 = state_41563;
(statearr_41588[(19)] = inst_41515);

return statearr_41588;
})();
var statearr_41589_41670 = state_41563__$1;
(statearr_41589_41670[(2)] = inst_41516);

(statearr_41589_41670[(1)] = (32));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (32))){
var inst_41503 = (state_41563[(20)]);
var inst_41506 = (state_41563[(11)]);
var inst_41504 = (state_41563[(12)]);
var inst_41505 = (state_41563[(21)]);
var inst_41518 = (state_41563[(2)]);
var inst_41519 = (inst_41506 + (1));
var tmp41584 = inst_41503;
var tmp41585 = inst_41504;
var tmp41586 = inst_41505;
var inst_41503__$1 = tmp41584;
var inst_41504__$1 = tmp41585;
var inst_41505__$1 = tmp41586;
var inst_41506__$1 = inst_41519;
var state_41563__$1 = (function (){var statearr_41590 = state_41563;
(statearr_41590[(22)] = inst_41518);

(statearr_41590[(20)] = inst_41503__$1);

(statearr_41590[(11)] = inst_41506__$1);

(statearr_41590[(12)] = inst_41504__$1);

(statearr_41590[(21)] = inst_41505__$1);

return statearr_41590;
})();
var statearr_41591_41671 = state_41563__$1;
(statearr_41591_41671[(2)] = null);

(statearr_41591_41671[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (40))){
var inst_41531 = (state_41563[(23)]);
var inst_41535 = done(null);
var inst_41536 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41531);
var state_41563__$1 = (function (){var statearr_41592 = state_41563;
(statearr_41592[(24)] = inst_41535);

return statearr_41592;
})();
var statearr_41593_41672 = state_41563__$1;
(statearr_41593_41672[(2)] = inst_41536);

(statearr_41593_41672[(1)] = (41));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (33))){
var inst_41522 = (state_41563[(25)]);
var inst_41524 = cljs.core.chunked_seq_QMARK_(inst_41522);
var state_41563__$1 = state_41563;
if(inst_41524){
var statearr_41594_41673 = state_41563__$1;
(statearr_41594_41673[(1)] = (36));

} else {
var statearr_41595_41674 = state_41563__$1;
(statearr_41595_41674[(1)] = (37));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (13))){
var inst_41454 = (state_41563[(26)]);
var inst_41457 = cljs.core.async.close_BANG_(inst_41454);
var state_41563__$1 = state_41563;
var statearr_41596_41675 = state_41563__$1;
(statearr_41596_41675[(2)] = inst_41457);

(statearr_41596_41675[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (22))){
var inst_41475 = (state_41563[(8)]);
var inst_41478 = cljs.core.async.close_BANG_(inst_41475);
var state_41563__$1 = state_41563;
var statearr_41597_41676 = state_41563__$1;
(statearr_41597_41676[(2)] = inst_41478);

(statearr_41597_41676[(1)] = (24));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (36))){
var inst_41522 = (state_41563[(25)]);
var inst_41526 = cljs.core.chunk_first(inst_41522);
var inst_41527 = cljs.core.chunk_rest(inst_41522);
var inst_41528 = cljs.core.count(inst_41526);
var inst_41503 = inst_41527;
var inst_41504 = inst_41526;
var inst_41505 = inst_41528;
var inst_41506 = (0);
var state_41563__$1 = (function (){var statearr_41598 = state_41563;
(statearr_41598[(20)] = inst_41503);

(statearr_41598[(11)] = inst_41506);

(statearr_41598[(12)] = inst_41504);

(statearr_41598[(21)] = inst_41505);

return statearr_41598;
})();
var statearr_41599_41677 = state_41563__$1;
(statearr_41599_41677[(2)] = null);

(statearr_41599_41677[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (41))){
var inst_41522 = (state_41563[(25)]);
var inst_41538 = (state_41563[(2)]);
var inst_41539 = cljs.core.next(inst_41522);
var inst_41503 = inst_41539;
var inst_41504 = null;
var inst_41505 = (0);
var inst_41506 = (0);
var state_41563__$1 = (function (){var statearr_41600 = state_41563;
(statearr_41600[(20)] = inst_41503);

(statearr_41600[(27)] = inst_41538);

(statearr_41600[(11)] = inst_41506);

(statearr_41600[(12)] = inst_41504);

(statearr_41600[(21)] = inst_41505);

return statearr_41600;
})();
var statearr_41601_41678 = state_41563__$1;
(statearr_41601_41678[(2)] = null);

(statearr_41601_41678[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (43))){
var state_41563__$1 = state_41563;
var statearr_41602_41679 = state_41563__$1;
(statearr_41602_41679[(2)] = null);

(statearr_41602_41679[(1)] = (44));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (29))){
var inst_41547 = (state_41563[(2)]);
var state_41563__$1 = state_41563;
var statearr_41603_41680 = state_41563__$1;
(statearr_41603_41680[(2)] = inst_41547);

(statearr_41603_41680[(1)] = (26));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (44))){
var inst_41556 = (state_41563[(2)]);
var state_41563__$1 = (function (){var statearr_41604 = state_41563;
(statearr_41604[(28)] = inst_41556);

return statearr_41604;
})();
var statearr_41605_41681 = state_41563__$1;
(statearr_41605_41681[(2)] = null);

(statearr_41605_41681[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (6))){
var inst_41495 = (state_41563[(29)]);
var inst_41494 = (function (){var G__41606 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41606) : cljs.core.deref.call(null,G__41606));
})();
var inst_41495__$1 = cljs.core.keys(inst_41494);
var inst_41496 = cljs.core.count(inst_41495__$1);
var inst_41497 = (function (){var G__41607 = dctr;
var G__41608 = inst_41496;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__41607,G__41608) : cljs.core.reset_BANG_.call(null,G__41607,G__41608));
})();
var inst_41502 = cljs.core.seq(inst_41495__$1);
var inst_41503 = inst_41502;
var inst_41504 = null;
var inst_41505 = (0);
var inst_41506 = (0);
var state_41563__$1 = (function (){var statearr_41609 = state_41563;
(statearr_41609[(30)] = inst_41497);

(statearr_41609[(29)] = inst_41495__$1);

(statearr_41609[(20)] = inst_41503);

(statearr_41609[(11)] = inst_41506);

(statearr_41609[(12)] = inst_41504);

(statearr_41609[(21)] = inst_41505);

return statearr_41609;
})();
var statearr_41610_41682 = state_41563__$1;
(statearr_41610_41682[(2)] = null);

(statearr_41610_41682[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (28))){
var inst_41503 = (state_41563[(20)]);
var inst_41522 = (state_41563[(25)]);
var inst_41522__$1 = cljs.core.seq(inst_41503);
var state_41563__$1 = (function (){var statearr_41611 = state_41563;
(statearr_41611[(25)] = inst_41522__$1);

return statearr_41611;
})();
if(inst_41522__$1){
var statearr_41612_41683 = state_41563__$1;
(statearr_41612_41683[(1)] = (33));

} else {
var statearr_41613_41684 = state_41563__$1;
(statearr_41613_41684[(1)] = (34));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (25))){
var inst_41506 = (state_41563[(11)]);
var inst_41505 = (state_41563[(21)]);
var inst_41508 = (inst_41506 < inst_41505);
var inst_41509 = inst_41508;
var state_41563__$1 = state_41563;
if(cljs.core.truth_(inst_41509)){
var statearr_41614_41685 = state_41563__$1;
(statearr_41614_41685[(1)] = (27));

} else {
var statearr_41615_41686 = state_41563__$1;
(statearr_41615_41686[(1)] = (28));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (34))){
var state_41563__$1 = state_41563;
var statearr_41616_41687 = state_41563__$1;
(statearr_41616_41687[(2)] = null);

(statearr_41616_41687[(1)] = (35));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (17))){
var state_41563__$1 = state_41563;
var statearr_41617_41688 = state_41563__$1;
(statearr_41617_41688[(2)] = null);

(statearr_41617_41688[(1)] = (18));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (3))){
var inst_41561 = (state_41563[(2)]);
var state_41563__$1 = state_41563;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41563__$1,inst_41561);
} else {
if((state_val_41564 === (12))){
var inst_41490 = (state_41563[(2)]);
var state_41563__$1 = state_41563;
var statearr_41618_41689 = state_41563__$1;
(statearr_41618_41689[(2)] = inst_41490);

(statearr_41618_41689[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (2))){
var state_41563__$1 = state_41563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41563__$1,(4),ch);
} else {
if((state_val_41564 === (23))){
var state_41563__$1 = state_41563;
var statearr_41619_41690 = state_41563__$1;
(statearr_41619_41690[(2)] = null);

(statearr_41619_41690[(1)] = (24));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (35))){
var inst_41545 = (state_41563[(2)]);
var state_41563__$1 = state_41563;
var statearr_41620_41691 = state_41563__$1;
(statearr_41620_41691[(2)] = inst_41545);

(statearr_41620_41691[(1)] = (29));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (19))){
var inst_41464 = (state_41563[(7)]);
var inst_41468 = cljs.core.chunk_first(inst_41464);
var inst_41469 = cljs.core.chunk_rest(inst_41464);
var inst_41470 = cljs.core.count(inst_41468);
var inst_41444 = inst_41469;
var inst_41445 = inst_41468;
var inst_41446 = inst_41470;
var inst_41447 = (0);
var state_41563__$1 = (function (){var statearr_41621 = state_41563;
(statearr_41621[(13)] = inst_41444);

(statearr_41621[(14)] = inst_41447);

(statearr_41621[(15)] = inst_41445);

(statearr_41621[(16)] = inst_41446);

return statearr_41621;
})();
var statearr_41622_41692 = state_41563__$1;
(statearr_41622_41692[(2)] = null);

(statearr_41622_41692[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (11))){
var inst_41444 = (state_41563[(13)]);
var inst_41464 = (state_41563[(7)]);
var inst_41464__$1 = cljs.core.seq(inst_41444);
var state_41563__$1 = (function (){var statearr_41623 = state_41563;
(statearr_41623[(7)] = inst_41464__$1);

return statearr_41623;
})();
if(inst_41464__$1){
var statearr_41624_41693 = state_41563__$1;
(statearr_41624_41693[(1)] = (16));

} else {
var statearr_41625_41694 = state_41563__$1;
(statearr_41625_41694[(1)] = (17));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (9))){
var inst_41492 = (state_41563[(2)]);
var state_41563__$1 = state_41563;
var statearr_41626_41695 = state_41563__$1;
(statearr_41626_41695[(2)] = inst_41492);

(statearr_41626_41695[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (5))){
var inst_41442 = (function (){var G__41627 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41627) : cljs.core.deref.call(null,G__41627));
})();
var inst_41443 = cljs.core.seq(inst_41442);
var inst_41444 = inst_41443;
var inst_41445 = null;
var inst_41446 = (0);
var inst_41447 = (0);
var state_41563__$1 = (function (){var statearr_41628 = state_41563;
(statearr_41628[(13)] = inst_41444);

(statearr_41628[(14)] = inst_41447);

(statearr_41628[(15)] = inst_41445);

(statearr_41628[(16)] = inst_41446);

return statearr_41628;
})();
var statearr_41629_41696 = state_41563__$1;
(statearr_41629_41696[(2)] = null);

(statearr_41629_41696[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (14))){
var state_41563__$1 = state_41563;
var statearr_41630_41697 = state_41563__$1;
(statearr_41630_41697[(2)] = null);

(statearr_41630_41697[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (45))){
var inst_41553 = (state_41563[(2)]);
var state_41563__$1 = state_41563;
var statearr_41631_41698 = state_41563__$1;
(statearr_41631_41698[(2)] = inst_41553);

(statearr_41631_41698[(1)] = (44));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (26))){
var inst_41495 = (state_41563[(29)]);
var inst_41549 = (state_41563[(2)]);
var inst_41550 = cljs.core.seq(inst_41495);
var state_41563__$1 = (function (){var statearr_41632 = state_41563;
(statearr_41632[(31)] = inst_41549);

return statearr_41632;
})();
if(inst_41550){
var statearr_41633_41699 = state_41563__$1;
(statearr_41633_41699[(1)] = (42));

} else {
var statearr_41634_41700 = state_41563__$1;
(statearr_41634_41700[(1)] = (43));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (16))){
var inst_41464 = (state_41563[(7)]);
var inst_41466 = cljs.core.chunked_seq_QMARK_(inst_41464);
var state_41563__$1 = state_41563;
if(inst_41466){
var statearr_41635_41701 = state_41563__$1;
(statearr_41635_41701[(1)] = (19));

} else {
var statearr_41636_41702 = state_41563__$1;
(statearr_41636_41702[(1)] = (20));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (38))){
var inst_41542 = (state_41563[(2)]);
var state_41563__$1 = state_41563;
var statearr_41637_41703 = state_41563__$1;
(statearr_41637_41703[(2)] = inst_41542);

(statearr_41637_41703[(1)] = (35));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (30))){
var state_41563__$1 = state_41563;
var statearr_41638_41704 = state_41563__$1;
(statearr_41638_41704[(2)] = null);

(statearr_41638_41704[(1)] = (32));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (10))){
var inst_41447 = (state_41563[(14)]);
var inst_41445 = (state_41563[(15)]);
var inst_41453 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_41445,inst_41447);
var inst_41454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41453,(0),null);
var inst_41455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41453,(1),null);
var state_41563__$1 = (function (){var statearr_41639 = state_41563;
(statearr_41639[(26)] = inst_41454);

return statearr_41639;
})();
if(cljs.core.truth_(inst_41455)){
var statearr_41640_41705 = state_41563__$1;
(statearr_41640_41705[(1)] = (13));

} else {
var statearr_41641_41706 = state_41563__$1;
(statearr_41641_41706[(1)] = (14));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (18))){
var inst_41488 = (state_41563[(2)]);
var state_41563__$1 = state_41563;
var statearr_41642_41707 = state_41563__$1;
(statearr_41642_41707[(2)] = inst_41488);

(statearr_41642_41707[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (42))){
var state_41563__$1 = state_41563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41563__$1,(45),dchan);
} else {
if((state_val_41564 === (37))){
var inst_41435 = (state_41563[(9)]);
var inst_41522 = (state_41563[(25)]);
var inst_41531 = (state_41563[(23)]);
var inst_41531__$1 = cljs.core.first(inst_41522);
var inst_41532 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41531__$1,inst_41435,done);
var state_41563__$1 = (function (){var statearr_41643 = state_41563;
(statearr_41643[(23)] = inst_41531__$1);

return statearr_41643;
})();
if(cljs.core.truth_(inst_41532)){
var statearr_41644_41708 = state_41563__$1;
(statearr_41644_41708[(1)] = (39));

} else {
var statearr_41645_41709 = state_41563__$1;
(statearr_41645_41709[(1)] = (40));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41564 === (8))){
var inst_41447 = (state_41563[(14)]);
var inst_41446 = (state_41563[(16)]);
var inst_41449 = (inst_41447 < inst_41446);
var inst_41450 = inst_41449;
var state_41563__$1 = state_41563;
if(cljs.core.truth_(inst_41450)){
var statearr_41646_41710 = state_41563__$1;
(statearr_41646_41710[(1)] = (10));

} else {
var statearr_41647_41711 = state_41563__$1;
(statearr_41647_41711[(1)] = (11));

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
});})(c__30815__auto___41657,cs,m,dchan,dctr,done))
;
return ((function (switch__30735__auto__,c__30815__auto___41657,cs,m,dchan,dctr,done){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_41651 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41651[(0)] = state_machine__30736__auto__);

(statearr_41651[(1)] = (1));

return statearr_41651;
});
var state_machine__30736__auto____1 = (function (state_41563){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_41563);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e41652){if((e41652 instanceof Object)){
var ex__30739__auto__ = e41652;
var statearr_41653_41712 = state_41563;
(statearr_41653_41712[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41563);

return cljs.core.constant$keyword$21;
} else {
throw e41652;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__41713 = state_41563;
state_41563 = G__41713;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_41563){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_41563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto___41657,cs,m,dchan,dctr,done))
})();
var state__30817__auto__ = (function (){var statearr_41654 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_41654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___41657);

return statearr_41654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto___41657,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj41718 = {};
return obj41718;
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
return (function (){var or__23677__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__41722 = x__24321__auto__;
return goog.typeOf(G__41722);
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
return (function (){var or__23677__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__41726 = x__24321__auto__;
return goog.typeOf(G__41726);
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
return (function (){var or__23677__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__41730 = x__24321__auto__;
return goog.typeOf(G__41730);
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
return (function (){var or__23677__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__41734 = x__24321__auto__;
return goog.typeOf(G__41734);
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
return (function (){var or__23677__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__41738 = x__24321__auto__;
return goog.typeOf(G__41738);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__41739){
var map__41745 = p__41739;
var map__41745__$1 = ((cljs.core.seq_QMARK_(map__41745))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41745):map__41745);
var opts = map__41745__$1;
var statearr_41746_41750 = state;
(statearr_41746_41750[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__41745,map__41745__$1,opts){
return (function (val){
var statearr_41747_41751 = state;
(statearr_41747_41751[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__41745,map__41745__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_41748_41752 = state;
(statearr_41748_41752[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__41749 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41749) : cljs.core.deref.call(null,G__41749));
})());


return cljs.core.constant$keyword$21;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__41739 = null;
if (arguments.length > 3) {
var G__41753__i = 0, G__41753__a = new Array(arguments.length -  3);
while (G__41753__i < G__41753__a.length) {G__41753__a[G__41753__i] = arguments[G__41753__i + 3]; ++G__41753__i;}
  p__41739 = new cljs.core.IndexedSeq(G__41753__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__41739);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__41754){
var state = cljs.core.first(arglist__41754);
arglist__41754 = cljs.core.next(arglist__41754);
var cont_block = cljs.core.first(arglist__41754);
arglist__41754 = cljs.core.next(arglist__41754);
var ports = cljs.core.first(arglist__41754);
var p__41739 = cljs.core.rest(arglist__41754);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__41739);
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
var cs = (function (){var G__41888 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41888) : cljs.core.atom.call(null,G__41888));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$30,null,cljs.core.constant$keyword$31,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$32);
var solo_mode = (function (){var G__41889 = cljs.core.constant$keyword$31;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41889) : cljs.core.atom.call(null,G__41889));
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
if(cljs.core.truth_((function (){var G__41890 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__41890) : attr.call(null,G__41890));
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
var chs = (function (){var G__41891 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41891) : cljs.core.deref.call(null,G__41891));
})();
var mode = (function (){var G__41892 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41892) : cljs.core.deref.call(null,G__41892));
})();
var solos = pick(cljs.core.constant$keyword$32,chs);
var pauses = pick(cljs.core.constant$keyword$30,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$33,solos,cljs.core.constant$keyword$34,pick(cljs.core.constant$keyword$31,chs),cljs.core.constant$keyword$35,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$30)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t41893 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t41893 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41894){
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
this.meta41894 = meta41894;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41893.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t41893.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41893.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41893.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__41896_42021 = self__.cs;
var G__41897_42022 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__41896_42021,G__41897_42022) : cljs.core.reset_BANG_.call(null,G__41896_42021,G__41897_42022));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41893.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41893.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__41898 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__41898) : self__.solo_modes.call(null,G__41898));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__41899_42023 = self__.solo_mode;
var G__41900_42024 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__41899_42023,G__41900_42024) : cljs.core.reset_BANG_.call(null,G__41899_42023,G__41900_42024));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41893.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t41893.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41893.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41895){
var self__ = this;
var _41895__$1 = this;
return self__.meta41894;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41895,meta41894__$1){
var self__ = this;
var _41895__$1 = this;
return (new cljs.core.async.t41893(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta41894__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41893.cljs$lang$type = true;

cljs.core.async.t41893.cljs$lang$ctorStr = "cljs.core.async/t41893";

cljs.core.async.t41893.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__24264__auto__,writer__24265__auto__,opt__24266__auto__){
return cljs.core._write(writer__24265__auto__,"cljs.core.async/t41893");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t41893 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t41893(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41894){
return (new cljs.core.async.t41893(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41894));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t41893(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30815__auto___42025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto___42025,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto___42025,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_41972){
var state_val_41973 = (state_41972[(1)]);
if((state_val_41973 === (7))){
var inst_41914 = (state_41972[(7)]);
var inst_41919 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_41914);
var state_41972__$1 = state_41972;
var statearr_41974_42026 = state_41972__$1;
(statearr_41974_42026[(2)] = inst_41919);

(statearr_41974_42026[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41973 === (20))){
var inst_41929 = (state_41972[(8)]);
var state_41972__$1 = state_41972;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41972__$1,(23),out,inst_41929);
} else {
if((state_val_41973 === (1))){
var inst_41904 = (state_41972[(9)]);
var inst_41904__$1 = calc_state();
var inst_41905 = cljs.core.seq_QMARK_(inst_41904__$1);
var state_41972__$1 = (function (){var statearr_41975 = state_41972;
(statearr_41975[(9)] = inst_41904__$1);

return statearr_41975;
})();
if(inst_41905){
var statearr_41976_42027 = state_41972__$1;
(statearr_41976_42027[(1)] = (2));

} else {
var statearr_41977_42028 = state_41972__$1;
(statearr_41977_42028[(1)] = (3));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41973 === (24))){
var inst_41922 = (state_41972[(10)]);
var inst_41914 = inst_41922;
var state_41972__$1 = (function (){var statearr_41978 = state_41972;
(statearr_41978[(7)] = inst_41914);

return statearr_41978;
})();
var statearr_41979_42029 = state_41972__$1;
(statearr_41979_42029[(2)] = null);

(statearr_41979_42029[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41973 === (4))){
var inst_41904 = (state_41972[(9)]);
var inst_41910 = (state_41972[(2)]);
var inst_41911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41910,cljs.core.constant$keyword$35);
var inst_41912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41910,cljs.core.constant$keyword$34);
var inst_41913 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41910,cljs.core.constant$keyword$33);
var inst_41914 = inst_41904;
var state_41972__$1 = (function (){var statearr_41980 = state_41972;
(statearr_41980[(11)] = inst_41913);

(statearr_41980[(7)] = inst_41914);

(statearr_41980[(12)] = inst_41911);

(statearr_41980[(13)] = inst_41912);

return statearr_41980;
})();
var statearr_41981_42030 = state_41972__$1;
(statearr_41981_42030[(2)] = null);

(statearr_41981_42030[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41973 === (15))){
var state_41972__$1 = state_41972;
var statearr_41982_42031 = state_41972__$1;
(statearr_41982_42031[(2)] = null);

(statearr_41982_42031[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41973 === (21))){
var inst_41922 = (state_41972[(10)]);
var inst_41914 = inst_41922;
var state_41972__$1 = (function (){var statearr_41983 = state_41972;
(statearr_41983[(7)] = inst_41914);

return statearr_41983;
})();
var statearr_41984_42032 = state_41972__$1;
(statearr_41984_42032[(2)] = null);

(statearr_41984_42032[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41973 === (13))){
var inst_41968 = (state_41972[(2)]);
var state_41972__$1 = state_41972;
var statearr_41985_42033 = state_41972__$1;
(statearr_41985_42033[(2)] = inst_41968);

(statearr_41985_42033[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41973 === (22))){
var inst_41966 = (state_41972[(2)]);
var state_41972__$1 = state_41972;
var statearr_41986_42034 = state_41972__$1;
(statearr_41986_42034[(2)] = inst_41966);

(statearr_41986_42034[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41973 === (6))){
var inst_41970 = (state_41972[(2)]);
var state_41972__$1 = state_41972;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41972__$1,inst_41970);
} else {
if((state_val_41973 === (25))){
var state_41972__$1 = state_41972;
var statearr_41987_42035 = state_41972__$1;
(statearr_41987_42035[(2)] = null);

(statearr_41987_42035[(1)] = (26));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41973 === (17))){
var inst_41945 = (state_41972[(14)]);
var state_41972__$1 = state_41972;
var statearr_41988_42036 = state_41972__$1;
(statearr_41988_42036[(2)] = inst_41945);

(statearr_41988_42036[(1)] = (19));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41973 === (3))){
var inst_41904 = (state_41972[(9)]);
var state_41972__$1 = state_41972;
var statearr_41989_42037 = state_41972__$1;
(statearr_41989_42037[(2)] = inst_41904);

(statearr_41989_42037[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41973 === (12))){
var inst_41930 = (state_41972[(15)]);
var inst_41945 = (state_41972[(14)]);
var inst_41925 = (state_41972[(16)]);
var inst_41945__$1 = (function (){var G__41990 = inst_41930;
return (inst_41925.cljs$core$IFn$_invoke$arity$1 ? inst_41925.cljs$core$IFn$_invoke$arity$1(G__41990) : inst_41925.call(null,G__41990));
})();
var state_41972__$1 = (function (){var statearr_41991 = state_41972;
(statearr_41991[(14)] = inst_41945__$1);

return statearr_41991;
})();
if(cljs.core.truth_(inst_41945__$1)){
var statearr_41992_42038 = state_41972__$1;
(statearr_41992_42038[(1)] = (17));

} else {
var statearr_41993_42039 = state_41972__$1;
(statearr_41993_42039[(1)] = (18));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41973 === (2))){
var inst_41904 = (state_41972[(9)]);
var inst_41907 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_41904);
var state_41972__$1 = state_41972;
var statearr_41994_42040 = state_41972__$1;
(statearr_41994_42040[(2)] = inst_41907);

(statearr_41994_42040[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41973 === (23))){
var inst_41957 = (state_41972[(2)]);
var state_41972__$1 = state_41972;
if(cljs.core.truth_(inst_41957)){
var statearr_41995_42041 = state_41972__$1;
(statearr_41995_42041[(1)] = (24));

} else {
var statearr_41996_42042 = state_41972__$1;
(statearr_41996_42042[(1)] = (25));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41973 === (19))){
var inst_41954 = (state_41972[(2)]);
var state_41972__$1 = state_41972;
if(cljs.core.truth_(inst_41954)){
var statearr_41997_42043 = state_41972__$1;
(statearr_41997_42043[(1)] = (20));

} else {
var statearr_41998_42044 = state_41972__$1;
(statearr_41998_42044[(1)] = (21));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41973 === (11))){
var inst_41929 = (state_41972[(8)]);
var inst_41935 = (inst_41929 == null);
var state_41972__$1 = state_41972;
if(cljs.core.truth_(inst_41935)){
var statearr_41999_42045 = state_41972__$1;
(statearr_41999_42045[(1)] = (14));

} else {
var statearr_42000_42046 = state_41972__$1;
(statearr_42000_42046[(1)] = (15));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41973 === (9))){
var inst_41922 = (state_41972[(10)]);
var inst_41922__$1 = (state_41972[(2)]);
var inst_41923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41922__$1,cljs.core.constant$keyword$35);
var inst_41924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41922__$1,cljs.core.constant$keyword$34);
var inst_41925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41922__$1,cljs.core.constant$keyword$33);
var state_41972__$1 = (function (){var statearr_42001 = state_41972;
(statearr_42001[(10)] = inst_41922__$1);

(statearr_42001[(17)] = inst_41924);

(statearr_42001[(16)] = inst_41925);

return statearr_42001;
})();
return cljs.core.async.ioc_alts_BANG_(state_41972__$1,(10),inst_41923);
} else {
if((state_val_41973 === (5))){
var inst_41914 = (state_41972[(7)]);
var inst_41917 = cljs.core.seq_QMARK_(inst_41914);
var state_41972__$1 = state_41972;
if(inst_41917){
var statearr_42002_42047 = state_41972__$1;
(statearr_42002_42047[(1)] = (7));

} else {
var statearr_42003_42048 = state_41972__$1;
(statearr_42003_42048[(1)] = (8));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41973 === (14))){
var inst_41930 = (state_41972[(15)]);
var inst_41937 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_41930);
var state_41972__$1 = state_41972;
var statearr_42004_42049 = state_41972__$1;
(statearr_42004_42049[(2)] = inst_41937);

(statearr_42004_42049[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41973 === (26))){
var inst_41962 = (state_41972[(2)]);
var state_41972__$1 = state_41972;
var statearr_42005_42050 = state_41972__$1;
(statearr_42005_42050[(2)] = inst_41962);

(statearr_42005_42050[(1)] = (22));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41973 === (16))){
var inst_41940 = (state_41972[(2)]);
var inst_41941 = calc_state();
var inst_41914 = inst_41941;
var state_41972__$1 = (function (){var statearr_42006 = state_41972;
(statearr_42006[(18)] = inst_41940);

(statearr_42006[(7)] = inst_41914);

return statearr_42006;
})();
var statearr_42007_42051 = state_41972__$1;
(statearr_42007_42051[(2)] = null);

(statearr_42007_42051[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41973 === (10))){
var inst_41930 = (state_41972[(15)]);
var inst_41929 = (state_41972[(8)]);
var inst_41928 = (state_41972[(2)]);
var inst_41929__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41928,(0),null);
var inst_41930__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41928,(1),null);
var inst_41931 = (inst_41929__$1 == null);
var inst_41932 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41930__$1,change);
var inst_41933 = (inst_41931) || (inst_41932);
var state_41972__$1 = (function (){var statearr_42008 = state_41972;
(statearr_42008[(15)] = inst_41930__$1);

(statearr_42008[(8)] = inst_41929__$1);

return statearr_42008;
})();
if(cljs.core.truth_(inst_41933)){
var statearr_42009_42052 = state_41972__$1;
(statearr_42009_42052[(1)] = (11));

} else {
var statearr_42010_42053 = state_41972__$1;
(statearr_42010_42053[(1)] = (12));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41973 === (18))){
var inst_41930 = (state_41972[(15)]);
var inst_41924 = (state_41972[(17)]);
var inst_41925 = (state_41972[(16)]);
var inst_41949 = cljs.core.empty_QMARK_(inst_41925);
var inst_41950 = (function (){var G__42011 = inst_41930;
return (inst_41924.cljs$core$IFn$_invoke$arity$1 ? inst_41924.cljs$core$IFn$_invoke$arity$1(G__42011) : inst_41924.call(null,G__42011));
})();
var inst_41951 = cljs.core.not(inst_41950);
var inst_41952 = (inst_41949) && (inst_41951);
var state_41972__$1 = state_41972;
var statearr_42012_42054 = state_41972__$1;
(statearr_42012_42054[(2)] = inst_41952);

(statearr_42012_42054[(1)] = (19));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41973 === (8))){
var inst_41914 = (state_41972[(7)]);
var state_41972__$1 = state_41972;
var statearr_42013_42055 = state_41972__$1;
(statearr_42013_42055[(2)] = inst_41914);

(statearr_42013_42055[(1)] = (9));


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
});})(c__30815__auto___42025,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30735__auto__,c__30815__auto___42025,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_42017 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42017[(0)] = state_machine__30736__auto__);

(statearr_42017[(1)] = (1));

return statearr_42017;
});
var state_machine__30736__auto____1 = (function (state_41972){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_41972);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e42018){if((e42018 instanceof Object)){
var ex__30739__auto__ = e42018;
var statearr_42019_42056 = state_41972;
(statearr_42019_42056[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41972);

return cljs.core.constant$keyword$21;
} else {
throw e42018;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__42057 = state_41972;
state_41972 = G__42057;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_41972){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_41972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto___42025,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30817__auto__ = (function (){var statearr_42020 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_42020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___42025);

return statearr_42020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto___42025,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj42059 = {};
return obj42059;
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
return (function (){var or__23677__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__42063 = x__24321__auto__;
return goog.typeOf(G__42063);
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
return (function (){var or__23677__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__42067 = x__24321__auto__;
return goog.typeOf(G__42067);
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
return (function (){var or__23677__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__42073 = x__24321__auto__;
return goog.typeOf(G__42073);
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
return (function (){var or__23677__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__42075 = x__24321__auto__;
return goog.typeOf(G__42075);
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
var mults = (function (){var G__42214 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__42214) : cljs.core.atom.call(null,G__42214));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__23677__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__42216 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42216) : cljs.core.deref.call(null,G__42216));
})(),topic);
if(cljs.core.truth_(or__23677__auto__)){
return or__23677__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__23677__auto__,mults){
return (function (p1__42076_SHARP_){
if(cljs.core.truth_((function (){var G__42217 = topic;
return (p1__42076_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__42076_SHARP_.cljs$core$IFn$_invoke$arity$1(G__42217) : p1__42076_SHARP_.call(null,G__42217));
})())){
return p1__42076_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42076_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__42218 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__42218) : buf_fn.call(null,G__42218));
})())));
}
});})(or__23677__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t42219 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t42219 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta42220){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta42220 = meta42220;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42219.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t42219.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__42222 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__42222) : self__.ensure_mult.call(null,G__42222));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t42219.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__42223 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42223) : cljs.core.deref.call(null,G__42223));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t42219.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__42224 = self__.mults;
var G__42225 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__42224,G__42225) : cljs.core.reset_BANG_.call(null,G__42224,G__42225));
});})(mults,ensure_mult))
;

cljs.core.async.t42219.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t42219.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t42219.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t42219.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42221){
var self__ = this;
var _42221__$1 = this;
return self__.meta42220;
});})(mults,ensure_mult))
;

cljs.core.async.t42219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42221,meta42220__$1){
var self__ = this;
var _42221__$1 = this;
return (new cljs.core.async.t42219(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta42220__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t42219.cljs$lang$type = true;

cljs.core.async.t42219.cljs$lang$ctorStr = "cljs.core.async/t42219";

cljs.core.async.t42219.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__24264__auto__,writer__24265__auto__,opt__24266__auto__){
return cljs.core._write(writer__24265__auto__,"cljs.core.async/t42219");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t42219 = ((function (mults,ensure_mult){
return (function __GT_t42219(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta42220){
return (new cljs.core.async.t42219(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta42220));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t42219(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30815__auto___42348 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto___42348,mults,ensure_mult,p){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto___42348,mults,ensure_mult,p){
return (function (state_42297){
var state_val_42298 = (state_42297[(1)]);
if((state_val_42298 === (7))){
var inst_42293 = (state_42297[(2)]);
var state_42297__$1 = state_42297;
var statearr_42299_42349 = state_42297__$1;
(statearr_42299_42349[(2)] = inst_42293);

(statearr_42299_42349[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42298 === (20))){
var state_42297__$1 = state_42297;
var statearr_42300_42350 = state_42297__$1;
(statearr_42300_42350[(2)] = null);

(statearr_42300_42350[(1)] = (21));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42298 === (1))){
var state_42297__$1 = state_42297;
var statearr_42301_42351 = state_42297__$1;
(statearr_42301_42351[(2)] = null);

(statearr_42301_42351[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42298 === (24))){
var inst_42276 = (state_42297[(7)]);
var inst_42285 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_42276);
var state_42297__$1 = state_42297;
var statearr_42302_42352 = state_42297__$1;
(statearr_42302_42352[(2)] = inst_42285);

(statearr_42302_42352[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42298 === (4))){
var inst_42228 = (state_42297[(8)]);
var inst_42228__$1 = (state_42297[(2)]);
var inst_42229 = (inst_42228__$1 == null);
var state_42297__$1 = (function (){var statearr_42303 = state_42297;
(statearr_42303[(8)] = inst_42228__$1);

return statearr_42303;
})();
if(cljs.core.truth_(inst_42229)){
var statearr_42304_42353 = state_42297__$1;
(statearr_42304_42353[(1)] = (5));

} else {
var statearr_42305_42354 = state_42297__$1;
(statearr_42305_42354[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42298 === (15))){
var inst_42270 = (state_42297[(2)]);
var state_42297__$1 = state_42297;
var statearr_42306_42355 = state_42297__$1;
(statearr_42306_42355[(2)] = inst_42270);

(statearr_42306_42355[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42298 === (21))){
var inst_42290 = (state_42297[(2)]);
var state_42297__$1 = (function (){var statearr_42307 = state_42297;
(statearr_42307[(9)] = inst_42290);

return statearr_42307;
})();
var statearr_42308_42356 = state_42297__$1;
(statearr_42308_42356[(2)] = null);

(statearr_42308_42356[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42298 === (13))){
var inst_42252 = (state_42297[(10)]);
var inst_42254 = cljs.core.chunked_seq_QMARK_(inst_42252);
var state_42297__$1 = state_42297;
if(inst_42254){
var statearr_42309_42357 = state_42297__$1;
(statearr_42309_42357[(1)] = (16));

} else {
var statearr_42310_42358 = state_42297__$1;
(statearr_42310_42358[(1)] = (17));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42298 === (22))){
var inst_42282 = (state_42297[(2)]);
var state_42297__$1 = state_42297;
if(cljs.core.truth_(inst_42282)){
var statearr_42311_42359 = state_42297__$1;
(statearr_42311_42359[(1)] = (23));

} else {
var statearr_42312_42360 = state_42297__$1;
(statearr_42312_42360[(1)] = (24));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42298 === (6))){
var inst_42276 = (state_42297[(7)]);
var inst_42278 = (state_42297[(11)]);
var inst_42228 = (state_42297[(8)]);
var inst_42276__$1 = (function (){var G__42313 = inst_42228;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__42313) : topic_fn.call(null,G__42313));
})();
var inst_42277 = (function (){var G__42314 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42314) : cljs.core.deref.call(null,G__42314));
})();
var inst_42278__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42277,inst_42276__$1);
var state_42297__$1 = (function (){var statearr_42315 = state_42297;
(statearr_42315[(7)] = inst_42276__$1);

(statearr_42315[(11)] = inst_42278__$1);

return statearr_42315;
})();
if(cljs.core.truth_(inst_42278__$1)){
var statearr_42316_42361 = state_42297__$1;
(statearr_42316_42361[(1)] = (19));

} else {
var statearr_42317_42362 = state_42297__$1;
(statearr_42317_42362[(1)] = (20));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42298 === (25))){
var inst_42287 = (state_42297[(2)]);
var state_42297__$1 = state_42297;
var statearr_42318_42363 = state_42297__$1;
(statearr_42318_42363[(2)] = inst_42287);

(statearr_42318_42363[(1)] = (21));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42298 === (17))){
var inst_42252 = (state_42297[(10)]);
var inst_42261 = cljs.core.first(inst_42252);
var inst_42262 = cljs.core.async.muxch_STAR_(inst_42261);
var inst_42263 = cljs.core.async.close_BANG_(inst_42262);
var inst_42264 = cljs.core.next(inst_42252);
var inst_42238 = inst_42264;
var inst_42239 = null;
var inst_42240 = (0);
var inst_42241 = (0);
var state_42297__$1 = (function (){var statearr_42319 = state_42297;
(statearr_42319[(12)] = inst_42239);

(statearr_42319[(13)] = inst_42240);

(statearr_42319[(14)] = inst_42241);

(statearr_42319[(15)] = inst_42238);

(statearr_42319[(16)] = inst_42263);

return statearr_42319;
})();
var statearr_42320_42364 = state_42297__$1;
(statearr_42320_42364[(2)] = null);

(statearr_42320_42364[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42298 === (3))){
var inst_42295 = (state_42297[(2)]);
var state_42297__$1 = state_42297;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42297__$1,inst_42295);
} else {
if((state_val_42298 === (12))){
var inst_42272 = (state_42297[(2)]);
var state_42297__$1 = state_42297;
var statearr_42321_42365 = state_42297__$1;
(statearr_42321_42365[(2)] = inst_42272);

(statearr_42321_42365[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42298 === (2))){
var state_42297__$1 = state_42297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42297__$1,(4),ch);
} else {
if((state_val_42298 === (23))){
var state_42297__$1 = state_42297;
var statearr_42322_42366 = state_42297__$1;
(statearr_42322_42366[(2)] = null);

(statearr_42322_42366[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42298 === (19))){
var inst_42278 = (state_42297[(11)]);
var inst_42228 = (state_42297[(8)]);
var inst_42280 = cljs.core.async.muxch_STAR_(inst_42278);
var state_42297__$1 = state_42297;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42297__$1,(22),inst_42280,inst_42228);
} else {
if((state_val_42298 === (11))){
var inst_42252 = (state_42297[(10)]);
var inst_42238 = (state_42297[(15)]);
var inst_42252__$1 = cljs.core.seq(inst_42238);
var state_42297__$1 = (function (){var statearr_42323 = state_42297;
(statearr_42323[(10)] = inst_42252__$1);

return statearr_42323;
})();
if(inst_42252__$1){
var statearr_42324_42367 = state_42297__$1;
(statearr_42324_42367[(1)] = (13));

} else {
var statearr_42325_42368 = state_42297__$1;
(statearr_42325_42368[(1)] = (14));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42298 === (9))){
var inst_42274 = (state_42297[(2)]);
var state_42297__$1 = state_42297;
var statearr_42326_42369 = state_42297__$1;
(statearr_42326_42369[(2)] = inst_42274);

(statearr_42326_42369[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42298 === (5))){
var inst_42235 = (function (){var G__42327 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42327) : cljs.core.deref.call(null,G__42327));
})();
var inst_42236 = cljs.core.vals(inst_42235);
var inst_42237 = cljs.core.seq(inst_42236);
var inst_42238 = inst_42237;
var inst_42239 = null;
var inst_42240 = (0);
var inst_42241 = (0);
var state_42297__$1 = (function (){var statearr_42328 = state_42297;
(statearr_42328[(12)] = inst_42239);

(statearr_42328[(13)] = inst_42240);

(statearr_42328[(14)] = inst_42241);

(statearr_42328[(15)] = inst_42238);

return statearr_42328;
})();
var statearr_42329_42370 = state_42297__$1;
(statearr_42329_42370[(2)] = null);

(statearr_42329_42370[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42298 === (14))){
var state_42297__$1 = state_42297;
var statearr_42333_42371 = state_42297__$1;
(statearr_42333_42371[(2)] = null);

(statearr_42333_42371[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42298 === (16))){
var inst_42252 = (state_42297[(10)]);
var inst_42256 = cljs.core.chunk_first(inst_42252);
var inst_42257 = cljs.core.chunk_rest(inst_42252);
var inst_42258 = cljs.core.count(inst_42256);
var inst_42238 = inst_42257;
var inst_42239 = inst_42256;
var inst_42240 = inst_42258;
var inst_42241 = (0);
var state_42297__$1 = (function (){var statearr_42334 = state_42297;
(statearr_42334[(12)] = inst_42239);

(statearr_42334[(13)] = inst_42240);

(statearr_42334[(14)] = inst_42241);

(statearr_42334[(15)] = inst_42238);

return statearr_42334;
})();
var statearr_42335_42372 = state_42297__$1;
(statearr_42335_42372[(2)] = null);

(statearr_42335_42372[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42298 === (10))){
var inst_42239 = (state_42297[(12)]);
var inst_42240 = (state_42297[(13)]);
var inst_42241 = (state_42297[(14)]);
var inst_42238 = (state_42297[(15)]);
var inst_42246 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_42239,inst_42241);
var inst_42247 = cljs.core.async.muxch_STAR_(inst_42246);
var inst_42248 = cljs.core.async.close_BANG_(inst_42247);
var inst_42249 = (inst_42241 + (1));
var tmp42330 = inst_42239;
var tmp42331 = inst_42240;
var tmp42332 = inst_42238;
var inst_42238__$1 = tmp42332;
var inst_42239__$1 = tmp42330;
var inst_42240__$1 = tmp42331;
var inst_42241__$1 = inst_42249;
var state_42297__$1 = (function (){var statearr_42336 = state_42297;
(statearr_42336[(12)] = inst_42239__$1);

(statearr_42336[(17)] = inst_42248);

(statearr_42336[(13)] = inst_42240__$1);

(statearr_42336[(14)] = inst_42241__$1);

(statearr_42336[(15)] = inst_42238__$1);

return statearr_42336;
})();
var statearr_42337_42373 = state_42297__$1;
(statearr_42337_42373[(2)] = null);

(statearr_42337_42373[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42298 === (18))){
var inst_42267 = (state_42297[(2)]);
var state_42297__$1 = state_42297;
var statearr_42338_42374 = state_42297__$1;
(statearr_42338_42374[(2)] = inst_42267);

(statearr_42338_42374[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42298 === (8))){
var inst_42240 = (state_42297[(13)]);
var inst_42241 = (state_42297[(14)]);
var inst_42243 = (inst_42241 < inst_42240);
var inst_42244 = inst_42243;
var state_42297__$1 = state_42297;
if(cljs.core.truth_(inst_42244)){
var statearr_42339_42375 = state_42297__$1;
(statearr_42339_42375[(1)] = (10));

} else {
var statearr_42340_42376 = state_42297__$1;
(statearr_42340_42376[(1)] = (11));

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
});})(c__30815__auto___42348,mults,ensure_mult,p))
;
return ((function (switch__30735__auto__,c__30815__auto___42348,mults,ensure_mult,p){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_42344 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42344[(0)] = state_machine__30736__auto__);

(statearr_42344[(1)] = (1));

return statearr_42344;
});
var state_machine__30736__auto____1 = (function (state_42297){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_42297);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e42345){if((e42345 instanceof Object)){
var ex__30739__auto__ = e42345;
var statearr_42346_42377 = state_42297;
(statearr_42346_42377[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42297);

return cljs.core.constant$keyword$21;
} else {
throw e42345;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__42378 = state_42297;
state_42297 = G__42378;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_42297){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_42297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto___42348,mults,ensure_mult,p))
})();
var state__30817__auto__ = (function (){var statearr_42347 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_42347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___42348);

return statearr_42347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto___42348,mults,ensure_mult,p))
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
var dctr = (function (){var G__42459 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__42459) : cljs.core.atom.call(null,G__42459));
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
var c__30815__auto___42532 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto___42532,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto___42532,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42498){
var state_val_42499 = (state_42498[(1)]);
if((state_val_42499 === (7))){
var state_42498__$1 = state_42498;
var statearr_42500_42533 = state_42498__$1;
(statearr_42500_42533[(2)] = null);

(statearr_42500_42533[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42499 === (1))){
var state_42498__$1 = state_42498;
var statearr_42501_42534 = state_42498__$1;
(statearr_42501_42534[(2)] = null);

(statearr_42501_42534[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42499 === (4))){
var inst_42462 = (state_42498[(7)]);
var inst_42464 = (inst_42462 < cnt);
var state_42498__$1 = state_42498;
if(cljs.core.truth_(inst_42464)){
var statearr_42502_42535 = state_42498__$1;
(statearr_42502_42535[(1)] = (6));

} else {
var statearr_42503_42536 = state_42498__$1;
(statearr_42503_42536[(1)] = (7));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42499 === (15))){
var inst_42494 = (state_42498[(2)]);
var state_42498__$1 = state_42498;
var statearr_42504_42537 = state_42498__$1;
(statearr_42504_42537[(2)] = inst_42494);

(statearr_42504_42537[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42499 === (13))){
var inst_42487 = cljs.core.async.close_BANG_(out);
var state_42498__$1 = state_42498;
var statearr_42505_42538 = state_42498__$1;
(statearr_42505_42538[(2)] = inst_42487);

(statearr_42505_42538[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42499 === (6))){
var state_42498__$1 = state_42498;
var statearr_42506_42539 = state_42498__$1;
(statearr_42506_42539[(2)] = null);

(statearr_42506_42539[(1)] = (11));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42499 === (3))){
var inst_42496 = (state_42498[(2)]);
var state_42498__$1 = state_42498;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42498__$1,inst_42496);
} else {
if((state_val_42499 === (12))){
var inst_42484 = (state_42498[(8)]);
var inst_42484__$1 = (state_42498[(2)]);
var inst_42485 = cljs.core.some(cljs.core.nil_QMARK_,inst_42484__$1);
var state_42498__$1 = (function (){var statearr_42507 = state_42498;
(statearr_42507[(8)] = inst_42484__$1);

return statearr_42507;
})();
if(cljs.core.truth_(inst_42485)){
var statearr_42508_42540 = state_42498__$1;
(statearr_42508_42540[(1)] = (13));

} else {
var statearr_42509_42541 = state_42498__$1;
(statearr_42509_42541[(1)] = (14));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42499 === (2))){
var inst_42461 = (function (){var G__42510 = dctr;
var G__42511 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__42510,G__42511) : cljs.core.reset_BANG_.call(null,G__42510,G__42511));
})();
var inst_42462 = (0);
var state_42498__$1 = (function (){var statearr_42512 = state_42498;
(statearr_42512[(9)] = inst_42461);

(statearr_42512[(7)] = inst_42462);

return statearr_42512;
})();
var statearr_42513_42542 = state_42498__$1;
(statearr_42513_42542[(2)] = null);

(statearr_42513_42542[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42499 === (11))){
var inst_42462 = (state_42498[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_42498,(10),Object,null,(9));
var inst_42471 = (function (){var G__42514 = inst_42462;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__42514) : chs__$1.call(null,G__42514));
})();
var inst_42472 = (function (){var G__42515 = inst_42462;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__42515) : done.call(null,G__42515));
})();
var inst_42473 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_42471,inst_42472);
var state_42498__$1 = state_42498;
var statearr_42516_42543 = state_42498__$1;
(statearr_42516_42543[(2)] = inst_42473);


cljs.core.async.impl.ioc_helpers.process_exception(state_42498__$1);

return cljs.core.constant$keyword$21;
} else {
if((state_val_42499 === (9))){
var inst_42462 = (state_42498[(7)]);
var inst_42475 = (state_42498[(2)]);
var inst_42476 = (inst_42462 + (1));
var inst_42462__$1 = inst_42476;
var state_42498__$1 = (function (){var statearr_42517 = state_42498;
(statearr_42517[(10)] = inst_42475);

(statearr_42517[(7)] = inst_42462__$1);

return statearr_42517;
})();
var statearr_42518_42544 = state_42498__$1;
(statearr_42518_42544[(2)] = null);

(statearr_42518_42544[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42499 === (5))){
var inst_42482 = (state_42498[(2)]);
var state_42498__$1 = (function (){var statearr_42519 = state_42498;
(statearr_42519[(11)] = inst_42482);

return statearr_42519;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42498__$1,(12),dchan);
} else {
if((state_val_42499 === (14))){
var inst_42484 = (state_42498[(8)]);
var inst_42489 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_42484);
var state_42498__$1 = state_42498;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42498__$1,(16),out,inst_42489);
} else {
if((state_val_42499 === (16))){
var inst_42491 = (state_42498[(2)]);
var state_42498__$1 = (function (){var statearr_42520 = state_42498;
(statearr_42520[(12)] = inst_42491);

return statearr_42520;
})();
var statearr_42521_42545 = state_42498__$1;
(statearr_42521_42545[(2)] = null);

(statearr_42521_42545[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42499 === (10))){
var inst_42466 = (state_42498[(2)]);
var inst_42467 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_42498__$1 = (function (){var statearr_42522 = state_42498;
(statearr_42522[(13)] = inst_42466);

return statearr_42522;
})();
var statearr_42523_42546 = state_42498__$1;
(statearr_42523_42546[(2)] = inst_42467);


cljs.core.async.impl.ioc_helpers.process_exception(state_42498__$1);

return cljs.core.constant$keyword$21;
} else {
if((state_val_42499 === (8))){
var inst_42480 = (state_42498[(2)]);
var state_42498__$1 = state_42498;
var statearr_42524_42547 = state_42498__$1;
(statearr_42524_42547[(2)] = inst_42480);

(statearr_42524_42547[(1)] = (5));


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
});})(c__30815__auto___42532,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30735__auto__,c__30815__auto___42532,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_42528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42528[(0)] = state_machine__30736__auto__);

(statearr_42528[(1)] = (1));

return statearr_42528;
});
var state_machine__30736__auto____1 = (function (state_42498){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_42498);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e42529){if((e42529 instanceof Object)){
var ex__30739__auto__ = e42529;
var statearr_42530_42548 = state_42498;
(statearr_42530_42548[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42498);

return cljs.core.constant$keyword$21;
} else {
throw e42529;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__42549 = state_42498;
state_42498 = G__42549;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_42498){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_42498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto___42532,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30817__auto__ = (function (){var statearr_42531 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_42531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___42532);

return statearr_42531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto___42532,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__30815__auto___42659 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto___42659,out){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto___42659,out){
return (function (state_42635){
var state_val_42636 = (state_42635[(1)]);
if((state_val_42636 === (7))){
var inst_42614 = (state_42635[(7)]);
var inst_42615 = (state_42635[(8)]);
var inst_42614__$1 = (state_42635[(2)]);
var inst_42615__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42614__$1,(0),null);
var inst_42616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42614__$1,(1),null);
var inst_42617 = (inst_42615__$1 == null);
var state_42635__$1 = (function (){var statearr_42637 = state_42635;
(statearr_42637[(9)] = inst_42616);

(statearr_42637[(7)] = inst_42614__$1);

(statearr_42637[(8)] = inst_42615__$1);

return statearr_42637;
})();
if(cljs.core.truth_(inst_42617)){
var statearr_42638_42660 = state_42635__$1;
(statearr_42638_42660[(1)] = (8));

} else {
var statearr_42639_42661 = state_42635__$1;
(statearr_42639_42661[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42636 === (1))){
var inst_42606 = cljs.core.vec(chs);
var inst_42607 = inst_42606;
var state_42635__$1 = (function (){var statearr_42640 = state_42635;
(statearr_42640[(10)] = inst_42607);

return statearr_42640;
})();
var statearr_42641_42662 = state_42635__$1;
(statearr_42641_42662[(2)] = null);

(statearr_42641_42662[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42636 === (4))){
var inst_42607 = (state_42635[(10)]);
var state_42635__$1 = state_42635;
return cljs.core.async.ioc_alts_BANG_(state_42635__$1,(7),inst_42607);
} else {
if((state_val_42636 === (6))){
var inst_42631 = (state_42635[(2)]);
var state_42635__$1 = state_42635;
var statearr_42642_42663 = state_42635__$1;
(statearr_42642_42663[(2)] = inst_42631);

(statearr_42642_42663[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42636 === (3))){
var inst_42633 = (state_42635[(2)]);
var state_42635__$1 = state_42635;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42635__$1,inst_42633);
} else {
if((state_val_42636 === (2))){
var inst_42607 = (state_42635[(10)]);
var inst_42609 = cljs.core.count(inst_42607);
var inst_42610 = (inst_42609 > (0));
var state_42635__$1 = state_42635;
if(cljs.core.truth_(inst_42610)){
var statearr_42644_42664 = state_42635__$1;
(statearr_42644_42664[(1)] = (4));

} else {
var statearr_42645_42665 = state_42635__$1;
(statearr_42645_42665[(1)] = (5));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42636 === (11))){
var inst_42607 = (state_42635[(10)]);
var inst_42624 = (state_42635[(2)]);
var tmp42643 = inst_42607;
var inst_42607__$1 = tmp42643;
var state_42635__$1 = (function (){var statearr_42646 = state_42635;
(statearr_42646[(11)] = inst_42624);

(statearr_42646[(10)] = inst_42607__$1);

return statearr_42646;
})();
var statearr_42647_42666 = state_42635__$1;
(statearr_42647_42666[(2)] = null);

(statearr_42647_42666[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42636 === (9))){
var inst_42615 = (state_42635[(8)]);
var state_42635__$1 = state_42635;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42635__$1,(11),out,inst_42615);
} else {
if((state_val_42636 === (5))){
var inst_42629 = cljs.core.async.close_BANG_(out);
var state_42635__$1 = state_42635;
var statearr_42648_42667 = state_42635__$1;
(statearr_42648_42667[(2)] = inst_42629);

(statearr_42648_42667[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42636 === (10))){
var inst_42627 = (state_42635[(2)]);
var state_42635__$1 = state_42635;
var statearr_42649_42668 = state_42635__$1;
(statearr_42649_42668[(2)] = inst_42627);

(statearr_42649_42668[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42636 === (8))){
var inst_42616 = (state_42635[(9)]);
var inst_42614 = (state_42635[(7)]);
var inst_42615 = (state_42635[(8)]);
var inst_42607 = (state_42635[(10)]);
var inst_42619 = (function (){var c = inst_42616;
var v = inst_42615;
var vec__42612 = inst_42614;
var cs = inst_42607;
return ((function (c,v,vec__42612,cs,inst_42616,inst_42614,inst_42615,inst_42607,state_val_42636,c__30815__auto___42659,out){
return (function (p1__42550_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__42550_SHARP_);
});
;})(c,v,vec__42612,cs,inst_42616,inst_42614,inst_42615,inst_42607,state_val_42636,c__30815__auto___42659,out))
})();
var inst_42620 = cljs.core.filterv(inst_42619,inst_42607);
var inst_42607__$1 = inst_42620;
var state_42635__$1 = (function (){var statearr_42650 = state_42635;
(statearr_42650[(10)] = inst_42607__$1);

return statearr_42650;
})();
var statearr_42651_42669 = state_42635__$1;
(statearr_42651_42669[(2)] = null);

(statearr_42651_42669[(1)] = (2));


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
});})(c__30815__auto___42659,out))
;
return ((function (switch__30735__auto__,c__30815__auto___42659,out){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_42655 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42655[(0)] = state_machine__30736__auto__);

(statearr_42655[(1)] = (1));

return statearr_42655;
});
var state_machine__30736__auto____1 = (function (state_42635){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_42635);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e42656){if((e42656 instanceof Object)){
var ex__30739__auto__ = e42656;
var statearr_42657_42670 = state_42635;
(statearr_42657_42670[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42635);

return cljs.core.constant$keyword$21;
} else {
throw e42656;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__42671 = state_42635;
state_42635 = G__42671;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_42635){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_42635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto___42659,out))
})();
var state__30817__auto__ = (function (){var statearr_42658 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_42658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___42659);

return statearr_42658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto___42659,out))
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
var c__30815__auto___42767 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto___42767,out){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto___42767,out){
return (function (state_42744){
var state_val_42745 = (state_42744[(1)]);
if((state_val_42745 === (7))){
var inst_42726 = (state_42744[(7)]);
var inst_42726__$1 = (state_42744[(2)]);
var inst_42727 = (inst_42726__$1 == null);
var inst_42728 = cljs.core.not(inst_42727);
var state_42744__$1 = (function (){var statearr_42746 = state_42744;
(statearr_42746[(7)] = inst_42726__$1);

return statearr_42746;
})();
if(inst_42728){
var statearr_42747_42768 = state_42744__$1;
(statearr_42747_42768[(1)] = (8));

} else {
var statearr_42748_42769 = state_42744__$1;
(statearr_42748_42769[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42745 === (1))){
var inst_42721 = (0);
var state_42744__$1 = (function (){var statearr_42749 = state_42744;
(statearr_42749[(8)] = inst_42721);

return statearr_42749;
})();
var statearr_42750_42770 = state_42744__$1;
(statearr_42750_42770[(2)] = null);

(statearr_42750_42770[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42745 === (4))){
var state_42744__$1 = state_42744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42744__$1,(7),ch);
} else {
if((state_val_42745 === (6))){
var inst_42739 = (state_42744[(2)]);
var state_42744__$1 = state_42744;
var statearr_42751_42771 = state_42744__$1;
(statearr_42751_42771[(2)] = inst_42739);

(statearr_42751_42771[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42745 === (3))){
var inst_42741 = (state_42744[(2)]);
var inst_42742 = cljs.core.async.close_BANG_(out);
var state_42744__$1 = (function (){var statearr_42752 = state_42744;
(statearr_42752[(9)] = inst_42741);

return statearr_42752;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42744__$1,inst_42742);
} else {
if((state_val_42745 === (2))){
var inst_42721 = (state_42744[(8)]);
var inst_42723 = (inst_42721 < n);
var state_42744__$1 = state_42744;
if(cljs.core.truth_(inst_42723)){
var statearr_42753_42772 = state_42744__$1;
(statearr_42753_42772[(1)] = (4));

} else {
var statearr_42754_42773 = state_42744__$1;
(statearr_42754_42773[(1)] = (5));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42745 === (11))){
var inst_42721 = (state_42744[(8)]);
var inst_42731 = (state_42744[(2)]);
var inst_42732 = (inst_42721 + (1));
var inst_42721__$1 = inst_42732;
var state_42744__$1 = (function (){var statearr_42755 = state_42744;
(statearr_42755[(10)] = inst_42731);

(statearr_42755[(8)] = inst_42721__$1);

return statearr_42755;
})();
var statearr_42756_42774 = state_42744__$1;
(statearr_42756_42774[(2)] = null);

(statearr_42756_42774[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42745 === (9))){
var state_42744__$1 = state_42744;
var statearr_42757_42775 = state_42744__$1;
(statearr_42757_42775[(2)] = null);

(statearr_42757_42775[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42745 === (5))){
var state_42744__$1 = state_42744;
var statearr_42758_42776 = state_42744__$1;
(statearr_42758_42776[(2)] = null);

(statearr_42758_42776[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42745 === (10))){
var inst_42736 = (state_42744[(2)]);
var state_42744__$1 = state_42744;
var statearr_42759_42777 = state_42744__$1;
(statearr_42759_42777[(2)] = inst_42736);

(statearr_42759_42777[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42745 === (8))){
var inst_42726 = (state_42744[(7)]);
var state_42744__$1 = state_42744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42744__$1,(11),out,inst_42726);
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
});})(c__30815__auto___42767,out))
;
return ((function (switch__30735__auto__,c__30815__auto___42767,out){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_42763 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42763[(0)] = state_machine__30736__auto__);

(statearr_42763[(1)] = (1));

return statearr_42763;
});
var state_machine__30736__auto____1 = (function (state_42744){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_42744);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e42764){if((e42764 instanceof Object)){
var ex__30739__auto__ = e42764;
var statearr_42765_42778 = state_42744;
(statearr_42765_42778[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42744);

return cljs.core.constant$keyword$21;
} else {
throw e42764;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__42779 = state_42744;
state_42744 = G__42779;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_42744){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_42744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto___42767,out))
})();
var state__30817__auto__ = (function (){var statearr_42766 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_42766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___42767);

return statearr_42766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto___42767,out))
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
if(typeof cljs.core.async.t42792 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t42792 = (function (ch,f,map_LT_,meta42793){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta42793 = meta42793;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42792.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t42792.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t42792.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t42792.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t42795 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t42795 = (function (fn1,_,meta42793,map_LT_,f,ch,meta42796){
this.fn1 = fn1;
this._ = _;
this.meta42793 = meta42793;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta42796 = meta42796;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42795.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t42795.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t42795.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__42780_SHARP_){
var G__42798 = (((p1__42780_SHARP_ == null))?null:(function (){var G__42799 = p1__42780_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__42799) : self__.f.call(null,G__42799));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__42798) : f1.call(null,G__42798));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t42795.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_42797){
var self__ = this;
var _42797__$1 = this;
return self__.meta42796;
});})(___$1))
;

cljs.core.async.t42795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_42797,meta42796__$1){
var self__ = this;
var _42797__$1 = this;
return (new cljs.core.async.t42795(self__.fn1,self__._,self__.meta42793,self__.map_LT_,self__.f,self__.ch,meta42796__$1));
});})(___$1))
;

cljs.core.async.t42795.cljs$lang$type = true;

cljs.core.async.t42795.cljs$lang$ctorStr = "cljs.core.async/t42795";

cljs.core.async.t42795.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__24264__auto__,writer__24265__auto__,opt__24266__auto__){
return cljs.core._write(writer__24265__auto__,"cljs.core.async/t42795");
});})(___$1))
;

cljs.core.async.__GT_t42795 = ((function (___$1){
return (function __GT_t42795(fn1__$1,___$2,meta42793__$1,map_LT___$1,f__$1,ch__$1,meta42796){
return (new cljs.core.async.t42795(fn1__$1,___$2,meta42793__$1,map_LT___$1,f__$1,ch__$1,meta42796));
});})(___$1))
;

}

return (new cljs.core.async.t42795(fn1,___$1,self__.meta42793,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__23665__auto__ = ret;
if(cljs.core.truth_(and__23665__auto__)){
return !(((function (){var G__42800 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42800) : cljs.core.deref.call(null,G__42800));
})() == null));
} else {
return and__23665__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__42801 = (function (){var G__42802 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42802) : cljs.core.deref.call(null,G__42802));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__42801) : self__.f.call(null,G__42801));
})());
} else {
return ret;
}
});

cljs.core.async.t42792.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t42792.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t42792.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t42792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42794){
var self__ = this;
var _42794__$1 = this;
return self__.meta42793;
});

cljs.core.async.t42792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42794,meta42793__$1){
var self__ = this;
var _42794__$1 = this;
return (new cljs.core.async.t42792(self__.ch,self__.f,self__.map_LT_,meta42793__$1));
});

cljs.core.async.t42792.cljs$lang$type = true;

cljs.core.async.t42792.cljs$lang$ctorStr = "cljs.core.async/t42792";

cljs.core.async.t42792.cljs$lang$ctorPrWriter = (function (this__24264__auto__,writer__24265__auto__,opt__24266__auto__){
return cljs.core._write(writer__24265__auto__,"cljs.core.async/t42792");
});

cljs.core.async.__GT_t42792 = (function __GT_t42792(ch__$1,f__$1,map_LT___$1,meta42793){
return (new cljs.core.async.t42792(ch__$1,f__$1,map_LT___$1,meta42793));
});

}

return (new cljs.core.async.t42792(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t42807 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t42807 = (function (ch,f,map_GT_,meta42808){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta42808 = meta42808;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42807.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t42807.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__42810 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__42810) : self__.f.call(null,G__42810));
})(),fn1);
});

cljs.core.async.t42807.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t42807.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t42807.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t42807.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t42807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42809){
var self__ = this;
var _42809__$1 = this;
return self__.meta42808;
});

cljs.core.async.t42807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42809,meta42808__$1){
var self__ = this;
var _42809__$1 = this;
return (new cljs.core.async.t42807(self__.ch,self__.f,self__.map_GT_,meta42808__$1));
});

cljs.core.async.t42807.cljs$lang$type = true;

cljs.core.async.t42807.cljs$lang$ctorStr = "cljs.core.async/t42807";

cljs.core.async.t42807.cljs$lang$ctorPrWriter = (function (this__24264__auto__,writer__24265__auto__,opt__24266__auto__){
return cljs.core._write(writer__24265__auto__,"cljs.core.async/t42807");
});

cljs.core.async.__GT_t42807 = (function __GT_t42807(ch__$1,f__$1,map_GT___$1,meta42808){
return (new cljs.core.async.t42807(ch__$1,f__$1,map_GT___$1,meta42808));
});

}

return (new cljs.core.async.t42807(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t42815 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t42815 = (function (ch,p,filter_GT_,meta42816){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta42816 = meta42816;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42815.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t42815.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__42818 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__42818) : self__.p.call(null,G__42818));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t42815.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t42815.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t42815.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t42815.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t42815.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t42815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42817){
var self__ = this;
var _42817__$1 = this;
return self__.meta42816;
});

cljs.core.async.t42815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42817,meta42816__$1){
var self__ = this;
var _42817__$1 = this;
return (new cljs.core.async.t42815(self__.ch,self__.p,self__.filter_GT_,meta42816__$1));
});

cljs.core.async.t42815.cljs$lang$type = true;

cljs.core.async.t42815.cljs$lang$ctorStr = "cljs.core.async/t42815";

cljs.core.async.t42815.cljs$lang$ctorPrWriter = (function (this__24264__auto__,writer__24265__auto__,opt__24266__auto__){
return cljs.core._write(writer__24265__auto__,"cljs.core.async/t42815");
});

cljs.core.async.__GT_t42815 = (function __GT_t42815(ch__$1,p__$1,filter_GT___$1,meta42816){
return (new cljs.core.async.t42815(ch__$1,p__$1,filter_GT___$1,meta42816));
});

}

return (new cljs.core.async.t42815(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30815__auto___42906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto___42906,out){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto___42906,out){
return (function (state_42884){
var state_val_42885 = (state_42884[(1)]);
if((state_val_42885 === (7))){
var inst_42880 = (state_42884[(2)]);
var state_42884__$1 = state_42884;
var statearr_42886_42907 = state_42884__$1;
(statearr_42886_42907[(2)] = inst_42880);

(statearr_42886_42907[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42885 === (1))){
var state_42884__$1 = state_42884;
var statearr_42887_42908 = state_42884__$1;
(statearr_42887_42908[(2)] = null);

(statearr_42887_42908[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42885 === (4))){
var inst_42866 = (state_42884[(7)]);
var inst_42866__$1 = (state_42884[(2)]);
var inst_42867 = (inst_42866__$1 == null);
var state_42884__$1 = (function (){var statearr_42888 = state_42884;
(statearr_42888[(7)] = inst_42866__$1);

return statearr_42888;
})();
if(cljs.core.truth_(inst_42867)){
var statearr_42889_42909 = state_42884__$1;
(statearr_42889_42909[(1)] = (5));

} else {
var statearr_42890_42910 = state_42884__$1;
(statearr_42890_42910[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42885 === (6))){
var inst_42866 = (state_42884[(7)]);
var inst_42871 = (function (){var G__42891 = inst_42866;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__42891) : p.call(null,G__42891));
})();
var state_42884__$1 = state_42884;
if(cljs.core.truth_(inst_42871)){
var statearr_42892_42911 = state_42884__$1;
(statearr_42892_42911[(1)] = (8));

} else {
var statearr_42893_42912 = state_42884__$1;
(statearr_42893_42912[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42885 === (3))){
var inst_42882 = (state_42884[(2)]);
var state_42884__$1 = state_42884;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42884__$1,inst_42882);
} else {
if((state_val_42885 === (2))){
var state_42884__$1 = state_42884;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42884__$1,(4),ch);
} else {
if((state_val_42885 === (11))){
var inst_42874 = (state_42884[(2)]);
var state_42884__$1 = state_42884;
var statearr_42894_42913 = state_42884__$1;
(statearr_42894_42913[(2)] = inst_42874);

(statearr_42894_42913[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42885 === (9))){
var state_42884__$1 = state_42884;
var statearr_42895_42914 = state_42884__$1;
(statearr_42895_42914[(2)] = null);

(statearr_42895_42914[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42885 === (5))){
var inst_42869 = cljs.core.async.close_BANG_(out);
var state_42884__$1 = state_42884;
var statearr_42896_42915 = state_42884__$1;
(statearr_42896_42915[(2)] = inst_42869);

(statearr_42896_42915[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42885 === (10))){
var inst_42877 = (state_42884[(2)]);
var state_42884__$1 = (function (){var statearr_42897 = state_42884;
(statearr_42897[(8)] = inst_42877);

return statearr_42897;
})();
var statearr_42898_42916 = state_42884__$1;
(statearr_42898_42916[(2)] = null);

(statearr_42898_42916[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42885 === (8))){
var inst_42866 = (state_42884[(7)]);
var state_42884__$1 = state_42884;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42884__$1,(11),out,inst_42866);
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
});})(c__30815__auto___42906,out))
;
return ((function (switch__30735__auto__,c__30815__auto___42906,out){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_42902 = [null,null,null,null,null,null,null,null,null];
(statearr_42902[(0)] = state_machine__30736__auto__);

(statearr_42902[(1)] = (1));

return statearr_42902;
});
var state_machine__30736__auto____1 = (function (state_42884){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_42884);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e42903){if((e42903 instanceof Object)){
var ex__30739__auto__ = e42903;
var statearr_42904_42917 = state_42884;
(statearr_42904_42917[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42884);

return cljs.core.constant$keyword$21;
} else {
throw e42903;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__42918 = state_42884;
state_42884 = G__42918;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_42884){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_42884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto___42906,out))
})();
var state__30817__auto__ = (function (){var statearr_42905 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_42905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___42906);

return statearr_42905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto___42906,out))
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
return (function (state_43088){
var state_val_43089 = (state_43088[(1)]);
if((state_val_43089 === (7))){
var inst_43084 = (state_43088[(2)]);
var state_43088__$1 = state_43088;
var statearr_43090_43132 = state_43088__$1;
(statearr_43090_43132[(2)] = inst_43084);

(statearr_43090_43132[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43089 === (20))){
var inst_43054 = (state_43088[(7)]);
var inst_43065 = (state_43088[(2)]);
var inst_43066 = cljs.core.next(inst_43054);
var inst_43040 = inst_43066;
var inst_43041 = null;
var inst_43042 = (0);
var inst_43043 = (0);
var state_43088__$1 = (function (){var statearr_43091 = state_43088;
(statearr_43091[(8)] = inst_43041);

(statearr_43091[(9)] = inst_43040);

(statearr_43091[(10)] = inst_43043);

(statearr_43091[(11)] = inst_43065);

(statearr_43091[(12)] = inst_43042);

return statearr_43091;
})();
var statearr_43092_43133 = state_43088__$1;
(statearr_43092_43133[(2)] = null);

(statearr_43092_43133[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43089 === (1))){
var state_43088__$1 = state_43088;
var statearr_43093_43134 = state_43088__$1;
(statearr_43093_43134[(2)] = null);

(statearr_43093_43134[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43089 === (4))){
var inst_43029 = (state_43088[(13)]);
var inst_43029__$1 = (state_43088[(2)]);
var inst_43030 = (inst_43029__$1 == null);
var state_43088__$1 = (function (){var statearr_43094 = state_43088;
(statearr_43094[(13)] = inst_43029__$1);

return statearr_43094;
})();
if(cljs.core.truth_(inst_43030)){
var statearr_43095_43135 = state_43088__$1;
(statearr_43095_43135[(1)] = (5));

} else {
var statearr_43096_43136 = state_43088__$1;
(statearr_43096_43136[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43089 === (15))){
var state_43088__$1 = state_43088;
var statearr_43100_43137 = state_43088__$1;
(statearr_43100_43137[(2)] = null);

(statearr_43100_43137[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43089 === (21))){
var state_43088__$1 = state_43088;
var statearr_43101_43138 = state_43088__$1;
(statearr_43101_43138[(2)] = null);

(statearr_43101_43138[(1)] = (23));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43089 === (13))){
var inst_43041 = (state_43088[(8)]);
var inst_43040 = (state_43088[(9)]);
var inst_43043 = (state_43088[(10)]);
var inst_43042 = (state_43088[(12)]);
var inst_43050 = (state_43088[(2)]);
var inst_43051 = (inst_43043 + (1));
var tmp43097 = inst_43041;
var tmp43098 = inst_43040;
var tmp43099 = inst_43042;
var inst_43040__$1 = tmp43098;
var inst_43041__$1 = tmp43097;
var inst_43042__$1 = tmp43099;
var inst_43043__$1 = inst_43051;
var state_43088__$1 = (function (){var statearr_43102 = state_43088;
(statearr_43102[(8)] = inst_43041__$1);

(statearr_43102[(9)] = inst_43040__$1);

(statearr_43102[(14)] = inst_43050);

(statearr_43102[(10)] = inst_43043__$1);

(statearr_43102[(12)] = inst_43042__$1);

return statearr_43102;
})();
var statearr_43103_43139 = state_43088__$1;
(statearr_43103_43139[(2)] = null);

(statearr_43103_43139[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43089 === (22))){
var state_43088__$1 = state_43088;
var statearr_43104_43140 = state_43088__$1;
(statearr_43104_43140[(2)] = null);

(statearr_43104_43140[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43089 === (6))){
var inst_43029 = (state_43088[(13)]);
var inst_43038 = (function (){var G__43105 = inst_43029;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__43105) : f.call(null,G__43105));
})();
var inst_43039 = cljs.core.seq(inst_43038);
var inst_43040 = inst_43039;
var inst_43041 = null;
var inst_43042 = (0);
var inst_43043 = (0);
var state_43088__$1 = (function (){var statearr_43106 = state_43088;
(statearr_43106[(8)] = inst_43041);

(statearr_43106[(9)] = inst_43040);

(statearr_43106[(10)] = inst_43043);

(statearr_43106[(12)] = inst_43042);

return statearr_43106;
})();
var statearr_43107_43141 = state_43088__$1;
(statearr_43107_43141[(2)] = null);

(statearr_43107_43141[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43089 === (17))){
var inst_43054 = (state_43088[(7)]);
var inst_43058 = cljs.core.chunk_first(inst_43054);
var inst_43059 = cljs.core.chunk_rest(inst_43054);
var inst_43060 = cljs.core.count(inst_43058);
var inst_43040 = inst_43059;
var inst_43041 = inst_43058;
var inst_43042 = inst_43060;
var inst_43043 = (0);
var state_43088__$1 = (function (){var statearr_43108 = state_43088;
(statearr_43108[(8)] = inst_43041);

(statearr_43108[(9)] = inst_43040);

(statearr_43108[(10)] = inst_43043);

(statearr_43108[(12)] = inst_43042);

return statearr_43108;
})();
var statearr_43109_43142 = state_43088__$1;
(statearr_43109_43142[(2)] = null);

(statearr_43109_43142[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43089 === (3))){
var inst_43086 = (state_43088[(2)]);
var state_43088__$1 = state_43088;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43088__$1,inst_43086);
} else {
if((state_val_43089 === (12))){
var inst_43074 = (state_43088[(2)]);
var state_43088__$1 = state_43088;
var statearr_43110_43143 = state_43088__$1;
(statearr_43110_43143[(2)] = inst_43074);

(statearr_43110_43143[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43089 === (2))){
var state_43088__$1 = state_43088;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43088__$1,(4),in$);
} else {
if((state_val_43089 === (23))){
var inst_43082 = (state_43088[(2)]);
var state_43088__$1 = state_43088;
var statearr_43111_43144 = state_43088__$1;
(statearr_43111_43144[(2)] = inst_43082);

(statearr_43111_43144[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43089 === (19))){
var inst_43069 = (state_43088[(2)]);
var state_43088__$1 = state_43088;
var statearr_43112_43145 = state_43088__$1;
(statearr_43112_43145[(2)] = inst_43069);

(statearr_43112_43145[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43089 === (11))){
var inst_43040 = (state_43088[(9)]);
var inst_43054 = (state_43088[(7)]);
var inst_43054__$1 = cljs.core.seq(inst_43040);
var state_43088__$1 = (function (){var statearr_43113 = state_43088;
(statearr_43113[(7)] = inst_43054__$1);

return statearr_43113;
})();
if(inst_43054__$1){
var statearr_43114_43146 = state_43088__$1;
(statearr_43114_43146[(1)] = (14));

} else {
var statearr_43115_43147 = state_43088__$1;
(statearr_43115_43147[(1)] = (15));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43089 === (9))){
var inst_43076 = (state_43088[(2)]);
var inst_43077 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_43088__$1 = (function (){var statearr_43116 = state_43088;
(statearr_43116[(15)] = inst_43076);

return statearr_43116;
})();
if(cljs.core.truth_(inst_43077)){
var statearr_43117_43148 = state_43088__$1;
(statearr_43117_43148[(1)] = (21));

} else {
var statearr_43118_43149 = state_43088__$1;
(statearr_43118_43149[(1)] = (22));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43089 === (5))){
var inst_43032 = cljs.core.async.close_BANG_(out);
var state_43088__$1 = state_43088;
var statearr_43119_43150 = state_43088__$1;
(statearr_43119_43150[(2)] = inst_43032);

(statearr_43119_43150[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43089 === (14))){
var inst_43054 = (state_43088[(7)]);
var inst_43056 = cljs.core.chunked_seq_QMARK_(inst_43054);
var state_43088__$1 = state_43088;
if(inst_43056){
var statearr_43120_43151 = state_43088__$1;
(statearr_43120_43151[(1)] = (17));

} else {
var statearr_43121_43152 = state_43088__$1;
(statearr_43121_43152[(1)] = (18));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43089 === (16))){
var inst_43072 = (state_43088[(2)]);
var state_43088__$1 = state_43088;
var statearr_43122_43153 = state_43088__$1;
(statearr_43122_43153[(2)] = inst_43072);

(statearr_43122_43153[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43089 === (10))){
var inst_43041 = (state_43088[(8)]);
var inst_43043 = (state_43088[(10)]);
var inst_43048 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_43041,inst_43043);
var state_43088__$1 = state_43088;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43088__$1,(13),out,inst_43048);
} else {
if((state_val_43089 === (18))){
var inst_43054 = (state_43088[(7)]);
var inst_43063 = cljs.core.first(inst_43054);
var state_43088__$1 = state_43088;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43088__$1,(20),out,inst_43063);
} else {
if((state_val_43089 === (8))){
var inst_43043 = (state_43088[(10)]);
var inst_43042 = (state_43088[(12)]);
var inst_43045 = (inst_43043 < inst_43042);
var inst_43046 = inst_43045;
var state_43088__$1 = state_43088;
if(cljs.core.truth_(inst_43046)){
var statearr_43123_43154 = state_43088__$1;
(statearr_43123_43154[(1)] = (10));

} else {
var statearr_43124_43155 = state_43088__$1;
(statearr_43124_43155[(1)] = (11));

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
var statearr_43128 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43128[(0)] = state_machine__30736__auto__);

(statearr_43128[(1)] = (1));

return statearr_43128;
});
var state_machine__30736__auto____1 = (function (state_43088){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_43088);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e43129){if((e43129 instanceof Object)){
var ex__30739__auto__ = e43129;
var statearr_43130_43156 = state_43088;
(statearr_43130_43156[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43088);

return cljs.core.constant$keyword$21;
} else {
throw e43129;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__43157 = state_43088;
state_43088 = G__43157;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_43088){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_43088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto__))
})();
var state__30817__auto__ = (function (){var statearr_43131 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_43131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto__);

return statearr_43131;
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
var c__30815__auto___43262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto___43262,out){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto___43262,out){
return (function (state_43237){
var state_val_43238 = (state_43237[(1)]);
if((state_val_43238 === (7))){
var inst_43232 = (state_43237[(2)]);
var state_43237__$1 = state_43237;
var statearr_43239_43263 = state_43237__$1;
(statearr_43239_43263[(2)] = inst_43232);

(statearr_43239_43263[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43238 === (1))){
var inst_43214 = null;
var state_43237__$1 = (function (){var statearr_43240 = state_43237;
(statearr_43240[(7)] = inst_43214);

return statearr_43240;
})();
var statearr_43241_43264 = state_43237__$1;
(statearr_43241_43264[(2)] = null);

(statearr_43241_43264[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43238 === (4))){
var inst_43217 = (state_43237[(8)]);
var inst_43217__$1 = (state_43237[(2)]);
var inst_43218 = (inst_43217__$1 == null);
var inst_43219 = cljs.core.not(inst_43218);
var state_43237__$1 = (function (){var statearr_43242 = state_43237;
(statearr_43242[(8)] = inst_43217__$1);

return statearr_43242;
})();
if(inst_43219){
var statearr_43243_43265 = state_43237__$1;
(statearr_43243_43265[(1)] = (5));

} else {
var statearr_43244_43266 = state_43237__$1;
(statearr_43244_43266[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43238 === (6))){
var state_43237__$1 = state_43237;
var statearr_43245_43267 = state_43237__$1;
(statearr_43245_43267[(2)] = null);

(statearr_43245_43267[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43238 === (3))){
var inst_43234 = (state_43237[(2)]);
var inst_43235 = cljs.core.async.close_BANG_(out);
var state_43237__$1 = (function (){var statearr_43246 = state_43237;
(statearr_43246[(9)] = inst_43234);

return statearr_43246;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43237__$1,inst_43235);
} else {
if((state_val_43238 === (2))){
var state_43237__$1 = state_43237;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43237__$1,(4),ch);
} else {
if((state_val_43238 === (11))){
var inst_43217 = (state_43237[(8)]);
var inst_43226 = (state_43237[(2)]);
var inst_43214 = inst_43217;
var state_43237__$1 = (function (){var statearr_43247 = state_43237;
(statearr_43247[(10)] = inst_43226);

(statearr_43247[(7)] = inst_43214);

return statearr_43247;
})();
var statearr_43248_43268 = state_43237__$1;
(statearr_43248_43268[(2)] = null);

(statearr_43248_43268[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43238 === (9))){
var inst_43217 = (state_43237[(8)]);
var state_43237__$1 = state_43237;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43237__$1,(11),out,inst_43217);
} else {
if((state_val_43238 === (5))){
var inst_43217 = (state_43237[(8)]);
var inst_43214 = (state_43237[(7)]);
var inst_43221 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43217,inst_43214);
var state_43237__$1 = state_43237;
if(inst_43221){
var statearr_43250_43269 = state_43237__$1;
(statearr_43250_43269[(1)] = (8));

} else {
var statearr_43251_43270 = state_43237__$1;
(statearr_43251_43270[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43238 === (10))){
var inst_43229 = (state_43237[(2)]);
var state_43237__$1 = state_43237;
var statearr_43252_43271 = state_43237__$1;
(statearr_43252_43271[(2)] = inst_43229);

(statearr_43252_43271[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43238 === (8))){
var inst_43214 = (state_43237[(7)]);
var tmp43249 = inst_43214;
var inst_43214__$1 = tmp43249;
var state_43237__$1 = (function (){var statearr_43253 = state_43237;
(statearr_43253[(7)] = inst_43214__$1);

return statearr_43253;
})();
var statearr_43254_43272 = state_43237__$1;
(statearr_43254_43272[(2)] = null);

(statearr_43254_43272[(1)] = (2));


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
});})(c__30815__auto___43262,out))
;
return ((function (switch__30735__auto__,c__30815__auto___43262,out){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_43258 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43258[(0)] = state_machine__30736__auto__);

(statearr_43258[(1)] = (1));

return statearr_43258;
});
var state_machine__30736__auto____1 = (function (state_43237){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_43237);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e43259){if((e43259 instanceof Object)){
var ex__30739__auto__ = e43259;
var statearr_43260_43273 = state_43237;
(statearr_43260_43273[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43237);

return cljs.core.constant$keyword$21;
} else {
throw e43259;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__43274 = state_43237;
state_43237 = G__43274;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_43237){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_43237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto___43262,out))
})();
var state__30817__auto__ = (function (){var statearr_43261 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_43261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___43262);

return statearr_43261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto___43262,out))
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
var c__30815__auto___43412 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto___43412,out){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto___43412,out){
return (function (state_43382){
var state_val_43383 = (state_43382[(1)]);
if((state_val_43383 === (7))){
var inst_43378 = (state_43382[(2)]);
var state_43382__$1 = state_43382;
var statearr_43384_43413 = state_43382__$1;
(statearr_43384_43413[(2)] = inst_43378);

(statearr_43384_43413[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43383 === (1))){
var inst_43345 = (new Array(n));
var inst_43346 = inst_43345;
var inst_43347 = (0);
var state_43382__$1 = (function (){var statearr_43385 = state_43382;
(statearr_43385[(7)] = inst_43346);

(statearr_43385[(8)] = inst_43347);

return statearr_43385;
})();
var statearr_43386_43414 = state_43382__$1;
(statearr_43386_43414[(2)] = null);

(statearr_43386_43414[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43383 === (4))){
var inst_43350 = (state_43382[(9)]);
var inst_43350__$1 = (state_43382[(2)]);
var inst_43351 = (inst_43350__$1 == null);
var inst_43352 = cljs.core.not(inst_43351);
var state_43382__$1 = (function (){var statearr_43387 = state_43382;
(statearr_43387[(9)] = inst_43350__$1);

return statearr_43387;
})();
if(inst_43352){
var statearr_43388_43415 = state_43382__$1;
(statearr_43388_43415[(1)] = (5));

} else {
var statearr_43389_43416 = state_43382__$1;
(statearr_43389_43416[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43383 === (15))){
var inst_43372 = (state_43382[(2)]);
var state_43382__$1 = state_43382;
var statearr_43390_43417 = state_43382__$1;
(statearr_43390_43417[(2)] = inst_43372);

(statearr_43390_43417[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43383 === (13))){
var state_43382__$1 = state_43382;
var statearr_43391_43418 = state_43382__$1;
(statearr_43391_43418[(2)] = null);

(statearr_43391_43418[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43383 === (6))){
var inst_43347 = (state_43382[(8)]);
var inst_43368 = (inst_43347 > (0));
var state_43382__$1 = state_43382;
if(cljs.core.truth_(inst_43368)){
var statearr_43392_43419 = state_43382__$1;
(statearr_43392_43419[(1)] = (12));

} else {
var statearr_43393_43420 = state_43382__$1;
(statearr_43393_43420[(1)] = (13));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43383 === (3))){
var inst_43380 = (state_43382[(2)]);
var state_43382__$1 = state_43382;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43382__$1,inst_43380);
} else {
if((state_val_43383 === (12))){
var inst_43346 = (state_43382[(7)]);
var inst_43370 = cljs.core.vec(inst_43346);
var state_43382__$1 = state_43382;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43382__$1,(15),out,inst_43370);
} else {
if((state_val_43383 === (2))){
var state_43382__$1 = state_43382;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43382__$1,(4),ch);
} else {
if((state_val_43383 === (11))){
var inst_43362 = (state_43382[(2)]);
var inst_43363 = (new Array(n));
var inst_43346 = inst_43363;
var inst_43347 = (0);
var state_43382__$1 = (function (){var statearr_43394 = state_43382;
(statearr_43394[(7)] = inst_43346);

(statearr_43394[(8)] = inst_43347);

(statearr_43394[(10)] = inst_43362);

return statearr_43394;
})();
var statearr_43395_43421 = state_43382__$1;
(statearr_43395_43421[(2)] = null);

(statearr_43395_43421[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43383 === (9))){
var inst_43346 = (state_43382[(7)]);
var inst_43360 = cljs.core.vec(inst_43346);
var state_43382__$1 = state_43382;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43382__$1,(11),out,inst_43360);
} else {
if((state_val_43383 === (5))){
var inst_43346 = (state_43382[(7)]);
var inst_43355 = (state_43382[(11)]);
var inst_43347 = (state_43382[(8)]);
var inst_43350 = (state_43382[(9)]);
var inst_43354 = (inst_43346[inst_43347] = inst_43350);
var inst_43355__$1 = (inst_43347 + (1));
var inst_43356 = (inst_43355__$1 < n);
var state_43382__$1 = (function (){var statearr_43396 = state_43382;
(statearr_43396[(12)] = inst_43354);

(statearr_43396[(11)] = inst_43355__$1);

return statearr_43396;
})();
if(cljs.core.truth_(inst_43356)){
var statearr_43397_43422 = state_43382__$1;
(statearr_43397_43422[(1)] = (8));

} else {
var statearr_43398_43423 = state_43382__$1;
(statearr_43398_43423[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43383 === (14))){
var inst_43375 = (state_43382[(2)]);
var inst_43376 = cljs.core.async.close_BANG_(out);
var state_43382__$1 = (function (){var statearr_43400 = state_43382;
(statearr_43400[(13)] = inst_43375);

return statearr_43400;
})();
var statearr_43401_43424 = state_43382__$1;
(statearr_43401_43424[(2)] = inst_43376);

(statearr_43401_43424[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43383 === (10))){
var inst_43366 = (state_43382[(2)]);
var state_43382__$1 = state_43382;
var statearr_43402_43425 = state_43382__$1;
(statearr_43402_43425[(2)] = inst_43366);

(statearr_43402_43425[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43383 === (8))){
var inst_43346 = (state_43382[(7)]);
var inst_43355 = (state_43382[(11)]);
var tmp43399 = inst_43346;
var inst_43346__$1 = tmp43399;
var inst_43347 = inst_43355;
var state_43382__$1 = (function (){var statearr_43403 = state_43382;
(statearr_43403[(7)] = inst_43346__$1);

(statearr_43403[(8)] = inst_43347);

return statearr_43403;
})();
var statearr_43404_43426 = state_43382__$1;
(statearr_43404_43426[(2)] = null);

(statearr_43404_43426[(1)] = (2));


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
});})(c__30815__auto___43412,out))
;
return ((function (switch__30735__auto__,c__30815__auto___43412,out){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_43408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43408[(0)] = state_machine__30736__auto__);

(statearr_43408[(1)] = (1));

return statearr_43408;
});
var state_machine__30736__auto____1 = (function (state_43382){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_43382);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e43409){if((e43409 instanceof Object)){
var ex__30739__auto__ = e43409;
var statearr_43410_43427 = state_43382;
(statearr_43410_43427[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43382);

return cljs.core.constant$keyword$21;
} else {
throw e43409;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__43428 = state_43382;
state_43382 = G__43428;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_43382){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_43382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto___43412,out))
})();
var state__30817__auto__ = (function (){var statearr_43411 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_43411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___43412);

return statearr_43411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto___43412,out))
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
var c__30815__auto___43576 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto___43576,out){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto___43576,out){
return (function (state_43545){
var state_val_43546 = (state_43545[(1)]);
if((state_val_43546 === (7))){
var inst_43541 = (state_43545[(2)]);
var state_43545__$1 = state_43545;
var statearr_43547_43577 = state_43545__$1;
(statearr_43547_43577[(2)] = inst_43541);

(statearr_43547_43577[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43546 === (1))){
var inst_43504 = [];
var inst_43505 = inst_43504;
var inst_43506 = cljs.core.constant$keyword$36;
var state_43545__$1 = (function (){var statearr_43548 = state_43545;
(statearr_43548[(7)] = inst_43505);

(statearr_43548[(8)] = inst_43506);

return statearr_43548;
})();
var statearr_43549_43578 = state_43545__$1;
(statearr_43549_43578[(2)] = null);

(statearr_43549_43578[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43546 === (4))){
var inst_43509 = (state_43545[(9)]);
var inst_43509__$1 = (state_43545[(2)]);
var inst_43510 = (inst_43509__$1 == null);
var inst_43511 = cljs.core.not(inst_43510);
var state_43545__$1 = (function (){var statearr_43550 = state_43545;
(statearr_43550[(9)] = inst_43509__$1);

return statearr_43550;
})();
if(inst_43511){
var statearr_43551_43579 = state_43545__$1;
(statearr_43551_43579[(1)] = (5));

} else {
var statearr_43552_43580 = state_43545__$1;
(statearr_43552_43580[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43546 === (15))){
var inst_43535 = (state_43545[(2)]);
var state_43545__$1 = state_43545;
var statearr_43553_43581 = state_43545__$1;
(statearr_43553_43581[(2)] = inst_43535);

(statearr_43553_43581[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43546 === (13))){
var state_43545__$1 = state_43545;
var statearr_43554_43582 = state_43545__$1;
(statearr_43554_43582[(2)] = null);

(statearr_43554_43582[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43546 === (6))){
var inst_43505 = (state_43545[(7)]);
var inst_43530 = inst_43505.length;
var inst_43531 = (inst_43530 > (0));
var state_43545__$1 = state_43545;
if(cljs.core.truth_(inst_43531)){
var statearr_43555_43583 = state_43545__$1;
(statearr_43555_43583[(1)] = (12));

} else {
var statearr_43556_43584 = state_43545__$1;
(statearr_43556_43584[(1)] = (13));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43546 === (3))){
var inst_43543 = (state_43545[(2)]);
var state_43545__$1 = state_43545;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43545__$1,inst_43543);
} else {
if((state_val_43546 === (12))){
var inst_43505 = (state_43545[(7)]);
var inst_43533 = cljs.core.vec(inst_43505);
var state_43545__$1 = state_43545;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43545__$1,(15),out,inst_43533);
} else {
if((state_val_43546 === (2))){
var state_43545__$1 = state_43545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43545__$1,(4),ch);
} else {
if((state_val_43546 === (11))){
var inst_43509 = (state_43545[(9)]);
var inst_43513 = (state_43545[(10)]);
var inst_43523 = (state_43545[(2)]);
var inst_43524 = [];
var inst_43525 = inst_43524.push(inst_43509);
var inst_43505 = inst_43524;
var inst_43506 = inst_43513;
var state_43545__$1 = (function (){var statearr_43557 = state_43545;
(statearr_43557[(11)] = inst_43525);

(statearr_43557[(7)] = inst_43505);

(statearr_43557[(12)] = inst_43523);

(statearr_43557[(8)] = inst_43506);

return statearr_43557;
})();
var statearr_43558_43585 = state_43545__$1;
(statearr_43558_43585[(2)] = null);

(statearr_43558_43585[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43546 === (9))){
var inst_43505 = (state_43545[(7)]);
var inst_43521 = cljs.core.vec(inst_43505);
var state_43545__$1 = state_43545;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43545__$1,(11),out,inst_43521);
} else {
if((state_val_43546 === (5))){
var inst_43509 = (state_43545[(9)]);
var inst_43513 = (state_43545[(10)]);
var inst_43506 = (state_43545[(8)]);
var inst_43513__$1 = (function (){var G__43559 = inst_43509;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__43559) : f.call(null,G__43559));
})();
var inst_43514 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43513__$1,inst_43506);
var inst_43515 = cljs.core.keyword_identical_QMARK_(inst_43506,cljs.core.constant$keyword$36);
var inst_43516 = (inst_43514) || (inst_43515);
var state_43545__$1 = (function (){var statearr_43560 = state_43545;
(statearr_43560[(10)] = inst_43513__$1);

return statearr_43560;
})();
if(cljs.core.truth_(inst_43516)){
var statearr_43561_43586 = state_43545__$1;
(statearr_43561_43586[(1)] = (8));

} else {
var statearr_43562_43587 = state_43545__$1;
(statearr_43562_43587[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43546 === (14))){
var inst_43538 = (state_43545[(2)]);
var inst_43539 = cljs.core.async.close_BANG_(out);
var state_43545__$1 = (function (){var statearr_43564 = state_43545;
(statearr_43564[(13)] = inst_43538);

return statearr_43564;
})();
var statearr_43565_43588 = state_43545__$1;
(statearr_43565_43588[(2)] = inst_43539);

(statearr_43565_43588[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43546 === (10))){
var inst_43528 = (state_43545[(2)]);
var state_43545__$1 = state_43545;
var statearr_43566_43589 = state_43545__$1;
(statearr_43566_43589[(2)] = inst_43528);

(statearr_43566_43589[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43546 === (8))){
var inst_43509 = (state_43545[(9)]);
var inst_43513 = (state_43545[(10)]);
var inst_43505 = (state_43545[(7)]);
var inst_43518 = inst_43505.push(inst_43509);
var tmp43563 = inst_43505;
var inst_43505__$1 = tmp43563;
var inst_43506 = inst_43513;
var state_43545__$1 = (function (){var statearr_43567 = state_43545;
(statearr_43567[(7)] = inst_43505__$1);

(statearr_43567[(14)] = inst_43518);

(statearr_43567[(8)] = inst_43506);

return statearr_43567;
})();
var statearr_43568_43590 = state_43545__$1;
(statearr_43568_43590[(2)] = null);

(statearr_43568_43590[(1)] = (2));


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
});})(c__30815__auto___43576,out))
;
return ((function (switch__30735__auto__,c__30815__auto___43576,out){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_43572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43572[(0)] = state_machine__30736__auto__);

(statearr_43572[(1)] = (1));

return statearr_43572;
});
var state_machine__30736__auto____1 = (function (state_43545){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_43545);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e43573){if((e43573 instanceof Object)){
var ex__30739__auto__ = e43573;
var statearr_43574_43591 = state_43545;
(statearr_43574_43591[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43545);

return cljs.core.constant$keyword$21;
} else {
throw e43573;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__43592 = state_43545;
state_43545 = G__43592;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_43545){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_43545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto___43576,out))
})();
var state__30817__auto__ = (function (){var statearr_43575 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_43575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto___43576);

return statearr_43575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto___43576,out))
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
