import { IDrawingModel } from './DrawingModel';
import { IPoint, IDraw, IDrawingShape, Point } from './Shapes';
import { DrawingToolType, CanvasEngineAction } from './Enums';



export interface ICanvasEngine {
    invalidate();
    clear();
    draw();
}

export class CanvasEngine implements ICanvasEngine {
    private context: CanvasRenderingContext2D;
    private action: CanvasEngineAction = CanvasEngineAction.None;
    private _dragOffsetX: number = 0;
    private _dragOffsetY: number = 0;
    constructor(private _canvas: HTMLCanvasElement, private _model: IDrawingModel) {
        this.context = this._canvas.getContext("2d");
        //this._canvas.addEventListener('selectstart',
        //    (e) => { e.preventDefault(); return false; },
        //    false);
        this._canvas.addEventListener('mousedown', (e) => this._mousedown(e), true);
        this._canvas.addEventListener('mousemove', (e) => this._mousemove(e), true);
        this._canvas.addEventListener('mouseup', (e) => this._mouseup(e), true);
    }
    public clear() {
        this.context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
    public invalidate() {
        window.requestAnimationFrame(() => this.draw());
    }
    public draw() {
        var shapes: Array<IDraw> = this._model.shapes;
        this.clear();
        if (shapes) {
            for (var i = 0; i < shapes.length; i++) {
                this.context.save();
                shapes[i].draw(this.context);
                this.context.restore();
            }
        }
    }   

    private _getMousePosition(canvas: HTMLCanvasElement, e: MouseEvent): IPoint {
        var rect = canvas.getBoundingClientRect(),
            root = window.document.documentElement;
        var mouseX = e.clientX - rect.left - root.scrollLeft;
        var mouseY = e.clientY - rect.top - root.scrollTop;
        return new Point(mouseX, mouseY);
    }
    private _setShapeAsSelected(shape: IDrawingShape) {
        shape.isSelected = true;
        this._model.selection = shape;
        this.invalidate();
    }
    private _clearEngineState() {
        this.action = CanvasEngineAction.None;
        this._model.selection = null;
        this.invalidate();
    }
    private _bringToFront(index: number) {
        var shape = this._model.shapes[index];
        if (shape) {
            this._model.shapes.splice(index, 1);
            this._model.shapes.push(shape);
            this.invalidate();
        }
    }
    private _mousedown(e) {
        var mouse: IPoint = this._getMousePosition(this._canvas, e);
        var i, shape;
        if (this._model.shapes) {
            for (i = this._model.shapes.length - 1; i >= 0; i--) {
                this._model.shapes[i].isSelected = false;
            }
        }
        if (this._model.getDrawingTool() != DrawingToolType.Select) {
            shape = this._model.getNewShape(mouse);
            this._model.addShape(shape);
            this.action = CanvasEngineAction.Resize;
            this._setShapeAsSelected(shape);
            return;
        }
        else if (this._model.shapes) {
            for (i = this._model.shapes.length - 1; i >= 0; i--) {
                this.action = this._model.shapes[i].getClickLocationAction(mouse, this.context);
                switch (this.action) {
                    case CanvasEngineAction.Resize:
                    case CanvasEngineAction.Move:
                        var moveOffsetPoint = this._model.shapes[i].getMoveOffset(mouse);
                        this._dragOffsetX = moveOffsetPoint.x;
                        this._dragOffsetY = moveOffsetPoint.y;
                        this._setShapeAsSelected(this._model.shapes[i]);
                        this._bringToFront(i);          
                        return;
                    default:
                        break;
                }
            }
        }
        this._clearEngineState();
    }    
    private _mousemove(e) {
        var mouse: IPoint = this._getMousePosition(this._canvas, e);;
        switch (this.action) {
            case CanvasEngineAction.Move:
                var newLocationX = mouse.x - this._dragOffsetX;
                var newLocationY = mouse.y - this._dragOffsetY;
                var newLocation = new Point(newLocationX, newLocationY);
                this._model.selection.move(newLocation);
                this.invalidate();
                break;
            case CanvasEngineAction.Resize:
                this._model.selection.resizeToLocation(mouse);
                this.invalidate();
                break;
            case CanvasEngineAction.None:
            default:
                var mousePointer = "auto";
                if (this._model.shapes) {
                    for (var i = this._model.shapes.length - 1; i >= 0; i--) {
                        if (this._model.shapes[i].inResizeZone(mouse) ||
                            this._model.shapes[i].contains(mouse, this.context)) {
                            mousePointer = this._model.shapes[i].getCursorType(mouse);
                            break;
                        }
                    }
                }
                window.document.body.style.cursor = mousePointer;
                break;
        }
    }
    private _mouseup(e) {
        var selection = this._model.selection;
        if (selection) {            
            selection.isSelected = false;
        }
        this._clearEngineState();
    }
}