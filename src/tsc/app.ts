import '../scss/style.scss';
import { CanvasEngine, ICanvasEngine } from './utils/CanvasEngine';
import { DrawingModel, IDrawingModel } from './utils/DrawingModel';

var canvas: HTMLCanvasElement = <HTMLCanvasElement>window.document.getElementById("drawingCanvas");
var model: IDrawingModel = new DrawingModel();
var engine: ICanvasEngine = new CanvasEngine(canvas, model);
var colorPicker = window.document.getElementById("colorPicker");