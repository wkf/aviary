// Compiled by ClojureScript 0.0-2850 {}
goog.provide('aviary_www.site');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.fx.dom.Scroll');
goog.require('goog.style');
if(typeof aviary_www.site.site !== 'undefined'){
} else {
aviary_www.site.site = (function (){var G__33843 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$37,false], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33843) : cljs.core.atom.call(null,G__33843));
})();
}
/**
* Return a core.async chan to receive the events for which you are listening
*/
aviary_www.site.listen = (function listen(el,type){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((10)));
var G__33848_33851 = el;
var G__33849_33852 = type;
var G__33850_33853 = ((function (G__33848_33851,G__33849_33852,out){
return (function (p1__33844_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,p1__33844_SHARP_);
});})(G__33848_33851,G__33849_33852,out))
;
goog.events.listen(G__33848_33851,G__33849_33852,G__33850_33853);

return out;
});
aviary_www.site.scroll_page = (function scroll_page(){
var scroll = (function (){return goog.dom.getDocumentScroll();
})();
var body = ((function (){var G__33855 = "body";
return goog.dom.getElementsByTagNameAndClass(G__33855);
})()["0"]);
return (new goog.fx.dom.Scroll(body,[(scroll["x"]),(scroll["y"])],[(scroll["x"]),(0)],(500))).play();
});
aviary_www.site.update_nav = (function update_nav(){
var top = ((function (){return goog.dom.getDocumentScroll();
})()["y"]);
var nav = ((function (){var G__33860 = "nav";
return goog.dom.getElementsByTagNameAndClass(G__33860);
})()["0"]);
var nav_height = ((function (){var G__33861 = nav;
return goog.style.getSize(G__33861);
})()["height"]);
var header = ((function (){var G__33862 = "header";
return goog.dom.getElementsByTagNameAndClass(G__33862);
})()["0"]);
var header_height = ((function (){var G__33863 = header;
return goog.style.getSize(G__33863);
})()["height"]);
return (((top >= (header_height - nav_height)))?goog.dom.classes.add:goog.dom.classes.remove).call(null,nav,"active");
});
/**
* Start the site. Attempt to be idempotent.
*/
aviary_www.site.start = (function start(){
if(cljs.core.truth_(cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1((function (){var G__33956 = aviary_www.site.site;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33956) : cljs.core.deref.call(null,G__33956));
})()))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aviary_www.site.site,cljs.core.assoc,cljs.core.constant$keyword$37,true);
}

if(cljs.core.truth_(cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1((function (){var G__33957 = aviary_www.site.site;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33957) : cljs.core.deref.call(null,G__33957));
})()))){
return null;
} else {
var scrolls = aviary_www.site.listen((function (){return goog.dom.getWindow();
})(),"scroll");
var clicks = aviary_www.site.listen(((function (){var G__33958 = "a";
var G__33959 = "scroll";
return goog.dom.getElementsByTagNameAndClass(G__33958,G__33959);
})()["0"]),"click");
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aviary_www.site.site,cljs.core.assoc,cljs.core.constant$keyword$39,clicks);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aviary_www.site.site,cljs.core.assoc,cljs.core.constant$keyword$38,scrolls);

var c__30815__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto__,scrolls,clicks){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto__,scrolls,clicks){
return (function (state_34010){
var state_val_34011 = (state_34010[(1)]);
if((state_val_34011 === (7))){
var inst_34001 = (state_34010[(2)]);
var state_34010__$1 = state_34010;
if(cljs.core.truth_(inst_34001)){
var statearr_34012_34048 = state_34010__$1;
(statearr_34012_34048[(1)] = (20));

} else {
var statearr_34013_34049 = state_34010__$1;
(statearr_34013_34049[(1)] = (21));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34011 === (20))){
var state_34010__$1 = state_34010;
var statearr_34014_34050 = state_34010__$1;
(statearr_34014_34050[(2)] = null);

(statearr_34014_34050[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34011 === (1))){
var state_34010__$1 = state_34010;
var statearr_34015_34051 = state_34010__$1;
(statearr_34015_34051[(2)] = null);

(statearr_34015_34051[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34011 === (4))){
var inst_33972 = (state_34010[(7)]);
var inst_33970 = (state_34010[(8)]);
var inst_33970__$1 = (state_34010[(2)]);
var inst_33971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33970__$1,(0),null);
var inst_33972__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33970__$1,(1),null);
var inst_33973 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33972__$1,clicks);
var state_34010__$1 = (function (){var statearr_34016 = state_34010;
(statearr_34016[(9)] = inst_33971);

(statearr_34016[(7)] = inst_33972__$1);

(statearr_34016[(8)] = inst_33970__$1);

return statearr_34016;
})();
if(inst_33973){
var statearr_34017_34052 = state_34010__$1;
(statearr_34017_34052[(1)] = (5));

} else {
var statearr_34018_34053 = state_34010__$1;
(statearr_34018_34053[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34011 === (15))){
var state_34010__$1 = state_34010;
var statearr_34019_34054 = state_34010__$1;
(statearr_34019_34054[(2)] = null);

(statearr_34019_34054[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34011 === (21))){
var state_34010__$1 = state_34010;
var statearr_34020_34055 = state_34010__$1;
(statearr_34020_34055[(2)] = null);

(statearr_34020_34055[(1)] = (22));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34011 === (13))){
var inst_33999 = (state_34010[(2)]);
var state_34010__$1 = state_34010;
var statearr_34021_34056 = state_34010__$1;
(statearr_34021_34056[(2)] = inst_33999);

(statearr_34021_34056[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34011 === (22))){
var inst_34006 = (state_34010[(2)]);
var state_34010__$1 = state_34010;
var statearr_34022_34057 = state_34010__$1;
(statearr_34022_34057[(2)] = inst_34006);

(statearr_34022_34057[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34011 === (6))){
var inst_33972 = (state_34010[(7)]);
var inst_33983 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33972,scrolls);
var state_34010__$1 = state_34010;
if(inst_33983){
var statearr_34023_34058 = state_34010__$1;
(statearr_34023_34058[(1)] = (11));

} else {
var statearr_34024_34059 = state_34010__$1;
(statearr_34024_34059[(1)] = (12));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34011 === (17))){
var inst_33971 = (state_34010[(9)]);
var state_34010__$1 = state_34010;
var statearr_34025_34060 = state_34010__$1;
(statearr_34025_34060[(2)] = inst_33971);

(statearr_34025_34060[(1)] = (19));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34011 === (3))){
var inst_34008 = (state_34010[(2)]);
var state_34010__$1 = state_34010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34010__$1,inst_34008);
} else {
if((state_val_34011 === (12))){
var inst_33972 = (state_34010[(7)]);
var inst_33993 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33972,cljs.core.constant$keyword$7);
var state_34010__$1 = state_34010;
if(inst_33993){
var statearr_34026_34061 = state_34010__$1;
(statearr_34026_34061[(1)] = (17));

} else {
var statearr_34027_34062 = state_34010__$1;
(statearr_34027_34062[(1)] = (18));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34011 === (2))){
var inst_33966 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33967 = [clicks,scrolls];
var inst_33968 = (new cljs.core.PersistentVector(null,2,(5),inst_33966,inst_33967,null));
var state_34010__$1 = state_34010;
return cljs.core.async.ioc_alts_BANG_(state_34010__$1,(4),inst_33968);
} else {
if((state_val_34011 === (19))){
var inst_33997 = (state_34010[(2)]);
var state_34010__$1 = state_34010;
var statearr_34028_34063 = state_34010__$1;
(statearr_34028_34063[(2)] = inst_33997);

(statearr_34028_34063[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34011 === (11))){
var inst_33970 = (state_34010[(8)]);
var inst_33986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33970,(0),null);
var state_34010__$1 = state_34010;
if(cljs.core.truth_(inst_33986)){
var statearr_34029_34064 = state_34010__$1;
(statearr_34029_34064[(1)] = (14));

} else {
var statearr_34030_34065 = state_34010__$1;
(statearr_34030_34065[(1)] = (15));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34011 === (9))){
var state_34010__$1 = state_34010;
var statearr_34031_34066 = state_34010__$1;
(statearr_34031_34066[(2)] = null);

(statearr_34031_34066[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34011 === (5))){
var inst_33970 = (state_34010[(8)]);
var inst_33976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33970,(0),null);
var state_34010__$1 = state_34010;
if(cljs.core.truth_(inst_33976)){
var statearr_34032_34067 = state_34010__$1;
(statearr_34032_34067[(1)] = (8));

} else {
var statearr_34033_34068 = state_34010__$1;
(statearr_34033_34068[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34011 === (14))){
var inst_33988 = aviary_www.site.update_nav();
var state_34010__$1 = (function (){var statearr_34034 = state_34010;
(statearr_34034[(10)] = inst_33988);

return statearr_34034;
})();
var statearr_34035_34069 = state_34010__$1;
(statearr_34035_34069[(2)] = true);

(statearr_34035_34069[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34011 === (16))){
var inst_33991 = (state_34010[(2)]);
var state_34010__$1 = state_34010;
var statearr_34036_34070 = state_34010__$1;
(statearr_34036_34070[(2)] = inst_33991);

(statearr_34036_34070[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34011 === (10))){
var inst_33981 = (state_34010[(2)]);
var state_34010__$1 = state_34010;
var statearr_34037_34071 = state_34010__$1;
(statearr_34037_34071[(2)] = inst_33981);

(statearr_34037_34071[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34011 === (18))){
var state_34010__$1 = state_34010;
var statearr_34038_34072 = state_34010__$1;
(statearr_34038_34072[(2)] = null);

(statearr_34038_34072[(1)] = (19));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34011 === (8))){
var inst_33978 = aviary_www.site.scroll_page();
var state_34010__$1 = (function (){var statearr_34039 = state_34010;
(statearr_34039[(11)] = inst_33978);

return statearr_34039;
})();
var statearr_34040_34073 = state_34010__$1;
(statearr_34040_34073[(2)] = true);

(statearr_34040_34073[(1)] = (10));


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
});})(c__30815__auto__,scrolls,clicks))
;
return ((function (switch__30735__auto__,c__30815__auto__,scrolls,clicks){
return (function() {
var state_machine__30736__auto__ = null;
var state_machine__30736__auto____0 = (function (){
var statearr_34044 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34044[(0)] = state_machine__30736__auto__);

(statearr_34044[(1)] = (1));

return statearr_34044;
});
var state_machine__30736__auto____1 = (function (state_34010){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_34010);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e34045){if((e34045 instanceof Object)){
var ex__30739__auto__ = e34045;
var statearr_34046_34074 = state_34010;
(statearr_34046_34074[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34010);

return cljs.core.constant$keyword$21;
} else {
throw e34045;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__34075 = state_34010;
state_34010 = G__34075;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_34010){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_34010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto__,scrolls,clicks))
})();
var state__30817__auto__ = (function (){var statearr_34047 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_34047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto__);

return statearr_34047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30817__auto__);
});})(c__30815__auto__,scrolls,clicks))
);

return c__30815__auto__;
}
});
/**
* Stop the site. Attempt to be idempotent. Useful for interactive local development.
*/
aviary_www.site.stop = (function stop(){
if(cljs.core.truth_(cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1((function (){var G__34079 = aviary_www.site.site;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34079) : cljs.core.deref.call(null,G__34079));
})()))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aviary_www.site.site,cljs.core.assoc,cljs.core.constant$keyword$37,false);
} else {
}

var temp__4126__auto___34082 = cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1((function (){var G__34080 = aviary_www.site.site;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34080) : cljs.core.deref.call(null,G__34080));
})());
if(cljs.core.truth_(temp__4126__auto___34082)){
var clicks_34083 = temp__4126__auto___34082;
cljs.core.async.close_BANG_(clicks_34083);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(aviary_www.site.site,cljs.core.dissoc,cljs.core.constant$keyword$39);
} else {
}

var temp__4126__auto__ = cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1((function (){var G__34081 = aviary_www.site.site;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34081) : cljs.core.deref.call(null,G__34081));
})());
if(cljs.core.truth_(temp__4126__auto__)){
var scrolls = temp__4126__auto__;
cljs.core.async.close_BANG_(scrolls);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(aviary_www.site.site,cljs.core.dissoc,cljs.core.constant$keyword$38);
} else {
return null;
}
});
aviary_www.site.start();
