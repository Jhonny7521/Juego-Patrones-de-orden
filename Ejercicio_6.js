(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.btn_ = function() {
	this.initialize(img.btn_);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,63);


(lib.btn_g = function() {
	this.initialize(img.btn_g);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,211,61);


(lib.cursor = function() {
	this.initialize(img.cursor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,35);


(lib.destellos1 = function() {
	this.initialize(img.destellos1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,833,561);


(lib.destellos2 = function() {
	this.initialize(img.destellos2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,833,561);


(lib.fondo_E1 = function() {
	this.initialize(img.fondo_E1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,560);


(lib.fondo_E2 = function() {
	this.initialize(img.fondo_E2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,560);


(lib.fresa = function() {
	this.initialize(img.fresa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,56);


(lib.kiwi = function() {
	this.initialize(img.kiwi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,46);


(lib.manzana = function() {
	this.initialize(img.manzana);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,59);


(lib.naranja = function() {
	this.initialize(img.naranja);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,55);


(lib.nota_fin = function() {
	this.initialize(img.nota_fin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,227,97);


(lib.panel = function() {
	this.initialize(img.panel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,286,502);


(lib.pera = function() {
	this.initialize(img.pera);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,52);


(lib.platano = function() {
	this.initialize(img.platano);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,54);


(lib.rayitos1 = function() {
	this.initialize(img.rayitos1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,747,561);


(lib.rayitos2 = function() {
	this.initialize(img.rayitos2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,442,333);


(lib.soga = function() {
	this.initialize(img.soga);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,512);


(lib.soga1 = function() {
	this.initialize(img.soga1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,373,232);


(lib.tabla = function() {
	this.initialize(img.tabla);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,231);


(lib.temp = function() {
	this.initialize(img.temp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,50);


(lib.tprobzoder = function() {
	this.initialize(img.tprobzoder);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,88);


(lib.tprobzoizq = function() {
	this.initialize(img.tprobzoizq);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,157);


(lib.tprocbza = function() {
	this.initialize(img.tprocbza);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,221);


(lib.tprocrpo = function() {
	this.initialize(img.tprocrpo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,159,178);


(lib.uva = function() {
	this.initialize(img.uva);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,47);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.tpro_crpo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.tprocrpo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tpro_crpo, new cjs.Rectangle(0,0,159,178), null);


(lib.tpro_cbza = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.tprocbza();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tpro_cbza, new cjs.Rectangle(0,0,137,221), null);


(lib.tpro_bzo_izq = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.tprobzoizq();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tpro_bzo_izq, new cjs.Rectangle(0,0,71,157), null);


(lib.tpro_bzo_der = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.tprobzoder();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tpro_bzo_der, new cjs.Rectangle(0,0,132,88), null);


(lib.temp_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2
	this.txt_temp = new cjs.Text("01 : 59", "26px 'Carton Six'", "#00FFFF");
	this.txt_temp.name = "txt_temp";
	this.txt_temp.textAlign = "center";
	this.txt_temp.lineHeight = 31;
	this.txt_temp.lineWidth = 64;
	this.txt_temp.parent = this;
	this.txt_temp.setTransform(37.5,11.8);

	this.timeline.addTween(cjs.Tween.get(this.txt_temp).wait(1));

	// Capa_1
	this.instance = new lib.temp();
	this.instance.setTransform(-4,0,1.0933,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.temp_1, new cjs.Rectangle(-4,0,82,50), null);


(lib.Símbolo3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5FDCFC").s().p("AldFeIAAq7IK7AAIAAK7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(-35,-35,70,70), null);


(lib.Símbolo2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004186").s().p("AldFeIAAq7IK7AAIAAK7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(-35,-35,70,70), null);


(lib.uno = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("1", "40px 'Carton Six'", "#FFFF00");
	this.text.textAlign = "center";
	this.text.lineHeight = 47;
	this.text.lineWidth = 30;
	this.text.parent = this;
	this.text.setTransform(0,-22.35);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uno, new cjs.Rectangle(-17,-24.3,34,48.7), null);


(lib.tres = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("3", "40px 'Carton Six'", "#FFFF00");
	this.text.textAlign = "center";
	this.text.lineHeight = 47;
	this.text.lineWidth = 30;
	this.text.parent = this;
	this.text.setTransform(0,-22.35);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tres, new cjs.Rectangle(-17,-24.3,34,48.7), null);


(lib.dos = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("2", "40px 'Carton Six'", "#FFFF00");
	this.text.textAlign = "center";
	this.text.lineHeight = 47;
	this.text.lineWidth = 30;
	this.text.parent = this;
	this.text.setTransform(0,-22.35);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dos, new cjs.Rectangle(-17,-24.3,34,48.7), null);


(lib.cuatro = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("4", "40px 'Carton Six'", "#FFFF00");
	this.text.textAlign = "center";
	this.text.lineHeight = 47;
	this.text.lineWidth = 30;
	this.text.parent = this;
	this.text.setTransform(0,-22.35);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cuatro, new cjs.Rectangle(-17,-24.3,34,48.7), null);


(lib.Símbolo1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.cursor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,27,35), null);


(lib.cuad2_f = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004186").s().p("Eg15AqMMAAAhUXMBrzAAAMAAABUXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cuad2_f, new cjs.Rectangle(-345,-270,690,540), null);


(lib.rayitos2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.rayitos2();
	this.instance.setTransform(-221,-166.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rayitos2_1, new cjs.Rectangle(-221,-166.5,442,333), null);


(lib.rayitos1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.rayitos1();
	this.instance.setTransform(-373.5,-280.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rayitos1_1, new cjs.Rectangle(-373.5,-280.5,747,561), null);


(lib.destellos2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.destellos2();
	this.instance.setTransform(-416.5,-280.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.destellos2_1, new cjs.Rectangle(-416.5,-280.5,833,561), null);


(lib.destellos1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.destellos1();
	this.instance.setTransform(-416.5,-280.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.destellos1_1, new cjs.Rectangle(-416.5,-280.5,833,561), null);


(lib.barra_transition = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egd+ArwMAcHhXfIf2AAMgcHBXfg");
	this.shape.setTransform(191.925,280);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.barra_transition, new cjs.Rectangle(0,0,383.9,560), null);


(lib.mc_pointer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AhMBmIgCAAIgDgBIgDgBIgCgBIgCgCIgCgBIgBgCIgCgBIgBgCIAAgCIgBgCIAAgCIgBgCIAAgDIABgDIAAgBIABgCIABgDIABgCIACgCIACgCIACgDIACgBIACgCIACgBIACgCIACgDIABgBIACgBIADgBIACgBIACAAIACgCIACgBIACgCIACgBIABgCIABgCIACgCIACgCIACgCIACgBIACgBIADgCIABgCIACgCIABgCIACgBIADgCIACgCIACgCIABgBIACgBIACgBIACgCIABgBIABgDIABgBIgBgBIgBgCIgCgCIgEgEIgEgEIgFgFIgEgDIgFgFIgBgCIgBgCIgBgBIAAgCIgBgBIgCgCIgCgCIgBgCIgBgCIgBgCIgBgCIgCAAIgCgCIgCgCIgBgCIgBgCIgBgCIgBgDIgBgCIAAgDIgBgCIAAgDIgBgDIgBgCIgBgCIAAgDIAAgDIAAgCIAAgDIAAgCIAAgCIABgCIABgBIABgDIABgBIABgCIABgBIACgBIACgBIACgCIACgBIACAAIACgBIACAAIACAAIACABIACAAIACABIACACIACABIABABIACABIABACIABABIABADIABABIABACIAAACIAAACIAAACIAAACIABABIAAACIABAEIABABIACABIACACIACACIABACIABACIAAACIABADIABABIABADIACACIACABIABACIABADIAGAEIAFAGIADADIADAEIABABIABgCIADgCIACgCIABgBIACgCIABgCIACgBIAAgBIACgCIABgCIACgCIABgCIACgCIABgBIACgBIABgCIACgCIABgBIACgBIACgCIACgBIACgBIABgBIABgCIABgCIACgCIABgCIACgDIABgCIABgCIABgCIACgCIADgBIACgCIAAgCIABgBIABgCIABgCIACgCIACgBIACgBIABgBIACgBIADgBIACAAIACAAIACAAIACAAIADABIABABIACABIABAAIADABIABACIABACIABACIABACIABABIAAACIABADIAAACIAAACIgCAGIgBAEIgDAGIgEADIgDAEIgDADIgCABIgBADIgBACIAAADIgCABIgBACIgCABIgCACIgBABIgBACIgCABIgCABIgDACIgBACIgCACIgCABIAAAAIgCACIgCABIgBADIgBACIgBABIgBACIgCACIgDACIgCACIgBABIgBACIgCACIgCABIgCACIgCABIACABIABACIAEAFIACADIACACIABADIACACIACABIACABIABABIABACIABACIABAAIACACIACABIACADIADAFIADADIADAGIABABIACAFIACABIACABIACABIABABIACACIACADIABABIACABIABACIABACIABACIAAADIABACIAAACIgBADIAAACIgBACIgBADIgBACIgCACIgCABIgCACIgCABIgDABIgDAAIgCABIgCgBIgCAAIgDgBIgCgBIgCgBIgBgBIgCgBIgCgBIgCgDIgCgBIgCgBIgCgBIgDgEIgDgFIgDgEIgDgFIgCgDIgCgFIgDgCIgBAAIgCgCIAAAAIgCgCIgCgCIgCgBIgCgCIgBgCIgCgDIgBgCIgCgCIgCgCIAAgBIgCACIgEADIgCABIgBABIgCACIgBACIgCABIgCABIgCABIgBACIgBACIgBACIgCABIgCACIgCABIgCACIgCABIgBABIgCACIgCACIgBACIgCACIgCACIgDACIgCABIgBABIgCABIgCACIgCABIgCABIgCACIgCAAIgBABIgCABIgCACIgBABIAAABIgBABIgBABIgBABIgCABIgCACIgCABIgBABIgCABIgDABIgDAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_pointer, new cjs.Rectangle(-9.7,-10.1,19.4,20.299999999999997), null);


(lib.box_colision = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AzhLuIAA3bMAnDAAAIAAXbg");
	this.shape.setTransform(30.0007,27.5002,0.24,0.3667);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.box_colision, new cjs.Rectangle(0,0,60,55), null);


(lib.btn_gf = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.btn_();
	this.instance.setTransform(-106.5,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_gf, new cjs.Rectangle(-106.5,-31.5,213,63), null);


(lib.nota_fin_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_4
	this.txt_nf = new cjs.Text("¡ FELICIDADES !\nHAS LOGRADO COMPLETAR LOS PATRONES CORRECTAMENTE", "18px 'Carton Six'", "#000066");
	this.txt_nf.name = "txt_nf";
	this.txt_nf.textAlign = "center";
	this.txt_nf.lineHeight = 22;
	this.txt_nf.lineWidth = 192;
	this.txt_nf.parent = this;
	this.txt_nf.setTransform(113.1,11.85);

	this.timeline.addTween(cjs.Tween.get(this.txt_nf).wait(1));

	// Capa_1
	this.instance = new lib.nota_fin();
	this.instance.setTransform(0,0,1,1.1351);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nota_fin_1, new cjs.Rectangle(0,0,227,110.1), null);


(lib.tiagopro = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tpro_bzo_izq
	this.instance = new lib.tpro_bzo_izq();
	this.instance.setTransform(108.7,71.2,1,1,0,0,0,16.7,16.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:35.5,regY:78.5,rotation:0.2571,x:127.2,y:133.75},0).wait(1).to({rotation:0.5141,x:126.9,y:134},0).wait(1).to({rotation:0.7712,x:126.65,y:134.3},0).wait(1).to({rotation:1.0282,x:126.35,y:134.55},0).wait(1).to({rotation:1.2853,x:126.1,y:134.8},0).wait(1).to({rotation:1.5423,x:125.8,y:135},0).wait(1).to({rotation:1.7994,x:125.55,y:135.25},0).wait(1).to({rotation:2.0564,x:125.25,y:135.5},0).wait(1).to({rotation:2.3135,x:124.95,y:135.8},0).wait(1).to({rotation:2.5705,x:124.65,y:136},0).wait(1).to({rotation:2.8276,x:124.4,y:136.25},0).wait(1).to({rotation:3.0846,x:124.1,y:136.5},0).wait(1).to({rotation:3.3417,x:123.8,y:136.7},0).wait(1).to({rotation:3.5987,x:123.5,y:137},0).wait(1).to({rotation:3.8558,x:123.2,y:137.25},0).wait(1).to({rotation:4.1128,x:122.95,y:137.5},0).wait(1).to({rotation:4.3699,x:122.65,y:137.7},0).wait(1).to({rotation:4.6269,x:122.4,y:137.95},0).wait(1).to({rotation:4.884,x:122.05,y:138.15},0).wait(1).to({rotation:5.141,x:121.8,y:138.45},0).wait(1).to({rotation:5.3981,x:121.5,y:138.65},0).wait(1).to({rotation:5.6551,x:121.25,y:138.9},0).wait(1).to({rotation:5.9122,x:120.95,y:139.15},0).wait(1).to({rotation:6.1692,x:120.65,y:139.35},0).wait(1).to({rotation:6.4263,x:120.4,y:139.55},0).wait(1).to({rotation:6.6833,x:120.05,y:139.8},0).wait(1).to({rotation:6.9404,x:119.8,y:140},0).wait(1).to({rotation:7.1974,x:119.5,y:140.3},0).wait(1).to({rotation:7.4545,x:119.2,y:140.5},0).wait(1).to({rotation:7.206,x:119.5,y:140.3},0).wait(1).to({rotation:6.9575,x:119.8,y:140.05},0).wait(1).to({rotation:6.709,x:120.1,y:139.8},0).wait(1).to({rotation:6.4605,x:120.3,y:139.6},0).wait(1).to({rotation:6.2121,x:120.65,y:139.4},0).wait(1).to({rotation:5.9636,x:120.9,y:139.15},0).wait(1).to({rotation:5.7151,x:121.15,y:138.95},0).wait(1).to({rotation:5.4666,x:121.45,y:138.75},0).wait(1).to({rotation:5.2181,x:121.7,y:138.5},0).wait(1).to({rotation:4.9696,x:122,y:138.3},0).wait(1).to({rotation:4.7212,x:122.3,y:138.05},0).wait(1).to({rotation:4.4727,x:122.6,y:137.8},0).wait(1).to({rotation:4.2242,x:122.8,y:137.6},0).wait(1).to({rotation:3.9757,x:123.1,y:137.35},0).wait(1).to({rotation:3.7272,x:123.35,y:137.1},0).wait(1).to({rotation:3.4788,x:123.7,y:136.85},0).wait(1).to({rotation:3.2303,x:123.95,y:136.6},0).wait(1).to({rotation:2.9818,x:124.2,y:136.4},0).wait(1).to({rotation:2.7333,x:124.45,y:136.15},0).wait(1).to({rotation:2.4848,x:124.75,y:135.95},0).wait(1).to({rotation:2.2363,x:125,y:135.7},0).wait(1).to({rotation:1.9879,x:125.35,y:135.45},0).wait(1).to({rotation:1.7394,x:125.55,y:135.2},0).wait(1).to({rotation:1.4909,x:125.85,y:134.9},0).wait(1).to({rotation:1.2424,x:126.15,y:134.7},0).wait(1).to({rotation:0.9939,x:126.4,y:134.45},0).wait(1).to({rotation:0.7454,x:126.7,y:134.2},0).wait(1).to({rotation:0.497,x:126.9,y:133.95},0).wait(1).to({rotation:0.2485,x:127.2,y:133.7},0).wait(1).to({rotation:0,x:127.5,y:133.5},0).wait(1));

	// tpro_cbza
	this.instance_1 = new lib.tpro_cbza();
	this.instance_1.setTransform(68,48.5,1,1,0,0,0,60,215.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:68.5,regY:110.5,rotation:0.2224,x:76.85,y:-56.3},0).wait(1).to({rotation:0.4449,x:77.3,y:-56.05},0).wait(1).to({rotation:0.6673,x:77.7,y:-55.85},0).wait(1).to({rotation:0.8898,x:78.15,y:-55.65},0).wait(1).to({rotation:1.1122,x:78.5,y:-55.35},0).wait(1).to({rotation:1.3347,x:78.95,y:-55.2},0).wait(1).to({rotation:1.5571,x:79.3,y:-55},0).wait(1).to({rotation:1.7796,x:79.7,y:-54.75},0).wait(1).to({rotation:2.002,x:80.15,y:-54.5},0).wait(1).to({rotation:2.2244,x:80.55,y:-54.35},0).wait(1).to({rotation:2.4469,x:81,y:-54.1},0).wait(1).to({rotation:2.6693,x:81.3,y:-53.8},0).wait(1).to({rotation:2.8918,x:81.75,y:-53.65},0).wait(1).to({rotation:3.1142,x:82.15,y:-53.4},0).wait(1).to({rotation:3.3367,x:82.55,y:-53.15},0).wait(1).to({rotation:3.5591,x:82.95,y:-52.9},0).wait(1).to({rotation:3.7816,x:83.35,y:-52.7},0).wait(1).to({rotation:4.004,x:83.8,y:-52.4},0).wait(1).to({rotation:4.2265,x:84.15,y:-52.2},0).wait(1).to({rotation:4.4489,x:84.6,y:-52},0).wait(1).to({rotation:4.6713,x:84.95,y:-51.7},0).wait(1).to({rotation:4.8938,x:85.35,y:-51.5},0).wait(1).to({rotation:5.1162,x:85.85,y:-51.25},0).wait(1).to({rotation:5.3387,x:86.2,y:-51.05},0).wait(1).to({rotation:5.5611,x:86.65,y:-50.7},0).wait(1).to({rotation:5.7836,x:87,y:-50.5},0).wait(1).to({rotation:6.006,x:87.4,y:-50.25},0).wait(1).to({rotation:6.2285,x:87.8,y:-50},0).wait(1).to({rotation:6.4509,x:88.2,y:-49.75},0).wait(1).to({rotation:6.2359,x:87.85,y:-50},0).wait(1).to({rotation:6.0208,x:87.4,y:-50.2},0).wait(1).to({rotation:5.8058,x:87.05,y:-50.45},0).wait(1).to({rotation:5.5908,x:86.65,y:-50.75},0).wait(1).to({rotation:5.3758,x:86.25,y:-51},0).wait(1).to({rotation:5.1607,x:85.85,y:-51.2},0).wait(1).to({rotation:4.9457,x:85.5,y:-51.45},0).wait(1).to({rotation:4.7307,x:85.1,y:-51.7},0).wait(1).to({rotation:4.5156,x:84.7,y:-51.9},0).wait(1).to({rotation:4.3006,x:84.3,y:-52.1},0).wait(1).to({rotation:4.0856,x:84,y:-52.35},0).wait(1).to({rotation:3.8705,x:83.55,y:-52.6},0).wait(1).to({rotation:3.6555,x:83.15,y:-52.85},0).wait(1).to({rotation:3.4405,x:82.75,y:-53.05},0).wait(1).to({rotation:3.2255,x:82.4,y:-53.3},0).wait(1).to({rotation:3.0104,x:81.95,y:-53.5},0).wait(1).to({rotation:2.7954,x:81.55,y:-53.75},0).wait(1).to({rotation:2.5804,x:81.25,y:-53.9},0).wait(1).to({rotation:2.3653,x:80.8,y:-54.15},0).wait(1).to({rotation:2.1503,x:80.4,y:-54.4},0).wait(1).to({rotation:1.9353,x:80,y:-54.6},0).wait(1).to({rotation:1.7202,x:79.6,y:-54.8},0).wait(1).to({rotation:1.5052,x:79.25,y:-55.05},0).wait(1).to({rotation:1.2902,x:78.85,y:-55.25},0).wait(1).to({rotation:1.0752,x:78.5,y:-55.4},0).wait(1).to({rotation:0.8601,x:78.05,y:-55.6},0).wait(1).to({rotation:0.6451,x:77.65,y:-55.9},0).wait(1).to({rotation:0.4301,x:77.25,y:-56.1},0).wait(1).to({rotation:0.215,x:76.9,y:-56.3},0).wait(1).to({rotation:0,x:76.5,y:-56.5},0).wait(1));

	// tpro_crpo
	this.instance_2 = new lib.tpro_crpo();
	this.instance_2.setTransform(67.5,128,1,1,0,0,0,79.5,89);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:128.15},0).wait(1).to({y:128.35},0).wait(1).to({y:128.5},0).wait(1).to({y:128.7},0).wait(1).to({y:128.85},0).wait(1).to({y:129.05},0).wait(1).to({y:129.2},0).wait(1).to({y:129.4},0).wait(1).to({y:129.55},0).wait(1).to({y:129.75},0).wait(1).to({y:129.9},0).wait(1).to({y:130.1},0).wait(1).to({y:130.25},0).wait(1).to({y:130.45},0).wait(1).to({y:130.6},0).wait(1).to({y:130.8},0).wait(1).to({y:130.95},0).wait(1).to({y:131.15},0).wait(1).to({y:131.3},0).wait(1).to({y:131.5},0).wait(1).to({y:131.65},0).wait(1).to({y:131.85},0).wait(1).to({y:132},0).wait(1).to({y:132.2},0).wait(1).to({y:132.35},0).wait(1).to({y:132.55},0).wait(1).to({y:132.7},0).wait(1).to({y:132.9},0).wait(1).to({y:133.1},0).wait(1).to({y:132.9},0).wait(1).to({y:132.75},0).wait(1).to({y:132.55},0).wait(1).to({y:132.4},0).wait(1).to({y:132.25},0).wait(1).to({y:132.05},0).wait(1).to({y:131.9},0).wait(1).to({y:131.7},0).wait(1).to({y:131.55},0).wait(1).to({y:131.4},0).wait(1).to({y:131.2},0).wait(1).to({y:131.05},0).wait(1).to({y:130.85},0).wait(1).to({y:130.7},0).wait(1).to({y:130.55},0).wait(1).to({y:130.35},0).wait(1).to({y:130.2},0).wait(1).to({y:130},0).wait(1).to({y:129.85},0).wait(1).to({y:129.7},0).wait(1).to({y:129.5},0).wait(1).to({y:129.35},0).wait(1).to({y:129.15},0).wait(1).to({y:129},0).wait(1).to({y:128.85},0).wait(1).to({y:128.65},0).wait(1).to({y:128.5},0).wait(1).to({y:128.3},0).wait(1).to({y:128.15},0).wait(1).to({y:128},0).wait(1));

	// tpro_bzp_der
	this.instance_3 = new lib.tpro_bzo_der();
	this.instance_3.setTransform(37.8,64,1,1,0,0,0,113.8,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:66,rotation:1.3733,x:-9.95,y:62.9},0).wait(1).to({rotation:2.7465,y:61.8},0).wait(1).to({rotation:4.1198,x:-9.8,y:60.75},0).wait(1).to({rotation:5.4931,x:-9.75,y:59.65},0).wait(1).to({rotation:6.8663,x:-9.6,y:58.6},0).wait(1).to({rotation:8.2396,x:-9.5,y:57.5},0).wait(1).to({rotation:9.6129,x:-9.35,y:56.4},0).wait(1).to({rotation:10.9861,x:-9.1,y:55.45},0).wait(1).to({rotation:12.3594,x:-8.85,y:54.4},0).wait(1).to({rotation:13.7326,x:-8.65,y:53.3},0).wait(1).to({rotation:15.1059,x:-8.35,y:52.25},0).wait(1).to({rotation:16.4792,x:-8,y:51.2},0).wait(1).to({rotation:17.8524,x:-7.7,y:50.2},0).wait(1).to({rotation:19.2257,x:-7.35,y:49.15},0).wait(1).to({rotation:17.944,x:-7.65,y:50.3},0).wait(1).to({rotation:16.6623,x:-7.95,y:51.4},0).wait(1).to({rotation:15.3806,x:-8.25,y:52.55},0).wait(1).to({rotation:14.0988,x:-8.55,y:53.75},0).wait(1).to({rotation:12.8171,x:-8.8,y:54.95},0).wait(1).to({rotation:11.5354,x:-9.05,y:56.1},0).wait(1).to({rotation:10.2537,x:-9.25,y:57.25},0).wait(1).to({rotation:8.972,x:-9.35,y:58.4},0).wait(1).to({rotation:7.6903,x:-9.55,y:59.6},0).wait(1).to({rotation:6.4086,x:-9.65,y:60.75},0).wait(1).to({rotation:5.1269,x:-9.8,y:61.95},0).wait(1).to({rotation:3.8451,x:-9.85,y:63.2},0).wait(1).to({rotation:2.5634,x:-9.9,y:64.35},0).wait(1).to({rotation:1.2817,x:-9.95,y:65.6},0).wait(1).to({rotation:0,x:-10,y:66.8},0).wait(1).to({rotation:-0.7318,y:67.3},0).wait(1).to({rotation:-1.4635,x:-9.95,y:67.85},0).wait(1).to({rotation:-2.1953,y:68.4},0).wait(1).to({rotation:-2.9271,x:-9.9,y:69},0).wait(1).to({rotation:-3.6588,y:69.5},0).wait(1).to({rotation:-4.3906,x:-9.85,y:70.05},0).wait(1).to({rotation:-5.1224,x:-9.75,y:70.6},0).wait(1).to({rotation:-5.8541,x:-9.7,y:71.1},0).wait(1).to({rotation:-6.5859,x:-9.65,y:71.7},0).wait(1).to({rotation:-7.3177,x:-9.6,y:72.25},0).wait(1).to({rotation:-8.0494,x:-9.5,y:72.75},0).wait(1).to({rotation:-8.7812,x:-9.4,y:73.35},0).wait(1).to({rotation:-9.513,x:-9.35,y:73.9},0).wait(1).to({rotation:-10.2447,x:-9.2,y:74.4},0).wait(1).to({rotation:-10.9765,x:-9.05,y:74.95},0).wait(1).to({rotation:-10.2447,x:-9.2,y:74.2},0).wait(1).to({rotation:-9.513,x:-9.35,y:73.5},0).wait(1).to({rotation:-8.7812,x:-9.4,y:72.8},0).wait(1).to({rotation:-8.0494,x:-9.5,y:72},0).wait(1).to({rotation:-7.3177,x:-9.6,y:71.3},0).wait(1).to({rotation:-6.5859,x:-9.65,y:70.6},0).wait(1).to({rotation:-5.8541,x:-9.7,y:69.8},0).wait(1).to({rotation:-5.1224,x:-9.75,y:69.1},0).wait(1).to({rotation:-4.3906,x:-9.85,y:68.35},0).wait(1).to({rotation:-3.6588,x:-9.9,y:67.65},0).wait(1).to({rotation:-2.9271,y:66.95},0).wait(1).to({rotation:-2.1953,x:-9.95,y:66.15},0).wait(1).to({rotation:-1.4635,y:65.45},0).wait(1).to({rotation:-0.7318,x:-10,y:64.7},0).wait(1).to({rotation:0,y:64},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.1,-167.5,252.9,390.5);


(lib.uva_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2
	this.pc = new lib.mc_pointer();
	this.pc.name = "pc";
	this.pc.setTransform(29.5,23.5);
	this.pc.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.pc).wait(1));

	// Capa_1
	this.instance = new lib.uva();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uva_1, new cjs.Rectangle(0,0,59,47), null);


(lib.platano_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2
	this.pc = new lib.mc_pointer();
	this.pc.name = "pc";
	this.pc.setTransform(29,27);
	this.pc.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.pc).wait(1));

	// Capa_1
	this.instance = new lib.platano();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.platano_1, new cjs.Rectangle(0,0,58,54), null);


(lib.pera_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2
	this.pc = new lib.mc_pointer();
	this.pc.name = "pc";
	this.pc.setTransform(22.5,26);
	this.pc.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.pc).wait(1));

	// Capa_1
	this.instance = new lib.pera();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pera_1, new cjs.Rectangle(0,0,52,52), null);


(lib.naranja_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2
	this.pc = new lib.mc_pointer();
	this.pc.name = "pc";
	this.pc.setTransform(27,27.5);
	this.pc.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.pc).wait(1));

	// Capa_1
	this.instance = new lib.naranja();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.naranja_1, new cjs.Rectangle(0,0,54,55), null);


(lib.manzana_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2
	this.pc = new lib.mc_pointer();
	this.pc.name = "pc";
	this.pc.setTransform(24,29.5);
	this.pc.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.pc).wait(1));

	// Capa_1
	this.instance = new lib.manzana();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.manzana_1, new cjs.Rectangle(0,0,48,59), null);


(lib.kiwi_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2
	this.pc = new lib.mc_pointer();
	this.pc.name = "pc";
	this.pc.setTransform(28,23);
	this.pc.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.pc).wait(1));

	// Capa_1
	this.instance = new lib.kiwi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kiwi_1, new cjs.Rectangle(0,0,56,46), null);


(lib.fresa_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2
	this.pc = new lib.mc_pointer();
	this.pc.name = "pc";
	this.pc.setTransform(27,28);
	this.pc.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.pc).wait(1));

	// Capa_1
	this.instance = new lib.fresa();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fresa_1, new cjs.Rectangle(0,0,54,56), null);


(lib.transition = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21));

	// Capa_3
	this.instance = new lib.barra_transition();
	this.instance.setTransform(1151.9,280,1,1,0,0,0,191.9,280);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:1076.05},0).wait(1).to({x:1000.25},0).wait(1).to({x:924.45},0).wait(1).to({x:848.65},0).wait(1).to({x:772.85},0).wait(1).to({x:697},0).wait(1).to({x:621.2},0).wait(1).to({x:545.4},0).wait(1).to({x:469.6},0).wait(1).to({x:393.8},0).wait(1).to({x:317.95},0).wait(1).to({x:242.15},0).wait(1).to({x:166.4},0).wait(1).to({x:90.6},0).wait(1).to({x:14.75},0).wait(1).to({x:-26.8,alpha:0.8},0).wait(1).to({x:-68.4,alpha:0.6},0).wait(1).to({x:-109.95,alpha:0.4},0).wait(1).to({x:-151.55,alpha:0.2},0).wait(1).to({x:-193.15,alpha:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-385,0,1728.9,560);


(lib.destellos = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_4
	this.instance = new lib.destellos1_1();
	this.instance.setTransform(480.5,388.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-14.9983},29).to({rotation:0},30).wait(1));

	// Capa_5
	this.instance_1 = new lib.destellos2_1();
	this.instance_1.setTransform(480.5,388.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:14.9983},29).to({rotation:0,x:469.7,y:352.75},30).wait(1));

	// Capa_3
	this.instance_2 = new lib.rayitos1_1();
	this.instance_2.setTransform(478.5,388.5,1,1,11.6904,0,0,0.1,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:0,regY:0,scaleX:1.0229,scaleY:1.0229,rotation:11.6909,x:478.5005,y:387.8861,alpha:0.9773},0).wait(1).to({scaleX:1.0457,scaleY:1.0457,x:478.5011,y:387.8722,alpha:0.9545},0).wait(1).to({scaleX:1.0686,scaleY:1.0686,x:478.5016,y:387.8583,alpha:0.9318},0).wait(1).to({scaleX:1.0915,scaleY:1.0915,x:478.5022,y:387.8444,alpha:0.9091},0).wait(1).to({scaleX:1.1143,scaleY:1.1143,x:478.5027,y:387.8305,alpha:0.8864},0).wait(1).to({scaleX:1.1372,scaleY:1.1372,x:478.5032,y:387.8166,alpha:0.8636},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:478.5038,y:387.8027,alpha:0.8409},0).wait(1).to({scaleX:1.1829,scaleY:1.1829,x:478.5043,y:387.7888,alpha:0.8182},0).wait(1).to({scaleX:1.2058,scaleY:1.2058,x:478.5049,y:387.7749,alpha:0.7955},0).wait(1).to({scaleX:1.2286,scaleY:1.2286,x:478.5054,y:387.761,alpha:0.7727},0).wait(1).to({scaleX:1.2515,scaleY:1.2515,x:478.506,y:387.7472,alpha:0.75},0).wait(1).to({scaleX:1.2743,scaleY:1.2743,x:478.5065,y:387.7333,alpha:0.7273},0).wait(1).to({scaleX:1.2972,scaleY:1.2972,x:478.507,y:387.7194,alpha:0.7045},0).wait(1).to({scaleX:1.3201,scaleY:1.3201,x:478.5076,y:387.7055,alpha:0.6818},0).wait(1).to({scaleX:1.3429,scaleY:1.3429,x:478.5081,y:387.6916,alpha:0.6591},0).wait(1).to({scaleX:1.3658,scaleY:1.3658,x:478.5087,y:387.6777,alpha:0.6364},0).wait(1).to({scaleX:1.3886,scaleY:1.3886,x:478.5092,y:387.6638,alpha:0.6136},0).wait(1).to({scaleX:1.4115,scaleY:1.4115,x:478.5097,y:387.6499,alpha:0.5909},0).wait(1).to({scaleX:1.4344,scaleY:1.4344,x:478.5103,y:387.636,alpha:0.5682},0).wait(1).to({scaleX:1.4572,scaleY:1.4572,x:478.5108,y:387.6221,alpha:0.5455},0).wait(1).to({scaleX:1.4801,scaleY:1.4801,x:478.5114,y:387.6082,alpha:0.5227},0).wait(1).to({scaleX:1.5029,scaleY:1.5029,x:478.5119,y:387.5943,alpha:0.5},0).wait(1).to({scaleX:1.5258,scaleY:1.5258,x:478.5124,y:387.5804,alpha:0.4773},0).wait(1).to({scaleX:1.5487,scaleY:1.5487,x:478.513,y:387.5665,alpha:0.4545},0).wait(1).to({scaleX:1.5715,scaleY:1.5715,x:478.5135,y:387.5526,alpha:0.4318},0).wait(1).to({scaleX:1.5944,scaleY:1.5944,x:478.5141,y:387.5387,alpha:0.4091},0).wait(1).to({scaleX:1.6172,scaleY:1.6172,x:478.5146,y:387.5248,alpha:0.3864},0).wait(1).to({scaleX:1.6401,scaleY:1.6401,x:478.5151,y:387.5109,alpha:0.3636},0).wait(1).to({scaleX:1.663,scaleY:1.663,x:478.5157,y:387.497,alpha:0.3409},0).wait(1).to({scaleX:1.6858,scaleY:1.6858,x:478.5162,y:387.4832,alpha:0.3182},0).wait(1).to({scaleX:1.7087,scaleY:1.7087,x:478.5168,y:387.4693,alpha:0.2955},0).wait(1).to({scaleX:1.7315,scaleY:1.7315,x:478.5173,y:387.4554,alpha:0.2727},0).wait(1).to({scaleX:1.7544,scaleY:1.7544,x:478.5178,y:387.4415,alpha:0.25},0).wait(1).to({scaleX:1.7773,scaleY:1.7773,x:478.5184,y:387.4276,alpha:0.2273},0).wait(1).to({scaleX:1.8001,scaleY:1.8001,x:478.5189,y:387.4137,alpha:0.2045},0).wait(1).to({scaleX:1.823,scaleY:1.823,x:478.5195,y:387.3998,alpha:0.1818},0).wait(1).to({scaleX:1.8458,scaleY:1.8458,x:478.52,y:387.3859,alpha:0.1591},0).wait(1).to({scaleX:1.8687,scaleY:1.8687,x:478.5206,y:387.372,alpha:0.1364},0).wait(1).to({scaleX:1.8916,scaleY:1.8916,x:478.5211,y:387.3581,alpha:0.1136},0).wait(1).to({scaleX:1.9144,scaleY:1.9144,x:478.5216,y:387.3442,alpha:0.0909},0).wait(1).to({scaleX:1.9373,scaleY:1.9373,x:478.5222,y:387.3303,alpha:0.0682},0).wait(1).to({scaleX:1.9601,scaleY:1.9601,x:478.5227,y:387.3164,alpha:0.0455},0).wait(1).to({scaleX:1.983,scaleY:1.983,x:478.5233,y:387.3025,alpha:0.0227},0).wait(1).to({scaleX:2.0059,scaleY:2.0059,x:478.5238,y:387.2886,alpha:0},0).to({_off:true},1).wait(15));

	// Capa_2
	this.instance_3 = new lib.rayitos2_1();
	this.instance_3.setTransform(479,388.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:1.0386,scaleY:1.0386,x:478.8169,y:387.8941,alpha:0.9655},0).wait(1).to({scaleX:1.0771,scaleY:1.0771,x:478.6339,y:387.2881,alpha:0.931},0).wait(1).to({scaleX:1.1157,scaleY:1.1157,x:478.4508,y:386.6822,alpha:0.8966},0).wait(1).to({scaleX:1.1543,scaleY:1.1543,x:478.2678,y:386.0763,alpha:0.8621},0).wait(1).to({scaleX:1.1929,scaleY:1.1929,x:478.0847,y:385.4703,alpha:0.8276},0).wait(1).to({scaleX:1.2314,scaleY:1.2314,x:477.9017,y:384.8644,alpha:0.7931},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:477.7186,y:384.2585,alpha:0.7586},0).wait(1).to({scaleX:1.3086,scaleY:1.3086,x:477.5356,y:383.6525,alpha:0.7241},0).wait(1).to({scaleX:1.3472,scaleY:1.3472,x:477.3525,y:383.0466,alpha:0.6897},0).wait(1).to({scaleX:1.3857,scaleY:1.3857,x:477.1695,y:382.4407,alpha:0.6552},0).wait(1).to({scaleX:1.4243,scaleY:1.4243,x:476.9864,y:381.8347,alpha:0.6207},0).wait(1).to({scaleX:1.4629,scaleY:1.4629,x:476.8034,y:381.2288,alpha:0.5862},0).wait(1).to({scaleX:1.5015,scaleY:1.5015,x:476.6203,y:380.6229,alpha:0.5517},0).wait(1).to({scaleX:1.54,scaleY:1.54,x:476.4373,y:380.0169,alpha:0.5172},0).wait(1).to({scaleX:1.5786,scaleY:1.5786,x:476.2542,y:379.411,alpha:0.4828},0).wait(1).to({scaleX:1.6172,scaleY:1.6172,x:476.0712,y:378.8051,alpha:0.4483},0).wait(1).to({scaleX:1.6557,scaleY:1.6557,x:475.8881,y:378.1992,alpha:0.4138},0).wait(1).to({scaleX:1.6943,scaleY:1.6943,x:475.7051,y:377.5932,alpha:0.3793},0).wait(1).to({scaleX:1.7329,scaleY:1.7329,x:475.522,y:376.9873,alpha:0.3448},0).wait(1).to({scaleX:1.7715,scaleY:1.7715,x:475.339,y:376.3814,alpha:0.3103},0).wait(1).to({scaleX:1.81,scaleY:1.81,x:475.1559,y:375.7754,alpha:0.2759},0).wait(1).to({scaleX:1.8486,scaleY:1.8486,x:474.9729,y:375.1695,alpha:0.2414},0).wait(1).to({scaleX:1.8872,scaleY:1.8872,x:474.7898,y:374.5636,alpha:0.2069},0).wait(1).to({scaleX:1.9258,scaleY:1.9258,x:474.6068,y:373.9576,alpha:0.1724},0).wait(1).to({scaleX:1.9643,scaleY:1.9643,x:474.4237,y:373.3517,alpha:0.1379},0).wait(1).to({scaleX:2.0029,scaleY:2.0029,x:474.2407,y:372.7458,alpha:0.1034},0).wait(1).to({scaleX:2.0415,scaleY:2.0415,x:474.0576,y:372.1398,alpha:0.069},0).wait(1).to({scaleX:2.08,scaleY:2.08,x:473.8746,y:371.5339,alpha:0.0345},0).wait(1).to({scaleX:2.1186,scaleY:2.1186,x:473.6915,y:370.928,alpha:0},0).wait(1).to({x:473.5085,y:370.322},0).wait(1).to({x:473.3254,y:369.7161},0).wait(1).to({x:473.1424,y:369.1102},0).wait(1).to({x:472.9593,y:368.5042},0).wait(1).to({x:472.7763,y:367.8983},0).wait(1).to({x:472.5932,y:367.2924},0).wait(1).to({x:472.4102,y:366.6864},0).wait(1).to({x:472.2271,y:366.0805},0).wait(1).to({x:472.0441,y:365.4746},0).wait(1).to({x:471.861,y:364.8686},0).wait(1).to({x:471.678,y:364.2627},0).wait(1).to({x:471.4949,y:363.6568},0).wait(1).to({x:471.3119,y:363.0508},0).wait(1).to({x:471.1288,y:362.4449},0).wait(1).to({x:470.9458,y:361.839},0).wait(1).to({x:470.7627,y:361.2331},0).wait(1).to({x:470.5797,y:360.6271},0).wait(1).to({x:470.3966,y:360.0212},0).wait(1).to({x:470.2136,y:359.4153},0).wait(1).to({x:470.0305,y:358.8093},0).wait(1).to({x:469.8475,y:358.2034},0).wait(1).to({x:469.6644,y:357.5975},0).wait(1).to({x:469.4814,y:356.9915},0).wait(1).to({x:469.2983,y:356.3856},0).wait(1).to({x:469.1153,y:355.7797},0).wait(1).to({x:468.9322,y:355.1737},0).wait(1).to({x:468.7492,y:354.5678},0).wait(1).to({x:468.5661,y:353.9619},0).wait(1).to({x:468.3831,y:353.3559},0).wait(1).to({x:468.2,y:352.75},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-369,-315.4,1695.2,1405.5);


(lib.rep2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2
	this.f1 = new lib.naranja_1();
	this.f1.name = "f1";
	this.f1.setTransform(147.7,181.15,1,1,0,0,0,27,27.5);

	this.timeline.addTween(cjs.Tween.get(this.f1).wait(1));

	// Capa_3
	this.f2 = new lib.manzana_1();
	this.f2.name = "f2";
	this.f2.setTransform(35.7,29.5,1,1,0,0,0,24,29.5);

	this.timeline.addTween(cjs.Tween.get(this.f2).wait(1));

	// Capa_4
	this.f3 = new lib.pera_1();
	this.f3.name = "f3";
	this.f3.setTransform(135.5,29.4,1,1,0,0,0,26,26);

	this.timeline.addTween(cjs.Tween.get(this.f3).wait(1));

	// Capa_18
	this.f4 = new lib.fresa_1();
	this.f4.name = "f4";
	this.f4.setTransform(146.2,103.7,1,1,0,0,0,25.5,26.5);

	this.timeline.addTween(cjs.Tween.get(this.f4).wait(1));

	// Capa_5
	this.f5 = new lib.pera_1();
	this.f5.name = "f5";
	this.f5.setTransform(135.5,29.4,1,1,0,0,0,26,26);

	this.timeline.addTween(cjs.Tween.get(this.f5).wait(1));

	// Capa_6
	this.f6 = new lib.kiwi_1();
	this.f6.name = "f6";
	this.f6.setTransform(36.15,249.25,1,1,0,0,0,28,23);

	this.timeline.addTween(cjs.Tween.get(this.f6).wait(1));

	// Capa_7
	this.f7 = new lib.platano_1();
	this.f7.name = "f7";
	this.f7.setTransform(29.85,106.65,1,1,0,0,0,29,28);

	this.timeline.addTween(cjs.Tween.get(this.f7).wait(1));

	// Capa_8
	this.f8 = new lib.naranja_1();
	this.f8.name = "f8";
	this.f8.setTransform(147.7,181.15,1,1,0,0,0,27,27.5);

	this.timeline.addTween(cjs.Tween.get(this.f8).wait(1));

	// Capa_9
	this.f9 = new lib.kiwi_1();
	this.f9.name = "f9";
	this.f9.setTransform(36.15,249.25,1,1,0,0,0,28,23);

	this.timeline.addTween(cjs.Tween.get(this.f9).wait(1));

	// Capa_10
	this.f10 = new lib.uva_1();
	this.f10.name = "f10";
	this.f10.setTransform(29.5,181.4,1,1,0,0,0,29.5,23.5);

	this.timeline.addTween(cjs.Tween.get(this.f10).wait(1));

	// Capa_11
	this.f11 = new lib.manzana_1();
	this.f11.name = "f11";
	this.f11.setTransform(35.7,29.5,1,1,0,0,0,24,29.5);

	this.timeline.addTween(cjs.Tween.get(this.f11).wait(1));

	// Capa_12
	this.f12 = new lib.fresa_1();
	this.f12.name = "f12";
	this.f12.setTransform(146,104.65,1,1,0,0,0,27,28);

	this.timeline.addTween(cjs.Tween.get(this.f12).wait(1));

	// Capa_13
	this.f13 = new lib.manzana_1();
	this.f13.name = "f13";
	this.f13.setTransform(35.7,29.5,1,1,0,0,0,24,29.5);

	this.timeline.addTween(cjs.Tween.get(this.f13).wait(1));

	// Capa_14
	this.f14 = new lib.naranja_1();
	this.f14.name = "f14";
	this.f14.setTransform(147.7,181.15,1,1,0,0,0,27,27.5);

	this.timeline.addTween(cjs.Tween.get(this.f14).wait(1));

	// Capa_15
	this.f15 = new lib.naranja_1();
	this.f15.name = "f15";
	this.f15.setTransform(147.7,181.15,1,1,0,0,0,27,27.5);

	this.timeline.addTween(cjs.Tween.get(this.f15).wait(1));

	// Capa_16
	this.f16 = new lib.manzana_1();
	this.f16.name = "f16";
	this.f16.setTransform(35.7,29.5,1,1,0,0,0,24,29.5);

	this.timeline.addTween(cjs.Tween.get(this.f16).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rep2, new cjs.Rectangle(0,0,174.7,272.3), null);


(lib.rep1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2
	this.f1 = new lib.uva_1();
	this.f1.name = "f1";
	this.f1.setTransform(29.5,181.5,1,1,0,0,0,29.5,23.5);

	this.timeline.addTween(cjs.Tween.get(this.f1).wait(1));

	// Capa_3
	this.f2 = new lib.uva_1();
	this.f2.name = "f2";
	this.f2.setTransform(29.5,181.5,1,1,0,0,0,29.5,23.5);

	this.timeline.addTween(cjs.Tween.get(this.f2).wait(1));

	// Capa_4
	this.f3 = new lib.manzana_1();
	this.f3.name = "f3";
	this.f3.setTransform(32.5,25.5,1,1,0,0,0,21.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.f3).wait(1));

	// Capa_5
	this.f4 = new lib.fresa_1();
	this.f4.name = "f4";
	this.f4.setTransform(148.2,105.4,1,1,0,0,0,27,28);

	this.timeline.addTween(cjs.Tween.get(this.f4).wait(1));

	// Capa_6
	this.f5 = new lib.kiwi_1();
	this.f5.name = "f5";
	this.f5.setTransform(37.15,247.15,1,1,0,0,0,29,20.5);

	this.timeline.addTween(cjs.Tween.get(this.f5).wait(1));

	// Capa_7
	this.f6 = new lib.naranja_1();
	this.f6.name = "f6";
	this.f6.setTransform(138.7,178,1,1,0,0,0,17.5,24);

	this.timeline.addTween(cjs.Tween.get(this.f6).wait(1));

	// Capa_8
	this.f7 = new lib.uva_1();
	this.f7.name = "f7";
	this.f7.setTransform(29.5,181.5,1,1,0,0,0,29.5,23.5);

	this.timeline.addTween(cjs.Tween.get(this.f7).wait(1));

	// Capa_18
	this.f8 = new lib.naranja_1();
	this.f8.name = "f8";
	this.f8.setTransform(138.7,178,1,1,0,0,0,17.5,24);

	this.timeline.addTween(cjs.Tween.get(this.f8).wait(1));

	// Capa_9
	this.f9 = new lib.fresa_1();
	this.f9.name = "f9";
	this.f9.setTransform(148.2,105.4,1,1,0,0,0,27,28);

	this.timeline.addTween(cjs.Tween.get(this.f9).wait(1));

	// Capa_10
	this.f10 = new lib.uva_1();
	this.f10.name = "f10";
	this.f10.setTransform(29.5,181.5,1,1,0,0,0,29.5,23.5);

	this.timeline.addTween(cjs.Tween.get(this.f10).wait(1));

	// Capa_11
	this.f11 = new lib.manzana_1();
	this.f11.name = "f11";
	this.f11.setTransform(32.5,25.5,1,1,0,0,0,21.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.f11).wait(1));

	// Capa_12
	this.f12 = new lib.pera_1();
	this.f12.name = "f12";
	this.f12.setTransform(131.9,30.35,1,1,0,0,0,22.5,26);

	this.timeline.addTween(cjs.Tween.get(this.f12).wait(1));

	// Capa_13
	this.f13 = new lib.kiwi_1();
	this.f13.name = "f13";
	this.f13.setTransform(37.15,247.15,1,1,0,0,0,29,20.5);

	this.timeline.addTween(cjs.Tween.get(this.f13).wait(1));

	// Capa_14
	this.f14 = new lib.uva_1();
	this.f14.name = "f14";
	this.f14.setTransform(29.5,181.5,1,1,0,0,0,29.5,23.5);

	this.timeline.addTween(cjs.Tween.get(this.f14).wait(1));

	// Capa_15
	this.f15 = new lib.platano_1();
	this.f15.name = "f15";
	this.f15.setTransform(30,106.55,1,1,0,0,0,29,28);

	this.timeline.addTween(cjs.Tween.get(this.f15).wait(1));

	// Capa_16
	this.f16 = new lib.naranja_1();
	this.f16.name = "f16";
	this.f16.setTransform(138.7,178,1,1,0,0,0,17.5,24);

	this.timeline.addTween(cjs.Tween.get(this.f16).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rep1, new cjs.Rectangle(0,0,175.2,272.7), null);


(lib.capa2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.f16 = new lib.manzana_1();
	this.f16.name = "f16";
	this.f16.setTransform(402.15,444.4,1,1,0,0,0,21.5,25.5);

	this.f15 = new lib.naranja_1();
	this.f15.name = "f15";
	this.f15.setTransform(125.15,447.45,1,1,0,0,0,27,27.5);

	this.f14 = new lib.naranja_1();
	this.f14.name = "f14";
	this.f14.setTransform(265.45,378,1,1,0,0,0,27,27.5);

	this.f13 = new lib.manzana_1();
	this.f13.name = "f13";
	this.f13.setTransform(52.3,373.05,1,1,0,0,0,21.5,25.5);

	this.f12 = new lib.fresa_1();
	this.f12.name = "f12";
	this.f12.setTransform(474,305.8,1,1,0,0,0,25.5,26.5);

	this.f11 = new lib.manzana_1();
	this.f11.name = "f11";
	this.f11.setTransform(192.2,303.7,1,1,0,0,0,21.5,25.5);

	this.f9 = new lib.kiwi_1();
	this.f9.name = "f9";
	this.f9.setTransform(265.4,238.6,1,1,0,0,0,28,23);

	this.f8 = new lib.naranja_1();
	this.f8.name = "f8";
	this.f8.setTransform(45.45,234.35,1,1,0,0,0,17.5,24);

	this.f5 = new lib.pera_1();
	this.f5.name = "f5";
	this.f5.setTransform(121.6,168,1,1,0,0,0,22.5,26);

	this.f6 = new lib.kiwi_1();
	this.f6.name = "f6";
	this.f6.setTransform(404.55,168.15,1,1,0,0,0,28,23);

	this.f4 = new lib.fresa_1();
	this.f4.name = "f4";
	this.f4.setTransform(404.05,96.05,1,1,0,0,0,25.5,26.5);

	this.f2 = new lib.manzana_1();
	this.f2.name = "f2";
	this.f2.setTransform(122.5,94.35,1,1,0,0,0,21.5,25.5);

	this.f10 = new lib.uva_1();
	this.f10.name = "f10";
	this.f10.setTransform(44.1,308.6,1,1,0,0,0,18,24.5);

	this.f3 = new lib.pera_1();
	this.f3.name = "f3";
	this.f3.setTransform(261.8,97.65,1,1,0,0,0,22.5,26);

	this.f1 = new lib.naranja_1();
	this.f1.name = "f1";
	this.f1.setTransform(467.05,25.35,1,1,0,0,0,17.5,24);

	this.f7 = new lib.platano_1();
	this.f7.name = "f7";
	this.f7.setTransform(-84.55,238.3,1,1,0,0,0,29,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.f7},{t:this.f1},{t:this.f3},{t:this.f10},{t:this.f2},{t:this.f4},{t:this.f6},{t:this.f5},{t:this.f8},{t:this.f9},{t:this.f11},{t:this.f12},{t:this.f13},{t:this.f14},{t:this.f15},{t:this.f16}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.capa2, new cjs.Rectangle(-113.5,1.4,617.1,476.5), null);


(lib.capa1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.f8 = new lib.naranja_1();
	this.f8.name = "f8";
	this.f8.setTransform(124.9,288.8,1,1,0,0,0,27,27.5);

	this.f16 = new lib.naranja_1();
	this.f16.name = "f16";
	this.f16.setTransform(535.4,425.9,1,1,0,0,0,17.5,24);

	this.f13 = new lib.kiwi_1();
	this.f13.name = "f13";
	this.f13.setTransform(476,357.1,1,1,0,0,0,29,20.5);

	this.f11 = new lib.manzana_1();
	this.f11.name = "f11";
	this.f11.setTransform(-18.95,355.1,1,1,0,0,0,21.5,25.5);

	this.f9 = new lib.fresa_1();
	this.f9.name = "f9";
	this.f9.setTransform(262.05,288.1,1,1,0,0,0,25.5,26.5);

	this.f14 = new lib.uva_1();
	this.f14.name = "f14";
	this.f14.setTransform(183.15,430.4,1,1,0,0,0,18,24.5);

	this.f10 = new lib.uva_1();
	this.f10.name = "f10";
	this.f10.setTransform(391.6,291.1,1,1,0,0,0,18,24.5);

	this.f7 = new lib.uva_1();
	this.f7.name = "f7";
	this.f7.setTransform(463,220.5,1,1,0,0,0,18,24.5);

	this.f2 = new lib.uva_1();
	this.f2.name = "f2";
	this.f2.setTransform(531.9,80.55,1,1,0,0,0,18,24.5);

	this.f5 = new lib.kiwi_1();
	this.f5.name = "f5";
	this.f5.setTransform(55.05,217.5,1,1,0,0,0,29,20.5);

	this.f4 = new lib.fresa_1();
	this.f4.name = "f4";
	this.f4.setTransform(402.1,147.7,1,1,0,0,0,25.5,26.5);

	this.f3 = new lib.manzana_1();
	this.f3.name = "f3";
	this.f3.setTransform(191.65,144.7,1,1,0,0,0,21.5,25.5);

	this.f1 = new lib.uva_1();
	this.f1.name = "f1";
	this.f1.setTransform(42.05,80.55,1,1,0,0,0,18,24.5);

	this.f12 = new lib.pera_1();
	this.f12.name = "f12";
	this.f12.setTransform(120.4,359.6,1,1,0,0,0,22.5,26);

	this.f6 = new lib.naranja_1();
	this.f6.name = "f6";
	this.f6.setTransform(184.65,216,1,1,0,0,0,17.5,24);

	this.f15 = new lib.platano_1();
	this.f15.name = "f15";
	this.f15.setTransform(333.9,429.9,1,1,0,0,0,29,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.f15},{t:this.f6},{t:this.f12},{t:this.f1},{t:this.f3},{t:this.f4},{t:this.f5},{t:this.f2},{t:this.f7},{t:this.f10},{t:this.f14},{t:this.f9},{t:this.f11},{t:this.f13},{t:this.f16},{t:this.f8}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.capa1, new cjs.Rectangle(-40.4,56.1,613.3,400.79999999999995), null);


(lib.btn_repetir = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_3
	this.text = new cjs.Text("repetir", "30px 'Carton Six'", "#00FFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 128;
	this.text.parent = this;
	this.text.setTransform(125.55,16.35);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({scaleX:1.1408,scaleY:1.1408,x:128.25,y:14.25},0).wait(1).to({scaleX:1,scaleY:1,x:125.55,y:16.35},0).wait(2));

	// Capa_2
	this.instance = new lib.btn_g();
	this.instance.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.1408,scaleY:1.1408,x:-14,y:-3},0).wait(1).to({scaleX:1,scaleY:1,x:1,y:1},0).wait(2));

	// Capa_1
	this.instance_1 = new lib.btn_gf();
	this.instance_1.setTransform(106.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.1408,scaleY:1.1408},0).wait(1).to({scaleX:1,scaleY:1},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-4.4,243,71.9);


(lib.btn_next = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_3
	this.text = new cjs.Text("siguiente", "30px 'Carton Six'", "#00FFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 128;
	this.text.parent = this;
	this.text.setTransform(125.55,16.35);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({scaleX:1.1033,scaleY:1.1033,x:127.5,y:14.75},0).wait(1).to({scaleX:1,scaleY:1,x:125.55,y:16.35},0).wait(2));

	// Capa_2
	this.instance = new lib.btn_g();
	this.instance.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.1033,scaleY:1.1033,x:-10,y:-2},0).wait(1).to({scaleX:1,scaleY:1,x:1,y:1},0).wait(2));

	// Capa_1
	this.instance_1 = new lib.btn_gf();
	this.instance_1.setTransform(106.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.1033,scaleY:1.1033},0).wait(1).to({scaleX:1,scaleY:1},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-3.2,235,69.5);


(lib.btn_finalizar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_4
	this.text = new cjs.Text("finalizar", "30px 'Carton Six'", "#00FFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 128;
	this.text.parent = this;
	this.text.setTransform(125.55,16.35);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({scaleX:1.1033,scaleY:1.1033,x:127.5,y:14.75},0).wait(1).to({scaleX:1,scaleY:1,x:125.55,y:16.35},0).wait(2));

	// Capa_3
	this.instance = new lib.btn_g();
	this.instance.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.1033,scaleY:1.1033,x:-10,y:-2},0).wait(1).to({scaleX:1,scaleY:1,x:1,y:1},0).wait(2));

	// Capa_1
	this.instance_1 = new lib.btn_gf();
	this.instance_1.setTransform(106.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.1033,scaleY:1.1033},0).wait(1).to({scaleX:1,scaleY:1},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-3.2,235,69.5);


(lib.btn_comenzar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_3
	this.text = new cjs.Text("comenzar", "30px 'Carton Six'", "#00FFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 128;
	this.text.parent = this;
	this.text.setTransform(125.55,16.35);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({scaleX:1.1061,scaleY:1.1061,x:127.5429,y:14.45},0).wait(1).to({scaleX:1,scaleY:1,x:125.55,y:16.35},0).wait(1).to({y:16.55},0).wait(1));

	// Capa_2
	this.instance = new lib.btn_g();
	this.instance.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.1061,scaleY:1.1061,x:-10,y:-2},0).wait(1).to({scaleX:1,scaleY:1,x:1,y:1},0).wait(2));

	// Capa_1
	this.instance_1 = new lib.btn_gf();
	this.instance_1.setTransform(106.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.1061,scaleY:1.1061},0).wait(1).to({scaleX:1,scaleY:1},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.3,-3.3,235.60000000000002,69.7);


(lib.nota_ing = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_26
	this.instance = new lib.Símbolo1();
	this.instance.setTransform(753.5,262.95,1,1,0,0,0,13.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(300).to({x:742.3,y:261.2},0).wait(1).to({x:731.1,y:259.45},0).wait(1).to({x:719.95,y:257.7},0).wait(1).to({x:708.75,y:255.95},0).wait(1).to({x:697.6,y:254.2},0).wait(1).to({x:686.4,y:252.45},0).wait(1).to({x:675.25,y:250.7},0).wait(1).to({x:664.05,y:249},0).wait(1).to({x:652.9,y:247.25},0).wait(1).to({x:641.7,y:245.5},0).wait(1).to({x:630.55,y:243.75},0).wait(1).to({x:619.35,y:242},0).wait(1).to({x:608.2,y:240.25},0).wait(1).to({x:597,y:238.5},0).wait(1).to({x:585.85,y:236.8},0).wait(1).to({x:574.65,y:235.05},0).wait(1).to({x:563.45,y:233.3},0).wait(1).to({x:552.3,y:231.55},0).wait(1).to({x:541.1,y:229.8},0).wait(1).to({x:529.95,y:228.05},0).wait(1).to({x:518.75,y:226.3},0).wait(1).to({x:507.6,y:224.55},0).wait(1).to({x:496.4,y:222.85},0).wait(1).to({x:485.25,y:221.1},0).wait(1).to({x:474.05,y:219.35},0).wait(1).to({x:462.9,y:217.6},0).wait(1).to({x:451.7,y:215.85},0).wait(1).to({x:440.55,y:214.1},0).wait(1).to({x:429.35,y:212.35},0).wait(1).to({x:418.2,y:210.65},0).wait(1).to({x:407,y:208.9},0).wait(1).to({x:395.8,y:207.15},0).wait(1).to({x:384.65,y:205.4},0).wait(1).to({x:373.45,y:203.65},0).wait(1).to({x:362.3,y:201.9},0).wait(1).to({x:351.1,y:200.15},0).wait(1).to({x:339.95,y:198.4},0).wait(1).to({x:328.75,y:196.7},0).wait(1).to({x:317.6,y:194.95},0).wait(1).to({x:306.4,y:193.2},0).wait(1).to({x:295.25,y:191.45},0).wait(1).to({x:284.05,y:189.7},0).wait(1).to({x:272.9,y:187.95},0).wait(1).to({x:261.7,y:186.2},0).wait(1).to({x:250.55,y:184.5},0).wait(1).to({x:260.55,y:183.9},0).wait(1).to({x:270.6,y:183.3},0).wait(1).to({x:280.6,y:182.75},0).wait(1).to({x:290.65,y:182.15},0).wait(1).to({x:300.7,y:181.6},0).wait(1).to({x:310.7,y:181},0).wait(1).to({x:320.75,y:180.45},0).wait(1).to({x:330.8,y:179.85},0).wait(1).to({x:340.8,y:179.3},0).wait(1).to({x:350.85,y:178.7},0).wait(1).to({x:360.9,y:178.1},0).wait(1).to({x:370.9,y:177.55},0).wait(1).to({x:380.95,y:176.95},0).wait(1).to({x:391,y:176.4},0).wait(1).to({x:401,y:175.8},0).wait(1).to({x:411.05,y:175.25},0).wait(1).to({x:421.05,y:174.65},0).wait(1).to({x:431.1,y:174.1},0).wait(1).to({x:441.15,y:173.5},0).wait(1).to({x:451.15,y:172.9},0).wait(1).to({x:461.2,y:172.35},0).wait(1).to({x:471.25,y:171.75},0).wait(1).to({x:481.25,y:171.2},0).wait(1).to({x:491.3,y:170.6},0).wait(1).to({x:501.35,y:170.05},0).wait(1).to({x:511.35,y:169.45},0).wait(1).to({x:521.4,y:168.9},0).wait(1).to({x:531.45,y:168.3},0).wait(1).to({x:541.45,y:167.7},0).wait(1).to({x:551.5,y:167.15},0).wait(1).to({x:561.5,y:166.55},0).wait(1).to({x:571.55,y:166},0).wait(1).to({x:581.6,y:165.4},0).wait(1).to({x:591.6,y:164.85},0).wait(1).to({x:601.65,y:164.25},0).wait(1).to({x:611.7,y:163.7},0).wait(1).to({x:621.7,y:163.1},0).wait(1).to({x:631.75,y:162.5},0).wait(1).to({x:641.8,y:161.95},0).wait(1).to({x:651.8,y:161.35},0).wait(1).to({x:661.85,y:160.8},0).wait(1).to({x:671.9,y:160.2},0).wait(1).to({x:681.9,y:159.65},0).wait(1).to({x:691.95,y:159.05},0).wait(1).to({x:702,y:158.5},0).wait(1).to({x:692.2,y:161.1},0).wait(1).to({x:682.4,y:163.7},0).wait(1).to({x:672.65,y:166.3},0).wait(1).to({x:662.85,y:168.9},0).wait(1).to({x:653.1,y:171.5},0).wait(1).to({x:643.3,y:174.1},0).wait(1).to({x:633.55,y:176.7},0).wait(1).to({x:623.75,y:179.3},0).wait(1).to({x:614,y:181.9},0).wait(1).to({x:604.2,y:184.5},0).wait(1).to({x:594.45,y:187.1},0).wait(1).to({x:584.65,y:189.7},0).wait(1).to({x:574.9,y:192.3},0).wait(1).to({x:565.1,y:194.9},0).wait(1).to({x:555.35,y:197.55},0).wait(1).to({x:545.55,y:200.15},0).wait(1).to({x:535.75,y:202.75},0).wait(1).to({x:526,y:205.35},0).wait(1).to({x:516.2,y:207.95},0).wait(1).to({x:506.45,y:210.55},0).wait(1).to({x:496.65,y:213.15},0).wait(1).to({x:486.9,y:215.75},0).wait(1).to({x:477.1,y:218.35},0).wait(1).to({x:467.35,y:220.95},0).wait(1).to({x:457.55,y:223.55},0).wait(1).to({x:447.8,y:226.15},0).wait(1).to({x:438,y:228.75},0).wait(1).to({x:428.25,y:231.35},0).wait(1).to({x:418.45,y:233.95},0).wait(1).to({x:408.7,y:236.6},0).wait(1).to({x:398.9,y:239.2},0).wait(1).to({x:389.1,y:241.8},0).wait(1).to({x:379.35,y:244.4},0).wait(1).to({x:369.55,y:247},0).wait(1).to({x:359.8,y:249.6},0).wait(1).to({x:350,y:252.2},0).wait(1).to({x:340.25,y:254.8},0).wait(1).to({x:330.45,y:257.4},0).wait(1).to({x:320.7,y:260},0).wait(1).to({x:310.9,y:262.6},0).wait(1).to({x:301.15,y:265.2},0).wait(1).to({x:291.35,y:267.8},0).wait(1).to({x:281.6,y:270.4},0).wait(1).to({x:271.8,y:273},0).wait(1).to({x:262.05,y:275.65},0).wait(1).to({x:268.9,y:274.7},0).wait(1).to({x:275.8,y:273.75},0).wait(1).to({x:282.7,y:272.85},0).wait(1).to({x:289.55,y:271.9},0).wait(1).to({x:296.45,y:270.95},0).wait(1).to({x:303.35,y:270.05},0).wait(1).to({x:310.25,y:269.1},0).wait(1).to({x:317.1,y:268.2},0).wait(1).to({x:324,y:267.25},0).wait(1).to({x:330.9,y:266.3},0).wait(1).to({x:337.8,y:265.4},0).wait(1).to({x:344.65,y:264.45},0).wait(1).to({x:351.55,y:263.5},0).wait(1).to({x:358.45,y:262.6},0).wait(1).to({x:365.35,y:261.65},0).wait(1).to({x:372.2,y:260.75},0).wait(1).to({x:379.1,y:259.8},0).wait(1).to({x:386,y:258.85},0).wait(1).to({x:392.85,y:257.95},0).wait(1).to({x:399.75,y:257},0).wait(1).to({x:406.65,y:256.05},0).wait(1).to({x:413.55,y:255.15},0).wait(1).to({x:420.4,y:254.2},0).wait(1).to({x:427.3,y:253.3},0).wait(1).to({x:434.2,y:252.35},0).wait(1).to({x:441.1,y:251.4},0).wait(1).to({x:447.95,y:250.5},0).wait(1).to({x:454.85,y:249.55},0).wait(1).to({x:461.75,y:248.6},0).wait(1).to({x:468.65,y:247.7},0).wait(1).to({x:475.5,y:246.75},0).wait(1).to({x:482.4,y:245.85},0).wait(1).to({x:489.3,y:244.9},0).wait(1).to({x:496.15,y:243.95},0).wait(1).to({x:503.05,y:243.05},0).wait(1).to({x:509.95,y:242.1},0).wait(1).to({x:516.85,y:241.15},0).wait(1).to({x:523.7,y:240.25},0).wait(1).to({x:530.6,y:239.3},0).wait(1).to({x:537.5,y:238.4},0).wait(1).to({x:544.4,y:237.45},0).wait(1).to({x:551.25,y:236.5},0).wait(1).to({x:558.15,y:235.6},0).wait(1).to({x:565.05,y:234.65},0).wait(1).to({x:571.95,y:233.75},0).wait(1).to({x:566.55,y:234.5},0).wait(1).to({x:561.15,y:235.3},0).wait(1).to({x:555.75,y:236.1},0).wait(1).to({x:550.35,y:236.9},0).wait(1).to({x:544.95,y:237.65},0).wait(1).to({x:539.55,y:238.45},0).wait(1).to({x:534.15,y:239.25},0).wait(1).to({x:528.75,y:240.05},0).wait(1).to({x:523.35,y:240.8},0).wait(1).to({x:517.95,y:241.6},0).wait(1).to({x:512.55,y:242.4},0).wait(1).to({x:507.15,y:243.2},0).wait(1).to({x:501.75,y:243.95},0).wait(1).to({x:496.35,y:244.75},0).wait(1).to({x:491,y:245.55},0).wait(1).to({x:485.6,y:246.35},0).wait(1).to({x:480.2,y:247.1},0).wait(1).to({x:474.8,y:247.9},0).wait(1).to({x:469.4,y:248.7},0).wait(1).to({x:464,y:249.5},0).wait(1).to({x:458.6,y:250.25},0).wait(1).to({x:453.2,y:251.05},0).wait(1).to({x:447.8,y:251.85},0).wait(1).to({x:442.4,y:252.65},0).wait(1).to({x:437,y:253.4},0).wait(1).to({x:431.6,y:254.2},0).wait(1).to({x:426.2,y:255},0).wait(1).to({x:420.8,y:255.8},0).wait(1).to({x:415.4,y:256.55},0).wait(1).to({x:410.05,y:257.35},0).wait(1).to({x:404.65,y:258.15},0).wait(1).to({x:399.25,y:258.95},0).wait(1).to({x:393.85,y:259.7},0).wait(1).to({x:388.45,y:260.5},0).wait(1).to({x:383.05,y:261.3},0).wait(1).to({x:377.65,y:262.1},0).wait(1).to({x:372.25,y:262.85},0).wait(1).to({x:366.85,y:263.65},0).wait(1).to({x:361.45,y:264.45},0).wait(1).to({x:356.05,y:265.25},0).wait(1).to({x:350.65,y:266},0).wait(1).to({x:345.25,y:266.8},0).wait(1).to({x:339.85,y:267.6},0).wait(1).to({x:334.45,y:268.4},0).wait(1).to({x:329.1,y:269.2},0).wait(1).to({x:337.65,y:268.3},0).wait(1).to({x:346.25,y:267.4},0).wait(1).to({x:354.8,y:266.55},0).wait(1).to({x:363.4,y:265.65},0).wait(1).to({x:371.95,y:264.8},0).wait(1).to({x:380.55,y:263.9},0).wait(1).to({x:389.1,y:263.05},0).wait(1).to({x:397.7,y:262.15},0).wait(1).to({x:406.25,y:261.3},0).wait(1).to({x:414.85,y:260.4},0).wait(1).to({x:423.4,y:259.55},0).wait(1).to({x:432,y:258.65},0).wait(1).to({x:440.55,y:257.8},0).wait(1).to({x:449.15,y:256.9},0).wait(1).to({x:457.7,y:256.05},0).wait(1).to({x:466.3,y:255.15},0).wait(1).to({x:474.85,y:254.3},0).wait(1).to({x:483.45,y:253.4},0).wait(1).to({x:492,y:252.55},0).wait(1).to({x:500.6,y:251.65},0).wait(1).to({x:509.15,y:250.8},0).wait(1).to({x:517.75,y:249.9},0).wait(1).to({x:526.3,y:249.05},0).wait(1).to({x:534.9,y:248.15},0).wait(1).to({x:543.45,y:247.3},0).wait(1).to({x:552.05,y:246.4},0).wait(1).to({x:560.6,y:245.55},0).wait(1).to({x:569.2,y:244.65},0).wait(1).to({x:577.75,y:243.8},0).wait(1).to({x:586.35,y:242.9},0).wait(1).to({x:594.9,y:242.05},0).wait(1).to({x:603.5,y:241.15},0).wait(1).to({x:612.05,y:240.3},0).wait(1).to({x:620.65,y:239.4},0).wait(1).to({x:629.2,y:238.55},0).wait(1).to({x:637.8,y:237.65},0).wait(1).to({x:646.35,y:236.8},0).wait(1).to({x:654.95,y:235.9},0).wait(1).to({x:663.5,y:235.05},0).wait(1).to({x:672.1,y:234.15},0).wait(1).to({x:680.65,y:233.3},0).wait(1).to({x:689.25,y:232.4},0).wait(1).to({x:697.8,y:231.55},0).wait(1).to({x:706.4,y:230.65},0).wait(1).to({x:715,y:229.8},0).wait(1).to({x:704.7,y:228.95},0).wait(1).to({x:694.45,y:228.1},0).wait(1).to({x:684.2,y:227.25},0).wait(1).to({x:673.9,y:226.4},0).wait(1).to({x:663.65,y:225.55},0).wait(1).to({x:653.4,y:224.7},0).wait(1).to({x:643.1,y:223.9},0).wait(1).to({x:632.85,y:223.05},0).wait(1).to({x:622.6,y:222.2},0).wait(1).to({x:612.3,y:221.35},0).wait(1).to({x:602.05,y:220.5},0).wait(1).to({x:591.8,y:219.65},0).wait(1).to({x:581.5,y:218.85},0).wait(1).to({x:571.25,y:218},0).wait(1).to({x:561,y:217.15},0).wait(1).to({x:550.75,y:216.3},0).wait(1).to({x:540.45,y:215.45},0).wait(1).to({x:530.2,y:214.6},0).wait(1).to({x:519.95,y:213.75},0).wait(1).to({x:509.65,y:212.95},0).wait(1).to({x:499.4,y:212.1},0).wait(1).to({x:489.15,y:211.25},0).wait(1).to({x:478.85,y:210.4},0).wait(1).to({x:468.6,y:209.55},0).wait(1).to({x:458.35,y:208.7},0).wait(1).to({x:448.05,y:207.9},0).wait(1).to({x:437.8,y:207.05},0).wait(1).to({x:427.55,y:206.2},0).wait(1).to({x:417.25,y:205.35},0).wait(1).to({x:407,y:204.5},0).wait(1).to({x:396.75,y:203.65},0).wait(1).to({x:386.5,y:202.8},0).wait(1).to({x:376.2,y:202},0).wait(1).to({x:365.95,y:201.15},0).wait(1).to({x:355.7,y:200.3},0).wait(1).to({x:345.4,y:199.45},0).wait(1).to({x:335.15,y:198.6},0).wait(1).to({x:324.9,y:197.75},0).wait(1).to({x:314.6,y:196.95},0).wait(1).to({x:304.35,y:196.1},0).wait(1).to({x:294.1,y:195.25},0).wait(1).to({x:283.8,y:194.4},0).wait(1).to({x:273.55,y:193.55},0).wait(1).to({x:263.3,y:192.7},0).wait(1).to({x:253.05,y:191.9},0).wait(1).to({x:259.9,y:194.3},0).wait(1).to({x:266.8,y:196.75},0).wait(1).to({x:273.7,y:199.2},0).wait(1).to({x:280.55,y:201.65},0).wait(1).to({x:287.45,y:204.1},0).wait(1).to({x:294.35,y:206.55},0).wait(1).to({x:301.25,y:209},0).wait(1).to({x:308.1,y:211.45},0).wait(1).to({x:315,y:213.9},0).wait(1).to({x:321.9,y:216.3},0).wait(1).to({x:328.8,y:218.75},0).wait(1).to({x:335.65,y:221.2},0).wait(1).to({x:342.55,y:223.65},0).wait(1).to({x:349.45,y:226.1},0).wait(1).to({x:356.35,y:228.55},0).wait(1).to({x:363.2,y:231},0).wait(1).to({x:370.1,y:233.45},0).wait(1).to({x:377,y:235.9},0).wait(1).to({x:383.85,y:238.3},0).wait(1).to({x:390.75,y:240.75},0).wait(1).to({x:397.65,y:243.2},0).wait(1).to({x:404.55,y:245.65},0).wait(1).to({x:411.4,y:248.1},0).wait(1).to({x:418.3,y:250.55},0).wait(1).to({x:425.2,y:253},0).wait(1).to({x:432.1,y:255.45},0).wait(1).to({x:438.95,y:257.9},0).wait(1).to({x:445.85,y:260.3},0).wait(1).to({x:452.75,y:262.75},0).wait(1).to({x:459.65,y:265.2},0).wait(1).to({x:466.5,y:267.65},0).wait(1).to({x:473.4,y:270.1},0).wait(1).to({x:480.3,y:272.55},0).wait(1).to({x:487.15,y:275},0).wait(1).to({x:494.05,y:277.45},0).wait(1).to({x:500.95,y:279.9},0).wait(1).to({x:507.85,y:282.3},0).wait(1).to({x:514.7,y:284.75},0).wait(1).to({x:521.6,y:287.2},0).wait(1).to({x:528.5,y:289.65},0).wait(1).to({x:535.4,y:292.1},0).wait(1).to({x:542.25,y:294.55},0).wait(1).to({x:549.15,y:297},0).wait(1).to({x:556.05,y:299.45},0).wait(1).to({x:562.95,y:301.9},0).wait(1).to({x:557.75,y:301.2},0).wait(1).to({x:552.55,y:300.5},0).wait(1).to({x:547.35,y:299.8},0).wait(1).to({x:542.15,y:299.1},0).wait(1).to({x:536.95,y:298.4},0).wait(1).to({x:531.75,y:297.7},0).wait(1).to({x:526.55,y:297.05},0).wait(1).to({x:521.35,y:296.35},0).wait(1).to({x:516.15,y:295.65},0).wait(1).to({x:510.95,y:294.95},0).wait(1).to({x:505.75,y:294.25},0).wait(1).to({x:500.55,y:293.55},0).wait(1).to({x:495.35,y:292.9},0).wait(1).to({x:490.15,y:292.2},0).wait(1).to({x:485,y:291.5},0).wait(1).to({x:479.8,y:290.8},0).wait(1).to({x:474.6,y:290.1},0).wait(1).to({x:469.4,y:289.4},0).wait(1).to({x:464.2,y:288.7},0).wait(1).to({x:459,y:288.05},0).wait(1).to({x:453.8,y:287.35},0).wait(1).to({x:448.6,y:286.65},0).wait(1).to({x:443.4,y:285.95},0).wait(1).to({x:438.2,y:285.25},0).wait(1).to({x:433,y:284.55},0).wait(1).to({x:427.8,y:283.9},0).wait(1).to({x:422.6,y:283.2},0).wait(1).to({x:417.4,y:282.5},0).wait(1).to({x:412.2,y:281.8},0).wait(1).to({x:407.05,y:281.1},0).wait(1).to({x:401.85,y:280.4},0).wait(1).to({x:396.65,y:279.7},0).wait(1).to({x:391.45,y:279.05},0).wait(1).to({x:386.25,y:278.35},0).wait(1).to({x:381.05,y:277.65},0).wait(1).to({x:375.85,y:276.95},0).wait(1).to({x:370.65,y:276.25},0).wait(1).to({x:365.45,y:275.55},0).wait(1).to({x:360.25,y:274.9},0).wait(1).to({x:355.05,y:274.2},0).wait(1).to({x:349.85,y:273.5},0).wait(1).to({x:344.65,y:272.8},0).wait(1).to({x:339.45,y:272.1},0).wait(1).to({x:334.25,y:271.4},0).wait(1).to({x:329.1,y:270.75},0).wait(1).to({x:336,y:271.35},0).wait(1).to({x:342.95,y:272},0).wait(1).to({x:349.85,y:272.65},0).wait(1).to({x:356.8,y:273.3},0).wait(1).to({x:363.75,y:273.95},0).wait(1).to({x:370.65,y:274.6},0).wait(1).to({x:377.6,y:275.25},0).wait(1).to({x:384.5,y:275.9},0).wait(1).to({x:391.45,y:276.55},0).wait(1).to({x:398.4,y:277.2},0).wait(1).to({x:405.3,y:277.85},0).wait(1).to({x:412.25,y:278.5},0).wait(1).to({x:419.15,y:279.15},0).wait(1).to({x:426.1,y:279.8},0).wait(1).to({x:433.05,y:280.45},0).wait(1).to({x:439.95,y:281.1},0).wait(1).to({x:446.9,y:281.75},0).wait(1).to({x:453.8,y:282.4},0).wait(1).to({x:460.75,y:283.05},0).wait(1).to({x:467.7,y:283.7},0).wait(1).to({x:474.6,y:284.35},0).wait(1).to({x:481.55,y:285},0).wait(1).to({x:488.45,y:285.65},0).wait(1).to({x:495.4,y:286.3},0).wait(1).to({x:502.35,y:286.95},0).wait(1).to({x:509.25,y:287.6},0).wait(1).to({x:516.2,y:288.25},0).wait(1).to({x:523.1,y:288.9},0).wait(1).to({x:530.05,y:289.55},0).wait(1).to({x:537,y:290.2},0).wait(1).to({x:543.9,y:290.85},0).wait(1).to({x:550.85,y:291.5},0).wait(1).to({x:557.75,y:292.15},0).wait(1).to({x:564.7,y:292.8},0).wait(1).to({x:571.65,y:293.45},0).wait(1).to({x:578.55,y:294.1},0).wait(1).to({x:585.5,y:294.75},0).wait(1).to({x:592.4,y:295.4},0).wait(1).to({x:599.35,y:296.05},0).wait(1).to({x:606.3,y:296.7},0).wait(1).to({x:613.2,y:297.35},0).wait(1).to({x:620.15,y:298},0).wait(1).to({x:627.05,y:298.65},0).wait(1).to({x:634,y:299.3},0).wait(1).to({x:640.95,y:299.95},0).wait(11));

	// Capa_29
	this.instance_1 = new lib.uva_1();
	this.instance_1.setTransform(311.1,251.95,1,1,0,0,0,29.5,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(705).to({x:318,y:252.6},0).wait(1).to({x:324.9,y:253.25},0).wait(1).to({x:331.85,y:253.9},0).wait(1).to({x:338.75,y:254.55},0).wait(1).to({x:345.65,y:255.25},0).wait(1).to({x:352.6,y:255.9},0).wait(1).to({x:359.5,y:256.55},0).wait(1).to({x:366.4,y:257.2},0).wait(1).to({x:373.35,y:257.9},0).wait(1).to({x:380.25,y:258.55},0).wait(1).to({x:387.15,y:259.2},0).wait(1).to({x:394.1,y:259.85},0).wait(1).to({x:401,y:260.55},0).wait(1).to({x:407.9,y:261.2},0).wait(1).to({x:414.85,y:261.85},0).wait(1).to({x:421.75,y:262.5},0).wait(1).to({x:428.7,y:263.2},0).wait(1).to({x:435.6,y:263.85},0).wait(1).to({x:442.5,y:264.5},0).wait(1).to({x:449.45,y:265.15},0).wait(1).to({x:456.35,y:265.85},0).wait(1).to({x:463.25,y:266.5},0).wait(1).to({x:470.2,y:267.15},0).wait(1).to({x:477.1,y:267.8},0).wait(1).to({x:484,y:268.5},0).wait(1).to({x:490.95,y:269.15},0).wait(1).to({x:497.85,y:269.8},0).wait(1).to({x:504.75,y:270.45},0).wait(1).to({x:511.7,y:271.15},0).wait(1).to({x:518.6,y:271.8},0).wait(1).to({x:525.55,y:272.45},0).wait(1).to({x:532.45,y:273.1},0).wait(1).to({x:539.35,y:273.8},0).wait(1).to({x:546.3,y:274.45},0).wait(1).to({x:553.2,y:275.1},0).wait(1).to({x:560.1,y:275.75},0).wait(1).to({x:567.05,y:276.45},0).wait(1).to({x:573.95,y:277.1},0).wait(1).to({x:580.85,y:277.75},0).wait(1).to({x:587.8,y:278.4},0).wait(1).to({x:594.7,y:279.1},0).wait(1).to({x:601.6,y:279.75},0).wait(1).to({x:608.55,y:280.4},0).wait(1).to({x:615.45,y:281.05},0).wait(1).to({x:622.4,y:281.75},0).wait(11));

	// Capa_31
	this.instance_2 = new lib.uva_1();
	this.instance_2.setTransform(311.1,251.95,1,1,0,0,0,29.5,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(760));

	// Capa_24
	this.instance_3 = new lib.pera_1();
	this.instance_3.setTransform(244.8,254.45,1,1,0,0,0,26,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(435).to({x:251.6,y:253.45},0).wait(1).to({x:258.45,y:252.45},0).wait(1).to({x:265.3,y:251.5},0).wait(1).to({x:272.1,y:250.5},0).wait(1).to({x:278.95,y:249.5},0).wait(1).to({x:285.8,y:248.55},0).wait(1).to({x:292.65,y:247.55},0).wait(1).to({x:299.45,y:246.6},0).wait(1).to({x:306.3,y:245.6},0).wait(1).to({x:313.15,y:244.6},0).wait(1).to({x:320,y:243.65},0).wait(1).to({x:326.8,y:242.65},0).wait(1).to({x:333.65,y:241.65},0).wait(1).to({x:340.5,y:240.7},0).wait(1).to({x:347.35,y:239.7},0).wait(1).to({x:354.15,y:238.75},0).wait(1).to({x:361,y:237.75},0).wait(1).to({x:367.85,y:236.75},0).wait(1).to({x:374.65,y:235.8},0).wait(1).to({x:381.5,y:234.8},0).wait(1).to({x:388.35,y:233.8},0).wait(1).to({x:395.2,y:232.85},0).wait(1).to({x:402,y:231.85},0).wait(1).to({x:408.85,y:230.9},0).wait(1).to({x:415.7,y:229.9},0).wait(1).to({x:422.55,y:228.9},0).wait(1).to({x:429.35,y:227.95},0).wait(1).to({x:436.2,y:226.95},0).wait(1).to({x:443.05,y:225.95},0).wait(1).to({x:449.9,y:225},0).wait(1).to({x:456.7,y:224},0).wait(1).to({x:463.55,y:223.05},0).wait(1).to({x:470.4,y:222.05},0).wait(1).to({x:477.2,y:221.05},0).wait(1).to({x:484.05,y:220.1},0).wait(1).to({x:490.9,y:219.1},0).wait(1).to({x:497.75,y:218.1},0).wait(1).to({x:504.55,y:217.15},0).wait(1).to({x:511.4,y:216.15},0).wait(1).to({x:518.25,y:215.2},0).wait(1).to({x:525.1,y:214.2},0).wait(1).to({x:531.9,y:213.2},0).wait(1).to({x:538.75,y:212.25},0).wait(1).to({x:545.6,y:211.25},0).wait(1).to({x:552.45,y:210.3},0).wait(281));

	// Capa_28
	this.instance_4 = new lib.pera_1();
	this.instance_4.setTransform(244.8,254.45,1,1,0,0,0,26,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(760));

	// Capa_25
	this.instance_5 = new lib.uva_1();
	this.instance_5.setTransform(311.1,251.95,1,1,0,0,0,29.5,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(525).to({x:319.55,y:251},0).wait(1).to({x:328.05,y:250.05},0).wait(1).to({x:336.55,y:249.1},0).wait(1).to({x:345.05,y:248.2},0).wait(1).to({x:353.5,y:247.25},0).wait(1).to({x:362,y:246.3},0).wait(1).to({x:370.5,y:245.35},0).wait(1).to({x:379,y:244.45},0).wait(1).to({x:387.45,y:243.5},0).wait(1).to({x:395.95,y:242.55},0).wait(1).to({x:404.45,y:241.6},0).wait(1).to({x:412.95,y:240.7},0).wait(1).to({x:421.4,y:239.75},0).wait(1).to({x:429.9,y:238.8},0).wait(1).to({x:438.4,y:237.9},0).wait(1).to({x:446.9,y:236.95},0).wait(1).to({x:455.35,y:236},0).wait(1).to({x:463.85,y:235.05},0).wait(1).to({x:472.35,y:234.15},0).wait(1).to({x:480.85,y:233.2},0).wait(1).to({x:489.3,y:232.25},0).wait(1).to({x:497.8,y:231.3},0).wait(1).to({x:506.3,y:230.4},0).wait(1).to({x:514.8,y:229.45},0).wait(1).to({x:523.25,y:228.5},0).wait(1).to({x:531.75,y:227.55},0).wait(1).to({x:540.25,y:226.65},0).wait(1).to({x:548.75,y:225.7},0).wait(1).to({x:557.2,y:224.75},0).wait(1).to({x:565.7,y:223.85},0).wait(1).to({x:574.2,y:222.9},0).wait(1).to({x:582.7,y:221.95},0).wait(1).to({x:591.15,y:221},0).wait(1).to({x:599.65,y:220.1},0).wait(1).to({x:608.15,y:219.15},0).wait(1).to({x:616.65,y:218.2},0).wait(1).to({x:625.1,y:217.25},0).wait(1).to({x:633.6,y:216.35},0).wait(1).to({x:642.1,y:215.4},0).wait(1).to({x:650.6,y:214.45},0).wait(1).to({x:659.05,y:213.5},0).wait(1).to({x:667.55,y:212.6},0).wait(1).to({x:676.05,y:211.65},0).wait(1).to({x:684.55,y:210.7},0).wait(1).to({x:693.05,y:209.8},0).wait(191));

	// Capa_6
	this.instance_6 = new lib.fresa_1();
	this.instance_6.setTransform(244.3,167.95,1,1,0,0,0,25.5,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:27,regY:28,x:245.8,y:169.45},0).wait(344).to({x:255.75,y:168.75},0).wait(1).to({x:265.7,y:168.05},0).wait(1).to({x:275.7,y:167.4},0).wait(1).to({x:285.65,y:166.7},0).wait(1).to({x:295.65,y:166.05},0).wait(1).to({x:305.6,y:165.35},0).wait(1).to({x:315.6,y:164.7},0).wait(1).to({x:325.55,y:164},0).wait(1).to({x:335.55,y:163.35},0).wait(1).to({x:345.5,y:162.65},0).wait(1).to({x:355.45,y:162},0).wait(1).to({x:365.45,y:161.3},0).wait(1).to({x:375.4,y:160.65},0).wait(1).to({x:385.4,y:159.95},0).wait(1).to({x:395.35,y:159.3},0).wait(1).to({x:405.35,y:158.6},0).wait(1).to({x:415.3,y:157.9},0).wait(1).to({x:425.3,y:157.25},0).wait(1).to({x:435.25,y:156.55},0).wait(1).to({x:445.2,y:155.9},0).wait(1).to({x:455.2,y:155.2},0).wait(1).to({x:465.15,y:154.55},0).wait(1).to({x:475.15,y:153.85},0).wait(1).to({x:485.1,y:153.2},0).wait(1).to({x:495.1,y:152.5},0).wait(1).to({x:505.05,y:151.85},0).wait(1).to({x:515.05,y:151.15},0).wait(1).to({x:525,y:150.5},0).wait(1).to({x:534.95,y:149.8},0).wait(1).to({x:544.95,y:149.15},0).wait(1).to({x:554.9,y:148.45},0).wait(1).to({x:564.9,y:147.75},0).wait(1).to({x:574.85,y:147.1},0).wait(1).to({x:584.85,y:146.4},0).wait(1).to({x:594.8,y:145.75},0).wait(1).to({x:604.8,y:145.05},0).wait(1).to({x:614.75,y:144.4},0).wait(1).to({x:624.7,y:143.7},0).wait(1).to({x:634.7,y:143.05},0).wait(1).to({x:644.65,y:142.35},0).wait(1).to({x:654.65,y:141.7},0).wait(1).to({x:664.6,y:141},0).wait(1).to({x:674.6,y:140.35},0).wait(1).to({x:684.55,y:139.65},0).wait(1).to({x:694.55,y:139},0).wait(371));

	// Capa_27
	this.instance_7 = new lib.fresa_1();
	this.instance_7.setTransform(245.8,169.45,1,1,0,0,0,27,28);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(615).to({x:252.6,y:171.85},0).wait(1).to({x:259.45,y:174.3},0).wait(1).to({x:266.3,y:176.75},0).wait(1).to({x:273.1,y:179.2},0).wait(1).to({x:279.95,y:181.65},0).wait(1).to({x:286.8,y:184.05},0).wait(1).to({x:293.65,y:186.5},0).wait(1).to({x:300.45,y:188.95},0).wait(1).to({x:307.3,y:191.4},0).wait(1).to({x:314.15,y:193.85},0).wait(1).to({x:321,y:196.25},0).wait(1).to({x:327.8,y:198.7},0).wait(1).to({x:334.65,y:201.15},0).wait(1).to({x:341.5,y:203.6},0).wait(1).to({x:348.35,y:206.05},0).wait(1).to({x:355.15,y:208.45},0).wait(1).to({x:362,y:210.9},0).wait(1).to({x:368.85,y:213.35},0).wait(1).to({x:375.65,y:215.8},0).wait(1).to({x:382.5,y:218.25},0).wait(1).to({x:389.35,y:220.65},0).wait(1).to({x:396.2,y:223.1},0).wait(1).to({x:403,y:225.55},0).wait(1).to({x:409.85,y:228},0).wait(1).to({x:416.7,y:230.45},0).wait(1).to({x:423.55,y:232.85},0).wait(1).to({x:430.35,y:235.3},0).wait(1).to({x:437.2,y:237.75},0).wait(1).to({x:444.05,y:240.2},0).wait(1).to({x:450.9,y:242.65},0).wait(1).to({x:457.7,y:245.05},0).wait(1).to({x:464.55,y:247.5},0).wait(1).to({x:471.4,y:249.95},0).wait(1).to({x:478.2,y:252.4},0).wait(1).to({x:485.05,y:254.85},0).wait(1).to({x:491.9,y:257.25},0).wait(1).to({x:498.75,y:259.7},0).wait(1).to({x:505.55,y:262.15},0).wait(1).to({x:512.4,y:264.6},0).wait(1).to({x:519.25,y:267.05},0).wait(1).to({x:526.1,y:269.45},0).wait(1).to({x:532.9,y:271.9},0).wait(1).to({x:539.75,y:274.35},0).wait(1).to({x:546.6,y:276.8},0).wait(1).to({x:553.45,y:279.25},0).wait(101));

	// Capa_30
	this.instance_8 = new lib.fresa_1();
	this.instance_8.setTransform(245.8,169.45,1,1,0,0,0,27,28);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(760));

	// Capa_23
	this.instance_9 = new lib.naranja_1();
	this.instance_9.setTransform(315.6,168.95,1,1,0,0,0,27,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(760));

	// Capa_21
	this.instance_10 = new lib.tres();
	this.instance_10.setTransform(719,268.8);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(275).to({alpha:0.05},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:1},0).wait(466));

	// Capa_20
	this.instance_11 = new lib.dos();
	this.instance_11.setTransform(646.55,268.8);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(255).to({alpha:0.05},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:1},0).wait(486));

	// Capa_19
	this.instance_12 = new lib.uno();
	this.instance_12.setTransform(575.9,268.8);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(235).to({alpha:0.05},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:1},0).wait(506));

	// Capa_18
	this.instance_13 = new lib.cuatro();
	this.instance_13.setTransform(507.45,268.8);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(215).to({alpha:0.05},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:1},0).wait(526));

	// Capa_17
	this.instance_14 = new lib.tres();
	this.instance_14.setTransform(435.95,268.8);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(195).to({alpha:0.05},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:1},0).wait(546));

	// Capa_16
	this.instance_15 = new lib.dos();
	this.instance_15.setTransform(719,198.8);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(175).to({alpha:0.05},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:1},0).wait(566));

	// Capa_15
	this.instance_16 = new lib.uno();
	this.instance_16.setTransform(646.55,199.8);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(155).to({alpha:0.05},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:1},0).wait(586));

	// Capa_14
	this.instance_17 = new lib.cuatro();
	this.instance_17.setTransform(575.9,199.8);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(135).to({alpha:0.05},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:1},0).wait(606));

	// Capa_13
	this.instance_18 = new lib.tres();
	this.instance_18.setTransform(506.45,198.8);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(115).to({alpha:0.05},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:1},0).wait(626));

	// Capa_22
	this.instance_19 = new lib.dos();
	this.instance_19.setTransform(435.95,198.8);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(95).to({alpha:0.05},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:1},0).wait(646));

	// Capa_12
	this.instance_20 = new lib.uno();
	this.instance_20.setTransform(719,128.8);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(75).to({alpha:0.05},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:1},0).wait(666));

	// Capa_11
	this.instance_21 = new lib.cuatro();
	this.instance_21.setTransform(646.55,128.8);
	this.instance_21.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(55).to({alpha:0.05},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:1},0).wait(686));

	// Capa_10
	this.instance_22 = new lib.tres();
	this.instance_22.setTransform(575.9,128.8);
	this.instance_22.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(35).to({alpha:0.05},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:1},0).wait(706));

	// Capa_9
	this.instance_23 = new lib.dos();
	this.instance_23.setTransform(507.45,128.8);
	this.instance_23.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(15).to({alpha:0.05},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:1},0).wait(726));

	// Capa_8
	this.instance_24 = new lib.uno();
	this.instance_24.setTransform(436.45,124.8);
	this.instance_24.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1).to({alpha:0.0714},0).wait(1).to({alpha:0.1429},0).wait(1).to({alpha:0.2143},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.3571},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.6429},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.7857},0).wait(1).to({alpha:0.8571},0).wait(1).to({alpha:0.9286},0).wait(1).to({alpha:1},0).wait(746));

	// Capa_7
	this.instance_25 = new lib.naranja_1();
	this.instance_25.setTransform(694.55,279.25,1,1,0,0,0,27,27.5);

	this.instance_26 = new lib.naranja_1();
	this.instance_26.setTransform(413.45,278.75,1,1,0,0,0,27,27.5);

	this.instance_27 = new lib.naranja_1();
	this.instance_27.setTransform(483.4,208.8,1,1,0,0,0,27,27.5);

	this.instance_28 = new lib.naranja_1();
	this.instance_28.setTransform(553.45,139.5,1,1,0,0,0,27,27.5);

	this.instance_29 = new lib.pera_1();
	this.instance_29.setTransform(482.4,279.25,1,1,0,0,0,26,26);

	this.instance_30 = new lib.uva_1();
	this.instance_30.setTransform(411.95,209.8,1,1,0,0,0,29.5,23.5);

	this.instance_31 = new lib.fresa_1();
	this.instance_31.setTransform(623.45,209.3,1,1,0,0,0,27,28);

	this.instance_32 = new lib.pera_1();
	this.instance_32.setTransform(623.45,138,1,1,0,0,0,26,26);

	this.instance_33 = new lib.uva_1();
	this.instance_33.setTransform(483.45,140.5,1,1,0,0,0,29.5,23.5);

	this.instance_34 = new lib.fresa_1();
	this.instance_34.setTransform(413.45,136,1,1,0,0,0,27,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25}]}).wait(760));

	// Capa_5
	this.instance_35 = new lib.Símbolo3();
	this.instance_35.setTransform(623.45,279.75);
	this.instance_35.alpha = 0.8984;

	this.instance_36 = new lib.Símbolo3();
	this.instance_36.setTransform(483.45,279.45);
	this.instance_36.alpha = 0.8984;

	this.instance_37 = new lib.Símbolo3();
	this.instance_37.setTransform(693.45,209.75);
	this.instance_37.alpha = 0.8984;

	this.instance_38 = new lib.Símbolo3();
	this.instance_38.setTransform(553.45,209.45);
	this.instance_38.alpha = 0.8984;

	this.instance_39 = new lib.Símbolo3();
	this.instance_39.setTransform(413.45,209.45);
	this.instance_39.alpha = 0.8984;

	this.instance_40 = new lib.Símbolo3();
	this.instance_40.setTransform(483.45,139.45);
	this.instance_40.alpha = 0.8984;

	this.instance_41 = new lib.Símbolo3();
	this.instance_41.setTransform(623.45,139.75);
	this.instance_41.alpha = 0.8984;

	this.instance_42 = new lib.Símbolo2();
	this.instance_42.setTransform(623.45,209.45);
	this.instance_42.alpha = 0.8984;

	this.instance_43 = new lib.Símbolo2();
	this.instance_43.setTransform(483.45,209.45);
	this.instance_43.alpha = 0.8984;

	this.instance_44 = new lib.Símbolo2();
	this.instance_44.setTransform(693.45,279.45);
	this.instance_44.alpha = 0.8984;

	this.instance_45 = new lib.Símbolo2();
	this.instance_45.setTransform(553.45,279.45);
	this.instance_45.alpha = 0.8984;

	this.instance_46 = new lib.Símbolo2();
	this.instance_46.setTransform(413.45,279.45);
	this.instance_46.alpha = 0.8984;

	this.instance_47 = new lib.Símbolo2();
	this.instance_47.setTransform(693.45,139.45);
	this.instance_47.alpha = 0.8984;

	this.instance_48 = new lib.Símbolo2();
	this.instance_48.setTransform(553.45,139.45);
	this.instance_48.alpha = 0.8984;

	this.instance_49 = new lib.Símbolo2();
	this.instance_49.setTransform(413.45,139.45);
	this.instance_49.alpha = 0.8984;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35}]}).wait(760));

	// Capa_3
	this.text = new cjs.Text("completa los patrones arrastrando las frutas al lugar que les corresponde", "22px 'Carton Six'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 509;
	this.text.parent = this;
	this.text.setTransform(467.5,34.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(760));

	// Capa_2
	this.instance_50 = new lib.soga1();
	this.instance_50.setTransform(367,94);

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(760));

	// Capa_4
	this.instance_51 = new lib.tabla();
	this.instance_51.setTransform(199,94,0.9306,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(760));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(199,32.8,568,293.2);


(lib.ind = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_6
	this.rep2 = new lib.rep2();
	this.rep2.name = "rep2";
	this.rep2.setTransform(142.4,238,1,1,0,0,0,87.4,136.1);

	this.timeline.addTween(cjs.Tween.get(this.rep2).wait(1));

	// Capa_4
	this.rep1 = new lib.rep1();
	this.rep1.name = "rep1";
	this.rep1.setTransform(142.6,237.8,1,1,0,0,0,87.6,136.3);

	this.timeline.addTween(cjs.Tween.get(this.rep1).wait(1));

	// Capa_3
	this.instance = new lib.uva_1();
	this.instance.setTransform(84.5,283.4,1,1,0,0,0,29.5,23.5);

	this.instance_1 = new lib.platano_1();
	this.instance_1.setTransform(85,207.85,1,1,0,0,0,29,27);

	this.instance_2 = new lib.pera_1();
	this.instance_2.setTransform(190.5,131.35,1,1,0,0,0,26,26);

	this.instance_3 = new lib.naranja_1();
	this.instance_3.setTransform(203,282.85,1,1,0,0,0,27,27.5);

	this.instance_4 = new lib.manzana_1();
	this.instance_4.setTransform(91.05,131.4,1,1,0,0,0,24,29.5);

	this.instance_5 = new lib.kiwi_1();
	this.instance_5.setTransform(92,350.85,1,1,0,0,0,28,23);

	this.instance_6 = new lib.fresa_1();
	this.instance_6.setTransform(203,206.85,1,1,0,0,0,27,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Capa_2
	this.txt_ind = new cjs.Text("COMPLETA EL PATRÓN ARRASTRANDO LOS OBJETOS QUE FALTAN EN LA CUADRILLA", "18px 'Carton Six'", "#000066");
	this.txt_ind.name = "txt_ind";
	this.txt_ind.textAlign = "center";
	this.txt_ind.lineHeight = 22;
	this.txt_ind.lineWidth = 207;
	this.txt_ind.parent = this;
	this.txt_ind.setTransform(144,29.95);

	this.timeline.addTween(cjs.Tween.get(this.txt_ind).wait(1));

	// Capa_1
	this.instance_7 = new lib.panel();

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ind, new cjs.Rectangle(0,0,286,502), null);


(lib.esc_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// btn_repetir
	this.btn_reload = new lib.btn_repetir();
	this.btn_reload.name = "btn_reload";
	this.btn_reload.setTransform(36.75,207);
	new cjs.ButtonHelper(this.btn_reload, 0, 1, 2, false, new lib.btn_repetir(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_reload).wait(1));

	// nota_f
	this.nota_f = new lib.nota_fin_1();
	this.nota_f.name = "nota_f";
	this.nota_f.setTransform(387.25,347.5,1,1,0,0,0,113.5,55.1);

	this.timeline.addTween(cjs.Tween.get(this.nota_f).wait(1));

	// tiagopro
	this.instance = new lib.tiagopro();
	this.instance.setTransform(637.55,332,0.877,0.877,0,0,0,43.5,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// dest
	this.dst = new lib.destellos();
	this.dst.name = "dst";
	this.dst.setTransform(459.35,347.45,1,1,0,0,0,478.5,387.9);

	this.timeline.addTween(cjs.Tween.get(this.dst).wait(1));

	// fnd
	this.instance_1 = new lib.fondo_E2();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.esc_3, new cjs.Rectangle(0,-2.9,960,700.8), null);


(lib.esc_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// btn_comenzar
	this.btn_comenzar = new lib.btn_comenzar();
	this.btn_comenzar.name = "btn_comenzar";
	this.btn_comenzar.setTransform(374.4,475.4);
	new cjs.ButtonHelper(this.btn_comenzar, 0, 1, 2, false, new lib.btn_comenzar(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_comenzar).wait(1));

	// tiagopro
	this.instance = new lib.tiagopro();
	this.instance.setTransform(136.35,338.85,0.8569,0.8569,0,0,180,43.2,25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// anu
	this.instance_1 = new lib.nota_ing();
	this.instance_1.setTransform(396.9,299.55,1,1,0,0,0,393,229);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// fndo
	this.instance_2 = new lib.fondo_E1();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.esc_1, new cjs.Rectangle(0,0,960,560), null);


(lib.cuadrilla2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_9
	this.obj = new lib.capa2();
	this.obj.name = "obj";
	this.obj.setTransform(353,257.8,1,1,0,0,0,222.6,240.2);

	this.timeline.addTween(cjs.Tween.get(this.obj).wait(1));

	// Capa_5
	this.instance = new lib.kiwi_1();
	this.instance.setTransform(606,394.9,1,1,0,0,0,28,23);

	this.instance_1 = new lib.uva_1();
	this.instance_1.setTransform(606.5,115.6,1,1,0,0,0,29.5,23.5);

	this.instance_2 = new lib.platano_1();
	this.instance_2.setTransform(256.5,394.85,1,1,0,0,0,29,27);

	this.instance_3 = new lib.manzana_1();
	this.instance_3.setTransform(116.2,185.25,1,1,0,0,0,24,29.5);

	this.instance_4 = new lib.kiwi_1();
	this.instance_4.setTransform(116.5,395,1,1,0,0,0,28,23);

	this.instance_5 = new lib.uva_1();
	this.instance_5.setTransform(46.5,395.5,1,1,0,0,0,29.5,23.5);

	this.instance_6 = new lib.platano_1();
	this.instance_6.setTransform(115.55,465.8,1,1,0,0,0,29,27);

	this.instance_7 = new lib.manzana_1();
	this.instance_7.setTransform(46.65,466.3,1,1,0,0,0,24,29.5);

	this.instance_8 = new lib.uva_1();
	this.instance_8.setTransform(536.15,395.4,1,1,0,0,0,29.5,23.5);

	this.instance_9 = new lib.fresa_1();
	this.instance_9.setTransform(466.15,395.85,1,1,0,0,0,27,28);

	this.instance_10 = new lib.platano_1();
	this.instance_10.setTransform(607,465.8,1,1,0,0,0,29,27);

	this.instance_11 = new lib.kiwi_1();
	this.instance_11.setTransform(465.95,465.95,1,1,0,0,0,28,23);

	this.instance_12 = new lib.uva_1();
	this.instance_12.setTransform(395.95,466.45,1,1,0,0,0,29.5,23.5);

	this.instance_13 = new lib.fresa_1();
	this.instance_13.setTransform(325.95,464.8,1,1,0,0,0,27,28);

	this.instance_14 = new lib.pera_1();
	this.instance_14.setTransform(326,394.9,1,1,0,0,0,26,26);

	this.instance_15 = new lib.platano_1();
	this.instance_15.setTransform(396.05,325,1,1,0,0,0,29,27);

	this.instance_16 = new lib.kiwi_1();
	this.instance_16.setTransform(256.05,325.15,1,1,0,0,0,28,23);

	this.instance_17 = new lib.fresa_1();
	this.instance_17.setTransform(116.05,324,1,1,0,0,0,27,28);

	this.instance_18 = new lib.naranja_1();
	this.instance_18.setTransform(535.95,325.55,1,1,0,0,0,27,27.5);

	this.instance_19 = new lib.pera_1();
	this.instance_19.setTransform(466.5,325.15,1,1,0,0,0,26,26);

	this.instance_20 = new lib.platano_1();
	this.instance_20.setTransform(537.4,254.7,1,1,0,0,0,29,27);

	this.instance_21 = new lib.manzana_1();
	this.instance_21.setTransform(467.45,255.2,1,1,0,0,0,24,29.5);

	this.instance_22 = new lib.uva_1();
	this.instance_22.setTransform(327.4,255.35,1,1,0,0,0,29.5,23.5);

	this.instance_23 = new lib.fresa_1();
	this.instance_23.setTransform(257.4,253.7,1,1,0,0,0,27,28);

	this.instance_24 = new lib.naranja_1();
	this.instance_24.setTransform(45.95,325.6,1,1,0,0,0,27,27.5);

	this.instance_25 = new lib.pera_1();
	this.instance_25.setTransform(185.95,465.95,1,1,0,0,0,26,26);

	this.instance_26 = new lib.pera_1();
	this.instance_26.setTransform(606.9,254.85,1,1,0,0,0,26,26);

	this.instance_27 = new lib.platano_1();
	this.instance_27.setTransform(186.15,184.85,1,1,0,0,0,29,27);

	this.instance_28 = new lib.manzana_1();
	this.instance_28.setTransform(605.95,185.25,1,1,0,0,0,24,29.5);

	this.instance_29 = new lib.kiwi_1();
	this.instance_29.setTransform(46,185.95,1,1,0,0,0,28,23);

	this.instance_30 = new lib.uva_1();
	this.instance_30.setTransform(465.9,186.45,1,1,0,0,0,29.5,23.5);

	this.instance_31 = new lib.fresa_1();
	this.instance_31.setTransform(395.9,184.8,1,1,0,0,0,27,28);

	this.instance_32 = new lib.naranja_1();
	this.instance_32.setTransform(327,185.35,1,1,0,0,0,27,27.5);

	this.instance_33 = new lib.pera_1();
	this.instance_33.setTransform(117.15,254.85,1,1,0,0,0,26,26);

	this.instance_34 = new lib.platano_1();
	this.instance_34.setTransform(326.1,113.9,1,1,0,0,0,29,27);

	this.instance_35 = new lib.kiwi_1();
	this.instance_35.setTransform(186.1,114.05,1,1,0,0,0,28,23);

	this.instance_36 = new lib.uva_1();
	this.instance_36.setTransform(116.1,114.55,1,1,0,0,0,29.5,23.5);

	this.instance_37 = new lib.naranja_1();
	this.instance_37.setTransform(466.15,114.35,1,1,0,0,0,27,27.5);

	this.instance_38 = new lib.fresa_1();
	this.instance_38.setTransform(47,114.85,1,1,0,0,0,27,28);

	this.instance_39 = new lib.pera_1();
	this.instance_39.setTransform(536.05,44.9,1,1,0,0,0,26,26);

	this.instance_40 = new lib.platano_1();
	this.instance_40.setTransform(466,44.9,1,1,0,0,0,29,27);

	this.instance_41 = new lib.manzana_1();
	this.instance_41.setTransform(396.05,45.4,1,1,0,0,0,24,29.5);

	this.instance_42 = new lib.kiwi_1();
	this.instance_42.setTransform(326,45.05,1,1,0,0,0,28,23);

	this.instance_43 = new lib.uva_1();
	this.instance_43.setTransform(256,45.55,1,1,0,0,0,29.5,23.5);

	this.instance_44 = new lib.fresa_1();
	this.instance_44.setTransform(186,43.9,1,1,0,0,0,27,28);

	this.instance_45 = new lib.naranja_1();
	this.instance_45.setTransform(116.05,43.4,1,1,0,0,0,27,27.5);

	this.instance_46 = new lib.pera_1();
	this.instance_46.setTransform(46,44.9,1,1,0,0,0,26,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Capa_4
	this.cf1 = new lib.box_colision();
	this.cf1.name = "cf1";
	this.cf1.setTransform(606.1,44.85,1.1667,1.2727,0,0,0,30.1,27.5);
	this.cf1.visible = false;

	this.cf4 = new lib.box_colision();
	this.cf4.name = "cf4";
	this.cf4.setTransform(536.1,115,1.1667,1.2727,0,0,0,30.1,27.6);
	this.cf4.visible = false;

	this.cf3 = new lib.box_colision();
	this.cf3.name = "cf3";
	this.cf3.setTransform(396.1,115,1.1667,1.2727,0,0,0,30.1,27.6);
	this.cf3.visible = false;

	this.cf2 = new lib.box_colision();
	this.cf2.name = "cf2";
	this.cf2.setTransform(256,115,1.1667,1.2727,0,0,0,30,27.6);
	this.cf2.visible = false;

	this.cf6 = new lib.box_colision();
	this.cf6.name = "cf6";
	this.cf6.setTransform(536.1,185,1.1667,1.2727,0,0,0,30.1,27.6);
	this.cf6.visible = false;

	this.cf5 = new lib.box_colision();
	this.cf5.name = "cf5";
	this.cf5.setTransform(256,185,1.1667,1.2727,0,0,0,30,27.6);
	this.cf5.visible = false;

	this.cf9 = new lib.box_colision();
	this.cf9.name = "cf9";
	this.cf9.setTransform(396.1,255,1.1667,1.2727,0,0,0,30.1,27.6);
	this.cf9.visible = false;

	this.cf8 = new lib.box_colision();
	this.cf8.name = "cf8";
	this.cf8.setTransform(186.1,255,1.1667,1.2727,0,0,0,30.1,27.6);
	this.cf8.visible = false;

	this.cf7 = new lib.box_colision();
	this.cf7.name = "cf7";
	this.cf7.setTransform(46,255,1.1667,1.2727,0,0,0,30,27.6);
	this.cf7.visible = false;

	this.cf12 = new lib.box_colision();
	this.cf12.name = "cf12";
	this.cf12.setTransform(606.1,325,1.1667,1.2727,0,0,0,30.1,27.6);
	this.cf12.visible = false;

	this.cf11 = new lib.box_colision();
	this.cf11.name = "cf11";
	this.cf11.setTransform(326.1,325,1.1667,1.2727,0,0,0,30.1,27.6);
	this.cf11.visible = false;

	this.cf10 = new lib.box_colision();
	this.cf10.name = "cf10";
	this.cf10.setTransform(186.1,325,1.1667,1.2727,0,0,0,30.1,27.6);
	this.cf10.visible = false;

	this.cf14 = new lib.box_colision();
	this.cf14.name = "cf14";
	this.cf14.setTransform(396.1,395,1.1667,1.2727,0,0,0,30.1,27.6);
	this.cf14.visible = false;

	this.cf13 = new lib.box_colision();
	this.cf13.name = "cf13";
	this.cf13.setTransform(186.1,395,1.1667,1.2727,0,0,0,30.1,27.6);
	this.cf13.visible = false;

	this.cf16 = new lib.box_colision();
	this.cf16.name = "cf16";
	this.cf16.setTransform(536.1,465,1.1667,1.2727,0,0,0,30.1,27.6);
	this.cf16.visible = false;

	this.cf15 = new lib.box_colision();
	this.cf15.name = "cf15";
	this.cf15.setTransform(256,465,1.1667,1.2727,0,0,0,30,27.6);
	this.cf15.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cf15},{t:this.cf16},{t:this.cf13},{t:this.cf14},{t:this.cf10},{t:this.cf11},{t:this.cf12},{t:this.cf7},{t:this.cf8},{t:this.cf9},{t:this.cf5},{t:this.cf6},{t:this.cf2},{t:this.cf3},{t:this.cf4},{t:this.cf1}]}).wait(1));

	// Capa_1
	this.instance_47 = new lib.soga();

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(1));

	// Capa_2
	this.instance_48 = new lib.cuad2_f();
	this.instance_48.setTransform(606,464.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_48.alpha = 0.8984;

	this.instance_49 = new lib.Símbolo3();
	this.instance_49.setTransform(536,464.85);
	this.instance_49.alpha = 0.8984;

	this.instance_50 = new lib.cuad2_f();
	this.instance_50.setTransform(466,464.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_50.alpha = 0.8984;

	this.instance_51 = new lib.Símbolo3();
	this.instance_51.setTransform(396,464.85);
	this.instance_51.alpha = 0.8984;

	this.instance_52 = new lib.cuad2_f();
	this.instance_52.setTransform(326,464.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_52.alpha = 0.8984;

	this.instance_53 = new lib.Símbolo3();
	this.instance_53.setTransform(256,464.85);
	this.instance_53.alpha = 0.8984;

	this.instance_54 = new lib.cuad2_f();
	this.instance_54.setTransform(186,464.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_54.alpha = 0.8984;

	this.instance_55 = new lib.Símbolo3();
	this.instance_55.setTransform(116,464.85);
	this.instance_55.alpha = 0.8984;

	this.instance_56 = new lib.cuad2_f();
	this.instance_56.setTransform(46,464.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_56.alpha = 0.8984;

	this.instance_57 = new lib.Símbolo3();
	this.instance_57.setTransform(606,394.85);
	this.instance_57.alpha = 0.8984;

	this.instance_58 = new lib.cuad2_f();
	this.instance_58.setTransform(536,394.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_58.alpha = 0.8984;

	this.instance_59 = new lib.Símbolo3();
	this.instance_59.setTransform(466,394.85);
	this.instance_59.alpha = 0.8984;

	this.instance_60 = new lib.cuad2_f();
	this.instance_60.setTransform(396,394.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_60.alpha = 0.8984;

	this.instance_61 = new lib.Símbolo3();
	this.instance_61.setTransform(326,394.85);
	this.instance_61.alpha = 0.8984;

	this.instance_62 = new lib.cuad2_f();
	this.instance_62.setTransform(256,394.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_62.alpha = 0.8984;

	this.instance_63 = new lib.Símbolo3();
	this.instance_63.setTransform(186,394.85);
	this.instance_63.alpha = 0.8984;

	this.instance_64 = new lib.cuad2_f();
	this.instance_64.setTransform(116,394.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_64.alpha = 0.8984;

	this.instance_65 = new lib.Símbolo3();
	this.instance_65.setTransform(46,394.85);
	this.instance_65.alpha = 0.8984;

	this.instance_66 = new lib.cuad2_f();
	this.instance_66.setTransform(606,324.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_66.alpha = 0.8984;

	this.instance_67 = new lib.Símbolo3();
	this.instance_67.setTransform(536,324.85);
	this.instance_67.alpha = 0.8984;

	this.instance_68 = new lib.cuad2_f();
	this.instance_68.setTransform(466,324.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_68.alpha = 0.8984;

	this.instance_69 = new lib.Símbolo3();
	this.instance_69.setTransform(396,324.85);
	this.instance_69.alpha = 0.8984;

	this.instance_70 = new lib.cuad2_f();
	this.instance_70.setTransform(326,324.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_70.alpha = 0.8984;

	this.instance_71 = new lib.Símbolo3();
	this.instance_71.setTransform(256,324.85);
	this.instance_71.alpha = 0.8984;

	this.instance_72 = new lib.cuad2_f();
	this.instance_72.setTransform(186,324.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_72.alpha = 0.8984;

	this.instance_73 = new lib.Símbolo3();
	this.instance_73.setTransform(116,324.85);
	this.instance_73.alpha = 0.8984;

	this.instance_74 = new lib.cuad2_f();
	this.instance_74.setTransform(46,324.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_74.alpha = 0.8984;

	this.instance_75 = new lib.Símbolo3();
	this.instance_75.setTransform(606,254.85);
	this.instance_75.alpha = 0.8984;

	this.instance_76 = new lib.cuad2_f();
	this.instance_76.setTransform(536,254.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_76.alpha = 0.8984;

	this.instance_77 = new lib.Símbolo3();
	this.instance_77.setTransform(466,254.85);
	this.instance_77.alpha = 0.8984;

	this.instance_78 = new lib.cuad2_f();
	this.instance_78.setTransform(396,254.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_78.alpha = 0.8984;

	this.instance_79 = new lib.Símbolo3();
	this.instance_79.setTransform(326,254.85);
	this.instance_79.alpha = 0.8984;

	this.instance_80 = new lib.cuad2_f();
	this.instance_80.setTransform(256,254.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_80.alpha = 0.8984;

	this.instance_81 = new lib.Símbolo3();
	this.instance_81.setTransform(186,254.85);
	this.instance_81.alpha = 0.8984;

	this.instance_82 = new lib.cuad2_f();
	this.instance_82.setTransform(116,254.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_82.alpha = 0.8984;

	this.instance_83 = new lib.Símbolo3();
	this.instance_83.setTransform(46,254.85);
	this.instance_83.alpha = 0.8984;

	this.instance_84 = new lib.cuad2_f();
	this.instance_84.setTransform(606,184.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_84.alpha = 0.8984;

	this.instance_85 = new lib.Símbolo3();
	this.instance_85.setTransform(536,184.85);
	this.instance_85.alpha = 0.8984;

	this.instance_86 = new lib.cuad2_f();
	this.instance_86.setTransform(466,184.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_86.alpha = 0.8984;

	this.instance_87 = new lib.Símbolo3();
	this.instance_87.setTransform(396,184.85);
	this.instance_87.alpha = 0.8984;

	this.instance_88 = new lib.cuad2_f();
	this.instance_88.setTransform(326,184.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_88.alpha = 0.8984;

	this.instance_89 = new lib.Símbolo3();
	this.instance_89.setTransform(256,184.85);
	this.instance_89.alpha = 0.8984;

	this.instance_90 = new lib.cuad2_f();
	this.instance_90.setTransform(186,184.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_90.alpha = 0.8984;

	this.instance_91 = new lib.Símbolo3();
	this.instance_91.setTransform(116,184.85);
	this.instance_91.alpha = 0.8984;

	this.instance_92 = new lib.cuad2_f();
	this.instance_92.setTransform(46,184.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_92.alpha = 0.8984;

	this.instance_93 = new lib.Símbolo3();
	this.instance_93.setTransform(606,114.85);
	this.instance_93.alpha = 0.8984;

	this.instance_94 = new lib.cuad2_f();
	this.instance_94.setTransform(536,114.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_94.alpha = 0.8984;

	this.instance_95 = new lib.Símbolo3();
	this.instance_95.setTransform(466,114.85);
	this.instance_95.alpha = 0.8984;

	this.instance_96 = new lib.cuad2_f();
	this.instance_96.setTransform(396,114.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_96.alpha = 0.8984;

	this.instance_97 = new lib.Símbolo3();
	this.instance_97.setTransform(326,114.85);
	this.instance_97.alpha = 0.8984;

	this.instance_98 = new lib.cuad2_f();
	this.instance_98.setTransform(256,114.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_98.alpha = 0.8984;

	this.instance_99 = new lib.Símbolo3();
	this.instance_99.setTransform(186,114.85);
	this.instance_99.alpha = 0.8984;

	this.instance_100 = new lib.cuad2_f();
	this.instance_100.setTransform(116,114.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_100.alpha = 0.8984;

	this.instance_101 = new lib.Símbolo3();
	this.instance_101.setTransform(46,114.85);
	this.instance_101.alpha = 0.8984;

	this.instance_102 = new lib.cuad2_f();
	this.instance_102.setTransform(606,44.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_102.alpha = 0.8984;

	this.instance_103 = new lib.Símbolo3();
	this.instance_103.setTransform(536,44.85);
	this.instance_103.alpha = 0.8984;

	this.instance_104 = new lib.cuad2_f();
	this.instance_104.setTransform(466,44.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_104.alpha = 0.8984;

	this.instance_105 = new lib.Símbolo3();
	this.instance_105.setTransform(396,44.85);
	this.instance_105.alpha = 0.8984;

	this.instance_106 = new lib.cuad2_f();
	this.instance_106.setTransform(326,44.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_106.alpha = 0.8984;

	this.instance_107 = new lib.Símbolo3();
	this.instance_107.setTransform(256,44.85);
	this.instance_107.alpha = 0.8984;

	this.instance_108 = new lib.cuad2_f();
	this.instance_108.setTransform(186,44.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_108.alpha = 0.8984;

	this.instance_109 = new lib.Símbolo3();
	this.instance_109.setTransform(116,44.85);
	this.instance_109.alpha = 0.8984;

	this.instance_110 = new lib.cuad2_f();
	this.instance_110.setTransform(46,44.9,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_110.alpha = 0.8984;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cuadrilla2, new cjs.Rectangle(0,0,653,512), null);


(lib.cuadrilla1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_5
	this.obj = new lib.capa1();
	this.obj.name = "obj";
	this.obj.setTransform(351.15,216.65,1,1,0,0,0,288.6,179.4);

	this.timeline.addTween(cjs.Tween.get(this.obj).wait(1));

	// Capa_4
	this.instance = new lib.pera_1();
	this.instance.setTransform(117.15,467.15,1,1,0,0,0,26,26);

	this.instance_1 = new lib.pera_1();
	this.instance_1.setTransform(256.65,327.55,1,1,0,0,0,26,26);

	this.instance_2 = new lib.pera_1();
	this.instance_2.setTransform(327.15,257.65,1,1,0,0,0,26,26);

	this.instance_3 = new lib.pera_1();
	this.instance_3.setTransform(397.15,186.55,1,1,0,0,0,26,26);

	this.instance_4 = new lib.pera_1();
	this.instance_4.setTransform(466.65,117.05,1,1,0,0,0,26,26);

	this.instance_5 = new lib.pera_1();
	this.instance_5.setTransform(536.65,46.7,1,1,0,0,0,26,26);

	this.instance_6 = new lib.naranja_1();
	this.instance_6.setTransform(46.65,467.65,1,1,0,0,0,27,27.5);

	this.instance_7 = new lib.naranja_1();
	this.instance_7.setTransform(117.15,397.55,1,1,0,0,0,27,27.5);

	this.instance_8 = new lib.naranja_1();
	this.instance_8.setTransform(327.15,187.05,1,1,0,0,0,27,27.5);

	this.instance_9 = new lib.naranja_1();
	this.instance_9.setTransform(397.15,116.55,1,1,0,0,0,27,27.5);

	this.instance_10 = new lib.naranja_1();
	this.instance_10.setTransform(466.65,46.2,1,1,0,0,0,27,27.5);

	this.instance_11 = new lib.fresa_1();
	this.instance_11.setTransform(187.15,467.15,1,1,0,0,0,27,28);

	this.instance_12 = new lib.fresa_1();
	this.instance_12.setTransform(256.65,397.05,1,1,0,0,0,27,28);

	this.instance_13 = new lib.fresa_1();
	this.instance_13.setTransform(397.15,256.65,1,1,0,0,0,27,28);

	this.instance_14 = new lib.fresa_1();
	this.instance_14.setTransform(536.65,117.05,1,1,0,0,0,27,28);

	this.instance_15 = new lib.fresa_1();
	this.instance_15.setTransform(606.65,46.7,1,1,0,0,0,27,28);

	this.instance_16 = new lib.manzana_1();
	this.instance_16.setTransform(536.65,466.65,1,1,0,0,0,24,29.5);

	this.instance_17 = new lib.manzana_1();
	this.instance_17.setTransform(606.65,397.55,1,1,0,0,0,24,29.5);

	this.instance_18 = new lib.manzana_1();
	this.instance_18.setTransform(116.65,326.05,1,1,0,0,0,24,29.5);

	this.instance_19 = new lib.manzana_1();
	this.instance_19.setTransform(187.15,257.15,1,1,0,0,0,24,29.5);

	this.instance_20 = new lib.manzana_1();
	this.instance_20.setTransform(327.15,116.55,1,1,0,0,0,24,29.5);

	this.instance_21 = new lib.manzana_1();
	this.instance_21.setTransform(396.65,46.2,1,1,0,0,0,24,29.5);

	this.instance_22 = new lib.kiwi_1();
	this.instance_22.setTransform(466.65,467.2,1,1,0,0,0,28,23);

	this.instance_23 = new lib.kiwi_1();
	this.instance_23.setTransform(606.65,326.55,1,1,0,0,0,28,23);

	this.instance_24 = new lib.kiwi_1();
	this.instance_24.setTransform(46.65,327.55,1,1,0,0,0,28,23);

	this.instance_25 = new lib.kiwi_1();
	this.instance_25.setTransform(187.15,186.55,1,1,0,0,0,28,23);

	this.instance_26 = new lib.kiwi_1();
	this.instance_26.setTransform(256.65,117.05,1,1,0,0,0,28,23);

	this.instance_27 = new lib.kiwi_1();
	this.instance_27.setTransform(327.15,47.15,1,1,0,0,0,28,23);

	this.instance_28 = new lib.uva_1();
	this.instance_28.setTransform(327.65,467.7,1,1,0,0,0,29.5,23.5);

	this.instance_29 = new lib.uva_1();
	this.instance_29.setTransform(327.65,397.55,1,1,0,0,0,29.5,23.5);

	this.instance_30 = new lib.uva_1();
	this.instance_30.setTransform(397.65,397.55,1,1,0,0,0,29.5,23.5);

	this.instance_31 = new lib.uva_1();
	this.instance_31.setTransform(397.65,327.05,1,1,0,0,0,29.5,23.5);

	this.instance_32 = new lib.uva_1();
	this.instance_32.setTransform(467.15,257.15,1,1,0,0,0,29.5,23.5);

	this.instance_33 = new lib.uva_1();
	this.instance_33.setTransform(607.15,187.05,1,1,0,0,0,29.5,23.5);

	this.instance_34 = new lib.uva_1();
	this.instance_34.setTransform(537.15,187.05,1,1,0,0,0,29.5,23.5);

	this.instance_35 = new lib.uva_1();
	this.instance_35.setTransform(47.15,186.05,1,1,0,0,0,29.5,23.5);

	this.instance_36 = new lib.uva_1();
	this.instance_36.setTransform(47.15,116.55,1,1,0,0,0,29.5,23.5);

	this.instance_37 = new lib.platano_1();
	this.instance_37.setTransform(466.65,397.05,1,1,0,0,0,29,27);

	this.instance_38 = new lib.platano_1();
	this.instance_38.setTransform(536.65,326.55,1,1,0,0,0,29,27);

	this.instance_39 = new lib.platano_1();
	this.instance_39.setTransform(606.65,256.65,1,1,0,0,0,29,27);

	this.instance_40 = new lib.platano_1();
	this.instance_40.setTransform(46.65,256.65,1,1,0,0,0,29,27);

	this.instance_41 = new lib.platano_1();
	this.instance_41.setTransform(117.15,186.55,1,1,0,0,0,29,27);

	this.instance_42 = new lib.platano_1();
	this.instance_42.setTransform(187.15,117.05,1,1,0,0,0,29,27);

	this.instance_43 = new lib.platano_1();
	this.instance_43.setTransform(256.65,46.7,1,1,0,0,0,29,27);

	this.instance_44 = new lib.uva_1();
	this.instance_44.setTransform(186.65,46.65,1,1,0,0,0,29.5,23.5);

	this.instance_45 = new lib.uva_1();
	this.instance_45.setTransform(116.65,46.65,1,1,0,0,0,29.5,23.5);

	this.instance_46 = new lib.fresa_1();
	this.instance_46.setTransform(46.65,46.7,1,1,0,0,0,27,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Capa_3
	this.cf2 = new lib.box_colision();
	this.cf2.name = "cf2";
	this.cf2.setTransform(606.65,116.8,1.1667,1.2727,0,0,0,30.1,27.6);
	this.cf2.visible = false;

	this.cf1 = new lib.box_colision();
	this.cf1.name = "cf1";
	this.cf1.setTransform(116.65,116.8,1.1667,1.2727,0,0,0,30.1,27.6);
	this.cf1.visible = false;

	this.cf4 = new lib.box_colision();
	this.cf4.name = "cf4";
	this.cf4.setTransform(466.55,186.8,1.1667,1.2727,0,0,0,30,27.6);
	this.cf4.visible = false;

	this.cf3 = new lib.box_colision();
	this.cf3.name = "cf3";
	this.cf3.setTransform(256.55,186.8,1.1667,1.2727,0,0,0,30,27.6);
	this.cf3.visible = false;

	this.cf7 = new lib.box_colision();
	this.cf7.name = "cf7";
	this.cf7.setTransform(536.65,256.8,1.1667,1.2727,0,0,0,30.1,27.6);
	this.cf7.visible = false;

	this.cf6 = new lib.box_colision();
	this.cf6.name = "cf6";
	this.cf6.setTransform(256.55,256.8,1.1667,1.2727,0,0,0,30,27.6);
	this.cf6.visible = false;

	this.cf5 = new lib.box_colision();
	this.cf5.name = "cf5";
	this.cf5.setTransform(116.65,256.8,1.1667,1.2727,0,0,0,30.1,27.6);
	this.cf5.visible = false;

	this.cf10 = new lib.box_colision();
	this.cf10.name = "cf10";
	this.cf10.setTransform(466.55,326.8,1.1667,1.2727,0,0,0,30,27.6);
	this.cf10.visible = false;

	this.cf9 = new lib.box_colision();
	this.cf9.name = "cf9";
	this.cf9.setTransform(326.65,326.8,1.1667,1.2727,0,0,0,30.1,27.6);
	this.cf9.visible = false;

	this.cf8 = new lib.box_colision();
	this.cf8.name = "cf8";
	this.cf8.setTransform(186.65,326.8,1.1667,1.2727,0,0,0,30.1,27.6);
	this.cf8.visible = false;

	this.cf13 = new lib.box_colision();
	this.cf13.name = "cf13";
	this.cf13.setTransform(536.65,396.8,1.1667,1.2727,0,0,0,30.1,27.6);
	this.cf13.visible = false;

	this.cf12 = new lib.box_colision();
	this.cf12.name = "cf12";
	this.cf12.setTransform(186.65,396.8,1.1667,1.2727,0,0,0,30.1,27.6);
	this.cf12.visible = false;

	this.cf11 = new lib.box_colision();
	this.cf11.name = "cf11";
	this.cf11.setTransform(46.55,396.8,1.1667,1.2727,0,0,0,30,27.6);
	this.cf11.visible = false;

	this.cf16 = new lib.box_colision();
	this.cf16.name = "cf16";
	this.cf16.setTransform(606.65,466.8,1.1667,1.2727,0,0,0,30.1,27.6);
	this.cf16.visible = false;

	this.cf15 = new lib.box_colision();
	this.cf15.name = "cf15";
	this.cf15.setTransform(396.65,466.8,1.1667,1.2727,0,0,0,30.1,27.6);
	this.cf15.visible = false;

	this.cf14 = new lib.box_colision();
	this.cf14.name = "cf14";
	this.cf14.setTransform(256.55,466.8,1.1667,1.2727,0,0,0,30,27.6);
	this.cf14.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cf14},{t:this.cf15},{t:this.cf16},{t:this.cf11},{t:this.cf12},{t:this.cf13},{t:this.cf8},{t:this.cf9},{t:this.cf10},{t:this.cf5},{t:this.cf6},{t:this.cf7},{t:this.cf3},{t:this.cf4},{t:this.cf1},{t:this.cf2}]}).wait(1));

	// Capa_2
	this.instance_47 = new lib.soga();

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(1));

	// Capa_1
	this.instance_48 = new lib.cuad2_f();
	this.instance_48.setTransform(606.65,466.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_48.alpha = 0.8984;

	this.instance_49 = new lib.Símbolo3();
	this.instance_49.setTransform(536.65,466.65);
	this.instance_49.alpha = 0.8984;

	this.instance_50 = new lib.cuad2_f();
	this.instance_50.setTransform(466.65,466.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_50.alpha = 0.8984;

	this.instance_51 = new lib.Símbolo3();
	this.instance_51.setTransform(396.65,466.65);
	this.instance_51.alpha = 0.8984;

	this.instance_52 = new lib.cuad2_f();
	this.instance_52.setTransform(326.65,466.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_52.alpha = 0.8984;

	this.instance_53 = new lib.Símbolo3();
	this.instance_53.setTransform(256.65,466.65);
	this.instance_53.alpha = 0.8984;

	this.instance_54 = new lib.cuad2_f();
	this.instance_54.setTransform(186.65,466.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_54.alpha = 0.8984;

	this.instance_55 = new lib.Símbolo3();
	this.instance_55.setTransform(116.65,466.65);
	this.instance_55.alpha = 0.8984;

	this.instance_56 = new lib.cuad2_f();
	this.instance_56.setTransform(46.65,466.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_56.alpha = 0.8984;

	this.instance_57 = new lib.Símbolo3();
	this.instance_57.setTransform(606.65,396.65);
	this.instance_57.alpha = 0.8984;

	this.instance_58 = new lib.cuad2_f();
	this.instance_58.setTransform(536.65,396.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_58.alpha = 0.8984;

	this.instance_59 = new lib.Símbolo3();
	this.instance_59.setTransform(466.65,396.65);
	this.instance_59.alpha = 0.8984;

	this.instance_60 = new lib.cuad2_f();
	this.instance_60.setTransform(396.65,396.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_60.alpha = 0.8984;

	this.instance_61 = new lib.Símbolo3();
	this.instance_61.setTransform(326.65,396.65);
	this.instance_61.alpha = 0.8984;

	this.instance_62 = new lib.cuad2_f();
	this.instance_62.setTransform(256.65,396.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_62.alpha = 0.8984;

	this.instance_63 = new lib.Símbolo3();
	this.instance_63.setTransform(186.65,396.65);
	this.instance_63.alpha = 0.8984;

	this.instance_64 = new lib.cuad2_f();
	this.instance_64.setTransform(116.65,396.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_64.alpha = 0.8984;

	this.instance_65 = new lib.Símbolo3();
	this.instance_65.setTransform(46.65,396.65);
	this.instance_65.alpha = 0.8984;

	this.instance_66 = new lib.cuad2_f();
	this.instance_66.setTransform(606.65,326.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_66.alpha = 0.8984;

	this.instance_67 = new lib.Símbolo3();
	this.instance_67.setTransform(536.65,326.65);
	this.instance_67.alpha = 0.8984;

	this.instance_68 = new lib.cuad2_f();
	this.instance_68.setTransform(466.65,326.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_68.alpha = 0.8984;

	this.instance_69 = new lib.Símbolo3();
	this.instance_69.setTransform(396.65,326.65);
	this.instance_69.alpha = 0.8984;

	this.instance_70 = new lib.cuad2_f();
	this.instance_70.setTransform(326.65,326.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_70.alpha = 0.8984;

	this.instance_71 = new lib.Símbolo3();
	this.instance_71.setTransform(256.65,326.65);
	this.instance_71.alpha = 0.8984;

	this.instance_72 = new lib.cuad2_f();
	this.instance_72.setTransform(186.65,326.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_72.alpha = 0.8984;

	this.instance_73 = new lib.Símbolo3();
	this.instance_73.setTransform(116.65,326.65);
	this.instance_73.alpha = 0.8984;

	this.instance_74 = new lib.cuad2_f();
	this.instance_74.setTransform(46.65,326.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_74.alpha = 0.8984;

	this.instance_75 = new lib.Símbolo3();
	this.instance_75.setTransform(606.65,256.65);
	this.instance_75.alpha = 0.8984;

	this.instance_76 = new lib.cuad2_f();
	this.instance_76.setTransform(536.65,256.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_76.alpha = 0.8984;

	this.instance_77 = new lib.Símbolo3();
	this.instance_77.setTransform(466.65,256.65);
	this.instance_77.alpha = 0.8984;

	this.instance_78 = new lib.cuad2_f();
	this.instance_78.setTransform(396.65,256.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_78.alpha = 0.8984;

	this.instance_79 = new lib.Símbolo3();
	this.instance_79.setTransform(326.65,256.65);
	this.instance_79.alpha = 0.8984;

	this.instance_80 = new lib.cuad2_f();
	this.instance_80.setTransform(256.65,256.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_80.alpha = 0.8984;

	this.instance_81 = new lib.Símbolo3();
	this.instance_81.setTransform(186.65,256.65);
	this.instance_81.alpha = 0.8984;

	this.instance_82 = new lib.cuad2_f();
	this.instance_82.setTransform(116.65,256.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_82.alpha = 0.8984;

	this.instance_83 = new lib.Símbolo3();
	this.instance_83.setTransform(46.65,256.65);
	this.instance_83.alpha = 0.8984;

	this.instance_84 = new lib.cuad2_f();
	this.instance_84.setTransform(606.65,186.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_84.alpha = 0.8984;

	this.instance_85 = new lib.Símbolo3();
	this.instance_85.setTransform(536.65,186.65);
	this.instance_85.alpha = 0.8984;

	this.instance_86 = new lib.cuad2_f();
	this.instance_86.setTransform(466.65,186.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_86.alpha = 0.8984;

	this.instance_87 = new lib.Símbolo3();
	this.instance_87.setTransform(396.65,186.65);
	this.instance_87.alpha = 0.8984;

	this.instance_88 = new lib.cuad2_f();
	this.instance_88.setTransform(326.65,186.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_88.alpha = 0.8984;

	this.instance_89 = new lib.Símbolo3();
	this.instance_89.setTransform(256.65,186.65);
	this.instance_89.alpha = 0.8984;

	this.instance_90 = new lib.cuad2_f();
	this.instance_90.setTransform(186.65,186.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_90.alpha = 0.8984;

	this.instance_91 = new lib.Símbolo3();
	this.instance_91.setTransform(116.65,186.65);
	this.instance_91.alpha = 0.8984;

	this.instance_92 = new lib.cuad2_f();
	this.instance_92.setTransform(46.65,186.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_92.alpha = 0.8984;

	this.instance_93 = new lib.Símbolo3();
	this.instance_93.setTransform(606.65,116.65);
	this.instance_93.alpha = 0.8984;

	this.instance_94 = new lib.cuad2_f();
	this.instance_94.setTransform(536.65,116.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_94.alpha = 0.8984;

	this.instance_95 = new lib.Símbolo3();
	this.instance_95.setTransform(466.65,116.65);
	this.instance_95.alpha = 0.8984;

	this.instance_96 = new lib.cuad2_f();
	this.instance_96.setTransform(396.65,116.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_96.alpha = 0.8984;

	this.instance_97 = new lib.Símbolo3();
	this.instance_97.setTransform(326.65,116.65);
	this.instance_97.alpha = 0.8984;

	this.instance_98 = new lib.cuad2_f();
	this.instance_98.setTransform(256.65,116.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_98.alpha = 0.8984;

	this.instance_99 = new lib.Símbolo3();
	this.instance_99.setTransform(186.65,116.65);
	this.instance_99.alpha = 0.8984;

	this.instance_100 = new lib.cuad2_f();
	this.instance_100.setTransform(116.65,116.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_100.alpha = 0.8984;

	this.instance_101 = new lib.Símbolo3();
	this.instance_101.setTransform(46.65,116.65);
	this.instance_101.alpha = 0.8984;

	this.instance_102 = new lib.cuad2_f();
	this.instance_102.setTransform(606.65,46.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_102.alpha = 0.8984;

	this.instance_103 = new lib.Símbolo3();
	this.instance_103.setTransform(536.65,46.65);
	this.instance_103.alpha = 0.8984;

	this.instance_104 = new lib.cuad2_f();
	this.instance_104.setTransform(466.65,46.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_104.alpha = 0.8984;

	this.instance_105 = new lib.Símbolo3();
	this.instance_105.setTransform(396.65,46.65);
	this.instance_105.alpha = 0.8984;

	this.instance_106 = new lib.cuad2_f();
	this.instance_106.setTransform(326.65,46.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_106.alpha = 0.8984;

	this.instance_107 = new lib.Símbolo3();
	this.instance_107.setTransform(256.65,46.65);
	this.instance_107.alpha = 0.8984;

	this.instance_108 = new lib.cuad2_f();
	this.instance_108.setTransform(186.65,46.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_108.alpha = 0.8984;

	this.instance_109 = new lib.Símbolo3();
	this.instance_109.setTransform(116.65,46.65);
	this.instance_109.alpha = 0.8984;

	this.instance_110 = new lib.cuad2_f();
	this.instance_110.setTransform(46.65,46.7,0.1014,0.1296,0,0,0,0,0.4);
	this.instance_110.alpha = 0.8984;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cuadrilla1, new cjs.Rectangle(0,0,653,512), null);


(lib.esc_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// reloj
	this.temp = new lib.temp_1();
	this.temp.name = "temp";
	this.temp.setTransform(196.55,368.75,1,1,0,0,0,37.5,25);

	this.timeline.addTween(cjs.Tween.get(this.temp).wait(1));

	// btn_finish
	this.btn_finish = new lib.btn_finalizar();
	this.btn_finish.name = "btn_finish";
	this.btn_finish.setTransform(45.75,486.2);
	new cjs.ButtonHelper(this.btn_finish, 0, 1, 2, false, new lib.btn_finalizar(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_finish).wait(1));

	// btn_next
	this.btn_next = new lib.btn_next();
	this.btn_next.name = "btn_next";
	this.btn_next.setTransform(45.75,486.2);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.btn_next(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_next).wait(1));

	// nota
	this.ind = new lib.ind();
	this.ind.name = "ind";
	this.ind.setTransform(111.85,75.75,1,1,0,0,0,113.5,57);

	this.timeline.addTween(cjs.Tween.get(this.ind).wait(1));

	// cuadrilla1
	this.cuadrilla1 = new lib.cuadrilla1();
	this.cuadrilla1.name = "cuadrilla1";
	this.cuadrilla1.setTransform(613.3,280.1,1,1,0,0,0,326.5,256);

	this.timeline.addTween(cjs.Tween.get(this.cuadrilla1).wait(1));

	// cuadrilla2
	this.cuadrilla2 = new lib.cuadrilla2();
	this.cuadrilla2.name = "cuadrilla2";
	this.cuadrilla2.setTransform(612.8,237.7,1,1,0,0,0,326,213.6);

	this.timeline.addTween(cjs.Tween.get(this.cuadrilla2).wait(1));

	// fndo
	this.instance = new lib.fondo_E2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.esc_2, new cjs.Rectangle(-1.6,0,961.6,560), null);


// stage content:
(lib.Ejercicio_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var _this = this;
		var esc_1 = _this.esc_1;
		var esc_2 = _this.esc_2;
		var esc_3 = _this.esc_3;
		
		esc_1.visible = false;
		esc_2.visible = false;
		esc_3.visible = false;
		
		var c1 = esc_2.cuadrilla1
		var cc1 = [c1.cf1, c1.cf2, c1.cf3, c1.cf4, c1.cf5, c1.cf6, c1.cf7, c1.cf8, c1.cf9, c1.cf10, c1.cf11, c1.cf12, c1.cf13, c1.cf14, c1.cf15, c1.cf16];
		var a1 = c1.obj
		var ac1 = [a1.f1, a1.f2, a1.f3, a1.f4, a1.f5, a1.f6, a1.f7, a1.f8, a1.f9, a1.f10, a1.f11, a1.f12, a1.f13, a1.f14, a1.f15, a1.f16]
		
		var c2 = esc_2.cuadrilla2
		var cc2 = [c2.cf1, c2.cf2, c2.cf3, c2.cf4, c2.cf5, c2.cf6, c2.cf7, c2.cf8, c2.cf9, c2.cf10, c2.cf11, c2.cf12, c2.cf13, c2.cf14, c2.cf15, c2.cf16];
		var a2 = c2.obj
		var ac2 = [a2.f1, a2.f2, a2.f3, a2.f4, a2.f5, a2.f6, a2.f7, a2.f8, a2.f9, a2.f10, a2.f11, a2.f12, a2.f13, a2.f14, a2.f15, a2.f16]
		
		var r1 = esc_2.ind.rep1
		var f1 = [r1.f1, r1.f2, r1.f3, r1.f4, r1.f5, r1.f6, r1.f7, r1.f8, r1.f9, r1.f10, r1.f11, r1.f12, r1.f13, r1.f14, r1.f15, r1.f16];
		
		var r2 = esc_2.ind.rep2
		var f2 = [r2.f1, r2.f2, r2.f3, r2.f4, r2.f5, r2.f6, r2.f7, r2.f8, r2.f9, r2.f10, r2.f11, r2.f12, r2.f13, r2.f14, r2.f15, r2.f16];
		
		var p_f = 0;
		
		var intento = 0;
		
		esc_1.visible = true;
		
		var _current = 0;
		var seg = 30;
		var min = 2;
		var time;
		var timer;
		
		function getRandomInt(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		
		function getRandomInt_1(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			var num;
			var estado = true;
			while(estado) {
				num = Math.floor(Math.random() * (max - min + 1)) + min;
				if(num % 2 == 0){
					estado = false;
				}
			}
			return num
		}
		
		function setListeners() {
			
			esc_1.btn_comenzar.addEventListener("click", _startGame.bind(this));
			esc_2.btn_next.addEventListener("click", _moveBkg.bind(this));
			esc_2.btn_finish.addEventListener("click", _end.bind(this));
			esc_3.btn_reload.addEventListener("click", _reload.bind(this));
		
			esc_2.btn_next.visible = true;
			esc_2.btn_finish.visible=false;
			console.log('true');
			
		}
		
		function _startGame(){
			
			esc_2.temp.txt_temp.text = `0${min} : ${seg}`;
			
			ocultarPaquetesInd();
			setProperties();
			
			_current = 2;
			
			moveStage();
			startClock();
			
			intento = intento+1;
			console.log(intento);
			//savebook(intento);
		}
		
		function _moveBkg(){
					
			hideComponent(r1);
			hideComponent(c1);
			showComponent(r2, 1000);
			showComponent(c2, 1000);
			
			esc_2.btn_next.visible=false;
			esc_2.btn_finish.visible=true;
		}
		
		function _end(){
			
			_current = 3;
			moveStage();
			feedback();
		}
		
		function _reload(){
			
			esc_1.visible = true;
			esc_2.visible = false;
			esc_3.visible = false;
			
			esc_1.x = 0;
			esc_2.x = 0;
			esc_3.x = 0;
			
			ocultarPaquetesInd();
			mostrarPaquetesInd();
			
			showComponent(r1, 0);
			showComponent(c1, 0);
			
			esc_2.btn_finish.visible = false;
			esc_2.btn_next.visible = true;
			
			p_f = 0;
			
			seg = 30;
			min = 2;
				
			_current = 0;
			
			//window.location.reload();
		}
		
		function hideComponent(evt) {
			
			createjs.Tween.get(evt)
				.to({ alpha: 0 }, 600, createjs.Ease.circInOut);
		}
		
		function showComponent(evt, delay) {
			
			evt.visible = true;
			evt.alpha = 0;
			createjs.Tween.get(evt)
				.wait(delay)
				.to({ alpha: 1 }, 600, createjs.Ease.circInOut);
		}
		
		// ****************
		
		function moveStage(){
			
			var newPage = "esc_" + _current; //pag
			var oldPage = "esc_" + (_current-1); //pagB
			_this[newPage].visible = true;
			_this.transition.gotoAndPlay(1);
			
			_this[newPage].x = 960;
			createjs.Tween.get(_this[newPage])
				.to({ x:0, visible:true }, 600, createjs.Ease.circInOut);
				
			createjs.Tween.get(_this[oldPage])
				.to({ x:-960, visible:false }, 600, createjs.Ease.circInOut)
				.call(hidePage);
		}
		
		function setProperties(){
				
			for( var j = 0 ; j < f1.length ; j++ ){
				f1[j].on("mousedown" , onMouseDown.bind(this));
				f1[j].on("pressmove" , onMouseMove.bind(this));
				f1[j].on("pressup" , onMouseUp.bind(this));
				f1[j].objective = cc1[j];
				f1[j].assets = ac1[j];
				f1[j].originX = f1[j].x;
				f1[j].originY = f1[j].y;
			}	
			
			for( var j = 0 ; j < f2.length ; j++ ){
				f2[j].on("mousedown" , onMouseDown.bind(this));
				f2[j].on("pressmove" , onMouseMove.bind(this));
				f2[j].on("pressup" , onMouseUp.bind(this));
				f2[j].objective = cc2[j];
				f2[j].assets = ac2[j];
				f2[j].originX = f2[j].x;
				f2[j].originY = f2[j].y;
			}
		}
		
		function hideComponent(evt) {
			
			createjs.Tween.get(evt)
				.to({ alpha: 0 }, 600, createjs.Ease.circInOut);
		}
		
		function showComponent(evt, delay) {
			
			evt.visible = true;
			evt.alpha = 0;
			createjs.Tween.get(evt)
				.wait(delay)
				.to({ alpha: 1 }, 600, createjs.Ease.circInOut);
		}
		
		function feedback(){
			
			var pass = 32;
			
			console.log(pass);
			console.log(p_f);
			
			if(p_f == pass){
				
				esc_3.nota_f.txt_nf.text = '¡ FELICITACIONES !\n Has logrado colocar todas las frutas en las cuadrillas correctas.';		
				esc_3.dst.visible = true;		
				//completeCanvas()
				
			}else{
				
				esc_3.nota_f.txt_nf.text = '¡ Has fallado !\n No has colocado todas las frutas en las cuadrillas correctas.';
				//esc_3.nota_f.bkg_nf.scaleY = 1.2;
				esc_3.dst.visible = false;
				//failCanvas()
			}
		}
		
		function hidePage(){
			
			var pag = "esc_" + (_current-1);
			_this[pag].visible=false;
		}
		
		function startClock(){
			
			timer = setInterval(function () {
				seg = seg-1;
				
				if(seg < 10){
					time = `0${min} : 0${seg}`;
				}else{
					time = `0${min} : ${seg}`
				}
				
				if(seg < 0){
					min = min-1;
					seg = 59;
				} else {
					esc_2.temp.txt_temp.text = time;
				}
				
				if(min <= 0 && seg <= 0){
					clearInterval(timer);
					timeOver()
				}
			}, 1000);
		}
		
		function timeOver(){
			
			_end();
		}
		
		function _end(){
			
			clearInterval(timer);
			_current = 3;
			moveStage();
			feedback();
		}
		
		function onMouseDown(e) {
		
			var item = e.currentTarget;
			item.offset = {x: 0 , y:0};
			
			var pt = item.parent.globalToLocal(e.stageX , e.stageY);
			item.offset.x = pt.x - item.x;
			item.offset.y = pt.y - item.y;
			item.drag = true;
			
		}
		
		function onMouseMove(e) {
			var item = e.currentTarget;
			if (item.drag) {
				var pt = item.parent.globalToLocal(e.stageX , e.stageY);
				item.x = pt.x - item.offset.x;
				item.y = pt.y - item.offset.y;
			}
		}
		
		function onMouseUp(e) {
			var item = e.currentTarget;
			var objective = item.objective;
			
			if (item.drag) {
				
				var pt = item.localToLocal(item.pc.x , item.pc.y , objective);
				if (objective.hitTest(pt.x , pt.y)) 
				{
					item.assets.visible = true;
					item.x = item.originX;
					item.y = item.originY;
					item.visible = false;
					//pieces--;
					p_f++;
					
				}
				else 
				{
					item.x = item.originX;
					item.y = item.originY;
				}
				
				item.drag = false;
			}
		}
		
		function ocultarPaquetesInd(){
			
			for(var x = 0; x < ac1.length ; x++ ){		
				
				ac1[x].visible = false;	
				ac2[x].visible = false;
			}
			
			r2.visible = false
			c2.visible = false
		}
		
		function mostrarPaquetesInd(){
			
			for(var x = 0; x < f1.length ; x++ ){		
				
				f1[x].visible = true;	
				f2[x].visible = true;
			}
		}
		
		setTimeout(function () {
			setListeners();
		}, 700);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// transition
	this.transition = new lib.transition();
	this.transition.name = "transition";
	this.transition.setTransform(574.9,280,1,1,0,0,0,574.9,280);

	this.timeline.addTween(cjs.Tween.get(this.transition).wait(1));

	// esc_3
	this.esc_3 = new lib.esc_3();
	this.esc_3.name = "esc_3";
	this.esc_3.setTransform(0,348.35,1,1,0,0,0,0,347.4);

	this.timeline.addTween(cjs.Tween.get(this.esc_3).wait(1));

	// esc_2
	this.esc_2 = new lib.esc_2();
	this.esc_2.name = "esc_2";
	this.esc_2.setTransform(0,279,1,1,0,0,0,0,278);

	this.timeline.addTween(cjs.Tween.get(this.esc_2).wait(1));

	// esc_1
	this.esc_1 = new lib.esc_1();
	this.esc_1.name = "esc_1";
	this.esc_1.setTransform(0,280.5,1,1,0,0,0,0,279.5);

	this.timeline.addTween(cjs.Tween.get(this.esc_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(478.4,278,865.5000000000001,420.79999999999995);
// library properties:
lib.properties = {
	id: '56DB4E3EE39E3B4FBC9C271091500EDC',
	width: 960,
	height: 560,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/btn_.png?1660801826644", id:"btn_"},
		{src:"images/btn_g.png?1660801826644", id:"btn_g"},
		{src:"images/cursor.png?1660801826644", id:"cursor"},
		{src:"images/destellos1.png?1660801826644", id:"destellos1"},
		{src:"images/destellos2.png?1660801826644", id:"destellos2"},
		{src:"images/fondo_E1.jpg?1660801826644", id:"fondo_E1"},
		{src:"images/fondo_E2.jpg?1660801826644", id:"fondo_E2"},
		{src:"images/fresa.png?1660801826644", id:"fresa"},
		{src:"images/kiwi.png?1660801826644", id:"kiwi"},
		{src:"images/manzana.png?1660801826644", id:"manzana"},
		{src:"images/naranja.png?1660801826644", id:"naranja"},
		{src:"images/nota_fin.png?1660801826644", id:"nota_fin"},
		{src:"images/panel.png?1660801826644", id:"panel"},
		{src:"images/pera.png?1660801826644", id:"pera"},
		{src:"images/platano.png?1660801826644", id:"platano"},
		{src:"images/rayitos1.png?1660801826644", id:"rayitos1"},
		{src:"images/rayitos2.png?1660801826644", id:"rayitos2"},
		{src:"images/soga.png?1660801826644", id:"soga"},
		{src:"images/soga1.png?1660801826644", id:"soga1"},
		{src:"images/tabla.png?1660801826644", id:"tabla"},
		{src:"images/temp.png?1660801826644", id:"temp"},
		{src:"images/tprobzoder.png?1660801826644", id:"tprobzoder"},
		{src:"images/tprobzoizq.png?1660801826644", id:"tprobzoizq"},
		{src:"images/tprocbza.png?1660801826644", id:"tprocbza"},
		{src:"images/tprocrpo.png?1660801826644", id:"tprocrpo"},
		{src:"images/uva.png?1660801826644", id:"uva"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['56DB4E3EE39E3B4FBC9C271091500EDC'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;