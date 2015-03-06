// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){
return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$20);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t43643 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t43643 = (function (f,fn_handler,meta43644){
this.f = f;
this.fn_handler = fn_handler;
this.meta43644 = meta43644;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t43643.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t43643.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t43643.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t43643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43645){
var self__ = this;
var _43645__$1 = this;
return self__.meta43644;
});

cljs.core.async.impl.ioc_helpers.t43643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43645,meta43644__$1){
var self__ = this;
var _43645__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t43643(self__.f,self__.fn_handler,meta43644__$1));
});

cljs.core.async.impl.ioc_helpers.t43643.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t43643.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t43643";

cljs.core.async.impl.ioc_helpers.t43643.cljs$lang$ctorPrWriter = (function (this__24264__auto__,writer__24265__auto__,opt__24266__auto__){
return cljs.core._write(writer__24265__auto__,"cljs.core.async.impl.ioc-helpers/t43643");
});

cljs.core.async.impl.ioc_helpers.__GT_t43643 = (function __GT_t43643(f__$1,fn_handler__$1,meta43644){
return (new cljs.core.async.impl.ioc_helpers.t43643(f__$1,fn_handler__$1,meta43644));
});

}

return (new cljs.core.async.impl.ioc_helpers.t43643(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e43647){if((e43647 instanceof Object)){
var ex = e43647;
cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e43647;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_43651_43654 = state;
(statearr_43651_43654[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_43651_43654[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_43652_43655 = state;
(statearr_43652_43655[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__43653 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__43653) : cljs.core.deref.call(null,G__43653));
})());

(statearr_43652_43655[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$21;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_43659_43662 = state;
(statearr_43659_43662[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_43659_43662[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_43660_43663 = state;
(statearr_43660_43663[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__43661 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__43661) : cljs.core.deref.call(null,G__43661));
})());

(statearr_43660_43663[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$21;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){
var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){
return null;
});})(c))
));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24280__auto__,k__24281__auto__){
var self__ = this;
var this__24280__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__24280__auto____$1,k__24281__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24282__auto__,k43665,else__24283__auto__){
var self__ = this;
var this__24282__auto____$1 = this;
var G__43667 = (((k43665 instanceof cljs.core.Keyword))?k43665.fqn:null);
switch (G__43667) {
case "prev":
return self__.prev;

break;
case "continue-block":
return self__.continue_block;

break;
case "finally-block":
return self__.finally_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "catch-block":
return self__.catch_block;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k43665,else__24283__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24294__auto__,writer__24295__auto__,opts__24296__auto__){
var self__ = this;
var this__24294__auto____$1 = this;
var pr_pair__24297__auto__ = ((function (this__24294__auto____$1){
return (function (keyval__24298__auto__){
return cljs.core.pr_sequential_writer(writer__24295__auto__,cljs.core.pr_writer,""," ","",opts__24296__auto__,keyval__24298__auto__);
});})(this__24294__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__24295__auto__,pr_pair__24297__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__24296__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$22,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$23,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$24,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$25,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$26,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24278__auto__){
var self__ = this;
var this__24278__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24274__auto__){
var self__ = this;
var this__24274__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24284__auto__){
var self__ = this;
var this__24284__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24275__auto__){
var self__ = this;
var this__24275__auto____$1 = this;
var h__24098__auto__ = self__.__hash;
if(!((h__24098__auto__ == null))){
return h__24098__auto__;
} else {
var h__24098__auto____$1 = cljs.core.hash_imap(this__24275__auto____$1);
self__.__hash = h__24098__auto____$1;

return h__24098__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24276__auto__,other__24277__auto__){
var self__ = this;
var this__24276__auto____$1 = this;
if(cljs.core.truth_((function (){var and__23665__auto__ = other__24277__auto__;
if(cljs.core.truth_(and__23665__auto__)){
return ((this__24276__auto____$1.constructor === other__24277__auto__.constructor)) && (cljs.core.equiv_map(this__24276__auto____$1,other__24277__auto__));
} else {
return and__23665__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24289__auto__,k__24290__auto__){
var self__ = this;
var this__24289__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$24,null,cljs.core.constant$keyword$22,null,cljs.core.constant$keyword$23,null,cljs.core.constant$keyword$26,null,cljs.core.constant$keyword$25,null], null), null),k__24290__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__24289__auto____$1),self__.__meta),k__24290__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__24290__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24287__auto__,k__24288__auto__,G__43664){
var self__ = this;
var this__24287__auto____$1 = this;
var pred__43668 = cljs.core.keyword_identical_QMARK_;
var expr__43669 = k__24288__auto__;
if(cljs.core.truth_((function (){var G__43671 = cljs.core.constant$keyword$22;
var G__43672 = expr__43669;
return (pred__43668.cljs$core$IFn$_invoke$arity$2 ? pred__43668.cljs$core$IFn$_invoke$arity$2(G__43671,G__43672) : pred__43668.call(null,G__43671,G__43672));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__43664,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__43673 = cljs.core.constant$keyword$23;
var G__43674 = expr__43669;
return (pred__43668.cljs$core$IFn$_invoke$arity$2 ? pred__43668.cljs$core$IFn$_invoke$arity$2(G__43673,G__43674) : pred__43668.call(null,G__43673,G__43674));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__43664,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__43675 = cljs.core.constant$keyword$24;
var G__43676 = expr__43669;
return (pred__43668.cljs$core$IFn$_invoke$arity$2 ? pred__43668.cljs$core$IFn$_invoke$arity$2(G__43675,G__43676) : pred__43668.call(null,G__43675,G__43676));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__43664,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__43677 = cljs.core.constant$keyword$25;
var G__43678 = expr__43669;
return (pred__43668.cljs$core$IFn$_invoke$arity$2 ? pred__43668.cljs$core$IFn$_invoke$arity$2(G__43677,G__43678) : pred__43668.call(null,G__43677,G__43678));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__43664,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__43679 = cljs.core.constant$keyword$26;
var G__43680 = expr__43669;
return (pred__43668.cljs$core$IFn$_invoke$arity$2 ? pred__43668.cljs$core$IFn$_invoke$arity$2(G__43679,G__43680) : pred__43668.call(null,G__43679,G__43680));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__43664,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__24288__auto__,G__43664),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24292__auto__){
var self__ = this;
var this__24292__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$22,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$23,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$24,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$25,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$26,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24279__auto__,G__43664){
var self__ = this;
var this__24279__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__43664,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24285__auto__,entry__24286__auto__){
var self__ = this;
var this__24285__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__24286__auto__)){
return cljs.core._assoc(this__24285__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__24286__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__24286__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__24285__auto____$1,entry__24286__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__24314__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__24314__auto__,writer__24315__auto__){
return cljs.core._write(writer__24315__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__43666){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(G__43666),cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(G__43666),cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(G__43666),cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(G__43666),cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(G__43666),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__43666,cljs.core.constant$keyword$22,cljs.core.array_seq([cljs.core.constant$keyword$23,cljs.core.constant$keyword$24,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], 0)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_43683 = state;
(statearr_43683[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_43683;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__23665__auto__ = exception;
if(cljs.core.truth_(and__23665__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__23665__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__23665__auto__ = exception;
if(cljs.core.truth_(and__23665__auto__)){
var and__23665__auto____$1 = catch_block;
if(cljs.core.truth_(and__23665__auto____$1)){
return (exception instanceof catch_exception);
} else {
return and__23665__auto____$1;
}
} else {
return and__23665__auto__;
}
})())){
var statearr_43689 = state;
(statearr_43689[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_43689[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_43689[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_43689[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$22,null,cljs.core.array_seq([cljs.core.constant$keyword$23,null], 0)));

return statearr_43689;
} else {
if(cljs.core.truth_((function (){var and__23665__auto__ = exception;
if(cljs.core.truth_(and__23665__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__23665__auto__;
}
})())){
var statearr_43690_43694 = state;
(statearr_43690_43694[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__43695 = state;
state = G__43695;
continue;
} else {
if(cljs.core.truth_((function (){var and__23665__auto__ = exception;
if(cljs.core.truth_(and__23665__auto__)){
var and__23665__auto____$1 = cljs.core.not(catch_block);
if(and__23665__auto____$1){
return cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__23665__auto____$1;
}
} else {
return and__23665__auto__;
}
})())){
var statearr_43691 = state;
(statearr_43691[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_43691[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$24,null));

return statearr_43691;
} else {
if(cljs.core.truth_((function (){var and__23665__auto__ = cljs.core.not(exception);
if(and__23665__auto__){
return cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__23665__auto__;
}
})())){
var statearr_43692 = state;
(statearr_43692[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_43692[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$24,null));

return statearr_43692;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_43693 = state;
(statearr_43693[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_43693[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_43693;
} else {
throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});
