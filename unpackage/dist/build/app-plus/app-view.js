var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190312_syb_scopedata*/window.__wcc_version__='v0.5vv_20190312_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'text']])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'uni-badge']],[[2,'?:'],[[7],[3,'inverted']],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'uni-badge-'],[[7],[3,'type']]],[1,' uni-badge--']],[[7],[3,'size']]],[1,' uni-badge-inverted']],[[2,'+'],[[2,'+'],[[2,'+'],[1,'uni-badge-'],[[7],[3,'type']]],[1,' uni-badge--']],[[7],[3,'size']]]]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'onClick']]]]]]]]])
Z([a,[[7],[3,'text']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'width']])
Z([3,'uni-grid-item'])
Z([[2,'+'],[[2,'+'],[1,'width:'],[[7],[3,'width']]],[1,';']])
Z([3,'__e'])
Z([[4],[[5],[[5],[[5],[[5],[[5],[[5],[[5],[1,'uni-grid-item__box']],[[2,'?:'],[[7],[3,'showBorder']],[1,'border'],[1,'']]],[[2,'?:'],[[7],[3,'square']],[1,'uni-grid-item__box-square'],[1,'']]],[[2,'?:'],[[2,'&&'],[[7],[3,'showBorder']],[[2,'<'],[[7],[3,'index']],[[7],[3,'column']]]],[1,'border-top'],[1,'']]],[[2,'?:'],[[2,'&&'],[[7],[3,'showBorder']],[[2,'==='],[[2,'%'],[[7],[3,'index']],[[7],[3,'column']]],[1,0]]],[1,'border-left'],[1,'']]],[[2,'?:'],[[7],[3,'highlight']],[1,'uni-highlight'],[1,'']]],[[2,'?:'],[[2,'!'],[[7],[3,'highlight']]],[1,'uni-highlight-err'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'_onClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'border-color:'],[[7],[3,'borderColor']]],[1,';']])
Z([[2,'==='],[[7],[3,'marker']],[1,'dot']])
Z([3,'uni-grid-item__box-dot'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'left:'],[[2,'+'],[[7],[3,'top']],[1,'px']]],[1,';']],[[2,'+'],[[2,'+'],[1,'top:'],[[2,'+'],[[7],[3,'left']],[1,'px']]],[1,';']]])
Z([[2,'==='],[[7],[3,'marker']],[1,'badge']])
Z([3,'uni-grid-item__box-badge'])
Z(z[9])
Z([3,'__l'])
Z([[7],[3,'inverted']])
Z([[7],[3,'size']])
Z([[7],[3,'text']])
Z([[7],[3,'type']])
Z([3,'1'])
Z([[2,'==='],[[7],[3,'marker']],[1,'image']])
Z([3,'uni-grid-item__box-image'])
Z(z[9])
Z([3,'box-image'])
Z([3,'widthFix'])
Z([[7],[3,'src']])
Z([[2,'+'],[[2,'+'],[1,'width:'],[[2,'+'],[[7],[3,'imgWidth']],[1,'px']]],[1,';']])
Z([3,'uni-grid-item__box-item'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[1,'uni-grid']],[[2,'?:'],[[7],[3,'showBorder']],[1,'border'],[1,'']]]])
Z([[7],[3,'elId']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'history'])
Z([3,'true'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[2])
Z([3,'content'])
Z([3,'title'])
Z([a,[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'以'],[[6],[[7],[3,'item']],[3,'level']]],[1,'x']],[[6],[[7],[3,'item']],[3,'level']]],[1,'方格举例']]])
Z([3,'list'])
Z([3,'list-item'])
Z([3,'等级'])
Z(z[10])
Z([3,'优秀'])
Z(z[10])
Z([3,'良好'])
Z(z[10])
Z([3,'中等'])
Z(z[10])
Z([3,'及格'])
Z([3,'ind'])
Z([3,'it'])
Z([[6],[[7],[3,'item']],[3,'arr']])
Z(z[20])
Z([3,'item_list'])
Z([a,[[6],[[7],[3,'it']],[3,'age']]])
Z([3,'a'])
Z([3,'i'])
Z([[6],[[7],[3,'it']],[3,'time']])
Z(z[26])
Z([a,[[2,'+'],[[7],[3,'i']],[1,'秒']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'grade'])
Z([3,'title'])
Z([3,'太完美了'])
Z([3,'star'])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[6],[[7],[3,'user_grade']],[3,'star_level']],[3,'active']])
Z(z[4])
Z([3,'../../static/images/star.png'])
Z(z[4])
Z(z[5])
Z([[6],[[6],[[7],[3,'user_grade']],[3,'star_level']],[3,'default']])
Z(z[4])
Z([3,'../../static/images/star_f.png'])
Z([3,'content'])
Z([3,'fen'])
Z([3,'用时'])
Z([a,[[6],[[7],[3,'user_grade']],[3,'time']]])
Z([3,'错误'])
Z([a,[[6],[[7],[3,'user_grade']],[3,'error_num']]])
Z([3,'btn_imgs'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'history']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'../../static/images/history.png'])
Z(z[21])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'standard']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'../../static/images/sdfd.png'])
Z(z[21])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'back']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'../../static/images/back.png'])
Z(z[21])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'again']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'../../static/images/again.png'])
Z([3,'share'])
Z([3,'分享给小伙伴，让它来挑战'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'history'])
Z([3,'content'])
Z([3,'title'])
Z([a,[[2,'+'],[[2,'+'],[[2,'+'],[[7],[3,'level']],[1,'x']],[[7],[3,'level']]],[1,'方格历史成绩']]])
Z([3,'list'])
Z([3,'list_tit'])
Z([3,'times'])
Z([3,'日期'])
Z([3,'stars'])
Z([3,'星级'])
Z([3,'错误'])
Z([3,'用时'])
Z([3,'scroll_view'])
Z([3,'true'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'user_grade']])
Z(z[14])
Z([[2,'=='],[[7],[3,'level']],[[6],[[7],[3,'item']],[3,'level']]])
Z([3,'list_con'])
Z(z[6])
Z([a,[[6],[[6],[[7],[3,'item']],[3,'date']],[3,'date']]])
Z([a,[[6],[[6],[[7],[3,'item']],[3,'date']],[3,'time']]])
Z(z[8])
Z([3,'ind'])
Z([3,'i'])
Z([[6],[[6],[[7],[3,'item']],[3,'star_level']],[3,'active']])
Z(z[24])
Z([3,'../../static/images/star.png'])
Z(z[24])
Z(z[25])
Z([[6],[[6],[[7],[3,'item']],[3,'star_level']],[3,'default']])
Z(z[24])
Z([3,'../../static/images/star_f.png'])
Z([a,[[6],[[7],[3,'item']],[3,'error_num']]])
Z([a,[[6],[[7],[3,'item']],[3,'time']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'wrap'])
Z([3,'select_age'])
Z([[2,'!'],[[7],[3,'showmodule']]])
Z([3,'title'])
Z([3,'../../static/images/title.png'])
Z([3,'age_list'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'ages']])
Z(z[6])
Z([3,'__e'])
Z([[4],[[5],[[2,'+'],[1,'age'],[[2,'+'],[[7],[3,'index']],[1,1]]]]])
Z([[6],[[7],[3,'item']],[3,'ageType']])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'select_age']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'imgurl']])
Z([3,'select_level'])
Z([[2,'!'],[[2,'!'],[[7],[3,'showmodule']]]])
Z(z[3])
Z([3,'../../static/images/check.png'])
Z([3,'level_list'])
Z(z[6])
Z(z[7])
Z([[7],[3,'level']])
Z(z[6])
Z(z[10])
Z([[4],[[5],[[2,'+'],[1,'level'],[[2,'+'],[[7],[3,'index']],[1,1]]]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'play']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'level']],[1,'']],[[7],[3,'index']]],[1,'level']]]]]]]]]]]]]]])
Z(z[14])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'login'])
Z([3,'bg'])
Z([3,'../../static/images/fg01.jpg'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'a'])
Z([3,'__l'])
Z([3,'__e'])
Z([[7],[3,'column_num']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'change']]]]]]]]])
Z([1,true])
Z(z[5])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[9])
Z(z[1])
Z([[7],[3,'item']])
Z(z[10])
Z([[7],[3,'a']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'2-'],[[7],[3,'index']]],[1,',']],[1,'1']])
Z(z[8])
Z([3,'text'])
Z([a,[[7],[3,'item']]])
Z([3,'time'])
Z([3,'用时:'])
Z([a,[[7],[3,'time']]])
Z([3,'秒'])
Z([3,'click'])
Z([a,[[2,'+'],[1,'请点击:'],[[2,'+'],[[7],[3,'nextNum']],[1,1]]]])
Z([3,'btns'])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'again']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'../../static/images/sx.png'])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'random_sort']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'../../static/images/sdf.png'])
Z([3,'maker'])
Z([[2,'!'],[[7],[3,'istip']]])
Z([3,'mak_bg'])
Z([3,'../../static/images/bgm.png'])
Z(z[2])
Z([3,'close'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'close']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'../../static/images/close.png'])
Z([3,'center'])
Z([3,'game'])
Z([3,'../../static/images/game.png'])
Z([3,'kuang'])
Z([3,'用手指按照1，2，3，4.......的顺序点击相应的方格,并口说数字,用时越少说明你越优秀呦!'])
Z(z[2])
Z([3,'go'])
Z(z[40])
Z([3,'../../static/images/go.png'])
Z(z[2])
Z([3,'not'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'n_remind']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'不再提醒'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/uni-badge/uni-badge.wxml','./components/uni-grid-item/uni-grid-item.wxml','./components/uni-grid/uni-grid.wxml','./pages/criterion/criterion.wxml','./pages/grade/grade.wxml','./pages/history/history.wxml','./pages/index/index.wxml','./pages/login/login.wxml','./pages/play/play.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
var xC=_mz(z,'text',['bindtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var oD=_oz(z,4,e,s,gg)
_(xC,oD)
_(oB,xC)
}
oB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var cF=_v()
_(r,cF)
if(_oz(z,0,e,s,gg)){cF.wxVkey=1
var hG=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var oH=_mz(z,'view',['bindtouchstart',3,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var cI=_v()
_(oH,cI)
if(_oz(z,7,e,s,gg)){cI.wxVkey=1
var aL=_mz(z,'view',['class',8,'style',1],[],e,s,gg)
_(cI,aL)
}
var oJ=_v()
_(oH,oJ)
if(_oz(z,10,e,s,gg)){oJ.wxVkey=1
var tM=_mz(z,'view',['class',11,'style',1],[],e,s,gg)
var eN=_mz(z,'uni-badge',['bind:__l',13,'inverted',1,'size',2,'text',3,'type',4,'vueId',5],[],e,s,gg)
_(tM,eN)
_(oJ,tM)
}
var lK=_v()
_(oH,lK)
if(_oz(z,19,e,s,gg)){lK.wxVkey=1
var bO=_mz(z,'view',['class',20,'style',1],[],e,s,gg)
var oP=_mz(z,'image',['class',22,'mode',1,'src',2,'style',3],[],e,s,gg)
_(bO,oP)
_(lK,bO)
}
var xQ=_n('view')
_rz(z,xQ,'class',26,e,s,gg)
var oR=_n('slot')
_(xQ,oR)
_(oH,xQ)
cI.wxXCkey=1
oJ.wxXCkey=1
oJ.wxXCkey=3
lK.wxXCkey=1
_(hG,oH)
_(cF,hG)
}
cF.wxXCkey=1
cF.wxXCkey=3
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var cT=_n('view')
var hU=_mz(z,'view',['class',0,'id',1],[],e,s,gg)
var oV=_n('slot')
_(hU,oV)
_(cT,hU)
_(r,cT)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var oX=_mz(z,'scroll-view',['class',0,'scrollY',1],[],e,s,gg)
var lY=_v()
_(oX,lY)
var aZ=function(e2,t1,b3,gg){
var x5=_n('view')
_rz(z,x5,'class',6,e2,t1,gg)
var o6=_n('view')
_rz(z,o6,'class',7,e2,t1,gg)
var f7=_oz(z,8,e2,t1,gg)
_(o6,f7)
_(x5,o6)
var c8=_n('view')
_rz(z,c8,'class',9,e2,t1,gg)
var h9=_n('view')
_rz(z,h9,'class',10,e2,t1,gg)
var o0=_oz(z,11,e2,t1,gg)
_(h9,o0)
_(c8,h9)
var cAB=_n('view')
_rz(z,cAB,'class',12,e2,t1,gg)
var oBB=_oz(z,13,e2,t1,gg)
_(cAB,oBB)
_(c8,cAB)
var lCB=_n('view')
_rz(z,lCB,'class',14,e2,t1,gg)
var aDB=_oz(z,15,e2,t1,gg)
_(lCB,aDB)
_(c8,lCB)
var tEB=_n('view')
_rz(z,tEB,'class',16,e2,t1,gg)
var eFB=_oz(z,17,e2,t1,gg)
_(tEB,eFB)
_(c8,tEB)
var bGB=_n('view')
_rz(z,bGB,'class',18,e2,t1,gg)
var oHB=_oz(z,19,e2,t1,gg)
_(bGB,oHB)
_(c8,bGB)
var xIB=_v()
_(c8,xIB)
var oJB=function(cLB,fKB,hMB,gg){
var cOB=_n('view')
_rz(z,cOB,'class',24,cLB,fKB,gg)
var oPB=_n('view')
var lQB=_oz(z,25,cLB,fKB,gg)
_(oPB,lQB)
_(cOB,oPB)
var aRB=_v()
_(cOB,aRB)
var tSB=function(bUB,eTB,oVB,gg){
var oXB=_n('view')
var fYB=_oz(z,30,bUB,eTB,gg)
_(oXB,fYB)
_(oVB,oXB)
return oVB
}
aRB.wxXCkey=2
_2z(z,28,tSB,cLB,fKB,gg,aRB,'i','a','a')
_(hMB,cOB)
return hMB
}
xIB.wxXCkey=2
_2z(z,22,oJB,e2,t1,gg,xIB,'it','ind','ind')
_(x5,c8)
_(b3,x5)
return b3
}
lY.wxXCkey=2
_2z(z,4,aZ,e,s,gg,lY,'item','index','index')
_(r,oX)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var h1B=_n('view')
_rz(z,h1B,'class',0,e,s,gg)
var o2B=_n('view')
_rz(z,o2B,'class',1,e,s,gg)
var c3B=_oz(z,2,e,s,gg)
_(o2B,c3B)
_(h1B,o2B)
var o4B=_n('view')
_rz(z,o4B,'class',3,e,s,gg)
var l5B=_v()
_(o4B,l5B)
var a6B=function(e8B,t7B,b9B,gg){
var xAC=_n('image')
_rz(z,xAC,'src',8,e8B,t7B,gg)
_(b9B,xAC)
return b9B
}
l5B.wxXCkey=2
_2z(z,6,a6B,e,s,gg,l5B,'item','index','index')
var oBC=_v()
_(o4B,oBC)
var fCC=function(hEC,cDC,oFC,gg){
var oHC=_n('image')
_rz(z,oHC,'src',13,hEC,cDC,gg)
_(oFC,oHC)
return oFC
}
oBC.wxXCkey=2
_2z(z,11,fCC,e,s,gg,oBC,'item','index','index')
_(h1B,o4B)
var lIC=_n('view')
_rz(z,lIC,'class',14,e,s,gg)
var aJC=_n('view')
_rz(z,aJC,'class',15,e,s,gg)
var tKC=_n('view')
var eLC=_oz(z,16,e,s,gg)
_(tKC,eLC)
_(aJC,tKC)
var bMC=_n('view')
var oNC=_oz(z,17,e,s,gg)
_(bMC,oNC)
_(aJC,bMC)
var xOC=_n('view')
var oPC=_oz(z,18,e,s,gg)
_(xOC,oPC)
var fQC=_n('text')
var cRC=_oz(z,19,e,s,gg)
_(fQC,cRC)
_(xOC,fQC)
_(aJC,xOC)
_(lIC,aJC)
var hSC=_n('view')
_rz(z,hSC,'class',20,e,s,gg)
var oTC=_mz(z,'image',['bindtap',21,'data-event-opts',1,'src',2],[],e,s,gg)
_(hSC,oTC)
var cUC=_mz(z,'image',['bindtap',24,'data-event-opts',1,'src',2],[],e,s,gg)
_(hSC,cUC)
var oVC=_mz(z,'image',['bindtap',27,'data-event-opts',1,'src',2],[],e,s,gg)
_(hSC,oVC)
var lWC=_mz(z,'image',['bindtap',30,'data-event-opts',1,'src',2],[],e,s,gg)
_(hSC,lWC)
_(lIC,hSC)
_(h1B,lIC)
var aXC=_n('button')
_rz(z,aXC,'openType',33,e,s,gg)
var tYC=_oz(z,34,e,s,gg)
_(aXC,tYC)
_(h1B,aXC)
_(r,h1B)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var b1C=_n('view')
_rz(z,b1C,'class',0,e,s,gg)
var o2C=_n('view')
_rz(z,o2C,'class',1,e,s,gg)
var x3C=_n('view')
_rz(z,x3C,'class',2,e,s,gg)
var o4C=_oz(z,3,e,s,gg)
_(x3C,o4C)
_(o2C,x3C)
var f5C=_n('view')
_rz(z,f5C,'class',4,e,s,gg)
var c6C=_n('view')
_rz(z,c6C,'class',5,e,s,gg)
var h7C=_n('view')
_rz(z,h7C,'class',6,e,s,gg)
var o8C=_oz(z,7,e,s,gg)
_(h7C,o8C)
_(c6C,h7C)
var c9C=_n('view')
_rz(z,c9C,'class',8,e,s,gg)
var o0C=_oz(z,9,e,s,gg)
_(c9C,o0C)
_(c6C,c9C)
var lAD=_n('view')
var aBD=_oz(z,10,e,s,gg)
_(lAD,aBD)
_(c6C,lAD)
var tCD=_n('view')
var eDD=_oz(z,11,e,s,gg)
_(tCD,eDD)
_(c6C,tCD)
_(f5C,c6C)
var bED=_mz(z,'scroll-view',['class',12,'scrollY',1],[],e,s,gg)
var oFD=_v()
_(bED,oFD)
var xGD=function(fID,oHD,cJD,gg){
var oLD=_n('view')
var cMD=_v()
_(oLD,cMD)
if(_oz(z,18,fID,oHD,gg)){cMD.wxVkey=1
var oND=_n('view')
_rz(z,oND,'class',19,fID,oHD,gg)
var lOD=_n('view')
_rz(z,lOD,'class',20,fID,oHD,gg)
var aPD=_n('view')
var tQD=_oz(z,21,fID,oHD,gg)
_(aPD,tQD)
_(lOD,aPD)
var eRD=_n('view')
var bSD=_oz(z,22,fID,oHD,gg)
_(eRD,bSD)
_(lOD,eRD)
_(oND,lOD)
var oTD=_n('view')
_rz(z,oTD,'class',23,fID,oHD,gg)
var xUD=_v()
_(oTD,xUD)
var oVD=function(cXD,fWD,hYD,gg){
var c1D=_n('image')
_rz(z,c1D,'src',28,cXD,fWD,gg)
_(hYD,c1D)
return hYD
}
xUD.wxXCkey=2
_2z(z,26,oVD,fID,oHD,gg,xUD,'i','ind','ind')
var o2D=_v()
_(oTD,o2D)
var l3D=function(t5D,a4D,e6D,gg){
var o8D=_n('image')
_rz(z,o8D,'src',33,t5D,a4D,gg)
_(e6D,o8D)
return e6D
}
o2D.wxXCkey=2
_2z(z,31,l3D,fID,oHD,gg,o2D,'i','ind','ind')
_(oND,oTD)
var x9D=_n('view')
var o0D=_oz(z,34,fID,oHD,gg)
_(x9D,o0D)
_(oND,x9D)
var fAE=_n('view')
var cBE=_oz(z,35,fID,oHD,gg)
_(fAE,cBE)
_(oND,fAE)
_(cMD,oND)
}
cMD.wxXCkey=1
_(cJD,oLD)
return cJD
}
oFD.wxXCkey=2
_2z(z,16,xGD,e,s,gg,oFD,'item','index','index')
_(f5C,bED)
_(o2C,f5C)
_(b1C,o2C)
_(r,b1C)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var oDE=_n('view')
_rz(z,oDE,'class',0,e,s,gg)
var cEE=_mz(z,'view',['class',1,'hidden',1],[],e,s,gg)
var oFE=_mz(z,'image',['class',3,'src',1],[],e,s,gg)
_(cEE,oFE)
var lGE=_n('view')
_rz(z,lGE,'class',5,e,s,gg)
var aHE=_v()
_(lGE,aHE)
var tIE=function(bKE,eJE,oLE,gg){
var oNE=_mz(z,'image',['bindtap',10,'class',1,'data-agetpye',2,'data-event-opts',3,'src',4],[],bKE,eJE,gg)
_(oLE,oNE)
return oLE
}
aHE.wxXCkey=2
_2z(z,8,tIE,e,s,gg,aHE,'item','index','index')
_(cEE,lGE)
_(oDE,cEE)
var fOE=_mz(z,'view',['class',15,'hidden',1],[],e,s,gg)
var cPE=_mz(z,'image',['class',17,'src',1],[],e,s,gg)
_(fOE,cPE)
var hQE=_n('view')
_rz(z,hQE,'class',19,e,s,gg)
var oRE=_v()
_(hQE,oRE)
var cSE=function(lUE,oTE,aVE,gg){
var eXE=_mz(z,'image',['bindtap',24,'class',1,'data-event-opts',2,'src',3],[],lUE,oTE,gg)
_(aVE,eXE)
return aVE
}
oRE.wxXCkey=2
_2z(z,22,cSE,e,s,gg,oRE,'item','index','index')
_(fOE,hQE)
_(oDE,fOE)
_(r,oDE)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var oZE=_n('view')
_rz(z,oZE,'class',0,e,s,gg)
var x1E=_mz(z,'image',['mode',-1,'class',1,'src',1],[],e,s,gg)
_(oZE,x1E)
_(r,oZE)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var f3E=_n('view')
_rz(z,f3E,'class',0,e,s,gg)
var c4E=_mz(z,'uni-grid',['bind:__l',1,'bind:change',1,'column',2,'data-event-opts',3,'showBorder',4,'square',5,'vueId',6,'vueSlots',7],[],e,s,gg)
var h5E=_v()
_(c4E,h5E)
var o6E=function(o8E,c7E,l9E,gg){
var tAF=_mz(z,'uni-grid-item',['bind:__l',13,'c_index',1,'data-n',2,'highlight',3,'vueId',4,'vueSlots',5],[],o8E,c7E,gg)
var eBF=_n('text')
_rz(z,eBF,'class',19,o8E,c7E,gg)
var bCF=_oz(z,20,o8E,c7E,gg)
_(eBF,bCF)
_(tAF,eBF)
_(l9E,tAF)
return l9E
}
h5E.wxXCkey=4
_2z(z,11,o6E,e,s,gg,h5E,'item','index','index')
_(f3E,c4E)
var oDF=_n('view')
_rz(z,oDF,'class',21,e,s,gg)
var xEF=_oz(z,22,e,s,gg)
_(oDF,xEF)
var oFF=_n('text')
var fGF=_oz(z,23,e,s,gg)
_(oFF,fGF)
_(oDF,oFF)
var cHF=_oz(z,24,e,s,gg)
_(oDF,cHF)
_(f3E,oDF)
var hIF=_n('text')
_rz(z,hIF,'class',25,e,s,gg)
var oJF=_oz(z,26,e,s,gg)
_(hIF,oJF)
_(f3E,hIF)
var cKF=_n('view')
_rz(z,cKF,'class',27,e,s,gg)
var oLF=_mz(z,'image',['bindtap',28,'data-event-opts',1,'src',2],[],e,s,gg)
_(cKF,oLF)
var lMF=_mz(z,'image',['bindtap',31,'data-event-opts',1,'src',2],[],e,s,gg)
_(cKF,lMF)
_(f3E,cKF)
var aNF=_mz(z,'view',['class',34,'hidden',1],[],e,s,gg)
var tOF=_mz(z,'image',['class',36,'src',1],[],e,s,gg)
_(aNF,tOF)
var ePF=_mz(z,'image',['bindtap',38,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
_(aNF,ePF)
var bQF=_n('view')
_rz(z,bQF,'class',42,e,s,gg)
var oRF=_mz(z,'image',['class',43,'src',1],[],e,s,gg)
_(bQF,oRF)
var xSF=_n('view')
_rz(z,xSF,'class',45,e,s,gg)
var oTF=_n('text')
var fUF=_oz(z,46,e,s,gg)
_(oTF,fUF)
_(xSF,oTF)
_(bQF,xSF)
var cVF=_mz(z,'image',['bindtap',47,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
_(bQF,cVF)
var hWF=_mz(z,'text',['bindtap',51,'class',1,'data-event-opts',2],[],e,s,gg)
var oXF=_oz(z,54,e,s,gg)
_(hWF,oXF)
_(bQF,hWF)
_(aNF,bQF)
_(f3E,aNF)
_(r,f3E)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],["@font-face { font-family: uniicons; font-weight: normal; font-style: normal; src: url(data:font/ttf;base64,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b250VmVyc2lvbiAxLjBtdWlmb250R2VuZXJhdGVkIGJ5IHN2ZzJ0dGYgZnJvbSBGb250ZWxsbyBwcm9qZWN0Lmh0dHA6Ly9mb250ZWxsby5jb20ACgBDAHIAZQBhAHQAZQBkACAAYgB5ACAAaQBjAG8AbgBmAG8AbgB0AAoAbQB1AGkAZgBvAG4AdABSAGUAZwB1AGwAYQByAG0AdQBpAGYAbwBuAHQAbQB1AGkAZgBvAG4AdABWAGUAcgBzAGkAbwBuACAAMQAuADAAbQB1AGkAZgBvAG4AdABHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgEfASABIQEiASMBJAElASYBJwEoASkBKgErASwBLQEuAS8BMAExATIBMwE0ATUBNgE3ATgBOQE6ATsBPAE9AT4BPwFAAUEBQgFDAUQBRQFGAUcBSAFJAUoBSwFMAU0BTgFPAVABUQFSAVMBVAFVAVYBVwFYAVkBWgANc3Bpbm5lci1jeWNsZQRjaGF0A2V5ZQRiYXJzBXdlaWJvBndlaXhpbgtwZW5neW91cXVhbgNtYXACcXENY2lyY2xlLWZpbGxlZARsaXN0B3NwaW5uZXIIcHVsbGRvd24FaW1hZ2UGY2FtZXJhB2NvbnRhY3QOY29udGFjdC1maWxsZWQIZG93bmxvYWQFZW1haWwMZW1haWwtZmlsbGVkBGhlbHALaGVscC1maWxsZWQIbG9jYXRpb24PbG9jYXRpb24tZmlsbGVkBmxvY2tlZAZtaWNvZmYDbWljCm1pYy1maWxsZWQQcGVyc29uYWRkLWZpbGxlZAxyZWZyZXNoZW1wdHkHcmVmcmVzaA5yZWZyZXNoLWZpbGxlZAZyZWxvYWQIc3RhcmhhbGYEc3RhcgtzdGFyLWZpbGxlZAVwaG9uZQxwaG9uZS1maWxsZWQEdW5kbwZ1cGxvYWQIdmlkZW9jYW0JcGFwZXJjbGlwBnBlcnNvbg1wZXJzb24tZmlsbGVkCXBlcnNvbmFkZAljaGF0Ym94ZXMQY2hhdGJveGVzLWZpbGxlZApjaGF0YnViYmxlEWNoYXRidWJibGUtZmlsbGVkCmNsb3NlZW1wdHkFY2xvc2UMY2xvc2UtZmlsbGVkB2NvbXBvc2UFdHJhc2gEcmVkbwRpbmZvC2luZm8tZmlsbGVkBGdlYXILZ2Vhci1maWxsZWQEaG9tZQtob21lLWZpbGxlZAZzZWFyY2gIc2V0dGluZ3MFbWludXMMbWludXMtZmlsbGVkCXBsdXNlbXB0eQRwbHVzC3BsdXMtZmlsbGVkBGJhY2sHZm9yd2FyZAhuYXZpZ2F0ZQRmbGFnBGxvb3AEbW9yZQttb3JlLWZpbGxlZApwYXBlcnBsYW5lCWFycm93ZG93bglhcnJvd2xlZnQKYXJyb3dyaWdodA1hcnJvd3RoaW5kb3duDWFycm93dGhpbmxlZnQOYXJyb3d0aGlucmlnaHQLYXJyb3d0aGludXAHYXJyb3d1cA5jaGVja21hcmtlbXB0eQ9jaGVja2JveC1maWxsZWQGY2lyY2xlBHNjYW4AAA\x3d\x3d) format(\x27truetype\x27); }\nbody{ height: 100%; }\nwx-view{ font-size:",[0,28],"; line-height:1.8; }\nwx-progress, wx-checkbox-group{ width: 100%; }\nwx-form { width: 100%; }\n.",[1],"uni-flex { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"uni-flex-item { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"uni-row { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"uni-column { -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"uni-link{ color:#576B95; font-size:",[0,26],"; }\n.",[1],"uni-center{ text-align:center; }\n.",[1],"uni-inline-item{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-align:center; -webkit-align-items:center; -ms-flex-align:center; align-items:center; }\n.",[1],"uni-inline-item wx-text{ margin-right: ",[0,20],"; }\n.",[1],"uni-inline-item wx-text:last-child{ margin-right: ",[0,0],"; margin-left: ",[0,20],"; }\n.",[1],"uni-page-head{ padding:",[0,35],"; text-align: center; }\n.",[1],"uni-page-head-title { display: inline-block; padding: 0 ",[0,40],"; font-size: ",[0,30],"; height: ",[0,88],"; line-height: ",[0,88],"; color: #BEBEBE; -webkit-box-sizing: border-box; box-sizing: border-box; border-bottom: ",[0,2]," solid #D8D8D8; }\n.",[1],"uni-page-body { width: 100%; -webkit-box-flex: 1; -webkit-flex-grow: 1; -ms-flex-positive: 1; flex-grow: 1; overflow-x: hidden; }\n.",[1],"uni-padding-wrap{ width:",[0,690],"; padding:0 ",[0,30],"; }\n.",[1],"uni-word { text-align: center; padding:",[0,200]," ",[0,100],"; }\n.",[1],"uni-title { font-size:",[0,30],"; font-weight:500; padding:",[0,20]," 0; line-height:1.5; }\n.",[1],"uni-text{ font-size:",[0,28],"; }\n.",[1],"uni-title wx-text{ font-size:",[0,24],"; color:#888; }\n.",[1],"uni-text-gray{ color: #ccc; }\n.",[1],"uni-text-small { font-size:",[0,24],"; }\n.",[1],"uni-common-mb{ margin-bottom:",[0,30],"; }\n.",[1],"uni-common-pb{ padding-bottom:",[0,30],"; }\n.",[1],"uni-common-pl{ padding-left:",[0,30],"; }\n.",[1],"uni-common-mt{ margin-top:",[0,30],"; }\n.",[1],"uni-bg-red{ background:#F76260; color:#FFF; }\n.",[1],"uni-bg-green{ background:#09BB07; color:#FFF; }\n.",[1],"uni-bg-blue{ background:#007AFF; color:#FFF; }\n.",[1],"uni-h1 {font-size: ",[0,80],"; font-weight:700;}\n.",[1],"uni-h2 {font-size: ",[0,60],"; font-weight:700;}\n.",[1],"uni-h3 {font-size: ",[0,48],"; font-weight:700;}\n.",[1],"uni-h4 {font-size: ",[0,36],"; font-weight:700;}\n.",[1],"uni-h5 {font-size: ",[0,28],"; color: #8f8f94;}\n.",[1],"uni-h6 {font-size: ",[0,24],"; color: #8f8f94;}\n.",[1],"uni-bold{font-weight:bold;}\n.",[1],"uni-ellipsis {overflow: hidden; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis;}\n.",[1],"uni-btn-v{ padding:",[0,10]," 0; }\n.",[1],"uni-btn-v wx-button{margin:",[0,20]," 0;}\n.",[1],"uni-form-item{ display:-webkit-box; display:-webkit-flex; display:-ms-flexbox; display:flex; width:100%; padding:",[0,10]," 0; }\n.",[1],"uni-form-item .",[1],"title{ padding:",[0,10]," ",[0,25],"; }\n.",[1],"uni-label { width: ",[0,210],"; word-wrap: break-word; word-break: break-all; text-indent:",[0,20],"; }\n.",[1],"uni-input { height: ",[0,50],"; padding: ",[0,15]," ",[0,25],"; line-height:",[0,50],"; font-size:",[0,28],"; background:#FFF; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\nwx-radio-group, wx-checkbox-group{ width:100%; }\nwx-radio-group wx-label, wx-checkbox-group wx-label{ padding-right:",[0,20],"; }\n.",[1],"uni-form-item .",[1],"with-fun{ display:-webkit-box; display:-webkit-flex; display:-ms-flexbox; display:flex; -webkit-flex-wrap:nowrap; -ms-flex-wrap:nowrap; flex-wrap:nowrap; background:#FFFFFF; }\n.",[1],"uni-form-item .",[1],"with-fun .",[1],"uni-icon{ width:40px; height:",[0,80],"; line-height:",[0,80],"; -webkit-flex-shrink:0; -ms-flex-negative:0; flex-shrink:0; }\n.",[1],"uni-loadmore{ height:",[0,80],"; line-height:",[0,80],"; text-align:center; padding-bottom:",[0,30],"; }\n.",[1],"uni-badge, .",[1],"uni-badge-default { font-family: \x27Helvetica Neue\x27, Helvetica, sans-serif; font-size: 12px; line-height: 1; display: inline-block; padding: 3px 6px; color: #333; border-radius: 100px; background-color: rgba(0, 0, 0, .15); }\n.",[1],"uni-badge.",[1],"uni-badge-inverted { padding: 0 5px 0 0; color: #929292; background-color: transparent }\n.",[1],"uni-badge-primary { color: #fff; background-color: #007aff }\n.",[1],"uni-badge-blue.",[1],"uni-badge-inverted, .",[1],"uni-badge-primary.",[1],"uni-badge-inverted { color: #007aff; background-color: transparent }\n.",[1],"uni-badge-green, .",[1],"uni-badge-success { color: #fff; background-color: #4cd964; }\n.",[1],"uni-badge-green.",[1],"uni-badge-inverted, .",[1],"uni-badge-success.",[1],"uni-badge-inverted { color: #4cd964; background-color: transparent }\n.",[1],"uni-badge-warning, .",[1],"uni-badge-yellow { color: #fff; background-color: #f0ad4e }\n.",[1],"uni-badge-warning.",[1],"uni-badge-inverted, .",[1],"uni-badge-yellow.",[1],"uni-badge-inverted { color: #f0ad4e; background-color: transparent }\n.",[1],"uni-badge-danger, .",[1],"uni-badge-red { color: #fff; background-color: #dd524d }\n.",[1],"uni-badge-danger.",[1],"uni-badge-inverted, .",[1],"uni-badge-red.",[1],"uni-badge-inverted { color: #dd524d; background-color: transparent }\n.",[1],"uni-badge-purple, .",[1],"uni-badge-royal { color: #fff; background-color: #8a6de9 }\n.",[1],"uni-badge-purple.",[1],"uni-badge-inverted, .",[1],"uni-badge-royal.",[1],"uni-badge-inverted { color: #8a6de9; background-color: transparent }\n.",[1],"uni-collapse-content { height: 0; width: 100%; overflow: hidden; }\n.",[1],"uni-collapse-content.",[1],"uni-active { height: auto; }\n.",[1],"uni-card { background: #fff; border-radius: ",[0,8],"; margin:",[0,20]," 0; position: relative; -webkit-box-shadow: 0 ",[0,2]," ",[0,4]," rgba(0, 0, 0, .3); box-shadow: 0 ",[0,2]," ",[0,4]," rgba(0, 0, 0, .3); }\n.",[1],"uni-card-content { font-size: ",[0,30],"; }\n.",[1],"uni-card-content.",[1],"image-view{ width: 100%; margin: 0; }\n.",[1],"uni-card-content-inner { position: relative; padding: ",[0,30],"; }\n.",[1],"uni-card-footer, .",[1],"uni-card-header { position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; min-height: ",[0,50],"; padding: ",[0,20]," ",[0,30],"; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"uni-card-header { font-size: ",[0,36],"; }\n.",[1],"uni-card-footer { color: #6d6d72; }\n.",[1],"uni-card-footer:before, .",[1],"uni-card-header:after { position: absolute; top: 0; right: 0; left: 0; height: ",[0,2],"; content: \x27\x27; -webkit-transform: scaleY(.5); -ms-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-card-header:after { top: auto; bottom: 0; }\n.",[1],"uni-card-media { -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; }\n.",[1],"uni-card-media-logo { height: ",[0,84],"; width: ",[0,84],"; margin-right: ",[0,20],"; }\n.",[1],"uni-card-media-body { height: ",[0,84],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: start; -webkit-align-items: flex-start; -ms-flex-align: start; align-items: flex-start; }\n.",[1],"uni-card-media-text-top { line-height: ",[0,36],"; font-size: ",[0,34],"; }\n.",[1],"uni-card-media-text-bottom { line-height: ",[0,30],"; font-size: ",[0,28],"; color: #8f8f94; }\n.",[1],"uni-card-link { color: #007AFF; }\n.",[1],"uni-list { background-color: #FFFFFF; position: relative; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"uni-list:after { position: absolute; z-index: 10; right: 0; bottom: 0; left: 0; height: 1px; content: \x27\x27; -webkit-transform: scaleY(.5); -ms-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-list::before { position: absolute; z-index: 10; right: 0; top: 0; left: 0; height: 1px; content: \x27\x27; -webkit-transform: scaleY(.5); -ms-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-list-cell { position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"uni-list-cell-hover { background-color: #eee; }\n.",[1],"uni-list-cell-pd { padding: ",[0,22]," ",[0,30],"; }\n.",[1],"uni-list-cell-left { font-size:",[0,28],"; padding: 0 ",[0,30],"; }\n.",[1],"uni-list-cell-db, .",[1],"uni-list-cell-right { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"uni-list-cell::after { position: absolute; z-index: 3; right: 0; bottom: 0; left: ",[0,30],"; height: 1px; content: \x27\x27; -webkit-transform: scaleY(.5); -ms-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-list .",[1],"uni-list-cell:last-child::after { height: ",[0,0],"; }\n.",[1],"uni-list-cell-last.",[1],"uni-list-cell::after { height: ",[0,0],"; }\n.",[1],"uni-list-cell-divider { position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; color: #999; background-color: #f7f7f7; padding:",[0,15]," ",[0,20],"; }\n.",[1],"uni-list-cell-divider::before { position: absolute; right: 0; top: 0; left: 0; height: 1px; content: \x27\x27; -webkit-transform: scaleY(.5); -ms-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-list-cell-divider::after { position: absolute; right: 0; bottom: 0; left: ",[0,0],"; height: 1px; content: \x27\x27; -webkit-transform: scaleY(.5); -ms-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-list-cell-navigate { font-size:",[0,30],"; padding: ",[0,22]," ",[0,30],"; line-height: ",[0,48],"; position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-sizing: border-box; box-sizing: border-box; width: 100%; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"uni-list-cell-navigate { padding-right: ",[0,36],"; }\n.",[1],"uni-navigate-badge { padding-right: ",[0,50],"; }\n.",[1],"uni-list-cell-navigate.",[1],"uni-navigate-right:after { font-family: uniicons; content: \x27\\E583\x27; position: absolute; right: ",[0,24],"; top: 50%; color: #bbb; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); }\n.",[1],"uni-list-cell-navigate.",[1],"uni-navigate-bottom:after { font-family: uniicons; content: \x27\\E581\x27; position: absolute; right: ",[0,24],"; top: 50%; color: #bbb; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); }\n.",[1],"uni-list-cell-navigate.",[1],"uni-navigate-bottom.",[1],"uni-active::after { font-family: uniicons; content: \x27\\E580\x27; position: absolute; right: ",[0,24],"; top: 50%; color: #bbb; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); }\n.",[1],"uni-collapse.",[1],"uni-list-cell { -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"uni-list-cell-navigate.",[1],"uni-active { background: #eee; }\n.",[1],"uni-list.",[1],"uni-collapse { -webkit-box-sizing: border-box; box-sizing: border-box; height: 0; overflow: hidden; }\n.",[1],"uni-collapse .",[1],"uni-list-cell { padding-left: ",[0,20],"; }\n.",[1],"uni-collapse .",[1],"uni-list-cell::after { left: ",[0,52],"; }\n.",[1],"uni-list.",[1],"uni-active { height: auto; }\n.",[1],"uni-triplex-row { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; width: 100%; -webkit-box-sizing: border-box; box-sizing: border-box; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; padding: ",[0,22]," ",[0,30],"; }\n.",[1],"uni-triplex-right, .",[1],"uni-triplex-left { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"uni-triplex-left { width: 84%; }\n.",[1],"uni-triplex-left .",[1],"uni-title{ padding:",[0,8]," 0; }\n.",[1],"uni-triplex-left .",[1],"uni-text, .",[1],"uni-triplex-left .",[1],"uni-text-small{color:#999999;}\n.",[1],"uni-triplex-right { width: 16%; text-align: right; }\n.",[1],"uni-media-list { padding: ",[0,22]," ",[0,30],"; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; width: 100%; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"uni-navigate-right.",[1],"uni-media-list { padding-right: ",[0,74],"; }\n.",[1],"uni-pull-right { -webkit-box-orient: horizontal; -webkit-box-direction: reverse; -webkit-flex-direction: row-reverse; -ms-flex-direction: row-reverse; flex-direction: row-reverse; }\n.",[1],"uni-pull-right\x3e.",[1],"uni-media-list-logo { margin-right: ",[0,0],"; margin-left: ",[0,20],"; }\n.",[1],"uni-media-list-logo { height: ",[0,84],"; width: ",[0,84],"; margin-right: ",[0,20],"; }\n.",[1],"uni-media-list-logo wx-image { height: 100%; width: 100%; }\n.",[1],"uni-media-list-body { height: ",[0,84],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: start; -webkit-align-items: flex-start; -ms-flex-align: start; align-items: flex-start; overflow: hidden; }\n.",[1],"uni-media-list-text-top { width: 100%; line-height: ",[0,36],"; font-size: ",[0,30],"; }\n.",[1],"uni-media-list-text-bottom { width: 100%; line-height: ",[0,30],"; font-size: ",[0,26],"; color: #8f8f94; }\n.",[1],"uni-grid-9 { background: #f2f2f2; width: ",[0,750],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; border-top: ",[0,2]," solid #eee; }\n.",[1],"uni-grid-9-item { width: ",[0,250],"; height: ",[0,200],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; border-bottom: ",[0,2]," solid; border-right: ",[0,2]," solid; border-color: #eee; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"no-border-right { border-right: none; }\n.",[1],"uni-grid-9-image { width: ",[0,100],"; height: ",[0,100],"; }\n.",[1],"uni-grid-9-text { width: ",[0,250],"; line-height: ",[0,4],"; height: ",[0,40],"; text-align: center; font-size: ",[0,30],"; }\n.",[1],"uni-grid-9-item-hover { background: rgba(0, 0, 0, 0.1); }\n.",[1],"uni-uploader { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"uni-uploader-head { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"uni-uploader-info { color: #B2B2B2; }\n.",[1],"uni-uploader-body { margin-top: ",[0,16],"; }\n.",[1],"uni-uploader__files { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"uni-uploader__file { margin: ",[0,10],"; width: ",[0,210],"; height: ",[0,210],"; }\n.",[1],"uni-uploader__img { display: block; width: ",[0,210],"; height: ",[0,210],"; }\n.",[1],"uni-uploader__input-box { position: relative; margin:",[0,10],"; width: ",[0,208],"; height: ",[0,208],"; border: ",[0,2]," solid #D9D9D9; }\n.",[1],"uni-uploader__input-box:before, .",[1],"uni-uploader__input-box:after { content: \x22 \x22; position: absolute; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%); background-color: #D9D9D9; }\n.",[1],"uni-uploader__input-box:before { width: ",[0,4],"; height: ",[0,79],"; }\n.",[1],"uni-uploader__input-box:after { width: ",[0,79],"; height: ",[0,4],"; }\n.",[1],"uni-uploader__input-box:active { border-color: #999999; }\n.",[1],"uni-uploader__input-box:active:before, .",[1],"uni-uploader__input-box:active:after { background-color: #999999; }\n.",[1],"uni-uploader__input { position: absolute; z-index: 1; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; }\n.",[1],"feedback-title { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding: ",[0,20],"; color: #8f8f94; font-size: ",[0,28],"; }\n.",[1],"feedback-star-view.",[1],"feedback-title { -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; margin: 0; }\n.",[1],"feedback-quick { position: relative; padding-right: ",[0,40],"; }\n.",[1],"feedback-quick:after { font-family: uniicons; font-size: ",[0,40],"; content: \x27\\E581\x27; position: absolute; right: 0; top: 50%; color: #bbb; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); }\n.",[1],"feedback-body { background: #fff; }\n.",[1],"feedback-textare { height: ",[0,200],"; font-size: ",[0,34],"; line-height: ",[0,50],"; width: 100%; -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,20]," ",[0,30]," 0; }\n.",[1],"feedback-input { font-size: ",[0,34],"; height: ",[0,50],"; min-height: ",[0,50],"; padding: ",[0,15]," ",[0,20],"; line-height: ",[0,50],"; }\n.",[1],"feedback-uploader { padding: ",[0,22]," ",[0,20],"; }\n.",[1],"feedback-star { font-family: uniicons; font-size: ",[0,40],"; margin-left: ",[0,6],"; }\n.",[1],"feedback-star-view { margin-left: ",[0,20],"; }\n.",[1],"feedback-star:after { content: \x27\\E408\x27; }\n.",[1],"feedback-star.",[1],"active { color: #FFB400; }\n.",[1],"feedback-star.",[1],"active:after { content: \x27\\E438\x27; }\n.",[1],"feedback-submit { background: #007AFF; color: #FFFFFF; margin: ",[0,20],"; }\n.",[1],"uni-input-group { position: relative; padding: 0; border: 0; background-color: #fff; }\n.",[1],"uni-input-group:before { position: absolute; top: 0; right: 0; left: 0; height: ",[0,2],"; content: \x27\x27; -webkit-transform: scaleY(.5); -ms-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-input-group:after { position: absolute; right: 0; bottom: 0; left: 0; height: ",[0,2],"; content: \x27\x27; -webkit-transform: scaleY(.5); -ms-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-input-row { position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; font-size:",[0,28],"; padding: ",[0,22]," ",[0,30],"; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"uni-input-group .",[1],"uni-input-row:after { position: absolute; right: 0; bottom: 0; left: ",[0,30],"; height: ",[0,2],"; content: \x27\x27; -webkit-transform: scaleY(.5); -ms-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-input-row wx-label { line-height: ",[0,70],"; }\n.",[1],"uni-textarea{ width:100%; background:#FFF; }\n.",[1],"uni-textarea wx-textarea{ width:96%; padding:",[0,18]," 2%; line-height:1.6; font-size:",[0,28],"; height:",[0,150],"; }\n.",[1],"uni-tab-bar { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; overflow: hidden; height: 100%; }\n.",[1],"uni-tab-bar .",[1],"list { width: ",[0,750],"; height: 100%; }\n.",[1],"uni-swiper-tab { width: 100%; white-space: nowrap; line-height: ",[0,100],"; height: ",[0,100],"; border-bottom: 1px solid #c8c7cc; }\n.",[1],"swiper-tab-list { font-size: ",[0,30],"; width: ",[0,150],"; display: inline-block; text-align: center; color: #555; }\n.",[1],"uni-tab-bar .",[1],"active { color: #007AFF; }\n.",[1],"uni-tab-bar .",[1],"swiper-box { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; width: 100%; height: calc(100% - ",[0,100],"); }\n.",[1],"uni-tab-bar-loading{ padding:",[0,20]," 0; }\n.",[1],"uni-comment{padding:",[0,5]," 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-flex:1; -webkit-flex-grow:1; -ms-flex-positive:1; flex-grow:1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column;}\n.",[1],"uni-comment-list{-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap; padding:",[0,10]," 0; margin:",[0,10]," 0; width:100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex;}\n.",[1],"uni-comment-face{width:",[0,70],"; height:",[0,70],"; border-radius:100%; margin-right:",[0,20],"; -webkit-flex-shrink:0; -ms-flex-negative:0; flex-shrink:0; overflow:hidden;}\n.",[1],"uni-comment-face wx-image{width:100%; border-radius:100%;}\n.",[1],"uni-comment-body{width:100%;}\n.",[1],"uni-comment-top{line-height:1.5em; -webkit-box-pack:justify; -webkit-justify-content:space-between; -ms-flex-pack:justify; justify-content:space-between;}\n.",[1],"uni-comment-top wx-text{color:#0A98D5; font-size:",[0,24],";}\n.",[1],"uni-comment-date{line-height:",[0,38],"; -webkit-box-orient:horizontal; -webkit-box-direction:normal; -webkit-flex-direction:row; -ms-flex-direction:row; flex-direction:row; -webkit-box-pack:justify; -webkit-justify-content:space-between; -ms-flex-pack:justify; justify-content:space-between; display:-webkit-box !important; display:-webkit-flex !important; display:-ms-flexbox !important; display:flex !important; -webkit-box-flex:1; -webkit-flex-grow:1; -ms-flex-positive:1; flex-grow:1;}\n.",[1],"uni-comment-date wx-view{color:#666666; font-size:",[0,24],"; line-height:",[0,38],";}\n.",[1],"uni-comment-content{line-height:1.6em; font-size:",[0,28],"; padding:",[0,8]," 0;}\n.",[1],"uni-comment-replay-btn{background:#FFF; font-size:",[0,24],"; line-height:",[0,28],"; padding:",[0,5]," ",[0,20],"; border-radius:",[0,30],"; color:#333 !important; margin:0 ",[0,10],";}\n.",[1],"uni-swiper-msg{width:100%; padding:",[0,12]," 0; -webkit-flex-wrap:nowrap; -ms-flex-wrap:nowrap; flex-wrap:nowrap; display:-webkit-box; display:-webkit-flex; display:-ms-flexbox; display:flex;}\n.",[1],"uni-swiper-msg-icon{width:",[0,50],"; margin-right:",[0,20],";}\n.",[1],"uni-swiper-msg-icon wx-image{width:100%; -webkit-flex-shrink:0; -ms-flex-negative:0; flex-shrink:0;}\n.",[1],"uni-swiper-msg wx-swiper{width:100%; height:",[0,50],";}\n.",[1],"uni-swiper-msg wx-swiper-item{line-height:",[0,50],";}\n.",[1],"uni-product-list { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; width: 100%; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"uni-product { padding: ",[0,20],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"image-view { height: ",[0,330],"; width: ",[0,330],"; margin:",[0,12]," 0; }\n.",[1],"uni-product-image { height: ",[0,330],"; width: ",[0,330],"; }\n.",[1],"uni-product-title { width: ",[0,300],"; word-break: break-all; display: -webkit-box; overflow: hidden; line-height:1.5; -o-text-overflow: ellipsis; text-overflow: ellipsis; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }\n.",[1],"uni-product-price { margin-top:",[0,10],"; font-size: ",[0,28],"; line-height:1.5; position: relative; }\n.",[1],"uni-product-price-original { color: #e80080; }\n.",[1],"uni-product-price-favour { color: #888888; text-decoration: line-through; margin-left: ",[0,10],"; }\n.",[1],"uni-product-tip { position: absolute; right: ",[0,10],"; background-color: #ff3333; color: #ffffff; padding: 0 ",[0,10],"; border-radius: ",[0,5],"; }\n.",[1],"uni-timeline { margin: ",[0,35]," 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; position: relative; }\n.",[1],"uni-timeline-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; position: relative; padding-bottom: ",[0,20],"; -webkit-box-sizing: border-box; box-sizing: border-box; overflow: hidden; }\n.",[1],"uni-timeline-item .",[1],"uni-timeline-item-keynode { width: ",[0,160],"; -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; -webkit-box-sizing: border-box; box-sizing: border-box; padding-right: ",[0,20],"; text-align: right; line-height: ",[0,65],"; }\n.",[1],"uni-timeline-item .",[1],"uni-timeline-item-divider { -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; position: relative; width: ",[0,30],"; height: ",[0,30],"; top: ",[0,15],"; border-radius: 50%; background-color: #bbb; }\n.",[1],"uni-timeline-item-divider::before, .",[1],"uni-timeline-item-divider::after { position: absolute; left: ",[0,15],"; width: ",[0,1],"; height: 100vh; content: \x27\x27; background: inherit; }\n.",[1],"uni-timeline-item-divider::before { bottom: 100%; }\n.",[1],"uni-timeline-item-divider::after { top: 100%; }\n.",[1],"uni-timeline-last-item .",[1],"uni-timeline-item-divider:after { display: none; }\n.",[1],"uni-timeline-first-item .",[1],"uni-timeline-item-divider:before { display: none; }\n.",[1],"uni-timeline-item .",[1],"uni-timeline-item-content { padding-left: ",[0,20],"; }\n.",[1],"uni-timeline-last-item .",[1],"bottom-border::after{ display: none; }\n.",[1],"uni-timeline-item-content .",[1],"datetime{ color: #CCCCCC; }\n.",[1],"uni-timeline-last-item .",[1],"uni-timeline-item-divider{ background-color: #1AAD19; }\n.",[1],"uni-icon { font-family: uniicons; font-size: 24px; font-weight: normal; font-style: normal; line-height: 1; display: inline-block; text-decoration: none; -webkit-font-smoothing: antialiased; }\n.",[1],"uni-icon.",[1],"uni-active { color: #007aff; }\n.",[1],"uni-icon-contact:before { content: \x27\\E100\x27; }\n.",[1],"uni-icon-person:before { content: \x27\\E101\x27; }\n.",[1],"uni-icon-personadd:before { content: \x27\\E102\x27; }\n.",[1],"uni-icon-contact-filled:before { content: \x27\\E130\x27; }\n.",[1],"uni-icon-person-filled:before { content: \x27\\E131\x27; }\n.",[1],"uni-icon-personadd-filled:before { content: \x27\\E132\x27; }\n.",[1],"uni-icon-phone:before { content: \x27\\E200\x27; }\n.",[1],"uni-icon-email:before { content: \x27\\E201\x27; }\n.",[1],"uni-icon-chatbubble:before { content: \x27\\E202\x27; }\n.",[1],"uni-icon-chatboxes:before { content: \x27\\E203\x27; }\n.",[1],"uni-icon-phone-filled:before { content: \x27\\E230\x27; }\n.",[1],"uni-icon-email-filled:before { content: \x27\\E231\x27; }\n.",[1],"uni-icon-chatbubble-filled:before { content: \x27\\E232\x27; }\n.",[1],"uni-icon-chatboxes-filled:before { content: \x27\\E233\x27; }\n.",[1],"uni-icon-weibo:before { content: \x27\\E260\x27; }\n.",[1],"uni-icon-weixin:before { content: \x27\\E261\x27; }\n.",[1],"uni-icon-pengyouquan:before { content: \x27\\E262\x27; }\n.",[1],"uni-icon-chat:before { content: \x27\\E263\x27; }\n.",[1],"uni-icon-qq:before { content: \x27\\E264\x27; }\n.",[1],"uni-icon-videocam:before { content: \x27\\E300\x27; }\n.",[1],"uni-icon-camera:before { content: \x27\\E301\x27; }\n.",[1],"uni-icon-mic:before { content: \x27\\E302\x27; }\n.",[1],"uni-icon-location:before { content: \x27\\E303\x27; }\n.",[1],"uni-icon-mic-filled:before, .",[1],"uni-icon-speech:before { content: \x27\\E332\x27; }\n.",[1],"uni-icon-location-filled:before { content: \x27\\E333\x27; }\n.",[1],"uni-icon-micoff:before { content: \x27\\E360\x27; }\n.",[1],"uni-icon-image:before { content: \x27\\E363\x27; }\n.",[1],"uni-icon-map:before { content: \x27\\E364\x27; }\n.",[1],"uni-icon-compose:before { content: \x27\\E400\x27; }\n.",[1],"uni-icon-trash:before { content: \x27\\E401\x27; }\n.",[1],"uni-icon-upload:before { content: \x27\\E402\x27; }\n.",[1],"uni-icon-download:before { content: \x27\\E403\x27; }\n.",[1],"uni-icon-close:before { content: \x27\\E404\x27; }\n.",[1],"uni-icon-redo:before { content: \x27\\E405\x27; }\n.",[1],"uni-icon-undo:before { content: \x27\\E406\x27; }\n.",[1],"uni-icon-refresh:before { content: \x27\\E407\x27; }\n.",[1],"uni-icon-star:before { content: \x27\\E408\x27; }\n.",[1],"uni-icon-plus:before { content: \x27\\E409\x27; }\n.",[1],"uni-icon-minus:before { content: \x27\\E410\x27; }\n.",[1],"uni-icon-circle:before, .",[1],"uni-icon-checkbox:before { content: \x27\\E411\x27; }\n.",[1],"uni-icon-close-filled:before, .",[1],"uni-icon-clear:before { content: \x27\\E434\x27; }\n.",[1],"uni-icon-refresh-filled:before { content: \x27\\E437\x27; }\n.",[1],"uni-icon-star-filled:before { content: \x27\\E438\x27; }\n.",[1],"uni-icon-plus-filled:before { content: \x27\\E439\x27; }\n.",[1],"uni-icon-minus-filled:before { content: \x27\\E440\x27; }\n.",[1],"uni-icon-circle-filled:before { content: \x27\\E441\x27; }\n.",[1],"uni-icon-checkbox-filled:before { content: \x27\\E442\x27; }\n.",[1],"uni-icon-closeempty:before { content: \x27\\E460\x27; }\n.",[1],"uni-icon-refreshempty:before { content: \x27\\E461\x27; }\n.",[1],"uni-icon-reload:before { content: \x27\\E462\x27; }\n.",[1],"uni-icon-starhalf:before { content: \x27\\E463\x27; }\n.",[1],"uni-icon-spinner:before { content: \x27\\E464\x27; }\n.",[1],"uni-icon-spinner-cycle:before { content: \x27\\E465\x27; }\n.",[1],"uni-icon-search:before { content: \x27\\E466\x27; }\n.",[1],"uni-icon-plusempty:before { content: \x27\\E468\x27; }\n.",[1],"uni-icon-forward:before { content: \x27\\E470\x27; }\n.",[1],"uni-icon-back:before, .",[1],"uni-icon-left-nav:before { content: \x27\\E471\x27; }\n.",[1],"uni-icon-checkmarkempty:before { content: \x27\\E472\x27; }\n.",[1],"uni-icon-home:before { content: \x27\\E500\x27; }\n.",[1],"uni-icon-navigate:before { content: \x27\\E501\x27; }\n.",[1],"uni-icon-gear:before { content: \x27\\E502\x27; }\n.",[1],"uni-icon-paperplane:before { content: \x27\\E503\x27; }\n.",[1],"uni-icon-info:before { content: \x27\\E504\x27; }\n.",[1],"uni-icon-help:before { content: \x27\\E505\x27; }\n.",[1],"uni-icon-locked:before { content: \x27\\E506\x27; }\n.",[1],"uni-icon-more:before { content: \x27\\E507\x27; }\n.",[1],"uni-icon-flag:before { content: \x27\\E508\x27; }\n.",[1],"uni-icon-home-filled:before { content: \x27\\E530\x27; }\n.",[1],"uni-icon-gear-filled:before { content: \x27\\E532\x27; }\n.",[1],"uni-icon-info-filled:before { content: \x27\\E534\x27; }\n.",[1],"uni-icon-help-filled:before { content: \x27\\E535\x27; }\n.",[1],"uni-icon-more-filled:before { content: \x27\\E537\x27; }\n.",[1],"uni-icon-settings:before { content: \x27\\E560\x27; }\n.",[1],"uni-icon-list:before { content: \x27\\E562\x27; }\n.",[1],"uni-icon-bars:before { content: \x27\\E563\x27; }\n.",[1],"uni-icon-loop:before { content: \x27\\E565\x27; }\n.",[1],"uni-icon-paperclip:before { content: \x27\\E567\x27; }\n.",[1],"uni-icon-eye:before { content: \x27\\E568\x27; }\n.",[1],"uni-icon-arrowup:before { content: \x27\\E580\x27; }\n.",[1],"uni-icon-arrowdown:before { content: \x27\\E581\x27; }\n.",[1],"uni-icon-arrowleft:before { content: \x27\\E582\x27; }\n.",[1],"uni-icon-arrowright:before { content: \x27\\E583\x27; }\n.",[1],"uni-icon-arrowthinup:before { content: \x27\\E584\x27; }\n.",[1],"uni-icon-arrowthindown:before { content: \x27\\E585\x27; }\n.",[1],"uni-icon-arrowthinleft:before { content: \x27\\E586\x27; }\n.",[1],"uni-icon-arrowthinright:before { content: \x27\\E587\x27; }\n.",[1],"uni-icon-pulldown:before { content: \x27\\E588\x27; }\n.",[1],"uni-icon-scan:before { content: \x22\\E612\x22; }\n.",[1],"uni-divider{ height: ",[0,110],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align:center; -webkit-align-items:center; -ms-flex-align:center; align-items:center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; position: relative; }\n.",[1],"uni-divider__content{ font-size: ",[0,28],"; color: #999; padding: 0 ",[0,20],"; position: relative; z-index: 101; background: #F4F5F6; }\n.",[1],"uni-divider__line{ background-color: #CCCCCC; height: 1px; width: 100%; position: absolute; z-index: 100; top: 50%; left: 0; -webkit-transform: translateY(50%); -ms-transform: translateY(50%); transform: translateY(50%); }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/uni-badge/uni-badge.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"uni-badge { font-family: \x27Helvetica Neue\x27, Helvetica, sans-serif; -webkit-box-sizing: border-box; box-sizing: border-box; font-size: 12px; line-height: 1; display: inline-block; padding: 3px 6px; color: #333; border-radius: 100px; background-color: #f1f1f1 }\n.",[1],"uni-badge.",[1],"uni-badge-inverted { padding: 0 5px 0 0; color: #999; background-color: transparent }\n.",[1],"uni-badge-primary { color: #fff; background-color: #007aff }\n.",[1],"uni-badge-primary.",[1],"uni-badge-inverted { color: #007aff; background-color: transparent }\n.",[1],"uni-badge-success { color: #fff; background-color: #4cd964 }\n.",[1],"uni-badge-success.",[1],"uni-badge-inverted { color: #4cd964; background-color: transparent }\n.",[1],"uni-badge-warning { color: #fff; background-color: #f0ad4e }\n.",[1],"uni-badge-warning.",[1],"uni-badge-inverted { color: #f0ad4e; background-color: transparent }\n.",[1],"uni-badge-error { color: #fff; background-color: #dd524d }\n.",[1],"uni-badge-error.",[1],"uni-badge-inverted { color: #dd524d; background-color: transparent }\n.",[1],"uni-badge--small { -webkit-transform: scale(.8); -ms-transform: scale(.8); transform: scale(.8); -webkit-transform-origin: center center; -ms-transform-origin: center center; transform-origin: center center }\n",],undefined,{path:"./components/uni-badge/uni-badge.wxss"});    
__wxAppCode__['components/uni-badge/uni-badge.wxml']=$gwx('./components/uni-badge/uni-badge.wxml');

__wxAppCode__['components/uni-grid-item/uni-grid-item.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"uni-grid-item { -webkit-box-sizing: border-box; box-sizing: border-box }\n.",[1],"uni-grid-item__box { position: relative; width: 100% }\n.",[1],"uni-grid-item__box-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; width: 100%; height: 100%; font-size: ",[0,32],"; color: #666; padding: ",[0,20]," 0; -webkit-box-sizing: border-box; box-sizing: border-box }\n.",[1],"uni-grid-item__box-item .",[1],"image { width: ",[0,50],"; height: ",[0,50]," }\n.",[1],"uni-grid-item__box-item .",[1],"text { font-size: ",[0,26],"; margin-top: ",[0,10]," }\n.",[1],"uni-grid-item__box.",[1],"uni-grid-item__box-square { height: 0; padding-top: 100% }\n.",[1],"uni-grid-item__box.",[1],"uni-grid-item__box-square .",[1],"uni-grid-item__box-item { position: absolute; top: 0 }\n.",[1],"uni-grid-item__box.",[1],"border { position: relative; -webkit-box-sizing: border-box; box-sizing: border-box; border-bottom: ",[0,2]," #d0dee5 solid; border-right: ",[0,2]," #d0dee5 solid }\n.",[1],"uni-grid-item__box.",[1],"border-top { border-top: ",[0,2]," #d0dee5 solid }\n.",[1],"uni-grid-item__box.",[1],"border-left { border-left: ",[0,2]," #d0dee5 solid }\n.",[1],"uni-grid-item__box.",[1],"uni-highlight:active { background-color: #a8fdb1; }\n.",[1],"uni-grid-item__box.",[1],"uni-highlight-err:active { background-color: red; }\n.",[1],"uni-grid-item__box-badge, .",[1],"uni-grid-item__box-dot, .",[1],"uni-grid-item__box-image { position: absolute; top: 0; right: 0; left: 0; bottom: 0; margin: auto; z-index: 10 }\n.",[1],"uni-grid-item__box-dot { width: ",[0,20],"; height: ",[0,20],"; background: #ff5a5f; border-radius: 50% }\n.",[1],"uni-grid-item__box-badge { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; width: 0; height: 0 }\n.",[1],"uni-grid-item__box-image { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; width: ",[0,100],"; height: ",[0,100],"; overflow: hidden }\n.",[1],"uni-grid-item__box-image .",[1],"box-image { width: ",[0,90]," }\n",],undefined,{path:"./components/uni-grid-item/uni-grid-item.wxss"});    
__wxAppCode__['components/uni-grid-item/uni-grid-item.wxml']=$gwx('./components/uni-grid-item/uni-grid-item.wxml');

__wxAppCode__['components/uni-grid/uni-grid.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"uni-grid { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-sizing: border-box; box-sizing: border-box; -webkit-box-pack:center; -webkit-justify-content:center; -ms-flex-pack:center; justify-content:center; }\n",],undefined,{path:"./components/uni-grid/uni-grid.wxss"});    
__wxAppCode__['components/uni-grid/uni-grid.wxml']=$gwx('./components/uni-grid/uni-grid.wxml');

__wxAppCode__['pages/criterion/criterion.wxss']=setCssToHead([".",[1],"history { width: 100%; height: 100%; background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 187, 88, 1)), to(rgba(254, 62, 36, 1))); background: -o-linear-gradient(top, rgba(255, 187, 88, 1), rgba(254, 62, 36, 1)); background: linear-gradient(180deg, rgba(255, 187, 88, 1), rgba(254, 62, 36, 1)); overflow: hidden; }\n.",[1],"content { width: ",[0,717],"; background: rgba(255, 255, 255, 1); border-radius: 20px; margin:",[0,25]," auto; overflow: hidden; padding-bottom: ",[0,20],"; }\n.",[1],"title{ width:",[0,685],"; height:",[0,73],"; background:rgba(254,210,177,1); border-radius:",[0,20],"; margin:",[0,15]," auto ",[0,0],"; font-size:",[0,36],"; font-family:Adobe Heiti Std; font-weight:normal; color:rgba(34,34,34,1); text-align: center; line-height: ",[0,73],"; }\n.",[1],"list{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; width: ",[0,685],"; margin: 0 auto; }\n.",[1],"list .",[1],"list-item,.",[1],"list .",[1],"item_list\x3ewx-view{ width: ",[0,137],"; text-align: center; }\n.",[1],"list .",[1],"item_list{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n",],undefined,{path:"./pages/criterion/criterion.wxss"});    
__wxAppCode__['pages/criterion/criterion.wxml']=$gwx('./pages/criterion/criterion.wxml');

__wxAppCode__['pages/grade/grade.wxss']=setCssToHead([".",[1],"title{ font-size:",[0,52],"; font-family:FZChaoCuHei-M10S; font-weight:400; color:rgba(255,255,255,1); text-shadow:",[0,0]," ",[0,6]," ",[0,12]," rgba(254,119,60,1); text-align: center; margin-top:",[0,30],"; }\n.",[1],"star{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"star wx-image{ width:",[0,150],"; height: ",[0,145],"; }\n.",[1],"grade{ overflow: hidden; width:100%; height:100%; background: url(\x27data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnIAAAP3CAYAAACoJKNKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFEmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0xMC0xNlQxMDowNDo1NiswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTktMTAtMTZUMTA6NDQ6MjMrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMTAtMTZUMTA6NDQ6MjMrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjJlODU3MTItN2E2YS1jMjQz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\x27); background-position: center center; background-size: 102%; }\n.",[1],"content{ margin:0 auto; width:",[0,693],"; height:",[0,815],"; background:rgba(255,255,255,1); border-radius:",[0,20],"; overflow: hidden; }\n.",[1],"fen{ margin:",[0,38]," auto ",[0,0],"; width:",[0,586],"; height:",[0,502],"; background: url(data:image/png;base64,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); background-size: 100%; }\n.",[1],"fen\x3ewx-view{ text-align: center; }\n.",[1],"fen\x3ewx-view:nth-child(1){ font-size:",[0,35],"; font-family:Source Han Sans CN; font-weight:400; color:rgba(239,80,0,1); line-height: 3; }\n.",[1],"fen\x3ewx-view:nth-child(2){ font-size:",[0,107],"; font-family:Impact; font-weight:400; color:rgba(239,80,0,1); line-height: .8; }\n.",[1],"fen\x3ewx-view:nth-child(3){ margin-top: ",[0,50],"; font-size: ",[0,36],"; font-weight:400; color:rgba(255,209,115,1); }\n.",[1],"fen\x3ewx-view:nth-child(3)\x3ewx-text{ font-size:",[0,67],"; font-family:Impact; padding-left: ",[0,10],"; }\n.",[1],"btn_imgs{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-flow: wrap; -ms-flex-flow: wrap; flex-flow: wrap; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"btn_imgs wx-image{ width:",[0,271],"; height:",[0,98],"; margin-bottom: ",[0,32],"; }\n.",[1],"btn_imgs wx-image:nth-child(2n+1){ margin-right: ",[0,33],"; }\n",],undefined,{path:"./pages/grade/grade.wxss"});    
__wxAppCode__['pages/grade/grade.wxml']=$gwx('./pages/grade/grade.wxml');

__wxAppCode__['pages/history/history.wxss']=setCssToHead([".",[1],"history { width: 100%; height: 100%; background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 187, 88, 1)), to(rgba(254, 62, 36, 1))); background: -o-linear-gradient(top, rgba(255, 187, 88, 1), rgba(254, 62, 36, 1)); background: linear-gradient(180deg, rgba(255, 187, 88, 1), rgba(254, 62, 36, 1)); overflow: hidden; }\n.",[1],"content { width: ",[0,717],"; background: rgba(255, 255, 255, 1); border-radius: 20px; margin:",[0,25]," auto ",[0,0],"; overflow: hidden; }\n.",[1],"title{ width:",[0,685],"; height:",[0,73],"; background:rgba(254,210,177,1); border-radius:",[0,20],"; margin:",[0,15]," auto ",[0,0],"; font-size:",[0,29],"; font-family:Adobe Heiti Std; font-weight:normal; color:rgba(34,34,34,1); text-align: center; line-height: ",[0,73],"; }\n.",[1],"list{ width: ",[0,618],"; margin: 0 auto; }\n.",[1],"list_tit{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient:horizontal; -webkit-box-direction:normal; -webkit-flex-direction:row; -ms-flex-direction:row; flex-direction:row; border-bottom:",[0,1]," dotted rgba(189,189,189,1); }\n.",[1],"list_tit wx-view{ -webkit-box-flex:1; -webkit-flex:1; -ms-flex:1; flex:1; text-align: center; margin:",[0,37]," auto ",[0,30],"; font-size:",[0,26],"; font-family:Adobe Heiti Std; font-weight:normal; color:rgba(189,189,189,1); }\n.",[1],"list_con .",[1],"times,.",[1],"list_tit .",[1],"times{ -webkit-box-flex:1.2; -webkit-flex:1.2; -ms-flex:1.2; flex:1.2 }\n.",[1],"list_con .",[1],"stars,.",[1],"list_con .",[1],"stars{ -webkit-box-flex:1.5; -webkit-flex:1.5; -ms-flex:1.5; flex:1.5 }\n.",[1],"stars wx-image{ width: ",[0,39],"; height: ",[0,39],"; }\n.",[1],"scroll_view{ max-height: ",[0,967],"; }\n.",[1],"list_con{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"list_con\x3ewx-view{ -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; text-align: center; -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; }\n",],undefined,{path:"./pages/history/history.wxss"});    
__wxAppCode__['pages/history/history.wxml']=$gwx('./pages/history/history.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead([".",[1],"wrap{ width: ",[0,750],"; height: 100%; background: url(\x27data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAS1CAYAAAD0hF7EAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFEmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0xMC0xNVQxNDo1MDowNCswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTktMTAtMTVUMTU6Mzk6NDQrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMTAtMTVUMTU6Mzk6NDQrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YWQ1OTNjNWItNTAzNy1iZTRl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\x27); background-position: center center; background-repeat: no-repeat; background-size:100% 100%; overflow: hidden; }\n.",[1],"title{ width: ",[0,570],"; height: ",[0,100],"; display: block; margin: ",[0,69]," auto ",[0,44],"; }\n.",[1],"age_list,.",[1],"level_list{ width:",[0,693],"; height:",[0,948],"; background:rgba(255,255,255,1); border-radius:",[0,20],"; margin: 0 auto; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"age_list .",[1],"age1{ width:",[0,376],"; height: ",[0,212],"; margin-top: ",[0,45],"; }\n.",[1],"age_list .",[1],"age2{ width:",[0,401],"; height: ",[0,270],"; margin:",[0,55]," ",[0,0]," ",[0,44]," ",[0,0],"; }\n.",[1],"age_list .",[1],"age3{ width:",[0,380],"; height: ",[0,310],"; }\n.",[1],"level_list{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; }\n.",[1],"level_list .",[1],"level1{ width:",[0,258],"; height: ",[0,282],"; }\n.",[1],"level_list .",[1],"level2{ width:",[0,246],"; height: ",[0,282],"; }\n.",[1],"level_list .",[1],"level3{ width:",[0,258],"; height: ",[0,317],"; }\n.",[1],"level_list .",[1],"level4{ width:",[0,246],"; height: ",[0,317],"; }\n.",[1],"level_list .",[1],"level5{ width:",[0,258],"; height: ",[0,315],"; }\n.",[1],"level_list .",[1],"level6{ width:",[0,246],"; height: ",[0,315],"; }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/login/login.wxss']=setCssToHead([".",[1],"login{ width:100%; height: 100%; }\n.",[1],"bg{ display: block; width:100%; height:100%; }\n",],undefined,{path:"./pages/login/login.wxss"});    
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/play/play.wxss']=setCssToHead([".",[1],"a { width: 100%; height: 100%; }\n.",[1],"a .",[1],"uni-grid-item__box-item { font-size: ",[0,55],"; }\n.",[1],"a .",[1],"time, .",[1],"a .",[1],"click { font-size: ",[0,36],"; font-family: Source Han Sans CN; font-weight: bold; color: rgba(230, 5, 5, 1); display: block; text-align: center; }\n.",[1],"a .",[1],"time wx-text { width: ",[0,135],"; display: inline-block; text-align: left; }\n.",[1],"a .",[1],"btns { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; margin-top: ",[0,180],"; }\n.",[1],"a .",[1],"btns wx-image { width: ",[0,271],"; height: ",[0,99],"; }\n.",[1],"maker { width: 100%; height: 100%; background: rgba(0, 0, 0, 0.46); position: absolute; top: 0; z-index: 2; }\n.",[1],"maker .",[1],"mak_bg { width: ",[0,626],"; height: ",[0,1015],"; position: absolute; top: ",[0,50],"; left: 50%; -webkit-transform: translateX(-50%); -ms-transform: translateX(-50%); transform: translateX(-50%); }\n.",[1],"maker .",[1],"close { width: ",[0,91],"; height: ",[0,91],"; position: absolute; top: ",[0,10],"; right: ",[0,10],"; }\n.",[1],"center { position: relative; top: ",[0,170],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"center .",[1],"game { width: ",[0,407],"; height: ",[0,107],"; }\n.",[1],"center .",[1],"kuang { width: ",[0,417],"; height: ",[0,273],"; background: url(data:image/png;base64,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\x3d)center center no-repeat; background-size: 100%; margin: ",[0,67]," ",[0,0]," ",[0,87]," ",[0,0],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"kuang wx-text { width: ",[0,362],"; height: ",[0,198],"; font-size: ",[0,30],"; font-family: Source Han Sans CN; font-weight: 400; color: rgba(43, 43, 43, 1); line-height: ",[0,50],"; }\n.",[1],"center .",[1],"go { width: ",[0,400],"; height: ",[0,104],"; }\n.",[1],"center .",[1],"not { width: ",[0,154],"; height: ",[0,55],"; font-size: ",[0,36],"; font-family: Source Han Sans CN; font-weight: bold; border-bottom: ",[0,1]," solid rgba(255, 255, 255, 1); padding-bottom: ",[0,15],"; color: rgba(255, 255, 255, 1); margin-top: ",[0,50],"; }\n",],undefined,{path:"./pages/play/play.wxss"});    
__wxAppCode__['pages/play/play.wxml']=$gwx('./pages/play/play.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();