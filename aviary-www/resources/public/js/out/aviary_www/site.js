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
var nav = ((function (){var G__33863 = "nav";
return goog.dom.getElementsByTagNameAndClass(G__33863);
})()["0"]);
var nav_height = ((function (){var G__33864 = nav;
return goog.style.getSize(G__33864);
})()["height"]);
var header = ((function (){var G__33865 = "header";
return goog.dom.getElementsByTagNameAndClass(G__33865);
})()["0"]);
var header_height = ((function (){var G__33866 = header;
return goog.style.getSize(G__33866);
})()["height"]);
var G__33867_33870 = nav;
var G__33868_33871 = "background-position";
var G__33869_33872 = [cljs.core.str((top / (5))),cljs.core.str("px "),cljs.core.str((top / (5))),cljs.core.str("px")].join('');
goog.style.setStyle(G__33867_33870,G__33868_33871,G__33869_33872);

return (((top >= (header_height - nav_height)))?goog.dom.classes.add:goog.dom.classes.remove).call(null,nav,"active");
});
/**
* Start the site. Attempt to be idempotent.
*/
aviary_www.site.start = (function start(){
if(cljs.core.truth_(cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1((function (){var G__33965 = aviary_www.site.site;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33965) : cljs.core.deref.call(null,G__33965));
})()))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aviary_www.site.site,cljs.core.assoc,cljs.core.constant$keyword$37,true);
}

if(cljs.core.truth_(cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1((function (){var G__33966 = aviary_www.site.site;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33966) : cljs.core.deref.call(null,G__33966));
})()))){
return null;
} else {
var scrolls = aviary_www.site.listen((function (){return goog.dom.getWindow();
})(),"scroll");
var clicks = aviary_www.site.listen(((function (){var G__33967 = "a";
var G__33968 = "scroll";
return goog.dom.getElementsByTagNameAndClass(G__33967,G__33968);
})()["0"]),"click");
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aviary_www.site.site,cljs.core.assoc,cljs.core.constant$keyword$39,clicks);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aviary_www.site.site,cljs.core.assoc,cljs.core.constant$keyword$38,scrolls);

var c__30815__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30815__auto__,scrolls,clicks){
return (function (){
var f__30816__auto__ = (function (){var switch__30735__auto__ = ((function (c__30815__auto__,scrolls,clicks){
return (function (state_34019){
var state_val_34020 = (state_34019[(1)]);
if((state_val_34020 === (7))){
var inst_34010 = (state_34019[(2)]);
var state_34019__$1 = state_34019;
if(cljs.core.truth_(inst_34010)){
var statearr_34021_34057 = state_34019__$1;
(statearr_34021_34057[(1)] = (20));

} else {
var statearr_34022_34058 = state_34019__$1;
(statearr_34022_34058[(1)] = (21));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34020 === (20))){
var state_34019__$1 = state_34019;
var statearr_34023_34059 = state_34019__$1;
(statearr_34023_34059[(2)] = null);

(statearr_34023_34059[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34020 === (1))){
var state_34019__$1 = state_34019;
var statearr_34024_34060 = state_34019__$1;
(statearr_34024_34060[(2)] = null);

(statearr_34024_34060[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34020 === (4))){
var inst_33981 = (state_34019[(7)]);
var inst_33979 = (state_34019[(8)]);
var inst_33979__$1 = (state_34019[(2)]);
var inst_33980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33979__$1,(0),null);
var inst_33981__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33979__$1,(1),null);
var inst_33982 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33981__$1,clicks);
var state_34019__$1 = (function (){var statearr_34025 = state_34019;
(statearr_34025[(7)] = inst_33981__$1);

(statearr_34025[(9)] = inst_33980);

(statearr_34025[(8)] = inst_33979__$1);

return statearr_34025;
})();
if(inst_33982){
var statearr_34026_34061 = state_34019__$1;
(statearr_34026_34061[(1)] = (5));

} else {
var statearr_34027_34062 = state_34019__$1;
(statearr_34027_34062[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34020 === (15))){
var state_34019__$1 = state_34019;
var statearr_34028_34063 = state_34019__$1;
(statearr_34028_34063[(2)] = null);

(statearr_34028_34063[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34020 === (21))){
var state_34019__$1 = state_34019;
var statearr_34029_34064 = state_34019__$1;
(statearr_34029_34064[(2)] = null);

(statearr_34029_34064[(1)] = (22));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34020 === (13))){
var inst_34008 = (state_34019[(2)]);
var state_34019__$1 = state_34019;
var statearr_34030_34065 = state_34019__$1;
(statearr_34030_34065[(2)] = inst_34008);

(statearr_34030_34065[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34020 === (22))){
var inst_34015 = (state_34019[(2)]);
var state_34019__$1 = state_34019;
var statearr_34031_34066 = state_34019__$1;
(statearr_34031_34066[(2)] = inst_34015);

(statearr_34031_34066[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34020 === (6))){
var inst_33981 = (state_34019[(7)]);
var inst_33992 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33981,scrolls);
var state_34019__$1 = state_34019;
if(inst_33992){
var statearr_34032_34067 = state_34019__$1;
(statearr_34032_34067[(1)] = (11));

} else {
var statearr_34033_34068 = state_34019__$1;
(statearr_34033_34068[(1)] = (12));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34020 === (17))){
var inst_33980 = (state_34019[(9)]);
var state_34019__$1 = state_34019;
var statearr_34034_34069 = state_34019__$1;
(statearr_34034_34069[(2)] = inst_33980);

(statearr_34034_34069[(1)] = (19));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34020 === (3))){
var inst_34017 = (state_34019[(2)]);
var state_34019__$1 = state_34019;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34019__$1,inst_34017);
} else {
if((state_val_34020 === (12))){
var inst_33981 = (state_34019[(7)]);
var inst_34002 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33981,cljs.core.constant$keyword$7);
var state_34019__$1 = state_34019;
if(inst_34002){
var statearr_34035_34070 = state_34019__$1;
(statearr_34035_34070[(1)] = (17));

} else {
var statearr_34036_34071 = state_34019__$1;
(statearr_34036_34071[(1)] = (18));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34020 === (2))){
var inst_33975 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33976 = [clicks,scrolls];
var inst_33977 = (new cljs.core.PersistentVector(null,2,(5),inst_33975,inst_33976,null));
var state_34019__$1 = state_34019;
return cljs.core.async.ioc_alts_BANG_(state_34019__$1,(4),inst_33977);
} else {
if((state_val_34020 === (19))){
var inst_34006 = (state_34019[(2)]);
var state_34019__$1 = state_34019;
var statearr_34037_34072 = state_34019__$1;
(statearr_34037_34072[(2)] = inst_34006);

(statearr_34037_34072[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34020 === (11))){
var inst_33979 = (state_34019[(8)]);
var inst_33995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33979,(0),null);
var state_34019__$1 = state_34019;
if(cljs.core.truth_(inst_33995)){
var statearr_34038_34073 = state_34019__$1;
(statearr_34038_34073[(1)] = (14));

} else {
var statearr_34039_34074 = state_34019__$1;
(statearr_34039_34074[(1)] = (15));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34020 === (9))){
var state_34019__$1 = state_34019;
var statearr_34040_34075 = state_34019__$1;
(statearr_34040_34075[(2)] = null);

(statearr_34040_34075[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34020 === (5))){
var inst_33979 = (state_34019[(8)]);
var inst_33985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33979,(0),null);
var state_34019__$1 = state_34019;
if(cljs.core.truth_(inst_33985)){
var statearr_34041_34076 = state_34019__$1;
(statearr_34041_34076[(1)] = (8));

} else {
var statearr_34042_34077 = state_34019__$1;
(statearr_34042_34077[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34020 === (14))){
var inst_33997 = aviary_www.site.update_nav();
var state_34019__$1 = (function (){var statearr_34043 = state_34019;
(statearr_34043[(10)] = inst_33997);

return statearr_34043;
})();
var statearr_34044_34078 = state_34019__$1;
(statearr_34044_34078[(2)] = true);

(statearr_34044_34078[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34020 === (16))){
var inst_34000 = (state_34019[(2)]);
var state_34019__$1 = state_34019;
var statearr_34045_34079 = state_34019__$1;
(statearr_34045_34079[(2)] = inst_34000);

(statearr_34045_34079[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34020 === (10))){
var inst_33990 = (state_34019[(2)]);
var state_34019__$1 = state_34019;
var statearr_34046_34080 = state_34019__$1;
(statearr_34046_34080[(2)] = inst_33990);

(statearr_34046_34080[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34020 === (18))){
var state_34019__$1 = state_34019;
var statearr_34047_34081 = state_34019__$1;
(statearr_34047_34081[(2)] = null);

(statearr_34047_34081[(1)] = (19));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34020 === (8))){
var inst_33987 = aviary_www.site.scroll_page();
var state_34019__$1 = (function (){var statearr_34048 = state_34019;
(statearr_34048[(11)] = inst_33987);

return statearr_34048;
})();
var statearr_34049_34082 = state_34019__$1;
(statearr_34049_34082[(2)] = true);

(statearr_34049_34082[(1)] = (10));


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
var statearr_34053 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34053[(0)] = state_machine__30736__auto__);

(statearr_34053[(1)] = (1));

return statearr_34053;
});
var state_machine__30736__auto____1 = (function (state_34019){
while(true){
var ret_value__30737__auto__ = (function (){try{while(true){
var result__30738__auto__ = switch__30735__auto__(state_34019);
if(cljs.core.keyword_identical_QMARK_(result__30738__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30738__auto__;
}
break;
}
}catch (e34054){if((e34054 instanceof Object)){
var ex__30739__auto__ = e34054;
var statearr_34055_34083 = state_34019;
(statearr_34055_34083[(5)] = ex__30739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34019);

return cljs.core.constant$keyword$21;
} else {
throw e34054;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30737__auto__,cljs.core.constant$keyword$21)){
var G__34084 = state_34019;
state_34019 = G__34084;
continue;
} else {
return ret_value__30737__auto__;
}
break;
}
});
state_machine__30736__auto__ = function(state_34019){
switch(arguments.length){
case 0:
return state_machine__30736__auto____0.call(this);
case 1:
return state_machine__30736__auto____1.call(this,state_34019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30736__auto____0;
state_machine__30736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30736__auto____1;
return state_machine__30736__auto__;
})()
;})(switch__30735__auto__,c__30815__auto__,scrolls,clicks))
})();
var state__30817__auto__ = (function (){var statearr_34056 = (function (){return (f__30816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30816__auto__.cljs$core$IFn$_invoke$arity$0() : f__30816__auto__.call(null));
})();
(statearr_34056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30815__auto__);

return statearr_34056;
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
if(cljs.core.truth_(cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1((function (){var G__34088 = aviary_www.site.site;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34088) : cljs.core.deref.call(null,G__34088));
})()))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aviary_www.site.site,cljs.core.assoc,cljs.core.constant$keyword$37,false);
} else {
}

var temp__4126__auto___34091 = cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1((function (){var G__34089 = aviary_www.site.site;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34089) : cljs.core.deref.call(null,G__34089));
})());
if(cljs.core.truth_(temp__4126__auto___34091)){
var clicks_34092 = temp__4126__auto___34091;
cljs.core.async.close_BANG_(clicks_34092);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(aviary_www.site.site,cljs.core.dissoc,cljs.core.constant$keyword$39);
} else {
}

var temp__4126__auto__ = cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1((function (){var G__34090 = aviary_www.site.site;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34090) : cljs.core.deref.call(null,G__34090));
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
